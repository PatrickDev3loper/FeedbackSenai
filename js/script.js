var stars = 0

$('#stars1').hover(function(){
    if(stars == 0){
        $(this).css('color', '#e34343')
    }
}, function() {
    if(stars == 0){
        $(this).css('color', '#7c7c7c')
    }
})

$('#stars1').click(function(){
    if(stars == 0){
        $(this).addClass('redstar')
    }
    stars = 1
})

$('#stars2').hover(function(){
    if(stars == 0){
        $('#stars1').css('color', '#e34343')
        $('#stars2').css('color', '#e34343')
    }
}, function() {
    if(stars == 0){
        $('#stars1').css('color', '#7c7c7c')
        $('#stars2').css('color', '#7c7c7c')
    }
})

$('#stars2').click(function(){
    if(stars == 0){
        $('#stars1').addClass('redstar')
        $('#stars2').addClass('redstar')
    }
    stars = 2
})

$('#stars3').hover(function(){
    if(stars == 0){
        $('#stars1').css('color', '#e34343')
        $('#stars2').css('color', '#e34343')
        $('#stars3').css('color', '#e34343')
    }
}, function() {
    if(stars == 0){
        $('#stars1').css('color', '#7c7c7c')
        $('#stars2').css('color', '#7c7c7c')
        $('#stars3').css('color', '#7c7c7c')
    }
})

$('#stars3').click(function(){
    if(stars == 0){
        $('#stars1').addClass('redstar')
        $('#stars2').addClass('redstar')
        $('#stars3').addClass('redstar')
    }
    stars = 3
})

$('#stars4').hover(function(){
    if(stars == 0){
        $('#stars1').css('color', '#e34343')
        $('#stars2').css('color', '#e34343')
        $('#stars3').css('color', '#e34343')
        $('#stars4').css('color', '#e34343')
    }
}, function() {
    if(stars == 0){
        $('#stars1').css('color', '#7c7c7c')
        $('#stars2').css('color', '#7c7c7c')
        $('#stars3').css('color', '#7c7c7c')
        $('#stars4').css('color', '#7c7c7c')
    }
})

$('#stars4').click(function(){
    if(stars == 0){
        $('#stars1').addClass('redstar')
        $('#stars2').addClass('redstar')
        $('#stars3').addClass('redstar')
        $('#stars4').addClass('redstar')
    }
    stars = 4
})

$('#stars5').hover(function(){
    if(stars == 0){
        $('#stars1').css('color', '#e34343')
        $('#stars2').css('color', '#e34343')
        $('#stars3').css('color', '#e34343')
        $('#stars4').css('color', '#e34343')
        $('#stars5').css('color', '#e34343')
    }
}, function() {
    if(stars == 0){
        $('#stars1').css('color', '#7c7c7c')
        $('#stars2').css('color', '#7c7c7c')
        $('#stars3').css('color', '#7c7c7c')
        $('#stars4').css('color', '#7c7c7c')
        $('#stars5').css('color', '#7c7c7c')
    }
})

$('#stars5').click(function(){
    if(stars == 0){
        $('#stars1').addClass('redstar')
        $('#stars2').addClass('redstar')
        $('#stars3').addClass('redstar')
        $('#stars4').addClass('redstar')
        $('#stars5').addClass('redstar')
    }
    stars = 5
})

$('.btnSend').click(function(){
    message = $("#textsend").val()
    sendRequest(message, stars)
    $("#textsend").val("")
    $('#stars1').css('color', '#7c7c7c')
    $('#stars2').css('color', '#7c7c7c')
    $('#stars3').css('color', '#7c7c7c')
    $('#stars4').css('color', '#7c7c7c')
    $('#stars5').css('color', '#7c7c7c')
    stars = 0
})