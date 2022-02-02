let timeout;
const stopwatch = {
    hour: '00',
    minute: '00',
    second: '00',
    load: function() {
        document.getElementById('stopwatch').innerHTML = this.hour + ':' + this.minute + ':' + this.second;
    },
    start: function(status) {
        if(status == true) {
            this.second++;
            this.second = check(this.second);
            if(this.second == 60) {
                this.minute++;
                this.minute = check(this.minute);
                this.second = 0;
            }
            if(this.minute == 60) {
                this.hour++;
                this.hour = check(this.hour);
                this.minute = 0;
            }
        }
        this.load();
    },
    clear: function() {
        this.hour = '00';
        this.minute = '00';
        this.second = '00';
        this.load();
    }
}

function startStopwatch(stopTime) {
    if(stopTime == true) {
        stopwatch.start(true);
        timeout = setTimeout('startStopwatch(true)', 1000);
    }
    else if(stopTime == false) {
        clearTimeout(timeout);
    }
}

function clearStopwatch() {
    startStopwatch(false);
    stopwatch.clear();
}