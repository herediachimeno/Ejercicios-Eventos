let sistemaSolar = [
  {
    nombre: "mercurio",
    color: "gris",
    fondo: "grey",
    temperatura: 350,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
  },
  {
    nombre: "venus",
    color: "blanco",
    fondo: "white",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  {
    nombre: "tierra",
    color: "morado",
    fondo: "purple",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  {
    nombre: "marte",
    color: "rojo",
    fondo: "red",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  {
    nombre: "jupiter",
    color: "marrón",
    fondo: "brown",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  {
    nombre: "saturno",
    color: "amarillo",
    fondo: "yellow",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  {
    nombre: "urano",
    color: "azul",
    fondo: "blue",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  {
    nombre: "neptuno",
    color: "azul",
    fondo: "blue",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  {
    nombre: "plutón",
    color: "blanco",
    fondo: "white",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
  },
];

let planeta1;
let planeta2;
let planeta3;

function dibujarPlanetas() {
  let mostrarPlanetas = "";
  planeta1 = document.getElementById("input").value;
  planeta2 = document.getElementById("input2").value;
  planeta3 = document.getElementById("input3").value;

  if (planeta1 === planeta2 || planeta2 === planeta3 || planeta1 === planeta3) {
    return (document.getElementById("caja").innerHTML =
      "<p>Alguno de los planetas está repetido</p>");
  } else {
    for (let i = 0; i < sistemaSolar.length; i++) {
      if (
        sistemaSolar[i].nombre === planeta1 ||
        sistemaSolar[i].nombre === planeta2 ||
        sistemaSolar[i].nombre === planeta3
      ) {
        mostrarPlanetas += `
            <div id=${i}>
                <h1>${sistemaSolar[i].nombre}</h1>
                <img src=${sistemaSolar[i].imagen} />
                <p>Color: ${sistemaSolar[i].color}</p>
                <p>Temperatura: ${sistemaSolar[i].temperatura}</p>
                <button onclick="pintar(${i})">Pintar</button>
            </div>
          `;
      }
    }
  }

  document.getElementById("caja").innerHTML = mostrarPlanetas;
}

function pintar(i) {
  document.getElementById(i).style.backgroundColor = sistemaSolar[i].fondo;
}
