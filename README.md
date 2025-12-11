# Visual Algorithm Explorer

A web-based interactive visualization tool for understanding how searching and sorting algorithms work through animated demonstrations.

![Visual Algorithm Explorer](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Algorithms Implemented](#algorithms-implemented)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Visual Algorithm Explorer is an educational web application designed to help students and developers understand how different algorithms work by visualizing their step-by-step execution. The project provides interactive visualizations for both searching and sorting algorithms, making complex concepts easier to grasp.

## ✨ Features

### Searching Algorithms
- **Linear Search**: Visualize the sequential search through an array
- **Binary Search**: See how binary search efficiently finds elements in a sorted array
- Interactive array generation
- Real-time step counting
- Visual feedback with color-coded elements
- Value range display

### Sorting Algorithms
- **8 Different Sorting Algorithms**: Bubble, Selection, Insertion, Merge, Quick, Heap, Counting, and Radix Sort
- Animated visualization of sorting process
- Pseudo-code display for each algorithm
- Adjustable array size
- Speed control for animations

### General Features
- Clean and intuitive user interface
- Responsive design
- Smooth animations
- Educational code examples
- Time and space complexity information

## 🔍 Algorithms Implemented

### Searching Algorithms
1. **Linear Search** - O(n) time complexity
   - Searches through array sequentially
   - Best case: O(1), Worst case: O(n)

2. **Binary Search** - O(log n) time complexity
   - Requires sorted array
   - Divides search space in half each iteration
   - Best case: O(1), Worst case: O(log n)

### Sorting Algorithms
1. **Bubble Sort** - O(n²) time complexity
2. **Selection Sort** - O(n²) time complexity
3. **Insertion Sort** - O(n²) time complexity
4. **Merge Sort** - O(n log n) time complexity
5. **Quick Sort** - O(n log n) average, O(n²) worst case
6. **Heap Sort** - O(n log n) time complexity
7. **Counting Sort** - O(n + k) time complexity
8. **Radix Sort** - O(d(n + k)) time complexity

## 🛠️ Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Algorithm implementation and interactivity
- **No Dependencies** - Pure vanilla JavaScript implementation

## 📁 Project Structure

```
Visual-Algorithm-frontend-project/
│
├── index.html              # Landing page with navigation
├── index1.html            # Searching algorithms page (main)
├── index.4.html           # Alternative searching algorithms page
├── index2.html            # Sorting algorithms page
│
├── JavaScript Files:
│   ├── script.js          # Sorting algorithms implementation
│   ├── script4.js         # Searching algorithms (alternative)
│   ├── searching.js       # Searching algorithms utilities
│   ├── linearsearch.js    # Linear search implementation
│   └── Binary.js          # Binary search implementation
│
└── CSS Files:
    ├── style.css          # Sorting page styles
    ├── style4.css         # Alternative searching page styles
    ├── searching.css      # Main searching page styles
    └── styless.css        # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for better performance)

### Installation

1. **Clone the repository** (if using version control):
   ```bash
   git clone <repository-url>
   cd Visual-Algorithm-frontend-project
   ```

2. **Open directly in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```
   
   **Using VS Code Live Server:**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## 📖 Usage

### Searching Algorithms

1. Open `index1.html` or `index.4.html`
2. The page will automatically generate a random array
3. Enter a value to search in the input field
4. Click either:
   - **Linear Search** - Searches sequentially through the array
   - **Binary Search** - Requires sorted array (automatically sorts)
5. Watch the visualization:
   - **Red** - Currently checking this element
   - **Green** - Found the target element
   - **Gray** - Already checked elements

### Sorting Algorithms

1. Open `index2.html`
2. Click **"init"** to generate a new random array
3. Select any sorting algorithm from the buttons
4. Watch the algorithm sort the array step by step
5. View the pseudo-code displayed below the visualization

### Controls

- **Generate New Array**: Creates a new random array
- **Size Slider**: Adjust array size (4-100 elements)
- **Speed Slider**: Control animation speed (1-5)
- **Algorithm Buttons**: Select which algorithm to visualize

## 📸 Screenshots

### Landing Page
The main landing page provides easy navigation to different algorithm categories.

### Searching Visualization
- Visual bars representing array elements
- Color-coded search progress
- Step counter and result display

### Sorting Visualization
- Animated bar chart showing sorting process
- Real-time updates as elements are compared and swapped
- Pseudo-code display for educational purposes

## 🔮 Future Enhancements

- [ ] Add pause/resume functionality for algorithms
- [ ] Implement step-by-step mode (manual stepping)
- [ ] Add algorithm comparison mode (side-by-side)
- [ ] Include more algorithms (BFS, DFS, Dijkstra's, etc.)
- [ ] Add preset array options (sorted, reverse sorted, nearly sorted)
- [ ] Implement export functionality (save arrays, export GIF)
- [ ] Add dark/light theme toggle
- [ ] Improve mobile responsiveness
- [ ] Add sound effects toggle
- [ ] Include algorithm explanation panels
- [ ] Add time complexity visualization
- [ ] Implement code editor for custom algorithms

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Report Bugs**: Found a bug? Open an issue describing the problem
2. **Suggest Features**: Have an idea? Share it in the issues section
3. **Code Contributions**: 
   - Fork the repository
   - Create a feature branch (`git checkout -b feature/AmazingFeature`)
   - Commit your changes (`git commit -m 'Add some AmazingFeature'`)
   - Push to the branch (`git push origin feature/AmazingFeature`)
   - Open a Pull Request

### Code Style Guidelines

- Use meaningful variable and function names
- Add comments for complex algorithm logic
- Follow consistent indentation (2 or 4 spaces)
- Keep functions focused and modular

## 📝 Notes

- The project uses vanilla JavaScript - no frameworks required
- Some files contain commented-out code from previous iterations
- Binary search requires the array to be sorted (handled automatically)
- Animation speed may vary based on browser and system performance

## 🐛 Known Issues

- Binary search index tracking needs improvement in some implementations
- Some timeout cleanup could be better handled
- Mobile responsiveness could be enhanced
- Duplicate result sections in some HTML files

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as an educational project to help visualize and understand algorithms.

## 🙏 Acknowledgments

- Inspired by various algorithm visualization projects
- Educational resources on algorithm complexity
- Community feedback and suggestions

---

**Happy Learning! 🎓**

If you find this project helpful, please consider giving it a ⭐ star!

