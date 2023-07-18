// complete the given function

function palindrome(str){
	int n = str.length;

	for(let i = 0;i<n/2;i++){
		if(str[i] !== str[n-i-1]){
			return false;
		}
	}

	return true;

}
module.exports = palindrome
