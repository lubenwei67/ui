# UI Component Library

A modern, lightweight UI component library built with React and TypeScript.

## Features

- 🎨 Clean and modern design
- 💪 TypeScript support with full type definitions
- 🎯 Accessible and semantic HTML
- 🔧 Customizable through props and className
- 📦 Tree-shakeable and optimized for production

## Installation

```bash
npm install @lubenwei67/ui
```

## Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- All standard HTML button attributes

**Example:**
```tsx
import { Button } from '@lubenwei67/ui';

<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>
```

### Input

A flexible input component with label, error, and helper text support.

**Props:**
- `label`: Optional label text
- `error`: Error message to display
- `helperText`: Helper text to display below the input
- All standard HTML input attributes

**Example:**
```tsx
import { Input } from '@lubenwei67/ui';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={errors.email}
  helperText="We'll never share your email"
/>
```

### Card

A container component for grouping related content.

**Props:**
- `title`: Optional card title
- `footer`: Optional footer content
- `className`: Additional CSS classes
- `children`: Card content

**Example:**
```tsx
import { Card } from '@lubenwei67/ui';

<Card
  title="Welcome"
  footer={<Button>Learn More</Button>}
>
  <p>This is a card component.</p>
</Card>
```

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

### Demo

Open `examples/index.html` in your browser to see all components in action.

## License

MIT