window.addEventListener("load", () => {
    registerSw();
  });
  
  async function registerSw() {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("./sw.js");
      } catch (e) {
        console.log(`Sw registration failed: \n${e.message}`);
      }
    }
  }
  