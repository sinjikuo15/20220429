$(document).ready(function() {
    const $navbar = $('#navbar')
    const $cookieHintContainer = $('#cookie-hint-container');
    $(document)
    .on('click', '#cookie-hint-button', function() {
        $cookieHintContainer.fadeOut();
    })
    .on('scroll', function() {
        // if ($navbar.offset().top > 80) {
        //     $navbar.addClass('shadow');
        // } else {
        //     $navbar.removeClass('shadow');
        // }
        $navbar.offset().top > 80
            ? $navbar.addClass('shadow')
            : $navbar.removeClass('shadow');
    });

});
$(document).ready(function () {
    const $form = $('form');
    $form.submit(function (event) {
      // 阻止原生 submit 行為
      event.preventDefault();
      if ($form.hasClass('needs-validation')) {
        $form.removeClass('needs-validation');
        $form.addClass('was-validated');
      }
  
      if ($('.form-control:invalid').length === 0) {
        // doLogin()
        alert('登入成功');
      }
    });
  });