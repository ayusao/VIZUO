const n = 20;
const array = [];
var sortingProcess;

initialize();

//for generating random values
function initialize() {
  // Stop any ongoing sorting process
  if (sortingProcess) {
    clearTimeout(sortingProcess);
  }

  // Generate a new array of random values
  for (var i = 0; i < n; i++) {
    array[i] = Math.random();
  }

  showbars();
}

function play() {
  const copyarray = [...array];
  const swapping = selectionSort(copyarray);
  animate(swapping);
}

function animate(swaps) {
  if (swaps.length == 0) {
    showbars();
    return;
  }
  const [i, j] = swaps.shift();
  [array[i], array[j]] = [array[j], array[i]];
  showbars([i, j]);
  sortingProcess = setTimeout(function () {
    animate(swaps);
  }, 200);
}

function selectionSort(array) {
  const swaps = [];

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      swaps.push([i, minIndex]);
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return swaps;
}

//for displaying the bars
function showbars(indices) {
  container1.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");

    if (indices && indices.includes(i)) {
      bar.style.backgroundColor = "red";
    }
    container1.appendChild(bar);
  }
}
