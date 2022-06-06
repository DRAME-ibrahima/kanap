function main() {
    const searchParams = (new URL(document.location)).searchParams
    const orderId = searchParams.get('orderId')
    const orderElem = document.getElementById('orderId')
    orderElem.innerHTML = orderId

    /* localStorage.clear(); */
}
main();

const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || []
localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))