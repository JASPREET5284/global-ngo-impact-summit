const CONFIG = {
  binanceAddress: "0x6df1ea4efe15d17991929a022f364206214ceda1"
};

const wallet = document.getElementById("walletAddress");
wallet.textContent = CONFIG.binanceAddress;

document.getElementById("copyWallet").addEventListener("click", async () => {
  if (CONFIG.binanceAddress.includes("PASTE_")) {
    alert("Add the organizer's verified Binance receiving address in script.js first.");
    return;
  }
  await navigator.clipboard.writeText(CONFIG.binanceAddress);
  document.getElementById("copyWallet").textContent = "Copied ✓";
  setTimeout(() => document.getElementById("copyWallet").textContent = "Copy address", 1800);
});


const audio = document.getElementById("ambient");
const sound = document.getElementById("soundToggle");
sound.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      sound.innerHTML = "♫ <span>Sound on</span>";
    } else {
      audio.pause();
      sound.innerHTML = "♫ <span>Ambient</span>";
    }
  } catch {
    alert("Your browser blocked audio. Click the button again to start it.");
  }
});
