// Set the date to count down to
const countdownDate = new Date("August 17, 2024 00:00:00").getTime();

// Update the countdown every second
const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Add animation class to each timer section
    document.querySelectorAll('.timer-section span').forEach(section => {
        section.classList.add('animate');
        setTimeout(() => {
            section.classList.remove('animate');
        }, 500);
    });

    // If the countdown is over, stop the timer
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
