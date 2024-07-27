 var select = $('#selector').val();
        $.ajax({
            type: 'POST',
            url: 'process.php',
            dataType: "html",
            data: { select1: select },
            success: function(response) {
                $('#response').html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error: ' + error);
            }
        });

var mySelect = document.getElementById('selector');
mySelect.onchange = function(){
 var select = $('#selector').val();
        $.ajax({
            type: 'POST',
            url: 'process.php',
            dataType: "html",
            data: { select1: select },
            success: function(response) {
                $('#response').html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error: ' + error);
            }
        });
    }


