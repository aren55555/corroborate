package main

import (
	"encoding/json"

	"github.com/aren55555/jsonapivalidator"
	"github.com/gopherjs/gopherjs/js"
)

func main() {
	js.Global.Set("jsonapivalidator", validate)
}

type jsResult struct {
	result *jsonapivalidator.Result
}

func newJSResult(result *jsonapivalidator.Result) *jsResult {
	return &jsResult{result: result}
}

// Errors will exposed the validation result's errors
func (r *jsResult) Errors() (errors []string) {
	for _, e := range r.result.Errors {
		errors = append(errors, e.Error())
	}
	return
}

func validate(input *js.Object) *js.Object {
	data := js.Global.Get("JSON").Call("stringify", input).String()

	var obj interface{}
	if err := json.Unmarshal([]byte(data), &obj); err != nil {
		panic(err)
	}

	result := jsonapivalidator.Validate(obj)
	return js.MakeWrapper(newJSResult(result))
}
