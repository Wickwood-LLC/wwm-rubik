(function ($) {
  Drupal.behaviors.collapseBlock = {
    attach: function (context, settings) {
    	$('.panelizer-view-mode.node-embedded-to-profile>h3').off("click");				// This is to prevent the yoyo effect wherein the block opens and closes immediately
    	$('.panelizer-view-mode.node-embedded-to-profile>h3').on("click", function() {
    		var $this = $(this);
    		$this.parents('.panelizer-view-mode.node-embedded-to-profile').find('.panel-display').first().slideToggle();
    		$this.toggleClass('open');
		  });
    }
  };

  Drupal.behaviors.responsiveEqualHeight = {    
    attach: function (context, settings) {
      equalheight = function(container){

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function() {

          $el = $(this);
          $($el).height('auto')
          topPostion = $el.position().top;

          if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
          } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
          }
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
          }
        });
      }

      $(document).ready(function() {
        if ($(window).width() > 943) {
          equalheight('.featured-display .views-row');
        }
        else {
          $('.featured-display .views-row').css({
            'height': 'auto',
          })
        }
      });

      $(document).on("DOMNodeInserted", function() {
        if ($(window).width() > 943) {
          equalheight('.featured-display .views-row');
        }
        else {
          $('.featured-display .views-row').css({
            'height': 'auto',
          })
        }
      });

      $(window).resize(function(){
        if ($(window).width() > 943) {
          equalheight('.featured-display .views-row');
        }
        else {
          $('.featured-display .views-row').css({
            'height': 'auto',
          })
        }
      });
    }
  };
}(jQuery));