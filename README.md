# filizinmutfagi

## Development Quick-Start

### Frontend

#### Node and npm packages

After installing node run following in the `./frontend` directory. Make sure
that both `package.json` and `package-lock.json` are in that folder.

```
$ npm install
```

When the above command finishes you can use the `serve` script to serve the
vue app on localhost for debugging.

```
$ npm run serve
```

#### Files and Folders of Interest

* `src` folder: Contains the code for the vue app. Most of the work is done
by `components/Recipies.vue`, `components/Recipie.vue`, `store/index.js`.

* `public` folder: This folder contains the *static* content.

### Backend

#### Flask

You can install the required packages via the `requirements.txt` in the
`./backend` folder. A virtual env is highly recommended.

```
$ pip install -r requirements.txt
```

After that you can run the backend server on localhost for debugging by just
running the `backend_app.py`.

```
$ python backend_app.py
```

#### Files and Folder of Interest

* `backend_app.py`: Currently the whole backend api is in this file. It only has
two endpoints.

* `create_merged.py` and `parsed/parsed.zip`: Python script is responsible from
cleaning up the post data scraped directly from Instagram and storing it in
`sorted_merged.json` with only the relevant fields. `parsed.zip` contains the raw
Instagram data. These shouldn't be needed when there is a database.