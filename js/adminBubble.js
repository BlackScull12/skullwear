<script>
function openAdmin() {
  const pass = prompt("ADMIN ACCESS");

  if (pass === "drop666") {
    window.location.href = "admin.html";
  } else if (pass !== null) {
    alert("ACCESS DENIED");
  }
}
</script>
