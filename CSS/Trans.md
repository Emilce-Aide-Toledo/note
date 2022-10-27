
# Tansiciones y Transformaciones 

### Propiedades para crear animaciones con CSS y propiedades animables
---
**Transform**

La propiedad ```transform``` sirve para transformar un elemento HTML mediante funciones. Estas funciones permitirán trasladar, escalar, rotar o torcer a lo largo, ancho y profundidad del elemento.

Sin embargo, el usuario mira el resultado final de esta transformación. Por ejemplo, todos mirarán a Alicia pequeña, y no sabrán que realmente era grande. Por eso, esta propiedad está relacionada con transition para crear una animación.

Ver: https://static.platzi.com/media/public/uploads/transformaciones_en_2d_y_3d_d712736c-5368-4c9b-8827-331dc347d536.pdf

**Transition**

La propiedad ```transition``` sirve para agregar un intervalo de tiempo a un elemento HTML para visualizar los cambios de un punto inicial A, a un punto final B.

Animación de las propiedades transition y transform
Cabe recalcar, con transform y transition solamente podemos manipular la posición inicial y la final, no las posiciones intermedias. Si se requiere crear una animación manipulando las posiciones intermedias, es necesario usar animation.

Ver: https://static.platzi.com/media/public/uploads/transiciones_2093f06d-4937-4ba1-999d-73e1b9a56cca.pdf

**Animation**

La propiedad ```animation``` sirve para cambiar estilos CSS a lo largo de un intervalo, consiste en reglas para un estado inicial, final e intermedios que conformarán una animación.

Ver: https://static.platzi.com/media/public/uploads/animaciones_5bda2325-fb2e-4060-9751-5863d226fcf1.pdf

### Pseudo-clases y pseudo-elementos en las animaciones
---
Un ```trigger``` es un accionador de animaciones, es decir, el evento inicial que desencadena una animación.

Algunos ejemplos son:

- Pasar el mouse sobre un elemento.
- Dar clic a un elemento.
- Al deslizar la pantalla.
- Al recargar la página web.

*Las pseudo-clases y pseudo-elementos ayudan a activar las animaciones.*

### **Pseudo-clases**

Una pseudo-clase define el estilo de un estado especial de un elemento.

Sintaxis
```css
selector:pseudo-clase { propiedad: valor; }
```
```css
:link
```
La pseudo-clase ```:link``` representa el estado de un elemento que no ha sido visitado.
```css
Ejemplo usando :link{target="_blank"}
```
```
:visited
```
La pseudo-clase ```:visited``` representa el estado de un elemento que ya ha sido visitado.
```css
Ejemplo usando :visited{target="_blank"}
```
```
:hover
```
La pseudo-clase ```:hover``` representa el estado en el cual el cursor está encima del elemento.
```css
Ejemplo usando :hover{target="_blank"}
```
```
:not()
```
La pseudo-clase ```:not()``` representa el estado en el cual no coinciden los selectores que se indiquen.
```css
Ejemplo usando :not(){target="_blank"}
```
```
:nth-child()
```
La pseudo-clase ```:nth-child()``` representa el estado en el cual coinciden los hijos del elemento según el valor indicado.

Valores de palabras clave:

```odd:``` Los elementos hijos en posiciones impares.

```even:``` Los elementos hijos en posiciones pares.

Fórmula matemática: An+B donde A y B son números enteros.
```
Ejemplo usando :nth-child(){target="_blank"}
```

### **Pseudos-elementos**

Un pseudo-elemento define el estilo de una parte específica de un elemento.

Sintaxis
```css
selector::pseudo-elemento { propiedad: valor; }
```
```
::before
```
La pseudo-elemento ```::before``` sirve para agregar un contenido antes del elemento. El contenido es agregado mediante la propiedad CSS content.
```css
Ejemplo usando ::before{target="_blank"}
```
```
::after
```
La pseudo-elemento ```::after``` sirve para agregar un contenido después del elemento. El contenido es agregado mediante la propiedad CSS content.
```css
Ejemplo usando ::after{target="_blank"}
```
Ver: https://htmlcolorcodes.com/

### Timing functions, planos y ejes
---
Una ```timing function``` es la representación de la progresión en función del tiempo de cada ciclo de la animación. Representa la aceleración del elemento desde un punto A hasta un punto B.

En esta página web (https://easings.net/{target="_blank"}) podrás observar varias “timing functions” y cómo es su animación haciendo hover en cada bloque. No es necesario aprendertelas de memoria, solo conocerlas.

**Cubic-bezier**

```Cubic-bezier``` es una función de CSS para representar una timing function mediante cuatro puntos a lo largo de la curva, de los cuales únicamente ingresamos los dos puntos intermedios.

PáVer: https://cubic-bezier.com/#.17,.67,.83,.67

### **Planos y ejes**
El navegador está constituido de tres planos y ejes: el ancho o X; el alto o Y; y el de profundidad o Z.

El eje X positivo está hacia la derecha; el eje Y positivo está hacia abajo; y el eje Z positivo está hacia el usuario.
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/animationland03.PNG)

**Planos y ejes de un navegador web**
Estos son muy importantes para mover los elementos del HTML desde un punto inicial hacia un punto final.

**Contexto de apilamiento**

El contexto de apilamiento consiste en la superposición de capas o elementos a lo largo del eje Z. Esto es importante para evitar que un elemento esté ocultando a otro o colocar una imagen de fondo a la página web.

![](https://media1.giphy.com/media/1IvbqeWg7gLlRi2TAC/giphy.gif?cid=790b7611ba7156183cec0ef1ba9e76527d6adfbc2610e94c&rid=giphy.gif&ct=g)

### Transform translate
---
```Transform``` es una propiedad CSS que sirve para transformar un elemento HTML mediante funciones. Estas funciones permitirán trasladar, escalar, rotar o torcer a lo largo, ancho y profundidad del elemento.

**Translate para transformaciones**

```Translate``` es una función de la propiedad “transform” que te permite trasladar un elemento HTML a través de los ejes del navegador. El valor que recibe puede ser una longitud (px, rem, etc.) o un porcentaje.
```css
selector {
    transform: translate(20%, -20%);
}
```
Representación de la función translate
Dependiendo del eje en el que traslades el elemento, existe una función.

Tipo y valor con los argumentos que recibe

Eje X y Y:	```translate(x,y)```

Eje X:	```translateX(x)```

Eje Y:	```translateY(y)```

Eje Z:	```translateZ(z)```

Múltiple	```translate3d(x,y,z)```

Ver: https://caniuse.com/?search=transform

https://cssgradient.io/gradient-backgrounds/

### Transform rotate, scale, skew y matrix
---
Además de translate, existen otras funciones que permiten transformar el elemento HTML para iniciar una animación.
![](https://media0.giphy.com/media/KRRSOKFINjskbRNENr/giphy.gif?cid=790b7611ee396f136b7b48c308d54e717611117f428e9871&rid=giphy.gif&ct=g)

**Rotate para transformaciones**

Rotate es una función de la propiedad ```transform``` que te permite rotar un elemento HTML a través de los ejes del navegador. El valor que recibe es un ángulo, por ejemplo, “45deg” (45 grados) o “2rad” (2 radianes). Los ángulos positivos están en sentido horario, y los negativos en sentido antihorario.
```CSS
selector {
    transform: rotate(45deg);
}
```

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/animationland05.PNG)

Dependiendo del eje en el que rotes el elemento, existe una función.

Tipo y valor con los argumentos que recibe

Eje X y Y:	```rotate(angle)```

Eje X:	```rotateX(angle)```

Eje Y:	```rotateY(angle)```

Eje Z:	```rotateZ(angle)```

Múltiple:	```rotate3d(x,y,z,angle)```

**Scale para transformaciones**
Scale es una función de la propiedad transform que te permite escalar un elemento HTML a través de sus ejes. El valor que recibe es un número multiplicador al elemento original.

Si el elemento es igual a 1 entonces sigue como el original; mayor a 1 aumenta de tamaño; y, menor a 1 disminuye de tamaño.
```CSS
selector {
    transform: scale(0.8);
}
```
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/animationland06.PNG)

Dependiendo del eje en el que escales el elemento, existe una función

Tipo y valor con los argumentos que recibe

Eje X y Y:	```scale(x)```

Eje X:	```scaleX(x)```

Eje Y:	```scaleY(y)```

Eje Z:	```scaleZ(z)```

Múltiple:	```scale3d(x,y,z)```

**Skew para transformaciones**

Skew es una función de la propiedad transform que te permite torcer un elemento HTML a través de sus ejes en dos dimensiones. El valor que recibe es un ángulo para cada eje en el que el elemento se distorsionará.

```css
selector {
    transform: skew(45deg, 45deg);
}
```
![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/animationland07.PNG)

Dependiendo del eje en el que tuerzas el elemento, existe una función.

Tipo y valor con los argumentos que recibe

Eje X y Y:	```skew(angleX, angleY)```

Eje X:	```skewX(angle)```

Eje Y:	```skewY(angle)```

**Matrix para transformaciones**

Matrix es una función de la propiedad transform que te permite realizar varios efectos en uno solo.

Ver: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix

**Orden en el código para transformaciones**

Solamente puede existir una sola propiedad transform en el código de CSS, por lo que si escribimos otra regla CSS con otra transformación, esta se sobreescribirá y solo ejecutará la última. Por ende, utiliza varias funciones en la misma propiedad transform para realizar varias transformaciones.
```css
*Mal (solo rotará el elemento)*/

selector {
    transform: translate(100px,  100px);
    transform: rotate(45deg);
 }
```
``` css
/*Bien (realizará ambas transformaciones)*/

selector {
    transform: translate(100px, 100px) rotate(45deg);
}
```

## Transform origin
---
El origen es el punto en el cual la transformación se ejecutará. La propiedad transform-origin permite cambiar el origen de las transformaciones, que por defecto está en el centro del elemento.

![](https://media.giphy.com/media/a4fGwnTMq3MJMNZYQI/giphy.gif)

Ver: [Código](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0ic2hhZG93Ij4NCiAgPGRpdiBjbGFzcz0idHJhbnNmb3JtIHJvdGF0ZSI+cm90YXRlPC9kaXY+DQo8L2Rpdj4NCg0KPGRpdiBjbGFzcz0ic2hhZG93Ij4NCiAgPGRpdiBjbGFzcz0idHJhbnNmb3JtIHNjYWxlIj5zY2FsZTwvZGl2Pg0KPC9kaXY+DQoNCjxkaXYgY2xhc3M9InNoYWRvdyI+DQogIDxkaXYgY2xhc3M9InRyYW5zZm9ybSBza2V3Ij5za2V3PC9kaXY+DQo8L2Rpdj4NCjwvZGl2Pg0KDQo=%7CLmNvbnRhaW5lciB7DQogIGRpc3BsYXk6IGZsZXg7DQogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47DQogIGdhcDogM3JlbTsNCiAgd2lkdGg6IDEwMCU7DQogIGhlaWdodDogYXV0bzsNCiAgYWxpZ24taXRlbXM6IGNlbnRlcjsNCiAgbWFyZ2luOiAycmVtIDAgOHJlbSAwOw0KfQ0KDQouY29udGFpbmVyIGRpdnsNCiAgd2lkdGg6IDIwMHB4Ow0KICBoZWlnaHQ6IDIwMHB4Ow0KfQ0KDQouc2hhZG93ew0KICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsNCiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsNCn0NCg0KLnRyYW5zZm9ybXsNCiAgcG9zaXRpb246IHJlbGF0aXZlOw0KICBkaXNwbGF5OiBncmlkOw0KICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsNCiAgcGxhY2UtY29udGVudDogY2VudGVyOw0KICBmb250LXNpemU6IDEuNXJlbTsNCiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTsNCiAgY3Vyc29yOiBwb2ludGVyOw0KLyogwqFQcnVlYmEgY29uIGxvIHF1ZSBxdWllcmFzISEgKi8NCiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7DQoNCn0NCg0KLnRyYW5zZm9ybTo6YWZ0ZXJ7DQogIGNvbnRlbnQ6ICIiOw0KICB3aWR0aDogMTBweDsNCiAgaGVpZ2h0OiAxMHB4Ow0KICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7DQogIGJvcmRlci1yYWRpdXM6IDUwJTsNCiAgcG9zaXRpb246IGFic29sdXRlOw0KICB0b3A6IC01cHg7DQogIGxlZnQ6IC01cHg7DQp9DQoNCi50cmFuc2Zvcm06OmJlZm9yZXsNCiAgY29udGVudDogIm9yaWdpbiI7DQogIGZvbnQtc2l6ZTogc21hbGw7DQogIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCiAgdG9wOiAtMjBweDsNCiAgbGVmdDogLTE1cHg7DQp9DQoNCi8qIFRyYW5zZm9ybWFjaW9uZXMgKi8NCi5yb3RhdGU6aG92ZXIgew0KICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7DQp9DQoNCi5zY2FsZTpob3ZlciB7DQogIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsNCn0NCg0KLnNrZXc6aG92ZXIgew0KICB0cmFuc2Zvcm06IHNrZXcoMjVkZWcsIDI1ZGVnKQ0KfQ==%7C "Código")

## Transform style y perspective
---

Con las transformaciones 3D observaremos el elemento transformarse en diferentes planos.

Por lo tanto, es momento para aplicar transformaciones en 3D. Las propiedades CSS para esto serán: ```transform-style``` y ```perspective```.

**Transform style para transformaciones en 3D**

La propiedad transform-style de CSS establece si un elemento hijo está en el plano 2D (flat) o 3D (preserve-3d). Por defecto, el elemento está con valor flat.
```css
selector {
    transform-style: preserve-3d;
}
```
Perspective para transformaciones en 3D
La propiedad ```perspective``` se utiliza para proveer de profundidad a un elemento con respecto al usuario y dar la sensación de 3D.

El valor que recibe la propiedad es una longitud (px, rem, etc.) que representa la profundidad del plano para construir la perspectiva.

![](https://media0.giphy.com/media/xQRWVJPqdj32zdQKGr/giphy.gif?cid=790b76118f08df6f152afe05cb78a39c9668240c2c5284b8&rid=giphy.gif&ct=g)

Por defecto, el origen para las transformaciones 3D está en el centro, pero se puede modificar con la propiedad ```perpective-origin```.

**Cambiar el origen de la perspectiva.**

La propiedad ```perspective-origin``` es la encargada de cambiar el origen de la perspectiva, por lo que el usuario percibirá de diferente forma el elemento.

## Backface visibility
---
La propiedad backface-visibility de CSS permite mostrar la cara posterior de un elemento. Esta propiedad recibe dos valores: ```visible``` (visible) y ```hidden``` (oculto); por defecto, su valor es visible.
```css
selector {
    backface-visibility: visible;
    backface-visibility: hidden;
}
```
La cara posterior de un elemento siempre tiene un fondo transparente, por lo que al ser visible y realizar una transformación en un solo eje, mostrará un efecto de imagen espejo.

En cambio, si el valor es ```hidden``` no mostrará contenido. Con esto podemos realizar que un elemento se muestre al ocultarse otro, como un efecto de voltear una carta.

### **Crea el efecto de voltear una carta con ```backface-visibility```**

Como punto inicial, necesitarás un elemento padre con dos elementos hijos, los cuales representarán la cara frontal y posterior de la carta. Te dejo este código para que empieces, aunque no es obligatorio, ya que se hablará de manera general en la explicación.

Ver:  [código](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iZnJvbnQiPkFkZWxhbnRlPC9kaXY+DQogIDxkaXYgY2xhc3M9ImJhY2siPkF0csOhc/CfpK88L2Rpdj4NCjwvZGl2Pg0KDQo=%7CaHRtbCwgYm9keXsNCiAgcGFkZGluZzogMDsNCiAgbWFyZ2luOiAwOw0KICBoZWlnaHQ6IDEwMHZoOw0KICBkaXNwbGF5OiBncmlkOw0KICBwbGFjZS1jb250ZW50OiBjZW50ZXI7DQogIGZvbnQtc2l6ZTogMS41cmVtOw0KfQ0KDQovKiBFbGVtZW50byBwYWRyZSAqLw0KLmNvbnRhaW5lcnsNCiAgd2lkdGg6IDIwMHB4Ow0KICBoZWlnaHQ6IDIwMHB4Ow0KICBjdXJzb3I6IHBvaW50ZXI7DQogIC8qQWdyZWdhIHByb3BpZWRhZGVzKi8NCn0NCg0KLyogRWxlbWVudG9zIGhpam9zICovDQouY29udGFpbmVyIGRpdnsNCiAgd2lkdGg6IDEwMCU7DQogIGhlaWdodDogMTAwJTsNCiAgZGlzcGxheTogZ3JpZDsNCiAgcGxhY2UtY29udGVudDogY2VudGVyOw0KICAvKkFncmVnYSBwcm9waWVkYWRlcyovDQp9DQoNCi8qIENhcmEgZnJvbnRhbCAqLw0KLmZyb250ew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOw0KfQ0KDQovKiBDYXJhIHBvc3RlcmlvciAqLw0KLmJhY2t7DQogIGJhY2tncm91bmQtY29sb3I6IGdyZXk7DQogIC8qQWdyZWdhIHByb3BpZWRhZGVzKi8NCn0NCg0KLyogVHJpZ2dlciAqLw0KLmNvbnRhaW5lcjpob3ZlcnsNCiAgLypBZ3JlZ2EgZWwgdHJpZ2dlciovDQp9DQoNCg0KDQo=%7C)

Ahora sigamos los siguientes pasos:

1. Al elemento padre agrega una posición relativa; y a los hijos, una posición absoluta. Esto provocará que los elementos hijos estén uno sobre el otro con respecto al eje Z dentro del elemento padre.
```css
.padre {
    position: relative;
}

.hijos{
    position: absolute;
}
```
2. Al elemento padre agrega la propiedad para que la transformación sea en 3D.
```css
.padre {
    transform-style: preserve3d;
}
```
3. Al elemento que deba estar en la vista posterior, rótalo 180 grados sobre el eje X o Y dependiendo de lo que esperes. Observarás el efecto espejo, pero aún no está listo.
```css
.cara-posterior  {
    transform: rotateY(180deg);
}
```
4. A los elementos hijos, agrega la propiedad ```backface-visibility``` con el valor hidden. Observarás que el contenido frontal y posterior se han situado como una tarjeta. Solo faltaría añadir un accionador para la animación.
```css
.hijos {
    backface-visibility: hidden;
}
```
5. Al elemento padre, agrega un accionador para la animación que consista en rotar todo el contenido para mostrar la vista posterior al usuario.
```css
.padre:hover {
  transform: rotateY(180deg);
}
```
Y listo, tienes el efecto de voltear una tarjeta mediante la propiedad ```backface-visibility```.

Ver: [código](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iZnJvbnQiPlNlw7HDoWxhbWU8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iYmFjayI+8J+krzwvZGl2Pg0KPC9kaXY+DQoNCg==%7CaHRtbCwgYm9keXsNCiAgcGFkZGluZzogMDsNCiAgbWFyZ2luOiAwOw0KICBoZWlnaHQ6IDEwMHZoOw0KICBkaXNwbGF5OiBncmlkOw0KICBwbGFjZS1jb250ZW50OiBjZW50ZXI7DQogIGZvbnQtc2l6ZTogMS41cmVtOw0KfQ0KDQouY29udGFpbmVyew0KICB3aWR0aDogMjAwcHg7DQogIGhlaWdodDogMjAwcHg7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgcG9zaXRpb246IHJlbGF0aXZlOw0KICAvKiBUcmFuc2Zvcm1hY2nDs24gM0QgKi8NCiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsNCn0NCg0KLmNvbnRhaW5lciBkaXZ7DQogIHdpZHRoOiAxMDAlOw0KICBoZWlnaHQ6IDEwMCU7DQogIGRpc3BsYXk6IGdyaWQ7DQogIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsNCiAgcG9zaXRpb246IGFic29sdXRlOw0KIC8qIMKhUHJ1ZWJhIGNvbiBsbyBxdWUgcXVpZXJhcyEhICovDQogIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsNCg0KfQ0KDQouZnJvbnR7DQogIGJhY2tncm91bmQtY29sb3I6IGFxdWE7DQp9DQoNCi5iYWNrew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5Ow0KICAvKiBUcmFuc2Zvcm1hY2nDs24gMkQgKi8NCiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7DQp9DQoNCi5jb250YWluZXI6aG92ZXJ7DQogIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOw0KDQogIC8qIFNpIHF1aWVyZXMsIGHDsWFkZSBsYSBzaWd1aWVudGUgbMOtbmVhIGRlIGPDs2RpZ28sIHNvbG8gcGFyYSBxdWUgb2JzZXJ2ZXMgZWwgY29tcG9ydGFtaWVudG8gKi8NCiAgLyogdHJhbnNpdGlvbjogYWxsIDJzOyAqLw0KDQp9DQoNCg0K%7C)


## Efecto parallax: estructura HTML
---
El efecto de paralaje o parallax es una técnica en la que el fondo se mueve a una velocidad distinta que la del contenido. El resultado es un ligero efecto de profundidad, dejando ver partes que antes no podías visualizar. Te ayuda a sumergirte totalmente en el contenido, similar al efecto 3D.

Ver: https://www.awwwards.com/30-webs-con-efecto-parallax.html

### Estructura HTML para el efecto parallax

Crea un contenedor con elementos hijos, estos serán las capas del contenedor para crear el efecto. En este caso, agrega tres elementos que representen la capa del fondo (background), del medio (middle) y de primer plano (foreground). Cada elemento debe tener una clase general y una que las diferencie.
```html
<div class="parallax-container">
  <div class="image image_background"></div>
  <div class="image image_middle"></div>
  <div class="image image_foreground"></div>
</div>
```
En la capa del medio, crea tres elementos hijos que representen tres cartas.
```html
<div class="image image_middle">
    <div class="card one"></div>
    <div class="card two"></div>
    <div class="card three"></div>
</div>
```
Para las demás capas, agrega una imagen de fondo y una en primer plano de Alicia. Te dejo los enlaces de las imagenes, utiliza una etiqueta de imagen con su respectivo atributo alt.
```
 *[Alicia](https://i.ibb.co/vJdbRkj/Alice.png)
*[Imagen de fondo](https://i.ibb.co/jbLKgvX/Background.png)
```

Y listo, ya tienes la estructura del efecto parallax, no importa si las imágenes están sobredimensionadas. Ahora utilizaremos CSS para dar estilos a las capas.

Ver: [código](https://codi.link/PGRpdiBjbGFzcz0icGFyYWxsYXgtY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iaW1hZ2UgaW1hZ2VfYmFja2dyb3VuZCI+DQogICAgPGltZyBzcmM9Imh0dHBzOi8vaS5pYmIuY28vamJMS2d2WC9CYWNrZ3JvdW5kLnBuZyIgYWx0PSJiYWNrZ3JvdW5kIj4NCiAgPC9kaXY+DQogIDxkaXYgY2xhc3M9ImltYWdlIGltYWdlX21pZGRsZSI+DQogICAgPGRpdiBjbGFzcz0iY2FyZCBvbmUiPjwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImNhcmQgdHdvIj48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJjYXJkIHRocmVlIj48L2Rpdj4NCiAgPC9kaXY+DQogIDxkaXYgY2xhc3M9ImltYWdlIGltYWdlX2ZvcmVncm91bmQiPg0KICAgIDxpbWcgc3JjPSJodHRwczovL2kuaWJiLmNvL3ZKZGJSa2ovQWxpY2UucG5nIiBhbHQ9IkFsaWNlIj4NCiAgPC9kaXY+DQo8L2Rpdj4NCg0K%7C%7C)

## Efecto parallax: estilos CSS
---
Quitar el margin que está por defecto establecido por el navegador.
```css
body {
  margin: 0;
}
```
Dimensionar las imágenes para que ocupen el espacio del contenedor.
```css
img{
  max-width: 100%;
  height: auto;
}
```
En el elemento contenedor (parallax-container) agrega:

- Medidas para que ocupe el ancho y alto de la pantalla.
- Perspectiva de 8 píxeles (recuerda este valor).
- Posición relativa para que las capas puedan posicionarse con respecto al contenedor del efecto.
- En este caso, el exceso de contenido deberá estar oculto para el eje X y desplazable para el eje Y, pero lo puedes cambiar a tu gusto.
```css
.parallax-container {
  width: 100%;
  height: 100vh;
  perspective: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
}
```
Agrega la posición absoluta a todos los elementos hijos o capas del efecto.
```css
.image{
  position: absolute;
} 
```
Para las cada capa del efecto vamos a realizar lo siguiente:

- Medidas según sean necesarias.
- Trasladar la capa en eje Z, desde 0 hasta el valor de la perspectiva (8px).
- Escalar el elemento según su profundidad. Para calcular este valor utiliza la siguiente fórmula: $(perspective - translateZ) / perspective$, por ejemplo para la capa del medio, $(8-5)/8 = 0.375$.
- Modificar el origen según sea necesario.

Algunos valores no son necesarios colocar, pero es recomendable tener un control del código y de las propiedades CSS.
```css
.image_background{
  width: 100%;
  height: auto;
  transform: translateZ(0px) scale(1);
  transform-origin: 0 50%;
}

.image_middle{
  width: 100%;
  height: 100%;
  transform: translateZ(5px) scale(0.375);
  transform-origin: 50%;
}

.image_foreground{
  width: 100%;
  height: auto;
  transform: translateZ(2px) scale(0.75);
  transform-origin: top;
}
```
Para las cartas de la segunda capa agrega dos estilos importantes: las medidas y la posición absoluta.
```css
.card {
  width: 80px;
  height: 100px;
  position: absolute;
  /* Estilos propios de la carta */
  background: white;
  border-radius: 8px;
  transform: rotate(-20deg);
}
La posición sirve para posicionar cada carta como deseemos.

/* Valores al azar, modificálos a tu gusto. */
.one{
  left: 30%;
}

.two{
  right: 20%;
  top: 200px;

}

.three{
  right: 20%;
  bottom: -700px;
}
```
¡Y listo! Ya está construido el efecto parallax.

Ver: [código](https://codi.link/PGRpdiBjbGFzcz0icGFyYWxsYXgtY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iaW1hZ2UgaW1hZ2VfYmFja2dyb3VuZCI+DQogICAgPGltZyBzcmM9Imh0dHBzOi8vaS5pYmIuY28vamJMS2d2WC9CYWNrZ3JvdW5kLnBuZyIgYWx0PSJiYWNrZ3JvdW5kIj4NCiAgPC9kaXY+DQogIDxkaXYgY2xhc3M9ImltYWdlIGltYWdlX21pZGRsZSI+DQogICAgPGRpdiBjbGFzcz0iY2FyZCBvbmUiPjwvZGl2Pg0KICAgIDxkaXYgY2xhc3M9ImNhcmQgdHdvIj48L2Rpdj4NCiAgICA8ZGl2IGNsYXNzPSJjYXJkIHRocmVlIj48L2Rpdj4NCiAgPC9kaXY+DQogIDxkaXYgY2xhc3M9ImltYWdlIGltYWdlX2ZvcmVncm91bmQiPg0KICAgIDxpbWcgc3JjPSJodHRwczovL2kuaWJiLmNvL3ZKZGJSa2ovQWxpY2UucG5nIiBhbHQ9IkFsaWNlIj4NCiAgPC9kaXY+DQo8L2Rpdj4NCg0K%7CYm9keSB7DQogIG1hcmdpbjogMDsNCn0NCg0KaW1new0KICBtYXgtd2lkdGg6IDEwMCU7DQogIGhlaWdodDogYXV0bzsNCn0NCg0KLnBhcmFsbGF4LWNvbnRhaW5lciB7DQogIHdpZHRoOiAxMDAlOw0KICBoZWlnaHQ6IDEwMHZoOw0KICBwZXJzcGVjdGl2ZTogOHB4Ow0KICBvdmVyZmxvdy14OiBoaWRkZW47DQogIG92ZXJmbG93LXk6IHNjcm9sbDsNCiAgcG9zaXRpb246IHJlbGF0aXZlOw0KfQ0KDQouaW1hZ2V7DQogIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCn0gDQoNCg0KLmltYWdlX2JhY2tncm91bmR7DQogIHdpZHRoOiAxMDAlOw0KICBoZWlnaHQ6IGF1dG87DQogIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHNjYWxlKDEpOw0KICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTsNCn0NCg0KLmltYWdlX21pZGRsZXsNCiAgd2lkdGg6IDEwMCU7DQogIGhlaWdodDogMTAwJTsNCiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDVweCkgc2NhbGUoMC4zNzUpOw0KICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7DQp9DQoNCi5pbWFnZV9mb3JlZ3JvdW5kew0KICB3aWR0aDogMTAwJTsNCiAgaGVpZ2h0OiBhdXRvOw0KICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMnB4KSBzY2FsZSgwLjc1KTsNCiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wOw0KfQ0KDQouY2FyZCB7DQogIGJhY2tncm91bmQ6IHdoaXRlOw0KICBib3JkZXItcmFkaXVzOiA4cHg7DQogIHdpZHRoOiA4MHB4Ow0KICBoZWlnaHQ6IDEwMHB4Ow0KICBwb3NpdGlvbjogYWJzb2x1dGU7DQogIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7DQp9DQoNCi8qIEFncmVnYSB0dXMgcHJvcGlvcyB2YWxvcmVzICovDQoNCi5vbmV7DQogIGxlZnQ6IDMwJTsNCn0NCg0KLnR3b3sNCiAgcmlnaHQ6IDIwJTsNCiAgdG9wOiAyMDBweDsNCg0KfQ0KDQoudGhyZWV7DQogIHJpZ2h0OiAyMCU7DQogIGJvdHRvbTogLTcwMHB4Ow0KfQ0KDQogDQo=%7C)

## Transition
---
Ver: https://developer.mozilla.org/en-US/docs/Web/CSS/transition

## Transition property y duration

La propiedad ```transition``` de CSS sirve para agregar un intervalo de tiempo a un elemento HTML para visualizar los cambios de una transformación.

![](https://media.giphy.com/media/gCSOFQybTbM3pome6c/giphy.gif)

```css
transition: [property] [duration] [timing-function] [delay];
```
- ```transition-property``` (obligatoria)
- ```transition-duration``` (obligatoria)
- ```transition-timing-function``` (opcional)
- ```transition-delay``` (opcional)

### Propiedades obligatorias para una transición

- ```transition-property```: esta propiedad sirve para especificar el elemento HTML de la transición. Si la transición es para todos los elementos, su valor es ```all```.


- ```transition-duration```: esta propiedad sirve para agregar un intervalo de tiempo en segundos o milisegundos (1s = 1000ms).
```css
selector {
    transition: transform 100ms;
    transition: all 2s;
}
```
Ver: [código](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iYm94IGJveDEiPlRyYW5zbGF0ZTwvZGl2Pg0KICA8ZGl2IGNsYXNzPSJib3ggYm94MiI+Um90YXRlPC9kaXY+DQogIDxkaXYgY2xhc3M9ImJveCBib3gzIj5Ta2V3PC9kaXY+DQo8L2Rpdj4=%7CYm9keXsNCiAgbWFyZ2luOiAwOw0KICBwYWRkaW5nOiAwOw0KICBib3gtc2l6aW5nOiBib3JkZXItYm94Ow0KICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlOw0KICBmb250LXdlaWdodDogYm9sZDsNCn0NCg0KLmNvbnRhaW5lciB7DQogIHdpZHRoOiAxMDB2dzsNCiAgaGVpZ2h0OiAxMDB2aDsNCiAgZGlzcGxheTogZmxleDsNCiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7DQogIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsNCiAgYWxpZ24taXRlbXM6IGNlbnRlcjsNCn0NCg0KLmJveCB7DQogIHdpZHRoOiAxMDBweDsNCiAgaGVpZ2h0OiAxMDBweDsNCiAgY3Vyc29yOiBwb2ludGVyOw0KICBkaXNwbGF5OiBncmlkOw0KICBwbGFjZS1jb250ZW50OiBjZW50ZXI7DQp9DQoNCi8qIFRyYW5zaWNpb25lcyAqLw0KDQouYm94MSB7DQogIGJhY2tncm91bmQ6IExpZ2h0Q29yYWw7DQp9DQoNCi5ib3gyIHsNCiAgYmFja2dyb3VuZDogU2FsbW9uOw0KfQ0KDQouYm94MyB7DQogIGJhY2tncm91bmQ6IERhcmtTYWxtb247DQp9DQoNCi8qIFRyYW5zZm9ybWFjaW9uZXMgKi8NCg0KLmJveDE6aG92ZXIgew0KICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjVweCk7DQp9DQoNCi5ib3gyOmhvdmVyIHsNCiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOw0KfQ0KDQouYm94Mzpob3ZlciB7DQogIHRyYW5zZm9ybTogc2tldygyNWRlZywyNWRlZyk7DQp9%7C)


## Transition timing function y delay

Una *timing function* es la representación de la progresión en función del tiempo de cada ciclo de una animación. Representa la aceleración del elemento desde un punto A hasta un punto B.

- ```linear```: El elemento se mueve a una aceleración constante.
- ```ease```: Es el valor predeterminado si no se especifica. El elemento acelera inicialmente, pero presenta mucha desaceleración.
- ```ease-in```: El elemento empieza lento pero termina rápido.
- ```ease-out```: El elemento empieza rápido pero termina lento.
- ```ease-in-out```: Es la combinación de ```ease-in``` y ```ease-out```. El elemento empieza lento, a medida que avanza va acelerándose, pero termina lento.
- ```cubic-bezier```: Se necesitan cuatro números, que representan dos puntos de control para formar la curva de aceleración deseada.


### Propiedades opcionales para una transición
- ```transition-timing-function```: propiedad que establece una timing function para especificar una forma de aceleración de la transición.

- ```transition-delay```: propiedad que establece un intervalo de tiempo desde la acción que desencadena la animación hasta su inicio.

Ver: [código](https://codi.link/PGgzPkVzcGVyYSAxIHNlZ3VuZG88L2gzPg0KPGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iY2lyY2xlIG9uZSI+bGluZWFyPC9kaXY+DQogIDxkaXYgY2xhc3M9ImNpcmNsZSB0d28iPmVhc2U8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iY2lyY2xlIHRocmVlIj5lYXNlLWluPC9kaXY+DQogIDxkaXYgY2xhc3M9ImNpcmNsZSBmb3VyIj5lYXNlLW91dDwvZGl2Pg0KICA8ZGl2IGNsYXNzPSJjaXJjbGUgZml2ZSI+ZWFzZS1pbi1vdXQ8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iY2lyY2xlIHNpeCI+Y3ViaWMtYmV6aWVyPC9kaXY+DQo8L2Rpdj4=%7CLmNvbnRhaW5lciB7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTsNCiAgZm9udC13ZWlnaHQ6IGJvbGQ7DQogIHRleHQtYWxpZ246IGNlbnRlcjsNCn0NCg0KLmNvbnRhaW5lcjpob3ZlciAuY2lyY2xlIHsNCiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTsNCn0NCi5jaXJjbGUgew0KICB3aWR0aDogNzVweDsNCiAgaGVpZ2h0OiA3NXB4Ow0KICBib3JkZXItcmFkaXVzOiA1MCU7DQogIGRpc3BsYXk6IGdyaWQ7DQogIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsNCiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzOw0KICB0cmFuc2l0aW9uLWRlbGF5OiAxczsNCn0NCg0KLm9uZSB7DQogIGJhY2tncm91bmQ6cmdiKDE1MCwgNjgsIDE1MCk7DQogIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7DQp9DQoNCi50d28gew0KICBiYWNrZ3JvdW5kOiBPcmNoaWQ7DQogIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOw0KfQ0KDQoudGhyZWUgew0KICBiYWNrZ3JvdW5kOiBWaW9sZXQ7DQogIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluOw0KfQ0KDQouZm91ciB7DQogIGJhY2tncm91bmQ6IFBsdW07DQogIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDsNCn0NCg0KLmZpdmUgew0KICBiYWNrZ3JvdW5kOiBUaGlzdGxlOw0KICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7DQp9DQoNCi5zaXggew0KICBiYWNrZ3JvdW5kOiBMYXZlbmRlcjsNCiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNTEsLjcyLC45MSwuMjYpOw0KfQ==%7C)

Ver: [código 2](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iY2lyY2xlIG9uZSI+bGluZWFyPC9kaXY+DQogIDxkaXYgY2xhc3M9ImNpcmNsZSB0d28iPmVhc2U8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iY2lyY2xlIHRocmVlIj5lYXNlLWluPC9kaXY+DQogIDxkaXYgY2xhc3M9ImNpcmNsZSBmb3VyIj5lYXNlLW91dDwvZGl2Pg0KICA8ZGl2IGNsYXNzPSJjaXJjbGUgZml2ZSI+ZWFzZS1pbi1vdXQ8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iY2lyY2xlIHNpeCI+Y3ViaWMtYmV6aWVyPC9kaXY+DQo8L2Rpdj4=%7CLmNvbnRhaW5lciB7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTsNCiAgZm9udC13ZWlnaHQ6IGJvbGQ7DQogIHRleHQtYWxpZ246IGNlbnRlcjsNCn0NCg0KLmNvbnRhaW5lcjpob3ZlciAuY2lyY2xlIHsNCiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTsNCn0NCi5jaXJjbGUgew0KICB3aWR0aDogNzVweDsNCiAgaGVpZ2h0OiA3NXB4Ow0KICBib3JkZXItcmFkaXVzOiA1MCU7DQogIGRpc3BsYXk6IGdyaWQ7DQogIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsNCiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzOw0KfQ0KDQoub25lIHsNCiAgYmFja2dyb3VuZDpyZ2IoMTUwLCA2OCwgMTUwKTsNCiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsNCn0NCg0KLnR3byB7DQogIGJhY2tncm91bmQ6IE9yY2hpZDsNCiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7DQp9DQoNCi50aHJlZSB7DQogIGJhY2tncm91bmQ6IFZpb2xldDsNCiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47DQp9DQoNCi5mb3VyIHsNCiAgYmFja2dyb3VuZDogUGx1bTsNCiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0Ow0KfQ0KDQouZml2ZSB7DQogIGJhY2tncm91bmQ6IFRoaXN0bGU7DQogIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsNCn0NCg0KLnNpeCB7DQogIGJhY2tncm91bmQ6IExhdmVuZGVyOw0KICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC41MSwuNzIsLjkxLC4yNik7DQp9%7C)

Ver: [código 3](https://codepen.io/paolojoaquin/pen/WNpEoWP)

## Movimiento impulsado por la acción
---
Los tips de UX son recomendaciones para que tus animaciones sean mejores para la experiencia de usuario. Estudiaremos tres, los cuales son:

- Movimiento impulsado por la acción.
- Tiempos de espera.
- Problemas de parpadeo.

**Movimiento impulsado por la acción**

Al momento de crear una transición, el tiempo del punto A al punto B es el mismo. El movimiento impulsado por la acción consiste en modificar los tiempos de la transición, para que el tiempo de regreso (de B a A) sea mayor, para que la animación repose y no exista un movimiento abrupto.

Esto se consigue añadiendo la transición en el accionador de la animación y en el elemento, pero con diferentes tiempos. Ten en cuenta que la animación primero sucede con el evento.
```css
/* De A a B */
selector:hover {
    transition: transform 1s;
}
```
```css
/* De B a A */
selector {
    transition: transform 1.5s;
}
```
Ver: [código](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGg0Pk3DoXMgbGVudG8gYWwgcmVncmVzbzwvaDQ+DQogIDxkaXYgY2xhc3M9ImNpcmNsZSBvbmUiPjwvZGl2Pg0KICA8aDQ+TcOhcyByw6FwaWRvIGFsIHJlZ3Jlc288L2g0Pg0KDQogIDxkaXYgY2xhc3M9ImNpcmNsZSB0d28iPjwvZGl2Pg0KICANCjwvZGl2Pg==%7CLmNvbnRhaW5lciB7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTsNCiAgZm9udC13ZWlnaHQ6IGJvbGQ7DQogIHRleHQtYWxpZ246IGNlbnRlcjsNCn0NCg0KLmNpcmNsZSB7DQogIHdpZHRoOiA3NXB4Ow0KICBoZWlnaHQ6IDc1cHg7DQogIGJvcmRlci1yYWRpdXM6IDUwJTsNCn0NCg0KLmNvbnRhaW5lcjpob3ZlciAuY2lyY2xlIHsNCiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTsNCiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGxpbmVhcjsNCn0NCg0KLm9uZSB7DQogIGJhY2tncm91bmQ6cmdiKDE1MCwgNjgsIDE1MCk7DQogIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGxpbmVhcjsNCn0NCg0KLnR3byB7DQogIGJhY2tncm91bmQ6IE9yY2hpZDsNCiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgbGluZWFyOw0KfQ0K%7C)

## Tiempos de espera
---
En algunos menús desplegables, intentas seleccionar una opción pero se cierra el menú y debes hacer el mismo hasta seleccionar lo que deseas.

Los tiempos de espera solucionan este problema, se refiere a usar una duración entre el usuario deje de seleccionar el elemento y se cierre el menú. Usar tiempos de espera ayuda al usuario a no frustrarse con los menús.

Utiliza la propiedad ```transition-delay``` para que los elementos esperen un tiempo determinado entre que el usuario deje de seleccionar el menú hasta que se cierre completamente.

Ver: [codigo](https://codi.link/PHVsIGNsYXNzPSJuYXYiPg0KICA8bGk+PGEgaHJlZj0iIyI+TXVqZXI8L2E+DQogICAgPHVsPg0KICAgICAgPGxpPjxhIGhyZWY9IiMiPkNhbWlzZXRhczwvYT48L2xpPg0KICAgICAgPGxpPjxhIGhyZWY9IiMiPlBhbnRhbG9uZXM8L2E+PC9saT4NCiAgICAgIDxsaT48YSBocmVmPSIjIj5TaG9ydHM8L2E+DQogICAgICAgIDx1bD4NCiAgICAgICAgICA8bGk+PGEgaHJlZj0iIyI+Q29ydG9zPC9hPjwvbGk+DQogICAgICAgICAgPGxpPjxhIGhyZWY9IiMiPkxhcmdvczwvYT48L2xpPg0KICAgICAgICAgIDxsaT48YSBocmVmPSIjIj5UcmFuc3BhcmVudGVzPC9hPjwvbGk+DQogICAgICAgIDwvdWw+DQogICAgICA8L2xpPg0KICAgIDwvdWw+DQogIDwvbGk+DQogIDxsaT48YSBocmVmPSIjIj5Ib21icmU8L2E+DQogICAgPHVsPg0KICAgICAgPGxpPjxhIGhyZWY9IiMiPkNhbWlzZXRhczwvYT48L2xpPg0KICAgICAgPGxpPjxhIGhyZWY9IiMiPlBhbnRhbG9uZXM8L2E+PC9saT4NCiAgICAgIDxsaT48YSBocmVmPSIjIj5TaG9ydHM8L2E+DQogICAgICAgIDx1bD4NCiAgICAgICAgICA8bGk+PGEgaHJlZj0iIyI+Q29ydG9zPC9hPjwvbGk+DQogICAgICAgICAgPGxpPjxhIGhyZWY9IiMiPkxhcmdvczwvYT48L2xpPg0KICAgICAgICAgIDxsaT48YSBocmVmPSIjIj5UcmFuc3BhcmVudGVzPC9hPjwvbGk+DQogICAgICAgIDwvdWw+DQogICAgICA8L2xpPg0KICAgIDwvdWw+DQogIDwvbGk+DQogIDxsaT48YSBocmVmPSIjIj5OacOxb3M8L2E+DQogICAgPHVsPg0KICAgICAgPGxpPjxhIGhyZWY9IiMiPkNhbWlzZXRhczwvYT48L2xpPg0KICAgICAgPGxpPjxhIGhyZWY9IiMiPlBhbnRhbG9uZXM8L2E+PC9saT4NCiAgICAgIDxsaT48YSBocmVmPSIjIj5TaG9ydHM8L2E+DQogICAgICAgIDx1bD4NCiAgICAgICAgICA8bGk+PGEgaHJlZj0iIyI+Q29ydG9zPC9hPjwvbGk+DQogICAgICAgICAgPGxpPjxhIGhyZWY9IiMiPkxhcmdvczwvYT48L2xpPg0KICAgICAgICAgIDxsaT48YSBocmVmPSIjIj5UcmFuc3BhcmVudGVzPC9hPjwvbGk+DQogICAgICAgIDwvdWw+DQogICAgICA8L2xpPg0KICAgIDwvdWw+DQogIDwvbGk+DQo8L3VsPg==%7CYm9keSB7DQogIG1hcmdpbjogMDsNCn0NCg0KdWwgew0KICBsaXN0LXN0eWxlOiBub25lOw0KfQ0KDQpsaSB7DQogIG1hcmdpbjogMXJlbSAwOw0KfQ0KDQphIHsNCiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOw0KfQ0KDQoubmF2IHsNCiAgd2lkdGg6IDkwdnc7DQogIGRpc3BsYXk6IGZsZXg7DQogIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOw0KfQ0KDQoubmF2IGxpIHVsIHsNCiAgZGlzcGxheTogYmxvY2s7DQogIG9wYWNpdHk6IDA7DQogIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtczsNCiAgdHJhbnNpdGlvbi1kZWxheTogMzAwbXM7DQp9DQoNCi5uYXYgbGk6aG92ZXIgPiB1bCB7DQogIG9wYWNpdHk6IDE7DQogIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXM7DQogIHRyYW5zaXRpb24tZGVsYXk6IDMwMG1zOw0KfQ0KDQoubmF2IGxpIHVsIGxpIHsNCiAgcG9zaXRpb246IHJlbGF0aXZlOw0KfQ0KDQoubmF2IGxpIHVsIGxpIHsNCiAgcmlnaHQ6IDMwcHg7DQp9DQoNCg0K%7C)

Ver: [códico 2](https://codepen.io/camilo315853/pen/NWpyLwo?editors=0100)

El ejemplo no es perfecto, usa tus conocimientos de CSS para crear tu propio menú desplegable con tiempos de espera. ¡Comparte tu trabajo en la sección de aportes!

## Problemas de parpadeo
---
El problema del parpadeo sucede cuando un accionador no se encuentra en el lugar donde debería por la transformación. Por ejemplo, al realizar una animación pasa lo siguiente:

- Al mover el cursor sobre un elemento se traslada hacia la izquierda.
- Al trasladarse, deja de estar el cursor sobre el elemento, por lo que vuelve a su posición inicial.
- Al estar en su posición inicial, el cursor está sobre el elemento, entonces accionará nuevamente la transformación.

Ver: [código](https://codi.link/PGgzPk11ZXZlIGVsIGN1cnNvciBwb3IgZGViYWpvIGRlbCBwdW50bzwvaDM+DQo8ZGl2PjwvZGl2Pg==%7CZGl2IHsNCiAgd2lkdGg6IDEwMHB4Ow0KICBoZWlnaHQ6IDEwMHB4Ow0KICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgb3BhY2l0eTogMC44Ow0KDQp9DQoNCmRpdjpob3ZlciB7DQogIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0NXB4KTsNCn0NCg0KaDM6OmJlZm9yZXsNCiAgY29udGVudDogIiI7DQogIGRpc3BsYXk6IGJsb2NrOw0KICB3aWR0aDogMTBweDsNCiAgaGVpZ2h0OiAxMHB4Ow0KICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7DQogIGJvcmRlci1yYWRpdXM6IDUwJTsNCiAgcG9zaXRpb246IGFic29sdXRlOw0KICB0b3A6IDUwcHg7DQp9DQoNCg0K%7C)

La animación entró en un ciclo que se observará como un parpadeo, porque las transiciones entre hover y no hover son rápidas.
```css
/* Mal */
div {
  width: 100px;
  height: 100px;
  background-color: purple;
}

div:hover {
  transform: translateX(45px);
}
```
### ¿Cómo solucionar este problema?

Para solucionar el problema de parpadeo, coloca el elemento que se transformará dentro de un contenedor. Después, utiliza el elemento contenedor como el accionador de la transformación del elemento. De esta manera, siempre se estará haciendo hover en el sitio adecuado sin importar que el elemento cambie.
```css
/* Bien */
/* Elemento contenedor */
.container {
  width: 100px;
  height: 100px;
}

/* Elemento a transformar */
.item {
  width: 100px;
  height: 100px;
  background-color: purple;
}

/* Trigger */ 
.container:hover .item {
  transform: translateX(45px);
}
```

Ver: [código](https://codi.link/PGgzPk11ZXZlIGVsIGN1cnNvciBwb3IgZGViYWpvIGRlbCBwdW50bzwvaDM+DQo8ZGl2IGNsYXNzPSJjb250YWluZXIiPg0KICA8ZGl2IGNsYXNzPSJpdGVtIj48L2Rpdj4NCjwvZGl2Pg==%7CLyogRWxlbWVudG8gY29udGVuZWRvciAqLw0KLmNvbnRhaW5lciB7DQogIHdpZHRoOiAxMDBweDsNCiAgaGVpZ2h0OiAxMDBweDsNCiAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrOw0KICBjdXJzb3I6IHBvaW50ZXI7DQoNCn0NCg0KLyogRWxlbWVudG8gYSB0cmFuc2Zvcm1hciAqLw0KLml0ZW0gew0KICB3aWR0aDogMTAwcHg7DQogIGhlaWdodDogMTAwcHg7DQogIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsNCiAgb3BhY2l0eTogMC44Ow0KfQ0KDQovKiBUcmlnZ2VyICovIA0KDQouY29udGFpbmVyOmhvdmVyIC5pdGVtIHsNCiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ1cHgpOw0KfQ0KDQpoMzo6YmVmb3Jlew0KICBjb250ZW50OiAiIjsNCiAgZGlzcGxheTogYmxvY2s7DQogIHdpZHRoOiAxMHB4Ow0KICBoZWlnaHQ6IDEwcHg7DQogIGJhY2tncm91bmQtY29sb3I6IHJlZDsNCiAgYm9yZGVyLXJhZGl1czogNTAlOw0KICBwb3NpdGlvbjogYWJzb2x1dGU7DQogIHRvcDogNTBweDsNCn0NCg0KDQo=%7C)

## Propiedades recomendadas y no recomendadas para animar
---
Al hacer animaciones debemos fijarnos que no sean demasiado costosas computacionalmente para que no parezcan inestables y poco fluidas.

Para ello, debemos comprender un concepto clave llamado: el proceso de renderizado.

Resulta que, como el navegador no entiende el código que hacemos, debe hacer una transformación de ese código para que finalmente pueda ser entendido y visualizado en la pantalla.

Esa transformación se hace en una serie de pasos como los que puedes ver a continuación:
![](https://static.platzi.com/media/user_upload/browser-rendering%20%281%29-3bf8f82c-dcca-4cd0-b1fd-2f6f1bededea.jpg)

Sin embargo, los pasos que nos interesan en este momento son los últimos 3: Layout, Paint y Composite. Cada uno cumple un papel muy importante, pero no todas las propiedades pasan por estos 3 procesos.

Si una propiedad debe pasar por el paso de Layout, obligatoriamente debe pasar por Paint y Composite también. Si una propiedad debe pasar por el paso de Paint, obligatoriamente debe pasar por Composite también. Pero, si una propiedad debe pasar por el paso de Composite, no debe pasar por ningún otro paso.

Con lo anterior, podemos darnos cuenta de que hay propiedades que requieren un costo mayor que otras al tener que pasar por más pasos. Puedes revisar el proceso de renderizado que realiza cada propiedad en esta página: https://csstriggers.com/. Revisemos algunas de ellas:

- Propiedad height: En cada uno de los motores de renderizado, podemos darnos cuenta por la imagen de abajo que requiere de los pasos de Layout, Paint y Composite, lo cual es bastante costoso.

![](https://static.platzi.com/media/user_upload/height-2570e121-258b-48ce-be1b-8db416697b01.jpg)

- Propiedad background-color: Es una propiedad que no afecta el diseño (Layout) pero requiere una nueva capa de pintura (Paint), lo cual la hace una propiedad también costosa.
![](https://static.platzi.com/media/user_upload/background-color-e2fa18c3-ffca-4e46-a3b8-ef263a00cdc6.jpg)

- Propiedades transform y opacity: Estas dos propiedades sólo requieren del paso de Composite, lo cual las hace muy baratas de animar. Si necesitas modificar propiedades como width y left (propiedades costosas), puedes reemplazarlas usando la propiedad transform para tratar de lograr el mismo efecto.
![](https://static.platzi.com/media/user_upload/transform-1167320b-389a-4b40-b335-316cf586a5a9.jpg)
![](https://static.platzi.com/media/user_upload/opacity-b606d9c1-cef8-4678-bfb5-59edfb81ef59.jpg)

Finalmente, si sabemos por cuáles pasos de renderizado pasa cada una de las propiedades, sabremos con exactitud cuáles propiedades son más costosas y menos recomendadas para animar (como height, width y background-color), como también, cuáles propiedades son menos costosas y más recomendadas para animar (como transform y opacity).

Te comparto esta lectura por si quieres conocer más a profundidad cómo trabaja el motor de cada navegador con cada uno de los pasos que describimos anteriormente: https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/

## Aceleración de hardware y la propiedad will-change
---
La aceleración por hardware permite usar componentes específicos de tu ordenador para quitar trabajo al procesador de tu dispositivo. Uno de estos componentes puede ser una tarjeta gráfica, que puede usarse para renderizar o mostrar el contenido del navegador en tu pantalla.

### Propiedades al animar
En la clase anterior, aprendiste que existen propiedades que se deben animar y otras que no, esto se debe a un proceso de renderizado, este proceso consta de varios pasos: JavaScript, Style, Layout y Composite. Los tres últimos determinan si son adecuados para una animacion, con respecto al rendimiento. Las propiedades recomendables son opacity y transform, porque estas solo necesitan del último paso.

### Problemas de la aceleración por hardware
- Las imágenes no cargan correctamente.
- En los vídeos, la imagen o el sonido no se reproduce correctamente.
- Algunas partes del navegador aparecen mal diseñadas.

### Propiedad will-change
La propiedad will-change de CSS sirve para anticipar y preparar los cambios de una transformación. Este tipo de optimizaciones puede aumentar la capacidad de respuesta de una página al realizar un trabajo potencialmente costoso en rendimiento.

En el siguiente ejemplo, observa la transición con una propiedad no recomendable y luego agregando la propiedad will-change. ¿Notaste que la transición no es fluida? ¿Qué tanto tiembla el elemento?

[Ejemplo comparativo para usar “will-change”.{target="_blank"}](https://codi.link/PGgyPkNvbG9jYSBlbCBjdXJzb3Igc29icmUgZWwgZWplcmNpY2lvPC9oMj4NCjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+DQogIDxoMz5Qcm9waWVkYWQgdHJhbnNmb3JtIC0gUmVjb21lbmRhYmxlPC9oMz4NCjxkaXYgY2xhc3M9InRyYW5zZm9ybSI+PC9kaXY+DQo8aDM+UHJvcGllZGFkIG1hcmdpbiAtIE5vIHJlY29tZW5kYWJsZTwvaDM+DQo8ZGl2IGNsYXNzPSJtYXJnaW4iPjwvZGl2Pg0KPC9kaXY+%7CLmNvbnRhaW5lcnsNCiAgY3Vyc29yOiBwb2ludGVyOw0KfQ0KDQouY29udGFpbmVyIGRpdiB7DQogIHdpZHRoOiAxMDBweDsNCiAgaGVpZ2h0OiAxMDBweDsNCiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlOw0KfQ0KDQoudHJhbnNmb3Jtew0KICAvKiB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyAqLw0KICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTBzOw0KfQ0KDQoubWFyZ2luew0KICAvKiB3aWxsLWNoYW5nZTogbWFyZ2luLWxlZnQ7ICovDQogIHRyYW5zaXRpb246IG1hcmdpbiAxMHM7DQp9DQoNCi5jb250YWluZXI6aG92ZXIgLnRyYW5zZm9ybXsNCiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTsNCn0NCg0KLmNvbnRhaW5lcjpob3ZlciAubWFyZ2luew0KICBtYXJnaW4tbGVmdDogMjAwcHg7DQp9DQoNCg0KDQo=%7C)

El elemento con la propiedad no recomendable tiembla un poco porque la animación no es fluido y requiere de más recursos, impactando en el rendimiento de la animación.

### Documentación de will-change
[Documentación de will change - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)

[will-change Propiedad css para anticipar y preparar los cambios](https://escss.blogspot.com/2014/05/will-change-propiedad-css.html)

### Preferencias de movimiento reducido

Las preferencias de movimiento reducido consisten en que el usuario notifica al sistema que prefiere eliminar o reemplazar las animaciones de la página web.

Si tenemos animaciones que muestran un contenido específico después de un accionador de eventos (voltear la carta, mostrar algo, menús desplegables, etc.), esto provoca que el usuario no pueda verlo.

***Media query “prefers-reduced-motion”***
La media query prefers-reduced-motion si el usuario tiene alguna opción para eliminar o reemplazar animaciones. Los dos posibles valores que recibe son:

- no-preference: indica que el usuario no tiene preferencias para reducir las animaciones.
- reduce: indica que el usuario tiene preferencias para reducir las animaciones.
```css
@media (prefers-reduced-motion: no-preference) {
    /* Código de animaciones */
}

/* Código sin animaciones */
```
En esta media query nos permitirá colocar el código que tiene animaciones, y dejar afuera el código sin animaciones como forma de accesibilidad. De esta manera, la página web será más accesible a todo el mundo.

Ver: 
- [Código 1](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iZnJvbnQiPlNlw7HDoWxhbWU8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iYmFjayI+8J+krzwvZGl2Pg0KPC9kaXY+DQoNCg==%7CaHRtbCwgYm9keXsNCiAgcGFkZGluZzogMDsNCiAgbWFyZ2luOiAwOw0KICBoZWlnaHQ6IDEwMHZoOw0KICBkaXNwbGF5OiBncmlkOw0KICBwbGFjZS1jb250ZW50OiBjZW50ZXI7DQogIGZvbnQtc2l6ZTogMS41cmVtOw0KfQ0KDQouY29udGFpbmVyew0KICB3aWR0aDogMjAwcHg7DQogIGhlaWdodDogMjAwcHg7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgcG9zaXRpb246IHJlbGF0aXZlOw0KDQp9DQoNCi5jb250YWluZXIgZGl2ew0KICB3aWR0aDogMTAwJTsNCiAgaGVpZ2h0OiAxMDAlOw0KICBkaXNwbGF5OiBncmlkOw0KICBwbGFjZS1jb250ZW50OiBjZW50ZXI7DQogIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCn0NCg0KLmZyb250ew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOw0KfQ0KDQouYmFja3sNCiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsNCiAgb3BhY2l0eTogMDsNCn0NCg0KDQoNCi5jb250YWluZXI6aG92ZXIgLmJhY2t7DQogIC8qIFByb3BpZWFkYWQgYWdyZWdhZGEgKi8NCiAgb3BhY2l0eTogMTsNCn0NCg0KQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7DQoNCg0KLmNvbnRhaW5lcnsNCiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsNCiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzOw0KDQp9DQoNCi5jb250YWluZXIgZGl2ew0KICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47DQp9DQoNCg0KLmJhY2t7DQogIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOw0KICBvcGFjaXR5OiAxOw0KDQp9DQoNCi5jb250YWluZXI6aG92ZXJ7DQogIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOw0KfQ0KDQoNCn0NCg0KDQo=%7C)

- [Código 2](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iZnJvbnQiPlNlw7HDoWxhbWU8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iYmFjayI+8J+krzwvZGl2Pg0KPC9kaXY+DQoNCg==%7CaHRtbCwgYm9keXsNCiAgcGFkZGluZzogMDsNCiAgbWFyZ2luOiAwOw0KICBoZWlnaHQ6IDEwMHZoOw0KICBkaXNwbGF5OiBncmlkOw0KICBwbGFjZS1jb250ZW50OiBjZW50ZXI7DQogIGZvbnQtc2l6ZTogMS41cmVtOw0KfQ0KDQouY29udGFpbmVyew0KICB3aWR0aDogMjAwcHg7DQogIGhlaWdodDogMjAwcHg7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgcG9zaXRpb246IHJlbGF0aXZlOw0KDQp9DQoNCi5jb250YWluZXIgZGl2ew0KICB3aWR0aDogMTAwJTsNCiAgaGVpZ2h0OiAxMDAlOw0KICBkaXNwbGF5OiBncmlkOw0KICBwbGFjZS1jb250ZW50OiBjZW50ZXI7DQogIHBvc2l0aW9uOiBhYnNvbHV0ZTsNCn0NCg0KLmZyb250ew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOw0KfQ0KDQouYmFja3sNCiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsNCiAgLyogUHJvcGllYWRhZCBhZ3JlZ2FkYSAqLw0KICBvcGFjaXR5OiAwOw0KfQ0KDQoNCg0KLmNvbnRhaW5lcjpob3ZlciAuYmFja3sNCiAgLyogUHJvcGllYWRhZCBhZ3JlZ2FkYSAqLw0KICBvcGFjaXR5OiAxOw0KfQ0KDQoNCg0K%7C)

- [Código 3](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iZnJvbnQiPlNlw7HDoWxhbWU8L2Rpdj4NCiAgPGRpdiBjbGFzcz0iYmFjayI+8J+krzwvZGl2Pg0KPC9kaXY+DQoNCg==%7CaHRtbCwgYm9keXsNCiAgcGFkZGluZzogMDsNCiAgbWFyZ2luOiAwOw0KICBoZWlnaHQ6IDEwMHZoOw0KICBkaXNwbGF5OiBncmlkOw0KICBwbGFjZS1jb250ZW50OiBjZW50ZXI7DQogIGZvbnQtc2l6ZTogMS41cmVtOw0KfQ0KDQouY29udGFpbmVyew0KICB3aWR0aDogMjAwcHg7DQogIGhlaWdodDogMjAwcHg7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgcG9zaXRpb246IHJlbGF0aXZlOw0KICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOw0KICB0cmFuc2l0aW9uOiBhbGwgMnM7DQoNCn0NCg0KLmNvbnRhaW5lciBkaXZ7DQogIHdpZHRoOiAxMDAlOw0KICBoZWlnaHQ6IDEwMCU7DQogIGRpc3BsYXk6IGdyaWQ7DQogIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsNCiAgcG9zaXRpb246IGFic29sdXRlOw0KICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47DQp9DQoNCi5mcm9udHsNCiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTsNCn0NCg0KLmJhY2t7DQogIGJhY2tncm91bmQtY29sb3I6IGdyZXk7DQogIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOw0KfQ0KDQouY29udGFpbmVyOmhvdmVyew0KICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsNCn0NCg0KDQo=%7C)
