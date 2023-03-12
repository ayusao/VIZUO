let container = document.getElementById("bar_container");
const numOfBars=20;
const maxValue=100;
const minValue=5;
let unsortedArray=[];
let sort_btn=document.getElementById("sort_btn");

function generateRandomNum(min,max)
{
  return (Math.floor(Math.random()*(max-min)+min));
}
function generateBar()
{

  for(let i=0;i<numOfBars;i++)
  {
    let bars=document.createElement("div");
    bars.classList.add("bar");
    let randomValue=generateRandomNum(minValue,maxValue);
    unsortedArray[i]=randomValue;

    bars.style.height=`${unsortedArray[i]*3}px`;
    bars.style.transform=`translate(${i * 30}px)`;

    container.appendChild(bars);
  }
}

function timeDelay(ms)
{
  return new Promise((resolve)=>setTimeout(resolve,ms));
}

//write mergeSort function
async function mergeSort(arr) {
  let bars = document.getElementsByClassName("bar");
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  await mergeSort(left);
  await mergeSort(right);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
      // bars[k].style.height = arr[k] * 3 + "px";
      // bars[k].style.backgroundColor = "red";
      // bars[k].innerText = arr[k];
      //await sleep(speedFactor);
    } else {
      arr[k] = right[j];
      j++;
      //bars[k + middle].style.height = arr[k] * 3 + "px";
      //bars[k + middle].style.backgroundColor = "orange";
      // bars[k].innerText = arr[k];
      //await sleep(speedFactor);
    }
    //shift to right side
    //console.log(k);
    //bars[k].style.height = arr[k] * heightFactor + "px";
    //bars[k].style.backgroundColor = "lightgreen";

    // bars[k + middle].style.height = arr[k] * heightFactor + "px";
    // bars[k + middle].style.backgroundColor = "yellow";

    //visualize it for right and left side
    bars[k].style.height = arr[k] * 3 + "px";
    bars[k].style.backgroundColor = "lightgreen";
    if (k + arr.length < bars.length) {
      bars[k + arr.length].style.height = arr[k] * 3+ "px";
      console.log(arr[k] * 3);
      bars[k + arr.length].style.backgroundColor = "yellow";
    }
    await timeDelay(100);
    //bars[k].innerText = arr[k];

    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    bars[k].style.height = arr[k] *3 + "px";
    bars[k].style.backgroundColor = "lightgreen";
    await timeDelay(100);
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    bars[k].style.height = arr[k] * 3 + "px";
    bars[k].style.backgroundColor = "lightgreen";
    await timeDelay(100);
    j++;
    k++;
  }

  // for (let i = 0; i < arr.length; i++) {
  //   bars[i].style.height = arr[i] * heightFactor + "px";
  //   bars[i].style.backgroundColor = "lightgreen";
  //   await sleep(speedFactor);
  // }

  /*for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }*/

  return arr;
}

/*function mergeSortD(arr, start, end) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor((start + end) / 2);
  let left = arr.slice(start, middle);
  let right = arr.slice(middle, end);

  mergeSort(left);
  mergeSort(right);
}*/

/*async function merge(array,begg,mid,end)
{
   let bars=document.querySelectorAll(".bar");
   //let selected=documet.querySelectorAll(".bar");
   let left=array.slice(begg,mid+1);
   let right=array.slice(mid+1,end);
   await timeDelay(100)
   let i=0,j=0,k=begg;
   while(i<left.length && j<right.length)
   {
    if(left[i]<=right[j])
    {
      array[k]=left[i];
      i++;
    }
    else
    {
      array[k]=right[j];
      j++;
    }
    bars[k].style.height=`${array[k]*3}px`;
    bars[k].style.backgroundColor="lightgreen";
    if(k+array.length<bars.length)
    {
      bars[k+array.length].style.height=arr[k]*heightFactor+"px";
      console.log(array[k]*heightFactor);
      bars[k+array.length].style.backgroundColor="yellow";
    }
    await timeDelay(100);
    k++;
   }
   while(i<left.length)
   {
    array[k]=left[i];
    bars[k].style.height=`${array[k]*3}px`;
    bars[k].style.backgroundColor="lightgreen";
    await timeDelay(100);
    k++;
    i++;
   }
   while(j<right.length)
   {
    array[k]=right[j];
    bars[k].style.height=`${array[k]*3}px`;
    bars[k].style.backgroundColor="lightgreen";
    await timeDelay(100);
    k++;
    j++;    
   }
}

async function mergeSort(array,begg,end)
{
  if(begg<end)
  {
    const midd=Math.floor((begg+end)/2);
    await mergeSort(array,begg,midd);
    await mergeSort(array,midd+1,end);
    await merge(array,begg,midd,end);
  }
}*/
sort_btn.addEventListener("click",function(){
 let sortedArray= mergeSort(unsortedArray);
});
generateBar();