# Development Guide

## 🛠️ Development Environment Setup

This project is configured with professional development tools to maintain code quality and consistency.

### Prerequisites

- **Node.js**: 18+
- **pnpm**: Latest version (recommended package manager)
- **VS Code**: With recommended extensions

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

## 📋 Available Scripts

### Development

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
```

### Code Quality

```bash
pnpm lint         # Run ESLint and fix issues automatically
pnpm lint:check   # Check for linting issues without fixing
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
pnpm type-check   # Run TypeScript type checking
```

### Git Workflow

```bash
pnpm commit       # Stage and commit with conventional commit format
pnpm pre-commit   # Run pre-commit hooks manually
```

### Maintenance

```bash
pnpm clean        # Clean build artifacts and caches
```

## 🔧 Code Quality Tools

### ESLint Configuration

- **Next.js** optimized rules
- **TypeScript** strict checking
- **React** best practices
- **Accessibility** (jsx-a11y) rules
- **Import sorting** and organization
- **Unused imports** removal

### Prettier Configuration

- **Single quotes** for strings
- **Semicolons** always
- **120 character** line width
- **2 spaces** for indentation
- **Trailing commas** in ES5

### Git Hooks (Husky)

- **Pre-commit**: Runs lint-staged to format and lint staged files
- **Commit-msg**: Validates commit messages follow conventional format

### Conventional Commits

Use the following format for commit messages:

```
type(scope): description

feat: add new user authentication
fix: resolve header navigation bug
docs: update README with setup instructions
style: format code with prettier
refactor: extract reusable button component
test: add unit tests for auth service
chore: update dependencies
```

## 📁 Project Structure

```
web/
├── .husky/              # Git hooks
├── .vscode/             # VS Code settings and extensions
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   └── sections/   # Page sections
│   ├── constants/       # App constants
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript definitions
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── commitlint.config.js # Commit linting rules
└── package.json        # Dependencies and scripts
```

## 🎨 Component Development

### Creating New Components

1. Use TypeScript with explicit prop types
2. Follow the existing component structure
3. Add proper JSDoc comments for complex components
4. Use Tailwind CSS for styling
5. Include proper accessibility attributes

### Example Component Structure

```typescript
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

/**
 * Reusable component with animation and variants
 */
export function Component({
  children,
  className,
  variant = 'primary'
}: ComponentProps) {
  return (
    <motion.div
      className={cn('base-styles', variantStyles[variant], className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to production
vercel --prod
```

### Manual Build

```bash
# Build and start
pnpm build
pnpm start
```

## 📊 Code Quality Metrics

The project maintains high code quality through:

- **TypeScript** strict mode
- **ESLint** error-free code
- **Prettier** consistent formatting
- **Conventional commits** clear git history
- **Pre-commit hooks** automated quality checks

## 🤝 Contributing

1. Follow the conventional commit format
2. Ensure all linting and type checks pass
3. Test your changes thoroughly
4. Update documentation if needed
5. Create meaningful pull request descriptions

## 🆘 Troubleshooting

### Common Issues

**ESLint errors after setup:**

```bash
pnpm lint --fix
```

**Prettier formatting issues:**

```bash
pnpm format
```

**TypeScript errors:**

```bash
pnpm type-check
```

**Git hooks not working:**

```bash
chmod +x .husky/pre-commit .husky/commit-msg
```

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [TypeScript best practices](https://typescript-eslint.io/)
- Consult [Tailwind CSS docs](https://tailwindcss.com/docs)
- Reference [Framer Motion guides](https://www.framer.com/motion/)

## 📈 Performance

The project is optimized for performance with:

- **Next.js 15** with Turbopack
- **React 19** latest features
- **Framer Motion** optimized animations
- **Tailwind CSS** purged styles
- **TypeScript** compile-time optimizations
