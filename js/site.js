// jQuery 3.x-style ready event and locally scoped $
$(document).ready(function() {

  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  $('#burger').click(function() {
    $('#menu').toggle('#menu');
    $('#container').toggle('#container.active');
  })

  $('#history').click(function() {
    $('.history').toggle('.history');
    if($('.constitution').is(':visible'))
    {
      $('.constitution').toggle('.constitution');
    }
    if($('.journal').is(':visible'))
    {
      $('.journal').toggle('.journal');
    }
  })

  $('#constitution').click(function() {
    $('.constitution').toggle('.constitution');
    if($('.history').is(':visible'))
    {
      $('.history').toggle('.history');
    }
    if($('.journal').is(':visible'))
    {
      $('.journal').toggle('.journal');
    }
  })

  $('#journal').click(function() {
    $('.journal').toggle('.journal');
    if($('.history').is(':visible'))
    {
      $('.history').toggle('.history');
    }
    if($('.constitution').is(':visible'))
    {
      $('.constitution').toggle('.constitution');
    } 
  })
  
  var button = document.getElementById("submit");
  button.addEventListener("click", function buttonPress() {
      var firstname = document.getElementById("firstname").value;
      var lastname = document.getElementById("lastname").value;
      var email = document.getElementById("email").value;
      if (firstname && lastname && email) {
          alert("More information is headed your way!");
      } else {
          alert("Please fill out all boxes...");
      }
  })
})
