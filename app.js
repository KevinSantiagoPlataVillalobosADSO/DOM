let win = window;
let dom = document;

let head = dom.head;
let body = dom.body;
let title = dom.title;
const btn = dom.getElementById('buton')
let header = dom.header;
// console.log(win)
//que diga buscar
let title2 = dom.querySelector('title')
let header2 = dom.querySelector('header')
let parrafo = dom.getElementsByTagName('a')
let estructura = dom.getElementsByClassName('estructura')
let lista = dom.querySelector('li.item')
let items = dom.querySelectorAll('ul.list>li.item')
let padre = dom.querySelector('ul')
documento.innerHTML = 'Que es DOM'
console.log(documento)
console.log(padre.children[2])

btn.onclick = function () {
  body.classList.toggle('bg')
}

