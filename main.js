


//import { termekekLISTA } from "./adat.js";
import { megjelenites, tablazatOsszeallit } from "./fuggvenyek.js";
import { tablazatRendez, szuresNevSzerint } from "./adatkezelo.js";
import { getAdat } from "./aszinkron.js";



let termekekLISTA = [];
let nevIrany = 1;

//getAdat("adat.json",init)
getAdat("http://localhost:3000/termekekLISTA",init)



//init(termekekLISTA);
//nevRendezEsemeny();
//nevSzuresEsemeny();


export function init(lista) {
  termekekLISTA = lista; // Store the fetched data
  console.log("Fetched Data:", lista); // Add this line
  let txt = tablazatOsszeallit(lista);  //txt = középső része a weboldalnak / termék tábázat
  megjelenites(txt);
  nevRendezEsemeny(lista);
}


//init(termekekLISTA)
//console.log("Fetched Data2:", termekekLISTA); // Add this line






function nevRendezEsemeny(lista) {

  $(".termekek .kulso .belso").each(function() {
    const h2szoveg = $(this).find("h2").text();
  });

  $(".rendezes").on("click", function() {
    const LISTA = tablazatRendez(lista, nevIrany);
    nevIrany *= -1;
    init(LISTA);
  });
}












function nevSzuresEsemeny() {

  const szuroELEM = $("#termekNev");
  szuroELEM.on("keyup", function () {
    let szuroSZoveg = szuroELEM.val();
    const LISTA = szuresNevSzerint(termekekLISTA, szuroSZoveg);
    init(LISTA);
  });
}









