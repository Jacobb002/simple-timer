let informaction = true;
let countdownTimeout;

const countdown = {
    hour: 0,
    minute: 0,
    second: 0,
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
            // document.getElementById('countdown').innerHTML = this.hour + 'h ' + this.minute + 'm ' + this.second + 's';
            document.querySelector('#countdown').innerHTML = `${this.hour}h ${this.minute}m ${this.second}s`;
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
        else {
            this.status = false;
            console.log('error');
            this.load();
        }
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
                this.second = 59;
            }
            if(this.second == 0 && this.minute > 0 && this.hour == 0) {
                this.minute--;
                this.second = 59;
            }
        }
        else if(this.second == 0) {
            if(this.minute > 0) {
                this.minute--;
                this.second = 60;
                if(this.hour > 0) {
                    this.hour--;
                    this.minute = 59;
                    this.second = 59;
                }
            }
            else if(this.minute == 0) {
                if(this.hour > 0) {
                    this.hour--;
                    this.minute = 59;
                    this.second = 59;
                }
            }
        }
        this.load();
    },
}

function startCountdown() {
    countdown.count();
    countdownTimeout = setTimeout(startCountdown, 1000);
}

function sendToCountdown() {
    if(informaction) {
        disableBtn(true, 'countdownStartbtn');
        countdown.start();
        startCountdown();
    }
    else {
        startCountdown();
    }
}

function restartCountdown() {
    clearTimeout(countdownTimeout);
    countdown.restart();
    countdown.load();
    informaction = true;
    disableBtn(false, 'countdownStartbtn');
}

function stopCountdown() {
    clearTimeout(countdownTimeout);
    informaction = false;
    disableBtn(false, 'countdownStartbtn');
}