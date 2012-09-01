(function() {
  
if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "santiglaus.Application", "qx.theme": "santiglaus.theme.Theme", "qx.version": "0.8.3"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"qx": {"resourceUri": "resource", "version": "trunk", "sourceUri": "script"}, "santiglaus": {"resourceUri": "resource", "version": "trunk", "sourceUri": "script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -474, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -572, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -69, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -59, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -418, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -12, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -20, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/checkbox-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -516, 0], "qx/decoration/Modern/form/checkbox-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -558, 0], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/form/radiobutton-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [628, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tooltip-error-lr-combined.png": [12, 18, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -348, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -530, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/tooltip-error-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -30], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -54, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -264, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -53, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -404, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -145, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -27, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/form/checkbox-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -460, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -43, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -278, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -170, 0], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -35, 0], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-arrow.png": [11, 14, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -15, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -30, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tooltip-error-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -502, 0], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -544, 0], "qx/decoration/Modern/form/checkbox-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -586, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -53, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -46, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -390, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/form/tooltip-error-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -600, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -33, 0], "qx/icon/Tango/22/actions/list-remove.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/radiobutton-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -446, 0], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/icon/Tango/16/actions/window-close.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -334, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -20, 0], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -376, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "santiglaus/santi1.jpg": [120, 160, "jpeg", "santiglaus"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -614, 0], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -292, 0], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -69, 0], "qx/decoration/Modern/form/tooltip-error-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -6], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -488, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -432, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -306, 0], "qx/decoration/Modern/form/tooltip-error-l.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -82, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -39, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/form/checkbox-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -10, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -43, 0], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/form/tooltip-error-r.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -362, 0], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -151, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-c.png": [20, 18, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/icon/Tango/22/actions/list-add.png": [22, 22, "png", "qx"]};
qx.$$translations = {"C": {}, "en": {}};
qx.$$locales = {"C": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}, "en": {"cldr_month_format_wide_11": "November", "cldr_month_format_wide_10": "October", "cldr_month_format_wide_12": "December", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_date_time_format_M": "L", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_format_abbreviated_7": "Jul", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_month_stand-alone_narrow_2": "F", "cldr_month_stand-alone_narrow_5": "M", "cldr_month_stand-alone_narrow_4": "A", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_day_format_abbreviated_thu": "Thu", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_day_stand-alone_narrow_tue": "T", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_day_format_narrow_mon": "M", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_narrow_sat": "S", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_wide_tue": "Tuesday", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_date_format_long": "MMMM d, yyyy", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_day_stand-alone_narrow_sun": "S", "cldr_date_time_format_hm": "h:mm a", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_month_format_abbreviated_10": "Oct", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_day_stand-alone_wide_thu": "Thursday", "cldr_month_format_abbreviated_6": "Jun", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_date_format_short": "M/d/yy", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_y": "yyyy", "cldr_month_format_wide_7": "July", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_date_time_format_MMM": "LLL", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_month_format_abbreviated_5": "May"}};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["qx:santiglaus-0.js"]],
  boot : "boot",
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var prefix = libs[uri[0]].sourceUri;
      uris.push(prefix + "/" + uri[1]);
    }
    return uris;
  }
};  

(function(){var y=".",x="()",w="[Class ",v=".prototype",u="toString",t="qx.Bootstrap",s="]",r="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+s;
},createNamespace:function(name,d){var f=name.split(y);
var parent=window;
var e=f[0];

for(var i=0,g=f.length-1;i<g;i++,e=f[i]){if(!parent[e]){parent=parent[e]={};
}else{parent=parent[e];
}}parent[e]=d;
return e;
},setDisplayName:function(h,j,name){h.displayName=j+y+name+x;
},setDisplayNames:function(a,b){for(var name in a){var c=a[name];

if(c instanceof Function){c.displayName=b+y+name+x;
}}},define:function(name,k){if(!k){var k={statics:{}};
}var p;
var n=null;
qx.Bootstrap.setDisplayNames(k.statics,name);

if(k.members){qx.Bootstrap.setDisplayNames(k.members,name+v);
p=k.construct||new Function;
var l=k.statics;

for(var m in l){p[m]=l[m];
}n=p.prototype;
var q=k.members;

for(var m in q){n[m]=q[m];
}}else{p=k.statics||{};
}var o=this.createNamespace(name,p);
p.name=p.classname=name;
p.basename=o;
p.$$type=r;
if(!p.hasOwnProperty(u)){p.toString=this.genericToString;
}if(k.defer){k.defer(p,n);
}qx.Bootstrap.$$registry[name]=k.statics;
}};
qx.Bootstrap.define(t,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qxsetting",e=":",d=".";
qx.Bootstrap.define(h,{statics:{__a:{},define:function(r,s){if(s===undefined){throw new Error('Default value of setting "'+r+'" must be defined!');
}
if(!this.__a[r]){this.__a[r]={};
}else if(this.__a[r].defaultValue!==undefined){throw new Error('Setting "'+r+'" is already defined!');
}this.__a[r].defaultValue=s;
},get:function(p){var q=this.__a[p];

if(q===undefined){throw new Error('Setting "'+p+'" is not defined.');
}
if(q.value!==undefined){return q.value;
}return q.defaultValue;
},set:function(a,b){if((a.split(d)).length<2){throw new Error('Malformed settings key "'+a+'". Must be following the schema "namespace.key".');
}
if(!this.__a[a]){this.__a[a]={};
}this.__a[a].value=b;
},__b:function(){if(window.qxsettings){for(var c in qxsettings){this.set(c,qxsettings[c]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(l){}this.__c();
}},__c:function(){if(this.get(k)!=true){return;
}var o=document.location.search.slice(1).split(j);

for(var i=0;i<o.length;i++){var n=o[i].split(e);

if(n.length!=3||n[0]!=f){continue;
}this.set(n[1],decodeURIComponent(n[2]));
}}},defer:function(m){m.define(k,false);
m.define(g,false);
m.__b();
}});
})();
(function(){var A="gecko",z="1.9.0.0",y=".",x="[object Opera]",w="function",v="[^\\.0-9]",u="525.26",t="",s="mshtml",r="AppleWebKit/",l="unknown",q="9.6.0",o="4.0",k="Gecko",j="opera",n="webkit",m="0.0.0",p="8.0",i="qx.bom.client.Engine";
qx.Bootstrap.define(i,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__d:function(){var b=l;
var f=m;
var e=navigator.userAgent;
var h=false;
var d=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==x){b=j;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(e)){f=RegExp.$1+y+RegExp.$2;

if(RegExp.$3!=t){f+=y+RegExp.$3;
}}else{d=true;
f=q;
}}else if(navigator.userAgent.indexOf(r)!=-1){b=n;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(e)){f=RegExp.$1;
var g=RegExp(v).exec(f);

if(g){f=f.slice(0,g.index);
}}else{d=true;
f=u;
}}else if(window.controllers&&navigator.product===k){b=A;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(e)){f=RegExp.$1;
}else{d=true;
f=z;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(e)){b=s;
f=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(f<8&&/Trident\/([^\);]+)(\)|;)/.test(e)){if(RegExp.$1===o){f=p;
}}this.MSHTML=true;
}else{var c=window.qxFail;

if(c&&typeof c===w){var b=c();

if(b.NAME&&b.FULLVERSION){b=b.NAME;
this[b.toUpperCase()]=true;
f=b.FULLVERSION;
}}else{h=true;
d=true;
f=z;
b=A;
this.GECKO=true;
alert("Unsupported client: "+e+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=h;
this.UNKNOWN_VERSION=d;
this.NAME=b;
this.FULLVERSION=f;
this.VERSION=parseFloat(f);
}},defer:function(a){a.__d();
}});
})();
(function(){var L="on",K="off",J="|",I="default",H="object",G="&",F="qx.aspects",E="$",D="qx.allowUrlVariants",C="qx.debug",w="qx.client",B="qx.dynlocale",z="webkit",u="qxvariant",t="opera",y=":",x="qx.core.Variant",A="mshtml",s="gecko";
qx.Bootstrap.define(x,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(d,e,f){{};

if(!this.__e[d]){this.__e[d]={};
}else{}this.__e[d].allowedValues=e;
this.__e[d].defaultValue=f;
},get:function(q){var r=this.__e[q];
{};

if(r.value!==undefined){return r.value;
}return r.defaultValue;
},__g:function(){if(window.qxvariants){for(var g in qxvariants){{};

if(!this.__e[g]){this.__e[g]={};
}this.__e[g].value=qxvariants[g];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(j){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(D)!=true){return;
}var a=document.location.search.slice(1).split(G);

for(var i=0;i<a.length;i++){var b=a[i].split(y);

if(b.length!=3||b[0]!=u){continue;
}var c=b[1];

if(!this.__e[c]){this.__e[c]={};
}this.__e[c].value=decodeURIComponent(b[2]);
}},select:function(k,m){{};

for(var n in m){if(this.isSet(k,n)){return m[n];
}}
if(m[I]!==undefined){return m[I];
}{};
},isSet:function(M,N){var O=M+E+N;

if(this.__f[O]!==undefined){return this.__f[O];
}var Q=false;
if(N.indexOf(J)<0){Q=this.get(M)===N;
}else{var P=N.split(J);

for(var i=0,l=P.length;i<l;i++){if(this.get(M)===P[i]){Q=true;
break;
}}}this.__f[O]=Q;
return Q;
},__i:function(v){return typeof v===H&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===H&&v!==null&&!(v instanceof Array);
},__k:function(o,p){for(var i=0,l=o.length;i<l;i++){if(o[i]==p){return true;
}}return false;
}},defer:function(h){h.define(w,[s,A,t,z],qx.bom.client.Engine.NAME);
h.define(C,[L,K],L);
h.define(F,[L,K],K);
h.define(B,[L,K],L);
h.__g();
}});
})();
(function(){var r="qx.client",q='"',p="valueOf",o="toLocaleString",n="isPrototypeOf",m="",k="toString",j="qx.lang.Object",h='\", "',g="hasOwnProperty",f="Use 'clone()' instead!";
qx.Bootstrap.define(j,{statics:{empty:function(T){{};

for(var U in T){if(T.hasOwnProperty(U)){delete T[U];
}}},isEmpty:qx.core.Variant.select(r,{"gecko":function(I){{};
return I.__count__===0;
},"default":function(bf){{};

for(var bg in bf){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(r,{"gecko":function(R,S){{};
return R.__count__>=S;
},"default":function(bk,bl){{};

if(bl<=0){return true;
}var length=0;

for(var bm in bk){if((++length)>=bl){return true;
}}return false;
}}),getLength:qx.core.Variant.select(r,{"gecko":function(Q){{};
return Q.__count__;
},"default":function(M){{};
var length=0;

for(var N in M){length++;
}return length;
}}),_shadowedKeys:[n,g,o,k,p],getKeys:qx.core.Variant.select(r,{"mshtml":function(v){var w=[];

for(var y in v){w.push(y);
}var x=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(x.call(v,a[i])){w.push(a[i]);
}}return w;
},"default":function(C){var D=[];

for(var E in C){D.push(E);
}return D;
}}),getKeysAsString:function(O){{};
var P=qx.lang.Object.getKeys(O);

if(P.length==0){return m;
}return q+P.join(h)+q;
},getValues:function(s){{};
var u=[];
var t=this.getKeys(s);

for(var i=0,l=t.length;i<l;i++){u.push(s[t[i]]);
}return u;
},mergeWith:function(bb,bc,bd){{};

if(bd===undefined){bd=true;
}
for(var be in bc){if(bd||bb[be]===undefined){bb[be]=bc[be];
}}return bb;
},carefullyMergeWith:function(V,W){{};
return qx.lang.Object.mergeWith(V,W,false);
},merge:function(X,Y){{};
var ba=arguments.length;

for(var i=1;i<ba;i++){qx.lang.Object.mergeWith(X,arguments[i]);
}return X;
},copy:function(H){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return qx.lang.Object.clone(H);
},clone:function(z){{};
var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(J){{};
var K={};

for(var L in J){K[J[L].toString()]=L;
}return K;
},getKeyFromValue:function(bh,bi){{};

for(var bj in bh){if(bh.hasOwnProperty(bj)&&bh[bj]===bi){return bj;
}}return null;
},contains:function(b,c){{};
return this.getKeyFromValue(b,c)!==null;
},select:function(F,G){{};
return G[F];
},fromArray:function(d){{};
var e={};

for(var i=0,l=d.length;i<l;i++){{};
e[d[i].toString()]=true;
}return e;
}}});
})();
(function(){var o="Function",n="Boolean",m="Error",l="Number",k="Array",j="Date",i="RegExp",h="String",g="Object",f="qx.lang.Type",e="string";
qx.Bootstrap.define(f,{statics:{__l:{"[object String]":h,"[object Array]":k,"[object Object]":g,"[object RegExp]":i,"[object Number]":l,"[object Boolean]":n,"[object Date]":j,"[object Function]":o,"[object Error]":m},getClass:function(p){var q=Object.prototype.toString.call(p);
return (this.__l[q]||q.slice(8,-1));
},isString:function(a){return (a!==null&&(typeof a===e||this.getClass(a)==h||a instanceof String||(!!a&&!!a.$$isString)));
},isArray:function(b){return (b!==null&&(b instanceof Array||(b&&qx.Class.hasInterface(b.constructor,qx.data.IListData))||this.getClass(b)==k||(!!b&&!!b.$$isArray)));
},isObject:function(s){return (s!==undefined&&s!==null&&this.getClass(s)==g);
},isRegExp:function(d){return this.getClass(d)==i;
},isNumber:function(v){return (v!==null&&(this.getClass(v)==l||v instanceof Number));
},isBoolean:function(u){return (u!==null&&(this.getClass(u)==n||u instanceof Boolean));
},isDate:function(r){return (r!==null&&(this.getClass(r)==j||r instanceof Date));
},isError:function(c){return (c!==null&&(this.getClass(c)==m||c instanceof Error));
},isFunction:function(t){return this.getClass(t)==o;
}}});
})();
(function(){var q="qx.core.Aspect",p="before",o="*",n="static";
qx.Bootstrap.define(q,{statics:{__m:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__m;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==o)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var a=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,a);
}return a;
};

if(g!==n){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(b,c,d,name){this.__m.push({fcn:b,pos:c===p?-1:1,type:d,name:name});
}}});
})();
(function(){var ba="qx.aspects",Y="on",X=".",W="static",V="[Class ",U="]",T="toString",S="constructor",R="member",Q="$$init_",K=".prototype",P="destructor",N="extend",J="destruct",I="Class",M="off",L="qx.Class",O="qx.event.type.Data";
qx.Bootstrap.define(L,{statics:{define:function(name,bF){if(!bF){var bF={};
}if(bF.include&&!(bF.include instanceof Array)){bF.include=[bF.include];
}if(bF.implement&&!(bF.implement instanceof Array)){bF.implement=[bF.implement];
}if(!bF.hasOwnProperty(N)&&!bF.type){bF.type=W;
}{};
var bH=this.__r(name,bF.type,bF.extend,bF.statics,bF.construct,bF.destruct);
if(bF.extend){if(bF.properties){this.__t(bH,bF.properties,true);
}if(bF.members){this.__v(bH,bF.members,true,true,false);
}if(bF.events){this.__s(bH,bF.events,true);
}if(bF.include){for(var i=0,l=bF.include.length;i<l;i++){this.__y(bH,bF.include[i],false);
}}}if(bF.settings){for(var bG in bF.settings){qx.core.Setting.define(bG,bF.settings[bG]);
}}if(bF.variants){for(var bG in bF.variants){qx.core.Variant.define(bG,bF.variants[bG].allowedValues,bF.variants[bG].defaultValue);
}}if(bF.implement){for(var i=0,l=bF.implement.length;i<l;i++){this.__x(bH,bF.implement[i]);
}}{};
if(bF.defer){bF.defer.self=bH;
bF.defer(bH,bH.prototype,{add:function(name,cf){var cg={};
cg[name]=cf;
qx.Class.__t(bH,cg,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bo,bp){{};
qx.Class.__y(bo,bp,false);
},patch:function(m,n){{};
qx.Class.__y(m,n,true);
},isSubClassOf:function(bQ,bR){if(!bQ){return false;
}
if(bQ==bR){return true;
}
if(bQ.prototype instanceof bR){return true;
}return false;
},getPropertyDefinition:function(k,name){while(k){if(k.$$properties&&k.$$properties[name]){return k.$$properties[name];
}k=k.superclass;
}return null;
},getProperties:function(bV){var bW=[];

while(bV){if(bV.$$properties){bW.push.apply(bW,qx.lang.Object.getKeys(bV.$$properties));
}bV=bV.superclass;
}return bW;
},getByProperty:function(bw,name){while(bw){if(bw.$$properties&&bw.$$properties[name]){return bw;
}bw=bw.superclass;
}return null;
},hasProperty:function(C,name){return !!this.getPropertyDefinition(C,name);
},getEventType:function(bI,name){var bI=bI.constructor;

while(bI.superclass){if(bI.$$events&&bI.$$events[name]!==undefined){return bI.$$events[name];
}bI=bI.superclass;
}return null;
},supportsEvent:function(bb,name){return !!this.getEventType(bb,name);
},hasOwnMixin:function(bS,bT){return bS.$$includes&&bS.$$includes.indexOf(bT)!==-1;
},getByMixin:function(bK,bL){var bM,i,l;

while(bK){if(bK.$$includes){bM=bK.$$flatIncludes;

for(i=0,l=bM.length;i<l;i++){if(bM[i]===bL){return bK;
}}}bK=bK.superclass;
}return null;
},getMixins:function(ch){var ci=[];

while(ch){if(ch.$$includes){ci.push.apply(ci,ch.$$flatIncludes);
}ch=ch.superclass;
}return ci;
},hasMixin:function(w,x){return !!this.getByMixin(w,x);
},hasOwnInterface:function(A,B){return A.$$implements&&A.$$implements.indexOf(B)!==-1;
},getByInterface:function(bx,by){var bz,i,l;

while(bx){if(bx.$$implements){bz=bx.$$flatImplements;

for(i=0,l=bz.length;i<l;i++){if(bz[i]===by){return bx;
}}}bx=bx.superclass;
}return null;
},getInterfaces:function(y){var z=[];

while(y){if(y.$$implements){z.push.apply(z,y.$$flatImplements);
}y=y.superclass;
}return z;
},hasInterface:function(bD,bE){return !!this.getByInterface(bD,bE);
},implementsInterface:function(b,c){var d=b.constructor;

if(this.hasInterface(d,c)){return true;
}
try{qx.Interface.assertObject(b,c);
return true;
}catch(bJ){}
try{qx.Interface.assert(d,c,false);
return true;
}catch(cl){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return V+this.classname+U;
},$$registry:qx.Bootstrap.$$registry,__n:null,__o:null,__p:function(){},__q:function(){},__r:function(name,bc,bd,be,bf,bg){var bl;

if(!bd&&qx.core.Variant.isSet(ba,M)){bl=be||{};
qx.Bootstrap.setDisplayNames(bl,name);
}else{bl={};

if(bd){if(!bf){bf=this.__z();
}bl=this.__B(bf,name,bc);
qx.Bootstrap.setDisplayName(bf,name,S);
}if(be){qx.Bootstrap.setDisplayNames(be,name);
var bm;

for(var i=0,a=qx.lang.Object.getKeys(be),l=a.length;i<l;i++){bm=a[i];
var bi=be[bm];

if(qx.core.Variant.isSet(ba,Y)){if(bi instanceof Function){bi=qx.core.Aspect.wrap(name+X+bm,bi,W);
}bl[bm]=bi;
}else{bl[bm]=bi;
}}}}var bk=qx.Bootstrap.createNamespace(name,bl,false);
bl.name=bl.classname=name;
bl.basename=bk;
bl.$$type=I;

if(bc){bl.$$classtype=bc;
}if(!bl.hasOwnProperty(T)){bl.toString=this.genericToString;
}
if(bd){var bn=bd.prototype;
var bh=this.__A();
bh.prototype=bn;
var bj=new bh;
bl.prototype=bj;
bj.name=bj.classname=name;
bj.basename=bk;
bf.base=bl.superclass=bd;
bf.self=bl.constructor=bj.constructor=bl;
if(bg){if(qx.core.Variant.isSet(ba,Y)){bg=qx.core.Aspect.wrap(name,bg,P);
}bl.$$destructor=bg;
qx.Bootstrap.setDisplayName(bg,name,J);
}}this.$$registry[name]=bl;
return bl;
},__s:function(bs,bt,bu){var bv,bv;
{};

if(bs.$$events){for(var bv in bt){bs.$$events[bv]=bt[bv];
}}else{bs.$$events=bt;
}},__t:function(e,f,g){var j;

if(g===undefined){g=false;
}var h=!!e.$$propertiesAttached;

for(var name in f){j=f[name];
{};
j.name=name;
if(!j.refine){if(e.$$properties===undefined){e.$$properties={};
}e.$$properties[name]=j;
}if(j.init!==undefined){e.prototype[Q+name]=j.init;
}if(j.event!==undefined){var event={};
event[j.event]=O;
this.__s(e,event,g);
}if(j.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(h){qx.core.Property.attachMethods(e,name,j);
}}},__u:null,__v:function(o,p,q,r,s){var t=o.prototype;
var v,u;
qx.Bootstrap.setDisplayNames(p,o.classname+K);

for(var i=0,a=qx.lang.Object.getKeys(p),l=a.length;i<l;i++){v=a[i];
u=p[v];
{};
if(r!==false&&u instanceof Function&&u.$$type==null){if(s==true){u=this.__w(u,t[v]);
}else{if(t[v]){u.base=t[v];
}u.self=o;
}
if(qx.core.Variant.isSet(ba,Y)){u=qx.core.Aspect.wrap(o.classname+X+v,u,R);
}}t[v]=u;
}},__w:function(cj,ck){if(ck){return function(){var br=cj.base;
cj.base=ck;
var bq=cj.apply(this,arguments);
cj.base=br;
return bq;
};
}else{return cj;
}},__x:function(bA,bB){{};
var bC=qx.Interface.flatten([bB]);

if(bA.$$implements){bA.$$implements.push(bB);
bA.$$flatImplements.push.apply(bA.$$flatImplements,bC);
}else{bA.$$implements=[bB];
bA.$$flatImplements=bC;
}},__y:function(D,E,F){{};

if(this.hasMixin(D,E)){qx.log.Logger.warn('Mixin "'+E.name+'" is already included into Class "'+D.classname+'" by class: '+this.getByMixin(D,E).classname+'!');
return;
}var H=qx.Mixin.flatten([E]);
var G;

for(var i=0,l=H.length;i<l;i++){G=H[i];
if(G.$$events){this.__s(D,G.$$events,F);
}if(G.$$properties){this.__t(D,G.$$properties,F);
}if(G.$$members){this.__v(D,G.$$members,F,F,F);
}}if(D.$$includes){D.$$includes.push(E);
D.$$flatIncludes.push.apply(D.$$flatIncludes,H);
}else{D.$$includes=[E];
D.$$flatIncludes=H;
}},__z:function(){function bU(){arguments.callee.base.apply(this,arguments);
}return bU;
},__A:function(){return function(){};
},__B:function(bX,name,bY){var cb=function(){var ce=arguments.callee.constructor;
{};
if(!ce.$$propertiesAttached){qx.core.Property.attach(ce);
}var cd=ce.$$original.apply(this,arguments);
if(ce.$$includes){var cc=ce.$$flatIncludes;

for(var i=0,l=cc.length;i<l;i++){if(cc[i].$$constructor){cc[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return cd;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var ca=qx.core.Aspect.wrap(name,cb,"constructor");
cb.$$original=bX;
cb.constructor=ca;
cb=ca;
}if(bY==="singleton"){cb.getInstance=this.getInstance;
}cb.$$original=bX;
bX.wrapper=cb;
return cb;
}},defer:function(bN){if(qx.core.Variant.isSet(ba,Y)){for(var bO in qx.Bootstrap.$$registry){var bN=qx.Bootstrap.$$registry[bO];

for(var bP in bN){if(bN[bP] instanceof Function){bN[bP]=qx.core.Aspect.wrap(bO+X+bP,bN[bP],W);
}}}}}});
})();
(function(){var s="]",r="Theme",q="[Theme ",p="qx.Theme";
qx.Class.define(p,{statics:{define:function(name,t){if(!t){var t={};
}t.include=this.__C(t.include);
t.patch=this.__C(t.patch);
{};
var u={$$type:r,name:name,title:t.title,toString:this.genericToString};
if(t.extend){u.supertheme=t.extend;
}u.basename=qx.Bootstrap.createNamespace(name,u);
this.__G(u,t);
this.__D(u,t);
this.__E(u,t);
this.$$registry[name]=u;
for(var i=0,a=t.include,l=a.length;i<l;i++){this.include(u,a[i]);
}
for(var i=0,a=t.patch,l=a.length;i<l;i++){this.patch(u,a[i]);
}},__C:function(K){if(!K){return [];
}
if(qx.lang.Type.isArray(K)){return K;
}else{return [K];
}},__D:function(x,y){var z;
{};

if(y.resource){x.resource=y.resource;
}else if(y.extend&&y.extend.resource){x.resource=y.extend.resource;
}},__E:function(H,I){var J=I.aliases||{};

if(I.extend&&I.extend.aliases){qx.lang.Object.mergeWith(J,I.extend.aliases,false);
}H.aliases=J;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return q+this.name+s;
},__F:function(v){for(var i=0,w=this.__H,l=w.length;i<l;i++){if(v[w[i]]){return w[i];
}}},__G:function(A,B){var E=this.__F(B);
if(B.extend&&!E){E=B.extend.type;
}A.type=E||"other";
if(!E){return;
}var G=function(){};
if(B.extend){G.prototype=new B.extend.$$clazz;
}var F=G.prototype;
var D=B[E];
for(var C in D){F[C]=D[C];
if(F[C].base){{};
F[C].base=B.extend;
}}A.$$clazz=G;
A[E]=new G;
},$$registry:{},__H:["colors","borders","decorations","fonts","icons","widgets","appearances","meta"],__I:null,__J:null,__K:function(){},patch:function(h,j){var m=this.__F(j);

if(m!==this.__F(h)){throw new Error("The mixins '"+h.name+"' are not compatible '"+j.name+"'!");
}var k=j[m];
var n=h.$$clazz.prototype;

for(var o in k){n[o]=k[o];
}},include:function(b,c){var e=c.type;

if(e!==b.type){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b.$$clazz.prototype;

for(var g in d){if(f[g]!==undefined){continue;
}f[g]=d[g];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="santiglaus.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var ct=';',cs='computed=this.',cr='=value;',cq='this.',cp='if(this.',co='!==undefined)',cn='delete this.',cm="set",cl="setThemed",ck='}',bY="init",bX="setRuntime",bW='else if(this.',bV='return this.',bU="string",bT="boolean",bS="resetThemed",bR='!==undefined){',bQ='=true;',bP="resetRuntime",cA="reset",cB="refresh",cy='old=this.',cz='else ',cw='if(old===undefined)old=this.',cx='old=computed=this.',cu=' of an instance of ',cv=";",cC='if(old===computed)return value;',cD='if(old===undefined)old=null;',cd='(value);',cc=' is not (yet) ready!");',cf='===value)return value;',ce='return init;',ch='var init=this.',cg="Error in property ",cj='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',ci='.validate.call(this, value);',cb='else{',ca=" in method ",bc='=computed;',bd='(backup);',be='if(computed===inherit){',bf="inherit",bg='if(value===undefined)prop.error(this,2,"',bh='var computed, old=this.',bi='else if(computed===undefined)',bj="': ",bk=" of class ",bl='===undefined)return;',cH="')){",cG='else this.',cF='value=this.',cE='","',cL='if(init==qx.core.Property.$$inherit)init=null;',cK='var inherit=prop.$$inherit;',cJ='var computed, old;',cI='computed=undefined;delete this.',cN='",value);',cM='computed=value;',bA=';}',bB='){',by='if(computed===undefined||computed===inherit){',bz='!==inherit){',bE='(computed, old, "',bF='return value;',bC='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bD="if(reg.hasListener(this, '",bw=')a[i].',bx='.$$properties.',bt="var reg=qx.event.Registration;",bs='return null;',bv='");',bu='var pa=this.getLayoutParent();if(pa)computed=pa.',bp='!==undefined&&',bo="', qx.event.type.Data, [computed, old]",br='var backup=computed;',bq='}else{',bn="object",bm='if(computed===undefined)computed=null;',bK='if(a[i].',bL='throw new Error("Property ',bM=")}",bN='var prop=qx.core.Property;',bG=" with incoming value '",bH='if(computed===undefined||computed==inherit)computed=null;',bI='if((computed===undefined||computed===inherit)&&',bJ="reg.fireEvent(this, '",bO="qx.core.Property";
qx.Class.define(bO,{statics:{__L:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__M:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:bf,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bU,dispose:bT,inheritable:bT,nullable:bT,themeable:bT,refine:bT,init:null,apply:bU,event:bU,check:null,transform:bU,deferredInit:bT,validate:null},$$allowedGroupKeys:{name:bU,group:bn,mode:bU,themeable:bT},$$inheritable:{},refresh:function(cV){var parent=cV.getLayoutParent();

if(parent){var cY=cV.constructor;
var db=this.$$store.inherit;
var da=this.$$store.init;
var cX=this.$$method.refresh;
var dc;
var cW;
{};

while(cY){dc=cY.$$properties;

if(dc){for(var name in this.$$inheritable){if(dc[name]&&cV[cX[name]]){cW=parent[db[name]];

if(cW===undefined){cW=parent[da[name]];
}{};
cV[cX[name]](cW);
}}}cY=cY.superclass;
}}},attach:function(u){var v=u.$$properties;

if(v){for(var name in v){this.attachMethods(u,name,v[name]);
}}u.$$propertiesAttached=true;
},attachMethods:function(s,name,t){t.group?this.__N(s,t,name):this.__O(s,t,name);
},__N:function(I,J,name){var Q=qx.lang.String.firstUp(name);
var P=I.prototype;
var R=J.themeable===true;
{};
var S=[];
var M=[];

if(R){var K=[];
var O=[];
}var N="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
S.push(N);

if(R){K.push(N);
}
if(J.mode=="shorthand"){var L="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
S.push(L);

if(R){K.push(L);
}}
for(var i=0,a=J.group,l=a.length;i<l;i++){{};
S.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
M.push("this.",this.$$method.reset[a[i]],"();");

if(R){{};
K.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
O.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+Q;
P[this.$$method.set[name]]=new Function(S.join(""));
this.$$method.reset[name]="reset"+Q;
P[this.$$method.reset[name]]=new Function(M.join(""));

if(R){this.$$method.setThemed[name]="setThemed"+Q;
P[this.$$method.setThemed[name]]=new Function(K.join(""));
this.$$method.resetThemed[name]="resetThemed"+Q;
P[this.$$method.resetThemed[name]]=new Function(O.join(""));
}},__O:function(w,x,name){var z=qx.lang.String.firstUp(name);
var B=w.prototype;
{};
if(x.dispose===undefined&&typeof x.check==="string"){x.dispose=this.__M[x.check]||qx.Class.isDefined(x.check)||qx.Interface.isDefined(x.check);
}var A=this.$$method;
var y=this.$$store;
y.runtime[name]="$$runtime_"+name;
y.user[name]="$$user_"+name;
y.theme[name]="$$theme_"+name;
y.init[name]="$$init_"+name;
y.inherit[name]="$$inherit_"+name;
y.useinit[name]="$$useinit_"+name;
A.get[name]="get"+z;
B[A.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,w,name,"get");
};
A.set[name]="set"+z;
B[A.set[name]]=function(c){return qx.core.Property.executeOptimizedSetter(this,w,name,"set",arguments);
};
A.reset[name]="reset"+z;
B[A.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,w,name,"reset");
};

if(x.inheritable||x.apply||x.event||x.deferredInit){A.init[name]="init"+z;
B[A.init[name]]=function(d){return qx.core.Property.executeOptimizedSetter(this,w,name,"init",arguments);
};
}
if(x.inheritable){A.refresh[name]="refresh"+z;
B[A.refresh[name]]=function(e){return qx.core.Property.executeOptimizedSetter(this,w,name,"refresh",arguments);
};
}A.setRuntime[name]="setRuntime"+z;
B[A.setRuntime[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,w,name,"setRuntime",arguments);
};
A.resetRuntime[name]="resetRuntime"+z;
B[A.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,w,name,"resetRuntime");
};

if(x.themeable){A.setThemed[name]="setThemed"+z;
B[A.setThemed[name]]=function(bb){return qx.core.Property.executeOptimizedSetter(this,w,name,"setThemed",arguments);
};
A.resetThemed[name]="resetThemed"+z;
B[A.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,w,name,"resetThemed");
};
}
if(x.check==="Boolean"){B["toggle"+z]=new Function("return this."+A.set[name]+"(!this."+A.get[name]+"())");
B["is"+z]=new Function("return this."+A.get[name]+"()");
}},__P:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(T,U,V,W,X){var Y=T.constructor.classname;
var ba=cg+V+bk+Y+ca+this.$$method[W][V]+bG+X+bj;
throw new Error(ba+(this.__P[U]||"Unknown reason: "+U));
},__Q:function(C,D,name,E,F,G){var H=this.$$method[E][name];
{D[H]=new Function("value",F.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){D[H]=qx.core.Aspect.wrap(C.classname+"."+H,D[H],"property");
}qx.Bootstrap.setDisplayName(D[H],C.classname+".prototype",H);
if(G===undefined){return C[H]();
}else{return C[H](G[0]);
}},executeOptimizedGetter:function(cO,cP,name,cQ){var cS=cP.$$properties[name];
var cU=cP.prototype;
var cR=[];
var cT=this.$$store;
cR.push(cp,cT.runtime[name],co);
cR.push(bV,cT.runtime[name],ct);

if(cS.inheritable){cR.push(bW,cT.inherit[name],co);
cR.push(bV,cT.inherit[name],ct);
cR.push(cz);
}cR.push(cp,cT.user[name],co);
cR.push(bV,cT.user[name],ct);

if(cS.themeable){cR.push(bW,cT.theme[name],co);
cR.push(bV,cT.theme[name],ct);
}
if(cS.deferredInit&&cS.init===undefined){cR.push(bW,cT.init[name],co);
cR.push(bV,cT.init[name],ct);
}cR.push(cz);

if(cS.init!==undefined){if(cS.inheritable){cR.push(ch,cT.init[name],ct);

if(cS.nullable){cR.push(cL);
}else if(cS.init!==undefined){cR.push(bV,cT.init[name],ct);
}else{cR.push(bC,name,cu,cP.classname,cc);
}cR.push(ce);
}else{cR.push(bV,cT.init[name],ct);
}}else if(cS.inheritable||cS.nullable){cR.push(bs);
}else{cR.push(bL,name,cu,cP.classname,cc);
}return this.__Q(cO,cU,name,cQ,cR);
},executeOptimizedSetter:function(f,g,name,h,j){var q=g.$$properties[name];
var p=g.prototype;
var m=[];
var k=h===cm||h===cl||h===bX||(h===bY&&q.init===undefined);
var n=h===cA||h===bS||h===bP;
var o=q.apply||q.event||q.inheritable;

if(h===bX||h===bP){var r=this.$$store.runtime[name];
}else if(h===cl||h===bS){var r=this.$$store.theme[name];
}else if(h===bY){var r=this.$$store.init[name];
}else{var r=this.$$store.user[name];
}{if(!q.nullable||q.check||q.inheritable){m.push(bN);
}if(h===cm){m.push(bg,name,cE,h,cN);
}};
if(k){if(q.transform){m.push(cF,q.transform,cd);
}if(q.validate){if(typeof q.validate===bU){m.push(cq,q.validate,cd);
}else if(q.validate instanceof Function){m.push(g.classname,bx,name);
m.push(ci);
}}}if(o){if(k){m.push(cp,r,cf);
}else if(n){m.push(cp,r,bl);
}}if(q.inheritable){m.push(cK);
}{};

if(!o){if(h===bX){m.push(cq,this.$$store.runtime[name],cr);
}else if(h===bP){m.push(cp,this.$$store.runtime[name],co);
m.push(cn,this.$$store.runtime[name],ct);
}else if(h===cm){m.push(cq,this.$$store.user[name],cr);
}else if(h===cA){m.push(cp,this.$$store.user[name],co);
m.push(cn,this.$$store.user[name],ct);
}else if(h===cl){m.push(cq,this.$$store.theme[name],cr);
}else if(h===bS){m.push(cp,this.$$store.theme[name],co);
m.push(cn,this.$$store.theme[name],ct);
}else if(h===bY&&k){m.push(cq,this.$$store.init[name],cr);
}}else{if(q.inheritable){m.push(bh,this.$$store.inherit[name],ct);
}else{m.push(cJ);
}m.push(cp,this.$$store.runtime[name],bR);

if(h===bX){m.push(cs,this.$$store.runtime[name],cr);
}else if(h===bP){m.push(cn,this.$$store.runtime[name],ct);
m.push(cp,this.$$store.user[name],co);
m.push(cs,this.$$store.user[name],ct);
m.push(bW,this.$$store.theme[name],co);
m.push(cs,this.$$store.theme[name],ct);
m.push(bW,this.$$store.init[name],bR);
m.push(cs,this.$$store.init[name],ct);
m.push(cq,this.$$store.useinit[name],bQ);
m.push(ck);
}else{m.push(cx,this.$$store.runtime[name],ct);
if(h===cm){m.push(cq,this.$$store.user[name],cr);
}else if(h===cA){m.push(cn,this.$$store.user[name],ct);
}else if(h===cl){m.push(cq,this.$$store.theme[name],cr);
}else if(h===bS){m.push(cn,this.$$store.theme[name],ct);
}else if(h===bY&&k){m.push(cq,this.$$store.init[name],cr);
}}m.push(ck);
m.push(bW,this.$$store.user[name],bR);

if(h===cm){if(!q.inheritable){m.push(cy,this.$$store.user[name],ct);
}m.push(cs,this.$$store.user[name],cr);
}else if(h===cA){if(!q.inheritable){m.push(cy,this.$$store.user[name],ct);
}m.push(cn,this.$$store.user[name],ct);
m.push(cp,this.$$store.runtime[name],co);
m.push(cs,this.$$store.runtime[name],ct);
m.push(cp,this.$$store.theme[name],co);
m.push(cs,this.$$store.theme[name],ct);
m.push(bW,this.$$store.init[name],bR);
m.push(cs,this.$$store.init[name],ct);
m.push(cq,this.$$store.useinit[name],bQ);
m.push(ck);
}else{if(h===bX){m.push(cs,this.$$store.runtime[name],cr);
}else if(q.inheritable){m.push(cs,this.$$store.user[name],ct);
}else{m.push(cx,this.$$store.user[name],ct);
}if(h===cl){m.push(cq,this.$$store.theme[name],cr);
}else if(h===bS){m.push(cn,this.$$store.theme[name],ct);
}else if(h===bY&&k){m.push(cq,this.$$store.init[name],cr);
}}m.push(ck);
if(q.themeable){m.push(bW,this.$$store.theme[name],bR);

if(!q.inheritable){m.push(cy,this.$$store.theme[name],ct);
}
if(h===bX){m.push(cs,this.$$store.runtime[name],cr);
}else if(h===cm){m.push(cs,this.$$store.user[name],cr);
}else if(h===cl){m.push(cs,this.$$store.theme[name],cr);
}else if(h===bS){m.push(cn,this.$$store.theme[name],ct);
m.push(cp,this.$$store.init[name],bR);
m.push(cs,this.$$store.init[name],ct);
m.push(cq,this.$$store.useinit[name],bQ);
m.push(ck);
}else if(h===bY){if(k){m.push(cq,this.$$store.init[name],cr);
}m.push(cs,this.$$store.theme[name],ct);
}else if(h===cB){m.push(cs,this.$$store.theme[name],ct);
}m.push(ck);
}m.push(bW,this.$$store.useinit[name],bB);

if(!q.inheritable){m.push(cy,this.$$store.init[name],ct);
}
if(h===bY){if(k){m.push(cs,this.$$store.init[name],cr);
}else{m.push(cs,this.$$store.init[name],ct);
}}else if(h===cm||h===bX||h===cl||h===cB){m.push(cn,this.$$store.useinit[name],ct);

if(h===bX){m.push(cs,this.$$store.runtime[name],cr);
}else if(h===cm){m.push(cs,this.$$store.user[name],cr);
}else if(h===cl){m.push(cs,this.$$store.theme[name],cr);
}else if(h===cB){m.push(cs,this.$$store.init[name],ct);
}}m.push(ck);
if(h===cm||h===bX||h===cl||h===bY){m.push(cb);

if(h===bX){m.push(cs,this.$$store.runtime[name],cr);
}else if(h===cm){m.push(cs,this.$$store.user[name],cr);
}else if(h===cl){m.push(cs,this.$$store.theme[name],cr);
}else if(h===bY){if(k){m.push(cs,this.$$store.init[name],cr);
}else{m.push(cs,this.$$store.init[name],ct);
}m.push(cq,this.$$store.useinit[name],bQ);
}m.push(ck);
}}
if(q.inheritable){m.push(by);

if(h===cB){m.push(cM);
}else{m.push(bu,this.$$store.inherit[name],ct);
}m.push(bI);
m.push(cq,this.$$store.init[name],bp);
m.push(cq,this.$$store.init[name],bz);
m.push(cs,this.$$store.init[name],ct);
m.push(cq,this.$$store.useinit[name],bQ);
m.push(bq);
m.push(cn,this.$$store.useinit[name],bA);
m.push(ck);
m.push(cC);
m.push(be);
m.push(cI,this.$$store.inherit[name],ct);
m.push(ck);
m.push(bi);
m.push(cn,this.$$store.inherit[name],ct);
m.push(cG,this.$$store.inherit[name],bc);
m.push(br);
if(q.init!==undefined&&h!==bY){m.push(cw,this.$$store.init[name],cv);
}else{m.push(cD);
}m.push(bH);
}else if(o){if(h!==cm&&h!==bX&&h!==cl){m.push(bm);
}m.push(cC);
if(q.init!==undefined&&h!==bY){m.push(cw,this.$$store.init[name],cv);
}else{m.push(cD);
}}if(o){if(q.apply){m.push(cq,q.apply,bE,name,bv);
}if(q.event){m.push(bt,bD,q.event,cH,bJ,q.event,bo,bM);
}if(q.inheritable&&p._getChildren){m.push(cj);
m.push(bK,this.$$method.refresh[name],bw,this.$$method.refresh[name],bd);
m.push(ck);
}}if(k){m.push(bF);
}return this.__Q(f,p,name,h,m,j);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var g="$$hash",f="qx.core.ObjectRegistry";
qx.Bootstrap.define(f,{statics:{inShutDown:false,__R:{},__S:0,__T:[],register:function(o){var r=this.__R;

if(!r){return;
}var q=o.$$hash;

if(q==null){var p=this.__T;

if(p.length>0){q=p.pop();
}else{q=(this.__S++).toString(36);
}o.$$hash=q;
}{};
r[q]=o;
},unregister:function(c){var d=c.$$hash;

if(d==null){return;
}var e=this.__R;

if(e&&e[d]){delete e[d];
this.__T.push(d);
}try{delete c.$$hash;
}catch(h){if(c.removeAttribute){c.removeAttribute(g);
}}},toHashCode:function(x){{};
var z=x.$$hash;

if(z!=null){return z;
}var y=this.__T;

if(y.length>0){z=y.pop();
}else{z=(this.__S++).toString(36);
}return x.$$hash=z;
},clearHashCode:function(k){{};
var m=k.$$hash;

if(m!=null){this.__T.push(m);
try{delete k.$$hash;
}catch(n){if(k.removeAttribute){k.removeAttribute(g);
}}}},fromHashCode:function(w){return this.__R[w]||null;
},shutdown:function(){this.inShutDown=true;
var t=this.__R;
var v=[];

for(var u in t){v.push(u);
}v.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var s,i=0,l=v.length;

while(true){try{for(;i<l;i++){u=v[i];
s=t[u];

if(s&&s.dispose){s.dispose();
}}}catch(j){qx.log.Logger.error(this,"Could not dispose object "+s.toString()+": "+j);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__R;
},getRegistry:function(){return this.__R;
}}});
})();
(function(){var o="qx.Mixin",n=".prototype",m="constructor",k="[Mixin ",j="]",h="destruct",g="Mixin";
qx.Class.define(o,{statics:{define:function(name,a){if(a){if(a.include&&!(a.include instanceof Array)){a.include=[a.include];
}{};
var c=a.statics?a.statics:{};
qx.Bootstrap.setDisplayNames(c,name);

for(var b in c){if(c[b] instanceof Function){c[b].$$mixin=c;
}}if(a.construct){c.$$constructor=a.construct;
qx.Bootstrap.setDisplayName(a.construct,name,m);
}
if(a.include){c.$$includes=a.include;
}
if(a.properties){c.$$properties=a.properties;
}
if(a.members){c.$$members=a.members;
qx.Bootstrap.setDisplayNames(a.members,name+n);
}
for(var b in c.$$members){if(c.$$members[b] instanceof Function){c.$$members[b].$$mixin=c;
}}
if(a.events){c.$$events=a.events;
}
if(a.destruct){c.$$destructor=a.destruct;
qx.Bootstrap.setDisplayName(a.destruct,name,h);
}}else{var c={};
}c.$$type=g;
c.name=name;
c.toString=this.genericToString;
c.basename=qx.Bootstrap.createNamespace(name,c);
this.$$registry[name]=c;
return c;
},checkCompatibility:function(r){var u=this.flatten(r);
var v=u.length;

if(v<2){return true;
}var y={};
var x={};
var w={};
var t;

for(var i=0;i<v;i++){t=u[i];

for(var s in t.events){if(w[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+w[s]+'" in member "'+s+'"!');
}w[s]=t.name;
}
for(var s in t.properties){if(y[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+y[s]+'" in property "'+s+'"!');
}y[s]=t.name;
}
for(var s in t.members){if(x[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+x[s]+'" in member "'+s+'"!');
}x[s]=t.name;
}}return true;
},isCompatible:function(d,e){var f=qx.Class.getMixins(e);
f.push(d);
return qx.Mixin.checkCompatibility(f);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(p){if(!p){return [];
}var q=p.concat();

for(var i=0,l=p.length;i<l;i++){if(p[i].$$includes){q.push.apply(q,this.flatten(p[i].$$includes));
}}return q;
},genericToString:function(){return k+this.name+j;
},$$registry:{},__U:null,__V:function(){}}});
})();
(function(){var f="qx.data.MBinding";
qx.Mixin.define(f,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(a){qx.data.SingleValueBinding.removeBindingFromObject(this,a);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var t="qx.client",s="on",r="mousedown",q="qx.bom.Event",p="mouseover",o="HTMLEvents";
qx.Bootstrap.define(q,{statics:{addNativeListener:qx.core.Variant.select(t,{"mshtml":function(u,v,w){u.attachEvent(s+v,w);
},"default":function(f,g,h){f.addEventListener(g,h,false);
}}),removeNativeListener:qx.core.Variant.select(t,{"mshtml":function(i,j,k){i.detachEvent(s+j,k);
},"default":function(a,b,c){a.removeEventListener(b,c,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(t,{"mshtml":function(e){if(e.type===p){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(t,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==r&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(x){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(d){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(l,m){if(document.createEventObject){var n=document.createEventObject();
return l.fireEvent(s+m,n);
}else{var n=document.createEvent(o);
n.initEvent(m,true,true);
return !l.dispatchEvent(n);
}}}});
})();
(function(){var y="|bubble",x="|capture",w="|",v="_",u="unload",t="UNKNOWN_",s="DOM_",r="__Y",q="c",p="__ba",m="WIN_",o="capture",n="qx.event.Manager",k="QX_";
qx.Bootstrap.define(n,{construct:function(O){this.__W=O;
if(O.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(O,u,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(O,u,arguments.callee);
self.dispose();
}));
}this.__X={};
this.__Y={};
this.__ba={};
this.__bb={};
},statics:{__bc:0,getNextUniqueId:function(){return (this.__bc++).toString(36);
}},members:{__X:null,__ba:null,__bd:null,__Y:null,__bb:null,__W:null,getWindow:function(){return this.__W;
},getHandler:function(bP){var bQ=this.__Y[bP.classname];

if(bQ){return bQ;
}return this.__Y[bP.classname]=new bP(this);
},getDispatcher:function(cu){var cv=this.__ba[cu.classname];

if(cv){return cv;
}return this.__ba[cu.classname]=new cu(this);
},getListeners:function(cw,cx,cy){var cz=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cB=this.__X[cz];

if(!cB){return null;
}var cC=cx+(cy?x:y);
var cA=cB[cC];
return cA?cA.concat():null;
},serializeListeners:function(bl){var bs=bl.$$hash||qx.core.ObjectRegistry.toHashCode(bl);
var bu=this.__X[bs];
var bq=[];

if(bu){var bo,bt,bm,bp,br;

for(var bn in bu){bo=bn.indexOf(w);
bt=bn.substring(0,bo);
bm=bn.charAt(bo+1)==q;
bp=bu[bn];

for(var i=0,l=bp.length;i<l;i++){br=bp[i];
bq.push({self:br.context,handler:br.handler,type:bt,capture:bm});
}}}return bq;
},toggleAttachedEvents:function(cl,cm){var cr=cl.$$hash||qx.core.ObjectRegistry.toHashCode(cl);
var ct=this.__X[cr];

if(ct){var co,cs,cn,cp;

for(var cq in ct){co=cq.indexOf(w);
cs=cq.substring(0,co);
cn=cq.charCodeAt(co+1)===99;
cp=ct[cq];

if(cm){this.__be(cl,cs,cn);
}else{this.__bf(cl,cs,cn);
}}}},hasListener:function(ce,cf,cg){{};
var ch=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cj=this.__X[ch];

if(!cj){return false;
}var ck=cf+(cg?x:y);
var ci=cj[ck];
return ci&&ci.length>0;
},importListeners:function(a,b){{};
var h=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var j=this.__X[h]={};
var e=qx.event.Manager;

for(var c in b){var f=b[c];
var g=f.type+(f.capture?x:y);
var d=j[g];

if(!d){d=j[g]=[];
this.__be(a,f.type,f.capture);
}d.push({handler:f.listener,context:f.self,unique:f.unique||(e.__bc++).toString(36)});
}},addListener:function(z,A,B,self,C){var G;
{};
var H=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var J=this.__X[H];

if(!J){J=this.__X[H]={};
}var F=A+(C?x:y);
var E=J[F];

if(!E){E=J[F]=[];
}if(E.length===0){this.__be(z,A,C);
}var I=(qx.event.Manager.__bc++).toString(36);
var D={handler:B,context:self,unique:I};
E.push(D);
return F+w+I;
},findHandler:function(bC,bD){var bN=false,bG=false,bO=false;
var bM;

if(bC.nodeType===1){bN=true;
bM=s+bC.tagName.toLowerCase()+v+bD;
}else if(bC==this.__W){bG=true;
bM=m+bD;
}else if(bC.classname){bO=true;
bM=k+bC.classname+v+bD;
}else{bM=t+bC+v+bD;
}var bI=this.__bb;

if(bI[bM]){return bI[bM];
}var bL=qx.event.Registration.getHandlers();
var bH=qx.event.IEventHandler;
var bJ,bK,bF,bE;

for(var i=0,l=bL.length;i<l;i++){bJ=bL[i];
bF=bJ.SUPPORTED_TYPES;

if(bF&&!bF[bD]){continue;
}bE=bJ.TARGET_CHECK;

if(bE){if(!bN&&bE===bH.TARGET_DOMNODE){continue;
}else if(!bG&&bE===bH.TARGET_WINDOW){continue;
}else if(!bO&&bE===bH.TARGET_OBJECT){continue;
}}bK=this.getHandler(bL[i]);

if(bJ.IGNORE_CAN_HANDLE||bK.canHandleEvent(bC,bD)){bI[bM]=bK;
return bK;
}}return null;
},__be:function(K,L,M){var N=this.findHandler(K,L);

if(N){N.registerEvent(K,L,M);
return;
}{};
},removeListener:function(P,Q,R,self,S){var W;
{};
var X=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var Y=this.__X[X];

if(!Y){return false;
}var T=Q+(S?x:y);
var U=Y[T];

if(!U){return false;
}var V;

for(var i=0,l=U.length;i<l;i++){V=U[i];

if(V.handler===R&&V.context===self){qx.lang.Array.removeAt(U,i);

if(U.length==0){this.__bf(P,Q,S);
}return true;
}}return false;
},removeListenerById:function(bR,bS){var bY;
{};
var bW=bS.split(w);
var cc=bW[0];
var bT=bW[1].charCodeAt(0)==99;
var cb=bW[2];
var ca=bR.$$hash||qx.core.ObjectRegistry.toHashCode(bR);
var cd=this.__X[ca];

if(!cd){return false;
}var bX=cc+(bT?x:y);
var bV=cd[bX];

if(!bV){return false;
}var bU;

for(var i=0,l=bV.length;i<l;i++){bU=bV[i];

if(bU.unique===cb){qx.lang.Array.removeAt(bV,i);

if(bV.length==0){this.__bf(bR,cc,bT);
}return true;
}}return false;
},removeAllListeners:function(be){var bi=be.$$hash||qx.core.ObjectRegistry.toHashCode(be);
var bk=this.__X[bi];

if(!bk){return false;
}var bg,bj,bf;

for(var bh in bk){if(bk[bh].length>0){bg=bh.split(w);
bj=bg[0];
bf=bg[1]===o;
this.__bf(be,bj,bf);
}}delete this.__X[bi];
return true;
},__bf:function(ba,bb,bc){var bd=this.findHandler(ba,bb);

if(bd){bd.unregisterEvent(ba,bb,bc);
return;
}{};
},dispatchEvent:function(bv,event){var bA;
{};
var bB=event.getType();

if(!event.getBubbles()&&!this.hasListener(bv,bB)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bv);
}var bz=qx.event.Registration.getDispatchers();
var by;
var bx=false;

for(var i=0,l=bz.length;i<l;i++){by=this.getDispatcher(bz[i]);
if(by.canDispatchEvent(bv,event,bB)){by.dispatchEvent(bv,event,bB);
bx=true;
break;
}}
if(!bx){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bB+" on "+bv);
return true;
}var bw=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bw;
},dispose:function(){qx.event.Registration.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,r);
qx.util.DisposeUtil.disposeMap(this,p);
this.__X=this.__W=this.__bd=this.__bb=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Class.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(q){if(q.nodeType==null){return q;
}if(q.nodeType!==this.DOCUMENT){q=q.ownerDocument;
}return q.parentWindow;
},"default":function(b){if(b.nodeType==null){return b;
}if(b.nodeType!==this.DOCUMENT){b=b.ownerDocument;
}return b.defaultView;
}}),getDocumentElement:function(l){return this.getDocument(l).documentElement;
},getBodyElement:function(d){return this.getDocument(d).body;
},isNode:function(n){return !!(n&&n.nodeType!=null);
},isElement:function(m){return !!(m&&m.nodeType===this.ELEMENT);
},isDocument:function(p){return !!(p&&p.nodeType===this.DOCUMENT);
},isText:function(c){return !!(c&&c.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},getText:function(f){if(!f||!f.nodeType){return null;
}
switch(f.nodeType){case 1:var i,a=[],g=f.childNodes,length=g.length;

for(i=0;i<length;i++){a[i]=this.getText(g[i]);
}return a.join(h);
case 2:return f.nodeValue;
break;
case 3:return f.nodeValue;
break;
}return null;
}}});
})();
(function(){var J="mshtml",I="qx.client",H="[object Array]",G="qx.lang.Array",F="Use qx.lang.Type.isArray() instead!",E="qx",D="number",C="Use the native Array access instead: arr[arr.length - 1]",B="Use the native Array access instead: arr[0]",A="string",z="Use 'clone()' instead!";
qx.Bootstrap.define(G,{statics:{isArray:function(y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
return qx.lang.Type.isArray(y);
},toArray:function(p,q){return this.cast(p,Array,q);
},cast:function(bt,bu,bv){if(bt.constructor===bu){return bt;
}
if(qx.Class.hasInterface(bt,qx.data.IListData)){var bt=bt.toArray();
}var bw=new bu;
if(qx.core.Variant.isSet(I,J)){if(bt.item){for(var i=bv||0,l=bt.length;i<l;i++){bw.push(bt[i]);
}return bw;
}}if(Object.prototype.toString.call(bt)===H&&bv==null){bw.push.apply(bw,bt);
}else{bw.push.apply(bw,Array.prototype.slice.call(bt,bv||0));
}return bw;
},fromArguments:function(w,x){return Array.prototype.slice.call(w,x||0);
},fromCollection:function(r){if(qx.core.Variant.isSet(I,J)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(m){var o=m.length;
var n=qx.lang.Array.clone(m);
switch(o){case 1:n[1]=n[2]=n[3]=n[0];
break;
case 2:n[2]=n[0];
case 3:n[3]=n[1];
}return n;
},copy:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
return qx.lang.Array.clone(U);
},clone:function(d){return d.concat();
},getLast:function(T){qx.log.Logger.deprecatedMethodWarning(arguments.callee,C);
return T[T.length-1];
},getFirst:function(bl){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
return bl[0];
},insertAt:function(bj,bk,i){bj.splice(i,0,bk);
return bj;
},insertBefore:function(bm,bn,bo){var i=bm.indexOf(bo);

if(i==-1){bm.push(bn);
}else{bm.splice(i,0,bn);
}return bm;
},insertAfter:function(h,j,k){var i=h.indexOf(k);

if(i==-1||i==(h.length-1)){h.push(j);
}else{h.splice(i+1,0,j);
}return h;
},removeAt:function(O,i){return O.splice(i,1)[0];
},removeAll:function(by){by.length=0;
return this;
},append:function(M,N){{};
Array.prototype.push.apply(M,N);
return M;
},exclude:function(P,Q){{};

for(var i=0,S=Q.length,R;i<S;i++){R=P.indexOf(Q[i]);

if(R!=-1){P.splice(R,1);
}}return P;
},remove:function(e,f){var i=e.indexOf(f);

if(i!=-1){e.splice(i,1);
return f;
}},contains:function(K,L){return K.indexOf(L)!==-1;
},equals:function(bp,bq){var length=bp.length;

if(length!==bq.length){return false;
}
for(var i=0;i<length;i++){if(bp[i]!==bq[i]){return false;
}}return true;
},sum:function(br){var bs=0;

for(var i=0,l=br.length;i<l;i++){bs+=br[i];
}return bs;
},max:function(t){{};
var i,v=t.length,u=t[0];

for(i=1;i<v;i++){if(t[i]>u){u=t[i];
}}return u===undefined?null:u;
},min:function(a){{};
var i,c=a.length,b=a[0];

for(i=1;i<c;i++){if(a[i]<b){b=a[i];
}}return b===undefined?null:b;
},unique:function(V){var bg=[],X={},bb={},bd={};
var bc,W=0;
var bh=E+qx.lang.Date.now();
var Y=false,bf=false,bi=false;
for(var i=0,be=V.length;i<be;i++){bc=V[i];
if(bc===null){if(!Y){Y=true;
bg.push(bc);
}}else if(bc===undefined){}else if(bc===false){if(!bf){bf=true;
bg.push(bc);
}}else if(bc===true){if(!bi){bi=true;
bg.push(bc);
}}else if(typeof bc===A){if(!X[bc]){X[bc]=1;
bg.push(bc);
}}else if(typeof bc===D){if(!bb[bc]){bb[bc]=1;
bg.push(bc);
}}else{ba=bc[bh];

if(ba==null){ba=bc[bh]=W++;
}
if(!bd[ba]){bd[ba]=bc;
bg.push(bc);
}}}for(var ba in bd){try{delete bd[ba][bh];
}catch(g){try{bd[ba][bh]=null;
}catch(bx){throw new Error("Cannot clean-up map entry doneObjects["+ba+"]["+bh+"]");
}}}return bg;
}}});
})();
(function(){var k="()",j=".",i=".prototype.",h="Use qx.lang.Type.isFunction() instead!",g='anonymous()',f="qx.lang.Function",e=".constructor()";
qx.Bootstrap.define(f,{statics:{isFunction:function(F){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return qx.lang.Type.isFunction(F);
},getCaller:function(a){return a.caller?a.caller.callee:a.callee.caller;
},getName:function(u){if(u.displayName){return u.displayName;
}
if(u.$$original||u.wrapper||u.classname){return u.classname+e;
}
if(u.$$mixin){for(var w in u.$$mixin.$$members){if(u.$$mixin.$$members[w]==u){return u.$$mixin.name+i+w+k;
}}for(var w in u.$$mixin){if(u.$$mixin[w]==u){return u.$$mixin.name+j+w+k;
}}}
if(u.self){var x=u.self.constructor;

if(x){for(var w in x.prototype){if(x.prototype[w]==u){return x.classname+i+w+k;
}}for(var w in x){if(x[w]==u){return x.classname+j+w+k;
}}}}var v=u.toString().match(/function\s*(\w*)\s*\(.*/);

if(v&&v.length>=1&&v[1]){return v[1]+k;
}return g;
},globalEval:function(y){if(window.execScript){return window.execScript(y);
}else{return eval.call(window,y);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(l,m){{};
if(!m){return l;
}if(!(m.self||m.args||m.delay!=null||m.periodical!=null||m.attempt)){return l;
}return function(event){{};
var s=qx.lang.Array.fromArguments(arguments);
if(m.args){s=m.args.concat(s);
}
if(m.delay||m.periodical){var r=qx.event.GlobalError.observeMethod(function(){return l.apply(m.self||this,s);
});

if(m.delay){return window.setTimeout(r,m.delay);
}
if(m.periodical){return window.setInterval(r,m.periodical);
}}else if(m.attempt){var t=false;

try{t=l.apply(m.self||this,s);
}catch(n){}return t;
}else{return l.apply(m.self||this,s);
}};
},bind:function(G,self,H){return this.create(G,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(z,A){return this.create(z,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(o,self,p){if(arguments.length<3){return function(event){return o.call(self||this,event||window.event);
};
}else{var q=qx.lang.Array.fromArguments(arguments,2);
return function(event){var E=[event||window.event];
E.push.apply(E,q);
o.apply(self||this,E);
};
}},attempt:function(I,self,J){return this.create(I,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(B,C,self,D){return this.create(B,{delay:C,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(b,c,self,d){return this.create(b,{periodical:c,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var J="qx.event.Registration";
qx.Bootstrap.define(J,{statics:{__bg:{},getManager:function(K){if(K==null){{};
K=window;
}else if(K.nodeType){K=qx.dom.Node.getWindow(K);
}else if(!qx.dom.Node.isWindow(K)){K=window;
}var M=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var L=this.__bg[M];

if(!L){L=new qx.event.Manager(K);
this.__bg[M]=L;
}return L;
},removeManager:function(y){var z=qx.core.ObjectRegistry.toHashCode(y.getWindow());
delete this.__bg[z];
},addListener:function(N,O,P,self,Q){return this.getManager(N).addListener(N,O,P,self,Q);
},removeListener:function(A,B,C,self,D){return this.getManager(A).removeListener(A,B,C,self,D);
},removeListenerById:function(F,G){return this.getManager(F).removeListenerById(F,G);
},removeAllListeners:function(H){return this.getManager(H).removeAllListeners(H);
},hasListener:function(c,d,e){return this.getManager(c).hasListener(c,d,e);
},serializeListeners:function(I){return this.getManager(I).serializeListeners(I);
},createEvent:function(f,g,h){{};
if(g==null){g=qx.event.type.Event;
}var i=qx.event.Pool.getInstance().getObject(g);

if(!i){return;
}h?i.init.apply(i,h):i.init();
if(f){i.setType(f);
}return i;
},dispatchEvent:function(j,event){return this.getManager(j).dispatchEvent(j,event);
},fireEvent:function(k,l,m,n){var o;
{};
var p=this.createEvent(l,m||null,n);
return this.getManager(k).dispatchEvent(k,p);
},fireNonBubblingEvent:function(s,t,u,v){{};
var w=this.getManager(s);

if(!w.hasListener(s,t,false)){return true;
}var x=this.createEvent(t,u||null,v);
return w.dispatchEvent(s,x);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bh:[],addHandler:function(E){{};
this.__bh.push(E);
this.__bh.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bh;
},__bi:[],addDispatcher:function(q,r){{};
this.__bi.push(q);
this.__bi.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bi;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Bootstrap.define(a,{construct:function(i){this.__bj=[];
this.setMaxMessages(i||50);
},members:{__bk:0,__bj:null,__bl:50,setMaxMessages:function(h){this.__bl=h;
this.clearHistory();
},getMaxMessages:function(){return this.__bl;
},process:function(b){var c=this.getMaxMessages();

if(this.__bj.length<c){this.__bj.push(b);
}else{this.__bj[this.__bk++]=b;

if(this.__bk>=c){this.__bk=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(d){if(d>this.__bj.length){d=this.__bj.length;
}
if(this.__bj.length==this.getMaxMessages()){var f=this.__bk-1;
}else{f=this.__bj.length-1;
}var e=f-d+1;

if(e<0){e+=this.__bj.length;
}var g;

if(e<=f){g=this.__bj.slice(e,f+1);
}else{g=this.__bj.slice(e,this.__bj.length).concat(this.__bj.slice(0,f+1));
}return g;
},clearHistory:function(){this.__bj=[];
this.__bk=0;
}}});
})();
(function(){var bj="node",bi="error",bh="...(+",bg="array",bf=")",be="info",bd="instance",bc="string",bb="null",ba="class",bE="number",bD="stringify",bC="]",bB="unknown",bA="function",bz="boolean",by="debug",bx="map",bw="undefined",bv="qx.log.Logger",bq=")}",br="#",bo="warn",bp="document",bm="{...(",bn="[",bk="text[",bl="[...(",bs="\n",bt=")]",bu="object";
qx.Bootstrap.define(bv,{statics:{__bm:by,setLevel:function(O){this.__bm=O;
},getLevel:function(){return this.__bm;
},setTreshold:function(P){this.__bp.setMaxMessages(P);
},getTreshold:function(){return this.__bp.getMaxMessages();
},__bn:{},__bo:0,register:function(S){if(S.$$id){return;
}var T=this.__bo++;
this.__bn[T]=S;
S.$$id=T;
var U=this.__bp.getAllLogEvents();

for(var i=0,l=U.length;i<l;i++){S.process(U[i]);
}},unregister:function(Q){var R=Q.$$id;

if(R==null){return;
}delete this.__bn[R];
delete Q.$$id;
},debug:function(a,b){this.__br(by,arguments);
},info:function(M,N){this.__br(be,arguments);
},warn:function(K,L){this.__br(bo,arguments);
},error:function(F,G){this.__br(bi,arguments);
},trace:function(Y){this.__br(be,[Y,qx.dev.StackTrace.getStackTrace().join(bs)]);
},deprecatedMethodWarning:function(H,I){var J;
{};
},deprecatedClassWarning:function(V,W){var X;
{};
},deprecatedEventWarning:function(r,event,s){var t;
{};
},deprecatedMixinWarning:function(o,p){var q;
{};
},clear:function(){this.__bp.clearHistory();
},__bp:new qx.log.appender.RingBuffer(50),__bq:{debug:0,info:1,warn:2,error:3},__br:function(c,d){var j=this.__bq;

if(j[c]<j[this.__bm]){return;
}var f=d.length<2?null:d[0];
var h=f?1:0;
var e=[];

for(var i=h,l=d.length;i<l;i++){e.push(this.__bt(d[i],true));
}var k=new Date;
var m={time:k,offset:k-qx.Bootstrap.LOADSTART,level:c,items:e,win:window};
if(f){if(f instanceof qx.core.Object){m.object=f.$$hash;
}else if(f.$$type){m.clazz=f;
}}this.__bp.process(m);
var n=this.__bn;

for(var g in n){n[g].process(m);
}},__bs:function(u){if(u===undefined){return bw;
}else if(u===null){return bb;
}
if(u.$$type){return ba;
}var v=typeof u;

if(v===bA||v==bc||v===bE||v===bz){return v;
}else if(v===bu){if(u.nodeType){return bj;
}else if(u.classname){return bd;
}else if(u instanceof Array){return bg;
}else if(u instanceof Error){return bi;
}else{return bx;
}}
if(u.toString){return bD;
}return bB;
},__bt:function(w,x){var E=this.__bs(w);
var A=bB;
var z=[];

switch(E){case bb:case bw:A=E;
break;
case bc:case bE:case bz:A=w;
break;
case bj:if(w.nodeType===9){A=bp;
}else if(w.nodeType===3){A=bk+w.nodeValue+bC;
}else if(w.nodeType===1){A=w.nodeName.toLowerCase();

if(w.id){A+=br+w.id;
}}else{A=bj;
}break;
case bA:A=qx.lang.Function.getName(w)||E;
break;
case bd:A=w.basename+bn+w.$$hash+bC;
break;
case ba:case bD:A=w.toString();
break;
case bi:z=qx.dev.StackTrace.getStackTraceFromError(w);
A=w.toString();
break;
case bg:if(x){A=[];

for(var i=0,l=w.length;i<l;i++){if(A.length>20){A.push(bh+(l-i)+bf);
break;
}A.push(this.__bt(w[i],false));
}}else{A=bl+w.length+bt;
}break;
case bx:if(x){var y;
var D=[];

for(var C in w){D.push(C);
}D.sort();
A=[];

for(var i=0,l=D.length;i<l;i++){if(A.length>20){A.push(bh+(l-i)+bf);
break;
}C=D[i];
y=this.__bt(w[C],false);
y.key=C;
A.push(y);
}}else{var B=0;

for(var C in w){B++;
}A=bm+B+bq;
}break;
}return {type:E,text:A,trace:z};
}}});
})();
(function(){var u="set",t="get",s="reset",r="__bv",q="qx.core.Object",p="]",o="[",n="$$user_",m="Object";
qx.Class.define(q,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:m},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+o+this.$$hash+p;
},base:function(C,D){if(arguments.length===1){return C.callee.base.call(this);
}else{return C.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bi){return bi.callee.self;
},clone:function(){var y=this.constructor;
var x=new y;
var A=qx.Class.getProperties(y);
var z=qx.core.Property.$$store.user;
var B=qx.core.Property.$$method.set;
var name;
for(var i=0,l=A.length;i<l;i++){name=A[i];

if(this.hasOwnProperty(z[name])){x[B[name]](this[z[name]]);
}}return x;
},serialize:function(){var br=this.constructor;
var bt=qx.Class.getProperties(br);
var bu=qx.core.Property.$$store.user;
var name,bq;
var bs={classname:br.classname,properties:{}};
for(var i=0,l=bt.length;i<l;i++){name=bt[i];

if(this.hasOwnProperty(bu[name])){bq=this[bu[name]];

if(bq instanceof qx.core.Object){bs.properties[name]={$$hash:bq.$$hash};
}else{bs.properties[name]=bq;
}}}return bs;
},set:function(d,f){var h=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(d)){if(!this[h[d]]){if(this[u+qx.lang.String.firstUp(d)]!=undefined){this[u+qx.lang.String.firstUp(d)](f);
return;
}{};
}return this[h[d]](f);
}else{for(var g in d){if(!this[h[g]]){if(this[u+qx.lang.String.firstUp(g)]!=undefined){this[u+qx.lang.String.firstUp(g)](d[g]);
continue;
}{};
}this[h[g]](d[g]);
}return this;
}},get:function(v){var w=qx.core.Property.$$method.get;

if(!this[w[v]]){if(this[t+qx.lang.String.firstUp(v)]!=undefined){return this[t+qx.lang.String.firstUp(v)]();
}{};
}return this[w[v]]();
},reset:function(Y){var ba=qx.core.Property.$$method.reset;

if(!this[ba[Y]]){if(this[s+qx.lang.String.firstUp(Y)]!=undefined){this[s+qx.lang.String.firstUp(Y)]();
return;
}{};
}this[ba[Y]]();
},__bu:qx.event.Registration,addListener:function(G,H,self,I){if(!this.$$disposed){return this.__bu.addListener(this,G,H,self,I);
}return null;
},addListenerOnce:function(J,K,self,L){var M=function(e){K.call(self||this,e);
this.removeListener(J,M,this,L);
};
return this.addListener(J,M,this,L);
},removeListener:function(bn,bo,self,bp){if(!this.$$disposed){return this.__bu.removeListener(this,bn,bo,self,bp);
}return false;
},removeListenerById:function(bD){if(!this.$$disposed){return this.__bu.removeListenerById(this,bD);
}return false;
},hasListener:function(N,O){return this.__bu.hasListener(this,N,O);
},dispatchEvent:function(S){if(!this.$$disposed){return this.__bu.dispatchEvent(this,S);
}return true;
},fireEvent:function(P,Q,R){if(!this.$$disposed){return this.__bu.fireEvent(this,P,Q,R);
}return true;
},fireNonBubblingEvent:function(V,W,X){if(!this.$$disposed){return this.__bu.fireNonBubblingEvent(this,V,W,X);
}return true;
},fireDataEvent:function(bj,bk,bl,bm){if(!this.$$disposed){if(bl===undefined){bl=null;
}return this.__bu.fireNonBubblingEvent(this,bj,qx.event.type.Data,[bk,bl,!!bm]);
}return true;
},__bv:null,setUserData:function(j,k){if(!this.__bv){this.__bv={};
}this.__bv[j]=k;
},getUserData:function(bE){if(!this.__bv){return null;
}var bF=this.__bv[bE];
return bF===undefined?null:bF;
},__bw:qx.log.Logger,debug:function(bb){this.__bw.debug(this,bb);
},info:function(E){this.__bw.info(this,E);
},warn:function(c){this.__bw.warn(this,c);
},error:function(U){this.__bw.error(this,U);
},trace:function(){this.__bw.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bg,be;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bf=this.constructor;
var bd;

while(bf.superclass){if(bf.$$destructor){bf.$$destructor.call(this);
}if(bf.$$includes){bd=bf.$$flatIncludes;

for(var i=0,l=bd.length;i<l;i++){if(bd[i].$$destructor){bd[i].$$destructor.call(this);
}}}bf=bf.superclass;
}var bh=qx.Class.getProperties(this.constructor);

for(var i=0,l=bh.length;i<l;i++){delete this[n+bh[i]];
}{};
},_disposeFields:function(b){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(F){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(a){qx.util.DisposeUtil.disposeArray(this,a);
},_disposeMap:function(bc){qx.util.DisposeUtil.disposeMap(this,bc);
}},settings:{"qx.disposerDebugLevel":0},defer:function(T){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(r);
var bx=this.constructor;
var bB;
var bC=qx.core.Property.$$store;
var bz=bC.user;
var bA=bC.theme;
var bv=bC.inherit;
var by=bC.useinit;
var bw=bC.init;

while(bx){bB=bx.$$properties;

if(bB){for(var name in bB){if(bB[name].dispose){this[bz[name]]=this[bA[name]]=this[bv[name]]=this[by[name]]=this[bw[name]]=undefined;
}}}bx=bx.superclass;
}}});
})();
(function(){var K="",J="g",I="0",H='\\$1',G="%",F='-',E="qx.lang.String",D=' ',C='\n',B="undefined";
qx.Bootstrap.define(E,{statics:{camelCase:function(u){return u.replace(/\-([a-z])/g,function(c,d){return d.toUpperCase();
});
},hyphenate:function(t){return t.replace(/[A-Z]/g,function(f){return (F+f.charAt(0).toLowerCase());
});
},capitalize:function(y){return y.replace(/\b[a-z]/g,function(j){return j.toUpperCase();
});
},clean:function(A){return this.trim(A.replace(/\s+/g,D));
},trimLeft:function(l){return l.replace(/^\s+/,K);
},trimRight:function(s){return s.replace(/\s+$/,K);
},trim:function(k){return k.replace(/^\s+|\s+$/g,K);
},startsWith:function(m,n){return m.indexOf(n)===0;
},endsWith:function(a,b){return a.substring(a.length-b.length,a.length)===b;
},pad:function(v,length,w){if(typeof w===B){w=I;
}var x=K;

for(var i=v.length;i<length;i++){x+=w;
}return x+v;
},firstUp:function(z){return z.charAt(0).toUpperCase()+z.substr(1);
},firstLow:function(g){return g.charAt(0).toLowerCase()+g.substr(1);
},contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(o,p){var q=o;

for(var i=0;i<p.length;i++){q=q.replace(new RegExp(G+(i+1),J),p[i]);
}return q;
},escapeRegexpChars:function(h){return h.replace(/([.*+?^${}()|[\]\/\\])/g,H);
},toArray:function(r){return r.split(/\B|\b/g);
},stripTags:function(e){return e.replace(/<\/?[^>]+>/gi,K);
},stripScripts:function(L,M){var O=K;
var N=L.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){O+=arguments[1]+C;
return K;
});

if(M===true){qx.lang.Function.globalEval(O);
}return N;
}}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Class.define(f,{statics:{define:function(name,t){if(t){if(t.extend&&!(t.extend instanceof Array)){t.extend=[t.extend];
}{};
var u=t.statics?t.statics:{};
if(t.extend){u.$$extends=t.extend;
}
if(t.properties){u.$$properties=t.properties;
}
if(t.members){u.$$members=t.members;
}
if(t.events){u.$$events=t.events;
}}else{var u={};
}u.$$type=c;
u.name=name;
u.toString=this.genericToString;
u.basename=qx.Bootstrap.createNamespace(name,u);
qx.Interface.$$registry[name]=u;
return u;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(v){if(!v){return [];
}var w=v.concat();

for(var i=0,l=v.length;i<l;i++){if(v[i].$$extends){w.push.apply(w,this.flatten(v[i].$$extends));
}}return w;
},__bx:function(j,k,m,n){var r=m.$$members;

if(r){for(var q in r){if(qx.lang.Type.isFunction(r[q])){var p=this.__by(k,q);
var o=p||qx.lang.Type.isFunction(j[q]);

if(!o){throw new Error('Implementation of method "'+q+'" is missing in class "'+k.classname+'" required by interface "'+m.name+'"');
}var s=n===true&&!p&&!qx.Class.hasInterface(k,m);

if(s){j[q]=this.__bB(m,j[q],q,r[q]);
}}else{if(typeof j[q]===undefined){if(typeof j[q]!==h){throw new Error('Implementation of member "'+q+'" is missing in class "'+k.classname+'" required by interface "'+m.name+'"');
}}}}}},__by:function(D,E){var I=E.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!I){return false;
}var F=qx.lang.String.firstLow(I[2]);
var G=qx.Class.hasProperty(D,F);

if(!G){return false;
}var H=I[0]==b||I[0]==d;

if(H){return qx.Class.getPropertyDefinition(D,F).check==g;
}return true;
},__bz:function(A,B){if(B.$$properties){for(var C in B.$$properties){if(!qx.Class.hasProperty(A,C)){throw new Error('The property "'+C+'" is not supported by Class "'+A.classname+'"!');
}}}},__bA:function(x,y){if(y.$$events){for(var z in y.$$events){if(!qx.Class.supportsEvent(x,z)){throw new Error('The event "'+z+'" is not supported by Class "'+x.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__bx(J,M,K,false);
this.__bz(M,K);
this.__bA(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__bx(N.prototype,N,O,P);
this.__bz(N,O);
this.__bA(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__bB:function(){},__bC:null,__bD:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__bE:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__bE=null;
},getInsets:function(){if(this.__bE){return this.__bE;
}var j=this._getDefaultInsets();
return this.__bE={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__bE=null;
}}});
})();
(function(){var l="_applyBackground",k="repeat",j="backgroundPositionX",i="backgroundPositionY",h="no-repeat",g="scale",f="repeat-x",e="repeat-y",d="qx.ui.decoration.MBackgroundImage",c="String";
qx.Mixin.define(d,{properties:{backgroundImage:{check:c,nullable:true,apply:l},backgroundRepeat:{check:[k,f,e,h,g],init:k,apply:l},backgroundPositionX:{nullable:true,apply:l},backgroundPositionY:{nullable:true,apply:l},backgroundPosition:{group:[i,j]}},members:{_generateBackgroundMarkup:function(a){var b=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),a);
return b;
},_applyBackground:function(){{};
}}});
})();
(function(){var t="_applyStyle",s="Color",r="px",q="solid",p="dotted",o="double",n="border:",m="dashed",l="",k="_applyWidth",e="qx.ui.decoration.Uniform",j="px ",h="__insets",d="__bF",c="position:absolute;top:0;left:0;",g=" ",f=";",i="scale",b="PositiveInteger";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(G,H,I){arguments.callee.base.call(this);
if(G!=null){this.setWidth(G);
}
if(H!=null){this.setStyle(H);
}
if(I!=null){this.setColor(I);
}},properties:{width:{check:b,init:0,apply:k},style:{nullable:true,check:[q,p,m,o],init:q,apply:t},color:{nullable:true,check:s,apply:t},backgroundColor:{check:s,nullable:true,apply:t}},members:{__bF:null,_getDefaultInsets:function(){var a=this.getWidth();
return {top:a,right:a,bottom:a,left:a};
},_isInitialized:function(){return !!this.__bF;
},getMarkup:function(){if(this.__bF){return this.__bF;
}var u=c;
var v=this.getWidth();
{};
var x=qx.theme.manager.Color.getInstance();
u+=n+v+j+this.getStyle()+g+x.resolve(this.getColor())+f;
var w=this._generateBackgroundMarkup(u);
return this.__bF=w;
},resize:function(B,C,D){var F=this.getBackgroundImage()&&this.getBackgroundRepeat()==i;

if(F||qx.bom.client.Feature.CONTENT_BOX){var E=this.getWidth()*2;
C-=E;
D-=E;
if(C<0){C=0;
}
if(D<0){D=0;
}}B.style.width=C+r;
B.style.height=D+r;
},tint:function(y,z){var A=qx.theme.manager.Color.getInstance();

if(z==null){z=this.getBackgroundColor();
}y.style.backgroundColor=A.resolve(z)||l;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(d,h);
}});
})();
(function(){var h="px",g="position:absolute;top:0;left:0",f="qx.ui.decoration.Background",e="",d="__insets",c="_applyStyle",b="__bG",a="Color";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(p){arguments.callee.base.call(this);

if(p!=null){this.setBackgroundColor(p);
}},properties:{backgroundColor:{check:a,nullable:true,apply:c}},members:{__bG:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bG;
},getMarkup:function(){if(this.__bG){return this.__bG;
}var o=this._generateBackgroundMarkup(g);
return this.__bG=o;
},resize:function(i,j,k){i.style.width=j+h;
i.style.height=k+h;
},tint:function(l,m){var n=qx.theme.manager.Color.getInstance();

if(m==null){m=this.getBackgroundColor();
}l.style.backgroundColor=n.resolve(m)||e;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(b,d);
}});
})();
(function(){var C="px",B="0px",A="-1px",z="no-repeat",y="scale-x",x="scale-y",w="-tr",v="-l",u="__insets",t='</div>',U="scale",T="qx.client",S="-br",R="-t",Q="-tl",P="-r",O='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',N="_applyBaseImage",M="-b",L="__bJ",J="String",K="",H="-bl",I="-c",F="mshtml",G="__bI",D="__bH",E="qx.ui.decoration.Grid";
qx.Class.define(E,{extend:qx.ui.decoration.Abstract,construct:function(V,W){arguments.callee.base.call(this);
if(V!=null){this.setBaseImage(V);
}
if(W!=null){this.setInsets(W);
}},properties:{baseImage:{check:J,nullable:true,apply:N}},members:{__bH:null,__bI:null,__bJ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bH;
},getMarkup:function(){if(this.__bH){return this.__bH;
}var n=qx.bom.element.Decoration;
var o=this.__bI;
var p=this.__bJ;
var q=[];
q.push(O);
q.push(n.create(o.tl,z,{top:0,left:0}));
q.push(n.create(o.t,y,{top:0,left:p.left+C}));
q.push(n.create(o.tr,z,{top:0,right:0}));
q.push(n.create(o.bl,z,{bottom:0,left:0}));
q.push(n.create(o.b,y,{bottom:0,left:p.left+C}));
q.push(n.create(o.br,z,{bottom:0,right:0}));
q.push(n.create(o.l,x,{top:p.top+C,left:0}));
q.push(n.create(o.c,U,{top:p.top+C,left:p.left+C}));
q.push(n.create(o.r,x,{top:p.top+C,right:0}));
q.push(t);
return this.__bH=q.join(K);
},resize:function(j,k,l){var m=this.__bJ;
var innerWidth=k-m.left-m.right;
var innerHeight=l-m.top-m.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}j.style.width=k+C;
j.style.height=l+C;
j.childNodes[1].style.width=innerWidth+C;
j.childNodes[4].style.width=innerWidth+C;
j.childNodes[7].style.width=innerWidth+C;
j.childNodes[6].style.height=innerHeight+C;
j.childNodes[7].style.height=innerHeight+C;
j.childNodes[8].style.height=innerHeight+C;

if(qx.core.Variant.isSet(T,F)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(k%2==1){j.childNodes[2].style.marginRight=A;
j.childNodes[5].style.marginRight=A;
j.childNodes[8].style.marginRight=A;
}else{j.childNodes[2].style.marginRight=B;
j.childNodes[5].style.marginRight=B;
j.childNodes[8].style.marginRight=B;
}
if(l%2==1){j.childNodes[3].style.marginBottom=A;
j.childNodes[4].style.marginBottom=A;
j.childNodes[5].style.marginBottom=A;
}else{j.childNodes[3].style.marginBottom=B;
j.childNodes[4].style.marginBottom=B;
j.childNodes[5].style.marginBottom=B;
}}}},tint:function(r,s){},_applyBaseImage:function(a,b){{};
var c=qx.util.ResourceManager.getInstance();

if(a){var e=qx.util.AliasManager.getInstance();
var g=e.resolve(a);
var h=/(.*)(\.[a-z]+)$/.exec(g);
var f=h[1];
var d=h[2];
var i=this.__bI={tl:f+Q+d,t:f+R+d,tr:f+w+d,bl:f+H+d,b:f+M+d,br:f+S+d,l:f+v+d,c:f+I+d,r:f+P+d};
this.__bJ={top:c.getImageHeight(i.t),bottom:c.getImageHeight(i.b),left:c.getImageWidth(i.l),right:c.getImageWidth(i.r)};
}}},destruct:function(){this._disposeFields(D,G,L,u);
}});
})();
(function(){var E="_applyStyle",D='"></div>',C="Color",B='<div style="',A='border:',z="1px solid ",y="",x=";",w="px",v='</div>',R="qx.ui.decoration.Beveled",Q="__insets",P='<div style="position:absolute;top:1px;left:1px;',O='border-bottom:',N='border-right:',M="position:absolute;top:1px;left:1px;",L='<div style="overflow:hidden;font-size:0;line-height:0;">',K='border-left:',J='border-top:',I="Number",G='<div style="position:absolute;top:1px;left:0px;',H='position:absolute;top:0px;left:1px;',F="__bK";
qx.Class.define(R,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(l,m,n){arguments.callee.base.call(this);
if(l!=null){this.setOuterColor(l);
}
if(m!=null){this.setInnerColor(m);
}
if(n!=null){this.setInnerOpacity(n);
}},properties:{innerColor:{check:C,nullable:true,apply:E},innerOpacity:{check:I,init:1,apply:E},outerColor:{check:C,nullable:true,apply:E},backgroundColor:{check:C,nullable:true,apply:E}},members:{__bK:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__bK;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__bK){return this.__bK;
}var r=qx.theme.manager.Color.getInstance();
var s=[];
var u=z+r.resolve(this.getOuterColor())+x;
var t=z+r.resolve(this.getInnerColor())+x;
s.push(L);
s.push(B);
s.push(A,u);
s.push(qx.bom.element.Opacity.compile(0.35));
s.push(D);
s.push(G);
s.push(K,u);
s.push(N,u);
s.push(D);
s.push(B);
s.push(H);
s.push(J,u);
s.push(O,u);
s.push(D);
s.push(this._generateBackgroundMarkup(M));
s.push(P);
s.push(A,t);
s.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
s.push(D);
s.push(v);
return this.__bK=s.join(y);
},resize:function(a,b,c){if(b<4){b=4;
}
if(c<4){c=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=b-2;
var outerHeight=c-2;
var i=outerWidth;
var h=outerHeight;
var innerWidth=b-4;
var innerHeight=c-4;
}else{var outerWidth=b;
var outerHeight=c;
var i=b-2;
var h=c-2;
var innerWidth=i;
var innerHeight=h;
}var k=w;
var g=a.childNodes[0].style;
g.width=outerWidth+k;
g.height=outerHeight+k;
var f=a.childNodes[1].style;
f.width=outerWidth+k;
f.height=h+k;
var e=a.childNodes[2].style;
e.width=i+k;
e.height=outerHeight+k;
var d=a.childNodes[3].style;
d.width=i+k;
d.height=h+k;
var j=a.childNodes[4].style;
j.width=innerWidth+k;
j.height=innerHeight+k;
},tint:function(o,p){var q=qx.theme.manager.Color.getInstance();

if(p==null){p=this.getBackgroundColor();
}o.childNodes[3].style.backgroundColor=q.resolve(p)||y;
}},destruct:function(){this._disposeFields(F,Q);
}});
})();
(function(){var r="_applyStyle",q="solid",p="Color",o="double",n="px ",m="dotted",l="_applyWidth",k="dashed",j="Number",i=" ",Q=";",P="shorthand",O="px",N="widthTop",M="styleRight",L="styleLeft",K="widthLeft",J="widthBottom",I="",H="styleTop",y="colorBottom",z="styleBottom",w="widthRight",x="colorLeft",u="colorRight",v="colorTop",s="border-left:",t="__bL",A="scale",B="position:absolute;top:0;left:0;",D="border-top:",C="border-bottom:",F="border-right:",E="qx.ui.decoration.Single",G="__insets";
qx.Class.define(E,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(R,S,T){arguments.callee.base.call(this);
if(R!=null){this.setWidth(R);
}
if(S!=null){this.setStyle(S);
}
if(T!=null){this.setColor(T);
}},properties:{widthTop:{check:j,init:0,apply:l},widthRight:{check:j,init:0,apply:l},widthBottom:{check:j,init:0,apply:l},widthLeft:{check:j,init:0,apply:l},styleTop:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleRight:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleBottom:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleLeft:{nullable:true,check:[q,m,k,o],init:q,apply:r},colorTop:{nullable:true,check:p,apply:r},colorRight:{nullable:true,check:p,apply:r},colorBottom:{nullable:true,check:p,apply:r},colorLeft:{nullable:true,check:p,apply:r},backgroundColor:{check:p,nullable:true,apply:r},left:{group:[K,L,x]},right:{group:[w,M,u]},top:{group:[N,H,v]},bottom:{group:[J,z,y]},width:{group:[N,w,J,K],mode:P},style:{group:[H,M,z,L],mode:P},color:{group:[v,u,y,x],mode:P}},members:{__bL:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__bL;
},getMarkup:function(d){if(this.__bL){return this.__bL;
}var e=qx.theme.manager.Color.getInstance();
var f=I;
var h=this.getWidthTop();

if(h>0){f+=D+h+n+this.getStyleTop()+i+e.resolve(this.getColorTop())+Q;
}var h=this.getWidthRight();

if(h>0){f+=F+h+n+this.getStyleRight()+i+e.resolve(this.getColorRight())+Q;
}var h=this.getWidthBottom();

if(h>0){f+=C+h+n+this.getStyleBottom()+i+e.resolve(this.getColorBottom())+Q;
}var h=this.getWidthLeft();

if(h>0){f+=s+h+n+this.getStyleLeft()+i+e.resolve(this.getColorLeft())+Q;
}{};
f+=B;
var g=this._generateBackgroundMarkup(f);
return this.__bL=g;
},resize:function(U,V,W){var Y=this.getBackgroundImage()&&this.getBackgroundRepeat()==A;

if(Y||qx.bom.client.Feature.CONTENT_BOX){var X=this.getInsets();
V-=X.left+X.right;
W-=X.top+X.bottom;
if(V<0){V=0;
}
if(W<0){W=0;
}}U.style.width=V+O;
U.style.height=W+O;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||I;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(t,G);
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bp="decoration/table/header-cell.png",bo="decoration/form/input.png",bn="#f8f8f8",bm="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bl="#b6b6b6",bk="background-pane",bj="repeat-y",bi="decoration/form/input-focused.png",bh="border-input",bg="decoration/scrollbar/scrollbar-button-bg-vertical.png",t="decoration/tabview/tab-button-top-active.png",u="decoration/form/button-c.png",r="decoration/scrollbar/scrollbar-bg-vertical.png",s="decoration/form/button.png",p="decoration/form/button-checked.png",q="decoration/tabview/tab-button-left-inactive.png",n="decoration/groupbox/groupbox.png",o="#FAFAFA",A="decoration/pane/pane.png",B="decoration/menu/background.png",L="decoration/toolbar/toolbar-part.gif",I="decoration/tabview/tab-button-top-inactive.png",T="decoration/menu/bar-background.png",O="center",bc="decoration/tabview/tab-button-bottom-active.png",Y="decoration/form/button-hovered.png",E="decoration/form/tooltip-error-arrow.png",bf="decoration/window/captionbar-inactive.png",be="qx/decoration/Modern",bd="decoration/window/statusbar.png",D="border-focused",G="decoration/selection.png",H="table-focus-indicator",K="#F2F2F2",M="decoration/form/button-checked-c.png",P="decoration/scrollbar/scrollbar-bg-horizontal.png",V="qx.theme.modern.Decoration",bb="#f4f4f4",v="decoration/shadow/shadow-small.png",w="decoration/app-header.png",F="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",W="decoration/tabview/tab-button-right-active.png",N="decoration/form/button-pressed.png",U="no-repeat",a="decoration/window/captionbar-active.png",ba="decoration/tabview/tab-button-left-active.png",x="background-splitpane",y="decoration/form/button-checked-focused.png",J="#C5C5C5",b="decoration/toolbar/toolbar-gradient.png",c="decoration/tabview/tab-button-right-inactive.png",C="#b8b8b8",z="decoration/shadow/shadow.png";
qx.Theme.define(V,{aliases:{decoration:be},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:n}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:E,backgroundPositionY:O,backgroundRepeat:U,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:z,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:r,backgroundRepeat:bj}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bm,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bm,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bg,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bg,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:p,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:y,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bh,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bh,innerColor:D,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:b,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bl,innerColor:bn,backgroundImage:u,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bl,innerColor:bn,backgroundImage:M,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:C,colorRight:bb,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:L,backgroundRepeat:bj}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:F,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:t}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:I}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:W}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:c}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bk,width:3,color:x,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bk,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:H,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthRight:1,colorRight:K,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:B,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:J,widthBottom:1,colorBottom:o}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:T,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:w,backgroundRepeat:l}}}});
})();
(function(){var a="santiglaus.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="X11",d="MacIntel",c="MacPPC";
qx.Bootstrap.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__bM:function(){var a=navigator.platform;
if(a==null||a===l){a=navigator.userAgent;
}
if(a.indexOf(f)!=-1||a.indexOf(m)!=-1||a.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(a.indexOf(h)!=-1||a.indexOf(c)!=-1||a.indexOf(d)!=-1||a.indexOf(n)!=-1||a.indexOf(g)!=-1){this.MAC=true;
this.NAME="mac";
}else if(a.indexOf(b)!=-1||a.indexOf(j)!=-1||a.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__bM();
}});
})();
(function(){var n="win98",m="osx2",l="osx0",k="osx4",j="win95",i="win2000",h="osx1",g="osx5",f="osx3",e="Windows NT 5.01",K=")",J="winxp",I="freebsd",H="sunos",G="SV1",F="|",E="nintendods",D="winnt4",C="wince",B="winme",u="os9",v="\.",s="osx",t="linux",q="netbsd",r="winvista",o="openbsd",p="(",w="win2003",x="symbian",z="g",y="qx.bom.client.System",A=" Mobile/";
qx.Bootstrap.define(y,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__bN:{"Windows NT 6.0":r,"Windows NT 5.2":w,"Windows NT 5.1":J,"Windows NT 5.0":i,"Windows 2000":i,"Windows NT 4.0":D,"Win 9x 4.90":B,"Windows CE":C,"Windows 98":n,"Win98":n,"Windows 95":j,"Win95":j,"Linux":t,"FreeBSD":I,"NetBSD":q,"OpenBSD":o,"SunOS":H,"Symbian System":x,"Nitro":E,"PSP":"sonypsp","Mac OS X 10_5":g,"Mac OS X 10.5":g,"Mac OS X 10_4":k,"Mac OS X 10.4":k,"Mac OS X 10_3":f,"Mac OS X 10.3":f,"Mac OS X 10_2":m,"Mac OS X 10.2":m,"Mac OS X 10_1":h,"Mac OS X 10.1":h,"Mac OS X 10_0":l,"Mac OS X 10.0":l,"Mac OS X":s,"Mac OS 9":u},__bO:function(){var c=navigator.userAgent;
var b=[];

for(var a in this.__bN){b.push(a);
}var d=new RegExp(p+b.join(F).replace(/\./g,v)+K,z);

if(!d.test(c)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(A).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__bN[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(c.indexOf(e)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&c.indexOf(G)!==-1){this.SP2=true;
}}}}},defer:function(L){L.__bO();
}});
})();
(function(){var m="Liberation Sans",l="Arial",k="Lucida Grande",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",d="monospace",a="Lucida Console",c="qx.theme.modern.Font",b="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[a,e]:qx.bom.client.System.WINVISTA?[g]:[g,b,f,d]}}});
})();
(function(){var a="santiglaus.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var hd="button-frame",hc="atom",hb="widget",ha="main",gY="button",gX="bold",gW="middle",gV="text-selected",gU="background-light",gT="image",fH="text-disabled",fG="groupbox",fF="cell",fE="border-invalid",fD="input",fC="input-disabled",fB="menu-button",fA="decoration/arrows/down.png",fz="input-focused-invalid",fy="toolbar-button",hk="spinner",hl="input-focused",hi="selected",hj="popup",hg="tooltip",hh="list",he="tree-item",hf="treevirtual-contract",hm="scrollbar",hn="datechooser/nav-button",gC="text-hovered",gB="center",gE="treevirtual-expand",gD="textfield",gG="label",gF="decoration/arrows/right.png",gI="background-application",gH="radiobutton",gA="invalid",gz="combobox",dL="right-top",dM="checkbox",dN="text-title",dO="qx/static/blank.gif",dP="scrollbar/button",dQ="right",dR="combobox/button",dS="icon/16/places/folder.png",dT="text-label",dU="decoration/tree/closed.png",hB="scrollbar-slider-horizontal",hA="white",hz="decoration/arrows/left.png",hy="button-focused",hF="text-light",hE="text-input",hD="slidebar/button-forward",hC="background-splitpane",hH=".png",hG="decoration/tree/open.png",eM="default",eN="decoration/arrows/down-small.png",eK="datechooser",eL="slidebar/button-backward",eQ="selectbox",eR="treevirtual-folder",eO="shadow-popup",eP="icon/16/mimetypes/office-document.png",eI="background-medium",eJ="table",ep="decoration/form/",eo="",er="-invalid",eq="icon/16/places/folder-open.png",el="button-checked",ek="decoration/window/maximize-active-hovered.png",en="radiobutton-hovered",em="decoration/cursors/",ej="slidebar",ei="tooltip-error-arrow",eX="table-scroller-focus-indicator",eY="move-frame",fa="nodrop",fb="decoration/table/boolean-true.png",eT="table-header-cell",eU="menu",eV="app-header",eW="row-layer",fc="text-inactive",fd="move",eB="radiobutton-checked-focused",eA="decoration/window/restore-active-hovered.png",ez="shadow-window",ey="table-column-button",ex="right.png",ew="tabview-page-button-bottom-inactive",ev="tooltip-error",eu="window-statusbar",eF="button-hovered",eE="decoration/scrollbar/scrollbar-",fe="background-tip",ff="scrollbar-slider-horizontal-disabled",fg="table-scroller-header",fh="radiobutton-disabled",fi="button-pressed",fj="table-pane",fk="decoration/window/close-active.png",fl="tabview-page-button-left-active",fm="checkbox-hovered",fn="button-invalid-shadow",fP="checkbox-checked",fO="decoration/window/minimize-active-hovered.png",fN="menubar",fM="icon/16/actions/dialog-cancel.png",fT="tabview-page-button-top-inactive",fS="tabview-page-button-left-inactive",fR="toolbar-button-checked",fQ="decoration/tree/open-selected.png",fX="radiobutton-checked",fW="decoration/window/minimize-inactive.png",gv="icon/16/apps/office-calendar.png",gw="group",gt="tabview-page-button-right-inactive",gu="decoration/window/minimize-active.png",gr="decoration/window/restore-inactive.png",gs="checkbox-checked-focused",gp="splitpane",gq="combobox/textfield",gx="button-preselected-focused",gy="decoration/window/close-active-hovered.png",gM="qx/icon/Tango/16/actions/window-close.png",gL="checkbox-pressed",gO="button-disabled",gN="border-separator",gQ="decoration/window/maximize-inactive.png",gP="icon/22/places/folder-open.png",gS="scrollarea",gR="scrollbar-vertical",gK="decoration/toolbar/toolbar-handle-knob.gif",gJ="icon/22/mimetypes/office-document.png",hu="button-preselected",hv="button-checked-focused",hw="up.png",hx="decoration/tree/closed-selected.png",hq="qx.theme.modern.Appearance",hr="text-active",hs="checkbox-disabled",ht="toolbar-button-hovered",ho="progressive-table-header",hp="decoration/menu/radiobutton.gif",dK="decoration/arrows/forward.png",dJ="decoration/table/descending.png",dI="window-captionbar-active",dH="checkbox-checked-hovered",dG="scrollbar-slider-vertical",dF="toolbar",dE="alias",dD="decoration/window/restore-active.png",dC="decoration/table/boolean-false.png",dB="checkbox-checked-disabled",dX="icon/32/mimetypes/office-document.png",dY="radiobutton-checked-disabled",dV="tabview-pane",dW="decoration/arrows/rewind.png",ec="checkbox-focused",ed="top",ea="#EEE",eb="icon/16/actions/dialog-ok.png",ef="radiobutton-checked-hovered",eg="table-header-cell-hovered",gc="window",fV="text-gray",gj="decoration/menu/radiobutton-invert.gif",gf="text-placeholder",fK="slider",fI="decoration/table/select-column-order.png",et="down.png",fL="tabview-page-button-top-active",eD="icon/32/places/folder-open.png",eC="icon/22/places/folder.png",fq="decoration/window/maximize-active.png",fr="checkbox-checked-pressed",fs="decoration/window/close-inactive.png",ft="toolbar-part",fu="decoration/splitpane/knob-vertical.png",fv=".gif",fw="decoration/menu/checkbox-invert.gif",fx="decoration/arrows/up.png",fo="radiobutton-checked-pressed",fp="table-statusbar",fJ="radiobutton-pressed",gi="window-captionbar-inactive",gh="copy",gg="radiobutton-focused",gn="decoration/menu/checkbox.gif",gm="decoration/splitpane/knob-horizontal.png",gl="icon/32/places/folder.png",gk="toolbar-separator",ge="tabview-page-button-bottom-active",gd="decoration/arrows/up-small.png",ee="decoration/table/ascending.png",eH="small",eG="tabview-page-button-right-active",fU="-disabled",eS="scrollbar-horizontal",gb="progressive-table-header-cell",ga="menu-separator",fY="pane",es="decoration/arrows/right-invert.png",go="left.png",eh="icon/16/actions/view-refresh.png";
qx.Theme.define(hq,{appearances:{"widget":{},"root":{style:function(cj){return {backgroundColor:gI,textColor:dT,font:eM};
}},"label":{style:function(E){return {textColor:E.disabled?fH:undefined};
}},"move-frame":{style:function(cA){return {decorator:ha};
}},"resize-frame":eY,"dragdrop-cursor":{style:function(dg){var dh=fa;

if(dg.copy){dh=gh;
}else if(dg.move){dh=fd;
}else if(dg.alias){dh=dE;
}return {source:em+dh+fv,position:dL,offset:[2,16,2,6]};
}},"image":{style:function(cb){return {opacity:!cb.replacement&&cb.disabled?0.3:1};
}},"atom":{},"atom/label":gG,"atom/icon":gT,"popup":{style:function(O){return {decorator:ha,backgroundColor:gU,shadow:eO};
}},"button-frame":{alias:hc,style:function(s){var u,t;

if(s.checked&&s.focused&&!s.inner){u=hv;
t=undefined;
}else if(s.disabled){u=gO;
t=undefined;
}else if(s.pressed){u=fi;
t=gC;
}else if(s.checked){u=el;
t=undefined;
}else if(s.hovered){u=eF;
t=gC;
}else if(s.preselected&&s.focused&&!s.inner){u=gx;
t=gC;
}else if(s.preselected){u=hu;
t=gC;
}else if(s.focused&&!s.inner){u=hy;
t=undefined;
}else{u=gY;
t=undefined;
}return {decorator:u,textColor:t,shadow:s.invalid&&!s.disabled?fn:undefined};
}},"button-frame/image":{style:function(I){return {opacity:!I.replacement&&I.disabled?0.5:1};
}},"button":{alias:hd,include:hd,style:function(bV){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":gY,"splitbutton/arrow":{alias:gY,include:gY,style:function(ci){return {icon:fA,padding:2,marginLeft:1};
}},"checkbox":{alias:hc,style:function(bL){var bN;

if(bL.checked&&bL.focused){bN=gs;
}else if(bL.checked&&bL.disabled){bN=dB;
}else if(bL.checked&&bL.pressed){bN=fr;
}else if(bL.checked&&bL.hovered){bN=dH;
}else if(bL.checked){bN=fP;
}else if(bL.disabled){bN=hs;
}else if(bL.focused){bN=ec;
}else if(bL.pressed){bN=gL;
}else if(bL.hovered){bN=fm;
}else{bN=dM;
}var bM=bL.invalid&&!bL.disabled?er:eo;
return {icon:ep+bN+bM+hH,gap:6};
}},"radiobutton":{alias:hc,style:function(cR){var cT;

if(cR.checked&&cR.focused){cT=eB;
}else if(cR.checked&&cR.disabled){cT=dY;
}else if(cR.checked&&cR.pressed){cT=fo;
}else if(cR.checked&&cR.hovered){cT=ef;
}else if(cR.checked){cT=fX;
}else if(cR.disabled){cT=fh;
}else if(cR.focused){cT=gg;
}else if(cR.pressed){cT=fJ;
}else if(cR.hovered){cT=en;
}else{cT=gH;
}var cS=cR.invalid&&!cR.disabled?er:eo;
return {icon:ep+cT+cS+hH,gap:6};
}},"textfield":{style:function(Q){var V;
var T=!!Q.focused;
var U=!!Q.invalid;
var R=!!Q.disabled;

if(T&&U&&!R){V=fz;
}else if(T&&!U&&!R){V=hl;
}else if(R){V=fC;
}else if(!T&&U&&!R){V=fE;
}else{V=fD;
}var S;

if(Q.disabled){S=fH;
}else if(Q.showingPlaceholder){S=gf;
}else{S=hE;
}return {decorator:V,padding:[2,4,1],textColor:S};
}},"textarea":{include:gD,style:function(cg){return {padding:4};
}},"spinner":{style:function(bO){var bS;
var bQ=!!bO.focused;
var bR=!!bO.invalid;
var bP=!!bO.disabled;

if(bQ&&bR&&!bP){bS=fz;
}else if(bQ&&!bR&&!bP){bS=hl;
}else if(bP){bS=fC;
}else if(!bQ&&bR&&!bP){bS=fE;
}else{bS=fD;
}return {decorator:bS};
}},"spinner/textfield":{style:function(hO){return {marginRight:2,padding:[2,4,1],textColor:hO.disabled?fH:hE};
}},"spinner/upbutton":{alias:hd,include:hd,style:function(dz){return {icon:gd,padding:dz.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:hd,include:hd,style:function(hI){return {icon:eN,padding:hI.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":gz,"datefield/button":{alias:dR,include:dR,style:function(H){return {icon:gv,padding:[0,3],decorator:undefined};
}},"datefield/textfield":gq,"datefield/list":{alias:eK,include:eK,style:function(M){return {decorator:undefined};
}},"groupbox":{style:function(r){return {legendPosition:ed};
}},"groupbox/legend":{alias:hc,style:function(Y){return {padding:[1,0,1,4],textColor:Y.invalid?gA:dN,font:gX};
}},"groupbox/frame":{style:function(K){return {padding:12,decorator:gw};
}},"check-groupbox":fG,"check-groupbox/legend":{alias:dM,include:dM,style:function(cx){return {padding:[1,0,1,4],textColor:cx.invalid?gA:dN,font:gX};
}},"radio-groupbox":fG,"radio-groupbox/legend":{alias:gH,include:gH,style:function(bX){return {padding:[1,0,1,4],textColor:bX.invalid?gA:dN,font:gX};
}},"scrollarea":{style:function(cX){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(dd){return {backgroundColor:gI};
}},"scrollarea/pane":hb,"scrollarea/scrollbar-x":hm,"scrollarea/scrollbar-y":hm,"scrollbar":{style:function(bs){return {width:bs.horizontal?undefined:16,height:bs.horizontal?16:undefined,decorator:bs.horizontal?eS:gR,padding:1};
}},"scrollbar/slider":{alias:fK,style:function(m){return {padding:m.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:hd,style:function(C){var D=C.horizontal?hB:dG;

if(C.disabled){D+=fU;
}return {decorator:D,minHeight:C.horizontal?undefined:14,minWidth:C.horizontal?14:undefined};
}},"scrollbar/button":{alias:hd,include:hd,style:function(cl){var cm=eE;

if(cl.left){cm+=go;
}else if(cl.right){cm+=ex;
}else if(cl.up){cm+=hw;
}else{cm+=et;
}
if(cl.left||cl.right){return {padding:[0,0,0,cl.left?3:4],icon:cm,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:cm,width:14,height:15};
}}},"scrollbar/button-begin":dP,"scrollbar/button-end":dP,"slider":{style:function(di){var dm;
var dk=!!di.focused;
var dl=!!di.invalid;
var dj=!!di.disabled;

if(dk&&dl&&!dj){dm=fz;
}else if(dk&&!dl&&!dj){dm=hl;
}else if(dj){dm=fC;
}else if(!dk&&dl&&!dj){dm=fE;
}else{dm=fD;
}return {decorator:dm};
}},"slider/knob":{include:hd,style:function(cf){return {decorator:cf.disabled?ff:hB,shadow:undefined,height:14,width:14};
}},"list":{alias:gS,style:function(cC){var cG;
var cE=!!cC.focused;
var cF=!!cC.invalid;
var cD=!!cC.disabled;

if(cE&&cF&&!cD){cG=fz;
}else if(cE&&!cF&&!cD){cG=hl;
}else if(cD){cG=fC;
}else if(!cE&&cF&&!cD){cG=fE;
}else{cG=fD;
}return {backgroundColor:gU,decorator:cG};
}},"list/pane":hb,"listitem":{alias:hc,style:function(L){return {padding:4,textColor:L.selected?gV:undefined,decorator:L.selected?hi:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hd,include:hd,style:function(dt){return {padding:5,center:true,icon:dt.vertical?fA:gF};
}},"slidebar/button-backward":{alias:hd,include:hd,style:function(J){return {padding:5,center:true,icon:J.vertical?fx:hz};
}},"tabview":{style:function(w){return {contentPadding:16};
}},"tabview/bar":{alias:ej,style:function(dq){var dr={marginBottom:dq.barTop?-1:0,marginTop:dq.barBottom?-4:0,marginLeft:dq.barRight?-3:0,marginRight:dq.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(dq.barTop||dq.barBottom){dr.paddingLeft=5;
dr.paddingRight=7;
}else{dr.paddingTop=5;
dr.paddingBottom=7;
}return dr;
}},"tabview/bar/button-forward":{include:hD,alias:hD,style:function(hK){if(hK.barTop||hK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:eL,alias:eL,style:function(hJ){if(hJ.barTop||hJ.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(dp){return {decorator:dV,minHeight:100,marginBottom:dp.barBottom?-1:0,marginTop:dp.barTop?-1:0,marginLeft:dp.barLeft?-1:0,marginRight:dp.barRight?-1:0};
}},"tabview-page":hb,"tabview-page/button":{alias:hc,style:function(bb){var bh,bd=0;
var bg=0,bc=0,be=0,bf=0;

if(bb.checked){if(bb.barTop){bh=fL;
bd=[6,14];
be=bb.firstTab?0:-5;
bf=bb.lastTab?0:-5;
}else if(bb.barBottom){bh=ge;
bd=[6,14];
be=bb.firstTab?0:-5;
bf=bb.lastTab?0:-5;
}else if(bb.barRight){bh=eG;
bd=[6,13];
bg=bb.firstTab?0:-5;
bc=bb.lastTab?0:-5;
}else{bh=fl;
bd=[6,13];
bg=bb.firstTab?0:-5;
bc=bb.lastTab?0:-5;
}}else{if(bb.barTop){bh=fT;
bd=[4,10];
bg=4;
be=bb.firstTab?5:1;
bf=1;
}else if(bb.barBottom){bh=ew;
bd=[4,10];
bc=4;
be=bb.firstTab?5:1;
bf=1;
}else if(bb.barRight){bh=gt;
bd=[4,10];
bf=5;
bg=bb.firstTab?5:1;
bc=1;
be=1;
}else{bh=fS;
bd=[4,10];
be=5;
bg=bb.firstTab?5:1;
bc=1;
bf=1;
}}return {zIndex:bb.checked?10:5,decorator:bh,padding:bd,marginTop:bg,marginBottom:bc,marginLeft:be,marginRight:bf,textColor:bb.checked?hr:fc};
}},"tabview-page/button/close-button":{alias:hc,style:function(p){return {icon:gM};
}},"toolbar":{style:function(cq){return {decorator:dF,spacing:2};
}},"toolbar/part":{style:function(cW){return {decorator:ft,spacing:2};
}},"toolbar/part/container":{style:function(g){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(cI){return {source:gK,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:hc,style:function(du){return {marginTop:2,marginBottom:2,padding:(du.pressed||du.checked||du.hovered)&&!du.disabled||(du.disabled&&du.checked)?3:5,decorator:du.pressed||(du.checked&&!du.hovered)||(du.checked&&du.disabled)?fR:du.hovered&&!du.disabled?ht:undefined};
}},"toolbar-menubutton":{alias:fy,include:fy,style:function(bY){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gT,include:gT,style:function(F){return {source:eN};
}},"toolbar-splitbutton":{style:function(ba){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:fy,include:fy,style:function(dc){return {icon:fA,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:fy,include:fy,style:function(P){return {padding:P.pressed||P.checked?1:P.hovered?1:3,icon:fA,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(d){return {decorator:gk,margin:7};
}},"tree":hh,"tree-item":{style:function(G){return {padding:[2,6],textColor:G.selected?gV:undefined,decorator:G.selected?hi:undefined};
}},"tree-item/icon":{include:gT,style:function(cY){return {paddingRight:5};
}},"tree-item/label":gG,"tree-item/open":{include:gT,style:function(h){var i;

if(h.selected&&h.opened){i=fQ;
}else if(h.selected&&!h.opened){i=hx;
}else if(h.opened){i=hG;
}else{i=dU;
}return {padding:[0,5,0,2],source:i};
}},"tree-folder":{include:he,alias:he,style:function(hM){var hN;

if(hM.small){hN=hM.opened?eq:dS;
}else if(hM.large){hN=hM.opened?eD:gl;
}else{hN=hM.opened?gP:eC;
}return {icon:hN};
}},"tree-file":{include:he,alias:he,style:function(cw){return {icon:cw.small?eP:cw.large?dX:gJ};
}},"treevirtual":eJ,"treevirtual-folder":{style:function(v){return {icon:v.opened?eq:dS};
}},"treevirtual-file":{include:eR,alias:eR,style:function(bq){return {icon:eP};
}},"treevirtual-line":{style:function(dn){return {icon:dO};
}},"treevirtual-contract":{style:function(cr){return {icon:hG,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(bx){return {icon:dU,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hf,"treevirtual-only-expand":gE,"treevirtual-start-contract":hf,"treevirtual-start-expand":gE,"treevirtual-end-contract":hf,"treevirtual-end-expand":gE,"treevirtual-cross-contract":hf,"treevirtual-cross-expand":gE,"treevirtual-end":{style:function(bj){return {icon:dO};
}},"treevirtual-cross":{style:function(cH){return {icon:dO};
}},"tooltip":{include:hj,style:function(hP){return {backgroundColor:fe,padding:[1,3,2,3],offset:[5,5,20,5]};
}},"tooltip/atom":hc,"tooltip-error":{include:hg,style:function(cB){return {textColor:gV,placeMethod:hb,offsetRight:15,position:dL,showTimeout:100,hideTimeout:10000,decorator:ev,shadow:ei,font:gX};
}},"tooltip-error/atom":hc,"window":{style:function(cn){return {shadow:ez,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bu){return {decorator:gc};
}},"window/captionbar":{style:function(n){return {decorator:n.active?dI:gi,textColor:n.active?hA:fV,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hL){return {margin:[5,0,3,6]};
}},"window/title":{style:function(ce){return {alignY:gW,font:gX,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:hc,style:function(cJ){return {icon:cJ.active?cJ.hovered?fO:gu:fW,margin:[4,8,2,0]};
}},"window/restore-button":{alias:hc,style:function(z){return {icon:z.active?z.hovered?eA:dD:gr,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:hc,style:function(cy){return {icon:cy.active?cy.hovered?ek:fq:gQ,margin:[4,8,2,0]};
}},"window/close-button":{alias:hc,style:function(bz){return {icon:bz.active?bz.hovered?gy:fk:fs,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(bI){return {padding:[2,6],decorator:eu,minHeight:18};
}},"window/statusbar-text":{style:function(cQ){return {font:eH};
}},"iframe":{style:function(bi){return {decorator:ha};
}},"resizer":{style:function(x){return {decorator:fY};
}},"splitpane":{style:function(ch){return {decorator:gp};
}},"splitpane/splitter":{style:function(k){return {width:k.horizontal?3:undefined,height:k.vertical?3:undefined,backgroundColor:hC};
}},"splitpane/splitter/knob":{style:function(cU){return {source:cU.horizontal?gm:fu};
}},"splitpane/slider":{style:function(cV){return {width:cV.horizontal?3:undefined,height:cV.vertical?3:undefined,backgroundColor:hC};
}},"selectbox":{alias:hd,include:hd,style:function(e){return {padding:[2,8]};
}},"selectbox/atom":hc,"selectbox/popup":hj,"selectbox/list":{alias:hh},"selectbox/arrow":{include:gT,style:function(bB){return {source:fA,paddingLeft:5};
}},"datechooser":{style:function(bk){var bo;
var bm=!!bk.focused;
var bn=!!bk.invalid;
var bl=!!bk.disabled;

if(bm&&bn&&!bl){bo=fz;
}else if(bm&&!bn&&!bl){bo=hl;
}else if(bl){bo=fC;
}else if(!bm&&bn&&!bl){bo=fE;
}else{bo=fD;
}return {padding:2,decorator:bo,backgroundColor:gU};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hd,alias:hd,style:function(cN){var cO={padding:[2,4],shadow:undefined};

if(cN.lastYear){cO.icon=dW;
cO.marginRight=1;
}else if(cN.lastMonth){cO.icon=hz;
}else if(cN.nextYear){cO.icon=dK;
cO.marginLeft=1;
}else if(cN.nextMonth){cO.icon=gF;
}return cO;
}},"datechooser/last-year-button-tooltip":hg,"datechooser/last-month-button-tooltip":hg,"datechooser/next-year-button-tooltip":hg,"datechooser/next-month-button-tooltip":hg,"datechooser/last-year-button":hn,"datechooser/last-month-button":hn,"datechooser/next-month-button":hn,"datechooser/next-year-button":hn,"datechooser/month-year-label":{style:function(cK){return {font:gX,textAlign:gB,textColor:cK.disabled?fH:undefined};
}},"datechooser/date-pane":{style:function(cP){return {textColor:cP.disabled?fH:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(cL){return {textColor:cL.disabled?fH:cL.weekend?hF:undefined,textAlign:gB,paddingTop:2,backgroundColor:eI};
}},"datechooser/week":{style:function(da){return {textAlign:gB,padding:[2,4],backgroundColor:eI};
}},"datechooser/day":{style:function(a){return {textAlign:gB,decorator:a.disabled?undefined:a.selected?hi:undefined,textColor:a.disabled?fH:a.selected?gV:a.otherMonth?hF:undefined,font:a.today?gX:undefined,padding:[2,4]};
}},"combobox":{style:function(bD){var bH;
var bF=!!bD.focused;
var bG=!!bD.invalid;
var bE=!!bD.disabled;

if(bF&&bG&&!bE){bH=fz;
}else if(bF&&!bG&&!bE){bH=hl;
}else if(bE){bH=fC;
}else if(!bF&&bG&&!bE){bH=fE;
}else{bH=fD;
}return {decorator:bH};
}},"combobox/popup":hj,"combobox/list":{alias:hh},"combobox/button":{include:hd,alias:hd,style:function(de){var df={icon:fA,padding:2};

if(de.selected){df.decorator=hy;
}return df;
}},"combobox/textfield":{include:gD,style:function(bW){return {decorator:undefined};
}},"menu":{style:function(ct){var cu={decorator:eU,shadow:eO,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(ct.submenu){cu.position=dL;
cu.offset=[-2,-3];
}return cu;
}},"menu-separator":{style:function(br){return {height:0,decorator:ga,margin:[4,2]};
}},"menu-button":{alias:hc,style:function(cv){return {decorator:cv.selected?hi:undefined,textColor:cv.selected?gV:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gT,style:function(bT){return {alignY:gW};
}},"menu-button/label":{include:gG,style:function(ck){return {alignY:gW,padding:1};
}},"menu-button/shortcut":{include:gG,style:function(dw){return {alignY:gW,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(dv){return {source:dv.selected?es:gF,alignY:gW};
}},"menu-checkbox":{alias:fB,include:fB,style:function(b){return {icon:!b.checked?undefined:b.selected?fw:gn};
}},"menu-radiobutton":{alias:fB,include:fB,style:function(bt){return {icon:!bt.checked?undefined:bt.selected?gj:hp};
}},"menubar":{style:function(by){return {decorator:fN};
}},"menubar-button":{alias:hc,style:function(N){return {decorator:N.pressed||N.hovered?hi:undefined,textColor:N.pressed||N.hovered?gV:undefined,padding:[3,8]};
}},"colorselector":hb,"colorselector/control-bar":hb,"colorselector/control-pane":hb,"colorselector/visual-pane":fG,"colorselector/preset-grid":hb,"colorselector/colorbucket":{style:function(bC){return {decorator:ha,width:16,height:16};
}},"colorselector/preset-field-set":fG,"colorselector/input-field-set":fG,"colorselector/preview-field-set":fG,"colorselector/hex-field-composite":hb,"colorselector/hex-field":gD,"colorselector/rgb-spinner-composite":hb,"colorselector/rgb-spinner-red":hk,"colorselector/rgb-spinner-green":hk,"colorselector/rgb-spinner-blue":hk,"colorselector/hsb-spinner-composite":hb,"colorselector/hsb-spinner-hue":hk,"colorselector/hsb-spinner-saturation":hk,"colorselector/hsb-spinner-brightness":hk,"colorselector/preview-content-old":{style:function(c){return {decorator:ha,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(y){return {decorator:ha,backgroundColor:gU,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(cp){return {decorator:ha,margin:5};
}},"colorselector/brightness-field":{style:function(o){return {decorator:ha,margin:[5,7]};
}},"colorselector/hue-saturation-pane":hb,"colorselector/hue-saturation-handle":hb,"colorselector/brightness-pane":hb,"colorselector/brightness-handle":hb,"colorpopup":{alias:hj,include:hj,style:function(bA){return {padding:5,backgroundColor:gI};
}},"colorpopup/field":{style:function(W){return {decorator:ha,margin:2,width:14,height:14,backgroundColor:gU};
}},"colorpopup/selector-button":gY,"colorpopup/auto-button":gY,"colorpopup/preview-pane":fG,"colorpopup/current-preview":{style:function(bK){return {height:20,padding:4,marginLeft:4,decorator:ha,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(A){return {height:20,padding:4,marginRight:4,decorator:ha,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gY,include:gY,style:function(dA){return {icon:eb};
}},"colorpopup/colorselector-cancelbutton":{alias:gY,include:gY,style:function(db){return {icon:fM};
}},"table":{alias:hb,style:function(cs){return {decorator:eJ};
}},"table-header":{},"table/statusbar":{style:function(dx){return {decorator:fp,padding:[0,2]};
}},"table/column-button":{alias:hd,style:function(l){return {decorator:ey,padding:3,icon:fI};
}},"table-column-reset-button":{include:fB,alias:fB,style:function(){return {icon:eh};
}},"table-scroller":hb,"table-scroller/scrollbar-x":hm,"table-scroller/scrollbar-y":hm,"table-scroller/header":{style:function(cd){return {decorator:fg};
}},"table-scroller/pane":{style:function(X){return {backgroundColor:fj};
}},"table-scroller/focus-indicator":{style:function(bp){return {decorator:eX};
}},"table-scroller/resize-line":{style:function(cz){return {backgroundColor:gN,width:2};
}},"table-header-cell":{alias:hc,style:function(bw){return {minWidth:13,minHeight:20,padding:bw.hovered?[3,4,2,4]:[3,4],decorator:bw.hovered?eg:eT,sortIcon:bw.sorted?(bw.sortedAscending?ee:dJ):undefined};
}},"table-header-cell/label":{style:function(bJ){return {minWidth:0,alignY:gW,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(bv){return {alignY:gW,alignX:dQ};
}},"table-header-cell/icon":{style:function(bU){return {minWidth:0,alignY:gW,paddingRight:5};
}},"table-editor-textfield":{include:gD,style:function(dy){return {decorator:undefined,padding:[2,2],backgroundColor:gU};
}},"table-editor-selectbox":{include:eQ,alias:eQ,style:function(cc){return {padding:[0,2],backgroundColor:gU};
}},"table-editor-combobox":{include:gz,alias:gz,style:function(B){return {decorator:undefined,backgroundColor:gU};
}},"progressive-table-header":{alias:hb,style:function(j){return {decorator:ho};
}},"progressive-table-header-cell":{alias:hc,style:function(ca){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:gb};
}},"app-header":{style:function(ds){return {font:gX,textColor:gV,padding:[8,12],decorator:eV};
}},"virtual-list":hh,"virtual-list/row-layer":eW,"row-layer":{style:function(f){return {colorEven:hA,colorOdd:ea};
}},"column-layer":hb,"cell":{style:function(cM){return {textColor:cM.selected?gV:dT,padding:[3,6],font:eM};
}},"cell-string":fF,"cell-number":{include:fF,style:function(q){return {textAlign:dQ};
}},"cell-image":fF,"cell-boolean":{include:fF,style:function(co){return {iconTrue:fb,iconFalse:dC};
}},"cell-atom":fF,"cell-date":fF,"cell-html":fF}});
})();
(function(){var a="santiglaus.theme.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});
})();
(function(){var a="santiglaus.theme.Theme";
qx.Theme.define(a,{meta:{color:santiglaus.theme.Color,decoration:santiglaus.theme.Decoration,font:santiglaus.theme.Font,icon:qx.theme.icon.Tango,appearance:santiglaus.theme.Appearance}});
})();
(function(){var t="emulated",s="native",r='"',q="qx.lang.Core",p="\\\\",o="\\\"",n="[object Error]";
qx.Bootstrap.define(q,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==n)?t:s,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?s:t,{"native":Array.prototype.indexOf,"emulated":function(d,e){if(e==null){e=0;
}else if(e<0){e=Math.max(0,this.length+e);
}
for(var i=e;i<this.length;i++){if(this[i]===d){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?s:t,{"native":Array.prototype.lastIndexOf,"emulated":function(u,v){if(v==null){v=this.length-1;
}else if(v<0){v=Math.max(0,this.length+v);
}
for(var i=v;i>=0;i--){if(this[i]===u){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?s:t,{"native":Array.prototype.forEach,"emulated":function(j,k){var l=this.length;

for(var i=0;i<l;i++){var m=this[i];

if(m!==undefined){j.call(k||window,m,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?s:t,{"native":Array.prototype.filter,"emulated":function(w,x){var y=[];
var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){if(w.call(x||window,z,i,this)){y.push(this[i]);
}}}return y;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?s:t,{"native":Array.prototype.map,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){C[i]=A.call(B||window,D,i,this);
}}return C;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?s:t,{"native":Array.prototype.some,"emulated":function(f,g){var l=this.length;

for(var i=0;i<l;i++){var h=this[i];

if(h!==undefined){if(f.call(g||window,h,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?s:t,{"native":Array.prototype.every,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(!a.call(b||window,c,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?s:t,{"native":String.prototype.quote,"emulated":function(){return r+this.replace(/\\/g,p).replace(/\"/g,o)+r;
}})}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var E=":",D="qx.client",C="anonymous",B="...",A="qx.dev.StackTrace",z="",y="\n",x="/source/class/",w=".";
qx.Class.define(A,{statics:{getStackTrace:qx.core.Variant.select(D,{"gecko":function(){try{throw new Error();
}catch(l){var W=this.getStackTraceFromError(l);
qx.lang.Array.removeAt(W,0);
var U=this.getStackTraceFromCaller(arguments);
var S=U.length>W.length?U:W;

for(var i=0;i<Math.min(U.length,W.length);i++){var T=U[i];

if(T.indexOf(C)>=0){continue;
}var bb=T.split(E);

if(bb.length!=2){continue;
}var Y=bb[0];
var R=bb[1];
var Q=W[i];
var bc=Q.split(E);
var X=bc[0];
var P=bc[1];

if(qx.Class.getByName(X)){var V=X;
}else{V=Y;
}var ba=V+E;

if(R){ba+=R+E;
}ba+=P;
S[i]=ba;
}return S;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var F;

try{F.bar();
}catch(a){var G=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(G,0);
return G;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(D,{"opera":function(c){return [];
},"default":function(m){var r=[];
var q=qx.lang.Function.getCaller(m);
var n={};

while(q){var o=qx.lang.Function.getName(q);
r.push(o);

try{q=q.caller;
}catch(O){break;
}
if(!q){break;
}var p=qx.core.ObjectRegistry.toHashCode(q);

if(n[p]){r.push(B);
break;
}n[p]=q;
}return r;
}}),getStackTraceFromError:qx.core.Variant.select(D,{"gecko":function(d){if(!d.stack){return [];
}var k=/@(.+):(\d+)$/gm;
var e;
var f=[];

while((e=k.exec(d.stack))!=null){var g=e[1];
var j=e[2];
var h=this.__bP(g);
f.push(h+E+j);
}return f;
},"webkit":function(b){if(b.sourceURL&&b.line){return [this.__bP(b.sourceURL)+E+b.line];
}else{return [];
}},"opera":function(H){if(H.message.indexOf("Backtrace:")<0){return [];
}var J=[];
var K=qx.lang.String.trim(H.message.split("Backtrace:")[1]);
var L=K.split(y);

for(var i=0;i<L.length;i++){var I=L[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(I&&I.length>=2){var N=I[1];
var M=this.__bP(I[2]);
J.push(M+E+N);
}}return J;
},"default":function(){return [];
}}),__bP:function(s){var v=x;
var t=s.indexOf(v);
var u=(t==-1)?s:s.substring(t+v.length).replace(/\//g,w).replace(/\.js$/,z);
return u;
}}});
})();
(function(){var j="qx.event.type.Data",i="qx.event.type.Event",h="qx.data.IListData";
qx.Interface.define(h,{events:{"change":j,"changeLength":i},members:{getItem:function(f){},setItem:function(d,e){},splice:function(a,b,c){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var g="qx.globalErrorHandling",f="on",e="qx.event.GlobalError";
qx.Bootstrap.define(e,{statics:{setErrorHandler:function(k,l){this.__bQ=k||null;
this.__bR=l||window;

if(qx.core.Setting.get(g)===f){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__bS,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__bS:function(b,c,d){if(this.__bQ){this.handleError(new qx.core.WindowError(b,c,d));
return true;
}},observeMethod:function(a){if(qx.core.Setting.get(g)===f){var self=this;
return function(){if(!self.__bQ){return a.apply(this,arguments);
}
try{return a.apply(this,arguments);
}catch(j){self.handleError(j);
}};
}else{return a;
}},handleError:function(i){if(this.__bQ){this.__bQ.call(this.__bR,i);
}}},defer:function(h){qx.core.Setting.define(g,f);
h.setErrorHandler(null,null);
}});
})();
(function(){var e="",d="qx.core.WindowError";
qx.Class.define(d,{extend:Error,construct:function(a,b,c){Error.call(this,a);
this.__bT=a;
this.__bU=b||e;
this.__bV=c===undefined?-1:c;
},members:{__bT:null,__bU:null,__bV:null,toString:function(){return this.__bT;
},getUri:function(){return this.__bU;
},getLineNumber:function(){return this.__bV;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}}});
})();
(function(){var l="load",k="unload",j="qx.client",i="ready",h="mshtml",g="qx.event.handler.Application",f="complete",e="gecko|opera|webkit",d="left",c="_window",a="DOMContentLoaded",b="shutdown";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._window=r.getWindow();
this.__bW=false;
this.__bX=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bY:false,onScriptLoaded:function(){this.__bY=true;
var p=qx.event.handler.Application.$$instance;

if(p){p.__cc();
}}},members:{canHandleEvent:function(y,z){},registerEvent:function(u,v,w){},unregisterEvent:function(m,n,o){},__ca:null,__bW:null,__bX:null,__cb:null,__cc:function(){var q=qx.event.handler.Application;
if(!this.__ca&&this.__bW&&q.__bY){this.__ca=true;
qx.event.Registration.fireEvent(this._window,i);
}},isApplicationReady:function(){return this.__ca;
},_initObserver:function(){if(qx.$$domReady||document.readyState==f){this.__bW=true;
this.__cc();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(j,e)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(j,h)){var x=function(){try{document.documentElement.doScroll(d);
this._onNativeLoadWrapped();
}catch(t){window.setTimeout(x,100);
}};
x();
}qx.bom.Event.addNativeListener(this._window,l,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,k,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,l,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,k,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__bW=true;
this.__cc();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cb){this.__cb=true;

try{qx.event.Registration.fireEvent(this._window,b);
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._disposeFields(c);
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var g="qx.util.ObjectPool",f="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(e){arguments.callee.base.call(this);
this.__cd={};

if(e!==undefined){this.setSize(e);
}},properties:{size:{check:f,init:null,nullable:true}},members:{__cd:null,getObject:function(h){if(this.$$disposed){return;
}
if(!h){throw new Error("Class needs to be defined!");
}var j=null;
var k=this.__cd[h.classname];

if(k){j=k.pop();
}
if(j){j.$$pooled=false;
}else{j=new h;
}return j;
},poolObject:function(a){if(!this.__cd){return;
}var b=a.classname;
var c=this.__cd[b];

if(a.$$pooled){throw new Error("Object is already pooled: "+a);
}
if(!c){this.__cd[b]=c=[];
}var d=this.getSize()||Infinity;

if(c.length>d){this.warn("Cannot pool "+a+" because the pool is already full.");
a.dispose();
return;
}a.$$pooled=true;
c.push(a);
}},destruct:function(){var o=this.__cd;
var m,n,i,l;

for(m in o){n=o[m];

for(i=0,l=n.length;i<l;i++){n[i].dispose();
}}delete this.__cd;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var p="_originalTarget",o="_relatedTarget",n="qx.event.type.Event",m="_target",l="_currentTarget";
qx.Class.define(n,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(f,g){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!f;
this._cancelable=!!g;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(i){if(i){var j=i;
}else{var j=qx.event.Pool.getInstance().getObject(this.constructor);
}j._type=this._type;
j._target=this._target;
j._currentTarget=this._currentTarget;
j._relatedTarget=this._relatedTarget;
j._originalTarget=this._originalTarget;
j._stopPropagation=this._stopPropagation;
j._bubbles=this._bubbles;
j._preventDefault=this._preventDefault;
j._cancelable=this._cancelable;
return j;
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(h){this._type=h;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(b){this._target=b;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(c){this._currentTarget=c;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(a){this._relatedTarget=a;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(e){this._originalTarget=e;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(q){this._bubbles=q;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(d){this._cancelable=d;
}},destruct:function(){this._disposeFields(m,l,o,p);
}});
})();
(function(){var j="__cf",i="Better use 'getData'",h="__ce",g="Better use 'getOldData'",f="qx.event.type.Data";
qx.Class.define(f,{extend:qx.event.type.Event,members:{__ce:null,__cf:null,init:function(c,d,e){arguments.callee.base.call(this,false,e);
this.__ce=c;
this.__cf=d;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b.__ce=this.__ce;
b.__cf=this.__cf;
return b;
},getData:function(){return this.__ce;
},getOldData:function(){return this.__cf;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__ce;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__cf;
}},destruct:function(){this._disposeFields(h,j);
}});
})();
(function(){var c="qx.event.IEventDispatcher";
qx.Interface.define(c,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(a,event,b){this.assertInstance(event,qx.event.type.Event);
this.assertString(b);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(e){this._manager=e;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(f,event,g){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(f,g,false);

if(h){for(var i=0,l=h.length;i<l;i++){var j=h[i].context||f;
h[i].handler.call(j,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var m="get",l="",k="[",h="]",g="last",f="change",d=".",c="Number",b="String",a="set",B="deepBinding",A="item",z="reset",y="' (",x="Boolean",w=") to the object '",v="Integer",u="qx.data.SingleValueBinding",t="No event could be found for the property",s="Binding from '",q="PositiveNumber",r="PositiveInteger",o="Binding does not exist!",p=").",n="Date";
qx.Class.define(u,{statics:{DEBUG_ON:false,__cg:{},bind:function(bj,bk,bl,bm,bn){var bs=bk.split(d);
var bp=this.__cn(bs);
var bv=[];
var bw=[];
var bt=[];
var bq=[];
var br=bj;
for(var i=0;i<bs.length;i++){if(bp[i]!==l){bq.push(f);
}else{bq.push(this.__ci(br,bs[i]));
}bv[i]=br;
if(i==bs.length-1){if(bp[i]!==l){var bz=bp[i]===g?br.length-1:bp[i];
var bo=br.getItem(bz);
this.__cm(bo,bl,bm,bn,bj);
bt[i]=this.__co(br,bq[i],bl,bm,bn,bp[i]);
}else{if(bs[i]!=null&&br[m+qx.lang.String.firstUp(bs[i])]!=null){var bo=br[m+qx.lang.String.firstUp(bs[i])]();
this.__cm(bo,bl,bm,bn,bj);
}bt[i]=this.__co(br,bq[i],bl,bm,bn);
}}else{var bx={index:i,propertyNames:bs,sources:bv,listenerIds:bt,arrayIndexValues:bp,targetObject:bl,targetProperty:bm,options:bn,listeners:bw};
var bu=qx.lang.Function.bind(this.__ch,this,bx);
bw.push(bu);
bt[i]=br.addListener(bq[i],bu);
}if(br[m+qx.lang.String.firstUp(bs[i])]==null){br=null;
}else if(bp[i]!==l){br=br[m+qx.lang.String.firstUp(bs[i])](bp[i]);
}else{br=br[m+qx.lang.String.firstUp(bs[i])]();
}
if(!br){break;
}}var by={type:B,listenerIds:bt,sources:bv};
this.__cp(by,bj,bk,bl,bm);
return by;
},__ch:function(U){if(U.options&&U.options.onUpdate){U.options.onUpdate(U.sources[U.index],U.targetObject);
}for(var j=U.index+1;j<U.propertyNames.length;j++){var Y=U.sources[j];
U.sources[j]=null;

if(!Y){continue;
}Y.removeListenerById(U.listenerIds[j]);
}var Y=U.sources[U.index];
for(var j=U.index+1;j<U.propertyNames.length;j++){if(U.arrayIndexValues[j-1]!==l){Y=Y[m+qx.lang.String.firstUp(U.propertyNames[j-1])](U.arrayIndexValues[j-1]);
}else{Y=Y[m+qx.lang.String.firstUp(U.propertyNames[j-1])]();
}U.sources[j]=Y;
if(!Y){this.__cj(U.targetObject,U.targetProperty);
break;
}if(j==U.propertyNames.length-1){if(qx.Class.implementsInterface(Y,qx.data.IListData)){var ba=U.arrayIndexValues[j]===g?Y.length-1:U.arrayIndexValues[j];
var W=Y.getItem(ba);
this.__cm(W,U.targetObject,U.targetProperty,U.options,U.sources[U.index]);
U.listenerIds[j]=this.__co(Y,f,U.targetObject,U.targetProperty,U.options,U.arrayIndexValues[j]);
}else{if(U.propertyNames[j]!=null&&Y[m+qx.lang.String.firstUp(U.propertyNames[j])]!=null){var W=Y[m+qx.lang.String.firstUp(U.propertyNames[j])]();
this.__cm(W,U.targetObject,U.targetProperty,U.options,U.sources[U.index]);
}var X=this.__ci(Y,U.propertyNames[j]);
U.listenerIds[j]=this.__co(Y,X,U.targetObject,U.targetProperty,U.options);
}}else{if(U.listeners[j]==null){var V=qx.lang.Function.bind(this.__ch,this,U);
U.listeners.push(V);
}if(qx.Class.implementsInterface(Y,qx.data.IListData)){var X=f;
}else{var X=this.__ci(Y,U.propertyNames[j]);
}U.listenerIds[j]=Y.addListener(X,U.listeners[j]);
}}},__ci:function(G,H){var I=this.__cr(G,H);
if(I==null){if(qx.Class.supportsEvent(G.constructor,H)){I=H;
}else if(qx.Class.supportsEvent(G.constructor,f+qx.lang.String.firstUp(H))){I=f+qx.lang.String.firstUp(H);
}else{throw new qx.core.AssertionError(t,H);
}}return I;
},__cj:function(bV,bW){var bX=this.__cl(bV,bW);

if(bX!=null){var bY=bW.substring(bW.lastIndexOf(d)+1,bW.length);
if(bY.charAt(bY.length-1)==h){this.__ck(bV,bW,null);
return;
}if(bX[z+qx.lang.String.firstUp(bY)]!=undefined){bX[z+qx.lang.String.firstUp(bY)]();
}else{bX[a+qx.lang.String.firstUp(bY)](null);
}}},__ck:function(ch,ci,cj){var cn=this.__cl(ch,ci);

if(cn!=null){var co=ci.substring(ci.lastIndexOf(d)+1,ci.length);
if(co.charAt(co.length-1)==h){var ck=co.substring(co.lastIndexOf(k)+1,co.length-1);
var cm=co.substring(0,co.lastIndexOf(k));
var cl=cn[m+qx.lang.String.firstUp(cm)]();

if(ck==g){ck=cl.length-1;
}
if(cl!=null){cl.setItem(ck,cj);
}}else{cn[a+qx.lang.String.firstUp(co)](cj);
}}},__cl:function(bC,bD){var bG=bD.split(d);
var bH=bC;
for(var i=0;i<bG.length-1;i++){try{var bF=bG[i];
if(bF.indexOf(h)==bF.length-1){var bE=bF.substring(bF.indexOf(k)+1,bF.length-1);
bF=bF.substring(0,bF.indexOf(k));
}bH=bH[m+qx.lang.String.firstUp(bF)]();

if(bE!=null){if(bE==g){bE=bH.length-1;
}bH=bH.getItem(bE);
bE=null;
}}catch(ca){return null;
}}return bH;
},__cm:function(M,N,O,P,Q){M=this.__cq(M,N,O,P);
if(M==null){this.__cj(N,O);
}if(M!=undefined){try{this.__ck(N,O,M);
if(P&&P.onUpdate){P.onUpdate(Q,N,M);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(P&&P.onSetFail){P.onSetFail(e);
}else{this.warn("Failed so set value "+M+" on "+N+". Error message: "+e);
}}}},__cn:function(ce){var cf=[];
for(var i=0;i<ce.length;i++){var name=ce[i];
if(qx.lang.String.endsWith(name,h)){var cg=name.substring(name.indexOf(k)+1,name.indexOf(h));
if(name.indexOf(h)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cg!==g){if(cg==l||isNaN(parseInt(cg))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){ce[i]=name.substring(0,name.indexOf(k));
cf[i]=l;
cf[i+1]=cg;
ce.splice(i+1,0,A);
i++;
}else{cf[i]=cg;
ce.splice(i,1,A);
}}else{cf[i]=l;
}}return cf;
},__co:function(cp,cq,cr,cs,ct,cu){var cv;
{};
var cx=function(C,e){if(C!==l){if(C===g){C=cp.length-1;
}var F=cp.getItem(C);
if(F==undefined){qx.data.SingleValueBinding.__cj(cr,cs);
}var D=e.getData().start;
var E=e.getData().end;

if(C<D||C>E){return;
}}else{var F=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cp+" by "+cq+" to "+cr+" ("+cs+")");
qx.log.Logger.debug("Data before conversion: "+F);
}F=qx.data.SingleValueBinding.__cq(F,cr,cs,ct);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+F);
}try{if(F!=undefined){qx.data.SingleValueBinding.__ck(cr,cs,F);
}else{qx.data.SingleValueBinding.__cj(cr,cs);
}if(ct&&ct.onUpdate){ct.onUpdate(cp,cr,F);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(ct&&ct.onSetFail){ct.onSetFail(e);
}else{this.warn("Failed so set value "+F+" on "+cr+". Error message: "+e);
}}};
if(!cu){cu=l;
}cx=qx.lang.Function.bind(cx,cp,cu);
var cw=cp.addListener(cq,cx);
return cw;
},__cp:function(bb,bc,bd,be,bf){if(this.__cg[bc.toHashCode()]===undefined){this.__cg[bc.toHashCode()]=[];
}this.__cg[bc.toHashCode()].push([bb,bc,bd,be,bf]);
},__cq:function(bM,bN,bO,bP){if(bP&&bP.converter){var bR;

if(bN.getModel){bR=bN.getModel();
}return bP.converter(bM,bR);
}else{var bT=this.__cl(bN,bO);
var bU=bO.substring(bO.lastIndexOf(d)+1,bO.length);
if(bT==null){return bM;
}var bS=qx.Class.getPropertyDefinition(bT.constructor,bU);
var bQ=bS==null?l:bS.check;
return this.__cs(bM,bQ);
}},__cr:function(cb,cc){var cd=qx.Class.getPropertyDefinition(cb.constructor,cc);

if(cd==null){return null;
}return cd.event;
},__cs:function(bg,bh){var bi=qx.lang.Type.getClass(bg);
if((bi==c||bi==b)&&(bh==v||bh==r)){bg=parseInt(bg);
}if((bi==x||bi==c||bi==n)&&bh==b){bg=bg+l;
}if((bi==c||bi==b)&&(bh==c||bh==q)){bg=parseFloat(bg);
}return bg;
},removeBindingFromObject:function(J,K){if(K.type==B){for(var i=0;i<K.sources.length;i++){if(K.sources[i]){K.sources[i].removeListenerById(K.listenerIds[i]);
}}}else{J.removeListenerById(K);
}var L=this.__cg[J.toHashCode()];
if(L!=undefined){for(var i=0;i<L.length;i++){if(L[i][0]==K){qx.lang.Array.remove(L,L[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(S){{};
var T=this.__cg[S.toHashCode()];
for(var i=T.length-1;i>=0;i--){this.removeBindingFromObject(S,T[i][0]);
}},getAllBindingsForObject:function(R){if(this.__cg[R.toHashCode()]===undefined){this.__cg[R.toHashCode()]=[];
}return this.__cg[R.toHashCode()];
},removeAllBindings:function(){for(var bB in this.__cg){var bA=qx.core.ObjectRegistry.fromHashCode(bB);
if(bA==null){delete this.__cg[bB];
continue;
}this.removeAllBindingsForObject(bA);
}this.__cg={};
},getAllBindings:function(){return this.__cg;
},showBindingInLog:function(bI,bJ){var bL;
for(var i=0;i<this.__cg[bI.toHashCode()].length;i++){if(this.__cg[bI.toHashCode()][i][0]==bJ){bL=this.__cg[bI.toHashCode()][i];
break;
}}
if(bL===undefined){var bK=o;
}else{var bK=s+bL[1]+y+bL[2]+w+bL[3]+y+bL[4]+p;
}qx.log.Logger.debug(bK);
},showAllBindingsInLog:function(){for(var cz in this.__cg){var cy=qx.core.ObjectRegistry.fromHashCode(cz);

for(var i=0;i<this.__cg[cz].length;i++){this.showBindingInLog(cy,this.__cg[cz][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__ct=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__ct:null,message:null,getComment:function(){return this.__ct;
},toString:function(){return this.__ct+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cu=qx.dev.StackTrace.getStackTrace();
},members:{__cu:null,getStackTrace:function(){return this.__cu;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var d="qx.event.handler.Object";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(e,f){return qx.Class.supportsEvent(e.constructor,f);
},registerEvent:function(a,b,c){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var j="qx.util.DisposeUtil";
qx.Class.define(j,{statics:{disposeFields:function(g,h){var name;

for(var i=0,l=h.length;i<l;i++){var name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}g[name]=null;
}},disposeObjects:function(e,f){var name;

for(var i=0,l=f.length;i<l;i++){name=f[i];

if(e[name]==null||!e.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(e[name].dispose){e[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}e[name]=null;
}},disposeArray:function(n,o){var q=n[o];

if(!q){return;
}if(qx.core.ObjectRegistry.inShutDown){n[o]=null;
return;
}try{var p;

for(var i=q.length-1;i>=0;i--){p=q[i];

if(p){p.dispose();
}}}catch(k){throw new Error("The array field: "+o+" of object: "+n+" has non disposable entries: "+k);
}q.length=0;
n[o]=null;
},disposeMap:function(a,b){var c=a[b];

if(!c){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{for(var d in c){if(c.hasOwnProperty(d)){c[d].dispose();
}}}catch(m){throw new Error("The map field: "+b+" of object: "+a+" has non disposable entries: "+m);
}a[b]=null;
}}});
})();
(function(){var u="indexOf",t="lastIndexOf",r="slice",q="concat",p="join",o="toLocaleUpperCase",n="shift",m="substr",k="filter",j="unshift",Q="match",P="quote",O="qx.lang.Generics",N="localeCompare",M="sort",L="some",K="charAt",J="split",I="substring",H="pop",B="toUpperCase",C="replace",z="push",A="charCodeAt",x="every",y="reverse",v="search",w="forEach",D="map",E="toLowerCase",G="splice",F="toLocaleLowerCase";
qx.Bootstrap.define(O,{statics:{__cv:{"Array":[p,y,M,z,H,n,j,G,q,r,u,t,w,D,k,L,x],"String":[P,I,E,B,K,A,u,t,F,o,N,Q,v,C,J,m,q,r]},__cw:function(g,h){return function(s){return g.prototype[h].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cx:function(){var b=qx.lang.Generics.__cv;

for(var f in b){var d=window[f];
var c=b[f];

for(var i=0,l=c.length;i<l;i++){var e=c[i];

if(!d[e]){d[e]=qx.lang.Generics.__cw(d,e);
}}}}},defer:function(a){a.__cx();
}});
})();
(function(){var p='<div style="',o='"></div>',n="mshtml",m='"/>',l="",k='" style="vertical-align:top;',j="scale",i="qx.client",h="qx.ui.decoration.Util",g='<img src="',f="overflow:hidden;";
qx.Class.define(h,{statics:{insetsModified:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var c=qx.theme.manager.Decoration.getInstance();
var e=c.resolve(a).getInsets();
var d=c.resolve(b).getInsets();

if(e.top!=d.top||e.right!=d.right||e.bottom!=d.bottom||e.left!=d.left){return true;
}return false;
},generateBackgroundMarkup:function(q,r,s,top,t){if(q){var u=qx.util.AliasManager.getInstance().resolve(q);
if(r==j){var v=qx.util.ResourceManager.getInstance().toUri(u);
return g+v+k+t+m;
}else{var back=qx.bom.element.Background.compile(u,r,s,top);
return p+back+t+o;
}}else{if(t){if(qx.core.Variant.isSet(i,n)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){t+=f;
}}return p+t+o;
}else{return l;
}}}}});
})();
(function(){var l="decoration",k="object",j="_applyTheme",i="__cy",h="qx.theme.manager.Decoration",g="Theme",f="string",e="singleton";
qx.Class.define(h,{type:e,extend:qx.core.Object,properties:{theme:{check:g,nullable:true,apply:j}},members:{__cy:null,resolve:function(m){if(!m){return null;
}
if(typeof m===k){return m;
}var p=this.getTheme();

if(!p){return null;
}var p=this.getTheme();

if(!p){return null;
}var q=this.__cy;

if(!q){q=this.__cy={};
}var n=q[m];

if(n){return n;
}var o=p.decorations[m];

if(!o){return null;
}var r=o.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+m+"!");
}return q[m]=(new r).set(o.style);
},isValidPropertyValue:function(c){if(typeof c===f){return this.isDynamic(c);
}else if(typeof c===k){var d=c.constructor;
return qx.Class.hasInterface(d,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(a){if(!a){return false;
}var b=this.getTheme();

if(!b){return false;
}return !!b.decorations[a];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();
if(s){v.add(l,s.resource);
}else{v.remove(l);
}
if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__cy={};
}}},destruct:function(){this._disposeMap(i);
}});
})();
(function(){var d="_dynamic",c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(a){return this._dynamic[a];
},isDynamic:function(g){return !!this._dynamic[g];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(d);
}});
})();
(function(){var r="/",q="0",p="qx/static",o="http://",n="https://",m="file://",l="qx.util.AliasManager",k="__cz",j="singleton",i=".",h="static";
qx.Class.define(l,{type:j,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cz={};
this.add(h,p);
},members:{__cz:null,_preprocess:function(s){var v=this._getDynamic();

if(v[s]===false){return s;
}else if(v[s]===undefined){if(s.charAt(0)===r||s.charAt(0)===i||s.indexOf(o)===0||s.indexOf(n)===q||s.indexOf(m)===0){v[s]=false;
return s;
}
if(this.__cz[s]){return this.__cz[s];
}var u=s.substring(0,s.indexOf(r));
var t=this.__cz[u];

if(t!==undefined){v[s]=t+s.substring(u.length);
}}return s;
},add:function(b,c){this.__cz[b]=c;
var e=this._getDynamic();
for(var d in e){if(d.substring(0,d.indexOf(r))===b){e[d]=c+d.substring(b.length);
}}},remove:function(a){delete this.__cz[a];
},resolve:function(f){var g=this._getDynamic();

if(f!==null){f=this._preprocess(f);
}return g[f]||f;
}},destruct:function(){this._disposeFields(k);
}});
})();
(function(){var a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:false,VML:false,XPATH:false,AIR:false,GEARS:false,SSL:false,__cA:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
this.QUIRKS_MODE=!this.STANDARD_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.CANVAS=!!window.CanvasRenderingContext2D;
this.VML=qx.bom.client.Engine.MSHTML;
this.AIR=navigator.userAgent.indexOf("adobeair")!==-1;
this.GEARS=!!(window.google&&window.google.gears);
this.XPATH=!!document.evaluate;
this.SSL=window.location.protocol==="https:";
}},defer:function(b){b.__cA();
}});
})();
(function(){var M="/",L="mshtml",K="qx.client",J="string",I="",H="?",G="Use 'getInstance().isClippedImage' instead!",F="Use 'getInstance().getImageWidth' instead!",E="Use 'getInstance().has' instead!",D="Use 'getInstance().getImageFormat' instead!",z="Use 'getInstance().getData' instead!",C="Use 'getInstance().getImageHeight' instead!",B="Use 'getInstance().toUri' instead!",y="qx.util.ResourceManager",x="singleton",A="qx.isSource";
qx.Class.define(y,{extend:qx.core.Object,type:x,statics:{__cB:qx.$$resources||{},__cC:{},has:function(r){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E);
return this.getInstance().has(r);
},getData:function(o){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
return this.getInstance().getData(o);
},getImageWidth:function(s){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
return this.getInstance().getImageWidth(s);
},getImageHeight:function(q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,C);
return this.getInstance().getImageHeight(q);
},getImageFormat:function(l){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return this.getInstance().getImageFormat(l);
},isClippedImage:function(P){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
return this.getInstance().isClippedImage(P);
},toUri:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
return this.getInstance().toUri(Q);
}},members:{has:function(p){return !!arguments.callee.self.__cB[p];
},getData:function(k){return arguments.callee.self.__cB[k]||null;
},getImageWidth:function(N){var O=arguments.callee.self.__cB[N];
return O?O[0]:null;
},getImageHeight:function(m){var n=arguments.callee.self.__cB[m];
return n?n[1]:null;
},getImageFormat:function(v){var w=arguments.callee.self.__cB[v];
return w?w[2]:null;
},isClippedImage:function(t){var u=arguments.callee.self.__cB[t];
return u&&u.length>4;
},toUri:function(a){if(a==null){return a;
}var b=arguments.callee.self.__cB[a];

if(!b){return a;
}
if(typeof b===J){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=I;

if(qx.core.Variant.isSet(K,L)&&qx.bom.client.Feature.SSL){c=arguments.callee.self.__cC[d];
}return c+qx.$$libraries[d].resourceUri+M+a;
}},defer:function(e){if(qx.core.Variant.isSet(K,L)){if(qx.bom.client.Feature.SSL){for(var i in qx.$$libraries){var g=qx.$$libraries[i].resourceUri;
if(g.match(/^\/\//)!=null){e.__cC[i]=window.location.protocol;
}else if(g.match(/^\.\//)!=null&&qx.core.Setting.get(A)){var f=document.URL;
e.__cC[i]=f.substring(0,f.lastIndexOf(M));
}else if(g.match(/^http/)!=null){}else{var j=window.location.href.indexOf(H);
var h;

if(j==-1){h=window.location.href;
}else{h=window.location.href.substring(0,j);
}e.__cC[i]=h.substring(0,h.lastIndexOf(M)+1);
}}}}}});
})();
(function(){var C="number",B="0",A="px",z=";",y="background-image:url(",x=");",w="",v=")",u="background-repeat:",t=" ",q="qx.bom.element.Background",s="url(",r="background-position:";
qx.Class.define(q,{statics:{__cD:[y,null,x,r,null,z,u,null,z],__cE:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cF:function(a,top){var b=qx.bom.client.Engine;

if(b.GECKO&&b.VERSION<1.9&&a==top&&typeof a==C){top+=0.01;
}
if(a){var c=(typeof a==C)?a+A:a;
}else{c=B;
}
if(top){var d=(typeof top==C)?top+A:top;
}else{d=B;
}return c+t+d;
},compile:function(D,E,F,top){var G=this.__cF(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__cD;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(w);
},getStyles:function(e,f,g,top){if(!e){return this.__cE;
}var h=this.__cF(g,top);
var i=qx.util.ResourceManager.getInstance().toUri(e);
var j={backgroundPosition:h,backgroundImage:s+i+v};

if(f!=null){j.backgroundRepeat=f;
}return j;
},set:function(k,l,m,n,top){var o=this.getStyles(l,m,n,top);

for(var p in o){k.style[p]=o[p];
}}}});
})();
(function(){var p="_applyTheme",o="qx.theme.manager.Color",n="Theme",m="changeTheme",l="string",k="singleton";
qx.Class.define(o,{type:k,extend:qx.util.ValueManager,properties:{theme:{check:n,nullable:true,apply:p,event:m}},members:{_applyTheme:function(e){var f={};

if(e){var g=e.colors;
var h=qx.util.ColorUtil;
var i;

for(var j in g){i=g[j];

if(typeof i===l){if(!h.isCssString(i)){throw new Error("Could not parse color: "+i);
}}else if(i instanceof Array){i=h.rgbToRgbString(i);
}else{throw new Error("Could not parse color: "+i);
}f[j]=i;
}}this._setDynamic(f);
},resolve:function(a){var d=this._dynamic;
var b=d[a];

if(b){return b;
}var c=this.getTheme();

if(c!==null&&c.colors[a]){return d[a]=c.colors[a];
}return a;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var m=",",l="rgb(",k=")",j="qx.theme.manager.Color",h="qx.util.ColorUtil";
qx.Class.define(h,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(a){return this.NAMED[a]!==undefined;
},isSystemColor:function(e){return this.SYSTEM[e]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(j);
},isThemedColor:function(be){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(be);
},stringToRgb:function(c){if(this.supportsThemes()&&this.isThemedColor(c)){var c=qx.theme.manager.Color.getInstance().resolveDynamic(c);
}
if(this.isNamedColor(c)){return this.NAMED[c];
}else if(this.isSystemColor(c)){throw new Error("Could not convert system colors to RGB: "+c);
}else if(this.isRgbString(c)){return this.__cG();
}else if(this.isHex3String(c)){return this.__cI();
}else if(this.isHex6String(c)){return this.__cJ();
}throw new Error("Could not parse color: "+c);
},cssStringToRgb:function(bf){if(this.isNamedColor(bf)){return this.NAMED[bf];
}else if(this.isSystemColor(bf)){throw new Error("Could not convert system colors to RGB: "+bf);
}else if(this.isRgbString(bf)){return this.__cG();
}else if(this.isRgbaString(bf)){return this.__cH();
}else if(this.isHex3String(bf)){return this.__cI();
}else if(this.isHex6String(bf)){return this.__cJ();
}throw new Error("Could not parse color: "+bf);
},stringToRgbString:function(S){return this.rgbToRgbString(this.stringToRgb(S));
},rgbToRgbString:function(bd){return l+bd[0]+m+bd[1]+m+bd[2]+k;
},rgbToHexString:function(bb){return (qx.lang.String.pad(bb[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(bb[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(bb[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(P){return this.isThemedColor(P)||this.isNamedColor(P)||this.isHex3String(P)||this.isHex6String(P)||this.isRgbString(P);
},isCssString:function(R){return this.isSystemColor(R)||this.isNamedColor(R)||this.isHex3String(R)||this.isHex6String(R)||this.isRgbString(R);
},isHex3String:function(u){return this.REGEXP.hex3.test(u);
},isHex6String:function(ba){return this.REGEXP.hex6.test(ba);
},isRgbString:function(d){return this.REGEXP.rgb.test(d);
},isRgbaString:function(N){return this.REGEXP.rgba.test(N);
},__cG:function(){var bi=parseInt(RegExp.$1,10);
var bh=parseInt(RegExp.$2,10);
var bg=parseInt(RegExp.$3,10);
return [bi,bh,bg];
},__cH:function(){var s=parseInt(RegExp.$1,10);
var o=parseInt(RegExp.$2,10);
var n=parseInt(RegExp.$3,10);
return [s,o,n];
},__cI:function(){var x=parseInt(RegExp.$1,16)*17;
var w=parseInt(RegExp.$2,16)*17;
var v=parseInt(RegExp.$3,16)*17;
return [x,w,v];
},__cJ:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(O){if(this.isHex3String(O)){return this.__cI(O);
}throw new Error("Invalid hex3 value: "+O);
},hex6StringToRgb:function(Q){if(this.isHex6String(Q)){return this.__cJ(Q);
}throw new Error("Invalid hex6 value: "+Q);
},hexStringToRgb:function(bc){if(this.isHex3String(bc)){return this.__cI(bc);
}
if(this.isHex6String(bc)){return this.__cJ(bc);
}throw new Error("Invalid hex value: "+bc);
},rgbToHsb:function(y){var A,B,D;
var J=y[0];
var G=y[1];
var z=y[2];
var I=(J>G)?J:G;

if(z>I){I=z;
}var C=(J<G)?J:G;

if(z<C){C=z;
}D=I/255.0;

if(I!=0){B=(I-C)/I;
}else{B=0;
}
if(B==0){A=0;
}else{var F=(I-J)/(I-C);
var H=(I-G)/(I-C);
var E=(I-z)/(I-C);

if(J==I){A=E-H;
}else if(G==I){A=2.0+F-E;
}else{A=4.0+H-F;
}A=A/6.0;

if(A<0){A=A+1.0;
}}return [Math.round(A*360),Math.round(B*100),Math.round(D*100)];
},hsbToRgb:function(T){var i,f,p,q,t;
var U=T[0]/360;
var V=T[1]/100;
var W=T[2]/100;

if(U>=1.0){U%=1.0;
}
if(V>1.0){V=1.0;
}
if(W>1.0){W=1.0;
}var X=Math.floor(255*W);
var Y={};

if(V==0.0){Y.red=Y.green=Y.blue=X;
}else{U*=6.0;
i=Math.floor(U);
f=U-i;
p=Math.floor(X*(1.0-V));
q=Math.floor(X*(1.0-(V*f)));
t=Math.floor(X*(1.0-(V*(1.0-f))));

switch(i){case 0:Y.red=X;
Y.green=t;
Y.blue=p;
break;
case 1:Y.red=q;
Y.green=X;
Y.blue=p;
break;
case 2:Y.red=p;
Y.green=X;
Y.blue=t;
break;
case 3:Y.red=p;
Y.green=q;
Y.blue=X;
break;
case 4:Y.red=t;
Y.green=p;
Y.blue=X;
break;
case 5:Y.red=X;
Y.green=p;
Y.blue=q;
break;
}}return Y;
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var y="px",x="div",w="img",v="qx.client",u="",t="scale-x",s="mshtml",r="no-repeat",q="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",p="scale-y",P="repeat",O=".png",N="scale",M="webkit",L='<div style="',K="repeat-y",J='<img src="',I="qx.bom.element.Decoration",H="png",G="', sizingMethod='scale')",E="', sizingMethod='crop')",F='"/>',C='" style="',D="none",A="repeat-x",B='"></div>',z="absolute";
qx.Class.define(I,{statics:{DEBUG:false,__cK:qx.core.Variant.isSet(v,s)&&qx.bom.client.Engine.VERSION<9,__cL:qx.core.Variant.select(v,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__cM:{"scale-x":w,"scale-y":w,"scale":w,"repeat":x,"no-repeat":x,"repeat-x":x,"repeat-y":x},update:function(a,b,c,d){var f=this.getTagName(c,b);

if(f!=a.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var g=this.getAttributes(b,c,d);

if(f===w){a.src=g.src;
}if(a.style.backgroundPosition!=u&&g.style.backgroundPosition===undefined){g.style.backgroundPosition=null;
}if(a.style.clip!=u&&g.style.clip===undefined){g.style.clip=null;
}var e=qx.bom.element.Style;
e.setStyles(a,g.style);
},create:function(j,k,l){var m=this.getTagName(k,j);
var o=this.getAttributes(j,k,l);
var n=qx.bom.element.Style.compile(o.style);

if(m===w){return J+o.src+C+n+F;
}else{return L+n+B;
}},getTagName:function(h,i){if(qx.core.Variant.isSet(v,s)){if(i&&this.__cK&&this.__cL[h]&&qx.lang.String.endsWith(i,O)){return x;
}}return this.__cM[h];
},getAttributes:function(Q,R,S){var W=qx.util.ResourceManager.getInstance();
var bc=qx.io2.ImageLoader;
var bd=qx.bom.element.Background;

if(!S){S={};
}
if(!S.position){S.position=z;
}
if(qx.core.Variant.isSet(v,s)){S.fontSize=0;
S.lineHeight=0;
}else if(qx.core.Variant.isSet(v,M)){S.WebkitUserDrag=D;
}var bb=W.getImageWidth(Q)||bc.getWidth(Q);
var ba=W.getImageHeight(Q)||bc.getHeight(Q);
var X=W.getImageFormat(Q)||bc.getFormat(Q);
{};
if(this.__cK&&this.__cL[R]&&X===H){if(S.width==null&&bb!=null){S.width=bb+y;
}
if(S.height==null&&ba!=null){S.height=ba+y;
}
if(R==r){S.filter=q+W.toUri(Q)+E;
}else{S.filter=q+W.toUri(Q)+G;
}S.backgroundImage=S.backgroundRepeat=u;
return {style:S};
}else{if(R===N){var Y=W.toUri(Q);

if(S.width==null&&bb!=null){S.width=bb+y;
}
if(S.height==null&&ba!=null){S.height=ba+y;
}return {src:Y,style:S};
}var V=W.isClippedImage(Q);

if(R===t||R===p){if(V){if(R===t){var bf=W.getData(Q);
var bh=W.getImageHeight(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={top:-bf[6],height:ba};
S.height=bh+y;
if(S.top!=null){S.top=(parseInt(S.top,10)+bf[6])+y;
}else if(S.bottom!=null){S.bottom=(parseInt(S.bottom,10)+ba-bh-bf[6])+y;
}return {src:Y,style:S};
}else{var bf=W.getData(Q);
var be=W.getImageWidth(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={left:-bf[5],width:bb};
S.width=be+y;
if(S.left!=null){S.left=(parseInt(S.left,10)+bf[5])+y;
}else if(S.right!=null){S.right=(parseInt(S.right,10)+bb-be-bf[5])+y;
}return {src:Y,style:S};
}}else{{};

if(R==t){S.height=ba==null?null:ba+y;
}else if(R==p){S.width=bb==null?null:bb+y;
}var Y=W.toUri(Q);
return {src:Y,style:S};
}}else{if(V&&R!==P){var bf=W.getData(Q);
var U=bd.getStyles(bf[4],R,bf[5],bf[6]);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null&&(R==K||R===r)){S.width=bb+y;
}
if(ba!=null&&S.height==null&&(R==A||R===r)){S.height=ba+y;
}return {style:S};
}else{{};
var U=bd.getStyles(Q,R);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null){S.width=bb+y;
}
if(ba!=null&&S.height==null){S.height=ba+y;
}if(S.filter){S.filter=u;
}return {style:S};
}}}}}});
})();
(function(){var C="qx.client",B="",A="boxSizing",z="cursor",y="opacity",x="clip",w="overflowY",v="overflowX",u="user-select",t="userSelect",bf="appearance",be="style",bd="MozUserModify",bc="px",bb="-webkit-appearance",ba="styleFloat",Y="-webkit-user-select",X="-moz-appearance",W="pixelHeight",V="MozAppearance",J=":",K="pixelTop",H="pixelLeft",I="text-overflow",F="-moz-user-select",G="MozUserSelect",D="qx.bom.element.Style",E="-moz-user-modify",L="-webkit-user-modify",M="WebkitUserSelect",P="-o-text-overflow",O="pixelRight",R="cssFloat",Q="pixelWidth",T="pixelBottom",S=";",N="WebkitUserModify",U="WebkitAppearance";
qx.Class.define(D,{statics:{__cN:{styleNames:{"float":qx.core.Variant.select(C,{"mshtml":ba,"default":R}),"appearance":qx.core.Variant.select(C,{"gecko":V,"webkit":U,"default":bf}),"userSelect":qx.core.Variant.select(C,{"gecko":G,"webkit":M,"default":t}),"userModify":qx.core.Variant.select(C,{"gecko":bd,"webkit":N,"default":t})},cssNames:{"appearance":qx.core.Variant.select(C,{"gecko":X,"webkit":bb,"default":bf}),"userSelect":qx.core.Variant.select(C,{"gecko":F,"webkit":Y,"default":u}),"userModify":qx.core.Variant.select(C,{"gecko":E,"webkit":L,"default":u}),"textOverflow":qx.core.Variant.select(C,{"opera":P,"default":I})},mshtmlPixel:{width:Q,height:W,left:H,right:O,top:K,bottom:T},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__cO:{},compile:function(i){var m=[];
var q=this.__cN;
var p=q.special;
var n=q.cssNames;
var l=this.__cO;
var o=qx.lang.String;
var name,k,j;

for(name in i){j=i[name];

if(j==null){continue;
}name=n[name]||name;
if(p[name]){switch(name){case x:m.push(qx.bom.element.Clip.compile(j));
break;
case z:m.push(qx.bom.element.Cursor.compile(j));
break;
case y:m.push(qx.bom.element.Opacity.compile(j));
break;
case A:m.push(qx.bom.element.BoxSizing.compile(j));
break;
case v:m.push(qx.bom.element.Overflow.compileX(j));
break;
case w:m.push(qx.bom.element.Overflow.compileY(j));
break;
}}else{k=l[name];

if(!k){k=l[name]=o.hyphenate(name);
}m.push(k,J,j,S);
}}return m.join(B);
},setCss:qx.core.Variant.select(C,{"mshtml":function(by,bz){by.style.cssText=bz;
},"default":function(r,s){r.setAttribute(be,s);
}}),getCss:qx.core.Variant.select(C,{"mshtml":function(bn){return bn.style.cssText.toLowerCase();
},"default":function(bj){return bj.getAttribute(be);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bo,name,bp,bq){{};
var br=this.__cN;
name=br.styleNames[name]||name;
if(bq!==false&&br.special[name]){switch(name){case x:return qx.bom.element.Clip.set(bo,bp);
case z:return qx.bom.element.Cursor.set(bo,bp);
case y:return qx.bom.element.Opacity.set(bo,bp);
case A:return qx.bom.element.BoxSizing.set(bo,bp);
case v:return qx.bom.element.Overflow.setX(bo,bp);
case w:return qx.bom.element.Overflow.setY(bo,bp);
}}bo.style[name]=bp!==null?bp:B;
},setStyles:function(bg,bh,bi){{};

for(var name in bh){this.set(bg,name,bh[name],bi);
}},reset:function(bk,name,bl){var bm=this.__cN;
name=bm.styleNames[name]||name;
if(bl!==false&&bm.special[name]){switch(name){case x:return qx.bom.element.Clip.reset(bk);
case z:return qx.bom.element.Cursor.reset(bk);
case y:return qx.bom.element.Opacity.reset(bk);
case A:return qx.bom.element.BoxSizing.reset(bk);
case v:return qx.bom.element.Overflow.resetX(bk);
case w:return qx.bom.element.Overflow.resetY(bk);
}}bk.style[name]=B;
},get:qx.core.Variant.select(C,{"mshtml":function(a,name,b,c){var h=this.__cN;
name=h.styleNames[name]||name;
if(c!==false&&h.special[name]){switch(name){case x:return qx.bom.element.Clip.get(a,b);
case z:return qx.bom.element.Cursor.get(a,b);
case y:return qx.bom.element.Opacity.get(a,b);
case A:return qx.bom.element.BoxSizing.get(a,b);
case v:return qx.bom.element.Overflow.getX(a,b);
case w:return qx.bom.element.Overflow.getY(a,b);
}}if(!a.currentStyle){return a.style[name]||B;
}switch(b){case this.LOCAL_MODE:return a.style[name]||B;
case this.CASCADED_MODE:return a.currentStyle[name]||B;
default:var g=a.currentStyle[name]||B;
if(/^-?[\.\d]+(px)?$/i.test(g)){return g;
}var f=h.mshtmlPixel[name];

if(f){var d=a.style[name];
a.style[name]=g||0;
var e=a.style[f]+bc;
a.style[name]=d;
return e;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(g)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return g;
}},"default":function(bs,name,bt,bu){var bx=this.__cN;
name=bx.styleNames[name]||name;
if(bu!==false&&bx.special[name]){switch(name){case x:return qx.bom.element.Clip.get(bs,bt);
case z:return qx.bom.element.Cursor.get(bs,bt);
case y:return qx.bom.element.Opacity.get(bs,bt);
case A:return qx.bom.element.BoxSizing.get(bs,bt);
case v:return qx.bom.element.Overflow.getX(bs,bt);
case w:return qx.bom.element.Overflow.getY(bs,bt);
}}switch(bt){case this.LOCAL_MODE:return bs.style[name]||B;
case this.CASCADED_MODE:if(bs.currentStyle){return bs.currentStyle[name]||B;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bv=qx.dom.Node.getDocument(bs);
var bw=bv.defaultView.getComputedStyle(bs,null);
return bw?bw[name]:B;
}}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(F){if(!F){return k;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}return d+top+l+G+l+H+l+K+i;
},get:function(o,p){var r=qx.bom.element.Style.get(o,c,p,false);
var w,top,u,t;
var q,s;

if(typeof r===e&&r!==n&&r!==h){r=qx.lang.String.trim(r);
if(/\((.*)\)/.test(r)){var v=RegExp.$1.split(l);
top=qx.lang.String.trim(v[0]);
q=qx.lang.String.trim(v[1]);
s=qx.lang.String.trim(v[2]);
w=qx.lang.String.trim(v[3]);
if(w===n){w=null;
}
if(top===n){top=null;
}
if(q===n){q=null;
}
if(s===n){s=null;
}if(top!=null){top=parseInt(top,10);
}
if(q!=null){q=parseInt(q,10);
}
if(s!=null){s=parseInt(s,10);
}
if(w!=null){w=parseInt(w,10);
}if(q!=null&&w!=null){u=q-w;
}else if(q!=null){u=q;
}
if(s!=null&&top!=null){t=s-top;
}else if(s!=null){t=s;
}}else{throw new Error("Could not parse clip string: "+r);
}}return {left:w||null,top:top||null,width:u||null,height:t||null};
},set:function(y,z){if(!z){y.style.clip=a;
return;
}var E=z.left;
var top=z.top;
var D=z.width;
var C=z.height;
var A,B;

if(E==null){A=(D==null?n:D+m);
E=n;
}else{A=(D==null?n:E+D+m);
E=E+m;
}
if(top==null){B=(C==null?n:C+m);
top=n;
}else{B=(C==null?n:top+C+m);
top=top+m;
}y.style.clip=j+top+l+A+l+B+l+E+g;
},reset:function(x){x.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__cP:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(a){return i+(this.__cP[a]||a)+g;
},get:function(b,c){return qx.bom.element.Style.get(b,e,c,false);
},set:function(o,p){o.style.cursor=this.__cP[p]||p;
},reset:function(q){q.style.cursor=j;
}}});
})();
(function(){var z="",y="qx.client",x=";",w="filter",v="opacity:",u="opacity",t="MozOpacity",s=");",r=")",q="zoom:1;filter:alpha(opacity=",n="qx.bom.element.Opacity",p="alpha(opacity=",o="-moz-opacity:";
qx.Class.define(n,{statics:{compile:qx.core.Variant.select(y,{"mshtml":function(F){if(F>=1){return z;
}
if(F<0.00001){F=0;
}return q+(F*100)+s;
},"gecko":function(d){if(d==1){d=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return o+d+x;
}else{return v+d+x;
}},"default":function(e){if(e==1){return z;
}return v+e+x;
}}),set:qx.core.Variant.select(y,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,w,qx.bom.element.Style.COMPUTED_MODE,false);
if(b>=1){a.style.filter=c.replace(/alpha\([^\)]*\)/gi,z);
return;
}
if(b<0.00001){b=0;
}if(!a.currentStyle||!a.currentStyle.hasLayout){a.style.zoom=1;
}a.style.filter=c.replace(/alpha\([^\)]*\)/gi,z)+p+b*100+r;
},"gecko":function(l,m){if(m==1){m=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){l.style.MozOpacity=m;
}else{l.style.opacity=m;
}},"default":function(A,B){if(B==1){B=z;
}A.style.opacity=B;
}}),reset:qx.core.Variant.select(y,{"mshtml":function(i){var j=qx.bom.element.Style.get(i,w,qx.bom.element.Style.COMPUTED_MODE,false);
i.style.filter=j.replace(/alpha\([^\)]*\)/gi,z);
},"gecko":function(k){if(qx.bom.client.Engine.VERSION<1.7){k.style.MozOpacity=z;
}else{k.style.opacity=z;
}},"default":function(G){G.style.opacity=z;
}}),get:qx.core.Variant.select(y,{"mshtml":function(H,I){var J=qx.bom.element.Style.get(H,w,I,false);

if(J){var K=J.match(/alpha\(opacity=(.*)\)/);

if(K&&K[1]){return parseFloat(K[1])/100;
}}return 1.0;
},"gecko":function(f,g){var h=qx.bom.element.Style.get(f,qx.bom.client.Engine.VERSION<1.7?t:u,g,false);

if(h==0.999999){h=1.0;
}
if(h!=null){return parseFloat(h);
}return 1.0;
},"default":function(C,D){var E=qx.bom.element.Style.get(C,u,D,false);

if(E!=null){return parseFloat(E);
}return 1.0;
}})}});
})();
(function(){var G="qx.client",F="",E="boxSizing",D="box-sizing",C=":",B="border-box",A="qx.bom.element.BoxSizing",z="KhtmlBoxSizing",y="-moz-box-sizing",x="WebkitBoxSizing",u=";",w="-khtml-box-sizing",v="content-box",t="-webkit-box-sizing",s="MozBoxSizing";
qx.Class.define(A,{statics:{__cQ:qx.core.Variant.select(G,{"mshtml":null,"webkit":[E,z,x],"gecko":[s],"opera":[E]}),__cR:qx.core.Variant.select(G,{"mshtml":null,"webkit":[D,w,t],"gecko":[y],"opera":[D]}),__cS:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cT:function(h){var j=this.__cS;
return j.tags[h.tagName.toLowerCase()]||j.types[h.type];
},compile:qx.core.Variant.select(G,{"mshtml":function(a){{};
},"default":function(b){var d=this.__cR;
var c=F;

if(d){for(var i=0,l=d.length;i<l;i++){c+=d[i]+C+b+u;
}}return c;
}}),get:qx.core.Variant.select(G,{"mshtml":function(k){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(k))){if(!this.__cT(k)){return v;
}}return B;
},"default":function(p){var r=this.__cQ;
var q;

if(r){for(var i=0,l=r.length;i<l;i++){q=qx.bom.element.Style.get(p,r[i],null,false);

if(q!=null&&q!==F){return q;
}}}return F;
}}),set:qx.core.Variant.select(G,{"mshtml":function(f,g){{};
},"default":function(m,n){var o=this.__cQ;

if(o){for(var i=0,l=o.length;i<l;i++){m.style[o[i]]=n;
}}}}),reset:function(e){this.set(e,F);
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.Document";
qx.Class.define(a,{statics:{isQuirksMode:function(h){return (h||window).document.compatMode!==b;
},isStandardMode:function(c){return (c||window).document.compatMode===b;
},getWidth:function(d){var e=(d||window).document;
var g=qx.bom.Viewport.getWidth(d);
var f=(qx.bom.client.Engine.OPERA&&qx.bom.client.Engine.VERSION>9.5&&qx.bom.client.Engine.VERSION<=10);
var scroll=e.compatMode===b?e.documentElement.scrollWidth:e.body.scrollWidth;
return f?g:Math.max(scroll,g);
},getHeight:function(i){var j=(i||window).document;
var l=qx.bom.Viewport.getHeight(i);
var k=(qx.bom.client.Engine.OPERA&&qx.bom.client.Engine.VERSION>9.5&&qx.bom.client.Engine.VERSION<=10);
var scroll=j.compatMode===b?j.documentElement.scrollHeight:j.body.scrollHeight;
return k?l:Math.max(scroll,l);
}}});
})();
(function(){var f="qx.client",e="CSS1Compat",d="qx.bom.Viewport";
qx.Class.define(d,{statics:{getWidth:qx.core.Variant.select(f,{"opera":function(c){return (c||window).document.body.clientWidth;
},"webkit":function(k){return (k||window).innerWidth;
},"default":function(l){var m=(l||window).document;
return m.compatMode===e?m.documentElement.clientWidth:m.body.clientWidth;
}}),getHeight:qx.core.Variant.select(f,{"opera":function(g){return (g||window).document.body.clientHeight;
},"webkit":function(b){return (b||window).innerHeight;
},"default":function(i){var j=(i||window).document;
return j.compatMode===e?j.documentElement.clientHeight:j.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(f,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(a){return (a||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(f,{"mshtml":function(n){var o=(n||window).document;
return o.documentElement.scrollTop||o.body.scrollTop;
},"default":function(h){return (h||window).pageYOffset;
}})}});
})();
(function(){var bI="",bH="qx.client",bG="hidden",bF="-moz-scrollbars-none",bE="overflow",bD=";",bC="overflowY",bB=":",bA="overflowX",bz="overflow:",bU="none",bT="scroll",bS="borderLeftStyle",bR="borderRightStyle",bQ="div",bP="borderRightWidth",bO="overflow-y",bN="borderLeftWidth",bM="-moz-scrollbars-vertical",bL="100px",bJ="qx.bom.element.Overflow",bK="overflow-x";
qx.Class.define(bJ,{statics:{__cU:null,getScrollbarWidth:function(){if(this.__cU!==null){return this.__cU;
}var bp=qx.bom.element.Style;
var br=function(bn,bo){return parseInt(bp.get(bn,bo))||0;
};
var bs=function(H){return (bp.get(H,bR)==bU?0:br(H,bP));
};
var bq=function(bc){return (bp.get(bc,bS)==bU?0:br(bc,bN));
};
var bu=qx.core.Variant.select(bH,{"mshtml":function(bj){if(bp.get(bj,bC)==bG||bj.clientWidth==0){return bs(bj);
}return Math.max(0,bj.offsetWidth-bj.clientLeft-bj.clientWidth);
},"default":function(bk){if(bk.clientWidth==0){var bl=bp.get(bk,bE);
var bm=(bl==bT||bl==bM?16:0);
return Math.max(0,bs(bk)+bm);
}return Math.max(0,(bk.offsetWidth-bk.clientWidth-bq(bk)));
}});
var bt=function(r){return bu(r)-bs(r);
};
var t=document.createElement(bQ);
var s=t.style;
s.height=s.width=bL;
s.overflow=bT;
document.body.appendChild(t);
var c=bt(t);
this.__cU=c?c:16;
document.body.removeChild(t);
return this.__cU;
},_compile:qx.core.Variant.select(bH,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(ba,bb){if(bb==bG){bb=bF;
}return bz+bb+bD;
}:
function(u,v){return u+bB+v+bD;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bf,bg){return bz+bg+bD;
}:
function(K,L){return K+bB+L+bD;
},"default":function(n,o){return n+bB+o+bD;
}}),compileX:function(R){return this._compile(bK,R);
},compileY:function(bV){return this._compile(bO,bV);
},getX:qx.core.Variant.select(bH,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bv,bw){var bx=qx.bom.element.Style.get(bv,bE,bw,false);

if(bx===bF){bx=bG;
}return bx;
}:
function(a,b){return qx.bom.element.Style.get(a,bA,b,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(p,q){return qx.bom.element.Style.get(p,bE,q,false);
}:
function(F,G){return qx.bom.element.Style.get(F,bA,G,false);
},"default":function(X,Y){return qx.bom.element.Style.get(X,bA,Y,false);
}}),setX:qx.core.Variant.select(bH,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(A,B){if(B==bG){B=bF;
}A.style.overflow=B;
}:
function(bh,bi){bh.style.overflowX=bi;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(i,j){i.style.overflow=j;
}:
function(ce,cf){ce.style.overflowX=cf;
},"default":function(U,V){U.style.overflowX=V;
}}),resetX:qx.core.Variant.select(bH,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(C){C.style.overflow=bI;
}:
function(W){W.style.overflowX=bI;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(w,x){w.style.overflow=bI;
}:
function(l,m){l.style.overflowX=bI;
},"default":function(M){M.style.overflowX=bI;
}}),getY:qx.core.Variant.select(bH,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(d,e){var f=qx.bom.element.Style.get(d,bE,e,false);

if(f===bF){f=bG;
}return f;
}:
function(bY,ca){return qx.bom.element.Style.get(bY,bC,ca,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(N,O){return qx.bom.element.Style.get(N,bE,O,false);
}:
function(P,Q){return qx.bom.element.Style.get(P,bC,Q,false);
},"default":function(g,h){return qx.bom.element.Style.get(g,bC,h,false);
}}),setY:qx.core.Variant.select(bH,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(I,J){if(J===bG){J=bF;
}I.style.overflow=J;
}:
function(cb,cc){cb.style.overflowY=cc;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){S.style.overflow=T;
}:
function(bW,bX){bW.style.overflowY=bX;
},"default":function(D,E){D.style.overflowY=E;
}}),resetY:qx.core.Variant.select(bH,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cd){cd.style.overflow=bI;
}:
function(k){k.style.overflowY=bI;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bd,be){bd.style.overflow=bI;
}:
function(y,z){y.style.overflowY=bI;
},"default":function(by){by.style.overflowY=bI;
}})}});
})();
(function(){var c="qx.client",b="qx.io2.ImageLoader",a="load";
qx.Bootstrap.define(b,{statics:{__cV:{},__cW:{width:null,height:null},__cX:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(y){var z=this.__cV[y];
return !!(z&&z.loaded);
},isFailed:function(A){var B=this.__cV[A];
return !!(B&&B.failed);
},isLoading:function(n){var o=this.__cV[n];
return !!(o&&o.loading);
},getFormat:function(x){if(x!=null&&this.__cV[x]){return this.__cV[x]||null;
}else{return null;
}},getSize:function(u){return this.__cV[u]||this.__cW;
},getWidth:function(E){var F=this.__cV[E];
return F?F.width:null;
},getHeight:function(k){var m=this.__cV[k];
return m?m.height:null;
},load:function(d,e,f){var g=this.__cV[d];

if(!g){g=this.__cV[d]={};
}if(e&&!f){f=window;
}if(g.loaded||g.loading||g.failed){if(e){if(g.loading){g.callbacks.push(e,f);
}else{e.call(f,d,g);
}}}else{g.loading=true;
g.callbacks=[];

if(e){g.callbacks.push(e,f);
}var j=new Image();
var h=qx.lang.Function.listener(this.__cY,this,j,d);
j.onload=h;
j.onerror=h;
j.src=d;
}},__cY:qx.event.GlobalError.observeMethod(function(event,p,q){var r=this.__cV[q];
if(event.type===a){r.loaded=true;
r.width=this.__da(p);
r.height=this.__db(p);
var s=this.__cX.exec(q);

if(s!=null){r.format=s[1];
}}else{r.failed=true;
}p.onload=p.onerror=null;
var t=r.callbacks;
delete r.loading;
delete r.callbacks;
for(var i=0,l=t.length;i<l;i+=2){t[i].call(t[i+1],q,r);
}}),__da:qx.core.Variant.select(c,{"gecko":function(C){return C.naturalWidth;
},"default":function(D){return D.width;
}}),__db:qx.core.Variant.select(c,{"gecko":function(v){return v.naturalHeight;
},"default":function(w){return w.height;
}})}});
})();
(function(){var k="_window",j="_manager",i="qx.event.handler.Window";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(l){arguments.callee.base.call(this);
this._manager=l;
this._window=l.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(r,s,t){},unregisterEvent:function(o,p,q){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var v=qx.event.handler.Window.SUPPORTED_TYPES;

for(var u in v){qx.bom.Event.addNativeListener(this._window,u,this._onNativeWrapper);
}},_stopWindowObserver:function(){var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var d=this._window;
var h=d.document;
var f=h.documentElement;
var c=e.target||e.srcElement;

if(c==null||c===d||c===h||c===f){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,d]);
qx.event.Registration.dispatchEvent(d,event);
var g=event.getReturnValue();

if(g!=null){e.returnValue=g;
return g;
}}})},destruct:function(){this._stopWindowObserver();
this._disposeFields(j,k);
},defer:function(w){qx.event.Registration.addHandler(w);
}});
})();
(function(){var l="ready",k="qx.application",j="beforeunload",i="qx.core.Init",h="shutdown";
qx.Class.define(i,{statics:{getApplication:function(){return this.__dd||null;
},__dc:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var d=qx.core.Setting.get(k);
var f=qx.Class.getByName(d);

if(f){this.__dd=new f;
var c=new Date;
this.__dd.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-c)+"ms");
var c=new Date;
this.__dd.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-c)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+d);
}},__de:function(e){var b=this.__dd;

if(b){e.setReturnValue(b.close());
}},__df:function(){var g=this.__dd;

if(g){g.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,l,a.__dc,a);
qx.event.Registration.addListener(window,h,a.__df,a);
qx.event.Registration.addListener(window,j,a.__de,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(j){var k=qx.locale.Manager;

if(k){return k.marktr.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var c="__dg",b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dg:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__dg;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__dg=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(d){},terminate:function(){}},destruct:function(){this._disposeFields(c);
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var co='						</td>',cn='					</tr>',cm='								</span>',cl='									<br/><br/>',ck='							</div>',cj='							<div align="justify">',ci="",ch='					<tr valign="top">',cg='						<td width="21">',cf='							<br/><br/>',bE='								<span class="text" align="justify">',bD="execute",bC='					<tr>',bB='						<td width="514">',bA="white",bz="changeValue",by='				</table>',bx='								<br/>',bw="santiglaus/santi1.jpg",bv="west",cv="finish",cw="Bitte machen Sie ein paar Angaben...",ct='						<td>',cu='					<br/><br/>',cr='				<table width="535" border="0" cellspacing="0" cellpadding="0" class="text">',cs='								Möchten Sie unseren Santichlaus buchen? Ja?',cp="Bitte geben Sie den Namen des Kindes ein",cq='								<span class="text" align="justify">Nach wie vor bestimmen Sie den Preis für den Besuch vom Santichlaus. Da es',cx='							<b class="text">5.&nbsp;&nbsp;</b>',cy="changeSelection",bX='							</span>',bW="Anmeldung abschicken",ca="http://comebackgloebb.ch/santichlaus/resource/Anleitung_Anmeldung_Santichlaus.pdf",bY='					<br/>',cc="Bitte geben Sie für Rückfragen Ihre E-Mail-Adresse an",cb='				<h1>',ce="16:30",cd='									<b>Wir freuen uns schon jetzt auf eine fröhliche Stimmung in Ihrer guten Stube und auf viele grosse Kinderaugen…</b>',bV='								<span class="text" align="justify">Mit ca. 20 Franken pro Kind sind unsere',bU="Kinder",m="Eintrag löschen",n="<br/>",o="Ich wünsche den Besuch des Santichlauses am Dienstag, 6. Dezember 2011 um",p="ValidationError",q="Tabelle ausgewählt ist. Sie können beliebig zwischen Einträgen wechseln, bereits getätigte Eingaben",r='								<br/><br/>',s="18:30",t="Alter",u='						Dr Santichlaus und sein Schmutzli werden auch',v='									Nikolaus — grosszügig unterstützen.',cC='									aber in den letzten Jahren zu Unsicherheiten bezüglich der Höhe des Betrags',cB="17:00",cA='							<b class="text">3.&nbsp;&nbsp;</b>',cz='									<b><i>Ihr Come Back Glöbb</i></b>',cG='									übergeben Sie dem Santichlaus, <b>bevor</b> er Ihre Wohnung betritt. Eine nette, chlausmässige',cF='						<td><span class="text" align="justify"></span></td>',cE='						<td colspan="2">',cD='						(ehemals Jungwacht und Blauring St. Peter & Paul, Allschwil) würde sich freuen, auch in diesem Jahr zu Ihnen',cI='						<td colspan="2"><span class="text" align="justify">Anmeldeschluss ist der 1. Dezember 2011</span></td>',cH="Bitte geben Sie das Alter des Kindes ein",U='						in diesem Jahr zu Ihnen unterwegs sein! Das erfahrene Chlause-Team des Come Back Glöbb',V="Bitte geben Sie für Rückfragen Ihre Telefonnummer an",S="Bitte geben Sie Ihren Wohnort an",T='								<span class="text">',Y='									Bitte haben Sie Verständnis: <b>dr Santichlaus kann Verspätung haben</b>, wenn sein Esel plötzlich bockt bzw.',ba="19:30",W="20:00",X='						in die gute Stube zu kommen, und Ihren Kindern und/oder Ihren Gästen eine Freude',Q="icon/22/actions/list-remove.png",R='									herunterladen, ausdrucken und per Post schicken können.',D='						zu bereiten. Wir sind ganz nette, aufgestellte Chläuse.',C='									Geschenke für Ihre Kleinen',F="Bitte geben Sie Ihren Vornamen an",E="Neues Kind erfassen",z='					</span>',y='									wir Sie rechtzeitig per Mail oder telefonisch informieren.',B='									Verpackung macht den Kindern Spass…',A="     (bitte Zeit auswählen)",x='								Dann beachten Sie bitte folgende «Spielregeln»</b>:',w="Hilfe zur Anmeldung",bf='							<b class="text">1.&nbsp;&nbsp;</b>',bg='									wenn es (hoffentlich nur ganz kleine) Verzögerungen gibt.',bh='						<td height="19" colspan="3">',bi='									dort hin, indem Sie oben "weiter zur Anmeldung" anklicken. Falls Sie sich lieber auf',bb="sendMail",bc="Erfassen Sie ein neues Kind mit dem entsprechenden Button und füllen Sie die Angaben im Formular weiter unten",bd="E Mail",be='							<b class="text">4.&nbsp;&nbsp;</b>',bj='						<td><span class="text" align="justify"><b>In diesem Jahr sind wir unterwegs am:</b></span></td>',bk='				</div>',N="santiglaus.Application",M="weiter zur Anmeldung ---->",L="icon/22/actions/list-add.png",K="Angaben zum Kind / zu den Kindern",J="aus. Wenn Sie mehrere Kinder erfassen, kann im Formular jeweils dasjenige bearbeitet werden, das in der",I='				<table width="535" border="0" cellspacing="0" cellpadding="0">',H='									gekommen ist, erlauben wir es uns, Ihnen eine Empfehlung abzugeben.',G='					<span class="text" align="justify">',P='				<div align="justify">',O='							<b class="text">2.&nbsp;&nbsp;</b>',bl='',bm='							<span class="text" align="justify"><b>6. Dezember von 16.30 bis 20.00 Uhr</b></span>',bn="santi",bo='									Falls der gewünschte Zeitpunkt für den Chlaus-Besuch <b>nicht mehr frei</b> ist, werden',bp="\"Was uns an Dir nicht so gefallen hat in diesem Jahr...\"",bq="gehen nicht verloren.",br="18:00",bs="19:00",bt='							<span class="text" align="justify">',bu='				</h1>',bI='					Dr Santichlaus chunnt!',bH='									Für Ihre <b>definitive Anmeldung</b> füllen Sie bitte unser Web-Anmeldeformular aus. Sie gelangen',bG="Bitte geben Sie Ihren Familiennamen an",bF="17:30",bM="Bitte geben Sie Ihre Adresse an",bL='\n',bK="\"Was uns an Dir besonders gefallen hat in diesem Jahr...\"",bJ="Bitte wählen Sie eine Zeit aus der Dropdown-Liste",bO="Bemerkungen (z.B. wo findet der Chlaus den Sack)",bN='									Auslagen gedeckt, und wir können weiterhin wichtige <a href="/content/node/6" target="_top"><b>Projekte</b></a> — ganz im Sinne von St.',bS='									herkömmlichem Weg anmelden möchten, gibt es auch ein <a href="/santichlaus/resource/Formular_Anmeldung_2011.pdf" target="_blank">Anmeldeformular im PDF-Format</a>, das Sie',bT='						<td class="text" width="514">',bQ='					<b>Liebe Eltern,</b>',bR="Adresse",bP="http://comebackgloebb.ch/services/index.php";
qx.Class.define(N,{extend:qx.application.Standalone,members:{main:function(){arguments.callee.base.call(this);
{};
var dc={label:new qx.ui.basic.Label([cb,bI,cu,bQ,bY,bu,P,G,u,U,cD,X,D,cu,z,bk,cr,bC,bj,cE,bm,co,cn,bC,cF,cI,cn,bC,bh,bt,bx,cs,r,x,bx,bx,bX,co,cn,by,cr,ch,cg,bf,cf,co,bT,cj,bE,bH,bi,bS,R,cl,cm,ck,co,cn,ch,cg,O,cf,co,bB,cj,bE,bo,y,cl,cm,ck,co,cn,ch,cg,cA,cf,co,bB,cj,bE,Y,bg,cl,cm,ck,co,cn,ch,cg,be,cf,co,bB,cj,bE,C,cG,B,cl,cm,ck,co,cn,ch,cg,cx,cf,co,bB,cj,cq,cC,H,cl,cm,bV,bN,v,cl,cm,ck,co,cn,by,I,ch,ct,cj,bE,cd,cl,cm,ck,co,cn,bC,ct,cj,T,cz,cm,ck,co,cn,by].join(bL)),image:new qx.ui.basic.Image(bw),panel:new qx.ui.container.Composite().set({layout:new qx.ui.layout.Basic()}),button:new qx.ui.form.Button(M),actions:{init:function(){dc.label.set({rich:true,width:600});
dc.panel.add(dc.image,{left:10,top:38});
dc.panel.add(dc.label,{left:200,top:20});
dc.button.addListener(bD,dc.actions.proceed);
dc.panel.add(dc.button,{left:600,top:0});
},proceed:function(){var d=dc.panel.getContentElement().getDomElement();
var e=new qx.fx.effect.combination.Drop(d);
e.set({direction:bv,xAmount:200});
e.addListener(cv,function(){dc.panel.hide();
dd.panel.show();
});
e.start();
}}};
var dd={address:{fields:{"Name":new qx.ui.form.TextField(ci).set({width:300,required:true,valid:false,invalidMessage:bG}),"Vorname":new qx.ui.form.TextField(ci).set({required:true,valid:false,invalidMessage:F}),"Strasse Nr":new qx.ui.form.TextField(ci).set({required:true,valid:false,invalidMessage:bM}),"PLZ Ort":new qx.ui.form.TextField(ci).set({required:true,valid:false,invalidMessage:S}),"Telefon":new qx.ui.form.TextField(ci).set({required:true,valid:false,invalidMessage:V}),"E Mail":new qx.ui.form.TextField(ci).set({required:true,valid:false,invalidMessage:cc})},form:new qx.ui.form.Form(),timeSelector:{widget:new qx.ui.form.ComboBox().set({required:true,valid:false,invalidMessage:bJ}),panel:new qx.ui.container.Composite().set({layout:new qx.ui.layout.HBox()})},remarks:new qx.ui.form.TextArea(),panel:new qx.ui.groupbox.GroupBox(bR).set({layout:new qx.ui.layout.VBox(10)})},table:{toolbar:{part:new qx.ui.toolbar.Part(),buttonAdd:new qx.ui.toolbar.Button(E,L),buttonRemove:new qx.ui.toolbar.Button(m,Q),widget:new qx.ui.toolbar.ToolBar()},model:new qx.ui.table.model.Simple(),widget:new qx.ui.table.Table().set({width:640,height:200,decorator:null,statusBarVisible:false}),panel:new qx.ui.groupbox.GroupBox(bU).set({layout:new qx.ui.layout.VBox()})},details:{fields:{"Name des Kindes":new qx.ui.form.TextField().set({width:200,required:true,valid:false,invalidMessage:cp}),"Alter":new qx.ui.form.TextField().set({width:100,required:true,valid:false,invalidMessage:cH}),"Zu loben":new qx.ui.form.TextArea().set({width:450,height:200,required:true,valid:false,invalidMessage:cw,placeholder:bK}),"Zu tadeln":new qx.ui.form.TextArea().set({width:450,height:200,required:true,valid:false,invalidMessage:cw,placeholder:bp})},form:new qx.ui.form.Form(),helpButton:new qx.ui.form.Button(w),okButton:new qx.ui.form.Button(bW),panel:new qx.ui.groupbox.GroupBox(K).set({layout:new qx.ui.layout.Canvas()}),validator:new qx.ui.form.validation.Manager()},panel:new qx.ui.container.Composite().set({layout:new qx.ui.layout.VBox(10),backgroundColor:bA}),buttonPanel:new qx.ui.container.Composite().set({layout:new qx.ui.layout.HBox(),backgroundColor:bA}),validator:new qx.ui.form.validation.Manager(),actions:{changeTableSelection:function(j){if(dd.table.model.getRowCount()<=1||dd.details.validator.validate()){if(j.getTarget().getSelectedCount()>0){for(var k in dd.details.fields){var l=dd.table.model.getValueById(k,j.getTarget().getSelectedRanges()[0].minIndex);

if(l!=undefined){dd.details.fields[k].setValue(l);
}else dd.details.fields[k].setValue(bl);
}dd.actions.showDetailFields();
dd.actions.changeTableSelection.lastSelection=j.getTarget().getSelectedRanges()[0].minIndex;
}else{dd.actions.hideDetailFields();
}}else{if(dd.actions.changeTableSelection.lastSelection)j.getTarget().setSelectionInterval(dd.actions.changeTableSelection.lastSelection,dd.actions.changeTableSelection.lastSelection);
}},help:function(){qx.bom.Window.open(ca);
},submit:function(){if(dd.validator.validate()&&dd.details.validator.validate()){var cM={};

for(addressField in dd.address.fields){cM[addressField]=dd.address.fields[addressField].getValue();
}var cQ={address:cM,time:dd.address.timeSelector.widget.getValue(),remarks:dd.address.remarks.getValue(),children:dd.table.model.getData()};
var cO=new qx.io.remote.Rpc(bP,bn);

try{var cP=cO.callSync(bb,cQ);
db.label.set({value:cP});
var cL=dd.panel.getContentElement().getDomElement();
var cN=new qx.fx.effect.combination.Drop(cL);
cN.set({direction:bv,xAmount:200});
cN.addListener(cv,function(){dd.panel.hide();
db.panel.show();
});
cN.start();
}catch(cK){alert("Fehler: "+cK.toSource());
}}else{alert("Bitte überprüfen Sie das Formular auf Fehler (roter Rahmen im entsprechenden Feld). Haben Sie eine gültige E-Mail-Adresse angegeben?");
}},changeDetailFocus:function(cW){return function(cR){dd.details.validator.validate();
var cS=dd.table.widget.getSelectionModel().getSelectedRanges()[0];

if(cS){dd.table.model.setValue(cW,cS.minIndex,cR.getData());
}};
},hideDetailFields:function(){for(fieldName in dd.details.fields){dd.details.fields[fieldName].hide();
}},showDetailFields:function(){for(fieldName in dd.details.fields){dd.details.fields[fieldName].show();
dd.details.validator.validate();
}},getValidator:function(a,b){return function(cJ){if(!a.test(cJ)){throw new qx.core.ValidationError(p,b);
}return true;
};
},init:function(){for(var g in dd.address.fields){if(g==bd){dd.validator.add(dd.address.fields[g],dd.actions.getValidator(/^.+@..+\...+/,dd.address.fields[g].getInvalidMessage()));
}else{dd.validator.add(dd.address.fields[g],dd.actions.getValidator(/^.../,dd.address.fields[g].getInvalidMessage()));
}dd.address.form.add(dd.address.fields[g],g);
dd.address.fields[g].addListener(bz,function(){dd.validator.validate();
});
}var h=new qx.type.BaseArray(ce,cB,bF,br,s,bs,ba,W);
h.forEach(function(cT){dd.address.timeSelector.widget.add(new qx.ui.form.ListItem(cT));
});
dd.validator.add(dd.address.timeSelector.widget,dd.actions.getValidator(/^(1[6-9]|20):[03]0$/,dd.address.timeSelector.widget.getInvalidMessage()));
dd.address.timeSelector.widget.addListener(bz,function(){dd.validator.validate();
});
dd.address.timeSelector.panel.add(dd.address.timeSelector.widget);
dd.address.timeSelector.panel.add(new qx.ui.basic.Label(A));
new qx.type.BaseArray(dd.address.form.createView(),new qx.ui.basic.Label(o),dd.address.timeSelector.panel,new qx.ui.basic.Label(bO),dd.address.remarks).forEach(function(c){dd.address.panel.add(c);
});
var f=[];

for(var g in dd.details.fields){f.push(g);
}dd.table.model.setColumns(f);

for(var i=0;i<f.length;++i)dd.table.model.setColumnEditable(i,false);
dd.table.widget.setTableModel(dd.table.model);
dd.table.widget.setColumnWidth(0,250);
dd.table.widget.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
dd.table.widget.getSelectionModel().addListener(cy,dd.actions.changeTableSelection);
dd.table.toolbar.buttonAdd.addListener(bD,function(cU){var cV=dd.table.model.getRowCount();

if(cV==0||dd.details.validator.validate()){dd.table.model.addRows([[]]);
dd.table.widget.getSelectionModel().setSelectionInterval(cV,cV);
}});
dd.table.toolbar.part.add(dd.table.toolbar.buttonAdd);
dd.table.toolbar.buttonRemove.addListener(bD,function(cX){var cY=dd.table.widget.getSelectionModel().getSelectedRanges()[0];

if(cY){dd.table.model.removeRows(cY.minIndex,1);
dd.actions.hideDetailFields();
var da=dd.table.model.getRowCount()-1;

if(da>=0)dd.table.widget.getSelectionModel().setSelectionInterval(da,da);
}});
dd.table.toolbar.part.add(dd.table.toolbar.buttonRemove);
dd.table.toolbar.widget.add(dd.table.toolbar.part);
dd.table.toolbar.widget.setToolTip(new qx.ui.tooltip.ToolTip([bc,J,q,bq].join(n)).set({rich:true,hideTimeout:10000}));
dd.table.panel.add(dd.table.toolbar.widget);
dd.table.panel.add(dd.table.widget);
dd.details.helpButton.addListener(bD,dd.actions.help);
dd.details.okButton.addListener(bD,dd.actions.submit);
var i=0;

for(var g in dd.details.fields){dd.details.form.add(dd.details.fields[g],g);
dd.details.fields[g].addListener(bz,dd.actions.changeDetailFocus(i++));
dd.details.fields[g].hide();

if(g==t)dd.details.validator.add(dd.details.fields[g],dd.actions.getValidator(/^[0-9]/,dd.details.fields[g].getInvalidMessage()));
else dd.details.validator.add(dd.details.fields[g],dd.actions.getValidator(/.../,dd.details.fields[g].getInvalidMessage()));
}dd.details.panel.add(dd.details.form.createView());
dd.buttonPanel.add(new qx.ui.core.Spacer(600));
dd.buttonPanel.add(dd.details.helpButton);
dd.buttonPanel.add(new qx.ui.core.Spacer(20));
dd.buttonPanel.add(dd.details.okButton);
dd.panel.add(dd.buttonPanel);
dd.table.panel.add(dd.details.panel);
dd.panel.add(dd.address.panel);
dd.panel.add(dd.table.panel);
dd.panel.hide();
dd.validator.validate();
}}};
var db={label:new qx.ui.basic.Label(ci),image:new qx.ui.basic.Image(bw),panel:new qx.ui.container.Composite().set({layout:new qx.ui.layout.Basic()}),actions:{init:function(){db.label.set({rich:true,width:600});
db.panel.add(db.image,{left:10,top:38});
db.panel.add(db.label,{left:200,top:20});
db.panel.hide();
}}};
dc.actions.init();
dd.actions.init();
db.actions.init();
var de=this.getRoot();
de.set({backgroundColor:bA});
de.add(dc.panel,{left:50,top:10});
de.add(dd.panel,{left:50,top:10});
de.add(db.panel,{left:50,top:10});
}}});
})();
(function(){var j="qx.event.type.Native",i="_native",h="_returnValue";
qx.Class.define(j,{extend:qx.event.type.Event,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,d,e);
this._target=b||qx.bom.Event.getTarget(a);
this._relatedTarget=c||qx.bom.Event.getRelatedTarget(a);

if(a.timeStamp){this._timeStamp=a.timeStamp;
}this._native=a;
return this;
},clone:function(f){var g=arguments.callee.base.call(this,f);
g._native=this._native;
g._returnValue=this._returnValue;
return g;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},stop:function(){this.stopPropagation();
this.preventDefault();
},getNativeEvent:function(){return this._native;
},setReturnValue:function(k){this._returnValue=k;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._disposeFields(i,h);
}});
})();
(function(){var u="_applyTheme",t="qx.theme",s="qx.theme.manager.Meta",r="qx.theme.Classic",q="Theme",p="singleton";
qx.Class.define(s,{type:p,extend:qx.core.Object,properties:{theme:{check:q,nullable:true,apply:u}},members:{_applyTheme:function(a,b){var e=null;
var h=null;
var k=null;
var l=null;
var g=null;

if(a){e=a.meta.color||null;
h=a.meta.decoration||null;
k=a.meta.font||null;
l=a.meta.icon||null;
g=a.meta.appearance||null;
}var i=qx.theme.manager.Color.getInstance();
var j=qx.theme.manager.Decoration.getInstance();
var c=qx.theme.manager.Font.getInstance();
var f=qx.theme.manager.Icon.getInstance();
var d=qx.theme.manager.Appearance.getInstance();
i.setTheme(e);
j.setTheme(h);
c.setTheme(k);
f.setTheme(l);
d.setTheme(g);
},initialize:function(){var n=qx.core.Setting;
var m,o;
m=n.get(t);

if(m){o=qx.Theme.getByName(m);

if(!o){throw new Error("The theme to use is not available: "+m);
}this.setTheme(o);
}}},settings:{"qx.theme":r}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(i){var j=this._dynamic;
return i instanceof qx.bom.Font?i:j[i];
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.fonts[p]){return s[p]=(new qx.bom.Font).set(r.fonts[p]);
}return p;
},isDynamic:function(f){var h=this._dynamic;

if(f&&(f instanceof qx.bom.Font||h[f]!==undefined)){return true;
}var g=this.getTheme();

if(g!==null&&f&&g.fonts[f]){h[f]=(new qx.bom.Font).set(g.fonts[f]);
return true;
}return false;
},_applyTheme:function(k){var l=this._getDynamic();

for(var o in l){if(l[o].themed){l[o].dispose();
delete l[o];
}}
if(k){var m=k.fonts;
var n=qx.bom.Font;

for(var o in m){l[o]=(new n).set(m[o]);
l[o].themed=true;
}}this._setDynamic(l);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(H,I){arguments.callee.base.call(this);

if(H!==undefined){this.setSize(H);
}
if(I!==undefined){this.setFamily(I);
}},statics:{fromString:function(y){var C=new qx.bom.Font();
var A=y.split(/\s+/);
var name=[];
var B;

for(var i=0;i<A.length;i++){switch(B=A[i]){case c:C.setBold(true);
break;
case e:C.setItalic(true);
break;
case j:C.setDecoration(j);
break;
default:var z=parseInt(B,10);

if(z==B||qx.lang.String.contains(B,g)){C.setSize(z);
}else{name.push(B);
}break;
}}
if(name.length>0){C.setFamily(name);
}return C;
},fromConfig:function(L){var M=new qx.bom.Font;
M.set(L);
return M;
},__dh:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__dh;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__di:null,__dj:null,__dk:null,__dl:null,__dm:null,__dn:null,_applySize:function(F,G){this.__di=F===null?null:F+g;
},_applyLineHeight:function(D,E){this.__dn=D===null?null:D;
},_applyFamily:function(P,Q){var R=k;

for(var i=0,l=P.length;i<l;i++){if(P[i].indexOf(o)>0){R+=f+P[i]+f;
}else{R+=P[i];
}
if(i!==l-1){R+=n;
}}this.__dj=R;
},_applyBold:function(N,O){this.__dk=N===null?null:N?c:d;
},_applyItalic:function(J,K){this.__dl=J===null?null:J?e:d;
},_applyDecoration:function(S,T){this.__dm=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__dj,fontSize:this.__di,fontWeight:this.__dk,fontStyle:this.__dl,textDecoration:this.__dm,lineHeight:this.__dn};
}}});
})();
(function(){var i="icon",h="qx.theme.manager.Icon",g="Theme",f="_applyTheme",e="singleton";
qx.Class.define(h,{type:e,extend:qx.core.Object,properties:{theme:{check:g,nullable:true,apply:f}},members:{_applyTheme:function(a,b){var d=qx.util.AliasManager.getInstance();
if(a){d.add(i,a.resource);
}else{d.remove(i);
}
if(b){for(var c in b.aliases){d.remove(c);
}}
if(a){for(var c in a.aliases){d.add(c,a.aliases[c]);
}}}}});
})();
(function(){var m="string",l="Theme",k="_applyTheme",j="__dp",i="__do",h="qx.theme.manager.Appearance",g=":",f="changeAppearanceTheme",e="changeTheme",d="/",c="singleton";
qx.Class.define(h,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__do={};
this.__dp={};
},properties:{appearanceTheme:{check:l,nullable:true,event:f},theme:{check:l,nullable:true,event:e,apply:k}},members:{__dq:{},__do:null,__dp:null,_applyTheme:function(a,b){this.__dp={};
this.__do={};
},__dr:function(E,F,G){var K=F.appearances;
var N=K[E];

if(!N){var O=d;
var H=[];
var M=E.split(O);
var L;

while(!N&&M.length>0){H.unshift(M.pop());
var I=M.join(O);
N=K[I];

if(N){L=N.alias||N;

if(typeof L===m){var J=L+O+H.join(O);
return this.__dr(J,F,G);
}}}if(G!=null){return this.__dr(G,F);
}return null;
}else if(typeof N===m){return this.__dr(N,F,G);
}else if(N.include&&!N.style){return this.__dr(N.include,F,G);
}return E;
},styleFrom:function(n,o,p,q){if(!p){p=this.getTheme();
}var w=this.__dp;
var r=w[n];

if(!r){r=w[n]=this.__dr(n,p,q);
}var B=p.appearances[r];

if(!B){this.warn("Missing appearance: "+n);
return null;
}if(!B.style){return null;
}var C=r;

if(o){var D=B.$$bits;

if(!D){D=B.$$bits={};
B.$$length=0;
}var u=0;

for(var x in o){if(!o[x]){continue;
}
if(D[x]==null){D[x]=1<<B.$$length++;
}u+=D[x];
}if(u>0){C+=g+u;
}}var v=this.__do;

if(v[C]!==undefined){return v[C];
}if(!o){o=this.__dq;
}var z;
if(B.include||B.base){var t=B.style(o);
var s;

if(B.include){s=this.styleFrom(B.include,o,p,q);
}z={};
if(B.base){var y=this.styleFrom(r,o,B.base,q);

if(B.include){for(var A in y){if(!s.hasOwnProperty(A)&&!t.hasOwnProperty(A)){z[A]=y[A];
}}}else{for(var A in y){if(!t.hasOwnProperty(A)){z[A]=y[A];
}}}}if(B.include){for(var A in s){if(!t.hasOwnProperty(A)){z[A]=s[A];
}}}for(var A in t){z[A]=t[A];
}}else{z=B.style(o);
}return v[C]=z||null;
}},destruct:function(){this._disposeFields(i,j);
}});
})();
(function(){var x="focusout",w="interval",v="mouseover",u="mouseout",t="mousemove",s="widget",r="qx.ui.tooltip.ToolTip",q="Boolean",p="__dt",o="_applyCurrent",l="__du",n="qx.ui.tooltip.Manager",m="tooltip-error",k="singleton",j="__ds";
qx.Class.define(n,{type:k,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,v,this.__dC,this,true);
this.__ds=new qx.event.Timer();
this.__ds.addListener(w,this.__dz,this);
this.__dt=new qx.event.Timer();
this.__dt.addListener(w,this.__dA,this);
this.__du={left:0,top:0};
},properties:{current:{check:r,nullable:true,apply:o},showInvalidTooltips:{check:q,init:true}},members:{__du:null,__dt:null,__ds:null,__dv:null,__dw:null,__dx:function(){if(!this.__dv){this.__dv=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__dv;
},__dy:function(){if(!this.__dw){this.__dw=new qx.ui.tooltip.ToolTip().set({appearance:m});
this.__dw.syncAppearance();
}return this.__dw;
},_applyCurrent:function(d,f){if(f&&qx.ui.core.Widget.contains(f,d)){return;
}if(f){f.exclude();
this.__ds.stop();
this.__dt.stop();
}var h=qx.event.Registration;
var g=document.body;
if(d){this.__ds.startWith(d.getShowTimeout());
h.addListener(g,u,this.__dD,this,true);
h.addListener(g,x,this.__dE,this,true);
h.addListener(g,t,this.__dB,this,true);
}else{h.removeListener(g,u,this.__dD,this,true);
h.removeListener(g,x,this.__dE,this,true);
h.removeListener(g,t,this.__dB,this,true);
}},__dz:function(e){var i=this.getCurrent();

if(i){this.__dt.startWith(i.getHideTimeout());

if(i.getPlaceMethod()==s){i.placeToWidget(i.getOpener());
}else{i.placeToPoint(this.__du);
}i.show();
}this.__ds.stop();
},__dA:function(e){var y=this.getCurrent();

if(y){y.exclude();
}this.__dt.stop();
this.resetCurrent();
},__dB:function(e){var a=this.__du;
a.left=e.getDocumentLeft();
a.top=e.getDocumentTop();
},__dC:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F;
while(E!=null){var F=E.getToolTip();
var G=E.getToolTipText()||null;
var D=E.getToolTipIcon()||null;

if(qx.Class.hasInterface(E.constructor,qx.ui.form.IForm)&&!E.isValid()){var C=E.getInvalidMessage();
}
if(F||G||D||C){break;
}E=E.getLayoutParent();
}
if(!E){return;
}if(C&&E.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var F=this.__dy().set({label:C});
}else if(!F){var F=this.__dx().set({label:G,icon:D});
}this.setCurrent(F);
F.setOpener(E);
},__dD:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!A){return;
}var B=this.getCurrent();
if(B&&(A==B||qx.ui.core.Widget.contains(B,A))){return;
}if(A&&z&&qx.ui.core.Widget.contains(z,A)){return;
}if(B&&!A){this.setCurrent(null);
}else{this.resetCurrent();
}},__dE:function(e){var b=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!b){return;
}var c=this.getCurrent();
if(c&&c==b.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,v,this.__dC,this,true);
this._disposeObjects(j,p);
this._disposeFields(l);
}});
})();
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="_applyEnabled",g="Boolean",f="__dG",d="__dF",c="qx.event.type.Event",b="Integer";
qx.Class.define(j,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
this.setEnabled(false);

if(n!=null){this.setInterval(n);
}this.__dF=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":c},statics:{once:function(o,p,q){var r=new qx.event.Timer(q);
r.addListener(k,function(e){r.stop();
o.call(p,e);
r.dispose();
p=null;
},p);
r.start();
return r;
}},properties:{enabled:{init:true,check:g,apply:h},interval:{check:b,init:1000,apply:i}},members:{__dG:null,__dF:null,_applyInterval:function(l,m){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(t,u){if(u){window.clearInterval(this.__dG);
this.__dG=null;
}else if(t){this.__dG=window.setInterval(this.__dF,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(a){this.setInterval(a);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.getEnabled()){this.fireEvent(k);
}})},destruct:function(){if(this.__dG){window.clearInterval(this.__dG);
}this._disposeFields(f,d);
}});
})();
(function(){var p="qx.ui.core.MChildrenHandling";
qx.Mixin.define(p,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(g){return this._indexOf(g);
},add:function(m,n){this._add(m,n);
},addAt:function(d,e,f){this._addAt(d,e,f);
},addBefore:function(a,b,c){this._addBefore(a,b,c);
},addAfter:function(h,i,j){this._addAfter(h,i,j);
},remove:function(k){this._remove(k);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(l){l.getChildren=l._getChildren;
l.hasChildren=l._hasChildren;
l.indexOf=l._indexOf;
l.add=l._add;
l.addAt=l._addAt;
l.addBefore=l._addBefore;
l.addAfter=l._addAfter;
l.remove=l._remove;
l.removeAt=l._removeAt;
l.removeAll=l._removeAll;
}}});
})();
(function(){var c="qx.ui.core.MLayoutHandling";
qx.Mixin.define(c,{members:{setLayout:function(a){return this._setLayout(a);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var q="Integer",p="_applyDimension",o="Boolean",n="_applyStretching",m="_applyMargin",l="shorthand",k="_applyAlign",j="allowShrinkY",i="__dI",h="__dM",K="__dK",J="__dN",I="bottom",H="baseline",G="marginBottom",F="qx.ui.core.LayoutItem",E="center",D="marginTop",C="$$subparent",B="allowGrowX",x="middle",y="marginLeft",v="allowShrinkX",w="$$parent",t="top",u="right",r="marginRight",s="abstract",z="allowGrowY",A="left";
qx.Class.define(F,{type:s,extend:qx.core.Object,properties:{minWidth:{check:q,nullable:true,apply:p,init:null,themeable:true},width:{check:q,nullable:true,apply:p,init:null,themeable:true},maxWidth:{check:q,nullable:true,apply:p,init:null,themeable:true},minHeight:{check:q,nullable:true,apply:p,init:null,themeable:true},height:{check:q,nullable:true,apply:p,init:null,themeable:true},maxHeight:{check:q,nullable:true,apply:p,init:null,themeable:true},allowGrowX:{check:o,apply:n,init:true,themeable:true},allowShrinkX:{check:o,apply:n,init:true,themeable:true},allowGrowY:{check:o,apply:n,init:true,themeable:true},allowShrinkY:{check:o,apply:n,init:true,themeable:true},allowStretchX:{group:[B,v],mode:l,themeable:true},allowStretchY:{group:[z,j],mode:l,themeable:true},marginTop:{check:q,init:0,apply:m,themeable:true},marginRight:{check:q,init:0,apply:m,themeable:true},marginBottom:{check:q,init:0,apply:m,themeable:true},marginLeft:{check:q,init:0,apply:m,themeable:true},margin:{group:[D,r,G,y],mode:l,themeable:true},alignX:{check:[A,E,u],nullable:true,apply:k,themeable:true},alignY:{check:[t,x,I,H],nullable:true,apply:k,themeable:true}},members:{__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,getBounds:function(){return this.__dM||this.__dI||null;
},clearSeparators:function(){},renderSeparator:function(L,M){},renderLayout:function(be,top,bf,bg){var bh;
{};
var bi=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bi=this._getHeightForWidth(bf);
}
if(bi!=null&&bi!==this.__dH){this.__dH=bi;
qx.ui.core.queue.Layout.add(this);
return null;
}var bk=this.__dI;

if(!bk){bk=this.__dI={};
}var bj={};

if(be!==bk.left||top!==bk.top){bj.position=true;
bk.left=be;
bk.top=top;
}
if(bf!==bk.width||bg!==bk.height){bj.size=true;
bk.width=bf;
bk.height=bg;
}if(this.__dJ){bj.local=true;
delete this.__dJ;
}
if(this.__dL){bj.margin=true;
delete this.__dL;
}return bj;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__dJ;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__dJ=true;
this.__dK=null;
},getSizeHint:function(V){var W=this.__dK;

if(W){return W;
}
if(V===false){return null;
}W=this.__dK=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__dH&&this.getHeight()==null){W.height=this.__dH;
}if(!this.getAllowShrinkX()){W.minWidth=Math.max(W.minWidth,W.width);
}else if(W.minWidth>W.width&&this.getAllowGrowX()){W.width=W.minWidth;
}
if(!this.getAllowShrinkY()){W.minHeight=Math.max(W.minHeight,W.height);
}
if(W.minHeight>W.height&&this.getAllowGrowY()){W.height=W.minHeight;
}if(!this.getAllowGrowX()){W.maxWidth=Math.min(W.maxWidth,W.width);
}
if(W.width>W.maxWidth){W.width=W.maxWidth;
}
if(!this.getAllowGrowY()){W.maxHeight=Math.min(W.maxHeight,W.height);
}
if(W.height>W.maxHeight){W.height=W.maxHeight;
}return W;
},_computeSizeHint:function(){var R=this.getMinWidth()||0;
var O=this.getMinHeight()||0;
var S=this.getWidth()||R;
var Q=this.getHeight()||O;
var N=this.getMaxWidth()||Infinity;
var P=this.getMaxHeight()||Infinity;
return {minWidth:R,width:S,maxWidth:N,minHeight:O,height:Q,maxHeight:P};
},_hasHeightForWidth:function(){var bl=this._getLayout();

if(bl){return bl.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(T){var U=this._getLayout();

if(U&&U.hasHeightForWidth()){return U.getHeightForWidth(T);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__dL=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__dM;
},setUserBounds:function(bb,top,bc,bd){this.__dM={left:bb,top:top,width:bc,height:bd};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__dM;
qx.ui.core.queue.Layout.add(this);
},__dO:{},setLayoutProperties:function(e){if(e==null){return;
}var f=this.__dN;

if(!f){f=this.__dN={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(e);
}for(var g in e){if(e[g]==null){delete f[g];
}else{f[g]=e[g];
}}},getLayoutProperties:function(){return this.__dN||this.__dO;
},clearLayoutProperties:function(){delete this.__dN;
},updateLayoutProperties:function(X){var Y=this._getLayout();

if(Y){var ba;
{};
Y.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var c=arguments.callee.base.call(this);
var d=this.__dN;

if(d){c.__dN=qx.lang.Object.clone(d);
}return c;
},serialize:function(){var a=arguments.callee.base.call(this);
var b=this.__dN;

if(b){a.layoutProperties=qx.lang.Object.clone(b);
}return a;
}},destruct:function(){this._disposeFields(w,C,J,i,h,K);
}});
})();
(function(){var fv="px",fu="qx.event.type.Mouse",ft="Boolean",fs="qx.event.type.Drag",fr="visible",fq="qx.event.type.Focus",fp="on",fo="Integer",fn="excluded",fm="object",eM="qx.event.type.Data",eL="_applyPadding",eK="qx.event.type.Event",eJ="zIndex",eI="hidden",eH="String",eG="tabIndex",eF="contextmenu",eE="absolute",eD="backgroundColor",fC="focused",fD="changeVisibility",fA="mshtml",fB="hovered",fy="qx.event.type.KeySequence",fz="qx.client",fw="drag",fx="height",fE="div",fF="disabled",ff="move",fe="dragstart",fh="qx.dynlocale",fg="dragchange",fj="position",fi="dragend",fl="resize",fk="Decorator",fd="width",fc="$$widget",ds="opacity",dt="default",du="Color",dv="top",dw="left",dx="changeToolTipText",dy="beforeContextmenuOpen",dz="Use public 'getChildControl' instead!",dA="_applyNativeContextMenu",dB="__dP",fJ="_applyBackgroundColor",fI="_applyFocusable",fH="changeShadow",fG="qx.event.type.KeyInput",fN="createChildControl",fM="__eb",fL="__dQ",fK="Font",fP="_applyShadow",fO="__dT",eb="__ei",ec="_applyEnabled",dY="_applySelectable",ea="_applyKeepActive",ef="Number",eg="_applyVisibility",ed="repeat",ee="qxDraggable",dW="syncAppearance",dX="paddingLeft",dJ="_applyDroppable",dI="#",dL="_applyCursor",dK="_applyDraggable",dF="__dY",dE="changeTextColor",dH="changeContextMenu",dG="paddingTop",dD="changeSelectable",dC="hideFocus",em="none",en="outline",eo="_applyAppearance",ep="overflowX",eh="_applyOpacity",ei="url(",ej=")",ek="qx.ui.core.Widget",eq="_applyFont",er="cursor",dT="qxDroppable",dS="changeZIndex",dR="overflowY",dQ="changeEnabled",dP="changeFont",dO="__dU",dN="_applyDecorator",dM="_applyZIndex",dV="_applyTextColor",dU="qx.ui.menu.Menu",es="Use public 'hasChildControl' instead!",et="_applyToolTipText",eu="__ed",ev="true",ew="widget",ey="changeDecorator",ez="__dV",eA="_applyTabIndex",eB="changeAppearance",eC="__el",eQ="shorthand",eP="/",eO="",eN="_applyContextMenu",eU="paddingBottom",eT="changeNativeContextMenu",eS="qx.ui.tooltip.ToolTip",eR="qxKeepActive",eW="_applyKeepFocus",eV="paddingRight",fa="changeBackgroundColor",fb="changeLocale",eX="qxKeepFocus",eY="qx/static/blank.gif";
qx.Class.define(ek,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__dP=this._createContainerElement();
this.__dQ=this.__ec();
this.__dP.add(this.__dQ);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:eK,disappear:eK,createChildControl:eM,resize:eM,move:eM,syncAppearance:eM,mousemove:fu,mouseover:fu,mouseout:fu,mousedown:fu,mouseup:fu,click:fu,dblclick:fu,contextmenu:fu,beforeContextmenuOpen:fu,mousewheel:fu,keyup:fy,keydown:fy,keypress:fy,keyinput:fG,focus:fq,blur:fq,focusin:fq,focusout:fq,activate:fq,deactivate:fq,capture:eK,losecapture:eK,drop:fs,dragleave:fs,dragover:fs,drag:fs,dragstart:fs,dragend:fs,dragchange:fs,droprequest:fs},properties:{paddingTop:{check:fo,init:0,apply:eL,themeable:true},paddingRight:{check:fo,init:0,apply:eL,themeable:true},paddingBottom:{check:fo,init:0,apply:eL,themeable:true},paddingLeft:{check:fo,init:0,apply:eL,themeable:true},padding:{group:[dG,eV,eU,dX],mode:eQ,themeable:true},zIndex:{nullable:true,init:null,apply:dM,event:dS,check:fo,themeable:true},decorator:{nullable:true,init:null,apply:dN,event:ey,check:fk,themeable:true},shadow:{nullable:true,init:null,apply:fP,event:fH,check:fk,themeable:true},backgroundColor:{nullable:true,check:du,apply:fJ,event:fa,themeable:true},textColor:{nullable:true,check:du,apply:dV,event:dE,themeable:true,inheritable:true},font:{nullable:true,apply:eq,check:fK,event:dP,themeable:true,inheritable:true},opacity:{check:ef,apply:eh,themeable:true,nullable:true,init:null},cursor:{check:eH,apply:dL,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eS,nullable:true},toolTipText:{check:eH,nullable:true,event:dx,apply:et},toolTipIcon:{check:eH,nullable:true,event:dx},visibility:{check:[fr,eI,fn],init:fr,apply:eg,event:fD},enabled:{init:true,check:ft,inheritable:true,apply:ec,event:dQ},anonymous:{init:false,check:ft},tabIndex:{check:fo,nullable:true,apply:eA},focusable:{check:ft,init:false,apply:fI},keepFocus:{check:ft,init:false,apply:eW},keepActive:{check:ft,init:false,apply:ea},draggable:{check:ft,init:false,apply:dK},droppable:{check:ft,init:false,apply:dJ},selectable:{check:ft,init:false,event:dD,apply:dY},contextMenu:{check:dU,apply:eN,nullable:true,event:dH},nativeContextMenu:{check:ft,init:false,themeable:true,event:eT,apply:dA},appearance:{check:eH,init:ew,apply:eo,event:eB}},statics:{DEBUG:false,getWidgetByElement:function(j){try{while(j){var k=j.$$widget;
if(k!=null){return qx.core.ObjectRegistry.fromHashCode(k);
}j=j.parentNode;
}}catch(cc){}return null;
},contains:function(parent,R){while(R){if(parent==R){return true;
}R=R.getLayoutParent();
}return false;
},__dR:{},__dS:{}},members:{__dP:null,__dQ:null,__dT:null,__dU:null,__dV:null,__dW:null,__dX:null,__dY:null,_getLayout:function(){return this.__dY;
},_setLayout:function(bg){{};

if(this.__dY){this.__dY.connectToWidget(null);
}
if(bg){bg.connectToWidget(this);
}this.__dY=bg;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(this.__dP);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(this.__dP);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__ea:null,renderLayout:function(hf,top,hg,hh){var hs=arguments.callee.base.call(this,hf,top,hg,hh);
if(!hs){return;
}var hj=this.__dP;
var content=this.__dQ;
var hp=hs.size||this.__ea;
var ht=fv;
if(hs.position){hj.setStyle(dw,hf+ht);
hj.setStyle(dv,top+ht);
}if(hs.size){hj.setStyle(fd,hg+ht);
hj.setStyle(fx,hh+ht);
}
if(hp||hs.local||hs.margin){var hi=this.getInsets();
var innerWidth=hg-hi.left-hi.right;
var innerHeight=hh-hi.top-hi.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}
if(this.__ea){content.setStyle(dw,hi.left+ht);
content.setStyle(dv,hi.top+ht);
}
if(hp){content.setStyle(fd,innerWidth+ht);
content.setStyle(fx,innerHeight+ht);
}
if(hs.size){var hr=this.__dV;

if(hr){hr.setStyles({width:hg+fv,height:hh+fv});
}}
if(hs.size||this.__ea){var hm=qx.theme.manager.Decoration.getInstance();
var hu=this.getDecorator();

if(hu){var hn=this.__dT;
var ho=hm.resolve(hu);
ho.resize(hn.getDomElement(),hg,hh);
}}
if(hs.size){var hq=this.getShadow();

if(hq){var hn=this.__dU;
var ho=hm.resolve(hq);
var hi=ho.getInsets();
var hl=hg+hi.left+hi.right;
var hk=hh+hi.top+hi.bottom;
ho.resize(hn.getDomElement(),hl,hk);
}}
if(hp||hs.local||hs.margin){if(this.__dY&&this.hasLayoutChildren()){this.__dY.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(hs.position&&this.hasListener(ff)){this.fireDataEvent(ff,this.getBounds());
}
if(hs.size&&this.hasListener(fl)){this.fireDataEvent(fl,this.getBounds());
}delete this.__ea;
},__eb:null,clearSeparators:function(){var bL=this.__eb;

if(!bL){return;
}var bM=qx.ui.core.Widget.__dR;
var content=this.__dQ;
var bK,bJ;

for(var i=0,l=bL.length;i<l;i++){bJ=bL[i];
bK=bJ.$$separator;
if(!bM[bK]){bM[bK]=[bJ];
}else{bM[bK].push(bJ);
}content.remove(bJ);
}bL.length=0;
},renderSeparator:function(gq,gr){var gy=qx.ui.core.Widget.__dR;
var gw=qx.theme.manager.Decoration.getInstance();

if(typeof gq==fm){var gx=gq.toHashCode();
var gt=gq;
}else{var gx=gq;
var gt=gw.resolve(gq);
}var gu=gy[gq];

if(gu&&gu.length>0){var gv=gu.pop();
}else{var gv=this.__eh(gt);
}this.__dQ.add(gv);
gt.resize(gv.getDomElement(),gr.width,gr.height);
var gs=gv.getDomElement().style;
gs.left=gr.left+fv;
gs.top=gr.top+fv;
if(!this.__eb){this.__eb=[gv];
}else{this.__eb.push(gv);
}gv.$$separator=gx;
},_computeSizeHint:function(){var gY=this.getWidth();
var gX=this.getMinWidth();
var gT=this.getMaxWidth();
var gW=this.getHeight();
var gU=this.getMinHeight();
var gV=this.getMaxHeight();
var ha=this._getContentHint();
var gS=this.getInsets();
var hc=gS.left+gS.right;
var hb=gS.top+gS.bottom;

if(gY==null){gY=ha.width+hc;
}
if(gW==null){gW=ha.height+hb;
}
if(gX==null){gX=hc;

if(ha.minWidth!=null){gX+=ha.minWidth;
}}
if(gU==null){gU=hb;

if(ha.minHeight!=null){gU+=ha.minHeight;
}}
if(gT==null){if(ha.maxWidth==null){gT=Infinity;
}else{gT=ha.maxWidth+hc;
}}
if(gV==null){if(ha.maxHeight==null){gV=Infinity;
}else{gV=ha.maxHeight+hb;
}}return {width:gY,minWidth:gX,maxWidth:gT,height:gW,minHeight:gU,maxHeight:gV};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__dY){this.__dY.invalidateLayoutCache();
}},_getContentHint:function(){var P=this.__dY;

if(P){if(this.hasLayoutChildren()){var O;
var Q=P.getSizeHint();
{};
return Q;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(gC){var gG=this.getInsets();
var gJ=gG.left+gG.right;
var gI=gG.top+gG.bottom;
var gH=gC-gJ;
var gE=this._getLayout();

if(gE&&gE.hasHeightForWidth()){var gD=gE.getHeightForWidth(gC);
}else{gD=this._getContentHeightForWidth(gH);
}var gF=gD+gI;
return gF;
},_getContentHeightForWidth:function(bY){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var r=this.getPaddingRight();
var s=this.getPaddingBottom();
var x=this.getPaddingLeft();
var w=this.getDecorator();

if(w){var v=qx.theme.manager.Decoration.getInstance();
var u=v.resolve(w);
var t=u.getInsets();
{};
top+=t.top;
r+=t.right;
s+=t.bottom;
x+=t.left;
}return {"top":top,"right":r,"bottom":s,"left":x};
},getInnerSize:function(){var dh=this.getBounds();

if(!dh){return null;
}var dg=this.getInsets();
return {width:dh.width-dg.left-dg.right,height:dh.height-dg.top-dg.bottom};
},show:function(){this.setVisibility(fr);
},hide:function(){this.setVisibility(eI);
},exclude:function(){this.setVisibility(fn);
},isVisible:function(){return this.getVisibility()===fr;
},isHidden:function(){return this.getVisibility()!==fr;
},isExcluded:function(){return this.getVisibility()===fn;
},isSeeable:function(){var N=this.getContainerElement().getDomElement();

if(N){return N.offsetWidth>0;
}var M=this;

do{if(!M.isVisible()){return false;
}
if(M.isRootWidget()){return true;
}M=M.getLayoutParent();
}while(M);
return false;
},_createContainerElement:function(){var cq=new qx.html.Element(fE);
{};
cq.setStyle(fj,eE);
cq.setStyle(eJ,0);
cq.setAttribute(fc,this.toHashCode());
{};
return cq;
},__ec:function(){var da=this._createContentElement();
{};
da.setStyle(fj,eE);
da.setStyle(eJ,10);
return da;
},_createContentElement:function(){var cI=new qx.html.Element(fE);
cI.setStyle(ep,eI);
cI.setStyle(dR,eI);
return cI;
},getContainerElement:function(){return this.__dP;
},getContentElement:function(){return this.__dQ;
},getDecoratorElement:function(){return this.__dT;
},__ed:null,getLayoutChildren:function(){var bF=this.__ed;

if(!bF){return this.__ee;
}var bG;

for(var i=0,l=bF.length;i<l;i++){var bE=bF[i];

if(bE.hasUserBounds()||bE.isExcluded()){if(bG==null){bG=bF.concat();
}qx.lang.Array.remove(bG,bE);
}}return bG||bF;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var cR=this.__dY;

if(cR){cR.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var cS=this.__ed;

if(!cS){return false;
}var cT;

for(var i=0,l=cS.length;i<l;i++){cT=cS[i];

if(!cT.hasUserBounds()&&!cT.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ee:[],_getChildren:function(){return this.__ed||this.__ee;
},_indexOf:function(S){var T=this.__ed;

if(!T){return -1;
}return T.indexOf(S);
},_hasChildren:function(){var fU=this.__ed;
return fU!=null&&(!!fU[0]);
},addChildrenToQueue:function(cA){var cB=this.__ed;

if(!cB){return;
}var cC;

for(var i=0,l=cB.length;i<l;i++){cC=cB[i];
cA[cC.$$hash]=cC;
cC.addChildrenToQueue(cA);
}},_add:function(U,V){if(U.getLayoutParent()==this){qx.lang.Array.remove(this.__ed,U);
}
if(this.__ed){this.__ed.push(U);
}else{this.__ed=[U];
}this.__ef(U,V);
},_addAt:function(bc,bd,be){if(!this.__ed){this.__ed=[];
}if(bc.getLayoutParent()==this){qx.lang.Array.remove(this.__ed,bc);
}var bf=this.__ed[bd];

if(bf===bc){return bc.setLayoutProperties(be);
}
if(bf){qx.lang.Array.insertBefore(this.__ed,bc,bf);
}else{this.__ed.push(bc);
}this.__ef(bc,be);
},_addBefore:function(cD,cE,cF){{};

if(cD==cE){return;
}
if(!this.__ed){this.__ed=[];
}if(cD.getLayoutParent()==this){qx.lang.Array.remove(this.__ed,cD);
}qx.lang.Array.insertBefore(this.__ed,cD,cE);
this.__ef(cD,cF);
},_addAfter:function(bj,bk,bl){{};

if(bj==bk){return;
}
if(!this.__ed){this.__ed=[];
}if(bj.getLayoutParent()==this){qx.lang.Array.remove(this.__ed,bj);
}qx.lang.Array.insertAfter(this.__ed,bj,bk);
this.__ef(bj,bl);
},_remove:function(cz){if(!this.__ed){return;
}qx.lang.Array.remove(this.__ed,cz);
this.__eg(cz);
},_removeAt:function(go){if(!this.__ed){throw new Error("This widget has no children!");
}var gp=this.__ed[go];
qx.lang.Array.removeAt(this.__ed,go);
this.__eg(gp);
return gp;
},_removeAll:function(){if(!this.__ed){return;
}var q=this.__ed.concat();
this.__ed.length=0;

for(var i=q.length-1;i>=0;i--){this.__eg(q[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__ef:function(gk,gl){{};
var parent=gk.getLayoutParent();

if(parent&&parent!=this){parent._remove(gk);
}gk.setLayoutParent(this);
if(gl){gk.setLayoutProperties(gl);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gk);
}},__eg:function(di){{};
di.setLayoutParent(null);
if(this.__dY){this.__dY.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(di);
}},capture:function(){this.__dP.capture();
},releaseCapture:function(){this.__dP.releaseCapture();
},_applyPadding:function(gm,gn,name){this.__ea=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dV){return;
}var bH=this.__dV=new qx.html.Element;
{};
bH.setStyles({position:eE,top:0,left:0,zIndex:7});
var bI=this.getBounds();

if(bI){this.__dV.setStyles({width:bI.width+fv,height:bI.height+fv});
}if(qx.core.Variant.isSet(fz,fA)){bH.setStyles({backgroundImage:ei+qx.util.ResourceManager.getInstance().toUri(eY)+ej,backgroundRepeat:ed});
}this.__dP.add(bH);
},__eh:function(dk){var dl=new qx.html.Element;
dl.setStyles({position:eE,top:0,left:0});
{};
dl.useMarkup(dk.getMarkup());
return dl;
},_applyDecorator:function(bu,bv){var bD=qx.ui.core.Widget.__dR;
var bA=qx.theme.manager.Decoration.getInstance();
var bw=this.__dP;
var by=this.__dT;
if(!this.__dV){this._createProtectorElement();
}var bB;

if(bv){if(typeof bv===fm){bB=bv.toHashCode();
}else{bB=bv;
bv=bA.resolve(bv);
}}var bC;

if(bu){if(typeof bu===fm){bC=bu.toHashCode();
{};
}else{bC=bu;
bu=bA.resolve(bu);
}}if(bv){if(!bD[bB]){bD[bB]=[];
}bw.remove(by);
bD[bB].push(by);
}if(bu){if(bD[bC]&&bD[bC].length>0){by=bD[bC].pop();
}else{by=this.__eh(bu);
by.setStyle(eJ,5);
}var bx=this.getBackgroundColor();
bu.tint(by.getDomElement(),bx);
bw.add(by);
this.__dT=by;
}else{delete this.__dT;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bu&&!bv&&bx){this.getContainerElement().setStyle(eD,null);
}if(qx.ui.decoration.Util.insetsModified(bv,bu)){this.__ea=true;
qx.ui.core.queue.Layout.add(this);
}else if(bu){var bz=this.getBounds();

if(bz){bA.resolve(bu).resize(by.getDomElement(),bz.width,bz.height);
this.__dV.setStyles({width:bz.width+fv,height:bz.height+fv});
}}},_applyShadow:function(fW,fX){var gi=qx.ui.core.Widget.__dS;
var gf=qx.theme.manager.Decoration.getInstance();
var ga=this.__dP;
var gg;

if(fX){if(typeof fX===fm){gg=fX.toHashCode();
}else{gg=fX;
fX=gf.resolve(fX);
}}var gh;

if(fW){if(typeof fW===fm){gh=fW.toHashCode();
}else{gh=fW;
fW=gf.resolve(fW);
}}if(fX){if(!gi[gg]){gi[gg]=[];
}ga.remove(this.__dU);
gi[gg].push(this.__dU);
}if(fW){var gc;

if(gi[gh]&&gi[gh].length>0){gc=gi[gh].pop();
}else{gc=this.__eh(fW);
}ga.add(gc);
this.__dU=gc;
var ge=fW.getInsets();
gc.setStyles({left:(-ge.left)+fv,top:(-ge.top)+fv});
var gd=this.getBounds();

if(gd){var gb=gd.width+ge.left+ge.right;
var fY=gd.height+ge.top+ge.bottom;
fW.resize(gc.getDomElement(),gb,fY);
}fW.tint(gc.getDomElement(),null);
}else{delete this.__dU;
}},_applyToolTipText:function(ch,ci){if(qx.core.Variant.isSet(fh,fp)){if(this.__dX){return;
}var cj=qx.locale.Manager.getInstance();
this.__dX=cj.addListener(fb,function(){if(ch&&ch.translate){this.setToolTipText(ch.translate());
}},this);
}},_applyTextColor:function(bW,bX){},_applyZIndex:function(bQ,bR){this.__dP.setStyle(eJ,bQ==null?0:bQ);
},_applyVisibility:function(bN,bO){if(bN===fr){this.__dP.show();
}else{this.__dP.hide();
}var parent=this.$$parent;

if(parent&&(bO==null||bN==null||bO===fn||bN===fn)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(dm,dn){this.__dP.setStyle(ds,dm==1?null:dm);
if(qx.core.Variant.isSet(fz,fA)){if(!qx.Class.isSubClassOf(this.__dQ.constructor,qx.html.Image)){var dp=(dm==1||dm==null)?null:0.99;
this.__dQ.setStyle(ds,dp);
}}},_applyCursor:function(gO,gP){if(gO==null&&!this.isSelectable()){gO=dt;
}this.__dP.setStyle(er,gO,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(hv,hw){var hC=this.getDecorator();
var hz=this.getBackgroundColor();
var hy=this.__dP;

if(hC){var hA=this.__dT;

if(hA){var hB=qx.theme.manager.Decoration.getInstance().resolve(hC);
hB.tint(this.__dT.getDomElement(),hz);
}hy.setStyle(eD,null);
}else{var hx=qx.theme.manager.Color.getInstance().resolve(hz);
hy.setStyle(eD,hx);
}},_applyFont:function(fQ,fR){},__ei:null,$$stateChanges:null,_forwardStates:null,hasState:function(cP){var cQ=this.__ei;
return cQ&&cQ[cP];
},addState:function(ck){var cl=this.__ei;

if(!cl){cl=this.__ei={};
}
if(cl[ck]){return;
}this.__ei[ck]=true;
if(ck===fB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var co=this.__el;

if(forward&&forward[ck]&&co){var cm;

for(var cn in co){cm=co[cn];

if(cm instanceof qx.ui.core.Widget){co[cn].addState(ck);
}}}},removeState:function(cU){var cV=this.__ei;

if(!cV||!cV[cU]){return;
}delete this.__ei[cU];
if(cU===fB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cY=this.__el;

if(forward&&forward[cU]&&cY){for(var cX in cY){var cW=cY[cX];

if(cW instanceof qx.ui.core.Widget){cW.removeState(cU);
}}}},replaceState:function(ct,cu){var cv=this.__ei;

if(!cv){cv=this.__ei={};
}
if(!cv[cu]){cv[cu]=true;
}
if(cv[ct]){delete cv[ct];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cy=this.__el;

if(forward&&forward[cu]&&cy){for(var cx in cy){var cw=cy[cx];

if(cw instanceof qx.ui.core.Widget){cw.replaceState(ct,cu);
}}}},__ej:null,__ek:null,syncAppearance:function(){var G=this.__ei;
var F=this.__ej;
var H=qx.theme.manager.Appearance.getInstance();
var D=qx.core.Property.$$method.setThemed;
var L=qx.core.Property.$$method.resetThemed;
if(this.__ek){delete this.__ek;
if(F){var C=H.styleFrom(F,G,null,this.getAppearance());
if(C){F=null;
}}}if(!F){var E=this;
var K=[];

do{K.push(E.$$subcontrol||E.getAppearance());
}while(E=E.$$subparent);
F=this.__ej=K.reverse().join(eP).replace(/#[0-9]+/g,eO);
}var I=H.styleFrom(F,G,null,this.getAppearance());

if(I){var J;
var J;

if(C){for(var J in C){if(I[J]===undefined){this[L[J]]();
}}}{};
{};

for(var J in I){I[J]===undefined?this[L[J]]():this[D[J]](I[J]);
}}else if(C){for(var J in C){this[L[J]]();
}}this.fireDataEvent(dW,this.__ei);
},_applyAppearance:function(hF,hG){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dW){qx.ui.core.queue.Appearance.add(this);
this.__dW=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ek=true;
qx.ui.core.queue.Appearance.add(this);
var cg=this.__el;

if(cg){var ce;

for(var cf in cg){ce=cg[cf];

if(ce instanceof qx.ui.core.Widget){ce.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fV=this;

while(fV.getAnonymous()){fV=fV.getLayoutParent();

if(!fV){return null;
}}return fV;
},getFocusTarget:function(){var bs=this;

if(!bs.getEnabled()){return null;
}
while(bs.getAnonymous()||!bs.getFocusable()){bs=bs.getLayoutParent();

if(!bs||!bs.getEnabled()){return null;
}}return bs;
},getFocusElement:function(){return this.__dP;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(cL,cM){var cN=this.getFocusElement();
if(cL){var cO=this.getTabIndex();

if(cO==null){cO=1;
}cN.setAttribute(eG,cO);
if(qx.core.Variant.isSet(fz,fA)){cN.setAttribute(dC,ev);
}else{cN.setStyle(en,em);
}}else{if(cN.isNativelyFocusable()){cN.setAttribute(eG,-1);
}else if(cM){cN.setAttribute(eG,null);
}}},_applyKeepFocus:function(y){var z=this.getFocusElement();
z.setAttribute(eX,y?fp:null);
},_applyKeepActive:function(fS){var fT=this.getContainerElement();
fT.setAttribute(eR,fS?fp:null);
},_applyTabIndex:function(dj){if(dj==null){dj=1;
}else if(dj<1||dj>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&dj!=null){this.getFocusElement().setAttribute(eG,dj);
}},_applySelectable:function(bV){this._applyCursor(this.getCursor());
this.__dP.setSelectable(bV);
this.__dQ.setSelectable(bV);
},_applyEnabled:function(dq,dr){if(dq===false){this.addState(fF);
this.removeState(fB);
if(this.isFocusable()){this.removeState(fC);
this._applyFocusable(false,true);
}}else{this.removeState(fF);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyNativeContextMenu:function(cr,cs,name){},_applyContextMenu:function(gM,gN){if(gN){gN.removeState(eF);

if(gN.getOpener()==this){gN.resetOpener();
}
if(!gM){this.removeListener(eF,this._onContextMenuOpen);
gN.removeListener(fD,this._onBeforeContextMenuOpen,this);
}}
if(gM){gM.setOpener(this);
gM.addState(eF);

if(!gN){this.addListener(eF,this._onContextMenuOpen);
gM.addListener(fD,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){var cp=this.getContextMenu();
cp.placeToMouse(e);
cp.show();
e.preventDefault();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==fr&&this.hasListener(dy)){this.fireDataEvent(dy,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(ca,cb){qx.ui.core.DragDropCursor.getInstance();
if(ca){this.addListener(fe,this._onDragStart);
this.addListener(fw,this._onDrag);
this.addListener(fi,this._onDragEnd);
this.addListener(fg,this._onDragChange);
}else{this.removeListener(fe,this._onDragStart);
this.removeListener(fw,this._onDrag);
this.removeListener(fi,this._onDragEnd);
this.removeListener(fg,this._onDragChange);
}this.__dP.setAttribute(ee,ca?fp:null);
},_applyDroppable:function(cG,cH){this.__dP.setAttribute(dT,cG?fp:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(dt);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gK=qx.ui.core.DragDropCursor.getInstance();
var gL=e.getCurrentAction();
gL?gK.setAction(gL):gK.resetAction();
},visualizeFocus:function(){this.addState(fC);
},visualizeBlur:function(){this.removeState(fC);
},scrollChildIntoView:function(m,n,o,p){this.scrollChildIntoViewX(m,n,p);
this.scrollChildIntoViewY(m,o,p);
},scrollChildIntoViewX:function(db,dc,dd){this.__dQ.scrollChildIntoViewX(db.getContainerElement(),dc,dd);
},scrollChildIntoViewY:function(gz,gA,gB){this.__dQ.scrollChildIntoViewY(gz.getContainerElement(),gA,gB);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__dP.activate();
},deactivate:function(){this.__dP.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(bt){qx.log.Logger.deprecatedMethodWarning(arguments.callee,es);
return this.hasChildControl(bt);
},hasChildControl:function(gj){if(!this.__el){return false;
}return !!this.__el[gj];
},__el:null,_getCreatedChildControls:function(){return this.__el;
},_getChildControl:function(hD,hE){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dz);
return this.getChildControl(hD,hE);
},getChildControl:function(bS,bT){if(!this.__el){if(bT){return null;
}this.__el={};
}var bU=this.__el[bS];

if(bU){return bU;
}
if(bT===true){return null;
}return this._createChildControl(bS);
},_showChildControl:function(A){var B=this.getChildControl(A);
B.show();
return B;
},_excludeChildControl:function(bm){var bn=this.getChildControl(bm,true);

if(bn){bn.exclude();
}},_isChildControlVisible:function(gQ){var gR=this.getChildControl(gQ,true);

if(gR){return gR.isVisible();
}return false;
},_createChildControl:function(W){if(!this.__el){this.__el={};
}else if(this.__el[W]){throw new Error("Child control '"+W+"' already created!");
}var bb=W.indexOf(dI);

if(bb==-1){var X=this._createChildControlImpl(W);
}else{var X=this._createChildControlImpl(W.substring(0,bb));
}
if(!X){throw new Error("Unsupported control: "+W);
}X.$$subcontrol=W;
X.$$subparent=this;
var Y=this.__ei;
var forward=this._forwardStates;

if(Y&&forward&&X instanceof qx.ui.core.Widget){for(var ba in Y){if(forward[ba]){X.addState(ba);
}}}this.fireDataEvent(fN,X);
return this.__el[W]=X;
},_createChildControlImpl:function(cd){return null;
},_disposeChildControls:function(){var d=this.__el;

if(!d){return;
}var b=qx.ui.core.Widget;

for(var c in d){var a=d[c];

if(!b.contains(this,a)){a.destroy();
}else{a.dispose();
}}delete this.__el;
},_findTopControl:function(){var bP=this;

while(bP){if(!bP.$$subparent){return bP;
}bP=bP.$$subparent;
}return null;
},getContainerLocation:function(bh){var bi=this.getContainerElement().getDomElement();
return bi?qx.bom.element.Location.get(bi,bh):null;
},getContentLocation:function(bo){var bp=this.getContentElement().getDomElement();
return bp?qx.bom.element.Location.get(bp,bo):null;
},setDomLeft:function(de){var df=this.getContainerElement().getDomElement();

if(df){df.style.left=de+fv;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(bq){var br=this.getContainerElement().getDomElement();

if(br){br.style.top=bq+fv;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hd,top){var he=this.getContainerElement().getDomElement();

if(he){he.style.left=hd+fv;
he.style.top=top+fv;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var cJ=arguments.callee.base.call(this);

if(this.getChildren){var cK=this.getChildren();

for(var i=0,l=cK.length;i<l;i++){cJ.add(cK[i].clone());
}}return cJ;
},serialize:function(){var g=arguments.callee.base.call(this);

if(this.getChildren){var h=this.getChildren();

if(h.length>0){g.children=[];

for(var i=0,l=h.length;i<l;i++){g.children.push(h[i].serialize());
}}}
if(this.getLayout){var f=this.getLayout();

if(f){g.layout=f.serialize();
}}return g;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fh,fp)){if(this.__dX){qx.locale.Manager.getInstance().removeListenerById(this.__dX);
}}this.__dP.setAttribute(fc,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(eu);
this._disposeArray(fM);
this._disposeFields(eb,eC);
this._disposeObjects(dF,dB,fL,fO,dO,ez);
}});
})();
(function(){var h="qx.event.type.Data",g="qx.ui.container.Composite",f="addChildWidget",e="removeChildWidget";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(d){arguments.callee.base.call(this);

if(d!=null){this._setLayout(d);
}},events:{addChildWidget:h,removeChildWidget:h},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(f,qx.event.type.Data,[i]);
},_afterRemoveChild:function(c){this.fireNonBubblingEvent(e,qx.event.type.Data,[c]);
}},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
qx.ui.core.MLayoutHandling.remap(b);
}});
})();
(function(){var O="interval",N="Integer",M="resize",L="Boolean",K="mouse",J="disappear",I="bottom-left",H="widget",G="offsetLeft",F="offsetRight",y="right-top",E="top-right",B="top-left",w="bottom-right",v="right-bottom",A="offsetBottom",z="qx.ui.core.MPlacement",C="left-top",u="left-bottom",D="shorthand",x="offsetTop";
qx.Mixin.define(z,{properties:{position:{check:[B,E,I,w,C,u,y,v],init:I,themeable:true},placeMethod:{check:[H,K],init:K,themeable:true},domMove:{check:L,init:false},smart:{check:L,init:true,themeable:true},offsetLeft:{check:N,init:0,themeable:true},offsetTop:{check:N,init:0,themeable:true},offsetRight:{check:N,init:0,themeable:true},offsetBottom:{check:N,init:0,themeable:true},offset:{group:[x,F,A,G],mode:D,themeable:true}},members:{__em:null,__en:null,getLayoutLocation:function(m){var p,o,q,top;
o=m.getBounds();
q=o.left;
top=o.top;
var r=o;
m=m.getLayoutParent();

while(m&&!m.isRootWidget()){o=m.getBounds();
q+=o.left;
top+=o.top;
p=m.getInsets();
q+=p.left;
top+=p.top;
m=m.getLayoutParent();
}if(m.isRootWidget()){var n=m.getContainerLocation();

if(n){q+=n.left;
top+=n.top;
}}return {left:q,top:top,right:q+r.width,bottom:top+r.height};
},moveTo:function(P,top){if(this.getDomMove()){this.setDomPosition(P,top);
}else{this.setLayoutProperties({left:P,top:top});
}},placeToWidget:function(j,k){if(k){this.__en=qx.lang.Function.bind(this.placeToWidget,this,j,false);
qx.event.Idle.getInstance().addListener(O,this.__en);
this.addListener(J,function(){if(this.__en){qx.event.Idle.getInstance().removeListener(O,this.__en);
this.__en=null;
}},this);
}var l=j.getContainerLocation()||this.getLayoutLocation(j);
this.__eo(l);
},placeToMouse:function(event){var t=event.getDocumentLeft();
var top=event.getDocumentTop();
var s={left:t,top:top,right:t,bottom:top};
this.__eo(s);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__en=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(O,this.__en);
this.addListener(J,function(){if(this.__en){qx.event.Idle.getInstance().removeListener(O,this.__en);
this.__en=null;
}},this);
}this.__eo(S);
},placeToPoint:function(h){var i={left:h.left,top:h.top,right:h.left,bottom:h.top};
this.__eo(i);
},__eo:function(a){var g=this.getBounds();

if(g==null){if(!this.__em){this.addListener(M,this.__eo);
}this.__em=a;
return;
}else if(this.__em){a=this.__em;
delete this.__em;
this.removeListener(M,this.__eo);
}var b=this.getLayoutParent().getBounds();
var e=this.getPosition();
var f=this.getSmart();
var c={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var d=qx.util.PlaceUtil.compute(g,b,a,e,f,c);
this.moveTo(d.left,d.top);
}}});
})();
(function(){var f="qx.ui.popup.Popup",e="visible",d="excluded",c="popup",b="Boolean";
qx.Class.define(f,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(a){arguments.callee.base.call(this,a);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:c},visibility:{refine:true,init:d},autoHide:{check:b,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===e?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var q="atom",p="Integer",o="String",n="_applyRich",m="qx.ui.tooltip.ToolTip",l="_applyIcon",k="tooltip",j="qx.ui.core.Widget",i="Boolean",h="_applyLabel";
qx.Class.define(m,{extend:qx.ui.popup.Popup,construct:function(a,b){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(q);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}},properties:{appearance:{refine:true,init:k},showTimeout:{check:p,init:700,themeable:true},hideTimeout:{check:p,init:4000,themeable:true},label:{check:o,nullable:true,apply:h},icon:{check:o,nullable:true,apply:l,themeable:true},rich:{check:i,init:false,apply:n},opener:{check:j,nullable:true}},members:{_createChildControlImpl:function(c){var d;

switch(c){case q:d=new qx.ui.basic.Atom;
this._add(d);
break;
}return d||arguments.callee.base.call(this,c);
},_applyIcon:function(e,f){var g=this.getChildControl(q);
e==null?g.resetIcon:g.setIcon(e);
},_applyLabel:function(u,v){var w=this.getChildControl(q);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(r,s){var t=this.getChildControl(q);
t.setRich(r);
}}});
})();
(function(){var s="qx.ui.core.queue.Layout",r="layout";
qx.Class.define(s,{statics:{__ep:{},remove:function(g){delete this.__ep[g.$$hash];
},add:function(m){this.__ep[m.$$hash]=m;
qx.ui.core.queue.Manager.scheduleFlush(r);
},flush:function(){var h=this.__es();
for(var i=h.length-1;i>=0;i--){var j=h[i];
if(j.hasValidLayout()){continue;
}if(j.isRootWidget()&&!j.hasUserBounds()){var l=j.getSizeHint();
j.renderLayout(0,0,l.width,l.height);
}else{var k=j.getBounds();
j.renderLayout(k.left,k.top,k.width,k.height);
}}},getNestingLevel:function(n){var o=this.__er;
var q=0;
var parent=n;
while(true){if(o[parent.$$hash]!=null){q+=o[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
q+=1;
}var p=q;

while(n&&n!==parent){o[n.$$hash]=p--;
n=n.$$parent;
}return q;
},__eq:function(){var f=qx.ui.core.queue.Visibility;
this.__er={};
var e=[];
var d=this.__ep;
var a,c;

for(var b in d){a=d[b];

if(f.isVisible(a)){c=this.getNestingLevel(a);
if(!e[c]){e[c]={};
}e[c][b]=a;
delete d[b];
}}return e;
},__es:function(){var w=[];
var y=this.__eq();

for(var v=y.length-1;v>=0;v--){if(!y[v]){continue;
}
for(var u in y[v]){var t=y[v][u];
if(v==0||t.isRootWidget()||t.hasUserBounds()){w.push(t);
t.invalidateLayoutCache();
continue;
}var A=t.getSizeHint(false);

if(A){t.invalidateLayoutCache();
var x=t.getSizeHint();
var z=(!t.getBounds()||A.minWidth!==x.minWidth||A.width!==x.width||A.maxWidth!==x.maxWidth||A.minHeight!==x.minHeight||A.height!==x.height||A.maxHeight!==x.maxHeight);
}else{z=true;
}
if(z){var parent=t.getLayoutParent();

if(!y[v-1]){y[v-1]={};
}y[v-1][parent.$$hash]=parent;
}else{w.push(t);
}}}return w;
}}});
})();
(function(){var k="qx.event.handler.UserAction",j="__eu",i="__et";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this.__et=h;
this.__eu=h.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__et:null,__eu:null,canHandleEvent:function(l,m){},registerEvent:function(a,b,c){},unregisterEvent:function(e,f,g){}},destruct:function(){this._disposeFields(i,j);
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var f="__ew",e="__ev",d="qx.util.DeferredCallManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){this.__ev={};
this.__ew=qx.lang.Function.bind(this.__eA,this);
this.__ex=false;
},members:{__ey:null,__ez:null,__ev:null,__ex:null,__ew:null,schedule:function(a){if(this.__ey==null){this.__ey=window.setTimeout(this.__ew,0);
}var b=a.toHashCode();
if(this.__ez&&this.__ez[b]){return;
}this.__ev[b]=a;
this.__ex=true;
},cancel:function(i){var j=i.toHashCode();
if(this.__ez&&this.__ez[j]){this.__ez[j]=null;
return;
}delete this.__ev[j];
if(qx.lang.Object.isEmpty(this.__ev)&&this.__ey!=null){window.clearTimeout(this.__ey);
this.__ey=null;
}},__eA:qx.event.GlobalError.observeMethod(function(){this.__ey=null;
while(this.__ex){this.__ez=qx.lang.Object.clone(this.__ev);
this.__ev={};
this.__ex=false;

for(var h in this.__ez){var g=this.__ez[h];

if(g){this.__ez[h]=null;
g.call();
}}}this.__ez=null;
})},destruct:function(){if(this.__ey!=null){window.clearTimeout(this.__ey);
}this._disposeFields(f,e);
}});
})();
(function(){var h="qx.util.DeferredCall",g="__eD",f="__eC",e="__eB";
qx.Class.define(h,{extend:qx.core.Object,construct:function(c,d){arguments.callee.base.call(this);
this.__eB=c;
this.__eC=d||null;
this.__eD=qx.util.DeferredCallManager.getInstance();
},members:{__eB:null,__eC:null,__eD:null,cancel:function(){this.__eD.cancel(this);
},schedule:function(){this.__eD.schedule(this);
},call:function(){this.__eC?this.__eB.apply(this.__eC):this.__eB();
}},destruct:function(a,b){this.cancel();
this._disposeFields(f,e,g);
}});
})();
(function(){var bv="element",bu="qx.client",bt="div",bs="",br="mshtml",bq="none",bp="__fb",bo="qx.html.Element",bn="Use public 'clearTextSelection' instead!",bm="|capture|",bX="focus",bW="blur",bV="__eT",bU="deactivate",bT="userSelect",bS="Use public 'setTextSelection' instead!",bR="capture",bQ="releaseCapture",bP="__fd",bO="__eX",bC="__fa",bD="__eQ",bA="qxSelectable",bB="__eW",by="__eL",bz="tabIndex",bw="off",bx="Use public 'getTextSelectionLength' instead!",bE="on",bF="activate",bI="__eU",bH="normal",bK="webkit",bJ="__eY",bM="__eV",bL="|bubble|",bG="Use public 'getTextSelection' instead!",bN="__eP";
qx.Class.define(bo,{extend:qx.core.Object,construct:function(dc){arguments.callee.base.call(this);
this.__eE=dc||bt;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__eF:{},_scheduleFlush:function(dd){qx.html.Element.__fl.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(bu,{"mshtml":function(a,b){var dJ=a.__eL;
var dI=b.__eL;

if(dJ.contains(dI)){return 1;
}
if(dI.contains(dJ)){return -1;
}return 0;
},"default":null}),flush:function(){var A;
{};
var r=this.__eG();
var q=r.getFocus();

if(q&&this.__eK(q)){r.blur(q);
}var I=r.getActive();

if(I&&this.__eK(I)){qx.bom.Element.deactivate(I);
}var G=this.__eI();

if(G&&this.__eK(G)){qx.bom.Element.releaseCapture(G);
}var B=[];
var D=this._modified;

for(var z in D){A=D[z];
if(A.__ff()){if(A.__eL&&qx.dom.Hierarchy.isRendered(A.__eL)){B.push(A);
}else{{};
A.__fe();
}delete D[z];
}}
for(var i=0,l=B.length;i<l;i++){A=B[i];
{};
A.__fe();
}var v=this._visibility;
if(qx.core.Variant.isSet(bu,br)){var C=[];

for(var z in v){C.push(v[z]);
}if(C.length>1){C.sort(this._mshtmlVisibilitySort);
v=this._visibility={};

for(var i=0;i<C.length;i++){A=C[i];
v[A.$$hash]=A;
}}}
for(var z in v){A=v[z];
{};
A.__eL.style.display=A.__eO?bs:bq;
delete v[z];
}var scroll=this._scroll;

for(var z in scroll){A=scroll[z];
var J=A.__eL;

if(J&&J.offsetWidth){var t=true;
if(A.__eR!=null){A.__eL.scrollLeft=A.__eR;
delete A.__eR;
}if(A.__eS!=null){A.__eL.scrollTop=A.__eS;
delete A.__eS;
}var F=A.__eP;

if(F!=null){var w=F.element.getDomElement();

if(w&&w.offsetWidth){qx.bom.element.Scroll.intoViewX(w,J,F.align);
delete A.__eP;
}else{t=false;
}}var u=A.__eQ;

if(u!=null){var w=u.element.getDomElement();

if(w&&w.offsetWidth){qx.bom.element.Scroll.intoViewY(w,J,u.align);
delete A.__eQ;
}else{t=false;
}}if(t){delete scroll[z];
}}}var s={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var H=this._actions[i];
var E=H.element.__eL;

if(!E||!s[H.type]&&!H.element.__ff()){continue;
}qx.bom.Element[H.type](E);
}this._actions=[];
for(var z in this.__eF){var p=this.__eF[z];
var J=p.element.__eL;

if(J){qx.bom.Selection.set(J,p.start,p.end);
delete this.__eF[z];
}}qx.event.handler.Appear.refresh();
},__eG:function(){if(!this.__eH){var dF=qx.event.Registration.getManager(window);
this.__eH=dF.getHandler(qx.event.handler.Focus);
}return this.__eH;
},__eI:function(){if(!this.__eJ){var cs=qx.event.Registration.getManager(window);
this.__eJ=cs.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eJ.getCaptureElement();
},__eK:function(cR){var cS=qx.core.ObjectRegistry.fromHashCode(cR.$$element);
return cS&&!cS.__ff();
}},members:{__eE:null,__eL:null,__eM:false,__eN:true,__eO:true,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,_scheduleChildrenUpdate:function(){if(this.__fc){return;
}this.__fc=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
},_createDomElement:function(){return qx.bom.Element.create(this.__eE);
},__fe:function(){{};
var dW=this.__fb;

if(dW){var length=dW.length;
var dX;

for(var i=0;i<length;i++){dX=dW[i];

if(dX.__eO&&dX.__eN&&!dX.__eL){dX.__fe();
}}}
if(!this.__eL){this.__eL=this._createDomElement();
this.__eL.$$element=this.$$hash;
this._copyData(false);

if(dW&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fc){this._syncChildren();
}}delete this.__fc;
},_insertChildren:function(){var dB=this.__fb;
var length=dB.length;
var dD;

if(length>2){var dC=document.createDocumentFragment();

for(var i=0;i<length;i++){dD=dB[i];

if(dD.__eL&&dD.__eN){dC.appendChild(dD.__eL);
}}this.__eL.appendChild(dC);
}else{var dC=this.__eL;

for(var i=0;i<length;i++){dD=dB[i];

if(dD.__eL&&dD.__eN){dC.appendChild(dD.__eL);
}}}},_syncChildren:function(){var ck;
var cp=qx.core.ObjectRegistry;
var cg=this.__fb;
var cn=cg.length;
var ch;
var cl;
var cj=this.__eL;
var cm=cj.childNodes;
var ci=0;
var co;
{};
for(var i=cm.length-1;i>=0;i--){co=cm[i];
cl=cp.fromHashCode(co.$$element);

if(!cl||!cl.__eN||cl.__fd!==this){cj.removeChild(co);
{};
}}for(var i=0;i<cn;i++){ch=cg[i];
if(ch.__eN){cl=ch.__eL;
co=cm[ci];

if(!cl){continue;
}if(cl!=co){if(co){cj.insertBefore(cl,co);
}else{cj.appendChild(cl);
}{};
}ci++;
}}{};
},_copyData:function(bf){var bj=this.__eL;
var bi=this.__eX;

if(bi){var bg=qx.bom.element.Attribute;

for(var bk in bi){bg.set(bj,bk,bi[bk]);
}}var bi=this.__eW;

if(bi){var bh=qx.bom.element.Style;

if(bf){for(var bk in bi){bh.set(bj,bk,bi[bk]);
}}else{bh.setCss(bj,bh.compile(bi));
}}var bi=this.__eY;

if(bi){for(var bk in bi){this._applyProperty(bk,bi[bk]);
}}var bi=this.__fa;

if(bi){qx.event.Registration.getManager(bj).importListeners(bj,bi);
delete this.__fa;
}},_syncData:function(){var di=this.__eL;
var dh=qx.bom.element.Attribute;
var df=qx.bom.element.Style;
var dg=this.__eU;

if(dg){var dl=this.__eX;

if(dl){var dj;

for(var dk in dg){dj=dl[dk];

if(dj!==undefined){dh.set(di,dk,dj);
}else{dh.reset(di,dk);
}}}this.__eU=null;
}var dg=this.__eT;

if(dg){var dl=this.__eW;

if(dl){var dj;

for(var dk in dg){dj=dl[dk];

if(dj!==undefined){df.set(di,dk,dj);
}else{df.reset(di,dk);
}}}this.__eT=null;
}var dg=this.__eV;

if(dg){var dl=this.__eY;

if(dl){var dj;

for(var dk in dg){this._applyProperty(dk,dl[dk]);
}}this.__eV=null;
}},__ff:function(){var ed=this;
while(ed){if(ed.__eM){return true;
}
if(!ed.__eN||!ed.__eO){return false;
}ed=ed.__fd;
}return false;
},__fg:function(dM){if(dM.__fd===this){throw new Error("Child is already in: "+dM);
}
if(dM.__eM){throw new Error("Root elements could not be inserted into other ones.");
}if(dM.__fd){dM.__fd.remove(dM);
}dM.__fd=this;
if(!this.__fb){this.__fb=[];
}if(this.__eL){this._scheduleChildrenUpdate();
}},__fh:function(cB){if(cB.__fd!==this){throw new Error("Has no child: "+cB);
}if(this.__eL){this._scheduleChildrenUpdate();
}delete cB.__fd;
},__fi:function(cT){if(cT.__fd!==this){throw new Error("Has no child: "+cT);
}if(this.__eL){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fb||null;
},getChild:function(dP){var dQ=this.__fb;
return dQ&&dQ[dP]||null;
},hasChildren:function(){var e=this.__fb;
return e&&e[0]!==undefined;
},indexOf:function(g){var h=this.__fb;
return h?h.indexOf(g):-1;
},hasChild:function(ce){var cf=this.__fb;
return cf&&cf.indexOf(ce)!==-1;
},add:function(dG){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fg(arguments[i]);
}this.__fb.push.apply(this.__fb,arguments);
}else{this.__fg(dG);
this.__fb.push(dG);
}return this;
},addAt:function(dU,dV){this.__fg(dU);
qx.lang.Array.insertAt(this.__fb,dU,dV);
return this;
},remove:function(m){var n=this.__fb;

if(!n){return;
}
if(arguments[1]){var o;

for(var i=0,l=arguments.length;i<l;i++){o=arguments[i];
this.__fh(o);
qx.lang.Array.remove(n,o);
}}else{this.__fh(m);
qx.lang.Array.remove(n,m);
}return this;
},removeAt:function(cH){var cI=this.__fb;

if(!cI){throw new Error("Has no children!");
}var cJ=cI[cH];

if(!cJ){throw new Error("Has no child at this position!");
}this.__fh(cJ);
qx.lang.Array.removeAt(this.__fb,cH);
return this;
},removeAll:function(){var f=this.__fb;

if(f){for(var i=0,l=f.length;i<l;i++){this.__fh(f[i]);
}f.length=0;
}return this;
},getParent:function(){return this.__fd||null;
},insertInto:function(parent,dH){parent.__fg(this);

if(dH==null){parent.__fb.push(this);
}else{qx.lang.Array.insertAt(this.__fb,this,dH);
}return this;
},insertBefore:function(V){var parent=V.__fd;
parent.__fg(this);
qx.lang.Array.insertBefore(parent.__fb,this,V);
return this;
},insertAfter:function(cq){var parent=cq.__fd;
parent.__fg(this);
qx.lang.Array.insertAfter(parent.__fb,this,cq);
return this;
},moveTo:function(c){var parent=this.__fd;
parent.__fi(this);
var d=parent.__fb.indexOf(this);

if(d===c){throw new Error("Could not move to same index!");
}else if(d<c){c--;
}qx.lang.Array.removeAt(parent.__fb,d);
qx.lang.Array.insertAt(parent.__fb,this,c);
return this;
},moveBefore:function(dm){var parent=this.__fd;
return this.moveTo(parent.__fb.indexOf(dm));
},moveAfter:function(Q){var parent=this.__fd;
return this.moveTo(parent.__fb.indexOf(Q)+1);
},free:function(){var parent=this.__fd;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fb){return;
}parent.__fh(this);
qx.lang.Array.remove(parent.__fb,this);
return this;
},getDomElement:function(){return this.__eL||null;
},getNodeName:function(){return this.__eE;
},setNodeName:function(name){this.__eE=name;
},setRoot:function(dN){this.__eM=dN;
},useMarkup:function(dr){if(this.__eL){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bu,br)){var ds=document.createElement(bt);
}else{var ds=qx.html.Element.__fj;

if(!ds){ds=qx.html.Element.__fj=document.createElement(bt);
}}ds.innerHTML=dr;
this.__eL=ds.firstChild;
this.__eL.$$element=this.$$hash;
this._copyData(true);
return this.__eL;
},useElement:function(R){if(this.__eL){throw new Error("Could not overwrite existing element!");
}this.__eL=R;
this.__eL.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var k=this.getAttribute(bz);

if(k>=1){return true;
}var j=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(k>=0&&j[this.__eE]){return true;
}return false;
},setSelectable:function(dn){this.setAttribute(bA,dn?bE:bw);
if(qx.core.Variant.isSet(bu,bK)){this.setStyle(bT,dn?bH:bq);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__eE];
},include:function(){if(this.__eN){return;
}delete this.__eN;

if(this.__fd){this.__fd._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eN){return;
}this.__eN=false;

if(this.__fd){this.__fd._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eN===true;
},show:function(){if(this.__eO){return;
}
if(this.__eL){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}if(this.__fd){this.__fd._scheduleChildrenUpdate();
}delete this.__eO;
},hide:function(){if(!this.__eO){return;
}
if(this.__eL){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}this.__eO=false;
},isVisible:function(){return this.__eO===true;
},scrollChildIntoViewX:function(bY,ca,cb){var cc=this.__eL;
var cd=bY.getDomElement();

if(cb!==false&&cc&&cc.offsetWidth&&cd&&cd.offsetWidth){qx.bom.element.Scroll.intoViewX(cd,cc,ca);
}else{this.__eP={element:bY,align:ca};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}delete this.__eR;
},scrollChildIntoViewY:function(dt,du,dv){var dw=this.__eL;
var dx=dt.getDomElement();

if(dv!==false&&dw&&dw.offsetWidth&&dx&&dx.offsetWidth){qx.bom.element.Scroll.intoViewY(dx,dw,du);
}else{this.__eQ={element:dt,align:du};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}delete this.__eS;
},scrollToX:function(x,W){var X=this.__eL;

if(W!==true&&X&&X.offsetWidth){X.scrollLeft=x;
}else{this.__eR=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}delete this.__eP;
},getScrollX:function(){var cQ=this.__eL;

if(cQ){return cQ.scrollLeft;
}return this.__eR||0;
},scrollToY:function(y,bd){var be=this.__eL;

if(bd!==true&&be&&be.offsetWidth){be.scrollTop=y;
}else{this.__eS=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}delete this.__eQ;
},getScrollY:function(){var cK=this.__eL;

if(cK){return cK.scrollTop;
}return this.__eS||0;
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bG);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bx);
return this.getTextSelectionLength();
},setSelection:function(cO,cP){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bS);
this.setTextSelection(cO,cP);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bn);
this.clearTextSelection();
},getTextSelection:function(){var de=this.__eL;

if(de){return qx.bom.Selection.get(de);
}return null;
},getTextSelectionLength:function(){var ec=this.__eL;

if(ec){return qx.bom.Selection.getLength(ec);
}return null;
},setTextSelection:function(K,L){var M=this.__eL;

if(M){qx.bom.Selection.set(M,K,L);
return;
}qx.html.Element.__eF[this.toHashCode()]={element:this,start:K,end:L};
qx.html.Element._scheduleFlush(bv);
},clearTextSelection:function(){var dO=this.__eL;

if(dO){qx.bom.Selection.clear(dO);
}delete qx.html.Element.__eF[this.toHashCode()];
},__fk:function(ea){var eb=qx.html.Element._actions;
eb.push({type:ea,element:this});
qx.html.Element._scheduleFlush(bv);
},focus:function(){this.__fk(bX);
},blur:function(){this.__fk(bW);
},activate:function(){this.__fk(bF);
},deactivate:function(){this.__fk(bU);
},capture:function(){this.__fk(bR);
},releaseCapture:function(){this.__fk(bQ);
},setStyle:function(dR,dS,dT){if(!this.__eW){this.__eW={};
}
if(this.__eW[dR]==dS){return;
}
if(dS==null){delete this.__eW[dR];
}else{this.__eW[dR]=dS;
}if(this.__eL){if(dT){qx.bom.element.Style.set(this.__eL,dR,dS);
return this;
}if(!this.__eT){this.__eT={};
}this.__eT[dR]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}return this;
},setStyles:function(S,T){for(var U in S){this.setStyle(U,S[U],T);
}return this;
},removeStyle:function(dz,dA){this.setStyle(dz,null,dA);
},getStyle:function(dY){return this.__eW?this.__eW[dY]:null;
},getAllStyles:function(){return this.__eW||null;
},setAttribute:function(cL,cM,cN){if(!this.__eX){this.__eX={};
}
if(this.__eX[cL]==cM){return;
}
if(cM==null){delete this.__eX[cL];
}else{this.__eX[cL]=cM;
}if(this.__eL){if(cN){qx.bom.element.Attribute.set(this.__eL,cL,cM);
return this;
}if(!this.__eU){this.__eU={};
}this.__eU[cL]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}return this;
},setAttributes:function(N,O){for(var P in N){this.setAttribute(P,N[P],O);
}return this;
},removeAttribute:function(dp,dq){this.setAttribute(dp,null,dq);
},getAttribute:function(dy){return this.__eX?this.__eX[dy]:null;
},_applyProperty:function(name,dE){},_setProperty:function(ee,ef,eg){if(!this.__eY){this.__eY={};
}
if(this.__eY[ee]==ef){return;
}
if(ef==null){delete this.__eY[ee];
}else{this.__eY[ee]=ef;
}if(this.__eL){if(eg){this._applyProperty(ee,ef);
return this;
}if(!this.__eV){this.__eV={};
}this.__eV[ee]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bv);
}return this;
},_removeProperty:function(dK,dL){this._setProperty(dK,null,dL);
},_getProperty:function(ba){var bb=this.__eY;

if(!bb){return null;
}var bc=bb[ba];
return bc==null?null:bc;
},addListener:function(cU,cV,self,cW){var cX;

if(this.$$disposed){return null;
}{};

if(this.__eL){return qx.event.Registration.addListener(this.__eL,cU,cV,self,cW);
}
if(!this.__fa){this.__fa={};
}
if(cW==null){cW=false;
}var cY=qx.event.Manager.getNextUniqueId();
var da=cU+(cW?bm:bL)+cY;
this.__fa[da]={type:cU,listener:cV,self:self,capture:cW,unique:cY};
return da;
},removeListener:function(cu,cv,self,cw){var cx;

if(this.$$disposed){return null;
}{};

if(this.__eL){qx.event.Registration.removeListener(this.__eL,cu,cv,self,cw);
}else{var cz=this.__fa;
var cy;

if(cw==null){cw=false;
}
for(var cA in cz){cy=cz[cA];
if(cy.listener===cv&&cy.self===self&&cy.capture===cw&&cy.type===cu){delete cz[cA];
break;
}}}return this;
},removeListenerById:function(cr){if(this.$$disposed){return null;
}
if(this.__eL){qx.event.Registration.removeListenerById(this.__eL,cr);
}else{delete this.__fa[cr];
}return this;
},hasListener:function(cC,cD){if(this.$$disposed){return false;
}
if(this.__eL){return qx.event.Registration.hasListener(this.__eL,cC,cD);
}var cF=this.__fa;
var cE;

if(cD==null){cD=false;
}
for(var cG in cF){cE=cF[cG];
if(cE.capture===cD&&cE.type===cC){return true;
}}return false;
}},defer:function(Y){Y.__fl=new qx.util.DeferredCall(Y.flush,Y);
},destruct:function(){var ct=this.__eL;

if(ct){qx.event.Registration.getManager(ct).removeAllListeners(ct);
ct.$$element=bs;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fd;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bp);
this._disposeFields(bO,bB,bC,bJ,bI,bV,bM,by,bP,bN,bD);
}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__fm:false,__fn:{},scheduleFlush:function(d){var self=qx.ui.core.queue.Manager;
self.__fn[d]=true;

if(!self.__fm){self.__fp.schedule();
self.__fm=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__fo){return;
}self.__fo=true;
self.__fp.cancel();
var e=self.__fn;

while(e.visibility||e.widget||e.appearance||e.layout||e.element){if(e.widget){delete e.widget;
qx.ui.core.queue.Widget.flush();
}
if(e.visibility){delete e.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(e.appearance){delete e.appearance;
qx.ui.core.queue.Appearance.flush();
}if(e.widget||e.visibility||e.appearance){continue;
}
if(e.layout){delete e.layout;
qx.ui.core.queue.Layout.flush();
}if(e.widget||e.visibility||e.appearance||e.layout){continue;
}
if(e.element){delete e.element;
qx.html.Element.flush();
}}qx.ui.core.queue.Manager.__fm=false;

if(e.dispose){delete e.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__fo=false;
}},defer:function(a){a.__fp=new qx.util.DeferredCall(a.flush);
qx.html.Element._scheduleFlush=a.scheduleFlush;
qx.event.Registration.addListener(window,b,a.flush);
}});
})();
(function(){var d="abstract",c="qx.event.dispatch.AbstractBubbling";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:d,construct:function(w){this._manager=w;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(a,event,b){return event.getBubbles();
},dispatchEvent:function(e,event,f){var parent=e;
var q=this._manager;
var n,u;
var l;
var p,s;
var r;
var t=[];
n=q.getListeners(e,f,true);
u=q.getListeners(e,f,false);

if(n){t.push(n);
}
if(u){t.push(u);
}var parent=this._getParent(e);
var h=[];
var g=[];
var k=[];
var o=[];
while(parent!=null){n=q.getListeners(parent,f,true);

if(n){k.push(n);
o.push(parent);
}u=q.getListeners(parent,f,false);

if(u){h.push(u);
g.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=k.length-1;i>=0;i--){r=o[i];
event.setCurrentTarget(r);
l=k[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(e);

for(var i=0,v=t.length;i<v;i++){l=t[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||e;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,v=h.length;i<v;i++){r=g[i];
event.setCurrentTarget(r);
l=h[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var b="qx.event.dispatch.DomBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var I="keydown",H="keypress",G="qx.client",F="NumLock",E="keyup",D="Enter",C="0",B="9",A="-",z="PageUp",bT="+",bS="PrintScreen",bR="gecko",bQ="A",bP="Z",bO="Left",bN="F5",bM="Down",bL="Up",bK="F11",P="F6",Q="useraction",N="F3",O="keyinput",L="Insert",M="F8",J="End",K="/",X="Delete",Y="*",bn="F1",bj="F4",bv="Home",bq="F2",bG="F12",bA="PageDown",be="F7",bJ="F9",bI="F10",bH="Right",bc="text",bg="Escape",bi="webkit",bl="5",bo="3",br="Meta",bx="7",bC="CapsLock",R="__fs",S="input",bf="Control",bu="Space",bt="Tab",bs="Shift",bz="Pause",by="Unidentified",bp="__fq",bw="qx.event.handler.Keyboard",w="mshtml",bB="mshtml|webkit",T="6",U="off",bk="Apps",x="4",y="Alt",bb="2",V="Scroll",W="1",ba="8",bm="Win",bE="__ft",bD="__fr",bh="autoComplete",bF=",",bd="Backspace";
qx.Class.define(bw,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cc){arguments.callee.base.call(this);
this.__fq=cc;
this.__fr=cc.getWindow();
if(qx.core.Variant.isSet(G,bR)){this.__fs=this.__fr;
}else{this.__fs=this.__fr.document.documentElement;
}this.__ft={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cm){if(this._identifierToKeyCodeMap[cm]){return true;
}
if(cm.length!=1){return false;
}
if(cm>=C&&cm<=B){return true;
}
if(cm>=bQ&&cm<=bP){return true;
}
switch(cm){case bT:case A:case Y:case K:return true;
default:return false;
}}},members:{__fu:null,__fq:null,__fr:null,__fs:null,__ft:null,__fv:null,__fw:null,canHandleEvent:function(cs,ct){},registerEvent:function(cp,cq,cr){},unregisterEvent:function(j,k,l){},_fireInputEvent:function(cK,cL){var cM=this.__fq.getHandler(qx.event.handler.Focus);
var cN=cM.getActive();
if(!cN||cN.offsetWidth==0){cN=cM.getFocus();
}if(cN&&cN.offsetWidth!=0){var event=qx.event.Registration.createEvent(O,qx.event.type.KeyInput,[cK,cN,cL]);
this.__fq.dispatchEvent(cN,event);
}if(this.__fr){qx.event.Registration.fireEvent(this.__fr,Q,qx.event.type.Data,[O]);
}},_fireSequenceEvent:function(cz,cA,cB){var cC=this.__fq.getHandler(qx.event.handler.Focus);
var cE=cC.getActive();
if(!cE||cE.offsetWidth==0){cE=cC.getFocus();
}if(!cE||cE.offsetWidth==0){cE=this.__fq.getWindow().document.body;
}var event=qx.event.Registration.createEvent(cA,qx.event.type.KeySequence,[cz,cE,cB]);
this.__fq.dispatchEvent(cE,event);
if(qx.core.Variant.isSet(G,bB)){if(cA==I&&event.getDefaultPrevented()){var cD=cz.keyCode;

if(!(this._isNonPrintableKeyCode(cD)||cD==8||cD==9)){this._fireSequenceEvent(cz,H,cB);
}}}if(this.__fr){qx.event.Registration.fireEvent(this.__fr,Q,qx.event.type.Data,[cA]);
}},_initKeyObserver:function(){this.__fu=qx.lang.Function.listener(this.__fx,this);
this.__fw=qx.lang.Function.listener(this.__fz,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fs,E,this.__fu);
Event.addNativeListener(this.__fs,I,this.__fu);
Event.addNativeListener(this.__fs,H,this.__fw);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fs,E,this.__fu);
Event.removeNativeListener(this.__fs,I,this.__fu);
Event.removeNativeListener(this.__fs,H,this.__fw);

for(var h in (this.__fv||{})){var g=this.__fv[h];
Event.removeNativeListener(g.target,H,g.callback);
}delete (this.__fv);
},__fx:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"mshtml":function(r){r=window.event||r;
var u=r.keyCode;
var s=0;
var t=r.type;
if(!(this.__ft[u]==I&&t==I)){this._idealKeyHandler(u,s,t,r);
}if(t==I){if(this._isNonPrintableKeyCode(u)||u==8||u==9){this._idealKeyHandler(u,s,H,r);
}}this.__ft[u]=t;
},"gecko":function(cF){var cJ=this._keyCodeFix[cF.keyCode]||cF.keyCode;
var cH=0;
var cI=cF.type;
if(qx.bom.client.Platform.WIN){var cG=cJ?this._keyCodeToIdentifier(cJ):this._charCodeToIdentifier(cH);

if(!(this.__ft[cG]==I&&cI==I)){this._idealKeyHandler(cJ,cH,cI,cF);
}this.__ft[cG]=cI;
}else{this._idealKeyHandler(cJ,cH,cI,cF);
}this.__fy(cF.target,cI,cJ);
},"webkit":function(bU){var bX=0;
var bV=0;
var bW=bU.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bW==E||bW==I){bX=this._charCode2KeyCode[bU.charCode]||bU.keyCode;
}else{if(this._charCode2KeyCode[bU.charCode]){bX=this._charCode2KeyCode[bU.charCode];
}else{bV=bU.charCode;
}}this._idealKeyHandler(bX,bV,bW,bU);
}else{bX=bU.keyCode;
if(!(this.__ft[bX]==I&&bW==I)){this._idealKeyHandler(bX,bV,bW,bU);
}if(bW==I){if(this._isNonPrintableKeyCode(bX)||bX==8||bX==9){this._idealKeyHandler(bX,bV,H,bU);
}}this.__ft[bX]=bW;
}},"opera":function(cu){this._idealKeyHandler(cu.keyCode,0,cu.type,cu);
}})),__fy:qx.core.Variant.select(G,{"gecko":function(ch,ci,cj){if(ci===I&&(cj==33||cj==34||cj==38||cj==40)&&ch.type==bc&&ch.tagName.toLowerCase()===S&&ch.getAttribute(bh)!==U){if(!this.__fv){this.__fv={};
}var cl=qx.core.ObjectRegistry.toHashCode(ch);

if(this.__fv[cl]){return;
}var self=this;
this.__fv[cl]={target:ch,callback:function(v){qx.bom.Event.stopPropagation(v);
self.__fz(v);
}};
var ck=qx.event.GlobalError.observeMethod(this.__fv[cl].callback);
qx.bom.Event.addNativeListener(ch,H,ck);
}},"default":null}),__fz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(G,{"mshtml":function(q){q=window.event||q;

if(this._charCode2KeyCode[q.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[q.keyCode],0,q.type,q);
}else{this._idealKeyHandler(0,q.keyCode,q.type,q);
}},"gecko":function(cd){var cg=this._keyCodeFix[cd.keyCode]||cd.keyCode;
var ce=cd.charCode;
var cf=cd.type;
this._idealKeyHandler(cg,ce,cf,cd);
},"webkit":function(cv){if(qx.bom.client.Engine.VERSION<525.13){var cy=0;
var cw=0;
var cx=cv.type;

if(cx==E||cx==I){cy=this._charCode2KeyCode[cv.charCode]||cv.keyCode;
}else{if(this._charCode2KeyCode[cv.charCode]){cy=this._charCode2KeyCode[cv.charCode];
}else{cw=cv.charCode;
}}this._idealKeyHandler(cy,cw,cx,cv);
}else{if(this._charCode2KeyCode[cv.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cv.keyCode],0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}},"opera":function(co){if(this._keyCodeToIdentifierMap[co.keyCode]){this._idealKeyHandler(co.keyCode,0,co.type,co);
}else{this._idealKeyHandler(0,co.keyCode,co.type,co);
}}})),_idealKeyHandler:function(a,b,c,d){if(!a&&!b){return;
}var e;
if(a){e=this._keyCodeToIdentifier(a);
this._fireSequenceEvent(d,c,e);
}else{e=this._charCodeToIdentifier(b);
this._fireSequenceEvent(d,H,e);
this._fireInputEvent(d,b);
}},_specialCharCodeMap:{8:bd,9:bt,13:D,27:bg,32:bu},_keyCodeToIdentifierMap:{16:bs,17:bf,18:y,20:bC,224:br,37:bO,38:bL,39:bH,40:bM,33:z,34:bA,35:J,36:bv,45:L,46:X,112:bn,113:bq,114:N,115:bj,116:bN,117:P,118:be,119:M,120:bJ,121:bI,122:bK,123:bG,144:F,44:bS,145:V,19:bz,91:bm,93:bk},_numpadToCharCode:{96:C.charCodeAt(0),97:W.charCodeAt(0),98:bb.charCodeAt(0),99:bo.charCodeAt(0),100:x.charCodeAt(0),101:bl.charCodeAt(0),102:T.charCodeAt(0),103:bx.charCodeAt(0),104:ba.charCodeAt(0),105:B.charCodeAt(0),106:Y.charCodeAt(0),107:bT.charCodeAt(0),109:A.charCodeAt(0),110:bF.charCodeAt(0),111:K.charCodeAt(0)},_charCodeA:bQ.charCodeAt(0),_charCodeZ:bP.charCodeAt(0),_charCode0:C.charCodeAt(0),_charCode9:B.charCodeAt(0),_isNonPrintableKeyCode:function(cb){return this._keyCodeToIdentifierMap[cb]?true:false;
},_isIdentifiableKeyCode:function(i){if(i>=this._charCodeA&&i<=this._charCodeZ){return true;
}if(i>=this._charCode0&&i<=this._charCode9){return true;
}if(this._specialCharCodeMap[i]){return true;
}if(this._numpadToCharCode[i]){return true;
}if(this._isNonPrintableKeyCode(i)){return true;
}return false;
},_keyCodeToIdentifier:function(bY){if(this._isIdentifiableKeyCode(bY)){var ca=this._numpadToCharCode[bY];

if(ca){return String.fromCharCode(ca);
}return (this._keyCodeToIdentifierMap[bY]||this._specialCharCodeMap[bY]||String.fromCharCode(bY));
}else{return by;
}},_charCodeToIdentifier:function(cn){return this._specialCharCodeMap[cn]||String.fromCharCode(cn).toUpperCase();
},_identifierToKeyCode:function(f){return qx.event.handler.Keyboard._identifierToKeyCodeMap[f]||f.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(bp,bD,R,bE);
},defer:function(m,n,o){qx.event.Registration.addHandler(m);
if(!m._identifierToKeyCodeMap){m._identifierToKeyCodeMap={};

for(var p in n._keyCodeToIdentifierMap){m._identifierToKeyCodeMap[n._keyCodeToIdentifierMap[p]]=parseInt(p,10);
}
for(var p in n._specialCharCodeMap){m._identifierToKeyCodeMap[n._specialCharCodeMap[p]]=parseInt(p,10);
}}
if(qx.core.Variant.isSet(G,w)){n._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(G,bR)){n._keyCodeFix={12:n._identifierToKeyCode(F)};
}else if(qx.core.Variant.isSet(G,bi)){if(qx.bom.client.Engine.VERSION<525.13){n._charCode2KeyCode={63289:n._identifierToKeyCode(F),63276:n._identifierToKeyCode(z),63277:n._identifierToKeyCode(bA),63275:n._identifierToKeyCode(J),63273:n._identifierToKeyCode(bv),63234:n._identifierToKeyCode(bO),63232:n._identifierToKeyCode(bL),63235:n._identifierToKeyCode(bH),63233:n._identifierToKeyCode(bM),63272:n._identifierToKeyCode(X),63302:n._identifierToKeyCode(L),63236:n._identifierToKeyCode(bn),63237:n._identifierToKeyCode(bq),63238:n._identifierToKeyCode(N),63239:n._identifierToKeyCode(bj),63240:n._identifierToKeyCode(bN),63241:n._identifierToKeyCode(P),63242:n._identifierToKeyCode(be),63243:n._identifierToKeyCode(M),63244:n._identifierToKeyCode(bJ),63245:n._identifierToKeyCode(bI),63246:n._identifierToKeyCode(bK),63247:n._identifierToKeyCode(bG),63248:n._identifierToKeyCode(bS),3:n._identifierToKeyCode(D),12:n._identifierToKeyCode(F),13:n._identifierToKeyCode(D)};
}else{n._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var O="qx.client",N="mouseup",M="click",L="mousedown",K="contextmenu",J="dblclick",I="mousewheel",H="mouseover",G="mouseout",F="DOMMouseScroll",y="on",E="mshtml|webkit|opera",B="mousemove",x="__fB",w="useraction",A="__fC",z="__fA",C="__fH",v="gecko|webkit",D="qx.event.handler.Mouse";
qx.Class.define(D,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){arguments.callee.base.call(this);
this.__fA=n;
this.__fB=n.getWindow();
this.__fC=this.__fB.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__fD:null,__fE:null,__fF:null,__fG:null,__fH:null,__fA:null,__fB:null,__fC:null,canHandleEvent:function(W,X){},registerEvent:qx.core.Variant.select(O,{"webkit":function(e,f,g){if(qx.bom.client.System.IPHONE){var h=qx.lang.Function.returnNull;
e[y+f]=h;
e[y+f]=undefined;
}},"default":qx.lang.Function.returnNull}),unregisterEvent:function(a,b,c){},__fI:function(p,q,r){if(!r){r=p.target||p.srcElement;
}if(r&&r.nodeType){qx.event.Registration.fireEvent(r,q||p.type,qx.event.type.Mouse,[p,r,null,true,true]);
}qx.event.Registration.fireEvent(this.__fB,w,qx.event.type.Data,[q||p.type]);
},_initButtonObserver:function(){this.__fD=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fC,L,this.__fD);
Event.addNativeListener(this.__fC,N,this.__fD);
Event.addNativeListener(this.__fC,M,this.__fD);
Event.addNativeListener(this.__fC,J,this.__fD);
Event.addNativeListener(this.__fC,K,this.__fD);
},_initMoveObserver:function(){this.__fE=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fC,B,this.__fE);
Event.addNativeListener(this.__fC,H,this.__fE);
Event.addNativeListener(this.__fC,G,this.__fE);
},_initWheelObserver:function(){this.__fF=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(O,E)?I:F;
Event.addNativeListener(this.__fC,S,this.__fF);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fC,L,this.__fD);
Event.removeNativeListener(this.__fC,N,this.__fD);
Event.removeNativeListener(this.__fC,M,this.__fD);
Event.removeNativeListener(this.__fC,J,this.__fD);
Event.removeNativeListener(this.__fC,K,this.__fD);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fC,B,this.__fE);
Event.removeNativeListener(this.__fC,H,this.__fE);
Event.removeNativeListener(this.__fC,G,this.__fE);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var o=qx.core.Variant.isSet(O,E)?I:F;
Event.removeNativeListener(this.__fC,o,this.__fF);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(m){this.__fI(m);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(P){var Q=P.type;
var R=P.target||P.srcElement;
if(qx.core.Variant.isSet(O,v)){if(R&&R.nodeType==3){R=R.parentNode;
}}
if(this.__fJ){this.__fJ(P,Q,R);
}
if(this.__fL){this.__fL(P,Q,R);
}this.__fI(P,Q,R);

if(this.__fK){this.__fK(P,Q,R);
}
if(this.__fM){this.__fM(P,Q,R);
}this.__fG=Q;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(i){this.__fI(i,I);
}),__fJ:qx.core.Variant.select(O,{"webkit":function(T,U,V){if(qx.bom.client.Engine.VERSION<530){if(U==K){this.__fI(T,N,V);
}}},"default":null}),__fK:qx.core.Variant.select(O,{"opera":function(s,t,u){if(t==N&&s.button==2){this.__fI(s,K,u);
}},"default":null}),__fL:qx.core.Variant.select(O,{"mshtml":function(j,k,l){if(k==N&&this.__fG==M){this.__fI(j,L,l);
}else if(k==J){this.__fI(j,M,l);
}},"default":null}),__fM:qx.core.Variant.select(O,{"mshtml":null,"default":function(Y,ba,bb){switch(ba){case L:this.__fH=bb;
break;
case N:if(bb!==this.__fH){var bc=qx.dom.Hierarchy.getCommonParent(bb,this.__fH);
this.__fI(Y,M,bc);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(z,x,A,C);
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(h,i,j){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var O="alias",N="copy",M="blur",L="mouseout",K="keydown",J="Ctrl",I="Shift",H="mousemove",G="move",F="mouseover",bn="Alt",bm="keyup",bl="mouseup",bk="dragend",bj="on",bi="mousedown",bh="qxDraggable",bg="__fO",bf="__fT",be="__fR",V="drag",W="__fP",T="drop",U="qxDroppable",R="qx.event.handler.DragDrop",S="droprequest",P="__fN",Q="dragstart",X="__fS",Y="__fU",bb="dragchange",ba="__fQ",bd="dragleave",bc="dragover";
qx.Class.define(R,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){arguments.callee.base.call(this);
this.__fN=p;
this.__fO=p.getWindow().document.documentElement;
this.__fN.addListener(this.__fO,bi,this._onMouseDown,this);
this.__gb();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__fN:null,__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fT:null,__fU:null,__fV:null,__fW:null,__fX:false,__fY:0,__ga:0,canHandleEvent:function(br,bs){},registerEvent:function(B,C,D){},unregisterEvent:function(bo,bp,bq){},addType:function(w){this.__fR[w]=true;
},addAction:function(v){this.__fS[v]=true;
},supportsType:function(b){return !!this.__fR[b];
},supportsAction:function(E){return !!this.__fS[E];
},getData:function(bt){if(!this.__gi||!this.__fP){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fR[bt]){throw new Error("Unsupported data type: "+bt+"!");
}
if(!this.__fU[bt]){this.__fV=bt;
this.__gd(S,this.__fQ,false);
}
if(!this.__fU[bt]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__fU[bt]||null;
},getCurrentAction:function(){return this.__fW;
},addData:function(y,z){this.__fU[y]=z;
},getCurrentType:function(){return this.__fV;
},__gb:function(){this.__fR={};
this.__fS={};
this.__fT={};
this.__fU={};
},__gc:function(){var t=this.__fS;
var r=this.__fT;
var s=null;

if(this.__gi){if(r.Shift&&r.Ctrl&&t.alias){s=O;
}else if(r.Shift&&r.Alt&&t.copy){s=N;
}else if(r.Shift&&t.move){s=G;
}else if(r.Alt&&t.alias){s=O;
}else if(r.Ctrl&&t.copy){s=N;
}else if(t.move){s=G;
}else if(t.copy){s=N;
}else if(t.alias){s=O;
}}
if(s!=this.__fW){this.__fW=s;
this.__gd(bb,this.__fQ,false);
}},__gd:function(i,j,k,l){var n=qx.event.Registration;
var m=n.createEvent(i,qx.event.type.Drag,[k,l]);

if(this.__fQ!==this.__fP){if(j==this.__fQ){m.setRelatedTarget(this.__fP);
}else{m.setRelatedTarget(this.__fQ);
}}return n.dispatchEvent(j,m);
},__ge:function(u){while(u&&u.nodeType==1){if(u.getAttribute(bh)==bj){return u;
}u=u.parentNode;
}return null;
},__gf:function(x){while(x&&x.nodeType==1){if(x.getAttribute(U)==bj){return x;
}x=x.parentNode;
}return null;
},__gg:function(){this.__fQ=null;
this.__fN.removeListener(this.__fO,H,this._onMouseMove,this,true);
this.__fN.removeListener(this.__fO,bl,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,M,this._onWindowBlur,this);
this.__gb();
},__gh:function(){if(this.__fX){this.__fN.removeListener(this.__fO,F,this._onMouseOver,this,true);
this.__fN.removeListener(this.__fO,L,this._onMouseOut,this,true);
this.__fN.removeListener(this.__fO,K,this._onKeyDown,this,true);
this.__fN.removeListener(this.__fO,bm,this._onKeyUp,this,true);
this.__gd(bk,this.__fQ,false);
this.__fX=false;
}this.__gi=false;
this.__fP=null;
this.__gg();
},__gi:false,_onWindowBlur:function(e){this.__gh();
},_onKeyDown:function(e){var a=e.getKeyIdentifier();

switch(a){case bn:case J:case I:if(!this.__fT[a]){this.__fT[a]=true;
this.__gc();
}}},_onKeyUp:function(e){var h=e.getKeyIdentifier();

switch(h){case bn:case J:case I:if(this.__fT[h]){this.__fT[h]=false;
this.__gc();
}}},_onMouseDown:function(e){if(this.__fX){return;
}var A=this.__ge(e.getTarget());

if(A){this.__fY=e.getDocumentLeft();
this.__ga=e.getDocumentTop();
this.__fQ=A;
this.__fN.addListener(this.__fO,H,this._onMouseMove,this,true);
this.__fN.addListener(this.__fO,bl,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,M,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gi){this.__gd(T,this.__fP,false,e);
}if(this.__fX){e.stopPropagation();
}this.__gh();
},_onMouseMove:function(e){if(this.__fX){if(!this.__gd(V,this.__fQ,true,e)){this.__gh();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fY)>3||Math.abs(e.getDocumentTop()-this.__ga)>3){if(this.__gd(Q,this.__fQ,true,e)){this.__fX=true;
this.__fN.addListener(this.__fO,F,this._onMouseOver,this,true);
this.__fN.addListener(this.__fO,L,this._onMouseOut,this,true);
this.__fN.addListener(this.__fO,K,this._onKeyDown,this,true);
this.__fN.addListener(this.__fO,bm,this._onKeyUp,this,true);
var q=this.__fT;
q.Ctrl=e.isCtrlPressed();
q.Shift=e.isShiftPressed();
q.Alt=e.isAltPressed();
this.__gc();
}else{this.__gd(bk,this.__fQ,false);
this.__gg();
}}}},_onMouseOver:function(e){var c=e.getTarget();
var d=this.__gf(c);

if(d&&d!=this.__fP){this.__gi=this.__gd(bc,d,true,e);
this.__fP=d;
this.__gc();
}},_onMouseOut:function(e){var f=e.getTarget();
var g=this.__gf(f);

if(g&&g==this.__fP){this.__gd(bd,this.__fP,false,e);
this.__fP=null;
this.__gi=false;
qx.event.Timer.once(this.__gc,this,0);
}}},destruct:function(){this._disposeFields(ba,W,P,bg,be,X,bf,Y);
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var h="-",g="qx.event.handler.Element",f="_manager",e="_registeredEvents";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){arguments.callee.base.call(this);
this._manager=d;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(A,B){},registerEvent:function(u,v,w){var z=qx.core.ObjectRegistry.toHashCode(u);
var x=z+h+v;
var y=qx.lang.Function.listener(this._onNative,this,x);
qx.bom.Event.addNativeListener(u,v,y);
this._registeredEvents[x]={element:u,type:v,listener:y};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+h+o;
var r=this._registeredEvents[q];
qx.bom.Event.removeNativeListener(n,o,r.listener);
delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(j,k){var m=this._registeredEvents;

if(!m){return;
}var l=m[k];
qx.event.Registration.fireNonBubblingEvent(l.element,l.type,qx.event.type.Native,[j]);
})},destruct:function(){var a;
var b=this._registeredEvents;

for(var c in b){a=b[c];
qx.bom.Event.removeNativeListener(a.element,a.type,a.listener);
}this._disposeFields(f,e);
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var m="qx.event.handler.Appear",l="__gk",k="__gj",j="disappear",i="appear";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__gj=a;
this.__gk={};
qx.event.handler.Appear.__gl[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gl:{},refresh:function(){var b=this.__gl;

for(var c in b){b[c].refresh();
}}},members:{__gj:null,__gk:null,canHandleEvent:function(n,o){},registerEvent:function(q,r,s){var t=qx.core.ObjectRegistry.toHashCode(q);
var u=this.__gk;

if(u&&!u[t]){u[t]=q;
q.$$displayed=q.offsetWidth>0;
}},unregisterEvent:function(v,w,x){var y=qx.core.ObjectRegistry.toHashCode(v);
var z=this.__gk;

if(!z){return;
}
if(z[y]){delete z[y];
v.$$displayed=null;
}},refresh:function(){var g=this.__gk;
var h;

for(var f in g){h=g[f];
var d=h.offsetWidth>0;

if((!!h.$$displayed)!==d){h.$$displayed=d;
var e=qx.event.Registration.createEvent(d?i:j);
this.__gj.dispatchEvent(h,e);
}}}},destruct:function(){this._disposeFields(k,l);
delete qx.event.handler.Appear.__gl[this.$$hash];
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var L="mshtml",K="",J="qx.client",I=">",H="<",G=" ",F="='",E="qx.bom.Element",D="div",C="' ",B="></";
qx.Class.define(E,{statics:{__gm:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,a,b){if(!b){b=window;
}
if(!name){throw new Error("The tag name is missing!");
}var d=this.__gm;
var c=K;

for(var f in a){if(d[f]){c+=f+F+a[f]+C;
}}var g;
if(c!=K){if(qx.bom.client.Engine.MSHTML){g=b.document.createElement(H+name+G+c+I);
}else{var e=b.document.createElement(D);
e.innerHTML=H+name+G+c+B+name+I;
g=e.firstChild;
}}else{g=b.document.createElement(name);
}
for(var f in a){if(!d[f]){qx.bom.element.Attribute.set(g,f,a[f]);
}}return g;
},empty:function(n){return n.innerHTML=K;
},addListener:function(X,Y,ba,self,bb){return qx.event.Registration.addListener(X,Y,ba,self,bb);
},removeListener:function(N,O,P,self,Q){return qx.event.Registration.removeListener(N,O,P,self,Q);
},removeListenerById:function(k,m){return qx.event.Registration.removeListenerById(k,m);
},hasListener:function(S,T,U){return qx.event.Registration.hasListener(S,T,U);
},focus:function(W){qx.event.Registration.getManager(W).getHandler(qx.event.handler.Focus).focus(W);
},blur:function(o){qx.event.Registration.getManager(o).getHandler(qx.event.handler.Focus).blur(o);
},activate:function(h){qx.event.Registration.getManager(h).getHandler(qx.event.handler.Focus).activate(h);
},deactivate:function(M){qx.event.Registration.getManager(M).getHandler(qx.event.handler.Focus).deactivate(M);
},capture:function(R){qx.event.Registration.getManager(R).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(R);
},releaseCapture:function(V){qx.event.Registration.getManager(V).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(V);
},clone:function(p,q){var t;

if(q||(qx.core.Variant.isSet(J,L)&&!qx.xml.Document.isXmlDocument(p))){var x=qx.event.Registration.getManager(p);
var r=qx.dom.Hierarchy.getDescendants(p);
r.push(p);
}if(qx.core.Variant.isSet(J,L)){for(var i=0,l=r.length;i<l;i++){x.toggleAttachedEvents(r[i],false);
}}var t=p.cloneNode(true);
if(qx.core.Variant.isSet(J,L)){for(var i=0,l=r.length;i<l;i++){x.toggleAttachedEvents(r[i],true);
}}if(q===true){var A=qx.dom.Hierarchy.getDescendants(t);
A.push(t);
var s,v,z,u;

for(var i=0,y=r.length;i<y;i++){z=r[i];
s=x.serializeListeners(z);

if(s.length>0){v=A[i];

for(var j=0,w=s.length;j<w;j++){u=s[j];
x.addListener(v,u.type,u.handler,u.self,u.capture);
}}}}return t;
}}});
})();
(function(){var n="qx.client",m="blur",l="focus",k="mousedown",j="on",i="mouseup",h="DOMFocusOut",g="DOMFocusIn",f="selectstart",d="onmousedown",O="onfocusout",N="onfocusin",M="onmouseup",L="onselectstart",K="draggesture",J="_document",I="gecko",H="_root",G="qx.event.handler.Focus",F="_applyFocus",u="_window",v="deactivate",s="qxIsRootPage",t="_applyActive",q="input",r="focusin",o="qxSelectable",p="tabIndex",w="off",x="_body",A="activate",z="1",C="focusout",B="__mouseActive",E="_manager",D="qxKeepFocus",y="qxKeepActive";
qx.Class.define(G,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._window=a.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:F,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,__gw:null,canHandleEvent:function(bB,bC){},registerEvent:function(be,bf,bg){},unregisterEvent:function(bN,bO,bP){},focus:function(bT){try{bT.focus();
}catch(bL){}this.setFocus(bT);
this.setActive(bT);
},activate:function(bd){this.setActive(bd);
},blur:function(bJ){try{bJ.blur();
}catch(bK){}
if(this.getActive()===bJ){this.resetActive();
}
if(this.getFocus()===bJ){this.resetFocus();
}},deactivate:function(bS){if(this.getActive()===bS){this.resetActive();
}},tryActivate:function(bv){var bw=this.__gK(bv);

if(bw){this.setActive(bw);
}},__gx:function(R,S,T,U){var W=qx.event.Registration;
var V=W.createEvent(T,qx.event.type.Focus,[R,S,U]);
W.dispatchEvent(R,V);
},_windowFocused:true,__gy:function(){if(this._windowFocused){this._windowFocused=false;
this.__gx(this._window,null,m,false);
}},__gz:function(){if(!this._windowFocused){this._windowFocused=true;
this.__gx(this._window,null,l,false);
}},_initObserver:qx.core.Variant.select(n,{"gecko":function(){this.__gn=qx.lang.Function.listener(this.__gF,this);
this.__go=qx.lang.Function.listener(this.__gG,this);
this.__gp=qx.lang.Function.listener(this.__gE,this);
this.__gq=qx.lang.Function.listener(this.__gD,this);
this.__gr=qx.lang.Function.listener(this.__gA,this);
this._document.addEventListener(k,this.__gn,true);
this._document.addEventListener(i,this.__go,true);
this._window.addEventListener(l,this.__gp,true);
this._window.addEventListener(m,this.__gq,true);
this._window.addEventListener(K,this.__gr,true);
},"mshtml":function(){this.__gn=qx.lang.Function.listener(this.__gF,this);
this.__go=qx.lang.Function.listener(this.__gG,this);
this.__gt=qx.lang.Function.listener(this.__gB,this);
this.__gu=qx.lang.Function.listener(this.__gC,this);
this.__gs=qx.lang.Function.listener(this.__gH,this);
this._document.attachEvent(d,this.__gn);
this._document.attachEvent(M,this.__go);
this._document.attachEvent(N,this.__gt);
this._document.attachEvent(O,this.__gu);
this._document.attachEvent(L,this.__gs);
},"webkit":function(){this.__gn=qx.lang.Function.listener(this.__gF,this);
this.__go=qx.lang.Function.listener(this.__gG,this);
this.__gu=qx.lang.Function.listener(this.__gC,this);
this.__gp=qx.lang.Function.listener(this.__gE,this);
this.__gq=qx.lang.Function.listener(this.__gD,this);
this.__gs=qx.lang.Function.listener(this.__gH,this);
this._document.addEventListener(k,this.__gn,true);
this._document.addEventListener(i,this.__go,true);
this._document.addEventListener(f,this.__gs,false);
this._window.addEventListener(h,this.__gu,true);
this._window.addEventListener(l,this.__gp,true);
this._window.addEventListener(m,this.__gq,true);
},"opera":function(){this.__gn=qx.lang.Function.listener(this.__gF,this);
this.__go=qx.lang.Function.listener(this.__gG,this);
this.__gt=qx.lang.Function.listener(this.__gB,this);
this.__gu=qx.lang.Function.listener(this.__gC,this);
this._document.addEventListener(k,this.__gn,true);
this._document.addEventListener(i,this.__go,true);
this._window.addEventListener(g,this.__gt,true);
this._window.addEventListener(h,this.__gu,true);
}}),_stopObserver:qx.core.Variant.select(n,{"gecko":function(){this._document.removeEventListener(k,this.__gn,true);
this._document.removeEventListener(i,this.__go,true);
this._window.removeEventListener(l,this.__gp,true);
this._window.removeEventListener(m,this.__gq,true);
this._window.removeEventListener(K,this.__gr,true);
},"mshtml":function(){this._document.detachEvent(d,this.__gn);
this._document.detachEvent(M,this.__go);
this._document.detachEvent(N,this.__gt);
this._document.detachEvent(O,this.__gu);
this._document.detachEvent(L,this.__gs);
},"webkit":function(){this._document.removeEventListener(k,this.__gn,true);
this._document.removeEventListener(f,this.__gs,false);
this._window.removeEventListener(g,this.__gt,true);
this._window.removeEventListener(h,this.__gu,true);
this._window.removeEventListener(l,this.__gp,true);
this._window.removeEventListener(m,this.__gq,true);
},"opera":function(){this._document.removeEventListener(k,this.__gn,true);
this._window.removeEventListener(g,this.__gt,true);
this._window.removeEventListener(h,this.__gu,true);
this._window.removeEventListener(l,this.__gp,true);
this._window.removeEventListener(m,this.__gq,true);
}}),__gA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"gecko":function(e){if(!this.__gL(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(e){this.__gz();
var Y=e.srcElement;
var X=this.__gJ(Y);

if(X){this.setFocus(X);
}this.tryActivate(Y);
},"opera":function(e){var bE=e.target;

if(bE==this._document||bE==this._window){this.__gz();

if(this.__gv){this.setFocus(this.__gv);
delete this.__gv;
}
if(this.__gw){this.setActive(this.__gw);
delete this.__gw;
}}else{this.setFocus(bE);
this.tryActivate(bE);
if(!this.__gL(bE)){bE.selectionStart=0;
bE.selectionEnd=0;
}}},"default":null})),__gC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(e){if(!e.toElement){this.__gy();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bp=e.target;

if(bp===this.getFocus()){this.resetFocus();
}
if(bp===this.getActive()){this.resetActive();
}},"opera":function(e){var ba=e.target;

if(ba==this._document){this.__gy();
this.__gv=this.getFocus();
this.__gw=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(ba===this.getFocus()){this.resetFocus();
}
if(ba===this.getActive()){this.resetActive();
}}},"default":null})),__gD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__gy();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__gy();
this.__gv=this.getFocus();
this.__gw=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"gecko":function(e){var bU=e.target;

if(bU===this._window||bU===this._document){this.__gz();
bU=this._body;
}this.setFocus(bU);
this.tryActivate(bU);
},"webkit":function(e){var bQ=e.target;

if(bQ===this._window||bQ===this._document){this.__gz();

if(this.__gv){this.setFocus(this.__gv);
delete this.__gv;
}
if(this.__gw){this.setActive(this.__gw);
delete this.__gw;
}}else{this.setFocus(bQ);
this.tryActivate(bQ);
}},"default":null})),__gF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"gecko":function(e){var bH=e.target;
var bF=this.__gJ(bH);
var bG=this.__gL(bH);

if(!bG){qx.bom.Event.preventDefault(e);
if(bF){if(qx.core.Variant.isSet(n,I)){var bI=qx.bom.element.Attribute.get(bF,s)===z;

if(!bI){bF.focus();
}}else{bF.focus();
}}}else if(!bF){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bu=e.srcElement;
var bt=this.__gJ(bu);

if(bt){if(!this.__gL(bu)){bu.unselectable=j;
document.selection.empty();
bt.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__gL(bu)){bu.unselectable=j;
}}},"webkit":function(e){var c=e.target;
var b=this.__gJ(c);

if(b){this.setFocus(b);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bm=e.target;
var bk=this.__gJ(bm);

if(!this.__gL(bm)){qx.bom.Event.preventDefault(e);
if(bk){var bl=this.getFocus();

if(bl&&bl.selectionEnd){bl.selectionStart=0;
bl.selectionEnd=0;
bl.blur();
}if(bk){this.setFocus(bk);
}}}else if(bk){this.setFocus(bk);
}},"default":null})),__gG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(e){var P=e.srcElement;

if(P.unselectable){P.unselectable=w;
}var Q=this.getFocus();

if(Q&&P!=Q&&Q.nodeName.toLowerCase()===q){P=Q;
}this.tryActivate(P);
},"gecko":function(e){var bM=e.target;

while(bM&&bM.offsetWidth===undefined){bM=bM.parentNode;
}
if(bM){this.tryActivate(bM);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null})),__gH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml|webkit":function(e){var bD=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__gL(bD)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gI:function(bq){var br=qx.bom.element.Attribute.get(bq,p);

if(br>=1){return true;
}var bs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(br>=0&&bs[bq.tagName]){return true;
}return false;
},__gJ:function(bR){while(bR&&bR.nodeType===1){if(bR.getAttribute(D)==j){return null;
}
if(this.__gI(bR)){return bR;
}bR=bR.parentNode;
}return this._body;
},__gK:function(bx){var by=bx;

while(bx&&bx.nodeType===1){if(bx.getAttribute(y)==j){return null;
}bx=bx.parentNode;
}return by;
},__gL:function(bb){while(bb&&bb.nodeType===1){var bc=bb.getAttribute(o);

if(bc!=null){return bc===j;
}bb=bb.parentNode;
}return true;
},_applyActive:function(bz,bA){if(bA){this.__gx(bA,bz,v,true);
}
if(bz){this.__gx(bz,bA,A,true);
}},_applyFocus:function(bn,bo){if(bo){this.__gx(bo,bn,C,true);
}
if(bn){this.__gx(bn,bo,r,true);
}if(bo){this.__gx(bo,bn,m,false);
}
if(bn){this.__gx(bn,bo,l,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(E,u,J,H,x,B);
},defer:function(bh){qx.event.Registration.addHandler(bh);
var bi=bh.FOCUSABLE_ELEMENTS;

for(var bj in bi){bi[bj.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var r="",q="qx.client",p="readOnly",o="accessKey",n="qx.bom.element.Attribute",m="rowSpan",l="vAlign",k="className",j="textContent",i="'",F="htmlFor",E="longDesc",D="cellSpacing",C="frameBorder",B="='",A="useMap",z="innerText",y="innerHTML",x="tabIndex",w="dateTime",u="maxLength",v="mshtml",s="cellPadding",t="colSpan";
qx.Class.define(n,{statics:{__gM:{names:{"class":k,"for":F,html:y,text:qx.core.Variant.isSet(q,v)?z:j,colspan:t,rowspan:m,valign:l,datetime:w,accesskey:o,tabindex:x,maxlength:u,readonly:p,longdesc:E,cellpadding:s,cellspacing:D,frameborder:C,usemap:A},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:r,maxLength:10000000,className:r,innerHTML:r,innerText:r,textContent:r,htmlFor:r,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(e){var f=[];
var h=this.__gM.runtime;

for(var g in e){if(!h[g]){f.push(g,B,e[g],i);
}}return f.join(r);
},get:qx.core.Variant.select(q,{"mshtml":function(b,name){var d=this.__gM;
var c;
name=d.names[name]||name;
if(d.original[name]){c=b.getAttribute(name,2);
}else if(d.property[name]){if(d.propertyDefault[name]&&c==d.propertyDefault[name]){return null;
}c=b[name];
}else{c=b.getAttribute(name);
}if(d.bools[name]){return !!c;
}return c;
},"default":function(J,name){var L=this.__gM;
var K;
name=L.names[name]||name;
if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];

if(K==null){K=J.getAttribute(name);
}}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
}}),set:function(G,name,H){var I=this.__gM;
name=I.names[name]||name;
if(I.bools[name]){H=!!H;
}if(I.property[name]){if(H==null){H=I.propertyDefault[name];

if(H===undefined){H=null;
}}G[name]=H;
}else{if(H===true){G.setAttribute(name,name);
}else if(H===false||H===null){G.removeAttribute(name);
}else{G.setAttribute(name,H);
}}},reset:function(a,name){this.set(a,name,null);
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{getModifiers:function(){var c=0;
var b=this._native;

if(b.shiftKey){c|=qx.event.type.Dom.SHIFT_MASK;
}
if(b.ctrlKey){c|=qx.event.type.Dom.CTRL_MASK;
}
if(b.altKey){c|=qx.event.type.Dom.ALT_MASK;
}
if(b.metaKey){c|=qx.event.type.Dom.META_MASK;
}return c;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var d="qx.event.type.KeyInput";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{init:function(a,b,c){arguments.callee.base.call(this,a,b,null,true,true);
this._charCode=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var k="qx.client",j="left",i="right",h="middle",g="dblclick",f="click",e="none",d="contextmenu",c="qx.event.type.Mouse",b="Chrome";
qx.Class.define(c,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){arguments.callee.base.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},__gN:qx.core.Variant.select(k,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case f:case g:return j;
case d:return i;
default:return this.__gN[this._native.button]||e;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(k,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(window.navigator.userAgent.indexOf(b)!==-1){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var A="qx.client",z="qx.dom.Hierarchy",y="previousSibling",x="*",w="nextSibling",v="parentNode";
qx.Class.define(z,{statics:{getNodeIndex:function(I){var J=0;

while(I&&(I=I.previousSibling)){J++;
}return J;
},getElementIndex:function(o){var p=0;
var q=qx.dom.Node.ELEMENT;

while(o&&(o=o.previousSibling)){if(o.nodeType==q){p++;
}}return p;
},getNextElementSibling:function(K){while(K&&(K=K.nextSibling)&&!qx.dom.Node.isElement(K)){continue;
}return K||null;
},getPreviousElementSibling:function(N){while(N&&(N=N.previousSibling)&&!qx.dom.Node.isElement(N)){continue;
}return N||null;
},contains:qx.core.Variant.select(A,{"webkit|mshtml|opera":function(r,s){if(qx.dom.Node.isDocument(r)){var t=qx.dom.Node.getDocument(s);
return r&&t==r;
}else if(qx.dom.Node.isDocument(s)){return false;
}else{return r.contains(s);
}},"gecko":function(E,F){return !!(E.compareDocumentPosition(F)&16);
},"default":function(S,T){while(T){if(S==T){return true;
}T=T.parentNode;
}return false;
}}),isRendered:function(G){if(!G.offsetParent){return false;
}var H=G.ownerDocument||G.document;
if(H.body.contains){return H.body.contains(G);
}if(H.compareDocumentPosition){return !!(H.compareDocumentPosition(G)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(C,D){return this.contains(D,C);
},getCommonParent:qx.core.Variant.select(A,{"mshtml|opera":function(j,k){if(j===k){return j;
}
while(j&&qx.dom.Node.isElement(j)){if(j.contains(k)){return j;
}j=j.parentNode;
}return null;
},"default":function(a,b){if(a===b){return a;
}var c={};
var f=qx.core.ObjectRegistry;
var e,d;

while(a||b){if(a){e=f.toHashCode(a);

if(c[e]){return c[e];
}c[e]=a;
a=a.parentNode;
}
if(b){d=f.toHashCode(b);

if(c[d]){return c[d];
}c[d]=b;
b=b.parentNode;
}}return null;
}}),getAncestors:function(l){return this._recursivelyCollect(l,v);
},getChildElements:function(U){U=U.firstChild;

if(!U){return [];
}var V=this.getNextSiblings(U);

if(U.nodeType===1){V.unshift(U);
}return V;
},getDescendants:function(B){return qx.lang.Array.fromCollection(B.getElementsByTagName(x));
},getFirstDescendant:function(M){M=M.firstChild;

while(M&&M.nodeType!=1){M=M.nextSibling;
}return M;
},getLastDescendant:function(R){R=R.lastChild;

while(R&&R.nodeType!=1){R=R.previousSibling;
}return R;
},getPreviousSiblings:function(u){return this._recursivelyCollect(u,y);
},getNextSiblings:function(n){return this._recursivelyCollect(n,w);
},_recursivelyCollect:function(O,P){var Q=[];

while(O=O[P]){if(O.nodeType==1){Q.push(O);
}}return Q;
},getSiblings:function(L){return this.getPreviousSiblings(L).reverse().concat(this.getNextSiblings(L));
},isEmpty:function(m){m=m.firstChild;

while(m){if(m.nodeType===qx.dom.Node.ELEMENT||m.nodeType===qx.dom.Node.TEXT){return false;
}m=m.nextSibling;
}return true;
},cleanWhitespace:function(g){var h=g.firstChild;

while(h){var i=h.nextSibling;

if(h.nodeType==3&&!/\S/.test(h.nodeValue)){g.removeChild(h);
}h=i;
}}}});
})();
(function(){var j="qx.client",i="qx.event.type.Drag";
qx.Class.define(i,{extend:qx.event.type.Event,members:{init:function(m,n){arguments.callee.base.call(this,false,m);

if(n){this._native=n.getNativeEvent()||null;
this._originalTarget=n.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(f){var g=arguments.callee.base.call(this,f);
g._native=this._native;
return g;
},getDocumentLeft:qx.core.Variant.select(j,{"mshtml":function(){if(this._native==null){return 0;
}var c=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(c);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(j,{"mshtml":function(){if(this._native==null){return 0;
}var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(d){this.getManager().addType(d);
},addAction:function(h){this.getManager().addAction(h);
},supportsType:function(e){return this.getManager().supportsType(e);
},supportsAction:function(o){return this.getManager().supportsAction(o);
},addData:function(k,l){this.getManager().addData(k,l);
},getData:function(b){return this.getManager().getData(b);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var m="blur",k="__gQ",j="__gP",h="losecapture",g="capture",f="click",e="qx.event.dispatch.MouseCapture",d="focus",c="scroll",b="__gO";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(p){arguments.callee.base.call(this);
this.__gO=p;
this.__gP=p.getWindow();
p.addListener(this.__gP,m,this.releaseCapture,this);
p.addListener(this.__gP,d,this.releaseCapture,this);
p.addListener(this.__gP,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gQ:null,__gO:null,__gP:null,canDispatchEvent:function(u,event,v){return (this.__gQ&&this.__gR[v]);
},dispatchEvent:function(q,event,r){if(r==f){event.stopPropagation();
this.releaseCapture();
return;
}var s=this.__gO.getListeners(this.__gQ,r,false);

if(s){event.setCurrentTarget(this.__gQ);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=s.length;i<l;i++){var t=s[i].context||event.getCurrentTarget();
s[i].handler.call(t,event);
}}},__gR:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(o){if(this.__gQ===o){return;
}
if(this.__gQ){this.releaseCapture();
}this.__gQ=o;
qx.event.Registration.fireEvent(o,g,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gQ;
},releaseCapture:function(){var n=this.__gQ;

if(!n){return;
}this.__gQ=null;
qx.event.Registration.fireEvent(n,h,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(k,b,j);
},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var s="qx.client",r="",q="mshtml",p="'",o="SelectionLanguage",n="qx.xml.Document",m=" />",k="MSXML2.DOMDocument.3.0",j='<\?xml version="1.0" encoding="utf-8"?>\n<',h="MSXML2.XMLHTTP.3.0",d="MSXML2.XMLHTTP.6.0",g=" xmlns='",f="text/xml",c="XPath",b="MSXML2.DOMDocument.6.0",e="HTML";
qx.Bootstrap.define(n,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(v){if(v.nodeType===9){return v.documentElement.nodeName!==e;
}else if(v.ownerDocument){return this.isXmlDocument(v.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(s,{"mshtml":function(w,x){var y=new ActiveXObject(this.DOMDOC);
y.setProperty(o,c);

if(x){var z=j;
z+=x;

if(w){z+=g+w+p;
}z+=m;
y.loadXML(z);
}return y;
},"default":function(D,E){return document.implementation.createDocument(D||r,E||r,null);
}}),fromString:qx.core.Variant.select(s,{"mshtml":function(t){var u=qx.xml.Document.create();
u.loadXML(t);
return u;
},"default":function(F){var G=new DOMParser();
return G.parseFromString(F,f);
}})},defer:function(A){if(qx.core.Variant.isSet(s,q)){var B=[b,k];
var C=[d,h];

for(var i=0,l=B.length;i<l;i++){try{new ActiveXObject(B[i]);
new ActiveXObject(C[i]);
}catch(a){continue;
}A.DOMDOC=B[i];
A.XMLHTTP=C[i];
break;
}}}});
})();
(function(){var G="visible",F="scroll",E="borderBottomWidth",D="borderTopWidth",C="left",B="borderLeftWidth",A="bottom",z="top",y="right",x="qx.bom.element.Scroll",w="borderRightWidth";
qx.Class.define(x,{statics:{intoViewX:function(a,stop,b){var parent=a.parentNode;
var g=qx.dom.Node.getDocument(a);
var c=g.body;
var o,m,j;
var q,h,r;
var k,s,v;
var t,e,n,d;
var i,u,l;
var f=b===C;
var p=b===y;
stop=stop?stop.parentNode:g;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===c||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===c){m=parent.scrollLeft;
j=m+qx.bom.Viewport.getWidth();
q=qx.bom.Viewport.getWidth();
h=parent.clientWidth;
r=parent.scrollWidth;
k=0;
s=0;
v=0;
}else{o=qx.bom.element.Location.get(parent);
m=o.left;
j=o.right;
q=parent.offsetWidth;
h=parent.clientWidth;
r=parent.scrollWidth;
k=parseInt(qx.bom.element.Style.get(parent,B),10)||0;
s=parseInt(qx.bom.element.Style.get(parent,w),10)||0;
v=q-h-k-s;
}t=qx.bom.element.Location.get(a);
e=t.left;
n=t.right;
d=a.offsetWidth;
i=e-m-k;
u=n-j+s;
l=0;
if(f){l=i;
}else if(p){l=u+v;
}else if(i<0||d>h){l=i;
}else if(u>0){l=u+v;
}parent.scrollLeft+=l;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===c){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===z;
var W=L===A;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,D),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,E),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var bg="borderTopWidth",bf="borderLeftWidth",be="marginTop",bd="marginLeft",bc="scroll",bb="qx.client",ba="border-box",Y="borderBottomWidth",X="borderRightWidth",W="auto",bv="padding",bu="qx.bom.element.Location",bt="paddingLeft",bs="static",br="marginBottom",bq="visible",bp="BODY",bo="paddingBottom",bn="paddingTop",bm="marginRight",bk="position",bl="margin",bi="overflow",bj="paddingRight",bh="border";
qx.Class.define(bu,{statics:{__gS:function(N,O){return qx.bom.element.Style.get(N,O,qx.bom.element.Style.COMPUTED_MODE,false);
},__gT:function(bF,bG){return parseInt(qx.bom.element.Style.get(bF,bG,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gU:function(bM){var bP=0,top=0;
if(bM.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bO=qx.dom.Node.getWindow(bM);
bP-=qx.bom.Viewport.getScrollLeft(bO);
top-=qx.bom.Viewport.getScrollTop(bO);
}else{var bN=qx.dom.Node.getDocument(bM).body;
bM=bM.parentNode;
while(bM&&bM!=bN){bP+=bM.scrollLeft;
top+=bM.scrollTop;
bM=bM.parentNode;
}}return {left:bP,top:top};
},__gV:qx.core.Variant.select(bb,{"mshtml":function(J){var L=qx.dom.Node.getDocument(J);
var K=L.body;
var M=0;
var top=0;
M-=K.clientLeft+L.documentElement.clientLeft;
top-=K.clientTop+L.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){M+=this.__gT(K,bf);
top+=this.__gT(K,bg);
}return {left:M,top:top};
},"webkit":function(a){var c=qx.dom.Node.getDocument(a);
var b=c.body;
var d=b.offsetLeft;
var top=b.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){d+=this.__gT(b,bf);
top+=this.__gT(b,bg);
}return {left:d,top:top};
},"gecko":function(bw){var bx=qx.dom.Node.getDocument(bw).body;
var by=bx.offsetLeft;
var top=bx.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){by+=this.__gT(bx,bd);
top+=this.__gT(bx,be);
}if(qx.bom.element.BoxSizing.get(bx)!==ba){by+=this.__gT(bx,bf);
top+=this.__gT(bx,bg);
}return {left:by,top:top};
},"default":function(e){var f=qx.dom.Node.getDocument(e).body;
var g=f.offsetLeft;
var top=f.offsetTop;
return {left:g,top:top};
}}),__gW:qx.core.Variant.select(bb,{"mshtml|webkit":function(v){var x=qx.dom.Node.getDocument(v);
if(v.getBoundingClientRect){var y=v.getBoundingClientRect();
var z=y.left;
var top=y.top;
}else{var z=v.offsetLeft;
var top=v.offsetTop;
v=v.offsetParent;
var w=x.body;
while(v&&v!=w){z+=v.offsetLeft;
top+=v.offsetTop;
z+=this.__gT(v,bf);
top+=this.__gT(v,bg);
v=v.offsetParent;
}}return {left:z,top:top};
},"gecko":function(R){if(R.getBoundingClientRect){var U=R.getBoundingClientRect();
var V=Math.round(U.left);
var top=Math.round(U.top);
}else{var V=0;
var top=0;
var S=qx.dom.Node.getDocument(R).body;
var T=qx.bom.element.BoxSizing;

if(T.get(R)!==ba){V-=this.__gT(R,bf);
top-=this.__gT(R,bg);
}
while(R&&R!==S){V+=R.offsetLeft;
top+=R.offsetTop;
if(T.get(R)!==ba){V+=this.__gT(R,bf);
top+=this.__gT(R,bg);
}if(R.parentNode&&this.__gS(R.parentNode,bi)!=bq){V+=this.__gT(R.parentNode,bf);
top+=this.__gT(R.parentNode,bg);
}R=R.offsetParent;
}}return {left:V,top:top};
},"default":function(G){var I=0;
var top=0;
var H=qx.dom.Node.getDocument(G).body;
while(G&&G!==H){I+=G.offsetLeft;
top+=G.offsetTop;
G=G.offsetParent;
}return {left:I,top:top};
}}),get:function(m,n){if(m.tagName==bp){var location=this.__gX(m);
var u=location.left;
var top=location.top;
}else{var o=this.__gV(m);
var t=this.__gW(m);
var scroll=this.__gU(m);
var u=t.left+o.left-scroll.left;
var top=t.top+o.top-scroll.top;
}var p=u+m.offsetWidth;
var q=top+m.offsetHeight;

if(n){if(n==bv||n==bc){var r=qx.bom.element.Overflow.getX(m);

if(r==bc||r==W){p+=m.scrollWidth-m.offsetWidth+this.__gT(m,bf)+this.__gT(m,X);
}var s=qx.bom.element.Overflow.getY(m);

if(s==bc||s==W){q+=m.scrollHeight-m.offsetHeight+this.__gT(m,bg)+this.__gT(m,Y);
}}
switch(n){case bv:u+=this.__gT(m,bt);
top+=this.__gT(m,bn);
p-=this.__gT(m,bj);
q-=this.__gT(m,bo);
case bc:u-=m.scrollLeft;
top-=m.scrollTop;
p-=m.scrollLeft;
q-=m.scrollTop;
case bh:u+=this.__gT(m,bf);
top+=this.__gT(m,bg);
p-=this.__gT(m,X);
q-=this.__gT(m,Y);
break;
case bl:u-=this.__gT(m,bd);
top-=this.__gT(m,be);
p+=this.__gT(m,bm);
q+=this.__gT(m,br);
break;
}}return {left:u,top:top,right:p,bottom:q};
},__gX:qx.core.Variant.select(bb,{"default":function(k){var top=k.offsetTop+this.__gT(k,be);
var l=k.offsetLeft+this.__gT(k,bd);
return {left:l,top:top};
},"mshtml":function(bK){var top=bK.offsetTop;
var bL=bK.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gT(bK,be);
bL+=this.__gT(bK,bd);
}return {left:bL,top:top};
},"gecko":function(P){var top=P.offsetTop+this.__gT(P,be)+this.__gT(P,bf);
var Q=P.offsetLeft+this.__gT(P,bd)+this.__gT(P,bg);
return {left:Q,top:top};
}}),getLeft:function(A,B){return this.get(A,B).left;
},getTop:function(E,F){return this.get(E,F).top;
},getRight:function(C,D){return this.get(C,D).right;
},getBottom:function(bH,bI){return this.get(bH,bI).bottom;
},getRelative:function(bz,bA,bB,bC){var bE=this.get(bz,bB);
var bD=this.get(bA,bC);
return {left:bE.left-bD.left,top:bE.top-bD.top,right:bE.right-bD.right,bottom:bE.bottom-bD.bottom};
},getPosition:function(bJ){return this.getRelative(bJ,this.getOffsetParent(bJ));
},getOffsetParent:function(h){var j=h.offsetParent||document.body;
var i=qx.bom.element.Style;

while(j&&(!/^body|html$/i.test(j.tagName)&&i.get(j,bk)===bs)){j=j.offsetParent;
}return j;
}}});
})();
(function(){var D="textarea",C="input",B="qx.client",A="character",z="qx.bom.Selection",y="#text",x="EndToEnd",w="button",v="body";
qx.Class.define(z,{statics:{getSelectionObject:qx.core.Variant.select(B,{"mshtml":function(J){return J.selection;
},"default":function(U){return qx.dom.Node.getWindow(U).getSelection();
}}),get:qx.core.Variant.select(B,{"mshtml":function(K){var L=qx.bom.Range.get(qx.dom.Node.getDocument(K));
return L.text;
},"default":function(M){if(qx.dom.Node.isElement(M)&&(M.nodeName.toLowerCase()==C||M.nodeName.toLowerCase()==D)){return M.value.substring(M.selectionStart,M.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(M)).toString();
}return null;
}}),getLength:qx.core.Variant.select(B,{"mshtml":function(s){var u=qx.bom.Selection.get(s);
var t=qx.util.StringSplit.split(u,/\r\n/);
return u.length-(t.length-1);
},"opera":function(a){var f,d,b;

if(qx.dom.Node.isElement(a)&&(a.nodeName.toLowerCase()==C||a.nodeName.toLowerCase()==D)){var e=a.selectionStart;
var c=a.selectionEnd;
f=a.value.substring(e,c);
d=c-e;
}else{f=qx.bom.Selection.get(a);
d=f.length;
}b=qx.util.StringSplit.split(f,/\r\n/);
return d-(b.length-1);
},"default":function(I){if(qx.dom.Node.isElement(I)&&(I.nodeName.toLowerCase()==C||I.nodeName.toLowerCase()==D)){return I.selectionEnd-I.selectionStart;
}else{return qx.bom.Selection.get(I).length;
}return null;
}}),set:qx.core.Variant.select(B,{"mshtml":function(n,o,p){var q;
if(qx.dom.Node.isDocument(n)){n=n.body;
}
if(qx.dom.Node.isElement(n)||qx.dom.Node.isText(n)){switch(n.nodeName.toLowerCase()){case C:case D:case w:if(p===undefined){p=n.value.length;
}
if(o>=0&&o<=n.value.length&&p>=0&&p<=n.value.length){q=qx.bom.Range.get(n);
q.collapse(true);
q.moveStart(A,o);
q.moveEnd(A,p-o);
q.select();
return true;
}break;
case y:if(p===undefined){p=n.nodeValue.length;
}
if(o>=0&&o<=n.nodeValue.length&&p>=0&&p<=n.nodeValue.length){q=qx.bom.Range.get(qx.dom.Node.getBodyElement(n));
q.moveToElementText(n.parentNode);
q.collapse(true);
q.moveStart(A,o);
q.moveEnd(A,p-o);
q.select();
return true;
}break;
default:if(p===undefined){p=n.childNodes.length-1;
}if(n.childNodes[o]&&n.childNodes[p]){q=qx.bom.Range.get(qx.dom.Node.getBodyElement(n));
q.moveToElementText(n.childNodes[o]);
q.collapse(true);
var r=qx.bom.Range.get(qx.dom.Node.getBodyElement(n));
r.moveToElementText(n.childNodes[p]);
q.setEndPoint(x,r);
q.select();
return true;
}}}return false;
},"default":function(N,O,P){var T=N.nodeName.toLowerCase();

if(qx.dom.Node.isElement(N)&&(T==C||T==D)){if(P===undefined){P=N.value.length;
}if(O>=0&&O<=N.value.length&&P>=0&&P<=N.value.length){N.select();
N.setSelectionRange(O,P);
return true;
}}else{var R=false;
var S=qx.dom.Node.getWindow(N).getSelection();
var Q=qx.bom.Range.get(N);
if(qx.dom.Node.isText(N)){if(P===undefined){P=N.length;
}
if(O>=0&&O<N.length&&P>=0&&P<=N.length){R=true;
}}else if(qx.dom.Node.isElement(N)){if(P===undefined){P=N.childNodes.length-1;
}
if(O>=0&&N.childNodes[O]&&P>=0&&N.childNodes[P]){R=true;
}}else if(qx.dom.Node.isDocument(N)){N=N.body;

if(P===undefined){P=N.childNodes.length-1;
}
if(O>=0&&N.childNodes[O]&&P>=0&&N.childNodes[P]){R=true;
}}
if(R){if(!S.isCollapsed){S.collapseToStart();
}Q.setStart(N,O);
if(qx.dom.Node.isText(N)){Q.setEnd(N,P);
}else{Q.setEndAfter(N.childNodes[P]);
}if(S.rangeCount>0){S.removeAllRanges();
}S.addRange(Q);
return true;
}}return false;
}}),setAll:function(m){return qx.bom.Selection.set(m,0);
},clear:qx.core.Variant.select(B,{"mshtml":function(E){var F=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(E));
var G=qx.bom.Range.get(E);
var parent=G.parentElement();
var H=qx.bom.Range.get(qx.dom.Node.getDocument(E));
if(parent==H.parentElement()&&parent==E){F.empty();
}},"default":function(g){var i=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(g));
var k=g.nodeName.toLowerCase();
if(qx.dom.Node.isElement(g)&&(k==C||k==D)){g.setSelectionRange(0,0);
qx.bom.Element.blur(g);
}else if(qx.dom.Node.isDocument(g)||k==v){i.collapse(g.body?g.body:g,0);
}else{var j=qx.bom.Range.get(g);

if(!j.collapsed){var l;
var h=j.commonAncestorContainer;
if(qx.dom.Node.isElement(g)&&qx.dom.Node.isText(h)){l=h.parentNode;
}else{l=h;
}
if(l==g){i.collapse(g,0);
}}}}})}});
})();
(function(){var p="button",o="qx.bom.Range",n="text",m="password",l="file",k="submit",j="reset",i="textarea",h="input",g="hidden",e="qx.client",f="body";
qx.Class.define(o,{statics:{get:qx.core.Variant.select(e,{"mshtml":function(a){if(qx.dom.Node.isElement(a)){switch(a.nodeName.toLowerCase()){case h:switch(a.type){case n:case m:case g:case p:case j:case l:case k:return a.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}break;
case i:case f:case p:return a.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}},"default":function(b){var c=qx.dom.Node.getDocument(b);
var d=qx.bom.Selection.getSelectionObject(c);

if(d.rangeCount>0){return d.getRangeAt(0);
}else{return c.createRange();
}}})}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Bootstrap.define(c,{statics:{split:function(g,h,k){var n=f;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,b),e);
}else{n=h.toString().replace(/^[\S\s]+\//,f);

if(!h.global){h=new RegExp(h.source,e+n);
}}var m=new RegExp(a+h.source+d,n);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);

if(!k){return [];
}}var p,o=[],l=0,i=0;

while((k?i++<=k:true)&&(p=h.exec(g))){if((p[0].length===0)&&(h.lastIndex>p.index)){h.lastIndex--;
}
if(h.lastIndex>l){if(p.length>1){p[0].replace(m,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){p[j]=undefined;
}}});
}o=o.concat(g.substring(l,p.index),(p.index===g.length?[]:p.slice(1)));
l=h.lastIndex;
}
if(p[0].length===0){h.lastIndex++;
}}return (l===g.length)?(h.test(f)?o:o.concat(f)):(k?o:o.concat(g.substring(l)));
}}});
})();
(function(){var d="qx.ui.core.queue.Widget",c="widget";
qx.Class.define(d,{statics:{__gY:{},remove:function(h){delete this.__gY[h.$$hash];
},add:function(a){var b=this.__gY;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(c);
},flush:function(){var e=this.__gY;
var g;

for(var f in e){g=e[f];
delete e[f];
g.syncWidget();
}for(var f in e){return;
}this.__gY={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__ha:{},__hb:{},remove:function(h){var i=h.$$hash;
delete this.__hb[i];
delete this.__ha[i];
},isVisible:function(g){return this.__hb[g.$$hash]||false;
},__hc:function(c){var e=this.__hb;
var d=c.$$hash;
var f;
if(c.isExcluded()){f=false;
}else{var parent=c.$$parent;

if(parent){f=this.__hc(parent);
}else{f=c.isRootWidget();
}}return e[d]=f;
},add:function(j){var k=this.__ha;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__ha;
var o=this.__hb;
for(var m in l){if(o[m]!=null){l[m].addChildrenToQueue(l);
}}var n={};

for(var m in l){n[m]=o[m];
o[m]=null;
}for(var m in l){if(o[m]==null){this.__hc(l[m]);
}if(o[m]&&o[m]!=n[m]){l[m].checkAppearanceNeeds();
}}this.__ha={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hd:{},remove:function(c){delete this.__hd[c.$$hash];
},add:function(d){var e=this.__hd;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(j){return !!this.__hd[j.$$hash];
},flush:function(){var i=qx.ui.core.queue.Visibility;
var f=this.__hd;
var h;

for(var g in f){h=f[g];
delete f[g];
if(i.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var f="dispose",e="qx.ui.core.queue.Dispose";
qx.Class.define(e,{statics:{__he:{},add:function(a){var b=this.__he;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var c=this.__he;

for(var d in c){c[d].dispose();
delete c[d];
}for(var d in c){return;
}this.__he={};
}}});
})();
(function(){var j="blur",h="focus",g="input",f="load",e="qx.ui.core.EventHandler",d="__hf",c="activate";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__hf=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hf:null,__hg:{focusin:1,focusout:1,focus:1,blur:1},__hh:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(a,b){return a instanceof qx.ui.core.Widget;
},_dispatchEvent:function(u){var z=u.getTarget();
var y=qx.ui.core.Widget.getWidgetByElement(z);
var A=false;

while(y&&y.isAnonymous()){var A=true;
y=y.getLayoutParent();
}if(y&&A&&u.getType()==c){y.getContainerElement().activate();
}if(this.__hg[u.getType()]){y=y&&y.getFocusTarget();
if(!y){return;
}}if(u.getRelatedTarget){var H=u.getRelatedTarget();
var G=qx.ui.core.Widget.getWidgetByElement(H);

while(G&&G.isAnonymous()){G=G.getLayoutParent();
}
if(G){if(this.__hg[u.getType()]){G=G.getFocusTarget();
}if(G===y){return;
}}}var C=u.getCurrentTarget();
var E=qx.ui.core.Widget.getWidgetByElement(C);

if(!E||E.isAnonymous()){return;
}if(this.__hg[u.getType()]){E=E.getFocusTarget();
}var F=u.getType();

if(!(E.isEnabled()||this.__hh[F])){return;
}var v=u.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var B=this.__hf.getListeners(E,F,v);

if(!B||B.length===0){return;
}var w=qx.event.Pool.getInstance().getObject(u.constructor);
u.clone(w);
w.setTarget(y);
w.setRelatedTarget(G||null);
w.setCurrentTarget(E);
var I=u.getOriginalTarget();

if(I){var x=qx.ui.core.Widget.getWidgetByElement(I);

while(x&&x.isAnonymous()){x=x.getLayoutParent();
}w.setOriginalTarget(x);
}else{w.setOriginalTarget(z);
}for(var i=0,l=B.length;i<l;i++){var D=B[i].context||E;
B[i].handler.call(D,w);
}if(w.getPropagationStopped()){u.stopPropagation();
}
if(w.getDefaultPrevented()){u.preventDefault();
}qx.event.Pool.getInstance().poolObject(w);
},registerEvent:function(p,q,r){var s;

if(q===h||q===j){s=p.getFocusElement();
}else if(q===f||q===g){s=p.getContentElement();
}else{s=p.getContainerElement();
}
if(s){s.addListener(q,this._dispatchEvent,this,r);
}},unregisterEvent:function(k,m,n){var o;

if(m===h||m===j){o=k.getFocusElement();
}else if(m===f||m===g){o=k.getContentElement();
}else{o=k.getContainerElement();
}
if(o){o.removeListener(m,this._dispatchEvent,this,n);
}}},destruct:function(){this._disposeFields(d);
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var g="qx.bom.client.Locale",f="-",e="";
qx.Bootstrap.define(g,{statics:{LOCALE:"",VARIANT:"",__hi:function(){var a=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var c=e;
var b=a.indexOf(f);

if(b!=-1){c=a.substr(b+1);
a=a.substr(0,b);
}this.LOCALE=a;
this.VARIANT=c;
}},defer:function(d){d.__hi();
}});
})();
(function(){var t='indexOf',s='slice',r='concat',q='toLocaleLowerCase',p="qx.type.BaseString",o="",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(p,{extend:Object,construct:function(w){var w=w||o;
this.__hj=w;
this.length=w.length;
},members:{$$isString:true,length:0,__hj:null,toString:function(){return this.__hj;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(u,v){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[g,h,r,t,a,n,j,k,s,f,e,b,c,d,q,m];
y.valueOf=y.toString;

for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var d="qx.locale.LocalizedString";
qx.Class.define(d,{extend:qx.type.BaseString,construct:function(a,b,c){arguments.callee.base.call(this,a);
this.__hk=b;
this.__hl=c;
},members:{__hk:null,__hl:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hk,this.__hl);
}}});
})();
(function(){var w="_",v="",u="qx.dynlocale",t="on",s="_applyLocale",r="changeLocale",q="__hm",p="C",o="__hn",n="qx.locale.Manager",l="String",m="singleton";
qx.Class.define(n,{type:m,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hm=qx.$$translations||{};
this.__hn=qx.$$locales||{};
var be=qx.bom.client.Locale;
var bc=be.LOCALE;
var bd=be.VARIANT;

if(bd!==v){bc+=w+bd;
}this.setLocale(bc||this.__ho);
},statics:{tr:function(G,H){var I=qx.lang.Array.fromArguments(arguments);
I.splice(0,1);
return qx.locale.Manager.getInstance().translate(G,I);
},trn:function(f,g,h,j){var k=qx.lang.Array.fromArguments(arguments);
k.splice(0,3);
if(h!=1){return qx.locale.Manager.getInstance().translate(g,k);
}else{return qx.locale.Manager.getInstance().translate(f,k);
}},trc:function(J,K,L){var M=qx.lang.Array.fromArguments(arguments);
M.splice(0,2);
return qx.locale.Manager.getInstance().translate(K,M);
},marktr:function(F){return F;
}},properties:{locale:{check:l,nullable:true,apply:s,event:r}},members:{__ho:p,__hp:null,__hq:null,__hm:null,__hn:null,getLanguage:function(){return this.__hq;
},getTerritory:function(){return this.getLocale().split(w)[1]||v;
},getAvailableLocales:function(){var bb=[];

for(var ba in this.__hn){if(ba!=this.__ho){bb.push(ba);
}}return bb;
},__hr:function(a){var c;
var b=a.indexOf(w);

if(b==-1){c=a;
}else{c=a.substring(0,b);
}return c;
},_applyLocale:function(d,e){this.__hp=d;
this.__hq=this.__hr(d);
},addTranslation:function(V,W){var X=this.__hm;

if(X[V]){for(var Y in W){X[V][Y]=W[Y];
}}else{X[V]=W;
}},translate:function(x,y,z){var E;
var C=this.__hm;

if(!C){return x;
}
if(z){var B=this.__hr(z);
}else{z=this.__hp;
B=this.__hq;
}
if(!E&&C[z]){E=C[z][x];
}
if(!E&&C[B]){E=C[B][x];
}
if(!E&&C[this.__ho]){E=C[this.__ho][x];
}
if(!E){E=x;
}
if(y.length>0){var A=[];

for(var i=0;i<y.length;i++){var D=y[i];

if(D&&D.translate){A[i]=D.translate();
}else{A[i]=D;
}}E=qx.lang.String.format(E,A);
}
if(qx.core.Variant.isSet(u,t)){E=new qx.locale.LocalizedString(E,x,y);
}return E;
},localize:function(N,O,P){var U;
var S=this.__hn;

if(!S){return N;
}
if(P){var R=this.__hr(P);
}else{P=this.__hp;
R=this.__hq;
}
if(!U&&S[P]){U=S[P][N];
}
if(!U&&S[R]){U=S[R][N];
}
if(!U&&S[this.__ho]){U=S[this.__ho][N];
}
if(!U){U=N;
}
if(O.length>0){var Q=[];

for(var i=0;i<O.length;i++){var T=O[i];

if(T.translate){Q[i]=T.translate();
}else{Q[i]=T;
}}U=qx.lang.String.format(U,Q);
}
if(qx.core.Variant.isSet(u,t)){U=new qx.locale.LocalizedString(U,N,O);
}return U;
}},destruct:function(){this._disposeFields(q,o);
}});
})();
(function(){var q="source",p="scale",o="no-repeat",n="mshtml",m="qx.client",l="qx.html.Image";
qx.Class.define(l,{extend:qx.html.Element,members:{_applyProperty:function(name,b){arguments.callee.base.call(this,name,b);

if(name===q){var f=this.getDomElement();
var c=this.getAllStyles();
var d=this._getProperty(q);
var e=this._getProperty(p);
var g=e?p:o;
qx.bom.element.Decoration.update(f,d,g,c);
}},_createDomElement:function(){var j=this._getProperty(p);
var k=j?p:o;

if(qx.core.Variant.isSet(m,n)){var i=this._getProperty(q);
this.setNodeName(qx.bom.element.Decoration.getTagName(k,i));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(k));
}return arguments.callee.base.call(this);
},_copyData:function(a){return arguments.callee.base.call(this,true);
},setSource:function(h){this._setProperty(q,h);
return this;
},getSource:function(){return this._getProperty(q);
},resetSource:function(){this._removeProperty(q);
return this;
},setScale:function(r){this._setProperty(p,r);
return this;
},getScale:function(){return this._getProperty(p);
}}});
})();
(function(){var m="replacement",l="Boolean",k="_applyScale",j="_applySource",i="-disabled.$1",h="changeSource",g="String",f="image",e="qx.ui.basic.Image";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(B){arguments.callee.base.call(this);

if(B){this.setSource(B);
}},properties:{source:{check:g,init:null,nullable:true,event:h,apply:j,themeable:true},scale:{check:l,init:false,themeable:true,apply:k},appearance:{refine:true,init:f},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hs:null,__ht:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__hs||0,height:this.__ht||0};
},_applyEnabled:function(D,E){arguments.callee.base.call(this,D,E);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(F){var G=this.getContentElement();
G.setScale(F);
},_styleSource:function(){var c=qx.util.AliasManager.getInstance().resolve(this.getSource());
var d=this.getContentElement();

if(!c){d.resetSource();
return;
}if(qx.util.ResourceManager.getInstance().has(c)){this.__hu(d,c);
}else if(qx.io2.ImageLoader.isLoaded(c)){this.__hv(d,c);
}else{this.__hw(d,c);
}},__hu:function(x,y){var A=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var z=y.replace(/\.([a-z]+)$/,i);

if(A.has(z)){y=z;
this.addState(m);
}else{this.removeState(m);
}}if(x.getSource()===y){return;
}x.setSource(y);
this.__hy(A.getImageWidth(y),A.getImageHeight(y));
},__hv:function(p,q){var s=qx.io2.ImageLoader;
p.setSource(q);
var r=s.getWidth(q);
var t=s.getHeight(q);
this.__hy(r,t);
},__hw:function(u,v){var self;
var w=qx.io2.ImageLoader;
{};
if(!w.isFailed(v)){w.load(v,this.__hx,this);
}else{if(u!=null){u.resetSource();
}}},__hx:function(a,b){if(a!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(b.failed){this.warn("Image could not be loaded: "+a);
}this._styleSource();
},__hy:function(n,o){if(n!==this.__hs||o!==this.__ht){this.__hs=n;
this.__ht=o;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var h="dragdrop-cursor",g="_applyAction",f="alias",e="qx.ui.core.DragDropCursor",d="move",c="singleton",b="copy";
qx.Class.define(e,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:c,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var a=this.getApplicationRoot();
a.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:h},action:{check:[f,b,d],apply:g,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var h="interval",g="Number",f="_applyTimeoutInterval",e="qx.event.type.Event",d="qx.event.Idle",c="__hz",b="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(h,this._onInterval,this);
a.start();
this.__hz=a;
},events:{"interval":e},properties:{timeoutInterval:{check:g,init:100,apply:f}},members:{__hz:null,_applyTimeoutInterval:function(i){this.__hz.setInterval(i);
},_onInterval:function(){this.fireEvent(h);
}},destruct:function(){if(this.__hz){this.__hz.stop();
}this._disposeFields(c);
}});
})();
(function(){var f="bottom",e="top",d="left",c="right",b="-",a="qx.util.PlaceUtil";
qx.Class.define(a,{statics:{compute:function(g,h,i,j,k,l){var z=0;
var top=0;
var p,o;
var v=j.split(b);
var s=v[0];
var y=v[1];
var t=0,q=0,u=0,w=0;

if(l){t+=l.left||0;
q+=l.top||0;
u+=l.right||0;
w+=l.bottom||0;
}switch(s){case d:z=i.left-g.width-t;
break;
case e:top=i.top-g.height-q;
break;
case c:z=i.right+u;
break;
case f:top=i.bottom+w;
break;
}switch(y){case d:z=i.left;
break;
case e:top=i.top;
break;
case c:z=i.right-g.width;
break;
case f:top=i.bottom-g.height;
break;
}
if(k===false){return {left:z,top:top};
}else{var r=Math.min(z,h.width-z-g.width);

if(r<0){var n=z;

if(z<0){if(s==d){n=i.right+u;
}else if(y==c){n=i.left;
}}else{if(s==c){n=i.left-g.width-t;
}else if(y==d){n=i.right-g.width;
}}p=Math.min(n,h.width-n-g.width);

if(p>r){z=n;
r=p;
}}var m=Math.min(top,h.height-top-g.height);

if(m<0){var x=top;

if(top<0){if(s==e){x=i.bottom+w;
}else if(y==f){x=i.top;
}}else{if(s==f){x=i.top-g.height-q;
}else if(y==e){x=i.bottom-g.height;
}}o=Math.min(x,h.height-x-g.height);

if(o>m){top=x;
m=o;
}}return {left:z,top:top,ratingX:r,ratingY:m};
}}}});
})();
(function(){var j="mousedown",i="__hA",h="blur",g="singleton",f="qx.ui.popup.Manager";
qx.Class.define(f,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hA={};
qx.event.Registration.addListener(document.documentElement,j,this.__hC,this,true);
qx.bom.Element.addListener(window,h,this.hideAll,this);
},members:{__hA:null,add:function(a){{};
this.__hA[a.$$hash]=a;
this.__hB();
},remove:function(q){{};
var r=this.__hA;

if(r){delete r[q.$$hash];
this.__hB();
}},hideAll:function(){var l=this.__hA;

if(l){for(var k in l){l[k].exclude();
}}},__hB:function(){var d=1e7;
var c=this.__hA;

for(var b in c){c[b].setZIndex(d++);
}},__hC:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__hA;

for(var n in p){var m=p[n];

if(!m.getAutoHide()||o==m||qx.ui.core.Widget.contains(m,o)){continue;
}m.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,j,this.__hC,this,true);
this._disposeMap(i);
}});
})();
(function(){var j="abstract",i="qx.ui.layout.Abstract",h="__hD",g="__hE";
qx.Class.define(i,{type:j,extend:qx.core.Object,members:{__hD:null,_invalidChildrenCache:null,__hE:null,invalidateLayoutCache:function(){this.__hD=null;
},renderLayout:function(e,f){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hD){return this.__hD;
}return this.__hD=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(d){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var a=this.__hE;

if(a instanceof qx.ui.core.LayoutItem){a.clearSeparators();
}},_renderSeparator:function(b,c){this.__hE.renderSeparator(b,c);
},connectToWidget:function(k){if(k&&this.__hE){throw new Error("It is not possible to manually set the connected widget.");
}this.__hE=k;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__hE;
},_applyLayoutChange:function(){if(this.__hE){this.__hE.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hE.getLayoutChildren();
}},destruct:function(){this._disposeFields(g,h);
}});
})();
(function(){var o="qx.ui.layout.Grow";
qx.Class.define(o,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(a,b){var f=this._getLayoutChildren();
var e,g,d,c;
for(var i=0,l=f.length;i<l;i++){e=f[i];
g=e.getSizeHint();
d=a;

if(d<g.minWidth){d=g.minWidth;
}else if(d>g.maxWidth){d=g.maxWidth;
}c=b;

if(c<g.minHeight){c=g.minHeight;
}else if(c>g.maxHeight){c=g.maxHeight;
}e.renderLayout(0,0,d,c);
}},_computeSizeHint:function(){var k=this._getLayoutChildren();
var h,n;
var m=0,j=0;
for(var i=0,l=k.length;i<l;i++){h=k[i];
n=h.getSizeHint();
m=Math.max(m,n.width);
j=Math.max(j,n.height);
}return {width:m,height:j};
}}});
})();
(function(){var L="label",K="icon",J="Boolean",I="left",H="both",G="String",F="_applyRich",E="_applyIcon",D="changeGap",C="_applyShow",v="right",B="_applyCenter",y="_applyIconPosition",t="qx.ui.basic.Atom",s="top",x="changeShow",w="bottom",z="_applyLabel",r="Integer",A="_applyGap",u="atom";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(O,P){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(O!=null){this.setLabel(O);
}
if(P!=null){this.setIcon(P);
}},properties:{appearance:{refine:true,init:u},label:{apply:z,nullable:true,dispose:true,check:G},rich:{check:J,init:false,apply:F},icon:{check:G,apply:E,nullable:true,themeable:true},gap:{check:r,nullable:false,event:D,apply:A,themeable:true,init:4},show:{init:H,check:[H,L,K],themeable:true,inheritable:true,apply:C,event:x},iconPosition:{init:I,check:[s,v,w,I],themeable:true,apply:y},center:{init:false,check:J,themeable:true,apply:B}},members:{_createChildControlImpl:function(a){var b;

switch(a){case L:b=new qx.ui.basic.Label(this.getLabel());
b.setAnonymous(true);
b.setRich(this.getRich());
this._add(b);

if(this.getLabel()==null||this.getShow()===K){b.exclude();
}break;
case K:b=new qx.ui.basic.Image(this.getIcon());
b.setAnonymous(true);
this._addAt(b,0);

if(this.getIcon()==null||this.getShow()===L){b.exclude();
}break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===K){this._excludeChildControl(L);
}else{this._showChildControl(L);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===L){this._excludeChildControl(K);
}else{this._showChildControl(K);
}},_applyLabel:function(j,k){var l=this.getChildControl(L,true);

if(l){l.setValue(j);
}this._handleLabel();
},_applyRich:function(c,d){var e=this.getChildControl(L,true);

if(e){e.setRich(c);
}},_applyIcon:function(m,n){var o=this.getChildControl(K,true);

if(o){o.setSource(m);
}this._handleIcon();
},_applyGap:function(f,g){this._getLayout().setGap(f);
},_applyShow:function(h,i){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(M,N){this._getLayout().setIconPosition(M);
},_applyCenter:function(p,q){this._getLayout().setCenter(p);
}}});
})();
(function(){var Q="bottom",P="_applyLayoutChange",O="top",N="left",M="right",L="middle",K="center",J="qx.ui.layout.Atom",I="Integer",H="Boolean";
qx.Class.define(J,{extend:qx.ui.layout.Abstract,properties:{gap:{check:I,init:4,apply:P},iconPosition:{check:[N,O,M,Q],init:N,apply:P},center:{check:H,init:false,apply:P}},members:{verifyLayoutProperty:null,renderLayout:function(m,n){var w=qx.ui.layout.Util;
var p=this.getIconPosition();
var s=this._getLayoutChildren();
var length=s.length;
var G,top,x,q;
var C,v;
var A=this.getGap();
var F=this.getCenter();
if(p===Q||p===M){var y=length-1;
var t=-1;
var r=-1;
}else{var y=0;
var t=length;
var r=1;
}if(p==O||p==Q){if(F){var B=0;

for(var i=y;i!=t;i+=r){q=s[i].getSizeHint().height;

if(q>0){B+=q;

if(i!=y){B+=A;
}}}top=Math.round((n-B)/2);
}else{top=0;
}
for(var i=y;i!=t;i+=r){C=s[i];
v=C.getSizeHint();
x=Math.min(v.maxWidth,Math.max(m,v.minWidth));
q=v.height;
G=w.computeHorizontalAlignOffset(K,x,m);
C.renderLayout(G,top,x,q);
if(q>0){top+=q+A;
}}}else{var u=m;
var o=null;
var E=0;

for(var i=y;i!=t;i+=r){C=s[i];
x=C.getSizeHint().width;

if(x>0){if(!o&&C instanceof qx.ui.basic.Label){o=C;
}else{u-=x;
}E++;
}}
if(E>1){var D=(E-1)*A;
u-=D;
}
if(o){var v=o.getSizeHint();
var z=Math.max(v.minWidth,Math.min(u,v.maxWidth));
u-=z;
}
if(F&&u>0){G=Math.round(u/2);
}else{G=0;
}
for(var i=y;i!=t;i+=r){C=s[i];
v=C.getSizeHint();
q=Math.min(v.maxHeight,Math.max(n,v.minHeight));

if(C===o){x=z;
}else{x=v.width;
}top=w.computeVerticalAlignOffset(L,v.height,n);
C.renderLayout(G,top,x,q);
if(x>0){G+=x+A;
}}}},_computeSizeHint:function(){var l=this._getLayoutChildren();
var length=l.length;
var c,j;
if(length===1){var c=l[0].getSizeHint();
j={width:c.width,height:c.height,minWidth:c.minWidth,minHeight:c.minHeight};
}else{var g=0,h=0;
var d=0,f=0;
var e=this.getIconPosition();
var k=this.getGap();

if(e===O||e===Q){var a=0;

for(var i=0;i<length;i++){c=l[i].getSizeHint();
h=Math.max(h,c.width);
g=Math.max(g,c.minWidth);
if(c.height>0){f+=c.height;
d+=c.minHeight;
a++;
}}
if(a>1){var b=(a-1)*k;
f+=b;
d+=b;
}}else{var a=0;

for(var i=0;i<length;i++){c=l[i].getSizeHint();
f=Math.max(f,c.height);
d=Math.max(d,c.minHeight);
if(c.width>0){h+=c.width;
g+=c.minWidth;
a++;
}}
if(a>1){var b=(a-1)*k;
h+=b;
g+=b;
}}j={minWidth:g,width:h,minHeight:d,height:f};
}return j;
}}});
})();
(function(){var W="middle",V="qx.ui.layout.Util",U="left",T="center",S="top",R="bottom",Q="right";
qx.Class.define(V,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(a,b,c){var e,j,d,k;
var f=b>c;
var m=Math.abs(b-c);
var n,g;
var h={};

for(j in a){e=a[j];
h[j]={potential:f?e.max-e.value:e.value-e.min,flex:f?e.flex:1/e.flex,offset:0};
}while(m!=0){k=Infinity;
d=0;

for(j in h){e=h[j];

if(e.potential>0){d+=e.flex;
k=Math.min(k,e.potential/e.flex);
}}if(d==0){break;
}k=Math.min(m,k*d)/d;
n=0;

for(j in h){e=h[j];

if(e.potential>0){g=Math.min(m,e.potential,Math.ceil(k*e.flex));
n+=g-k*e.flex;

if(n>=1){n-=1;
g-=1;
}e.potential-=g;

if(f){e.offset+=g;
}else{e.offset-=g;
}m-=g;
}}}return h;
},computeHorizontalAlignOffset:function(X,Y,ba,bb,bc){if(bb==null){bb=0;
}
if(bc==null){bc=0;
}var bd=0;

switch(X){case U:bd=bb;
break;
case Q:bd=ba-Y-bc;
break;
case T:bd=Math.round((ba-Y)/2);
if(bd<bb){bd=bb;
}else if(bd<bc){bd=Math.max(bb,ba-Y-bc);
}break;
}return bd;
},computeVerticalAlignOffset:function(A,B,C,D,E){if(D==null){D=0;
}
if(E==null){E=0;
}var F=0;

switch(A){case S:F=D;
break;
case R:F=C-B-E;
break;
case W:F=Math.round((C-B)/2);
if(F<D){F=D;
}else if(F<E){F=Math.max(D,C-B-E);
}break;
}return F;
},collapseMargins:function(bm){var bn=0,bp=0;

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];

if(bo<0){bp=Math.min(bp,bo);
}else if(bo>0){bn=Math.max(bn,bo);
}}return bn+bp;
},computeHorizontalGaps:function(o,p,q){if(p==null){p=0;
}var r=0;

if(q){r+=o[0].getMarginLeft();

for(var i=1,l=o.length;i<l;i+=1){r+=this.collapseMargins(p,o[i-1].getMarginRight(),o[i].getMarginLeft());
}r+=o[l-1].getMarginRight();
}else{for(var i=1,l=o.length;i<l;i+=1){r+=o[i].getMarginLeft()+o[i].getMarginRight();
}r+=(p*(l-1));
}return r;
},computeVerticalGaps:function(M,N,O){if(N==null){N=0;
}var P=0;

if(O){P+=M[0].getMarginTop();

for(var i=1,l=M.length;i<l;i+=1){P+=this.collapseMargins(N,M[i-1].getMarginBottom(),M[i].getMarginTop());
}P+=M[l-1].getMarginBottom();
}else{for(var i=1,l=M.length;i<l;i+=1){P+=M[i].getMarginTop()+M[i].getMarginBottom();
}P+=(N*(l-1));
}return P;
},computeHorizontalSeparatorGaps:function(be,bf,bg){var bj=qx.theme.manager.Decoration.getInstance().resolve(bg);
var bi=bj.getInsets();
var bh=bi.left+bi.right;
var bk=0;

for(var i=0,l=be.length;i<l;i++){var bl=be[i];
bk+=bl.getMarginLeft()+bl.getMarginRight();
}bk+=(bf+bh+bf)*(l-1);
return bk;
},computeVerticalSeparatorGaps:function(s,t,u){var x=qx.theme.manager.Decoration.getInstance().resolve(u);
var w=x.getInsets();
var v=w.top+w.bottom;
var y=0;

for(var i=0,l=s.length;i<l;i++){var z=s[i];
y+=z.getMarginTop()+z.getMarginBottom();
}y+=(t+v+t)*(l-1);
return y;
},arrangeIdeals:function(G,H,I,J,K,L){if(H<G||K<J){if(H<G&&K<J){H=G;
K=J;
}else if(H<G){K-=(G-H);
H=G;
if(K<J){K=J;
}}else if(K<J){H-=(J-K);
K=J;
if(H<G){H=G;
}}}
if(H>I||K>L){if(H>I&&K>L){H=I;
K=L;
}else if(H>I){K+=(H-I);
H=I;
if(K>L){K=L;
}}else if(K>L){H+=(K-L);
K=L;
if(H>I){H=I;
}}}return {begin:H,end:K};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var G="Please use the value property instead.",F="changeContent",E="qx.dynlocale",D="text",C="color",B="userSelect",A="changeLocale",z="enabled",y="none",x="on",bf="_applyTextAlign",be="Boolean",bd="qx.ui.core.Widget",bc="Please use the changeValue event instead.",bb="changeTextAlign",ba="changeValue",Y="qx.client",X="__hH",W="qx.ui.basic.Label",V="A",N="_applyValue",O="center",L="_applyBuddy",M="qx.event.type.Data",J="String",K="textAlign",H="right",I="changeRich",P="_applyRich",Q="click",S="label",R="__hF",U="webkit",T="left";
qx.Class.define(W,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(g){arguments.callee.base.call(this);

if(g!=null){this.setValue(g);
}
if(qx.core.Variant.isSet(E,x)){qx.locale.Manager.getInstance().addListener(A,this._onChangeLocale,this);
}},events:{"changeContent":M},properties:{rich:{check:be,init:false,event:I,apply:P},value:{check:J,apply:N,event:ba,nullable:true},buddy:{check:bd,apply:L,nullable:true,init:null},textAlign:{check:[T,O,H],nullable:true,themeable:true,apply:bf,event:bb},appearance:{refine:true,init:S},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__hF:null,__hG:null,__hH:null,__hI:null,_getContentHint:function(){if(this.__hG){this.__hJ=this.__hK();
delete this.__hG;
}return {width:this.__hJ.width,height:this.__hJ.height};
},_hasHeightForWidth:function(){return this.getRich();
},_applySelectable:function(q){arguments.callee.base.call(this,q);
if(qx.core.Variant.isSet(Y,U)){this.getContainerElement().setStyle(B,q?D:y);
this.getContentElement().setStyle(B,q?D:y);
}},_getContentHeightForWidth:function(n){if(!this.getRich()){return null;
}return this.__hK(n).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(j,k){this.getContentElement().setStyle(K,j);
},_applyTextColor:function(u,v){if(u){this.getContentElement().setStyle(C,qx.theme.manager.Color.getInstance().resolve(u));
}else{this.getContentElement().removeStyle(C);
}},__hJ:{width:0,height:0},_applyFont:function(r,s){var t;

if(r){this.__hF=qx.theme.manager.Font.getInstance().resolve(r);
t=this.__hF.getStyles();
}else{this.__hF=null;
t=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(t);
this.__hG=true;
qx.ui.core.queue.Layout.add(this);
},__hK:function(a){var f=qx.bom.Label;
var c=this.getFont();
var b=c?this.__hF.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||V;
var d=this.getRich();
return d?f.getHtmlSize(content,b,a):f.getTextSize(content,b);
},_applyBuddy:function(l,m){if(m!=null){m.removeBinding(this.__hH);
this.__hH=null;
this.removeListenerById(this.__hI);
this.__hI=null;
}
if(l!=null){this.__hH=l.bind(z,this,z);
this.__hI=this.addListener(Q,l.focus,l);
}},_applyRich:function(w){this.getContentElement().setRich(w);
this.__hG=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(E,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(o,p){this.getContentElement().setContent(o);
this.__hG=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(F,o,p);
},setContent:function(i){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
this.setValue(i);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
return this.getValue();
},resetContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
this.resetValue();
},addListener:function(bg,bh,self,bi){if(bg==F){qx.log.Logger.deprecatedEventWarning(arguments.callee,F,bc);
}return arguments.callee.base.call(this,bg,bh,self,bi);
}},destruct:function(){if(qx.core.Variant.isSet(E,x)){qx.locale.Manager.getInstance().removeListener(A,this._onChangeLocale,this);
}if(this.__hH!=null){var h=this.getBuddy();

if(h!=null&&!h.isDisposed()){h.removeBinding(this.__hH);
}}this._disposeFields(R,X);
}});
})();
(function(){var e="content",d="qx.html.Label";
qx.Class.define(d,{extend:qx.html.Element,members:{__hL:null,_applyProperty:function(name,g){arguments.callee.base.call(this,name,g);

if(name==e){var h=this.getDomElement();
qx.bom.Label.setContent(h,g);
}},_createDomElement:function(){var c=this.__hL;
var b=qx.bom.Label.create(this._content,c);
return b;
},_copyData:function(a){return arguments.callee.base.call(this,true);
},setRich:function(i){var j=this.getDomElement();

if(j){throw new Error("The label mode cannot be modified after initial creation");
}i=!!i;

if(this.__hL==i){return;
}this.__hL=i;
return this;
},setContent:function(f){this._setProperty(e,f);
return this;
},getContent:function(){return this._getProperty(e);
}}});
})();
(function(){var A="qx.client",z="gecko",y="div",x="inherit",w="text",v="value",u="",t="hidden",s="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",r="nowrap",P="auto",O="ellipsis",N="normal",M="label",L="px",K="crop",J="end",I="100%",H="visible",G="qx.bom.Label",E="opera",F="block",C="none",D="-1000px",B="absolute";
qx.Class.define(G,{statics:{__hM:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__hN:function(){var q=this.__hP(false);
document.body.insertBefore(q,document.body.firstChild);
return this._textElement=q;
},__hO:function(){var m=this.__hP(true);
document.body.insertBefore(m,document.body.firstChild);
return this._htmlElement=m;
},__hP:function(e){var f=qx.bom.Element.create(y);
var g=f.style;
g.width=g.height=P;
g.left=g.top=D;
g.visibility=t;
g.position=B;
g.overflow=H;

if(e){g.whiteSpace=N;
}else{g.whiteSpace=r;

if(qx.core.Variant.isSet(A,z)){var h=document.createElementNS(s,M);
for(var i in this.__hM){h.style[i]=x;
}f.appendChild(h);
}}return f;
},__hQ:function(c){var d={};

if(c){d.whiteSpace=N;
}else if(qx.core.Variant.isSet(A,z)){d.display=F;
}else{d.overflow=t;
d.whiteSpace=r;
d.textOverflow=O;
d.userSelect=C;
if(qx.core.Variant.isSet(A,E)){d.OTextOverflow=O;
}}return d;
},create:function(content,R,S){if(!S){S=window;
}
if(R){var T=S.document.createElement(y);
T.useHtml=true;
}else if(qx.core.Variant.isSet(A,z)){var T=S.document.createElement(y);
var U=S.document.createElementNS(s,M);
U.style.cursor=x;
U.style.color=x;
U.style.overflow=t;
U.style.maxWidth=I;
for(var V in this.__hM){U.style[V]=x;
}U.setAttribute(K,J);
T.appendChild(U);
}else{var T=S.document.createElement(y);
qx.bom.element.Style.setStyles(T,this.__hQ(R));
}
if(content){this.setContent(T,content);
}return T;
},setContent:function(a,b){b=b||u;

if(a.useHtml){a.innerHTML=b;
}else if(qx.core.Variant.isSet(A,z)){a.firstChild.setAttribute(v,b);
}else{qx.bom.element.Attribute.set(a,w,b);
}},getContent:function(Q){if(Q.useHtml){return Q.innerHTML;
}else if(qx.core.Variant.isSet(A,z)){return Q.firstChild.getAttribute(v)||u;
}else{return qx.bom.element.Attribute.get(Q,w);
}},getHtmlSize:function(content,n,o){var p=this._htmlElement||this.__hO();
p.style.width=o!==undefined?o+L:P;
p.innerHTML=content;
return this.__hR(p,n);
},getTextSize:function(j,k){var l=this._textElement||this.__hN();

if(qx.core.Variant.isSet(A,z)){l.firstChild.setAttribute(v,j);
}else{qx.bom.element.Attribute.set(l,w,j);
}return this.__hR(l,k);
},__hR:function(W,X){var Y=this.__hM;

if(!X){X={};
}
for(var ba in Y){W.style[ba]=X[ba]||u;
}var bb=qx.bom.element.Dimension.getSize(W);

if(qx.core.Variant.isSet(A,z)){if(!qx.bom.client.Platform.WIN){bb.width++;
}}return bb;
}}});
})();
(function(){var s="mshtml",r="qx.client",q="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",p="qx.bom.element.Dimension",o="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",n="paddingRight",m="paddingLeft",l="paddingTop",k="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",j="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",i="paddingBottom";
qx.Class.define(p,{statics:{getWidth:qx.core.Variant.select(r,{"gecko":function(I){if(I.getBoundingClientRect){var J=I.getBoundingClientRect();
return Math.round(J.right)-Math.round(J.left);
}else{return I.offsetWidth;
}},"default":function(u){return u.offsetWidth;
}}),getHeight:qx.core.Variant.select(r,{"gecko":function(E){if(E.getBoundingClientRect){var F=E.getBoundingClientRect();
return Math.round(F.bottom)-Math.round(F.top);
}else{return E.offsetHeight;
}},"default":function(K){return K.offsetHeight;
}}),getSize:function(a){return {width:this.getWidth(a),height:this.getHeight(a)};
},__hS:{visible:true,hidden:true},getContentWidth:function(v){var x=qx.bom.element.Style;
var y=qx.bom.element.Overflow.getX(v);
var z=parseInt(x.get(v,m),10);
var B=parseInt(x.get(v,n),10);

if(this.__hS[y]){return v.clientWidth-z-B;
}else{if(v.clientWidth>=v.scrollWidth){return Math.max(v.clientWidth,v.scrollWidth)-z-B;
}else{var A=v.scrollWidth-z;
var w=qx.bom.client.Engine;

if(w.NAME===s&&w.VERSION==6){A-=B;
}return A;
}}},getContentHeight:function(b){var d=qx.bom.element.Style;
var f=qx.bom.element.Overflow.getY(b);
var g=parseInt(d.get(b,l),10);
var e=parseInt(d.get(b,i),10);

if(this.__hS[f]){return b.clientHeight-g-e;
}else{if(b.clientHeight>=b.scrollHeight){return Math.max(b.clientHeight,b.scrollHeight)-g-e;
}else{var h=b.scrollHeight-g;
var c=qx.bom.client.Engine;

if(c.NAME===s&&c.VERSION==6){h-=e;
}return h;
}}},getContentSize:function(C){return {width:this.getContentWidth(C),height:this.getContentHeight(C)};
},getClientWidth:function(t){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return t.clientWidth;
},getClientHeight:function(G){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return G.clientHeight;
},getScrollWidth:function(H){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return H.scrollWidth;
},getScrollHeight:function(D){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return D.scrollHeight;
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(f){return arguments.length==1;
},getEnabled:function(){},setRequired:function(c){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(d){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var i="_applyBlockerColor",h="Color",g="Number",f="qx.ui.core.MBlocker",e="_applyBlockerOpacity",d="__hT";
qx.Mixin.define(f,{construct:function(){this.__hT=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:h,init:null,nullable:true,apply:i,themeable:true},blockerOpacity:{check:g,init:1,apply:e,themeable:true}},members:{__hT:null,_applyBlockerColor:function(j,k){this.__hT.setColor(j);
},_applyBlockerOpacity:function(b,c){this.__hT.setOpacity(b);
},block:function(){this.__hT.block();
},isBlocked:function(){return this.__hT.isBlocked();
},unblock:function(){this.__hT.unblock();
},blockContent:function(a){this.__hT.blockContent(a);
},isContentBlocked:function(){return this.__hT.isContentBlocked();
},unblockContent:function(){this.__hT.unblockContent();
},_getContentBlocker:function(){return this.__hT._getContentBlocker();
},_getBlocker:function(){return this.__hT._getBlocker();
},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__hT._restoreAnonymousState();
},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__hT._saveAndSetAnonymousState();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var m="qx.ui.window.Window",l="changeModal",k="changeVisibility",j="changeActive",i="_applyActiveWindow",h="qx.ui.window.MDesktop",g="__hV",f="__hU";
qx.Mixin.define(h,{properties:{activeWindow:{check:m,apply:i,init:null,nullable:true}},members:{__hU:null,__hV:null,getWindowManager:function(){if(!this.__hV){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__hV;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__hV){this.__hV.setDesktop(null);
}o.setDesktop(this);
this.__hV=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(a,b){this.getWindowManager().changeActiveWindow(a,b);

if(a){a.setActive(true);
}
if(b){b.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(n){if(qx.Class.isDefined(m)&&n instanceof qx.ui.window.Window){this._addWindow(n);
}},_addWindow:function(p){if(!qx.lang.Array.contains(this.getWindows(),p)){this.getWindows().push(p);
p.addListener(j,this._onChangeActive,this);
p.addListener(l,this._onChangeModal,this);
p.addListener(k,this._onChangeVisibility,this);
}
if(p.getActive()){this.setActiveWindow(p);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(d){if(qx.Class.isDefined(m)&&d instanceof qx.ui.window.Window){this._removeWindow(d);
}},_removeWindow:function(c){qx.lang.Array.remove(this.getWindows(),c);
c.removeListener(j,this._onChangeActive,this);
c.removeListener(l,this._onChangeModal,this);
c.removeListener(k,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__hU){this.__hU=[];
}return this.__hU;
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(g);
}});
})();
(function(){var s="contextmenu",r="help",q="qx.client",p="changeGlobalCursor",o="abstract",n="Boolean",m="root",l="",k=" !important",j="_applyGlobalCursor",f="__hW",i="_applyNativeHelp",h=";",d="qx.ui.root.Abstract",c="String",g="*";
qx.Class.define(d,{type:o,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:m},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:c,nullable:true,themeable:true,apply:j,event:p},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:n,init:false,apply:i}},members:{__hW:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(q,{"mshtml":function(a,b){},"default":function(x,y){var z=qx.bom.Stylesheet;
var A=this.__hW;

if(!A){this.__hW=A=z.createElement();
}z.removeAllRules(A);

if(x){z.addRule(A,g,qx.bom.element.Cursor.compile(x).replace(h,l)+k);
}}}),_applyNativeContextMenu:function(v,w){if(v){this.removeListener(s,this._onNativeContextMenu,this,true);
}else{this.addListener(s,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(q,{"mshtml":function(B,C){if(C===false){qx.bom.Event.removeNativeListener(document,r,qx.lang.Function.returnFalse);
}
if(B===false){qx.bom.Event.addNativeListener(document,r,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this._disposeFields(f);
},defer:function(t,u){qx.ui.core.MChildrenHandling.remap(u);
}});
})();
(function(){var n="resize",m="__hX",l="position",k="__hY",j="0px",i="webkit",h="$$widget",g="qx.ui.root.Application",f="hidden",d="qx.client",a="div",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(q){this.__hX=qx.dom.Node.getWindow(q);
this.__hY=q;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__hX,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__hX:null,__hY:null,_createContainerElement:function(){var r=this.__hY;

if(qx.core.Variant.isSet(d,i)){if(!r.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var v=r.documentElement.style;
var s=r.body.style;
v.overflow=s.overflow=f;
v.padding=v.margin=s.padding=s.margin=j;
v.width=v.height=s.width=s.height=c;
var u=r.createElement(a);
r.body.appendChild(u);
var t=new qx.html.Root(u);
t.setStyle(l,b);
t.setAttribute(h,this.toHashCode());
return t;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var o=qx.bom.Viewport.getWidth(this.__hX);
var p=qx.bom.Viewport.getHeight(this.__hX);
return {minWidth:o,width:o,maxWidth:o,minHeight:p,height:p,maxHeight:p};
}},destruct:function(){this._disposeFields(m,k);
}});
})();
(function(){var v="resize",u="px",t="zIndex",s="qx.ui.root.Page",r="backgroundColor",q="_applyOpacity",p="opacity",o="Number",n="interval",m="qx.ui.core.Blocker",h="__ic",l="__ig",k="Color",g="__ie",f="__ia",j="_applyColor";
qx.Class.define(m,{extend:qx.core.Object,construct:function(y){arguments.callee.base.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(s)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(v,this.__ih,this);
}},properties:{color:{check:k,init:null,nullable:true,apply:j,themeable:true},opacity:{check:o,init:1,apply:q,themeable:true}},members:{__ia:null,__ib:null,__ic:null,__id:null,__ie:null,__if:0,__ig:null,__ih:function(e){var a=e.getData();

if(this.isContentBlocked()){this._getContentBlocker().setStyles({width:a.width,height:a.height});
}
if(this.isBlocked()){this._getBlocker().setStyles({width:a.width,height:a.height});
}},_applyColor:function(b,c){var d=qx.theme.manager.Color.getInstance().resolve(b);
this.__ii(r,d);
},_applyOpacity:function(E,F){this.__ii(p,E);
},__ii:function(z,A){var B=[];
this.__ia&&B.push(this.__ia);
this.__ic&&B.push(this.__ic);

for(var i=0;i<B.length;i++){B[i].setStyle(z,A);
}},_saveAndSetAnonymousState:function(){this.__if+=1;

if(this.__if==1){this.__ie=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){this.__if-=1;

if(this.__if==0){this._widget.setAnonymous(this.__ie);
}},__ij:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){if(!this.__ia){this.__ia=this.__ij();
this.__ia.setStyle(t,15);
this._widget.getContainerElement().add(this.__ia);
this.__ia.exclude();
}return this.__ia;
},block:function(){if(this.__ib){return;
}this.__ib=true;
this._getBlocker().include();
this._saveAndSetAnonymousState();
},isBlocked:function(){return !!this.__ib;
},unblock:function(){if(!this.__ib){return;
}this.__ib=false;
this._restoreAnonymousState();
this._getBlocker().exclude();
},_getContentBlocker:function(){if(!this.__ic){this.__ic=this.__ij();
this._widget.getContentElement().add(this.__ic);
this.__ic.exclude();
}return this.__ic;
},blockContent:function(C){var D=this._getContentBlocker();
D.setStyle(t,C);

if(this.__id){return;
}this.__id=true;
D.include();

if(this._isPageRoot){if(!this.__ig){this.__ig=new qx.event.Timer(300);
this.__ig.addListener(n,this.__ik,this);
}this.__ig.start();
this.__ik();
}},isContentBlocked:function(){return !!this.__id;
},unblockContent:function(){if(!this.__id){return;
}this.__id=false;
this._getContentBlocker().exclude();

if(this._isPageRoot){this.__ig.stop();
}},__ik:function(){var w=this._widget.getContainerElement().getDomElement();
var x=qx.dom.Node.getDocument(w);
this._getContentBlocker().setStyles({height:x.documentElement.scrollHeight+u,width:x.documentElement.scrollWidth+u});
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(v,this.__ih,this);
}this._disposeObjects(h,f,l);
this._disposeFields(g);
}});
})();
(function(){var i="100%",h="mshtml",g="repeat",f="url(",e=")",d="qx.html.Blocker",c="qx.client",b="qx/static/blank.gif",a="absolute";
qx.Class.define(d,{extend:qx.html.Element,construct:function(j,k){arguments.callee.base.call(this);
var j=j?qx.theme.manager.Color.getInstance().resolve(j):null;
this.setStyles({position:a,width:i,height:i,opacity:k||0,backgroundColor:j});
if(qx.core.Variant.isSet(c,h)){this.setStyles({backgroundImage:f+qx.util.ResourceManager.getInstance().toUri(b)+e,backgroundRepeat:g});
}}});
})();
(function(){var I="keypress",H="focusout",G="__im",F="activate",E="Tab",D="__io",C="singleton",B="__in",A="deactivate",z="__il",x="focusin",y="qx.ui.core.FocusHandler";
qx.Class.define(y,{extend:qx.core.Object,type:C,construct:function(){arguments.callee.base.call(this);
this.__il={};
},members:{__il:null,__im:null,__in:null,__io:null,connectTo:function(J){J.addListener(I,this.__ip,this);
J.addListener(x,this._onFocusIn,this,true);
J.addListener(H,this._onFocusOut,this,true);
J.addListener(F,this._onActivate,this,true);
J.addListener(A,this._onDeactivate,this,true);
},addRoot:function(c){this.__il[c.$$hash]=c;
},removeRoot:function(S){delete this.__il[S.$$hash];
},getActiveWidget:function(){return this.__im;
},isActive:function(U){return this.__im==U;
},getFocusedWidget:function(){return this.__in;
},isFocused:function(W){return this.__in==W;
},isFocusRoot:function(w){return !!this.__il[w.$$hash];
},_onActivate:function(e){var b=e.getTarget();
this.__im=b;
var a=this.__iq(b);

if(a!=this.__io){this.__io=a;
}},_onDeactivate:function(e){var T=e.getTarget();

if(this.__im==T){this.__im=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__in){this.__in=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var V=e.getTarget();

if(V==this.__in){this.__in=null;
V.visualizeBlur();
}},__ip:function(e){if(e.getKeyIdentifier()!=E){return;
}
if(!this.__io){return;
}e.stopPropagation();
e.preventDefault();
var X=this.__in;

if(!e.isShiftPressed()){var Y=X?this.__iu(X):this.__is();
}else{var Y=X?this.__iv(X):this.__it();
}if(Y){Y.tabFocus();
}},__iq:function(bg){var bh=this.__il;

while(bg){if(bh[bg.$$hash]){return bg;
}bg=bg.getLayoutParent();
}return null;
},__ir:function(j,k){if(j===k){return 0;
}var n=j.getTabIndex()||0;
var m=k.getTabIndex()||0;

if(n!=m){return n-m;
}var s=j.getContainerElement().getDomElement();
var r=k.getContainerElement().getDomElement();
var q=qx.bom.element.Location;
var p=q.get(s);
var o=q.get(r);
if(p.top!=o.top){return p.top-o.top;
}if(p.left!=o.left){return p.left-o.left;
}var t=j.getZIndex();
var u=k.getZIndex();

if(t!=u){return t-u;
}return 0;
},__is:function(){return this.__iy(this.__io,null);
},__it:function(){return this.__iz(this.__io,null);
},__iu:function(O){var P=this.__io;

if(P==O){return this.__is();
}
while(O&&O.getAnonymous()){O=O.getLayoutParent();
}
if(O==null){return [];
}var Q=[];
this.__iw(P,O,Q);
Q.sort(this.__ir);
var R=Q.length;
return R>0?Q[0]:this.__is();
},__iv:function(bi){var bj=this.__io;

if(bj==bi){return this.__it();
}
while(bi&&bi.getAnonymous()){bi=bi.getLayoutParent();
}
if(bi==null){return [];
}var bk=[];
this.__ix(bj,bi,bk);
bk.sort(this.__ir);
var bl=bk.length;
return bl>0?bk[bl-1]:this.__it();
},__iw:function(parent,K,L){var M=parent.getLayoutChildren();
var N;

for(var i=0,l=M.length;i<l;i++){N=M[i];
if(!(N instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(N)&&N.isEnabled()&&N.isVisible()){if(N.isTabable()&&this.__ir(K,N)<0){L.push(N);
}this.__iw(N,K,L);
}}},__ix:function(parent,d,f){var g=parent.getLayoutChildren();
var h;

for(var i=0,l=g.length;i<l;i++){h=g[i];
if(!(h instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(h)&&h.isEnabled()&&h.isVisible()){if(h.isTabable()&&this.__ir(d,h)>0){f.push(h);
}this.__ix(h,d,f);
}}},__iy:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__ir(bf,bd)<0){bd=bf;
}}bd=this.__iy(bf,bd);
}}return bd;
},__iz:function(parent,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()){if(ba==null||this.__ir(bc,ba)>0){ba=bc;
}}ba=this.__iz(bc,ba);
}}return ba;
}},destruct:function(){this._disposeMap(z);
this._disposeFields(B,G,D);
}});
})();
(function(){var o="qx.client",n="head",m="text/css",l="stylesheet",k="}",j='@import "',h="{",g='";',f="qx.bom.Stylesheet",e="link",d="style";
qx.Class.define(f,{statics:{includeFile:function(C,D){if(!D){D=document;
}var E=D.createElement(e);
E.type=m;
E.rel=l;
E.href=qx.util.ResourceManager.getInstance().toUri(C);
var F=D.getElementsByTagName(n)[0];
F.appendChild(E);
},createElement:qx.core.Variant.select(o,{"mshtml":function(A){var B=document.createStyleSheet();

if(A){B.cssText=A;
}return B;
},"default":function(X){var Y=document.createElement(d);
Y.type=m;

if(X){Y.appendChild(document.createTextNode(X));
}document.getElementsByTagName(n)[0].appendChild(Y);
return Y.sheet;
}}),addRule:qx.core.Variant.select(o,{"mshtml":function(v,w,x){v.addRule(w,x);
},"default":function(a,b,c){a.insertRule(b+h+c+k,a.cssRules.length);
}}),removeRule:qx.core.Variant.select(o,{"mshtml":function(J,K){var L=J.rules;
var M=L.length;

for(var i=M-1;i>=0;--i){if(L[i].selectorText==K){J.removeRule(i);
}}},"default":function(P,Q){var R=P.cssRules;
var S=R.length;

for(var i=S-1;i>=0;--i){if(R[i].selectorText==Q){P.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(o,{"mshtml":function(s){var t=s.rules;
var u=t.length;

for(var i=u-1;i>=0;i--){s.removeRule(i);
}},"default":function(G){var H=G.cssRules;
var I=H.length;

for(var i=I-1;i>=0;i--){G.deleteRule(i);
}}}),addImport:qx.core.Variant.select(o,{"mshtml":function(y,z){y.addImport(z);
},"default":function(N,O){N.insertRule(j+O+g,N.cssRules.length);
}}),removeImport:qx.core.Variant.select(o,{"mshtml":function(T,U){var V=T.imports;
var W=V.length;

for(var i=W-1;i>=0;i--){if(V[i].href==U){T.removeImport(i);
}}},"default":function(ba,bb){var bc=ba.cssRules;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){if(bc[i].href==bb){ba.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(o,{"mshtml":function(p){var q=p.imports;
var r=q.length;

for(var i=r-1;i>=0;i--){p.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var u="number",t="qx.ui.layout.Canvas";
qx.Class.define(t,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var r=0,q=0;
var o=0,m=0;
var j,h;
var g,e;
var a=this._getLayoutChildren();
var d,p,c;
var s,top,b,f;

for(var i=0,l=a.length;i<l;i++){d=a[i];
p=d.getLayoutProperties();
c=d.getSizeHint();
var n=d.getMarginLeft()+d.getMarginRight();
var k=d.getMarginTop()+d.getMarginBottom();
j=c.width+n;
h=c.minWidth+n;
s=p.left!=null?p.left:p.edge;

if(s&&typeof s===u){j+=s;
h+=s;
}b=p.right!=null?p.right:p.edge;

if(b&&typeof b===u){j+=b;
h+=b;
}r=Math.max(r,j);
q=Math.max(q,h);
g=c.height+k;
e=c.minHeight+k;
top=p.top!=null?p.top:p.edge;

if(top&&typeof top===u){g+=top;
e+=top;
}f=p.bottom!=null?p.bottom:p.edge;

if(f&&typeof f===u){g+=f;
e+=f;
}o=Math.max(o,g);
m=Math.max(m,e);
}return {width:r,minWidth:q,height:o,minHeight:m};
}}});
})();
(function(){var b="qx.html.Root";
qx.Class.define(b,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(a){arguments.callee.base.call(this,a);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var j="qx.ui.layout.Basic";
qx.Class.define(j,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(k,m){var q=this._getLayoutChildren();
var n,p,o,r,top;
for(var i=0,l=q.length;i<l;i++){n=q[i];
p=n.getSizeHint();
o=n.getLayoutProperties();
r=(o.left||0)+n.getMarginLeft();
top=(o.top||0)+n.getMarginTop();
n.renderLayout(r,top,p.width,p.height);
}},_computeSizeHint:function(){var f=this._getLayoutChildren();
var c,h,d;
var g=0,e=0;
var a,b;
for(var i=0,l=f.length;i<l;i++){c=f[i];
h=c.getSizeHint();
d=c.getLayoutProperties();
a=h.width+(d.left||0)+c.getMarginLeft()+c.getMarginRight();
b=h.height+(d.top||0)+c.getMarginTop()+c.getMarginBottom();

if(a>g){g=a;
}
if(b>e){e=b;
}}return {width:g,height:e};
}}});
})();
(function(){var k="changeEnabled",j="qx.ui.core.MExecutable",i="qx.event.Command",h="qx.event.type.Event",g="changeCommand",f="_applyCommand",d="execute";
qx.Mixin.define(j,{events:{"execute":h},properties:{command:{check:i,apply:f,event:g,nullable:true}},members:{execute:function(){var c=this.getCommand();

if(c){c.execute(this);
}this.fireEvent(d);
},_applyCommand:function(a,b){if(b){b.removeListener(k,this._onChangeEnabledCommand,this);
}
if(a){a.addListener(k,this._onChangeEnabledCommand,this);

if(this.getEnabled()===false){a.setEnabled(false);
}else if(a.getEnabled()===false){this.setEnabled(false);
}}},_onChangeEnabledCommand:function(e){this.setEnabled(e.getData());
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.MFormElement";
qx.Mixin.define(b,{events:{"changeName":c},members:{__iA:null,setName:function(name){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
if(name!=null&&!qx.lang.Type.isString(name)){throw new Error("Please use strings for the name property.");
return;
}var d=this.__iA;
this.__iA=name;
this.fireDataEvent(qx.event.type.Data,name,d);
},getName:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return this.__iA;
},resetName:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var a=this.__iA;
this.__iA=null;
this.fireDataEvent(qx.event.type.Data,null,a);
}}});
})();
(function(){var e="qx.event.type.Data",d="qx.ui.form.IFormElement",c="boolean";
qx.Interface.define(d,{events:{"changeValue":e,"changeName":e,"changeEnabled":e},members:{setEnabled:function(b){this.assertType(b,c);
},getEnabled:function(){},setName:function(a){this.assertString(a);
},getName:function(){},setValue:function(f){return arguments.length==1;
},getValue:function(){}}});
})();
(function(){var c="qx.ui.form.IExecutable",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"execute":b},members:{setCommand:function(a){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var B="pressed",A="abandoned",z="hovered",y="changeValue",x="qx.ui.form.Button",w="Enter",v="Space",u="dblclick",t="mouseup",s="mousedown",n="The value property will be removed.",r="mouseover",q="mouseout",m="keydown",l="button",p="keyup",o="qx.event.type.Data";
qx.Class.define(x,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable,qx.ui.form.MFormElement],implement:[qx.ui.form.IFormElement,qx.ui.form.IExecutable],construct:function(c,d,f){arguments.callee.base.call(this,c,d);

if(f!=null){this.setCommand(f);
}this.addListener(r,this._onMouseOver);
this.addListener(q,this._onMouseOut);
this.addListener(s,this._onMouseDown);
this.addListener(t,this._onMouseUp);
this.addListener(m,this._onKeyDown);
this.addListener(p,this._onKeyUp);
this.addListener(u,this._onStopEvent);
},events:{"changeValue":o},properties:{appearance:{refine:true,init:l},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(A)){return;
}this.addState(B);
},release:function(){if(this.hasState(B)){this.removeState(B);
}},reset:function(){this.removeState(B);
this.removeState(A);
this.removeState(z);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(A)){this.removeState(A);
this.addState(B);
}this.addState(z);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(z);

if(this.hasState(B)){this.removeState(B);
this.addState(A);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(A);
this.addState(B);
},_onMouseUp:function(e){this.releaseCapture();
var a=this.hasState(B);
var b=this.hasState(A);

if(a){this.removeState(B);
}
if(b){this.removeState(A);
}else{this.addState(z);

if(a){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case w:case v:this.removeState(A);
this.addState(B);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case w:case v:if(this.hasState(B)){this.removeState(A);
this.removeState(B);
this.execute();
e.stopPropagation();
}}},__iB:null,setValue:function(g){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var h=this.__iB;
this.__iB=g;
this.fireDataEvent(y,g,h);
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return this.__iB;
},resetValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__iB=null;
},addListener:function(i,j,self,k){if(i==y&&this.classname==x){qx.log.Logger.deprecatedEventWarning(arguments.callee,y,n);
}return arguments.callee.base.call(this,i,j,self,k);
}}});
})();
(function(){var s="Number",r="qx.event.type.Event",q="linear",p="update",o="Boolean",n="setup",m="flicker",l="Object",k="__iC",j="pulse",E="sinodial",D="spring",C="full",B="wobble",A="_applyDuration",z="easeOutQuad",y="easeInQuad",x="finish",w="reverse",v="none",t="qx.fx.Base",u="__iD";
qx.Class.define(t,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__iC=qx.fx.Base.EffectState.IDLE;
this.__iD=a;
},events:{"setup":r,"update":r,"finish":r},properties:{duration:{init:0.5,check:s,apply:A},fps:{init:100,check:s},sync:{init:false,check:o},from:{init:0,check:s},to:{init:1,check:s},delay:{init:0.0,check:s},queue:{check:l},transition:{init:q,check:[q,y,z,E,w,m,B,j,D,v,C]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__iC:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__iK:null,__iD:null,_getElement:function(){return this.__iD;
},_setElement:function(h){this.__iD=h;
},_applyDuration:function(b,c){},init:function(){this.__iC=qx.fx.Base.EffectState.PREPARING;
this.__iE=0;
this.__iF=this.getDelay()*1000+(new Date().getTime());
this.__iG=this.__iF+(this.getDuration()*1000);
this.__iH=this.getTo()-this.getFrom();
this.__iI=this.__iG-this.__iF;
this.__iJ=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(n);
},update:function(d){},finish:function(){this.fireEvent(x);
},start:function(){if(this.__iC!=qx.fx.Base.EffectState.IDLE){return false;
}this.init();
this.beforeStartInternal();
this.beforeStart();

if(!this.getSync()){this.getQueue().add(this);
}return true;
},end:function(){this.render(1.0);
this.cancel();
this.beforeFinishInternal();
this.beforeFinish();
this.finish();
this.afterFinishInternal();
this.afterFinish();
},render:function(i){if(this.__iC==qx.fx.Base.EffectState.PREPARING){this.__iC=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__iC==qx.fx.Base.EffectState.RUNNING){this.__iK=qx.fx.Transition.get(this.getTransition())(i)*this.__iH+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__iK);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(p)){this.fireEvent(p);
}}},loop:function(e){if(e>=this.__iF){if(e>=this.__iG){this.end();
}var g=(e-this.__iF)/this.__iI;
var f=Math.round(g*this.__iJ);
if(f>this.__iE){this.render(g);
this.__iE=f;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__iC=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__iC=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this._disposeFields(u,k);
}});
})();
(function(){var v="out",u="px",t="south",s="Number",r="north-west",q="west",p="in",o="north",n="south-east",m="south-west",f="east",l="north-east",i="display",d="__iN",c="top",h="Boolean",g="block",j="left",b="__iM",k="__iL",e="qx.fx.effect.combination.Drop";
qx.Class.define(e,{extend:qx.fx.Base,construct:function(w){arguments.callee.base.call(this,w);
this.__iL=new qx.fx.effect.core.Move(w);
this.__iM=new qx.fx.effect.core.Fade(w);
this.__iN=new qx.fx.effect.core.Parallel(this.__iL,this.__iM);
},properties:{direction:{init:t,check:[t,q,f,o,m,n,l,r]},xAmount:{init:100,check:s},yAmount:{init:100,check:s},mode:{init:v,check:[p,v]},modifyDisplay:{init:true,check:h}},members:{__iM:null,__iL:null,__iN:null,start:function(){arguments.callee.base.call(this);
var B=this._getElement();
qx.bom.element.Style.set(B,i,g);
var z=this.getXAmount();
var y=this.getYAmount();
var A={top:qx.bom.element.Location.getTop(B),left:qx.bom.element.Location.getLeft(B)};
var x={x:z,y:y,sync:true};

switch(this.getDirection()){case t:x.x=0;
x.y=y;
break;
case o:x.x=0;
x.y=-y;
break;
case q:x.x=-z;
x.y=0;
break;
case f:x.x=z;
x.y=0;
break;
case m:x.x=-z;
x.y=y;
break;
case n:x.x=z;
x.y=y;
break;
case l:x.x=z;
x.y=-y;
break;
case r:x.x=-z;
x.y=-y;
break;
}
if(this.getMode()==p){qx.bom.element.Style.set(B,c,(A.top-x.y)+u);
qx.bom.element.Style.set(B,j,(A.left-x.x)+u);
}this.__iL.set(x);
this.__iM.afterFinishInternal=function(){for(var a in A){qx.bom.element.Style.set(B,a,A[a]+u);
}};
this.__iM.set({duration:0.5,sync:true,from:(this.getMode()==v)?1:0,to:(this.getMode()==v)?0:1,modifyDisplay:true});
this.__iN.start();
}},destruct:function(){this._disposeObjects(k,b,d);
}});
})();
(function(){var e="__default",d="qx.fx.queue.Manager",c="__iO",b="singleton",a="object";
qx.Class.define(d,{extend:qx.core.Object,type:b,members:{__iO:{},getQueue:function(f){if(typeof (this.__iO[f])==a){return this.__iO[f];
}else{return this.__iO[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var h="qx.fx.queue.Queue",g="Number",f="__iP";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iP=[];
},properties:{limit:{init:Infinity,check:g}},members:{__iQ:null,__iP:null,add:function(a){var b=new Date().getTime();
a._startOn+=b;
a._finishOn+=b;

if(this.__iP.length<this.getLimit()){this.__iP.push(a);
}else{a.resetState();
}
if(!this.__iQ){this.__iQ=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(e){qx.lang.Array.remove(this.__iP,e);

if(this.__iP.length==0){window.clearInterval(this.__iQ);
delete this.__iQ;
}},loop:function(){var c=new Date().getTime();

for(var i=0,d=this.__iP.length;i<d;i++){this.__iP[i]&&this.__iP[i].loop(c);
}}},destruct:function(){this._disposeFields(f);
}});
})();
(function(){var p="Number",o="static",n="qx.fx.Transition";
qx.Class.define(n,{type:o,statics:{get:function(e){return qx.fx.Transition[e]||false;
},linear:function(j){return j;
},easeInQuad:function(a){return Math.pow(2,10*(a-1));
},easeOutQuad:function(i){return (-Math.pow(2,-10*i)+1);
},sinodial:function(g){return (-Math.cos(g*Math.PI)/2)+0.5;
},reverse:function(d){return 1-d;
},flicker:function(h){var h=((-Math.cos(h*Math.PI)/4)+0.75)+Math.random()/4;
return h>1?1:h;
},wobble:function(m){return (-Math.cos(m*Math.PI*(9*m))/2)+0.5;
},pulse:function(b,c){c=(typeof (c)==p)?c:5;
return (Math.round((b%(1/c))*c)==0?Math.floor((b*c*2)-(b*c*2)):1-Math.floor((b*c*2)-(b*c*2)));
},spring:function(l){return 1-(Math.cos(l*4.5*Math.PI)*Math.exp(-l*6));
},none:function(f){return 0;
},full:function(k){return 1;
}}});
})();
(function(){var l="position",k="px",j="relative",i="Number",h="absolute",g="top",f="left",e='absolute',d="qx.fx.effect.core.Move";
qx.Class.define(d,{extend:qx.fx.Base,properties:{mode:{init:j,check:[j,h]},x:{init:0,check:i},y:{init:0,check:i}},members:{__iR:null,__iS:null,__iT:null,__iU:null,__iV:null,setup:function(){var m=this._getElement();
arguments.callee.base.call(this);

if(m.parentNode){this.__iT=qx.bom.element.Location.getLeft(m)-qx.bom.element.Location.getLeft(m.parentNode);
this.__iU=qx.bom.element.Location.getTop(m)-qx.bom.element.Location.getTop(m.parentNode);
}else{this.__iT=qx.bom.element.Location.getLeft(m);
this.__iU=qx.bom.element.Location.getTop(m);
}this.__iV=qx.bom.element.Style.get(m,l);
qx.bom.element.Style.set(m,l,h);

if(this.getMode()==e){this.__iR=this.getX()-this.__iT;
this.__iS=this.getY()-this.__iU;
}else{this.__iR=this.getX();
this.__iS=this.getY();
}},update:function(a){var c=this._getElement();
arguments.callee.base.call(this);
var b=Math.round(this.__iR*a+this.__iT);
var top=Math.round(this.__iS*a+this.__iU);
qx.bom.element.Style.set(c,f,b+k);
qx.bom.element.Style.set(c,g,top+k);
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),l,this.__iV);
}}});
})();
(function(){var f="display",e="none",d="qx.fx.effect.core.Fade",c="block",b="Boolean";
qx.Class.define(d,{extend:qx.fx.Base,properties:{modifyDisplay:{init:true,check:b},from:{init:1.0,refine:true},to:{init:0.0,refine:true}},members:{update:function(g){arguments.callee.base.call(this);
qx.bom.element.Opacity.set(this._getElement(),g);
},beforeSetup:function(){arguments.callee.base.call(this);
var a=this._getElement();

if((this.getModifyDisplay())&&(this.getTo()>0)){qx.bom.element.Style.set(a,f,c);
}qx.bom.element.Opacity.set(a,this.getFrom());
},afterFinishInternal:function(){if((this.getModifyDisplay())&&(this.getTo()==0)){qx.bom.element.Style.set(this._getElement(),f,e);
}}}});
})();
(function(){var e="qx.fx.effect.core.Parallel",d="__iW";
qx.Class.define(e,{extend:qx.fx.Base,construct:function(c){arguments.callee.base.call(this);
this.__iW=arguments;
},members:{__iW:null,finish:function(){arguments.callee.base.call(this);
var a=this.__iW;

for(var i=0;i<a.length;i++){a[i].render(1.0);
a[i].cancel();
a[i].beforeFinishInternal();
a[i].beforeFinish();
a[i].finish(1.0);
a[i].afterFinishInternal();
a[i].afterFinish();
}},update:function(f){arguments.callee.base.call(this);
var g=this.__iW;

for(var i=0;i<g.length;i++){g[i].render(f);
}},start:function(){if(!arguments.callee.base.call(this)){return;
}var b=this.__iW;

for(var i=0;i<b.length;i++){b[i].start();
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var k="Boolean",j="invalid",i="qx.ui.form.MForm",h="_applyValid",g="",f="changeRequired",e="changeValid",d="changeInvalidMessage",c="String";
qx.Mixin.define(i,{properties:{valid:{check:k,init:true,apply:h,event:e},required:{check:k,init:false,event:f},invalidMessage:{check:c,init:g,event:d}},members:{_applyValid:function(a,b){a?this.removeState(j):this.addState(j);
}}});
})();
(function(){var H="",G="showingPlaceholder",F="none",E="changeValue",D="Boolean",C="qx.client",B="color",A="qx.event.type.Data",z="focusin",y="input",bq="readonly",bp="focusout",bo="readOnly",bn="text",bm="_applyTextAlign",bl="RegExp",bk="syncAppearance",bj="gecko",bi="A",bh="change",O="textAlign",P="focused",M="center",N="Use public 'getTextSelectionLength' instead!",K="disabled",L="String",I="resize",J="qx.ui.form.AbstractField",Q="Use public 'clearTextSelection' instead!",R="transparent",Y="Use public 'selectAllText' instead!",W="off",bb="spellcheck",ba="false",bd="right",bc="PositiveInteger",T="abstract",bg="block",bf="webkit",be="_applyReadOnly",S="Use public 'setTextSelection' instead!",U="_applyPlaceholder",V="left",X="Use public 'getTextSelection' instead!";
qx.Class.define(J,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IFormElement,qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MFormElement,qx.ui.form.MForm],type:T,construct:function(bz){arguments.callee.base.call(this);

if(bz!=null){this.setValue(bz);
}this.getContentElement().addListener(bh,this._onChangeContent,this);
this.addListener(bk,function(e){if(this.hasState(G)){this.getContentElement().setValue(this.getPlaceholder());
}},this);
},events:{"input":A,"changeValue":A},properties:{textAlign:{check:[V,M,bd],nullable:true,themeable:true,apply:bm},readOnly:{check:D,apply:be,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bc,init:Infinity},liveUpdate:{check:D,init:false},placeholder:{check:L,nullable:true,apply:U},filter:{check:bl,nullable:true,init:null}},members:{__iX:true,getFocusElement:function(){return this.getContentElement();
},_createInputElement:function(){return new qx.html.Input(bn);
},_createContentElement:function(){var br=this._createInputElement();
br.setSelectable(this.getSelectable());
br.setEnabled(this.getEnabled());
br.addListener(y,this._onHtmlInput,this);
if(qx.core.Variant.isSet(C,bj)){br.setAttribute(bb,ba);
}br.setStyles({"border":F,"padding":0,"margin":0,"display":bg,"background":R,"outline":F,"appearance":F,"autoComplete":W});
if(qx.core.Variant.isSet(C,bf)){br.setStyle(I,F);
}return br;
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this.getContentElement().setEnabled(a);

if(a){this._showPlaceholder();
}else{this._removePlaceholder();
}},__iY:{width:16,height:16},_getContentHint:function(){return {width:this.__iY.width*10,height:this.__iY.height||16};
},_applyFont:function(l,m){var n;

if(l){var o=qx.theme.manager.Font.getInstance().resolve(l);
n=o.getStyles();
}else{n=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(n);
if(l){this.__iY=qx.bom.Label.getTextSize(bi,n);
}else{delete this.__iY;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(j,k){if(j){this.getContentElement().setStyle(B,qx.theme.manager.Color.getInstance().resolve(j));
}else{this.getContentElement().removeStyle(B);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__iY;
},_onHtmlInput:function(e){var bx=e.getData();
var bw=true;
this.__iX=false;
if(this.getFilter()!=null){var by=H;
var bu=bx.search(this.getFilter());
var bv=bx;

while(bu>=0){by=by+(bv.charAt(bu));
bv=bv.substring(bu+1,bv.length);
bu=bv.search(this.getFilter());
}
if(by!=bx){bw=false;
bx=by;
this.getContentElement().setValue(bx);
}}if(bx.length>this.getMaxLength()){var bw=false;
this.getContentElement().setValue(bx.substr(0,this.getMaxLength()));
}if(bw){this.fireDataEvent(y,bx);
if(this.getLiveUpdate()){this.fireNonBubblingEvent(E,qx.event.type.Data,[bx]);
}}},setValue:function(f){if(f===null){if(this.__iX){return f;
}f=H;
this.__iX=true;
}else{this.__iX=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(f)){var h=this.getContentElement();

if(f.length>this.getMaxLength()){f=f.substr(0,this.getMaxLength());
}
if(h.getValue()!=f){var i=h.getValue();
h.setValue(f);
var g=this.__iX?null:f;
this.fireNonBubblingEvent(E,qx.event.type.Data,[g,i]);
}this._showPlaceholder();
return f;
}throw new Error("Invalid value type: "+f);
},getValue:function(){var u=this.hasState(G);
var t=u?H:this.getContentElement().getValue();
return this.__iX?null:t;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__iX=e.getData()===null;
this.fireNonBubblingEvent(E,qx.event.type.Data,[e.getData()]);
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,X);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,N);
return this.getTextSelectionLength();
},setSelection:function(r,s){qx.log.Logger.deprecatedMethodWarning(arguments.callee,S);
this.setTextSelection(r,s);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,Q);
this.clearTextSelection();
},selectAll:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,Y);
this.selectAllText();
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},setTextSelection:function(c,d){this.getContentElement().setTextSelection(c,d);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bt=this.getValue()||H;
var bs=this.getPlaceholder();

if(bs!=null&&!this.hasState(P)&&bt==H&&!this.hasState(K)){this.addState(G);
}},_removePlaceholder:function(){if(this.hasState(G)){this.getContentElement().setValue(H);
this.removeState(G);
}},_applyPlaceholder:function(bA,bB){if(bA!=null){this.addListener(z,this._removePlaceholder,this);
this.addListener(bp,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(z,this._removePlaceholder,this);
this.removeListener(bp,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(p,q){this.getContentElement().setStyle(O,p);
},_applyReadOnly:function(v,w){var x=this.getContentElement();
x.setAttribute(bo,v);

if(v){this.addState(bq);
this.setFocusable(false);
}else{this.removeState(bq);
this.setFocusable(true);
}}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var w="none",v="wrap",u="value",t="qx.client",s="textarea",r="userSelect",q="on",p="off",o="userModify",n="qxSelectable",i="",m="webkit",l="input",h="qx.html.Input",g="select",k="disabled",j="read-only";
qx.Class.define(h,{extend:qx.html.Element,construct:function(x){arguments.callee.base.call(this);
this.__ja=x;
if(x===g||x===s){this.setNodeName(x);
}else{this.setNodeName(l);
}},members:{__ja:null,__jb:null,__jc:null,_createDomElement:function(){return qx.bom.Input.create(this.__ja);
},_applyProperty:function(name,B){arguments.callee.base.call(this,name,B);
var C=this.getDomElement();

if(name===u){qx.bom.Input.setValue(C,B);
}else if(name===v){qx.bom.Input.setWrap(C,B);
}},setEnabled:qx.core.Variant.select(t,{"webkit":function(c){this.__jc=c;

if(!c){this.setStyle(o,j);
this.setStyle(r,w);
}else{this.setStyle(o,null);
this.setStyle(r,this.__jb?null:w);
}},"default":function(z){this.setAttribute(k,z===false);
}}),setSelectable:qx.core.Variant.select(t,{"webkit":function(d){this.__jb=d;
this.setAttribute(n,d?q:p);
if(qx.core.Variant.isSet(t,m)){var e=this.__jc?d?null:w:w;
this.setStyle(r,e);
}},"default":function(f){this.setAttribute(n,f?q:p);
}}),setValue:function(a){var b=this.getDomElement();

if(b){if(b.value!=a){qx.bom.Input.setValue(b,a);
}}else{this._setProperty(u,a);
}return this;
},getValue:function(){var y=this.getDomElement();

if(y){return qx.bom.Input.getValue(y);
}return this._getProperty(u)||i;
},setWrap:function(A){if(this.__ja===s){this._setProperty(v,A);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__ja===s){return this._getProperty(v);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var bb="change",ba="input",Y="checkbox",X="radio",W="textarea",V="qx.client",U="text",T="password",S="keypress",R="propertychange",N="select-multiple",Q="checked",P="value",M="select",L="qx.event.handler.Input",O="Enter";
qx.Class.define(L,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){var d=b.tagName.toLowerCase();

if(c===ba&&(d===ba||d===W)){return true;
}
if(c===bb&&(d===ba||d===W||d===M)){return true;
}return false;
},registerEvent:qx.core.Variant.select(V,{"mshtml":function(q,r,s){if(!q.__jd){var t=q.tagName.toLowerCase();
var u=q.type;

if(u===U||u===T||t===W||u===Y||u===X){qx.bom.Event.addNativeListener(q,R,this._onPropertyWrapper);
}
if(u!==Y&&u!==X){qx.bom.Event.addNativeListener(q,bb,this._onChangeValueWrapper);
}this.__jg(q,u);
q.__jd=true;
}},"default":function(w,x,y){if(x===ba){this.__je(w);
}else if(x===bb){if(w.type===X||w.type===Y){qx.bom.Event.addNativeListener(w,bb,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(w,bb,this._onChangeValueWrapper);
}this.__jg(w,w.type);
}}}),__je:qx.core.Variant.select(V,{"mshtml":null,"webkit":function(J){var K=J.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&K==W){qx.bom.Event.addNativeListener(J,S,this._onInputWrapper);
}qx.bom.Event.addNativeListener(J,ba,this._onInputWrapper);
},"default":function(a){qx.bom.Event.addNativeListener(a,ba,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(V,{"mshtml":function(f,g){if(f.__jd){var h=f.tagName.toLowerCase();
var j=f.type;

if(j===U||j===T||h===W||j===Y||j===X){qx.bom.Event.removeNativeListener(f,R,this._onPropertyWrapper);
}
if(j!==Y&&j!==X){qx.bom.Event.removeNativeListener(f,bb,this._onChangeValueWrapper);
}
try{delete f.__jd;
}catch(E){f.__jd=null;
}}},"default":function(n,p){if(p===ba){this.__je(n);
}else if(p===bb){if(n.type===X||n.type===Y){qx.bom.Event.removeNativeListener(n,bb,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(n,bb,this._onChangeValueWrapper);
}}}}),__jf:qx.core.Variant.select(V,{"mshtml":null,"webkit":function(z){var A=z.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&A==W){qx.bom.Event.removeNativeListener(z,S,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(z,ba,this._onInputWrapper);
},"default":function(m){qx.bom.Event.removeNativeListener(m,ba,this._onInputWrapper);
}}),__jg:qx.core.Variant.select(V,{"mshtml|opera":function(bc,bd){if(bd===U||bd===T){qx.event.Registration.addListener(bc,S,function(e){if(e.getKeyIdentifier()===O){qx.event.Registration.fireEvent(bc,bb,qx.event.type.Data,[bc.value]);
}});
}},"default":function(F,G){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var k=e.target;
qx.event.Registration.fireEvent(k,ba,qx.event.type.Data,[k.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var I=e.target||e.srcElement;
var H=I.value;

if(I.type===N){var H=[];

for(var i=0,o=I.options,l=o.length;i<l;i++){if(o[i].selected){H.push(o[i].value);
}}}qx.event.Registration.fireEvent(I,bb,qx.event.type.Data,[H]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var v=e.target;

if(v.type===X){if(v.checked){qx.event.Registration.fireEvent(v,bb,qx.event.type.Data,[v.value]);
}}else{qx.event.Registration.fireEvent(v,bb,qx.event.type.Data,[v.checked]);
}}),_onProperty:qx.core.Variant.select(V,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var C=e.target||e.srcElement;
var D=e.propertyName;

if(D===P&&(C.type===U||C.type===T||C.tagName.toLowerCase()===W)){if(!C.__inValueSet){qx.event.Registration.fireEvent(C,ba,qx.event.type.Data,[C.value]);
}}else if(D===Q){if(C.type===Y){qx.event.Registration.fireEvent(C,bb,qx.event.type.Data,[C.checked]);
}else if(C.checked){qx.event.Registration.fireEvent(C,bb,qx.event.type.Data,[C.value]);
}}}),"default":function(){}})},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var x="",w="select",v="soft",u="off",t="qx.client",s="wrap",r="text",q="mshtml",p="number",o="checkbox",f="select-one",n="input",j="option",e="value",d="radio",h="qx.bom.Input",g="nowrap",k="textarea",c="auto",m="normal";
qx.Class.define(h,{statics:{__jh:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(J,K,L){{};
var K=K?qx.lang.Object.clone(K):{};
var M;

if(J===k||J===w){M=J;
}else{M=n;
K.type=J;
}return qx.bom.Element.create(M,K,L);
},setValue:function(y,z){var E=y.nodeName.toLowerCase();
var B=y.type;
var Array=qx.lang.Array;
var F=qx.lang.Type;

if(typeof z===p){z+=x;
}
if((B===o||B===d)){if(F.isArray(z)){y.checked=Array.contains(z,y.value);
}else{y.checked=y.value==z;
}}else if(E===w){var A=F.isArray(z);
var G=y.options;
var C,D;

for(var i=0,l=G.length;i<l;i++){C=G[i];
D=C.getAttribute(e);

if(D==null){D=C.text;
}C.selected=A?Array.contains(z,D):z==D;
}
if(A&&z.length==0){y.selectedIndex=-1;
}}else if(B===r&&qx.core.Variant.isSet(t,q)){y.__ji=true;
y.value=z;
y.__ji=null;
}else{y.value=z;
}},getValue:function(N){var T=N.nodeName.toLowerCase();

if(T===j){return (N.attributes.value||{}).specified?N.value:N.text;
}
if(T===w){var O=N.selectedIndex;
if(O<0){return null;
}var U=[];
var W=N.options;
var V=N.type==f;
var S=qx.bom.Input;
var R;
for(var i=V?O:0,Q=V?O+1:W.length;i<Q;i++){var P=W[i];

if(P.selected){R=S.getValue(P);
if(V){return R;
}U.push(R);
}}return U;
}else{return (N.value||x).replace(/\r/g,x);
}},setWrap:qx.core.Variant.select(t,{"mshtml":function(H,I){H.wrap=I?v:u;
},"gecko":function(X,Y){var bb=Y?v:u;
var ba=Y?x:c;
X.setAttribute(s,bb);
X.style.overflow=ba;
},"default":function(a,b){a.style.whiteSpace=b?m:g;
}})}});
})();
(function(){var f="qx.ui.form.Form",e="";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jj=[];
this.__jk=[];
this.__jl=new qx.ui.form.validation.Manager();
this.__jm=new qx.ui.form.Resetter();
},members:{__jj:null,__jl:null,__jn:0,__jk:null,__jm:null,add:function(l,m,n,name){if(this.__jo()){this.__jj.push({title:null,items:[],labels:[],names:[]});
}this.__jj[this.__jn].items.push(l);
this.__jj[this.__jn].labels.push(m);
if(name==null){name=m.replace(/\s+/g,e);
}this.__jj[this.__jn].names.push(name);
this.__jl.add(l,n);
this.__jm.add(l);
},addGroupHeader:function(a){if(!this.__jo()){this.__jn++;
}this.__jj.push({title:a,items:[],labels:[],names:[]});
},addButton:function(b){this.__jk.push(b);
},__jo:function(){return this.__jj.length===0;
},reset:function(){this.__jm.reset();
this.__jl.reset();
},validate:function(){return this.__jl.validate();
},getValidationManager:function(){return this.__jl;
},createView:function(g){if(g==null){g=qx.ui.form.renderer.Single;
}else{this.__jp(g);
}var k=new g();
for(var i=0;i<this.__jj.length;i++){var h=this.__jj[i];
k.addItems(h.items,h.labels,h.title);
}for(var i=0;i<this.__jk.length;i++){k.addButton(this.__jk[i]);
}return k;
},__jp:function(o){var p;
{};
},getItems:function(){var c={};
for(var i=0;i<this.__jj.length;i++){var d=this.__jj[i];
for(var j=0;j<d.names.length;j++){var name=d.names[j];
c[name]=d.items[j];
}}return c;
}}});
})();
(function(){var B="",A="complete",z="changeValid",y="qx.event.type.Event",x="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",w="qx.ui.form.validation.Manager",v="This field is required",u="String",t="qx.event.type.Data";
qx.Class.define(w,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jq=[];
this.__jr={};
},events:{"changeValid":t,"complete":y},properties:{validator:{check:x,init:null,nullable:true},invalidMessage:{check:u,init:B}},members:{__jq:null,__js:null,__jr:null,__jt:null,add:function(S,T){if(!this.__jy(S)){throw new Error("Added widget not supported.");
}if(this.__jz(S)){if(T!=null){throw new Error("Widgets suporting selection can only be validated "+"in the form validator");
}}var U={item:S,validator:T,valid:null};
this.__jq.push(U);
},validate:function(){var Q=true;
this.__jt=true;
var N=[];
for(var i=0;i<this.__jq.length;i++){var O=this.__jq[i].item;
var R=this.__jq[i].validator;
N.push(O);
if(R==null){var M=this.__ju(O);
Q=Q&&M;
this.__jt=M&&this.__jt;
continue;
}var M=this.__jv(this.__jq[i],O.getValue());
Q=M&&Q;

if(M!=null){this.__jt=M&&this.__jt;
}}var P=this.__jw(N);

if(qx.lang.Type.isBoolean(P)){this.__jt=P&&this.__jt;
}Q=P&&Q;
this.__jB(Q);

if(qx.lang.Object.isEmpty(this.__jr)){this.fireEvent(A);
}return Q;
},__ju:function(K){if(K.getRequired()){var L=!!K.getValue();
K.setValid(L);
K.setInvalidMessage(v);
return L;
}return true;
},__jv:function(f,g){var l=f.item;
var k=f.validator;
if(this.__jx(k)){this.__jr[l.toHashCode()]=null;
k.validate(l,l.getValue(),this);
return null;
}var j=null;

try{var j=k(g,l);

if(j===undefined){j=true;
}}catch(e){if(e instanceof qx.core.ValidationError){j=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var h=e.message;
}else{var h=e.getComment();
}l.setInvalidMessage(h);
}else{throw e;
}}l.setValid(j);
f.valid=j;
return j;
},__jw:function(m){var o=this.getValidator();

if(o==null){return true;
}this.setInvalidMessage(B);

if(this.__jx(o)){this.__jr[this.toHashCode()]=null;
o.validateForm(m,this);
return null;
}
try{var p=o(m,this);

if(p===undefined){p=true;
}}catch(e){if(e instanceof qx.core.ValidationError){p=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var n=e.message;
}else{var n=e.getComment();
}this.setInvalidMessage(n);
}else{throw e;
}}return p;
},__jx:function(X){var Y=false;

if(!qx.lang.Type.isFunction(X)){Y=qx.Class.isSubClassOf(X.constructor,qx.ui.form.validation.AsyncValidator);
}return Y;
},__jy:function(E){var F=E.constructor;
return qx.Class.hasInterface(F,qx.ui.form.IForm);
},__jz:function(a){var b=a.constructor;
return qx.Class.hasInterface(b,qx.ui.core.ISingleSelection);
},__jA:function(C){var D=C.constructor;
return (qx.Class.hasInterface(D,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(D,qx.ui.form.IColorForm)||qx.Class.hasInterface(D,qx.ui.form.IDateForm)||qx.Class.hasInterface(D,qx.ui.form.INumberForm)||qx.Class.hasInterface(D,qx.ui.form.IStringForm));
},__jB:function(G){var H=this.__js;
this.__js=G;
if(H!=G){this.fireDataEvent(z,G,H);
}},getValid:function(){return this.__js;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var V=[];
for(var i=0;i<this.__jq.length;i++){var W=this.__jq[i].item;

if(!W.getValid()){V.push(W.getInvalidMessage());
}}if(this.getInvalidMessage()!=B){V.push(this.getInvalidMessage());
}return V;
},reset:function(){for(var i=0;i<this.__jq.length;i++){var I=this.__jq[i];
I.item.setValid(true);
}this.__js=null;
},setItemValid:function(c,d){this.__jr[c.toHashCode()]=d;
c.setValid(d);
this.__jC();
},setFormValid:function(J){this.__jr[this.toHashCode()]=J;
this.__jC();
},__jC:function(){var r=this.__jt;
for(var s in this.__jr){var q=this.__jr[s];
r=q&&r;
if(q==null){return;
}}this.__jB(r);
this.__jr={};
this.fireEvent(A);
}}});
})();
(function(){var j="__jF",i="__jE",h="qx.ui.form.validation.AsyncValidator";
qx.Class.define(h,{extend:qx.core.Object,construct:function(k){arguments.callee.base.call(this);
this.__jD=k;
},members:{__jD:null,__jE:null,__jF:null,__jG:null,validate:function(a,b,c){this.__jG=false;
this.__jE=a;
this.__jF=c;
this.__jD(this,b);
},validateForm:function(d,e){this.__jG=true;
this.__jF=e;
this.__jD(d,this);
},setValid:function(f,g){if(this.__jG){if(g!==undefined){this.__jF.setInvalidMessage(g);
}this.__jF.setFormValid(f);
}else{if(g!==undefined){this.__jE.setInvalidMessage(g);
}this.__jF.setItemValid(this.__jE,f);
}}},destruct:function(){this._disposeFields(j,i);
}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="qx.ui.form.IDateForm",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeValue":b},members:{setValue:function(a){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var h="qx.ui.form.Resetter";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jH=[];
},members:{__jH:null,add:function(a){if(this.__jJ(a)){var b=a.getValue();
}else if(this.__jI(a)){var b=a.getSelection();
}else{throw new Error("Item "+a+" not supported for reseting.");
}this.__jH.push({item:a,init:b});
},reset:function(){for(var i=0;i<this.__jH.length;i++){var e=this.__jH[i];
if(this.__jJ(e.item)){e.item.setValue(e.init);
}else if(this.__jI(e.item)){e.item.setSelection(e.init);
}}},__jI:function(c){var d=c.constructor;
return qx.Class.hasInterface(d,qx.ui.core.ISingleSelection);
},__jJ:function(f){var g=f.constructor;
return (qx.Class.hasInterface(g,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(g,qx.ui.form.IColorForm)||qx.Class.hasInterface(g,qx.ui.form.IDateForm)||qx.Class.hasInterface(g,qx.ui.form.INumberForm)||qx.Class.hasInterface(g,qx.ui.form.IStringForm));
}}});
})();
(function(){var e="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(e,{members:{addItems:function(b,c,d){},addButton:function(a){}}});
})();
(function(){var v="right",u=" <span style='color:red'>*</span> ",t="bold",s="",r="qx.ui.form.renderer.Single",q="top",p="left",o=" :";
qx.Class.define(r,{extend:qx.ui.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(){arguments.callee.base.call(this);
var l=new qx.ui.layout.Grid();
l.setSpacing(6);
l.setColumnAlign(0,v,q);
this._setLayout(l);
},members:{_row:0,_buttonRow:null,addItems:function(f,g,h){if(h!=null){this._add(this._createHeader(h),{row:this._row,column:0,colSpan:2});
this._row++;
}for(var i=0;i<f.length;i++){var k=this._createLabel(g[i],f[i]);
this._add(k,{row:this._row,column:0});
var j=f[i];
k.setBuddy(j);
this._add(j,{row:this._row,column:1});
this._row++;
}},addButton:function(d){if(this._buttonRow==null){this._buttonRow=new qx.ui.container.Composite();
this._buttonRow.setMarginTop(5);
var e=new qx.ui.layout.HBox();
e.setAlignX(v);
e.setSpacing(5);
this._buttonRow.setLayout(e);
this._add(this._buttonRow,{row:this._row,column:0,colSpan:2});
this._row++;
}this._buttonRow.add(d);
},getLayout:function(){return this._getLayout();
},_createLabel:function(name,a){var b=s;

if(a.getRequired()){b=u;
}var c=new qx.ui.basic.Label(name+b+o);
c.setRich(true);
return c;
},_createHeader:function(m){var n=new qx.ui.basic.Label(m);
n.setFont(t);

if(this._row!=0){n.setMarginTop(10);
}n.setAlignX(p);
return n;
}}});
})();
(function(){var dx="left",dw="top",dv="_applyLayoutChange",du="hAlign",dt="flex",ds="vAlign",dr="Integer",dq="__jN",dp="__jO",dn="minWidth",dg="width",dm="__jM",dj="minHeight",de="__jL",dd="__jS",di="qx.ui.layout.Grid",dh="__jR",dk="height",dc="maxHeight",dl="maxWidth",df="__jK";
qx.Class.define(di,{extend:qx.ui.layout.Abstract,construct:function(cv,cw){arguments.callee.base.call(this);
this.__jK=[];
this.__jL=[];

if(cv){this.setSpacingX(cv);
}
if(cw){this.setSpacingY(cw);
}},properties:{spacingX:{check:dr,init:0,apply:dv},spacingY:{check:dr,init:0,apply:dv}},members:{__jM:null,__jK:null,__jL:null,__jN:null,__jO:null,__jP:null,__jQ:null,__jR:null,__jS:null,verifyLayoutProperty:null,__jT:function(){var m=[];
var k=[];
var n=[];
var g=0;
var f=0;
var p=this._getLayoutChildren();

for(var i=0,l=p.length;i<l;i++){var h=p[i];
var o=h.getLayoutProperties();
var q=o.row;
var e=o.column;
o.colSpan=o.colSpan||1;
o.rowSpan=o.rowSpan||1;
if(q==null||e==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(m[q]&&m[q][e]){throw new Error("There is already a widget in this cell ("+q+", "+e+")");
}
for(var x=e;x<e+o.colSpan;x++){for(var y=q;y<q+o.rowSpan;y++){if(m[y]==undefined){m[y]=[];
}m[y][x]=h;
f=Math.max(f,x);
g=Math.max(g,y);
}}
if(o.rowSpan>1){n.push(h);
}
if(o.colSpan>1){k.push(h);
}}for(var y=0;y<=g;y++){if(m[y]==undefined){m[y]=[];
}}this.__jM=m;
this.__jN=k;
this.__jO=n;
this.__jP=g;
this.__jQ=f;
this.__jR=null;
this.__jS=null;
delete this._invalidChildrenCache;
},_setRowData:function(a,b,c){var d=this.__jK[a];

if(!d){this.__jK[a]={};
this.__jK[a][b]=c;
}else{d[b]=c;
}},_setColumnData:function(cq,cr,cs){var ct=this.__jL[cq];

if(!ct){this.__jL[cq]={};
this.__jL[cq][cr]=cs;
}else{ct[cr]=cs;
}},setSpacing:function(cu){this.setSpacingY(cu);
this.setSpacingX(cu);
},setColumnAlign:function(cT,cU,cV){{};
this._setColumnData(cT,du,cU);
this._setColumnData(cT,ds,cV);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bb){var bc=this.__jL[bb]||{};
return {vAlign:bc.vAlign||dw,hAlign:bc.hAlign||dx};
},setRowAlign:function(cW,cX,cY){{};
this._setRowData(cW,du,cX);
this._setRowData(cW,ds,cY);
this._applyLayoutChange();
return this;
},getRowAlign:function(dW){var dX=this.__jK[dW]||{};
return {vAlign:dX.vAlign||dw,hAlign:dX.hAlign||dx};
},getCellWidget:function(dY,ea){if(this._invalidChildrenCache){this.__jT();
}var dY=this.__jM[dY]||{};
return dY[ea]||null;
},getCellAlign:function(bf,bg){var bm=dw;
var bk=dx;
var bl=this.__jK[bf];
var bi=this.__jL[bg];
var bh=this.__jM[bf][bg];

if(bh){var bj={vAlign:bh.getAlignY(),hAlign:bh.getAlignX()};
}else{bj={};
}if(bj.vAlign){bm=bj.vAlign;
}else if(bl&&bl.vAlign){bm=bl.vAlign;
}else if(bi&&bi.vAlign){bm=bi.vAlign;
}if(bj.hAlign){bk=bj.hAlign;
}else if(bi&&bi.hAlign){bk=bi.hAlign;
}else if(bl&&bl.hAlign){bk=bl.hAlign;
}return {vAlign:bm,hAlign:bk};
},setColumnFlex:function(dL,dM){this._setColumnData(dL,dt,dM);
this._applyLayoutChange();
return this;
},getColumnFlex:function(eg){var eh=this.__jL[eg]||{};
return eh.flex!==undefined?eh.flex:0;
},setRowFlex:function(by,bz){this._setRowData(by,dt,bz);
this._applyLayoutChange();
return this;
},getRowFlex:function(cx){var cy=this.__jK[cx]||{};
var cz=cy.flex!==undefined?cy.flex:0;
return cz;
},setColumnMaxWidth:function(dJ,dK){this._setColumnData(dJ,dl,dK);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(cJ){var cK=this.__jL[cJ]||{};
return cK.maxWidth!==undefined?cK.maxWidth:Infinity;
},setColumnWidth:function(dN,dO){this._setColumnData(dN,dg,dO);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cL){var cM=this.__jL[cL]||{};
return cM.width!==undefined?cM.width:null;
},setColumnMinWidth:function(bL,bM){this._setColumnData(bL,dn,bM);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(cR){var cS=this.__jL[cR]||{};
return cS.minWidth||0;
},setRowMaxHeight:function(Y,ba){this._setRowData(Y,dc,ba);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(cN){var cO=this.__jK[cN]||{};
return cO.maxHeight||Infinity;
},setRowHeight:function(cH,cI){this._setRowData(cH,dk,cI);
this._applyLayoutChange();
return this;
},getRowHeight:function(bd){var be=this.__jK[bd]||{};
return be.height!==undefined?be.height:null;
},setRowMinHeight:function(cP,cQ){this._setRowData(cP,dj,cQ);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(da){var db=this.__jK[da]||{};
return db.minHeight||0;
},__jU:function(eb){var ef=eb.getSizeHint();
var ee=eb.getMarginLeft()+eb.getMarginRight();
var ed=eb.getMarginTop()+eb.getMarginBottom();
var ec={height:ef.height+ed,width:ef.width+ee,minHeight:ef.minHeight+ed,minWidth:ef.minWidth+ee,maxHeight:ef.maxHeight+ed,maxWidth:ef.maxWidth+ee};
return ec;
},_fixHeightsRowSpan:function(bN){var bY=this.getSpacingY();

for(var i=0,l=this.__jO.length;i<l;i++){var bQ=this.__jO[i];
var bS=this.__jU(bQ);
var bT=bQ.getLayoutProperties();
var bP=bT.row;
var bW=bY*(bT.rowSpan-1);
var bO=bW;
var bV={};

for(var j=0;j<bT.rowSpan;j++){var cb=bT.row+j;
var bR=bN[cb];
var ca=this.getRowFlex(cb);

if(ca>0){bV[cb]={min:bR.minHeight,value:bR.height,max:bR.maxHeight,flex:ca};
}bW+=bR.height;
bO+=bR.minHeight;
}if(bW<bS.height){var bX=qx.ui.layout.Util.computeFlexOffsets(bV,bS.height,bW);

for(var j=0;j<bT.rowSpan;j++){var bU=bX[bP+j]?bX[bP+j].offset:0;
bN[bP+j].height+=bU;
}}if(bO<bS.minHeight){var bX=qx.ui.layout.Util.computeFlexOffsets(bV,bS.minHeight,bO);

for(var j=0;j<bT.rowSpan;j++){var bU=bX[bP+j]?bX[bP+j].offset:0;
bN[bP+j].minHeight+=bU;
}}}},_fixWidthsColSpan:function(cc){var cg=this.getSpacingX();

for(var i=0,l=this.__jN.length;i<l;i++){var cd=this.__jN[i];
var cf=this.__jU(cd);
var ci=cd.getLayoutProperties();
var ce=ci.column;
var co=cg*(ci.colSpan-1);
var ch=co;
var cj={};
var cl;

for(var j=0;j<ci.colSpan;j++){var cp=ci.column+j;
var cn=cc[cp];
var cm=this.getColumnFlex(cp);
if(cm>0){cj[cp]={min:cn.minWidth,value:cn.width,max:cn.maxWidth,flex:cm};
}co+=cn.width;
ch+=cn.minWidth;
}if(co<cf.width){var ck=qx.ui.layout.Util.computeFlexOffsets(cj,cf.width,co);

for(var j=0;j<ci.colSpan;j++){cl=ck[ce+j]?ck[ce+j].offset:0;
cc[ce+j].width+=cl;
}}if(ch<cf.minWidth){var ck=qx.ui.layout.Util.computeFlexOffsets(cj,cf.minWidth,ch);

for(var j=0;j<ci.colSpan;j++){cl=ck[ce+j]?ck[ce+j].offset:0;
cc[ce+j].minWidth+=cl;
}}}},_getRowHeights:function(){if(this.__jR!=null){return this.__jR;
}var dH=[];
var dA=this.__jP;
var dz=this.__jQ;

for(var dI=0;dI<=dA;dI++){var dB=0;
var dD=0;
var dC=0;

for(var dG=0;dG<=dz;dG++){var dy=this.__jM[dI][dG];

if(!dy){continue;
}var dE=dy.getLayoutProperties().rowSpan||0;

if(dE>1){continue;
}var dF=this.__jU(dy);

if(this.getRowFlex(dI)>0){dB=Math.max(dB,dF.minHeight);
}else{dB=Math.max(dB,dF.height);
}dD=Math.max(dD,dF.height);
}var dB=Math.max(dB,this.getRowMinHeight(dI));
var dC=this.getRowMaxHeight(dI);

if(this.getRowHeight(dI)!==null){var dD=this.getRowHeight(dI);
}else{var dD=Math.max(dB,Math.min(dD,dC));
}dH[dI]={minHeight:dB,height:dD,maxHeight:dC};
}
if(this.__jO.length>0){this._fixHeightsRowSpan(dH);
}this.__jR=dH;
return dH;
},_getColWidths:function(){if(this.__jS!=null){return this.__jS;
}var br=[];
var bo=this.__jQ;
var bq=this.__jP;

for(var bw=0;bw<=bo;bw++){var bu=0;
var bt=0;
var bp=Infinity;

for(var bx=0;bx<=bq;bx++){var bn=this.__jM[bx][bw];

if(!bn){continue;
}var bs=bn.getLayoutProperties().colSpan||0;

if(bs>1){continue;
}var bv=this.__jU(bn);

if(this.getColumnFlex(bw)>0){bt=Math.max(bt,bv.minWidth);
}else{bt=Math.max(bt,bv.width);
}bu=Math.max(bu,bv.width);
}var bt=Math.max(bt,this.getColumnMinWidth(bw));
var bp=this.getColumnMaxWidth(bw);

if(this.getColumnWidth(bw)!==null){var bu=this.getColumnWidth(bw);
}else{var bu=Math.max(bt,Math.min(bu,bp));
}br[bw]={minWidth:bt,width:bu,maxWidth:bp};
}
if(this.__jN.length>0){this._fixWidthsColSpan(br);
}this.__jS=br;
return br;
},_getColumnFlexOffsets:function(cA){var cB=this.getSizeHint();
var cF=cA-cB.width;

if(cF==0){return {};
}var cD=this._getColWidths();
var cC={};

for(var i=0,l=cD.length;i<l;i++){var cG=cD[i];
var cE=this.getColumnFlex(i);

if((cE<=0)||(cG.width==cG.maxWidth&&cF>0)||(cG.width==cG.minWidth&&cF<0)){continue;
}cC[i]={min:cG.minWidth,value:cG.width,max:cG.maxWidth,flex:cE};
}return qx.ui.layout.Util.computeFlexOffsets(cC,cA,cB.width);
},_getRowFlexOffsets:function(dP){var dQ=this.getSizeHint();
var dT=dP-dQ.height;

if(dT==0){return {};
}var dU=this._getRowHeights();
var dR={};

for(var i=0,l=dU.length;i<l;i++){var dV=dU[i];
var dS=this.getRowFlex(i);

if((dS<=0)||(dV.height==dV.maxHeight&&dT>0)||(dV.height==dV.minHeight&&dT<0)){continue;
}dR[i]={min:dV.minHeight,value:dV.height,max:dV.maxHeight,flex:dS};
}return qx.ui.layout.Util.computeFlexOffsets(dR,dP,dQ.height);
},renderLayout:function(r,s){if(this._invalidChildrenCache){this.__jT();
}var I=qx.ui.layout.Util;
var u=this.getSpacingX();
var C=this.getSpacingY();
var N=this._getColWidths();
var M=this._getColumnFlexOffsets(r);
var v=[];
var P=this.__jQ;
var t=this.__jP;
var O;

for(var Q=0;Q<=P;Q++){O=M[Q]?M[Q].offset:0;
v[Q]=N[Q].width+O;
}var F=this._getRowHeights();
var H=this._getRowFlexOffsets(s);
var W=[];

for(var D=0;D<=t;D++){O=H[D]?H[D].offset:0;
W[D]=F[D].height+O;
}var X=0;

for(var Q=0;Q<=P;Q++){var top=0;

for(var D=0;D<=t;D++){var K=this.__jM[D][Q];
if(!K){top+=W[D]+C;
continue;
}var w=K.getLayoutProperties();
if(w.row!==D||w.column!==Q){top+=W[D]+C;
continue;
}var V=u*(w.colSpan-1);

for(var i=0;i<w.colSpan;i++){V+=v[Q+i];
}var L=C*(w.rowSpan-1);

for(var i=0;i<w.rowSpan;i++){L+=W[D+i];
}var z=K.getSizeHint();
var T=K.getMarginTop();
var J=K.getMarginLeft();
var G=K.getMarginBottom();
var B=K.getMarginRight();
var E=Math.max(z.minWidth,Math.min(V-J-B,z.maxWidth));
var U=Math.max(z.minHeight,Math.min(L-T-G,z.maxHeight));
var R=this.getCellAlign(D,Q);
var S=X+I.computeHorizontalAlignOffset(R.hAlign,E,V,J,B);
var A=top+I.computeVerticalAlignOffset(R.vAlign,U,L,T,G);
K.renderLayout(S,A,E,U);
top+=W[D]+C;
}X+=v[Q]+u;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__jS=null;
this.__jR=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jT();
}var bE=this._getColWidths();
var bG=0,bH=0;

for(var i=0,l=bE.length;i<l;i++){var bI=bE[i];

if(this.getColumnFlex(i)>0){bG+=bI.minWidth;
}else{bG+=bI.width;
}bH+=bI.width;
}var bJ=this._getRowHeights();
var bC=0,bF=0;

for(var i=0,l=bJ.length;i<l;i++){var bK=bJ[i];

if(this.getRowFlex(i)>0){bC+=bK.minHeight;
}else{bC+=bK.height;
}bF+=bK.height;
}var bB=this.getSpacingX()*(bE.length-1);
var bA=this.getSpacingY()*(bJ.length-1);
var bD={minWidth:bG+bB,width:bH+bB,minHeight:bC+bA,height:bF+bA};
return bD;
}},destruct:function(){this._disposeFields(dm,df,de,dq,dp,dd,dh);
}});
})();
(function(){var q="_applyLayoutChange",p="left",o="center",n="top",m="Decorator",k="__jW",j="middle",h="_applyReversed",g="bottom",f="Boolean",c="__jY",e="__jV",d="right",b="Integer",a="qx.ui.layout.HBox";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,construct:function(x,y,z){arguments.callee.base.call(this);

if(x){this.setSpacing(x);
}
if(y){this.setAlignX(y);
}
if(z){this.setSeparator(z);
}},properties:{alignX:{check:[p,o,d],init:p,apply:q},alignY:{check:[n,j,g],init:n,apply:q},spacing:{check:b,init:0,apply:q},separator:{check:m,nullable:true,apply:q},reversed:{check:f,init:false,apply:h}},members:{__jV:null,__jW:null,__jX:null,__jY:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ka:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__jV&&this.__jV.length!=length&&this.__jW&&this.__jV;
var u;
var s=r?this.__jV:new Array(length);
var v=r?this.__jW:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}}if(!r){this.__jV=s;
this.__jW=v;
}this.__jX=t;
this.__jY=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(P,Q){if(this._invalidChildrenCache){this.__ka();
}var W=this.__jY;
var length=W.length;
var bg=qx.ui.layout.Util;
var bf=this.getSpacing();
var bj=this.getSeparator();

if(bj){var T=bg.computeHorizontalSeparatorGaps(W,bf,bj);
}else{var T=bg.computeHorizontalGaps(W,bf,true);
}var i,R,bd,bc;
var bi=[];
var X=T;

for(i=0;i<length;i+=1){bc=this.__jV[i];
bd=bc!=null?Math.floor((P-T)*bc):W[i].getSizeHint().width;
bi.push(bd);
X+=bd;
}if(this.__jX&&X!=P){var ba={};
var be,bh;

for(i=0;i<length;i+=1){be=this.__jW[i];

if(be>0){Y=W[i].getSizeHint();
ba[i]={min:Y.minWidth,value:bi[i],max:Y.maxWidth,flex:be};
}}var U=bg.computeFlexOffsets(ba,P,X);

for(i in U){bh=U[i].offset;
bi[i]+=bh;
X+=bh;
}}var bn=W[0].getMarginLeft();
if(X<P&&this.getAlignX()!=p){bn=P-X;

if(this.getAlignX()===o){bn=Math.round(bn/2);
}}var Y,top,S,bd,V,bl,bb;
var bf=this.getSpacing();
this._clearSeparators();
if(bj){var bk=qx.theme.manager.Decoration.getInstance().resolve(bj).getInsets();
var bm=bk.left+bk.right;
}for(i=0;i<length;i+=1){R=W[i];
bd=bi[i];
Y=R.getSizeHint();
bl=R.getMarginTop();
bb=R.getMarginBottom();
S=Math.max(Y.minHeight,Math.min(Q-bl-bb,Y.maxHeight));
top=bg.computeVerticalAlignOffset(R.getAlignY()||this.getAlignY(),S,Q,bl,bb);
if(i>0){if(bj){bn+=V+bf;
this._renderSeparator(bj,{left:bn,top:0,width:bm,height:Q});
bn+=bm+bf+R.getMarginLeft();
}else{bn+=bg.collapseMargins(bf,V,R.getMarginLeft());
}}R.renderLayout(bn,top,bd,S);
bn+=bd;
V=R.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ka();
}var G=qx.ui.layout.Util;
var O=this.__jY;
var A=0,H=0,E=0;
var D=0,F=0;
var L,B,N;
for(var i=0,l=O.length;i<l;i+=1){L=O[i];
B=L.getSizeHint();
H+=B.width;
var K=this.__jW[i];
var C=this.__jV[i];

if(K){A+=B.minWidth;
}else if(C){E=Math.max(E,Math.round(B.minWidth/C));
}else{A+=B.width;
}N=L.getMarginTop()+L.getMarginBottom();
if((B.height+N)>F){F=B.height+N;
}if((B.minHeight+N)>D){D=B.minHeight+N;
}}A+=E;
var J=this.getSpacing();
var M=this.getSeparator();

if(M){var I=G.computeHorizontalSeparatorGaps(O,J,M);
}else{var I=G.computeHorizontalGaps(O,J,true);
}return {minWidth:A+I,width:H+I,minHeight:D,height:F};
}},destruct:function(){this._disposeFields(e,k,c);
}});
})();
(function(){var h="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(h,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(f,g){return this.getChildrenContainer().add(f,g);
},remove:function(e){return this.getChildrenContainer().remove(e);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(d){return this.getChildrenContainer().indexOf(d);
},addAt:function(m,n,o){this.getChildrenContainer().addAt(m,n,o);
},addBefore:function(j,k,l){this.getChildrenContainer().addBefore(j,k,l);
},addAfter:function(a,b,c){this.getChildrenContainer().addAfter(a,b,c);
},removeAt:function(i){this.getChildrenContainer().removeAt(i);
}}});
})();
(function(){var z="popup",y="list",x="mousewheel",w="resize",v="PageUp",u="blur",t="abstract",s="keypress",r="Number",q="qx.ui.form.AbstractSelectBox",j="changeSelection",p="Escape",m="_applyMaxListHeight",i="PageDown",h="mouseup",l="changeVisibility",k="one",n="middle",g="mousedown",o="qx.event.type.Data";
qx.Class.define(q,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MFormElement,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:t,construct:function(){arguments.callee.base.call(this);
var c=new qx.ui.layout.HBox();
this._setLayout(c);
c.setAlignY(n);
this.addListener(s,this._onKeyPress);
this.addListener(u,this.close,this);
var b=qx.core.Init.getApplication().getRoot();
b.addListener(x,this._onMousewheel,this,true);
this.addListener(w,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:r,apply:m,nullable:true,init:200}},events:{"changeValue":o},members:{_createChildControlImpl:function(D){var E;

switch(D){case y:E=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:k,quickSelection:true});
E.addListener(j,this._onListChangeSelection,this);
E.addListener(g,this._onListMouseDown,this);
break;
case z:E=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
E.setAutoHide(false);
E.setKeepActive(true);
E.addListener(h,this.close,this);
E.add(this.getChildControl(y));
E.addListener(l,this._onPopupChangeVisibility,this);
break;
}return E||arguments.callee.base.call(this,D);
},_applyMaxListHeight:function(F,G){this.getChildControl(y).setMaxHeight(F);
},getChildrenContainer:function(){return this.getChildControl(y);
},open:function(){var a=this.getChildControl(z);
a.placeToWidget(this,true);
a.show();
},close:function(){this.getChildControl(z).hide();
},toggle:function(){var H=this.getChildControl(z).isVisible();

if(H){this.close();
}else{this.open();
}},_onKeyPress:function(e){var A=e.getKeyIdentifier();
var B=this.getChildControl(z);
if(B.isHidden()&&(A==i||A==v)){e.stopPropagation();
}else if(!B.isHidden()&&A==p){this.close();
e.stop();
}else{this.getChildControl(y).handleKeyPress(e);
}},_onMousewheel:function(e){var f=e.getTarget();
var d=this.getChildControl(z);

if(qx.ui.core.Widget.contains(d,f)){return;
}this.close();
e.preventDefault();
},_onResize:function(e){this.getChildControl(z).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var C=qx.core.Init.getApplication().getRoot();

if(C){C.removeListener(x,this._onMousewheel,this,true);
}}});
})();
(function(){var s="textfield",r="button",q="input",p="list",o="changeValue",n="selected",m="qx.event.type.Data",l="inner",k="",j="focusin",L="popup",K="focusout",J="blur",I="Enter",H="Please use the changeValue event instead.",G="Down",F="Function",E="Use public 'setTextSelection' instead!",D="quick",C="String",z="Use public 'clearTextSelection' instead!",A="qx.ui.form.ComboBox",x="single",y="Use public 'getTextSelectionLength' instead!",v="combobox",w="click",t="_applyPlaceholder",u="Use public 'selectAllText' instead!",B="Use public 'getTextSelection' instead!";
qx.Class.define(A,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IFormElement,qx.ui.form.IStringForm],construct:function(){arguments.callee.base.call(this);
var a=this._createChildControl(s);
this._createChildControl(r);
this.addListener(w,this._onClick);
this.addListener(j,function(e){a.fireNonBubblingEvent(j,qx.event.type.Focus);
},this);
this.addListener(K,function(e){a.fireNonBubblingEvent(K,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:v},format:{check:F,init:function(Y){return this.__kd(Y);
},nullable:true},placeholder:{check:C,nullable:true,apply:t}},events:{"input":m,"changeValue":m},members:{__kb:null,__kc:null,_applyPlaceholder:function(be,bf){this.getChildControl(s).setPlaceholder(be);
},_createChildControlImpl:function(f){var g;

switch(f){case s:g=new qx.ui.form.TextField();
g.setFocusable(false);
g.addState(l);
g.addListener(o,this._onTextFieldChangeValue,this);
g.addListener(J,this.close,this);
this._add(g,{flex:1});
break;
case r:g=new qx.ui.form.Button();
g.setFocusable(false);
g.setKeepActive(true);
g.addState(l);
this._add(g);
break;
case p:g=arguments.callee.base.call(this,f);
g.setSelectionMode(x);
break;
}return g||arguments.callee.base.call(this,f);
},_forwardStates:{focused:true},tabFocus:function(){var bb=this.getChildControl(s);
bb.getFocusElement().focus();
bb.selectAllText();
},setValue:function(bc){var bd=this.getChildControl(s);

if(bd.getValue()==bc){return;
}bd.setValue(bc);
},getValue:function(){return this.getChildControl(s).getValue();
},resetValue:function(){this.getChildControl(s).setValue(null);
},addListener:function(bg,bh,self,bi){if(bg==q){qx.log.Logger.deprecatedEventWarning(arguments.callee,q,H);

if(!this.__kc){var bj=this.getChildControl(s);
this.__kc=bj.addListener(q,this._onTextFieldInput,this);
}}return arguments.callee.base.call(this,bg,bh,self,bi);
},_onKeyPress:function(e){var bl=this.getChildControl(L);
var bk=e.getKeyIdentifier();

if(bk==G&&e.isAltPressed()){this.getChildControl(r).addState(n);
this.toggle();
e.stopPropagation();
}else if(bk==I){if(bl.isVisible()){this.close();
e.stop();
}}else if(bl.isVisible()){arguments.callee.base.call(this,e);
}},_onClick:function(e){var ba=e.getTarget();

if(ba==this.getChildControl(r)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__kb){var bm=this.__kb.getLabel();

if(this.getFormat()!=null){bm=this.getFormat().call(this,this.__kb);
}this.setValue(bm);
this.__kb=null;
}},_onListChangeSelection:function(e){var b=e.getData();

if(b.length>0){var c=this.getChildControl(p);

if(c.getSelectionContext()==D){this.__kb=b[0];
}else{var d=b[0].getLabel();

if(this.getFormat()!=null){d=this.getFormat().call(this,b[0]);
}this.setValue(d);
this.__kb=null;
}}},_onPopupChangeVisibility:function(e){var Q=this.getChildControl(L);

if(Q.isVisible()){var R=this.getChildControl(p);
var S=this.getValue();
var P=null;

if(S){P=R.findItem(S);
}
if(P){R.setSelection([P]);
}else{R.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(r).removeState(n);
},_onTextFieldInput:function(e){this.fireDataEvent(q,e.getData());
},_onTextFieldChangeValue:function(e){var O=e.getData();
var N=this.getChildControl(p);

if(O!=null){var M=N.findItem(O);

if(M){N.setSelection([M]);
}else{N.resetSelection();
}}else{N.resetSelection();
}this.fireDataEvent(o,O,e.getOldData());
},__kd:function(V){var W=V?V.getLabel():k;
var X=V?V.getRich():false;

if(X){W=W.replace(/<[^>]+?>/g,k);
W=qx.bom.String.unescape(W);
}return W;
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getTextSelectionLength();
},setSelection:function(h,i){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E);
this.setTextSelection(h,i);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.clearTextSelection();
},selectAll:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.selectAllText();
},getTextSelection:function(){return this.getChildControl(s).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(s).getTextSelectionLength();
},setTextSelection:function(T,U){this.getChildControl(s).setTextSelection(T,U);
},clearTextSelection:function(){this.getChildControl(s).clearTextSelection();
},selectAllText:function(){this.getChildControl(s).selectAllText();
}}});
})();
(function(){var ba="scrollbar-y",Y="scrollbar-x",X="pane",W="auto",V="corner",U="on",T="changeVisibility",S="scroll",R="_computeScrollbars",Q="off",J="scrollY",P="abstract",M="update",H="scrollX",G="mousewheel",L="scrollbarY",K="scrollbarX",N="horizontal",F="scrollarea",O="qx.ui.core.AbstractScrollArea",I="vertical";
qx.Class.define(O,{extend:qx.ui.core.Widget,type:P,construct:function(){arguments.callee.base.call(this);
var f=new qx.ui.layout.Grid();
f.setColumnFlex(0,1);
f.setRowFlex(0,1);
this._setLayout(f);
this.addListener(G,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:F},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[W,U,Q],init:W,themeable:true,apply:R},scrollbarY:{check:[W,U,Q],init:W,themeable:true,apply:R},scrollbar:{group:[K,L]}},members:{_createChildControlImpl:function(h){var i;

switch(h){case X:i=new qx.ui.core.ScrollPane();
i.addListener(M,this._computeScrollbars,this);
i.addListener(H,this._onScrollPaneX,this);
i.addListener(J,this._onScrollPaneY,this);
this._add(i,{row:0,column:0});
break;
case Y:i=new qx.ui.core.ScrollBar(N);
i.setMinWidth(0);
i.exclude();
i.addListener(S,this._onScrollBarX,this);
i.addListener(T,this._onChangeScrollbarXVisibility,this);
this._add(i,{row:1,column:0});
break;
case ba:i=new qx.ui.core.ScrollBar(I);
i.setMinHeight(0);
i.exclude();
i.addListener(S,this._onScrollBarY,this);
i.addListener(T,this._onChangeScrollbarYVisibility,this);
this._add(i,{row:0,column:1});
break;
case V:i=new qx.ui.core.Widget();
i.setWidth(0);
i.setHeight(0);
i.exclude();
this._add(i,{row:1,column:1});
break;
}return i||arguments.callee.base.call(this,h);
},getPaneSize:function(){return this.getChildControl(X).getInnerSize();
},getItemTop:function(q){return this.getChildControl(X).getItemTop(q);
},getItemBottom:function(s){return this.getChildControl(X).getItemBottom(s);
},getItemLeft:function(t){return this.getChildControl(X).getItemLeft(t);
},getItemRight:function(l){return this.getChildControl(X).getItemRight(l);
},scrollToX:function(bb){qx.ui.core.queue.Manager.flush();
this.getChildControl(Y).scrollTo(bb);
},scrollByX:function(j){qx.ui.core.queue.Manager.flush();
this.getChildControl(Y).scrollBy(j);
},getScrollX:function(){var g=this.getChildControl(Y,true);
return g?g.getPosition():0;
},scrollToY:function(r){qx.ui.core.queue.Manager.flush();
this.getChildControl(ba).scrollTo(r);
},scrollByY:function(d){qx.ui.core.queue.Manager.flush();
this.getChildControl(ba).scrollBy(d);
},getScrollY:function(){var k=this.getChildControl(ba,true);
return k?k.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(X).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(X).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var b=this._isChildControlVisible(Y);
var c=this._isChildControlVisible(ba);
var a=(c)?this.getChildControl(ba,true):(b?this.getChildControl(Y,true):null);

if(a){a.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var o=this._isChildControlVisible(Y);
var p=this._isChildControlVisible(ba);

if(!o){this.scrollToX(0);
}o&&p?this._showChildControl(V):this._excludeChildControl(V);
},_onChangeScrollbarYVisibility:function(e){var m=this._isChildControlVisible(Y);
var n=this._isChildControlVisible(ba);

if(!n){this.scrollToY(0);
}m&&n?this._showChildControl(V):this._excludeChildControl(V);
},_computeScrollbars:function(){var A=this.getChildControl(X);
var content=A.getChildren()[0];

if(!content){this._excludeChildControl(Y);
this._excludeChildControl(ba);
return;
}var u=this.getInnerSize();
var z=A.getInnerSize();
var x=A.getScrollSize();
if(!z||!x){return;
}var C=this.getScrollbarX();
var D=this.getScrollbarY();

if(C===W&&D===W){var y=x.width>u.width;
var E=x.height>u.height;
if((y||E)&&!(y&&E)){if(y){E=x.height>z.height;
}else if(E){y=x.width>z.width;
}}}else{var y=C===U;
var E=D===U;
if(x.width>(y?z.width:u.width)&&C===W){y=true;
}
if(x.height>(y?z.height:u.height)&&D===W){E=true;
}}if(y){var w=this.getChildControl(Y);
w.show();
var B=Math.max(0,x.width-z.width-1);
w.setMaximum(B);
w.setKnobFactor(B>0?z.width/x.width:0);
}else{this._excludeChildControl(Y);
}
if(E){var v=this.getChildControl(ba);
v.show();
var B=Math.max(0,x.height-z.height-1);
v.setMaximum(B);
v.setKnobFactor(B>0?z.height/x.height:0);
}else{this._excludeChildControl(ba);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var b="qx.ui.form.IModelSelection";
qx.Interface.define(b,{members:{setModelSelection:function(a){},getModelSelection:function(){}}});
})();
(function(){var r="Use 'setSelection' instead!",q="Boolean",p="changeSelection",o="single",n="Use 'getSelection' instead!",m="mousedown",l="one",k="qx.event.type.Data",j="_applyDragSelection",h="mousemove",E="addItem",D="multi",C="_applyQuickSelection",B="mouseover",A="keypress",z="_applySelectionMode",y="additive",x="__ke",w="mouseup",v="Use 'resetSelection' instead!",t="losecapture",u="removeItem",s="qx.ui.core.MMultiSelectionHandling";
qx.Mixin.define(s,{construct:function(){var H=this.SELECTION_MANAGER;
var G=this.__ke=new H(this);
this.addListener(m,G.handleMouseDown,G);
this.addListener(w,G.handleMouseUp,G);
this.addListener(B,G.handleMouseOver,G);
this.addListener(h,G.handleMouseMove,G);
this.addListener(t,G.handleLoseCapture,G);
this.addListener(A,G.handleKeyPress,G);
this.addListener(E,G.handleAddItem,G);
this.addListener(u,G.handleRemoveItem,G);
G.addListener(p,this._onSelectionChange,this);
},events:{"changeSelection":k},properties:{selectionMode:{check:[o,D,y,l],init:o,apply:z},dragSelection:{check:q,init:false,apply:j},quickSelection:{check:q,init:false,apply:C}},members:{__ke:null,selectAll:function(){this.__ke.selectAll();
},select:function(N){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.setSelection([N]);
},setSelected:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.setSelection([Q]);
},isSelected:function(M){if(!qx.ui.core.Widget.contains(this,M)){throw new Error("Could not test if "+M+" is selected, because it is not a child element!");
}return this.__ke.isItemSelected(M);
},addToSelection:function(J){if(!qx.ui.core.Widget.contains(this,J)){throw new Error("Could not add + "+J+" to selection, because it is not a child element!");
}this.__ke.addItem(J);
},removeFromSelection:function(F){if(!qx.ui.core.Widget.contains(this,F)){throw new Error("Could not remove "+F+" from selection, because it is not a child element!");
}this.__ke.removeItem(F);
},selectRange:function(c,d){this.__ke.selectItemRange(c,d);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,v);
this.resetSelection();
},resetSelection:function(){this.__ke.clearSelection();
},replaceSelection:function(P){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.setSelection(P);
},setSelection:function(I){for(var i=0;i<I.length;i++){if(!qx.ui.core.Widget.contains(this,I[i])){throw new Error("Could not select "+I[i]+", because it is not a child element!");
}}
if(I.length===0){this.resetSelection();
}else{this.__ke.replaceSelection(I);
}},getSelectedItem:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
var O=this.getSelection();

if(O.length>0){return O[0];
}else{return null;
}},getSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
var R=this.getSelection();

if(R.length>0){return R[0];
}else{return null;
}},getSelection:function(){return this.__ke.getSelection();
},getSortedSelection:function(){return this.__ke.getSortedSelection();
},isSelectionEmpty:function(){return this.__ke.isSelectionEmpty();
},getSelectionContext:function(){return this.__ke.getSelectionContext();
},_getManager:function(){return this.__ke;
},getSelectables:function(){return this.__ke.getSelectables();
},invertSelection:function(){this.__ke.invertSelection();
},_applySelectionMode:function(f,g){this.__ke.setMode(f);
},_applyDragSelection:function(K,L){this.__ke.setDrag(K);
},_applyQuickSelection:function(a,b){this.__ke.setQuick(a);
},_onSelectionChange:function(e){this.fireDataEvent(p,e.getData());
}},destruct:function(){this._disposeObjects(x);
}});
})();
(function(){var a="qx.ui.form.MModelSelection";
qx.Mixin.define(a,{members:{getModelSelection:function(){var d=this.getSelection();
var b=[];

for(var i=0;i<d.length;i++){var c=d[i].getModel();

if(c!=null){b.push(c);
}}return b;
},setModelSelection:function(e){if(!e){this.resetSelection();
return;
}{};
var f=this.getSelectables();
var g=[];

for(var i=0;i<e.length;i++){var h=e[i];

for(var j=0;j<f.length;j++){var k=f[j];

if(h===k.getModel()){g.push(k);
break;
}}}this.setSelection(g);
}}});
})();
(function(){var cd="one",cc="single",cb="selected",ca="additive",bY="multi",bX="PageUp",bW="under",bV="Left",bU="lead",bT="Down",cF="Up",cE="Boolean",cD="PageDown",cC="anchor",cB="End",cA="Home",cz="Right",cy="right",cx="click",cw="above",ck="left",cl="Escape",ci="__kf",cj="A",cg="Space",ch="_applyMode",ce="interval",cf="__ky",cm="changeSelection",cn="qx.event.type.Data",cq="quick",cp="__ki",cs="key",cr="__kw",cu="abstract",ct="__kx",co="drag",cv="qx.ui.core.selection.Abstract";
qx.Class.define(cv,{type:cu,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kf={};
},events:{"changeSelection":cn},properties:{mode:{check:[cc,bY,ca,cd],init:cc,apply:ch},drag:{check:cE,init:false},quick:{check:cE,init:false}},members:{__kg:0,__kh:0,__ki:null,__kj:null,__kk:null,__kl:null,__km:null,__kn:null,__ko:null,__kp:null,__kq:null,__kr:null,__ks:null,__kt:null,__ku:null,__kv:null,__kw:null,__kf:null,__kx:null,__ky:null,getSelectionContext:function(){return this.__kv;
},selectAll:function(){var bu=this.getMode();

if(bu==cc||bu==cd){throw new Error("Can not select all items in selection mode: "+bu);
}this._selectAllItems();
this._fireChange();
},selectItem:function(f){this._setSelectedItem(f);
var g=this.getMode();

if(g!==cc&&g!==cd){this._setLeadItem(f);
this._setAnchorItem(f);
}this._scrollItemIntoView(f);
this._fireChange();
},addItem:function(bv){var bw=this.getMode();

if(bw===cc||bw===cd){this._setSelectedItem(bv);
}else{if(!this._getAnchorItem()){this._setAnchorItem(bv);
}this._setLeadItem(bv);
this._addToSelection(bv);
}this._scrollItemIntoView(bv);
this._fireChange();
},removeItem:function(bo){this._removeFromSelection(bo);

if(this.getMode()===cd&&this.isSelectionEmpty()){var bp=this._getFirstSelectable();

if(bp){this.addItem(bp);
}if(bp==bo){return;
}}
if(this._getLeadItem()==bo){this._setLeadItem(null);
}
if(this._getAnchorItem()==bo){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(h,j){var k=this.getMode();

if(k==cc||k==cd){throw new Error("Can not select multiple items in selection mode: "+k);
}this._selectItemRange(h,j);
this._setAnchorItem(h);
this._setLeadItem(j);
this._scrollItemIntoView(j);
this._fireChange();
},clearSelection:function(){if(this.getMode()==cd){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bq){var br=this.getMode();

if(br==cd||br===cc){if(bq.length>1){throw new Error("Could not select more than one items in mode: "+br+"!");
}
if(bq.length==1){this.selectItem(bq[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bq);
}},getSelectedItem:function(){var bh=this.getMode();

if(bh===cc||bh===cd){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__kf);
},getSortedSelection:function(){var bd=this.getSelectables();
var bc=qx.lang.Object.getValues(this.__kf);
bc.sort(function(a,b){return bd.indexOf(a)-bd.indexOf(b);
});
return bc;
},isItemSelected:function(bs){var bt=this._selectableToHashCode(bs);
return this.__kf[bt]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__kf);
},invertSelection:function(){var by=this.getMode();

if(by===cc||by===cd){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bx=this.getSelectables();

for(var i=0;i<bx.length;i++){this._toggleInSelection(bx[i]);
}this._fireChange();
},_setLeadItem:function(bF){var bG=this.__kw;

if(bG!==null){this._styleSelectable(bG,bU,false);
}
if(bF!==null){this._styleSelectable(bF,bU,true);
}this.__kw=bF;
},_getLeadItem:function(){return this.__kw!==null?this.__kw:null;
},_setAnchorItem:function(bR){var bS=this.__kx;

if(bS){this._styleSelectable(bS,cC,false);
}
if(bR){this._styleSelectable(bR,cC,true);
}this.__kx=bR;
},_getAnchorItem:function(){return this.__kx!==null?this.__kx:null;
},_isSelectable:function(Y){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var B=event.getTarget();
return this._isSelectable(B)?B:null;
},_selectableToHashCode:function(J){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bC,bD,bE){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(da){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bA){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(ba,bb){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bz){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(U,V){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(H,I){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(m,n){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(K,L){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(K===cd){var M=this._getFirstSelectable();

if(M){this._setSelectedItem(M);
this._scrollItemIntoView(M);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var X=this.getMode();

if(X!==cd&&X!==cc){return;
}var W=this._getSelectableFromMouseEvent(event);

if(W===null){return;
}this._setSelectedItem(W);
this._fireChange(cq);
},handleMouseDown:function(event){var bj=this._getSelectableFromMouseEvent(event);

if(bj===null){return;
}var bl=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bi=event.isShiftPressed();
if(this.isItemSelected(bj)&&!bi&&!bl&&!this.getDrag()){this.__ky=bj;
return;
}else{this.__ky=null;
}this._scrollItemIntoView(bj);
switch(this.getMode()){case cc:case cd:this._setSelectedItem(bj);
break;
case ca:this._setLeadItem(bj);
this._setAnchorItem(bj);
this._toggleInSelection(bj);
break;
case bY:this._setLeadItem(bj);
if(bi){var bk=this._getAnchorItem();

if(bk===null){bk=this._getFirstSelectable();
this._setAnchorItem(bk);
}this._selectItemRange(bk,bj,bl);
}else if(bl){this._setAnchorItem(bj);
this._toggleInSelection(bj);
}else{this._setAnchorItem(bj);
this._setSelectedItem(bj);
}break;
}var bm=this.getMode();

if(this.getDrag()&&bm!==cc&&bm!==cd&&!bi&&!bl){this.__km=this._getLocation();
this.__kj=this._getScroll();
this.__kn=event.getDocumentLeft()+this.__kj.left;
this.__ko=event.getDocumentTop()+this.__kj.top;
this.__kp=true;
this._capture();
}this._fireChange(cx);
},handleMouseUp:function(event){var Q=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var N=event.isShiftPressed();

if(!Q&&!N&&this.__ky){var O=this._getSelectableFromMouseEvent(event);

if(O===null||!this.isItemSelected(O)){return;
}var P=this.getMode();

if(P===ca){this._removeFromSelection(O);
}else{this._setSelectedItem(O);

if(this.getMode()===bY){this._setLeadItem(O);
this._setAnchorItem(O);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__kp){return;
}this.__kq=event.getDocumentLeft();
this.__kr=event.getDocumentTop();
var d=this.__kq+this.__kj.left;

if(d>this.__kn){this.__ks=1;
}else if(d<this.__kn){this.__ks=-1;
}else{this.__ks=0;
}var c=this.__kr+this.__kj.top;

if(c>this.__ko){this.__kt=1;
}else if(c<this.__ko){this.__kt=-1;
}else{this.__kt=0;
}var location=this.__km;

if(this.__kq<location.left){this.__kg=this.__kq-location.left;
}else if(this.__kq>location.right){this.__kg=this.__kq-location.right;
}else{this.__kg=0;
}
if(this.__kr<location.top){this.__kh=this.__kr-location.top;
}else if(this.__kr>location.bottom){this.__kh=this.__kr-location.bottom;
}else{this.__kh=0;
}if(!this.__ki){this.__ki=new qx.event.Timer(100);
this.__ki.addListener(ce,this._onInterval,this);
}this.__ki.start();
this._autoSelect();
},handleAddItem:function(e){var bQ=e.getData();

if(this.getMode()===cd&&this.isSelectionEmpty()){this.addItem(bQ);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__kp){return;
}if(this.__ku){this._fireChange(cx);
}delete this.__kp;
delete this.__kk;
delete this.__kl;
this._releaseCapture();
if(this.__ki){this.__ki.stop();
}},_onInterval:function(e){this._scrollBy(this.__kg,this.__kh);
this.__kj=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cV=this._getDimension();
var cO=Math.max(0,Math.min(this.__kq-this.__km.left,cV.width))+this.__kj.left;
var cN=Math.max(0,Math.min(this.__kr-this.__km.top,cV.height))+this.__kj.top;
if(this.__kk===cO&&this.__kl===cN){return;
}this.__kk=cO;
this.__kl=cN;
var cX=this._getAnchorItem();
var cQ=cX;
var cT=this.__ks;
var cW,cP;

while(cT!==0){cW=cT>0?this._getRelatedSelectable(cQ,cy):this._getRelatedSelectable(cQ,ck);
if(cW!==null){cP=this._getSelectableLocationX(cW);
if((cT>0&&cP.left<=cO)||(cT<0&&cP.right>=cO)){cQ=cW;
continue;
}}break;
}var cU=this.__kt;
var cS,cR;

while(cU!==0){cS=cU>0?this._getRelatedSelectable(cQ,bW):this._getRelatedSelectable(cQ,cw);
if(cS!==null){cR=this._getSelectableLocationY(cS);
if((cU>0&&cR.top<=cN)||(cU<0&&cR.bottom>=cN)){cQ=cS;
continue;
}}break;
}var cY=this.getMode();

if(cY===bY){this._selectItemRange(cX,cQ);
}else if(cY===ca){if(this.isItemSelected(cX)){this._selectItemRange(cX,cQ,true);
}else{this._deselectItemRange(cX,cQ);
}this._setAnchorItem(cQ);
}this._fireChange(co);
},__kz:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var v,u;
var x=event.getKeyIdentifier();
var w=this.getMode();
var r=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var s=event.isShiftPressed();
var t=false;

if(x===cj&&r){if(w!==cc&&w!==cd){this._selectAllItems();
t=true;
}}else if(x===cl){if(w!==cc&&w!==cd){this._clearSelection();
t=true;
}}else if(x===cg){var q=this._getLeadItem();

if(q&&!s){if(r||w===ca){this._toggleInSelection(q);
}else{this._setSelectedItem(q);
}t=true;
}}else if(this.__kz[x]){t=true;

if(w===cc||w==cd){v=this._getSelectedItem();
}else{v=this._getLeadItem();
}
if(v!==null){switch(x){case cA:u=this._getFirstSelectable();
break;
case cB:u=this._getLastSelectable();
break;
case cF:u=this._getRelatedSelectable(v,cw);
break;
case bT:u=this._getRelatedSelectable(v,bW);
break;
case bV:u=this._getRelatedSelectable(v,ck);
break;
case cz:u=this._getRelatedSelectable(v,cy);
break;
case bX:u=this._getPage(v,true);
break;
case cD:u=this._getPage(v,false);
break;
}}else{switch(x){case cA:case bT:case cz:case cD:u=this._getFirstSelectable();
break;
case cB:case cF:case bV:case bX:u=this._getLastSelectable();
break;
}}if(u!==null){switch(w){case cc:case cd:this._setSelectedItem(u);
break;
case ca:this._setLeadItem(u);
break;
case bY:if(s){var y=this._getAnchorItem();

if(y===null){this._setAnchorItem(y=this._getFirstSelectable());
}this._setLeadItem(u);
this._selectItemRange(y,u,r);
}else{this._setAnchorItem(u);
this._setLeadItem(u);

if(!r){this._setSelectedItem(u);
}}break;
}this._scrollItemIntoView(u);
}}
if(t){event.stop();
this._fireChange(cs);
}},_selectAllItems:function(){var bB=this.getSelectables();

for(var i=0,l=bB.length;i<l;i++){this._addToSelection(bB[i]);
}},_clearSelection:function(){var bO=this.__kf;

for(var bP in bO){this._removeFromSelection(bO[bP]);
}this.__kf={};
},_selectItemRange:function(cG,cH,cI){var cL=this._getSelectableRange(cG,cH);
if(!cI){var cK=this.__kf;
var cM=this.__kA(cL);

for(var cJ in cK){if(!cM[cJ]){this._removeFromSelection(cK[cJ]);
}}}for(var i=0,l=cL.length;i<l;i++){this._addToSelection(cL[i]);
}},_deselectItemRange:function(R,S){var T=this._getSelectableRange(R,S);

for(var i=0,l=T.length;i<l;i++){this._removeFromSelection(T[i]);
}},__kA:function(be){var bg={};
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
bg[this._selectableToHashCode(bf)]=bf;
}return bg;
},_getSelectedItem:function(){for(var bn in this.__kf){return this.__kf[bn];
}return null;
},_setSelectedItem:function(E){if(this._isSelectable(E)){var F=this.__kf;
var G=this._selectableToHashCode(E);

if(!F[G]||qx.lang.Object.hasMinLength(F,2)){this._clearSelection();
this._addToSelection(E);
}}},_addToSelection:function(o){var p=this._selectableToHashCode(o);

if(!this.__kf[p]&&this._isSelectable(o)){this.__kf[p]=o;
this._styleSelectable(o,cb,true);
this.__ku=true;
}},_toggleInSelection:function(z){var A=this._selectableToHashCode(z);

if(!this.__kf[A]){this.__kf[A]=z;
this._styleSelectable(z,cb,true);
}else{delete this.__kf[A];
this._styleSelectable(z,cb,false);
}this.__ku=true;
},_removeFromSelection:function(C){var D=this._selectableToHashCode(C);

if(this.__kf[D]!=null){delete this.__kf[D];
this._styleSelectable(C,cb,false);
this.__ku=true;
}},_replaceMultiSelection:function(bH){var bK=false;
var bN,bM;
var bI={};

for(var i=0,l=bH.length;i<l;i++){bN=bH[i];

if(this._isSelectable(bN)){bM=this._selectableToHashCode(bN);
bI[bM]=bN;
}}var bJ=bN;
var bL=this.__kf;

for(var bM in bL){if(bI[bM]){delete bI[bM];
}else{bN=bL[bM];
delete bL[bM];
this._styleSelectable(bN,cb,false);
bK=true;
}}for(var bM in bI){bN=bL[bM]=bI[bM];
this._styleSelectable(bN,cb,true);
bK=true;
}if(!bK){return false;
}this._scrollItemIntoView(bJ);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__ku=true;
this._fireChange();
},_fireChange:function(db){if(this.__ku){this.__kv=db||null;
this.fireDataEvent(cm,this.getSelection());
delete this.__ku;
}}},destruct:function(){this._disposeObjects(cp);
this._disposeFields(ci,cf,ct,cr);
}});
})();
(function(){var u="vertical",t="under",s="__kB",r="above",q="qx.ui.core.selection.Widget",p="left",o="right";
qx.Class.define(q,{extend:qx.ui.core.selection.Abstract,construct:function(n){arguments.callee.base.call(this);
this.__kB=n;
},members:{__kB:null,_isSelectable:function(P){return P.isEnabled()&&P.isVisible()&&P.getLayoutParent()===this.__kB;
},_selectableToHashCode:function(c){return c.$$hash;
},_styleSelectable:function(C,D,E){E?C.addState(D):C.removeState(D);
},_capture:function(){this.__kB.capture();
},_releaseCapture:function(){this.__kB.releaseCapture();
},_getWidget:function(){return this.__kB;
},_getLocation:function(){var B=this.__kB.getContentElement().getDomElement();
return B?qx.bom.element.Location.get(B):null;
},_getDimension:function(){return this.__kB.getInnerSize();
},_getSelectableLocationX:function(a){var b=a.getBounds();

if(b){return {left:b.left,right:b.left+b.width};
}},_getSelectableLocationY:function(N){var O=N.getBounds();

if(O){return {top:O.top,bottom:O.top+O.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(F,G){},_scrollItemIntoView:function(v){this.__kB.scrollChildIntoView(v);
},getSelectables:function(){var y=this.__kB.getChildren();
var z=[];
var x;

for(var i=0,l=y.length;i<l;i++){x=y[i];

if(x.isEnabled()&&x.isVisible()){z.push(x);
}}return z;
},_getSelectableRange:function(H,I){if(H===I){return [H];
}var M=this.__kB.getChildren();
var J=[];
var L=false;
var K;

for(var i=0,l=M.length;i<l;i++){K=M[i];

if(K===H||K===I){if(L){J.push(K);
break;
}else{L=true;
}}
if(L&&K.isEnabled()&&K.isVisible()){J.push(K);
}}return J;
},_getFirstSelectable:function(){var A=this.__kB.getChildren();

for(var i=0,l=A.length;i<l;i++){if(A[i].isEnabled()&&A[i].isVisible()){return A[i];
}}return null;
},_getLastSelectable:function(){var w=this.__kB.getChildren();

for(var i=w.length-1;i>0;i--){if(w[i].isEnabled()&&w[i].isVisible()){return w[i];
}}return null;
},_getRelatedSelectable:function(f,g){var k=this.__kB.getOrientation()===u;
var j=this.__kB.getChildren();
var h=j.indexOf(f);
var m;

if((k&&g===r)||(!k&&g===p)){for(var i=h-1;i>=0;i--){m=j[i];

if(m.isEnabled()&&m.isVisible()){return m;
}}}else if((k&&g===t)||(!k&&g===o)){for(var i=h+1;i<j.length;i++){m=j[i];

if(m.isEnabled()&&m.isVisible()){return m;
}}}return null;
},_getPage:function(d,e){if(e){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this._disposeFields(s);
}});
})();
(function(){var s="qx.ui.core.selection.ScrollArea";
qx.Class.define(s,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(b){return (b.isEnabled()&&b.isVisible()&&b.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var a=this._getWidget();
return {left:a.getScrollX(),top:a.getScrollY()};
},_scrollBy:function(p,q){var r=this._getWidget();
r.scrollByX(p);
r.scrollByY(q);
},_getPage:function(c,d){var h=this.getSelectables();
var length=h.length;
var l=h.indexOf(c);
if(l===-1){throw new Error("Invalid lead item: "+c);
}var e=this._getWidget();
var n=e.getScrollY();
var innerHeight=e.getInnerSize().height;
var top,g,m;

if(d){var k=n;
var i=l;
while(1){for(;i>=0;i--){top=e.getItemTop(h[i]);
if(top<k){m=i+1;
break;
}}if(m==null){var o=this._getFirstSelectable();
return o==c?null:o;
}if(m>=l){k-=innerHeight+n-e.getItemBottom(c);
m=null;
continue;
}return h[m];
}}else{var j=innerHeight+n;
var i=l;
while(1){for(;i<length;i++){g=e.getItemBottom(h[i]);
if(g>j){m=i-1;
break;
}}if(m==null){var f=this._getLastSelectable();
return f==c?null:f;
}if(m<=l){j+=e.getItemTop(c)-n;
m=null;
continue;
}return h[m];
}}}}});
})();
(function(){var J="changeValue",I="qx.event.type.Data",H="horizontal",G="vertical",F="",E=",",D="qx.ui.form.List",C="Boolean",B="one",A="action",bd="addChildWidget",bc="__kC",bb="_applySpacing",ba="Please use setModelSelection instead.",Y="list",X="Please use the changeSelection event instead.",W="keyinput",V="Integer",U="changeSelection",T="addItem",Q="removeChildWidget",R="_applyOrientation",O="multi",P="single",M="keypress",N="Please use getModelSelection instead.",K="Enter",L="pane",S="removeItem";
qx.Class.define(D,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.form.IFormElement,qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MFormElement,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(be){arguments.callee.base.call(this);
this.__kC=new qx.ui.container.Composite();
this.__kC.addListener(bd,this._onAddChild,this);
this.__kC.addListener(Q,this._onRemoveChild,this);
this.getChildControl(L).add(this.__kC);
if(be){this.setOrientation(H);
}else{this.initOrientation();
}this.addListener(M,this._onKeyPress);
this.addListener(W,this._onKeyInput);
this.addListener(U,this._onChangeSelection);
this.__kD=F;
},events:{addItem:I,removeItem:I,changeValue:I},properties:{appearance:{refine:true,init:Y},focusable:{refine:true,init:true},orientation:{check:[H,G],init:G,apply:R},spacing:{check:V,init:0,apply:bb,themeable:true},enableInlineFind:{check:C,init:true}},members:{__kD:null,__kE:null,__kC:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__kC;
},_onAddChild:function(e){this.fireDataEvent(T,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(S,e.getData());
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,N);
var x=this.getSelection();
var y=[];
var z;

for(var i=0,l=x.length;i<l;i++){z=x[i].getValue();
if(z==null){z=x[i].getLabel();
}y.push(z);
}return y.join(E);
},setValue:function(k){qx.log.Logger.deprecatedMethodWarning(arguments.callee,ba);
var o=[k];

if(this.getSelectionMode()===O){o=k.split(E);
}var n=[];
var m;

for(var i=0,l=o.length;i<l;i++){m=this.findItem(o[i]);

if(m){n.push(m);
}}this.setSelection(n);
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(p,q){var r=p===H;
var s=r?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__kC;
content.setLayout(s);
content.setAllowGrowX(!r);
content.setAllowGrowY(r);
this._applySpacing(this.getSpacing());
},_applySpacing:function(h,j){this.__kC.getLayout().setSpacing(h);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==K&&!e.isAltPressed()){var t=this.getSelection();

for(var i=0;i<t.length;i++){t[i].fireEvent(A);
}return true;
}return false;
},_onChangeSelection:function(){if(this.hasListener(J)){this.fireDataEvent(J,this.getValue());
}},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var bf=this.getSelectionMode();

if(!(bf===P||bf===B)){return;
}if(((new Date).valueOf()-this.__kE)>1000){this.__kD=F;
}this.__kD+=e.getChar();
var bg=this.findItemByLabelFuzzy(this.__kD);
if(bg){this.setSelection([bg]);
}this.__kE=(new Date).valueOf();
},findItemByLabelFuzzy:function(d){d=d.toLowerCase();
var f=this.getChildren();
for(var i=0,l=f.length;i<l;i++){var g=f[i].getLabel();
if(g&&g.toLowerCase().indexOf(d)==0){return f[i];
}}return null;
},findItem:function(a){a=a.toLowerCase();
var b=this.getChildren();
var c;
for(var i=0,l=b.length;i<l;i++){c=b[i];

if((c.getLabel()!=null)&&(c.getLabel().toLowerCase()==a)){return c;
}}return null;
},addListener:function(u,v,self,w){if(u==J){qx.log.Logger.deprecatedEventWarning(arguments.callee,J,X);
}return arguments.callee.base.call(this,u,v,self,w);
}},destruct:function(){this._disposeObjects(bc);
}});
})();
(function(){var M="resize",L="scrollY",K="Please use getChildren instead.",J="update",I="scrollX",H="_applyScrollX",G="_applyScrollY",F="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",E="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",D="appear",A="qx.ui.core.ScrollPane",C="qx.event.type.Event",B="scroll";
qx.Class.define(A,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(M,this._onUpdate);
var w=this.getContentElement();
w.addListener(B,this._onScroll,this);
w.addListener(D,this._onAppear,this);
},events:{update:C},properties:{scrollX:{check:E,apply:H,event:I,init:0},scrollY:{check:F,apply:G,event:L,init:0}},members:{add:function(k){var l=this._getChildren()[0];

if(l){this._remove(l);
l.removeListener(M,this._onUpdate,this);
}
if(k){this._add(k);
k.addListener(M,this._onUpdate,this);
}},remove:function(a){if(a){this._remove(a);
a.removeListener(M,this._onUpdate,this);
}},getChild:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,K);
return this._getChildren()[0]||null;
},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(J);
},_onScroll:function(e){var m=this.getContentElement();
this.setScrollX(m.getScrollX());
this.setScrollY(m.getScrollY());
},_onAppear:function(e){var u=this.getContentElement();
var r=this.getScrollX();
var s=u.getScrollX();

if(r!=s){u.scrollToX(r);
}var v=this.getScrollY();
var t=u.getScrollY();

if(v!=t){u.scrollToY(v);
}},getItemTop:function(N){var top=0;

do{top+=N.getBounds().top;
N=N.getLayoutParent();
}while(N&&N!==this);
return top;
},getItemBottom:function(O){return this.getItemTop(O)+O.getBounds().height;
},getItemLeft:function(d){var f=0;
var parent;

do{f+=d.getBounds().left;
parent=d.getLayoutParent();

if(parent){f+=parent.getInsets().left;
}d=parent;
}while(d&&d!==this);
return f;
},getItemRight:function(z){return this.getItemLeft(z)+z.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var o=this.getInnerSize();
var n=this.getScrollSize();

if(o&&n){return Math.max(0,n.width-o.width);
}return 0;
},getScrollMaxY:function(){var c=this.getInnerSize();
var b=this.getScrollSize();

if(c&&b){return Math.max(0,b.height-c.height);
}return 0;
},scrollToX:function(p){var q=this.getScrollMaxX();

if(p<0){p=0;
}else if(p>q){p=q;
}this.setScrollX(p);
},scrollToY:function(i){var j=this.getScrollMaxY();

if(i<0){i=0;
}else if(i>j){i=j;
}this.setScrollY(i);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(g){this.getContentElement().scrollToX(g);
},_applyScrollY:function(h){this.getContentElement().scrollToY(h);
}}});
})();
(function(){var x="slider",w="horizontal",v="button-begin",u="button-end",t="vertical",s="Integer",r="execute",q="right",p="left",o="down",K="up",J="PositiveNumber",I="changeValue",H="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",G="_applyKnobFactor",F="_applyOrientation",E="qx.ui.core.ScrollBar",D="_applyPageStep",C="PositiveInteger",B="scroll",z="_applyPosition",A="scrollbar",y="_applyMaximum";
qx.Class.define(E,{extend:qx.ui.core.Widget,construct:function(a){arguments.callee.base.call(this);
this._createChildControl(v);
this._createChildControl(x);
this._createChildControl(u);
if(a!=null){this.setOrientation(a);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:A},orientation:{check:[w,t],init:w,apply:F},maximum:{check:C,apply:y,init:100},position:{check:H,init:0,apply:z,event:B},singleStep:{check:s,init:20},pageStep:{check:s,init:10,apply:D},knobFactor:{check:J,apply:G,nullable:true}},members:{_createChildControlImpl:function(h){var i;

switch(h){case x:i=new qx.ui.core.ScrollSlider;
i.setPageStep(100);
i.setFocusable(false);
i.addListener(I,this._onChangeSliderValue,this);
this._add(i,{flex:1});
break;
case v:i=new qx.ui.form.RepeatButton;
i.setFocusable(false);
i.addListener(r,this._onExecuteBegin,this);
this._add(i);
break;
case u:i=new qx.ui.form.RepeatButton;
i.setFocusable(false);
i.addListener(r,this._onExecuteEnd,this);
this._add(i);
break;
}return i||arguments.callee.base.call(this,h);
},_applyMaximum:function(j){this.getChildControl(x).setMaximum(j);
},_applyPosition:function(n){this.getChildControl(x).setValue(n);
},_applyKnobFactor:function(c){this.getChildControl(x).setKnobFactor(c);
},_applyPageStep:function(b){this.getChildControl(x).setPageStep(b);
},_applyOrientation:function(k,l){var m=this._getLayout();

if(m){m.dispose();
}if(k===w){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(t,w);
this.getChildControl(v).replaceState(K,p);
this.getChildControl(u).replaceState(o,q);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(w,t);
this.getChildControl(v).replaceState(p,K);
this.getChildControl(u).replaceState(q,o);
}this.getChildControl(x).setOrientation(k);
},scrollTo:function(L){this.getChildControl(x).slideTo(L);
},scrollBy:function(d){this.getChildControl(x).slideBy(d);
},scrollBySteps:function(f){var g=this.getSingleStep();
this.getChildControl(x).slideBy(f*g);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
}}});
})();
(function(){var c="qx.ui.form.IRange";
qx.Interface.define(c,{members:{setMinimum:function(a){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(b){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(d){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var R="knob",Q="horizontal",P="vertical",O="Integer",N="px",M="mousemove",L="resize",K="left",J="top",I="mouseup",bw="slider",bv="PageUp",bu="mousedown",bt="height",bs="changeValue",br="Left",bq="Down",bp="Up",bo="dblclick",bn="qx.ui.form.Slider",Y="PageDown",ba="mousewheel",W="interval",X="_applyValue",U="_applyKnobFactor",V="End",S="width",T="_applyOrientation",bb="Home",bc="floor",bf="_applyMinimum",be="click",bh="Right",bg="keypress",bj="ceil",bi="losecapture",bd="contextmenu",bm="_applyMaximum",bl="Number",bk="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bn,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IFormElement,qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MFormElement,qx.ui.form.MForm],construct:function(bx){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bg,this._onKeyPress);
this.addListener(ba,this._onMouseWheel);
this.addListener(bu,this._onMouseDown);
this.addListener(I,this._onMouseUp);
this.addListener(bi,this._onMouseUp);
this.addListener(L,this._onUpdate);
this.addListener(bd,this._onStopEvent);
this.addListener(be,this._onStopEvent);
this.addListener(bo,this._onStopEvent);
if(bx!=null){this.setOrientation(bx);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bw},focusable:{refine:true,init:true},orientation:{check:[Q,P],init:Q,apply:T},value:{check:bk,init:0,apply:X,event:bs,nullable:true},minimum:{check:O,init:0,apply:bf},maximum:{check:O,init:100,apply:bm},singleStep:{check:O,init:1},pageStep:{check:O,init:10},knobFactor:{check:bl,apply:U,nullable:true}},members:{__kF:null,__kG:null,__kH:null,__kI:null,__kJ:null,__kK:null,__kL:null,__kM:null,__kN:null,_forwardStates:{invalid:true},_createChildControlImpl:function(y){var z;

switch(y){case R:z=new qx.ui.core.Widget();
z.addListener(L,this._onUpdate,this);
this._add(z);
break;
}return z||arguments.callee.base.call(this,y);
},_onMouseWheel:function(e){var l=e.getWheelDelta()>0?1:-1;
this.slideBy(l*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var H=this.getOrientation()===Q;
var G=H?br:bp;
var forward=H?bh:bq;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case G:this.slideBack();
break;
case Y:this.slidePageForward();
break;
case bv:this.slidePageBack();
break;
case bb:this.slideToBegin();
break;
case V:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__kI){return;
}var c=this.__kP;
var a=this.getChildControl(R);
var b=c?K:J;
var f=c?e.getDocumentLeft():e.getDocumentTop();
var g=this.__kF=qx.bom.element.Location.get(this.getContentElement().getDomElement())[b];
var d=this.__kG=qx.bom.element.Location.get(a.getContainerElement().getDomElement())[b];

if(e.getTarget()===a){this.__kI=true;
this.__kJ=f+g-d;
}else{this.__kK=true;
this.__kL=f<=d?-1:1;
this.__kQ(e);
this._onInterval();
if(!this.__kN){this.__kN=new qx.event.Timer(100);
this.__kN.addListener(W,this._onInterval,this);
}this.__kN.start();
}this.addListener(M,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__kI){this.releaseCapture();
delete this.__kI;
delete this.__kJ;
}else if(this.__kK){this.__kN.stop();
this.releaseCapture();
delete this.__kK;
delete this.__kL;
delete this.__kM;
}this.removeListener(M,this._onMouseMove);
if(e.getType()===I){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__kI){var x=this.__kP?e.getDocumentLeft():e.getDocumentTop();
var w=x-this.__kJ;
this.slideTo(this._positionToValue(w));
}else if(this.__kK){this.__kQ(e);
}e.stopPropagation();
},_onInterval:function(e){var E=this.getValue()+(this.__kL*this.getPageStep());
if(E<this.getMinimum()){E=this.getMinimum();
}else if(E>this.getMaximum()){E=this.getMaximum();
}var F=this.__kL==-1;

if((F&&E<=this.__kM)||(!F&&E>=this.__kM)){E=this.__kM;
}this.slideTo(E);
},_onUpdate:function(e){var bE=this.getInnerSize();
var bF=this.getChildControl(R).getBounds();
var bD=this.__kP?S:bt;
this._updateKnobSize();
this.__kO=bE[bD]-bF[bD];
this.__kH=bF[bD];
this._updateKnobPosition();
},__kP:false,__kO:0,__kQ:function(e){var bG=this.__kP;
var bN=bG?e.getDocumentLeft():e.getDocumentTop();
var bP=this.__kF;
var bH=this.__kG;
var bR=this.__kH;
var bO=bN-bP;

if(bN>=bH){bO-=bR;
}var bL=this._positionToValue(bO);
var bI=this.getMinimum();
var bJ=this.getMaximum();

if(bL<bI){bL=bI;
}else if(bL>bJ){bL=bJ;
}else{var bM=this.getValue();
var bK=this.getPageStep();
var bQ=this.__kL<0?bc:bj;
bL=bM+(Math[bQ]((bL-bM)/bK)*bK);
}if(this.__kM==null||(this.__kL==-1&&bL<=this.__kM)||(this.__kL==1&&bL>=this.__kM)){this.__kM=bL;
}},_positionToValue:function(h){var i=this.__kO;
if(i==null||i==0){return 0;
}var k=h/i;

if(k<0){k=0;
}else if(k>1){k=1;
}var j=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(j*k);
},_valueToPosition:function(m){var n=this.__kO;

if(n==null){return 0;
}var o=this.getMaximum()-this.getMinimum();
if(o==0){return 0;
}var m=m-this.getMinimum();
var p=m/o;

if(p<0){p=0;
}else if(p>1){p=1;
}return Math.round(n*p);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(u){var v=this.getChildControl(R).getContainerElement();

if(this.__kP){v.setStyle(K,u+N,true);
}else{v.setStyle(J,u+N,true);
}},_updateKnobSize:function(){var bT=this.getKnobFactor();

if(bT==null){return;
}var bS=this.getInnerSize();

if(bS==null){return;
}if(this.__kP){this.getChildControl(R).setWidth(Math.round(bT*bS.width));
}else{this.getChildControl(R).setHeight(Math.round(bT*bS.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(A){this.slideTo(this.getValue()+A);
},slideTo:function(D){if(D<this.getMinimum()){D=this.getMinimum();
}else if(D>this.getMaximum()){D=this.getMaximum();
}else{D=this.getMinimum()+Math.round((D-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(D);
},_applyOrientation:function(bA,bB){var bC=this.getChildControl(R);
this.__kP=bA===Q;
if(this.__kP){this.removeState(P);
bC.removeState(P);
this.addState(Q);
bC.addState(Q);
bC.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(Q);
bC.removeState(Q);
this.addState(P);
bC.addState(P);
bC.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(B,C){if(B!=null){this._updateKnobSize();
}else{if(this.__kP){this.getChildControl(R).resetWidth();
}else{this.getChildControl(R).resetHeight();
}}},_applyValue:function(s,t){if(s!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(q,r){if(this.getValue()<q){this.setValue(q);
}this._updateKnobPosition();
},_applyMaximum:function(by,bz){if(this.getValue()>by){this.setValue(by);
}this._updateKnobPosition();
}}});
})();
(function(){var d="mousewheel",c="qx.ui.core.ScrollSlider",b="keypress";
qx.Class.define(c,{extend:qx.ui.form.Slider,construct:function(a){arguments.callee.base.call(this,a);
this.removeListener(b,this._onKeyPress);
this.removeListener(d,this._onMouseWheel);
}});
})();
(function(){var s="pressed",r="abandoned",q="Integer",p="hovered",o="qx.event.type.Event",n="Enter",m="Space",l="press",k="__kR",j="qx.ui.form.RepeatButton",g="release",i="interval",h="execute";
qx.Class.define(j,{extend:qx.ui.form.Button,construct:function(b,c){arguments.callee.base.call(this,b,c);
this.__kR=new qx.event.Timer(this.getInterval());
this.__kR.addListener(i,this._onInterval,this);
},events:{"execute":o,"press":o,"release":o},properties:{interval:{check:q,init:100},firstInterval:{check:q,init:500},minTimer:{check:q,init:20},timerDecrease:{check:q,init:2}},members:{__kS:null,__kT:null,__kR:null,press:function(){if(this.isEnabled()){if(!this.hasState(s)){this.__kU();
}this.removeState(r);
this.addState(s);
}},release:function(a){if(!this.isEnabled()){return;
}if(this.hasState(s)){if(!this.__kT){this.execute();
}}this.removeState(s);
this.removeState(r);
this.__kV();
},_applyEnabled:function(d,f){arguments.callee.base.call(this,d,f);

if(!d){this.removeState(s);
this.removeState(r);
this.__kV();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(r)){this.removeState(r);
this.addState(s);
this.__kR.start();
}this.addState(p);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(p);

if(this.hasState(s)){this.removeState(s);
this.addState(r);
this.__kR.stop();
this.__kS=this.getInterval();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__kU();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(r)){this.addState(p);

if(this.hasState(s)&&!this.__kT){this.execute();
}}this.__kV();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case n:case m:if(this.hasState(s)){if(!this.__kT){this.execute();
}this.removeState(s);
this.removeState(r);
e.stopPropagation();
this.__kV();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case n:case m:this.removeState(r);
this.addState(s);
e.stopPropagation();
this.__kU();
}},_onInterval:function(e){this.__kR.stop();
if(this.__kS==null){this.__kS=this.getInterval();
}this.__kS=(Math.max(this.getMinTimer(),this.__kS-this.getTimerDecrease()));
this.__kR.restartWith(this.__kS);
this.__kT=true;
this.fireEvent(h);
},__kU:function(){this.fireEvent(l);
this.__kT=false;
this.__kR.setInterval(this.getFirstInterval());
this.__kR.start();
this.removeState(r);
this.addState(s);
},__kV:function(){this.fireEvent(g);
this.__kR.stop();
this.__kS=null;
this.removeState(r);
this.removeState(s);
}},destruct:function(){this._disposeObjects(k);
}});
})();
(function(){var L="_applyLayoutChange",K="top",J="left",I="middle",H="Decorator",G="center",F="_applyReversed",E="bottom",D="qx.ui.layout.VBox",C="__kW",z="__kX",B="Integer",A="__la",y="right",x="Boolean";
qx.Class.define(D,{extend:qx.ui.layout.Abstract,construct:function(bl,bm,bn){arguments.callee.base.call(this);

if(bl){this.setSpacing(bl);
}
if(bm){this.setAlignY(bm);
}
if(bn){this.setSeparator(bn);
}},properties:{alignY:{check:[K,I,E],init:K,apply:L},alignX:{check:[J,G,y],init:J,apply:L},spacing:{check:B,init:0,apply:L},separator:{check:H,nullable:true,apply:L},reversed:{check:x,init:false,apply:F}},members:{__kW:null,__kX:null,__kY:null,__la:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lb:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__kW&&this.__kW.length!=length&&this.__kX&&this.__kW;
var u;
var t=r?this.__kW:new Array(length);
var v=r?this.__kX:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}}if(!r){this.__kW=t;
this.__kX=v;
}this.__kY=s;
this.__la=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__lb();
}var U=this.__la;
var length=U.length;
var bf=qx.ui.layout.Util;
var be=this.getSpacing();
var bi=this.getSeparator();

if(bi){var R=bf.computeVerticalSeparatorGaps(U,be,bi);
}else{var R=bf.computeVerticalGaps(U,be,true);
}var i,P,Q,Y;
var ba=[];
var bg=R;

for(i=0;i<length;i+=1){Y=this.__kW[i];
Q=Y!=null?Math.floor((N-R)*Y):U[i].getSizeHint().height;
ba.push(Q);
bg+=Q;
}if(this.__kY&&bg!=N){var W={};
var bd,bh;

for(i=0;i<length;i+=1){bd=this.__kX[i];

if(bd>0){V=U[i].getSizeHint();
W[i]={min:V.minHeight,value:ba[i],max:V.maxHeight,flex:bd};
}}var S=bf.computeFlexOffsets(W,N,bg);

for(i in S){bh=S[i].offset;
ba[i]+=bh;
bg+=bh;
}}var top=U[0].getMarginTop();
if(bg<N&&this.getAlignY()!=K){top=N-bg;

if(this.getAlignY()===I){top=Math.round(top/2);
}}var V,bk,bb,Q,X,bc,T;
this._clearSeparators();
if(bi){var bj=qx.theme.manager.Decoration.getInstance().resolve(bi).getInsets();
var O=bj.top+bj.bottom;
}for(i=0;i<length;i+=1){P=U[i];
Q=ba[i];
V=P.getSizeHint();
bc=P.getMarginLeft();
T=P.getMarginRight();
bb=Math.max(V.minWidth,Math.min(M-bc-T,V.maxWidth));
bk=bf.computeHorizontalAlignOffset(P.getAlignX()||this.getAlignX(),bb,M,bc,T);
if(i>0){if(bi){top+=X+be;
this._renderSeparator(bi,{top:top,left:0,height:O,width:M});
top+=O+be+P.getMarginTop();
}else{top+=bf.collapseMargins(be,X,P.getMarginTop());
}}P.renderLayout(bk,top,bb,Q);
top+=Q;
X=P.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lb();
}var g=qx.ui.layout.Util;
var q=this.__la;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__kX[i];
var d=this.__kW[i];

if(m){c+=b.minHeight;
}else if(d){e=Math.max(e,Math.round(b.minHeight/d));
}else{c+=b.height;
}p=n.getMarginLeft()+n.getMarginRight();
if((b.width+p)>h){h=b.width+p;
}if((b.minWidth+p)>a){a=b.minWidth+p;
}}c+=e;
var k=this.getSpacing();
var o=this.getSeparator();

if(o){var j=g.computeVerticalSeparatorGaps(q,k,o);
}else{var j=g.computeVerticalGaps(q,k,true);
}return {minHeight:c+j,height:f+j,minWidth:a,width:h};
}},destruct:function(){this._disposeFields(C,z,A);
}});
})();
(function(){var m="\n",l="",k=" &nbsp;",j="<br>",i=" ",h="qx.bom.String";
qx.Class.define(h,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(o){return qx.util.StringEscape.escape(o,qx.bom.String.FROM_CHARCODE);
},unescape:function(b){return qx.util.StringEscape.unescape(b,qx.bom.String.TO_CHARCODE);
},fromText:function(p){return qx.bom.String.escape(p).replace(/(  |\n)/g,function(f){var g={"  ":k,"\n":j};
return g[f]||f;
});
},toText:function(n){return qx.bom.String.unescape(n.replace(/\s+|<([^>])+>/gi,function(a){if(/\s+/.test(a)){return i;
}else if(/^<BR|^<br/gi.test(a)){return m;
}else{return l;
}}));
}},defer:function(c,d,e){c.FROM_CHARCODE=qx.lang.Object.invert(c.TO_CHARCODE);
}});
})();
(function(){var t=";",s="&",r='X',q="",p='#',o="&#",n="qx.util.StringEscape";
qx.Bootstrap.define(n,{statics:{escape:function(c,d){var f,h=q;

for(var i=0,l=c.length;i<l;i++){var g=c.charAt(i);
var e=g.charCodeAt(0);

if(d[e]){f=s+d[e]+t;
}else{if(e>0x7F){f=o+e+t;
}else{f=g;
}}h+=f;
}return h;
},unescape:function(a,b){return a.replace(/&[#\w]+;/gi,function(j){var k=j;
var j=j.substring(1,j.length-1);
var m=b[j];

if(m){k=String.fromCharCode(m);
}else{if(j.charAt(0)==p){if(j.charAt(1).toUpperCase()==r){m=j.substring(2);
if(m.match(/^[0-9A-Fa-f]+$/gi)){k=String.fromCharCode(parseInt(m,16));
}}else{m=j.substring(1);
if(m.match(/^\d+$/gi)){k=String.fromCharCode(parseInt(m,10));
}}}}return k;
});
}}});
})();
(function(){var d="textarea",c="qx.ui.form.TextArea",b="_applyWrap",a="Boolean";
qx.Class.define(c,{extend:qx.ui.form.AbstractField,construct:function(e){arguments.callee.base.call(this,e);
this.initWrap();
},properties:{wrap:{check:a,init:true,apply:b},appearance:{refine:true,init:d}},members:{_createInputElement:function(){return new qx.html.Input(d);
},_applyWrap:function(f,g){this.getContentElement().setWrap(f);
},_getContentHint:function(){var h=arguments.callee.base.call(this);
h.height=h.height*4;
h.width=this._getTextSize().width*20;
return h;
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var u="Integer",t="_applyContentPadding",s="resetPaddingRight",r="setPaddingBottom",q="resetPaddingTop",p="qx.ui.core.MContentPadding",o="resetPaddingLeft",n="setPaddingTop",m="setPaddingRight",l="resetPaddingBottom",h="contentPaddingLeft",k="setPaddingLeft",j="contentPaddingTop",g="shorthand",f="contentPaddingRight",i="contentPaddingBottom";
qx.Mixin.define(p,{properties:{contentPaddingTop:{check:u,init:0,apply:t,themeable:true},contentPaddingRight:{check:u,init:0,apply:t,themeable:true},contentPaddingBottom:{check:u,init:0,apply:t,themeable:true},contentPaddingLeft:{check:u,init:0,apply:t,themeable:true},contentPadding:{group:[j,f,i,h],mode:g,themeable:true}},members:{__lc:{contentPaddingTop:n,contentPaddingRight:m,contentPaddingBottom:r,contentPaddingLeft:k},__ld:{contentPaddingTop:q,contentPaddingRight:s,contentPaddingBottom:l,contentPaddingLeft:o},_applyContentPadding:function(a,b,name){var c=this._getContentPaddingTarget();

if(a==null){var d=this.__ld[name];
c[d]();
}else{var e=this.__lc[name];
c[e](a);
}}}});
})();
(function(){var k="legend",j="frame",i="middle",h="top",g="resize",f="qx.ui.groupbox.GroupBox",d="groupbox",c="_applyLegendPosition";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(r,s){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(j);
this._createChildControl(k);
if(r!=null){this.setLegend(r);
}
if(s!=null){this.setIcon(s);
}},properties:{appearance:{refine:true,init:d},legendPosition:{check:[h,i],init:i,apply:c,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(l){var m;

switch(l){case j:m=new qx.ui.container.Composite();
this._add(m,{left:0,top:6,right:0,bottom:0});
break;
case k:m=new qx.ui.basic.Atom();
m.addListener(g,this._repositionFrame,this);
this._add(m);
break;
}return m||arguments.callee.base.call(this,l);
},_getContentPaddingTarget:function(){return this.getChildControl(j);
},_applyLegendPosition:function(e){if(this.getChildControl(k).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var p=this.getChildControl(k);
var o=this.getChildControl(j);
var q=p.getBounds().height;
if(this.getLegendPosition()==i){o.setLayoutProperties({"top":Math.round(q/2)});
}else if(this.getLegendPosition()==h){o.setLayoutProperties({"top":q});
}},getChildrenContainer:function(){return this.getChildControl(j);
},setLegend:function(a){var b=this.getChildControl(k);

if(a!==null){b.setLabel(a);
b.show();
}else{b.exclude();
}},getLegend:function(){return this.getChildControl(k).getLabel();
},setIcon:function(n){this.getChildControl(k).setIcon(n);
},getIcon:function(){this.getChildControl(k).getIcon();
}}});
})();
(function(){var p="container",o="handle",n="both",m="Integer",k="middle",j="qx.ui.toolbar.Part",h="icon",g="label",f="changeShow",e="_applySpacing",d="toolbar/part";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(o);
},properties:{appearance:{refine:true,init:d},show:{init:n,check:[n,g,h],inheritable:true,event:f},spacing:{nullable:true,check:m,themeable:true,apply:e}},members:{_createChildControlImpl:function(t){var u;

switch(t){case o:u=new qx.ui.basic.Image();
u.setAlignY(k);
this._add(u);
break;
case p:u=new qx.ui.toolbar.PartContainer;
this._add(u);
break;
}return u||arguments.callee.base.call(this,t);
},getChildrenContainer:function(){return this.getChildControl(p);
},_applySpacing:function(q,r){var s=this.getChildControl(p).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}}return a;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var j="pressed",i="hovered",h="changeVisibility",g="qx.ui.menu.Menu",f="Enter",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(k,l,m){arguments.callee.base.call(this,k,l);
if(m!=null){this.setMenu(m);
}},properties:{menu:{check:g,nullable:true,apply:a,event:d}},members:{_applyMenu:function(p,q){if(q){q.removeListener(h,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(h,this._onMenuChange,this);
p.setOpener(this);
}},open:function(s){var t=this.getMenu();

if(t){qx.ui.menu.Manager.getInstance().hideAll();
t.open();
if(s){var u=t.getChildren()[0];

if(u){t.setSelectedButton(u);
}}}},_onMenuChange:function(e){var n=this.getMenu();

if(n.isVisible()){this.addState(j);
}else{this.removeState(j);
}},_onMouseDown:function(e){var r=this.getMenu();

if(r){if(!r.isVisible()){this.open();
}else{r.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(i);
},_onMouseOut:function(e){this.removeState(i);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case f:this.removeState(b);
this.addState(j);
var o=this.getMenu();

if(o){if(!o.isVisible()){this.open();
}else{o.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var i="pressed",h="hovered",g="inherit",f="qx.ui.menubar.Button",d="Please use 'getMenuBar' to access the connected menubar widget",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){arguments.callee.base.call(this,k,l,m);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getToolBar:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},_onMenuChange:function(e){var j=this.getMenu();
var menubar=this.getMenuBar();

if(j.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(j);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==j){menubar.resetOpenMenu();
}}},_onMouseOver:function(e){this.addState(h);
if(this.getMenu()){var menubar=this.getMenuBar();
var open=menubar.getOpenMenu();

if(open&&open!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
})();
(function(){var u="mouseup",t="keypress",s="mousedown",r="interval",q="keydown",p="keyup",o="__lg",n="Enter",m="__lf",l="__le",d="Up",k="Escape",h="blur",c="qx.ui.menu.Manager",b="Left",g="Down",f="Right",j="singleton",a="Space";
qx.Class.define(c,{type:j,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__le=[];
var bh=qx.core.Init.getApplication().getRoot();
var bg=document.body;
var bi=qx.event.Registration;
bh.addListener(s,this._onMouseDown,this,true);
bh.addListener(u,this._onMouseUp,this);
bi.addListener(window.document.documentElement,u,this._onMouseUp,this);
bi.addListener(bg,q,this._onKeyUpDown,this,true);
bi.addListener(bg,p,this._onKeyUpDown,this,true);
bi.addListener(bg,t,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,h,this.hideAll,this);
this.__lf=new qx.event.Timer;
this.__lf.addListener(r,this._onOpenInterval,this);
this.__lg=new qx.event.Timer;
this.__lg.addListener(r,this._onCloseInterval,this);
},members:{__lh:null,__li:null,__lf:null,__lg:null,__le:null,_getChild:function(R,S,T,U){var V=R.getChildren();
var length=V.length;
var W;

for(var i=S;i<length&&i>=0;i+=T){W=V[i];

if(W.isEnabled()&&!W.isAnonymous()){return W;
}}
if(U){i=i==length?0:length-1;

for(;i!=S;i+=T){W=V[i];

if(W.isEnabled()&&!W.isAnonymous()){return W;
}}}return null;
},_isInMenu:function(bp){while(bp){if(bp instanceof qx.ui.menu.Menu){return true;
}bp=bp.getLayoutParent();
}return false;
},_getMenuButton:function(bC){while(bC){if(bC instanceof qx.ui.menu.AbstractButton){return bC;
}bC=bC.getLayoutParent();
}return null;
},add:function(N){{};
var O=this.__le;
O.push(N);
N.setZIndex(1e6+O.length);
},remove:function(bD){{};
var bE=this.__le;

if(bE){qx.lang.Array.remove(bE,bD);
}},hideAll:function(){var y=this.__le;

if(y){for(var i=y.length-1;i>=0;i--){y[i].exclude();
}}},getActiveMenu:function(){var bF=this.__le;
return bF.length>0?bF[bF.length-1]:null;
},scheduleOpen:function(bB){this.cancelClose(bB);
if(bB.isVisible()){if(this.__lh){this.cancelOpen(this.__lh);
}}else if(this.__lh!=bB){this.__lh=bB;
this.__lf.restartWith(bB.getOpenInterval());
}},scheduleClose:function(bo){this.cancelOpen(bo);
if(!bo.isVisible()){if(this.__li){this.cancelClose(this.__li);
}}else if(this.__li!=bo){this.__li=bo;
this.__lg.restartWith(bo.getCloseInterval());
}},cancelOpen:function(bn){if(this.__lh==bn){this.__lf.stop();
this.__lh=null;
}},cancelClose:function(bq){if(this.__li==bq){this.__lg.stop();
this.__li=null;
}},_onOpenInterval:function(e){this.__lf.stop();
this.__lh.open();
this.__lh=null;
},_onCloseInterval:function(e){this.__lg.stop();
this.__li.exclude();
this.__li=null;
},_onMouseDown:function(e){var bG=e.getTarget();
if(bG.getMenu&&bG.getMenu()&&bG.getMenu().isVisible()){return;
}if(this.__le.length>0&&!this._isInMenu(bG)){this.hideAll();
}},_onMouseUp:function(e){var bA=e.getTarget();
var bz;

if(bA instanceof qx.ui.core.Widget){bz=bA;
}else{bz=qx.ui.core.Widget.getWidgetByElement(bA);
}if(!(bz instanceof qx.ui.menu.Menu)){bz=this._getMenuButton(bz);

if(bz!=null&&bz instanceof qx.ui.menu.AbstractButton&&!bz.isEnabled()){return;
}this.hideAll();
}},__lj:{"Enter":1,"Space":1},__lk:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var P=this.getActiveMenu();

if(!P){return;
}var Q=e.getKeyIdentifier();

if(this.__lk[Q]||(this.__lj[Q]&&P.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var z=this.getActiveMenu();

if(!z){return;
}var A=e.getKeyIdentifier();
var C=this.__lk[A];
var B=this.__lj[A];

if(C){switch(A){case d:this._onKeyPressUp(z);
break;
case g:this._onKeyPressDown(z);
break;
case b:this._onKeyPressLeft(z);
break;
case f:this._onKeyPressRight(z);
break;
case k:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(B){var D=z.getSelectedButton();

if(D){switch(A){case n:this._onKeyPressEnter(z,D,e);
break;
case a:this._onKeyPressSpace(z,D,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(bu){var bv=bu.getSelectedButton();
var bw=bu.getChildren();
var by=bv?bu.indexOf(bv)-1:bw.length-1;
var bx=this._getChild(bu,by,-1,true);
if(bx){bu.setSelectedButton(bx);
}else{bu.resetSelectedButton();
}},_onKeyPressDown:function(bj){var bk=bj.getSelectedButton();
var bm=bk?bj.indexOf(bk)+1:0;
var bl=this._getChild(bj,bm,1,true);
if(bl){bj.setSelectedButton(bl);
}else{bj.resetSelectedButton();
}},_onKeyPressLeft:function(E){var H=E.getOpener();

if(!H){return;
}if(H instanceof qx.ui.menu.Button){var J=H.getLayoutParent();
J.resetOpenedButton();
J.setSelectedButton(H);
}else if(H instanceof qx.ui.menubar.Button){var F=H.getMenuBar().getMenuButtons();
var G=F.indexOf(H);
if(G===-1){return;
}var I=G==0?F[F.length-1]:F[G-1];

if(I!=H){I.open(true);
}}},_onKeyPressRight:function(X){var ba=X.getSelectedButton();
if(ba){var Y=ba.getMenu();

if(Y){X.setOpenedButton(ba);
var bf=this._getChild(Y,0,1);

if(bf){Y.setSelectedButton(bf);
}return;
}}else if(!X.getOpenedButton()){var bf=this._getChild(X,0,1);

if(bf){X.setSelectedButton(bf);

if(bf.getMenu()){X.setOpenedButton(bf);
}return;
}}var bd=X.getOpener();
if(bd instanceof qx.ui.menu.Button&&ba){while(bd){bd=bd.getLayoutParent();

if(bd instanceof qx.ui.menu.Menu){bd=bd.getOpener();

if(bd instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bd){return;
}}if(bd instanceof qx.ui.menubar.Button){var bc=bd.getMenuBar().getMenuButtons();
var bb=bc.indexOf(bd);
if(bb===-1){return;
}var be=bc[bb+1];

if(!be){be=bc[0];
}
if(be!=bd){be.open(true);
}}},_onKeyPressEnter:function(K,L,e){if(L.hasListener(t)){var M=e.clone();
M.setBubbles(false);
M.setTarget(L);
L.dispatchEvent(M);
}this.hideAll();
},_onKeyPressSpace:function(v,w,e){if(w.hasListener(t)){var x=e.clone();
x.setBubbles(false);
x.setTarget(w);
w.dispatchEvent(x);
}}},destruct:function(){var bt=qx.event.Registration;
var br=document.body;
var bs=qx.core.Init.getApplication().getRoot();
bs.removeListener(s,this._onMouseDown,this,true);
bs.removeListener(u,this._onMouseUp,this);
bt.removeListener(window.document.documentElement,u,this._onMouseUp,this);
bt.removeListener(br,q,this._onKeyUpDown,this,true);
bt.removeListener(br,p,this._onKeyUpDown,this,true);
bt.removeListener(br,t,this._onKeyPress,this,true);
this._disposeObjects(m,o);
this._disposeArray(l);
}});
})();
(function(){var y="Integer",x="qx.ui.core.Widget",w="selected",v="visible",u="Boolean",t="mouseout",s="excluded",r="menu",q="_applySelectedButton",p="_applyOpenInterval",L="_applySpacingY",K="_blocker",J="_applyCloseInterval",I="_applyBlockerColor",H="_applyIconColumnWidth",G="mouseover",F="qx.ui.menu.Menu",E="Color",D="Number",C="_applyOpenedButton",A="_applySpacingX",B="_applyBlockerOpacity",z="_applyArrowColumnWidth";
qx.Class.define(F,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
this.getApplicationRoot().add(this);
this.addListener(G,this._onMouseOver);
this.addListener(t,this._onMouseOut);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
var S=qx.core.Init.getApplication().getRoot();
this._blocker=new qx.ui.core.Blocker(S);
},properties:{appearance:{refine:true,init:r},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:s},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:y,apply:A,init:0,themeable:true},spacingY:{check:y,apply:L,init:0,themeable:true},iconColumnWidth:{check:y,init:0,themeable:true,apply:H},arrowColumnWidth:{check:y,init:0,themeable:true,apply:z},blockerColor:{check:E,init:null,nullable:true,apply:I,themeable:true},blockerOpacity:{check:D,init:1,apply:B,themeable:true},selectedButton:{check:x,nullable:true,apply:q},openedButton:{check:x,nullable:true,apply:C},opener:{check:x,nullable:true},openInterval:{check:y,themeable:true,init:250,apply:p},closeInterval:{check:y,themeable:true,init:250,apply:J},blockBackground:{check:u,themeable:true,init:false}},members:{__ll:null,_blocker:null,show:function(){arguments.callee.base.call(this);

if(this.getBlockBackground()){var ba=this.getZIndex();
this._blocker.blockContent(ba-1);
}},hide:function(){arguments.callee.base.call(this);

if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}},exclude:function(){arguments.callee.base.call(this);

if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}},open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.show();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getLayout().getColumnSizes();
},_applyIconColumnWidth:function(Q,R){this._getLayout().setIconColumnWidth(Q);
},_applyArrowColumnWidth:function(T,U){this._getLayout().setArrowColumnWidth(T);
},_applySpacingX:function(V,W){this._getLayout().setColumnSpacing(V);
},_applySpacingY:function(f,g){this._getLayout().setSpacing(f);
},_applyVisibility:function(a,b){arguments.callee.base.call(this,a,b);
var c=qx.ui.menu.Manager.getInstance();

if(a===v){c.add(this);
var opener=this.getOpener();

if(opener){var d=opener.getLayoutParent();

if(d&&d instanceof qx.ui.menu.Menu){d.setOpenedButton(opener);
}}}else if(b===v){c.remove(this);
var opener=this.getOpener();

if(opener){var d=opener.getLayoutParent();

if(d&&d instanceof qx.ui.menu.Menu&&d.getOpenedButton()==opener){d.resetOpenedButton();
}}this.resetOpenedButton();
this.resetSelectedButton();
}},_applySelectedButton:function(h,i){if(i){i.removeState(w);
}
if(h){h.addState(w);
}},_applyOpenedButton:function(M,N){if(N){N.getMenu().exclude();
}
if(M){M.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(O,P){this._blocker.setOpacity(O);
},_onMouseOver:function(e){var k=qx.ui.menu.Manager.getInstance();
k.cancelClose(this);
var l=e.getTarget();

if(l.isEnabled()&&l instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(l);
var j=l.getMenu&&l.getMenu();

if(j){k.scheduleOpen(j);
this.__ll=j;
}else{var m=this.getOpenedButton();

if(m){k.scheduleClose(m.getMenu());
}
if(this.__ll){k.cancelOpen(this.__ll);
this.__ll=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var n=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var o=this.getOpenedButton();
o?this.setSelectedButton(o):this.resetSelectedButton();
if(o){n.cancelClose(o.getMenu());
}if(this.__ll){n.cancelOpen(this.__ll);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this._disposeObjects(K);
}});
})();
(function(){var d="Integer",c="_applyLayoutChange",b="__lm",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:d,init:0,apply:c},spanColumn:{check:d,init:1,nullable:true,apply:c},iconColumnWidth:{check:d,init:0,themeable:true,apply:c},arrowColumnWidth:{check:d,init:0,themeable:true,apply:c}},members:{__lm:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var p,h,k;
var f=this.getSpanColumn();
var j=this.__lm=[0,0,0,0];
var n=this.getColumnSpacing();
var m=0;
var g=0;
for(var i=0,l=q.length;i<l;i++){p=q[i];

if(p.isAnonymous()){continue;
}h=p.getChildrenSizes();

for(var o=0;o<h.length;o++){if(f!=null&&o==f&&h[f+1]==0){m=Math.max(m,h[o]);
}else{j[o]=Math.max(j[o],h[o]);
}}var e=q[i].getInsets();
g=Math.max(g,e.left+e.right);
}if(f!=null&&j[f]+n+j[f+1]<m){j[f]=m-j[f+1]-n;
}if(m==0){k=n*2;
}else{k=n*3;
}if(j[0]==0){j[0]=this.getIconColumnWidth();
}if(j[3]==0){j[3]=this.getArrowColumnWidth();
}return {height:arguments.callee.base.call(this).height,width:qx.lang.Array.sum(j)+g+k};
},getColumnSizes:function(){return this.__lm||null;
}},destruct:function(){this._disposeFields(b);
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var C="icon",B="label",A="arrow",z="shortcut",y="submenu",x="String",w="qx.ui.menu.Menu",v="qx.ui.menu.AbstractButton",u="keypress",t="_applyIcon",q="mouseup",s="abstract",r="_applyLabel",p="_applyMenu";
qx.Class.define(v,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:s,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(q,this._onMouseUp);
this.addListener(u,this._onKeyPress);
},properties:{label:{check:x,apply:r,nullable:true},menu:{check:w,apply:p,nullable:true},icon:{check:x,apply:t,themeable:true,nullable:true}},members:{_createChildControlImpl:function(a){var b;

switch(a){case C:b=new qx.ui.basic.Image;
b.setAnonymous(true);
this._add(b,{column:0});
break;
case B:b=new qx.ui.basic.Label;
b.setAnonymous(true);
this._add(b,{column:1});
break;
case z:b=new qx.ui.basic.Label;
b.setAnonymous(true);
this._add(b,{column:2});
break;
case A:b=new qx.ui.basic.Image;
b.setAnonymous(true);
this._add(b,{column:3});
break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{selected:1},getChildrenSizes:function(){var f=0,g=0,h=0,l=0;

if(this._isChildControlVisible(C)){var m=this.getChildControl(C);
f=m.getMarginLeft()+m.getSizeHint().width+m.getMarginRight();
}
if(this._isChildControlVisible(B)){var j=this.getChildControl(B);
g=j.getMarginLeft()+j.getSizeHint().width+j.getMarginRight();
}
if(this._isChildControlVisible(z)){var i=this.getChildControl(z);
h=i.getMarginLeft()+i.getSizeHint().width+i.getMarginRight();
}
if(this._isChildControlVisible(A)){var k=this.getChildControl(A);
l=k.getMarginLeft()+k.getSizeHint().width+k.getMarginRight();
}return [f,g,h,l];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_applyIcon:function(D,E){if(D){this._showChildControl(C).setSource(D);
}else{this._excludeChildControl(C);
}},_applyLabel:function(c,d){if(c){this._showChildControl(B).setValue(c);
}else{this._excludeChildControl(B);
}},_applyMenu:function(n,o){if(o){o.resetOpener();
o.removeState(y);
}
if(n){this._showChildControl(A);
n.setOpener(this);
n.addState(y);
}else{this._excludeChildControl(A);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(h,j){var u=this._getLayoutChildren();
var t;
var m;
var n=[];

for(var i=0,l=u.length;i<l;i++){t=u[i];
m=t.getLayoutProperties().column;
n[m]=t;
}var s=u[0].getLayoutParent().getLayoutParent();
var v=s.getColumnSizes();
var p=s.getSpacingX();
var o=qx.lang.Array.sum(v)+p*(v.length-1);

if(o<h){v[1]+=h-o;
}var w=0,top=0;
var q=qx.ui.layout.Util;

for(var i=0,l=v.length;i<l;i++){t=n[i];

if(t){var k=t.getSizeHint();
var top=q.computeVerticalAlignOffset(t.getAlignY()||c,k.height,j,0,0);
var r=q.computeHorizontalAlignOffset(t.getAlignX()||a,k.width,v[i],t.getMarginLeft(),t.getMarginRight());
t.renderLayout(w+r,top,k.width,k.height);
}w+=v[i]+p;
}},_computeSizeHint:function(){var f=this._getLayoutChildren();
var e=0;
var g=0;

for(var i=0,l=f.length;i<l;i++){var d=f[i].getSizeHint();
g+=d.width;
e=Math.max(e,d.height);
}return {width:g,height:e};
}}});
})();
(function(){var i="changeLocale",h="qx.dynlocale",g="on",f="shortcut",d="menu-button",c="qx.ui.menu.Button",b="changeCommand";
qx.Class.define(c,{extend:qx.ui.menu.AbstractButton,construct:function(j,k,l,m){arguments.callee.base.call(this);
this.addListener(b,this._onChangeCommand,this);
if(j!=null){this.setLabel(j);
}
if(k!=null){this.setIcon(k);
}
if(l!=null){this.setCommand(l);
}
if(m!=null){this.setMenu(m);
}},properties:{appearance:{refine:true,init:d}},members:{_onChangeCommand:function(e){var o=e.getData();

if(qx.core.Variant.isSet(h,g)){var n=e.getOldData();

if(!n){qx.locale.Manager.getInstance().addListener(i,this._onChangeLocale,this);
}
if(!o){qx.locale.Manager.getInstance().removeListener(i,this._onChangeLocale,this);
}}this.getChildControl(f).setValue(o.toString());
},_onChangeLocale:qx.core.Variant.select(h,{"on":function(e){var a=this.getCommand();

if(a!=null){this.getChildControl(f).setValue(a.toString());
}},"off":null}),_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){e.stopPropagation();
}}},_onKeyPress:function(e){this.execute();
}},destruct:function(){if(qx.core.Variant.isSet(h,g)){qx.locale.Manager.getInstance().removeListener(i,this._onChangeLocale,this);
}}});
})();
(function(){var p="both",o="qx.ui.menu.Menu",n="_applySpacing",m="icon",k="label",j="changeShow",h="Integer",g="qx.ui.toolbar.ToolBar",f="toolbar",e="changeOpenMenu";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:f},openMenu:{check:o,event:e,nullable:true},show:{init:p,check:[p,k,m],inheritable:true,event:j},spacing:{nullable:true,check:h,themeable:true,apply:n}},members:{_applySpacing:function(q,r){var s=this._getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSpacer:function(){var a=new qx.ui.core.Spacer;
this._add(a,{flex:1});
return a;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var c=this.getChildren();
var b=[];
var d;

for(var i=0,l=c.length;i<l;i++){d=c[i];

if(d instanceof qx.ui.menubar.Button){b.push(d);
}else if(d instanceof qx.ui.toolbar.Part){b.push.apply(b,d.getMenuButtons());
}}return b;
}}});
})();
(function(){var d="qx.ui.core.Spacer";
qx.Class.define(d,{extend:qx.ui.core.LayoutItem,construct:function(a,b){arguments.callee.base.call(this);
this.setWidth(a!=null?a:0);
this.setHeight(b!=null?b:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(c){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var h="inherit",g="toolbar-button",f="keydown",e="qx.ui.toolbar.Button",d="keyup";
qx.Class.define(e,{extend:qx.ui.form.Button,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(f,this._onKeyDown);
this.removeListener(d,this._onKeyUp);
},properties:{appearance:{refine:true,init:g},show:{refine:true,init:h},focusable:{refine:true,init:false}}});
})();
(function(){var w="qx.event.type.Data",v="qx.event.type.Event",u="qx.ui.table.ITableModel";
qx.Interface.define(u,{events:{"dataChanged":w,"metaDataChanged":v,"sorted":w},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(o){},getColumnCount:function(){},getColumnId:function(a){},getColumnIndexById:function(m){},getColumnName:function(n){},isColumnEditable:function(r){},isColumnSortable:function(l){},sortByColumn:function(s,t){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(b,c){},getValue:function(p,q){},getValueById:function(g,h){},setValue:function(d,e,f){},setValueById:function(i,j,k){}}});
})();
(function(){var o="metaDataChanged",n="qx.event.type.Data",m="abstract",l="qx.ui.table.model.Abstract",k="qx.event.type.Event",j="__lo",h="__lp",g="__ln";
qx.Class.define(l,{type:m,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":n,"metaDataChanged":k,"sorted":n},construct:function(){arguments.callee.base.call(this);
this.__ln=[];
this.__lo=[];
this.__lp={};
},members:{__ln:null,__lo:null,__lp:null,__lq:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(I){return null;
},isColumnEditable:function(p){return false;
},isColumnSortable:function(a){return false;
},sortByColumn:function(C,D){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(q,r){},getValue:function(s,t){throw new Error("getValue is abstract");
},getValueById:function(y,z){return this.getValue(this.getColumnIndexById(y),z);
},setValue:function(E,F,G){throw new Error("setValue is abstract");
},setValueById:function(b,c,d){return this.setValue(this.getColumnIndexById(b),c,d);
},getColumnCount:function(){return this.__ln.length;
},getColumnIndexById:function(f){return this.__lp[f];
},getColumnId:function(H){return this.__ln[H];
},getColumnName:function(u){return this.__lo[u];
},setColumnIds:function(B){this.__ln=B;
this.__lp={};

for(var i=0;i<B.length;i++){this.__lp[B[i]]=i;
}this.__lo=new Array(B.length);
if(!this.__lq){this.fireEvent(o);
}},setColumnNamesByIndex:function(e){if(this.__ln.length!=e.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__ln.length+" != "+e.length);
}this.__lo=e;
this.fireEvent(o);
},setColumnNamesById:function(A){this.__lo=new Array(this.__ln.length);

for(var i=0;i<this.__ln.length;++i){this.__lo[i]=A[this.__ln[i]];
}},setColumns:function(v,w){var x=this.__ln.length==0||w;

if(w==null){if(this.__ln.length==0){w=v;
}else{w=this.__ln;
}}
if(w.length!=v.length){throw new Error("columnIdArr and columnNameArr have different length: "+w.length+" != "+v.length);
}
if(x){this.__lq=true;
this.setColumnIds(w);
this.__lq=false;
}this.setColumnNamesByIndex(v);
}},destruct:function(){this._disposeFields(g,j,h);
}});
})();
(function(){var z="dataChanged",y="metaDataChanged",x="qx.ui.table.model.Simple",w="__lr",v="Boolean",u="__lt",t="__lu",s="sorted",r="__lv";
qx.Class.define(x,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__lr=[];
this.__ls=-1;
this.__lw;
this.__lt=[];
this.__lu=null;
},properties:{caseSensitiveSorting:{check:v,init:true}},statics:{_defaultSortComparatorAscending:function(bi,bj){var bk=bi[arguments.callee.columnIndex];
var bl=bj[arguments.callee.columnIndex];
return (bk>bl)?1:((bk==bl)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bs,bt){var bu=(isNaN(bs[arguments.callee.columnIndex])?bs[arguments.callee.columnIndex].toLowerCase():bs[arguments.callee.columnIndex]);
var bv=(isNaN(bt[arguments.callee.columnIndex])?bt[arguments.callee.columnIndex].toLowerCase():bt[arguments.callee.columnIndex]);
return (bu>bv)?1:((bu==bv)?0:-1);
},_defaultSortComparatorDescending:function(bJ,bK){var bL=bJ[arguments.callee.columnIndex];
var bM=bK[arguments.callee.columnIndex];
return (bL<bM)?1:((bL==bM)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bw,bx){var by=(isNaN(bw[arguments.callee.columnIndex])?bw[arguments.callee.columnIndex].toLowerCase():bw[arguments.callee.columnIndex]);
var bz=(isNaN(bx[arguments.callee.columnIndex])?bx[arguments.callee.columnIndex].toLowerCase():bx[arguments.callee.columnIndex]);
return (by<bz)?1:((by==bz)?0:-1);
}},members:{__lr:null,__lu:null,__lv:null,__lt:null,__ls:null,__lw:null,getRowData:function(X){var Y=this.__lr[X];

if(Y==null||Y.originalData==null){return Y;
}else{return Y.originalData;
}},getRowDataAsMap:function(D){var F=this.__lr[D];
var E={};

for(var G=0;G<this.getColumnCount();G++){E[this.getColumnId(G)]=F[G];
}return E;
},getDataAsMapArray:function(){var bf=this.getRowCount();
var be=[];

for(var i=0;i<bf;i++){be.push(this.getRowDataAsMap(i));
}return be;
},setEditable:function(K){this.__lu=[];

for(var L=0;L<this.getColumnCount();L++){this.__lu[L]=K;
}this.fireEvent(y);
},setColumnEditable:function(bg,bh){if(bh!=this.isColumnEditable(bg)){if(this.__lu==null){this.__lu=[];
}this.__lu[bg]=bh;
this.fireEvent(y);
}},isColumnEditable:function(bC){return this.__lu?(this.__lu[bC]==true):false;
},setColumnSortable:function(bA,bB){if(bB!=this.isColumnSortable(bA)){if(this.__lv==null){this.__lv=[];
}this.__lv[bA]=bB;
this.fireEvent(y);
}},isColumnSortable:function(bN){return (this.__lv?(this.__lv[bN]!==false):true);
},sortByColumn:function(m,n){var q;
var p=this.__lt[m];

if(p){q=(n?p.ascending:p.descending);
}else{if(this.getCaseSensitiveSorting()){q=(n?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{q=(n?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}q.columnIndex=m;
this.__lr.sort(q);
this.__ls=m;
this.__lw=n;
var o={columnIndex:m,ascending:n};
this.fireDataEvent(s,o);
this.fireEvent(y);
},setSortMethods:function(A,B){var C;

if(qx.lang.Type.isFunction(B)){C={ascending:B,descending:function(bq,br){return B(br,bq);
}};
}else{C=B;
}this.__lt[A]=C;
},clearSorting:function(){if(this.__ls!=-1){this.__ls=-1;
this.__lw=true;
this.fireEvent(y);
}},getSortColumnIndex:function(){return this.__ls;
},isSortAscending:function(){return this.__lw;
},getRowCount:function(){return this.__lr.length;
},getValue:function(bH,bI){if(bI<0||bI>=this.__lr.length){throw new Error("this.__rowArr out of bounds: "+bI+" (0.."+this.__lr.length+")");
}return this.__lr[bI][bH];
},setValue:function(g,h,k){if(this.__lr[h][g]!=k){this.__lr[h][g]=k;
if(this.hasListener(z)){var l={firstRow:h,lastRow:h,firstColumn:g,lastColumn:g};
this.fireDataEvent(z,l);
}
if(g==this.__ls){this.clearSorting();
}}},setData:function(H,I){this.__lr=H;
if(this.hasListener(z)){var J={firstRow:0,lastRow:H.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(z,J);
}
if(I!==false){this.clearSorting();
}},getData:function(){return this.__lr;
},setDataAsMapArray:function(U,V,W){this.setData(this._mapArray2RowArr(U,V),W);
},addRows:function(M,N,O){if(N==null){N=this.__lr.length;
}M.splice(0,0,N,0);
Array.prototype.splice.apply(this.__lr,M);
var P={firstRow:N,lastRow:this.__lr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(z,P);

if(O!==false){this.clearSorting();
}},addRowsAsMapArray:function(Q,R,S,T){this.addRows(this._mapArray2RowArr(Q,S),R,T);
},setRows:function(bm,bn,bo){if(bn==null){bn=0;
}bm.splice(0,0,bn,bm.length);
Array.prototype.splice.apply(this.__lr,bm);
var bp={firstRow:bn,lastRow:this.__lr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(z,bp);

if(bo!==false){this.clearSorting();
}},setRowsAsMapArray:function(bD,bE,bF,bG){this.setRows(this._mapArray2RowArr(bD,bF),bE,bG);
},removeRows:function(ba,bb,bc){this.__lr.splice(ba,bb);
var bd={firstRow:ba,lastRow:this.__lr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:ba,removeCount:bb};
this.fireDataEvent(z,bd);

if(bc!==false){this.clearSorting();
}},_mapArray2RowArr:function(a,b){var f=a.length;
var c=this.getColumnCount();
var e=new Array(f);
var d;

for(var i=0;i<f;++i){d=[];

if(b){d.originalData=a[i];
}
for(var j=0;j<c;++j){d[j]=a[i][this.getColumnId(j)];
}e[i]=d;
}return e;
}},destruct:function(){this._disposeFields(w,t,u,r);
}});
})();
(function(){var bH="Function",bG="Boolean",bF="column-button",bE="qx.event.type.Data",bD="statusbar",bC="qx.ui.table.pane.CellEvent",bB="PageUp",bA="changeLocale",bz="changeSelection",by="qx.dynlocale",cV="Enter",cU="metaDataChanged",cT="dataChanged",cS="on",cR="_applyTableColumnModel",cQ="_applyStatusBarVisible",cP="blur",cO="qx.ui.table.Table",cN="columnVisibilityMenuCreateEnd",cM="widthChanged",bO="verticalScrollBarChanged",bP="_applyMetaColumnCounts",bM="one of one row",bN="focus",bK="changeDataRowRenderer",bL="changeHeaderCellHeight",bI="Escape",bJ="A",bW="changeSelectionModel",bX="Left",co="_tableModel",ck="Down",cw="Integer",cr="_applyHeaderCellHeight",cI="visibilityChanged",cC="qx.ui.table.ITableModel",cf="orderChanged",cL="_applySelectionModel",cK="_columnVisibilityMenu",cJ="menu",cd="_applyAdditionalStatusBarText",ch="_applyFocusCellOnMouseMove",cj="table",cm="_applyColumnVisibilityButtonVisible",cp="changeTableModel",cs="qx.event.type.Event",cy="tableWidthChanged",cE="End",bQ="Object",bR="_applyShowCellFocusIndicator",cg="resize",cv="changeScrollY",cu="_applyTableModel",ct="menu-button",cA="__ly",cz="_applyKeepFirstVisibleRowComplete",cq="qx.ui.table.columnmodel.Basic",cx="Home",bv="_applyRowHeight",cD="F2",bS="appear",bT="Up",cl="columnVisibilityMenuCreateStart",bw="%1 rows",bx="qx.ui.table.selection.Model",cc="one row",bU="__lx",bV="PageDown",ca="%1 of %2 rows",cn="changeTableColumnModel",cG="keypress",cF="changeRowHeight",ci="__lF",cH="Number",ce="changeVisible",cB="qx.ui.table.IRowRenderer",bY="Right",cb="Space";
qx.Class.define(cO,{extend:qx.ui.core.Widget,construct:function(eh,ei){arguments.callee.base.call(this);
if(!ei){ei={};
}
if(ei.selectionManager){this.setNewSelectionManager(ei.selectionManager);
}
if(ei.selectionModel){this.setNewSelectionModel(ei.selectionModel);
}
if(ei.tableColumnModel){this.setNewTableColumnModel(ei.tableColumnModel);
}
if(ei.tablePane){this.setNewTablePane(ei.tablePane);
}
if(ei.tablePaneHeader){this.setNewTablePaneHeader(ei.tablePaneHeader);
}
if(ei.tablePaneScroller){this.setNewTablePaneScroller(ei.tablePaneScroller);
}
if(ei.tablePaneModel){this.setNewTablePaneModel(ei.tablePaneModel);
}
if(ei.columnMenu){this.setNewColumnMenu(ei.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__lx=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__lx,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__ly=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableColumnModel(this.getNewTableColumnModel()(this));
if(eh!=null){this.setTableModel(eh);
}this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(cG,this._onKeyPress);
this.addListener(bN,this._onFocusChanged);
this.addListener(cP,this._onFocusChanged);
var ej=new qx.ui.core.Widget().set({height:0});
this._add(ej);
ej.addListener(cg,this._onResize,this);
this.__lz=null;
this.__lA=null;
if(qx.core.Variant.isSet(by,cS)){qx.locale.Manager.getInstance().addListener(bA,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":bE,"columnVisibilityMenuCreateEnd":bE,"tableWidthChanged":cs,"verticalScrollBarChanged":bE,"cellClick":bC,"cellDblclick":bC,"cellContextmenu":bC,"dataEdited":bE},statics:{__lB:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:cj},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectionModel:{check:bx,apply:cL,event:bW},tableModel:{check:cC,apply:cu,event:cp,nullable:true},tableColumnModel:{check:cq,apply:cR,event:cn},rowHeight:{check:cH,init:20,apply:bv,event:cF},forceLineHeight:{check:bG,init:true},headerCellHeight:{check:cw,init:16,apply:cr,event:bL},statusBarVisible:{check:bG,init:true,apply:cQ},additionalStatusBarText:{nullable:true,init:null,apply:cd},columnVisibilityButtonVisible:{check:bG,init:true,apply:cm},metaColumnCounts:{check:bQ,apply:bP},focusCellOnMouseMove:{check:bG,init:false,apply:ch},rowFocusChangeModifiesSelection:{check:bG,init:true},showCellFocusIndicator:{check:bG,init:true,apply:bR},keepFirstVisibleRowComplete:{check:bG,init:true,apply:cz},alwaysUpdateCells:{check:bG,init:false},dataRowRenderer:{check:cB,init:null,nullable:true,event:bK},modalCellEditorPreOpenFunction:{check:bH,init:null,nullable:true},newColumnMenu:{check:bH,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:bH,init:function(dq){return new qx.ui.table.selection.Manager(dq);
}},newSelectionModel:{check:bH,init:function(dc){return new qx.ui.table.selection.Model(dc);
}},newTableColumnModel:{check:bH,init:function(eI){return new qx.ui.table.columnmodel.Basic(eI);
}},newTablePane:{check:bH,init:function(df){return new qx.ui.table.pane.Pane(df);
}},newTablePaneHeader:{check:bH,init:function(eo){return new qx.ui.table.pane.Header(eo);
}},newTablePaneScroller:{check:bH,init:function(g){return new qx.ui.table.pane.Scroller(g);
}},newTablePaneModel:{check:bH,init:function(ex){return new qx.ui.table.pane.Model(ex);
}}},members:{__lz:null,__lA:null,__lx:null,__ly:null,__lC:null,__lD:null,__lE:null,__lF:null,_createChildControlImpl:function(cW){var cX;

switch(cW){case bD:cX=new qx.ui.basic.Label();
cX.set({allowGrowX:true});
this._add(cX);
break;
case bF:cX=this.getNewColumnMenu()();
cX.set({focusable:false});
var cY=cX.factory(cJ,{table:this});
cY.addListener(bS,this._initColumnMenu,this);
break;
}return cX||arguments.callee.base.call(this,cW);
},_applySelectionModel:function(ev,ew){this.__ly.setSelectionModel(ev);

if(ew!=null){ew.removeListener(bz,this._onSelectionChanged,this);
}ev.addListener(bz,this._onSelectionChanged,this);
},_applyRowHeight:function(h,j){if(!this.getTableModel()){return;
}var k=this._getPaneScrollerArr();

for(var i=0;i<k.length;i++){k[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(el,em){var en=this._getPaneScrollerArr();

for(var i=0;i<en.length;i++){en[i].getHeader().setHeight(el);
}},_applyTableModel:function(ey,ez){this.getTableColumnModel().init(ey.getColumnCount(),this);

if(ez!=null){ez.removeListener(cU,this._onTableModelMetaDataChanged,this);
ez.removeListener(cT,this._onTableModelDataChanged,this);
}ey.addListener(cU,this._onTableModelMetaDataChanged,this);
ey.addListener(cT,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ey.getRowCount(),0,ey.getColumnCount());
this._onTableModelMetaDataChanged();
},_applyTableColumnModel:function(ep,eq){if(eq!=null){throw new Error("The table column model can only be set once per table.");
}ep.addListener(cI,this._onColVisibilityChanged,this);
ep.addListener(cM,this._onColWidthChanged,this);
ep.addListener(cf,this._onColOrderChanged,this);
var es=this.getTableModel();
if(es){ep.init(es.getColumnCount(),this);
}var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){var et=er[i];
var eu=et.getTablePaneModel();
eu.setTableColumnModel(ep);
}},_applyStatusBarVisible:function(bp,bq){if(bp){this._showChildControl(bD);
}else{this._excludeChildControl(bD);
}
if(bp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(ec,ed){this.__lC=ec;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(dv,dw){if(dv){this._showChildControl(bF);
}else{this._excludeChildControl(bF);
}},_applyMetaColumnCounts:function(I,J){var Q=I;
var K=this._getPaneScrollerArr();
var O={};

if(I>J){var S=qx.event.Registration.getManager(K[0]);

for(var T in qx.ui.table.Table.__lB){O[T]={};
O[T].capture=S.getListeners(K[0],T,true);
O[T].bubble=S.getListeners(K[0],T,false);
}}this._cleanUpMetaColumns(Q.length);
var P=0;

for(var i=0;i<K.length;i++){var U=K[i];
var R=U.getTablePaneModel();
R.setFirstColumnX(P);
R.setMaxColumnCount(Q[i]);
P+=Q[i];
}if(Q.length>K.length){var N=this.getTableColumnModel();

for(var i=K.length;i<Q.length;i++){var R=this.getNewTablePaneModel()(N);
R.setFirstColumnX(P);
R.setMaxColumnCount(Q[i]);
P+=Q[i];
var U=this.getNewTablePaneScroller()(this);
U.setTablePaneModel(R);
U.addListener(cv,this._onScrollY,this);
for(T in qx.ui.table.Table.__lB){if(!O[T]){break;
}
if(O[T].capture&&O[T].capture.length>0){var L=O[T].capture;

for(var i=0;i<L.length;i++){var M=L[i].context;

if(!M){M=this;
}else if(M==K[0]){M=U;
}U.addListener(T,L[i].handler,M,true);
}}
if(O[T].bubble&&O[T].bubble.length>0){var W=O[T].bubble;

for(var i=0;i<W.length;i++){var M=W[i].context;

if(!M){M=this;
}else if(M==K[0]){M=U;
}U.addListener(T,W[i].handler,M,false);
}}}var V=(i==Q.length-1)?1:0;
this.__lx.add(U,{flex:V});
K=this._getPaneScrollerArr();
}}for(var i=0;i<K.length;i++){var U=K[i];
var X=(i==(K.length-1));
U.getHeader().setHeight(this.getHeaderCellHeight());
U.setTopRightWidget(X?this.getChildControl(bF):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(bF);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(p,q){var r=this._getPaneScrollerArr();

for(var i=0;i<r.length;i++){r[i].setFocusCellOnMouseMove(p);
}},_applyShowCellFocusIndicator:function(dx,dy){var dz=this._getPaneScrollerArr();

for(var i=0;i<dz.length;i++){dz[i].setShowCellFocusIndicator(dx);
}},_applyKeepFirstVisibleRowComplete:function(s,t){var u=this._getPaneScrollerArr();

for(var i=0;i<u.length;i++){u[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__ly;
},_getPaneScrollerArr:function(){return this.__lx.getChildren();
},getPaneScroller:function(dk){return this._getPaneScrollerArr()[dk];
},_cleanUpMetaColumns:function(v){var w=this._getPaneScrollerArr();

if(w!=null){for(var i=w.length-1;i>=v;i--){w[i].destroy();
}}},_onChangeLocale:function(a){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(bt){var bu=this._getPaneScrollerArr();

for(var i=0;i<bu.length;i++){bu[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dd){var de=this._getPaneScrollerArr();

for(var i=0;i<de.length;i++){de[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dR){var dS=dR.getData();
this._updateTableData(dS.firstRow,dS.lastRow,dS.firstColumn,dS.lastColumn,dS.removeStart,dS.removeCount);
},_updateTableData:function(eN,eO,eP,eQ,eR,eS){var eT=this._getPaneScrollerArr();
if(eS){this.getSelectionModel().removeSelectionInterval(eR,eR+eS);
}
for(var i=0;i<eT.length;i++){eT[i].onTableModelDataChanged(eN,eO,eP,eQ);
}var eU=this.getTableModel().getRowCount();

if(eU!=this.__lD){this.__lD=eU;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(d){if(!this.__lE){this.__lE=true;
var e=this._getPaneScrollerArr();

for(var i=0;i<e.length;i++){e[i].setScrollY(d.getData());
}this.__lE=false;
}},_onKeyPress:function(Y){if(!this.getEnabled()){return;
}var bg=this.__lA;
var bd=true;
var bh=Y.getKeyIdentifier();

if(this.isEditing()){if(Y.getModifiers()==0){switch(bh){case cV:this.stopEditing();
var bg=this.__lA;
this.moveFocusedCell(0,1);

if(this.__lA!=bg){bd=this.startEditing();
}break;
case bI:this.cancelEditing();
this.focus();
break;
default:bd=false;
break;
}}return;
}else{if(Y.isCtrlPressed()){bd=true;

switch(bh){case bJ:var be=this.getTableModel().getRowCount();

if(be>0){this.getSelectionModel().setSelectionInterval(0,be-1);
}break;
default:bd=false;
break;
}}else{switch(bh){case cb:this.__ly.handleSelectKeyDown(this.__lA,Y);
break;
case cD:case cV:bd=this.startEditing();
break;
case cx:this.setFocusedCell(this.__lz,0,true);
break;
case cE:var be=this.getTableModel().getRowCount();
this.setFocusedCell(this.__lz,be-1,true);
break;
case bX:this.moveFocusedCell(-1,0);
break;
case bY:this.moveFocusedCell(1,0);
break;
case bT:this.moveFocusedCell(0,-1);
break;
case ck:this.moveFocusedCell(0,1);
break;
case bB:case bV:var bc=this.getPaneScroller(0);
var bf=bc.getTablePane();
var be=bf.getVisibleRowCount()-1;
var bb=this.getRowHeight();
var ba=(bh==bB)?-1:1;
bc.setScrollY(bc.getScrollY()+ba*be*bb);
this.moveFocusedCell(0,ba*be);
break;
default:bd=false;
}}}
if(bg!=this.__lA&&this.getRowFocusChangeModifiesSelection()){this.__ly.handleMoveKeyDown(this.__lA,Y);
}
if(bd){Y.preventDefault();
Y.stopPropagation();
}},_onFocusChanged:function(da){var db=this._getPaneScrollerArr();

for(var i=0;i<db.length;i++){db[i].onFocusChanged();
}},_onColVisibilityChanged:function(m){var n=this._getPaneScrollerArr();

for(var i=0;i<n.length;i++){n[i].onColVisibilityChanged();
}var o=m.getData();

if(this.__lF!=null&&o.col!=null&&o.visible!=null){this.__lF[o.col].setVisible(o.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(ee){var ef=this._getPaneScrollerArr();

for(var i=0;i<ef.length;i++){var eg=ee.getData();
ef[i].setColumnWidth(eg.col,eg.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(E){var F=this._getPaneScrollerArr();

for(var i=0;i<F.length;i++){F[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(bm){var bn=this._getMetaColumnAtPageX(bm);
return (bn!=-1)?this.getPaneScroller(bn):null;
},setFocusedCell:function(dr,ds,dt){if(!this.isEditing()&&(dr!=this.__lz||ds!=this.__lA)){if(dr===null){dr=0;
}this.__lz=dr;
this.__lA=ds;
var du=this._getPaneScrollerArr();

for(var i=0;i<du.length;i++){du[i].setFocusedCell(dr,ds);
}
if(dr!==null&&dt){this.scrollCellVisible(dr,ds);
}}},clearSelection:function(){this.getSelectionModel().clearSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__lz;
},getFocusedRow:function(){return this.__lA;
},highlightFocusedRow:function(y){this.getDataRowRenderer().setHighlightFocusRow(y);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var ek=this._getPaneScrollerArr();

for(var i=0;i<ek.length;i++){ek[i].onFocusChanged();
}},moveFocusedCell:function(dC,dD){var dH=this.__lz;
var dI=this.__lA;

if(dH===null||dI===null){return;
}
if(dC!=0){var dG=this.getTableColumnModel();
var x=dG.getVisibleX(dH);
var dF=dG.getVisibleColumnCount();
x=qx.lang.Number.limit(x+dC,0,dF-1);
dH=dG.getVisibleColumnAtX(x);
}
if(dD!=0){var dE=this.getTableModel();
dI=qx.lang.Number.limit(dI+dD,0,dE.getRowCount()-1);
}this.setFocusedCell(dH,dI,true);
},scrollCellVisible:function(eJ,eK){var eL=this.getTableColumnModel();
var x=eL.getVisibleX(eJ);
var eM=this._getMetaColumnAtColumnX(x);

if(eM!=-1){this.getPaneScroller(eM).scrollCellVisible(eJ,eK);
}},isEditing:function(){if(this.__lz!=null){var x=this.getTableColumnModel().getVisibleX(this.__lz);
var f=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(f).isEditing();
}return false;
},startEditing:function(){if(this.__lz!=null){var x=this.getTableColumnModel().getVisibleX(this.__lz);
var H=this._getMetaColumnAtColumnX(x);
var G=this.getPaneScroller(H).startEditing();
return G;
}return false;
},stopEditing:function(){if(this.__lz!=null){var x=this.getTableColumnModel().getVisibleX(this.__lz);
var z=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(z).stopEditing();
}},cancelEditing:function(){if(this.__lz!=null){var x=this.getTableColumnModel().getVisibleX(this.__lz);
var dQ=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(dQ).cancelEditing();
}},updateContent:function(){var bo=this._getPaneScrollerArr();

for(var i=0;i<bo.length;i++){bo[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(dh){var di=this._getPaneScrollerArr();

for(var i=0;i<di.length;i++){var dj=di[i].getContainerLocation();

if(dh>=dj.left&&dh<=dj.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(A){var C=this.getMetaColumnCounts();
var D=0;

for(var i=0;i<C.length;i++){var B=C[i];
D+=B;

if(B==-1||A<D){return i;
}}return -1;
},_updateStatusBar:function(){var bi=this.getTableModel();

if(this.getStatusBarVisible()&&bi){var bj=this.getSelectionModel().getSelectedCount();
var bl=bi.getRowCount();
var bk;

if(bl>0){if(bj==0){bk=this.trn(cc,bw,bl,bl);
}else{bk=this.trn(bM,ca,bl,bj,bl);
}}
if(this.__lC){if(bk){bk+=this.__lC;
}else{bk=this.__lC;
}}
if(bk){this.getChildControl(bD).setValue(bk);
}}},_updateScrollerWidths:function(){var dl=this._getPaneScrollerArr();

for(var i=0;i<dl.length;i++){var dn=(i==(dl.length-1));
var dp=dl[i].getTablePaneModel().getTotalWidth();
dl[i].setPaneWidth(dp);
var dm=dn?1:0;
dl[i].setLayoutProperties({flex:dm});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var dW=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var ea=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var dT=this._getPaneScrollerArr();
var dV=false;
var dY=false;

for(var i=0;i<dT.length;i++){var eb=(i==(dT.length-1));
var dU=dT[i].getNeededScrollBars(dV,!eb);

if(dU&dW){dV=true;
}
if(eb&&(dU&ea)){dY=true;
}}for(var i=0;i<dT.length;i++){var eb=(i==(dT.length-1));
var dX;
dT[i].setHorizontalScrollBarVisible(dV);
if(eb){dX=dT[i].getVerticalScrollBarVisible();
}dT[i].setVerticalScrollBarVisible(eb&&dY);
if(eb&&dY!=dX){this.fireDataEvent(bO,dY);
}}},_initColumnMenu:function(){var dL=this.getTableModel();
var dM=this.getTableColumnModel();
var dN=this.getChildControl(bF);
dN.empty();
var dK=dN.getMenu();
var dO={table:this,menu:dK,columnButton:dN};
this.fireDataEvent(cl,dO);
this.__lF={};

for(var dP=0,l=dL.getColumnCount();dP<l;dP++){var dJ=dN.factory(ct,{text:dL.getColumnName(dP),column:dP,bVisible:dM.isColumnVisible(dP)});
qx.core.Assert.assertInterface(dJ,qx.ui.table.IColumnMenuItem);
dJ.addListener(ce,this._createColumnVisibilityCheckBoxHandler(dP),this);
this.__lF[dP]=dJ;
}var dO={table:this,menu:dK,columnButton:dN};
this.fireDataEvent(cN,dO);
},_createColumnVisibilityCheckBoxHandler:function(dg){return function(br){var bs=this.getTableColumnModel();
bs.setColumnVisible(dg,br.getData());
};
},setColumnWidth:function(b,c){this.getTableColumnModel().setColumnWidth(b,c);
},_onResize:function(){this.fireEvent(cy);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(eE,eF,self,eG){if(arguments.callee.self.__lB[eE]){for(var i=0,eH=this._getPaneScrollerArr();i<eH.length;i++){eH[i].addListener.apply(eH[i],arguments);
}}else{return arguments.callee.base.call(this,eE,eF,self,eG);
}},removeListener:function(eA,eB,self,eC){if(arguments.callee.self.__lB[eA]){for(var i=0,eD=this._getPaneScrollerArr();i<eD.length;i++){eD[i].removeListener.apply(eD[i],arguments);
}}else{arguments.callee.base.call(this,eA,eB,self,eC);
}},destroy:function(){this.getChildControl(bF).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(by,cS)){qx.locale.Manager.getInstance().removeListener(bA,this._onChangeLocale,this);
}var dB=this.getSelectionModel();

if(dB){dB.dispose();
}var dA=this.getDataRowRenderer();

if(dA){dA.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(cA,cK,co,bU);
this._disposeMap(ci);
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(c,d){},getRowHeightStyle:function(e){},createRowStyle:function(b){},getRowClass:function(f){}}});
})();
(function(){var o="",n="table-row-background-even",m="Boolean",l="default",k="height:",j="'",i="__lG",h="table-row",g="table-row-background-focused",f=';color:',B="table-row-background-odd",A="__lI",z="1px solid ",y="table-row-line",x="table-row-background-selected",w="background-color:",v=';border-bottom: 1px solid ',u="table-row-selected",t="table-row-background-focused-selected",s="px;",q="__lH",r="qx.ui.table.rowrenderer.Default",p=";";
qx.Class.define(r,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__lG=o;
this.__lG={};
this.__lH={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(l));
var a=qx.theme.manager.Color.getInstance();
this.__lH.bgcolFocusedSelected=a.resolve(t);
this.__lH.bgcolFocused=a.resolve(g);
this.__lH.bgcolSelected=a.resolve(x);
this.__lH.bgcolEven=a.resolve(n);
this.__lH.bgcolOdd=a.resolve(B);
this.__lH.colSelected=a.resolve(u);
this.__lH.colNormal=a.resolve(h);
this.__lH.horLine=a.resolve(y);
},properties:{highlightFocusRow:{check:m,init:true}},members:{__lH:null,__lI:null,__lG:null,_insetY:1,_renderFont:function(C){if(C){this.__lI=C.getStyles();
this.__lG=qx.bom.element.Style.compile(this.__lI);
this.__lG=this.__lG.replace(/"/g,j);
}else{this.__lG=o;
this.__lI=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(D,E){var G=this.__lI;
var F=E.style;
qx.bom.element.Style.setStyles(E,G);

if(D.focusedRow&&this.getHighlightFocusRow()){F.backgroundColor=D.selected?this.__lH.bgcolFocusedSelected:this.__lH.bgcolFocused;
}else{if(D.selected){F.backgroundColor=this.__lH.bgcolSelected;
}else{F.backgroundColor=(D.row%2==0)?this.__lH.bgcolEven:this.__lH.bgcolOdd;
}}F.color=D.selected?this.__lH.colSelected:this.__lH.colNormal;
F.borderBottom=z+this.__lH.horLine;
},getRowHeightStyle:function(e){if(qx.bom.client.Feature.CONTENT_BOX){e-=this._insetY;
}return k+e+s;
},createRowStyle:function(c){var d=[];
d.push(p);
d.push(this.__lG);
d.push(w);

if(c.focusedRow&&this.getHighlightFocusRow()){d.push(c.selected?this.__lH.bgcolFocusedSelected:this.__lH.bgcolFocused);
}else{if(c.selected){d.push(this.__lH.bgcolSelected);
}else{d.push((c.row%2==0)?this.__lH.bgcolEven:this.__lH.bgcolOdd);
}}d.push(f);
d.push(c.selected?this.__lH.colSelected:this.__lH.colNormal);
d.push(v,this.__lH.horLine);
return d.join(o);
},getRowClass:function(b){return o;
}},destruct:function(){this._disposeFields(q,A,i);
}});
})();
(function(){var c="qx.ui.table.IColumnMenuButton";
qx.Interface.define(c,{properties:{menu:{}},members:{factory:function(a,b){return true;
},empty:function(){return true;
}}});
})();
(function(){var m="menu-button",k="table-column-reset-button",j="separator",h="user-button",g="qx.ui.table.columnmenu.Button",f="menu";
qx.Class.define(g,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__lJ:null,factory:function(a,b){switch(a){case f:var c=new qx.ui.menu.Menu();
this.setMenu(c);
return c;
case m:var e=new qx.ui.table.columnmenu.MenuItem(b.text);
e.setVisible(b.bVisible);
this.getMenu().add(e);
return e;
case h:var d=new qx.ui.menu.Button(b.text);
d.set({appearance:k});
return d;
case j:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+a);
}},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}}});
})();
(function(){var q="Please use the value property instead.",p="changeChecked",o="checked",n="menu-checkbox",m="_applyValue",l="changeValue",k="Please use the changeValue event instead.",j="qx.ui.menu.CheckBox",i="function(value) {return qx.lang.Type.isString(value) || qx.lang.Type.isBoolean(value)}",h="qx.event.type.Data";
qx.Class.define(j,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MFormElement],implement:[qx.ui.form.IFormElement,qx.ui.form.IBooleanForm],construct:function(f,g){arguments.callee.base.call(this);
if(f!=null){if(f.translate){this.setLabel(f.translate());
}else{this.setLabel(f);
}}
if(g!=null){this.setMenu(g);
}},events:{"changeChecked":h},properties:{appearance:{refine:true,init:n},value:{check:i,init:false,apply:m,event:l,nullable:true}},members:{_applyValue:function(r,s){r?this.addState(o):this.removeState(o);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.toggleValue();
}},_onKeyPress:function(e){this.toggleValue();
},setChecked:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.setValue(a);
},isChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return this.getValue();
},toggleChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.setValue(!this.getValue());
},getChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return this.getValue();
},resetChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.resetValue();
},addListener:function(b,c,self,d){if(b==p){qx.log.Logger.deprecatedEventWarning(arguments.callee,p,k);
}return arguments.callee.base.call(this,b,c,self,d);
},toggleValue:function(){this.setValue(!this.getValue());
},isValue:function(){return this.getValue();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(i){arguments.callee.base.call(this,i);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__lK:false,_applyVisible:function(g,h){if(!this.bInListener){this.setValue(g);
}}}});
})();
(function(){var i="qx.ui.table.selection.Model",h="qx.ui.table.selection.Manager";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:i}},members:{__lL:null,handleMouseDown:function(p,q){if(q.isLeftPressed()){var r=this.getSelectionModel();

if(!r.isSelectedIndex(p)){this._handleSelectEvent(p,q);
this.__lL=true;
}else{this.__lL=false;
}}else if(q.isRightPressed()&&q.getModifiers()==0){var r=this.getSelectionModel();

if(!r.isSelectedIndex(p)){r.setSelectionInterval(p,p);
}}},handleMouseUp:function(a,b){if(b.isLeftPressed()&&!this.__lL){this._handleSelectEvent(a,b);
}},handleClick:function(s,t){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
},handleMoveKeyDown:function(l,m){var o=this.getSelectionModel();

switch(m.getModifiers()){case 0:o.setSelectionInterval(l,l);
break;
case qx.event.type.Dom.SHIFT_MASK:var n=o.getAnchorSelectionIndex();

if(n==-1){o.setSelectionInterval(l,l);
}else{o.setSelectionInterval(n,l);
}break;
}},_handleSelectEvent:function(c,d){var g=this.getSelectionModel();
var e=g.getLeadSelectionIndex();
var f=g.getAnchorSelectionIndex();

if(d.isShiftPressed()){if(c!=e||g.isSelectionEmpty()){if(f==-1){f=c;
}
if(d.isCtrlOrCommandPressed()){g.addSelectionInterval(f,c);
}else{g.setSelectionInterval(f,c);
}}}else if(d.isCtrlOrCommandPressed()){if(g.isSelectedIndex(c)){g.removeSelectionInterval(c,c);
}else{g.addSelectionInterval(c,c);
}}else{g.setSelectionInterval(c,c);
}}}});
})();
(function(){var p="..",o="changeSelection",n="_applySelectionMode",m="]",l="__lM",k="qx.event.type.Event",h="Ranges:",g="qx.ui.table.selection.Model",f=" [";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lM=[];
this.__lN=-1;
this.__lO=-1;
this.hasBatchModeRefCount=0;
this.__lP=false;
},events:{"changeSelection":k},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:n}},members:{__lP:null,__lN:null,__lO:null,__lM:null,_applySelectionMode:function(H){this.clearSelection();
},setBatchMode:function(S){if(S){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__lP){this.__lP=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__lN;
},_setAnchorSelectionIndex:function(C){this.__lN=C;
},getLeadSelectionIndex:function(){return this.__lO;
},_setLeadSelectionIndex:function(P){this.__lO=P;
},_getSelectedRangeArr:function(){return this.__lM;
},clearSelection:function(){if(!this.isSelectionEmpty()){this._clearSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__lM.length==0;
},getSelectedCount:function(){var E=0;

for(var i=0;i<this.__lM.length;i++){var D=this.__lM[i];
E+=D.maxIndex-D.minIndex+1;
}return E;
},isSelectedIndex:function(Q){for(var i=0;i<this.__lM.length;i++){var R=this.__lM[i];

if(Q>=R.minIndex&&Q<=R.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var q=[];

for(var i=0;i<this.__lM.length;i++){q.push({minIndex:this.__lM[i].minIndex,maxIndex:this.__lM[i].maxIndex});
}return q;
},iterateSelection:function(F,G){for(var i=0;i<this.__lM.length;i++){for(var j=this.__lM[i].minIndex;j<=this.__lM[i].maxIndex;j++){F.call(G,j);
}}},setSelectionInterval:function(c,d){var e=arguments.callee.self;

switch(this.getSelectionMode()){case e.NO_SELECTION:return;
case e.SINGLE_SELECTION:if(this.isSelectedIndex(d)){return;
}c=d;
break;
case e.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=c;i<=d;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._clearSelection();
this._addSelectionInterval(c,d);
this._fireChangeSelection();
},addSelectionInterval:function(z,A){var B=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case B.NO_SELECTION:return;
case B.MULTIPLE_INTERVAL_SELECTION:case B.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(z,A);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(z,A);
break;
}},removeSelectionInterval:function(r,s){this.__lN=r;
this.__lO=s;
var t=Math.min(r,s);
var v=Math.max(r,s);
for(var i=0;i<this.__lM.length;i++){var x=this.__lM[i];

if(x.minIndex>v){break;
}else if(x.maxIndex>=t){var y=(x.minIndex>=t)&&(x.minIndex<=v);
var w=(x.maxIndex>=t)&&(x.maxIndex<=v);

if(y&&w){this.__lM.splice(i,1);
i--;
}else if(y){x.minIndex=v+1;
}else if(w){x.maxIndex=t-1;
}else{var u={minIndex:v+1,maxIndex:x.maxIndex};
this.__lM.splice(i+1,0,u);
x.maxIndex=t-1;
break;
}}}this._fireChangeSelection();
},_clearSelection:function(){this.__lM=[];
this.__lN=-1;
this.__lO=-1;
},_addSelectionInterval:function(I,J){this.__lN=I;
this.__lO=J;
var K=Math.min(I,J);
var M=Math.max(I,J);
var L=0;

for(;L<this.__lM.length;L++){var N=this.__lM[L];

if(N.minIndex>K){break;
}}this.__lM.splice(L,0,{minIndex:K,maxIndex:M});
var O=this.__lM[0];

for(var i=1;i<this.__lM.length;i++){var N=this.__lM[i];

if(O.maxIndex+1>=N.minIndex){O.maxIndex=Math.max(O.maxIndex,N.maxIndex);
this.__lM.splice(i,1);
i--;
}else{O=N;
}}},_dumpRanges:function(){var a=h;

for(var i=0;i<this.__lM.length;i++){var b=this.__lM[i];
a+=f+b.minIndex+p+b.maxIndex+m;
}this.debug(a);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__lP=true;
}else{this.fireEvent(o);
}}},destruct:function(){this._disposeFields(l);
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var f="qx.ui.table.headerrenderer.Default",e="String";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:e,init:null,nullable:true}},members:{createHeaderCell:function(g){var h=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(g,h);
return h;
},updateHeaderCell:function(a,b){var c=qx.ui.table.headerrenderer.Default;
if(a.name&&a.name.translate){b.setLabel(a.name.translate());
}else{b.setLabel(a.name);
}var d=b.getToolTip();

if(this.getToolTip()!=null){if(d==null){d=new qx.ui.tooltip.ToolTip(this.getToolTip());
b.setToolTip(d);
}else{d.setLabel(this.getToolTip());
}}a.sorted?b.addState(c.STATE_SORTED):b.removeState(c.STATE_SORTED);
a.sortedAscending?b.addState(c.STATE_SORTED_ASCENDING):b.removeState(c.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var c="qx.ui.table.ICellRenderer";
qx.Interface.define(c,{members:{createDataCellHtml:function(a,b){return true;
}}});
})();
(function(){var l="",k="px;",j=".qooxdoo-table-cell {",i="qooxdoo-table-cell",h='" ',g="nowrap",f="default",e="qx.client",d="}",c="width:",I=".qooxdoo-table-cell-right { text-align:right } ",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="table-row-line",A='>',z="mshtml",s='</div>',t="ellipsis",q="content-box",r='left:',o="qx.ui.table.cellrenderer.Abstract",p='" style="',m="abstract",n="none",u="hidden",v="} ",x='px;',w=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(o,{type:m,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var R=qx.ui.table.cellrenderer.Abstract;

if(!R.__lQ){var T=qx.theme.manager.Color.getInstance();
R.__lQ=arguments.callee.self;
var S=j+
qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:g,borderRight:D+T.resolve(B),padding:H,cursor:f,textOverflow:t,userSelect:n})+v+I+w+C;

if(!qx.core.Variant.isSet(e,z)){S+=j+qx.bom.element.BoxSizing.compile(q)+d;
}R.__lQ.stylesheet=qx.bom.Stylesheet.createElement(S);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(U){return i;
},_getCellStyle:function(a){return a.style||l;
},_getCellAttributes:function(L){return l;
},_getContentHtml:function(b){return b.value||l;
},_getCellSizeStyle:function(M,N,O,P){var Q=l;

if(qx.bom.client.Feature.CONTENT_BOX){M-=O;
N-=P;
}Q+=c+M+k;
Q+=E+N+k;
return Q;
},createDataCellHtml:function(J,K){K.push(G,this._getCellClass(J),p,r,J.styleLeft,x,this._getCellSizeStyle(J.styleWidth,J.styleHeight,this._insetX,this._insetY),this._getCellStyle(J),h,this._getCellAttributes(J),A+this._getContentHtml(J),s);
}}});
})();
(function(){var m="",l="number",k="Boolean",j="qx.ui.table.cellrenderer.Default",i=" qooxdoo-table-cell-bold",h=" qooxdoo-table-cell-right",g=" qooxdoo-table-cell-italic",f="string";
qx.Class.define(j,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:k,init:true}},members:{_getStyleFlags:function(e){if(this.getUseAutoAlign()){if(typeof e.value==l){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(b){var c=arguments.callee.base.call(this,b);

if(!c){return m;
}var d=this._getStyleFlags(b);

if(d&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){c+=h;
}
if(d&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){c+=i;
}
if(d&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){c+=g;
}return c;
},_getContentHtml:function(a){return qx.bom.String.escape(this._formatValue(a));
},_formatValue:function(n){var p=n.value;

if(p==null){return m;
}
if(typeof p==f){return p;
}else if(typeof p==l){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var i="",h="Function",g="number",f="qx.ui.table.celleditor.TextField",e="table-editor-textfield",d="appear";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,construct:function(){arguments.callee.base.call(this);
},properties:{validationFunction:{check:h,nullable:true,init:null}},members:{__lR:null,createCellEditor:function(j){var k=new qx.ui.form.TextField;
k.setAppearance(e);
k.originalValue=j.value;

if(j.value===null){j.value=i;
}k.setValue(i+j.value);
k.addListener(d,function(){k.selectAllText();
});
return k;
},getCellEditorValue:function(a){var c=a.getValue();
var b=this.getValidationFunction();

if(!this.__lR&&b){c=b(c,a.originalValue);
this.__lR=true;
}
if(typeof a.originalValue==g){c=parseFloat(c);
}return c;
}}});
})();
(function(){var R="qx.event.type.Data",Q="visibilityChanged",P="visibilityChangedPre",O="orderChanged",N="__lY",M="__lT",L="widthChanged",K="qx.ui.table.columnmodel.Basic",J="__lS",I="__lW",F="__ma",H="__lV",G="__lX";
qx.Class.define(K,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lS=[];
this.__lT=[];
},events:{"widthChanged":R,"visibilityChangedPre":R,"visibilityChanged":R,"orderChanged":R},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__lU:null,__lV:null,__lT:null,__lS:null,__lW:null,__lX:null,__lY:null,__ma:null,init:function(b){this.__lW=[];
var e=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var f=this.__lX=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER();
var d=this.__lY=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER();
var c=this.__ma=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY();
this.__lS=[];
this.__lT=[];

for(var h=0;h<b;h++){this.__lW[h]={width:e,headerRenderer:f,dataRenderer:d,editorFactory:c};
this.__lS[h]=h;
this.__lT[h]=h;
}this.__lV=null;

for(var h=0;h<b;h++){var g={col:h,visible:true};
this.fireDataEvent(P,g);
this.fireDataEvent(Q,g);
}},getVisibleColumns:function(){return this.__lT!=null?this.__lT:[];
},setColumnWidth:function(y,z){var B=this.__lW[y].width;

if(B!=z){this.__lW[y].width=z;
var A={col:y,newWidth:z,oldWidth:B};
this.fireDataEvent(L,A);
}},getColumnWidth:function(T){return this.__lW[T].width;
},setHeaderCellRenderer:function(j,k){var l=this.__lW[j].headerRenderer;

if(l!==this.__lX){l.dispose();
}this.__lW[j].headerRenderer=k;
},getHeaderCellRenderer:function(a){return this.__lW[a].headerRenderer;
},setDataCellRenderer:function(bc,bd){var be=this.__lW[bc].headerRenderer;

if(be!==this.__lY){be.dispose();
}this.__lW[bc].dataRenderer=bd;
},getDataCellRenderer:function(bj){return this.__lW[bj].dataRenderer;
},setCellEditorFactory:function(bg,bh){var bi=this.__lW[bg].headerRenderer;

if(bi!==this.__ma){bi.dispose();
}this.__lW[bg].editorFactory=bh;
},getCellEditorFactory:function(bf){return this.__lW[bf].editorFactory;
},_getColToXPosMap:function(){if(this.__lV==null){this.__lV={};

for(var E=0;E<this.__lS.length;E++){var D=this.__lS[E];
this.__lV[D]={overX:E};
}
for(var C=0;C<this.__lT.length;C++){var D=this.__lT[C];
this.__lV[D].visX=C;
}}return this.__lV;
},getVisibleColumnCount:function(){return this.__lT!=null?this.__lT.length:0;
},getVisibleColumnAtX:function(n){return this.__lT[n];
},getVisibleX:function(ba){return this._getColToXPosMap()[ba].visX;
},getOverallColumnCount:function(){return this.__lS.length;
},getOverallColumnAtX:function(S){return this.__lS[S];
},getOverallX:function(bb){return this._getColToXPosMap()[bb].overX;
},isColumnVisible:function(m){return (this._getColToXPosMap()[m].visX!=null);
},setColumnVisible:function(o,p){if(p!=this.isColumnVisible(o)){if(p){var v=this._getColToXPosMap();
var s=v[o].overX;

if(s==null){throw new Error("Showing column failed: "+o+". The column is not added to this TablePaneModel.");
}var t;

for(var x=s+1;x<this.__lS.length;x++){var u=this.__lS[x];
var q=v[u].visX;

if(q!=null){t=q;
break;
}}if(t==null){t=this.__lT.length;
}this.__lT.splice(t,0,o);
}else{var r=this.getVisibleX(o);
this.__lT.splice(r,1);
}this.__lV=null;
if(!this.__lU){var w={col:o,visible:p};
this.fireDataEvent(P,w);
this.fireDataEvent(Q,w);
}}},moveColumn:function(U,V){this.__lU=true;
var Y=this.__lS[U];
var W=this.isColumnVisible(Y);

if(W){this.setColumnVisible(Y,false);
}this.__lS.splice(U,1);
this.__lS.splice(V,0,Y);
this.__lV=null;

if(W){this.setColumnVisible(Y,true);
}this.__lU=false;
var X={col:Y,fromOverXPos:U,toOverXPos:V};
this.fireDataEvent(O,X);
}},destruct:function(){for(var i=0;i<this.__lW.length;i++){this.__lW[i].headerRenderer.dispose();
this.__lW[i].dataRenderer.dispose();
this.__lW[i].editorFactory.dispose();
}this._disposeFields(J,M,I,H);
this._disposeObjects(G,N,F);
}});
})();
(function(){var o="icon",n="label",m="String",l="sort-icon",k="_applySortIcon",j="_applyIcon",i="table-header-cell",h="qx.ui.table.headerrenderer.HeaderCell",g="_applyLabel";
qx.Class.define(h,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var p=new qx.ui.layout.Grid();
p.setRowFlex(0,1);
p.setColumnFlex(1,1);
p.setColumnFlex(2,1);
this.setLayout(p);
},properties:{appearance:{refine:true,init:i},label:{check:m,init:null,nullable:true,apply:g},sortIcon:{check:m,init:null,nullable:true,apply:k,themeable:true},icon:{check:m,init:null,nullable:true,apply:j}},members:{_applyLabel:function(c,d){if(c){this._showChildControl(n).setValue(c);
}else{this._excludeChildControl(n);
}},_applySortIcon:function(q,r){if(q){this._showChildControl(l).setSource(q);
}else{this._excludeChildControl(l);
}},_applyIcon:function(a,b){if(a){this._showChildControl(o).setSource(a);
}else{this._excludeChildControl(o);
}},_createChildControlImpl:function(e){var f;

switch(e){case n:f=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(f,{row:0,column:1});
break;
case l:f=new qx.ui.basic.Image(this.getSortIcon());
f.setAnonymous(true);
this._add(f,{row:0,column:2});
break;
case o:f=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(f,{row:0,column:0});
break;
}return f||arguments.callee.base.call(this,e);
}}});
})();
(function(){var c="qx.util.format.IFormat";
qx.Interface.define(c,{members:{format:function(b){},parse:function(a){}}});
})();
(function(){var Q="",P="Number",O="-",N="0",M="String",L="changeNumberFormat",K='(',J="g",I="Boolean",H="$",A="NaN",G='([0-9]{1,3}(?:',D='{0,1}[0-9]{3}){0,})',z='\\d+){0,1}',y="qx.util.format.NumberFormat",C="Infinity",B="^",E=".",x="-Infinity",F='([-+]){0,1}';
qx.Class.define(y,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(w){arguments.callee.base.call(this);
this.__mb=w;
},statics:{getIntegerInstance:function(){var v=qx.util.format.NumberFormat;

if(v._integerInstance==null){v._integerInstance=new v();
v._integerInstance.setMaximumFractionDigits(0);
}return v._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:P,init:0},maximumIntegerDigits:{check:P,nullable:true},minimumFractionDigits:{check:P,init:0},maximumFractionDigits:{check:P,nullable:true},groupingUsed:{check:I,init:true},prefix:{check:M,init:Q,event:L},postfix:{check:M,init:Q,event:L}},members:{__mb:null,format:function(j){switch(j){case Infinity:return C;
case -Infinity:return x;
case NaN:return A;
}var n=(j<0);

if(n){j=-j;
}
if(this.getMaximumFractionDigits()!=null){var u=Math.pow(10,this.getMaximumFractionDigits());
j=Math.round(j*u)/u;
}var t=String(Math.floor(j)).length;
var k=Q+j;
var q=k.substring(0,t);

while(q.length<this.getMinimumIntegerDigits()){q=N+q;
}
if(this.getMaximumIntegerDigits()!=null&&q.length>this.getMaximumIntegerDigits()){q=q.substring(q.length-this.getMaximumIntegerDigits());
}var p=k.substring(t+1);

while(p.length<this.getMinimumFractionDigits()){p+=N;
}
if(this.getMaximumFractionDigits()!=null&&p.length>this.getMaximumFractionDigits()){p=p.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var m=q;
q=Q;
var s;

for(s=m.length;s>3;s-=3){q=Q+qx.locale.Number.getGroupSeparator(this.__mb)+m.substring(s-3,s)+q;
}q=m.substring(0,s)+q;
}var o=this.getPrefix()?this.getPrefix():Q;
var l=this.getPostfix()?this.getPostfix():Q;
var r=o+(n?O:Q)+q;

if(p.length>0){r+=Q+qx.locale.Number.getDecimalSeparator(this.__mb)+p;
}r+=l;
return r;
},parse:function(a){var f=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__mb)+Q);
var d=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__mb)+Q);
var b=new RegExp(B+qx.lang.String.escapeRegexpChars(this.getPrefix())+F+G+f+D+K+d+z+qx.lang.String.escapeRegexpChars(this.getPostfix())+H);
var e=b.exec(a);

if(e==null){throw new Error("Number string '"+a+"' does not match the number format");
}var g=(e[1]==O);
var i=e[2];
var h=e[3];
i=i.replace(new RegExp(f,J),Q);
var c=(g?O:Q)+i;

if(h!=null&&h.length!=0){h=h.replace(new RegExp(d),Q);
c+=E+h;
}return parseFloat(c);
}}});
})();
(function(){var f="cldr_number_decimal_separator",e="cldr_number_percent_format",d="qx.locale.Number",c="cldr_number_group_separator";
qx.Class.define(d,{statics:{getDecimalSeparator:function(g){return qx.locale.Manager.getInstance().localize(f,[],g);
},getGroupSeparator:function(b){return qx.locale.Manager.getInstance().localize(c,[],b);
},getPercentFormat:function(a){return qx.locale.Manager.getInstance().localize(e,[],a);
}}});
})();
(function(){var bA="(\\d\\d?)",bz="format",by="abbreviated",bx="",bw="wide",bv="(",bu=")",bt="|",bs="stand-alone",br="wildcard",bg="default",bf="literal",be="'",bd="hour",bc="(\\d\\d?\\d?)",bb="ms",ba="narrow",Y="-",X="quoted_literal",W='a',bH="HH:mm:ss",bI="+",bF="HHmmss",bG="long",bD='z',bE="sec",bB="day",bC='Z',bJ=" ",bK="min",bk="__md",bj="SSS",bm="h",bl="mm",bo='L',bn="Z",bq='K',bp="EEEE",bi="^",bh=":",a='y',b="(\\d\\d(\\d\\d)?)",c="(\\d\\d)",d="__mf",e="K",f="a",g="GMT",h="dd",j="qx.util.format.DateFormat",k="([\\+\\-]\\d\\d:?\\d\\d)",bO="H",bN="YYYY",bM="__mc",bL="HH",bS="EE",bR='h',bQ="S",bP='s',bU='A',bT="KK",G="ss",H='H',E='S',F="0",K="MMMM",L='c',I="d",J="([a-zA-Z]+)",C='k',D="m",s='D',r="kk",u="hh",t="__mg",o="MM",n="yy",q="yyyy-MM-dd HH:mm:ss",p="short",m='d',l="unkown",Q='Y',R='m',S="(\\d\\d\\d\\d)",T="k",M='M',N="SS",O="MMM",P="s",U="M",V='w',B="EEE",A="$",z="__me",y="?",x='E',w="z",v="yyyy";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(cF,cG){arguments.callee.base.call(this);

if(!cG){this.__mc=qx.locale.Manager.getInstance().getLocale();
}else{this.__mc=cG;
}
if(cF!=null){this.__md=cF.toString();
}else{this.__md=qx.locale.Date.getDateFormat(bG,this.__mc)+bJ+qx.locale.Date.getDateTimeFormat(bF,bH,this.__mc);
}},statics:{getDateTimeInstance:function(){var cC=qx.util.format.DateFormat;
var cB=qx.locale.Date.getDateFormat(bG)+bJ+qx.locale.Date.getDateTimeFormat(bF,bH);

if(cC._dateInstance==null||cC.__md!=cB){cC._dateTimeInstance=new cC();
}return cC._dateTimeInstance;
},getDateInstance:function(){var bW=qx.util.format.DateFormat;
var bV=qx.locale.Date.getDateFormat(p)+bx;

if(bW._dateInstance==null||bW.__md!=bV){bW._dateInstance=new bW(bV);
}return bW._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:q,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__mc:null,__md:null,__me:null,__mf:null,__mg:null,__mh:function(dh,di){var dj=bx+dh;

while(dj.length<di){dj=F+dj;
}return dj;
},__mi:function(cp){var cq=new Date(cp.getTime());
var cr=cq.getDate();

while(cq.getMonth()!=0){cq.setDate(-1);
cr+=cq.getDate()+1;
}return cr;
},__mj:function(co){return new Date(co.getTime()+(3-((co.getDay()+6)%7))*86400000);
},__mk:function(dT){var dV=this.__mj(dT);
var dW=dV.getFullYear();
var dU=this.__mj(new Date(dW,0,4));
return Math.floor(1.5+(dV.getTime()-dU.getTime())/86400000/7);
},format:function(dz){if(dz==null){return null;
}var dF=qx.util.format.DateFormat;
var dG=this.__mc;
var dQ=dz.getFullYear();
var dK=dz.getMonth();
var dS=dz.getDate();
var dA=dz.getDay();
var dL=dz.getHours();
var dH=dz.getMinutes();
var dM=dz.getSeconds();
var dO=dz.getMilliseconds();
var dR=dz.getTimezoneOffset();
var dD=dR>0?1:-1;
var dB=Math.floor(Math.abs(dR)/60);
var dI=Math.abs(dR)%60;
this.__ml();
var dP=bx;

for(var i=0;i<this.__mg.length;i++){var dN=this.__mg[i];

if(dN.type==bf){dP+=dN.text;
}else{var dE=dN.character;
var dJ=dN.size;
var dC=y;

switch(dE){case a:case Q:if(dJ==2){dC=this.__mh(dQ%100,2);
}else if(dJ==4){dC=dQ;
}break;
case s:dC=this.__mh(this.__mi(dz),dJ);
break;
case m:dC=this.__mh(dS,dJ);
break;
case V:dC=this.__mh(this.__mk(dz),dJ);
break;
case x:if(dJ==2){dC=qx.locale.Date.getDayName(ba,dA,dG,bz);
}else if(dJ==3){dC=qx.locale.Date.getDayName(by,dA,dG,bz);
}else if(dJ==4){dC=qx.locale.Date.getDayName(bw,dA,dG,bz);
}break;
case L:if(dJ==2){dC=qx.locale.Date.getDayName(ba,dA,dG,bs);
}else if(dJ==3){dC=qx.locale.Date.getDayName(by,dA,dG,bs);
}else if(dJ==4){dC=qx.locale.Date.getDayName(bw,dA,dG,bs);
}break;
case M:if(dJ==1||dJ==2){dC=this.__mh(dK+1,dJ);
}else if(dJ==3){dC=qx.locale.Date.getMonthName(by,dK,dG,bz);
}else if(dJ==4){dC=qx.locale.Date.getMonthName(bw,dK,dG,bz);
}break;
case bo:if(dJ==1||dJ==2){dC=this.__mh(dK+1,dJ);
}else if(dJ==3){dC=qx.locale.Date.getMonthName(by,dK,dG,bs);
}else if(dJ==4){dC=qx.locale.Date.getMonthName(bw,dK,dG,bs);
}break;
case W:dC=(dL<12)?qx.locale.Date.getAmMarker(dG):qx.locale.Date.getPmMarker(dG);
break;
case H:dC=this.__mh(dL,dJ);
break;
case C:dC=this.__mh((dL==0)?24:dL,dJ);
break;
case bq:dC=this.__mh(dL%12,dJ);
break;
case bR:dC=this.__mh(((dL%12)==0)?12:(dL%12),dJ);
break;
case R:dC=this.__mh(dH,dJ);
break;
case bP:dC=this.__mh(dM,dJ);
break;
case E:dC=this.__mh(dO,dJ);
break;
case bD:if(dJ==1){dC=g+((dD>0)?Y:bI)+this.__mh(Math.abs(dB))+bh+this.__mh(dI,2);
}else if(dJ==2){dC=dF.MEDIUM_TIMEZONE_NAMES[dB];
}else if(dJ==3){dC=dF.FULL_TIMEZONE_NAMES[dB];
}break;
case bC:dC=((dD>0)?Y:bI)+this.__mh(Math.abs(dB),2)+this.__mh(dI,2);
break;
}dP+=dC;
}}return dP;
},parse:function(dk){this.__mm();
var dr=this.__me.regex.exec(dk);

if(dr==null){throw new Error("Date string '"+dk+"' does not match the date format: "+this.__md);
}var dl={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dm=1;

for(var i=0;i<this.__me.usedRules.length;i++){var dp=this.__me.usedRules[i];
var dn=dr[dm];

if(dp.field!=null){dl[dp.field]=parseInt(dn,10);
}else{dp.manipulator(dl,dn);
}dm+=(dp.groups==null)?1:dp.groups;
}var dq=new Date(dl.year,dl.month,dl.day,(dl.ispm)?(dl.hour+12):dl.hour,dl.min,dl.sec,dl.ms);

if(dl.month!=dq.getMonth()||dl.year!=dq.getFullYear()){throw new Error("Error parsing date '"+dk+"': the value for day or month is too large");
}return dq;
},__ml:function(){if(this.__mg!=null){return;
}this.__mg=[];
var cy;
var cw=0;
var cA=bx;
var cu=this.__md;
var cx=bg;
var i=0;

while(i<cu.length){var cz=cu.charAt(i);

switch(cx){case X:if(cz==be){if(i+1>=cu.length){i++;
break;
}var cv=cu.charAt(i+1);

if(cv==be){cA+=cz;
i++;
}else{i++;
cx=l;
}}else{cA+=cz;
i++;
}break;
case br:if(cz==cy){cw++;
i++;
}else{this.__mg.push({type:br,character:cy,size:cw});
cy=null;
cw=0;
cx=bg;
}break;
default:if((cz>=W&&cz<=bD)||(cz>=bU&&cz<=bC)){cy=cz;
cx=br;
}else if(cz==be){if(i+1>=cu.length){cA+=cz;
i++;
break;
}var cv=cu.charAt(i+1);

if(cv==be){cA+=cz;
i++;
}i++;
cx=X;
}else{cx=bg;
}
if(cx!=bg){if(cA.length>0){this.__mg.push({type:bf,text:cA});
cA=bx;
}}else{cA+=cz;
i++;
}break;
}}if(cy!=null){this.__mg.push({type:br,character:cy,size:cw});
}else if(cA.length>0){this.__mg.push({type:bf,text:cA});
}},__mm:function(){if(this.__me!=null){return ;
}var cb=this.__md;
this.__mn();
this.__ml();
var ch=[];
var cd=bi;

for(var bY=0;bY<this.__mg.length;bY++){var ci=this.__mg[bY];

if(ci.type==bf){cd+=qx.lang.String.escapeRegexpChars(ci.text);
}else{var ca=ci.character;
var ce=ci.size;
var cc;

for(var cj=0;cj<this.__mf.length;cj++){var cf=this.__mf[cj];

if(ca==cf.pattern.charAt(0)&&ce==cf.pattern.length){cc=cf;
break;
}}if(cc==null){var cg=bx;

for(var i=0;i<ce;i++){cg+=ca;
}throw new Error("Malformed date format: "+cb+". Wildcard "+cg+" is not supported");
}else{ch.push(cc);
cd+=cc.regex;
}}}cd+=A;
var bX;

try{bX=new RegExp(cd);
}catch(du){throw new Error("Malformed date format: "+cb);
}this.__me={regex:bX,"usedRules":ch,pattern:cd};
},__mn:function(){var cR=qx.util.format.DateFormat;

if(this.__mf!=null){return ;
}this.__mf=[];
var de=function(df,dg){dg=parseInt(dg,10);

if(dg<cR.ASSUME_YEAR_2000_THRESHOLD){dg+=2000;
}else if(dg<100){dg+=1900;
}df.year=dg;
};
var cT=function(cL,cM){cL.month=parseInt(cM,10)-1;
};
var cU=function(cJ,cK){cJ.ispm=(cK==cR.PM_MARKER);
};
var cY=function(ds,dt){ds.hour=parseInt(dt,10)%24;
};
var cS=function(dv,dw){dv.hour=parseInt(dw,10)%12;
};
var dc=function(cH,cI){return;
};
var da=qx.locale.Date.getMonthNames(by,this.__mc,bz);

for(var i=0;i<da.length;i++){da[i]=qx.lang.String.escapeRegexpChars(da[i].toString());
}var db=function(dx,dy){dy=qx.lang.String.escapeRegexpChars(dy);
dx.month=da.indexOf(dy);
};
var cO=qx.locale.Date.getMonthNames(bw,this.__mc,bz);

for(var i=0;i<cO.length;i++){cO[i]=qx.lang.String.escapeRegexpChars(cO[i].toString());
}var cN=function(cs,ct){ct=qx.lang.String.escapeRegexpChars(ct);
cs.month=cO.indexOf(ct);
};
var cQ=qx.locale.Date.getDayNames(ba,this.__mc,bz);

for(var i=0;i<cQ.length;i++){cQ[i]=qx.lang.String.escapeRegexpChars(cQ[i].toString());
}var cW=function(cm,cn){cn=qx.lang.String.escapeRegexpChars(cn);
cm.month=cQ.indexOf(cn);
};
var dd=qx.locale.Date.getDayNames(by,this.__mc,bz);

for(var i=0;i<dd.length;i++){dd[i]=qx.lang.String.escapeRegexpChars(dd[i].toString());
}var cV=function(cD,cE){cE=qx.lang.String.escapeRegexpChars(cE);
cD.month=dd.indexOf(cE);
};
var cX=qx.locale.Date.getDayNames(bw,this.__mc,bz);

for(var i=0;i<cX.length;i++){cX[i]=qx.lang.String.escapeRegexpChars(cX[i].toString());
}var cP=function(ck,cl){cl=qx.lang.String.escapeRegexpChars(cl);
ck.month=cX.indexOf(cl);
};
this.__mf.push({pattern:bN,regex:S,manipulator:de});
this.__mf.push({pattern:v,regex:b,groups:2,manipulator:de});
this.__mf.push({pattern:n,regex:c,manipulator:de});
this.__mf.push({pattern:U,regex:bA,manipulator:cT});
this.__mf.push({pattern:o,regex:bA,manipulator:cT});
this.__mf.push({pattern:O,regex:bv+da.join(bt)+bu,manipulator:db});
this.__mf.push({pattern:K,regex:bv+cO.join(bt)+bu,manipulator:cN});
this.__mf.push({pattern:h,regex:bA,field:bB});
this.__mf.push({pattern:I,regex:bA,field:bB});
this.__mf.push({pattern:bS,regex:bv+cQ.join(bt)+bu,manipulator:cW});
this.__mf.push({pattern:B,regex:bv+dd.join(bt)+bu,manipulator:cV});
this.__mf.push({pattern:bp,regex:bv+cX.join(bt)+bu,manipulator:cP});
this.__mf.push({pattern:f,regex:bv+cR.AM_MARKER+bt+cR.PM_MARKER+bu,manipulator:cU});
this.__mf.push({pattern:bL,regex:bA,field:bd});
this.__mf.push({pattern:bO,regex:bA,field:bd});
this.__mf.push({pattern:r,regex:bA,manipulator:cY});
this.__mf.push({pattern:T,regex:bA,manipulator:cY});
this.__mf.push({pattern:bT,regex:bA,field:bd});
this.__mf.push({pattern:e,regex:bA,field:bd});
this.__mf.push({pattern:u,regex:bA,manipulator:cS});
this.__mf.push({pattern:bm,regex:bA,manipulator:cS});
this.__mf.push({pattern:bl,regex:bA,field:bK});
this.__mf.push({pattern:D,regex:bA,field:bK});
this.__mf.push({pattern:G,regex:bA,field:bE});
this.__mf.push({pattern:P,regex:bA,field:bE});
this.__mf.push({pattern:bj,regex:bc,field:bb});
this.__mf.push({pattern:N,regex:bc,field:bb});
this.__mf.push({pattern:bQ,regex:bc,field:bb});
this.__mf.push({pattern:bn,regex:k,manipulator:dc});
this.__mf.push({pattern:w,regex:J,manipulator:dc});
}},destruct:function(){this._disposeFields(bk,bM,t,z,d);
}});
})();
(function(){var P="_",O="format",N="thu",M="sat",L="cldr_day_",K="cldr_month_",J="wed",I="fri",H="tue",G="mon",bh="sun",bg="short",bf="HH:mm",be="HHmmsszz",bd="HHmm",bc="HHmmss",bb="cldr_date_format_",ba="HH:mm:ss zz",Y="full",X="cldr_pm",V="long",W="medium",T="cldr_am",U="qx.locale.Date",R="cldr_date_time_format_",S="cldr_time_format_",Q="HH:mm:ss";
qx.Class.define(U,{statics:{__mo:qx.locale.Manager.getInstance(),getAmMarker:function(A){return this.__mo.localize(T,[],A);
},getPmMarker:function(F){return this.__mo.localize(X,[],F);
},getDayNames:function(length,n,o){var o=o?o:O;
{};
var q=[bh,G,H,J,N,I,M];
var r=[];

for(var i=0;i<q.length;i++){var p=L+o+P+length+P+q[i];
r.push(this.__mo.localize(p,[],n));
}return r;
},getDayName:function(length,bt,bu,bv){var bv=bv?bv:O;
{};
var bx=[bh,G,H,J,N,I,M];
var bw=L+bv+P+length+P+bx[bt];
return this.__mo.localize(bw,[],bu);
},getMonthNames:function(length,bm,bn){var bn=bn?bn:O;
{};
var bp=[];

for(var i=0;i<12;i++){var bo=K+bn+P+length+P+(i+1);
bp.push(this.__mo.localize(bo,[],bm));
}return bp;
},getMonthName:function(length,f,g,h){var h=h?h:O;
{};
var j=K+h+P+length+P+(f+1);
return this.__mo.localize(j,[],g);
},getDateFormat:function(c,d){{};
var e=bb+c;
return this.__mo.localize(e,[],d);
},getDateTimeFormat:function(v,w,x){var z=R+v;
var y=this.__mo.localize(z,[],x);

if(y==z){y=w;
}return y;
},getTimeFormat:function(bi,bj){{};
var bl=S+bi;
var bk=this.__mo.localize(bl,[],bj);

if(bk!=bl){return bk;
}
switch(bi){case bg:case W:return qx.locale.Date.getDateTimeFormat(bd,bf);
case V:return qx.locale.Date.getDateTimeFormat(bc,Q);
case Y:return qx.locale.Date.getDateTimeFormat(be,ba);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(k){var l={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var m=qx.locale.Date._getTerritory(k);
return l[m]!=null?l[m]:1;
},getWeekendStart:function(s){var u={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var t=qx.locale.Date._getTerritory(s);
return u[t]!=null?u[t]:6;
},getWeekendEnd:function(bq){var br={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bs=qx.locale.Date._getTerritory(bq);
return br[bs]!=null?br[bs]:0;
},isWeekend:function(B,C){var E=qx.locale.Date.getWeekendStart(C);
var D=qx.locale.Date.getWeekendEnd(C);

if(D>E){return ((B>=E)&&(B<=D));
}else{return ((B>=E)||(B<=D));
}},_getTerritory:function(a){if(a){var b=a.split(P)[1]||a;
}else{b=this.__mo.getTerritory()||this.__mo.getLanguage();
}return b.toUpperCase();
}}});
})();
(function(){var bR="",bQ="Number",bP='</div>',bO='" ',bN='<div>',bM="</div>",bL="__ms",bK="overflow: hidden;",bJ="__mt",bI="paneReloadsData",cl="div",ck='style="',cj="qx.event.type.Data",ci="qx.ui.table.pane.Pane",ch="width: 100%;",cg="px;",cf="_applyVisibleRowCount",ce='>',cd="line-height: ",cc="__mp",bY="appear",ca='class="',bW="width:100%;",bX="_applyMaxCacheLines",bU='<div ',bV="'>",bS="_applyFirstVisibleRow",bT="<div style='",cb=";position:relative;";
qx.Class.define(ci,{extend:qx.ui.core.Widget,construct:function(co){arguments.callee.base.call(this);
this.__mp=co;
this.__mq=0;
this.__mr=0;
this.__ms=[];
},events:{"paneReloadsData":cj},properties:{firstVisibleRow:{check:bQ,init:0,apply:bS},visibleRowCount:{check:bQ,init:0,apply:cf},maxCacheLines:{check:bQ,init:1000,apply:bX},allowShrinkX:{refine:true,init:false}},members:{__mr:null,__mq:null,__mp:null,__mt:null,__mu:null,__mv:null,__ms:null,__mw:0,_applyFirstVisibleRow:function(cm,cn){this.updateContent(false,cm-cn);
},_applyVisibleRowCount:function(bo,bp){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__mp;
},getTable:function(){return this.__mp.getTable();
},setFocusedCell:function(R,S,T){if(R!=this.__mv||S!=this.__mu){var U=this.__mu;
this.__mv=R;
this.__mu=S;
if(S!=U&&!T){if(S!==null&&U!==null){this.updateContent(false,null,U,true);
this.updateContent(false,null,S,true);
}else{this.updateContent();
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(cs,ct){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(cu,cv,cw,cx){this.__mx();
var cz=this.getFirstVisibleRow();
var cy=this.getVisibleRowCount();

if(cv==-1||cv>=cz&&cu<cz+cy){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(bi,bj){if(this.__mw>=bi&&bi!==-1){this.__mx();
}},__mx:function(){this.__ms=[];
this.__mw=0;
},__my:function(cp,cq,cr){if(!cq&&!cr&&this.__ms[cp]){return this.__ms[cp];
}else{return null;
}},__mz:function(bq,br,bs,bt){var bu=this.getMaxCacheLines();

if(!bs&&!bt&&!this.__ms[bq]&&bu>0){this._applyMaxCacheLines(bu);
this.__ms[bq]=br;
this.__mw+=1;
}},updateContent:function(bk,bl,bm,bn){if(bk){this.__mx();
}if(bl&&Math.abs(bl)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bl);
}else if(bn&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bm);
}else{this._updateAllRows();
}},_updateRowStyles:function(W){var bb=this.getContentElement().getDomElement();

if(!bb||!bb.firstChild){this._updateAllRows();
return;
}var bf=this.getTable();
var Y=bf.getSelectionModel();
var bc=bf.getTableModel();
var bg=bf.getDataRowRenderer();
var ba=bb.firstChild.childNodes;
var be={table:bf};
var bh=this.getFirstVisibleRow();
var y=0;
var X=ba.length;

if(W!=null){var bd=W-bh;

if(bd>=0&&bd<X){bh=W;
y=bd;
X=bd+1;
}else{return;
}}
for(;y<X;y++,bh++){be.row=bh;
be.selected=Y.isSelectedIndex(bh);
be.focusedRow=(this.__mu==bh);
be.rowData=bc.getRowData(bh);
bg.updateDataRowElement(be,ba[y]);
}},_getRowsHtml:function(n,o){var u=this.getTable();
var z=u.getSelectionModel();
var r=u.getTableModel();
var s=u.getTableColumnModel();
var N=this.getPaneScroller().getTablePaneModel();
var E=u.getDataRowRenderer();
r.prefetchRows(n,n+o-1);
var K=u.getRowHeight();
var M=N.getColumnCount();
var t=0;
var q=[];
for(var x=0;x<M;x++){var P=N.getColumnAtX(x);
var w=s.getColumnWidth(P);
q.push({col:P,xPos:x,editable:r.isColumnEditable(P),focusedCol:this.__mv==P,styleLeft:t,styleWidth:w});
t+=w;
}var O=[];
var Q=false;

for(var v=n;v<n+o;v++){var A=z.isSelectedIndex(v);
var D=(this.__mu==v);
var H=this.__my(v,A,D);

if(H){O.push(H);
continue;
}var G=[];
var J={table:u};
J.styleHeight=K;
J.row=v;
J.selected=A;
J.focusedRow=D;
J.rowData=r.getRowData(v);

if(!J.rowData){Q=true;
}G.push(bU);
var p=E.getRowClass(J);

if(p){G.push(ca,p,bO);
}var F=E.createRowStyle(J);
F+=cb+E.getRowHeightStyle(K)+bW;

if(F){G.push(ck,F,bO);
}G.push(ce);

for(var x=0;x<M;x++){var B=q[x];

for(var L in B){J[L]=B[L];
}var P=J.col;
J.value=r.getValue(P,v);
var C=s.getDataCellRenderer(P);
C.createDataCellHtml(J,G);
}G.push(bP);
var I=G.join(bR);
this.__mz(v,I,A,D);
O.push(I);
}this.fireDataEvent(bI,Q);
return O.join(bR);
},_scrollContent:function(bv){var bw=this.getContentElement().getDomElement();

if(!(bw&&bw.firstChild)){this._updateAllRows();
return;
}var bF=bw.firstChild;
var bx=bF.childNodes;
var bD=this.getVisibleRowCount();
var bC=this.getFirstVisibleRow();
var bA=this.getTable().getTableModel();
var bG=0;

if(bA!=null){bG=bA.getRowCount();
}if(bC+bD>bG){this._updateAllRows();
return;
}var bH=bv<0?bD+bv:0;
var by=bv<0?0:bD-bv;

for(i=Math.abs(bv)-1;i>=0;i--){var bB=bx[bH];

try{bF.removeChild(bB);
}catch(V){break;
}}if(!this.__mt){this.__mt=document.createElement(cl);
}var bE=bN;
bE+=this._getRowsHtml(bC+by,Math.abs(bv));
bE+=bP;
this.__mt.innerHTML=bE;
var bz=this.__mt.firstChild.childNodes;
if(bv>0){for(var i=bz.length-1;i>=0;i--){var bB=bz[0];
bF.appendChild(bB);
}}else{for(var i=bz.length-1;i>=0;i--){var bB=bz[bz.length-1];
bF.insertBefore(bB,bF.firstChild);
}}if(this.__mu!==null){this._updateRowStyles(this.__mu-bv);
this._updateRowStyles(this.__mu);
}},_updateAllRows:function(){var d=this.getContentElement().getDomElement();

if(!d){this.addListenerOnce(bY,arguments.callee,this);
return;
}var k=this.getTable();
var g=k.getTableModel();
var j=this.getPaneScroller().getTablePaneModel();
var h=j.getColumnCount();
var a=k.getRowHeight();
var e=this.getFirstVisibleRow();
var b=this.getVisibleRowCount();
var l=0;

if(g!=null){l=g.getRowCount();
}
if(e+b>l){b=Math.max(0,l-e);
}var c=j.getTotalWidth();
var f;
if(b>0){f=[bT,ch,(k.getForceLineHeight()?cd+a+cg:bR),bK,bV,this._getRowsHtml(e,b),bM];
}else{f=[];
}var m=f.join(bR);
d.innerHTML=m;
this.setWidth(c);
this.__mq=h;
this.__mr=b;
}},destruct:function(){this._disposeFields(bJ,cc,bL);
}});
})();
(function(){var I="hovered",H="__mA",G="qx.ui.table.pane.Header";
qx.Class.define(G,{extend:qx.ui.core.Widget,construct:function(J){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__mA=J;
},members:{__mA:null,__mB:null,__mC:null,getPaneScroller:function(){return this.__mA;
},getTable:function(){return this.__mA.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(B,C){var D=this.getHeaderWidgetAtColumn(B);

if(D!=null){D.setWidth(C);
}},setMouseOverColumn:function(E){if(E!=this.__mC){if(this.__mC!=null){var F=this.getHeaderWidgetAtColumn(this.__mC);

if(F!=null){F.removeState(I);
}}
if(E!=null){this.getHeaderWidgetAtColumn(E).addState(I);
}this.__mC=E;
}},getHeaderWidgetAtColumn:function(c){var d=this.getPaneScroller().getTablePaneModel().getX(c);
return this._getChildren()[d];
},showColumnMoveFeedback:function(e,x){var i=this.getContainerLocation();

if(this.__mB==null){var f=this.getPaneScroller().getTablePaneModel().getX(e);
var h=this._getChildren()[f];
var j=this.getTable().getTableModel();
var l=this.getTable().getTableColumnModel();
var m={xPos:f,col:e,name:j.getColumnName(e)};
var k=l.getHeaderCellRenderer(e);
var g=k.createHeaderCell(m);
var n=h.getBounds();
g.setWidth(n.width);
g.setHeight(n.height);
g.setZIndex(1000000);
g.setOpacity(0.8);
g.setLayoutProperties({top:i.top});
this.getApplicationRoot().add(g);
this.__mB=g;
}this.__mB.setLayoutProperties({left:i.left+x});
this.__mB.show();
},hideColumnMoveFeedback:function(){if(this.__mB!=null){this.__mB.destroy();
this.__mB=null;
}},isShowingColumnMoveFeedback:function(){return this.__mB!=null;
},_updateContent:function(o){var t=this.getTable().getTableModel();
var w=this.getTable().getTableColumnModel();
var y=this.getPaneScroller().getTablePaneModel();
var A=this._getChildren();
var u=y.getColumnCount();
var p=0;

if(t!=null){p=t.getSortColumnIndex();
}if(o){this._cleanUpCells();
}var q={};
q.sortedAscending=false;

if(t!=null){q.sortedAscending=t.isSortAscending();
}
for(var x=0;x<u;x++){var s=y.getColumnAtX(x);
var z=w.getColumnWidth(s);
var v=w.getHeaderCellRenderer(s);
q.xPos=x;
q.col=s;
q.name=t.getColumnName(s);
q.editable=t.isColumnEditable(s);
q.sorted=(s==p);
var r=A[x];
if(r==null){r=v.createHeaderCell(q);
r.set({width:z});
this._add(r);
}else{v.updateHeaderCell(q,r);
}}},_cleanUpCells:function(){var b=this._getChildren();

for(var x=b.length-1;x>=0;x--){var a=b[x];
a.destroy();
}}},destruct:function(){this._disposeObjects(H);
}});
})();
(function(){var ed="Boolean",ec="resize-line",eb="mousedown",ea="mouseup",dY="qx.ui.table.pane.CellEvent",dX="scroll",dW="focus-indicator",dV="excluded",dU="scrollbar-y",dT="qx.event.type.Data",fb="visible",fa="mousemove",eY="header",eX="editing",eW="click",eV="modelChanged",eU="scrollbar-x",eT="cellClick",eS="pane",eR="mouseout",ek="changeHorizontalScrollBarVisible",el="bottom",ei="_applyScrollTimeout",ej="changeScrollX",eg="_applyTablePaneModel",eh="Integer",ee="dblclick",ef="__mF",eo="dataEdited",ep="__mE",ex="__mI",ev="mousewheel",eF="__mJ",eA="__mK",eN="qx.ui.table.pane.Scroller",eK="_applyShowCellFocusIndicator",er="__mH",eQ="resize",eP="__mL",eO="vertical",eq="changeScrollY",et="appear",eu="table-scroller",ew="__mG",ey="__ni",eB="cellDblclick",eH="__mD",eM="horizontal",em="losecapture",en="contextmenu",es="col-resize",eE="disappear",eD="_applyVerticalScrollBarVisible",eC="_applyHorizontalScrollBarVisible",eJ="cellContextmenu",eI="close",ez="changeTablePaneModel",eG="__mY",dS="qx.ui.table.pane.Model",eL="changeVerticalScrollBarVisible";
qx.Class.define(eN,{extend:qx.ui.core.Widget,construct:function(j){arguments.callee.base.call(this);
this.__mD=j;
var k=new qx.ui.layout.Grid();
k.setColumnFlex(0,1);
k.setRowFlex(1,1);
this._setLayout(k);
this.__mE=this._showChildControl(eU);
this.__mF=this._showChildControl(dU);
this.__mG=this._showChildControl(eY);
this.__mH=this._showChildControl(eS);
this.__mI=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__mI,{row:0,column:0,colSpan:2});
this.__mJ=new qx.ui.table.pane.Clipper();
this.__mJ.add(this.__mG);
this.__mJ.addListener(em,this._onChangeCaptureHeader,this);
this.__mJ.addListener(fa,this._onMousemoveHeader,this);
this.__mJ.addListener(eb,this._onMousedownHeader,this);
this.__mJ.addListener(ea,this._onMouseupHeader,this);
this.__mJ.addListener(eW,this._onClickHeader,this);
this.__mI.add(this.__mJ,{flex:1});
this.__mK=new qx.ui.table.pane.Clipper();
this.__mK.add(this.__mH);
this.__mK.addListener(ev,this._onMousewheel,this);
this.__mK.addListener(fa,this._onMousemovePane,this);
this.__mK.addListener(eb,this._onMousedownPane,this);
this.__mK.addListener(ea,this._onMouseupPane,this);
this.__mK.addListener(eW,this._onClickPane,this);
this.__mK.addListener(en,this._onContextMenu,this);
this.__mK.addListener(ee,this._onDblclickPane,this);
this.__mK.addListener(eQ,this._onResizePane,this);
this._add(this.__mK,{row:1,column:0});
this.__mL=this.getChildControl(dW);
this.getChildControl(ec).hide();
this.addListener(eR,this._onMouseout,this);
this.addListener(et,this._onAppear,this);
this.addListener(eE,this._onDisappear,this);
if(!this.__mM){this.__mM=qx.lang.Function.bind(this._oninterval,this);
}this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":dT,"changeScrollX":dT,"cellClick":dY,"cellDblclick":dY,"cellContextmenu":dY},properties:{horizontalScrollBarVisible:{check:ed,init:true,apply:eC,event:ek},verticalScrollBarVisible:{check:ed,init:true,apply:eD,event:eL},tablePaneModel:{check:dS,apply:eg,event:ez},liveResize:{check:ed,init:false},focusCellOnMouseMove:{check:ed,init:false},selectBeforeFocus:{check:ed,init:false},showCellFocusIndicator:{check:ed,init:true,apply:eK},scrollTimeout:{check:eh,init:100,apply:ei},appearance:{refine:true,init:eu}},members:{__mN:null,__mD:null,__mO:null,__mP:null,__mM:null,__mQ:null,__mR:null,__mS:null,__mT:null,__mU:null,__mV:null,__mW:null,__mX:null,__mY:null,__na:null,__nb:null,__nc:null,__nd:null,__ne:null,__nf:null,__ng:null,__nh:null,__ni:null,__mE:null,__mF:null,__mG:null,__mJ:null,__mH:null,__mK:null,__mL:null,__mI:null,getPaneInsetRight:function(){var cU=this.getTopRightWidget();
var cV=cU&&cU.isVisible()&&cU.getBounds()?cU.getBounds().width:0;
var cT=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(cV,cT);
},setPaneWidth:function(dQ){if(this.isVerticalScrollBarVisible()){dQ+=this.getPaneInsetRight();
}this.setWidth(dQ);
},_createChildControlImpl:function(bn){var bo;

switch(bn){case eY:bo=(this.getTable().getNewTablePaneHeader())(this);
break;
case eS:bo=(this.getTable().getNewTablePane())(this);
break;
case dW:bo=new qx.ui.table.pane.FocusIndicator(this);
bo.setUserBounds(0,0,0,0);
bo.setZIndex(1000);
bo.addListener(ea,this._onMouseupFocusIndicator,this);
this.__mK.add(bo);
bo.exclude();
break;
case ec:bo=new qx.ui.core.Widget();
bo.setUserBounds(0,0,0,0);
bo.setZIndex(1000);
this.__mK.add(bo);
break;
case eU:bo=new qx.ui.core.ScrollBar(eM).set({minWidth:0,alignY:el});
bo.addListener(dX,this._onScrollX,this);
this._add(bo,{row:2,column:0});
break;
case dU:bo=new qx.ui.core.ScrollBar(eO);
bo.addListener(dX,this._onScrollY,this);
this._add(bo,{row:1,column:1});
break;
}return bo||arguments.callee.base.call(this,bn);
},_applyHorizontalScrollBarVisible:function(T,U){this.__mE.setVisibility(T?fb:dV);

if(!T){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(co,cp){this.__mF.setVisibility(co?fb:dV);

if(!co){this.setScrollX(0);
}},_applyTablePaneModel:function(R,S){if(S!=null){S.removeListener(eV,this._onPaneModelChanged,this);
}R.addListener(eV,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(by,bz){if(by){this._updateFocusIndicator();
}else{if(this.__mL){this.__mL.hide();
}}},getScrollY:function(){return this.__mF.getPosition();
},setScrollY:function(scrollY,bu){this.__nd=bu;
this.__mF.scrollTo(scrollY);

if(bu){this._updateContent();
}this.__nd=false;
},getScrollX:function(){return this.__mE.getPosition();
},setScrollX:function(scrollX){this.__mE.scrollTo(scrollX);
},getTable:function(){return this.__mD;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bk,bl){this.__mG.setColumnWidth(bk,bl);
this.__mH.setColumnWidth(bk,bl);
var bm=this.getTablePaneModel();
var x=bm.getX(bk);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__mG.onColOrderChanged();
this.__mH.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(be,bf,bg,bh){this.__mH.onTableModelDataChanged(be,bf,bg,bh);
var bi=this.getTable().getTableModel().getRowCount();

if(bi!=this.__mN){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bi){if(bi==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bi-1);
}}this.__mN=bi;
}},onSelectionChanged:function(){this.__mH.onSelectionChanged();
},onFocusChanged:function(){this.__mH.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__mG.onTableModelMetaDataChanged();
this.__mH.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__mG.onPaneModelChanged();
this.__mH.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__mG._updateContent();
this.__mD._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var dq=this.__mK.getInnerSize();

if(!dq){return ;
}var dn=this.getTablePaneModel().getTotalWidth();
var dp=this.__mE;

if(dq.width<dn){var dm=Math.max(0,dn-dq.width);
dp.setMaximum(dm);
dp.setKnobFactor(dq.width/dn);
var dr=dp.getPosition();
dp.setPosition(Math.min(dr,dm));
}else{dp.setMaximum(0);
dp.setKnobFactor(1);
dp.setPosition(0);
}},updateVerScrollBarMaximum:function(){var dO=this.__mK.getInnerSize();

if(!dO){return ;
}var dM=this.getTable().getTableModel();
var dI=0;

if(dM!=null){dI=dM.getRowCount();
}
if(this.getTable().getKeepFirstVisibleRowComplete()){dI+=1;
}var dH=this.getTable().getRowHeight();
var dK=dI*dH;
var dN=this.__mF;

if(dO.height<dK){var dJ=Math.max(0,dK-dO.height);
dN.setMaximum(dJ);
dN.setKnobFactor(dO.height/dK);
var dL=dN.getPosition();
dN.setPosition(Math.min(dL,dJ));
}else{dN.setMaximum(0);
dN.setKnobFactor(1);
dN.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cK=e.getData();
this.fireDataEvent(ej,cK,e.getOldData());
this.__mJ.scrollToX(cK);
this.__mK.scrollToX(cK);
},_onScrollY:function(e){this.fireDataEvent(eq,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var bj=this.getTable();

if(!bj.getEnabled()){return;
}this.__mF.scrollTo(this.__mF.getPosition()+((e.getWheelDelta()*3)*bj.getRowHeight()));
if(this.__nb&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__nb,this.__nc);
}},__nj:function(cD){var cI=this.getTable();
var cJ=this.__mG.getHeaderWidgetAtColumn(this.__mV);
var cE=cJ.getSizeHint().minWidth;
var cG=Math.max(cE,this.__mX+cD-this.__mW);

if(this.getLiveResize()){var cF=cI.getTableColumnModel();
cF.setColumnWidth(this.__mV,cG);
}else{this.__mG.setColumnWidth(this.__mV,cG);
var cH=this.getTablePaneModel();
this._showResizeLine(cH.getColumnLeft(this.__mV)+cG);
}this.__mW+=cG-this.__mX;
this.__mX=cG;
},__nk:function(dA){var dB=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__mG.isShowingColumnMoveFeedback()||dA>this.__mU+dB||dA<this.__mU-dB){this.__mR+=dA-this.__mU;
this.__mG.showColumnMoveFeedback(this.__mQ,this.__mR);
var dC=this.__mD.getTablePaneScrollerAtPageX(dA);

if(this.__mT&&this.__mT!=dC){this.__mT.hideColumnMoveFeedback();
}
if(dC!=null){this.__mS=dC.showColumnMoveFeedback(dA);
}else{this.__mS=null;
}this.__mT=dC;
this.__mU=dA;
}},_onMousemoveHeader:function(e){var cc=this.getTable();

if(!cc.getEnabled()){return;
}var cd=false;
var bV=null;
var ca=e.getDocumentLeft();
var cb=e.getDocumentTop();
this.__nb=ca;
this.__nc=cb;

if(this.__mV!=null){this.__nj(ca);
cd=true;
}else if(this.__mQ!=null){this.__nk(ca);
}else{var bW=this._getResizeColumnForPageX(ca);

if(bW!=-1){cd=true;
}else{var bY=cc.getTableModel();
var ce=this._getColumnForPageX(ca);

if(ce!=null&&bY.isColumnSortable(ce)){bV=ce;
}}}var bX=cd?es:null;
this.getApplicationRoot().setGlobalCursor(bX);
this.setCursor(bX);
this.__mG.setMouseOverColumn(bV);
},_onMousemovePane:function(e){var K=this.getTable();

if(!K.getEnabled()){return;
}var M=e.getDocumentLeft();
var N=e.getDocumentTop();
this.__nb=M;
this.__nc=N;
var L=this._getRowForPagePos(M,N);

if(L!=null&&this._getColumnForPageX(M)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(M,N);
}}this.__mG.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var fi=e.getDocumentLeft();
var fj=this._getResizeColumnForPageX(fi);

if(fj!=-1){this._startResizeHeader(fj,fi);
}else{var fh=this._getColumnForPageX(fi);

if(fh!=null){this._startMoveHeader(fh,fi);
}}},_startResizeHeader:function(dE,dF){var dG=this.getTable().getTableColumnModel();
this.__mV=dE;
this.__mW=dF;
this.__mX=dG.getColumnWidth(this.__mV);
this.__mJ.capture();
},_startMoveHeader:function(O,P){this.__mQ=O;
this.__mU=P;
this.__mR=this.getTablePaneModel().getColumnLeft(O);
this.__mJ.capture();
},_onMousedownPane:function(e){var Y=this.getTable();

if(!Y.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var V=e.getDocumentLeft();
var X=e.getDocumentTop();
var bb=this._getRowForPagePos(V,X);
var ba=this._getColumnForPageX(V);

if(bb!==null){this.__mY={row:bb,col:ba};
var W=this.getSelectBeforeFocus();

if(W){Y.getSelectionManager().handleMouseDown(bb,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(V,X);
}
if(!W){Y.getSelectionManager().handleMouseDown(bb,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__mY&&this.__mL.getRow()==this.__mY.row&&this.__mL.getColumn()==this.__mY.col){this.__mY={};
this.fireEvent(eT,qx.ui.table.pane.CellEvent,[this,e,this.__mY.row,this.__mY.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__mV!=null){this._stopResizeHeader();
}
if(this.__mQ!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var A=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
A.setColumnWidth(this.__mV,this.__mX);
}this.__mV=null;
this.__mJ.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var cP=this.getTable().getTableColumnModel();
var cQ=this.getTablePaneModel();
this.__mG.hideColumnMoveFeedback();

if(this.__mT){this.__mT.hideColumnMoveFeedback();
}
if(this.__mS!=null){var cS=cQ.getFirstColumnX()+cQ.getX(this.__mQ);
var cO=this.__mS;

if(cO!=cS&&cO!=cS+1){var cR=cP.getVisibleColumnAtX(cS);
var cN=cP.getVisibleColumnAtX(cO);
var cM=cP.getOverallX(cR);
var cL=(cN!=null)?cP.getOverallX(cN):cP.getOverallColumnCount();

if(cL>cM){cL--;
}cP.moveColumn(cM,cL);
}}this.__mQ=null;
this.__mS=null;
this.__mJ.releaseCapture();
},_onMouseupPane:function(e){var dk=this.getTable();

if(!dk.getEnabled()){return;
}var dl=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(dl!=-1&&dl!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dk.getSelectionManager().handleMouseUp(dl,e);
}},_onMouseupHeader:function(e){var bx=this.getTable();

if(!bx.getEnabled()){return;
}
if(this.__mV!=null){this._stopResizeHeader();
this.__na=true;
}else if(this.__mQ!=null){this._stopMoveHeader();
}},_onClickHeader:function(e){if(this.__na){this.__na=false;
return;
}var H=this.getTable();

if(!H.getEnabled()){return;
}var F=H.getTableModel();
var G=e.getDocumentLeft();
var E=this._getResizeColumnForPageX(G);

if(E==-1){var J=this._getColumnForPageX(G);

if(J!=null&&F.isColumnSortable(J)){var D=F.getSortColumnIndex();
var I=(J!=D)?true:!F.isSortAscending();
F.sortByColumn(J,I);
H.getSelectionModel().clearSelection();
}}},_onClickPane:function(e){var fc=this.getTable();

if(!fc.getEnabled()){return;
}var ff=e.getDocumentLeft();
var fg=e.getDocumentTop();
var fd=this._getRowForPagePos(ff,fg);
var fe=this._getColumnForPageX(ff);

if(fd!=null&&fe!=null){fc.getSelectionManager().handleClick(fd,e);

if(this.__mL.isHidden()||(this.__mY&&fd==this.__mY.row&&fe==this.__mY.col)){this.__mY={};
this.fireEvent(eT,qx.ui.table.pane.CellEvent,[this,e,fd,fe],true);
}}},_onContextMenu:function(e){var ct=e.getDocumentLeft();
var cu=e.getDocumentTop();
var cr=this._getRowForPagePos(ct,cu);
var cs=this._getColumnForPageX(ct);

if(this.__mL.isHidden()||(this.__mY&&cr==this.__mY.row&&cs==this.__mY.col)){this.__mY={};
this.fireEvent(eJ,qx.ui.table.pane.CellEvent,[this,e,cr,cs],true);
var cq=this.getTable().getContextMenu();

if(cq){if(cq.getChildren().length>0){cq.placeToMouse(e);
cq.show();
}else{cq.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var bq=e.getDocumentLeft();
var br=e.getDocumentTop();
this._focusCellAtPagePos(bq,br);
this.startEditing();
var bp=this._getRowForPagePos(bq,br);

if(bp!=-1&&bp!=null){this.fireEvent(eB,qx.ui.table.pane.CellEvent,[this,e,bp],true);
}},_onMouseout:function(e){var dP=this.getTable();

if(!dP.getEnabled()){return;
}if(this.__mV==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__mG.setMouseOverColumn(null);
},_showResizeLine:function(x){var bT=this._showChildControl(ec);
var bS=bT.getWidth();
var bU=this.__mK.getBounds();
bT.setUserBounds(x-Math.round(bS/2),0,bS,bU.height);
},_hideResizeLine:function(){this._excludeChildControl(ec);
},showColumnMoveFeedback:function(cW){var dg=this.getTablePaneModel();
var df=this.getTable().getTableColumnModel();
var da=this.__mH.getContainerLocation().left;
var de=dg.getColumnCount();
var db=0;
var cY=0;
var dj=da;

for(var cX=0;cX<de;cX++){var dc=dg.getColumnAtX(cX);
var dh=df.getColumnWidth(dc);

if(cW<dj+dh/2){break;
}dj+=dh;
db=cX+1;
cY=dj-da;
}var dd=this.__mK.getContainerLocation().left;
var di=this.__mK.getBounds().width;
var scrollX=dd-da;
cY=qx.lang.Number.limit(cY,scrollX+2,scrollX+di-1);
this._showResizeLine(cY);
return dg.getFirstColumnX()+db;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(bA,bB){var bD=this._getRowForPagePos(bA,bB);

if(bD!=-1&&bD!=null){var bC=this._getColumnForPageX(bA);
this.__mD.setFocusedCell(bC,bD);
}},setFocusedCell:function(bs,bt){if(!this.isEditing()){this.__mH.setFocusedCell(bs,bt,this.__mP);
this.__ne=bs;
this.__nf=bt;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__ne;
},getFocusedRow:function(){return this.__nf;
},scrollCellVisible:function(bE,bF){var bP=this.getTablePaneModel();
var bG=bP.getX(bE);

if(bG!=-1){var bM=this.__mK.getInnerSize();

if(!bM){return;
}var bN=this.getTable().getTableColumnModel();
var bJ=bP.getColumnLeft(bE);
var bQ=bN.getColumnWidth(bE);
var bH=this.getTable().getRowHeight();
var bR=bF*bH;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var bO=Math.min(bJ,bJ+bQ-bM.width);
var bL=bJ;
this.setScrollX(Math.max(bO,Math.min(bL,scrollX)));
var bI=bR+bH-bM.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){bI+=bH;
}var bK=bR;
this.setScrollY(Math.max(bI,Math.min(bK,scrollY)),true);
}},isEditing:function(){return this.__ng!=null;
},startEditing:function(){var fp=this.getTable();
var fn=fp.getTableModel();
var fr=this.__ne;

if(!this.isEditing()&&(fr!=null)&&fn.isColumnEditable(fr)){var fs=this.__nf;
var fl=this.getTablePaneModel().getX(fr);
var fm=fn.getValue(fr,fs);
this.__nh=fp.getTableColumnModel().getCellEditorFactory(fr);
var fo={col:fr,row:fs,xPos:fl,value:fm,table:fp};
this.__ng=this.__nh.createCellEditor(fo);
if(this.__ng===null){return false;
}else if(this.__ng instanceof qx.ui.window.Window){this.__ng.setModal(true);
this.__ng.setShowClose(false);
this.__ng.addListener(eI,this._onCellEditorModalWindowClose,this);
var f=fp.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__ng,fo);
}this.__ng.open();
}else{var fq=this.__mL.getInnerSize();
this.__ng.setUserBounds(0,0,fq.width,fq.height);
this.__mL.addListener(eb,function(e){e.stopPropagation();
});
this.__mL.add(this.__ng);
this.__mL.addState(eX);
this.__mL.setKeepActive(false);
this.__ng.focus();
this.__ng.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var C=this.__nh.getCellEditorValue(this.__ng);
var B=this.getTable().getTableModel().getValue(this.__ne,this.__nf);
this.getTable().getTableModel().setValue(this.__ne,this.__nf,C);
this.__mD.focus();
this.__mD.fireDataEvent(eo,{row:this.__nf,col:this.__ne,oldValue:B,value:C});
}},cancelEditing:function(){if(this.isEditing()&&!this.__ng.pendingDispose){if(this._cellEditorIsModalWindow){this.__ng.destroy();
this.__ng=null;
this.__nh=null;
this.__ng.pendingDispose=true;
}else{this.__mL.removeState(eX);
this.__mL.setKeepActive(true);
this.__ng.destroy();
this.__ng=null;
this.__nh=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(a){var d=this.getTable().getTableColumnModel();
var g=this.getTablePaneModel();
var c=g.getColumnCount();
var i=this.__mG.getContainerLocation().left;

for(var x=0;x<c;x++){var b=g.getColumnAtX(x);
var h=d.getColumnWidth(b);
i+=h;

if(a<i){return b;
}}return null;
},_getResizeColumnForPageX:function(ds){var dw=this.getTable().getTableColumnModel();
var dx=this.getTablePaneModel();
var dv=dx.getColumnCount();
var dz=this.__mG.getContainerLocation().left;
var dt=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<dv;x++){var du=dx.getColumnAtX(x);
var dy=dw.getColumnWidth(du);
dz+=dy;

if(ds>=(dz-dt)&&ds<=(dz+dt)){return du;
}}return -1;
},_getRowForPagePos:function(cf,cg){var ch=this.__mH.getContentLocation();

if(cf<ch.left||cf>ch.right){return null;
}
if(cg>=ch.top&&cg<=ch.bottom){var ci=this.getTable().getRowHeight();
var scrollY=this.__mF.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/ci)*ci;
}var cl=scrollY+cg-ch.top;
var cn=Math.floor(cl/ci);
var cm=this.getTable().getTableModel();
var cj=0;

if(cm!=null){cj=cm.getRowCount();
}return (cn<cj)?cn:null;
}var ck=this.__mG.getContainerLocation();

if(cg>=ck.top&&cg<=ck.bottom&&cf<=ck.right){return -1;
}return null;
},setTopRightWidget:function(bc){var bd=this.__ni;

if(bd!=null){this.__mI.remove(bd);
}
if(bc!=null){this.__mI.add(bc);
}this.__ni=bc;
},getTopRightWidget:function(){return this.__ni;
},getHeader:function(){return this.__mG;
},getTablePane:function(){return this.__mH;
},getVerticalScrollBarWidth:function(){var dD=this.__mF;
return dD.isVisible()?(dD.getSizeHint().width||0):0;
},getNeededScrollBars:function(l,m){var s=this.__mF.getSizeHint().width;
var t=this.__mK.getInnerSize();
var n=t?t.width:0;

if(this.getVerticalScrollBarVisible()){n+=s;
}var w=t?t.height:0;

if(this.getHorizontalScrollBarVisible()){w+=s;
}var q=this.getTable().getTableModel();
var u=0;

if(q!=null){u=q.getRowCount();
}var y=this.getTablePaneModel().getTotalWidth();
var v=this.getTable().getRowHeight()*u;
var p=false;
var z=false;

if(y>n){p=true;

if(v>w-s){z=true;
}}else if(v>w){z=true;

if(!m&&(y>n-s)){p=true;
}}var r=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var o=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((l||p)?r:0)|((m||!z)?0:o);
},_applyScrollTimeout:function(bv,bw){this._startInterval(bv);
},_startInterval:function(fk){this._stopInterval();
if(fk){this.__mO=window.setInterval(this.__mM,fk);
}},_stopInterval:function(){if(this.__mO){window.clearInterval(this.__mO);
this.__mO=null;
}},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__mP&&!this.__mH._layoutPending){this.__mP=false;
this._updateContent();
}}),_updateContent:function(){var cz=this.__mK.getInnerSize();

if(!cz){return;
}var cC=cz.height;
var scrollX=this.__mE.getPosition();
var scrollY=this.__mF.getPosition();
var cw=this.getTable().getRowHeight();
var cx=Math.floor(scrollY/cw);
var cB=this.__mH.getFirstVisibleRow();
this.__mH.setFirstVisibleRow(cx);
var cy=Math.ceil(cC/cw);
var cv=0;
var cA=this.getTable().getKeepFirstVisibleRowComplete();

if(!cA){cy++;
cv=scrollY%cw;
}this.__mH.setVisibleRowCount(cy);

if(cx!=cB){this._updateFocusIndicator();
}this.__mK.scrollToX(scrollX);
if(!cA){this.__mK.scrollToY(cv);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var Q=this.getTable();

if(!Q.getEnabled()){return;
}this.__mL.moveToCell(this.__ne,this.__nf);
}},destruct:function(){this._stopInterval();
var dR=this.getTablePaneModel();

if(dR){dR.dispose();
}this._disposeFields(eG,ey,eH);
this._disposeObjects(ep,ef,eF,eA,eP,ew,er,ex);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var h="Integer",g="Escape",f="keypress",d="Enter",c="__nl",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(q){arguments.callee.base.call(this);
this.__nl=q;
this.setKeepActive(true);
this.addListener(f,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:h,nullable:true},column:{check:h,nullable:true}},members:{__nl:null,_onKeyPress:function(e){var r=e.getKeyIdentifier();

if(r!==g&&r!==d){e.stopPropagation();
}},moveToCell:function(i,j){if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__nl.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__nl.getTable();
var n=p.getTableColumnModel();
var o=this.__nl.getTablePaneModel();
var m=this.__nl.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this._disposeFields(c);
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}}}});
})();
(function(){var g="qx.lang.Number";
qx.Bootstrap.define(g,{statics:{isInRange:function(d,e,f){return d>=e&&d<=f;
},isBetweenRange:function(h,i,j){return h>i&&h<j;
},limit:function(a,b,c){if(c!=null&&a>c){return c;
}else if(b!=null&&a<b){return b;
}else{return a;
}}}});
})();
(function(){var H="Boolean",G="resize",F="Please use the properties 'resizableTop', 'resizableRight', 'resizableBottom', 'resizableLeft' separately.",E="mousedown",D="w-resize",C="sw-resize",B="n-resize",A="resizableRight",z="ne-resize",y="e-resize",Y="Integer",X="se-resize",W="resizableLeft",V="mousemove",U="move",T="shorthand",S="maximized",R="nw-resize",Q="__nm",P="mouseout",N="qx.ui.core.MResizable",O="mouseup",L="losecapture",M="resize-frame",J="resizableBottom",K="s-resize",I="resizableTop";
qx.Mixin.define(N,{construct:function(){this.addListener(E,this.__nw,this,true);
this.addListener(O,this.__nx,this);
this.addListener(V,this.__nz,this);
this.addListener(P,this.__nA,this);
this.addListener(L,this.__ny,this);
},properties:{resizableTop:{check:H,init:true},resizableRight:{check:H,init:true},resizableBottom:{check:H,init:true},resizableLeft:{check:H,init:true},resizable:{group:[I,A,J,W],mode:T},resizeSensitivity:{check:Y,init:5},useResizeFrame:{check:H,init:true}},members:{__nm:null,__nn:null,__no:null,__np:null,__nq:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,getResizeAllEdges:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
return (this.getResizableTop()&&this.getResizableRight()&&this.getResizableBottom()&&this.getResizableLeft());
},setResizeAllEdges:function(s){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
this.set({resizableTop:s,resizableRight:true,resizableBottom:true,resizableLeft:s});
},__nr:function(){var b=this.__nm;

if(!b){b=this.__nm=new qx.ui.core.Widget();
b.setAppearance(M);
b.exclude();
qx.core.Init.getApplication().getRoot().add(b);
}return b;
},__ns:function(){var f=this.__nq;
var d=this.__nr();
d.setUserBounds(f.left,f.top,f.width,f.height);
d.show();
d.setZIndex(this.getZIndex()+1);
},__nt:function(e){var h=this.__nn;
var i=this.getSizeHint();
var k=this.__nq;
var g=k.width;
var j=k.height;
var m=k.left;
var top=k.top;
var l;

if((h&this.RESIZE_TOP)||(h&this.RESIZE_BOTTOM)){l=e.getDocumentTop()-this.__np;

if(h&this.RESIZE_TOP){j-=l;
}else{j+=l;
}
if(j<i.minHeight){j=i.minHeight;
}else if(j>i.maxHeight){j=i.maxHeight;
}
if(h&this.RESIZE_TOP){top+=k.height-j;
}}
if((h&this.RESIZE_LEFT)||(h&this.RESIZE_RIGHT)){l=e.getDocumentLeft()-this.__no;

if(h&this.RESIZE_LEFT){g-=l;
}else{g+=l;
}
if(g<i.minWidth){g=i.minWidth;
}else if(g>i.maxWidth){g=i.maxWidth;
}
if(h&this.RESIZE_LEFT){m+=k.width-g;
}}return {viewportLeft:m,viewportTop:top,parentLeft:k.bounds.left+m-k.left,parentTop:k.bounds.top+top-k.top,width:g,height:j};
},__nu:{1:B,2:K,4:D,8:y,5:R,6:C,9:z,10:X},__nv:function(e){var p=this.getContentLocation();
var n=this.getResizeSensitivity();
var r=e.getDocumentLeft();
var q=e.getDocumentTop();
var o=0;

if(this.getResizableTop()&&Math.abs(p.top-q)<n){o+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(p.bottom-q)<n){o+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(p.left-r)<n){o+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(p.right-r)<n){o+=this.RESIZE_RIGHT;
}this.__nn=o;
},__nw:function(e){if(!this.__nn){return;
}this.addState(G);
this.capture();
this.__no=e.getDocumentLeft();
this.__np=e.getDocumentTop();
var location=this.getContainerLocation();
var a=this.getBounds();
this.__nq={top:location.top,left:location.left,width:a.width,height:a.height,bounds:qx.lang.Object.clone(a)};
if(this.getUseResizeFrame()){this.__ns();
}e.stop();
},__nx:function(e){if(!this.__nn){return;
}if(this.getUseResizeFrame()){this.__nr().exclude();
}var c=this.__nt(e);
this.setWidth(c.width);
this.setHeight(c.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:c.parentLeft,top:c.parentTop});
}this.__nn=0;
this.removeState(G);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
},__ny:function(e){if(!this.__nn){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(U);
if(this.getUseResizeFrame()){this.__nr().exclude();
}},__nz:function(e){if(this.hasState(G)){var w=this.__nt(e);
if(this.getUseResizeFrame()){var u=this.__nr();
u.setUserBounds(w.viewportLeft,w.viewportTop,w.width,w.height);
}else{this.setWidth(w.width);
this.setHeight(w.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:w.parentLeft,top:w.parentTop});
}}e.stop();
}else if(!this.hasState(S)){this.__nv(e);
var x=this.__nn;
var v=this.getApplicationRoot();

if(x){var t=this.__nu[x];
this.setCursor(t);
v.setGlobalCursor(t);
}else if(this.getCursor()){this.resetCursor();
v.resetGlobalCursor();
}}},__nA:function(e){if(this.getCursor()&&!this.hasState(G)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){this._disposeObjects(Q);
}});
})();
(function(){var A="move",z="Boolean",y="mouseup",x="mousedown",w="losecapture",v="qx.ui.core.MMovable",u="__nD",t="mousemove",s="__nB",r="maximized",p="__nC",q="move-frame";
qx.Mixin.define(v,{properties:{movable:{check:z,init:true},useMoveFrame:{check:z,init:false}},members:{__nB:null,__nC:null,__nD:null,__nE:null,__nF:null,__nG:null,__nH:null,__nI:false,__nJ:null,__nK:0,_activateMoveHandle:function(f){if(this.__nB){throw new Error("The move handle could not be redefined!");
}this.__nB=f;
f.addListener(x,this._onMoveMouseDown,this);
f.addListener(y,this._onMoveMouseUp,this);
f.addListener(t,this._onMoveMouseMove,this);
f.addListener(w,this.__nO,this);
},__nL:function(){var a=this.__nC;

if(!a){a=this.__nC=new qx.ui.core.Widget();
a.setAppearance(q);
a.exclude();
qx.core.Init.getApplication().getRoot().add(a);
}return a;
},__nM:function(){var location=this.getContainerLocation();
var i=this.getBounds();
var h=this.__nL();
h.setUserBounds(location.left,location.top,i.width,i.height);
h.show();
h.setZIndex(this.getZIndex()+1);
},__nN:function(e){var k=this.__nD;
var n=Math.max(k.left,Math.min(k.right,e.getDocumentLeft()));
var m=Math.max(k.top,Math.min(k.bottom,e.getDocumentTop()));
var j=this.__nE+n;
var l=this.__nF+m;
return {viewportLeft:j,viewportTop:l,parentLeft:j-this.__nG,parentTop:l-this.__nH};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(r)){return;
}var parent=this.getLayoutParent();
var c=parent.getContentLocation();
var d=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__nI=true;
this.__nJ=parent.getBlockerColor();
this.__nK=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__nD={left:c.left,top:c.top,right:c.left+d.width,bottom:c.top+d.height};
var b=this.getContainerLocation();
this.__nG=c.left;
this.__nH=c.top;
this.__nE=b.left-e.getDocumentLeft();
this.__nF=b.top-e.getDocumentTop();
this.addState(A);
this.__nB.capture();
if(this.getUseMoveFrame()){this.__nM();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(A)){return;
}var g=this.__nN(e);

if(this.getUseMoveFrame()){this.__nL().setDomPosition(g.viewportLeft,g.viewportTop);
}else{this.setDomPosition(g.parentLeft,g.parentTop);
}},_onMoveMouseUp:function(e){if(!this.hasState(A)){return;
}this.removeState(A);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__nI){parent.unblockContent();
parent.setBlockerColor(this.__nJ);
parent.setBlockerOpacity(this.__nK);
this.__nJ=null;
this.__nK=0;
}}this.__nB.releaseCapture();
var o=this.__nN(e);
this.setLayoutProperties({left:o.parentLeft,top:o.parentTop});
if(this.getUseMoveFrame()){this.__nL().exclude();
}},__nO:function(e){if(!this.hasState(A)){return;
}this.removeState(A);
if(this.getUseMoveFrame()){this.__nL().exclude();
}}},destruct:function(){this._disposeObjects(p,s);
this._disposeFields(u);
}});
})();
(function(){var f="qx.ui.window.IWindowManager";
qx.Interface.define(f,{members:{setDesktop:function(a){this.assertInterface(a,qx.ui.window.IDesktop);
},changeActiveWindow:function(d,e){},updateStack:function(){},bringToFront:function(c){this.assertInstance(c,qx.ui.window.Window);
},sendToBack:function(b){this.assertInstance(b,qx.ui.window.Window);
}}});
})();
(function(){var r="qx.ui.window.Manager",q="__nP";
qx.Class.define(r,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__nP:null,setDesktop:function(j){this.__nP=j;
this.updateStack();
},getDesktop:function(){return this.__nP;
},changeActiveWindow:function(g,h){if(g){this.bringToFront(g);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__nP.unblockContent();
var m=this.__nP.getWindows();
var p=this._minZIndex-1;
var o=false;
var n,k=null;

for(var i=0,l=m.length;i<l;i++){n=m[i];

if(!n.isVisible()){continue;
}p+=2;
n.setZIndex(p);
if(n.getModal()){this.__nP.blockContent(p-1);
}o=o||n.isActive();
k=n;
}
if(!o){this.__nP.setActiveWindow(k);
}},bringToFront:function(a){var b=this.__nP.getWindows();
var c=qx.lang.Array.remove(b,a);

if(c){b.push(a);
this.updateStack();
}},sendToBack:function(d){var e=this.__nP.getWindows();
var f=qx.lang.Array.remove(e,d);

if(f){e.unshift(d);
this.updateStack();
}}},destruct:function(){this._disposeObjects(q);
}});
})();
(function(){var v="Boolean",u="qx.event.type.Event",t="captionbar",s="maximize-button",r="_applyCaptionBarChange",q="restore-button",p="minimize-button",o="close-button",n="execute",m="pane",bd="title",bc="icon",bb="maximized",ba="statusbar-text",Y="statusbar",X="String",W="active",V="beforeClose",U="beforeMinimize",T="mousedown",C="changeStatus",D="changeIcon",A="excluded",B="_applyCaption",y="_applyActive",z="beforeRestore",w="normal",x="minimize",E="dblclick",F="changeModal",L="_applyShowStatusbar",K="_applyStatus",N="qx.ui.window.Window",M="changeCaption",P="_applyIcon",O="focusout",H="beforeMaximize",S="maximize",R="restore",Q="window",G="close",I="changeActive",J="minimized";
qx.Class.define(N,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(bo,bp){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(t);
this._createChildControl(m);
if(bp!=null){this.setIcon(bp);
}
if(bo!=null){this.setCaption(bo);
}this._updateCaptionBar();
this.addListener(T,this._onWindowMouseDown,this,true);
this.addListener(O,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":u,"close":u,"beforeMinimize":u,"minimize":u,"beforeMaximize":u,"maximize":u,"beforeRestore":u,"restore":u},properties:{appearance:{refine:true,init:Q},visibility:{refine:true,init:A},focusable:{refine:true,init:true},active:{check:v,init:false,apply:y,event:I},modal:{check:v,init:false,event:F},caption:{apply:B,event:M,nullable:true},icon:{check:X,nullable:true,apply:P,event:D,themeable:true},status:{check:X,nullable:true,apply:K,event:C},showClose:{check:v,init:true,apply:r,themeable:true},showMaximize:{check:v,init:true,apply:r,themeable:true},showMinimize:{check:v,init:true,apply:r,themeable:true},allowClose:{check:v,init:true,apply:r},allowMaximize:{check:v,init:true,apply:r},allowMinimize:{check:v,init:true,apply:r},showStatusbar:{check:v,init:false,apply:L}},members:{__nQ:null,__nR:null,getChildrenContainer:function(){return this.getChildControl(m);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(g){var h;

switch(g){case Y:h=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(h);
h.add(this.getChildControl(ba));
break;
case ba:h=new qx.ui.basic.Label();
h.setValue(this.getStatus());
break;
case m:h=new qx.ui.container.Composite();
this._add(h,{flex:1});
break;
case t:var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
h=new qx.ui.container.Composite(j);
this._add(h);
h.addListener(E,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(h);
break;
case bc:h=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(t).add(h,{row:0,column:0});
break;
case bd:h=new qx.ui.basic.Label(this.getCaption());
h.setWidth(0);
h.setAllowGrowX(true);
var i=this.getChildControl(t);
i.add(h,{row:0,column:1});
break;
case p:h=new qx.ui.form.Button();
h.setFocusable(false);
h.addListener(n,this._onMinimizeButtonClick,this);
this.getChildControl(t).add(h,{row:0,column:2});
break;
case q:h=new qx.ui.form.Button();
h.setFocusable(false);
h.addListener(n,this._onRestoreButtonClick,this);
this.getChildControl(t).add(h,{row:0,column:3});
break;
case s:h=new qx.ui.form.Button();
h.setFocusable(false);
h.addListener(n,this._onMaximizeButtonClick,this);
this.getChildControl(t).add(h,{row:0,column:4});
break;
case o:h=new qx.ui.form.Button();
h.setFocusable(false);
h.addListener(n,this._onCloseButtonClick,this);
this.getChildControl(t).add(h,{row:0,column:6});
break;
}return h||arguments.callee.base.call(this,g);
},_updateCaptionBar:function(){var bm;

if(this.getIcon()){this._showChildControl(bc);
}else{this._excludeChildControl(bc);
}
if(this.getCaption()){this._showChildControl(bd);
}else{this._excludeChildControl(bd);
}
if(this.getShowMinimize()){this._showChildControl(p);
bm=this.getChildControl(p);
this.getAllowMinimize()?bm.resetEnabled():bm.setEnabled(false);
}else{this._excludeChildControl(p);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(q);
this._excludeChildControl(s);
}else{this._showChildControl(s);
this._excludeChildControl(q);
}bm=this.getChildControl(s);
this.getAllowMaximize()?bm.resetEnabled():bm.setEnabled(false);
}else{this._excludeChildControl(s);
this._excludeChildControl(q);
}
if(this.getShowClose()){this._showChildControl(o);
bm=this.getChildControl(o);
this.getAllowClose()?bm.resetEnabled():bm.setEnabled(false);
}else{this._excludeChildControl(o);
}},close:function(){if(this.fireNonBubblingEvent(V,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(G);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var c=parent.getBounds();

if(c){var d=this.getSizeHint();
var b=Math.round((c.width-d.width)/2);
var top=Math.round((c.height-d.height)/2);

if(top<0){top=0;
}this.moveTo(b,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(!parent){return;
}
if(parent.supportsMaximize()){if(this.fireNonBubblingEvent(H,qx.event.type.Event,[false,true])){var a=this.getLayoutProperties();
this.__nR=a.left===undefined?0:a.left;
this.__nQ=a.top===undefined?0:a.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(bb);
this._updateCaptionBar();
this.fireEvent(S);
}}},minimize:function(){if(this.fireNonBubblingEvent(U,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(x);
}},restore:function(){if(!this.isMaximized()){return;
}
if(this.fireNonBubblingEvent(z,qx.event.type.Event,[false,true])){var bn=this.__nR;
var top=this.__nQ;
this.setLayoutProperties({edge:null,left:bn,top:top});
this.removeState(bb);
this._updateCaptionBar();
this.fireEvent(R);
}},moveTo:function(bh,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bh,top:top});
},isMaximized:function(){return this.hasState(bb);
},getMode:function(){if(!this.isVisible()){return J;
}else{if(this.isMaximized()){return bb;
}else{return w;
}}},_applyActive:function(bi,bj){if(bj){this.removeState(W);
}else{this.addState(W);
}},_getContentPaddingTarget:function(){return this.getChildControl(m);
},_applyShowStatusbar:function(bq,br){if(bq){this._showChildControl(Y);
}else{this._excludeChildControl(Y);
}},_applyCaptionBarChange:function(bk,bl){this._updateCaptionBar();
},_applyStatus:function(be,bf){var bg=this.getChildControl(ba,true);

if(bg){bg.setValue(be);
}},_applyCaption:function(bs,bt){this.getChildControl(bd).setValue(bs);
},_applyIcon:function(k,l){this.getChildControl(bc).setSource(k);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var f=e.getRelatedTarget();

if(f!=null&&!qx.ui.core.Widget.contains(this,f)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(p).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(q).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(s).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(o).reset();
}}});
})();
(function(){var b="qx.ui.window.IDesktop";
qx.Interface.define(b,{members:{setWindowManager:function(c){this.assertInterface(c,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(a){this.assertInteger(a);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var i="Number",h="__nS",g="qx.event.type.Event",f="_applyFirstColumnX",e="Integer",d="qx.ui.table.pane.Model",c="_applyMaxColumnCount",b="visibilityChangedPre";
qx.Class.define(d,{extend:qx.core.Object,construct:function(E){arguments.callee.base.call(this);
E.addListener(b,this._onColVisibilityChanged,this);
this.__nS=E;
},events:{"modelChanged":g},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:e,init:0,apply:f},maxColumnCount:{check:i,init:-1,apply:c}},members:{__nT:null,__nS:null,_applyFirstColumnX:function(m,n){this.__nT=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(u,v){this.__nT=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(a){this.__nS=a;
this.__nT=null;
},_onColVisibilityChanged:function(z){this.__nT=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__nT==null){var r=this.getFirstColumnX();
var t=this.getMaxColumnCount();
var s=this.__nS.getVisibleColumnCount();

if(t==-1||(r+t)>s){this.__nT=s-r;
}else{this.__nT=t;
}}return this.__nT;
},getColumnAtX:function(w){var y=this.getFirstColumnX();
return this.__nS.getVisibleColumnAtX(y+w);
},getX:function(o){var p=this.getFirstColumnX();
var q=this.getMaxColumnCount();
var x=this.__nS.getVisibleX(o)-p;

if(x>=0&&(q==-1||x<q)){return x;
}else{return -1;
}},getColumnLeft:function(A){var D=0;
var C=this.getColumnCount();

for(var x=0;x<C;x++){var B=this.getColumnAtX(x);

if(B==A){return D;
}D+=this.__nS.getColumnWidth(B);
}return -1;
},getTotalWidth:function(){var j=0;
var k=this.getColumnCount();

for(var x=0;x<k;x++){var l=this.getColumnAtX(x);
j+=this.__nS.getColumnWidth(l);
}return j;
}},destruct:function(){this._disposeFields(h);
}});
})();
(function(){var cF="",cE="!",cD="'!",cC="'",cB="Expected '",cA=",",cz="Event (",cy="' but found ",cx="The value '",cw="Expected value to be an array but found ",dH=") was fired.",dG="Expected value to be an integer >= 0 but found ",dF="' to be not equal with '",dE="' to '",dD="Expected object '",dC="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3', which cannot be converted to a CSS color!",dB="Called assertTrue with '",dA="Expected value to be a map but found ",dz="The function did not raise an exception!",dy="Expected value to be undefined but found ",cM="Expected value to be a regular expression but found ",cN="' to implement the interface '",cK="Expected value to be null but found ",cL="Invalid argument 'type'",cI="Called assert with 'false'",cJ="Assertion error! ",cG="Expected value to be a string but found ",cH="null",cS="' but found '",cT="' must must be a key of the map '",dd="The String '",da="Expected value not to be undefined but found ",dl=": ",dg="The raised exception does not have the expected type! ",du=") not fired.",dr="qx.core.Assert",cV="Expected value to be typeof object but found ",dx="' (identical) but found '",dw="' must have any of the values defined in the array '",dv="Expected value to be a number but found ",cU="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3' (rgb(%4))!",cX="Called assertFalse with '",cY="]",dc="Expected value to be a qooxdoo object but found ",de="' arguments.",dh="Expected value to be a DOM element but found  '%1'!",dn="Expected value not to be null but found ",dt="Array[",cO="' does not match the regular expression '",cP="' to be not identical with '",cW="' arguments but found '",dk=", ",dj="qx.core.AssertionError",di="Expected value to be a boolean but found ",dq="Expected value to be a qooxdoo widget but found ",dp="Expected value '%1' to be in the range '%2'..'%3'!",df="Expected value to be typeof '",dm="Expected value to be typeof function but found ",ct="Expected value to be an integer but found ",ds="Called fail().",cQ="The parameter 're' must be a string or a regular expression.",cR="Expected value to be a number >= 0 but found ",db="Expected value to be instanceof '",cu="Wrong number of arguments given. Expected '",cv="object";
qx.Bootstrap.define(dr,{statics:{__nU:true,__nV:function(bf,bg,bh){if(!bf){var bi=cJ+bg+dl+bh;

if(this.__nU){qx.log.Logger.error(bi);
}
if(qx.Class.isDefined(dj)){var bj=new qx.core.AssertionError(bg,bh);

if(this.__nU){qx.log.Logger.error("Stack trace: \n"+bj.getStackTrace());
}throw bj;
}else{throw new Error(bi);
}}},__nW:function(bG){var bH;

if(bG===null){bH=cH;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=dt+bG.length+cY;
}else{try{bH=bG.toString();
}catch(e){bH=cF;
}}return bH;
},assert:function(C,D){this.__nV(C==true,D||cF,cI);
},fail:function(bN){this.__nV(false,bN||cF,ds);
},assertTrue:function(cm,cn){this.__nV(cm===true,cn||cF,dB+this.__nW(cm)+cC);
},assertFalse:function(ck,cl){this.__nV(ck===false,cl||cF,cX+this.__nW(ck)+cC);
},assertEquals:function(bt,bu,bv){this.__nV(bt==bu,bv||cF,cB+this.__nW(bt)+cS+this.__nW(bu)+cD);
},assertNotEquals:function(bo,bp,bq){this.__nV(bo!=bp,bq||cF,cB+this.__nW(bo)+dF+this.__nW(bp)+cD);
},assertIdentical:function(b,c,d){this.__nV(b===c,d||cF,cB+this.__nW(b)+dx+this.__nW(c)+cD);
},assertNotIdentical:function(dI,dJ,dK){this.__nV(dI!==dJ,dK||cF,cB+this.__nW(dI)+cP+this.__nW(dJ)+cD);
},assertNotUndefined:function(bS,bT){this.__nV(bS!==undefined,bT||cF,da+this.__nW(bS)+cE);
},assertUndefined:function(ci,cj){this.__nV(ci===undefined,cj||cF,dy+this.__nW(ci)+cE);
},assertNotNull:function(bO,bP){this.__nV(bO!==null,bP||cF,dn+this.__nW(bO)+cE);
},assertNull:function(bz,bA){this.__nV(bz===null,bA||cF,cK+this.__nW(bz)+cE);
},assertJsonEquals:function(s,t,u){this.assertEquals(qx.util.Json.stringify(s),qx.util.Json.stringify(t),u);
},assertMatch:function(cq,cr,cs){this.assertString(cq);
this.assert(qx.lang.Type.isRegExp(cr)||qx.lang.Type.isString(cr),cQ);
this.__nV(cq.search(cr)>=0?true:false,cs||cF,dd+cq+cO+cr.toString()+cD);
},assertArgumentsCount:function(bB,bC,bD,bE){var bF=bB.length;
this.__nV((bF>=bC&&bF<=bD),bE||cF,cu+bC+dE+bD+cW+arguments.length+de);
},assertEventFired:function(cb,event,cc,cd,ce){var cg=false;
var cf=function(e){if(cd){cd.call(cb,e);
}cg=true;
};
var ch=cb.addListener(event,cf,cb);
cc.call();
this.__nV(cg===true,ce||cF,cz+event+du);
cb.removeListenerById(ch);
},assertEventNotFired:function(m,event,n,o){var q=false;
var p=function(e){q=true;
};
var r=m.addListener(event,p,m);
n.call();
this.__nV(q===false,o||cF,cz+event+dH);
m.removeListenerById(r);
},assertException:function(E,F,G,H){var F=F||Error;
var I;

try{this.__nU=false;
E();
}catch(by){I=by;
}finally{this.__nU=true;
}
if(I==null){this.__nV(false,H||cF,dz);
}this.__nV(I instanceof F,H||cF,dg+F);

if(G){this.assertMatch(I.toString(),G,H);
}},assertInArray:function(P,Q,R){this.__nV(Q.indexOf(P)!==-1,R||cF,cx+this.__nW(P)+dw+Q.join(dk)+cC);
},assertArrayEquals:function(bK,bL,bM){this.assertArray(bK,bM);
this.assertArray(bL,bM);
this.assertEquals(bK.length,bL.length,bM);

for(var i=0;i<bK.length;i++){this.assertIdentical(bK[i],bL[i],bM);
}},assertKeyInMap:function(ba,bb,bc){this.__nV(bb[ba]!==undefined,bc||cF,cx+this.__nW(ba)+cT+qx.util.Json.stringify(bb)+cC);
},assertFunction:function(N,O){this.__nV(qx.lang.Type.isFunction(N),O||cF,dm+this.__nW(N)+cE);
},assertString:function(x,y){this.__nV(qx.lang.Type.isString(x),y||cF,cG+this.__nW(x)+cE);
},assertBoolean:function(br,bs){this.__nV(qx.lang.Type.isBoolean(br),bs||cF,di+this.__nW(br)+cE);
},assertNumber:function(L,M){this.__nV(qx.lang.Type.isNumber(L)&&isFinite(L),M||cF,dv+this.__nW(L)+cE);
},assertPositiveNumber:function(f,g){this.__nV(qx.lang.Type.isNumber(f)&&isFinite(f)&&f>=0,g||cF,cR+this.__nW(f)+cE);
},assertInteger:function(bI,bJ){this.__nV((qx.lang.Type.isNumber(bI)&&isFinite(bI)&&bI%1===0),bJ||cF,ct+this.__nW(bI)+cE);
},assertPositiveInteger:function(h,j){this.__nV((qx.lang.Type.isNumber(h)&&isFinite(h)&&h%1===0&&h>=0),j||cF,dG+this.__nW(h)+cE);
},assertInRange:function(bk,bl,bm,bn){this.__nV(bk>=bl&&bk<=bm,bn||cF,qx.lang.String.format(dp,[bk,bl,bm]));
},assertObject:function(v,w){this.__nV(v!==null&&(qx.lang.Type.isObject(v)||typeof v===cv),w||cF,cV+this.__nW(v)+cE);
},assertArray:function(co,cp){this.__nV(qx.lang.Type.isArray(co),cp||cF,cw+this.__nW(co)+cE);
},assertMap:function(J,K){this.__nV(qx.lang.Type.isObject(J),K||cF,dA+this.__nW(J)+cE);
},assertRegExp:function(bw,bx){this.__nV(qx.lang.Type.isRegExp(bw),bx||cF,cM+this.__nW(bw)+cE);
},assertType:function(W,X,Y){this.assertString(X,cL);
this.__nV(typeof (W)===X,Y||cF,df+X+cy+this.__nW(W)+cE);
},assertInstance:function(S,T,U){var V=T.classname||T+cF;
this.__nV(S instanceof T,U||cF,db+V+cy+this.__nW(S)+cE);
},assertInterface:function(z,A,B){this.__nV(qx.Class.implementsInterface(z,A),B||cF,dD+this.__nW(z)+cN+A+cD);
},assertCssColor:function(bU,bV,bW){var bX=qx.util.ColorUtil;
var ca=bX.stringToRgb(bU);

try{var bY=bX.stringToRgb(bV);
}catch(a){this.__nV(false,bW||cF,qx.lang.String.format(dC,[bU,ca.join(cA),this.__nW(bV)]));
}this.__nV(ca[0]==bY[0]&&ca[1]==bY[1]&&ca[2]==bY[2],bW||cF,qx.lang.String.format(cU,[this.__nW(bU),ca.join(cA),this.__nW(bV),bY.join(cA)]));
},assertElement:function(bQ,bR){this.__nV(qx.dom.Node.isElement(bQ),bR||cF,qx.lang.String.format(dh,[this.__nW(bQ)]));
},assertQxObject:function(bd,be){this.__nV(bd instanceof qx.core.Object,be||cF,dc+this.__nW(bd)+cE);
},assertQxWidget:function(k,l){this.__nV(k instanceof qx.ui.core.Widget,l||cF,dq+this.__nW(k)+cE);
}}});
})();
(function(){var n=",",m="",k="string",j="null",h='"',g="qx.jsonDebugging",f='\\u00',e="new Date(Date.UTC(",d=")",c="__od",K='\\\\',J="__ob",I='\\f',H='\\"',G="))",F="}",E='(',D=":",C="{",B='\\r',u="__ol",v='\\t',s="__oc",t="(",q="__oa",r="]",o="[",p="qx.jsonEncodeUndefined",w='\\b',x="qx.util.Json",z=')',y="__ok",A='\\n';
qx.Class.define(x,{statics:{__nX:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__nY:{"function":q,"boolean":J,"number":s,"string":c,"object":y,"undefined":u},__oa:function(bl,bm){return String(bl);
},__ob:function(bv,bw){return String(bv);
},__oc:function(bt,bu){return isFinite(bt)?String(bt):j;
},__od:function(bq,br){var bs;

if(/["\\\x00-\x1f]/.test(bq)){bs=bq.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__of);
}else{bs=bq;
}return h+bs+h;
},__oe:{'\b':w,'\t':v,'\n':A,'\f':I,'\r':B,'"':H,'\\':K},__of:function(a,b){var bk=qx.util.Json.__oe[b];

if(bk){return bk;
}bk=b.charCodeAt();
return f+Math.floor(bk/16).toString(16)+(bk%16).toString(16);
},__og:function(Y,ba){var bc=[],bf=true,be,bb;
var bd=qx.util.Json.__on;
bc.push(o);

if(bd){qx.util.Json.__oh+=qx.util.Json.BEAUTIFYING_INDENT;
bc.push(qx.util.Json.__oh);
}
for(var i=0,l=Y.length;i<l;i++){bb=Y[i];
be=this.__nY[typeof bb];

if(be){bb=this[be](bb,i+m);

if(typeof bb==k){if(!bf){bc.push(n);

if(bd){bc.push(qx.util.Json.__oh);
}}bc.push(bb);
bf=false;
}}}
if(bd){qx.util.Json.__oh=qx.util.Json.__oh.substring(0,qx.util.Json.__oh.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bc.push(qx.util.Json.__oh);
}bc.push(r);
return bc.join(m);
},__oi:function(bn,bo){var bp=bn.getUTCFullYear()+n+bn.getUTCMonth()+n+bn.getUTCDate()+n+bn.getUTCHours()+n+bn.getUTCMinutes()+n+bn.getUTCSeconds()+n+bn.getUTCMilliseconds();
return e+bp+G;
},__oj:function(M,N){var Q=[],S=true,P,O;
var R=qx.util.Json.__on;
Q.push(C);

if(R){qx.util.Json.__oh+=qx.util.Json.BEAUTIFYING_INDENT;
Q.push(qx.util.Json.__oh);
}
for(var N in M){O=M[N];
P=this.__nY[typeof O];

if(P){O=this[P](O,N);

if(typeof O==k){if(!S){Q.push(n);

if(R){Q.push(qx.util.Json.__oh);
}}Q.push(this.__od(N),D,O);
S=false;
}}}
if(R){qx.util.Json.__oh=qx.util.Json.__oh.substring(0,qx.util.Json.__oh.length-qx.util.Json.BEAUTIFYING_INDENT.length);
Q.push(qx.util.Json.__oh);
}Q.push(F);
return Q.join(m);
},__ok:function(bz,bA){if(bz){if(qx.lang.Type.isFunction(bz.toJSON)&&bz.toJSON!==this.__nX){return this.__om(bz.toJSON(bA),bA);
}else if(qx.lang.Type.isDate(bz)){return this.__oi(bz,bA);
}else if(qx.lang.Type.isArray(bz)){return this.__og(bz,bA);
}else if(qx.lang.Type.isObject(bz)){return this.__oj(bz,bA);
}return m;
}return j;
},__ol:function(T,U){if(qx.core.Setting.get(p)){return j;
}},__om:function(bi,bj){return this[this.__nY[typeof bi]](bi,bj);
},stringify:function(V,W){this.__on=W;
this.__oh=this.BEAUTIFYING_LINE_END;
var X=this.__om(V,m);

if(typeof X!=k){X=null;
}if(qx.core.Setting.get(g)){qx.log.Logger.debug(this,"JSON request: "+X);
}return X;
},parse:function(bx){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bx.replace(/"(\\.|[^"\\])*"/g,m))){throw new Error("Could not parse JSON string!");
}
try{return eval(t+bx+d);
}catch(by){throw new Error("Could not evaluate JSON string: "+by.message);
}},parseQx:function(bg){if(qx.core.Setting.get(g)){qx.log.Logger.debug(this,"JSON response: "+bg);
}var bh=(bg&&bg.length>0)?eval(E+bg+z):null;
return bh;
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(L){L.__nX=Date.prototype.toJSON;
}});
})();
(function(){var n="=",m="no",l="qx.bom.Window",k="javascript:/",j="yes",i="qxNativeWindow",h=",";
qx.Class.define(l,{statics:{__oo:{top:1,left:1,width:1,height:1,dependent:1,resizable:1,status:1,location:1,menubar:1,scrollbars:1,toolbar:1},open:function(q,name,r){if(q==null){q=k;
}
if(name==null){name=i+new Date().getTime();
}var t=[];
var w;
var v=this.__oo;
var u=qx.lang.Type;

for(var s in r){if(v[s]){if(u.isBoolean(r[s])){w=s+n+(r[s]?j:m);
}else{w=s+n+r[s];
}t.push(w);
}else{qx.log.Logger.warn("Option '"+s+"' is not supported for native windows.");
}}return window.open(q,name,t.join(h));
},close:function(x){if(x){return x.close();
}},isClosed:function(b){var closed=true;

if(b){try{closed=b.closed;
}catch(p){}}return closed;
},moveTo:function(c,top,d){if(!qx.bom.Window.isClosed(c)){try{c.moveTo(d,top);
}catch(a){qx.log.Logger.error("Cross-Domain Scripting problem: Could not move window!",a);
}}},resizeTo:function(e,f,g){if(!qx.bom.Window.isClosed(e)){try{e.resizeTo(f,g);
}catch(o){qx.log.Logger.error("Cross-Domain Scripting problem: Could not resize window!",o);
}}}}});
})();
(function(){var T=": ",S="qx.event.type.Event",R="failed",Q="String",P="Boolean",O="application/json",N="aborted",M="completed",L="Content-Type",K="timeout",bq=")",bp="application/x-www-form-urlencoded",bo="?instanceId=",bn="Integer",bm="Object",bl="qx.io.remote.Rpc",bk="error",bj=" error ",bi="Aborted",bh="Local error ",bb="refreshSession",bc="Application error ",Y="",ba="Transport error ",W="(",X="/.qxrpc",U="Local time-out expired",V="POST",bd="result",be="UNEXPECTED origin ",bg="Server error ",bf="id";
qx.Class.define(bl,{extend:qx.core.Object,construct:function(bB,bC){arguments.callee.base.call(this);

if(bB!==undefined){this.setUrl(bB);
}
if(bC!=null){this.setServiceName(bC);
}
if(qx.core.ServerSettings){this.__op=qx.core.ServerSettings.serverPathSuffix;
}},events:{"completed":S,"aborted":S,"failed":S,"timeout":S},statics:{origin:{server:1,application:2,transport:3,local:4},localError:{timeout:1,abort:2},makeServerURL:function(bs){var bt=null;

if(qx.core.ServerSettings){bt=qx.core.ServerSettings.serverPathPrefix+X+qx.core.ServerSettings.serverPathSuffix;

if(bs!=null){bt+=bo+bs;
}}return bt;
}},properties:{timeout:{check:bn,nullable:true},crossDomain:{check:P,init:false},url:{check:Q,nullable:true},serviceName:{check:Q,nullable:true},serverData:{check:bm,nullable:true},username:{check:Q,nullable:true},password:{check:Q,nullable:true},useBasicHttpAuth:{check:P,nullable:true}},members:{__oq:null,__op:null,_callInternal:function(r,s,t){var self=this;
var F=(s==0?0:1);
var J=(t?bb:r[F]);
var C=r[0];
var w=[];
var A=this;

for(var i=F+1;i<r.length;++i){w.push(r[i]);
}var x=new qx.io.remote.Request(this.getUrl(),V,O);
var v={"service":(t?null:this.getServiceName()),"method":J,"id":x.getSequenceNumber(),"params":w};
var I=this.getServerData();

if(I!==null){v.server_data=I;
}x.setCrossDomain(this.getCrossDomain());

if(this.getUsername()){x.setUseBasicHttpAuth(this.getUseBasicHttpAuth());
x.setUsername(this.getUsername());
x.setPassword(this.getPassword());
}x.setTimeout(this.getTimeout());
var D=null;
var z=null;
var u=null;
var G=null;
var y=function(by,bz){switch(s){case 0:break;
case 1:C(u,D,z);
break;
case 2:if(!D){bz.fireDataEvent(by,G);
}else{D.id=z;

if(r[0]){bz.fireDataEvent(R,D);
}else{bz.fireDataEvent(by,D);
}}}};
var B=function(bD){bD.toString=function(){switch(bD.origin){case qx.io.remote.Rpc.origin.server:return bg+bD.code+T+bD.message;
case qx.io.remote.Rpc.origin.application:return bc+bD.code+T+bD.message;
case qx.io.remote.Rpc.origin.transport:return ba+bD.code+T+bD.message;
case qx.io.remote.Rpc.origin.local:return bh+bD.code+T+bD.message;
default:return (be+bD.origin+bj+bD.code+T+bD.message);
}};
};
var H=function(bu,bv,bw){var bx=new Object();
bx.origin=bu;
bx.code=bv;
bx.message=bw;
B(bx);
return bx;
};
x.addListener(R,function(b){var c=b.getStatusCode();
D=H(qx.io.remote.Rpc.origin.transport,c,qx.io.remote.Exchange.statusCodeToString(c));
z=this.getSequenceNumber();
y(R,A);
});
x.addListener(K,function(bA){this.debug("TIMEOUT OCCURRED");
D=H(qx.io.remote.Rpc.origin.local,qx.io.remote.Rpc.localError.timeout,U);
z=this.getSequenceNumber();
y(K,A);
});
x.addListener(N,function(k){D=H(qx.io.remote.Rpc.origin.local,qx.io.remote.Rpc.localError.abort,bi);
z=this.getSequenceNumber();
y(N,A);
});
x.addListener(M,function(l){G=l.getContent();
z=G[bf];

if(z!=this.getSequenceNumber()){this.warn("Received id ("+z+") does not match requested id "+"("+this.getSequenceNumber()+")!");
}var n=M;
var o=G[bk];

if(o!=null){u=null;
B(o);
D=o;
n=R;
}else{u=G[bd];

if(t){u=eval(W+u+bq);
var m=qx.core.ServerSettings.serverPathSuffix;

if(self.__op!=m){self.__oq=self.__op;
self.__op=m;
}self.setUrl(self.fixUrl(self.getUrl()));
}}y(n,A);
});
x.setData(qx.util.Json.stringify(v));
x.setAsynchronous(s>0);

if(x.getCrossDomain()){x.setRequestHeader(L,bp);
}else{x.setRequestHeader(L,O);
}x.send();

if(s==0){if(D!=null){var E=new Error(D.toString());
E.rpcdetails=D;
throw E;
}return u;
}else{return x;
}},fixUrl:function(h){if(this.__oq==null||this.__op==null||this.__oq==Y||this.__oq==this.__op){return h;
}var j=h.indexOf(this.__oq);

if(j==-1){return h;
}return (h.substring(0,j)+this.__op+h.substring(j+this.__oq.length));
},callSync:function(br){return this._callInternal(arguments,0);
},callAsync:function(f,g){return this._callInternal(arguments,1);
},callAsyncListeners:function(p,q){return this._callInternal(arguments,2);
},refreshSession:function(d){if(this.getCrossDomain()){if(qx.core.ServerSettings&&qx.core.ServerSettings.serverPathSuffix){var e=(new Date()).getTime()-qx.core.ServerSettings.lastSessionRefresh;

if(e/1000>(qx.core.ServerSettings.sessionTimeoutInSeconds-30)){this._callInternal([d],1,true);
}else{d(true);
}}else{d(false);
}}else{d(true);
}},abort:function(a){a.abort();
}}});
})();
(function(){var w="Boolean",u="qx.event.type.Event",t="queued",s="String",r="sending",q="qx.io.remote.Response",p="receiving",o="aborted",n="failed",m="nocache",bf="completed",be="POST",bd="configured",bc="timeout",bb="GET",ba="Pragma",Y="no-url-params-on-post",X="no-cache",W="Cache-Control",V="Content-Type",D="text/plain",E="application/xml",B="application/json",C="text/html",z="application/x-www-form-urlencoded",A="qx.io.remote.Exchange",x="Integer",y="X-Qooxdoo-Response-Type",F="__os",G="__ot",N="HEAD",L="qx.io.remote.Request",P="_applyResponseType",O="_applyState",R="text/javascript",Q="changeState",I="PUT",U="_applyProhibitCaching",T="",S="_applyMethod",H="DELETE",J="__or",K="__ou",M="boolean";
qx.Class.define(L,{extend:qx.core.Object,construct:function(bg,bh,bi){arguments.callee.base.call(this);
this.__or={};
this.__os={};
this.__ot={};
this.__ou={};

if(bg!==undefined){this.setUrl(bg);
}
if(bh!==undefined){this.setMethod(bh);
}
if(bi!==undefined){this.setResponseType(bi);
}this.setProhibitCaching(true);
this.__ov=++qx.io.remote.Request.__ov;
},events:{"created":u,"configured":u,"sending":u,"receiving":u,"completed":q,"aborted":q,"failed":q,"timeout":q},statics:{__ov:0},properties:{url:{check:s,init:T},method:{check:[bb,be,I,N,H],apply:S,init:bb},asynchronous:{check:w,init:true},data:{check:s,nullable:true},username:{check:s,nullable:true},password:{check:s,nullable:true},state:{check:[bd,t,r,p,bf,o,bc,n],init:bd,apply:O,event:Q},responseType:{check:[D,R,B,E,C],init:D,apply:P},timeout:{check:x,nullable:true},prohibitCaching:{check:function(v){return typeof v==M||v===Y;
},init:true,apply:U},crossDomain:{check:w,init:false},fileUpload:{check:w,init:false},transport:{check:A,nullable:true},useBasicHttpAuth:{check:w,init:false}},members:{__or:null,__os:null,__ot:null,__ou:null,__ov:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case r:case p:this.error("Aborting already sent request!");
case t:this.abort();
break;
}},isConfigured:function(){return this.getState()===bd;
},isQueued:function(){return this.getState()===t;
},isSending:function(){return this.getState()===r;
},isReceiving:function(){return this.getState()===p;
},isCompleted:function(){return this.getState()===bf;
},isAborted:function(){return this.getState()===o;
},isTimeout:function(){return this.getState()===bc;
},isFailed:function(){return this.getState()===n;
},__ow:function(e){var bk=e.clone();
bk.setTarget(this);
this.dispatchEvent(bk);
},_onqueued:function(e){this.setState(t);
this.__ow(e);
},_onsending:function(e){this.setState(r);
this.__ow(e);
},_onreceiving:function(e){this.setState(p);
this.__ow(e);
},_oncompleted:function(e){this.setState(bf);
this.__ow(e);
this.dispose();
},_onaborted:function(e){this.setState(o);
this.__ow(e);
this.dispose();
},_ontimeout:function(e){this.setState(bc);
this.__ow(e);
this.dispose();
},_onfailed:function(e){this.setState(n);
this.__ow(e);
this.dispose();
},_applyState:function(bu,bv){{};
},_applyProhibitCaching:function(a,b){if(!a){this.removeParameter(m);
this.removeRequestHeader(ba);
this.removeRequestHeader(W);
return;
}if(a!==Y||this.getMethod()!=be){this.setParameter(m,new Date().valueOf());
}else{this.removeParameter(m);
}this.setRequestHeader(ba,X);
this.setRequestHeader(W,X);
},_applyMethod:function(h,i){if(h===be){this.setRequestHeader(V,z);
}else{this.removeRequestHeader(V);
}var j=this.getProhibitCaching();
this._applyProhibitCaching(j,j);
},_applyResponseType:function(bm,bn){this.setRequestHeader(y,bm);
},setRequestHeader:function(bw,bx){this.__or[bw]=bx;
},removeRequestHeader:function(bt){delete this.__or[bt];
},getRequestHeader:function(g){return this.__or[g]||null;
},getRequestHeaders:function(){return this.__or;
},setParameter:function(c,d,f){if(f){this.__ot[c]=d;
}else{this.__os[c]=d;
}},removeParameter:function(br,bs){if(bs){delete this.__ot[br];
}else{delete this.__os[br];
}},getParameter:function(k,l){if(l){return this.__ot[k]||null;
}else{return this.__os[k]||null;
}},getParameters:function(bo){return (bo?this.__ot:this.__os);
},setFormField:function(bp,bq){this.__ou[bp]=bq;
},removeFormField:function(bj){delete this.__ou[bj];
},getFormField:function(bl){return this.__ou[bl]||null;
},getFormFields:function(){return this.__ou;
},getSequenceNumber:function(){return this.__ov;
}},destruct:function(){this.setTransport(null);
this._disposeFields(J,F,G,K);
}});
})();
(function(){var g="qx.bom.client.Transport";
qx.Class.define(g,{statics:{getMaxConcurrentRequestCount:function(){var f;
var a=qx.bom.client.Engine;
var e=/([^.]*)\.([^.]*)\.([^.]*).*/.exec(a.FULLVERSION);
var d;

if(e){d=e[3];
}else{e=/([^.]*)\.([^.]*).*/.exec(a.FULLVERSION);
d=0;
}var c=e[1];
var b=e[2];
if(window.maxConnectionsPerServer){f=window.maxConnectionsPerServer;
}else if(a.OPERA){f=8;
}else if(a.WEBKIT){f=4;
}else if(a.GECKO&&((c>1)||((c==1)&&(b>9))||((c==1)&&(b==9)&&(d>=1)))){f=6;
}else{f=2;
}return f;
}}});
})();
(function(){var K="Integer",J="_on",I="_applyEnabled",H="__oy",G="Boolean",F="sending",E="interval",D="__oA",C="failed",B="qx.io.remote.RequestQueue",w="timeout",A="completed",z="queued",v="__ox",u="aborted",y="receiving",x="singleton";
qx.Class.define(B,{type:x,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ox=[];
this.__oy=[];
this.__oz=0;
this.__oA=new qx.event.Timer(500);
this.__oA.addListener(E,this._oninterval,this);
},properties:{enabled:{init:true,check:G,apply:I},maxTotalRequests:{check:K,nullable:true},maxConcurrentRequests:{check:K,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:K,init:5000}},members:{__ox:null,__oy:null,__oz:null,__oA:null,getRequestQueue:function(){return this.__ox;
},getActiveQueue:function(){return this.__oy;
},_debug:function(){var t;
{};
},_check:function(){this._debug();
if(this.__oy.length==0&&this.__ox.length==0){this.__oA.stop();
}if(!this.getEnabled()){return;
}if(this.__ox.length==0||(this.__ox[0].isAsynchronous()&&this.__oy.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__oz>=this.getMaxTotalRequests()){return;
}var h=this.__ox.shift();
var j=new qx.io.remote.Exchange(h);
this.__oz++;
this.__oy.push(j);
this._debug();
j.addListener(F,this._onsending,this);
j.addListener(y,this._onreceiving,this);
j.addListener(A,this._oncompleted,this);
j.addListener(u,this._oncompleted,this);
j.addListener(w,this._oncompleted,this);
j.addListener(C,this._oncompleted,this);
j._start=(new Date).valueOf();
j.send();
if(this.__ox.length>0){this._check();
}},_remove:function(d){qx.lang.Array.remove(this.__oy,d);
d.dispose();
this._check();
},__oB:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e.clone());
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e.clone());
},_oncompleted:function(e){{};
var b=e.getTarget().getRequest();
var a=J+e.getType();

if(b[a]){b[a](e.clone());
}this._remove(e.getTarget());
},_oninterval:function(e){var q=this.__oy;

if(q.length==0){this.__oA.stop();
return;
}var l=(new Date).valueOf();
var o;
var m;
var p=this.getDefaultTimeout();
var n;
var k;

for(var i=q.length-1;i>=0;i--){o=q[i];
m=o.getRequest();

if(m.isAsynchronous()){n=m.getTimeout();
if(n==0){continue;
}
if(n==null){n=p;
}k=l-o._start;

if(k>n){this.warn("Timeout: transport "+o.toHashCode());
this.warn(k+"ms > "+n+"ms");
o.timeout();
}}}},_applyEnabled:function(r,s){if(r){this._check();
}this.__oA.setEnabled(r);
},add:function(c){c.setState(z);

if(c.isAsynchronous()){this.__ox.push(c);
}else{this.__ox.unshift(c);
}this._check();

if(this.getEnabled()){this.__oA.start();
}},abort:function(f){var g=f.getTransport();

if(g){g.abort();
}else if(qx.lang.Array.contains(this.__ox,f)){qx.lang.Array.remove(this.__ox,f);
}}},destruct:function(){this._disposeArray(H);
this._disposeObjects(D);
this._disposeFields(v);
}});
})();
(function(){var S="failed",R="sending",Q="completed",P="receiving",O="aborted",N="timeout",M="qx.io.remote.Response",L="Connection dropped",K="configured",J="qx.event.type.Event",bO="Proxy authentication required",bN="qx.io.remote.transport.Abstract",bM="MSHTML-specific HTTP status code",bL="Not available",bK="Precondition failed",bJ="Server error",bI="Moved temporarily",bH="qx.io.remote.Exchange",bG="Bad gateway",bF="Gone",ba="See other",bb="Partial content",X="Server timeout",Y="qx.io.remote.transport.Script",V="HTTP version not supported",W="Unauthorized",T="Multiple choices",U="Payment required",be="Not implemented",bf="Request-URL too large",bn="Length required",bl="_applyState",bv="changeState",bq="Not modified",bB="qx.io.remote.Request",bz="Connection closed by server",bh="Moved permanently",bE="_applyImplementation",bD="Method not allowed",bC="Forbidden",bg="Use proxy",bj="Ok",bk="Not found",bm="Not acceptable",bo="Request time-out",br="Bad request",bw="Conflict",bA="No content",bc="qx.io.remote.transport.XmlHttp",bd="qx.io.remote.transport.Iframe",bi="Request entity too large",bu="Unknown status code",bt="Unsupported media type",bs="Gateway time-out",by="created",bx="Out of resources",bp="undefined";
qx.Class.define(bH,{extend:qx.core.Object,construct:function(E){arguments.callee.base.call(this);
this.setRequest(E);
E.setTransport(this);
},events:{"sending":J,"receiving":J,"completed":M,"aborted":M,"failed":M,"timeout":M},statics:{typesOrder:[bc,bd,Y],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(b,c){qx.io.remote.Exchange.typesAvailable[c]=b;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var o in qx.io.remote.Exchange.typesAvailable){var n=qx.io.remote.Exchange.typesAvailable[o];

if(n.isSupported()){qx.io.remote.Exchange.typesSupported[o]=n;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(F,G,H){if(!qx.lang.Array.contains(F.handles.responseTypes,H)){return false;
}
for(var I in G){if(!F.handles[I]){return false;
}}return true;
},_nativeMap:{0:by,1:K,2:R,3:P,4:Q},wasSuccessful:function(p,q,r){if(r){switch(p){case null:case 0:return true;
case -1:return q<4;
default:return typeof p===bp;
}}else{switch(p){case -1:{};
return q<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return q!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(p>206&&p<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+p+" ("+q+")");
return false;
}}},statusCodeToString:function(s){switch(s){case -1:return bL;
case 200:return bj;
case 304:return bq;
case 206:return bb;
case 204:return bA;
case 300:return T;
case 301:return bh;
case 302:return bI;
case 303:return ba;
case 305:return bg;
case 400:return br;
case 401:return W;
case 402:return U;
case 403:return bC;
case 404:return bk;
case 405:return bD;
case 406:return bm;
case 407:return bO;
case 408:return bo;
case 409:return bw;
case 410:return bF;
case 411:return bn;
case 412:return bK;
case 413:return bi;
case 414:return bf;
case 415:return bt;
case 500:return bJ;
case 501:return be;
case 502:return bG;
case 503:return bx;
case 504:return bs;
case 505:return V;
case 12002:return X;
case 12029:return L;
case 12030:return L;
case 12031:return L;
case 12152:return bz;
case 13030:return bM;
default:return bu;
}}},properties:{request:{check:bB,nullable:true},implementation:{check:bN,nullable:true,apply:bE},state:{check:[K,R,P,Q,O,N,S],init:K,event:bv,apply:bl}},members:{send:function(){var w=this.getRequest();

if(!w){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var u=qx.io.remote.Exchange.typesOrder;
var t=qx.io.remote.Exchange.typesSupported;
var y=w.getResponseType();
var z={};

if(w.getAsynchronous()){z.asynchronous=true;
}else{z.synchronous=true;
}
if(w.getCrossDomain()){z.crossDomain=true;
}
if(w.getFileUpload()){z.fileUpload=true;
}for(var x in w.getFormFields()){z.programaticFormFields=true;
break;
}var A,v;

for(var i=0,l=u.length;i<l;i++){A=t[u[i]];

if(A){if(!qx.io.remote.Exchange.canHandle(A,z,y)){continue;
}
try{{};
v=new A;
this.setImplementation(v);
v.setUseBasicHttpAuth(w.getUseBasicHttpAuth());
v.send();
return true;
}catch(a){this.error("Request handler throws error");
this.error(a);
return;
}}}this.error("There is no transport implementation available to handle this request: "+w);
},abort:function(){var m=this.getImplementation();

if(m){{};
m.abort();
}else{{};
this.setState(O);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){this.warn("Timeout: implementation "+bQ.toHashCode());
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(N);
}this.__oC();
},__oC:function(){var bP=this.getRequest();

if(bP){bP.setTimeout(0);
}},_onsending:function(e){this.setState(R);
},_onreceiving:function(e){this.setState(P);
},_oncompleted:function(e){this.setState(Q);
},_onabort:function(e){this.setState(O);
},_onfailed:function(e){this.setState(S);
},_ontimeout:function(e){this.setState(N);
},_applyImplementation:function(B,C){if(C){C.removeListener(R,this._onsending,this);
C.removeListener(P,this._onreceiving,this);
C.removeListener(Q,this._oncompleted,this);
C.removeListener(O,this._onabort,this);
C.removeListener(N,this._ontimeout,this);
C.removeListener(S,this._onfailed,this);
}
if(B){var D=this.getRequest();
B.setUrl(D.getUrl());
B.setMethod(D.getMethod());
B.setAsynchronous(D.getAsynchronous());
B.setUsername(D.getUsername());
B.setPassword(D.getPassword());
B.setParameters(D.getParameters());
B.setFormFields(D.getFormFields());
B.setRequestHeaders(D.getRequestHeaders());
B.setData(D.getData());
B.setResponseType(D.getResponseType());
B.addListener(R,this._onsending,this);
B.addListener(P,this._onreceiving,this);
B.addListener(Q,this._oncompleted,this);
B.addListener(O,this._onabort,this);
B.addListener(N,this._ontimeout,this);
B.addListener(S,this._onfailed,this);
}},_applyState:function(d,f){{};

switch(d){case R:this.fireEvent(R);
break;
case P:this.fireEvent(P);
break;
case Q:case O:case N:case S:var h=this.getImplementation();

if(!h){break;
}this.__oC();

if(this.hasListener(d)){var j=qx.event.Registration.createEvent(d,qx.io.remote.Response);

if(d==Q){var g=h.getResponseContent();
j.setContent(g);
if(g===null){{};
d=S;
}}else if(d==S){j.setContent(h.getResponseContent());
}j.setStatusCode(h.getStatusCode());
j.setResponseHeaders(h.getResponseHeaders());
this.dispatchEvent(j);
}this.setImplementation(null);
h.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var k=this.getImplementation();

if(k){this.setImplementation(null);
k.dispose();
}this.setRequest(null);
}});
})();
(function(){var t="qx.event.type.Event",s="String",r="failed",q="timeout",p="created",o="aborted",n="sending",m="configured",l="receiving",k="completed",f="Object",j="Boolean",i="abstract",e="_applyState",d="GET",h="changeState",g="qx.io.remote.transport.Abstract";
qx.Class.define(g,{type:i,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":t,"configured":t,"sending":t,"receiving":t,"completed":t,"aborted":t,"failed":t,"timeout":t},properties:{url:{check:s,nullable:true},method:{check:s,nullable:true,init:d},asynchronous:{check:j,nullable:true,init:true},data:{check:s,nullable:true},username:{check:s,nullable:true},password:{check:s,nullable:true},state:{check:[p,m,n,l,k,o,q,r],init:p,event:h,apply:e},requestHeaders:{check:f,nullable:true},parameters:{check:f,nullable:true},formFields:{check:f,nullable:true},responseType:{check:s,nullable:true},useBasicHttpAuth:{check:j,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){{};
this.setState(o);
},timeout:function(){{};
this.setState(q);
},failed:function(){{};
this.setState(r);
},setRequestHeader:function(u,v){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(a){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(b,c){{};

switch(b){case p:this.fireEvent(p);
break;
case m:this.fireEvent(m);
break;
case n:this.fireEvent(n);
break;
case l:this.fireEvent(l);
break;
case k:this.fireEvent(k);
break;
case o:this.fireEvent(o);
break;
case r:this.fireEvent(r);
break;
case q:this.fireEvent(q);
break;
}return true;
}}});
})();
(function(){var bv="failed",bu="completed",bt="=",bs="aborted",br="",bq="sending",bp="&",bo="configured",bn="timeout",bm="application/xml",bR="qx.io.remote.transport.XmlHttp",bQ="application/json",bP="text/html",bO="qx.client",bN="receiving",bM="text/plain",bL="text/javascript",bK="?",bJ="created",bI='Referer',bC='Basic ',bD="\n</pre>",bA="string",bB='Authorization',by="<pre>Could not execute json: \n",bz="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bw=':',bx="__oF",bE="parseerror",bF="file:",bH="webkit",bG="object";
qx.Class.define(bR,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bM,bL,bQ,bm,bP]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bO,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__oD:false,__oE:0,__oF:null,getRequest:function(){if(this.__oF===null){this.__oF=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__oF.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__oF;
},send:function(){this.__oE=0;
var p=this.getRequest();
var k=this.getMethod();
var t=this.getAsynchronous();
var r=this.getUrl();
var n=(window.location.protocol===bF&&!(/^http(s){0,1}\:/.test(r)));
this.__oD=n;
var w=this.getParameters(false);
var u=[];

for(var m in w){var q=w[m];

if(q instanceof Array){for(var i=0;i<q.length;i++){u.push(encodeURIComponent(m)+bt+encodeURIComponent(q[i]));
}}else{u.push(encodeURIComponent(m)+bt+encodeURIComponent(q));
}}
if(u.length>0){r+=(r.indexOf(bK)>=0?bp:bK)+u.join(bp);
}if(this.getData()===null){var w=this.getParameters(true);
var u=[];

for(var m in w){var q=w[m];

if(q instanceof Array){for(var i=0;i<q.length;i++){u.push(encodeURIComponent(m)+bt+encodeURIComponent(q[i]));
}}else{u.push(encodeURIComponent(m)+bt+encodeURIComponent(q));
}}
if(u.length>0){this.setData(u.join(bp));
}}var v=function(z){var E=bz;
var I=br;
var C,B,A;
var F,G,H,D;
var i=0;

do{C=z.charCodeAt(i++);
B=z.charCodeAt(i++);
A=z.charCodeAt(i++);
F=C>>2;
G=((C&3)<<4)|(B>>4);
H=((B&15)<<2)|(A>>6);
D=A&63;

if(isNaN(B)){H=D=64;
}else if(isNaN(A)){D=64;
}I+=E.charAt(F)+E.charAt(G)+E.charAt(H)+E.charAt(D);
}while(i<z.length);
return I;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){p.open(k,r,t);
p.setRequestHeader(bB,bC+v(this.getUsername()+bw+this.getPassword()));
}else{p.open(k,r,t,this.getUsername(),this.getPassword());
}}else{p.open(k,r,t);
}}catch(O){this.error("Failed with exception: "+O);
this.failed();
return;
}if(!qx.core.Variant.isSet(bO,bH)){p.setRequestHeader(bI,window.location.href);
}var o=this.getRequestHeaders();

for(var m in o){p.setRequestHeader(m,o[m]);
}try{{};
p.send(this.getData());
}catch(j){if(n){this.failedLocally();
}else{this.error("Failed to send data: "+j,"send");
this.failed();
}return;
}if(!t){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===bv){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case bu:case bs:case bv:case bn:{};
return;
}var W=this.getReadyState();

if(W==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),W,this.__oD)){if(this.getState()===bo){this.setState(bq);
}return this.failed();
}}while(this.__oE<W){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oE]);
}}),getReadyState:function(){var bg=null;

try{bg=this.getRequest().readyState;
}catch(ba){}return bg;
},setRequestHeader:function(bj,bk){this.getRequestHeaders()[bj]=bk;
},getResponseHeader:function(X){var Y=null;

try{Y=this.getRequest().getResponseHeader(X)||null;
}catch(bh){}return Y;
},getStringResponseHeaders:function(){var S=null;

try{var R=this.getRequest().getAllResponseHeaders();

if(R){S=R;
}}catch(bi){}return S;
},getResponseHeaders:function(){var be=this.getStringResponseHeaders();
var bf={};

if(be){var bc=be.split(/[\r\n]+/g);

for(var i=0,l=bc.length;i<l;i++){var bd=bc[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bd){bf[bd[1]]=bd[2];
}}}return bf;
},getStatusCode:function(){var bb=-1;

try{bb=this.getRequest().status;
}catch(Q){}return bb;
},getStatusText:function(){var J=br;

try{J=this.getRequest().statusText;
}catch(h){}return J;
},getResponseText:function(){var y=null;

try{y=this.getRequest().responseText;
}catch(a){y=null;
}return y;
},getResponseXml:function(){var M=null;
var K=this.getStatusCode();
var L=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(K,L,this.__oD)){try{M=this.getRequest().responseXML;
}catch(N){}}if(typeof M==bG&&M!=null){if(!M.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,br);
M.loadXML(s);
}if(!M.documentElement){throw new Error("Missing Document Element!");
}
if(M.documentElement.tagName==bE){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return M;
},getFetchedLength:function(){var x=this.getResponseText();
return typeof x==bA?x.length:0;
},getResponseContent:function(){var d=this.getState();

if(d!==bu&&d!=bv){{};
return null;
}{};
var g=this.getResponseText();

if(d==bv){{};
return g;
}
switch(this.getResponseType()){case bM:case bP:{};
return g;
case bQ:{};

try{if(g&&g.length>0){var f=qx.util.Json.parseQx(g);
return (f===0?0:(f||null));
}else{return null;
}}catch(P){this.error("Could not execute json: ["+g+"]",P);
return by+g+bD;
}case bL:{};

try{if(g&&g.length>0){var f=window.eval(g);
return (f===0?0:(f||null));
}else{return null;
}}catch(bl){this.error("Could not execute javascript: ["+g+"]",bl);
return null;
}case bm:g=this.getResponseXml();
{};
return (g===0?0:(g||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(T,U){{};

switch(T){case bJ:this.fireEvent(bJ);
break;
case bo:this.fireEvent(bo);
break;
case bq:this.fireEvent(bq);
break;
case bN:this.fireEvent(bN);
break;
case bu:this.fireEvent(bu);
break;
case bv:this.fireEvent(bv);
break;
case bs:this.getRequest().abort();
this.fireEvent(bs);
break;
case bn:this.getRequest().abort();
this.fireEvent(bn);
break;
}}},defer:function(b,c){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bR);
},destruct:function(){var V=this.getRequest();

if(V){V.onreadystatechange=qx.lang.Function.empty;
switch(V.readyState){case 1:case 2:case 3:V.abort();
}}this._disposeFields(bx);
}});
})();
(function(){var D="=",C="&",B="application/xml",A="application/json",z="text/html",y="qx.client",x="textarea",w="none",v="text/plain",u="text/javascript",ba="",Y="completed",X="?",W="qx.io.remote.transport.Iframe",V="gecko",U="frame_",T="__oH",S="aborted",R="_data_",Q="pre",K="__oG",L="javascript:void(0)",I="sending",J="form",G="failed",H='<iframe name="',E="mshtml",F="form_",M='"></iframe>',N="iframe",P="timeout",O="qx/static/blank.gif";
qx.Class.define(W,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var bc=(new Date).valueOf();
var bd=U+bc;
var be=F+bc;
if(qx.core.Variant.isSet(y,E)){this.__oG=document.createElement(H+bd+M);
}else{this.__oG=document.createElement(N);
}this.__oG.src=L;
this.__oG.id=this.__oG.name=bd;
this.__oG.onload=qx.lang.Function.bind(this._onload,this);
this.__oG.style.display=w;
document.body.appendChild(this.__oG);
this.__oH=document.createElement(J);
this.__oH.target=bd;
this.__oH.id=this.__oH.name=be;
this.__oH.style.display=w;
document.body.appendChild(this.__oH);
this.__oI=document.createElement(x);
this.__oI.id=this.__oI.name=R;
this.__oH.appendChild(this.__oI);
this.__oG.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[v,u,A,B,z]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__oI:null,__oJ:0,__oH:null,__oG:null,send:function(){var m=this.getMethod();
var o=this.getUrl();
var s=this.getParameters(false);
var r=[];

for(var n in s){var p=s[n];

if(p instanceof Array){for(var i=0;i<p.length;i++){r.push(encodeURIComponent(n)+D+encodeURIComponent(p[i]));
}}else{r.push(encodeURIComponent(n)+D+encodeURIComponent(p));
}}
if(r.length>0){o+=(o.indexOf(X)>=0?C:X)+r.join(C);
}if(this.getData()===null){var s=this.getParameters(true);
var r=[];

for(var n in s){var p=s[n];

if(p instanceof Array){for(var i=0;i<p.length;i++){r.push(encodeURIComponent(n)+D+encodeURIComponent(p[i]));
}}else{r.push(encodeURIComponent(n)+D+encodeURIComponent(p));
}}
if(r.length>0){this.setData(r.join(C));
}}var l=this.getFormFields();

for(var n in l){var q=document.createElement(x);
q.name=n;
q.appendChild(document.createTextNode(l[n]));
this.__oH.appendChild(q);
}this.__oH.action=o;
this.__oH.method=m;
this.__oI.appendChild(document.createTextNode(this.getData()));
this.__oH.submit();
this.setState(I);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__oH.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__oG.readyState]);
}),_switchReadyState:function(a){switch(this.getState()){case Y:case S:case G:case P:this.warn("Ignore Ready State Change");
return;
}while(this.__oJ<a){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oJ]);
}},setRequestHeader:function(b,c){},getResponseHeader:function(d){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return ba;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__oG);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__oG);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__oG);
},getIframeTextContent:function(){var bb=this.getIframeBody();

if(!bb){return null;
}
if(!bb.firstChild){return ba;
}if(bb.firstChild.tagName&&bb.firstChild.tagName.toLowerCase()==Q){return bb.firstChild.innerHTML;
}else{return bb.innerHTML;
}},getIframeHtmlContent:function(){var f=this.getIframeBody();
return f?f.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==Y){{};
return null;
}{};
var t=this.getIframeTextContent();

switch(this.getResponseType()){case v:{};
return t;
break;
case z:t=this.getIframeHtmlContent();
{};
return t;
break;
case A:t=this.getIframeHtmlContent();
{};

try{return t&&t.length>0?qx.util.Json.parseQx(t):null;
}catch(bf){return this.error("Could not execute json: ("+t+")",bf);
}case u:t=this.getIframeHtmlContent();
{};

try{return t&&t.length>0?window.eval(t):null;
}catch(g){return this.error("Could not execute javascript: ("+t+")",g);
}case B:t=this.getIframeDocument();
{};
return t;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(h,j,k){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,W);
},destruct:function(){if(this.__oG){this.__oG.onload=null;
this.__oG.onreadystatechange=null;
if(qx.core.Variant.isSet(y,V)){this.__oG.src=qx.util.ResourceManager.getInstance().toUri(O);
}document.body.removeChild(this.__oG);
}
if(this.__oH){document.body.removeChild(this.__oH);
}this._disposeFields(K,T);
}});
})();
(function(){var f="qx.event.handler.Iframe",e="load",d="iframe";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(g){qx.event.Registration.fireEvent(g,e);
})},members:{canHandleEvent:function(l,m){return l.tagName.toLowerCase()===d;
},registerEvent:function(a,b,c){},unregisterEvent:function(h,i,j){}},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var n="0",m="qx.client",l="qx.bom.Iframe",k="webkit",j="qx.event.handler.Iframe.onevent(this)",i="true",h="iframe",g="body";
qx.Class.define(l,{statics:{create:function(u,v){var u=u?qx.lang.Object.clone(u):{};
u.onload=j;
u.frameBorder=n;
u.frameSpacing=n;
u.marginWidth=n;
u.marginHeight=n;
u.hspace=n;
u.vspace=n;
u.border=n;
u.allowTransparency=i;
return qx.bom.Element.create(h,u,v);
},getWindow:qx.core.Variant.select(m,{"mshtml|gecko":function(a){try{return a.contentWindow;
}catch(s){return null;
}},"default":function(D){try{var E=this.getDocument(D);
return E?E.defaultView:null;
}catch(B){return null;
}}}),getDocument:qx.core.Variant.select(m,{"mshtml":function(d){try{var e=this.getWindow(d);
return e?e.document:null;
}catch(C){return null;
}},"default":function(q){try{return q.contentDocument;
}catch(c){return null;
}}}),getBody:function(w){try{var x=this.getDocument(w);
return x?x.getElementsByTagName(g)[0]:null;
}catch(b){return null;
}},setSource:function(y,z){try{if(this.getWindow(y)&&qx.dom.Hierarchy.isRendered(y)){try{if(qx.core.Variant.isSet(m,k)&&qx.bom.client.Platform.MAC){var A=this.getContentWindow();

if(A){A.stop();
}}this.getWindow(y).location.replace(z);
}catch(t){y.src=z;
}}else{y.src=z;
}}catch(r){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(o){var p=this.getDocument(o);

try{if(p&&p.location){return p.location.href;
}}catch(f){}return null;
}}});
})();
(function(){var K="&",J="=",I="?",H="application/json",G="completed",F="text/plain",E="text/javascript",D="qx.io.remote.transport.Script",C="__oL",B="",v="_ScriptTransport_data",A="_responseContent",y="script",u="timeout",t="_ScriptTransport_",x="_ScriptTransport_id",w="aborted",z="utf-8",s="failed";
qx.Class.define(D,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var e=++qx.io.remote.transport.Script.__oK;

if(e>=2000000000){qx.io.remote.transport.Script.__oK=e=1;
}this.__oL=null;
this.__oK=e;
},statics:{__oK:0,_instanceRegistry:{},ScriptTransport_PREFIX:t,ScriptTransport_ID_PARAM:x,ScriptTransport_DATA_PARAM:v,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[F,E,H]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(c,content){var d=qx.io.remote.transport.Script._instanceRegistry[c];

if(d==null){{};
}else{d._responseContent=content;
d._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__oM:0,__oL:null,__oK:null,send:function(){var h=this.getUrl();
h+=(h.indexOf(I)>=0?K:I)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+J+this.__oK;
var l=this.getParameters();
var k=[];

for(var g in l){if(g.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var j=l[g];

if(j instanceof Array){for(var i=0;i<j.length;i++){k.push(encodeURIComponent(g)+J+encodeURIComponent(j[i]));
}}else{k.push(encodeURIComponent(g)+J+encodeURIComponent(j));
}}
if(k.length>0){h+=K+k.join(K);
}var f=this.getData();

if(f!=null){h+=K+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+J+encodeURIComponent(f);
}qx.io.remote.transport.Script._instanceRegistry[this.__oK]=this;
this.__oL=document.createElement(y);
this.__oL.charset=z;
this.__oL.src=h;
{};
document.body.appendChild(this.__oL);
},_switchReadyState:function(a){switch(this.getState()){case G:case w:case s:case u:this.warn("Ignore Ready State Change");
return;
}while(this.__oM<a){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oM]);
}},setRequestHeader:function(m,n){},getResponseHeader:function(b){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return B;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==G){{};
return null;
}{};

switch(this.getResponseType()){case F:case H:case E:{};
var o=this._responseContent;
return (o===0?0:(o||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(p,q,r){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,D);
qx.io.remote.ScriptTransport=p;
},destruct:function(){if(this.__oL){delete qx.io.remote.transport.Script._instanceRegistry[this.__oK];
document.body.removeChild(this.__oL);
}this._disposeFields(C,A);
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(f){var g=arguments.callee.base.call(this,f);
g.setType(this.getType());
g.setState(this.getState());
g.setStatusCode(this.getStatusCode());
g.setContent(this.getContent());
g.setResponseHeaders(this.getResponseHeaders());
return g;
},getResponseHeader:function(d){var e=this.getResponseHeaders();

if(e){return e[d]||null;
}return null;
}}});
})();
(function(){var t="mshtml",s="pop.push.reverse.shift.sort.splice.unshift.join.slice",r="number",q="qx.type.BaseArray",p="qx.client",o=".";
qx.Class.define(q,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function c(e){if(qx.core.Variant.isSet(p,t)){b.prototype={length:0,$$isArray:true};
var h=s.split(o);

for(var length=h.length;length;){b.prototype[h[--length]]=Array.prototype[h[length]];
}}var j=Array.prototype.slice;
b.prototype.concat=function(){var l=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var k;

if(arguments[i] instanceof b){k=j.call(arguments[i],0);
}else if(arguments[i] instanceof Array){k=arguments[i];
}else{k=[arguments[i]];
}l.push.apply(l,k);
}return l;
};
b.prototype.toString=function(){return j.call(this,0).toString();
};
b.prototype.toLocaleString=function(){return j.call(this,0).toLocaleString();
};
b.prototype.constructor=b;
b.prototype.indexOf=qx.lang.Core.arrayIndexOf;
b.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
b.prototype.forEach=qx.lang.Core.arrayForEach;
b.prototype.some=qx.lang.Core.arraySome;
b.prototype.every=qx.lang.Core.arrayEvery;
var f=qx.lang.Core.arrayFilter;
var g=qx.lang.Core.arrayMap;
b.prototype.filter=function(){var d=new this.constructor;
d.push.apply(d,f.apply(this,arguments));
return d;
};
b.prototype.map=function(){var u=new this.constructor;
u.push.apply(u,g.apply(this,arguments));
return u;
};
b.prototype.slice=function(){var n=new this.constructor;
n.push.apply(n,Array.prototype.slice.apply(this,arguments));
return n;
};
b.prototype.splice=function(){var m=new this.constructor;
m.push.apply(m,Array.prototype.splice.apply(this,arguments));
return m;
};
b.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
b.prototype.valueOf=function(){return this.length;
};
return b;
}function b(length){if(arguments.length===1&&typeof length===r){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function a(){}a.prototype=[];
b.prototype=new a;
b.prototype.length=0;
qx.type.BaseArray=c(b);
})();
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var i="The value is deprecated. Please use model instead.",h="listitem",g="qx.ui.form.ListItem",f="qx.event.type.Event",e="changeValue",d="qx.event.type.Data";
qx.Class.define(g,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(j,k,l){arguments.callee.base.call(this,j,k);

if(l!=null){this.setValue(l);
}},events:{"action":f,"changeValue":d},properties:{appearance:{refine:true,init:h}},members:{getFormValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
var c=this.getValue();

if(c==null){c=this.getLabel();
}return c;
},__oN:null,setValue:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
var b=this.__oN;
this.__oN=a;
this.fireDataEvent(e,a,b);
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__oN;
},resetValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
this.setValue(null);
}}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

})();