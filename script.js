// ===============================
// Book of Mormon Reading Tracker
// Start Date: Wednesday, Jan 14, 2026
// ===============================

const readingsText = `
Jan 14: Title, Introduction, Testimony of 3 & 8 Witnesses & of J.Smith
Jan 15: Explanation of B of M, 1 Ne 1, 2: 1-7
Jan 16: 1 Ne 2:8-24, 3
Jan 17: 1 Ne 4, 5:1-15
Jan 18: 1 Ne 5:16-22, 6-8:1-12
Jan 19: 1 Ne 8:13-38, 9, 10:1-14
Jan 20: 1 Ne 10:15-22, 11
Jan 21: 1 Ne 12, 13:1-23
Jan 22: 1 Ne 13:24-42, 14:1-12
Jan 23: 1 Ne 14:13-30, 15:1-27
Jan 24: 1 Ne 15:28-36, 16
Jan 25: 1 Ne 17:1-41
Jan 26: 1 Ne 17:42-55, 18
Jan 27: 1 Ne 19, 20:1-9
Jan 28: 1 Ne 20:10-22, 21, 22:1-6
Jan 29: 1 Ne 22:7-31, 2 Ne 1:1-9
Jan 30: 2 Ne 1:10-32, 2:1-12
Jan 31: 2 Ne 2:13-30, 3:1-15

Feb 1: 2 Ne 3:16-25, 4
Feb 2: 2 Ne 5, 6:1-8
Feb 3: 2 Ne 6:9-18, 7, 8:1-14
Feb 4: 2 Ne 8:15-25, 9:1-19
Feb 5: 2 Ne 9:20-54
Feb 6: 2 Ne 10-11
Feb 7: 2 Ne 12-15
Feb 8: 2 Ne 16-17:1-16
Feb 9: 2 Ne 17:17-25, 18-19
Feb 10: 2 Ne 20-21
Feb 11: Catch Up Day
Feb 12: 2 Ne 22-24
Feb 13: 2 Ne 25
Feb 14: 2 Ne 26
Feb 15: 2 Ne 27, 28:1-3
Feb 16: 2 Ne 28:4-32, 29:1-7
Feb 17: 2 Ne 29:8-14, 30, 31:1-12
Feb 18: 2 Ne 31:13-21, 32, 33, Jacob 1
Feb 19: Jacob 2:1-21
Feb 20: Jacob 2:22-35, 3, 4:1-8
Feb 21: Jacob 4:9-18, 5:1-30
Feb 22: Jacob 5:31-77
Feb 23: Jacob 6-7
Feb 24: Enos 1, Jarom 1:1-4
Feb 25: Jarom 1:5-15, Omni 1:1-25
Feb 26: Omni 1:26-30, W of M, Mosiah 1:1-11
Feb 27: Mosiah 1:12-18, 2:1-28
Feb 28: Mosiah 2:29-41, 3:1-19

Mar 1: Mosiah 3:20-27, 4:1-24
Mar 2: Mosiah 4:25-30, 5-6, 7:1-12
Mar 3: Mosiah 7:13-33, 8
Mar 4: Mosiah 9-10, 11:1-4
Mar 5: Mosiah 11:5-29, 12:1-23
Mar 6: Mosiah 12:24-37, 13, 14:1-7
Mar 7: Mosiah 14:8-12, 15, 16:1-5
Mar 8: Mosiah 16:6-15, 17, 18:1-18
Mar 9: Mosiah 18:19-35, 19, 20:1-8
Mar 10: Mosiah 20:9-26, 21
Mar 11: Catch Up Day
Mar 12: Mosiah 22-23
Mar 13: Mosiah 24-25
Mar 14: Mosiah 26, 27:1-8
Mar 15: Mosiah 27:9-37, 28:1-12
Mar 16: Mosiah 28:13-20, 29:1-39
Mar 17: Mosiah 29:40-47, Alma 1
Mar 18: Alma 2, 3:1-9
Mar 19: Alma 3:10-27, 4, 5:1-3
Mar 20: Alma 5:4-44
Mar 21: Alma 5:45-62, 6, 7:1-12
Mar 22: Alma 7:13-27, 8
Mar 23: Alma 9, 10:1-7
Mar 24: Alma 10:8-32, 11:1-25
Mar 25: Alma 11:26-46, 12:1-22
Mar 26: Alma 12:23-37, 13:1-20
Mar 27: Alma 13:21-31, 14
Mar 28: Alma 15-16
Mar 29: Alma 17, 18:1-5
Mar 30: Alma 18:6-43, 19:1-14
Mar 31: Alma 19:15-36, 20

Apr 1: Alma 21, 22:1-15
Apr 2: Alma 22:16-35, 23
Apr 3: Alma 24-25
Apr 4: Alma 26
Apr 5: Alma 27-28
Apr 6: Alma 29, 30:1-31
Apr 7: Alma 30:32-60, 31:1-16
Apr 8: Catch Up Day
Apr 9: Alma 31:17-38, 32:1-25
Apr 10: Alma 32:26-43, 33
Apr 11: Alma 34
Apr 12: Alma 35-36
Apr 13: Alma 37:1-35
Apr 14: Alma 37:36-47, 38, 39:1-13
Apr 15: Alma 39:14-19, 40, 41:1-6
Apr 16: Alma 41:7-15, 42
Apr 17: Alma 43:1-45
Apr 18: Alma 43:46-54, 44, 45:1-13
Apr 19: Alma 45:14-24, 46:1-28
Apr 20: Alma 46:29-41, 47
Apr 21: Alma 48, 49:1-20
Apr 22: Alma 49:21-30, 50
Apr 23: Alma 51, 52:1-6
Apr 24: Alma 52:7-40, 53:1-17
Apr 25: Alma 53:18-23, 54, 55:1-26
Apr 26: Alma 55:27-35, 56:1-52
Apr 27: Alma 56:53-57, 57, 58:1-12
Apr 28: Alma 58:13-41, 59, 60:1-12
Apr 29: Alma 60:13-36, 61
Apr 30: Alma 62

May 1: Alma 63, Hel 1
May 2: Hel 2-3
May 3: Hel 4, 5:1-12
May 4: Hel 5:13-52, 6:1-12
May 5: Hel 6:13-41, 7:1-17
May 6: Catch Up Day
May 7: Hel 7:18-29, 8, 9:1-5
May 8: Hel 9:6-41, 10, 11:1-4
May 9: Hel 11:5-38, 12:1-17
May 10: Hel 12:18-26, 13:1-34
May 11: Hel 13:35-39, 14, 15:1-7
May 12: Hel 15:8-17, 16, 3 Ne 1:1-9
May 13: 3 Ne 1:10-30, 2, 3:1-5
May 14: 3 Ne 3:6-26, 4:1-22
May 15: 3 Ne 4:23-33, 5, 6:1-14
May 16: 3 Ne 6:15-30, 7, 8:1-4
May 17: 3 Ne 8:5-25, 9
May 18: 3 Ne 10, 11:1-27
May 19: 3 Ne 11:28-41, 12:1-32
May 20: 3 Ne 12:33-48, 13, 14:1-14
May 21: 3 Ne 14:15-27, 15, 16:1-10
May 22: 3 Ne 16:11-20, 17, 18:1-16
May 23: 3 Ne 18:17-39, 19:1-30
May 24: 3 Ne 19:31-36, 20
May 25: 3 Ne 21-22
May 26: 3 Ne 23-25, 26:1-5
May 27: 3 Ne 26:6-21, 27
May 28: 3 Ne 28-29
May 29: 3 Ne 30, 4 Ne 1:1-36
May 30: 4 Ne 1:37-49, Mormon 1, 2:1-13
May 31: Mormon 2:14-29, 3, 4:1-8

Jun 1: Mormon 4:9-23, 5, 6:1-7
Jun 2: Mormon 6:8-22, 7, 8:1-19
Jun 3: Catch Up Day
Jun 4: Mormon 8:20-41, 9:1-17
Jun 5: Mormon 9:18-37, Ether 1
Jun 6: Ether 2, 3:1-8
Jun 7: Ether 3:9-28, 4
Jun 8: Ether 5-6, 7:1-22
Jun 9: Ether 7:23-27, 8, 9:1-17
Jun 10: Ether 9:18-35, 10
Jun 11: Ether 11, 12:1-24
Jun 12: Ether 12:25-41, 13
Jun 13: Ether 14, 15:1-29
Jun 14: Ether 15:30-34, Moroni 1-6, 7:1-7
Jun 15: Moroni 7:8-48, 8:1-3
Jun 16: Moroni 8:4-30, 9:1-18
Jun 17: Moroni 9:19-26, 10
`;

const YEAR = 2026;
const app = document.getElementById("app");
const today = new Date();
today.setHours(0, 0, 0, 0);

function dateKey(date) {
  return date.toISOString().split("T")[0];
}

let currentMonth = "";

readingsText
  .split("\n")
  .map(l => l.trim())
  .filter(Boolean)
  .forEach(line => {
    const [datePart, reading] = line.split(": ");
    const [month, day] = datePart.split(" ");
    const date = new Date(`${month} ${day}, ${YEAR}`);
    const key = dateKey(date);

    if (month !== currentMonth) {
      currentMonth = month;
      const monthDiv = document.createElement("div");
      monthDiv.className = "month";
      monthDiv.textContent = month;
      app.appendChild(monthDiv);
    }

    const row = document.createElement("div");
    row.className = "day-row";

    if (date.getTime() === today.getTime()) {
      row.classList.add("today");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = localStorage.getItem(key) === "done";

    checkbox.addEventListener("change", () => {
      localStorage.setItem(key, checkbox.checked ? "done" : "");
      row.classList.toggle("completed", checkbox.checked);
    });

    if (checkbox.checked) {
      row.classList.add("completed");
    }

    const text = document.createElement("span");
    text.innerHTML = `<strong>${datePart}</strong> — ${reading}`;

    row.appendChild(checkbox);
    row.appendChild(text);
    app.appendChild(row);
  });
