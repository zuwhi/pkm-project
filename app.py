import os
from flask import Flask, render_template,Response, url_for

app = Flask(__name__)

app.config['APP_ROOT'] = os.path.dirname(os.path.abspath(__file__))
app.config['STATIC_FOLDER'] = 'static'
app.config['TEMPLATE_FOLDER'] = 'templates'

@app.route('/')
def index():
    return render_template('index.html',title="HOME")
@app.route('/camera')
def camera():
    return render_template('camera.html',title="camera")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=433, debug=True, ssl_context="adhoc")