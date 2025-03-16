isPlaying = false;
function playpause(){
    if (isPlaying){
        // Busca en el html el elemento con dicho id y pausa el audio
        document.getElementById('musica').pause();
        isPlaying = false;
    } else {
        document.getElementById('musica').play();
        isPlaying = true;
    }
}

function stock() {
    alert("NO HAY STOCK");
}