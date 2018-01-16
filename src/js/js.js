

 $(document).ready(function(){
  $('.menu-toggler').on('click',function(){
    $('nav').slideToggle().css("display", "block");
  });




$('a').animate({
  scrollTop: $('.menu-toggler').offset().top
}, 2100);



$('.form-info','.form-mail').validate({
      
  rules: {
    email: {
       required: true,
       email: true
    }
  }, //koniec literału obiektowego rules
  messages: {
     email: {
        required: "Podaj adres e-mail.",
        email: "To nie jest prawidłowy adres e-mail."
      }
  },
  errorPlacement: function(error, element) { 
      if ( element.is(":radio") || element.is(":checkbox")) {
         error.appendTo( element.parent()); 
       } else {
         error.insertAfter(element);
       } 
  }

 }); // koniec funkcji validate 



 });
 






   
