# Susmitha Tavva Portfolio - React Version

This is a ReactJS + ViteJS version of Susmitha Tavva's portfolio website, converted from the original HTML/CSS/JavaScript version.

## Features

- **React Components**: Modular component-based architecture
- **Responsive Design**: Mobile-first responsive design
- **Modern UI**: Clean and professional portfolio design
- **Smooth Animations**: AOS (Animate On Scroll) animations
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **Contact Form**: Functional contact form with validation
- **Skills Animation**: Animated progress bars for skills
- **Portfolio Filtering**: Filter projects by category
- **Mobile Navigation**: Responsive mobile navigation menu

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Personal information and background
3. **Skills Section**: Technical skills with animated progress bars
4. **Resume Section**: Work experience and education timeline
5. **Certifications Section**: Professional certifications
6. **Portfolio Section**: Projects with filtering functionality
7. **Services Section**: Technical expertise areas
8. **Contact Section**: Contact information and form
9. **Footer**: Links and social media

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Bootstrap 5**: CSS framework for responsive design
- **Bootstrap Icons**: Icon library
- **AOS**: Animate On Scroll library
- **CSS3**: Custom styling with CSS variables

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd susmitha-portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Resume.jsx
│   ├── Certifications.jsx
│   ├── Portfolio.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ScrollTop.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

### Colors
The color scheme can be customized by modifying the CSS variables in `src/App.css`:

```css
:root {
  --accent-color: #3d03b8;
  --heading-color: #0f2943;
  --default-color: #0a0f14;
  /* ... other variables */
}
```

### Content
Update the content by modifying the data in each component file. For example, to update skills, modify the `skills` array in `src/components/Skills.jsx`.

### Images
Replace placeholder images with actual images by updating the `src` attributes in the components.

## Features Implemented

- ✅ Responsive navigation with mobile menu
- ✅ Smooth scrolling between sections
- ✅ Animated skill progress bars
- ✅ Portfolio project filtering
- ✅ Contact form with validation
- ✅ Scroll-to-top functionality
- ✅ AOS animations
- ✅ Bootstrap integration
- ✅ Social media links
- ✅ Professional styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for portfolio purposes. Feel free to use as a template for your own portfolio.

## Contact

- **Name**: Susmitha Tavva
- **Email**: susmithatavva84@gmail.com
- **Phone**: +91-7989876978
- **Location**: Vadodara, Gujarat, India
- **GitHub**: https://github.com/susmithatavva
- **LinkedIn**: https://linkedin.com/in/susmitha-tavva
