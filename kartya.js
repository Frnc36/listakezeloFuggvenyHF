export function megjelenit(articleEELEM, adat = (fajnev, tipus, atlageletkor, erdekesseg, kep,elohely)) {
  let szoveg = `<div class="kartya">
                        <div class="kartya-keret">
                            <h3 class="kartya-fajnev">${adat.fajnev}</h3>
                            <img class="kartya-kep" src="${adat.kep}" alt="Kartya kep">
                            <p class="kartya-tipus">${adat.tipus}</p>
                            <p class="kartya-elohely">${adat.elohely}</p>
                            <p class="kartya-eletkor">Átlagos életkor: ${adat.atlageletkor}</p>
                            <p class="kartya-erdekesseg">${adat.erdekesseg}</p>
                        </div>
                </div>`;
  articleEELEM.innerHTML += szoveg;
}