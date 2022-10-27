
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

