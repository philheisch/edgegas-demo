function calculateCNG() {
    const vehicles = parseInt(document.getElementById('vehicles').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const pressure = parseFloat(document.getElementById('pressure').value);

    if (isNaN(vehicles) || isNaN(volume) || isNaN(pressure)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    const totalGas = vehicles * volume * (1 - pressure / 200);
    const nozzles = Math.ceil(totalGas / 600);
    const compressors = Math.ceil(totalGas / 800);

    document.getElementById('result').innerHTML = `
        <strong>Estimated Results:</strong><br>
        Total Gas Flow Needed: ${Math.round(totalGas)} L/h<br>
        Required Nozzles: ${nozzles}<br>
        Compressors (800 Nm³/h): ${compressors}
    `;
}
