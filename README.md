# 🐾 Borzolini - AI-Powered Pet Healthcare for All Pets.

> **Named after Borzolini, our beloved companion** - Simplifying pet care through AI recommendations, easy vet scheduling, and quality clinic ratings.

![Borzolini Logo](https://img.shields.io/badge/Borzolini-All%20Pet%20Care-orange?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyUzYuNDggMjIgMTIgMjJTMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMiAyWiIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.0-ff69b4?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Docker](https://img.shields.io/badge/Docker-Desktop-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Umami](https://img.shields.io/badge/Umami-Analytics-000000?style=flat-square&logo=umami&logoColor=white)](https://umami.is/)

## 🌟 About Borzolini

**Borzolini** is an AI-powered pet healthcare platform designed for all pets. Named after our beloved companion **Borzolini**, this platform makes pet care simple through:

- 🤖 **AI Care Recommendations** - Personalized daily care tips for pets
- 📅 **Smart Appointment Scheduling** - Easy vet booking with pets specialists
- 🎥 **Video Vet Consultations** - Quick health assessments and advice
- ⭐ **Clinic Quality Scores** - Ratings focused on pets expertise

## 🚀 Features

### MVP Core Features

- **AI Health Recommendations**: Get breed-specific care tips and reminders
- **Vet Appointment Scheduling**: Find and book with pet specialists
- **Video Consultations**: Connect with qualified veterinarians instantly
- **Clinic Ratings**: Quality scores and reviews from pet owners

### Pet Specialization

- Breed-specific health patterns and care routines for all pets
- Dental care reminders (pets are prone to dental issues)
- Grooming schedules and maintenance
- Health monitoring and preventive care
- Personalized care recommendations

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Radix UI primitives

### Development Tools

- **Package Manager**: pnpm
- **Build Tool**: Turbopack (Next.js 15)
- **Code Quality**: ESLint + TypeScript
- **Version Control**: Git with conventional commits

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/shayanea/borzolini.git
cd borzolini/web

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Type checking
pnpm type-check
```

## 📁 Project Structure

```
web/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── sections/      # Page sections
│   ├── constants/         # App constants
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript definitions
├── public/               # Static assets
└── messages/            # Internationalization (future)
```

## 🎨 Design System

### Color Palette

- **Primary Navy**: `#14213d` - Trust and healthcare authority
- **Accent Orange**: `#fca311` - Warmth and energy
- **Pure White**: `#ffffff` - Clarity and cleanliness
- **Success Green**: `#059669` - Health and positive outcomes

### Typography

- **Font**: Inter (optimized with Next.js)
- **Headings**: 700-600 weight
- **Body**: 400 weight
- **Mobile-first**: Responsive font scaling

## 🐾 The Borzolini Story

Borzolini was inspired by **Borzolini**, a beloved companion whose healthcare journey highlighted the need for:

- Breed-specific care guidance
- Easy access to specialized veterinarians
- Reliable clinic quality information
- Proactive health management

_"Borzolini isn't just a companion - they're the inspiration and beta tester for the future of pet healthcare!"_

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel --prod
```

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `style:` - Code formatting
- `refactor:` - Code refactoring
- `test:` - Adding tests

## 📊 Roadmap

### Phase 1 (Current) - MVP Landing Page

- [x] Landing page with core features
- [x] Responsive design
- [x] Borzolini case study showcase
- [x] Pet specialization messaging for all pets

### Phase 2 - Core Platform

- [x] User authentication
- [x] Pet profile creation
- [x] AI recommendation engine
- [x] Vet appointment booking system

### Phase 3 - Advanced Features

- [ ] Video consultation integration
- [ ] Clinic rating system
- [ ] Mobile app development
- [ ] Multi-language support

## 📄 License

This project is private and proprietary to Borzolini.

## 📞 Contact

- **Website**: [borzolini.com](https://borzolini.com)
- **Email**: hello@borzolini.com
- **GitHub**: [@shayanea](https://github.com/shayanea)

---

<div align="center">
  <strong>Made with ❤️ for pets everywhere</strong><br>
  <em>Inspired by Borzolini 🐾</em>
</div>
