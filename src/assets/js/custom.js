
    const container = document.querySelector('.container');
    const seats = document.querySelectorAll('.row .seat:not(.occupied');
    const count = document.getElementById('count');
    const total = document.getElementById('total');
    
    let listofseats = [];
    
    
    $(document).ready( function() {
    $(".seat").click( function() {
    //Toggle that seat to occupied
    if($(this).hasClass("seat selected")){
    $(this).removeClass("selected");
    listofseats.splice(listofseats.indexOf($(this).attr("id")),1);
    }
    else if ($(this).hasClass("seat occupied")){
        listofseats.push($(this).null);
        
    }
    else
    {
    $(this).addClass("selected");
    listofseats.push($(this).attr("id"));
    }
    
    
    document.getElementById("demo").innerHTML = listofseats.join("    ");
    
    });
    });