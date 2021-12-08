# Building the app

To build the app just paste in your desired directory: 

### `wget https://github.com/HardDrag/lab8/archive/refs/heads/main.zip; unzip main.zip; rm main.zip; cd lab8-main;` 

Then: 

### `COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.yml build`

Finally:

### `docker run -it --name web_app -p 3000:3000 -v /app/node_modules -v$(pwd):/app lab8-main_web`
