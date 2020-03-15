(function($)
{
  $.fn.my_wysiwyg=function(option1, option2, option3, option4, option5)
  {
    var buttons = {buttons : ['gras', 'italic', 'strikeThrough', 'ForeColor','fontSize',option1, option2, option3, option4, option5]};
    var parameters = $.extend(buttons);
    return this.each(function()
    {
      $(this).wrap("<div class = 'wysiwyg'></div>");
      var wrap = $(this).parent();

      wrap.append("<div class='editor' contenteditable='true'></div>");
      $(this).hide();

      wrap.prepend("<div class='buttons'></div>");

    if ($.inArray("gras", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='gras'>BOLD</button>");
        wrap.find(".gras").click(function() 
        {
          document.execCommand('bold');
        });
      };

    if ($.inArray("italic", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='italic'>Italic</button>");
        wrap.find(".italic").click(function() 
        {
          document.execCommand('italic');
        });
      };

    if ($.inArray("strikeThrough", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='baree'>Text barée</button>");
        wrap.find(".baree").click(function() 
        {
          document.execCommand('strikeThrough');
        });
      };

    if ($.inArray("ForeColor", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<select>\
        	<option class='yellow'><button class='yellow'>Yellow</button></option>\
        	<option class='red'><button class='red'>Red</button></option>\
        	<option class='blue'><button class='blue'>Blue</button></option>\
        	<option class='green'><button class='green'>Green</button></option>\
        	</select>");
        wrap.find(".yellow").click(function()
        {
          document.execCommand('ForeColor', false, 'yellow' );
        });

        wrap.find(".red").click(function()
        {
        	document.execCommand('ForeColor', false, 'red' );
        })

        wrap.find(".blue").click(function()
        {
        	document.execCommand('ForeColor', false, 'blue' );
        })

        wrap.find(".blue").click(function()
        {
        	document.execCommand('ForeColor', false, 'blue' );
        })

       	wrap.find(".green").click(function()
        {
        	document.execCommand('ForeColor', false, 'green' );
        })
      };


      var size = 2;

    if ($.inArray("fontSize", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='plus'>+</button>");
        wrap.find(".plus").click(function() 
        {
          size = size+1;
          document.execCommand('fontSize', false, size);
        });
      };

    if ($.inArray("fontSize", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='minus'>-</button>");
        wrap.find(".minus").click(function() 
        {
          size = size-1;
          document.execCommand('fontSize', false, size);
        });
      };

    if ($.inArray("justifyLeft", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='left'>Left</button>");
        wrap.find(".left").click(function()
        	
        {
         document.execCommand('justifyLeft');
        });
      };

    if ($.inArray("justifyRight", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='right'>Right</button>");
        wrap.find(".right").click(function()
        	
        {
         document.execCommand('justifyRight');
        });
      };

    if ($.inArray("justifyCenter", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='center'>Center</button>");
        wrap.find(".center").click(function()
        	
        {
         document.execCommand('justifyCenter');
        });
      };

    if ($.inArray("justifyFull", parameters.buttons) != -1) 
      {
        wrap.find(".buttons").append("<button class='full'>Full</button>");
        wrap.find(".full").click(function()
        	
        {
         document.execCommand('justifyFull');
        });
      };

	if ($.inArray("createLink", parameters.buttons) != -1) 
	  {
        wrap.find(".buttons").append("<button class='lien'>Link</button>");
        wrap.find(".lien").click(function() 
        {
          var linkURL = prompt('Enter a URL:', 'http://');
          document.execCommand('createLink', false, linkURL);
        });
      };
    });
  };
})(jQuery);