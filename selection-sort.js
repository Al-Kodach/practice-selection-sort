

function selectionSort(arr) {
  // Copy the original array
  const copyArr = [...arr];

  // Create an array to store the sorted values
  const sorted = [];

  let min,
      i;

  // While the array is not empty...
  while(copyArr.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    for (let i = 0; i < copyArr.length; i++) {
      let el = copyArr[i];

      if (min === undefined || el < min) {
        min = el;
      } 
    }

    // Add the min value to the end of the sorted array
    sorted.push(min);

    // Save and remove the value at the min index
    i = copyArr.indexOf(min);
    copyArr.splice(i, 1);

    min = undefined;
  }

  return sorted;
}



function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  let min;
  let idx;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    for (let i = divider; i < arr.length; i++) {
      let el = arr[i];

      if (min === undefined || el < min) {
        // Save the min value
        min = el;
      }
    }

    idx = arr.indexOf(min);

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let j = idx - 1; j >= divider; j--) {
      arr[j + 1] = arr[j];
    }

    // Put the min value at the divider
    arr[divider] = min;

    min = undefined;

    // Increment the divider and repeat
    divider++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];