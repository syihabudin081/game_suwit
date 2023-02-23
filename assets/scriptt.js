function hasilKom() {
  // mengenerate nilai random
  let r = Math.random();
  // menentukan nilai suwit
  if (r < 0.3) return "rock";
  else if (0.3 <= r && r <= 0.6) return "scissor";
  else return "paper";
}




const pilihan = document.querySelectorAll(".image img");
pilihan.forEach(function (e) {
  e.addEventListener("click", function () {
    for ( i = 0; i < pilihan.length; i++ ) {
      pilihan[i].style.border = '';
   }

   const imgComp = document.querySelector('.pilkom')
   imgComp.setAttribute('src', 'assets/' + 'mark.png')
   const result = document.getElementById("result");
   result.innerHTML = "";


    let a = e.className;
    e.style.border="2px solid #31087B";
    let b = hasilKom();
    let c = ruleGame(a, b);
    hasil(b,c);
  });
});

function hasil(b,c) {
    
   

    const hasil = document.getElementById("button");
hasil.onclick = function () {
    const imgComp = document.querySelector('.pilkom')
    imgComp.setAttribute('src', 'assets/' + b + '.png')
  const result = document.getElementById("result");
  result.innerHTML = c;
};
}



function ruleGame(p, x) {
  if (p == x) return "Seri";
  else if (p == "rock") return x == "scissor" ? "Menang" : "Kalah";
  else if (p == "scissor") return x == "rock" ? "Kalah" : "Menang";
  else if (p == "paper") return x == "rock" ? "Menang" : "Kalah";
}
