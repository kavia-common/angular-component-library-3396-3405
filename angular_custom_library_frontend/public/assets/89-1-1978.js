(function () {
  "use strict";
  // PUBLIC_INTERFACE
  function initScreen89() {
    /** Initialize any static behaviors or future interactions for screen 89. */
    // Currently no dynamic behavior required for the static replica.
    const backArea = document.getElementById("rect-1-2065");
    if (backArea) {
      backArea.style.cursor = "pointer";
      backArea.addEventListener("mouseenter", () => (backArea.style.background = "#f3f4f6"));
      backArea.addEventListener("mouseleave", () => (backArea.style.background = "transparent"));
    }
  }

  // Initialize when DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScreen89);
  } else {
    initScreen89();
  }
})();
