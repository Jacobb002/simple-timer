let addZero = (x) => ((x < 10 || x==0) && typeof x != 'string') ? ('0' + x) : x;
let check = (x) => (x>0) ? true : false

function disableBtn(status, btnId) {
    document.getElementById(btnId).disabled = status;
}