const quickSort = (arr) =>{
    if(arr.length<2){
        return arr;
    }else{
        var pivot = arr[arr.length - 1];
        var left = [];
        var right = [];
        
        for(var i = 0; i<arr.length - 1; i++){
            if(arr[i]<pivot){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return [...left, pivot, ...right];
    }
    
}

const arr = [10,12,5,20,9,4,-2,0];
const output = quickSort(arr);
console.log(output);
