const readings = {
  "2026-01-14": "Title, Introduction, Testimony of 3 & 8 Witnesses & of J. Smith",
  "2026-01-15": "Explanation of B of M, 1 Ne 1, 2:1–7",
  "2026-01-16": "1 Ne 2:8–24, 3",
  "2026-01-17": "1 Ne 4, 5:1–15",
  "2026-01-18": "1 Ne 5:16–22, 6–8:1–12",
  "2026-01-19": "1 Ne 8:13–38, 9, 10:1–14",
  "2026-01-20": "1 Ne 10:15–22, 11",
  "2026-01-21": "1 Ne 12, 13:1–23",
  "2026-01-22": "1 Ne 13:24–42, 14:1–12",
  "2026-01-23": "1 Ne 14:13–30, 15:1–27",
  "2026-01-24": "1 Ne 15:28–36, 16",
  "2026-01-25": "1 Ne 17:1–41",
  "2026-01-26": "1 Ne 17:42–55, 18",
  "2026-01-27": "1 Ne 19, 20:1–9",
  "2026-01-28": "1 Ne 20:10–22, 21, 22:1–6",
  "2026-01-29": "1 Ne 22:7–31, 2 Ne 1:1–9",
  "2026-01-30": "2 Ne 1:10–32, 2:1–12",
  "2026-01-31": "2 Ne 2:13–30, 3:1–15",

  /* FEB–JUN CONTINUES */
};

// Build calendar
const calendar = document.getElementById("calendar");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

const todayStr = new Date().toISOString().split("T")[0];
const saved = JSON.parse(localStorage.getItem("completedDays") || "{}");

let total = 0;
let completed = 0;
let currentMonth = "";

Object.entries(readings).forEach(([date, reading]) => {
  total++;
  if (saved[date]) completed++;

  const d = new Date(date);
  const monthName = d.toLocaleString("default", { month: "long", year: "numeric" });

  if (monthName !== currentMonth) {
    currentMonth = monthName;
    const monthDiv = document.createElement("div");
    monthDiv.className = "month";
    monthDiv.innerHTML = `<h2>${monthName}</h2>`;
    calendar.appendChild(monthDiv);
  }

  const dayDiv = document.createElement("div");
  dayDiv.className = "day";
  if (date === todayStr) dayDiv.classList.add("today");
  if (saved[date]) dayDiv.classList.add("completed");

  dayDiv.innerHTML = `
    <input type="checkbox" ${saved[date] ? "checked" : ""}>
    <div class="reading">
      <div class="date">${d.toDateString()}</div>
      <div>${reading}</div>
    </div>
  `;

  dayDiv.querySelector("input").addEventListener("change", e => {
    saved[date] = e.target.checked;
    localStorage.setItem("completedDays", JSON.stringify(saved));
    location.reload();
  });

  calendar.lastChild.appendChild(dayDiv);
});

// Progress update
const percent = Math.round((completed / total) * 100);
progressText.textContent = `${completed} of ${total} days completed (${percent}%)`;
progressFill.style.width = percent + "%";
