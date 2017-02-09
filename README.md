# corroborate

A command line tool and GUI that determines whether JSON payloads are in compliance with the JSON API specification. If the JSON is not compliant this tool will indicate the reason why.

The underlying validations of this tool are provided by [github.com/aren55555/jsonapivalidator](https://github.com/aren55555/jsonapivalidator); which has been it has been compiled to JS via [GopherJS](https://gopherjs.github.io/).

## Build

### GUI

#### Prebuilt

**[corroborate.arenpatel.com](http://corroborate.arenpatel.com/)**

#### From Dockerhub

```bash
docker run -d -p 8080:80 aren55555/corroborate
```

#### From Source

To build the GUI you should have [Docker](https://www.docker.com/), [Go](https://golang.org/) and [GopherJS](https://gopherjs.github.io/) installed.

```bash
go get -u github.com/aren55555/jsonapivalidator
cd $GOPATH/src/github.com/aren55555/jsonapivalidator/js
./docker-build

./docker-start
# GUI running
./docker-stop
```
