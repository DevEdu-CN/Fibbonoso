function fibonacci(n, arr = []){
    if(n <= 0) return arr
    if(n === 1) return [0,1]

    arr = fibonacci(n-1, arr);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr
} 

console.log(fibonacci(10)); 