function renderGame(list) {
  const container = document.getElementById('game-list');
  container.innerHTML = '';
  list.forEach(g => {
    container.innerHTML += \`
      <div class="game-box" onclick="location.href='topup.html?id=\${g.id}'">
        <img src="\${g.logo}" alt="\${g.nama}">
        <strong>\${g.nama}</strong>
      </div>
    \`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGame(gameData);

  document.getElementById("search").addEventListener("input", filter);
  document.getElementById("kategori").addEventListener("change", filter);
});

function filter() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const kategori = document.getElementById("kategori").value;

  const hasil = gameData.filter(g => {
    const cocokNama = g.nama.toLowerCase().includes(keyword);
    const cocokKategori = kategori === "all" || g.kategori === kategori;
    return cocokNama && cocokKategori;
  });

  renderGame(hasil);
}