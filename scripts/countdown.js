let informaction = true;
const countdown = {
    hour: 0,
    minute: 0,
    second: 0,
    tempMinute: null,
    tempSecond: null,
    status: true,
    value: function() {
        this.hour = document.getElementById('inputHour').value;
        this.minute = document.getElementById('inputMinute').value;
        this.second = document.getElementById('inputSecond').value;
        if(this.hour == '')
            this.hour = 0;
        if(this.minute == '')
            this.minute = 0;
        if(this.second == '')
            this.second = 0;
        if(this.hour < 0 || this.minute < 0 || this.minute > 60 || this.second < 0 || this.second > 60)
            this.status = false; 
    },
    load: function() {
        if(this.status) {
            document.getElementById('countdown').innerHTML = this.hour + 'h ' + this.minute + 'm ' + this.second + 's';
            console.log(this.minute);
        }
        else {
            document.getElementById('countdown').innerHTML = 'Wrong values!'
        }
    },
    start: function() {
        if(this.status) {
            this.value();
            this.load();
        }
        else
            console.log('error');
    },
    restart: function() {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    },
    count: function() {
        if(this.second > 0) {
            this.second--;
            if(this.second == 0 && this.minute > 0 && this.hour > 0) {
                this.minute--;
                this.hour--;
                this.second = 60;
            }
            if(this.second == 0 && this.minute > 0 && this.hour == 0) {
                this.minute--;
                this.second = 60;
            }
        }
        else if(this.second == 0) {
            if(this.minute > 0) {
                this.minute--;
                this.second = 60;
                if(this.hour > 0) {
                    this.hour--;
                    this.minute = 60;
                }
            }
            else if(this.minute == 0) {
                if(this.hour > 0) {
                    this.hour--;
                    this.minute = 60;
                }
            }
        }
        this.load();
    },
}

function startCountdown(stopTime) {
    if(stopTime) {
        disableBtn(stopTime, 'countdownStartbtn');
        disableBtn(!stopTime, 'countdownStopbtn');
        countdown.start();
    }
}

function sendToCountdown() {
    if(informaction) {
        startCountdown(true);
    }
    informaction = false;
}

function restartCountdown() {
    informaction = true;
    countdown.restart();
    countdown.load();
}