## Calculator App

Run docker container to easily test it.

1. docker build . -t react_cal
2. docker run -it -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm react_cal

Open localhost:3001 on browser.
