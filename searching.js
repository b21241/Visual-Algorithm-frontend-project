// // array size slider
// const slider = document.querySelector('#size_slider')
// const output = document.querySelector('#size_value')
// const body = document.querySelector('#mainbody')
// const speedSlider = document.querySelector('#speed_slider')
// const speedOutput = document.querySelector('#speed_value')
// const preloader = document.querySelector('.preloader')
// const select = document.querySelector('.select')
// const icon = document.querySelector('.icon')
// const menu = document.querySelector('.menu')
// const options = document.querySelectorAll('.menu li')
// const selected = document.querySelector('.selected')
// const generate = document.querySelector('#generate')
// const searchedVal = document.querySelector('#searchingVal')
// const searchText = document.querySelector('.selected')


// // disable all the sorting buttons while one sorting process take place
// function disableSortingBtn() {
//     document.querySelector("#linear_Search").disabled = true;
//     document.querySelector("#binary_Search").disabled = true;
//     document.querySelector("#searchingVal").disabled = true;
// }

// // enable all the sorting buttons after one of the sorting process is totally completed
// function enableSortingBtn() {
//     document.querySelector("#linear_Search").disabled = false;
//     document.querySelector("#binary_Search").disabled = false;
//     document.querySelector("#searchingVal").disabled = false;

// }

// // Disables array size slider while one sorting process take place
// function disableSizeSlider() {
//     document.querySelector("#size_slider").disabled = true;
//     document.querySelector('#size').disabled = true
// }

// // Enables array size slider after one of the sorting process is done
// function enableSizeSlider() {
//     document.querySelector("#size_slider").disabled = false;
//     document.querySelector('#size').disabled = false
// }

// // Disables newArray buttons while one sorting process take place
// function disableNewArrayBtn() {
//     document.querySelector("#generate").disabled = true;
// }

// // Enables newArray buttons after one of the sorting process is done
// function enableNewArrayBtn() {
//     document.querySelector("#generate").disabled = false;
// }






// output.innerHTML = slider.value


// // generate bars in default size 100
// // const body = document.querySelector('#mainbody')
// var arr = []
// for (let i = 1; i <= 64; i++) {
//     let temp = Math.floor(Math.random() * (350 - 20) + 20)
//     arr.push(temp)
// }
// // creating div element for the bars
// for (let i = 0; i < 64; i++) {
//     let bar = document.createElement('div')
//     bar.className = 'bars'
//     bar.style.height = `${arr[i]}px`
//     bar.innerHTML = `${arr[i]}`
//     bar.style.width = `4vw`;
//     body.appendChild(bar)
// }


// // array size according to array size slider
// var arrayVal = 64;
// slider.oninput = function () {
//     searchText.innerHTML = `Size Changed`
//     output.innerHTML = this.value
//     arrayVal = this.value
//     arr = []
//     for (let i = 1; i <= this.value; i++) {
//         let temp = Math.floor(Math.random() * (350 - 20) + 20)
//         arr.push(temp)
//     }
//     while (body.firstChild) {
//         body.removeChild(body.firstChild)
//     }
//     for (let i = 0; i < this.value; i++) {
//         let div = document.createElement('div')
//         div.className = 'bars'
//         div.innerHTML = `${arr[i]}`
//         div.style.height = `${arr[i]}px`
//         div.style.width = `${(96 / this.value)}vw`
//         body.appendChild(div)
//     }

// }

// // Generayte new array button
// // const generate = document.querySelector('#generate')
// generate.addEventListener('click', () => {
//     //delte previous bars
//     var mouseclick = new Audio('Mouseclick.mp3')
//     mouseclick.play()
//     enableSortingBtn();
//     enableSizeSlider();
//     searchText.innerHTML = `New Array Generated`
//     const description = document.querySelector('#description')
//     description.style.display = 'none'
//     const section = document.querySelector('#fullbody')
//     section.style.height = `100vh`

//     searchedVal.value = ''
//     const step = document.querySelector('.step')
//     step.innerHTML = ``

//     const index = document.querySelector('.index')
//     index.innerHTML = ``

//     count=0

//     while (body.firstChild) {
//         body.removeChild(body.firstChild)
//     }
//     // creating arr
//     arr = []
//     for (let i = 1; i <= arrayVal; i++) {
//         let temp = Math.floor(Math.random() * (350 - 20) + 20)
//         arr.push(temp)
//     }
//     console.log(arr)
//     // creating array bars
//     for (let i = 0; i < arrayVal; i++) {
//         let div = document.createElement('div')
//         div.className = 'bars'
//         div.style.height = `${arr[i]}px`
//         div.innerHTML = `${arr[i]}`
//         div.style.width = `${96 / arrayVal}vw`
//         body.appendChild(div)
//     }
// })

// // array speed slider


// // let count the delay
// function waitcount(milisec) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('')
//         }, milisec)
//     })
// }


// // const speedSlider = document.querySelector('#speed_slider')
// // const speedOutput = document.querySelector('#speed_value')
// speedOutput.innerHTML = speedSlider.value

// let delay = 260;
// speedSlider.oninput = function () {
//     searchText.innerHTML=`Speed Changed`
//     speedOutput.innerHTML = this.value
//     delay = 760 - (100*this.value);
//     console.log(delay);
// }


// // select display type 


// // const select = document.querySelector('.select')
// // const icon = document.querySelector('.icon')
// // const menu = document.querySelector('.menu')
// // const options = document.querySelectorAll('.menu li')
// // const selected = document.querySelector('.selected')

// menu.classList.toggle('close')

// select.addEventListener('click', () => {
//     // select.classList.add('.icon-rotate')
//     menu.classList.toggle('close')
//     icon.classList.toggle('icon-rotate')
// })
// options.forEach(option => {
//     option.addEventListener('click', () => {
//         selected.innerText = option.innerText
//         menu.classList.toggle('close')
//         icon.classList.toggle('icon-rotate')

//     })
// });


// // loader
// // const preloader = document.querySelector('.preloader')
// window.addEventListener('load', () => {
//     // preloader.style.display = 'none'
// })






// const val = document.querySelector('#searchingVal')


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
  array.forEach((value, index) => {
    setTimeout(() => {
      const bar = document.getElementById('array-container').children[index];
      bar.style.backgroundColor = 'red'; // Start searching with red color
      if (value === searchValue) {
        foundIndex = index;
        bar.style.backgroundColor = 'green'; // Found value, show green color
        document.getElementById('result-section').textContent = `Value found at index ${index}`;
        return;
      }
      setTimeout(() => {
        bar.style.backgroundColor = '#aaa'; // Reset color
        if (index === array.length - 1 && foundIndex === -1) {
          document.getElementById('result-section').textContent = 'Value not found in array';
        }
      }, 500);
    }, index * 500); // Animate the search process
  });
}

// Function to perform binary search with animation
function binarySearch() {
  const searchInput = document.getElementById('search-input');
  searchValue = parseInt(searchInput.value);
  array.sort((a, b) => a - b); // Sort the array
  renderArray(); // Re-render the sorted array
  let low = 0;
  let high = array.length - 1;
  let mid;
  const binarySearchStep = () => {
    if (low <= high) {
      mid = Math.floor((low + high) / 2);
      const bar = document.getElementById('array-container').children[mid];
      bar.style.backgroundColor = 'red'; // Start searching with red color
      setTimeout(() => {
        if (array[mid] === searchValue) {
          bar.style.backgroundColor = 'green'; // Found value, show green color
          document.getElementById('result-section').textContent = `Value found at index ${mid}`;
        } else if (array[mid] < searchValue) {
          low = mid + 1;
          bar.style.backgroundColor = '#aaa'; // Reset color
          binarySearchStep(); // Continue searching
        } else {
          high = mid - 1;
          bar.style.backgroundColor = '#aaa'; // Reset color
          binarySearchStep(); // Continue searching
        }
      }, 500); // Animate the search process
    } else {
      document.getElementById('result-section').textContent = 'Value not found in array';
    }
  };
  binarySearchStep();
}

// Event listeners
document.getElementById('linear-search-btn').addEventListener('click', linearSearch);
document.getElementById('binary-search-btn').addEventListener('click', binarySearch);
document.getElementById('search-input').addEventListener('input', () => {
  document.getElementById('result-section').textContent = ''; // Clear previous result
});

// Initialize the array
generateArray();

