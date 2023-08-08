const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Diseño-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
const btnbuscar = document.getElementById('buscar');
const divcontenido = document.getElementById('contenedor');
const tcasas = document.getElementById('totalcasas');
function mostrartodo() {
  resultadobusqueda(propiedadesJSON);
  contador(propiedadesJSON.length);
}
function contador(count) {
  tcasas.textContent = `${count}`;
}
function resultadobusqueda(valores){
  let contenidoHTML = '';
 valores.length;
  if(valores == 0){
    divcontenido.innerHTML = `<h1>Lo sentimos, no tenemos inmobiliarias con esas acaracteristicas</h1>`;
  }else{
    valores.forEach(property => {
     contenidoHTML += `
        <div class="propiedad">
          <div class="img" style="background-image: url('${property.src}')" alt="${property.name}"></div>
          <section>
            <h5>${property.name}</h5>
            <div class="d-flex justify-content-between">
              <p>Cuartos: ${property.rooms}</p>
              <p>Metros:  ${property.m}m²</p>
            </div>
            <p class="my-3">${property.description}</p>
            <button class="btn btn-info ">Ver más</button>
          </section>
        </div>`;
    });
    divcontenido.innerHTML = contenidoHTML;
    contador(valores.length);
  }
} 
btnbuscar.addEventListener('click', function (event) {
  event.preventDefault();
  const cuartos = parseInt(document.getElementById('cuartos').value);
  const valor1 = parseInt(document.getElementById('valor1').value);
  const valor2 = parseInt(document.getElementById('valor2').value);
  if(cuartos == null || valor1 == null || valor2 == null){
    alert("no debe tener campos vacios");
  }else{
    if(isNaN(cuartos) || isNaN(valor1) || isNaN(valor2) || cuartos < 0 || valor1 < 0 || valor2 < 0){
    alert("ingrese numeros validos");
    }else{
      const filtrararray = propiedadesJSON.filter(property => {
        return property.rooms >= cuartos && property.m >= valor1 && property.m <= valor2;
      });
      console.log(filtrararray);
      resultadobusqueda(filtrararray);
    }
  }
});

window.onload = mostrartodo;