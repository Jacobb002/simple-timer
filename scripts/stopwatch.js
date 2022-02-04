let timeout;
let roundArray = [];

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
        this.load();
    },
    number: 1,
    roundArray: [],
    addRound: function() {
        this.roundArray[this.roundNumber] = this.hour + ':' + this.minute + ':' + this.second;
        //this.roundArray[this.number] = new round(this.number, this.hour, this.minute, this.second);
        console.log(this.roundArray[this.number]);
        this.number++;
    },
    loadRound: function() {
        // document.getElementById('roundList').innerHTML = "<div id=round" + this.number + ">" + this.roundArray[this.number].roundNumber + ". " + this.roundArray[this.number].roundHour + ":" + this.roundArray[this.number].roundMinute + ":" + this.roundArray[this.number].roundSecond + "</div>";
        document.getElementById('roundList').innerHTML = this.roundArray[this.number];
    }
}

function startStopwatch(stopTime) {
    if(stopTime == true) {
        disableBtn(stopTime, 'btnStart');
        stopwatch.start(true);
        timeout = setTimeout('startStopwatch(true)', 1000);
    }
    else if(stopTime == false) {
        disableBtn(stopTime, 'btnStart');
        clearTimeout(timeout);
    }
}

function clearStopwatch() {
    startStopwatch(false);
    disableBtn(false, 'btnStart');
    stopwatch.clear();
}

function addRound() {
    stopwatch.addRound();
    stopwatch.loadRound();
}