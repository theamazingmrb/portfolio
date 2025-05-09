---
title: "Building Smart Trader: The SaaS I Needed as a Trader"
date: "2025-05-05"
---

How I combined GPT, Supabase, and candlestick charting to build the trade journaling app I wish I had.

---

## 🧠 Why I Built Smart Trader

Like most traders, I struggled with discipline more than strategy.

- I’d break rules.
- Overtrade.
- Exit too early.
- Forget to journal consistently.

Existing trade journals felt either too clunky or too generic. I wanted a tool that **understood ICT concepts**, tracked **my psychology**, and gave **AI-powered feedback** on each trade. So I built it.

---

## 🧰 Tech Stack Overview

Here’s what I used to build Smart Trader:

- **Frontend:** React + TypeScript + Tailwind CSS  
- **Backend & Auth:** Supabase (PostgreSQL, Auth, Storage)  
- **Charts:** ApexCharts for clean, interactive candlestick charts  
- **AI Feedback:** GPT API via OpenAI  
- **Deployment:** Vercel for frontend, Supabase handles the rest  

---

## ✍️ Journaling with Context

Each trade entry includes:

- **Ticker, direction, entry/exit details**
- **Entry/exit reasoning and emotional state**
- **Checkmarks for plan adherence**
- **Tags for ICT elements** (e.g., SMT, FVG, OB)

No more “guess and go.” I can now track my actual thinking—and patterns—instead of just prices.

---

## 🤖 GPT-Powered Trade Analysis

When you submit a trade, Smart Trader sends the data to GPT and returns structured analysis across:

1. **Risk Management**
2. **Entry & Exit Execution**
3. **Setup Validity**
4. **Emotional Discipline**
5. **ICT Concepts Detected**

> *“Your stop loss placement exposed you to more risk than your expected reward. Consider a tighter SL at the previous high.”*

That kind of feedback helps you grow—not just record.

---

## 📊 Visualizing Progress

- Interactive charts show each trade entry/exit on real candlesticks.
- Weekly stats summarize:
  - Win/loss ratio
  - Rule violations
  - Most used ICT concepts
- Heatmaps for emotions and plan adherence

The goal is **behavioral awareness**, not just win tracking.

---

## 🚀 What I Learned Building It

- **Start small.** MVP was just a form + chart + notes field.
- **AI needs context.** Prompt engineering was everything.
- **Supabase is perfect** for indie SaaS—it scales and saves time.
- **Design matters.** Traders need clarity, not complexity.

---

## 🎯 What’s Next

- Mobile view improvements  
- Custom GPT prompt tuning per user  
- Trade replay mode with visual overlays  
- Optional Telegram integration for quick log entries  

---

## 🙌 Final Thoughts

Smart Trader started as a personal fix and evolved into something much more. It blends:
- The discipline of journaling  
- The logic of ICT  
- The power of AI  

If you're a trader tired of overthinking and underreviewing—this was built for you.

[→ Try Smart Trader (soon)](https://billieheidelberg.com) or hit me up if you want early access.
