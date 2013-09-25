//Largest Palindrome Product
//projecteuler.net/problem4
//Emma Flock and Zoe Madden-Wood, 9/25/2013
//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
/////Find the largest palindrome made from the product of two 3-digit numbers.
//Solution: Palindrome 906609 is divisible by 993 and 913.

///finding an array of palindromes
var palind = [];
var largest = [];

var max3 = 999;
var min3 = 100;
    var max = Math.pow(max3,2);
    var min = Math.pow(min3,2);
    
for (var g=max; g>=min; g--) 
    {
        // Checking that the number and its reverse are the same.
        var string = g.toString();
        var neuw = string.split("");
        var hmmm = neuw.reverse();
        var finale = hmmm.join("");
        // If the number's a palindrome: push to palind array!
        if (finale===string) 
            { 
                palind.push(g);
                
            }
    }

// which palindrome has 2 3 digit factors?
var endh = palind.length;


for (var p = 0; p <= endh -1; p++) 
{
    // Setting the parameters so that it's only checking 3-digit numbers.
    for (var x = max3; x >= min3; x--) 
    {
        if ((palind[p]%x)===0) 
            {
                var otherfactor = (palind[p]/x);
                // inttest tests that it's an integer by comparing the number with an integer.
                var inttest = Math.floor(otherfactor)===otherfactor;
                if ((inttest)&&(otherfactor>=min3)&&(otherfactor<=max3))
                {
                    largest.push(palind[p]);
                    console.log("Palindrome " +palind[p]+ " is divisible by " +x+ " and " +otherfactor +".");
                    break;
                }
            }
    }
    // This breaks when the array length gets to be 1, therefore not accruing further numbers.
    if (largest.length===1)
        {break;}
}