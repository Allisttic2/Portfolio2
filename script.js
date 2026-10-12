const knapp = document.getElementById("theme-toggle");

function sattTema(mork) {
    document.body.classList.toggle("dark", mork);
    knapp.textContent = mork ? "☀️" : "🌙";
    try { localStorage.setItem("tema", mork ? "dark" : "light"); } catch (e) {}
}

// Kom ihåg valet från förra sidan
let sparat = null;
try { sparat = localStorage.getItem("tema"); } catch (e) {}
sattTema(sparat === "dark");

knapp.addEventListener("click", () => {
    sattTema(!document.body.classList.contains("dark"));
});
