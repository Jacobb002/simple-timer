function startTime() {
    const today = new Date();
    
    const clock = {
        hour: today.getHours(),
        minute: today.getMinutes(),
        second: today.getSeconds(),
    }
    clock.hour = check(clock.hour);
    clock.minute = check(clock.minute);
    clock.second = check(clock.second);

    const date = {
        day: today.getDay(),
        month: today.getMonth(),
        year: today.getFullYear(),
    }
    date.day = check(date.day);
    date.month = check(date.month);

    document.getElementById('clock_time').innerHTML = clock.hour + ':' + clock.minute + ':' + clock.second;
    document.getElementById('clock_date').innerHTML = date.day + '.' + date.month + '.' + date.year;
    setTimeout(startTime, 1000);
}