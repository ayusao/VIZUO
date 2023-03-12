let container = document.getElementById("bar_container");
const numOfBars = 20;
const maxValue = 100;
const minValue = 5;
let unsortedArray = [];
let sort_btn = document.getElementById("sort_btn");

function generateRandomNum(min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}
function generateBar() {
    for (let i = 0; i < numOfBars; i++) {
        let bars = document.createElement("div");
        bars.classList.add("bar");
        let randomValue = generateRandomNum(minValue, maxValue);
        unsortedArray[i] = randomValue;

        bars.style.height = `${unsortedArray[i] * 3}px`;
        bars.style.transform = `translate(${i * 30}px)`;

        container.appendChild(bars);
    }
}

function timeDelay(ms) {
    return new Promise((resolve) => setTimeout(resolve,ms));
}

//shell short function
async function shellSort(array) {
    let bars=document.querySelectorAll(".bar");
    let Gap=numOfBars;
    let temp;
    while (Gap>1) {
        await timeDelay(100);
        Gap = Math.floor((Gap+1) / 2);
        for (let j = Gap; j < numOfBars; j++) {
            for (let i = (j - Gap); i >= 0;i= (i - Gap)) {
                let k=i+Gap;
                await timeDelay(100);
                bars[k].style.backgroundColor = "red";
                bars[i].style.backgroundColor = "red";
                await timeDelay(100);
                if (array[k] < array[i]) 
                {
                    await timeDelay(100);
                    temp = array[i];
                    array[i] = array[k];
                    bars[i].style.height = `${array[i] * 3}px`;
                    await timeDelay(100);
                    array[k] = temp;
                    bars[k].style.height = `${array[i + Gap] * 3}px`;
                    await timeDelay(100);
                }
                else
                {
                    bars[k].style.backgroundColor = "yellow";
                    bars[i].style.backgroundColor = "yellow";
                    await timeDelay(100);
                    break;
                }
                bars[k].style.backgroundColor = "yellow";
                bars[i].style.backgroundColor = "yellow";
                await timeDelay(100);
            }
        }
        
    }
   for (i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "green";
    }
    return array;
}

sort_btn.addEventListener("click", function () {
    let sortedArray = shellSort(unsortedArray);
});
generateBar();