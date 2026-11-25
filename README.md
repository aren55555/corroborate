# corroborate

A command line tool and GUI that determines whether JSON payloads are in compliance with the JSON API specification. If the JSON is not compliant this tool will indicate the reason why.

The underlying validations of this tool are provided by [github.com/aren55555/jsonapivalidator](https://github.com/aren55555/jsonapivalidator), which has been compiled to JS via [GopherJS](https://gopherjs.github.io/).

## Build

### GUI

#### Prebuilt

**[corroborate.arenpatel.com](http://corroborate.arenpatel.com/)**

#### From Dockerhub

```bash
docker run -d -p 8080:80 aren55555/corroborate
```

#### From Source

Every tool the build needs (Go, GopherJS, just, Colima, Lima, the Docker CLI and buildx) is pinned in `mise.toml`. Install [mise](https://mise.jdx.dev/), then:

```bash
git clone https://github.com/aren55555/corroborate
cd corroborate
mise install

just build         # compile the GUI into js/html
just docker-start  # start Colima, build the image, run it on :8080
just docker-stop
```

Run `just` to list every recipe. `just docker-push` builds for `linux/amd64` and `linux/arm64` and pushes to Docker Hub (log in first with `docker login`).

### CLI

```bash
just build-cli
echo '{"data": null}' | ./bin/corroborate
```
