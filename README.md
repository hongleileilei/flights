# flights
By Honglei Liu
Version 0.11
## Introduction
Here is my second edition. I add required endpoint for returning data sorted by departure longitude and latitude.
I used Exspress.js as my backend framework and use MapBox.GL.js as my front-end helper for loading maps and markers.

## Backend (port: localhost:8080
To run the backend, cmd
```
local@server$$ npm start
```
My backend is developed by Express and I have two endpoints, one normal findAll and one for required extra endpoint.
For database, I use MySQL as my database for convience connecting to the Express framework. We have five columns in
the database: DepLng, DepLat, ArrLat, ArrLng, id, which is shown as below as code:
```
+---------+---------+---------+---------+-----+
| DepLat  | DepLng  | ArrLat  | ArrLng  | id  |
+---------+---------+---------+---------+-----+
| 10.1234 | 20.4321 | 50.4567 | 69.8765 | 1   |
...
```
FYI, the database name is defined as ```Volansi_Flight.flights```.

FYI, the extra endpoint required is in the ```/src``` folder.

## Frontend (port: localhost:8081
To run the frontend, cmd
```
local@client$$ http-server
```
For convience, I developed at ```<script></script>``` section in index.HTML. In current version, hiding unrelated 
markers and lines is still under development, but we may see connections by popup alerts.

Demo:
![alt text](https://github.com/hongleileilei/flights/blob/master/map.png)
