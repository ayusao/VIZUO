const n=20;
const array =[];
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
    const swapping = bubbleSort(copyarray);
    animate(swapping);
  }
  function animate(swaps) {
    if (swaps.length == 0) {
      showbars();
      return;
    }
  
    // Check if a new array has been generated
    if (swaps.length == 1 && swaps[0][0] == -1) {
      return;
    }
  
    const [i, j] = swaps.shift();
    [array[i], array[j]] = [array[j], array[i]];
    showbars([i, j]);
  
    sortingProcess = setTimeout(function () {
      animate(swaps);
    }, 200);
  }
  
function bubbleSort(array){
    const swaps =[];
        for (var i=0; i<array.length; i++)
        {
        for (var j=0; j<= array.length-i; j++)
        {
            if (array[j]>array[j+1])
            {
                swaps.push([j, j+1]);

                var temp = array[j];
                array[j] = array[j+1];
                array[j+1]= temp;
            }
        }
    }
    return swaps;
}

//for displaying the bars
function showbars(indices){
    container1.innerHTML = ""; //only one at a time
    for (var i=0; i<array.length; i++)
    {
        const bar = document.createElement("div");
        bar.style.height = array[i]*100+"%";
        bar.classList.add("bar");

        if (indices && indices.includes(i)){ //for color to the swapping elements
            bar.style.backgroundColor = "red";
        }
        container1.appendChild(bar); //to add new child to it
    }
}

