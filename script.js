// Toggle Menu
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navbar.classList.toggle('show');
});

// Data Bisnis
const bisnisDetails = [
  {
    title: "Leaf Hotel",
    desc: "Rasakan kenyamanan alami di Leaf Hotel — tempat istirahat yang tenang, hangat, dan penuh ketulusan. Cocok untuk melepas penat atau sekadar menikmati waktu berkualitas.",
    ig: "https://www.instagram.com/leaf_hotel?igsh=MWV5cWh2MDAyaXRjYw==",
    img: "images/hotel.jpg" //
  },
  {
    title: "Jiwara Spa",
    desc: "Lepaskan penat, pulihkan energi. Di Jiwara Spa Reflexology, setiap pijatan menyentuh titik-titik relaksasi terdalam Anda. Rasakan ketenangan jiwa dan raga dalam suasana yang hangat, bersih, dan penuh ketulusan. Karena tubuh Anda berhak untuk dimanjakan.",
    ig: "https://www.instagram.com/__jiwara__?igsh=MWlzNjh6Y3cxMzh5Yw==",
    img: "images/jiwara.jpg"
  },
  {
    title: "Kuwehku.ID",
    desc: "Rasa tradisi yang tak pernah basi. Di Kuwehku.ID, kami menghadirkan cita rasa jajanan khas Indonesia yang otentik, hangat, dan selalu bikin rindu. Dari klepon sampai kue lapis, setiap gigitan membawa Anda pulang ke kenangan manis masa kecil. Yuk, cicipi nostalgia di setiap kue!",
    ig: "https://www.instagram.com/kuwehku.id?igsh=YnRmN21kbWFwdDNs",
    img: "images/kuwehku.jpeg"
  },
  {
    title: "L I T I",
    desc: "Berani tampil beda, tetap anggun dalam setiap langkah. L I T I menghadirkan koleksi fashion modern dengan sentuhan minimalis dan karakter kuat. Untuk kamu yang ingin tampil stylish tanpa harus berteriak — karena gaya sejati tak butuh banyak kata.",
    ig: "https://www.instagram.com/liti__________?igsh=MTRpMnVueDZndGNqbg==",
    img: "images/liti.jpg"
  }
];

// Buka Modal
function openModal(index) {
  const data = bisnisDetails[index];
  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-img").src = data.img;
  document.getElementById("modal-desc").innerText = data.desc;
  document.getElementById("modal-link").href = data.ig;
  document.getElementById("modal").style.display = "block";
}

// Tutup Modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
