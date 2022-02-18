function startTime() {
    const today = new Date();
    
    const clock = {
        hour: today.getHours(),
        minute: today.getMinutes(),
        second: today.getSeconds(),
    }
    clock.hour = addZero(clock.hour);
    clock.minute = addZero(clock.minute);
    clock.second = addZero(clock.second);

    const date = {
        day: today.getDay(),
        month: today.getMonth(),
        year: today.getFullYear(),
    }
    date.day = addZero(date.day);
    date.month = addZero(date.month);

    document.querySelector('#clock_time').innerHTML = `${clock.hour}:${clock.minute}:${clock.second}`;
    document.querySelector('#clock_date').innerHTML = `${date.day}.${date.month}.${date.year}`;
    setTimeout(startTime, 1000);
}