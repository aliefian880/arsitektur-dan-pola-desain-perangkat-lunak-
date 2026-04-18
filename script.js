// ============================================================
// Program JavaScript Lengkap Website CV Global Indotech
// Fitur:
// 1. Animasi Scroll (AOS)
// 2. Perubahan Warna Header Dinamis
// 3. Penampilan Jam Buka Otomatis
// 4. Efek Interaksi Tambahan (Hover & Responsif)
// ============================================================

// 🔹 Inisialisasi animasi scroll dengan AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800, // durasi animasi (ms)
            once: true // animasi hanya muncul sekali
        });
    }

    // ========================================================
    // 🔹 Efek perubahan warna background header setiap refresh
    // ========================================================
    const headerBackground = document.querySelector('.header-background');
    if (headerBackground) {
        const colors = [
            'linear-gradient(90deg, #004e92, #000428)', // biru tua
            'linear-gradient(90deg, #1e3c72, #2a5298)', // biru klasik
            'linear-gradient(90deg, #283E51, #485563)', // abu gelap
            'linear-gradient(90deg, #373B44, #4286f4)', // biru abu
            'linear-gradient(90deg, #141E30, #243B55)' // navy modern
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        headerBackground.style.background = randomColor;
    }

    // ========================================================
    // 🔹 Menampilkan jam buka perusahaan secara dinamis
    // ========================================================
    function updateJamBuka() {
        const jamBuka = document.getElementById('jam-buka');
        if (!jamBuka) return;

        const sekarang = new Date();
        const hari = sekarang.getDay(); // 0 = Minggu, 1 = Senin, dst
        const jam = sekarang.getHours();

        let status = '';
        if (hari === 0) {
            status = 'Tutup (Hari Minggu)';
        } else if (jam >= 8 && jam < 17) {
            status = 'Buka Sekarang (08.00 - 17.00)';
        } else {
            status = 'Tutup (Buka kembali pukul 08.00)';
        }

        jamBuka.textContent = status;
    }

    // Jalankan fungsi jam buka pertama kali dan perbarui setiap 1 menit
    updateJamBuka();
    setInterval(updateJamBuka, 60000);

    // ========================================================
    // 🔹 Efek tambahan hover tombol (transisi halus)
    // ========================================================
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05)';
            btn.style.transition = 'transform 0.2s ease-in-out';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    // ========================================================
    // 🔹 Efek smooth scroll ke bagian tertentu dari halaman
    // ========================================================
    const navButtons = document.querySelectorAll('button[onclick^="window.location.href"]');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('onclick').match(/#\w+/);
            if (targetId) {
                const target = document.querySelector(targetId[0]);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ========================================================
    // 🔹 Efek animasi muncul untuk artikel atau kartu layanan
    // ========================================================
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// Inisialisasi EmailJS dengan User ID kamu
// Dapatkan ID dari: https://dashboard.emailjs.com
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Ganti dengan kunci publik EmailJS kamu
})();

// Fungsi kirim pesan
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil data dari form
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Kirim via EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(function(response) {
            document.getElementById("statusMessage").innerHTML =
                "<div class='alert alert-success'>Pesan berhasil dikirim! ✅</div>";
            document.getElementById("contactForm").reset();
        }, function(error) {
            document.getElementById("statusMessage").innerHTML =
                "<div class='alert alert-danger'>Gagal mengirim pesan ❌, silakan coba lagi.</div>";
            console.error("Error:", error);
        });
});

<
script >
    document.getElementById("gmailAlatTeknik").addEventListener("click", function() {

        const emailTujuan = "aliefiansubagia803@gmail.com"; // ✅ email tujuan
        const subject = encodeURIComponent("Pemesanan Alat Teknik - CV Global Indotech");

        const body = encodeURIComponent(
            "Selamat pagi, apa yang bisa kami bantu?\n\n" +
            "Saya ingin menanyakan atau memesan Alat Teknik.\n\n" +
            "Nama: \n" +
            "Keperluan: \n\n" +
            "Terima kasih."
        );

        const urlGmail =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            `&to=${emailTujuan}&su=${subject}&body=${body}`;

        window.open(urlGmail, "_blank");
    }); <
/script>

<
script >
    document.getElementById("gmailPegas").addEventListener("click", function() {
        const email = "globalindotect@gmail.com"; // ✅ Ganti dengan email tujuanmu
        const subject = "Pemesanan Jenis Pegas";
        const body = "Selamat pagi, apa yang bisa kami bantu terkait pemesanan Jenis Pegas?";

        // Buka Gmail menggunakan link compose
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailURL, "_blank");
    }); <
/script>