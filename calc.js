function calcspeed() {
    var speedfinal = 0;
    if(document.getElementById('min').value == '' || document.getElementById('sec').value == ''){
        document.getElementById('alerttext').innerHTML = "Wartość minut lub sekund nie może być pusta!";
        document.getElementById('alertbox').style.background = '#f44336';
        document.getElementById('alertbox').style.display = 'inherit';
    }else if(parseInt(document.getElementById('sec').value) >= 60){
        document.getElementById('alerttext').innerHTML = "Wartość sekund nie może przekraczać 59!";
        document.getElementById('alertbox').style.background = '#F4D03F';
        document.getElementById('alertbox').style.display = 'inherit';
    }else{
        var localpace = 0;
        document.getElementById('alertbox').style.display='none';
        localmin = parseInt(document.getElementById('min').value);
        localsec = parseInt(document.getElementById('sec').value);
        localpace = localmin + localsec/60;
        speedfinal = 60 / localpace;
        document.getElementById('speed').innerHTML = speedfinal.toFixed(2) + " km/h";
    }
}

function calctempo() {
    var tempofinalmin, tempofinalsec = 0;
    if(document.getElementById('kmh').value == ''){
        document.getElementById('alerttext').innerHTML = "Wartość prędkości nie może być pusta!";
        document.getElementById('alertbox').style.background = '#f44336';
        document.getElementById('alertbox').style.display = 'inherit';
    }else if(document.getElementById('kmh').value == "test"){
        document.getElementById('alerttext').innerHTML = "Prędkość zawiera znaki alfabetyczne";
        document.getElementById('alertbox').style.background = '#F4D03F';
        document.getElementById('alertbox').style.display = 'inherit';
    }else{
        var localkmh = 0;
        document.getElementById('alertbox').style.display='none';
        localkmh = parseFloat(document.getElementById('kmh').value);
        tempofinal = 60 / localkmh;
        var tempoarray = tempofinal.toString().split('.');
        var finalarray = new Array();
        finalarray = tempoarray;
        tempofinalsec = Math.floor(finalarray[1].substring(0,3) * 6/100);
        document.getElementById('tempo').innerHTML = finalarray[0] + "m " + tempofinalsec + "s / km"
    }
}