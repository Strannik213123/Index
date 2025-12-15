
capitalizeWords("hello world from pss.js");
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world from pss.js")); 
numCounter([1, 2, 2, 3, 4, 4, 4, 5]);
function numCounter(arr) {
    const count = {};   
    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    }
    );
    return count;
} 
console.log(numCounter([1, 2, 2, 3, 4, 4, 4, 5]));
isvalidnumber("+7123-456-78902");
function isvalidnumber(phone) {
    const regex = /^\+7\d{3}-\d{3}-\d{5}$/;
    return regex.test(phone);
}
console.log(isvalidnumber("+7123-456-78902"));
