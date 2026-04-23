/*let count = 0;
function cart() {
    count = count + 1;
    document.getElementById('spn').innerText = count;

}
let count2 = 0;
function cart2() {
    count2++;
    document.getElementById('spn2').innerText = count2;

}
let count3 = 0;
function cart3() {
    count3++;
    document.getElementById('spn3').innerText = count3;

}
let totalCount = 0;
function addToCart() {
    totalCourt++;
    document.getElementById('c-c').innerText = totalCount;
}
function goToCart() {
    window.location.href = "cart1.html";
}*/
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("item added to cart!");
}
function addProduct() {
    let product = [
        {
            id: 1,
            title: "Non Transfer waterproof Longlast Sensational Liquid and Lipsticks(Multicolor,16 ml)",
            image: "image/lipstick.jpg",
            price: 55.00,
            originalPrice: 60.00,
            discount: 5.00,
            quantity: 1,
            size: "Medium",
            color: "red",
            stock: 15,
            seller: "Fashion Hub",
            selected: true
        },
        {
            id: 2,
            title: "kurta with dupatta and bottomwear",
            image: "image/dress.jpg",
            price: 450.00,
            originalPrice: 500.00,
            discount: 10,
            quantity: 1,
            size: "M",
            color: "pink and white",
            stock: 5,
            seller: "Glamour Boutique",
            selected: true
        },
        {
            id: 3,
            title: "north zone lightweight college bag",
            image: "image/bag.jpg",
            price: 570,
            originalPrice: 500,
            discount: 30,
            quantity: 1,
            size: "meduim",
            color: "White and blue",
            stock: 23,
            seller: "Comfort Wear Co.",
            selected: true
        }
    ];
}
