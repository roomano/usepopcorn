import { useEffect } from "react";

export function useKey(key, callback) {
  useEffect(
    function () {
      function keydownCallback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          callback();
          // console.log("closing");
        }
      }
      document.addEventListener("keydown", keydownCallback);
      return function () {
        document.removeEventListener("keydown", keydownCallback);
      };
    },
    [callback, key]
  );
}
