var msg = new SpeechSynthesisUtterance();
console.log(msg);
window.speechSynthesis.speak(msg);

const blackKeys = document.querySelectorAll(".key.black");
const blackOrder = ["Db", "Eb", "Gb", "Ab", "Bb"];
const blackKeyboard = ["2", "3", "5", "6", "7"];

const whiteKeys = document.querySelectorAll(".key.white");
const whiteOrder = ["C", "D", "E", "F", "G", "A", "B"];
const whiteKeyboard = ["q", "w", "e", "r", "t", "y", "u"];

let audio;

blackKeys.forEach((key, index) => {
    key.addEventListener("click", () => {
        audio = new Audio(`../static/notes/${blackOrder[index]}.mp3`);
        audio.currentTime = 0;
        audio.play();
    });
});

whiteKeys.forEach((key, index) => {
    key.addEventListener("click", () => {
        audio = new Audio(`../static/notes/${whiteOrder[index]}.mp3`);
        audio.currentTime = 0;
        audio.play();
    });
});

document.addEventListener("keyup", e => {
    whiteKeyboard.forEach((key, index) => {
        if (key == e.key) {
            audio = new Audio(`../static/notes/${whiteOrder[index]}.mp3`);
            audio.currentTime = 0;
            audio.play();

            whiteKeys[index].style.opacity = "0.7";
            setTimeout(() => (whiteKeys[index].style.opacity = "1"), 500);
        }
    });
});

document.addEventListener("keyup", e => {
    blackKeyboard.forEach((key, index) => {
        if (key == e.key) {
            audio = new Audio(`../static/notes/${blackOrder[index]}.mp3`);
            audio.currentTime = 0;
            audio.play();

            blackKeys[index].style.opacity = "0.7";
            setTimeout(() => (blackKeys[index].style.opacity = "1"), 500);
        }
    });
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//toggle var
var fade_state = true;
//on btn click

const sadness = document.getElementById("hi");
const hungry = document.getElementById("hi2");
const angry = document.getElementById("hi1");
const happy = document.getElementById("hi3");
const sleepy = document.getElementById("hi4");
const bored = document.getElementById("hi5");
const scared = document.getElementById("hi6");






const z = document.getElementById("white key key-1");
const x = document.getElementById("white key key-2");
const a = document.getElementById("white key key-3");
const b = document.getElementById("white key key-4");
const c = document.getElementById("white key key-5");
const d = document.getElementById("white key key-6");
const e = document.getElementById("white key key-7");




const emotions = document.querySelectorAll(".emotions")
console.log(emotions)

let timeOut;

z.onclick = function () {
    clearTimeout(timeOut);
    emotions.forEach(element => {
        element.classList.remove("show")
    })

    sadness.classList.toggle("show");

    if (sadness.classList.contains("show")) {
        timeOut = setTimeout(() => {
            sadness.classList.remove("show");
            console.log("here");
        }, 1500);
    }
};

x.onclick = function () {
    clearTimeout(timeOut);
    emotions.forEach(element => {
        element.classList.remove("show")
    })

    hungry.classList.toggle("show");


    if (hungry.classList.contains("show")) {
        timeOut = setTimeout(() => {
            hungry.classList.remove("show");
            console.log("here");
        }, 1500);
    }
};
a.onclick = function () {
    clearTimeout(timeOut);
    emotions.forEach(element => {
        element.classList.remove("show")
    })

    angry.classList.toggle("show");

    if (angry.classList.contains("show")) {
        timeOut = setTimeout(() => {
            angry.classList.remove("show");
            console.log("here");
        }, 1500);
    }
};

b.onclick = function () {
    clearTimeout(timeOut);
    emotions.forEach(element => {
        element.classList.remove("show")
    })

    happy.classList.toggle("show");

    if (happy.classList.contains("show")) {
        timeOut = setTimeout(() => {
            happy.classList.remove("show");
            console.log("here");
        }, 1500);
    }
};

c.onclick = function () {
    clearTimeout(timeOut);
    emotions.forEach(element => {
        element.classList.remove("show")
    })

    sleepy.classList.toggle("show");

    if (sleepy.classList.contains("show")) {
        timeOut = setTimeout(() => {
            sleepy.classList.remove("show");
            console.log("here");
        }, 1500);
    }
};


d.onclick = function () {
    clearTimeout(timeOut);
    emotions.forEach(element => {
        element.classList.remove("show")
    })

    bored.classList.toggle("show");

    if (bored.classList.contains("show")) {
        timeOut = setTimeout(() => {
            bored.classList.remove("show");
            console.log("here");
        }, 1500);
    }
};


e.onclick = function () {
    clearTimeout(timeOut);
    emotions.forEach(element => {
        element.classList.remove("show")
    })

    scared.classList.toggle("show");

    if (scared.classList.contains("show")) {
        timeOut = setTimeout(() => {
            scared.classList.remove("show");
            console.log("here");
        }, 1500);
    }
};



