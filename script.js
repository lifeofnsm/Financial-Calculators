function calculatePeRatio() {
    const stockPeRatio = document.getElementById('stockPeRatio').value;
    const industryPeRatio = document.getElementById('industryPeRatio').value;

    if (!stockPeRatio || !industryPeRatio) {
        alert('Please enter both Stock P/E Ratio and Industry P/E Ratio.');
        return;
    }

    const peRatio = parseFloat(stockPeRatio);
    const industryRatio = parseFloat(industryPeRatio);
    let resultText;
    let resultClass;
    let emoji;

    if (peRatio >= 2 * industryRatio) {
        resultText = 'Overvalued';
        resultClass = 'result-overvalued';
        emoji = '😞';
    } else if (peRatio < industryRatio) {
        resultText = 'Good';
        resultClass = 'result-undervalued';
        emoji = '📈';
    } else {
        resultText = 'Decent Valuation';
        resultClass = 'result-decent';
        emoji = '🙂';
    }

    const peResultElement = document.getElementById('peResult');
    peResultElement.textContent = `${resultText} ${emoji}`;
    peResultElement.className = resultClass;
}
