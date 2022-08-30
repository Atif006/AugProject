document.querySelector("#calculate").addEventListener("click", function () {
  let totalBill = Number(document.querySelector("#totalBill").value);
  let tip = Number(document.querySelector("#tipPercent").value);
  let split = Number(document.querySelector("#split").value);
  if (totalBill === 0 || tip === 0 || split === 0) {
    alert("Please Enter Valid Value ...");
    return;
  }
  let total = (totalBill * tip) / split;
  document.querySelector("#tip").textContent = total;
});
