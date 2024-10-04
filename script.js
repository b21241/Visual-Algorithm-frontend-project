// let array = [];

// function init() {
//     array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 200) + 1);
//     renderArray();
// }

// function renderArray() {
//     const container = document.getElementById('container');
//     container.innerHTML = '';
//     array.forEach(value => {
//         const bar = document.createElement('div');
//         bar.style.height = `${value}px`;
//         bar.className = 'bar';
//         container.appendChild(bar);
//     });
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function selectAlgorithm(algorithmName) {
//     const algorithmDisplay = document.getElementById('algorithm-display');
//     algorithmDisplay.innerText = `Selected Algorithm: ${algorithmName}`;
//     switch (algorithmName) {
//         case 'Bubble Sort':
//             bubbleSort();
//             break;
//         case 'Selection Sort':
//             selectionSort();
//             break;
//         case 'Insertion Sort':
//             insertionSort();
//             break;
//         case 'Merge Sort':
//             mergeSort(array);
//             break;
//         case 'Quick Sort':
//             quickSort(array);
//             break;
//         case 'Heap Sort':
//             heapSort();
//             break;
//         case 'Counting Sort':
//             countingSort();
//             break;
//         case 'Radix Sort':
//             radixSort();
//             break;
//     }
// }

// async function bubbleSort() {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//                 await sleep(10);
//                 renderArray();
//             }
//         }
//     }
// }

// async function selectionSort() {
//     for (let i = 0; i < array.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             [array[i], array[minIndex]] = [array[minIndex], array[i]];
//             await sleep(10);
//             renderArray();
//         }
//     }
// }

// async function insertionSort() {
//     for (let i = 1; i < array.length; i++) {
//         let key = array[i];
//         let j = i - 1;
//         while (j >= 0 && array[j] > key) {
//             array[j + 1] = array[j];
//             j = j - 1;
//             await sleep(10);
//             renderArray();
//         }
//         array[j + 1] = key;
//         await sleep(10);
//         renderArray();
//     }
// }

// async function mergeSort(arr, l = 0, r = arr.length - 1) {
//     if (l >= r) return;

//     const m = Math.floor((l + r) / 2);
//     await mergeSort(arr, l, m);
//     await mergeSort(arr, m + 1, r);
//     await merge(arr, l, m, r);
//     renderArray();
// }

// async function merge(arr, l, m, r) {
//     const left = arr.slice(l, m + 1);
//     const right = arr.slice(m + 1, r + 1);
//     let i = 0, j = 0, k = l;

//     while (i < left.length && j < right.length) {
//         if (left[i] <= right[j]) {
//             arr[k++] = left[i++];
//         } else {
//             arr[k++] = right[j++];
//         }
//         await sleep(10);
//         renderArray();
//     }

//     while (i < left.length) arr[k++] = left[i++];
//     while (j < right.length) arr[k++] = right[j++];
// }

// async function quickSort(arr, low = 0, high = arr.length - 1) {
//     if (low < high) {
//         const pi = await partition(arr, low, high);
//         await quickSort(arr, low, pi - 1);
//         await quickSort(arr, pi + 1, high);
//     }
//     renderArray();
// }

// async function partition(arr, low, high) {
//     const pivot = arr[high];
//     let i = (low - 1);
//     for (let j = low; j < high; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             await sleep(10);
//             renderArray();
//         }
//     }
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     await sleep(10);
//     renderArray();
//     return i + 1;
// }

// async function heapSort() {
//     let n = array.length;

//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         await heapify(array, n, i);
//     }

//     for (let i = n - 1; i > 0; i--) {
//         [array[0], array[i]] = [array[i], array[0]];
//         await heapify(array, i, 0);
//         await sleep(10);
//         renderArray();
//     }
// }

// async function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }

//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         await heapify(arr, n, largest);
//         await sleep(10);
//         renderArray();
//     }
// }

// async function countingSort() {
//     const max = Math.max(...array);
//     const min = Math.min(...array);
//     const range = max - min + 1;

//     const count = Array(range).fill(0);
//     const output = Array(array.length).fill(0);

//     for (let i = 0; i < array.length; i++) {
//         count[array[i] - min]++;
//     }

//     for (let i = 1; i < count.length; i++) {
//         count[i] += count[i - 1];
//     }

//     for (let i = array.length - 1; i >= 0; i--) {
//         output[count[array[i] - min] - 1] = array[i];
//         count[array[i] - min]--;
//         await sleep(10);
//         renderArray();
//     }

//     for (let i = 0; i < array.length; i++) {
//         array[i] = output[i];
//         await sleep(10);
//         renderArray();
//     }
// }

// async function radixSort() {
//     const max = Math.max(...array);
//     let exp = 1;

//     while (Math.floor(max / exp) > 0) {
//         await countingSortByDigit(exp);
//         exp *= 10;
//         renderArray();
//     }
// }

// async function countingSortByDigit(exp) {
//     const output = Array(array.length).fill(0);
//     const count = Array(10).fill(0);

//     for (let i = 0; i < array.length; i++) {
//         const index = Math.floor(array[i] / exp) % 10;
//         count[index]++;
//     }

//     for (let i = 1; i < 10; i++) {
//         count[i] += count[i - 1];
//     }

//     for (let i = array.length - 1; i >= 0; i--) {
//         const index = Math.floor(array[i] / exp) % 10;
//         output[count[index] - 1] = array[i];
//         count[index]--;
//     }

//     for (let i = 0; i < array.length; i++) {
//         array[i] = output[i];
//         await sleep(10);
//         renderArray();
//     }
// }

let array = [];
init();
function init() {
    array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 200) + 1);
    renderArray();
}

function renderArray() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.style.height = `${value}px`;
        bar.className = 'bar';
        container.appendChild(bar);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function selectAlgorithm(algorithmName) {
    const algorithmDisplay = document.getElementById('algorithm-display');
    const pseudoCode = getPseudoCode(algorithmName);
    algorithmDisplay.innerText = pseudoCode;
    switch (algorithmName) {
        case 'Bubble Sort':
            bubbleSort();
            break;
        case 'Selection Sort':
            selectionSort();
            break;
        case 'Insertion Sort':
            insertionSort();
            break;
        case 'Merge Sort':
            mergeSort(array);
            break;
        case 'Quick Sort':
            quickSort(array);
            break;
        case 'Heap Sort':
            heapSort();
            break;
        case 'Counting Sort':
            countingSort();
            break;
        case 'Radix Sort':
            radixSort();
            break;
    }
}

function getPseudoCode(algorithmName) {
    switch (algorithmName) {
        case 'Bubble Sort':
            return `Bubble Sort Pseudo-code:
for i = 0 to n-1
    for j = 0 to n-i-1
        if array[j] > array[j+1]
            swap(array[j], array[j+1])`;
        case 'Selection Sort':
            return `Selection Sort Pseudo-code:
for i = 0 to n-1
    minIndex = i
    for j = i+1 to n
        if array[j] < array[minIndex]
            minIndex = j
    swap(array[i], array[minIndex])`;
        case 'Insertion Sort':
            return `Insertion Sort Pseudo-code:
for i = 1 to n-1
    key = array[i]
    j = i - 1
    while j >= 0 and array[j] > key
        array[j + 1] = array[j]
        j = j - 1
    array[j + 1] = key`;
        case 'Merge Sort':
            return `Merge Sort Pseudo-code:
mergeSort(array, l, r):
    if l >= r
        return
    m = (l + r) / 2
    mergeSort(array, l, m)
    mergeSort(array, m + 1, r)
    merge(array, l, m, r)`;
        case 'Quick Sort':
            return `Quick Sort Pseudo-code:
quickSort(array, low, high):
    if low < high
        pi = partition(array, low, high)
        quickSort(array, low, pi - 1)
        quickSort(array, pi + 1, high)`;
        case 'Heap Sort':
            return `Heap Sort Pseudo-code:
heapSort(array):
    buildMaxHeap(array)
    for i = n-1 down to 1
        swap(array[0], array[i])
        maxHeapify(array, 0, i)`;
        case 'Counting Sort':
            return `Counting Sort Pseudo-code:
countingSort(array, k):
    count = array of k+1 zeros
    for i = 0 to n-1
        count[array[i]]++
    for i = 1 to k
        count[i] += count[i-1]
    for i = n-1 downto 0
        output[count[array[i]]-1] = array[i]
        count[array[i]]--`;
        case 'Radix Sort':
            return `Radix Sort Pseudo-code:
radixSort(array):
    max = getMax(array)
    exp = 1
    while max/exp > 0
        countingSortByDigit(array, exp)
        exp *= 10`;
    }
}

async function bubbleSort() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                await sleep(10);
                renderArray();
            }
        }
    }
}

async function selectionSort() {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            await sleep(10);
            renderArray();
        }
    }
}

async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
            await sleep(10);
            renderArray();
        }
        array[j + 1] = key;
        await sleep(10);
        renderArray();
    }
}

async function mergeSort(arr, l = 0, r = array.length - 1) {
    if (l >= r) {
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
}

async function merge(arr, l, m, r) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = Array(n1);
    const R = Array(n2);
    for (let i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (let i = 0; i < n2; i++) {
        R[i] = arr[m + 1 + i];
    }
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
        await sleep(10);
        renderArray();
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
        await sleep(10);
        renderArray();
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
        await sleep(10);
        renderArray();
    }
}

async function quickSort(arr, low = 0, high = array.length - 1) {
    if (low < high) {
        const pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}

async function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            await sleep(10);
            renderArray();
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    await sleep(10);
    renderArray();
    return i + 1;
}

async function heapSort() {
    const n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(array, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        await sleep(10);
        renderArray();
        await heapify(array, i, 0);
    }
}

async function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        await sleep(10);
        renderArray();
        await heapify(arr, n, largest);
    }
}

async function countingSort() {
    const max = Math.max(...array);
    const count = Array(max + 1).fill(0);
    const output = Array(array.length).fill(0);

    for (let i = 0; i < array.length; i++) {
        count[array[i]]++;
        await sleep(10);
        renderArray();
    }

    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        output[count[array[i]] - 1] = array[i];
        count[array[i]]--;
        await sleep(10);
        renderArray();
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        await sleep(10);
        renderArray();
    }
}

async function radixSort() {
    const max = Math.max(...array);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        await countingSortByDigit(exp);
    }
}

async function countingSortByDigit(exp) {
    const output = Array(array.length).fill(0);
    const count = Array(10).fill(0);

    for (let i = 0; i < array.length; i++) {
        const index = Math.floor(array[i] / exp) % 10;
        count[index]++;
        await sleep(10);
        renderArray();
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        const index = Math.floor(array[i] / exp) % 10;
        output[count[index] - 1] = array[i];
        count[index]--;
        await sleep(10);
        renderArray();
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        await sleep(10);
        renderArray();
    }
}
