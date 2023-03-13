var container = document.getElementById("heapArray");
let totalBars = 20;

function getArray() {
    for(var i=0;i<totalBars;i++)
    {
        var randomValue = Math.ceil(Math.random()*100);

        var arrayElement = document.createElement("div");
        arrayElement.classList.add("block");

        arrayElement.style.height = `${randomValue * 3}px`;
        arrayElement.style.transform = `translate(${i * 30}px)`;

        var arrayElementLabel = document.createElement("label");
        arrayElementLabel.classList.add("block_id");
        arrayElementLabel.innerText = randomValue;

        arrayElement.appendChild(arrayElementLabel);
        container.appendChild(arrayElement);
    }
}

var count_container  = document.getElementById("count");

function getIndex() {
    for(var i=0;i<totalBars;i++)
    {
        var arrayElement2 = document.createElement("div");

        arrayElement2.classList.add("block2");

        arrayElement2.style.height = `${20}px`;
        arrayElement2.style.transform = `translate(${i * 30}px)`;

        var arrayElementLabel2 = document.createElement("label");
        arrayElementLabel2.classList.add("block_id3");
        arrayElementLabel2.innerText = i;

        arrayElement2.appendChild(arrayElementLabel2);
        count_container.appendChild(arrayElement2);
    }
}

async function delay(m)
{
  await new Promise((resolve) =>
  setTimeout(() => {
    resolve();
  }, m)
);
}

async function Heapify(n, i) {
    var blocks = document.querySelectorAll(".block");
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2
    
    // If left child is larger than root
    if (
      l < n &&
      Number(blocks[l].childNodes[0].innerHTML) >
        Number(blocks[largest].childNodes[0].innerHTML)
    )
      largest = l;
    
    // If right child is larger than largest so far
    if (
      r < n &&
      Number(blocks[r].childNodes[0].innerHTML) >
        Number(blocks[largest].childNodes[0].innerHTML)
    )
      largest = r;
    
    // If largest is not root
    if (largest != i) {
      blocks[i].style.backgroundColor = "red";
      blocks[largest].style.backgroundColor = "red";

         await delay(300);

      var temp1 = blocks[i].style.height;
      var temp2 = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = blocks[largest].style.height;
      blocks[largest].style.height = temp1;
      blocks[i].childNodes[0].innerText =
      blocks[largest].childNodes[0].innerText;
      blocks[largest].childNodes[0].innerText = temp2;

      main();
      await delay(300);
 
      blocks[i].style.backgroundColor = "#6b5b95";
      blocks[largest].style.backgroundColor = "#6b5b95";
      // Recursively Hapify the affected sub-tree
      await Heapify(n, largest);

    }
  }
    
  // Asynchronous HeapSort function
  async function HeapSort(n) {
    var blocks = document.querySelectorAll(".block");
    var indexBox = document.querySelectorAll(".block2");
    
    // Build heap (rearrange array)
    for (var i = n / 2 - 1; i >= 0; i--) {
      await Heapify(n, i);
    }
    
    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
    
      blocks[i].style.backgroundColor = "aqua";
      blocks[0].style.backgroundColor = "aqua";
      await delay(300);
      // Move current root to end
      var temp1 = blocks[i].style.height;
      var temp2 = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = blocks[0].style.height;
      blocks[0].style.height = temp1;
      blocks[i].childNodes[0].innerText = 
      blocks[0].childNodes[0].innerText;
      blocks[0].childNodes[0].innerText = temp2;
      
      main();
      blocks[0].style.backgroundColor = "#6b5b95";
      blocks[i].style.backgroundColor = "rgb(26, 129, 26)";
      indexBox[i].style.backgroundColor = "rgb(26, 129, 26)";
    
      await delay(500);
      // Call max Heapify on the reduced heap
      await Heapify(i, 0);
    }
    blocks[0].style.backgroundColor = "rgb(26, 129, 26)";
    indexBox[0].style.backgroundColor = "rgb(26, 129, 26)";
  }

  function newRandom(){
    location.reload();
  }

 getArray();
 getIndex();

function play()
{
  HeapSort(totalBars);
}