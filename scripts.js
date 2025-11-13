// CONFIGURACIÓN - Fecha EXACTA 23 diciembre 2025, 8:55 PM
const TRAVEL_DATE = new Date(2025, 11, 23, 8, 55, 0); // 20 = 8 PM, 55 = minutos

// Lista de fotos
const PHOTOS = [
    './fotos/Primos_001.jpeg',
    './fotos/Primos_002.jpeg',
    './fotos/Primos_003.jpeg',
    './fotos/Primos_004.jpeg',
    './fotos/Primos_005.jpeg',
    './fotos/Primos_006.jpeg',
    './fotos/Primos_007.jpeg',
    './fotos/Primos_008.jpeg',
    './fotos/Primos_009.jpeg',
    './fotos/Primos_010.jpeg',
    './fotos/Primos_011.jpeg',
    './fotos/Primos_012.jpeg',
    './fotos/Primos_013.jpeg',
    './fotos/Primos_014.jpeg',
    './fotos/Primos_015.jpeg',
    './fotos/Primos_016.jpeg',
    './fotos/Primos_017.jpeg',
    './fotos/Primos_018.jpeg',
    './fotos/Primos_019.jpeg',
    './fotos/Primos_020.jpeg',
    './fotos/Primos_021.jpeg',
    './fotos/Primos_022.jpeg',
    './fotos/Primos_023.jpeg',
    './fotos/Primos_024.jpeg',
    './fotos/Primos_025.jpeg',
    './fotos/Primos_026.jpeg',
    './fotos/Primos_027.jpeg',
    './fotos/Primos_028.jpeg',
    './fotos/Primos_029.jpeg',
    './fotos/Primos_030.jpeg',
    './fotos/Primos_031.jpeg',
    './fotos/Primos_032.jpeg',
    './fotos/Primos_033.jpeg',
    './fotos/Primos_034.jpeg',
    './fotos/Primos_035.jpeg',
    './fotos/Primos_036.jpeg',
    './fotos/Primos_037.jpeg',
    './fotos/Primos_038.jpeg',
    './fotos/Primos_039.jpeg',
    './fotos/Primos_040.jpeg',
    './fotos/Primos_041.jpeg'
];

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página cargada');
    console.log('🎯 Fecha viaje:', TRAVEL_DATE.toString());
    console.log('🕐 Hora viaje:', TRAVEL_DATE.getHours() + ':' + TRAVEL_DATE.getMinutes());
    console.log('📅 Hoy:', new Date().toString());
    
    updateCountdown();
    showPhotoOfDay();
    setInterval(updateCountdown, 1000);
});

// CONTADOR CORREGIDO
function updateCountdown() {
    const now = new Date();
    const timeDifference = TRAVEL_DATE.getTime() - now.getTime();
    
    console.log('🐛 DEBUG HORAS:');
    console.log('Hora VIAJE:', TRAVEL_DATE.getHours() + 'h ' + TRAVEL_DATE.getMinutes() + 'm');
    console.log('Hora AHORA:', now.getHours() + 'h ' + now.getMinutes() + 'm');
    console.log('Diferencia ms:', timeDifference);
    
    if (timeDifference <= 0) {
        document.querySelector('.countdown-container').innerHTML = `
            <div class="arrival-message">
                <h2>🎉 ¡Ya estamos allí! 🎉</h2>
                <p>¡Disfruten de las vacaciones!</p>
            </div>
        `;
        return;
    }
    
    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    console.log('⏱️ Exacto:', days + 'd', hours + 'h', minutes + 'm', seconds + 's');
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// FOTO DEL DÍA
function showPhotoOfDay() {
    const today = new Date();
    const startDate = new Date(2025, 10, 13); // 13 noviembre 2025
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const photoIndex = Math.max(0, daysDiff) % PHOTOS.length;
    
    const photoUrl = PHOTOS[photoIndex];
    console.log('🖼️ Foto del día:', photoUrl, 'Índice:', photoIndex);
    
    const imgElement = document.getElementById('photo-of-day');
    imgElement.src = photoUrl;
    
    imgElement.onload = function() {
        console.log('✅ Foto cargada');
        document.getElementById('photo-info').textContent = 
            `Día ${photoIndex + 1} de ${PHOTOS.length}`;
    };
    
    imgElement.onerror = function() {
        console.log('❌ Error cargando foto');
        document.getElementById('photo-info').textContent = 
            `Error cargando la foto - Día ${photoIndex + 1}`;
    };
}

// Función de prueba
function debugDates() {
    const now = new Date();
    const travel = new Date(2025, 11, 23, 20, 55, 0);
    const diff = travel - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    console.log('🐛 DEBUG:');
    console.log('Hoy:', now.toLocaleString());
    console.log('Viaje:', travel.toLocaleString());
    console.log('Días calculados:', days);
    console.log('Horas calculadas:', hours);
    console.log('Diferencia total horas:', Math.floor(diff / (1000 * 60 * 60)));
}

// Ejecutar debug
setTimeout(debugDates, 2000);
