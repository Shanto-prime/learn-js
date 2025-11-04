var language = "Bangla"

function learn(e) {
    var language = e;
    console.log(`I am learning ${language}`);
}

learn("English");

console.log(`i Know ${language}`);

function autoHardReload() {
    setInterval(() => {
        window.location.href = window.location.href.split('?')[0] + '?t=' + new Date().getTime();
    }, 3000);
}

window.onload = autoHardReload;
