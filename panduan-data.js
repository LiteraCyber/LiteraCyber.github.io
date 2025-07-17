document.addEventListener("DOMContentLoaded", () => {
    const panduanList = document.getElementById("panduan-list");

    const daftarPanduan = [
        {
            judul: "Panduan I - Tugas Perangkat Tertinggi",
            isi: `
<h3>Tugas Rapat Umum Pemegang Saham (RUPS)</h3>
<h5>Tujuan:</h5>
<ul>
  <li>Menjelaskan tugas utama RUPS.</li>
  <li>Menjelaskan kapan RUPS harus dilakukan.</li>
</ul>

<h5>Tugas Utama RUPS:</h5>
<ul>
  <li>
    <strong>Mengangkat dan Memberhentikan Direksi dan Komisaris</strong><br />
    RUPS berwenang memutuskan siapa yang menjabat dan memberhentikan Direksi/Komisaris berdasarkan kinerja atau alasan lainnya.
  </li>
  <li>
    <strong>Menetapkan Kebijakan Umum Perusahaan</strong><br />
    Termasuk persetujuan atas rencana kerja, pengembangan usaha, dan perubahan besar dalam perusahaan.
  </li>
  <li>
    <strong>Mengesahkan Laporan Keuangan dan Laporan Tahunan</strong><br />
    Memberi persetujuan terhadap laporan tahunan yang disusun Direksi dan diawasi Komisaris.
  </li>
  <li>
    <strong>Membagi Keuntungan (Dividen)</strong><br />
    Menentukan apakah laba perusahaan akan dibagikan sebagai dividen atau dialokasikan untuk investasi/hal lain.
  </li>
  <li>
    <strong>Mengubah Anggaran Dasar PT</strong><br />
    Termasuk perubahan nama perusahaan, bidang usaha, modal dasar, domisili, dan lainnya.
  </li>
  <li>
    <strong>Memberikan Persetujuan atas Tindakan Tertentu</strong><br />
    Misalnya penggabungan (merger), pemisahan (spin-off), pengambilalihan, likuidasi, atau penjualan aset besar.
  </li>
  <li>
    <strong>Menetapkan Honorarium Direksi dan Komisaris</strong><br />
    Menentukan gaji dan tunjangan untuk jajaran manajemen.
  </li>
</ul>

<h5>Kapan RUPS Ada:</h5>
<ul>
  <li>
    <strong>RUPS Tahunan</strong><br />
    Diadakan paling lambat 6 bulan setelah tahun buku berakhir. Mengesahkan laporan keuangan dan membahas kinerja tahunan.
  </li>
  <li>
    <strong>RUPS Luar Biasa (RUPSLB)</strong><br />
    Diadakan sewaktu-waktu untuk mengambil keputusan penting di luar agenda tahunan (misalnya: perubahan struktur, penambahan modal, akuisisi, dll).
  </li>
  <li>RUPS hanya bisa dilaksanakan jika memenuhi kuorum kehadiran sesuai anggaran dasar.</li>
  <li>Keputusan RUPS bersifat mengikat untuk seluruh organ PT (Direksi, Komisaris, dan pemegang saham lain).</li>
</ul>


                `
        },
        {
            judul: "Panduan II - Tugas Perangkat Harian",
            isi: 
`
<h3>Tugas Direktur</h3>
<h5>Tujuan:</h5>
<ul>
  <li>Menjelaskan tugas utama Direktur.</li>
</ul>

<h5>Tugas Utama Direktur PT:</h5>
<ul>
  <li>
    <strong>Menjalankan Kegiatan Usaha Harian</strong><br />
    <ul>
      <li>Mengelola operasional perusahaan sesuai tujuan dan anggaran dasar PT.</li>
      <li>Memimpin seluruh departemen/unit kerja agar berjalan efektif dan efisien.</li>
      <li>Memberikan umpan balik rutin: Evaluasi kebutuhan pekerja (misal: alat kerja, beban tugas).</li>
    </ul>
  </li>
  <li>
    <strong>Menyusun dan Melaksanakan Rencana Kerja</strong><br />
    <ul>
      <li>Menyusun rencana bisnis, strategi operasional, dan target tahunan.</li>
      <li>Menjalankan keputusan RUPS dan arahan Komisaris.</li>
    </ul>
  </li>
  <li>
    <strong>Mengelola Keuangan Perusahaan</strong><br />
    <ul>
      <li>Mengatur arus kas, anggaran, serta menyusun laporan keuangan.</li>
      <li>Bertanggung jawab atas penggunaan dana secara akuntabel.</li>
    </ul>
  </li>
  <li>
    <strong>Mewakili PT di Dalam dan di Luar Pengadilan</strong><br />
    <ul>
      <li>Direktur adalah wakil sah perusahaan secara hukum, termasuk menandatangani kontrak, kerja sama, atau menghadiri persidangan bila dibutuhkan.</li>
    </ul>
  </li>
  <li>
    <strong>Menjaga Kepatuhan Hukum dan Regulasi</strong><br />
    <ul>
      <li>Memastikan perusahaan mematuhi aturan perpajakan, ketenagakerjaan, izin usaha, dan peraturan pemerintah lainnya.</li>
    </ul>
  </li>
  <li>
    <strong>Membuat Laporan kepada RUPS dan Komisaris</strong><br />
    <ul>
      <li>Menyampaikan laporan kinerja tahunan, serta perkembangan penting kepada pemegang saham dan komisaris.</li>
      <li>Menyampaikan laporan keuangan per bulan, per 3 bulan dan per tahun.</li>
    </ul>
  </li>
  <li>
    <strong>Mengangkat dan Memberhentikan Karyawan</strong><br />
    <ul>
      <li>Memiliki kewenangan untuk mengatur struktur organisasi internal dan sumber daya manusia.</li>
    </ul>
  </li>
</ul>

<h3>Tugas Komisaris</h3>
<h5>Tujuan:</h5>
<ul>
  <li>Menjelaskan tugas utama komisaris.</li>
</ul>

<h5>Tugas Utama Komisaris:</h5>
<ul>
  <li>
    <strong>Mengawasi Direksi</strong><br />
    <ul>
      <li>Mengawasi kebijakan dan pelaksanaan manajemen oleh Direksi.</li>
      <li>Memastikan kegiatan usaha PT dijalankan sesuai anggaran dasar dan peraturan perundang-undangan.</li>
      <li>Memiliki email <em>pengawas@literacyber.com</em> sebagai fungsi pelaporan jika terjadi masalah dengan perusahaan.</li>
    </ul>
  </li>
  <li>
    <strong>Memberikan Nasihat kepada Direksi</strong><br />
    <ul>
      <li>Memberikan masukan strategis, saran, atau rekomendasi atas rencana atau pelaksanaan operasional perusahaan.</li>
    </ul>
  </li>
  <li>
    <strong>Melakukan Pemeriksaan Khusus</strong><br />
    <ul>
      <li>Bila diperlukan atau diminta oleh RUPS, komisaris dapat memeriksa laporan keuangan, proyek tertentu, atau keputusan manajerial.</li>
    </ul>
  </li>
  <li>
    <strong>Memantau Kepatuhan Hukum</strong><br />
    <ul>
      <li>Mengawasi apakah perusahaan taat pada ketentuan hukum, termasuk laporan pajak, ketenagakerjaan, dan izin usaha.</li>
    </ul>
  </li>
  <li>
    <strong>Menghadiri RUPS</strong><br />
    <ul>
      <li>Komisaris wajib hadir dan memberi pendapat dalam Rapat Umum Pemegang Saham, terutama terkait laporan tahunan dan kebijakan strategis.</li>
    </ul>
  </li>
  <li>
    <strong>Mengangkat Auditor Independen</strong><br />
    <ul>
      <li>Komisaris dapat menunjuk auditor eksternal (dengan persetujuan RUPS) untuk memastikan transparansi laporan keuangan.</li>
    </ul>
  </li>
  <li>
    <strong>Menjaga Kepentingan Pemegang Saham</strong><br />
    <ul>
      <li>Komisaris bertindak atas nama pemegang saham untuk memastikan PT berjalan dengan sehat dan profesional.</li>
    </ul>
  </li>
</ul>

<h5>Batasan Komisaris:</h5>
<ul>
  <li>Tidak terlibat langsung dalam operasional harian. Itu adalah tugas Direksi.</li>
  <li>Komisaris tidak boleh mengambil keputusan manajerial kecuali jika diberi kuasa oleh RUPS atau diatur dalam Anggaran Dasar.</li>
</ul>



            `
        },
        {
            judul: "Panduan III - Etika Kerja",
            isi: `
<h3>Panduan Pelaporan Pelanggaran</h3>

<h5>Tujuan:</h5>
<ul>
  <li>Menjelaskan jenis pelanggaran dan cara melaporkan pelanggaran di lingkungan PT Litera Cyber Indonesia.</li>
  <li>Memberikan transparansi dalam penanganan laporan.</li>
  <li>Mencegah penyebaran laporan yang tidak berdasar.</li>
  <li>Mendorong perilaku etis dan bertanggung jawab.</li>
  <li>Menjaga Reputasi Perusahaan.</li>
                
</ul>

<h5>Jenis Pelanggaran yang Bisa Dilaporkan:</h5>
<ul>
  <li>Kekerasan atau pelecehan seksual.</li>
  <li>Penipuan, korupsi, atau suap.</li>
  <li>Kekerasan atau eksploitasi terhadap anak.</li>
  <li>Menyembunyikan fakta penting.</li>
  <li>Melanggar kewajiban kerja dalam kontrak.</li>
</ul>

<h5>Cara Melapor – Internal:</h5>
<ul>
  <li>Kirim email ke: <em>pengawas@literacyber.com</em></li>
  <li>Bisa anonim atau menyertakan identitas.</li>
  <li>Sertakan nama terduga pelanggar dan kronologi kejadian.</li>
  <li>PT Litera Cyber Indonesia wajib melindungi identitas pelapor.</li>
  <li>Pelaporan ditindaklanjuti maksimal 10 hari kerja.</li>
  <li>Pelapor akan diberi informasi tentang proses dan hasil laporan.</li>
</ul>

<h5>Cara Melapor – Eksternal:</h5>
<ul>
  <li>Bisa melalui email <em>pengawas@literacyber.com</em>, atau surat ke kantor PT Litera Cyber Indonesia.</li>
  <li>Isi laporan minimal: identitas terduga dan kronologi kejadian.</li>
  <li>PT Litera Cyber Indonesia tetap menjamin kerahasiaan pelapor.</li>
  <li>Laporan ditindaklanjuti maksimal 14 hari kerja.</li>
  <li>Pelapor dilibatkan dalam keputusan atas pelanggaran.</li>
</ul>

<hr />

<h3>Panduan Penanganan & Konsekuensi Pelanggaran</h3>

<h5>Tujuan:</h5>
<ul>
  <li>Menjelaskan langkah penanganan jika terjadi pelanggaran.</li>
  <li>Menjadi dasar pemberian sanksi.</li>
  <li>Memberi perlindungan bagi korban atau pelapor.</li>
</ul>

<h5>Mekanisme Penanganan:</h5>
<p>Setelah ada laporan pelanggaran, PT Litera Cyber Indonesia membentuk Tim Penanganan Laporan (TPL) maksimal 7 hari kerja setelah laporan diterima. TPL terdiri dari:</p>
<ul>
  <li>1 perwakilan Pengawas</li>
  <li>1 perwakilan Sukarelawan/Anggota Yayasan</li>
  <li>1 perwakilan Pihak Luar yang Kompeten</li>
</ul>

<h5>Tugas TPL:</h5>
<ul>
  <li>Verifikasi laporan dan kumpulkan bukti.</li>
  <li>Komunikasi aman dengan pelapor dan terlapor.</li>
  <li>Lakukan investigasi maksimal 21 hari kerja.</li>
  <li>Buat laporan dan rekomendasi tindakan.</li>
  <li>Jaga kerahasiaan identitas korban/pelapor.</li>
</ul>

<h5>Mekanisme Disiplin & Konsekuensi:</h5>
<p>Setelah proses penanganan selesai, pelaku pelanggaran dipanggil untuk menerima keputusan. Keputusan dianggap sah jika ditandatangani oleh perwakilan pengurus dan pengawas.</p>

<h5>Kategori Sanksi:</h5>
<ul>
  <li>
    <strong>Ringan:</strong>
    <ul>
      <li>Surat peringatan (SP1)</li>
      <li>Jika SP1 diabaikan → SP2</li>
      <li>Jika diabaikan → SP3 / dikeluarkan</li>
    </ul>
  </li>
  <li>
    <strong>Sedang:</strong>
    <ul>
      <li>Dinonaktifkan dari kegiatan PT Litera Cyber Indonesia minimal 6 bulan.</li>
    </ul>
  </li>
  <li>
    <strong>Berat:</strong>
    <ul>
      <li>Dikeluarkan dari keanggotaan PT Litera Cyber Indonesia.</li>
    </ul>
  </li>
</ul>

<h5>Konsekuensi Tambahan:</h5>
<ul>
  <li>Biaya pengobatan atau konsultasi psikis untuk korban bisa dibebankan ke pelaku (maksimal 6 bulan).</li>
  <li>Ganti rugi jika PT Litera Cyber Indonesia mengalami kerugian.</li>
  <li>Korban boleh lanjutkan kasus ke ranah hukum dengan pendampingan PT Litera Cyber Indonesia (jika pelanggaran berat).</li>
</ul>

<hr />

<h3>Syarat untuk Menjaga Reputasi Perusahaan</h3>
<ul>
  <li>
    <strong>Non-Disclosure Agreement (NDA):</strong><br />
    Pekerja wajib menjaga kerahasiaan data internal, sumber investigasi, atau mitra.
  </li>
  <li>
    <strong>Kode Etik:</strong><br />
    Larangan menyebarkan hoaks, konflik kepentingan, atau plagiarisme.
  </li>
  <li>
    <strong>Kebijakan Inklusivitas & Anti-Diskriminasi:</strong><br />
    Lingkungan kerja bebas dari SARA, pelecehan, atau bias politik.
  </li>
</ul>

<h5>Sanksi Jika Perusahaan Melanggar</h5>
<p>Pekerja bisa melapor ke Dinas Tenaga Kerja atau Pengadilan Hubungan Industrial jika:</p>
<ul>
  <li>Upah tidak dibayar.</li>
  <li>Tidak ada jaminan BPJS.</li>
  <li>Pemutusan kerja sepihak tanpa pesangon.</li>
</ul>


            `
        },
        {
            judul: "Panduan IV - Kemampuan dan Keahlian Pekerja",
            isi: `
<h5>Tujuan:</h5>
<ul>
  <li>Pekerja memahami apa yang diinginkan perusahaan.</li>
  <li>Perusahaan dimudahkan dalam pekerjaannya.</li>
  <li>Perusahaan mendapatkan pekerja yang berkualitas tinggi.</li>
</ul>

<h5>Fokus Pekerja:</h5>
<ul>
  <li>Fokus pekerja adalah membantu mentransformasi pengetahuan siber yang kompleks menjadi materi yang mudah dicerna dan disebarkan ke masyarakat.</li>
</ul>


<h5>Kualifikasi Pekerja Umum:</h5>
<ul>
  <li>Pekerja memiliki integritas.</li>
  <li>Pekerja memiliki kemampuan dan keahlian teknis untuk mendukung perusahaan berproduksi, berinovasi, dan menguntungkan.</li>
  <li>Memiliki kepatuhan pada Etika Perusahaan (Panduan Etika Kerja).</li>
  <li>Mampu menjaga netralitas dan akurasi (terutama untuk peneliti fakta).</li>
  <li>Memiliki kemampuan komunikasi.</li>
  <li>Menandatangani NDA (Non-Disclosure Agreement) jika bekerja dengan data sensitif.</li>
  <li>Tidak memanfaatkan sumber daya perusahaan untuk kepentingan pribadi yang merugikan.</li>
  <li>Tidak terlibat dalam penyebaran hoaks, misinformasi, atau konflik kepentingan.</li>
</ul>


<h5>Kualifikasi Keahlian Pekerja:</h5>

<ul>
  <li>
    <strong>Keahlian Teknikal:</strong>
    <ul>
      <li>Minimal: Literasi Digital & Keamanan Siber Dasar</li>
      <li>Memiliki pengetahuan tentang disinformasi, hoaks, dan teknik fact-checking.</li>
      <li>Menguasai prinsip keamanan siber dan tren ancaman digital untuk memastikan relevansi pelatihan.</li>
      <li>Memahami media digital, algoritma platform sosial, dan konten edukasi kreatif (Instagram, YouTube, TikTok).</li>
    </ul>
  </li>

  <li>
    <strong>Keahlian Kepemimpinan Strategis & Manajemen Bisnis Digital:</strong>
    <ul>
      <li>Mampu merancang strategi pertumbuhan perusahaan (scaling portal, pelatihan, dan konten edukasi).</li>
      <li>Memiliki pengalaman dalam pengembangan produk digital, termasuk analisis data pengguna dan optimasi UX.</li>
      <li>Menguasai model monetisasi (misalnya: sponsorship, kerjasama institusi, atau program berbayar).</li>
    </ul>
  </li>

  <li>
    <strong>Keahlian Komunikasi & Kolaborasi Multistakeholder:</strong>
    <ul>
      <li>Kemampuan public speaking dan negosiasi untuk menjalin kerjasama dengan pemerintah, media, akademisi, atau sponsor.</li>
      <li>Memimpin tim konten kreatif, trainer, dan peneliti fakta dengan efektif.</li>
      <li>Mampu menyampaikan pesan edukasi digital secara persuasif kepada masyarakat awam hingga profesional.</li>
    </ul>
  </li>

  <li>
    <strong>Keahlian Analisis Data & Pengambilan Keputusan Berbasis Bukti:</strong>
    <ul>
      <li>Memahami tools analisis data untuk mengukur dampak kampanye.</li>
      <li>Membuat keputusan berbasis riset tren hoaks dan kebutuhan literasi digital di Indonesia.</li>
    </ul>
  </li>

  <li>
    <strong>Keahlian Inovasi & Adaptasi Teknologi:</strong>
    <ul>
      <li>Terbuka terhadap AI, automasi fact-checking, atau tools digital baru untuk meningkatkan efisiensi.</li>
      <li>Cepat beradaptasi dengan perubahan regulasi digital (UU ITE, kebijakan platform media sosial).</li>
    </ul>
  </li>

  <li>
    <strong>Keahlian Etika & Integritas Tinggi:</strong>
    <ul>
      <li>Memegang prinsip netralitas, akurasi, dan transparansi dalam pengecekan fakta.</li>
      <li>Menjaga kredibilitas perusahaan di tengah isu sensitif (politik, sosial, agama).</li>
    </ul>
  </li>
</ul>

<h5>Kualifikasi Keahlian Khusus Pekerja:</h5>

<ul>
  <li>
    <strong>1. Tim Fact-Checking & Peneliti</strong>
    <ul>
      <li><strong>Tools:</strong> Memiliki dan menguasai akses ke database hoaks, software analisis data, dan sumber referensi kredibel.</li>
      <li><strong>Pelatihan:</strong> Mengikuti regular workshop verifikasi fakta dan etika jurnalistik.</li>
      <li><strong>Proteksi Hukum:</strong> Memiliki perlindungan jika menghadapi ancaman/ujaran kebencian saat memeriksa konten sensitif.</li>
    </ul>
  </li>
  <li>
    <strong>2. Trainer Literasi Digital/Kiber</strong>
    <ul>
      <li><strong>Modul & Materi:</strong> Menguasai dan membantu menyusun bahan ajar sesuai dengan kurikulum standar.</li>
      <li><strong>Praktisi:</strong> Telah terbukti melakukan pekerjaannya secara serius dan profesional di bidang pertahanan, keamanan, investigasi atau advokasi baik konvensional maupun digital.</li>
    </ul>
  </li>
  <li>
    <strong>3. Tim Konten Kreatif (Media Sosial)</strong>
    <ul>
      <li><strong>Equipment:</strong> Menguasai tools desain atau copy writing dan atau perangkat lunak editing standarisasi perusahaan.</li>
      <li><strong>Kebebasan Kreatif:</strong> Menguasai etika batasan jelas antara konten edukasi dan iklan sponsor.</li>
      <li><strong>Hak Cipta:</strong> Melakukan klarifikasi kepemilikan konten dan memahami jenis-jenis lisensi digital.</li>
    </ul>
  </li>
  <li>
    <strong>4. Tim IT & Keamanan Siber</strong>
    <ul>
      <li><strong>Infrastruktur:</strong> Menguasai teknik pengamanan informasi, jaringan serta data pekerja/pengguna.</li>
      <li><strong>Sertifikasi:</strong> Memiliki dorongan untuk upgrade keahlian dan sertifikasi standar.</li>
    </ul>
  </li>
</ul>

            `
        }
    ];

    daftarPanduan.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "collapsible-item";

        const header = document.createElement("div");
        header.className = "collapsible-header";
        header.innerHTML = `<h3>${item.judul}</h3><span class="arrow">▼</span>`;
        header.addEventListener("click", () => toggleCollapse(header));

        const content = document.createElement("div");
        content.className = "collapsible-content";
        content.innerHTML = `<div class="content-inner">${item.isi}</div>`;

        wrapper.appendChild(header);
        wrapper.appendChild(content);
        panduanList.appendChild(wrapper);
    });
});
