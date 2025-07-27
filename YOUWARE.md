# YOUWARE Project Guide

## Project Overview
This is a personal portfolio website for Akhil Varma built with modern web technologies. The site showcases professional experience, skills, education, and projects with interactive animations and a responsive design.

## Project Structure
- `index.html` - Main entry point (Tailwind CSS based portfolio)
- `images/` - Directory containing profile image and project screenshots
- `AKHIL_VARMA_Resume.pdf` - Downloadable resume file

## Technology Stack
- **Frontend Framework**: Tailwind CSS (via CDN)
- **Animation**: Custom CSS animations and transitions
- **Icons**: Font Awesome
- **Interactivity**: Vanilla JavaScript with Intersection Observer API

## Key Features
- Modern responsive design with subtle animations and hover effects
- Intersection Observer for scroll-triggered animations
- Interactive elements with transform and transition effects
- Mobile-friendly layout with hamburger menu
- Resume download functionality

## Animation System
The portfolio uses several animation types:
- `fade-in`: Basic fade-in with upward movement
- `slide-up`: Elements slide up from bottom 
- `animate-glow`: Text glowing effect
- Hover animations: Scale transformations and shadow effects

## JavaScript Features
- Intersection Observer for scroll animations
- Mobile menu toggle
- Animation timing control with delay classes

## Development Notes

### External Resources
- Tailwind CSS (via CDN): Primary styling framework
- Font Awesome: For icons throughout the site
- LottieFiles Player: For animations (though currently disabled due to CORS)

### Adding New Projects
When adding new projects to the Projects section:
1. Add project image to the `images/` directory
2. Copy the existing project card HTML structure
3. Update image source, title, tech stack, and description
4. Ensure proper tagging with Full Stack or Frontend badge

### Mobile Responsiveness
The site uses Tailwind's responsive classes:
- `md:` prefix for medium screens (768px and up)
- `lg:` prefix for large screens (1024px and up)
- Mobile menu toggle for smaller screens

### Production Deployment Note
For production deployment, Tailwind CSS should be properly installed and optimized rather than using the CDN version, which displays a warning in the console.