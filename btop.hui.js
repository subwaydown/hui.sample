var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        (function (EventType) {
            EventType[EventType["hashchange"] = 1] = "hashchange";
            EventType[EventType["createWidget"] = 2] = "createWidget";
        })(hui.EventType || (hui.EventType = {}));
        var EventType = hui.EventType;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        (function (Keys) {
            Keys[Keys["BACKSPACE"] = 8] = "BACKSPACE";
            Keys[Keys["TAB"] = 9] = "TAB";
            Keys[Keys["CLEAR"] = 12] = "CLEAR";
            Keys[Keys["ENTER"] = 13] = "ENTER";
            Keys[Keys["SHIFT"] = 16] = "SHIFT";
            Keys[Keys["CTRL"] = 17] = "CTRL";
            Keys[Keys["ALT"] = 18] = "ALT";
            Keys[Keys["META"] = 91] = "META";
            Keys[Keys["PAUSE"] = 19] = "PAUSE";
            Keys[Keys["CAPS_LOCK"] = 20] = "CAPS_LOCK";
            Keys[Keys["ESCAPE"] = 27] = "ESCAPE";
            Keys[Keys["SPACE"] = 32] = "SPACE";
            Keys[Keys["PAGE_UP"] = 33] = "PAGE_UP";
            Keys[Keys["PAGE_DOWN"] = 34] = "PAGE_DOWN";
            Keys[Keys["END"] = 35] = "END";
            Keys[Keys["HOME"] = 36] = "HOME";
            Keys[Keys["LEFT_ARROW"] = 37] = "LEFT_ARROW";
            Keys[Keys["UP_ARROW"] = 38] = "UP_ARROW";
            Keys[Keys["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
            Keys[Keys["DOWN_ARROW"] = 40] = "DOWN_ARROW";
            Keys[Keys["INSERT"] = 45] = "INSERT";
            Keys[Keys["DELETE"] = 46] = "DELETE";
            Keys[Keys["HELP"] = 47] = "HELP";
            Keys[Keys["NUM_0"] = 48] = "NUM_0";
            Keys[Keys["NUM_1"] = 49] = "NUM_1";
            Keys[Keys["NUM_2"] = 50] = "NUM_2";
            Keys[Keys["NUM_3"] = 51] = "NUM_3";
            Keys[Keys["NUM_4"] = 52] = "NUM_4";
            Keys[Keys["NUM_5"] = 53] = "NUM_5";
            Keys[Keys["NUM_6"] = 54] = "NUM_6";
            Keys[Keys["NUM_7"] = 55] = "NUM_7";
            Keys[Keys["NUM_8"] = 56] = "NUM_8";
            Keys[Keys["NUM_9"] = 57] = "NUM_9";
            Keys[Keys["CHAR_A"] = 65] = "CHAR_A";
            Keys[Keys["CHAR_B"] = 66] = "CHAR_B";
            Keys[Keys["CHAR_C"] = 67] = "CHAR_C";
            Keys[Keys["CHAR_D"] = 68] = "CHAR_D";
            Keys[Keys["CHAR_E"] = 69] = "CHAR_E";
            Keys[Keys["CHAR_F"] = 70] = "CHAR_F";
            Keys[Keys["CHAR_G"] = 71] = "CHAR_G";
            Keys[Keys["CHAR_H"] = 72] = "CHAR_H";
            Keys[Keys["CHAR_I"] = 73] = "CHAR_I";
            Keys[Keys["CHAR_J"] = 74] = "CHAR_J";
            Keys[Keys["CHAR_K"] = 75] = "CHAR_K";
            Keys[Keys["CHAR_L"] = 76] = "CHAR_L";
            Keys[Keys["CHAR_M"] = 77] = "CHAR_M";
            Keys[Keys["CHAR_N"] = 78] = "CHAR_N";
            Keys[Keys["CHAR_O"] = 79] = "CHAR_O";
            Keys[Keys["CHAR_P"] = 80] = "CHAR_P";
            Keys[Keys["CHAR_Q"] = 81] = "CHAR_Q";
            Keys[Keys["CHAR_R"] = 82] = "CHAR_R";
            Keys[Keys["CHAR_S"] = 83] = "CHAR_S";
            Keys[Keys["CHAR_T"] = 84] = "CHAR_T";
            Keys[Keys["CHAR_U"] = 85] = "CHAR_U";
            Keys[Keys["CHAR_V"] = 86] = "CHAR_V";
            Keys[Keys["CHAR_W"] = 87] = "CHAR_W";
            Keys[Keys["CHAR_X"] = 88] = "CHAR_X";
            Keys[Keys["CHAR_Y"] = 89] = "CHAR_Y";
            Keys[Keys["CHAR_Z"] = 90] = "CHAR_Z";
            Keys[Keys["LEFT_WINDOW"] = 91] = "LEFT_WINDOW";
            Keys[Keys["RIGHT_WINDOW"] = 92] = "RIGHT_WINDOW";
            Keys[Keys["SELECT"] = 93] = "SELECT";
            Keys[Keys["NUMPAD_0"] = 96] = "NUMPAD_0";
            Keys[Keys["NUMPAD_1"] = 97] = "NUMPAD_1";
            Keys[Keys["NUMPAD_2"] = 98] = "NUMPAD_2";
            Keys[Keys["NUMPAD_3"] = 99] = "NUMPAD_3";
            Keys[Keys["NUMPAD_4"] = 100] = "NUMPAD_4";
            Keys[Keys["NUMPAD_5"] = 101] = "NUMPAD_5";
            Keys[Keys["NUMPAD_6"] = 102] = "NUMPAD_6";
            Keys[Keys["NUMPAD_7"] = 103] = "NUMPAD_7";
            Keys[Keys["NUMPAD_8"] = 104] = "NUMPAD_8";
            Keys[Keys["NUMPAD_9"] = 105] = "NUMPAD_9";
            Keys[Keys["NUMPAD_MULTIPLY"] = 106] = "NUMPAD_MULTIPLY";
            Keys[Keys["NUMPAD_PLUS"] = 107] = "NUMPAD_PLUS";
            Keys[Keys["NUMPAD_ENTER"] = 108] = "NUMPAD_ENTER";
            Keys[Keys["NUMPAD_MINUS"] = 109] = "NUMPAD_MINUS";
            Keys[Keys["NUMPAD_PERIOD"] = 110] = "NUMPAD_PERIOD";
            Keys[Keys["NUMPAD_DIVIDE"] = 111] = "NUMPAD_DIVIDE";
            Keys[Keys["F1"] = 112] = "F1";
            Keys[Keys["F2"] = 113] = "F2";
            Keys[Keys["F3"] = 114] = "F3";
            Keys[Keys["F4"] = 115] = "F4";
            Keys[Keys["F5"] = 116] = "F5";
            Keys[Keys["F6"] = 117] = "F6";
            Keys[Keys["F7"] = 118] = "F7";
            Keys[Keys["F8"] = 119] = "F8";
            Keys[Keys["F9"] = 120] = "F9";
            Keys[Keys["F10"] = 121] = "F10";
            Keys[Keys["F11"] = 122] = "F11";
            Keys[Keys["F12"] = 123] = "F12";
            Keys[Keys["F13"] = 124] = "F13";
            Keys[Keys["F14"] = 125] = "F14";
            Keys[Keys["F15"] = 126] = "F15";
            Keys[Keys["NUM_LOCK"] = 144] = "NUM_LOCK";
            Keys[Keys["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
            Keys[Keys["UP_DPAD"] = 175] = "UP_DPAD";
            Keys[Keys["DOWN_DPAD"] = 176] = "DOWN_DPAD";
            Keys[Keys["LEFT_DPAD"] = 177] = "LEFT_DPAD";
            Keys[Keys["RIGHT_DPAD"] = 178] = "RIGHT_DPAD";
            Keys[Keys["MINUS"] = 189] = "MINUS";
        })(hui.Keys || (hui.Keys = {}));
        var Keys = hui.Keys;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Entry = (function () {
            function Entry(key, value) {
                this.key = key;
                this.value = value;
            }
            return Entry;
        }());
        hui.Entry = Entry;
        var Map = (function () {
            function Map() {
                this.clear();
            }
            Map.prototype.clear = function () {
                this.pairs = new Array();
                this.keys = new Array();
            };
            Map.prototype.entrys = function () {
                var entrys = new Array();
                this.pairs.forEach(function (value, index, array) {
                    entrys.push(new Entry(value.key, value.value));
                });
                return entrys;
            };
            Map.prototype.delete = function (key) {
                if (!this.has(key))
                    return false;
                else {
                    var index = this.keys.indexOf(key);
                    this.keys.splice(index, 1);
                    this.pairs.splice(index, 1);
                }
                return true;
            };
            Map.prototype.get = function (key) {
                return this.has(key) ? this.pairs[this.keys.indexOf(key)].value : null;
            };
            Map.prototype.has = function (key) {
                return this.keys.indexOf(key) != -1 ? true : false;
            };
            Map.prototype.set = function (key, value) {
                if (!(typeof (key) == "string" || typeof (key) == "number")) {
                    console.error("Map: Map\u6682\u65F6\u53EA\u652F\u6301\u4EE5String\u548CNumber\u505A\u4E3Akey\u503C");
                    return this;
                }
                if (this.has(key))
                    this.pairs[this.keys.indexOf(key)].value = value;
                else {
                    this.keys.push(key);
                    this.pairs.push(new Entry(key, value));
                }
                return this;
            };
            return Map;
        }());
        hui.Map = Map;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Event = (function () {
            function Event(type, data) {
                this.type = type;
                this.data = data;
            }
            return Event;
        }());
        hui.Event = Event;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var CreateWidgetEvent = (function (_super) {
            __extends(CreateWidgetEvent, _super);
            function CreateWidgetEvent(widgetType, attachElementId, widgetData, fromBrowser, isPage) {
                _super.call(this, hui.EventType.createWidget, null);
                this.widgetType = widgetType;
                this.attachElementId = attachElementId;
                this.widgetData = widgetData;
                this.fromBrowser = fromBrowser;
                this.isPage = isPage;
            }
            return CreateWidgetEvent;
        }(hui.Event));
        hui.CreateWidgetEvent = CreateWidgetEvent;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var EventHub = (function () {
            function EventHub() {
            }
            EventHub.addListener = function (type, listener) {
                if (!this.listeners.get(type)) {
                    this.listeners.set(type, new Array());
                }
                this.listeners.get(type).push(listener);
            };
            EventHub.removeListener = function (type, listener) {
                var targetListeners = this.listeners.get(type);
                if (targetListeners) {
                    targetListeners.splice(targetListeners.indexOf(listener), 1);
                    this.listeners.set(type, targetListeners);
                }
            };
            EventHub.fireEvent = function (type, data) {
                var targetListeners = this.listeners.get(type);
                if (!targetListeners) {
                    console.warn("EventHub: \u4E0D\u80FD\u591F\u4F7F\u7528\u4E8B\u4EF6\u7C7B\u578B\u4E3A'" + type + "'\u7684\u4E8B\u4EF6\u6765\u89E6\u53D1\u5176\u5BF9\u5E94\u7684\u76D1\u542C\u5668");
                    return;
                }
                targetListeners.forEach(function (listener, index, array) {
                    var event = new hui.Event(type, data);
                    if (listener.accept(event))
                        listener.handle(event);
                });
            };
            EventHub.listeners = new hui.Map();
            return EventHub;
        }());
        hui.EventHub = EventHub;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HashListener = (function () {
            function HashListener() {
            }
            HashListener.prototype.handle = function (event) {
                var hash = window.location.hash.replace("#!", "");
                hui.WidgetManager.addCreateTask(new hui.Task(hash, null, null, true, true));
            };
            HashListener.prototype.accept = function (event) {
                if (window.location.hash.charAt(1) == "!")
                    return true;
                else
                    return false;
            };
            return HashListener;
        }());
        hui.HashListener = HashListener;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var ResourceManager = (function () {
            function ResourceManager() {
            }
            ResourceManager.access = function (source) {
                if (this.types.indexOf(source.id) != -1) {
                    console.error("ResourceManager: " + source.id + "\u662F\u552F\u4E00\u7684!!!\u4E0D\u80FD\u591F\u4F7F\u7528" + source.id + "\u518D\u6B21\u6CE8\u518C\u7EC4\u4EF6\u6E90");
                }
                else {
                    this.types.push(source.id);
                    this.paths.push(source.path);
                }
            };
            ResourceManager.acquisition = function (type) {
                var result = this.types.indexOf(type) == -1 ? null : this.paths[this.types.indexOf(type)];
                if (result == null)
                    console.warn("ResourceManager: \u4E0D\u80FD\u591F\u901A\u8FC7" + type + "\u6765\u627E\u5230" + type + "\u5BF9\u5E94\u7684\u8D44\u6E90!");
                return result;
            };
            ResourceManager.loadResourceFromRemote = function (widgetType, loadStatus, callback) {
                var path = this.acquisition(widgetType);
                if (path == null)
                    return;
                this.loadScript(path, loadStatus, callback);
                this.loadCss(path, loadStatus, callback);
                this.loadHtml(path, loadStatus, callback);
            };
            ResourceManager.loadCss = function (path, loadStatus, callback) {
                var count = 0;
                var cssPath = new Array();
                for (var i = 0; i < path.css.length; i++) {
                    if (path.css[i] != "")
                        cssPath.push(path.css[i]);
                }
                if (cssPath.length == 0) {
                    loadStatus.cssloaded = true;
                    callback();
                    return;
                }
                for (var i = 0; i < cssPath.length; i++) {
                    $.ajax({
                        url: cssPath[i],
                        success: function (_data) {
                            loadStatus.css = loadStatus.css.concat(_data);
                            if (++count == cssPath.length) {
                                loadStatus.cssloaded = true;
                                callback();
                            }
                        }
                    });
                }
            };
            ResourceManager.loadScript = function (path, loadStatus, callback) {
                var _this = this;
                $LAB.setOptions({
                    AlwaysPreserveOrder: true
                }).script(path.js).wait(function () {
                    loadStatus.jsloaded = true;
                    callback();
                });
            };
            ResourceManager.loadHtml = function (path, loadStatus, callback) {
                var _this = this;
                $.ajax({
                    url: path.html,
                    success: function (_data) {
                        loadStatus.htmlloaded = true;
                        loadStatus.html = _data;
                        callback();
                    }
                });
            };
            ResourceManager.types = new Array();
            ResourceManager.paths = new Array();
            return ResourceManager;
        }());
        hui.ResourceManager = ResourceManager;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var TaskStatus;
        (function (TaskStatus) {
            TaskStatus[TaskStatus["IDLE"] = 0] = "IDLE";
            TaskStatus[TaskStatus["READY"] = 1] = "READY";
            TaskStatus[TaskStatus["BUSY"] = 2] = "BUSY";
        })(TaskStatus || (TaskStatus = {}));
        var Task = (function () {
            function Task(widgetType, attachElementId, data, byHash, isPage) {
                this.widgetType = widgetType;
                this.attachElementId = attachElementId;
                this.data = data;
                this.byHash = byHash;
                this.isPage = isPage;
            }
            return Task;
        }());
        hui.Task = Task;
        var TaskSquence = (function () {
            function TaskSquence() {
                this.status = TaskStatus.IDLE;
                this.tasks = new Array();
            }
            TaskSquence.prototype.addTask = function (task) {
                switch (this.status) {
                    case TaskStatus.IDLE:
                        if (this.checkTask(task))
                            this.doTask(task);
                        break;
                    case TaskStatus.BUSY:
                        this.tasks.push(task);
                        break;
                    default:
                        break;
                }
            };
            TaskSquence.prototype.checkTask = function (task) {
                if (task.isPage) {
                    var currPage = hui.PageManager.currPage;
                    if (task.byHash && currPage != null && currPage.id == task.widgetType)
                        return false;
                    if (currPage != null)
                        currPage.destroy();
                }
                return true;
            };
            TaskSquence.prototype.doTask = function (task) {
                this.status = TaskStatus.BUSY;
                this.requestCreate(task);
            };
            TaskSquence.prototype.finishTask = function () {
                if (this.tasks.length != 0) {
                    var taskReady = this.tasks.shift();
                    if (this.checkTask(taskReady))
                        this.doTask(taskReady);
                    else
                        this.finishTask();
                }
                else
                    this.status = TaskStatus.IDLE;
            };
            TaskSquence.prototype.requestCreate = function (task) {
                if (hui.WidgetExtension.getWidgetTypes().indexOf(task.widgetType) != -1) {
                    this.createWidget(task);
                }
                else {
                    var _this = this;
                    var loadStatus = { jsloaded: false, cssloaded: false, htmlloaded: false, css: "", html: "" };
                    hui.ResourceManager.loadResourceFromRemote(task.widgetType, loadStatus, function () {
                        if (loadStatus.jsloaded && loadStatus.cssloaded && loadStatus.htmlloaded) {
                            hui.WidgetExtension.bind(task.widgetType, "<div class=\"hui-widget-view\"><style>" + loadStatus.css + "</style>" + loadStatus.html + "</div>");
                            _this.createWidget(task);
                        }
                    });
                }
            };
            TaskSquence.prototype.createWidget = function (task) {
                try {
                    var attachElementId = task.attachElementId ? task.attachElementId : "_view_root_";
                    var widgetClass = hui.WidgetExtension.findWidget(task.widgetType);
                    var inst = new widgetClass.prototype.constructor(task.widgetType);
                    inst.init(attachElementId, hui.WidgetExtension.findTemplate(task.widgetType), task.widgetType, task.data);
                    hui.HuiParser.parse(inst.attachElement);
                    this.finishTask();
                }
                catch (error) {
                    console.error("WidgetManager: \u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\u53D1\u751F\u7684\u4E25\u91CD\u7684\u9519\u8BEF__ " + error);
                }
            };
            return TaskSquence;
        }());
        var WidgetManager = (function () {
            function WidgetManager() {
            }
            WidgetManager.register = function (widget) {
                this.manager.set(widget.id, widget);
            };
            WidgetManager.byId = function (widgetId) {
                return this.manager.get(widgetId);
            };
            WidgetManager.addCreateTask = function (task) {
                this.taskSquence.addTask(task);
            };
            WidgetManager.reflect = function (w, id) {
                var result = this.byId(id);
                if (result && !(result instanceof w)) {
                    console.error("WidgetManager: \u6839\u636Eid\u53CD\u5C04\u6307\u5B9A\u7C7B\u5B9E\u4F8B\u5931\u8D25\uFF0Cid\u4E3A" + id + "\u7684widget\u5B9E\u4F8B\u5E76\u975E\u6307\u5B9A\u7C7B\u7684\u5B9E\u4F8B");
                    return null;
                }
                return result;
            };
            WidgetManager.unRegister = function (widgetId) {
                return this.manager.delete(widgetId);
            };
            WidgetManager.removeAll = function () {
            };
            WidgetManager.taskSquence = new TaskSquence();
            WidgetManager.manager = new hui.Map();
            return WidgetManager;
        }());
        hui.WidgetManager = WidgetManager;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Widget = (function () {
            function Widget() {
                this.nodeTypeMap = new hui.Map();
                this._data = {};
            }
            Widget.prototype.init = function (attachElementId, template, widgetType, data) {
                this.attachElementId = attachElementId;
                this.template = template;
                this.widgetType = widgetType;
                if (!this.attachElementId)
                    return;
                this.attachElement = $("#" + this.attachElementId)[0];
                if (this.template)
                    this.domNode = $(this.template)[0];
                else
                    this.domNode = this.attachElement;
                if ($(this.attachElement).attr("hui-widget-type"))
                    this._id = this.attachElement.id;
                else
                    this._id = this.domNode.id ? this.domNode.id : $(this.domNode).attr("id", this.widgetType).attr("id");
                if (!hui.WidgetManager.byId(this.id)) {
                    this.nodeTypeMap = this.parseWidgetNodeType(this.domNode);
                    $(this.domNode).appendTo($(this.attachElement));
                    this.data = data ? data : this.data;
                    this.initView();
                }
                hui.WidgetManager.register(this);
            };
            Object.defineProperty(Widget.prototype, "visible", {
                get: function () {
                    return this._visible;
                },
                set: function (visible) {
                    if ($(this.attachElement).attr("hui-widget-type")) {
                        if (!visible)
                            $(this.attachElement).hide();
                        else
                            $(this.attachElement).show();
                    }
                    else {
                        if (!visible)
                            $(this.domNode).hide();
                        else
                            $(this.domNode).show();
                    }
                    this._visible = visible;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Widget.prototype, "data", {
                get: function () {
                    return this._data;
                },
                set: function (data) {
                    this._data = data;
                },
                enumerable: true,
                configurable: true
            });
            Widget.prototype.parseWidgetNodeType = function (root) {
                var resultMap = new hui.Map();
                var nodeType = $(root).attr("hui-widget-NodeType");
                if (nodeType != null || nodeType != undefined)
                    resultMap.set(nodeType, $(root)[0]);
                $(root).find('*').each(function () {
                    var nodeType = $(this).attr("hui-widget-NodeType");
                    if (nodeType != null || nodeType != undefined)
                        resultMap.set(nodeType, $(this)[0]);
                });
                return resultMap;
            };
            Object.defineProperty(Widget.prototype, "id", {
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });
            Widget.prototype.destroy = function () {
                if ($(this.attachElement).attr("hui-widget-type")) {
                    $(this.attachElement).remove();
                    $(this.attachElement).empty();
                    $(this.attachElement).off();
                }
                else {
                    $(this.domNode).remove();
                    $(this.domNode).empty();
                    $(this.domNode).off();
                }
                hui.WidgetManager.unRegister(this.id);
            };
            return Widget;
        }());
        hui.Widget = Widget;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var PopContainer = (function (_super) {
            __extends(PopContainer, _super);
            function PopContainer() {
                _super.apply(this, arguments);
            }
            PopContainer.prototype.initView = function () {
                this.visible = false;
            };
            PopContainer.prototype.hide = function () {
                this.visible = false;
            };
            PopContainer.prototype.show = function () {
                this.visible = true;
            };
            return PopContainer;
        }(hui.Widget));
        hui.PopContainer = PopContainer;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Alert = (function (_super) {
            __extends(Alert, _super);
            function Alert() {
                _super.apply(this, arguments);
            }
            Alert.prototype.show = function (data) {
                if (data === void 0) { data = { title: "title", content: "content", buttons: ["确定"] }; }
                var _this = this;
                $(this.nodeTypeMap.get("titleNode")).html(data.title);
                $(this.nodeTypeMap.get("contentNode")).html(data.content);
                $(this.nodeTypeMap.get("btnContainerNode")).children().each(function () {
                    $(this).remove();
                });
                var btnTemplates = '<input type="button"/>';
                for (var i = 0; i < data.buttons.length; i++) {
                    $(btnTemplates)
                        .appendTo($(this.nodeTypeMap.get("btnContainerNode")))
                        .val(data.buttons[i]).click(function () {
                        _this.hide();
                    });
                }
                _super.prototype.show.call(this);
            };
            return Alert;
        }(hui.PopContainer));
        hui.Alert = Alert;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var PopWindow = (function (_super) {
            __extends(PopWindow, _super);
            function PopWindow() {
                _super.apply(this, arguments);
            }
            return PopWindow;
        }(hui.PopContainer));
        hui.PopWindow = PopWindow;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Select = (function (_super) {
            __extends(Select, _super);
            function Select() {
                _super.apply(this, arguments);
                this.temp = "";
                this.dataJson = {};
                this.defaultOption = "";
            }
            Select.prototype.changeFun = function (arg) {
            };
            ;
            Select.prototype.initView = function () {
                $(".selOptionUlDiv").hide();
                $("*:not('.selOptionInput')").click(function (e) {
                    e.stopPropagation();
                    $(".selOptionUlDiv").hide();
                });
            };
            Select.prototype.initData = function (opt) {
                var that = this;
                this.dataJson = !!opt.dataJson ? opt.dataJson : {};
                this.defaultOption = opt.defaultOption;
                this.changeFun = opt.onchange;
                var domNode = $(this.domNode);
                var dom = domNode.find("input:first");
                var li_list = '<li value="">--请选择--</li>';
                for (var i in this.dataJson) {
                    var li = '<li value="' + i + '">' + this.dataJson[i] + '</li>';
                    li_list += li;
                    if (!!this.defaultOption && this.dataJson[i].indexOf(this.defaultOption) != -1) {
                        dom.val(this.dataJson[i]);
                        dom.attr("opt-value", i);
                    }
                }
                domNode.find("ul:first").append(li_list);
                dom.unbind("click").click(function (e) {
                    e.stopPropagation();
                    var _this = $(this);
                    that.clickEvent(_this);
                });
            };
            Select.prototype.clickEvent = function (t) {
                var sh = window.screen.height;
                var current_val = t.val();
                var current_optval = t.attr("opt-value");
                var current_li;
                var choose_val = "";
                var posi_h = t.offset().top;
                var parent_left = t.parent().offset().left;
                var posi_left = t.offset().left;
                var rela_left = posi_left - parent_left;
                var pps = posi_h / sh;
                var optListDiv = t.next(".selOptionUlDiv");
                var t_h = t.outerHeight();
                if (optListDiv.css("display") == "none") {
                    optListDiv = t.next(".selOptionUlDiv");
                    optListDiv.show();
                    if (!!rela_left)
                        optListDiv.css("left", rela_left + "px");
                    var opt_height = optListDiv.height();
                    if (pps > 0.6) {
                        optListDiv.css("margin-top", -opt_height - t_h - 2 + "px");
                    }
                }
                else {
                    optListDiv.hide();
                }
                current_li = optListDiv.find("li[value='" + current_optval + "']").first();
                var ul = optListDiv.find("ul").first();
                var li = ul.find("li");
                li.removeClass("current_li");
                current_li.addClass("current_li");
                li.unbind("mouseup").bind("mousedown", function () {
                });
                li.unbind("mouseup").bind("mouseup", function () {
                    var c_li = $(this);
                    choose_val = c_li.text();
                    var optVal = c_li.attr("value");
                    t.val(choose_val);
                    t.attr("opt-value", optVal);
                    optListDiv.hide();
                    if (current_val != choose_val && typeof this.changeFun == "function") {
                        this.changeFun(optVal);
                    }
                });
            };
            return Select;
        }(hui.Widget));
        hui.Select = Select;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Global = (function () {
            function Global() {
            }
            return Global;
        }());
        hui.Global = Global;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WidgetExtension = (function () {
            function WidgetExtension() {
            }
            WidgetExtension.bind = function (widgetPath, template) {
                if (!widgetPath) {
                    console.error("WidgetExtension: \u7ED1\u5B9A\u7EC4\u4EF6\u548C\u5176\u5BF9\u5E94html\u6A21\u677F\u5931\u8D25");
                }
                else {
                    if (widgetPath.indexOf(".") == -1) {
                        console.error("WidgetExtension:" + widgetPath + "\u672A\u5305\u542B\u7EC4\u4EF6\u7684\u5168\u8DEF\u5F84");
                    }
                    else {
                        var classPath = widgetPath.split(".");
                        var widgetClass = null;
                        for (var i = 0; i < classPath.length; i++) {
                            if (i == 0) {
                                widgetClass = window[classPath[i]];
                                if (!widgetClass) {
                                    console.error("WidgetExtension: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + widgetPath + "\u83B7\u53D6\u5230window\u5BF9\u8C61\u4E2D" + classPath[i] + "\u7684\u5B9E\u4F8B,\u8BF7\u68C0\u67E5" + widgetPath + "\u662F\u5426\u5408\u6CD5");
                                    return;
                                }
                            }
                            else {
                                widgetClass = widgetClass[classPath[i]];
                                if (!widgetClass) {
                                    console.error("WidgetExtension: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + widgetPath + "\u83B7\u53D6\u5230" + classPath[i - 1] + "\u5BF9\u8C61\u4E2D" + classPath[i] + "\u7684\u5B9E\u4F8B\uFF0C\u8BF7\u68C0\u67E5" + widgetPath + "\u662F\u5426\u5408\u6CD5");
                                    return;
                                }
                            }
                        }
                        if (this.types.indexOf(widgetPath) == -1) {
                            this.types.push(widgetPath);
                            this.widgetMap.set(widgetPath, widgetClass);
                            this.templateMap.set(widgetPath, template);
                        }
                        else {
                            console.error("WidgetExtension: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + widgetPath + "\u91CD\u590D\u6CE8\u518C" + widgetPath + "\u7684\u5B9E\u4F8B\uFF0C\u8BF7\u68C0\u67E5" + widgetPath + "\u662F\u5426\u5DF2\u7ECF\u58F0\u660E\u8FC7");
                        }
                    }
                }
            };
            WidgetExtension.getWidgetTypes = function () {
                return this.types;
            };
            WidgetExtension.findWidget = function (widgetType) {
                return this.widgetMap.get(widgetType);
            };
            WidgetExtension.findTemplate = function (widgetType) {
                return this.templateMap.get(widgetType);
            };
            WidgetExtension.templateMap = new hui.Map();
            WidgetExtension.widgetMap = new hui.Map();
            WidgetExtension.types = new Array();
            return WidgetExtension;
        }());
        hui.WidgetExtension = WidgetExtension;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WattPanel = (function (_super) {
            __extends(WattPanel, _super);
            function WattPanel() {
                _super.apply(this, arguments);
            }
            WattPanel.prototype.show = function (msg) {
                $(this.nodeTypeMap.get("msgNode")).html(msg);
                _super.prototype.show.call(this);
            };
            return WattPanel;
        }(hui.PopContainer));
        hui.WattPanel = WattPanel;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HandWritingPanel = (function (_super) {
            __extends(HandWritingPanel, _super);
            function HandWritingPanel() {
                _super.apply(this, arguments);
            }
            HandWritingPanel.prototype.initView = function () {
                this.canvas = $(this.attachElement).find('canvas').get(0);
                this.canvas.width = parseFloat($(this.attachElement).css("width").replace("px", ""));
                this.canvas.height = parseFloat($(this.attachElement).css("height").replace("px", ""));
                var _init = function (canvas) {
                    var canvas = canvas;
                    var point = {};
                    point.notFirst = false;
                    var context = canvas.getContext("2d");
                    canvas.addEventListener("mousedown", function (e) {
                        var mouseX = e.pageX - this.offsetLeft;
                        var mouseY = e.pageY - this.offsetTop;
                        console.info(this);
                        paint = true;
                        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
                        redraw();
                    });
                    canvas.addEventListener("mousemove", function (e) {
                        if (paint) {
                            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                            redraw();
                        }
                    });
                    canvas.addEventListener("touchstart", function (e) {
                        var touchX = e.targetTouches[0].pageX - this.offsetLeft;
                        var touchY = e.targetTouches[0].pageY - this.offsetTop;
                        paint = true;
                        addClick(touchX, touchY, false);
                        redraw();
                    });
                    canvas.addEventListener("touchmove", function (e) {
                        if (paint) {
                            addClick(e.targetTouches[0].pageX - this.offsetLeft, e.targetTouches[0].pageY - this.offsetTop, true);
                            redraw();
                        }
                    });
                    canvas.addEventListener("touchend", function (e) {
                        paint = false;
                    });
                    canvas.addEventListener("mouseup", function (e) {
                        paint = false;
                    });
                    canvas.addEventListener("mouseleave", function (e) {
                        paint = false;
                    });
                    var clickX = new Array();
                    var clickY = new Array();
                    var clickDrag = new Array();
                    var paint;
                    function addClick(x, y, dragging) {
                        clickX.push(x);
                        clickY.push(y);
                        clickDrag.push(dragging);
                    }
                    function redraw() {
                        context.strokeStyle = "#df4b26";
                        context.lineJoin = "round";
                        context.lineWidth = 5;
                        while (clickX.length > 0) {
                            point.bx = point.x;
                            point.by = point.y;
                            point.x = clickX.pop();
                            point.y = clickY.pop();
                            point.drag = clickDrag.pop();
                            context.beginPath();
                            if (point.drag && point.notFirst) {
                                context.moveTo(point.bx, point.by);
                            }
                            else {
                                point.notFirst = true;
                                context.moveTo(point.x - 1, point.y);
                            }
                            context.lineTo(point.x, point.y);
                            context.closePath();
                            context.stroke();
                        }
                    }
                };
                _init(this.canvas);
            };
            HandWritingPanel.prototype.clear = function () {
                this.canvas.width = this.canvas.width;
            };
            return HandWritingPanel;
        }(hui.Widget));
        hui.HandWritingPanel = HandWritingPanel;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var OverLay = (function (_super) {
            __extends(OverLay, _super);
            function OverLay() {
                _super.apply(this, arguments);
            }
            OverLay.prototype.show = function (msg) {
                $(this.nodeTypeMap.get("msgNode")).html(msg);
                _super.prototype.show.call(this);
            };
            return OverLay;
        }(hui.PopContainer));
        hui.OverLay = OverLay;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var ProcessBar = (function (_super) {
            __extends(ProcessBar, _super);
            function ProcessBar() {
                _super.apply(this, arguments);
                this.points = null;
            }
            ProcessBar.prototype.initView = function () {
                this.points = new Array();
                if (!this.data || this.data == {})
                    this.data = { steps: ["defaultStep1", "defaultStep2", "defaultStep3", "defaultStep4", "defaultStep5"], gotoStep: 0 };
                else
                    this.data["gotoStep"] = parseInt(this.data["gotoStep"]);
                this.stepBar = this.nodeTypeMap.get("stepBar");
                var pointHtml = "<div class='processbar-step-point processbar-step-point-unprocessed'></div>";
                var stepDes = "<div class='processbar-step-des'></div>";
                for (var i = 0; i < this.data["steps"].length; i++) {
                    var width = 100 * (i + 1) / (this.data["steps"].length + 1) + "%";
                    var point = $(pointHtml).css({ left: width }).appendTo($(this.domNode));
                    $(stepDes).html(this.data["steps"][i]).appendTo(point);
                    this.points.push(point);
                }
                this.gotoStep(this.data["gotoStep"]);
            };
            ProcessBar.prototype.gotoStep = function (step) {
                if (step < 0 || step > this.data["steps"].length - 1)
                    return;
                this.data["gotoStep"] = step;
                for (var i = 0; i < this.points.length; i++) {
                    if (i <= step)
                        this.points[i].removeClass("processbar-step-point-unprocessed")
                            .addClass("processbar-step-point-processed");
                    else
                        this.points[i].addClass("processbar-step-point-unprocessed")
                            .removeClass("processbar-step-point-processed");
                }
                var _this = this;
                $(this.stepBar).css({ right: _this.getRightPercent() });
            };
            ProcessBar.prototype.getRightPercent = function () {
                var point = this.points[this.data["gotoStep"]];
                var right = parseFloat($(this.domNode).css("width").replace("px", ""))
                    - parseFloat(point.css("left").replace("px", ""))
                    - parseFloat(point.css("width").replace("px", "")) / 2;
                var rightPercent = right / parseFloat($(this.domNode).css("width").replace("px", "")) * 100 + "%";
                return rightPercent;
            };
            return ProcessBar;
        }(hui.Widget));
        hui.ProcessBar = ProcessBar;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var CALENDER_EVENT;
        (function (CALENDER_EVENT) {
            CALENDER_EVENT[CALENDER_EVENT["SHOW_TODAY"] = 0] = "SHOW_TODAY";
            CALENDER_EVENT[CALENDER_EVENT["NEXT_MONTH"] = 1] = "NEXT_MONTH";
            CALENDER_EVENT[CALENDER_EVENT["NEXT_THREE_MONTHS"] = 3] = "NEXT_THREE_MONTHS";
            CALENDER_EVENT[CALENDER_EVENT["NEXT_SIX_MONTHS"] = 6] = "NEXT_SIX_MONTHS";
            CALENDER_EVENT[CALENDER_EVENT["NEXT_YEAR"] = 12] = "NEXT_YEAR";
            CALENDER_EVENT[CALENDER_EVENT["PRE_YEAR"] = -12] = "PRE_YEAR";
            CALENDER_EVENT[CALENDER_EVENT["LAST_MONTH"] = -1] = "LAST_MONTH";
        })(CALENDER_EVENT || (CALENDER_EVENT = {}));
        var UPDATE_RANGE;
        (function (UPDATE_RANGE) {
            UPDATE_RANGE[UPDATE_RANGE["BOTH_GRID"] = 0] = "BOTH_GRID";
            UPDATE_RANGE[UPDATE_RANGE["LEFT_GRID"] = 1] = "LEFT_GRID";
            UPDATE_RANGE[UPDATE_RANGE["RIGHT_GRID"] = 2] = "RIGHT_GRID";
        })(UPDATE_RANGE || (UPDATE_RANGE = {}));
        var DatePicker = (function (_super) {
            __extends(DatePicker, _super);
            function DatePicker() {
                _super.apply(this, arguments);
                this.formatString = "yyyy/MM/dd";
                this._dtNow = new Date();
                this._MonthNow = this._dtNow.getMonth() + 1;
                this._yearNow = this._dtNow.getFullYear();
                this._dateNow = this._dtNow.getDate();
                this._selectedCell = { year: this._yearNow, month: this._MonthNow, date: this._dateNow, cell: "" };
                this.GRID1 = "G1";
                this.GRID2 = "G2";
                this.SHOW_MONTH_GRID1 = "showMonthGrid1";
                this.SHOW_MONTH_GRID2 = "showMonthGrid2";
                this.months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
                this.monthOf31Days = [1, 3, 5, 7, 8, 10, 12];
                this.monthOf30Days = [4, 6, 9, 11];
            }
            DatePicker.prototype.initView = function () {
                if (this.data["format"])
                    this.formatString = this.data["format"];
                var datePickerTemplate = "<div class='hui-datepicker' id='" + this.id + "_Calender'>\n    <div class='hui-datepicker-yearPanel'>\n        <input hui-widget-NodeType=\"leftArrowBtn\" type='button' style='float: left;border-top-left-radius: 6px;' value='<'\n               class='hui-datepicker-arrowButton'/>\n        <div class='hui-datepicker-yearDisplay hui-datepicker-nearYear' hui-widget-NodeType=\"preYear\">\u53BB\u5E74</div>\n        <div class='hui-datepicker-yearDisplay' hui-widget-NodeType=\"currYear\">\u4ECA\u5E74</div>\n        <div class='hui-datepicker-yearDisplay hui-datepicker-nearYear' hui-widget-NodeType=\"nextYear\">\u660E\u5E74</div>\n        <input hui-widget-NodeType=\"rightArrowBtn\" type='button' style='float: right;border-top-right-radius: 6px;' value='>'\n               class='hui-datepicker-arrowButton'/>\n    </div>\n    <div class='hui-datepicker-monthPanel'>\n        <ul hui-widget-NodeType=\"monthList\" class='hui-datepicker-monthTab'></ul>\n        <div>\n            <div hui-widget-NodeType=\"dateList\" class='hui-datepicker-monthsDisplay'>\n            </div>\n            <div class='hui-datepicker-operationsPanel'>\n                <input type='button' value='\u9009\u62E9\u4ECA\u5929'  hui-widget-NodeType=\"chooseTodayBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u4E0B\u4E09\u4E2A\u6708' hui-widget-NodeType=\"nextThreeMonthBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u4E0B\u534A\u5E74' hui-widget-NodeType=\"nextSixMonthBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u6E05\u9664' hui-widget-NodeType=\"clearBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u786E\u5B9A' hui-widget-NodeType=\"submitBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u5173\u95ED' hui-widget-NodeType=\"cancelBtn\" class='hui-datepicker-button'/>\n            </div>\n        </div>\n    </div>\n</div>";
                this.datePickerNode = $(datePickerTemplate).appendTo($("#_super_root_"))[0];
                var datePickerMap = this.parseWidgetNodeType(this.datePickerNode);
                this.monthListNode = datePickerMap.get("monthList");
                this.dateListNode = datePickerMap.get("dateList");
                this.currYearNode = datePickerMap.get("currYear");
                this.preYearNode = datePickerMap.get("preYear");
                this.nextYearNode = datePickerMap.get("nextYear");
                this.createCalender();
                this.monthsMap = this.parseWidgetNodeType(this.monthListNode);
                this.dateCellMap = this.parseWidgetNodeType($(this.dateListNode)[0]);
                var entrys = this.dateCellMap.entrys();
                var _this = this;
                for (var i = 0; i < entrys.length; i++) {
                    var entry = entrys[i];
                    if (entry.key.indexOf("G") != -1) {
                        $(entry.value).click(function (e) {
                            _this.handleDateClick($(this)[0]);
                        }).on("mouseout", function (e) {
                            _this.handleMouseExitEvent($(this)[0]);
                        }).on("mouseover", function (e) {
                            _this.handleMouseOverEvent($(this)[0]);
                        });
                    }
                }
                entrys = this.monthsMap.entrys();
                for (var i = 0; i < entrys.length; i++) {
                    var entry = entrys[i];
                    if (entry.key != "monthList") {
                        $(entry.value).click(function (e) {
                            _this.handleMonthClick($(this)[0]);
                        });
                    }
                }
                $(datePickerMap.get("chooseTodayBtn")).click(function (e) {
                    _this._selectedCell.year = _this._yearNow;
                    _this._selectedCell.month = _this._MonthNow;
                    _this._selectedCell.date = _this._dateNow;
                    _this.handleEvent(CALENDER_EVENT.SHOW_TODAY);
                });
                $(datePickerMap.get("nextThreeMonthBtn")).click(function (e) {
                    _this.handleEvent(CALENDER_EVENT.NEXT_THREE_MONTHS);
                });
                $(datePickerMap.get("nextSixMonthBtn")).click(function (e) {
                    _this.handleEvent(CALENDER_EVENT.NEXT_SIX_MONTHS);
                });
                $(datePickerMap.get("clearBtn")).click(function (e) {
                    $(_this.domNode).val("");
                });
                $(datePickerMap.get("submitBtn")).click(function (e) {
                    _this.handleSubmit();
                });
                $(datePickerMap.get("cancelBtn")).click(function (e) {
                    _this.handleCancel();
                });
                $(datePickerMap.get("leftArrowBtn")).click(function (e) {
                    _this.handleEvent(CALENDER_EVENT.PRE_YEAR);
                });
                $(datePickerMap.get("rightArrowBtn")).click(function (e) {
                    _this.handleEvent(CALENDER_EVENT.NEXT_YEAR);
                });
                $(this.domNode).on("focus", function (e) {
                    _this.showCalender();
                });
                this.showDatePicker(false);
                $(this.domNode).val(this.getDate());
            };
            DatePicker.prototype.getChineseMonth = function (month) {
                return this.months[month - 1];
            };
            DatePicker.prototype.createCalender = function () {
                var gridHtml = "";
                for (var k = 0; k < 2; k++) {
                    var className = k == 0 ? "hui-datepicker-monthDisplay hui-datepicker-month-left" : "hui-datepicker-monthDisplay hui-datepicker-month-right";
                    var showMonth = k == 0 ? this.SHOW_MONTH_GRID1 : this.SHOW_MONTH_GRID2;
                    var html = '';
                    html += "<div class = \"" + className + "\">\n                <div><div class=\"hui-datepicker-monthLabel hui-datepicker-dateCell\" hui-widget-NodeType=\"" + showMonth + "\"></div></div>\n                <div class=\"hui-datepicker-dateRow\">\n                <div class=\"hui-datepicker-dateCell\">\u65E5</div>\n                <div class=\"hui-datepicker-dateCell\">\u4E00</div>\n                <div class=\"hui-datepicker-dateCell\">\u4E8C</div>\n                <div class=\"hui-datepicker-dateCell\">\u4E09</div>\n                <div class=\"hui-datepicker-dateCell\">\u56DB</div>\n                <div class=\"hui-datepicker-dateCell\">\u4E94</div>\n                <div class=\"hui-datepicker-dateCell\">\u516D</div>\n                </div>";
                    for (var i = 0; i < 6; i++) {
                        if (i == 0)
                            html += '<div class="hui-datepicker-dateRow">';
                        else
                            html += '</div><div class="hui-datepicker-dateRow">';
                        for (var j = 0; j < 7; j++) {
                            var key = k == 0 ? this.GRID1 + "_" + i + "_" + j : this.GRID2 + "_" + i + "_" + j;
                            html += "<input type=\"button\" hui-widget-NodeType=\"" + key + "\" value=\"" + key + "\" class=\"hui-datepicker-dateCell\">";
                        }
                    }
                    html += '</div></div>';
                    gridHtml = gridHtml + html;
                }
                var tabItemHtml = "";
                for (var i = 0; i < 12; i++) {
                    var month = i + 1;
                    var chineseMonth = this.getChineseMonth(month);
                    var key = "month_" + month;
                    var item = "<li class='hui-datepicker-month' hui-widget-NodeType=\"" + key + "\">" + chineseMonth + "</li>";
                    tabItemHtml = tabItemHtml + item;
                }
                $(this.monthListNode).html(tabItemHtml);
                $(this.dateListNode).html(gridHtml);
            };
            DatePicker.prototype.handleEvent = function (calenderEvent) {
                if (calenderEvent == CALENDER_EVENT.SHOW_TODAY) {
                    this.DATAGRID1 = this._calculateMonth(calenderEvent, this._selectedCell.year, this._selectedCell.month);
                    this._updateGrid(this.DATAGRID1.year, this.DATAGRID1.month, UPDATE_RANGE.LEFT_GRID);
                    this.DATAGRID2 = this._calculateMonth(CALENDER_EVENT.NEXT_MONTH, this.DATAGRID1.year, this.DATAGRID1.month);
                    this._updateGrid(this.DATAGRID2.year, this.DATAGRID2.month, UPDATE_RANGE.RIGHT_GRID);
                }
                else {
                    if (this._selectedCell.cell.indexOf(this.GRID2, 0) != -1) {
                        this.DATAGRID2 = this._calculateMonth(calenderEvent, this.DATAGRID2.year, this.DATAGRID2.month);
                        this._updateGrid(this.DATAGRID2.year, this.DATAGRID2.month, UPDATE_RANGE.RIGHT_GRID);
                        this.DATAGRID1 = this._calculateMonth(CALENDER_EVENT.LAST_MONTH, this.DATAGRID2.year, this.DATAGRID2.month);
                        this._updateGrid(this.DATAGRID1.year, this.DATAGRID1.month, UPDATE_RANGE.LEFT_GRID);
                        this._selectedCell.year = this.DATAGRID2.year;
                        this._selectedCell.month = this.DATAGRID2.month;
                    }
                    else {
                        this.DATAGRID1 = this._calculateMonth(calenderEvent, this.DATAGRID1.year, this.DATAGRID1.month);
                        this._updateGrid(this.DATAGRID1.year, this.DATAGRID1.month, UPDATE_RANGE.LEFT_GRID);
                        this.DATAGRID2 = this._calculateMonth(CALENDER_EVENT.NEXT_MONTH, this.DATAGRID1.year, this.DATAGRID1.month);
                        this._updateGrid(this.DATAGRID2.year, this.DATAGRID2.month, UPDATE_RANGE.RIGHT_GRID);
                        this._selectedCell.year = this.DATAGRID1.year;
                        this._selectedCell.month = this.DATAGRID1.month;
                    }
                }
                this._updateSelectedCell();
            };
            ;
            DatePicker.prototype._updateSelectedCell = function () {
                var grid = this.DATAGRID1.month == this._selectedCell.month ? this.GRID1 : this.GRID2;
                for (var i = 0; i < 6; i++) {
                    for (var j = 0; j < 7; j++) {
                        var key = grid + "_" + i + "_" + j;
                        if ($(this.dateCellMap.get(key)).val() == this._selectedCell.date)
                            this._selectedCell.cell = key;
                    }
                }
                if (this._selectedCell["lastCell"])
                    $(this.dateCellMap.get(this._selectedCell["lastCell"])).attr("class", "hui-datepicker-dateCell");
                if (this._selectedCell.cell != "") {
                    $(this.dateCellMap.get(this._selectedCell.cell)).attr("class", "hui-datepicker-dateCell hui-datepicker-dateSelected").focus();
                }
                else {
                    for (var i = 0; i < 6; i++) {
                        for (var j = 0; j < 7; j++) {
                            var key = grid + "_" + i + "_" + j;
                            var ndays = this._getDays(this._selectedCell.month, this._selectedCell.year);
                            if ($(this.dateCellMap.get(key)).val() == ndays) {
                                this._selectedCell.cell = key;
                                this._selectedCell.date = ndays;
                            }
                        }
                    }
                    $(this.dateCellMap.get(this._selectedCell.cell)).attr("class", "hui-datepicker-dateCell hui-datepicker-dateSelected").focus();
                }
                this._selectedCell["lastCell"] = this._selectedCell.cell;
                this._updateSelectedMonths();
                this._updateSelectedYear();
            };
            DatePicker.prototype._updateSelectedYear = function () {
                var year = this._selectedCell.year;
                $(this.currYearNode).html(String(year));
                $(this.preYearNode).html(String(year - 1));
                $(this.nextYearNode).html(String(year + 1));
            };
            DatePicker.prototype._updateSelectedMonths = function () {
                this._selectedMonth = this._selectedCell.month;
                if (this._lastSelectedMonth)
                    $(this.monthsMap.get("month_" + this._lastSelectedMonth)).attr("class", "hui-datepicker-month");
                if (this._selectedMonth) {
                    $(this.monthsMap.get("month_" + this._selectedMonth)).attr("class", "hui-datepicker-month hui-datepicker-month-selected");
                    this._lastSelectedMonth = this._selectedMonth;
                }
            };
            DatePicker.prototype._updateGrid = function (year, month, range) {
                var startDay = new Date(year, month - 1, 1).getDay();
                var daysArray = new Array();
                var showMonth = range == UPDATE_RANGE.LEFT_GRID ? this.SHOW_MONTH_GRID1 : this.SHOW_MONTH_GRID2;
                $(this.dateCellMap.get(showMonth)).html(this.getChineseMonth(month));
                var _days = this._getDays(month, year);
                for (var i = 0; i < _days; i++) {
                    daysArray[i] = i + 1;
                }
                for (var i = 0; i < 6; i++) {
                    for (var j = 0; j < 7; j++) {
                        var key = range == UPDATE_RANGE.LEFT_GRID ? this.GRID1 + "_" + i + "_" + j : this.GRID2 + "_" + i + "_" + j;
                        if (i == 0 && j < startDay) {
                            $(this.dateCellMap.get(key)).val("").css("visibility", "hidden");
                        }
                        else {
                            if (daysArray.length != 0) {
                                var day = daysArray.shift();
                                $(this.dateCellMap.get(key)).val(day).css("visibility", "visible");
                                continue;
                            }
                            $(this.dateCellMap.get(key)).val("").css("visibility", "hidden");
                        }
                    }
                }
            };
            DatePicker.prototype._getDays = function (month, year) {
                if (this.monthOf31Days.indexOf(month) != -1)
                    return 31;
                if (this.monthOf30Days.indexOf(month) != -1)
                    return 30;
                if (this.isLeapYear(year))
                    return 29;
                else
                    return 28;
            };
            ;
            DatePicker.prototype.isLeapYear = function (year) {
                if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0))
                    return true;
                else
                    return false;
            };
            DatePicker.prototype._calculateMonth = function (delta, year, month) {
                var sum = month + delta;
                var result = { year: year, month: month };
                if (delta < 0) {
                    result.year = sum < 1 ? year - 1 : year;
                    result.month = sum < 1 ? sum + 12 : sum;
                }
                else if (delta > 0) {
                    result.year = sum > 12 ? year + 1 : year;
                    result.month = sum > 12 ? sum - 12 : sum;
                }
                return result;
            };
            DatePicker.prototype.handleMonthClick = function (srcElement) {
                var index = this._getCurrentNodeIndex(srcElement);
                var month = index + 1;
                if (month != this._selectedCell.month)
                    this.handleEvent(month - this._selectedCell.month);
            };
            DatePicker.prototype.handleMouseExitEvent = function (srcElement) {
                $(srcElement).removeClass("hui-datepickier-dateCellHover");
            };
            DatePicker.prototype.handleDateClick = function (srcElement) {
                var cell = $(srcElement).attr("hui-widget-NodeType");
                if ($(srcElement).val() != "") {
                    this._selectedCell.date = parseInt($(srcElement).val());
                    var grid = cell.indexOf(this.GRID1, 0) != -1 ? this.DATAGRID1 : this.DATAGRID2;
                    this._selectedCell.month = grid.month;
                    this._selectedCell.year = grid.year;
                    this._updateSelectedCell();
                }
            };
            DatePicker.prototype.handleMouseOverEvent = function (srcElement) {
                if ($(srcElement).val() != "") {
                    $(srcElement).addClass("hui-datepickier-dateCellHover");
                }
            };
            DatePicker.prototype.showDatePicker = function (show) {
                if (show) {
                    $(this.datePickerNode).show();
                    hui.Global.OverLay.show();
                }
                else {
                    $(this.datePickerNode).hide();
                    hui.Global.OverLay.hide();
                }
            };
            DatePicker.prototype.handleSubmit = function () {
                this.showDatePicker(false);
                $(this.domNode).val(this.format());
            };
            DatePicker.prototype.handleCancel = function () {
                this.showDatePicker(false);
            };
            DatePicker.prototype.format = function () {
                var fmt = this.formatString;
                var o = {
                    "M+": this._selectedCell.month,
                    "d+": this._selectedCell.date
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (this._selectedCell.year + "").substr(4 - RegExp.$1.length));
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
                return fmt;
            };
            DatePicker.prototype.showCalender = function () {
                this.showDatePicker(true);
                this.handleEvent(CALENDER_EVENT.SHOW_TODAY);
            };
            DatePicker.prototype.getDate = function () {
                return this.format();
            };
            DatePicker.prototype._getCurrentNodeIndex = function (node) {
                var children = node.parentNode.childNodes;
                for (var i = 0; i < children.length; i++) {
                    if (children[i] == node)
                        return i;
                }
                return -1;
            };
            DatePicker.prototype.setDate = function (data) {
                this._selectedCell.year = data.year;
                this._selectedCell.month = data.month;
                this._selectedCell.date = data.date;
                $(this.domNode).val(this.format());
            };
            DatePicker.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
                $(this.datePickerNode).remove();
                $(this.datePickerNode).empty();
                $(this.datePickerNode).off();
            };
            return DatePicker;
        }(hui.Widget));
        hui.DatePicker = DatePicker;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Amount = (function (_super) {
            __extends(Amount, _super);
            function Amount() {
                _super.apply(this, arguments);
                this.minus = false;
            }
            Amount.prototype.initView = function () {
                this.decimalLen = this.data["decimalLen"] ? parseInt(this.data["decimalLen"]) : 2;
                this.maxLength = this.data["maxLength"] ? parseInt(this.data["maxLength"]) : 15;
                this.minus = this.data["minus"] == "true" ? true : false;
                this.inputElement = this.nodeTypeMap.get("inputNode");
                this.inputElement.maxLength = this.maxLength;
                var _this = this;
                this.inputElement.addEventListener("input", function (e) {
                    _this.handleOnInputEvent(e);
                });
                this.inputElement.addEventListener("keydown", function (e) {
                    _this.handleKeyDownEvent(e);
                });
                this.setAmount(this.minus ? "-0" : "0");
            };
            Amount.prototype.handleOnInputEvent = function (event) {
                this._cursorIndex = this.inputElement.selectionEnd;
                var str = this.inputElement.value;
                var illegalChars = new Array();
                var valueCache = new Array();
                for (var i = 0; i < str.length; i++) {
                    var char = str.charAt(i);
                    valueCache.push(char);
                    if (!/^[0-9]*$/.test(char)) {
                        if (char == "." || char == "-" || char == ",")
                            continue;
                        illegalChars.push(char);
                    }
                }
                if (illegalChars.length > 0) {
                    for (var i = 0; i < valueCache.length; i++) {
                        for (var j = 0; j < illegalChars.length; j++) {
                            if (valueCache[i] == illegalChars[j])
                                valueCache[i] = "x";
                        }
                    }
                }
                var newVal = "";
                for (var i = 0; i < valueCache.length; i++) {
                    if (valueCache[i] != "x")
                        newVal = newVal + valueCache[i];
                }
                if (str.indexOf(".") == 0) {
                    str = "0" + str;
                    this.inputElement.value = str;
                    this.inputElement.selectionEnd = 1;
                    return;
                }
                if (str.indexOf("-.") == 0) {
                    str = str.substring(0, 1) + "0" + str.substring(1, str.length);
                    this.inputElement.value = str;
                    this.inputElement.selectionEnd = 2;
                    return;
                }
                if (newVal != str) {
                    str = newVal;
                    this.inputElement.value = str;
                    this.inputElement.selectionEnd = this._cursorIndex - 1;
                    return;
                }
                else {
                    var floatAmt = this.recoverAmount(this.inputElement.value);
                    str = floatAmt + "";
                    if (str.indexOf(".") == -1) {
                        str = str + ".";
                        for (var i = 0; i < this.decimalLen; i++) {
                            str = str + "0";
                        }
                    }
                    var _decimalLen = this.inputElement.value.substring(this.inputElement.value.indexOf(".") + 1, this.inputElement.value.length).length;
                    if (_decimalLen > this.decimalLen) {
                        var cursorRelativePeriod = this._cursorIndex - this.inputElement.value.indexOf(".") - 1;
                        if (cursorRelativePeriod > this.decimalLen) {
                            var intPart = str.split(".")[0];
                            var decimalPart = this.inputElement.value.split(".")[1];
                            this.setAmount(intPart + "." + decimalPart.substring(0, this.decimalLen));
                            return;
                        }
                        else {
                            var intPart = str.split(".")[0];
                            var decimalPart = this.inputElement.value.split(".")[1];
                            var justInput = decimalPart.substring(cursorRelativePeriod - 1, cursorRelativePeriod);
                            var strBeforeCursor = decimalPart.substring(0, cursorRelativePeriod - 1);
                            var strAfterCursor = decimalPart.substring(cursorRelativePeriod + 1, str.length);
                            decimalPart = strBeforeCursor + justInput + strAfterCursor;
                            this.setAmount(intPart + "." + decimalPart);
                            return;
                        }
                    }
                    else if (_decimalLen < this.decimalLen) {
                        var cursorRelativePeriod = this._cursorIndex - this.inputElement.value.indexOf(".") - 1;
                        var result = str.substring(0, str.indexOf(".") + cursorRelativePeriod + 1)
                            + "0" + this.inputElement.value.substring(this.inputElement.value.indexOf(".") + cursorRelativePeriod + 1, this.inputElement.value.length);
                        this.setAmount(result);
                        return;
                    }
                    else {
                        if (str.indexOf("0") == 0) {
                            str = str.substring(1, str.length);
                            this.setAmount(str);
                            return;
                        }
                        if (str.indexOf("-0") == 0) {
                            str = "-" + str.substring(2, str.length);
                            str = str.substring(1, str.length);
                            this.setAmount(str);
                            return;
                        }
                        this.setAmount(parseFloat(str).toString());
                    }
                }
            };
            Amount.prototype.handleKeyDownEvent = function (event) {
                if (event.keyCode == hui.Keys.NUMPAD_PERIOD || event.keyCode == 190) {
                    if (this.inputElement.value.indexOf(".") != -1)
                        event.preventDefault();
                }
                if (event.keyCode == hui.Keys.MINUS || event.keyCode == hui.Keys.NUMPAD_MINUS) {
                    if (this.inputElement.value.indexOf("-") != -1)
                        event.preventDefault();
                }
                if (event.keyCode == hui.Keys.DELETE || event.keyCode == hui.Keys.BACKSPACE) {
                    if (this.inputElement.selectionEnd == this.inputElement.value.indexOf(".") + 1) {
                        this.inputElement.selectionEnd = this.inputElement.value.indexOf(".");
                        event.preventDefault();
                    }
                    if (this.inputElement.selectionEnd == this.inputElement.value.indexOf("-") + 1) {
                        event.preventDefault();
                    }
                }
            };
            Amount.prototype.getFloatAmt = function () {
                return this.recoverAmount(this.getAmount());
            };
            Amount.prototype.getAmount = function () {
                return this.inputElement.value;
            };
            Amount.prototype.setAmount = function (s) {
                if (this.minus && s.charAt(0) != "-") {
                    console.error("\u91D1\u989D\u573A" + this.id + ": \u9884\u8BBEminus\u7B26\u53F7\u4E3A\u8D1F\u53F7,\u53EA\u80FD\u8F93\u5165\u8D1F\u6570, \u5F53\u524D\u8BBE\u7F6E\u7684\u503C\u4E3A" + s);
                    return;
                }
                if (!this.minus && s.charAt(0) == "-") {
                    console.error("\u91D1\u989D\u573A" + this.id + ": \u9884\u8BBEminus\u7B26\u53F7\u4E3A\u6B63\u53F7,\u53EA\u80FD\u8F93\u5165\u6B63\u6570, \u5F53\u524D\u8BBE\u7F6E\u7684\u503C\u4E3A" + s);
                    return;
                }
                if (this.minus && s.charAt(0) == "-")
                    s = s.substring(1, s.length);
                var fmtAmt = this.formatAmount(s);
                var result = fmtAmt;
                if (this.minus)
                    result = "-" + fmtAmt;
                if (!this.minus && result.length > this.maxLength) {
                    console.error(this.id + ":\u8D85\u51FA\u6700\u5927\u957F\u5EA6!");
                    return;
                }
                if (this.minus && result.length - 1 > this.maxLength) {
                    console.error(this.id + ":\u8D85\u51FA\u6700\u5927\u957F\u5EA6!");
                    return;
                }
                if (this.oldAmount) {
                    if (this.oldAmount.length > result.length) {
                        var _oldSeparatorSize = this.getSeparatorSize(this.oldAmount);
                        var _currSeparatorSize = this.getSeparatorSize(result);
                        if (_oldSeparatorSize > _currSeparatorSize) {
                            this._cursorIndex = this._cursorIndex - 1;
                        }
                    }
                    else if (this.oldAmount.length < result.length) {
                        var _oldSeparatorSize = this.getSeparatorSize(this.oldAmount);
                        var _currSeparatorSize = this.getSeparatorSize(result);
                        if (_oldSeparatorSize < _currSeparatorSize) {
                            this._cursorIndex = this._cursorIndex + 1;
                        }
                    }
                    else {
                        if (this.oldAmount == result) {
                            if (!this.minus)
                                this._cursorIndex = this._cursorIndex > 2 ? this._cursorIndex : this._cursorIndex - 1;
                            else
                                this._cursorIndex = this._cursorIndex > 3 ? this._cursorIndex : this._cursorIndex - 1;
                        }
                        if (!this.minus && this.oldAmount.charAt(0) != result.charAt(0))
                            this._cursorIndex = this._cursorIndex - 1;
                        if (this.minus && this.oldAmount.charAt(1) != result.charAt(1))
                            this._cursorIndex = this._cursorIndex - 1;
                    }
                }
                this.inputElement.value = result;
                this.inputElement.selectionEnd = this._cursorIndex;
                this.oldAmount = result;
            };
            Amount.prototype.formatAmount = function (s) {
                var n = this.decimalLen;
                n = n > 0 && n <= 20 ? n : 2;
                s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
                var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
                var t = "";
                for (var i = 0; i < l.length; i++) {
                    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
                }
                return t.split("").reverse().join("") + "." + r;
            };
            Amount.prototype.recoverAmount = function (s) {
                return parseFloat(s.replace(/[^\d\.-]/g, ""));
            };
            Amount.prototype.getSeparatorSize = function (s) {
                var count = 0;
                for (var i = 0; i < s.length; i++) {
                    if (s.charAt(i) == ",")
                        count++;
                }
                return count;
            };
            return Amount;
        }(hui.Widget));
        hui.Amount = Amount;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WidgetTemplate = (function () {
            function WidgetTemplate() {
            }
            WidgetTemplate.Alert = "<div class=\"hui-widget-view\">\n                                            <div class='hui-alert-overlay' hui-widget-nodeType=\"OverLayNode\"></div>\n                                            <div class='hui-alert-root'>\n                                                <div class='hui-alert-title' hui-widget-nodeType=\"titleNode\"></div>\n                                                <div class='hui-alert-content' hui-widget-nodeType=\"contentNode\"></div>\n                                                <div class='row hui-alert-bottom' hui-widget-nodeType=\"btnContainerNode\"></div>\n                                            </div>\n                                        </div>";
            WidgetTemplate.Amount = "<input class=\"hui-widget-view\" ime-mode:disabled style='width:100%;text-align:right' hui-widget-nodeType=\"inputNode\"/>";
            WidgetTemplate.DatePicker = "<input class=\"hui-widget-view\" style='text-align: right'/>";
            WidgetTemplate.HandWrittingPanel = "<canvas class=\"hui-HandWrittingPanel-style\"></canvas>";
            WidgetTemplate.OverLay = "<div class=\"hui-overlay-style\"></div>";
            WidgetTemplate.PopWindow = "<div class=\"hui-widget-view\">\n                                                <div class='hui-alert-overlay' hui-widget-nodeType=\"OverLayNode\"></div>\n                                            </div>";
            WidgetTemplate.ProcessBar = "<div class='processbar-bar'>\n                                                <div class='processbar-step-handled' hui-widget-nodeType=\"stepBar\"></div>\n                                            </div>";
            WidgetTemplate.WattPanel = "<div class=\"hui-widget-view\">\n                                                <div class=\"hui-overlay-style\"></div>\n                                                <div class=\"ui-WattPanel\">\n                                                      <img src=\"\" class=\"ui-WattPanel-img\"/>\n                                                      <div class=\"ui-WattPanel-msgNode\" hui-widget-nodeType=\"msgNode\"></div>\n                                                </div>\n                                           </div>";
            WidgetTemplate.Select = "<div class=\"hui-widget-view\">\n                                            <input type=\"text\" value=\"--\u8BF7\u9009\u62E9--\" class=\"selOptionInput\" readonly />\n                                            <div class=\"selOptionUlDiv\">\n                                                <ul class=\"li_list\">\n                                                </ul>\n                                            </div>\n                                         </div>";
            return WidgetTemplate;
        }());
        hui.WidgetTemplate = WidgetTemplate;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HuiLoader = (function () {
            function HuiLoader() {
            }
            HuiLoader.load = function () {
                this.loadWidgetExtension();
                this.loadWinShell();
                this.mountGlobal();
            };
            HuiLoader.loadWinShell = function () {
                hui.WinShell.load();
            };
            HuiLoader.loadWidgetExtension = function () {
                hui.WidgetExtension.bind("btop.hui.Alert", hui.WidgetTemplate.Alert);
                hui.WidgetExtension.bind("btop.hui.PopWindow", hui.WidgetTemplate.PopWindow);
                hui.WidgetExtension.bind("btop.hui.WattPanel", hui.WidgetTemplate.WattPanel);
                hui.WidgetExtension.bind("btop.hui.HandWritingPanel", hui.WidgetTemplate.HandWrittingPanel);
                hui.WidgetExtension.bind("btop.hui.OverLay", hui.WidgetTemplate.OverLay);
                hui.WidgetExtension.bind("btop.hui.ProcessBar", hui.WidgetTemplate.ProcessBar);
                hui.WidgetExtension.bind("btop.hui.DatePicker", hui.WidgetTemplate.DatePicker);
                hui.WidgetExtension.bind("btop.hui.Amount", hui.WidgetTemplate.Amount);
                hui.WidgetExtension.bind("btop.hui.Select", hui.WidgetTemplate.Select);
            };
            HuiLoader.mountGlobal = function () {
                var _super_root_ = document.getElementById("_super_root_") ? $("#_super_root") : $("<div id=\"_super_root_\">").appendTo(document.body);
                var _global_Alert = "hui_global_Alert";
                var _global_PopWindow = "hui_global_PopWindow";
                var _global_OverLay = "hui_global_OverLay";
                var _global_WattPanel = "hui_global_WattPanel";
                $("<div id='" + _global_Alert + "' hui-widget-type = 'btop.hui.Alert'>").addClass("hui-fullScreen").appendTo(_super_root_);
                $("<div id='" + _global_PopWindow + "' hui-widget-type = 'btop.hui.PopWindow'>").addClass("hui-fullScreen").appendTo(_super_root_);
                $("<div id='" + _global_OverLay + "' hui-widget-type = 'btop.hui.OverLay'>").addClass("hui-fullScreen").appendTo(_super_root_);
                $("<div id='" + _global_WattPanel + "' hui-widget-type = 'btop.hui.WattPanel'>").addClass("hui-fullScreen").appendTo(_super_root_);
                hui.HuiParser.parse(_super_root_[0]);
                hui.Global.Alert = hui.WidgetManager.reflect(hui.Alert, _global_Alert);
                hui.Global.PopWindow = hui.WidgetManager.reflect(hui.PopWindow, _global_PopWindow);
                hui.Global.OverLay = hui.WidgetManager.reflect(hui.OverLay, _global_OverLay);
                hui.Global.WattPanel = hui.WidgetManager.reflect(hui.WattPanel, _global_WattPanel);
                window.addEventListener(hui.EventType[hui.EventType.hashchange], function (e) {
                    var data = {};
                    data["domEvent"] = e;
                    data["source"] = window;
                    btop.hui.EventHub.fireEvent(hui.EventType.hashchange, data);
                });
                btop.hui.EventHub.addListener(hui.EventType.hashchange, new hui.HashListener());
                btop.hui.EventHub.fireEvent(hui.EventType.hashchange);
            };
            return HuiLoader;
        }());
        hui.HuiLoader = HuiLoader;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HeaderFooterLayout = (function () {
            function HeaderFooterLayout(containerElement, layoutData) {
                this.containerElement = containerElement;
                this.layoutData = layoutData;
            }
            HeaderFooterLayout.prototype.doLayout = function () {
                var _this = this;
                $(_this.containerElement).children().each(function (i) {
                    if (i == 0)
                        $(this).addClass("hui-layout-topRegion")
                            .css({ height: _this.layoutData.topHeight });
                    if (i == 1)
                        $(this).addClass("hui-layout-midRegion")
                            .css({ top: _this.layoutData.topHeight, height: _this.layoutData.midHeight });
                    if (i == 2)
                        $(this).addClass("hui-layout-bottomRegion")
                            .css({ height: _this.layoutData.bottomHeight });
                });
            };
            return HeaderFooterLayout;
        }());
        hui.HeaderFooterLayout = HeaderFooterLayout;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HeaderFooterLayoutData = (function () {
            function HeaderFooterLayoutData(topHeight, midHeight, bottomHeight) {
                if (topHeight === void 0) { topHeight = "10%"; }
                if (midHeight === void 0) { midHeight = "75%"; }
                if (bottomHeight === void 0) { bottomHeight = "15%"; }
                this.topHeight = topHeight;
                this.midHeight = midHeight;
                this.bottomHeight = bottomHeight;
            }
            return HeaderFooterLayoutData;
        }());
        hui.HeaderFooterLayoutData = HeaderFooterLayoutData;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var FillLayout = (function () {
            function FillLayout(containerElement, layoutData) {
                this.containerElement = containerElement;
                this.layoutData = layoutData;
            }
            FillLayout.prototype.doLayout = function () {
                var _this = this;
                $(_this.containerElement).children().each(function (i) {
                    if (i == 0)
                        $(this).css({ width: "100%", height: "100%" });
                });
            };
            return FillLayout;
        }());
        hui.FillLayout = FillLayout;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var FillLayoutData = (function () {
            function FillLayoutData() {
            }
            return FillLayoutData;
        }());
        hui.FillLayoutData = FillLayoutData;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var SashLayout = (function () {
            function SashLayout(containerElement, layoutData) {
                this.containerElement = containerElement;
                this.layoutData = layoutData;
            }
            SashLayout.prototype.doLayout = function () {
                var _this = this;
                $(_this.containerElement).children().each(function (i) {
                    if (i == 0)
                        $(this).addClass("hui-layout-leftRegion")
                            .css({ width: _this.layoutData.leftWidth });
                    if (i == 1)
                        $(this).addClass("hui-layout-rightRegion")
                            .css({ width: _this.layoutData.rightWidth });
                });
            };
            return SashLayout;
        }());
        hui.SashLayout = SashLayout;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var SashLayoutData = (function () {
            function SashLayoutData(leftWidth, rightWidth) {
                if (leftWidth === void 0) { leftWidth = "25%"; }
                if (rightWidth === void 0) { rightWidth = "75%"; }
                this.leftWidth = leftWidth;
                this.rightWidth = rightWidth;
            }
            return SashLayoutData;
        }());
        hui.SashLayoutData = SashLayoutData;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var RowLayout = (function () {
            function RowLayout(containerElement, layoutData) {
                this.containerElement = containerElement;
                this.layoutData = layoutData;
            }
            RowLayout.prototype.doLayout = function () {
                var _this = this;
                $(_this.containerElement).children().each(function (i) {
                    $(this).addClass("row");
                });
            };
            return RowLayout;
        }());
        hui.RowLayout = RowLayout;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var RowLayoutData = (function () {
            function RowLayoutData() {
            }
            return RowLayoutData;
        }());
        hui.RowLayoutData = RowLayoutData;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HuiParser = (function () {
            function HuiParser() {
            }
            HuiParser.parseHuiAttr = function (jQueryNode, attrType) {
                var attributeString = jQueryNode.attr(attrType);
                if (attributeString == null
                    || attributeString == undefined
                    || attributeString == "")
                    return null;
                return JSON.parse(attributeString);
            };
            HuiParser.parseLayout = function (root) {
                $(root).find("div[hui-layout-type='HeaderFooterLayout']").each(function () {
                    var attributes = HuiParser.parseHuiAttr($(this), "hui-layout-attr");
                    if (attributes != null || attributes != undefined) {
                        var heights = attributes.heights;
                        new hui.HeaderFooterLayout($(this)[0], new hui.HeaderFooterLayoutData(heights[0], heights[1], heights[2])).doLayout();
                    }
                    else {
                        new hui.HeaderFooterLayout($(this)[0], new hui.HeaderFooterLayoutData()).doLayout();
                    }
                });
                $(root).find("div[hui-layout-type='SashLayout']").each(function () {
                    var attributes = HuiParser.parseHuiAttr($(this), "hui-layout-attr");
                    if (attributes != null || attributes != undefined) {
                        new hui.SashLayout($(this)[0], new hui.SashLayoutData(attributes[0], attributes[1])).doLayout();
                    }
                    else {
                        new hui.SashLayout($(this)[0], new hui.SashLayoutData()).doLayout();
                    }
                });
                $(root).find("div[hui-layout-type='FillLayout']").each(function () {
                    new hui.FillLayout($(this)[0], new hui.FillLayoutData()).doLayout();
                });
                $(root).find("div[hui-layout-type='RowLayout']").each(function () {
                    new hui.RowLayout($(this)[0], new hui.RowLayoutData()).doLayout();
                });
            };
            HuiParser.parseWidget = function (root) {
                var widgetTypes = hui.WidgetExtension.getWidgetTypes();
                for (var i = 0; i < widgetTypes.length; i++) {
                    var _this = this;
                    $(root).find("div[hui-widget-type=\"" + widgetTypes[i] + "\"]").each(function () {
                        var data = _this.parseHuiAttr($(this), "hui-widget-attr");
                        if ($(this).attr("id"))
                            hui.WidgetManager.addCreateTask(new hui.Task(widgetTypes[i], $(this).attr("id"), data, false, false));
                        else {
                            console.error("HuiParser: \u672A\u5411div[hui-widget-type=\"" + widgetTypes[i] + "\"]\u6307\u5B9Aid,widget\u5B9E\u4F8B\u521B\u5EFA\u5931\u8D25!!!");
                        }
                    });
                }
            };
            HuiParser.parse = function (root) {
                this.parseLayout(root);
                this.parseWidget(root);
            };
            return HuiParser;
        }());
        hui.HuiParser = HuiParser;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WinShell = (function () {
            function WinShell() {
            }
            WinShell.callDevice = function (deviceId, funcName, args, callback) {
                if (this.inWinShell) {
                    var callId = hui.UUID.generate();
                    this.registerCallback(callId, callback);
                    var ext = external;
                    ext.callDevice(deviceId, funcName, args, callId);
                }
                else {
                    $.ajax({
                        type: "get",
                        url: "http://127.0.0.1:12315/callDevice",
                        data: {
                            deviceId: deviceId,
                            funcName: funcName,
                            args: JSON.stringify(args)
                        },
                        success: function (data) {
                            callback(data);
                        }
                    });
                }
            };
            WinShell.registerCallback = function (callId, callback) {
                this.callbackMap.set(callId, callback);
            };
            WinShell.unregisterCallback = function (callId) {
                this.callbackMap.delete(callId);
            };
            WinShell.adjustInWinShell = function () {
                this.inWinShell = false;
                try {
                    var pal = external;
                    this.inWinShell = pal.InWinShell();
                }
                catch (e) {
                }
            };
            WinShell.load = function () {
                this.adjustInWinShell();
                if (this.inWinShell) {
                    if (!window["_Bankit_Pal_Global_CallBack_"])
                        window["_Bankit_Pal_Global_CallBack_"] = this._Bankit_Pal_Global_CallBack_;
                }
            };
            WinShell.callbackMap = new hui.Map();
            WinShell.inWinShell = false;
            WinShell._Bankit_Pal_Global_CallBack_ = function (callId, data) {
                if (WinShell.callbackMap.has(callId)) {
                    var callback = WinShell.callbackMap.get(callId);
                    try {
                        callback(data);
                        WinShell.unregisterCallback(callId);
                    }
                    catch (e) {
                        console.error("WinShell: \u901A\u8FC7\u503C\u4E3A'" + callId + "'\u7684callId\u6765\u6267\u884C\u5176\u5BF9\u5E94\u7684\u56DE\u6389\u51FD\u6570\u5931\u8D25!!!" + e);
                    }
                }
                else {
                    console.warn("WinShell: \u5916\u58F3\u8C03\u7528\u56DE\u6389\u51FD\u6570\u5931\u8D25!!!\u4E0D\u591F\u80FD\u901A\u8FC7\u503C\u4E3A" + callId + "\u7684callId\u627E\u5230\u5BF9\u5E94\u7684\u56DE\u6389\u51FD\u6570");
                }
            };
            return WinShell;
        }());
        hui.WinShell = WinShell;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var TimeStampCreator = (function () {
            function TimeStampCreator() {
            }
            TimeStampCreator.createStamp = function () {
                return "_" + new Date().getTime();
            };
            return TimeStampCreator;
        }());
        hui.TimeStampCreator = TimeStampCreator;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var UUID = (function () {
            function UUID() {
            }
            UUID.generate = function () {
                var dg = new Date(1582, 10, 15, 0, 0, 0, 0);
                var dc = new Date();
                var t = dc.getTime() - dg.getTime();
                var tl = this.getIntegerBits(t, 0, 31);
                var tm = this.getIntegerBits(t, 32, 47);
                var thv = this.getIntegerBits(t, 48, 59) + '1';
                var csar = this.getIntegerBits(this.rand(4095), 0, 7);
                var csl = this.getIntegerBits(this.rand(4095), 0, 7);
                var n = this.getIntegerBits(this.rand(8191), 0, 7) +
                    this.getIntegerBits(this.rand(8191), 8, 15) +
                    this.getIntegerBits(this.rand(8191), 0, 7) +
                    this.getIntegerBits(this.rand(8191), 8, 15) +
                    this.getIntegerBits(this.rand(8191), 0, 15);
                return "" + tl + tm + thv + csar + csl + n;
            };
            UUID.getIntegerBits = function (val, start, end) {
                var base16 = this.returnBase(val, 16);
                var quadArray = new Array();
                var quadString = '';
                var i = 0;
                for (i = 0; i < base16.length; i++) {
                    quadArray.push(base16.substring(i, i + 1));
                }
                for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
                    if (!quadArray[i] || quadArray[i] == '')
                        quadString += '0';
                    else
                        quadString += quadArray[i];
                }
                return quadString;
            };
            UUID.returnBase = function (number, base) {
                return number.toString(base).toUpperCase();
            };
            UUID.rand = function (max) {
                return Math.floor(Math.random() * (max + 1));
            };
            return UUID;
        }());
        hui.UUID = UUID;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Container = (function (_super) {
            __extends(Container, _super);
            function Container() {
                _super.apply(this, arguments);
                this.children = new Array();
            }
            Container.prototype.addChild = function (child) {
                this.children.push(child);
            };
            Container.prototype.destroy = function () {
                for (var i = 0; i < this.children.length; i++) {
                    this.children[i].destroy();
                }
                while (this.children.length != 0) {
                    this.children.shift();
                }
                _super.prototype.destroy.call(this);
            };
            return Container;
        }(hui.Widget));
        hui.Container = Container;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Page = (function (_super) {
            __extends(Page, _super);
            function Page() {
                _super.apply(this, arguments);
                this.suspended = false;
            }
            Page.prototype.init = function (attachElementId, template, widgetType, data) {
                _super.prototype.init.call(this, attachElementId, template, widgetType, data);
                hui.PageManager.currPage = this;
            };
            Page.prototype.isSuspend = function () {
                return this.suspended;
            };
            Page.prototype.suspend = function () {
                this.suspended = true;
                this.visible = false;
            };
            Page.prototype.wakeUp = function () {
                this.suspended = false;
                this.visible = true;
            };
            Page.prototype.getData = function () {
                return this.data;
            };
            Page.prototype.navigateTo = function (pageId, args) {
                this.open(pageId, null, Page.CLOSE, args);
            };
            Page.prototype.open = function (pageId, toElementId, operation, data) {
                switch (operation) {
                    case Page.SUSPEND:
                        this.suspend();
                        break;
                    case Page.CLOSE:
                        if (!toElementId)
                            window.location.hash = "#!" + pageId;
                        break;
                    default:
                        return;
                }
                hui.WidgetManager.addCreateTask(new hui.Task(pageId, toElementId, data, false, true));
            };
            Page.SUSPEND = 0x01;
            Page.CLOSE = 0x02;
            Page.EMBED = 0x03;
            return Page;
        }(hui.Container));
        hui.Page = Page;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var PageManager = (function () {
            function PageManager() {
            }
            Object.defineProperty(PageManager, "currPage", {
                get: function () {
                    return this._currPage;
                },
                set: function (page) {
                    this._currPage = page;
                },
                enumerable: true,
                configurable: true
            });
            return PageManager;
        }());
        hui.PageManager = PageManager;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=btop.hui.js.map