from flask import Flask, request, jsonify, session
from flask_cors import CORS
import os


UPLOAD_FOLDER = './Test/'


app = Flask(__name__, static_folder="./build", static_url_path='/')
CORS(app, expose_headers='Authorization')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route("/")
def index():
    return app.send_static_file('index.html')


@app.route("/api/fileUpload", methods=["GET", "POST"])
def fileUpload():
    if request.method == "POST":
        target = os.path.join(UPLOAD_FOLDER, 'test_docs')
        if not os.path.isdir(target):
            os.mkdir(target)
        file = request.files['file']
        destination="/".join([target, file.fileName])
        file.save(destination)
        session['uploadFilePath']=destination
        return jsonify(f"A post request was made with..")

    elif request.method == "GET":
        return jsonify("API is working!!")

if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True,host="localhost", port="5000",use_reloader=False)