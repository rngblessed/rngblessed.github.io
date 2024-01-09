function getSum(el) {
    let product = document.getElementsByName("product");
    let input = document.getElementById("input");
    let prices = [1, 5, 10];
    if (input.value.match(/[0-9]/g) != input.value) {
        alert("Числовое поле не соответствует числу");
    }
    else {
        let result = input.value * prices[product[0].value - 1];
        let r = document.getElementById("result");
        r.innerHTML = result;
    }
    return false;
}

function clearPage() {
    window.location.reload();
    return false;
}