function insertionSort (arr)
{
    let i, key ,j ;
    for ( i = 1 ; i < arr.length; i++ )
    {
    key = arr [i] ;
    j = i - 1 ;
    
    while (j >= 0 && arr[j] > key )
    {
        arr[j + 1] = arr[j];
        j = j - 1 ;
    }
    arr[ j + 1] = key ; 
    }
    return arr
}
let arr = [30,5,34,-12,5 ] ;

console.log(insertionSort(arr)) ; 