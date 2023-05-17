jQuery(function($){
    $(".registro").on("click", function(){

        $.post(
            $(this).val(),
            {
                usuario: $("#usuario").val(),
                password: $("#password").val(),
            },
            
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.replace('/app/entre/');    
        });
        
    });
})
(jQuery);