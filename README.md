# React Native UI Kit

A comprehensive UI component library for React Native applications. This package provides a set of reusable, customizable, and accessible components to speed up your React Native development.

## 🚀 Features

- 🎨 Modern and clean design
- 📱 Fully compatible with React Native
- 🎯 TypeScript support
- 🌙 Dark/Light mode support
- 📦 Easy to install and use
- 🧩 Modular and customizable components
- 📚 Well-documented with examples

## 📋 Project Structure

```
rn_ui_kit/
├── src/
│   ├── components/         # All UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   └── ...
│   ├── theme/             # Theme configuration
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   └── spacing.ts
│   ├── hooks/             # Custom hooks
│   └── utils/             # Utility functions
├── example/               # Example app
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment

### Installation

1. Clone the repository:

```bash
git clone https://github.com/duyluu/rn-ui-kit.git
cd rn-ui-kit
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 📦 Building the Package

1. Build the package:

```bash
npm run build
# or
yarn build
```

2. Test the build locally:

```bash
npm pack
```

## 🚀 Publishing to npm

1. Update version in package.json
2. Build the package
3. Login to npm:

```bash
npm login
```

4. Publish:

```bash
npm publish
```

## 📚 Usage in Your Project

1. Install the package:

```bash
npm install @duyluu/rn-ui-kit
# or
yarn add @duyluu/rn-ui-kit
```

2. Import and use components:

```typescript
import { Button, Card } from '@duyluu/rn-ui-kit';

// Use components
<Button title="Click me" onPress={() => {}} />
<Card>
  <Text>Card content</Text>
</Card>
```

## 🎨 Theme Customization

The UI Kit supports theme customization. You can override the default theme:

```typescript
import { ThemeProvider } from '@duyluu/rn-ui-kit';

const customTheme = {
  colors: {
    primary: '#your-color',
    // ... other colors
  },
  // ... other theme properties
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

## 📝 Development Roadmap

### Phase 1: Core Setup

- [x] Initialize project structure
- [ ] Set up TypeScript configuration
- [ ] Configure build system
- [ ] Set up testing environment
- [ ] Create basic documentation

### Phase 2: Basic Components

- [ ] Button component
- [ ] Card component
- [ ] Input component
- [ ] Typography components
- [ ] Layout components

### Phase 3: Advanced Features

- [ ] Theme system
- [ ] Dark/Light mode support
- [ ] Form components
- [ ] Navigation components
- [ ] Animation utilities

### Phase 4: Documentation & Examples

- [ ] Comprehensive documentation
- [ ] Example app
- [ ] Usage examples
- [ ] API documentation
- [ ] Installation guide

### Phase 5: Publishing & Maintenance

- [ ] npm package setup
- [ ] CI/CD pipeline
- [ ] Version management
- [ ] Issue tracking
- [ ] Community guidelines

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please:

- Open an issue
- Check the documentation
- Contact the maintainers

## 🙏 Acknowledgments

- React Native team
- All contributors
- The open-source community
