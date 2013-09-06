

var Zenith=function(array, left, right) {
	if(left===right)
		return array[left];

	var Index = (((right-left)/2)+left);
	var B = Index+1
	if(array[Index] > array[B]) {
		return Zenith(array,left,Index);
	}
	return Zenith(array,B,right); 
}

var main=function() {
	confirm("A unimodal array is an array where its entries are in increasing order up until its maximum element, after which its elements are in decreasing order.") 

	var string=prompt("Please input a unimodal array separated by commas.")
	
	if (!/^[\d,]+$/.test(string)) // if the test of the regex on the array 
	  	//does not pass, it is because it does not from beginning to end contain only 
	    //digits and comments repeated one or more times.
	 	console.log("Sorry. That is not a unimodal array separated by only commas.")

	var array=string.split(',');

	if(array.length>0);
		confirm("The highest element in your unimodal array is " + Zenith(array,0,array.length-1) +".");
}


main()