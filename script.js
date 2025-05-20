function showItemInfo() {
  const select = document.getElementById("itemSelect");
  const selected = select.value;
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";

  const item = fruitVegDb.find((i) => i.name === selected);
  if (item) {
    resultDiv.innerHTML = `
      <div class="item">
        <strong>${item.name}</strong><br />
        Average Dimensions: ${item.dimensions.length}cm x ${item.dimensions.width}cm x ${item.dimensions.height}cm<br />
        Box Fit: ${calculateFit(item.dimensions)}
      </div>
    `;
  }
}

function calculateFit(dim) {
  const box = { length: 60, width: 40, height: 19 };
  const fitL = Math.floor(box.length / dim.length);
  const fitW = Math.floor(box.width / dim.width);
  const fitH = Math.floor(box.height / dim.height);
  return `${fitL * fitW * fitH} items`;
}

window.onload = () => {
  const select = document.getElementById("itemSelect");
  fruitVegDb.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    select.appendChild(option);
  });
};

