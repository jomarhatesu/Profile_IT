function updateClock() {
    const now = new Date();
    
    // Time format: HH:MM:SS AM/PM
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // Date format: Weekday, Month Day, Year
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    // I-update ang HTML elements
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");

    if (clockElement) clockElement.innerHTML = timeString;
    if (dateElement) dateElement.innerHTML = dateString;
}

// Mag-update bawat 1 segundo
setInterval(updateClock, 1000);

// Run agad pagka-load ng page
updateClock();
