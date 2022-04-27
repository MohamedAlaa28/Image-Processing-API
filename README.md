# Image Processing API

## Tech
this project contained index.ts witch is the main file for the project, contained package.json where the dependencies and the devDependencies, and our scripts for what we will need, contained resize.ts file where the resizeImage function witch is sharp function to resize the image that captured from the URL when the server is running and dist where the project build to js into it besides to images folder where the images stored and thumb where the images resized

## Features
this project work to resize an image when it takes the file name of it and the resolution the user want to resize the image on it and store it into the thumb folder which is in the images folder

## Installation
Image Processing API requires [Node.js] to run

For project environments...

npm install 

for server ...

node run server

for prettier ...

node run prettier

for eslint...

node run eslint

for build and jasmine...

node run test



## Endpoints
the endpoint (`/api/images`) accepte parameters in the filename , width and hight in the middleware.
for example (`/api/images/?filename=encenadaport&width=200&hight=200`)