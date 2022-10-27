
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
