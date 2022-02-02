function check(x) {
    if(x < 10) {
        x = '0' + x; 
    }
    return x;
}

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
    document.getElementById('clock').innerHTML = clock.hour + ':' + clock.minute + ':' + clock.second;
    setTimeout(startTime, 1000);
}