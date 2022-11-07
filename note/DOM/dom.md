## ¿Qué es el DOM?
---

**DOM(Document Object Model):** no es mas que un árbol de nodos en el cual esta representado cada una de las etiquetas HTML que nosotros colocamos en nuestro proyecto.

**CSSOM(CSS Object Model):** es un conjunto de APIs que permite manipular CSS desde JavaScript. Así como el DOM (Document Object Model) es para HTML, el CSSOM (CSS Object Model) es para CSS. Permite leer y modificar el estilo de CSS de forma dinámica.

Para llegar al dom y cssom ocurre un proceso que se llama El Camino Crítico de Renderización(Critical Rendering Path) es la secuencia de pasos que el navegador realiza para convertir el HTML, CSS y JavaScript en píxeles en la pantalla.

https://static.platzi.com/media/public/uploads/slides-curso-de-manipulacion-del-dom_5388c86d-14a8-4e67-b471-c14d14b37d5f.pdf

https://caniuse.com/
Can I Use es otra excelente página para saber la compatibilidad de los navegadores con las API’s existentes.

https://developer.mozilla.org/es/

##  Web APIs modernas
---
DOM + JS = Web API

Una WEB API nos permite conectar el DOM con Javascript para que nosotros podamos (leerlo y modificarlo), actualmente existen mas de 70 web APIS y el DOM solo es una de ellas.

## Leer nodos
---

```parent.getElementById(‘id’)``` => nos permite obtener un elemento a través de su id.

```parent.getElementsByClassName(‘class’)``` => obtiene un array con todos los elementos hijos que tengan esa clase, ojo “getElementByClassName” no existe, es decir no podremos obtener solo 1 elemento con esa clase.

```parent.getElementsByTagName(‘div’)``` => con este método obtenemos una lista o “array list” con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar getElements

```parent.querySelector()``` => nos permite buscar de 3 formas, con id, clase o tagName. A diferencia de los 2 anteriores este nos devuelve 1 solo elemento, el primero que contenga el valor que se le paso. Id => (’#id’), class => (’.class’), tagName (‘div’)

```parent.querySelectorAll()``` => este método retorna una array list con todos los elementos que tengan ese selector (id, class o tagName)

Casi siempre el elemento “padre o parent” es document. ya que estamos haciendo referencia a todo el DOM, todo el documento y esto en ciertos casos nos permite evitar errores.
ejemplo:
```javascript
const button = document.querySelector(#button)
```

## NodeLists vs Array
---
La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.

## Crear y agregar
---
  
Al decir “crear nodos” nos referimos a crear elementos dentro de nuestro DOM. Para ello podemos hacer uso de:

***createElement:*** Para crear una etiqueta HTML:
```javascript
// Solo se ha creado, aún no se agrega al DOM
const etiquetaH1 = document.createElement("h1")
```
***createTextNode:*** Para crear un texto:
```javascript
// Solo se ha creado, aún no se agrega al DOM
const texto = document.createTextNode("¡Hola, Mundo!")
```
Como solo creamos, necesitamos formas de agregarlos al DOM, para ello, JavaScript nos provee de estas formas:


***parentElement.appendChild()***: Agrega un hijo al final algún elemento
```javascript
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo el nodo a insertar
const h3 = document.createElement("h3")
// Creo el texto del nodo
const texto = document.createTextNode("Hola!")
// Inserto el texto al nodo
h3.appendChild(h3)
// Inserto el nodo al padre
parentElement.appendChild(h3)
```

***parentElement.append()***: Es la evolución de appendChild, podemos agregar más de un nodo, puedes agregar texto y… no es soportado por Internet Explorer ¬¬!

Un polyfill es una adaptación del código para dar soporte a navegadores que no lo soportan, aquí está el polyfill de append:

https://developer.mozilla.org/es/docs/Web/API/ParentNode/append#polyfill
```javascript
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Agrego al elemento padre
parentElement.append("agrego un texto", document.createElement("div"))
```
***parentElement.insertBefore()***: Inserta nodos antes del elemento que le pasemos como referencia, este nodo de referencia tiene que ser un hijo DIRECTO del padre
```javascript
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo un elemento
const titulo = document.createElement("h1")
// Obtengo la referencia del elemento del que quiero insertar antes:
const referencia = document.querySelector("selector")
// ¡Lo insertamos!
parentElement.insertBefore(titulo, referencia)
```

***parentElement.insertAdjacentElement()***: Inserta nodos según las opciones que le pasemos:

- beforebegin: Lo inserta antes del nodo
- afterbegin: Lo inserta despues del nodo
- beforeend: Lo inserta antes de donde finaliza el nodo
- afterend: Lo inserta después de donde finaliza el nodo
```javascript
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo un elemento
const nodo = document.createElement("span")
parentElement.insertAdjacentElement("beforebegin", nodo)
```

