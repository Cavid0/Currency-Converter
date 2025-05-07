let qr;

function generateQRCode() {
  const container = document.getElementById("qrcode");
  const text = document.getElementById("text").value;

  container.innerHTML = ""; // Köhnə QR silinsin

  if (text.trim() === "") {
    alert("Zəhmət olmasa mətn və ya URL daxil et.");
    return;
  }

  qr = new QRCode(container, {
    text: text,
    width: 200,
    height: 200
  });
}

function clearQRCode() {
  document.getElementById("qrcode").innerHTML = "";
  document.getElementById("text").value = "";
}

function downloadQRCode() {
  const qrImg = document.querySelector("#qrcode img");

  if (!qrImg) {
    alert("Əvvəlcə QR kod yaradın!");
    return;
  }

  const link = document.createElement("a");
  link.href = qrImg.src;
  link.download = "qr-code.png";
  link.click();
}