let check = (x) => (x < 10 || x==0) ? ('0' + x) : x;

function disableBtn(status, btnId) {
    document.getElementById(btnId).disabled = status;
}

let ifString = (x) => (typeof x === 'string') ? parseInt(x, 10) : x;

function checkString() {
    console.log(ifString(10));
    console.log(ifString('05'));
    console.log(ifString('09'));
    console.log(ifString('11'));
}