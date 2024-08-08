function calculatePE() {
    const marketValue = document.getElementById('marketValue').value;
    const earnings = document.getElementById('earnings').value;
    const peRatio = marketValue / earnings;
    document.getElementById('peResult').textContent = `P/E Ratio: ${peRatio.toFixed(2)}`;
}
