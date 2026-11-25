# Tools come from mise.toml: run `mise install` first.

set shell := ["bash", "-euo", "pipefail", "-c"]

image := "corroborate"
repo := "aren55555/corroborate"
tag := "latest"
platforms := "linux/amd64,linux/arm64"
port := "8080"
html_dir := "js/html"

# The Go 1.21 stdlib that GopherJS compiles against (see mise.toml).
gopherjs_go := "1.21.13"

# Always talk to Colima's Docker daemon, whatever the current context is.
export DOCKER_CONTEXT := "colima"

# List recipes
default:
    @just --list

# Build the command-line validator into bin/
build-cli:
    go build -o bin/corroborate .

# Compile the web UI with GopherJS into js/html
build:
    mkdir -p {{ html_dir }}
    cd js && GOPHERJS_GOROOT="$(mise where go@{{ gopherjs_go }})" gopherjs build -m -o html/main.js .
    cp js/index.html js/validation-ui.js {{ html_dir }}/

# Start the Colima VM (Docker runtime) unless it's already running
colima-start:
    colima status >/dev/null 2>&1 || colima start --runtime docker

# Stop the Colima VM
colima-stop:
    colima stop

# Link mise's buildx binary in as a Docker CLI plugin
_buildx:
    mkdir -p ~/.docker/cli-plugins
    ln -sf "$(mise which docker-cli-plugin-docker-buildx)" ~/.docker/cli-plugins/docker-buildx

# Build the web UI image for the local machine
docker-build: build colima-start _buildx
    docker buildx build --load -t {{ image }} js

# Run the image locally and open it in a browser
docker-start: docker-build
    docker run -d -p {{ port }}:80 --name {{ image }} {{ image }}
    open http://localhost:{{ port }}/

# Stop and remove the local container
docker-stop:
    docker rm -f {{ image }}

# Build for amd64 and arm64 and push to Docker Hub
docker-push: build colima-start _buildx
    docker buildx build --platform {{ platforms }} -t {{ repo }}:{{ tag }} --push js

# Remove build output
clean:
    rm -rf bin {{ html_dir }}
