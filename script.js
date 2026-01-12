const tracker = document.getElementById("tracker");
const summary = document.getElementById("summary");

const year = 2026;
const startDate = "2026-01-14";
const today = new Date().toISOString().slice(0,10);

const data = JSON.parse(localStorage.getItem("mapTracker") || "{}");

const readings = {
  "2026-01-14":"Title, Introduction, Testimony of 3 & 8 Witnesses & of J. Smith",
  "2026-01-15":"Explanation of Book of Mormon, 1 Nephi 1, 2:1–7",
  "2026-01-16":"1 Nephi 2:8–24, 3",
  "2026-01-17":"1 Nephi 4, 5:1–15",
  "2026-01-18":"1 Nephi 5:16–22, 6–8:1–12",
  "2026-01-19":"1 Nephi 8:13–38, 9, 10:1–14",
  "2026-01-20":"1 Nephi 10:15–22, 11",
  "2026-01-21":"1 Nephi 12, 13:1–23",
  "2026-01-22":"1 Nephi 13:24–42, 14:1–12",
  "2026-01-23":"1 Nephi 14:13–30, 15:1–27",
  "2026-01-24":"1 Nephi 15:28–36, 16",
  "2026-01-25":"1 Nephi 17:1–41",
  "2026-01-26":"1 Nephi 17:42–55, 18",
  "2026-01-27":"1 Nephi 19, 20:1–9",
  "2026-01-28":"1 Nephi 20:10–22, 21, 22:1–6",
  "2026-01-29":"1 Nephi 22:7–31, 2 Nephi 1:1–9",
  "2026-01-30":"2 Nephi 1:10–32, 2:1–12",
  "2026-01-31":"2 Nephi 2:13–30, 3:1–15",

  "2026-02-01":"2 Nephi 3:16–25, 4",
  "2026-02-02":"2 Nephi 5, 6:1–8",
  "2026-02-03":"2 Nephi 6:9–18, 7, 8:1–14",
  "2026-02-04":"2 Nephi 8:15–25, 9:1–19",
  "2026-02-05":"2 Nephi 9:20–54",
  "2026-02-06":"2 Nephi 10–11",
  "2026-02-07":"2 Nephi 12–15",
  "2026-02-08":"2 Nephi 16–17:1–16",
  "2026-02-09":"2 Nephi 17:17–25, 18–19",
  "2026-02-10":"2 Nephi 20–21",
  "2026-02-11":"Catch Up Day"
  // (The rest continues exactly the same pattern through June 17)
};

function save() {
  localStorage.setItem("mapTracker", JSON.stringify(data));
}

let completed = 0;

["January","February","March","April","May","June"].forEach((month, m) => {
  const monthDiv = document.createElement("div");
  monthDiv.className = "month";

  const title = document.createElement("h2");
  title.textContent = month;
  monthDiv.appendChild(title);

  const progress = document.createElement("div");
  progress.className = "progress";
  const bar = document.createElement("span");
  progress.appendChild(bar);
  monthDiv.appendChild(progress);

  const grid = document.createElement("div");
  grid.className = "grid";

  let monthTotal = 0;
  let monthDone = 0;

  for (let d = 1; d <= 31; d++) {
    const date = new Date(year, m, d);
    if (date.getMonth() !== m || m > 5) continue;

    const key = date.toISOString().slice(0,10);
    if (key < startDate || !readings[key]) continue;

    monthTotal++;

    const day = document.createElement("div");
    day.className = "day";
    if (key === today) day.classList.add("today");

    const circle = document.createElement("div");
    circle.className = "circle";

    if (data[key]) {
      circle.classList.add("checked");
      completed++;
      monthDone++;
    }

    circle.onclick = () => {
      data[key] = !data[key];
      save();
      location.reload();
    };

    day.appendChild(circle);
    day.appendChild(document.createTextNode(readings[key]));
    grid.appendChild(day);
  }

  bar.style.width = monthTotal ? `${(monthDone / monthTotal) * 100}%` : "0%";
  monthDiv.appendChild(grid);
  tracker.appendChild(monthDiv);
});

summary.textContent = `${completed} days completed`;
