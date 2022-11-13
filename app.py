from flask import Flask, request, render_template

app = Flask(__name__)

final = ""


@app.route("/", methods=["GET", "POST"])
def authentication():
    return render_template("authentication.html")


@app.route("/piano", methods=["GET", "POST"])
def piano():
    return render_template("piano.html")


@app.route("/index", methods=["GET", "POST"])
def index():
    return render_template("index.html")


@app.route("/speech_to_text", methods=["GET", "POST"])
def speech_to_text():
    return render_template("speech_to_text.html")


if __name__ == "__main__":
    app.run(debug=True)
