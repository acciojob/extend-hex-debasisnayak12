const extendHex = (shortHex) => {
  // write your code here
	// shortHex = shortHex.replace(/^#/, '');   //use regex
	shortHex = shortHex.replace("#", '');

	if(shortHex.length === 3){
		shortHex = shortHex.split('').map(e => e.repeat(2)).join('');
	}  
	return shortHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
