/** http://stackoverflow.com/a/15120409/477958 **/
$(function () {
  var $form = $('#mc-embedded-subscribe-form');

  $('#mc-embedded-subscribe').on('click', function(event) {
    if(event) event.preventDefault();
    register($form);
  });
});

function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
    success     : function(data) {
     
      if (data.result != "success") {
        var message = data.msg.substring(4);
        $('#notification_container').html('<span class="alert">'+message+'</span>');
      } 

      else {
        var message = data.msg;
        $('#notification_container').html('<span class="success">'+message+'</span>');
      }
    }
  });
}
