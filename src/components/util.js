import $ from "jquery";

export var util = {

   animateInView: function() {
      var $window = $(window),
         win_height_padded = $window.height(),
         scrolled = $window.scrollTop();

      $(".animateInView:not(.animated)").each(function () {
         var $this = $(this),
            offsetTop = $this.offset().top;

         if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
               if ($this.data('animation')) {
                  window.setTimeout(function () {
                     $this.addClass('animated ' + $this.data('animation'));
                  }, parseInt($this.data('timeout'), 10));
               }
            } else if ($this.data('animation')) {
               $this.addClass('animated ' + $this.data('animation'));
            }
         }
      });

      $(".animateInView.animated").each(function (index) {
         var $this = $(this),
            offsetTop = $this.offset().top,
            animation = $this.data('animation');

         if (scrolled + win_height_padded < offsetTop) {
            $this.removeClass('animated '+animation);
         }
      });
   }
}