// ==========================================================================
// Project:   Blossom - Modern, Cross-Platform Application Framework
// Copyright: ©2012 Fohr Motion Picture Studios. All rights reserved.
// License:   Licensed under the GPLv3 license (see BLOSSOM-LICENSE).
// ==========================================================================
/*globals sc_assert CanvasRenderingContext2D HTMLCanvasElement */

var ENFORCE_BLOSSOM_2DCONTEXT_API = false; // removes context.canvas and context.drawImage()

(function() {
  var p = CanvasRenderingContext2D.prototype;
  
  Object.defineProperty(p, 'width', {
    get: function() {
      var canvas = this.__sc_canvas__;
      return canvas? canvas.width : 0;
    },
    enumerable: false,
    configurable: false
  });
  
  Object.defineProperty(p, 'height', {
    get: function() {
      var canvas = this.__sc_canvas__;
      return canvas? canvas.height : 0; 
    },
    enumerable: false,
    configurable: false
  });
  
  Object.defineProperty(p, 'w', {
    get: function() {
      var canvas = this.__sc_canvas__;
      return canvas? canvas.width : 0; 
    },
    enumerable: false,
    configurable: false
  });
  
  Object.defineProperty(p, 'h', {
    get: function() {
      var canvas = this.__sc_canvas__;
      return canvas? canvas.height : 0;  
    },
    enumerable: false,
    configurable: false
  });
})();

CanvasRenderingContext2D.prototype._sc_drawImage = CanvasRenderingContext2D.prototype.drawImage;
CanvasRenderingContext2D.prototype._sc_createPattern = CanvasRenderingContext2D.prototype.createPattern;

CanvasRenderingContext2D.prototype.drawLayer = function(layer, sx, sy, sw, sh, dx, dy, dw, dh) {
  if (!layer.isLayer) throw TypeError;
  var el = layer.__sc_element__;
  switch (arguments.length) {
    case  3: return this._sc_drawImage(el, /*dx*/sx, /*dy*/sy);
    case  5: return this._sc_drawImage(el, /*dx*/sx, /*dy*/sy, /*dw*/sw, /*dh*/sh);
    default: return this._sc_drawImage(el, sx, sy, sw, sh, dx, dy, dw, dh);
  }
};
  