function getResultTextAndClass(value, thresholds, labels) {
    if (value >= thresholds[1]) {
        return { text: labels[0], className: 'result-good', score: 3 };
    } else if (value >= thresholds[0] && value < thresholds[1]) {
        return { text: labels[1], className: 'result-decent', score: 1 };
    } else {
        return { text: labels[2], className: 'result-bad', score: 0 };
    }
}

function updateMarketCapResult() {
    const marketCap = parseFloat(document.getElementById('marketCap').value);
    if (!isNaN(marketCap)) {
        let text, className;
        if (marketCap > 100000) {
            text = 'LARGE';
            className = 'result-large';
        } else if (marketCap >= 20000 && marketCap <= 100000) {
            text = 'MID';
            className = 'result-mid';
        } else {
            text = 'SMALL';
            className = 'result-small';
        }
        document.getElementById('marketCapResult').textContent = text;
        document.getElementById('marketCapResult').className = className;
    }
}

function updatePeResult() {
    const stockPeRatio = parseFloat(document.getElementById('stockPeRatio').value);
    const industryPeRatio = parseFloat(document.getElementById('industryPeRatio').value);
    if (!isNaN(stockPeRatio) && !isNaN(industryPeRatio)) {
        let text, className;
        if (stockPeRatio < industryPeRatio) {
            text = 'GOOD';
            className = 'result-good';
        } else if (stockPeRatio > 2 * industryPeRatio) {
            text = 'BAD';
            className = 'result-bad';
        } else {
            text = 'DECENT';
            className = 'result-decent';
        }
        document.getElementById('peResult').textContent = text;
        document.getElementById('peResult').className = className;
        document.getElementById('peResult').dataset.score = (text === 'GOOD' ? 3 : text === 'DECENT' ? 1 : 0);
    }
}

function updatePbResult() {
    const pbRatio = parseFloat(document.getElementById('pbRatio').value);
    if (!isNaN(pbRatio)) {
        let text, className;
        if (pbRatio < 2) {
            text = 'GOOD';
            className = 'result-good';
        } else if (pbRatio >= 2 && pbRatio <= 5) {
            text = 'DECENT';
            className = 'result-decent';
        } else {
            text = 'BAD';
            className = 'result-bad';
        }
        document.getElementById('pbResult').textContent = text;
        document.getElementById('pbResult').className = className;
        document.getElementById('pbResult').dataset.score = (text === 'GOOD' ? 3 : text === 'DECENT' ? 1 : 0);
    }
}

function updateDeResult() {
    const deRatio = parseFloat(document.getElementById('deRatio').value);
    if (!isNaN(deRatio)) {
        let text, className;
        if (deRatio < 1) {
            text = 'GOOD';
            className = 'result-good';
        } else if (deRatio >= 1 && deRatio < 2) {
            text = 'DECENT';
            className = 'result-decent';
        } else {
            text = 'BAD';
            className = 'result-bad';
        }
        document.getElementById('deResult').textContent = text;
        document.getElementById('deResult').className = className;
        document.getElementById('deResult').dataset.score = (text === 'GOOD' ? 3 : text === 'DECENT' ? 1 : 0);
    }
}

function updatePegResult() {
    const pegRatio = parseFloat(document.getElementById('pegRatio').value);
    if (!isNaN(pegRatio)) {
        let text, className;
        if (pegRatio < 1) {
            text = 'GOOD';
            className = 'result-good';
        } else if (pegRatio >= 1 && pegRatio <= 2) {
            text = 'DECENT';
            className = 'result-decent';
        } else {
            text = 'BAD';
            className = 'result-bad';
        }
        document.getElementById('pegResult').textContent = text;
        document.getElementById('pegResult').className = className;
        document.getElementById('pegResult').dataset.score = (text === 'GOOD' ? 3 : text === 'DECENT' ? 1 : 0);
    }
}

function updateRoeResult() {
    const roe = parseFloat(document.getElementById('roe').value);
    if (!isNaN(roe)) {
        let text, className;
        if (roe > 20) {
            text = 'GOOD';
            className = 'result-good';
        } else if (roe >= 10 && roe <= 20) {
            text = 'DECENT';
            className = 'result-decent';
        } else {
            text = 'BAD';
            className = 'result-bad';
        }
        document.getElementById('roeResult').textContent = text;
        document.getElementById('roeResult').className = className;
        document.getElementById('roeResult').dataset.score = (text === 'GOOD' ? 3 : text === 'DECENT' ? 1 : 0);
    }
}

function updateRoceResult() {
    const roce = parseFloat(document.getElementById('roce').value);
    if (!isNaN(roce)) {
        let text, className;
        if (roce > 20) {
            text = 'GOOD';
            className = 'result-good';
        } else if (roce >= 10 && roce <= 20) {
            text = 'DECENT';
            className = 'result-decent';
        } else {
            text = 'BAD';
            className = 'result-bad';
        }
        document.getElementById('roceResult').textContent = text;
        document.getElementById('roceResult').className = className;
        document.getElementById('roceResult').dataset.score = (text === 'GOOD' ? 3 : text === 'DECENT' ? 1 : 0);
    }
}

function updateNetCashFlowResult() {
    const netCashFlow = parseFloat(document.getElementById('netCashFlow').value);
    if (!isNaN(netCashFlow)) {
        let text, className;
        if (netCashFlow > 0) {
            text = 'GOOD';
            className = 'result-good';
        } else if (netCashFlow === 0) {
            text = 'DECENT';
            className = 'result-decent';
        } else {
            text = 'BAD';
            className = 'result-bad';
        }
        document.getElementById('netCashFlowResult').textContent = text;
        document.getElementById('netCashFlowResult').className = className;
        document.getElementById('netCashFlowResult').dataset.score = (text === 'GOOD' ? 3 : text === 'DECENT' ? 1 : 0);
    }
}

function calculateSummary() {
    const scores = [
        document.getElementById('peResult').dataset.score,
        document.getElementById('pbResult').dataset.score,
        document.getElementById('deResult').dataset.score,
        document.getElementById('pegResult').dataset.score,
        document.getElementById('roeResult').dataset.score,
        document.getElementById('roceResult').dataset.score,
        document.getElementById('netCashFlowResult').dataset.score
    ].map(Number);

    if (scores.includes(NaN) || scores.includes(undefined)) {
        alert('Please enter all the required metrics to calculate the summary.');
        return;
    }

    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const confidenceRating = (totalScore / (scores.length * 3)) * 100;

    const stockSymbol = document.getElementById('symbol').value.trim().toUpperCase();
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);
    const pegRatio = parseFloat(document.getElementById('pegRatio').value);

    if (isNaN(currentPrice) || isNaN(pegRatio)) {
        alert('Please enter all the required details to calculate the summary.');
        return;
    }

    const pegValue = currentPrice / pegRatio;
    const realValue = pegValue * (1 + confidenceRating / 100);
    const isPotentialForGrowth = realValue > currentPrice;
    const timesDifference = isPotentialForGrowth 
        ? (realValue / currentPrice).toFixed(2)
        : (currentPrice / realValue).toFixed(2);

    const valuationStatement = isPotentialForGrowth
        ? `${stockSymbol} has Potential for Growth (Approximately till ${realValue.toFixed(2)}). Room for growth is ${timesDifference} times.`
        : `${stockSymbol} is Priced High. You are paying ${timesDifference} times extra now (Real Value is Approximately ${realValue.toFixed(2)}).`;

    document.getElementById('summaryResult').innerHTML = `
        <p class="confidence-rating">Confidence Rating: ${confidenceRating.toFixed(2)} / 100</p>
        <p class="valuation">${valuationStatement}</p>
    `;

    const summarySection = document.getElementById('summarySection');
    summarySection.className = `summary-section ${isPotentialForGrowth ? 'undervalued' : 'overvalued'}`;
    summarySection.style.display = 'block';
}


function clearForm() {
    document.getElementById('calculatorForm').reset();
    document.querySelectorAll('.result').forEach(result => {
        result.textContent = '';
        result.className = 'result';
        delete result.dataset.score;
    });
    document.getElementById('summaryResult').innerHTML = '';
    document.getElementById('summarySection').style.display = 'none';
    document.getElementById('summarySection').className = 'summary-section';
    
    // Clear Stock Symbol and Last Traded Price input fields
    document.getElementById('symbol').value = '';
    document.getElementById('currentPrice').value = '';

    // Clear all specific result elements
    const resultIds = [
        'marketCapResult', 'peResult', 'pbResult', 'deResult',
        'pegResult', 'roeResult', 'roceResult', 'netCashFlowResult'
    ];
    resultIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = '';
            element.className = 'result';
        }
    });
}

document.getElementById('stockPeRatio').addEventListener('blur', updatePeResult);
document.getElementById('industryPeRatio').addEventListener('blur', updatePeResult);
document.getElementById('pbRatio').addEventListener('blur', updatePbResult);
document.getElementById('deRatio').addEventListener('blur', updateDeResult);
document.getElementById('pegRatio').addEventListener('blur', updatePegResult);
document.getElementById('roe').addEventListener('blur', updateRoeResult);
document.getElementById('roce').addEventListener('blur', updateRoceResult);
document.getElementById('netCashFlow').addEventListener('blur', updateNetCashFlowResult);
document.getElementById('currentPrice').addEventListener('blur', calculateSummary);
