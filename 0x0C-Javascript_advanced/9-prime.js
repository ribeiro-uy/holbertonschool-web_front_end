let start = performance.now()
function countPrimeNumbers() {
    counter = 0;
    for (let i = 2; i <= 100; i++) {
        if (i == 2) {
            counter++;
        }
        for (let n = 2; n < i; n++) {
            if (i % n == 0) {
                break
            }
            else if (n + 1 < i) { }
            else {
                counter++;
            }
        }
    }
    return counter;
}
result = countPrimeNumbers();
let end = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (end - start) + ' milliseconds.');
