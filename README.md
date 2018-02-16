## Personal portfolio

LIVE: www.razorcodes.com

## Development

* run `gulp build` to build distribution package in `dist/` folder
* run `gulp watch` file reloading distribution package on any change
* run `gulp open_uri` to start a local server and serve distribution package

## Deployment
* run `docker build --no-cache -t razorcd/razorcodes .` build docker image. Requires local `dist` folder. Images must be tagged with Dockerhub ID to be pushed.
* run `docker run -p 8080:80 --name razorcodes razorcodes` to start container then visit `localhost:8080`


## TODO 
* fix `deploy_source` gulp task to deploy everything except `dist/portfolio/`


COPYRIGHT 2002 - 2018 All rights reserved. Property of Cristian Dugacicu. Not for public or private distribution.
