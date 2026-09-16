// JAVASCRIPT LOGIC UNTUK TES BRANDING UM

document.addEventListener("DOMContentLoaded", () => {
  initTabMenu();
  initCalendar();
  initFolkcastCards();
});

/* ==========================================================================
   1. TAB MENU LOGIC (SOAL 2)
   ========================================================================== */
function initTabMenu() {
  const tabs = document.querySelectorAll(".tab-item");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab");

      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const targetPane = document.getElementById(`pane-${targetId}`);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   2. KALENDER AKADEMIK & TANGGAL PENTING (SOAL 3)
   ========================================================================== */
const kalenderData = {
  "tahun_akademik": "2026/2027",
  "kegiatan_pembelajaran": [
    {
      "kode": "A.1",
      "kegiatan": "PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru)",
      "smt_gasal_2026_2027": "10-14 Agustus 2026"
    },
    {
      "kode": "A.2",
      "kegiatan": "Permohonan cuti kuliah on-line (Mahasiswa Lama)",
      "smt_gasal_2026_2027": "29 Juni – 11 September 2026"
    },
    {
      "kode": "A.3.a",
      "kegiatan": "Unggah Sajian Mata Kuliah Universiter (MKU)",
      "smt_gasal_2026_2027": "29 Juni – 10 Juli 2026"
    },
    {
      "kode": "A.3.b",
      "kegiatan": "Unggah Sajian Mata Kuliah Program Studi",
      "smt_gasal_2026_2027": "06 – 17 Juli 2026"
    },
    {
      "kode": "A.4",
      "kegiatan": "Pembayaran UKT/SPP Mahasiswa Lama",
      "smt_gasal_2026_2027": "06 Juli – 14 Agustus 2026"
    },
    {
      "kode": "A.5",
      "kegiatan": "Registrasi Akademik (KRS) Mahasiswa Lama",
      "smt_gasal_2026_2027": "13 Juli – 14 Agustus 2026"
    },
    {
      "kode": "A.6",
      "kegiatan": "Awal Kuliah Semester Gasal 2026/2027",
      "smt_gasal_2026_2027": "18 Agustus 2026"
    },
    {
      "kode": "A.7",
      "kegiatan": "Perubahan KRS (Batal Tambah)",
      "smt_gasal_2026_2027": "24 - 28 Agustus 2026"
    },
    {
      "kode": "A.8",
      "kegiatan": "Ujian Tengah Semester (UTS)",
      "smt_gasal_2026_2027": "05 – 09 Oktober 2026"
    },
    {
      "kode": "A.9",
      "kegiatan": "Ujian Akhir Semester (UAS)",
      "smt_gasal_2026_2027": "07 – 18 Desember 2026"
    }
  ]
};

let currentMonth = 6; // July (0-indexed: 6 = July)
let currentYear = 2026;

function initCalendar() {
  renderCalendarDays(currentYear, currentMonth);
  renderKegiatanList();

  const prevBtn = document.getElementById("cal-prev");
  const nextBtn = document.getElementById("cal-next");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendarDays(currentYear, currentMonth);
    });

    nextBtn.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendarDays(currentYear, currentMonth);
    });
  }
}

function renderCalendarDays(year, month) {
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const titleEl = document.getElementById("cal-month-name");
  if (titleEl) {
    titleEl.textContent = `${monthNames[month]} ${year}`;
  }

  const daysGrid = document.getElementById("calendar-days");
  if (!daysGrid) return;

  daysGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = (firstDay === 0 ? 6 : firstDay - 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const eventDays = (month === 6 && year === 2026) ? [6, 10, 13, 17, 29] : (month === 7 && year === 2026 ? [10, 14, 18, 24, 28] : []);

  for (let i = 0; i < startOffset; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "cal-day empty";
    daysGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("div");
    dayCell.className = "cal-day";
    dayCell.textContent = day;

    if (eventDays.includes(day)) {
      dayCell.classList.add("has-event");
      dayCell.title = "Ada kegiatan akademik pada tanggal ini";
    }

    if (day === 16 && month === 8 && year === 2026) {
      dayCell.classList.add("today");
    }

    daysGrid.appendChild(dayCell);
  }
}

function renderKegiatanList() {
  const container = document.getElementById("kegiatan-list-container");
  if (!container) return;

  container.innerHTML = "";

  kalenderData.kegiatan_pembelajaran.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.className = "kegiatan-item";

    itemEl.innerHTML = `
      <div class="kegiatan-title">${item.kode}: ${item.kegiatan}</div>
      <div class="kegiatan-date">
        <span>📅</span>
        <span>${item.smt_gasal_2026_2027 || 'Jadwal menyesuaikan'}</span>
      </div>
    `;

    container.appendChild(itemEl);
  });
}


/* ==========================================================================
   3. FOLKCAST 3-CARD LAYOUT EXACT PDF REVISION (SOAL 5)
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
