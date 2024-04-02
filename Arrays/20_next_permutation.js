function nextPermutation(arr) {
    let ind = -1;
    for (i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            ind = i;
            break;
        }
    }
    if (ind === -1) {
        return arr.reverse();
    }
    console.log(ind)
    for (i = arr.length - 1; i > ind; i--) {
        if (arr[i] > arr[ind]) {
            [arr[ind], arr[i]] = [arr[i], arr[ind]];
            break;
        }
    }
    console.log(arr);
    reverseArr(arr, ind + 1, arr.length - 1);
    return arr;
}

function reverseArr(arr, left, right) {
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]));
