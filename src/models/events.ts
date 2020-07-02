// https://www.w3schools.com/jsref/dom_obj_event.asp

export const EVENTS: {[key: string]: string} = {
  abort: `The event occurs when the loading of a media is aborted`,
  afterprint: `The event occurs when a page has started printing`,
  animationend: `The event occurs when a CSS animation has completed`,
  animationiteration: `The event occurs when a CSS animation is repeated`,
  animationstart: `The event occurs when a CSS animation has started`,
  beforeprint: `The event occurs when a page is about to be printed`,
  beforeunload: `The event occurs before the document is about to be unloaded`,
  blur: `The event occurs when an element loses focus`,
  canplay: `The event occurs when the browser can start playing the media (when it has buffered enough to begin)`,
  canplaythrough: `The event occurs when the browser can play through the media without stopping for buffering`,
  change: `The event occurs when the content of a form element`,
  click: `The event occurs when the user clicks on an element`,
  contextmenu: `The event occurs when the user right-clicks on an element to open a context menu`,
  copy: `The event occurs when the user copies the content of an element`,
  cut: `The event occurs when the user cuts the content of an element`,
  dblclick: `The event occurs when the user double-clicks on an element`,
  drag: `The event occurs when an element is being dragged`,
  dragend: `The event occurs when the user has finished dragging an element`,
  dragenter: `The event occurs when the dragged element enters the drop target`,
  dragleave: `The event occurs when the dragged element leaves the drop target`,
  dragover: `The event occurs when the dragged element is over the drop target`,
  dragstart: `The event occurs when the user starts to drag an element`,
  drop: `The event occurs when the dragged element is dropped on the drop target`,
  durationchange: `The event occurs when the duration of the media is changed`,
  ended: `The event occurs when the media has reach the end (useful for messages like "thanks for listening")`,
  error: `The event occurs when an error occurs while loading an external file`,
  focus: `The event occurs when an element gets focus`,
  focusin: `The event occurs when an element is about to get focus`,
  focusout: `The event occurs when an element is about to lose focus`,
  fullscreenchange: `The event occurs when an element is displayed in fullscreen mode`,
  fullscreenerror: `The event occurs when an element can not be displayed in fullscreen mode`,
  hashchange: `The event occurs when there has been changes to the anchor part of a URL`,
  input: `The event occurs when an element gets user input`,
  invalid: `The event occurs when an element is invalid`,
  keydown: `The event occurs when the user is pressing a key`,
  keypress: `The event occurs when the user presses a key`,
  keyup: `The event occurs when the user releases a key`,
  load: `The event occurs when an object has loaded`,
  loadeddata: `The event occurs when media data is loaded`,
  loadedmetadata: `The event occurs when meta data (like dimensions and duration) are loaded`,
  loadstart: `The event occurs when the browser starts looking for the specified media`,
  message: `The event occurs when a message is received through the event source`,
  mousedown: `The event occurs when the user presses a mouse button over an element`,
  mouseenter: `The event occurs when the pointer is moved onto an element`,
  mouseleave: `The event occurs when the pointer is moved out of an element`,
  mousemove: `The event occurs when the pointer is moving while it is over an element`,
  mouseover: `The event occurs when the pointer is moved onto an element`,
  mouseout: `The event occurs when a user moves the mouse pointer out of an element`,
  mouseup: `The event occurs when a user releases a mouse button over an element`,
  mousewheel: `Deprecated. Use the wheel event instead`,
  offline: `The event occurs when the browser starts to work offline`,
  online: `The event occurs when the browser starts to work online`,
  open: `The event occurs when a connection with the event source is opened`,
  pagehide: `The event occurs when the user navigates away from a webpage`,
  pageshow: `The event occurs when the user navigates to a webpage`,
  paste: `The event occurs when the user pastes some content in an element`,
  pause: `The event occurs when the media is paused either by the user or programmatically`,
  play: `The event occurs when the media has been started or is no longer paused`,
  playing: `The event occurs when the media is playing after having been paused or stopped for buffering`,
  popstate: `The event occurs when the window's history changes`,
  progress: `The event occurs when the browser is in the process of getting the media data (downloading the media)`,
  ratechange: `The event occurs when the playing speed of the media is changed`,
  resize: `The event occurs when the document view is resized`,
  reset: `The event occurs when a form is reset`,
  scroll: `The event occurs when an element's scrollbar is being scrolled`,
  search: `The event occurs when the user writes something in a search field (for <input="search">)`,
  seeked: `The event occurs when the user is finished moving/skipping to a new position in the media`,
  seeking: `The event occurs when the user starts moving/skipping to a new position in the media`,
  select: `The event occurs after the user selects some text (for <input> and <textarea>)`,
  show: `The event occurs when a <menu> element is shown as a context menu`,
  stalled: `The event occurs when the browser is trying to get media data`,
  storage: `The event occurs when a Web Storage area is updated`,
  submit: `The event occurs when a form is submitted`,
  suspend: `The event occurs when the browser is intentionally not getting media data`,
  timeupdate: `The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)`,
  toggle: `The event occurs when the user opens or closes the <details> element`,
  touchcancel: `The event occurs when the touch is interrupted`,
  touchend: `The event occurs when a finger is removed from a touch screen`,
  touchmove: `The event occurs when a finger is dragged across the screen`,
  touchstart: `The event occurs when a finger is placed on a touch screen`,
  transitionend: `The event occurs when a CSS transition has completed`,
  unload: `The event occurs once a page has unloaded (for <body>)`,
  volumechange: `The event occurs when the volume of the media has changed (includes setting the volume to "mute")`,
  waiting: `The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)`,
  wheel: `The event occurs when the mouse wheel rolls up or down over an element`
};
