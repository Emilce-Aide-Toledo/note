## Herramientas de Diseño
---
Algunas de las herramientas principales son:

- ***Arquitecturas.***

Cuando hacemos css tenemos una metodología de trabajo, que nos facilita el programar.

- ***Pre y post procesadores***

Agregar prefijos y propiedades de acuerdo en que navegador estemos trabajando. Aunque siempre hay que verificar sus pros y contras.

- ***Diseño de componentes.***

Trabajar con componentes, a partir del elemento mas pequeño.

- ***Frameworks.***

Modelos de trabajo que nos facilita crear diseños web.

- ***Performance***

Verificar el rendimiento de nuestro código.

- ***Accesibilidad***

Lograr que todas las personas puedan acceder a nuestros sitios web.

- ***Evergreen browsers***

Los Evergreen browsers son navegadores que se actualizan constantemente a futuras versiones que existen.

[PDF Completo](chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://static.platzi.com/media/public/uploads/sliides-curso-de-css-grid-layout_5d392acf-26ce-4cf6-9fde-262064f0e019.pdf)

## Técnicas de alineamiento antes de CSS Grid
--- 
[Técnicas de alineamiento antes de CSS Grid](https://www.canva.com/design/DAEPvl0m0Zs/o4ZuT2i7lVDw3QX1yLpDUg/view?utm_content=DAEPvl0m0Zs&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton#14)

https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

https://cybmeta.com/colapso-de-margenes-en-css

Interesante: https://platzi.com/clases/2222-css-grid-layout/36033-tecnicas-de-alineamiento-antes-de-css-grid-margin-/

## Modos de escritura y ejes de alineamiento
---
[Modos de escritura y ejes de alineamiento](https://www.canva.com/design/DAEPwdLmsWI/GfZVmQN4tivhrfzEMRSjkw/view?utm_content=DAEPwdLmsWI&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

La propiedad writing-mode define si los renglones de texto se disponen horizontal o verticalmente y la dirección en que avanzan los bloques.

horizontal-tb

El contenido fluye horizontalmente de izquierda a derecha y verticalmente de arriba hacia abajo. El próximo renglón horizontal se posiciona debajo del renglón anterior.

vertical-rl

El contenido fluye verticalmente de arriba hacia abajo y horizontalmente de derecha a izquierda. El próximo renglón vertical se posiciona a la izquierda del renglón anterior.

vertical-lr

El contenido fluye verticalmente de arriba hacia abajo y horizontalmente de izquierda a derecha. El próximo renglón vertical se posiciona a la derecha del renglón anterior.

sideways-rl

El contenido fluye verticalmente de arriba hacia abajo y todos los glifos, incluidos aquellos de los sistemas de escritura verticales, se colocan de lado hacia la derecha.

sideways-lr

El contenido fluye verticalmente de arriba hacia abajo y todos los glifos, incluidos aquellos de los sistemas de escritura verticales, se colocan de lado hacia la izquierda.

Cosas a tener en cuenta a la hora de usar writing mode:
El modo de escritura.
- La dirección.
- La orientación del texto.

Para esto hay que ver los elementos bloque y elementos en linea.

display-block: (horizontal)

Ocupan todo el espacio de su elemento padre (contenedor).

- Fuerzan un salto de línea (ocupan todo el ancho disponible).

- Respetan el width, el height, el margin-top y el margin-bottom indicados por el usuario.

- Algunos son:

div, p, h1, h2, h3, h4, h5, h6, hr, ol, ul, table, li.
display-inline: (vertical)

- Son apilables.
- No tienen ni margin-top ni margin-bottom (por mucho que se lo indiques en el CSS).
- Si tienen margin-left y margin-right.
No respetan ni width ni height.
- Estas medidas dependerán del tamaño en píxels de su contenido.
- Algunos son: a, span, label, strong, br, input, textarea, abbr


La propiedad overflow: hidden; sirve para ocultar cualqueir elemento hijo que se salga del elemento padre (siempre y cuando el elemento padre tenga dicha propiedad). Por ejemplo, si tu elemento padre tiene una altura de 500px, pero dentro tienes un texto que rebasa esos 500px, con un overflow: hidden; en el padre puedes hacer que se oculte todo lo que se salga 

## Propiedades físicas y lógicas en CSS
---
[Propiedades físicas y lógicas en CSS](https://www.canva.com/design/DAEPwadrvmg/ldmhPG0L9qzRRhjTaYO9KQ/view?utm_content=DAEPwadrvmg&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

## Técnicas de alineamiento con Flexbox
---
[Técnicas de alineamiento con Flexbox](https://www.canva.com/design/DAEPwlhbCcE/TI_WagM_hIe6RoURIJOJeA/view?utm_content=DAEPwlhbCcE&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton#1)

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Para Dibujar
---
https://a.singlediv.com/

https://dev.to/raulmar/no-tengas-miedo-a-dibujar-con-css-1ck

https://www.youtube.com/watch?v=Y0_FMCji3iE&ab_channel=dotconferences

https://www.youtube.com/channel/UCSRhwaM00ay0fasnsw6EXKA

## Grid y las relaciones padre e hijos inmediatos 
---
[Grid y las relaciones padre e hijos](https://www.canva.com/design/DAEW0j7Iqqk/4wH6BM4jurjRl9rba-spuQ/view?utm_content=DAEW0j7Iqqk&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

### Lines, tracks, cell, area, gutters, grid axis, grid row, grid column
--- 
[Ver](https://www.canva.com/design/DAEW0pSs00Q/MnL5x4rrSaC7U5F_-1fWQQ/view?utm_content=DAEW0pSs00Q&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)


