package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"

	"github.com/aren55555/jsonapivalidator"
)

func main() {
	s := bufio.NewScanner(os.Stdin)
	for s.Scan() {
		input := s.Text()

		// Parse the String into objs in mem
		var obj interface{}
		if err := json.Unmarshal([]byte(input), &obj); err != nil {
			panic(err)
		}

		// Pretty print the input JSON
		prettyInput, err := json.MarshalIndent(obj, "", " ")
		if err != nil {
			panic(err)
		}
		fmt.Printf("Input:\n---\n%v\n---\n", string(prettyInput))

		// Perform Validation
		result := jsonapivalidator.Validate(obj)

		// Display Results
		if result.HasErrors() {
			fmt.Println("Invalid JSON API:")
			i := 1
			for err := range result.Errors() {
				fmt.Printf("%d. %v\n", i, err)
				i++
			}
			return
		}

		fmt.Println("Valid JSON API ✅")
	}
}
