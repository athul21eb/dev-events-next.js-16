# Events App

A modern **Next.js 16** application built with a clean architecture, powerful integrations, and a smooth developer experience.

## 🚀 Tech Stack

* **Next.js 16** – App Router, Server Actions
* **React 19** – Latest React features
* **Tailwind CSS v4** – Utility-first styling
* **MongoDB + Mongoose** – Database integration
* **Cloudinary** – Media storage & optimization
* **Lucide Icons** – Clean and customizable icons
* **PostHog** – Analytics & event tracking
* **OGL** – 3D WebGL rendering

## 📦 Project Structure

This project was bootstrapped with `create-next-app` and configured with:

* ESLint + Next.js linting rules
* TypeScript
* Tailwind v4
* React Compiler

## 🛠️ Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit the app at: **[http://localhost:3000](http://localhost:3000)**

## 📁 Key Directories

* `app/` – Main routes & layout
* `components/` – Reusable UI components
* `lib/` – Utilities, DB connections, helpers
* `public/` – Static assets

## 🔌 Environment Variables

Create a `.env` file:

```
MONGODB_URI=your-mongodb-uri
NODE_ENV=development

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_URL=cloudinary://<key>:<secret>@<cloudname>

# PostHog
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

NEXT_PUBLIC_BASE_URL=http://localhost:3000

```

## 📜 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

## 📦 Dependencies

Includes libraries like:

* `mongoose`
* `cloudinary`
* `posthog-js`
* `lucide-react`
* `tailwind-merge`

## 📤 Deployment

The recommended deployment platform is **Vercel**.
Deploy instantly: [https://vercel.com](https://vercel.com)

## 🤝 Contributing

Pull requests and feedback are welcome.

## 📄 License

This project is private and not licensed for public reuse.
