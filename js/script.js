/*asd();

function asd(){
    let select = document.querySelector('#lugar');
    
    fetch('http://localhost:55555/app/establecimientos')
    .then(res=>res.json())
    .then(data => {
        for (let index = 0; index < data.length; index++) {
            var nombre = data[index].Nombre; 
            var opt = document.createElement('option');
            opt.value = nombre; 
            opt.appendChild( document.createTextNode(nombre) );
            select.appendChild(opt); 
        }
    }).catch(err => {
    });
    
    console.log('xd')
    fetch('http://localhost:55555/app/categorias/1')
    .then(res=>res.json())
    .then(data => {
        console.log(data)
    }).catch(err => {
        
    });
}
*/
let url = "http://localhost:55555/app";
getAll();

function getAll() {
    fetch(url+'/establecimientos?size=5')
        .then(res => res.json())
        .then(data => updateBody(data))
}


function updateBody(data) {
    for (let index = 0; index < data.length; index++) {
        var id = data[index].Id;
        var nombre = data[index].Nombre;
        var descripcion = data[index].Descripcion;
        var rating = data[index].Rating;

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