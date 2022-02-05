let timeout;
let roundArray = [];

let convertToNumber = (x) => (typeof x === 'string') ? parseInt(x, 10) : x;

class round {
    constructor(number, hour, minute, second) {
        this.roundNumber = number;
        this.roundHour = hour;
        this.roundMinute = minute;
        this.roundSecond = second;
    }
}

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
        this.roundNumber = 1;
        document.getElementById('roundList').innerHTML = '<tr id="roundTemp"></tr>';
        this.load();
    },
    roundNumber: 1,
    tempRound: null,
    loadTempRound: function() {
        document.getElementById('roundTemp').innerHTML = '<th>' + '</th>' + '<th>' + this.hour + 'h' + '</th>' + '<th>' + this.minute + 'm' + '</th>' + '<th>' + this.second + 's' + '</th>';
    },
    addRound: function() {
        this.tempRound = new round(this.roundNumber, this.hour, this.minute, this.second);
        document.getElementById('roundList').innerHTML += '<tr>' + '<th>' + this.roundNumber + '</th>' + '<th>' + this.hour + 'h' + '</th>' + '<th>' + this.minute + 'm' + '</th>' + '<th>' + this.second + 's' + '</th>' + '<th>' + 'null' + '</th>' +'</tr>';
        console.log(this.tempRound)
        this.roundNumber++;
    },
}

function startStopwatch(stopTime) {
    if(stopTime == true) {
        disableBtn(stopTime, 'btnStart');
        disableBtn(!stopTime, 'btnRound');
        stopwatch.start(true);
        stopwatch.loadTempRound();
        timeout = setTimeout('startStopwatch(true)', 1000);
    }
    else if(stopTime == false) {
        disableBtn(stopTime, 'btnStart');
        disableBtn(!stopTime, 'btnRound');
        clearTimeout(timeout);
    }
}

function clearStopwatch() {
    startStopwatch(false);
    disableBtn(false, 'btnStart');
    disableBtn(true, 'btnRound');
    stopwatch.clear();
}

function addRound() {
    stopwatch.addRound();
}