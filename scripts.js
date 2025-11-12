// CONFIGURACIÓN - Fecha CORREGIDA para 2025
const TRAVEL_DATE = new Date(2025, 11, 23, 20, 55, 0); // 23 diciembre 2025, 8:55 PM

// Lista de fotos
const PHOTOS = [
    'fotos/Primos_001.jpeg',
    'fotos/Primos_002.jpeg',
    'fotos/Primos_003.jpeg',
    'fotos/Primos_004.jpeg',
    'fotos/Primos_005.jpeg',
    'fotos/Primos_006.jpeg',
    'fotos/Primos_007.jpeg',
    'fotos/Primos_008.jpeg',
    'fotos/Primos_009.jpeg',
    'fotos/Primos_010.jpeg',
    'fotos/Primos_011.jpeg',
    'fotos/Primos_012.jpeg',
    'fotos/Primos_013.jpeg',
    'fotos/Primos_014.jpeg',
    'fotos/Primos_015.jpeg',
    'fotos/Primos_016.jpeg',
    'fotos/Primos_017.jpeg',
    'fotos/Primos_018.jpeg',
    'fotos/Primos_019.jpeg',
    'fotos/Primos_020.jpeg',
    'fotos/Primos_021.jpeg',
    'fotos/Primos_022.jpeg',
    'fotos/Primos_023.jpeg',
    'fotos/Primos_024.jpeg',
    'fotos/Primos_025.jpeg',
    'fotos/Primos_026.jpeg',
    'fotos/Primos_027.jpeg',
    'fotos/Primos_028.jpeg',
    'fotos/Primos_029.jpeg',
    'fotos/Primos_030.jpeg',
    'fotos/Primos_031.jpeg',
    'fotos/Primos_032.jpeg',
    'fotos/Primos_033.jpeg',
    'fotos/Primos_034.jpeg',
    'fotos/Primos_035.jpeg',
    'fotos/Primos_036.jpeg',
    'fotos/Primos_037.jpeg',
    'fotos/Primos_038.jpeg',
    'fotos/Primos_039.jpeg',
    'fotos/Primos_040.jpeg'
];

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada - Fecha objetivo:', TRAVEL_DATE);
    console.log('Fecha actual:', new Date());
    
    updateCountdown();
    showPhotoOfDay();
    
    // Actualizar el contador cada segundo
    setInterval(updateCountdown, 1000);
});

// CONTADOR REGRESIVO
function updateCountdown() {
    const now = new Date();
    const timeDifference = TRAVEL_DATE - now;
    
    console.log('Diferencia de tiempo:', timeDifference);
    
    if (timeDifference <= 0) {
        // ¡Ya llegó el momento!
        document.querySelector('.countdown-container').innerHTML = `
            <div class="arrival-message">
                <h2>🎉 ¡Ya estamos allí! 🎉</h2>
                <p>¡Disfruten de las vacaciones!</p>
            </div>
        `;
        return;
    }
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    console.log('Tiempo restante:', days, 'días', hours, 'horas', minutes, 'minutos', seconds, 'segundos');
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// SISTEMA POR FECHA - MISMA FOTO PARA TODOS CADA DÍA
function showPhotoOfDay() {
    const today = new Date();
    
    // Calcular días desde una fecha fija (ej: inicio del año)
    const startDate = new Date(today.getFullYear(), 0, 1); // 1 de enero
    const daysFromStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    // Usar el día del año para seleccionar foto
    const photoIndex = daysFromStart % PHOTOS.length;
    const photoOfDay = PHOTOS[photoIndex];
    
    console.log(`📅 Día del año: ${daysFromStart}`);
    console.log(`🖼️ Foto del día para todos: ${photoOfDay} (índice: ${photoIndex})`);
    
    displayPhoto(photoOfDay, today.toDateString(), daysFromStart + 1);
}

function displayPhoto(photoPath, dateString, dayNumber) {
    const imgElement = document.getElementById('photo-of-day');
    const photoInfo = document.getElementById('photo-info');
    
    console.log('🔄 Cargando foto:', photoPath);
    
    imgElement.src = photoPath;
    imgElement.alt = `Foto del día - ${dateString}`;
    
    // Actualizar información
    if (photoInfo) {
        photoInfo.textContent = `Día ${dayNumber} - ${dateString}`;
    }
    
    // Manejar errores de carga de imagen
    imgElement.onerror = function() {
        console.log('❌ Error cargando imagen:', photoPath);
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0Ij5FcnJvciBjYXJnYW5kbyBsYSBpbWFnZW48L3RleHQ+Cjwvc3ZnPg==';
    };
    
    imgElement.onload = function() {
        console.log('✅ Foto cargada correctamente');
    };
}
