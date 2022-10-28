# CSS Grid Layout
---
Css grid es una especificación de CSS para realizar layouts más dinámicos. Anteriormente sólo se podía usar tablas para realizar lo que ahora podemos hacer con Grid de manera mucho más sencilla. Nos permite dividir una página en áreas o regiones principales, por definir la relación en términos de tamaño, posición y capas construidas a partir de HTML

![](https://static.platzi.com/media/user_upload/image%28266%29-b7f95173-f330-4552-ad94-a04a8418afe8.jpg)

CSS Grid introdujo un sistema de grilla que es una cuadrícula con columnas (columns) y filas (rows), con ellas podemos ubicar elementos de manera más fácil.

Podemos crear, por ejemplo, un layout simple con el header, main y footer ya que cada bloque conforma un elemento de la grilla que se puede ubicar. Como los layouts pueden cambiar mucho, Grid nos ayuda a posicionar y reposicionar los elementos cuantas veces necesitemos.

Ver: https://css-tricks.com/snippets/css/complete-guide-grid/

## ***Qué es contenedor***

Es el elemento que se va a convertir en una grilla. Algo como una caja en la que vamos agregando elementos.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28268%29.png)

## ***Qué son items***

Son los elementos que están dentro del contenedor. Estos elementos pueden ser de cualquier tipo como links, botones, imágenes, etc. Todos ellos se convertirán en grid items. Esto quieres decir que por defecto van a tener propiedades que los ayudan a trabajar muy bien con nuestro sistema de grilla.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28269%29.png)

## ***Qué son líneas***

Son los elementos que limitan o dividen las filas o columnas de una grilla. Como vemos en el ejemplo, cuatro líneas dividen las tres columnas (columns), y se lee de izquierda a derecha. Tres líneas dividen las 2 filas (rows) y se enumeran de arriba hacia abajo.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28270%29.png)

## ***Qué es celda***

Es la unidad mínima que nosotros podemos tener en una grilla. Está delimitada por 4 líneas y normalmente solo ocupa 1 fila y 1 columna.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28271%29.png)

## ***Qué es track***

Es un grupo de celdas, que solo puede estar en una fila o en una misma columna.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28272%29.png)

## ***Qué es área***

Es un grupo de celdas, estas pueden usar varias filas o varias columnas a la vez.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28273%29.png)

## Propiedades del contenedor
---
***Qué es el display grid***

Define el elemento como contenedor de cuadrícula y establece un nuevo contexto de formato de cuadrícula para su contenido.
```html
<div class="contenedor">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
```
El div principal o “contenedor” va a ser el padre de nuestra grilla. Los seis div internos serán los elementos o grid items.
```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
}

.item {
    border: 5px solid #00bcd4;
    font-size: 4rem;
}
```
En nuestra hoja de estilos agregamos un color de fondo y un borde al contenedor principal, mientras que un borde y un tamaño de fuente a los elementos del contenedor.

Al renderizar el código en el navegador obtendríamos este resultado:

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28274%29.png)

Los elementos se posicionan uno debajo de otro y funciona como un solo bloque, ya que por defecto el navegador asigna un contenedor como block. Sólo con el hecho de agregar la propiedad display: grid al código de nuestro contenedor principal, el navegador ya lo interpreta como tal, a pesar de no cambiar visualmente. Vamos a generar algunas columnas.

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    display: grid;
    grid-template-columns: 100px 200px 300px ;
}
```
### ***```Grid-template-columns``` y ```grid-template-rows```***

Define las columnas y filas de la cuadrícula con una lista de valores separados por espacios. Los valores representan el tamaño de la pista y el espacio entre ellos representa la línea de la cuadrícula.

```grid-template-columns``` nos permite especificar el número de columnas y su ancho. En este caso usamos tres tamaños, cada uno 100px mayor al anterior. Vemos en el navegador que al llegar a la tercera columna, los elementos se mueven a la siguiente fila.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28275%29.png)

```grid-template-rows``` nos permite especificar el número de filas y su ancho. En este caso usamos dos tamaños, el primero de 150px y el segundo de 250px.

```css
grid-template-rows: 150px 250px;
```
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28276%29.png)

```grid-auto-``` Nos permite definir una altura a todas las columnas y filas. Es decir, si agregáramos otra columna o fila también tendría esta dimensión.

```css
grid-auto-rows: 150px;
```
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28277%29.png)

## ***```Grid-auto-flow```***

Nos permite cambiar el orden en el que están los grid items, este valor por defecto es row (fila), pero lo podemos cambiar.

```grid-auto-flow``` nos permite modificar cómo se está llenando la grilla. Cuando los elementos no entran en la cantidad de filas definidas, crea nuevas.  ```grid-auto-flow```: column crea nuevas columnas.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28278%29.png)
Como observamos, todos los elementos se han alineado en una sola fila, esto es porque no hemos definido en el código la cantidad de filas que queremos. Vamos a establecer que las filas solo tengan dos dimensiones, mientras que todas las columnas tendrán 100px. De esta manera:
```css
grid-template-rows: 100px 200px;
grid-auto-columns: 100px;
grid-auto-flow: column;
```
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28279%29.png)

Vemos en el navegador que incluso el orden en que se organizan los elementos cambia. Todas las columnas tienen un mismo ancho. Puedes usar estas propiedades para jugar según lo que busques.

## ***Qué son gaps***
Es un espacio entre filas y columnas.

row-gap nos permite definir el tamaño de la brecha entre filas. Por supuesto, también lo puedes hacer en las columnas con column-gap. En este caso usamos***😗**
```css
row-gap: 15px;
column-gap: 30px;
```
Ojo: los espacios solo se crean entre filas o columnas, no con los extremos del contenedor.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28280%29.png)

gap, por otro lado nos permite crear un espaciado tanto para filas y columnas. Por ejemplo: gap: 40px crea el mismo espaciado entre sí, tanto en filas como en columnas.

## Propiedades de alineación
---
## *Cómo funcionan las propiedades de alineación*
Vamos al editor de texto. Creamos un contenedor con lo que hemos aprendido. Usaremos este contenedor para ejemplificar cómo funcionan las propiedades de alineación.
```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 150px 150px 150px;
    grid-auto-rows: 150px;
    grid-auto-flow: column;
    height: 600px;
}
```
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28282%29.png)

***Propiedades de alineación de los ítems***

- Justify-items:

Todos los que empiezan con justify nos ayudan a ordenar los elementos de manera horizontal en el espacio. justify-items: center nos da:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28283%29.png)

- Align-items:

Todos los que empiezan con align nos ayudan a alinear los elementos de manera vertical en el espacio. align-items: center nos da:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28284%29.png)

- Place-items:

Es la mezcla de justify-items y align-items. place-items: center nos da:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28285%29.png)

***Propiedades de alineación del contenedor:***

Estas propiedades son las que ajustan la grilla completa al espacio en la que ella vive. No tiene que ver nada con los elementos. La grilla funciona como un bloque.

**Justify-content: *justify-content:**

center nos da este resultado:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28286%29.png)

**Align-content: *align-content:**

center nos da este resultado:
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28287%29.png)

**Place-content: place*-content:**

center nos da este resultado:

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28288%29.png)

Además de estas propiedades de alineación, tenemos otras que dan directamente propiedades a los hijo de la grilla o grid items. Es decir, podemos alinear los elementos dentro de los contenedores de manera independiente. Estas son:

- Justify-self
- Align-self
- Place-self


## Propiedades de ubicación
---
Imaginemos que tenemos una grilla de 4x4 con sólo dos elementos. Podemos moverlos para que ocupen más espacio que una celda, o estén en una celda distinta a la que deberían estar.

Para las columnas, las propiedades que nos van a ayudar son:

- grid-column-start: con esta propiedad nosotros vamos a decirle al elemento en que línea de columna debe comenzar.

- grid-column-end: con esta propiedad nosotros vamos a decirle al elemento hasta que línea de la columna va a llegar.

- grid-column: es una mezcla de grid-column-start y grid-column-end. Los valores que necesita son el valor inicial y el valor final, estos van separados de un “/” (diagonal).

Para las filas las propiedades son iguales, solo que vamos a trabajar en las filas:

- grid-row-start
- grid-row-end
- grid-row

Además de estas propiedades, tenemos:

- grid-area: con esta propiedad declaramos solo una vez donde va a comenzar tanto en columna como en fila y donde va a terminar tanto en columna como en fila.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28290%29.png)

### **Cómo agregar las propiedades de ubicación**

Vamos al editor de texto para comprender mejor estos conceptos. Primero creamos un contenedor con tres elementos a los que les agregamos clases para poder aplicar estilos individuales a cada uno.

```html
    <div class="contenedor">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
    </div>
```

En nuestro archivo CSS llamamos al contenedor con su clase y le aplicamos propiedades similares a las que hemos trabajado anteriormente.


Ajustamos el ancho de fuente en 4rem para todas las clases.

Le damos un borde y color de fondo distinto a cada elemento del contenedor para poder diferenciarlo.

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: white;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-template-rows: 75px 75px 75px;
    place-content: center;
}
.item {
    font-size: 4rem;
}
.item-1 {
    border: 5px solid #f8bbd0;
    background-color: #ffeeff;
}
.item-2 {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
}
.item-3 {
    border: 5px solid #b2ebf2;
    background-color: #e5ffff;
}
```
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28292%29.png)

**Item 1**

Ahora, editemos el primer elemento para que ocupe todo el ancho de la primera fila. Debe empezar a numerar los elementos de izquierda a derecha.

Mucho ojo, el número no es la columna en sí, sino la línea en que termina la columna. Entonces si queremos que ocupe hasta la tercera celda, tendremos que colocar grid-column-end: 4.

```css
.item-1 {
    border: 5px solid #f8bbd0;
    background-color: #ffeeff;
    grid-column-start: 1;
    grid-column-end: 4;
}
```

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28297%29.png)

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28298%29.png)

**Item 2**

En este caso queremos que ocupe la primera celda de las filas 2 y 3 dentro de la primera columna. Como la primera fila ya está ocupada, debemos empezar de la fila 2 y terminar en la 4.

```css
grid-row: 2/4
```

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28299%29.png)

**Item 3**

El tercer item ocupa tanto filas como columnas, por lo que conviene usar grid-area. El orden en que debemos colocar el valor es: fila y columna en que empieza, fila y columna en que termina.
```css
.item-3 {
    border: 5px solid #b2ebf2;
    background-color: #e5ffff;
    grid-area: 2/2/4/4;
}
```
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28300%29.png)

## **¿Existen atajos para usar las propiedades?**
Podemos usar grid-template-areas para acomodar todos los elementos con mucha más rapidez. grid-template-areas declaramos areas dentro de la grilla.

Para ello, agregamos la información a la tabla como si fuera dentro de una grilla, de esta manera:

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: white;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-template-rows: 75px 75px 75px;
    grid-template-areas: 
        "header header header"
        "side main main"
        "side main main";
    place-content: center;
}
```

Luego, colocamos el nombre de la celda creada anteriormente a cada item.

```css
}
.item-1 {
    border: 5px solid #f8bbd0;
    background-color: #ffeeff;
    grid-area: header;
}
.item-2 {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    grid-area: side;
}

```
