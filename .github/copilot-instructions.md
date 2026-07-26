# Copilot Instructions

## Build, Test, and Lint Commands

### Development

- `bun run dev` - Start Vite dev server with HMR at `http://localhost:5173`
- `bun run build` - Compile TypeScript with `tsc -b`, then build with Vite for production
- `bun run preview` - Preview production build locally

### Linting and Type Checking

- `bun run lint` - Run ESLint on all files (also runs on pre-commit via Husky)
- `bun run check` - Type check with TypeScript without emitting (`tsc --noEmit`)
- `bun run lint` with `--fix` flag: ESLint handles fixing (used in pre-commit for staged files)

### Pre-commit Hooks

Husky runs `lint-staged` automatically:

- Prettier formats all changed files
- ESLint fixes `.js` files
- ESLint + Prettier fix `.{js,css,md}` files

## Architecture

### Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (button, timeline, etc.)
│   ├── sections/        # Page sections (hero, projects, experiences, etc.)
│   ├── magicui/         # Advanced animated components
│   └── links/           # Link components
├── pages/               # Page components (portfolio, under-development)
├── lib/                 # Utilities (cn() for class merging)
├── assets/              # Static assets and SVG icons
├── App.tsx              # Root component with dev mode toggle
├── main.tsx             # React entry point
└── index.css            # Global styles (Tailwind)
```

### Tech Stack

- **Framework**: React 19.1 with TypeScript (strict mode enabled)
- **Build Tool**: Vite 6 with SWC for Fast Refresh
- **Styling**: Tailwind CSS v4, PostCSS, Autoprefixer
- **Animations**: Motion (Framer Motion compatible)
- **UI Components**: Radix UI (slot component), Class Variance Authority for variants
- **Icons**: lucide-react, react-icons
- **Package Manager**: Bun

### Component Patterns

#### UI Components

Use Class Variance Authority (CVA) for variant-based styling:

```tsx
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "...",
      ghost: "...",
    },
    size: {
      default: "...",
      lg: "...",
    },
  },
});
```

Use `cn()` (from `@/lib/utils`) to merge class names when combining Tailwind classes:

```tsx
className={cn("base-classes", condition && "additional-classes")}
```

#### Section Components

Return typed JSX:

```tsx
export const SectionName = (): React.JSX.Element => {
  return <div>{/* content */}</div>;
};
```

#### Animations

Import Motion from `motion/react` (not `framer-motion`):

```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* content */}
</motion.div>;
```

## Key Conventions

### Imports

- Use path alias `@/` for imports from src: `import Button from "@/components/ui/button"`
- Named exports for components, default for pages

### Naming

- Component files: kebab-case (`hero-section.tsx`, `social-link.tsx`)
- Component names: PascalCase (export `HeroSection`, `SocialLink`)
- Sections organized under `components/sections/`
- Reusable UI components under `components/ui/`

### TypeScript

- Strict mode enabled (`strict: true`)
- No unused locals or parameters (`noUnusedLocals: true`, `noUnusedParameters: true`)
- Return types required on exported functions (especially components)
- Use `React.JSX.Element` for component return types

### Styling

- Tailwind CSS v4 (no need to import, used in className)
- Dark mode support via CSS variables
- Custom animations defined in Tailwind config
- Responsive design with `sm:`, `md:`, `lg:` prefixes

### Code Quality

- ESLint rules: React hooks, React Refresh
- React Hooks rules enforced
- Prettier formatting (default config)
- Type-aware linting with TypeScript ESLint

### Development Modes

The App component accepts a `dev` prop to toggle between:

- `dev={true}` - Shows `<UnderDevelopment />` page
- `dev={false}` - Shows production `<PortfolioPage />`

Currently set to `dev={false}` in `main.tsx`.
