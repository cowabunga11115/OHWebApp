function main() { 
    /**
     * Replace below w/ entry from database of classes
     */
    $('#OH').append("Class Name");
    $('#qform').submit(function() {
	$('#queue').append('<p>It worked!</p>');
    });
};

   
$(document).ready(main);
