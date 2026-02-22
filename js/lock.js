const DROP_DATE = new Date("2026-03-01T18:00:00");
const ADMIN_PASS = "DROP666";

if (new Date() < DROP_DATE) {
  const pass = prompt("Store locked. Enter password:");
  if (pass !== ADMIN_PASS) {
    document.body.innerHTML = "<h1>DROP NOT LIVE</h1>";
  }
}
