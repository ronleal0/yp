//built for business tools acct switching
(function(){
	$(document).ready(function() {
		var btMpPanelVisible = false;
		var btMpPanel = $('#marketplace-tri, #marketplace-ul');

		/*$('html').click(function() {
			hidebtMpPanel();
		});*/

		$('#bt-marketplace-trigger').on('click', function() {
			if (btMpPanelVisible==false){
				showbtMpPanel();
			}else{				
				hidebtMpPanel();
			}
			return false;
		});

        $('#marketplace-tri').hover(
            function () {
                showbtMpPanel();
            },
            function () {
                hidebtMpPanel();
            }
        );

        $('#bt-marketplace-trigger').hover(
            function () {
                hidebtMpPanel();
            }
        );

		function showbtMpPanel(){
			btMpPanelVisible=true;
			//reorderActiveUser();
			$(btMpPanel).css('display','block').fadeTo(0,0).stop().fadeTo(0,1);
  			return false;
		}

		function hidebtMpPanel(){
			btMpPanelVisible=false;
			$(btMpPanel).fadeTo(500, 0, function() {
				$(btMpPanel).css('display','none');
  			});
  			return false;
		}

	});
}());