const piano = document.querySelector(".piano");
if (piano) {
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

    const y = document.getElementById("hi");
    const z = document.getElementById("black key key-1");
    const x = document.getElementById("black key key-2");

    let timeOut;

    z.onclick = function () {
        clearTimeout(timeOut);

        y.classList.toggle("show");

        if (y.classList.contains("show")) {
            timeOut = setTimeout(() => {
                y.classList.remove("show");
                console.log("here");
            }, 1500);
        }
    };

    x.onclick = function () {
        clearTimeout(timeOut);

        y.classList.toggle("show");

        if (y.classList.contains("show")) {
            timeOut = setTimeout(() => {
                y.classList.remove("show");
                console.log("here");
            }, 1500);
        }
    };
}

const speechToText = document.querySelector(".speech-to-text");
if (speechToText) {
    console.log(123213);
}
