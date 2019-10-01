let serverOn = false; 
let url = "http://localhost:55555/app";

if(serverOn){
    getAll();
    //Falta fetch de Categorias
    //Falta fetch de Servicios
}else{
    updateBody(getEstablecimientosMock());
    updateTipoFilter(getCategoriasMock());
    updateServiciosFilter(getServiciosMock());
    updateMenuFilter(getMenuMock());
}

function getEstablecimientosMock(){
    return [
        { "Id": 1, "Nombre": "Parrilla El Tano","Descripcion": "El Tano es una parrilla con tenedor libre ubicada en Avellaneda que hace culto de la informalidad y la comida abundante. Tiene un ambiente familiar, con mesas largas y las paredes decoradas con camisetas de fútbol.", "Categorias": [ { "Id": 3, "Nombre": "Restaurant" } ], "Rating": 5, "Activo": true }, { "Id": 2, "Nombre": "La Roca", "Descripcion": "El mejor bar-boliche de todo Buenos Aires. Pasate esta noche, te va a encantar!", "Categorias": [ { "Id": 1, "Nombre": "Bar" }, { "Id": 2, "Nombre": "Boliche" } ], "Rating": 3, "Activo": true }, { "Id": 3, "Nombre": "Baires Sushi Club", "Descripcion": "Un estiloso y entretenido lugar donde encontrarás ricos tragos y una tentadora oferta de sushi para disfrutar un momento relajado y entretenido.Ubicados en el bohemio Barrio Brasil de Santiago Centro encontrarás un sitio con un ambiente vanguardista", "Categorias": [ { "Id": 1, "Nombre": "Bar" } ], "Rating": 3, "Activo": true }, { "Id": 4, "Nombre": "La Birra Bar", "Descripcion": "Desde 2001 sirviendo comida casera y las mejores hamburguesas. Prestando especial atención al servicio y poniendo dedicación en la preparación del café.", "Categorias": null, "Rating": 5, "Activo": true }]
}

function getCategoriasMock(){
    return [{"Id":1,"Nombre":"Bar"},{"Id":2,"Nombre":"Boliche"},{"Id":3,"Nombre":"Restaurant"}]
}

function getServiciosMock(){
    return [{"Id":10,"Nombre":"Aire acondicionado"},{"Id":11,"Nombre":"Cerveza artesanal"},{"Id":12,"Nombre":"Entrada gratis"},{"Id":13,"Nombre":"Estacionamiento"},{"Id":9,"Nombre":"Guardarropa"},{"Id":6,"Nombre":"Happy Hour"},{"Id":7,"Nombre":"Jenga"},{"Id":8,"Nombre":"Juegos de mesa"},{"Id":5,"Nombre":"Pool"},{"Id":4,"Nombre":"Sector fumador"},{"Id":14,"Nombre":"Show"},{"Id":3,"Nombre":"Television"},{"Id":1,"Nombre":"Tenedor libre"},{"Id":2,"Nombre":"Wifi"}]
}

function getMenuMock(){
    return [{"Id":3,"Nombre":"Celiaco"},{"Id":5,"Nombre":"Comida internacional"},{"Id":4,"Nombre":"Comida japonesa"},{"Id":6,"Nombre":"Hambuerguesa"},{"Id":9,"Nombre":"Parrilla"},{"Id":8,"Nombre":"Pasta"},{"Id":7,"Nombre":"Pizza"},{"Id":1,"Nombre":"Vegano"},{"Id":2,"Nombre":"Vegetariano"}]
}


function getAll() {
    fetch(url+'/establecimientos?size=5')
        .then(res => res.json())
        .then(data => updateBody(data))
}

function updateMenuFilter(data){
    for (let index = 0; index < data.length; index++) {
        let id = data[index].Id;
        let nombre = data[index].Nombre;
        let box = document.createElement("div")
        box.className = "custom-control custom-checkbox"
        let input = document.createElement("input")
        input.type = "checkbox"
        input.className = "custom-control-input"
        input.id = "check-menu-"+id
        input.checked = true
        let label = document.createElement("label")
        label.className = "custom-control-label"
        label.htmlFor = input.id
        label.textContent = nombre
        box.appendChild(input)
        box.appendChild(label)
        document.querySelector("#filtro_menu").appendChild(box)
    }
}


function updateServiciosFilter(data){
    for (let index = 0; index < data.length; index++) {
        let id = data[index].Id;
        let nombre = data[index].Nombre;
        let box = document.createElement("div")
        box.className = "custom-control custom-checkbox"
        let input = document.createElement("input")
        input.type = "checkbox"
        input.className = "custom-control-input"
        input.id = "check-serv-"+id
        input.checked = true
        let label = document.createElement("label")
        label.className = "custom-control-label"
        label.htmlFor = input.id
        label.textContent = nombre
        box.appendChild(input)
        box.appendChild(label)
        document.querySelector("#filtro_servicios").appendChild(box)
    }
}

function updateTipoFilter(data){
    for (let index = 0; index < data.length; index++) {
        let id = data[index].Id;
        let nombre = data[index].Nombre;
        let box = document.createElement("div")
        box.className = "custom-control custom-checkbox"
        let input = document.createElement("input")
        input.type = "checkbox"
        input.className = "custom-control-input"
        input.id = "check-tipo-"+id
        input.checked = true
        let label = document.createElement("label")
        label.className = "custom-control-label"
        label.htmlFor = input.id
        label.textContent = nombre
        box.appendChild(input)
        box.appendChild(label)
        document.querySelector("#filtro_tipo").appendChild(box)
    }
}


function updateBody(data) {
    for (let index = 0; index < data.length; index++) {
        let id = data[index].Id;
        let nombre = data[index].Nombre;
        let descripcion = data[index].Descripcion;
        let rating = data[index].Rating;

        let box = document.createElement("div")
        box.className = "row caja_consulta rounded m-1 p-1"

        let img = document.createElement("img");
        img.src = "img/bar" + id + ".jpg"
        img.className = "img-fluid"

        let imgContainer = document.createElement("div")
        imgContainer.className = "col-xs-12 col-md-6"
        imgContainer.appendChild(img)

        let descriptionContainer = document.createElement("div")
        descriptionContainer.className = "col-xs-12 col-md-6"

        let titleContainer = document.createElement("div")
        titleContainer.className = "row col"

        let title = document.createElement("h5")
        title.innerText = nombre

        titleContainer.appendChild(title)


        let ratingContainer = document.createElement("div")
        ratingContainer.className = "row col"
        let ratingImg = document.createElement("img")
        ratingImg.src = "img/estrellas-" + rating + ".png"
        ratingContainer.appendChild(ratingImg)

        let infoContainer = document.createElement("div")
        infoContainer.className = "row col"
        let info = document.createElement("p")
        info.innerText = descripcion
        infoContainer.appendChild(info)

        descriptionContainer.appendChild(ratingContainer)
        descriptionContainer.appendChild(titleContainer)
        descriptionContainer.appendChild(infoContainer)

        box.appendChild(imgContainer)
        box.appendChild(descriptionContainer)

        document.querySelector("#establecimientos").appendChild(box)
    }
}

//Para hacer despues. La paginacion que se genere bien como corresponda cantidad de paginas, seleccionado, si existe siguiente o anterior. etc
let nav = document.createElement("nav")
nav.className = "mt-3"
let ul = document.createElement("ul")
ul.className = "pagination d-flex justify-content-center"