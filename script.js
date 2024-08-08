function calculatePeRatio(peRatio, industryRatio) {
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

    return { resultText, resultClass, emoji };
}

function calculatePbRatio(pbRatio) {
    let resultText;
    let resultClass;
    let emoji;

    if (pbRatio < 2) {
        resultText = 'GOOD';
        resultClass = 'result-undervalued';
        emoji = '📈';
    } else if (pbRatio >= 2 && pbRatio < 5) {
        resultText = 'DECENT';
        resultClass = 'result-decent';
        emoji = '🙂';
    } else {
        resultText = 'BAD';
        resultClass = 'result-overvalued';
        emoji = '😞';
    }

    return { resultText, resultClass, emoji };
}

function calculateMetrics() {
    const stockPeRatio = document.getElementById('stockPeRatio').value;
    const industryPeRatio = document.getElementById('industryPeRatio').value;
    const pbRatio = document.getElementById('pbRatio').value;

    if (!stockPeRatio || !industryPeRatio || !pbRatio) {
        alert('Please enter all the required ratios.');
        return;
    }

    const peRatioResult = calculatePeRatio(parseFloat(stockPeRatio), parseFloat(industryPeRatio));
    const pbRatioResult = calculatePbRatio(parseFloat(pbRatio));

    document.getElementById('peResult').textContent = `${peRatioResult.resultText} ${peRatioResult.emoji}`;
    document.getElementById('peResult').className = peRatioResult.resultClass;

    document.getElementById('pbResult').textContent = `${pbRatioResult.resultText} ${pbRatioResult.emoji}`;
    document.getElementById('pbResult').className = pbRatioResult.resultClass;
}

function clearForm() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('peResult').textContent = '';
    document.getElementById('pbResult').textContent = '';
}
