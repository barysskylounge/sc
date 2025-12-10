# Couple Socials

A modern social platform for couples built with Next.js, TypeScript, and Supabase.

## Features

- 🎨 Modern, responsive UI with TailwindCSS
- 🔐 Authentication powered by Supabase
- 📝 Blog and content management
- 🌐 SEO optimized with automatic sitemap generation
- 🚀 Subdomain routing for dashboard access
- 📱 Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd couple-socials
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase credentials:
     - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Subdomain Development

To test subdomain routing locally (e.g., `dashboard.localhost`), you may need to modify your hosts file or use a tool like `localhost.run`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes sitemap generation)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
couple-socials/
├── src/
│   ├── app/              # Next.js app directory (pages & routes)
│   ├── components/       # React components
│   ├── lib/             # Utility functions and libraries
│   └── proxy.ts         # Proxy for subdomain routing
├── content/             # Markdown content files
├── public/              # Static assets
└── ...config files
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Supabase
- **Markdown**: Remark & Rehype
- **SEO**: next-sitemap

## Deployment

This project is ready to be deployed on Vercel, Netlify, or any platform that supports Next.js.

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

For custom domain with subdomain support, configure your DNS settings and add the domains in Vercel's domain settings.

## License

See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
