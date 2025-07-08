<div align="center">

# 🕹️ Pixelator

*Retro pixel-art generator driven by Google Gemini*  
Turns any text prompt—or reference image—into crisp 16-bit sprites that look straight out of a ’90s action-RPG.

![Pixelator demo screenshot](assets/screenshot.png)

[![MIT license](https://img.shields.io/badge/license-MIT-ff69b4.svg)](LICENSE)&nbsp;
[![Made with Gemini](https://img.shields.io/badge/Made%20with-Google%20Gemini-brightgreen)](https://aistudio.google.com/app)

</div>

---

## ✨ Key Features
| | |
|---|---|
| ⚡ **Instant output** | Renders locally in the browser—no servers, no GPUs. |
| 🧠 **AI-powered** | Uses *imagen-3.0-generate-002* via the official `@google/genai` SDK. |
| 🖼️ **Image-to-pixel-art** | Drop any picture and get an 8-bit remix. |
| 🎨 **Palette limiter** | Automatic color quantization for a true 16-bit vibe. |
| 📦 **Zero-config** | One env var (`API_KEY`) and `npm start`—that’s it. |
| 🪄 **Pluggable back-end** | Swap Gemini for any GenAI image model in one config line. |

---

## 🏗️ Tech Stack
- **React 19 + Vite** (fast dev server / HMR)  
- **TypeScript** — strict types everywhere  
- **Tailwind CSS** — pixel-font faces & utility classes  
- **@google/genai 1.8** — lightweight wrapper to call Gemini from the browser  
- **Sharp + Palette.js** (optional serverless function) — 16-color quantization for downloads

---

## 🚀 Demo

| Text prompt | Result |
|-------------|--------|
| `a Saudi man with a sword fighting a dragon` | ![dragon thumbnail](assets/dragon_thumb.png) |
| `cyberpunk cat riding a hoverbike` | ![cybercat thumbnail](assets/cat_thumb.png) |

*(Run it locally or fork & deploy to Vercel/Netlify for a live link.)*

---

## ⏱️ Quick Start


# 1 Clone
git clone https://github.com/hrunx/pixelator.git
cd pixelator

# 2 Deps
npm i            # Node ≥20.x

# 3 Key
echo 'VITE_API_KEY=•••YOUR_GEMINI_KEY•••' > .env.local

# 4 Run
npm run dev      # http://localhost:5173


Google AI Studio → “Create API key” → copy → paste into .env.local.

Production build

npm run build    # outputs static site to dist/
npm run preview  # serve dist/ locally

Deploy dist/ to any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel).

⸻

🖥️ Usage
	1.	Enter a prompt – e.g. “knight vs slime in a forest”.
	2.	Hit Generate. Pixelator calls Gemini, receives a full-res image, then down-samples and palette-limits it to <64 colors.
	3.	Download PNG or right-click → Save. (Animated GIF export in roadmap.)

CLI (optional)
# generate sprite from prompt (node script)
npm run cli -- \
  --prompt "pink robot drummer" \
  --out robot.png --width 512 --height 512

🗂️ Project Structure

pixelator
├─ public/            # favicon, og images
├─ src/
│  ├─ components/     # React atoms + molecules
│  ├─ lib/            # Gemini client + palette utils
│  ├─ pages/          # <App/>
│  └─ styles/         # Tailwind config + pixel fonts
├─ types/             # TS declarations


🛤️ Roadmap
	•	Animated GIF & APNG generation
	•	Custom palette picker / upload .gpl
	•	Batch generation mode
	•	Arabic UI + RTL support
	•	PWA offline caching

Open a discussion or PR if you want to tackle something.

⸻

🤝 Contributing
	1.	Fork the repo → create a branch (feat/your-thing)
	2.	Commit lint-clean (npm run lint:fix)
	3.	PR against main – small, focused, well-described
	4.	Respect the code-style (ESLint + Prettier) and keep screenshots in assets/.

⸻

📝 License

MIT © 2025 HWAH. Do whatever you want; attribution welcome but not required.

⸻

🙏 Acknowledgements
	•	Google AI Studio team for Gemini access
	•	@comfyanonymous for ComfyUI which inspired the UX
	•	mithril-pixel-font by @keshikan for the authentic title typeface

Made with ☕ &   :(){ :|:& };:.
└─ scripts/           # CLI + build helpers
