let input = prompt("Tarixi 'YYYY.MM.DD daxil edin:")
let [year, month, day] = input.split(".")
let months  = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
let monthName = months[parseInt(month) - 1]
console.log(`${day} ${monthName} ${year} `)
let result = '${parseInt(day)} ${monthName} $(year)}-cu il';
alert(result);
let monthNumber = prompt("Ayin nomresini daxil edin (1-12):");
let months = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
]
let index = parseInt(monthNumber) - 1;
if (index >= 0 && index < 12) {
    console.log(`Ayin adi: ${months[index]}`);
} else {
    console.log("Daxil edilen nomre yanlisdir. Zəhmət olmasa 1-dən 12-ə qeder olan bir nomre daxil edin.");
}
