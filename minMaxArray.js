const arr = [6, 2, 3, 4, 1, 9];
console.log("Array values", arr);
const findMinAndMax = (array) => {
    if (array.length <= 0) return;
    let min = array[0];
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        } else if (array[i] > max) {
            max = array[i];
        }
    }
    console.log("Min Value is: ", min);
    console.log("Max Value is: ", max);
}

findMinAndMax(arr);