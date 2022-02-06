const countdown = {
    hour: '00',
    minute: '00',
    second: '00',
    dataDownload: function() {
        this.hour = document.getElementById('inputHour').value;
        this.minute = document.getElementById('inputMinute').value;
        this.second = document.getElementById('inputSecond').value;
    },
    load: function() {
        this.hour = check(this.hour);
        this.minute = check(this.minute);
        this.second = check(this.minute);
        document.getElementById('countdown').innerHTML = this.hour + 'h ' + this.minute + 'm ' + this.second + 's';
    },
    startCountdown: function() {
        this.dataDownload();
        this.load();
    }
}