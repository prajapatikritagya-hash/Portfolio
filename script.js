// small toast helper and year
function toast(text){
  const t = document.getElementById('toast');
  t.textContent = text;
  t.style.opacity = 1;
  t.style.pointerEvents = 'auto';
  setTimeout(()=>{ 
    t.style.opacity = 0; 
    t.style.pointerEvents = 'none'; 
  }, 2200);
}
document.getElementById('yr').textContent = new Date().getFullYear();
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString(); // example: 11:05:32 AM
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000); // update every second
updateClock(); // run immediately when page loads

// Digital Clock (big)
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const clockEl = document.getElementById("clock");
  if (clockEl) {
    clockEl.textContent = `${h}:${m}:${s}`;
  }
}
setInterval(updateClock, 1000);
updateClock();

// === Digital Clock with Glitch Effect ===
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const el = document.getElementById('clock');
  if (el) {
    const time = `${h}:${m}:${s}`;
    el.textContent = time;
    el.setAttribute("data-text", time); // sync for glitch effect
  }
}
setInterval(updateClock, 1000);
updateClock();

