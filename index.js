function hadiah(){
    alert("DARE +1 HAHAHA, TOTAL=4 (klo ga salah)")
}

function bonus(){
    alert("Gaada, ini cuma pajangan biar cardnya keren")
}


function submit(){
    var pass = document.getElementById("pass").value
    const PASSWORD = "bilangakuganteng24mei"

    if (pass === PASSWORD){
  
        location.href='seken.html';

    } else {
        alert("salah password")
    }
}

function kueultah(){
    location.href='birthday/birth.html'
}
