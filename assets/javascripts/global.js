// ATTENTION APPDEV!
// Do not write your js here if you do not intend a global scope to the entire application.
$(document).ready(function() {

	//also logout fb when user logs out of yp
	$('#ypv4-logout').click(function() {
		try{
			FB.logout(function(response) {
			   // Person is now logged out
			});
		}
		catch(e){
			//console.log('An error has occurred: '+ e.message)
		}
	});
	
});