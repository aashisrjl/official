$('#add').click(function(e){
    e.preventDefault();
    if($('#num1').val() && $('#num2').val()){
        var a=$('#num1').val();
        var b=$('#num2').val();

        var x=parseInt(a) + parseInt(b);
        $('#result').html("<br>"+x+"</br>");
    }
    else{
        alert('one field is empty');
    }

});

$('#sub').click(function(e){
    e.preventDefault();
    if($('#num1').val() && $('#num2').val()){
        var a=$('#num1').val();
        var b=$('#num2').val();

        var x=parseInt(a) - parseInt(b);
        $('#result').html("<br>"+x+"</br>");
    }
    else{
        alert('one field is empty');
    }

});

$('#div').click(function(e){
    e.preventDefault();
    if($('#num1').val() && $('#num2').val()){
        var a=$('#num1').val();
        var b=$('#num2').val();

        var x=parseInt(a) * parseInt(b);
        $('#result').html("<br>"+x+"</br>");
    }
    else{
        alert('one field is empty');
    }

});

$('#mul').click(function(e){
    e.preventDefault();
    if($('#num1').val() && $('#num2').val()){
        var a=$('#num1').val();
        var b=$('#num2').val();

        var x=parseInt(a) + parseInt(b);
        $('#result').html("<br>"+x+"</br>");
    }
    else{
        alert('one field is empty');
    }

});