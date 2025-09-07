# Animated Profile Builder

A beautiful, modern animated profile page built with React.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern UI Design** - Clean, professional layout with glass morphism effects
- ✨ **Smooth Animations** - Powered by Framer Motion for fluid transitions
- 📱 **Responsive Design** - Looks great on all devices and screen sizes
- 🎯 **Interactive Elements** - Hover effects, click animations, and micro-interactions
- 🌟 **Animated Background** - Floating particles and gradient backgrounds
- 📊 **Skills Visualization** - Animated progress bars for skill levels
- 🚀 **Project Showcase** - Beautiful project cards with hover effects

## Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory:
   ```bash
   cd Profile_builder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Customization

### Personal Information
Edit the `src/components/AnimatedProfile.js` file to customize:
- Name and title
- Profile description
- Contact information
- Social media links
- Skills and their levels
- Projects and portfolio items

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for custom animations and colors
- Adjust component styles in the AnimatedProfile component

### Animations
- Customize animations in the Framer Motion variants
- Add new animations in `tailwind.config.js`
- Modify transition timings and effects

## Project Structure

```
Profile_builder/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AnimatedProfile.js
│   │   └── BackgroundParticles.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Features Breakdown

### 1. Animated Profile Card
- Glass morphism design with backdrop blur
- Smooth entrance animations
- Hover effects and micro-interactions
- Responsive grid layout

### 2. Skills Section
- Animated progress bars
- Color-coded skill levels
- Smooth reveal animations

### 3. Project Showcase
- Interactive project cards
- Hover animations
- Technology tags
- External links

### 4. Background Effects
- Floating particle animation
- Gradient backgrounds
- Smooth scrolling

### 5. Interactive Elements
- Social media links with hover effects
- Download button with animations
- Statistics cards with hover states

## Browser Support

This project works on all modern browsers that support:
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript features

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!

---

**Enjoy your beautiful animated profile! 🚀**