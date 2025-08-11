function insertAscendOrder (arr)
{
    for(let i = 1; i < arr.length; i++)
    {
        let key = arr[i];
        let j = i - 1;

        while( j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
const arr = [ 12, 76, 34, 98, 45, 2, 23, 4, 5, 21];
console.log(insertAscendOrder(arr));

// descending order

function insertDescendOrder (arr1)
{
    for( let i = 1; i < arr1.length; i++)
    {
        let key1 = arr1 [i];
        let j1 = i - 1;

        while(j1 >= 0 && arr1[j1] < key1)
        {
            arr1[j1 + 1] = arr1[j1];
            j1--;
        }
        arr1[j1 + 1] = key1;
    }
    return arr1;
}
const arr1 = [ 12, 76, 34, 98, 45, 2, 23, 4, 5, 21];
console.log(insertDescendOrder(arr1));
