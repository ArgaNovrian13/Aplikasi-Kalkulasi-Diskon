const form = document.getElementsByTagName("form")[0];
const hasilDiskon = document.getElementById("hasilDiskon");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hargaAsli = parseFloat(document.getElementById("hargaAsli").value);
  const jenisDiskon = document.getElementById("jenisDiskon").value;
  const besaranDiskon = parseFloat(
    document.getElementById("besaranDiskon").value
  );

  let hargaSetelahDiskon;

  if (jenisDiskon === "Persentase") {
    const hitungDiskon = hargaAsli * (besaranDiskon / 100);
    hargaSetelahDiskon = hargaAsli - hitungDiskon;
  } else if (jenisDiskon === "Nominal") {
    hargaSetelahDiskon = hargaAsli - besaranDiskon;
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedDiskon = formatter.format(hargaSetelahDiskon);
  hasilDiskon.innerHTML = formattedDiskon;
});
