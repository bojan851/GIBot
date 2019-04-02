$(document).ready(function() {
    
    var username = "";
    
    function send_message(message){
        
        var prevState= $("#container").html();
        
        if(prevState.length > 18) {
                prevState = prevState + "<br>";
            }
            
            $('#container').html(prevState + "<span class= 'current_message'> " + "<span class = 'bot'>GIBot: </span> " + message + "</span>");
            $(".current_message").hide();
            $(".current_message").delay(500).fadeIn();
            $(".current_message").removeClass("current_message");
        
    }
    
    function get_username (){
        send_message("Ćao, kako se zoveš?");
    }
    
    function ai (message) {
        if (username.length < 18){
            username = message;
            send_message("Drago mi je što sam te upoznao! " + username + " je divno ime, imaš li neko pitanje za mene?");
        }
        
        if(message.indexOf("želim da znam")>=0) {
            send_message("Ah, pa to je lako. Najbolji student grafičkog inženjerstva je Tamara Kljajić. Imaš li nešto teže za mene?");
        }
        
        if(message.indexOf("sati")>=0) {
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            send_message("Trenutno je tacno: "+h+":"+m + " imaš još nešto?");
        }
        
        if( (message.indexOf("ništa") >=0) || (message.indexOf("nemam") >=0) ) {
            send_message("Ok, bilo je zadovoljstvo razgovarati sa tobom, vidimo se!");
        }
    }
    
    $(function() {
        
        get_username();
        
        $('#textbox').keypress(function(event){
            if (event.which == 13) {
                if ( $('#enter').prop('checked')) {
                    event.preventDefault();
                    $('#dugme').click();
                }
            }
        });
        
        $('#dugme').click(function(){
            
            var username = "<span class= 'username' = > Ti: </span>";
            
            var newMessage = $('#textbox').val();
            $('#textbox').val("");
            var prevState = $("#container").html();
            
            if (prevState.length>18){
                prevState = prevState + "<br>";
                
            }
            
            $("#container").html(prevState + username + newMessage);
            
            $('#container').scrollTop($('#container').prop('scrollHeight'));
            
            ai(newMessage);
        });
        
    });

    
});