const sendRequest = (message, stars) => {
    $.get( "https://07u9jwp0na.execute-api.us-east-1.amazonaws.com/default/Feedback?comentario="+ message +"&stars="+stars+"").then(function( data ) {
            if(data.status == 200){
                alert("Seu feedback foi enviado com sucesso!")
            }else{
                alert("Erro ao enviar seu feedback.")
            }
    }, function(){
        alert('ERROR!!')
    });
}