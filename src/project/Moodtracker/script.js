const list = document.getElementById("list");
const moodSelect = document.getElementById("mood");

let moods = JSON.parse(localStorage.getItem("moods")) || [];

function renderMoods() {
      list.innerHTML = "";

      moods.forEach(mood => {
            const li = document.createElement("li");
            list.textContent = mood;
            list.appendChild(li);
      })
}

function saveMood() {
      const selectedMood = moodSelect.value;
      if (selectedMood === "") return;

      const date = new Date().toLocaleDateString("fr-FR");
      const entry = `${date}-${selectedMood}`;

      moods.push(entry);
      localStorage.setItem("moods", JSON.stringify(moods));

      moodSelect.value = "";
      renderMoods();
}
window.saveMood = saveMood;
renderMoods();