var inherits = require('util').inherits;

function SonyProjectorCharacteristics(Characteristic) {
   this.ScreenAspectRatio = function() {
      Characteristic.call(this, 'Screen Aspect Ratio', '54B101E6-A017-474F-9D39-42DD8E34165F');
      this.setProps({
         format: Characteristic.Formats.UINT8,
         maxValue: 5,
         minValue: 0,
         validValues: [0,1,2,3,4,5],
         perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE]
      });
      this.value = this.getDefaultValue();
   };
   inherits(this.ScreenAspectRatio, Characteristic);
   this.ScreenAspectRatio.UUID = '54B101E6-A017-474F-9D39-42DD8E34165F';

   // The value property of ScreenAspectRatio must be one of the following:
   this.ScreenAspectRatio.NORMAL = 0;
   this.ScreenAspectRatio.V_STRETCH = 1;
   this.ScreenAspectRatio.ZOOM_1_85 = 2;
   this.ScreenAspectRatio.ZOOM_2_35 = 3;
   this.ScreenAspectRatio.STRETCH = 4;
   this.ScreenAspectRatio.SQUEEZE = 5;

   return this;
}

module.exports.SonyProjectorCharacteristics = SonyProjectorCharacteristics;
