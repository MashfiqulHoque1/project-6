function helloworld(){
    var x = document.getElementById("textbox").value ;

    if (x == "es" || x=="spanish"){
        document.getElementById("i1").innerHTML = "Hola Mundo";
    }

    else if(x == "de" || x=="deutsch"){
        document.getElementById("i1").innerHTML = "Hallo Welt";
    }

    else if(x == "en" || x=="vietnamese"){
        document.getElementById("i1").innerHTML = "Chào thế giới";
    }

    document.getElementById("textbox").innerHTML = '';
}