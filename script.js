function updateClock() {
    const now = new Date();
    
    // Format ng Oras (HH:MM:SS AM/PM)
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // Format ng Petsa (Month Day, Year)
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    // I-display sa HTML
    document.getElementById("clock").innerHTML = timeString;
    document.getElementById("date").innerHTML = dateString;
}

// Patakbuhin ang function bawat segundo (1000ms)
setInterval(updateClock, 1000);

// Tawagin agad para hindi "00:00:00" ang makita sa simula
updateClock();
