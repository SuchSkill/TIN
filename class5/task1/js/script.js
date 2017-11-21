function rFact(num)
{
    if (num === 0)
    { return 1; }
    else
    { return num * rFact( num - 1 ); }
}
console.log(rFact(5));

function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}
console.log(sFact(5));

function fibonacci(num){
    var a = 1, b = 0, temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
console.log(fibonacci(5));

function palindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome("Oh my god"));

function alphabet_order(str)
{
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));


function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("pride and prejudice"));

function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1;
}
console.log(isPrime(13));
console.log(isPrime(12));


function checkTypes( arg ) {
    return ({}).toString.call( arg ).match(/\s(\w+)/)[1].toLowerCase();
}
console.log(checkTypes([]));
console.log(checkTypes(1));
console.log(checkTypes("a"));
console.log(checkTypes({}));

function Second_Greatest_Lowest(arr_num)
{
    arr_num.sort(function(x,y)
    {
        return x-y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for(var j=1; j < arr_num.length; j++)
    {
        if(arr_num[j-1] !== arr_num[j])
        {
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');
}
console.log(Second_Greatest_Lowest([1,2,3,4,5]));

function amountTocoins(amount, coins)
{
    if (amount === 0)
    {
        return [];
    }
    else
    {
        if (amount >= coins[0])
        {
            left = (amount - coins[0]);
            return [coins[0]].concat( amountTocoins(left, coins) );
        }
        else
        {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2,1]));

function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
        if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        }
        else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));