var a;

function klikanie(pole) {
    document.getElementById("vkeyboard").style.display = "block";
    a = pole;
}

function typechar(c){
    $("#" + a).html(c);
    $("#vkeyboard").hide();
}

function check(){
    var text = document.getElementById("1").innerText + document.getElementById("2").innerText + document.getElementById("3").innerText + document.getElementById("4").innerText
    + document.getElementById("5").innerText + document.getElementById("6").innerText + document.getElementById("7").innerText + document.getElementById("8").innerText
    + document.getElementById("9").innerText + document.getElementById("10").innerText + document.getElementById("11").innerText + document.getElementById("12").innerText
    + document.getElementById("13").innerText + document.getElementById("14").innerText;
    if(text == "WSPOLNADECYZJA"){
        document.getElementById("content").style.display = "none";
        document.getElementById("answer").style.display = "block";
    }
    else{
        alert("Błędna odpowiedź. Spróbuj ponownie!");
    }
}