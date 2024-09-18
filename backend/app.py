from flask import Flask, jsonify
from flask_cors import CORS
import requests
from flask import request

app = Flask(__name__)
CORS(app)

@app.route('/api/hello')
def hello():
    return jsonify(message="Hello from Flask!")


@app.route('/api/fetch-git-html', methods=['GET', 'POST'])
def fetch_git_html():
    if request.method == 'POST':
        url = request.json.get('url')
    elif request.method == 'GET':
        url = request.args.get('url')
    
    if not url:
        return jsonify(error="URL parameter is required"), 400
    
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raises an HTTPError for bad responses
        return jsonify(html=response.text)
    except requests.RequestException as e:
        return jsonify(error=f"Failed to fetch git HTML: {str(e)}"), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)