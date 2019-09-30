/*asd();

function asd(){
    let select = document.querySelector('#lugar');
    
    fetch('http://localhost:55555/app/ciudades')
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