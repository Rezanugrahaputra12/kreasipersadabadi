const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggle.classList.toggle("open");
});

const bisnisDetails = [
  {
    title: "Leaf Hotel",
    desc: "Kami menyediakan bahan bangunan lengkap dengan kualitas tinggi dan harga bersaing untuk proyek rumah, gedung, dan industri.",
    ig: "https://www.instagram.com/leaf_hotel?igsh=MWV5cWh2MDAyaXRjYw=="
  },
  {
    title: "Jiwara Spa",
    desc: "Layanan konstruksi terpercaya mulai dari perencanaan, desain, hingga eksekusi untuk berbagai jenis bangunan.",
    ig: "https://instagram.com/bisnis2"
  },
  {
    title: "Kuwehku.ID",
    desc: "Melayani pengiriman material dan barang dengan armada luas dan sistem tracking modern.",
    ig: "https://www.instagram.com/kuwehku.id?igsh=YnRmN21kbWFwdDNs"
  },
  {
    title: "L I T I",
    desc: "Temukan produk terbaik kami di berbagai outlet resmi di seluruh Indonesia.",
    ig: "https://www.instagram.com/liti__________?igsh=MTRpMnVueDZndGNqbg=="
  }
];

function openModal(index) {
  const data = bisnisDetails[index];
  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-img").src = data.img;
  document.getElementById("modal-desc").innerText = data.desc;
  document.getElementById("modal-link").href = data.ig;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
