$(document).ready(function(){
    $(document).on('touchstart click', '#collapse-button, #close-list', function(e){
        e.preventDefault();
        $('#collapse-button span').toggleClass('hidden');
        $('#nav-collapse').collapse('toggle');
    });
});
