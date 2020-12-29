const listeners = new WeakMap();

window.jsFunctions = {
  onBoxMouseMove: (dotnetObjRef) => (e) => {
    dotnetObjRef.invokeMethodAsync("OnMouseMove", e.screenX, e.screenY);
  },
  addMouseMoveListener: function (dotnetObjRef) {
    const listener = window.jsFunctions.onBoxMouseMove(dotnetObjRef);
    listeners.set(dotnetObjRef, listener);
    document.addEventListener("mousemove", listener);
  },
  removeMouseMoveListener: function (dotnetObjRef) {
    const listener = listeners.get(dotnetObjRef);
    listeners.delete(dotnetObjRef);
    document.removeEventListener("mousemove", listener);
  },
};
