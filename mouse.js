const InputEvent = require("input-event");

/*

6 "wheelPressureLowRes"
8 "wheel"
11 "scroll"
12 "wheelPressureHiRes"

272 "left"
273 "right"
274 "middle"
275 "back"
276 "forward"
277 "appSwitch"
278 "wheelLeft"
279 "wheelRight"

280 "zoom"
287 "scrollSelect"

287 hyperfast on release (1)
287 click-to-click on down (0)

*/

const types = new Map([
  [0, "EV_SYN"],
  [1, "EV_KEY"],
  [2, "EV_REL"],
  [3, "EV_ABS"],
  [4, "EV_MSC"],
  [5, "EV_SW"],
  [17, "EV_LED"],
  [18, "EV_SND"],
  [20, "EV_REP"],
  [21, "EV_FF"],
  [22, "EV_PWR"],
  [23, "EV_FF_STATUS"],
  [31, "EV_MAX"],
  // EV_MAX+1 EV_CNT
]);

const buttons = new Map([
  // [272, "BTN_MOUSE"],
  [272, "BTN_LEFT"],
  [273, "BTN_RIGHT"],
  [274, "BTN_MIDDLE"],
  [275, "BTN_BACK"],
  [276, "BTN_FORWARD"],
  [277, "BTN_TASK"],
  [278, "BTN_WHEEL_L"],
  [279, "BTN_WHEEL_R"],
  [280, "BTN_ZOOM"],
]);

const rel = new Map([
  [0, "REL_X"],
  [1, "REL_Y"],
  [2, "REL_Z"],
  [3, "REL_RX"],
  [4, "REL_RY"],
  [5, "REL_RZ"],
  [6, "REL_WHEEL_XY"],
  [7, "REL_DIAL"],
  [8, "REL_WHEEL"],
  [9, "REL_MISC"],
  [10, "REL_RESERVED"],
  [11, "REL_WHEEL_HI_RES"],
  [12, "REL_HWHEEL_HI_RES"],
  [15, "REL_MAX	"],
]);

const input = new InputEvent("/dev/input/event0");

const mouse = new InputEvent.Mouse(input);

// mouse.on("data", (data) => {
//   const { type, code, value } = data;
//   console.log(data);
// });

// mouse.on("move", (data) => {
//   const { type, code, value } = data;
//   console.log("move", data);
// });

mouse.on("wheel", (data) => {
  const { type, code, value } = data;
  console.log("wheel", rel.get(code), value);
});

mouse.on("keypress", (data) => {
  const { type, code, value } = data;
  console.log("keypress", buttons.get(code), value);
});
