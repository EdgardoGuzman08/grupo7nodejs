jQuery(function($){
    $(".guardar").on("click", function(){
        $.post(
            $(this).val(),
            {
                name: $("#name").val(),
                email: $("#email").val(),
                subject: $("#subject").val(),
                message: $("#message").val()
            },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            window.location.reload();
        });
    });
})
(jQuery);

