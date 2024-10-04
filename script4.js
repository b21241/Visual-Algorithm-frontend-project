let array = [];
let searchValue = 0;

// Function to generate a random array
function generateArray() {
  array = [];
  for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  renderArray();
  updateRange();
  displayArray(); // <--- Add this line
}

// Function to display the current array
function displayArray() {
  const arrayText = array.join(', ');
  document.getElementById('range-section').innerHTML = `Array: [${arrayText}]`;
}
// Function to update the range section
function updateRange() {
  const min = Math.min(...array);
  const max = Math.max(...array);
  document.getElementById('range').textContent = `${min} - ${max}`;
}

// Function to render the array as bars
function renderArray() {
  const arrayContainer = document.getElementById('array-container');
  arrayContainer.innerHTML = '';
  array.forEach((value, index) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${value}px`;
    bar.setAttribute('data-value', value); // Set data attribute for hover tooltip
    arrayContainer.appendChild(bar);
  });
}

// Function to perform linear search with animation
function linearSearch() {
  const searchInput = document.getElementById('search-input');
  searchValue = parseInt(searchInput.value);
  let foundIndex = -1;
  let timeouts = [];
  array.forEach((value, index) => {
    timeouts.push(setTimeout(() => {
      const bar = document.getElementById('array-container').children[index];
      bar.style.backgroundColor = 'red'; // Start searching with red color
      if (value === searchValue) {
        foundIndex = index;
        bar.style.backgroundColor = 'green'; // Found value, show green color
        document.getElementById('result-section').textContent = `Value found at index ${index}`;
        // Clear timeouts
        timeouts.forEach(timeout => clearTimeout(timeout));
      } else {
        timeouts.push(setTimeout(() => {
          bar.style.backgroundColor = '#aaa'; // Reset color
          if (index === array.length - 1 && foundIndex === -1) {
            document.getElementById('result-section').textContent = 'Value not found in array';
          }
        }, 500));
      }
    }, index * 500)); // Animate the search process
  });
}

// Function to perform binary search with animation
function binarySearch() {
  const searchInput = document.getElementById('search-input');
  searchValue = parseInt(searchInput.value);
  const arrayWithIndices = array.map((value, index) => ({ value, index }));
  arrayWithIndices.sort((a, b) => a.value - b.value); // Sort the array of objects
  let low = 0;
  let high = arrayWithIndices.length - 1;
  let mid;
  let timeouts = [];
  const binarySearchStep = () => {
    if (low <= high) {
      mid = Math.floor((low + high) / 2);
      const bar = document.getElementById('array-container').children[arrayWithIndices[mid].index];
      bar.style.backgroundColor = 'red'; // Start searching with red color
      timeouts.push(setTimeout(() => {
        if (arrayWithIndices[mid].value === searchValue) {
          bar.style.backgroundColor = 'green'; // Found value, show green color
          document.getElementById('result-section').textContent = `Value found at index ${arrayWithIndices[mid].index}`;
          // Clear timeouts
          timeouts.forEach(timeout => clearTimeout(timeout));
        } else if (arrayWithIndices[mid].value < searchValue) {
          low = mid + 1;
          bar.style.backgroundColor = '#aaa'; // Reset color
          binarySearchStep(); // Continue searching
        } else {
          high = mid - 1;
          bar.style.backgroundColor = '#aaa'; // Reset color
          binarySearchStep(); // Continue searching
        }
      }, 500)); // Animate the search process
    } else {
      document.getElementById('result-section').textContent = 'Value not found in array';
    }
  };
  binarySearchStep();
}
// function binarySearch() {
//   const searchInput = document.getElementById('search-input');
//   searchValue = parseInt(searchInput.value);
//   array.sort((a, b) => a - b); // Sort the array
//   renderArray(); // Re-render the sorted array
//   let low = 0;
//   let high = array.length - 1;
//   let mid;
//   let timeouts = [];
//   const binarySearchStep = () => {
//     if (low <= high) {
//       mid = Math.floor((low + high) / 2);
//       const bar = document.getElementById('array-container').children[mid];
//       bar.style.backgroundColor = 'red'; // Start searching with red color
//       timeouts.push(setTimeout(() => {
//         if (array[mid] === searchValue) {
//           bar.style.backgroundColor = 'green'; // Found value, show green color
//           document.getElementById('result-section').textContent = `Value found at index ${mid}`;
//           // Clear timeouts
//           timeouts.forEach(timeout => clearTimeout(timeout));
//         } else if (array[mid] < searchValue) {
//           low = mid + 1;
//           bar.style.backgroundColor = '#aaa'; // Reset color
//           binarySearchStep(); // Continue searching
//         } else {
//           high = mid - 1;
//           bar.style.backgroundColor = '#aaa'; // Reset color
//           binarySearchStep(); // Continue searching
//         }
//       }, 500)); // Animate the search process
//     } else {
//       document.getElementById('result-section').textContent = 'Value not found in array';
//     }
//   };
//   binarySearchStep();
// }
// Event listeners
document.getElementById('linear-search-btn').addEventListener('click', linearSearch);
document.getElementById('binary-search-btn').addEventListener('click', binarySearch);
document.getElementById('search-input').addEventListener('input', () => {
  document.getElementById('result-section').textContent = ''; // Clear previous result
});

// Initialize the array
generateArray();
