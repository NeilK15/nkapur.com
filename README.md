# Personal Portfolio Website

A modern, responsive single-page portfolio website built with React, TypeScript, and Vite. Perfect for showcasing your computer science background, education, work experience, and projects.

## Features

-   🎨 Modern, clean design with smooth animations
-   📱 Fully responsive layout
-   🧭 Smooth scrolling navigation
-   🎯 Professional sections for all portfolio content
-   ⚡ Fast development with Vite
-   🔧 TypeScript for better development experience

## Sections Included

1. **Hero Section** - Your name, title, and call-to-action buttons
2. **About Section** - Personal description and technical skills
3. **Education Section** - Academic background and achievements
4. **Experience Section** - Work history and responsibilities
5. **Projects Section** - Showcase of your best work
6. **Contact Section** - Ways to get in touch

## Getting Started

### Prerequisites

-   Node.js (version 16 or higher)
-   npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`

## Customization Guide

### Personal Information

1. **Update your name and title** in `src/App.tsx`:

    ```tsx
    <h1>Your Name</h1>
    <h2>Computer Science Professional</h2>
    ```

2. **Update navigation** in `src/components/Navigation.tsx`:
    ```tsx
    <div className="nav-logo" onClick={() => scrollToSection('hero')}>
        Your Name
    </div>
    ```

### About Section

-   Update the personal description in the About section
-   Modify the skills lists to match your expertise
-   Add or remove skill categories as needed

### Education

-   Replace the example education with your actual academic background
-   Update institution names, dates, and GPA
-   Add relevant coursework or achievements

### Work Experience

-   Replace the example experience with your actual work history
-   Update company names, positions, and dates
-   Customize the responsibilities and achievements

### Projects

-   Replace the example projects with your actual work
-   Update project descriptions, technologies used, and links
-   Add screenshots or demos if available

### Contact Information

-   Update email address in the contact section
-   Replace LinkedIn and GitHub links with your actual profiles
-   Add any additional contact methods

### Styling

The design uses a purple gradient theme (`#667eea` to `#764ba2`). To customize:

1. **Change colors** in `src/App.css`:

    - Search for `#667eea` and `#764ba2` to update the primary colors
    - Update background colors and text colors as needed

2. **Modify fonts** in `src/index.css`:

    - The project uses Inter font from Google Fonts
    - You can change the font import URL to use different fonts

3. **Adjust spacing** in `src/App.css`:
    - Modify padding and margin values to change layout spacing

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## Deployment

You can deploy this portfolio to various platforms:

-   **Netlify**: Drag and drop the `dist` folder
-   **Vercel**: Connect your GitHub repository
-   **GitHub Pages**: Use the `gh-pages` package
-   **Firebase Hosting**: Use Firebase CLI

## Technologies Used

-   **React 19** - UI framework
-   **TypeScript** - Type safety
-   **Vite** - Build tool and dev server
-   **CSS3** - Styling with modern features
-   **Google Fonts** - Typography

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, consider submitting a pull request.

---

**Happy coding!** 🚀
