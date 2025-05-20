async function processImage() {
  const input = document.getElementById("imageInput");
  const file = input.files[0];
  if (!file) return alert("Please select an image first");

  const reader = new FileReader();
  reader.onload = async () => {
    const base64Image = reader.result.split(",")[1];
    document.getElementById("results").innerHTML = "Processing...";

    try {
      const response = await fetch("https://detect.roboflow.com/fruit-veg-detector/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer YOUR_ROBOFLOW_API_KEY"
        },
        body: JSON.stringify({ image: base64Image })
      });
      const result = await response.json();
      showResults(result.predictions);
    } catch (err) {
      console.error(err);
      document.getElementById("results").innerHTML = "Error calling AI detection.";
    }
  };
  reader.readAsDataURL(file);
}

function showResults(predictions) {
  const results = document.getElementById("results");
  results.innerHTML = "<h2>Detected Items</h2>";

  if (!predictions.length) {
    results.innerHTML += "<p>No items detected.</p>";
    return;
  }

  predictions.forEach(pred => {
    const name = pred.class.toLowerCase();
    const data = fruitVegDb[name];
    let html = `<div class="item"><strong>${name}</strong>`;

    if (data) {
      const vol = data.volume_cm3;
      const boxVol = 60 * 40 * 19;
      const fit = Math.floor(boxVol / vol);
      html += `<br/>Avg volume: ${vol} cm³`;
      html += `<br/>Fits in box: ~${fit} pcs`;
    } else {
      html += `<br/>No size data available.`;
    }

    html += `</div>`;
    results.innerHTML += html;
  });
}
