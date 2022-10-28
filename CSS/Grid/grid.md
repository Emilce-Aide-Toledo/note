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

***Qué son items***
Son los elementos que están dentro del contenedor. Estos elementos pueden ser de cualquier tipo como links, botones, imágenes, etc. Todos ellos se convertirán en grid items. Esto quieres decir que por defecto van a tener propiedades que los ayudan a trabajar muy bien con nuestro sistema de grilla.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28269%29.png)

***Qué son líneas***
Son los elementos que limitan o dividen las filas o columnas de una grilla. Como vemos en el ejemplo, cuatro líneas dividen las tres columnas (columns), y se lee de izquierda a derecha. Tres líneas dividen las 2 filas (rows) y se enumeran de arriba hacia abajo.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28270%29.png)

***Qué es celda***
Es la unidad mínima que nosotros podemos tener en una grilla. Está delimitada por 4 líneas y normalmente solo ocupa 1 fila y 1 columna.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28271%29.png)

***Qué es track***
Es un grupo de celdas, que solo puede estar en una fila o en una misma columna.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/image%28272%29.png)

***Qué es área***
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

