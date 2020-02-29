import store from "@/store";
export default function reactToKeyboard(event) {
  switch (event.code) {
    case "Backspace":
    case "Delete":
      if (isNotWriting(event)) {
        store.dispatch("removeSelectedShape");
      }
      break;
    case "ArrowLeft":
      if (isNotWriting(event)) {
        store.dispatch("moveShapeBy", {
          shape: store.getters.selectedShape,
          left: { value: -1, units: "px" }
        });
      }
      break;
    case "ArrowUp":
      if (isNotWriting(event)) {
        store.dispatch("moveShapeBy", {
          shape: store.getters.selectedShape,
          top: { value: -1, units: "px" }
        });
      }
      break;
    case "ArrowRight":
      if (isNotWriting(event)) {
        store.dispatch("moveShapeBy", {
          shape: store.getters.selectedShape,
          left: { value: 1, units: "px" }
        });
      }
      break;
    case "ArrowDown":
      if (isNotWriting(event)) {
        store.dispatch("moveShapeBy", {
          shape: store.getters.selectedShape,
          top: { value: 1, units: "px" }
        });
      }
      break;
  }
}

function isNotWriting(event) {
  return (
    event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA"
  );
}
