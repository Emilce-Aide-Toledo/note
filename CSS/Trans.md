
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

