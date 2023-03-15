const defaultArraySize = 20;


let arraySize = defaultArraySize;
let array = [];

let sortingProcess;

initialize();
let delay = 260;
let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);//the more the slider goes right, lesser the delay value ie faster the speed
});

// for generating random values
function initialize() {
  // Stop any ongoing sorting process
  if (sortingProcess) {
    clearTimeout(sortingProcess);
  }

  // Generate a new array of random values
  for (var i = 0; i < arraySize; i++) {
    array[i] = Math.random();
  }
  
  showbars();
}

function play() {
  const copyarray = [...array];
  const swapping = bubbleSort(copyarray);
  animate(swapping);
}

function animate(swaps) {
  if (swaps.length === 0) {
    showbars();
    return;
  }

  const [i, j] = swaps.shift();
  [array[i], array[j]] = [array[j], array[i]];
  showbars([i, j]);

  sortingProcess = setTimeout(() => {
    animate(swaps);
  }, delay);
}

function bubbleSort(array) {
  const swaps = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swaps.push([j, j + 1]);

        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return swaps;
}

// for displaying the bars
function showbars(indices) {
  const container = document.getElementById("container1");
  container.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i]*100+"%";
    bar.classList.add("bar");

    if (indices && indices.includes(i)) {
      bar.style.backgroundColor = "red";
    }
    container.appendChild(bar);
  }
}

function onSizeSliderChange(event) {
  arraySize = Number(event.target.value);
  initialize();
}

const sizeSlider = document.getElementById("size-slider");
sizeSlider.addEventListener("input", onSizeSliderChange);

