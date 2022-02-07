let informaction = true;
const countdown = {
    hour: 0,
    minute: 0,
    second: 0,
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
    },
    checkValue: function() {
        if(this.hour < 0 || this.minute > 60 || this.minute < 0 || this.second > 60 || this.second < 0) {
            return true;
        }
        return false;
    },
    count: function() {

    },
    load: function(status) {
        if(status) {
            document.getElementById('countdown').innerHTML = this.hour + 'h ' + this.minute + 'm ' + this.second + 's';
            console.log(this.minute);
        }
        else {
            document.getElementById('countdown').innerHTML = 'Wrong values!'
        }
    },
    start: function(status) {
        if(this.checkValue()) {
            this.value();
            this.load(true);
        }
        else
            console.log('error');
    },
    restart: function() {
        this.hour = '00';
        this.minute = '00';
        this.second = '00';
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