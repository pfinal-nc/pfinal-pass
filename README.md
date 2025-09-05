# pfinal-pass

A minimal, secure, and lightweight online password generator built with Nuxt 4 and Nuxt UI 3.3.

## ✨ Features

- **🔒 Completely Local Generation**: All passwords are generated in your browser without going through any server
- **🛡️ Privacy Protection**: No data collection, no storage, no transmission, protecting your privacy
- **⚡ Fast & Convenient**: One-click generation, one-click copy, real-time strength assessment
- **🎛️ Custom Rules**: Support for custom password length (6-32 characters) and character types
- **📊 Strength Assessment**: Real-time password strength display with visual indicators
- **🌙 Dark Theme**: Beautiful dark theme interface
- **📱 Responsive Design**: Optimized for both desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pfinal-pass.git
cd pfinal-pass

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Build for Production

```bash
# Generate static site
pnpm run generate

# Preview production build
pnpm run preview
```

## 🛠️ Technology Stack

- **Framework**: Nuxt 4
- **UI Library**: Nuxt UI 3.3
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
pfinal-pass/
├── components/          # Vue components
│   ├── PasswordGenerator.vue
│   ├── AppNavbar.vue
│   └── AppFooter.vue
├── layouts/            # Layout components
│   └── default.vue
├── pages/              # Page components
│   ├── index.vue       # Home page
│   ├── about.vue       # About page
│   └── privacy.vue     # Privacy policy
├── assets/             # Static assets
│   └── css/
│       └── main.css
├── public/             # Public assets
│   ├── favicon.ico
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── .github/            # GitHub Actions
│   └── workflows/
│       └── deploy.yml
├── nuxt.config.ts      # Nuxt configuration
├── package.json        # Dependencies
└── README.md          # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Site URL for SEO
NUXT_PUBLIC_SITE_URL=https://pwd.friday-go.icu
```

### Customization

You can customize the password generator by modifying:

- **Character sets**: Edit the `charSets` object in `components/PasswordGenerator.vue`
- **Default settings**: Change default values in the component's reactive state
- **Styling**: Modify `assets/css/main.css` or component styles
- **SEO**: Update meta tags in `nuxt.config.ts` and page components

## 🚀 Deployment

### GitHub Pages

1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. Push changes to trigger automatic deployment

### Manual Deployment

```bash
# Build the project
pnpm run generate

# Deploy the dist/ folder to your hosting service
```

## 🔒 Security Features

- **Local Generation**: All password generation happens in your browser
- **No Data Collection**: We don't collect, store, or transmit any data
- **No Server Communication**: Passwords never leave your device
- **Open Source**: Code is completely transparent and auditable

## 📊 SEO Optimization

- **Meta Tags**: Comprehensive meta tags for search engines
- **Structured Data**: JSON-LD structured data for rich snippets
- **Sitemap**: XML sitemap for better indexing
- **Robots.txt**: Proper crawling instructions
- **Open Graph**: Social media sharing optimization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nuxt](https://nuxt.com/) - The intuitive Vue framework
- [Nuxt UI](https://ui.nuxt.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## 📞 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: contact@example.com
- **Website**: [https://pwd.friday-go.icu](https://pwd.friday-go.icu)

---

Made with ❤️ by [PFinalClub](https://github.com/PFinalClub)