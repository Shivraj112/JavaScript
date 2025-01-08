function showScope() {
    let city = "Mumbai";
    var country = "India";

    console.log("City:", city);
    console.log("Country:", country);
}

showScope();

console.log("Outside function, City", city);
console.log("Outside function, Country:", country);