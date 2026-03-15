export function megjelenit(
  articleEELEM,
  adat = (fajnev, tipus, atlageletkor, erdekesseg, kep),
) {
  let szoveg = `<div class="kartya">
                        <div class="kartya-keret">
                            <h4 class="kartya-fajnev">${adat.fajnev}</h4>
                            <img class="kartya-kep" src="${adat.kep}" alt="Kartya kep">
                            <p class="kartya-tipus">${adat.tipus}</p>
                            <p class="kartya-eletkor">Átlagos életkor: ${adat.atlageletkor}</p>
                            <p class="kartya-erdekesseg">${adat.erdekesseg}</p>
                        </div>
                </div>`;
  articleEELEM.innerHTML += szoveg;
}