//built for business tools acct switching
(function(){
	$(document).ready(function() {
		var btPanelVisible = false;
		var btPanel = $('#user-switch-tri, #user-switch');

		/*$('html').click(function() {
			hideBTPanel();
		});*/

		$('#bt-panel-trigger').on('click', function() {
			if (btPanelVisible==false){				
				showBTPanel();
			}else{				
				hideBTPanel();
			}
			return false;
		});

		function showBTPanel(){
			btPanelVisible=true;
			reorderActiveUser();			
			$(btPanel).css('display','block').fadeTo(0,0).stop().fadeTo(250, 1, function() {				
		        $("div.bt-acc-name").each(function(index) {
		        	index++;
		  			$(this).animate({
					    opacity: 0,
					    left: 7*index
					},250).promise().done(function(){
			  			$(this).delay(70*index).promise().done(function(){
	  						$(this).animate({
							    opacity: 1,
							    left: "0"
							}, 500);
						});  						
					});
				});

		        $('.bt-switch-pic').each(function(index){
		        	$(this).delay(100*index).fadeTo(0,0).stop().promise().done(function(){
  						$(this).fadeTo(700,1);
					});
				});
		 	
		 		//scrollbar for user acct switching
		 		$('#user-switch').jScrollPane({
		 			showArrows: true,
		 			arrowScrollOnHover: true,
		 			animateScroll: true
		 		});
  			});
  			return false;
		}

		function hideBTPanel(){
			btPanelVisible=false;
			$(btPanel).fadeTo(1000, 0, function() {				
				$(btPanel).css('display','none');
  			});  			
  			return false;
		}

		function reorderActiveUser(){
			bt_active_usr=$('#user-switch').find('li.active');
			$(bt_active_usr).insertAfter('#bt-acct-label');			
			return false;
		}		
	});
}());