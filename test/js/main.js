$(document).ready(function(){
  var $text = $("textarea"),
      $submit = $("input[type='submit']"),
      $listComment = $(".comments"),
      textComment;

  $($submit).click(function(){
    if($text.val() == ""){
      alert("Введите комментарий");
      $text.focus();
    } else{
      textComment = $text.html();
      $.ajax({
        type: "POST",
        url: window.local,
        data: textComment,
        cache: false,
        success: function(html){
          $loading.show().fadeOut(300);
          $listComment.append("<div>"+textComment+"</div>");
          $text.html("");
        }
      });
      return false;
    }
  });
});