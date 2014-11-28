$(document).ready(function(){
    $(document).on('touchstart click', '#collapse-button, #close-list', function(e){
        e.preventDefault();
        // $('#collapse-button span').toggleClass('hidden');
        $('#nav-collapse').collapse('toggle');
    });

    $(document).on('touchstart click', '#login-btn', function(e){
        e.preventDefault();

        $('#login-div, #callToAction').toggleClass('hidden');
        $('#login-email').focus();
    });

    $(document).on('touchstart click', '#sign-up-btn', function(e){
        e.preventDefault();

        $('#sign-up-div, #callToAction').toggleClass('hidden');
    });

    $(document).on('submit', '#login-form', function(e){
        e.preventDefault();

        var email = $('#login-email').val();
        var password = $('#login-password').val();

        // if (e.currentTarget)
    });

    $(document).on('touchstart click', '#loginFormReset', function(e){
        e.preventDefault();

        $('#login-div, #callToAction').toggleClass('hidden');
    });

    $(document).on('touchstart click', '#signUpFormReset', function(e){
        e.preventDefault();

        $('#sign-up-div, #callToAction').toggleClass('hidden');
    });
});
