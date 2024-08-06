"use strict";
/**
 * @param {?} clientId
 * @param {?} name
 * @param {?} set
 * @return {undefined}
 */
function confirm_modal(clientId, name, set) {
  $("#modal_delete").appendTo("body").modal();
  document.getElementById("delete_link").setAttribute("href", clientId);
  document.getElementById("delete_link").setAttribute("data-id", name);
  document.getElementById("delete_link").setAttribute("data-parent", set);
}
/**
 * @param {!Object} event
 * @param {string} subName
 * @return {undefined}
 */
function readPhoto(event, subName) {
  if (event.files && event.files[0]) {
    $("#modal_ajax_sm .modal-body").addClass("preloader");
    $("#modal_ajax_sm").modal({
      backdrop : "static",
      keyboard : false
    });
    /** @type {!FileReader} */
    var fileReader = new FileReader;
    /**
     * @param {!Event} fileLoadedEvent
     * @return {undefined}
     */
    fileReader.onload = function(fileLoadedEvent) {
      $("#" + subName).attr("src", fileLoadedEvent.target.result);
    };
    fileReader.readAsDataURL(event.files[0]);
    $(document).on("submit", "#photoUpload", function(event) {
      event.preventDefault();
      $.ajax({
        type : "POST",
        url : $(this).attr("action"),
        data : new FormData(this),
        contentType : false,
        cache : false,
        processData : false,
        success : function(data) {
          try {
            var op = $.parseJSON(data);
            if (403 == op.status) {
              $(".modal").modal("hide");
              $("#login").modal();
            } else {
              if (200 == op.status) {
                $("*").modal("hide");
                $("#modal_success .modal-body").removeClass("preloader").html(op.messages);
                $("#modal_success").modal();
              } else {
                $("#modal_alert .modal-body").removeClass("preloader").html(op.messages);
              }
            }
          } catch (a) {
            $("#modal_alert .modal-body").removeClass("preloader").html(data);
          }
        }
      }).fail(function() {
        $("#modal_alert .modal-body").html(fail_alert);
        $("#modal_alert").appendTo("body").modal();
      });
    });
    $("#photoUpload").submit();
  }
}
/**
 * @param {!Object} event
 * @param {string} subName
 * @return {undefined}
 */
function readCover(event, subName) {
  if (event.files && event.files[0]) {
    $("#modal_ajax_sm .modal-body").addClass("preloader");
    $("#modal_ajax_sm").modal({
      backdrop : "static",
      keyboard : false
    });
    /** @type {!FileReader} */
    var fileReader = new FileReader;
    /**
     * @param {!Event} fileLoadedEvent
     * @return {undefined}
     */
    fileReader.onload = function(fileLoadedEvent) {
      $("#" + subName).css({
        background : "url(" + fileLoadedEvent.target.result + ") center center no-repeat",
        "background-size" : "cover",
        "-webkit-background-size" : "cover",
        "background-position" : "fixed",
        "padding-top" : "240px",
        "padding-bottom" : "0",
        width : "100%"
      });
    };
    fileReader.readAsDataURL(event.files[0]);
    $(document).on("submit", "#coverUpload", function(event) {
      event.preventDefault();
      $.ajax({
        type : "POST",
        url : $(this).attr("action"),
        data : new FormData(this),
        contentType : false,
        cache : false,
        processData : false,
        success : function(data) {
          try {
            var op = $.parseJSON(data);
            if (403 == op.status) {
              $(".modal").modal("hide");
              $("#login").modal();
            } else {
              if (200 == op.status) {
                $("*").modal("hide");
                $("#modal_success .modal-body").removeClass("preloader").html(op.messages);
                $("#modal_success").modal();
              } else {
                $("#modal_alert .modal-body").removeClass("preloader").html(op.messages);
              }
            }
          } catch (a) {
            $("#modal_alert .modal-body").removeClass("preloader").html(data);
          }
        }
      }).fail(function() {
        $("#modal_alert .modal-body").html(fail_alert);
        $("#modal_alert").appendTo("body").modal();
      });
    });
    $("#coverUpload").submit();
  }
}
/**
 * @return {undefined}
 */
function carouselNormalization() {
  /**
   * @return {undefined}
   */
  function show() {
    a.each(function() {
      startEndRange.push($(this).height());
    });
    /** @type {number} */
    aPanelWidth = Math.max.apply(null, startEndRange);
    a.each(function() {
      $(this).css("min-height", aPanelWidth + "px");
    });
  }
  var aPanelWidth;
  var a = $("#carousel .item");
  /** @type {!Array} */
  var startEndRange = [];
  if (a.length) {
    show();
    $(window).on("resize orientationchange", function() {
      /** @type {number} */
      aPanelWidth = 0;
      /** @type {number} */
      startEndRange.length = 0;
      a.each(function() {
        $(this).css("min-height", "0");
      });
      show();
    });
  }
}
(function() {
  var AjaxMonitor;
  var Bar;
  var doc1;
  var graphicOption;
  var ElementTracker;
  var EventLagMonitor;
  var NodeCompilerClass;
  var Events;
  var NoTargetError;
  var Pace;
  var RequestIntercept;
  var SOURCE_KEYS;
  var Object;
  var Date;
  var Base;
  var drawRequestedId;
  var avgAmplitude;
  var bar;
  var guard;
  var cancelAnimationFrame;
  var defaultOptions;
  var extend;
  var extendNative;
  var getFromDOM;
  var getIntercept;
  var handlePushState;
  var ignoreStack;
  var init;
  var now;
  var options;
  var callback;
  var result;
  var main;
  var nonDuplicateIds;
  var shouldIgnoreURL;
  var shouldTrack;
  var source;
  var sources;
  var uniScaler;
  var _WebSocket;
  var _XDomainRequest;
  var _XMLHttpRequest;
  var _j;
  var _intercept;
  var URLInput;
  var _pushState;
  var _ref;
  var _ref12;
  var _replaceState;
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = [].slice;
  /** @type {function(this:Object, *): boolean} */
  var __hasProp = {}.hasOwnProperty;
  /**
   * @param {!Function} child
   * @param {!Function} parent
   * @return {?}
   */
  var __extends = function(child, parent) {
    /**
     * @return {undefined}
     */
    function ctor() {
      /** @type {!Function} */
      this.constructor = child;
    }
    var key;
    for (key in parent) {
      if (__hasProp.call(parent, key)) {
        child[key] = parent[key];
      }
    }
    return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child;
  };
  /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
  var __indexOf = [].indexOf || function(elem) {
    /** @type {number} */
    var i = 0;
    var l = this.length;
    for (; l > i; i++) {
      if (i in this && this[i] === elem) {
        return i;
      }
    }
    return -1;
  };
  defaultOptions = {
    catchupTime : 100,
    initialRate : .03,
    minTime : 250,
    ghostTime : 100,
    maxProgressPerFrame : 20,
    easeFactor : 1.25,
    startOnPageLoad : true,
    restartOnPushState : true,
    restartOnRequestAfter : 500,
    target : "body",
    elements : {
      checkInterval : 100,
      selectors : ["body"]
    },
    eventLag : {
      minSamples : 10,
      sampleCount : 3,
      lagThreshold : 3
    },
    ajax : {
      trackMethods : ["GET"],
      trackWebSockets : true,
      ignoreURLs : []
    }
  };
  /**
   * @return {?}
   */
  now = function() {
    var t;
    return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date;
  };
  callback = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  if (null == callback) {
    /**
     * @param {!Object} func
     * @return {?}
     */
    callback = function(func) {
      return setTimeout(func, 50);
    };
    /**
     * @param {!Object} handle
     * @return {?}
     */
    cancelAnimationFrame = function(handle) {
      return clearTimeout(handle);
    };
  }
  /**
   * @param {!Function} callback
   * @return {?}
   */
  main = function(callback) {
    var start;
    var task;
    return start = now(), (task = function() {
      var time;
      return time = now() - start, time >= 33 ? (start = now(), callback(time, function() {
        return callback(task);
      })) : setTimeout(task, 33 - time);
    })();
  };
  /**
   * @return {?}
   */
  result = function() {
    var e;
    var key;
    var a;
    return a = arguments[0], key = arguments[1], e = 3 <= arguments.length ? slice.call(arguments, 2) : [], "function" == typeof a[key] ? a[key].apply(a, e) : a[key];
  };
  /**
   * @return {?}
   */
  extend = function() {
    var key;
    var data;
    var _ref1;
    var options;
    var object;
    var i;
    var l;
    data = arguments[0];
    /** @type {!Array<?>} */
    options = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    /** @type {number} */
    i = 0;
    /** @type {number} */
    l = options.length;
    for (; l > i; i++) {
      if (_ref1 = options[i]) {
        for (key in _ref1) {
          if (__hasProp.call(_ref1, key)) {
            object = _ref1[key];
            if (null != data[key] && "object" == typeof data[key] && null != object && "object" == typeof object) {
              extend(data[key], object);
            } else {
              data[key] = object;
            }
          }
        }
      }
    }
    return data;
  };
  /**
   * @param {!Object} arr
   * @return {?}
   */
  avgAmplitude = function(arr) {
    var size;
    var output;
    var m;
    var _i;
    var _len;
    /** @type {number} */
    output = size = 0;
    /** @type {number} */
    _i = 0;
    _len = arr.length;
    for (; _len > _i; _i++) {
      m = arr[_i];
      /** @type {number} */
      output = output + Math.abs(m);
      size++;
    }
    return output / size;
  };
  /**
   * @param {string} key
   * @param {number} json
   * @return {?}
   */
  getFromDOM = function(key, json) {
    var data;
    var all;
    var el;
    if (null == key && (key = "options"), null == json && (json = true), el = document.querySelector("[data-pace-" + key + "]")) {
      if (data = el.getAttribute("data-pace-" + key), !json) {
        return data;
      }
      try {
        return JSON.parse(data);
      } catch (result) {
        return all = result, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", all) : void 0;
      }
    }
  };
  NodeCompilerClass = function() {
    /**
     * @return {undefined}
     */
    function EventChannel() {
    }
    return EventChannel.prototype.on = function(event, item, context, once) {
      var _base;
      return null == once && (once = false), null == this.bindings && (this.bindings = {}), null == (_base = this.bindings)[event] && (_base[event] = []), this.bindings[event].push({
        handler : item,
        ctx : context,
        once : once
      });
    }, EventChannel.prototype.once = function(event, callback, type) {
      return this.on(event, callback, type, true);
    }, EventChannel.prototype.off = function(name, handler) {
      var i;
      var bindings;
      var r;
      if (null != (null != (bindings = this.bindings) ? bindings[name] : void 0)) {
        if (null == handler) {
          return delete this.bindings[name];
        }
        /** @type {number} */
        i = 0;
        /** @type {!Array} */
        r = [];
        for (; i < this.bindings[name].length;) {
          r.push(this.bindings[name][i].handler === handler ? this.bindings[name].splice(i, 1) : i++);
        }
        return r;
      }
    }, EventChannel.prototype.trigger = function() {
      var result;
      var ctx;
      var name;
      var handler;
      var i;
      var once;
      var bindings;
      var _ref1;
      var results;
      if (name = arguments[0], result = 2 <= arguments.length ? slice.call(arguments, 1) : [], null != (bindings = this.bindings) ? bindings[name] : void 0) {
        /** @type {number} */
        i = 0;
        /** @type {!Array} */
        results = [];
        for (; i < this.bindings[name].length;) {
          _ref1 = this.bindings[name][i];
          handler = _ref1.handler;
          ctx = _ref1.ctx;
          once = _ref1.once;
          handler.apply(null != ctx ? ctx : this, result);
          results.push(once ? this.bindings[name].splice(i, 1) : i++);
        }
        return results;
      }
    }, EventChannel;
  }();
  Pace = window.Pace || {};
  window.Pace = Pace;
  extend(Pace, NodeCompilerClass.prototype);
  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());
  /** @type {!Array} */
  _ref = ["ajax", "document", "eventLag", "elements"];
  /** @type {number} */
  _j = 0;
  /** @type {number} */
  URLInput = _ref.length;
  for (; URLInput > _j; _j++) {
    source = _ref[_j];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }
  NoTargetError = function(_super) {
    /**
     * @return {?}
     */
    function result() {
      return _ref12 = result.__super__.constructor.apply(this, arguments);
    }
    return __extends(result, _super), result;
  }(Error);
  Bar = function() {
    /**
     * @return {undefined}
     */
    function Bar() {
      /** @type {number} */
      this.progress = 0;
    }
    return Bar.prototype.getElement = function() {
      var body;
      if (null == this.el) {
        if (body = document.querySelector(options.target), !body) {
          throw new NoTargetError;
        }
        /** @type {!Element} */
        this.el = document.createElement("div");
        /** @type {string} */
        this.el.className = "pace pace-active";
        /** @type {string} */
        document.body.className = document.body.className.replace(/pace-done/g, "");
        document.body.className += " pace-running";
        /** @type {string} */
        this.el.innerHTML = '';
        if (null != body.firstChild) {
          body.insertBefore(this.el, body.firstChild);
        } else {
          body.appendChild(this.el);
        }
      }
      return this.el;
    }, Bar.prototype.finish = function() {
      var el;
      return el = this.getElement(), el.className = el.className.replace("pace-active", ""), el.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, Bar.prototype.update = function(progress) {
      return this.progress = progress, this.render();
    }, Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    }, Bar.prototype.render = function() {
      var element;
      var name;
      var t;
      var vertexAttribute;
      var _i;
      var _len;
      var _ref2;
      // if (null == document.querySelector(options.target)) {
      //   return false;
      // }
      // element = this.getElement();
      // /** @type {string} */
      // vertexAttribute = "translate3d(" + this.progress + "%, 0, 0)";
      // /** @type {!Array} */
      // _ref2 = ["webkitTransform", "msTransform", "transform"];
      // /** @type {number} */
      // _i = 0;
      // /** @type {number} */
      // _len = _ref2.length;
      // for (; _len > _i; _i++) {
      //   name = _ref2[_i];
      //   /** @type {string} */
      //   element.children[0].style[name] = vertexAttribute;
      // }
      return null;// (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (element.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? t = "99" : (t = this.progress < 10 ? "0" : "", t = t + (0 | this.progress)), element.children[0].setAttribute("data-progress", "" + t)), this.lastRenderedProgress = this.progress;
    }, Bar.prototype.done = function() {
      return this.progress >= 100;
    }, Bar;
  }();
  Events = function() {
    /**
     * @return {undefined}
     */
    function EventChannel() {
      this.bindings = {};
    }
    return EventChannel.prototype.trigger = function(name, data) {
      var v;
      var _j;
      var _len2;
      var _ref2;
      var _results;
      if (null != this.bindings[name]) {
        _ref2 = this.bindings[name];
        /** @type {!Array} */
        _results = [];
        /** @type {number} */
        _j = 0;
        _len2 = _ref2.length;
        for (; _len2 > _j; _j++) {
          v = _ref2[_j];
          _results.push(v.call(this, data));
        }
        return _results;
      }
    }, EventChannel.prototype.on = function(event, type) {
      var _base;
      return null == (_base = this.bindings)[event] && (_base[event] = []), this.bindings[event].push(type);
    }, EventChannel;
  }();
  /** @type {function(?): ?} */
  _XMLHttpRequest = window.XMLHttpRequest;
  _XDomainRequest = window.XDomainRequest;
  _WebSocket = window.WebSocket;
  /**
   * @param {string} to
   * @param {!Object} from
   * @return {?}
   */
  extendNative = function(to, from) {
    var a;
    var key;
    var n;
    var _results;
    /** @type {!Array} */
    _results = [];
    for (key in from.prototype) {
      try {
        n = from.prototype[key];
        _results.push(null == to[key] && "function" != typeof n ? to[key] = n : void 0);
      } catch (nativeObjectObject) {
        a = nativeObjectObject;
      }
    }
    return _results;
  };
  /** @type {!Array} */
  ignoreStack = [];
  /**
   * @return {?}
   */
  Pace.ignore = function() {
    var n;
    var j;
    var llNode;
    return j = arguments[0], n = 2 <= arguments.length ? slice.call(arguments, 1) : [], ignoreStack.unshift("ignore"), llNode = j.apply(null, n), ignoreStack.shift(), llNode;
  };
  /**
   * @return {?}
   */
  Pace.track = function() {
    var n;
    var j;
    var llNode;
    return j = arguments[0], n = 2 <= arguments.length ? slice.call(arguments, 1) : [], ignoreStack.unshift("track"), llNode = j.apply(null, n), ignoreStack.shift(), llNode;
  };
  /**
   * @param {string} method
   * @return {?}
   */
  shouldTrack = function(method) {
    var media;
    if (null == method && (method = "GET"), "track" === ignoreStack[0]) {
      return "force";
    }
    if (!ignoreStack.length && options.ajax) {
      if ("socket" === method && options.ajax.trackWebSockets) {
        return true;
      }
      if (media = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, media) >= 0) {
        return true;
      }
    }
    return false;
  };
  RequestIntercept = function(_super) {
    /**
     * @return {undefined}
     */
    function RequestIntercept() {
      var monitorXHR;
      var _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      /**
       * @param {!Object} req
       * @return {?}
       */
      monitorXHR = function(req) {
        var _open;
        return _open = req.open, req.open = function(type, doFunc) {
          return shouldTrack(type) && _this.trigger("request", {
            type : type,
            url : doFunc,
            request : req
          }), _open.apply(req, arguments);
        };
      };
      /**
       * @param {?} flags
       * @return {?}
       */
      window.XMLHttpRequest = function(flags) {
        var req;
        return req = new _XMLHttpRequest(flags), monitorXHR(req), req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (o) {
      }
      if (null != _XDomainRequest) {
        /**
         * @return {?}
         */
        window.XDomainRequest = function() {
          var req;
          return req = new _XDomainRequest, monitorXHR(req), req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (o) {
        }
      }
      if (null != _WebSocket && options.ajax.trackWebSockets) {
        /**
         * @param {string} url
         * @param {!Object} protocols
         * @return {?}
         */
        window.WebSocket = function(url, protocols) {
          var SEARCH_REQUEST;
          return SEARCH_REQUEST = null != protocols ? new _WebSocket(url, protocols) : new _WebSocket(url), shouldTrack("socket") && _this.trigger("request", {
            type : "socket",
            url : url,
            protocols : protocols,
            request : SEARCH_REQUEST
          }), SEARCH_REQUEST;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (o) {
        }
      }
    }
    return __extends(RequestIntercept, _super), RequestIntercept;
  }(Events);
  /** @type {null} */
  _intercept = null;
  /**
   * @return {?}
   */
  getIntercept = function() {
    return null == _intercept && (_intercept = new RequestIntercept), _intercept;
  };
  /**
   * @param {!Object} url
   * @return {?}
   */
  shouldIgnoreURL = function(url) {
    var parent;
    var _i;
    var _len;
    var _ref2;
    _ref2 = options.ajax.ignoreURLs;
    /** @type {number} */
    _i = 0;
    _len = _ref2.length;
    for (; _len > _i; _i++) {
      if (parent = _ref2[_i], "string" == typeof parent) {
        if (-1 !== url.indexOf(parent)) {
          return true;
        }
      } else {
        if (parent.test(url)) {
          return true;
        }
      }
    }
    return false;
  };
  getIntercept().on("request", function(_arg) {
    var obj;
    var queueArgs;
    var request;
    var type;
    var url;
    return type = _arg.type, request = _arg.request, url = _arg.url, shouldIgnoreURL(url) ? void 0 : Pace.running || options.restartOnRequestAfter === false && "force" !== shouldTrack(type) ? void 0 : (queueArgs = arguments, obj = options.restartOnRequestAfter || 0, "boolean" == typeof obj && (obj = 0), setTimeout(function() {
      var e;
      var _k;
      var _len3;
      var _ref2;
      var _ref3;
      var newNodeLists;
      if (e = "socket" === type ? request.readyState < 2 : 0 < (_ref2 = request.readyState) && 4 > _ref2) {
        Pace.restart();
        _ref3 = Pace.sources;
        /** @type {!Array} */
        newNodeLists = [];
        /** @type {number} */
        _k = 0;
        _len3 = _ref3.length;
        for (; _len3 > _k; _k++) {
          if (source = _ref3[_k], source instanceof AjaxMonitor) {
            source.watch.apply(source, queueArgs);
            break;
          }
          newNodeLists.push(void 0);
        }
        return newNodeLists;
      }
    }, obj));
  });
  AjaxMonitor = function() {
    /**
     * @return {undefined}
     */
    function AjaxMonitor() {
      var this_ = this;
      /** @type {!Array} */
      this.elements = [];
      getIntercept().on("request", function() {
        return this_.watch.apply(this_, arguments);
      });
    }
    return AjaxMonitor.prototype.watch = function(_arg) {
      var data;
      var e;
      var undefined;
      var url;
      return undefined = _arg.type, data = _arg.request, url = _arg.url, shouldIgnoreURL(url) ? void 0 : (e = "socket" === undefined ? new Date(data) : new Base(data), this.elements.push(e));
    }, AjaxMonitor;
  }();
  Base = function() {
    /**
     * @param {!Object} request
     * @return {undefined}
     */
    function XHRRequestTracker(request) {
      var e;
      var a;
      var _i;
      var _len;
      var _onreadystatechange;
      var _ref2;
      var pubPromise = this;
      if (this.progress = 0, null != window.ProgressEvent) {
        /** @type {null} */
        a = null;
        request.addEventListener("progress", function(event) {
          return pubPromise.progress = event.lengthComputable ? 100 * event.loaded / event.total : pubPromise.progress + (100 - pubPromise.progress) / 2;
        }, false);
        /** @type {!Array} */
        _ref2 = ["load", "abort", "timeout", "error"];
        /** @type {number} */
        _i = 0;
        /** @type {number} */
        _len = _ref2.length;
        for (; _len > _i; _i++) {
          e = _ref2[_i];
          request.addEventListener(e, function() {
            return pubPromise.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        /**
         * @return {?}
         */
        request.onreadystatechange = function() {
          var _ref3;
          return 0 === (_ref3 = request.readyState) || 4 === _ref3 ? pubPromise.progress = 100 : 3 === request.readyState && (pubPromise.progress = 50), "function" == typeof _onreadystatechange ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }
    return XHRRequestTracker;
  }();
  Date = function() {
    /**
     * @param {!HTMLElement} request
     * @return {undefined}
     */
    function SocketRequestTracker(request) {
      var e;
      var _i;
      var _len;
      var _ref;
      var pubPromise = this;
      /** @type {number} */
      this.progress = 0;
      /** @type {!Array} */
      _ref = ["error", "open"];
      /** @type {number} */
      _i = 0;
      /** @type {number} */
      _len = _ref.length;
      for (; _len > _i; _i++) {
        e = _ref[_i];
        request.addEventListener(e, function() {
          return pubPromise.progress = 100;
        }, false);
      }
    }
    return SocketRequestTracker;
  }();
  graphicOption = function() {
    /**
     * @param {!Object} options
     * @return {undefined}
     */
    function ElementMonitor(options) {
      var selector;
      var i;
      var len;
      var ref3;
      if (null == options) {
        options = {};
      }
      /** @type {!Array} */
      this.elements = [];
      if (null == options.selectors) {
        /** @type {!Array} */
        options.selectors = [];
      }
      ref3 = options.selectors;
      /** @type {number} */
      i = 0;
      len = ref3.length;
      for (; len > i; i++) {
        selector = ref3[i];
        this.elements.push(new ElementTracker(selector));
      }
    }
    return ElementMonitor;
  }();
  ElementTracker = function() {
    /**
     * @param {string} selector
     * @return {undefined}
     */
    function Rule(selector) {
      /** @type {string} */
      this.selector = selector;
      /** @type {number} */
      this.progress = 0;
      this.check();
    }
    return Rule.prototype.check = function() {
      var PWWWService = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
        return PWWWService.check();
      }, options.elements.checkInterval);
    }, Rule.prototype.done = function() {
      return this.progress = 100;
    }, Rule;
  }();
  doc1 = function() {
    /**
     * @return {undefined}
     */
    function DocumentMonitor() {
      var _onreadystatechange;
      var _ref2;
      var _this = this;
      this.progress = null != (_ref2 = this.states[document.readyState]) ? _ref2 : 100;
      /** @type {function(): ?} */
      _onreadystatechange = document.onreadystatechange;
      /**
       * @return {?}
       */
      document.onreadystatechange = function() {
        return null != _this.states[document.readyState] && (_this.progress = _this.states[document.readyState]), "function" == typeof _onreadystatechange ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }
    return DocumentMonitor.prototype.states = {
      loading : 0,
      interactive : 50,
      complete : 100
    }, DocumentMonitor;
  }();
  EventLagMonitor = function() {
    /**
     * @return {undefined}
     */
    function EventLagMonitor() {
      var avg;
      var initializeCheckTimer;
      var timestamp;
      var points;
      var samples;
      var pubPromise = this;
      /** @type {number} */
      this.progress = 0;
      /** @type {number} */
      avg = 0;
      /** @type {!Array} */
      samples = [];
      /** @type {number} */
      points = 0;
      timestamp = now();
      /** @type {number} */
      initializeCheckTimer = setInterval(function() {
        var avcSample;
        return avcSample = now() - timestamp - 50, timestamp = now(), samples.push(avcSample), samples.length > options.eventLag.sampleCount && samples.shift(), avg = avgAmplitude(samples), ++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold ? (pubPromise.progress = 100, clearInterval(initializeCheckTimer)) : pubPromise.progress = 100 * (3 / (avg + 3));
      }, 50);
    }
    return EventLagMonitor;
  }();
  Object = function() {
    /**
     * @param {!Object} source
     * @return {undefined}
     */
    function Scaler(source) {
      /** @type {!Object} */
      this.source = source;
      /** @type {number} */
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      /** @type {number} */
      this.catchup = 0;
      /** @type {number} */
      this.progress = this.lastProgress = 0;
      if (null != this.source) {
        this.progress = result(this.source, "progress");
      }
    }
    return Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      return null == val && (val = result(this.source, "progress")), val >= 100 && (this.done = true), val === this.last ? this.sinceLastUpdate += frameTime : (this.sinceLastUpdate && (this.rate = (val - this.last) / this.sinceLastUpdate), this.catchup = (val - this.progress) / options.catchupTime, this.sinceLastUpdate = 0, this.last = val), val > this.progress && (this.progress += this.catchup * frameTime), scaling = 1 - Math.pow(this.progress / 100, options.easeFactor), this.progress += scaling * 
      this.rate * frameTime, this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, Scaler;
  }();
  /** @type {null} */
  sources = null;
  /** @type {null} */
  nonDuplicateIds = null;
  /** @type {null} */
  bar = null;
  /** @type {null} */
  uniScaler = null;
  /** @type {null} */
  drawRequestedId = null;
  /** @type {null} */
  guard = null;
  /** @type {boolean} */
  Pace.running = false;
  /**
   * @return {?}
   */
  handlePushState = function() {
    return options.restartOnPushState ? Pace.restart() : void 0;
  };
  if (null != window.history.pushState) {
    /** @type {function(): ?} */
    _pushState = window.history.pushState;
    /**
     * @return {?}
     */
    window.history.pushState = function() {
      return handlePushState(), _pushState.apply(window.history, arguments);
    };
  }
  if (null != window.history.replaceState) {
    /** @type {function(): ?} */
    _replaceState = window.history.replaceState;
    /**
     * @return {?}
     */
    window.history.replaceState = function() {
      return handlePushState(), _replaceState.apply(window.history, arguments);
    };
  }
  SOURCE_KEYS = {
    ajax : AjaxMonitor,
    elements : graphicOption,
    document : doc1,
    eventLag : EventLagMonitor
  };
  (init = function() {
    var type;
    var _j;
    var i;
    var _len2;
    var index;
    var _ref2;
    var _ref4;
    var _ref3;
    /** @type {!Array} */
    Pace.sources = sources = [];
    /** @type {!Array} */
    _ref2 = ["ajax", "elements", "document", "eventLag"];
    /** @type {number} */
    _j = 0;
    /** @type {number} */
    _len2 = _ref2.length;
    for (; _len2 > _j; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref3 = null != (_ref4 = options.extraSources) ? _ref4 : [];
    /** @type {number} */
    i = 0;
    index = _ref3.length;
    for (; index > i; i++) {
      source = _ref3[i];
      sources.push(new source(options));
    }
    return Pace.bar = bar = new Bar, nonDuplicateIds = [], uniScaler = new Object;
  })();
  /**
   * @return {?}
   */
  Pace.stop = function() {
    return Pace.trigger("stop"), Pace.running = false, bar.destroy(), guard = true, null != drawRequestedId && ("function" == typeof cancelAnimationFrame && cancelAnimationFrame(drawRequestedId), drawRequestedId = null), init();
  };
  /**
   * @return {?}
   */
  Pace.restart = function() {
    return Pace.trigger("restart"), Pace.stop(), Pace.start();
  };
  /**
   * @return {?}
   */
  Pace.go = function() {
    var start;
    return Pace.running = true, bar.render(), start = now(), guard = false, drawRequestedId = main(function(frameTime, slice) {
      var avg;
      var count;
      var done;
      var v;
      var _ref;
      var j;
      var k;
      var u;
      var scaler;
      var obj;
      var sum;
      var _i;
      var y;
      var _len;
      var z;
      var _ref1;
      /** @type {number} */
      u = 100 - bar.progress;
      /** @type {number} */
      count = sum = 0;
      /** @type {boolean} */
      done = true;
      /** @type {number} */
      j = _i = 0;
      _len = sources.length;
      for (; _len > _i; j = ++_i) {
        source = sources[j];
        obj = null != nonDuplicateIds[j] ? nonDuplicateIds[j] : nonDuplicateIds[j] = [];
        _ref = null != (_ref1 = source.elements) ? _ref1 : [source];
        /** @type {number} */
        k = y = 0;
        z = _ref.length;
        for (; z > y; k = ++y) {
          v = _ref[k];
          scaler = null != obj[k] ? obj[k] : obj[k] = new Object(v);
          /** @type {number} */
          done = done & scaler.done;
          if (!scaler.done) {
            count++;
            sum = sum + scaler.tick(frameTime);
          }
        }
      }
      return avg = sum / count, bar.update(uniScaler.tick(frameTime, avg)), bar.done() || done || guard ? (bar.update(100), Pace.trigger("done"), setTimeout(function() {
        return bar.finish(), Pace.running = false, Pace.trigger("hide");
      }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)))) : ''/*slice()*/;
    });
  };
  /**
   * @param {?} _s3Params
   * @return {?}
   */
  Pace.start = function(_s3Params) {
    extend(options, _s3Params);
    /** @type {boolean} */
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50);
  };
  if ("function" == typeof define && define.amd) {
    define(function() {
      return Pace;
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = Pace;
    } else {
      if (options.startOnPageLoad) {
        Pace.start();
      }
    }
  }
}).call(this), loggedIn && $(function() {
  /**
   * @return {undefined}
   */
  function start() {
    Pace.ignore(function() {
      /** @type {string} */
      var name = document.title;
      /** @type {number} */
      var key = 0;
      $.ajax({
        url : base_url + "user/alerts",
        success : function(dataStr) {
          var data = $.parseJSON(dataStr);
          if (200 == data.status) {
            if (/\([\d]+\)/.test(name)) {
              if (name = name.split(") "), key = name[0].substring(1), key == data.count) {
                return;
              }
              document.title = "(" + data.count + ") " + name[1];
            } else {
              document.title = "(" + data.count + ") " + name;
            }
            $(".countAlert").addClass("badge bg-red").html('<i class="fa fa-bell hidden-xs"></i> ' + data.count);
          } else {
            $(".countAlert").removeClass("badge bg-red").html('<i class="fa fa-bell hidden-xs"></i> ');
            if (/\([\d]+\)/.test(name)) {
              document.title = name.replace(/\([\d]+\)/, "");
            }
          }
        }
      }).fail(function() {
        $("#modal_alert .modal-body").html(dc_alert);
        $("#modal_alert").appendTo("body").modal();
      });
    });
  }
  $("body").on("click", ".load-notifications", function(event) {
    event.preventDefault();
    $(".notifications").height(60).addClass("loading");
    $(".notifications .slimScrollDiv, .notifications-area#slimScroll").height(60);
    $(".notifications-area").html("");
    $.ajax({
      url : base_url + "user/load_alerts",
      success : function(t) {
        var e = $.parseJSON(t);
        /** @type {string} */
        x = document.title;
        if (200 == e.status && /\([\d]+\)/.test(x)) {
          /** @type {string} */
          document.title = x.replace(/\([\d]+\)/, "");
        }
        if (200 == e.status) {
          $(".notifications").height($(window).height() / 1.5).removeClass("loading");
          $(".notifications .slimScrollDiv, .notifications-area#slimScroll").height($(window).height() / 1.5);
          $(".notifications-area").html(e.html);
          if ($.fn.slimScroll && $("#slimScroll").length) {
            $("#slimScroll").slimScroll({
              height : $(window).height() / 1.5
            });
          }
          $(".notifications-footer").css("display", "block");
        } else {
          $(".notifications").height("auto").removeClass("loading");
          $(".notifications .slimScrollDiv, .notifications-area#slimScroll").height("auto");
          $(".notifications-area").html('<div class="col-sm-12 text-center"><br /><i class="fa fa-info-circle"></i> ' + e.html + "<br /><br /></div>");
          $(".notifications-footer").css("display", "none");
        }
      }
    }).fail(function() {
      $("#modal_alert .modal-body").html(dc_alert);
      $("#modal_alert").appendTo("body").modal();
    });
  });
}), 
$(document).ready(function() {
  /** @type {boolean} */
  var e = false;
  if ($(document).on("keypress keyup keydown paste cut", "input, textarea, select", function() 
  {
    /** @type {boolean} */
    e = "" != $(this).val() ? true : false;
  }),

  $(window).on("popstate", function(inAgent) 
  {
    if (null !== inAgent.state) 
    {
      Pace.restart();
      $.get(location.href, function(t) 
      {
        document.title = t.meta.title + " | " + siteName;
        $(".navbar").find("li.active").removeClass("active");
        $(".navbar a[href='" + location.href + "']").parents().addClass("active");
        window.history.pushState("string", t.meta.title + " | " + siteName, location.href);
        $(".pushTitle").text(t.meta.title);
        $("#page-content").html(t.html);
        if ($.isFunction($.fn.slimScroll) && $(window).width() > 768 && $("#slimScroll").length) 
        {
          $("#slimScroll").slimScroll({
            height : "500px"
          });
        }
        if ($.isFunction($.fn.sticky) && $(window).width() > 768 && $(".sticky").length) 
        {
          $(".sticky").sticky();
        }
        if ($.isFunction($.fn.masonry) && $(window).width() > 768 && $(".grid").length) 
        {
          $(".grid").imagesLoaded(function() {
            $(".grid").masonry({
              itemSelector : ".grid-item"
            });
          });
        }
      }).fail(function() 
      {
        $("#modal_alert .modal-body").html(fail_alert);
        $("#modal_alert").appendTo("body").modal();
      });
    } else {
      /** @type {string} */
      window.location.href = location.href;
    }
  }),
  
  
  
  
  $(document).on("click", ".ajaxloadsS", function(event) {
    event.preventDefault();
    Pace.restart();
    var href = $(this).attr("href");
    return e ? (Pace.stop(),  void $.get(href, function(options) 
                  {
                    if (options.redirect)
                    {
                      window.location.href = options.url;
                    } else 
                    {
                      document.title = options.meta.title + " | " + siteName;
                      $(".navbar").find("li.active").removeClass("active");
                      $(".navbar a[href='" + href + "']").parents().addClass("active");
                      window.history.pushState("string", options.meta.title + " | " + siteName, href);
                      $(".pushTitle").text(options.meta.title);
                      $("#page-content").html(options.html);
                      if ($.isFunction($.fn.carousel) && $(".carousel").length) 
                      {
                        $(".carousel").carousel({
                          interval : 5E3
                        });
                      }
                      if ($.isFunction($.fn.slimScroll) && $(window).width() > 768 && $("#slimScroll").length) 
                      {
                        $("#slimScroll").slimScroll({
                          height : "500px"
                        });
                      }
                      if ($.isFunction($.fn.sticky) && $(window).width() > 768 && $(".sticky").length) 
                      {
                        $(".sticky").sticky();
                      }
                      if ($.isFunction($.fn.masonry) && $(window).width() > 768 && $(".grid").length) 
                      {
                        $(".grid").imagesLoaded(function() {
                          $(".grid").masonry({
                            itemSelector : ".grid-item"
                          });
                        });
                      }
                    }
                  }).done(function() 
                  {
                    $("html,body").animate({
                      scrollTop : 0
                    }, "slow");
                  }).fail(function() 
                  {
                    $("#modal_alert .modal-body").html(fail_alert);
                    $("#modal_alert").appendTo("body").modal();
                  }
              )
    ):'';
  }), 
  
  
  
  $(document).on("click", ".ajax", function(event) {
    if (event.preventDefault(), !($(window).width() > 768)) {
      Pace.restart();
      var href = $(this).attr("href");
      return e ? (Pace.stop(),  void $.get(href, function(options) {
        if (options.redirect) {
          window.location.href = options.url;
        } else {
          document.title = options.meta.title + " | " + siteName;
          $(".navbar").find("li.active").removeClass("active");
          $(".navbar a[href='" + href + "']").parents().addClass("active");
          window.history.pushState("string", options.meta.title + " | " + siteName, href);
          $(".pushTitle").text(options.meta.title);
          $("#page-content").html(options.html);
          if ($.isFunction($.fn.slimScroll) && $(window).width() > 768 && $("#slimScroll").length) {
            $("#slimScroll").slimScroll({
              height : "500px"
            });
          }
          if ($.isFunction($.fn.sticky) && $(window).width() > 768 && $(".sticky").length) {
            $(".sticky").sticky();
          }
          if ($.isFunction($.fn.masonry) && $(window).width() > 768 && $(".grid").length) {
            $(".grid").imagesLoaded(function() {
              $(".grid").masonry({
                itemSelector : ".grid-item"
              });
            });
          }
        }
      }).done(function() {
        $("html,body").animate({
          scrollTop : 0
        }, "slow");
      }).fail(function() {
        $("#modal_alert .modal-body").html(fail_alert);
        $("#modal_alert").appendTo("body").modal();
      })):'';
    }
    $("#modal_ajax .modal-body").html("").addClass("preloader");
    $("#modal_ajax").modal();
    $.ajax({
      url : $(this).attr("href"),
      data : {
        modal : true
      },
      method : "POST",
      success : function(htmlExercise) {
        $("#modal_ajax .modal-body").removeClass("preloader").html(htmlExercise);
        if ($.isFunction($.fn.slimScroll)) {
          $("#slimScroll, #slimScroll_b").slimScroll({
            height : "600px"
          });
        }
      }
    }).fail(function() {
      $("#modal_alert .modal-body").html(fail_alert);
      $("#modal_alert").appendTo("body").modal();
    });
  }), $(document).on("submit", "form", function(canCreateDiscussions) {
    $(window).off("beforeunload");
  }), $(document).on("submit", ".submitForm", function(event) {
    event.preventDefault();
    var $sharepreview = $(this);
    var caveat = $(this).attr("data-saving");
    var numberOfViewUsers = $(this).attr("data-save");
    var formattedChosenQuestion = $(this).attr("data-alert");
    var i = $(this).is("[data-id]") ? $(this).attr("data-id") : "";
    $sharepreview.find(".submitBtn").addClass("disabled").html('<i class="fa fa-circle-o-notch fa-spin"></i> ' + caveat);
    $sharepreview.find(".error").remove();
    $.ajax({
      url : $(this).attr("action"),
      type : "POST",
      data : new FormData(this),
      contentType : false,
      cache : false,
      processData : false,
      success : function(response) {
        response = $.parseJSON(response);
        $sharepreview.find(".submitBtn").removeClass("disabled").html('<i class="fa fa-check-circle"></i> ' + numberOfViewUsers);
        if (406 == response.status) {
          $sharepreview.find(".statusHolder").fadeIn().html('<div class="error"><div class="animated fadeIn alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + response.messages + "</div></div>");
        } else {
          if (200 == response.status) {
            if (response.redirect) {
              window.location.href = response.redirect;
            } else {
              if (response.repost) {
                if ($("#reposts-count" + i).length) {
                  $("#reposts-count" + i).text(response.count);
                }
                $(".modal").modal("hide");
                $("#modal_success .modal-body").html(response.messages);
                $("#modal_success").appendTo("body").modal();
              }
            }
          } else {
            if (204 == response.status) {
              $.each(response.messages, function(isSlidingUp, canCreateDiscussions) {
                $sharepreview.find(".statusHolder").fadeIn().html('<div class="error"><div class="animated fadeIn alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + canCreateDiscussions + "</div></div>");
              });
            } else {
              if (403 == response.status) {
                $(".modal").modal("hide");
                $("#login").modal();
              } else {
                $("#modal_alert .modal-body").html(response.messages);
                $("#modal_alert").appendTo("body").modal();
              }
            }
          }
        }
        /** @type {boolean} */
        e = false;
      },
      error : function(deleted_model, err, op) {
        $sharepreview.find(".submitBtn").removeClass("disabled").html('<i class="fa fa-check-circle"></i> ' + numberOfViewUsers);
        $("#modal_alert .modal-body").html(formattedChosenQuestion);
        $("#modal_alert").appendTo("body").modal();
      }
    }).fail(function() {
      $sharepreview.find(".submitBtn").removeClass("disabled").html('<i class="fa fa-check-circle"></i> ' + numberOfViewUsers);
      $("#modal_alert .modal-body").html(fail_alert);
      $("#modal_alert").appendTo("body").modal();
    });
  }), $(document).on("submit", "#addUpdateForm", function(event) {
    event.preventDefault();
    var a = $(this);
    $("#updateInput").attr("readonly", true);
    $(".error").remove();
    $("#update-icon").removeClass("fa-edit").addClass("fa-circle-o-notch fa-spin");
    $.post(a.attr("action"), a.serialize(), function(t) {
      if (200 == t.status) {
        $("#updateInput").css("height", "auto").val("");
        $(t.html).hide().insertAfter("#fetch_new_update").slideDown();
      } else {
        if (204 == t.status) {
          $.each(t.messages, function(isSlidingUp, canCreateDiscussions) {
            a.find(".statusHolder").prepend('<div class="error"><div class="animated fadeIn alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + canCreateDiscussions + "</div></div>").slideDown();
          });
        } else {
          if (403 == t.status) {
            $(".modal").modal("hide");
            $("#login").modal();
          } else {
            $("#modal_alert .modal-body").html(t.messages);
            $("#modal_alert").appendTo("body").modal();
          }
        }
      }
      $("#update-icon").removeClass("fa-circle-o-notch fa-spin").addClass("fa-edit");
      $("#updateInput").removeAttr("readonly");
      /** @type {boolean} */
      e = false;
    }, "json");
  }), $(document).on("submit", "#addCommentForm", function(event) {
    event.preventDefault();
    var jmpress = $(this);
    var food_id = $(this).attr("data-id");
    jmpress.find($(".hitAction")).addClass("preloader").attr("readonly", true);
    $(".error").remove();
    $.post(jmpress.attr("action"), jmpress.serialize(), function(self) {
      if (200 == self.status) {
        $(".comments-count-" + food_id).text(self.count);
        $(".comments_holder-" + food_id).find(".fetch_new_comment").after(self.html).hide().slideDown();
        jmpress.find("#commentInput").css("height", "auto").val("");
        jmpress.find(".hitAction").removeClass("preloader").removeAttr("readonly").val("");
      } else {
        if (204 == self.status) {
          $.each(self.messages, function(isSlidingUp, canCreateDiscussions) {
            jmpress.find(".statusHolder").prepend('<div class="error"><div class="animated fadeIn alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + canCreateDiscussions + "</div></div>");
          });
        } else {
          if (403 == self.status) {
            $(".modal").modal("hide");
            $("#login").modal();
          } else {
            $("#modal_alert .modal-body").html(self.messages);
            $("#modal_alert").appendTo("body").modal();
          }
        }
      }
      jmpress.find(".hitAction").removeClass("preloader").removeAttr("readonly").val("");
      /** @type {boolean} */
      e = false;
    }, "json");
  }), $(document).on("click", ".reply-comment", function(event) {
    event.preventDefault();
    var data = $(this).attr("data-reply");
    var a = $(this).attr("data-summon");
    $("html, body").animate({
      scrollTop : $(this).parent($("#addCommentForm")).offset().top - 100
    }, 300);
    $("#commentInput").focus().val("@" + a + " " + $("#rcomment" + data).text() + "\n");
  }), $(document).on("click", ".commentBtn", function(event) {
    event.preventDefault();
    $(this).parent($("#addCommentForm")).submit();
  }), $(document).on("click", ".like", function(event) {
    event.preventDefault();
    var food_id = $(this).attr("data-id");
    if ($(".like-" + food_id).hasClass("active")) {
      $(".like-" + food_id).removeClass("active");
    } else {
      $(".like-" + food_id).addClass("active");
    }
    $(".like-icon", $(".like-" + food_id)).removeClass("fa-thumbs-up").addClass("fa-circle-o-notch fa-spin");
    $.ajax({
      url : $(this).attr("href"),
      context : this,
      success : function(data) {
        var op = $.parseJSON(data);
        $(".like-icon", $(".like-" + food_id)).removeClass("fa-circle-o-notch fa-spin");
        if ("liked" == op.status) {
          $(".like-icon", $(".like-" + food_id)).addClass("fa-thumbs-up");
          $(".like-" + food_id).addClass("active");
          $(".likes-count", $(".like-" + food_id)).text(op.count);
        } else {
          if ("disliked" == op.status) {
            $(".like-icon", $(".like-" + food_id)).addClass("fa-thumbs-up");
            $(".like-" + food_id).removeClass("active");
            $(".likes-count", $(".like-" + food_id)).text(op.count);
          } else {
            if (403 == op.status) {
              if ($(".like-" + food_id).hasClass("active")) {
                $(".like-" + food_id).removeClass("active");
              } else {
                $(".like-" + food_id).addClass("active");
              }
              $(".like-icon", $(".like-" + food_id)).addClass("fa-thumbs-up");
              $(".modal").modal("hide");
              $("#login").modal();
            } else {
              if ($(".like-" + food_id).hasClass("active")) {
                $(".like-" + food_id).removeClass("active");
              } else {
                $(".like-" + food_id).addClass("active");
              }
              $(".like-icon", $(".like-" + food_id)).addClass("fa-thumbs-up");
              $("#modal_alert .modal-body").html(op.messages);
              $("#modal_alert").appendTo("body").modal();
            }
          }
        }
      }
    }).fail(function() {
      $("#modal_alert .modal-body").html(fail_alert);
      $("#modal_alert").appendTo("body").modal();
    });
  }), $(document).on("click", "#follow", function(event) {
    event.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
    $("#follow-icon", $(this)).removeClass("fa-refresh").addClass("fa-circle-o-notch fa-spin");
    $.ajax({
      url : $(this).attr("href"),
      context : this,
      success : function(data) {
        var op = $.parseJSON(data);
        $("#follow-icon", $(this)).removeClass("fa-circle-o-notch fa-spin");
        if ("followed" == op.status) {
          $("#follow-icon", $(this)).addClass("fa-times");
          $(this).removeClass("btn-info").addClass("btn-warning active");
          $(".follow-text", $(this)).text("Unfollow");
          $("#followers-count").text(op.count);
        } else {
          if ("unfollowed" == op.status) {
            $("#follow-icon", $(this)).addClass("fa-refresh");
            $(this).removeClass("btn-info").addClass("btn-warning");
            $(".follow-text", $(this)).text("Follow");
            $(this).removeClass("btn-warning active").addClass("btn-info");
            $("#followers-count").text(op.count);
          } else {
            if (403 == op.status) {
              $("#follow-icon", $(this)).addClass("fa-refresh");
              if ($(this).hasClass("active")) {
                $(this).removeClass("active");
              } else {
                $(this).addClass("active");
              }
              $(".modal").modal("hide");
              $("#login").modal();
            } else {
              if ($("#follow-icon", $(this)).hashClass("fa-refresh")) {
                $("#follow-icon", $(this)).removeClass("fa-refresh").addClass("fa-times");
              } else {
                $("#follow-icon", $(this)).addClass("fa-refresh");
              }
              if ($(this).hasClass("active")) {
                $(this).removeClass("active");
              } else {
                $(this).addClass("active");
              }
              $("#modal_alert .modal-body").html(op.messages);
              $("#modal_alert").appendTo("body").modal();
            }
          }
        }
      }
    }).fail(function() {
      $("#follow-icon", $(this)).removeClass("fa-circle-o-notch fa-spin");
      $("#modal_alert .modal-body").html(fail_alert);
      $("#modal_alert").appendTo("body").modal();
    });
  }), $(document).on("click", "#friendship", function(event) {
    event.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
    $("#friend-icon", $(this)).removeClass("fa-user").addClass("fa-circle-o-notch fa-spin");
    $.ajax({
      url : $(this).attr("href"),
      context : this,
      success : function(data) {
        var op = $.parseJSON(data);
        $("#friend-icon", $(this)).removeClass("fa-circle-o-notch fa-spin");
        if ("added" == op.status) {
          $("#friend-icon", $(this)).addClass("fa-user");
          $(".friend-text", $(this)).text("Cancel");
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
          } else {
            $(this).addClass("active");
          }
          $(this).removeClass("btn-success").addClass("btn-warning");
        } else {
          if ("confirmed" == op.status) {
            $("#friend-icon", $(this)).addClass("fa-check-circle");
            $(".friend-text", $(this)).text("Remove");
            if ($(this).hasClass("active")) {
              $(this).removeClass("active");
            } else {
              $(this).addClass("active");
            }
            $(this).removeClass("btn-info").addClass("btn-danger");
            $("#friends-count", $(this)).text(op.count);
          } else {
            if ("removed" == op.status || "canceled" == op.status) {
              $("#friend-icon", $(this)).addClass("fa-user");
              $(".friend-text", $(this)).text("Add Friend");
              if ($(this).hasClass("active")) {
                $(this).removeClass("active");
              } else {
                $(this).addClass("active");
              }
              $(this).removeClass("btn-danger btn-warning").addClass("btn-success");
              $("#friends-count", $(this)).text(op.count);
            } else {
              if (403 == op.status) {
                $("#friend-icon", $(this)).addClass("fa-user");
                if ($(this).hasClass("active")) {
                  $(this).removeClass("active");
                } else {
                  $(this).addClass("active");
                }
                $(".modal").modal("hide");
                $("#login").modal();
              } else {
                $("#friend-icon", $(this)).addClass("fa-user");
                if ($(this).hasClass("active")) {
                  $(this).removeClass("active");
                } else {
                  $(this).addClass("active");
                }
                $("#modal_alert .modal-body").html(op.messages);
                $("#modal_alert").appendTo("body").modal();
              }
            }
          }
        }
      }
    }).fail(function() {
      $("#friend-icon", $(this)).removeClass("fa-circle-o-notch fa-spin");
      $("#modal_alert .modal-body").html(fail_alert);
      $("#modal_alert").appendTo("body").modal();
    });
  }), $(document).on("click", "#delete_link", function(data) {
    data.preventDefault();
    data = $(this).attr("data-id");
    var sl_id = $(this).attr("data-parent");
    $("#delete-icon").removeClass("fa-check").addClass("fa-circle-o-notch fa-spin");
    $.ajax({
      url : $(this).attr("href"),
      context : this,
      success : function(json) {
        var action = $.parseJSON(json);
        $("#delete-icon").removeClass("fa-circle-o-notch fa-spin").addClass("fa-check");
        if (200 == action.status) {
          $(".comments-count-" + sl_id).text(action.count);
          $("#modal_delete").modal("hide");
          location.href = location.href;
          if ("all" == data) {
            $(".listHolder").remove();
          } else {
            $("#" + data).remove();
          }
        } else {
          if (403 == action.status) {
            $(".modal").modal("hide");
            $("#login").modal();
          } else {
            if ("not_null" == action.status) {
              $("#modal_alert .modal-body").html(action.messages);
              $("#modal_alert").appendTo("body").modal();
            } else {
              $("#modal_alert .modal-body").html(action.messages);
              $("#modal_alert").appendTo("body").modal();
            }
          }
        }
      }
    }).fail(function() {
      $("#delete-icon").removeClass("fa-circle-o-notch fa-spin").addClass("fa-check");
      $("#modal_alert .modal-body").html(fail_alert);
      $("#modal_alert").appendTo("body").modal();
    });
  }), 
  $(document).on("click", ".newPost", function(event) 
  {
    event.preventDefault();
    var href = $(this).attr("href");
    return $(window).width() > 768 ? ($("#modal_ajax_dn .modal-content").html("").addClass("preloader"), $("#modal_ajax_dn").modal(
      {
        backdrop : "static",
        keyboard : false
      }), 
      void $.ajax(
        {
          url : href,
          data : {
                  modal : true
                  },
          method : "POST",
          success : function(htmlExercise) 
          {
            $("#modal_ajax_dn .modal-content").removeClass("preloader").html(htmlExercise);
          }
        }).fail(function() 
        {
          $("#modal_alert .modal-body").html(fail_alert);
          $("#modal_alert").appendTo("body").modal();
        })) : (window.location.href = href );
  }),$(document).on("click", ".cummissionEdit", function(event) 
  {
    event.preventDefault();
    var href = $(this).attr("href");
    return $(window).width() > 768 ? ($("#modal_ajax_dn .modal-content").html("").addClass("preloader"), $("#modal_ajax_dn").modal(
      {
        backdrop : "static",
        keyboard : false
      }), 
      void $.ajax(
        {
          url : href,
          data : {
                  modal : true
                  },
          method : "POST",
          success : function(htmlExercise) 
          {
            $("#modal_ajax_dn .modal-content").removeClass("preloader").html(htmlExercise);
          }
        }).fail(function() 
        {
          $("#modal_alert .modal-body").html(fail_alert);
          $("#modal_alert").appendTo("body").modal();
        })) : (window.location.href = href );
  }), 
  
  
  $(document).on("click", ".repost", function(event) {
    event.preventDefault();
    $("#modal_ajax_sm .modal-body").addClass("preloader");
    $("#modal_ajax_sm").modal();
    $.ajax({
      url : $(this).attr("href"),
      success : function(t) {
        try {
          var t4 = $.parseJSON(t);
          if (403 == t4.status) {
            $(".modal").modal("hide");
            $("#login").modal();
          }
        } catch (a) {
          $("#modal_ajax_sm .modal-body").removeClass("preloader").html(t);
        }
      }
    });
  }), $(document).on("submit", "#repostForm", function(event) {
    event.preventDefault();
    var food_id = $(this).attr("data-id");
    $(".error").remove();
    $.post($(this).attr("action"), $(this).serialize(), function(settings) {
      if (200 == settings.status) {
        $("#modal_ajax_sm").modal("hide");
        $("#reposts-count" + food_id).text(settings.count);
      } else {
        if (403 == settings.status) {
          $(".modal").modal("hide");
          $("#login").modal();
        } else {
          $("#modal_alert .modal-body").html(settings.messages);
          $("#modal_alert").appendTo("body").modal();
        }
      }
      /** @type {boolean} */
      e = false;
    }, "json");
  }), $(document).on("click", ".datepicker", function() {
    $(this).datepicker({
      format : "dd/mm/yyyy",
      keyboardNavigation : false,
      forceParse : false,
      daysOfWeekDisabled : "5,6",
      autoclose : true,
      todayHighlight : true,
      startDate : new Date,
      endDate : "+1m"
    }).datepicker("show");
  }), $(document).on("click", ".payment-datepicker", function() {
    $(this).datepicker({
      format : "dd/mm/yyyy",
      keyboardNavigation : false,
      forceParse : false,
      daysOfWeekDisabled : "5,6",
      autoclose : true,
      todayHighlight : true,
      startDate : "-1w",
      endDate : "0d"
    }).datepicker("show");
  }), $(document).on("keydown", ".hitAction", function(event) {
    var anchorPart = $(this).val();
    if (!(13 != event.keyCode || event.shiftKey)) {
      if ("" == anchorPart) {
        $(this).find(".error").remove().prepend('<div class="error"><div class="animated fadeIn alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + empty_alert + "</div></div>").slideDown();
      } else {
        $(this).addClass("preloader").attr("readonly", true);
        $(this).parent($("#addCommentForm")).submit();
      }
    }
  }), $(".carousel").carousel({
    interval : 5e3
  }).on("slide.bs.carousel", function(event) {
    var dxdydust = $(event.relatedTarget).height();
    $(this).find(".active.item").parent().animate({
      height : dxdydust
    }, 200);
  }), window.location.hash && "#_=_" != window.location.hash && "#menu" != window.location.hash && "#menu-right" != window.location.hash) {
    /** @type {string} */
    var conid = window.location.hash.substring(1);
    if ("addCommentForm" != conid) {
      $("#" + conid).addClass("animated fadeIn bg-warning");
    }
  }
}), $("body").on("click change propertychange keyup keydown paste cut", "textarea", function() {
  $(this).height(0).height(this.scrollHeight);
}), $(window).scroll(function() {
  if ($(".navbar").offset().top > 60) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
}), $(document).ready(function() {
  $("body").tooltip({
    selector : "[data-push=tooltip]"
  });
  $("body").popover({
    selector : "[data-push=popover]"
  });
  $(".modal").on("hidden.bs.modal", function(canCreateDiscussions) {
    if ($(".modal:visible").length) {
      $("body").addClass("modal-open");
    }
  });
  $(document).on("scroll", function() {
    if ($("body")[0].offsetTop < $(document).scrollTop() - $(".navbar-fixed-top").height()) {
      $(".navbar-fixed-top").css({
        opacity : .95
      });
    } else {
      $(".navbar-fixed-top").css({
        opacity : 1
      });
    }
  });
});



var __uploaded_files = '';
	  $(document).on('change', '#file', function (e) {
      $('#percentage_bar').hide();
      __uploaded_files = e.currentTarget.files[0];
      __uploaded_files['extension'] = __uploaded_files['name'].split('.').pop();
      $('#upload_user_file').val(__uploaded_files['name']);
    });
    
  function circular_save()
{
  var title   = $('#circular_title').val();
    if (title == '')
    {
         Swal.fire({
             type: 'error',
             title: 'Circular Title empty Not allowed ',
             text: 'Something went wrong!',
             footer: '<a href>Why do I have this issue?</a>'
 });
        return false;
    }

if(__uploaded_files == '')
{
   Swal.fire({
             type: 'error',
             title: 'Upload error',
             text: 'Browse your file to upload!',
             footer: '<a href>Why do I have this issue?</a>'
 });
        return false;
 
}
 
    var filename = __uploaded_files['name'];
    var valid_extensions = /(\.pdf)$/i;

    if (valid_extensions.test(filename))
    {
      console.log('check');
        $('#percentage_bar').show();
        var uploadURL = admin_url + 'user/circular/upload_files'
        var fileObj = new processFileName(__uploaded_files['name']);
        var param = new Array;
        param["file_name"] = fileObj.uniqueFileName();
        param["extension"] = fileObj.fileExtension();
        param["file"] = __uploaded_files;
        param["c_title"] = title;
        console.log(param);
        uploadFiles(uploadURL, param, uploadUserCompleted);
    } else
    {
        lauch_common_message('Invalid File', 'Choose proper file to upload');
        return false;
    }
}

 function newsletters_save()
{
  var title   = $('#circular_title').val();
    if (title == '')
    {
         Swal.fire({
             type: 'error',
             title: 'Newsletter Title empty Not allowed ',
             text: 'Something went wrong!',
             footer: '<a href>Why do I have this issue?</a>'
 });
        return false;
    }

if(__uploaded_files == '')
{
   Swal.fire({
             type: 'error',
             title: 'Upload error',
             text: 'Browse your file to upload!',
             footer: '<a href>Why do I have this issue?</a>'
 });
        return false;
 
}
 
    var filename = __uploaded_files['name'];
    var valid_extensions = /(\.pdf)$/i;

    if (valid_extensions.test(filename))
    {
      console.log('check');
        $('#percentage_bar').show();
        var uploadURL = admin_url + 'user/openletters/upload_files'
        var fileObj = new processFileName(__uploaded_files['name']);
        var param = new Array;
        param["file_name"] = fileObj.uniqueFileName();
        param["extension"] = fileObj.fileExtension();
        param["file"] = __uploaded_files;
        param["c_title"] = title;
        console.log(param);
        uploadFiles(uploadURL, param, uploadUserCompleted);
    } else
    {
        lauch_common_message('Invalid File', 'Choose proper file to upload');
        return false;
    }
}
function lauch_common_message(header, message)
    {
        $('#common_message_header').html(header);
        $('#common_message_content').html(message);
        $('#common_message_button').addClass('btn-red').removeClass('btn-green');
        $('#common_message_advanced').modal('show');
    }

function uploadFiles(uploadURL, param, callback, __dataType)
{
    abortFileUpload();//abort file upload
    var formDataType = (typeof __dataType == 'undefined')?'json':__dataType;
    var formData  = new FormData();
        for(var key in param)
        {
            formData.append(key, param[key]);

        }
    var processingId = (typeof param['processing'] != 'undefined')?param['processing']:'percentage_count';
    var started_at = new Date();
        __jqXHR = $.ajax({
            xhr: function() {
            var xhrobj = $.ajaxSettings.xhr();
            if (xhrobj.upload) {
                    xhrobj.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position;
                        var total = event.total;
                        
                        var netSpeedHtml = '';
                        if (event.lengthComputable) {
                            //percent = Math.ceil(position / total * 100);
                            percent = (position / total * 100);
                            percent = percent.toFixed(2);
                            
                            var loaded = event.loaded;
                            var seconds_elapsed =   ( new Date().getTime() - started_at.getTime() )/1000;
                            var bytes_per_second =  seconds_elapsed ? loaded / seconds_elapsed : 0 ;
                            var Kbytes_per_second = bytes_per_second / 1000 ;
                            //console.log(Kbytes_per_second);
                            netSpeedHtml = ' <b>('+Math.round(Kbytes_per_second)+' KB/Second)</b>'
                        }
                        

                        $('.progress-bar').css('width', percent+'%');
                        $('.progress-bar .sr-only').html(percent+'%'+' completed');
                        $('.percentage-text').html(percent+'%'+netSpeedHtml);
                        //Set progress
                        if( Math.round(percent) == 100){
                            $('#'+processingId).parent().html('processing please wait');
                        }
                    }, false);
                }
            return xhrobj;
        },
    url: uploadURL,
    type: "POST",
    datatype: formDataType,
    contentType:false,
    processData: false,
        cache: false,
        data: formData,
        success: function(data){
           callback(data);
        }
    }); 
}
var __jqXHR = null;
function abortFileUpload()
{
    if( __jqXHR != null )
    {
        __jqXHR.abort();
    }
    
}


function processFileName(fileName)
{
    var __fileNameTemp     = fileName;
    var __explodedFileName = '';
    this.trimFileName = function()
    {
       __fileNameTemp = trimFileName(__fileNameTemp);
    }
    
    this.explodeFileName = function()
    {
        return __explodedFileName = __fileNameTemp.split('.');
    }
    
    this.fileExtension = function()
    {
        return __explodedFileName[(__explodedFileName.length)-1].toLowerCase();
    }
    
    this.uniqueFileName = function()
    {
        this.trimFileName();
        this.explodeFileName();
        var currentdate    = new Date(); 
        var datetime 	   = currentdate.getDate()+'-'+(currentdate.getMonth()+1)+'-'+currentdate.getFullYear()+'-'+currentdate.getHours()+'-'+currentdate.getMinutes()+'-'+currentdate.getSeconds();
        var uniqueFileName = __explodedFileName[0].slice(0,30) + datetime + "." + this.fileExtension();
        return uniqueFileName.replace(/\\/g, "");
    }
}

function trimFileName(file_name){
    var trimed_filename = file_name.split(' ').join('-');
            trimed_filename = trimed_filename.split('&').join('-');
            trimed_filename = trimed_filename.split(';').join('-');
            trimed_filename = trimed_filename.split(':').join('-');
            trimed_filename = trimed_filename.split('/').join('-');
            trimed_filename = trimed_filename.split('{').join('-');
            trimed_filename = trimed_filename.split('}').join('-');
            trimed_filename = trimed_filename.split('(').join('-');
            trimed_filename = trimed_filename.split(')').join('-');
            trimed_filename = trimed_filename.split('\'').join('-');
            trimed_filename = trimed_filename.split('"').join('-');  
    return trimed_filename;
}
var __uploading_file = '';
function uploadUserCompleted(response)
{
    var response = $.parseJSON(response);
    __uploading_file = '';
    console.log(response);
    if (response.error) {
        Swal.fire({
             type: 'error',
             title: 'Upload error',
             text: 'circular upload error upload again!',
             footer: '<a href>Why do I have this issue?</a>'
 });
        return false;
    } else {
      $('#circular_title ,#upload_user_file,#file').val('');
      $('#percentage_bar').hide();
Swal.fire({
  position: 'top-end',
  type: 'success',
  title: 'Circular created successfully',
  showConfirmButton: true,
  timer: 2000
});
 
    }

}