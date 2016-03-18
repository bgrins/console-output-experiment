const data = new Map();

data.set("console API call", {
  requestText: "console.log('foobar', 'test')",
  responsePacket: {
    "from": "server1.conn4.child1/consoleActor2",
    "type": "consoleAPICall",
    "message": {
      "arguments": [
        "foobar",
        "test"
      ],
      "columnNumber": 1,
      "counter": null,
      "filename": "file:///Users/lclark/Documents/test.html",
      "functionName": "",
      "groupName": "",
      "level": "log",
      "lineNumber": 1,
      "private": false,
      "styles": [],
      "timeStamp": 1455064271115,
      "timer": null,
      "workerType": "none",
      "category": "webdev"
    }
  },
  consoleOutput: "foobar test"
});

export default data;
