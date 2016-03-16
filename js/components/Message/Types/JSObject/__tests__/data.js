const data = new Map();

// Test Date component
// @TODO Remove test #5 from browser_webconsole_output_05.js
data.set("valid date", {
  requestText: "new Date(448156800000)",
  responsePacket: {
    "from": "server1.conn0.child1/consoleActor2",
    "input": "new Date(448156800000)",
    "result": {
      "type": "object",
      "class": "Date",
      "actor": "server1.conn0.child1/obj38",
      "extensible": true,
      "frozen": false,
      "sealed": false,
      "ownPropertyLength": 0,
      "preview": {
        "timestamp": 448156800000
      }
    },
    "timestamp": 1458152367606,
    "exception": null,
    "helperResult": null,
    "resultID": 1458152367606,
    "type": "evaluationResult"
  },
  consoleOutput: "Date 1984-03-15T00:00:00.000Z"
});
// @TODO Remove test #6 from browser_webconsole_output_05.js
data.set("invalid date", {
  requestText: "new Date('test')",
  responsePacket: {
    "from": "server1.conn0.child1/consoleActor2",
    "input": "new Date('test')",
    "result": {
      "type": "object",
      "class": "Date",
      "actor": "server1.conn0.child1/obj32",
      "extensible": true,
      "frozen": false,
      "sealed": false,
      "ownPropertyLength": 0,
      "preview": {
        "timestamp": {
          "type": "NaN"
        }
      }
    },
    "timestamp": 1458152175124,
    "exception": null,
    "helperResult": null,
    "resultID": 1458152175124,
    "type": "evaluationResult"
  },
  consoleOutput: "Invalid Date"
});

export default data;
