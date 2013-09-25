// Largest Palindrome Product
// projecteuler.net/problem4
// Emma Flock and Zoe Madden-Wood, 9/25/2013
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
///// Find the largest palindrome made from the product of two 3-digit numbers.
// Solution: Palindrome 906609 is divisible by 993 and 913.
// Note, this one eliminates the need for creating a palindrome array. Much faster!



var largest = [];
//Setting parameters of all 3 digit numbers--can be easily modified to find all X digit numbers
var max3 = 999;
var min3 = 100;
  var max = Math.pow(max3,2);
  var min = Math.pow(min3,2);

//Searching for the largest palindrome, we'll start at the max ... 
for (var g=max; g>=min; g--) 
  {
	///reverse number
	var string = g.toString();
	var neuw = string.split("");
	var hmmm = neuw.reverse();
	var finale = hmmm.join("");
	//if g is a palindrome, then its reverse will be the same number
	if (finale===string) 
	  { 
		 //If g is a palindrome, does it have a 3 digit integer factor?
		 for (var x = max3; x >= min3; x--) 
		   if ((g%x)===0) 
			 {
			   var otherfactor = (g/x);
			   //g is a palindrome and has one 3 digit factor. Is the second factor an integer, and 3 digits long?
			   var inttest = Math.floor(otherfactor)===otherfactor;
			   if ((inttest)&&(otherfactor>=min3)&&(otherfactor<=max3))
			   {
				 largest.push(g);
				 console.log("Palindrome " +g+ " is divisible by " +x+ " and " +otherfactor +".");
				 break;
			   }
			 }
		///Efficiency! Since we began with the largest possible number, we do not need to continue once we find the largest palindrome with two 3 digit factors.
		 if (largest.length===1)
		   {break;} 
		
	  }
  }