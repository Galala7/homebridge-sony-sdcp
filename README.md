# homebridge-sony-sdcp
Sony SDCP / PJ Talk projector control accessory plugin for homebridge: https://github.com/nfarina/homebridge

This plugin allows homebridge to control and query the power state of a Sony projector.

Control of the projector is done using Sony's SDCP communication protocol over TCP/IP.
The protocol allows more control over the projector, like changing Input or Volume, but as
  far as i understand, Siri can't take advantage of that.

Supported Sony projectors should include:
* VPL-VW515
* VPL-VW520
* VPL-VW528
* VPL-VW665
* VPL-VW315
* VPL-VW320
* VPL-VW328
* VPL-VW365
* VPL-HW65ES

# Installation

1. Install plugin globally: npm install -g homebridge-sony-sdcp
3. Update your homebridge config file.  Example below:

# Configuration

Add as an accessory by editing the homebridge config.json file.

## Simple Example

```
"accessories": [
  {
    "accessory":      "sony-sdcp-projector",
    "name":           "Projector",
    "host":           "192.168.1.19"
  }
]
```

# Credits
This plugin uses the [sony-sdcp-com](https://github.com/vokkim/sony-sdcp-com) NodeJS library by [vokkim](https://github.com/vokkim).