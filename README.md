# container-based-composition
Composition by lazy loading the micro frontends bundled using Javascript inside a container app.

## To run container app

- `cd container`

- `npm install`

- `npm start`

This will start the webpack dev server at 8080 port.

## To run catalog mfe

- `cd catalog`

- `npm install`

- `npm start`

This will start the webpack dev server at 8081 port.


## To run cart mfe

- `cd cart`

- `npm install`

- `npm start`

This will start the webpack dev server at 8082 port.


Each micro frontend is running on their own port and inside the container app as well. 
Use 8080 port to route to specific micro frontend via container app.


