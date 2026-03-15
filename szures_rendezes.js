import { kartyakMegjelenit } from "./kartyak.js";

export function rendezes(lista) {
  const szuresGombElemek = document.querySelectorAll(".rendezes button");
  szuresGombElemek.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const gombSzoveg = event.target.innerText.trim(); // lekéri a gomb szövegét
      if (gombSzoveg === "Összes Állat") {
        kartyakMegjelenit(lista);
        console.log("Összes állat");
      } else {
        const szurtLista = lista.filter(function (a) {
          return a.tipus === gombSzoveg;
        });
        kartyakMegjelenit(szurtLista);
      }
    });
  });
}

export function szuresek(lista) {
  const GOMBOK = document.querySelectorAll("button");
  GOMBOK.forEach(function (button) {
    button.addEventListener("click", function (event) {
      console.log(event.target.id);
      switch (event.target.id) {
        case "kor-no":
          lista.sort(function (a, b) {
            return a.atlageletkor - b.atlageletkor;
          });
          kartyakMegjelenit(lista);
          break;
        case "kor-cso":
          lista.sort(function (a, b) {
            return b.atlageletkor - a.atlageletkor;
          });
          kartyakMegjelenit(lista);
          break;
        case "nev-no":
          lista.sort(function (a, b) {
            /* if (a.fajnev>b.fajnev) {
                    return 1
                } else {
                    return -1
                } */
            return a.fajnev > b.fajnev ? 1 : -1;
          });
          kartyakMegjelenit(lista);
          break;
        case "nev-cso":
          lista.sort(function (a, b) {
            return b.fajnev > a.fajnev ? 1 : -1;
          });
          kartyakMegjelenit(lista);
          break;

        default:
          break;
      }
    });
  });
}
