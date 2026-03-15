export function atlagEletkor(lista) {
  let osszeg = 0;
  for (let index = 0; index < lista.length; index++) {
    osszeg += lista[index].atlageletkor;
  }

  console.log("Össz év: " + osszeg);
  console.log("Darab: " + lista.length);
  console.log("Átlagéletkor: " + osszeg / lista.length);

  return osszeg / lista.length;
}

export function atlagEletkorMegjelenit(atlageletkor) {
  let atlageletkorElem = document.querySelector(".atlageletkor");
  atlageletkorElem.innerHTML = `Átlagéletkor: ${Math.round(atlageletkor)} év`;
  atlageletkorElem.style.color = "rgb(49, 42, 255)"; 
}
