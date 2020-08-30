function changeBg() {
 let color = ['Blue', 'Red','Pink','Yellow','Grey','Orange'];
 let num = Math.floor(Math.random() * color.length);

 var bgColor = color[num];
console.log(bgColor);
document.body.style.background = bgColor;
}
changeBg();
