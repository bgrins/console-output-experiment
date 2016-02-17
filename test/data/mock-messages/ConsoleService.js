export default {
  "from": "server1.conn1.child1/consoleActor2",
  "type": "pageError",
  "pageError": {
    "errorMessage": "ReferenceError: asdf is not defined",
    "sourceName": "data:text/html,<script>asdf</script>",
    "lineText": "",
    "lineNumber": 1,
    "columnNumber": 1,
    "category": "content javascript",
    "timeStamp": 1455735574091,
    "warning": false,
    "error": false,
    "exception": true,
    "strict": false,
    "info": false,
    "private": false,
    "stacktrace": [{
      "columnNumber": 68,
      "filename": "test.html",
      "functionName": "baz",
      "language": 2,
      "lineNumber": 1
    }, {
      "columnNumber": 43,
      "filename": "test.html",
      "functionName": "bar",
      "language": 2,
      "lineNumber": 2
    }, {
      "columnNumber": 18,
      "filename": "test.html",
      "functionName": "foo",
      "language": 2,
      "lineNumber": 3
    }, {
      "columnNumber": 150,
      "filename": "test.html",
      "functionName": "",
      "language": 2,
      "lineNumber": 4
    }]
  }
}