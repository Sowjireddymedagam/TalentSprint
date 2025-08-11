function nested (num) 
{ 
    let count = " ";
    for(let i = 0; i <= num; i++)
    {
        for( let j = 0; j <= num; j++)
        {                    
            
        }
        count += " * ";
        
        console.log(count)
    }
}
nested(4);

// print rectangle stars

function patterns (num)
{
    let str = "";
    for( i = 0; i < num; i++)
    {
        for( let j = 0; j < num; j++)
        {
            str += " * ";
        }
        str += '\n'
    }
    return str;
}
console.log(patterns(5));

// print corners only(hallow square)

function hallowSquare (n1)
{
    let pattern = "";
    for( let row = 1; row <= n1; row++ )
        {
            for( let col = 1; col <= n1; col++)
            {
                if( row === 1 || row === n1  ||col === 1 ||col === n1 )
                {
                pattern += "* "
                }
          
            else 
                {
                    pattern +="  "
                }
            }
            pattern += '\n'
        
        }
        return pattern;
        
}
console.log(hallowSquare(5));


// diagonal print in hallowsquare
function diagonal (num)
{
    let pattern = "";
    for( let row = 1; row <= num; row++ )
        {
            for( let col = 1; col <= num; col++)
            {
                if( row === 1 || row === num  ||col === 1 ||col === num ||row + col === (num + 1) || row === col)
                {
                pattern += "* "
                }
          
            else 
                {
                    pattern +="  "
                }
            }
            pattern += '\n'
        
        }
        return pattern;
        
}
console.log(diagonal(5));

// remove rows
function removeRow (num)
{
    let pattern = "";
    for( let row = 1; row <= num; row++ )
        {
            for( let col = 1; col <= num; col++)
            {
                if( col === 1 ||col === num ||row + col === (num + 1) || row === col)
                {
                pattern += "* "
                }
          
            else 
                {
                    pattern += "  "
                }
            }
            pattern += '\n'
        
        }
        return pattern;
        
}
console.log(removeRow(5));

// remove columns

function removeCol (num)
{
    let pattern = "";
    for( let row = 1; row <= num; row++ )
        {
            for( let col = 1; col <= num; col++)
            {
                if( row === 1 || row === num  ||row + col === (num + 1) || row === col)
                {
                pattern += "* "
                }
          
            else 
                {
                    pattern +="  "
                }
            }
            pattern += '\n'
        
        }
        return pattern;
        
}
console.log(removeCol(5));