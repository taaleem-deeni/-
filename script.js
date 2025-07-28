
let results = [];

fetch('results.json')
  .then(response => response.json())
  .then(data => {
    results = data;
  });

function showResult() {
  const input = document.getElementById("examInput").value.trim();
  const frame = document.getElementById("resultFrame");
  const error = document.getElementById("error");

  if (results.includes(input)) {
    frame.src = input + ".html";
    frame.style.display = "block";
    error.innerText = "";
  } else {
    frame.style.display = "none";
    error.innerText = "الرقم الامتحاني غير موجود.";
  }
}
