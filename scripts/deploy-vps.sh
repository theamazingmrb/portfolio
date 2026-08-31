#!/bin/bash
# Deploy script for DigitalOcean VPS (also works on Hetzner, Linode, etc.)
# Run this on your VPS after initial SSH login

set -e

echo "=== Portfolio Chatbot VPS Deploy ==="
echo

# --- Variables ---
DOMAIN="billieheidelberg.com"
REPO_URL="https://github.com/yourname/portfolio.git"
APP_DIR="/var/www/portfolio"
PORT=3000

# --- System updates ---
echo "[1/11] Updating system..."
apt-get update -y
apt-get upgrade -y

# --- Setup swap (critical for 1GB RAM droplets) ---
echo "[2/11] Setting up swap..."
if [ ! -f /swapfile ]; then
  fallocate -l 2G /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

# --- Install dependencies ---
echo "[3/11] Installing dependencies..."
apt-get install -y curl git python3 python3-pip nginx certbot python3-certbot-nginx ufw

# --- Install Ollama ---
echo "[4/11] Installing Ollama..."
curl -fsSL https://ollama.com/install.sh | sh

# Pull models (gemma3:4b for chat, nomic-embed-text for embeddings)
echo "[4/11] Pulling AI models..."
ollama pull gemma3:4b
ollama pull nomic-embed-text

# Keep model loaded in memory (no idle unload)
echo "OLLAMA_KEEP_ALIVE=-1" >> /etc/environment

# Create systemd service for Ollama
cat > /etc/systemd/system/ollama.service << 'EOF'
[Unit]
Description=Ollama Server
After=network.target

[Service]
ExecStart=/usr/local/bin/ollama serve
Restart=always
User=root
Environment="HOME=/root"
Environment="OLLAMA_KEEP_ALIVE=-1"

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable ollama
systemctl start ollama

# --- Install Node.js ---
echo "[5/11] Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# --- Install pnpm and PM2 ---
echo "[6/11] Installing pnpm and PM2..."
npm install -g pnpm pm2

# --- Clone repo ---
echo "[7/11] Cloning repo..."
if [ -d "$APP_DIR" ]; then
  cd "$APP_DIR" && git pull
else
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

# --- Install dependencies ---
echo "[8/11] Installing dependencies..."
pnpm install

# --- Build Next.js ---
echo "[9/11] Building Next.js app..."
pnpm build

# --- Configure PM2 ---
echo "[10/11] Configuring PM2..."
pm2 delete portfolio 2>/dev/null || true
pm2 start "pnpm start" --name portfolio -- --port $PORT
pm2 startup
pm2 save

# --- Configure nginx ---
echo "[Bonus] Configuring nginx..."
cat > /etc/nginx/sites-available/portfolio << EOF
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# --- Configure firewall ---
ufw allow ssh
ufw allow http
ufw allow https
ufw --force enable

# --- SSL (run after DNS points to this server) ---
echo
echo "=== Setup complete! ==="
echo
echo "Next steps:"
echo "1. Point your domain to this server's IP"
echo "2. Run: certbot --nginx -d $DOMAIN"
echo "3. Access your portfolio at http://$DOMAIN"
echo
echo "Useful commands:"
echo "  pm2 status              # Check app status"
echo "  pm2 logs portfolio      # View app logs"
echo "  pm2 restart portfolio   # Restart app"
echo "  systemctl status ollama # Check Ollama"
echo "  ollama list             # List pulled models"
