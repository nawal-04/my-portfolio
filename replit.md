# Overview

This is a static cybersecurity portfolio website for Nawal Wahdan, showcasing penetration testing and vulnerability analysis expertise. The portfolio features a cyberpunk/hacker aesthetic with a dark theme, blue and purple color scheme, and terminal-style elements. It's built as a single-page application with responsive design optimized for deployment on GitHub Pages or CodeSandbox.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static Website**: Pure HTML, CSS, and JavaScript without server-side framework
- **Single Page Application**: All content served from `index.html` with smooth scrolling navigation
- **Responsive Framework**: Bootstrap 5.3.0 for grid system and responsive components
- **Styling Strategy**: Custom CSS with cyberpunk theme using CSS custom properties for consistent color scheme
- **Typography**: Google Fonts integration with Orbitron for monospace/terminal effects and Rajdhani for body text
- **Icon System**: Font Awesome 6.4.0 for cybersecurity-themed iconography

## JavaScript Architecture
- **Vanilla JavaScript**: No frameworks, using modern DOM APIs and ES6+ features
- **Animation System**: Custom scroll-triggered animations and terminal typing effects
- **Interactive Elements**: Matrix background animation, smooth scrolling navigation, and form handling
- **Event-Driven Design**: Modular initialization system with separate functions for different features

## Design Patterns
- **CSS Custom Properties**: Centralized blue/purple color scheme and styling variables for easy theme management
- **Component-Based CSS**: Reusable classes for cards, buttons, and interactive elements
- **Progressive Enhancement**: Core content accessible without JavaScript, enhanced with animations
- **Mobile-First Design**: Responsive breakpoints optimized for mobile devices first
- **Multilingual Support**: Arabic translation functionality for key content sections
- **Enhanced Interactions**: Contact form with mailto integration and animated UI elements

## Performance Considerations
- **CDN Resources**: External libraries loaded from CDNs for better caching and performance
- **Optimized Assets**: Minimal custom CSS and JavaScript for fast loading
- **Semantic HTML**: Proper structure for SEO and accessibility compliance

## Accessibility Features
- **WCAG Compliance**: Keyboard navigation support and proper semantic markup
- **Screen Reader Support**: Appropriate ARIA labels and heading hierarchy
- **Color Contrast**: High contrast ratios for cyberpunk theme while maintaining readability

# External Dependencies

## Frontend Libraries
- **Bootstrap 5.3.0**: CSS framework loaded via CDN for responsive components and grid system
- **Font Awesome 6.4.0**: Icon library via CDN providing cybersecurity-themed icons
- **Google Fonts**: Web font service for Orbitron and Rajdhani typography

## Asset Dependencies
- **CV Download**: Static PDF file served directly from the file system
- **Custom Styling**: Self-contained CSS file with no external preprocessing requirements
- **Image Assets**: Local image files for portfolio projects and professional photos