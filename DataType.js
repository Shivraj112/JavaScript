function identifyDataType(value) {
    if (value === null) return "Null";
    if (Array.isArray(value)) return "Array";
    return typeof value;
}

console.log(identifyDataType("shiva"));