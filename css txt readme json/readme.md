# Webáruház

## Specifikáció

1. A publikus felületen div-ekben jelenítsük meg az adatokat.
2. Reszponzív oldal
3. Az oldalon legyen szűrési lehetőség, pl: keresés névben, leírásban, szűrés kategória szerint, bizonyos árnál olcsóbb, vagy drágább termékek.
4. Rendezési lehetőség , pl: ár szerinti növekvő vagy csökkenő
5. Kosár funkció: A publikus felületen a terméket helyezheted a kosárba. A kosarat táblázatos formában jelenítsd meg.
6. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
7. ++ Lehet, hogy szükséged lesz a localStorage használatára. 
8. ++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
9. ++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket. A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.



## Alkalmazott függvények

**fuggvenyneve(par1,par2)->visszateresiErtek**:
1. kartyaOsszeallit(lista)->txt - összeállítja a html kódot szöveges formátumban, minden kártyban legyen egy kosár!
2. megjelenites(txt, htmlElem)->nincs - megjelníti egy html szoveget egy html elemben

4. szuresNevSzerint(lista, szurtSzoveg) -> szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó. 


5. kartyakatRendez(lista) -> rendezett lista :  akkor hívódik meg, ha a rendezés leugördülő mezőre kattintunk. 
6. kosarbaRakas(objektum,lista) -> kosar lista :  a termék listából egy adott termék adatait (objektum) belerakjuk a kosár listába
7. kosarOsszeallit(kosarLista) -> txt : egy táblázatba megjelenítjük a kosárba rakott termékek adatait
8. termekTorlesKosarbol(lista, index) - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.
9. kosarElemModositas() - a kosárban lévő termékek számát növelni 
