document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  // Ambil elemen kotak tema
  const sunBox = themeToggle.querySelector(".sun-box");
  const moonBox = themeToggle.querySelector(".moon-box");
  // Fungsi untuk menyimpan preferensi tema ke Local Storage
  function setStoredTheme(isDark) {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
  // Fungsi untuk mengambil preferensi tema dari Local Storage
  function getStoredTheme() {
    return localStorage.getItem("theme");
  }
  // Fungsi untuk menerapkan status visual
  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add("dark-mode");
      moonBox.classList.add("active");
      sunBox.classList.remove("active");
    } else {
      body.classList.remove("dark-mode");
      sunBox.classList.add("active");
      moonBox.classList.remove("active");
    }
  }
  // Memuat tema saat halaman dimua
  const storedTheme = getStoredTheme();
  const isInitialDark = storedTheme
    ? storedTheme === "dark"
    : body.classList.contains("dark-mode");
  applyTheme(isInitialDark);
  // Event listener untuk tombol toggle
  themeToggle.addEventListener("click", function () {
    const isCurrentlyDark = body.classList.toggle("dark-mode");
    // Terapkan tema dan simpan preferensi
    applyTheme(isCurrentlyDark);
    setStoredTheme(isCurrentlyDark);
  });
});
