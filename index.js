console.log('Я учу Javascript!');

let cat1 = document.getElementById("cat1");
let cat2 = document.getElementById("cat2");

function showCat1() {
cat1.style.display = "flex"
cat2.style.display = "none"
}

function showCat2() {
    cat1.style.display = "none"
    cat2.style.display = "flex"
}