const InputEvent = require("input-event");

const input = new InputEvent("/dev/input/event1");

const numpad = new InputEvent.Keyboard(input);

const nums = new Map([
  [102, "KEY_HOME"],
  [107, "KEY_END"],
  [125, "KEY_LEFTMETA"],
  [33, "KEY_F"],
  [104, "KEY_PAGEUP"],
  [111, "KEY_DELETE"],
  [109, "KEY_PAGEDOWN"],
  [183, "KEY_F13"],
  [184, "KEY_F14"],
  [185, "KEY_F15"],
  [186, "KEY_F16"],
  [69, "KEY_CLEAR"],
  [117, "KEY_KPEQUAL"],
  [98, "KEY_KPSLASH"],
  [55, "KEY_KPASTERISK"],
  [74, "KEY_KPMINUS"],
  [78, "KEY_KPPLUS"],
  [96, "KEY_KPENTER"],
  [83, "KEY_KPDOT"],
  [82, "KEY_KP0"],
  [79, "KEY_KP1"],
  [80, "KEY_KP2"],
  [81, "KEY_KP3"],
  [75, "KEY_KP4"],
  [76, "KEY_KP5"],
  [77, "KEY_KP6"],
  [71, "KEY_KP7"],
  [72, "KEY_KP8"],
  [73, "KEY_KP9"],
]);

numpad.on("keypress", (data) => {
  const { type, code, value } = data;
  console.log(nums.get(code));
});
