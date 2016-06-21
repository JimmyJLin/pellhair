$(function(){
  console.log('script file loaded')

  // Yelp Star Rating
  $('.ui.rating').rating()

  // Social media on hover change color
  $('#socialfacebook').hover(
    function(){
      $(this).removeClass("grey").addClass("blue")
    },
    function(){
      $(this).removeClass("blue").addClass("grey")
    }
  )

  $('#socialfoursquare').hover(
    function(){
      $(this).removeClass("grey").addClass("pink")
    },
    function(){
      $(this).removeClass("pink").addClass("grey")
    }
  )

  $('#socialwechat').hover(
    function(){
      $(this).removeClass("grey").addClass("green")
    },
    function(){
      $(this).removeClass("green").addClass("grey")
    }
  )

  $('#socialinstagram').hover(
    function(){
      $(this).removeClass("grey").addClass("orange")
    },
    function(){
      $(this).removeClass("orange").addClass("grey")
    }
  )

  $('#socialyelp').hover(
    function(){
      $(this).removeClass("grey").addClass("red")
    },
    function(){
      $(this).removeClass("red").addClass("grey")
    }
  )

  // Menu button on hover
  $('#buttonhome').hover(
    function(){
      $(this).css({"background-color":"#666", "color":"white"})
    },
    function(){
      $(this).css({"background-color":"transparent", "color":"black"})
    }
  )

  $('#buttonservice').hover(
    function(){
      $(this).css({"background-color":"#666", "color":"white"})
    },
    function(){
      $(this).css({"background-color":"transparent", "color":"black"})
    }
  )

  $('#buttoncontact').hover(
    function(){
      $(this).css({"background-color":"#666", "color":"white"})
    },
    function(){
      $(this).css({"background-color":"transparent", "color":"black"})
    }
  )

  // flexslider
  $('.flexslider').flexslider({
    touch: true
  })

  // sticky menu
  $('.main.menu').visibility({
    type: 'fixed'
  });



})
