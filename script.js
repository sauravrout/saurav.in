const clock = document.querySelector("#local-clock");
const year = document.querySelector("#year");
const revealButton = document.querySelector("#reveal-email");

function updateClock() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(now).toUpperCase();
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  clock.textContent = `${date} · ${time}`;
  clock.dateTime = now.toISOString();
}

function revealEmail() {
  const email = document.createElement("a");
  email.href = "mailto:rout@saurav.in";
  email.textContent = "rout@saurav.in";
  revealButton.replaceWith(email);
}

year.textContent = new Date().getFullYear();
updateClock();
setInterval(updateClock, 1000);
revealButton.addEventListener("click", revealEmail, { once: true });
