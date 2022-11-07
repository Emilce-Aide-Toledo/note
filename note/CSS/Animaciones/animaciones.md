# Animaciones 
---
![](https://static.platzi.com/media/public/uploads/12_principles_of_animation_14a18c8a-cc2c-492d-af3b-fae713c4fda6.gif)

[Ver](https://cssanimation.rocks/principles/)

https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes

https://developer.mozilla.org/en-US/docs/Web/CSS/animation

https://dev.to/cchana/explained-creating-a-zigzag-pattern-with-just-css-13g1

https://www.magicpattern.design/tools/css-backgrounds

https://css-tricks.com/a-few-background-patterns-sites/

***Diferencia entre transiciones y animaciones***

Las transiciones solo pueden ir de un punto A a uno B en determinado tiempo. Sin embargo, en las animaciones, en el lapso de tiempo que va del punto A al B (osea, en el punto intermedio), puede haber ciertos movimientos.


***Keyframes***
Entonces, sabiendo cual es la diferencia entre las animaciones y transiciones, es hora de saber como los @keyframes nos ayudan a animar a nuestros elementos.
.
Un keyframe no es mas que una linea del tiempo que empieza desde el punto A y termina en el punto B. Nosotros le podemos decir a ese keyframe en que parte del “camino” modifique al elemento. Además de que nosotros le decimos cuantos segundos tiene que durar ese “viaje”.

La directiva @keyframes te permite definir el comportamiento de tu animación punto por punto, y cualquier elemento puede usar esta animación por medio de la regla animation-name.

Dentro de @keyframes especificamos cada punto de nuestra animación por medio de porcentajes, por ejemplo, tomando en cuenta este ejemplo:
![](https://media.giphy.com/media/p1ZLyNFGfKSDAH88Th/giphy.gif)

Podríamos tener un @keyframes de esta forma:
```css
@keyframes jump {

    /* Punto A */
    0% {

    }

    /* Punto B */
    40% {

    }

    /* Punto C */
    60% {

    }

    /* Punto D */
    90% {

    }

}
```
 Mientras más cerca esté un porcentaje de otro más rápido será la transición de un punto a otro

 ### Animation duration
 ---
 Debes decirle cuánto va a durar la animación y cuántas veces se va a repetir esa animación, es todo 👀. Únicamente con esas dos propiedades ya tienes suficiente paa que una animación empiece a correr.

Otro ejemplo de animación sencillo, además de el de la clase, podría ser el lanzamiento de algún objeto:

![](https://media.giphy.com/media/iHu3HYAwoXTxSwf1m1/giphy.gif)

Cuando lanzamos un objeto es normal que a veces gire y se eleve un poco en el aire, para hacer una animación similar, solo necesitariamos 3 puntos:

Punto A: El inicio de la animación, el objeto tendrá un left inicial y un transform inicial:
```css
0% {
    left: 50px;
    transform: rotate(0deg);
}
```
Punto B: A la mitad de la animación el objeto debió elevarse un poco, por tanto le cambiamos su propiedad en bottom
```css
50% {
    bottom: 60%;
}
```
Punto C: Al final de la animación el objeto debió caer y debió de haber dado unas cuantas vueltas, también debió de haberse movido, por lo que modificamos las propiedades left y transform, el bottom no lo modificamos porque por defecto volverá a su estado inicial:
```css
100% {
    left: 1080px;
    transform: rotate(360deg);
}
```
Al final nuestro Keyframe podría quedar así y esto simularía un objeto que es lanzado 
```css
@keyframes throw {
  
  0% {
    left: 50px;
    transform: rotate(0deg);
  }
  
  50% {
    bottom: 60%;
  }
  
  100% {
    left: 1080px;
    transform: rotate(360deg);
  }
  
}
```
Obviamente necesitariamos tener un objeto al cual aplicarle la animación, este objeto debe tener un position: absolute; con respecto al contenedor padre, ya hice la tarea, así que pueden ver el código completo de esta animación aquí 

https://codepen.io/retaxmaster/pen/eYvGVOK

Casi todos son estilos para que se vea más bonito y para preparar los elementos en su posición incial, pero el proceso de animado te lo acabo de explicar aquí.

## Animation timing function, iteration count y delay
---
- Animation Timing Function: Básicamente es la aceleración con la cual correrá nuestra animación.
- Animation Iteration Count: Es el número de veces que se repetirán nuestra animación.
- Animation Delay: Es el tiempo que nuestra animación tardará en empezar.

La función cubic-bezier() me encanta porque podemos definir velocidades personalizadas :3. Me gustaría complementar la clase con otro ejemplo práctico de animación, por ejemplo, esta animación que hice al principio de un objeto saltando:

![](https://media.giphy.com/media/p1ZLyNFGfKSDAH88Th/giphy.gif)

Si quisiera hacer esta animación en CSS quedaría algo así, tomando en cuenta sus 4 puntos:

Punto A: Simplemente inicia con un left inicial:
```css
0% {
    left: 50px;
}
```
Punto B: Para este punto nuestro objeto simplemente se movió unos cuantos píxeles a la derecha y se encogió un poco:
```css
40% {
    left: 400px;
    height: 65px;
    width: 130px;
    bottom: 40%;
}
```
Punto C: Aquí el objeto ya dio el salto hacia más a la derecha y se hizo un poquito más grande, por lo que debería estar en su punto más alto:
```css
60% {
    left: 780px;
    height: 140px;
    width: 100px;
    bottom: calc(40% + 150px);
  }
```
  Punto D: Al final el objeto cae de nuevo, obviamente moviéndose aún más a la derecha 
```css
  90%, 100% {
    left: 1080px;
    bottom: 40%;
}
```
Aquí puse al 90% y al 100% juntitos porque quiero que tanto en el 90% commo en el 100% se conserven los mismos valores 

Al final tendría este resultado:
![](https://media.giphy.com/media/8dkG7h9AX72Pc71wLQ/giphy.gif)
Así de fácil es crear animaciones con CSS, simplemente necesitas pensar qué acción estará haciendo tu objeto en cada punto y con base en ello puedes empezar a programar la animación.

Obviamente necesitariamos tener un objeto al cual aplicarle la animación, este objeto debe tener un position: absolute; con respecto al contenedor padre, ya hice la tarea, así que pueden ver el código completo de esta animación aquí 


### Animation direction, fill mode y play state
---

1. Animation Direction

Dirección de la animación.

- Normal: La animación se reproduce hacia delante en cada ciclo. Por defecto.
- Reverse: La animación se reproduce hacia atrás en cada ciclo.
- Alternate: La animación se invierte en cada ciclo, y la primera iteración se reproduce hacia adelante.
- Alternate-reverse: La animación invierte la dirección en cada ciclo, y la primera iteración se reproduce hacia atrás.
2. Animation Fill Mode
Estado de cierta animación. Al inicio o final.

3. Animation Play State
Define si la animación se reproduce o es pausada. (running or paused)

### CSS Triggers: layout, paint y composite
--- 
- Composite: Ordena las partes de la página. Propiedades como opacity y transform

- Paint: Rellena píxeles. Implica colores, imágenes, textos, sombras

- Layout: Diseño de la página. Ancho, margin, padding, border

https://web.dev/lcp/

https://web.dev/cls/

https://csstriggers.com/

Buenas Practicas
---
- Usa dentro de lo posible propiedades que solo tengan que pasar por el proceso de Composite.

- Si necesitas animar alguna propiedad que sea muy costosa (como width, height, left, entre otras), trata de encontrar otra propiedad que sea menos costosa con la que puedas lograr el mismo resultado (o al menos un resultado similar).

- Evita animar muchas propiedades al mismo tiempo.
- Si necesitas esconder elementos, normalmente se usan las propiedades opacity y visibility en vez de usar la propiedad display.

- Evita hacer animaciones que ocurran al hacer scroll, ya que el evento que escucha el scroll se ejecuta una gran cantidad de veces. Mejor espera a llegar a cierto punto de la pantalla y ahí ejecutas la animación.

