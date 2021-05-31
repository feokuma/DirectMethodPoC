"use strict";

var connectionString =
  "HostName=IoTHubOkuma.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=p8h+HKN8TPCwAh/ioN6hcmOKeJlMSzvg3yt7FyNmqQ8=";

var Client = require("azure-iothub").Client;

var deviceId = "edgeDevice";
var moduleId = "WorkerModule";
var client = Client.fromConnectionString(connectionString);

var methodParams = {
  methodName: "DirectMethodTest",
  payload: "buttonClicked",
  responseTimeoutInSeconds: 30,
};

client.invokeDeviceMethod(
  deviceId,
  moduleId,
  methodParams,
  function (err, result) {
    if (err) {
      console.error(
        "Failed to invoke method " +
          methodParams.methodName +
          ": " +
          err.message
      );
    } else {
      console.log(
        "Response from " + methodParams.methodName + " on " + deviceId + ":"
      );
      console.log(JSON.stringify(result, null, 2));
    }
  }
);
