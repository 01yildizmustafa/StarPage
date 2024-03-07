const yıldızlarEl = document.getElementById("yildizlar");

function rastgeleYıldızOluştur() {
  const yıldız = document.createElement("div");
  yıldız.classList.add("yildiz");

  // Tüm sayfayı kapsayacak şekilde rastgele koordinatlar oluştur
  const x = Math.random() * (window.innerWidth - 20) + 10;
  const y = Math.random() * (window.innerHeight - 20) + 10;

  yıldız.style.left = `${x}px`;
  yıldız.style.top = `${y}px`;

  // Rastgele yanıp sönme efekti için setInterval kullan
  const interval = setInterval(() => {
    yıldız.classList.toggle("yanip-sön");
  }, Math.random() * 2000 + 1000);

  yıldızlarEl.appendChild(yıldız);
}

for (let i = 0; i < 1000; i++) {
  rastgeleYıldızOluştur();
}
