#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

OUTPUT="public/documents/Billie_Heidelberg_Resume_Senior_Full_Stack_Engineer.pdf"
TMP_HTML="$(mktemp /tmp/resume.XXXXXX.html)"

cleanup() {
  rm -f "$TMP_HTML"
}
trap cleanup EXIT

pandoc -f markdown -t html \
  --embed-resources --standalone \
  -c resume.css \
  --metadata pagetitle="Billie Paul Heidelberg Jr." \
  -s \
  -o "$TMP_HTML" \
  resume.md

if [[ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else
  CHROME="google-chrome"
fi

"$CHROME" \
  --headless \
  --run-all-compositor-stages-before-draw \
  --no-pdf-header-footer \
  --print-to-pdf="$OUTPUT" \
  "file://$TMP_HTML"

echo "Resume PDF generated: $OUTPUT"
