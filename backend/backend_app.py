from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import json
# configuration
# DEBUG = True

# TODO: BIG TODO MOVE ALL FILE STUFF TO DB
# TODO: BIG TODO MOVE ALL FILE STUFF TO DB
# TODO: BIG TODO MOVE ALL FILE STUFF TO DB
# TODO: BIG TODO MOVE ALL FILE STUFF TO DB
# TODO: BIG TODO MOVE ALL FILE STUFF TO DB

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/api/search', methods=['GET'])
def searchRecipies():
    query = request.args.get('query', default=None, type=str)
    response = []
    if query is None or query is '':
        return json.dumps({"recipies": response}, indent=2)
    with open("sorted_merged.json", "r") as recipie_file:
        merged = json.load(recipie_file)
        for recipie in merged["recipies"]:
            if query in recipie['caption']:
                response.append(recipie)
    return json.dumps({"recipies": response}, indent=2)


@app.route('/api/recipies', methods=['GET'], subdomain="api")
def recipies():
    page = request.args.get('page', default=None, type=int)
    start = request.args.get('from', default=0, type=int)
    end = request.args.get('to', default=start + 10, type=int)
    if page is not None:
        start = page * 10
        end = (page + 1) * 10
    response = []
    with open("sorted_merged.json", "r") as recipie_file:
        merged = json.load(recipie_file)
        for recipie in merged["recipies"][start:end]:
            print(recipie)
            response.append(recipie)
            # name = recipie['caption'].split("\n")[0]
            # response.append({
            #     "name": recipie["name"],
            #     "thumbnail": recipie["thumbnail"][0],
            #     "caption": recipie['caption'],
            # })
    return json.dumps({"recipies": response}, indent=2)


if __name__ == '__main__':
    app.run(host="0.0.0.0")
