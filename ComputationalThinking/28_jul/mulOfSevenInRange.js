function mulOfSevenInRange(start , end)
{
    for(let i = start; i <= end; i++)
    {
        if(i % 7 === 0)
        {
            console.log(i);
        }
    }
}
mulOfSevenInRange(1 , 100);