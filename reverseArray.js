const arr = [1, 2, 3, 4, 5];
console.log("Initaial array", arr);
const reverseArray = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
}

reverseArray(arr);
console.log("Reverse array", arr);
// using recursion
const arr1 = [1, 2, 3, 4, 5];
console.log("Initial Array: ", arr1);
const arrLength = arr1.length;
const reverseArray1 = (arr, start, end) => {
    if (start > end) return; // exit condition
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray1(arr, start + 1, end - 1);
}

reverseArray1(arr1, 0, arrLength - 1);
console.log("Reverse array", arr1);