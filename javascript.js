// let array = [2, 4, 6, 8, 10]


function findMinMax() {
    let inputArray = document.getElementById('inputArray').value.split(',').map(Number);

    if (inputArray.length === 0 || inputArray.some(isNaN)){
        console.error('Please enter a valid number array');
        return;
    }

    let min = Math.min(...inputArray);
    let max = Math.max(...inputArray);

    document.getElementById('min').textContent = min;
    document.getElementById('max').textContent = max;
}