const n=20;
const array =[];

initialize();
//for generating random values
function initialize(){
    for (var i=0; i<n; i++)
    {
        array[i]= Math.random(); //random number betn 0 and 1
    }
    showbars();
}

function play(){
    bubbleSort(array);
    showbars();
}

function bubbleSort(array){
        for (var i=0; i<array.length; i++)
        {
        for (var j=0; j<= array.length-i; j++)
        {
            if (array[j]>array[j+1])
            {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1]= temp;
            }
        }
    }
}

//for displaying the bars
function showbars(){
    container1.innerHTML = ""; //only one at a time
    for (var i=0; i<array.length; i++)
    {
        const bar = document.createElement("div");
        bar.style.height = array[i]*100+"%";
        bar.classList.add("bar");
        container1.appendChild(bar); //to add new child to it
    }
}

