"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rcomps = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 *   ResponsiveComponents
 */
var rcomps = function rcomps(breakpoints) {
  var defaultBreakpoints = _typeof(breakpoints) === 'object' ? breakpoints : {
    xs: 320,
    sm: 560,
    m: 768,
    l: 960,
    xl: 1200
  };
  var ro = new ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.target.updateBreakpoints) {
        entry.target.updateBreakpoints(entry.contentRect.width);
      } else {
        var _breakpoints = entry.target.dataset.breakpoints ? JSON.parse(entry.target.dataset.breakpoints) : defaultBreakpoints; // Put Breakpoints in a array


        var breakpointArr = Object.keys(_breakpoints); // For non-custom-elements, use the data-obsevering attribute
        // to target observed elements in CSS.

        if (entry.width === 0) {
          entry.target.dataset.observing = false;
        } else {
          entry.target.dataset.observing = true;
        } // Update the matching breakpoints on the target element.


        Object.keys(_breakpoints).forEach(function (breakpoint) {
          var minWidth = _breakpoints[breakpoint];

          if (entry.contentRect.width >= minWidth) {
            // Clean up the classlist if only one class of the object may be active
            if (entry.target.hasAttribute('data-utility')) {
              var _entry$target$classLi;

              (_entry$target$classLi = entry.target.classList).remove.apply(_entry$target$classLi, _toConsumableArray(breakpointArr));
            }

            entry.target.classList.add(breakpoint);
          } else {
            entry.target.classList.remove(breakpoint);
          }
        });
      }
    });
  }); // Observe all non-custom element containers, i.e. all elements with the
  // `data-observe-resizes` attribute. Note: custom element containers
  // are observed via the connectedCallback() lifecycle method.

  var elements = _toConsumableArray(document.querySelectorAll('[data-observe-resizes]'));

  elements.forEach(function (element) {
    ro.observe(element);
  }); // Monitor the DOM for changes for non-custom-element containers.

  var mo = new MutationObserver(function (entries) {
    entries.forEach(function (entry) {
      eachObserveableElement(entry.addedNodes, ro.observe.bind(ro));
    });
  });
  mo.observe(document.body, {
    childList: true,
    subtree: true
  }); // Iterates through a subtree

  function eachObserveableElement(nodes, fn) {
    if (nodes) {
      [].slice.call(nodes).forEach(function (node) {
        if (node.nodeType === 1) {
          var containers = [].slice.call(node.querySelectorAll('[data-observe-resizes]'));

          if (node.hasAttribute('data-observe-resizes')) {
            containers.push(node);
          }

          for (var container, i = 0; container = containers[i]; i++) {
            fn(container);
          }
        }
      });
    }
  }
};

exports.rcomps = rcomps;