var Service, Characteristic;
var SdcpClient = require('sony-sdcp-com');


PORT = 53484;



module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;

    homebridge.registerAccessory("homebridge-sony-sdcp", "sony-sdcp-projector", ProjectorAccessory);
};

function ProjectorAccessory(log, config) {
    this.log = log;
    this.config = config;
    this.name = config["name"];
    this.lastState = 0;
    this.myClient = SdcpClient.SdcpClient({address: this.config["ip"], port: PORT});

    this.service = new Service.Switch(this.name);
    this.service
        .getCharacteristic(Characteristic.On)
        .on('get', this.getCurrentState.bind(this))
        .on('set', this.setCurrentState.bind(this));
}


ProjectorAccessory.prototype.getServices = function() {
    return [this.service];
};

ProjectorAccessory.prototype.getCurrentState = function (callback) {
    this.log("Requested CurrentState: %s", this.lastState);
    this.myClient.getPower().then (function(status) {
        if (status === 'COOLING' || status === 'OFF') {
            this.lastState = 0;
        } else if (status === 'WARMING' || status === 'ON') {
            this.lastState = 1;
        } else {
            this.log("Error getting stratus: %s", status)
        }
        this.log("CurrentState: %s", this.lastState);
        callback(null,this.lastState);
    }.bind(this))
    .catch (function (lastState) {
        console.log("error in geting power state");
        callback(null,0);
        
    });
};

ProjectorAccessory.prototype.setCurrentState = function (value, callback) {
    this.log("Set CurrentState: %s", value);
    this.log((value ? "Turning On" : "Turning Off"));
    if (value == 1) {
        // Turn On
        this.myClient.setPower(true);
    }
    else {
        // Turn Off
        this.myClient.setPower(false);
    }
    callback(null);
};
