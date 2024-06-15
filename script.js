var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});
$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height()-$(window).height()){
       $.ajax({
          url: "index.html",
          success: function (data) { $('body').append(data); },
          dataType: 'html'
       });
    }
});

$(function(){
   $("a").click(function(evt){
       var link = $(this).attr("href");
       setTimeout(function() {
           window.location.href = link;
       }, 500);
   });
});