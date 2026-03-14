export function megjelenit(articleEELEM, adat = (fajnev, tipus, atlageletkor, erdekesseg, kep)){
    let szoveg = `<div class="kartya">
                <img class="card-img-top" src="${adat.kep}" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">${adat.fajnev}</h4>
                    <p class="card-text">${adat.tipus}</p>
                    <p class="card-text">${adat.atlageletkor}</p>
                    <p class="card-text">${adat.erdekesseg}</p>
                </div>
            </div>`;
    articleEELEM.innerHTML += szoveg;
};