# 🍳 Interactive Recipe Collection

A beautiful, interactive web application for cooking enthusiasts featuring step-by-step recipe guidance, dark/light themes, and engaging animations.

![Recipe Collection Preview](https://via.placeholder.com/800x400/B8B5D1/FFFFFF?text=Interactive+Recipe+Collection)

## ✨ Features

### 🎨 **Beautiful Design**
- **Dual Theme Support**: Toggle between light and dark modes with smooth transitions
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Elegant Animations**: Smooth hover effects, progress bars, and modal animations
- **Custom Color Palette**: Carefully selected lavender, mint green, and sage color scheme

### 🍽️ **Recipe Management**
- **5 Delicious Recipes**: Chocolate Cake, Pasta Primavera, Chicken Curry, Berry Smoothie, and Garlic Bread
- **Interactive Ingredients**: Click ingredients to mark them as gathered
- **Collapsible Sections**: Show/hide ingredients and instructions as needed
- **Recipe Switching**: Easy tab navigation between different recipes

### 👨‍🍳 **Cooking Assistant**
- **Step-by-Step Guidance**: Highlighted current cooking step with visual indicators
- **Progress Tracking**: Animated progress bar showing cooking completion
- **Built-in Timer**: Countdown timer for each recipe with visual alerts
- **Smart Controls**: Start, next step, and reset functionality
- **Completion Celebration**: Beautiful modal popup when recipe is finished

### 🎯 **User Experience**
- **Modal Notifications**: Elegant popup messages for cooking milestones
- **Keyboard Support**: ESC key to close modals
- **Print Functionality**: Print-optimized recipe layouts
- **Local Storage**: Theme preference persistence across sessions
- **Accessibility**: Semantic HTML and ARIA labels for screen readers

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required!

### Installation

1. **Download the project files**
   \`\`\`bash
   git clone https://github.com/yourusername/interactive-recipe-collection.git
   cd interactive-recipe-collection
   \`\`\`

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
   \`\`\`bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   \`\`\`

3. **Start cooking!**
   - Browse recipes using the tab navigation
   - Click "Start Cooking" to begin step-by-step guidance
   - Toggle between light and dark themes using the theme switcher

## 📁 Project Structure

\`\`\`
interactive-recipe-collection/
├── index.html          # Main HTML structure
├── styles.css          # All styling and themes
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
\`\`\`

### File Descriptions

- **`index.html`**: Contains the complete HTML structure with all 5 recipes, navigation, and modal elements
- **`styles.css`**: Comprehensive styling including themes, animations, responsive design, and print styles
- **`script.js`**: All interactive functionality including cooking controls, timers, theme management, and modal systems

## 🎮 How to Use

### Basic Navigation
1. **Switch Recipes**: Click on recipe tabs at the top to change between different recipes
2. **View Sections**: Click on "Ingredients" or "Instructions" headers to expand/collapse sections
3. **Theme Toggle**: Use the sun/moon toggle in the top-left to switch themes

### Cooking Mode
1. **Start Cooking**: Click the "🚀 Start Cooking" button to begin guided cooking
2. **Follow Steps**: Current step is highlighted with a pulsing animation
3. **Progress**: Use "Next Step ➡️" to advance through instructions
4. **Timer**: Watch the countdown timer and progress bar
5. **Reset**: Use "🔄 Reset" to start over at any time

### Additional Features
- **Print Recipe**: Click the print button (🖨️) in the top-right corner
- **Interactive Ingredients**: Click ingredient items to mark them visually
- **Keyboard Shortcuts**: Press ESC to close modal dialogs

## 🍽️ Available Recipes

| Recipe | Prep Time | Cook Time | Servings | Difficulty |
|--------|-----------|-----------|----------|------------|
| 🍰 Chocolate Cake | 30 min | 45 min | 8-10 | Medium |
| 🍝 Pasta Primavera | 20 min | 25 min | 4-6 | Easy |
| 🍛 Chicken Curry | 25 min | 40 min | 4-5 | Medium |
| 🥤 Berry Smoothie | 5 min | 0 min | 2 | Easy |
| 🥖 Garlic Bread | 10 min | 15 min | 4-6 | Easy |

## 🎨 Customization

### Adding New Recipes
1. **HTML**: Add a new recipe card section in `index.html`
2. **JavaScript**: Update the `recipeData` object in `script.js`
3. **Navigation**: Add a new tab button in the recipe selector

### Modifying Themes
- Edit CSS custom properties in `:root` and `[data-theme="dark"]` selectors
- Colors are defined as CSS variables for easy customization

### Styling Changes
- All styles are organized in `styles.css` with clear section comments
- Responsive breakpoints: 768px (tablet) and 480px (mobile)

## 🌟 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📱 Mobile Features

- Touch-friendly interface with larger tap targets
- Responsive typography and spacing
- Optimized modal dialogs for small screens
- Swipe-friendly navigation

## 🖨️ Print Support

- Clean, printer-friendly layouts
- Automatic section expansion for printing
- Optimized typography for paper
- Hidden interactive elements in print view

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: No external dependencies
- **Local Storage**: Theme preference persistence

### Performance Features
- Lightweight codebase (< 50KB total)
- Optimized animations using CSS transforms
- Efficient DOM manipulation
- Minimal reflows and repaints

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-recipe`
3. **Make your changes**: Add recipes, improve styling, fix bugs
4. **Test thoroughly**: Ensure all features work across devices
5. **Submit a pull request**: Describe your changes clearly

### Contribution Ideas
- 🍕 Add new recipes with different cuisines
- 🎨 Create additional color themes
- 📱 Improve mobile experience
- ♿ Enhance accessibility features
- 🌍 Add internationalization support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Color palette inspired by modern cooking aesthetics
- Icons and emojis for enhanced visual appeal
- Responsive design principles for optimal user experience

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Issues**: Look for existing solutions in the GitHub issues
2. **Create an Issue**: Report bugs or request features
3. **Documentation**: Refer to code comments for implementation details

---

**Happy Cooking! 👨‍🍳👩‍🍳**

*Made with ❤️ for cooking enthusiasts everywhere*
