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

//toggle var
var fade_state = true;
//on btn click

const emotions = document.querySelectorAll(".emotion");
const hideEmotions = () => {
    emotions.forEach(element => {
        element.classList.remove("show");
    });
};

const whiteKeys = document.querySelectorAll(".white.key");

let timeOut;

whiteKeys.forEach((key, index) => {
    key.addEventListener("click", e => {
        clearTimeout(timeOut);

        hideEmotions();

        const currentEmotion = emotions[index];

        currentEmotion.classList.toggle("show");

        if (currentEmotion.classList.contains("show")) {
            timeOut = setTimeout(() => {
                currentEmotion.remove("show");
                currentEmotion.classList.remove("show");
            }, 1500);
        }
    });
});

// ! SPEECH TO TEXT
const speechContainer = document.querySelector("#speech-container");
const micBtn = document.querySelector(".mic-btn");
const pulse = document.querySelector(".pulse-ring");

if (speechContainer) {
    micBtn.addEventListener("click", e => {
        pulse.classList.toggle("show");
    });

    let speech = true;
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    const words = document.querySelector(".words");
    words.appendChild(p);

    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");

        document.getElementById("p").innerHTML = transcript;
    });

    if (speech == true) {
        recognition.start();
        recognition.addEventListener("end", recognition.start);
    }
}

const barGraph = document.querySelector("#bar-graph");
if (barGraph) {
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["red", "green", "blue", "orange", "brown"];

    new Chart("bar-graph", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [
                {
                    backgroundColor: barColors,
                    data: yValues,
                },
            ],
        },
    });
}
