// Ascending Order

const arr = [14, 25, 31, 13, 6, 2, 8, 12, 1];

function ascendSort(arr)
{
    let len = arr.length;
    for( i = 0; i < len; i++)
    {
        for(let j = 1; j < len - i; j++)
        {       
            if( arr[j - 1] > arr [j])
            {
                let temp = arr [j - 1];
                arr [j - 1] = arr [j];
                arr [j] = temp;
            }
        }
    }
    return arr;
}
console.log(ascendSort(arr))

// Descending Order

const arr1 = [ 12, 76, 34, 98, 45, 2, 23, 4, 5, 21];

function descendSort (arr1)
{
    for(let i = 0; i < arr1.length; i++)
        {
            for(let j = 1; j <arr1.length - i; j++)
            {
                if(arr1[j] > arr1[j - 1])
                {
                    let temp = arr1[j];
                    arr1[j] = arr1 [j - 1];
                    arr1[ j - 1] = temp;
                }
            }
        }
        return arr1;
}
console.log(descendSort(arr1));