




export function tablazatRendez(lista, irany) {
  // !!!!!! console.log("lista1:",lista);  //ezt még javtani kell!!!!
    lista.sort(function (a, b) {
      
      return a.nev.toUpperCase() > b.nev.toUpperCase()
        ? 1 * irany
        : -1 * irany; /*  pozitív, vagy negatív érték kell */
        
    });
  
    return lista;
  }















// Cseréljük le az Á és É karaktereket A-ra és E-re, majd az összes karaktert kisbetűvé alakítjuk

function csupaszSzoveg(szoveg) {
  return szoveg
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}


export function szuresNevSzerint(lista, szurtSzoveg) {
  const elokeszitettSzoveg = csupaszSzoveg(szurtSzoveg);
  
  const SZURTLiSTA = lista.filter(function(elem) {
    const keszSzoveg = csupaszSzoveg(elem.nev);
    return keszSzoveg.includes(elokeszitettSzoveg);
  });

  return SZURTLiSTA;
}
