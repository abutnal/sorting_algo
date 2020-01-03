// METHOD 1 USING forEach 
const bubbleSort = (arr) =>{
    var temp;
    arr.forEach((el, i, arr)=>{
        if(arr[i] > arr[i + 1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp
        }
    })
    return arr;
}



// METHOD 1 USING for loog
const bubbleSort = (arr) =>{
    const len = arr.length;
    var temp;
    for(var i=0; i< len; i++){
        for(var j=0; j<len - i -1; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]  = temp;
            }
        }
    }
    return arr;
}



const arr = [4,3,5,7,6];
const output = bubbleSort(arr);
console.log(output);