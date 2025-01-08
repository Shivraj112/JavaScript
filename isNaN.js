function detectSpecialNumber(number) {
    if (number === Infinity) return "Infinity";
    if (number === -Infinity) return "-Infinity";
    if (isNaN(number)) return "NaN";
    return "Regular number";
}

console.log(detectSpecialNumber(100));