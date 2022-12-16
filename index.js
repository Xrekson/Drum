var btn = document.getElementsByTagName("button");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let button = this.innerHTML;
        soundplat(button);
        animation(button);
    });
}

document.addEventListener("keydown", function (event) {
    var keygot = event.key;
    soundplat(keygot);
})

function soundplat(key) {
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var crash = new Audio('sounds/kick-bass.mp3');
            crash.play();
            break;
        case "s":
            var crash = new Audio('sounds/snare.mp3');
            crash.play();
            break;
        case "d":
            var crash = new Audio('sounds/tom-1.mp3');
            crash.play();
            break;
        case "j":
            var crash = new Audio('sounds/tom-2.mp3');
            crash.play();
            break;
        case "k":
            var crash = new Audio('sounds/tom-3.mp3');
            crash.play();
            break;
        case "l":
            var crash = new Audio('sounds/tom-4.mp3');
            crash.play();
            break;
    }
}

function animation(keyp) {
    let buttonclass = document.querySelector("." + keyp);
    buttonclass.classList.add("pressed");
    setTimeout(function () {
        buttonclass.classList.remove("pressed")
    }, 100);
}