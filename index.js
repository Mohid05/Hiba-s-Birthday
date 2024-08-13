

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('2025-08-18T00:00:00'); // Target date

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();

    let targetYear = targetDate.getFullYear();
    let targetMonth = targetDate.getMonth();
    let targetDay = targetDate.getDate();
    let targetHour = targetDate.getHours();
    let targetMinute = targetDate.getMinutes();

    // Calculate remaining months
    let months = (targetYear - currentYear) * 12 + (targetMonth - currentMonth);

    // Calculate remaining days
    let days = targetDay - currentDay;
    if (days < 0) {
        months--;
        let previousMonth = new Date(targetYear, targetMonth, 0);
        days += previousMonth.getDate();
    }

    // Calculate remaining minutes
    let minutes = targetMinute - currentMinute;
    if (minutes < 0) {
        minutes += 60;
        targetHour--;
    }

    // Calculate remaining hours
    let hours = targetHour - currentHour;
    if (hours < 0) {
        hours += 24;
        days--;
    }

    // If days are negative, adjust the months and days
    if (days < 0) {
        months--;
        let previousMonth = new Date(currentYear, currentMonth - 1);
        days += getDaysInMonth(previousMonth.getFullYear(), previousMonth.getMonth());
    }

    // Display the result
    document.getElementById('months-value').textContent = months;
    document.getElementById('days-value').textContent = days;
    document.getElementById('hours-value').textContent = hours;
    document.getElementById('minutes-value').textContent = minutes;
}

setInterval(updateCountdown, 1000); // Update every second
updateCountdown(); // Initial call