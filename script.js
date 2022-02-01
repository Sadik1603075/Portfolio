$(document).ready(function(){
    // smooth scrolling 
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
      $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
      },
        500, 
        'linear'
      );
    });
  });


// Send mail
function sendMail(){

  var tempParams = {
    from_name: document.getElementById("email").value,
    to_name: "Barik",
    message: document.getElementById("message").value,
    name: document.getElementById("name").value,
  };

  console.log(tempParams)

  emailjs.send('service_kb57j8s', 'template_rism2ej', tempParams)
  .then(function(res){
    console.log("success", res.status);
  });
}