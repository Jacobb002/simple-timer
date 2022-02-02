let check = (x) => (x < 10 || x==0) ? ('0' + x) : x;

function disableBtn(status, btnId) {
    document.getElementById(btnId).disabled = status;
}