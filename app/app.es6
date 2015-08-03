import {JSONApiVaidator} from 'json_api_validator';

var json = {
  "links": {
    "self": "http://example.com/posts",
    "next": "http://example.com/posts?page[offset]=2",
    "last": "http://example.com/posts?page[offset]=10",
    "aren": true
  },
  "data": [{
    "type": "posts",
    "id": "1",
    "attributes": {
      "title": "JSON API paints my bikeshed!"
    },
    "relationships": {
      "author": {
        "links": {
          "self": "http://example.com/posts/1/relationships/author",
          "related": "http://example.com/posts/1/author"
        },
        "data": { "type": "people", "id": "9" }
      },
      "comments": {
        "links": {
          "self": "http://example.com/posts/1/relationships/comments",
          "related": "http://example.com/posts/1/comments"
        },
        "data": [
          { "type": "comments", "id": "5" },
          { "type": "comments", "id": "12" }
        ]
      }
    },
    "links": {
      "self": "http://example.com/posts/1"
    }
  }],
  "included": [{
    "type": "people",
    "id": "9",
    "attributes": {
      "first-name": "Dan",
      "last-name": "Gebhardt",
      "twitter": "dgeb"
    },
    "links": {
      "self": "http://example.com/people/9"
    }
  }, {
    "type": "comments",
    "id": "5",
    "attributes": {
      "body": "First!"
    },
    "links": {
      "self": "http://example.com/comments/5"
    }
  }, {
    "type": "comments",
    "id": "12",
    "attributes": {
      "body": "I like XML better"
    },
    "links": {
      "self": "http://example.com/comments/12"
    }
  }]
};

var v = new JSONApiVaidator(json);

var validation_result = v.validate();

if (validation_result.is_valid) {
  console.log("JSON was JSONAPI.org compliant!");
} else {
  console.log("JSON was not JSONAPI.org compliant. Errors:");
  for (let error of validation_result.errors) {
    console.log(error.to_s());
  }
}
