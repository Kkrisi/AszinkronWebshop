



export function tablazatOsszeallit(lista) {

    let txt = "";
    txt += "<div class='col-md-7 row kulso'>";


    lista.forEach((element,i) => {

        txt += `<div class='col-md-4 border rounded-3 card belso'>
                      <h2 class='text-success border-bottom polocim card-header'>${element.nev}</h2>
                      <img class='border rounded-3 polokep p-1 card-body' src='${element.kep}'>
                      <br>

                      <div class='poloszoveg'>
                          <button>S</button>
                          <button>M</button>
                          <button>L</button>
                          <button>XL</button>
                          <button>XXL</button>

                          <p>'${element.leiras}'</p>
                      </div>

                      <div class='container mt-3 border-top ardiv p-2 card-footer'>
                          <p class='ar'>Ár: '${element.ar}' Ft</p>
                        <button type='button' class='btn btn-success text-warning bg-success btn-primary border-2 btn-outline-dark kosar' data-bs-toggle="modal" id="${i}" data-bs-target="#myModal2">Kosárba 🛒</button>   
                      </div>

                </div>`;
                    
    });

    txt += "</div>";
    return txt;
  }
  




  export function megjelenites(txt) {
    const termekekELEM = $(".termekek");
    termekekELEM.html(txt);
  }









