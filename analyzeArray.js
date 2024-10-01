function analyzeArray(arr){
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const length = arr.length;

    return {
        average, max, min, length
    };
}
module.exports = analyzeArray;