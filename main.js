// JAVASCRIPT LOGIC UNTUK TES BRANDING UM (DESIGN SYSTEM PENDIDIKAN)

document.addEventListener("DOMContentLoaded", () => {
  initCalendar();
  initAccordion();
  initFolkcastCards();
});

/* ==========================================================================
   1. KALENDER AKADEMIK (SOAL 3 REVISI image_490e65)
   ========================================================================== */
let currentMonth = 8; // September (0-indexed: 8 = Sept)
let currentYear = 2026;

const eventsMap = {
  "2026-9-1": ["Permohonan cuti kuliah online", "Penyisiran Status Mahasiswa", "Mengecek eligibilitas PISN", "Pelaksanaan Ekstrakurikuler", "Awal Kuliah Semester Ganjil"],
  "2026-9-2": ["Permohonan cuti kuliah online", "Penyisiran Status Mahasiswa", "Unggah Sajian Mata Kuliah"],
  "2026-9-3": ["Permohonan cuti kuliah online", "Mengecek eligibilitas PISN", "Pelaksanaan Ekstrakurikuler"],
  "2026-9-4": ["Permohonan cuti kuliah online", "Penyisiran Status Mahasiswa", "Pelaksanaan Ekstrakurikuler"],
  "2026-9-5": ["Pelaksanaan Ekstrakurikuler"],
  "2026-9-7": ["Pelaksanaan Ekstrakurikuler", "Pengajuan Capaian KRE"],
  "2026-9-8": ["Verifikasi Capaian KRE"],
  "2026-9-9": ["Validasi Capaian KRE"],
  "2026-9-10": ["Masa Perkuliahan Semester Ganjil"],
  "2026-9-11": ["Batas Akhir Cuti Kuliah Online"]
};

function initCalendar() {
  renderGrid(currentYear, currentMonth);

  const prevBtn = document.getElementById("kaPrev");
  const nextBtn = document.getElementById("kaNext");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderGrid(currentYear, currentMonth);
    });

    nextBtn.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderGrid(currentYear, currentMonth);
    });
  }
}

function renderGrid(year, month) {
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const titleEl = document.getElementById("kaTitle");
  if (titleEl) {
    titleEl.textContent = `${monthNames[month]} ${year}`;
  }

  const gridEl = document.getElementById("kaGrid");
  if (!gridEl) return;

  gridEl.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = (firstDay === 0 ? 6 : firstDay - 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  // Previous month outside cells
  for (let i = startOffset - 1; i >= 0; i--) {
    const prevDay = prevMonthDays - i;
    const cell = document.createElement("div");
    cell.className = "ka-cell ka-outside";
    cell.innerHTML = `<div class="ka-date">${prevDay}</div>`;
    gridEl.appendChild(cell);
  }

  // Current month cells
  const dotColors = ["dot-yellow", "dot-green", "dot-blue"];

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "ka-cell";

    let eventsHtml = "";
    const key = `${year}-${month + 1}-${day}`;
    if (eventsMap[key]) {
      eventsHtml = `<div class="ka-events-wrapper">`;
      eventsMap[key].forEach((ev, idx) => {
        const dotClass = dotColors[idx % 3];
        eventsHtml += `
          <div class="ka-event-item" title="${ev}">
            <span class="ka-event-dot ${dotClass}"></span>
            <span>${ev}</span>
          </div>
        `;
      });
      eventsHtml += `</div>`;
    }

    cell.innerHTML = `
      <div class="ka-date">${day}</div>
      ${eventsHtml}
    `;

    gridEl.appendChild(cell);
  }

  // Fill remaining cells for 35 cell grid (5 rows x 7 cols)
  const totalRendered = startOffset + daysInMonth;
  const remaining = 35 - totalRendered;
  if (remaining > 0) {
    for (let i = 1; i <= remaining; i++) {
      const cell = document.createElement("div");
      cell.className = "ka-cell ka-outside";
      cell.innerHTML = `<div class="ka-date">${i}</div>`;
      gridEl.appendChild(cell);
    }
  }
}

/* ==========================================================================
   2. SIDEBAR ACCORDION TOGGLE
   ========================================================================== */
function initAccordion() {
  const heads = document.querySelectorAll(".ka-accordion-head");
  heads.forEach(head => {
    head.addEventListener("click", () => {
      const item = head.parentElement;
      item.classList.toggle("open");
    });
  });
}

/* ==========================================================================
   3. FOLKCAST 3-CARD LAYOUT (SOAL 5)
   ========================================================================== */
const folkcast3Cards = [
  {
    title: 'FOLKCAST #CakraWira Ep. 2: Bawa Nama UM ke Kancah Nasional, Kak Fina Buka Suara Soal Julukan "Fina CoC"',
    date: 'Agu 8, 2026',
    image: 'assets/folkcast1.webp'
  },
  {
    title: 'FOLKCAST #CakraWira Ep. 1: Perjalanan Panjang Kak Fadila Hingga Sabet Gelar Mawapres 1 UM 2026',
    date: 'Agu 8, 2026',
    image: 'assets/folkcast2.webp'
  },
  {
    title: 'FOLKCAST #CakraDaya Ep. 4: Bukti Nyata Organisasi Berdampak, HMD EKP FEB UM Sabet Prestasi di PPK Ormawa',
    date: 'Agu 8, 2026',
    image: 'assets/folkcast3.webp'
  }
];

function initFolkcastCards() {
  const container = document.getElementById("folkcast-cards-container");
  if (!container) return;

  container.innerHTML = "";

  folkcast3Cards.forEach(item => {
    const card = document.createElement("div");
    card.className = "folkcast-card";

    card.innerHTML = `
      <div class="folkcast-thumb-wrapper">
        <img src="${item.image}" alt="${item.title}" class="folkcast-thumb">
      </div>
      <div class="folkcast-body">
        <h3 class="folkcast-title">${item.title}</h3>
        <div class="folkcast-meta">
          <span>${item.date}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
