//ARRAYS DE OBJETOS CON TODOS LOS AUTOS EN PROMOCIÓN
const autos = [
    {marca: 'bmw',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco'},
    {marca: 'audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro'},
    {marca: 'ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco'},
    {marca: 'audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro'},
    {marca: 'bmw', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo'},
    {marca: 'chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo'},
    {marca: 'ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo'},
    {marca: 'dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco'},
    {marca: 'audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro'},
    {marca: 'dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo'},
    {marca: 'bmw', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco'},
    {marca: 'ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro'},
    {marca: 'dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul'},
    {marca: 'bmw', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco'},
    {marca: 'bmw', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro'},
    {marca: 'audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul'}
    ];


window.onload = function(){
 //1.COLOCÁ ACÁ EL CÓDIGO PARA SETEAR TODOS LOS AUTOS EN PROMOCIÓN
   mostrarAutos()     
}

const card = document.querySelector('#cards')
mostrarAutos = () => {
  autos.forEach(auto => {
    card.innerHTML += ` <div class="col-sm-4 mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Marcas: ${auto.marca}</h5>
        <p class="card-text">Modelo: ${auto.modelo} - Color ${auto.color}</p>
        <p class="h6">Precio ----> $${auto.precio}</p>
        <a href="#" class="btn btn-warning">Mas info +</a>
      </div>
    </div>
  </div>`
  })
}
//2.CREA UNA FUNCIÓN ACÁ PARA FILTRAR LOS AUTOS POR MARCA

const filtro = document.querySelector('#filtro')

const filtrarAutos = (event) => {
  event.preventDefault()
  card.innerHTML=''
  const autosFiltrados = autos.filter( auto => (
    auto.marca === filtro.value.toLowerCase()
))

  autosFiltrados.forEach(auto => (
    card.innerHTML += ` <div class="col-sm-4 mt-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Marcas: ${auto.marca}</h5>
          <p class="card-text">Modelo: ${auto.modelo} - Color ${auto.color}</p>
          <p class="h6">Precio ----> $${auto.precio}</p>
          <a href="#" class="btn btn-warning">Mas info +</a>
        </div>
      </div>
    </div>`
))}