console.log("page loading...");


var likes = [9, 12, 9];
var spans = [
    document.querySelector("#span-1"),
    document.querySelector("#span-2"),
    document.querySelector("#span-3")
];

function like(elemento) {
    likes[elemento]++;
    spans[elemento].innerHTML = likes[elemento] + "like(s)";
}