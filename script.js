document.addEventListener('DOMContentLoaded', function() {
    const audioMorat = document.getElementById('audioMorat');
    audioMorat.play().catch(error => {
        console.log("La reproducción automática de audio fue bloqueada.");
    });
});