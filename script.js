const tracker = document.getElementById("tracker");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const readings = {
  "2026-01-14": "Title, Introduction, Testimony of 3 & 8 Witnesses & of J. Smith",
  "2026-01-15": "Explanation of B of M, 1 Nephi 1, 2:1–7",
  "2026-01-16": "1 Nephi 2:8–24, 3",
  "2026-01-17": "1 Nephi 4, 5:1–15",
  "2026-01-18": "1 Nephi 5:16–22, 6–8:1–12",
  "2026-01-19": "1 Nephi 8:13–38, 9, 10:1–14",
  "2026-01-20": "1 Nephi 10:15–22, 11",
  "2026-01-21": "1 Nephi 12, 13:1–23",
  "2026-01-22": "1 Nephi 13:24–42, 14:1–12",
  "2026-01-23": "1 Nephi 14:13–30, 15:1–27",
  "2026-01-24": "1 Nephi 15:28–36, 16",
  "2026-01-25": "1 Nephi 17:1–41",
  "2026-01-26": "1 Nephi 17:42–55, 18",
  "2026-01-27": "1 Nephi 19, 20:1–9",
  "2026-01-28": "1 Nephi 20:10–22, 21, 22:1–6",
  "2026-01-29": "1 Nephi 22:7–31, 2 Nephi 1:1–9",
  "2026-01-30": "2 Nephi 1:10–32, 2:1–12",
  "2026-01-31": "2 Nephi 2:13–30, 3:1–15"
};

const todayKey = new Date().toISOString().slice(0, 10);

Object.entries(readings).forEach(([date, reading]) => {
  const row = document.createElement("div");
  row.className = "day";

  if (date === todayKey) {
    row.classList.add("today");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = localStorage.getItem(date) === "true";

  checkbox.addEventListener("change", () => {
    localStorage.setItem(date, checkbox.checked);
    updateProgress();
  });

  const label = document.createElement("label");

  const dateObj = new Date(date + "T12:00:00");
  const dateText = dateObj.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  label.innerHTML = `
    <div class="date">${dateText}</div>
    <div class="reading">${reading}</div>
  `;

  row.appendChild(checkbox);
  row.appendChild(label);
  tracker.appendChild(row);
});

function updateProgress() {
  const total = Object.keys(readings).length;
  let completed = 0;

  Object.keys(readings).forEach(date => {
    if (localStorage.getItem(date) === "true") completed++;
  });

  const percent = Math.round((completed / total) * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = `${completed} of ${total} days completed (${percent}%)`;
}

updateProgress();
