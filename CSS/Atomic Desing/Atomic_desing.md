# Atomic Design

Atomic Design es una metodología de diseño que facilita la creación de aplicaciones en React. Permite trabajar tomando en cuenta cada componente y establecer la mejor forma de dividir los elementos claves para construir interfaces.

**¿Para qué sirve el diseño atómico o Atomic Design?**

El diseño atómico o Atomic Design permite reconocer los elementos más simples de una aplicación y poco a poco identificar las estructuras más complejas. De esta forma, la creación de una aplicación se podrá llevar a cabo de manera metódica y eficaz.

Esta metodología no solo hace posible la definición de un sistema de diseño, sino que facilita la construcción de la arquitectura de una aplicación o interfaz web.
![](https://static.platzi.com/media/user_upload/Atomic_Design_atomos_Moleculas_Organismos-830ca7c5-8871-4d7d-a9d0-675ef510ae29.jpg)

![](https://static.platzi.com/media/user_upload/Atomic_Design_Templates_Pagina-90aaae6f-524f-43b4-8df1-c49babb5bd03.jpg)

***Ventajas de usar Atomic Design***

Estos son algunos de los beneficios de usar el diseño atómico para la creación de interfaces web:

- Es la forma más común de crear interfaces y facilita la inclusión de nuevas funcionalidades cuando el producto madure
- Permite construir un sistema de diseño y que el equipo trabaje con base en él
- Facilita la comunicación y la colaboración con otras áreas y roles como desarrollo, producto o negocios
- Permite crear diseños consistentes y escalables

***5 etapas de Atomic Design***

El diseño atómico o Atomic Design plantea un paralelo con la composición de la materia en el universo. Por ello, contempla las siguientes 5 fases:
![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-04-21%20a%20la%28s%29%2011.39.53-5f7a8312-53a5-4a4c-8ab0-c6b3ac8e2655.jpg)

- Átomos
- Moléculas
- Organismos
- Plantillas o templates
- Páginas

![](https://static.platzi.com/media/user_upload/Atomic_Design_Proceso-cf407fc0-dd28-4137-8b40-db8c78f75a53.jpg)

1. **Átomos. Primer nivel de abstracción**

En este nivel se consideran pequeños elementos o unidades claves de la aplicación. Por ejemplo, una imagen, un texto o una figura, entre otros.

Cuando diseñes una Interfaz de Usuario (UI), toma en cuenta en este nivel los botones, etiquetas HTML, imágenes o entradas de texto.

2. **Moléculas. Combinación de varios componentes para dar sentido**

Las moléculas tienen una función específica para la cual necesitan varios átomos. En interfaces, por ejemplo, una sección como comentario de Twitter, otra de YouTube con la opción “me gusta” o “no me gusta”, un avatar o el menú en los videos de Platzi para avanzar o retroceder en la clase, todos ellos son moléculas.

Están compuestas por elementos más pequeños, como un botón o cuadro de texto. Este es el segundo nivel. Crear moléculas es simple, recuerda que deben tener una función única en la aplicación.

3. **Organismos. Sección definida en la aplicación**

Los organismos pertenecen a un nivel mucho más complejo. Lo más interesante es que tienen vida propia y pueden interactuar en una manera muy amplia con otros organismos.

En el diseño de interfaces, imagina el header, que está compuesto de varios elementos y tiene un impacto en la app. Imagina también una sección como una tienda de ropa en la página web: Cada artículo consta de una imagen, precio y un orden particular. Puedes verlo así:

Átomo⇒ imagen, precio, descripción.

Molécula ⇒ el cuadro que contiene a la imagen, el precio y a la descripción

Organismo ⇒ todos los cuadros de productos ordenados en forma de tabla

El organismo puede usar moléculas del mismo tipo o diferentes. El punto clave, es que no trates de abarcar tanto y asegurarte de que pertenezcan a una sección definida en la app.

4. **Templates o plantillas. Articulan la estructura del contenido**

Es la plantilla el elemento en el cual se organizarán los organismos. Es decir, el esqueleto que indica dónde irán, por ejemplo, el header, el footer y la sección de comentarios en la página de inicio.

La estructura del contenido permite identificar los tamaños de las imágenes y la longitud de caracteres.

5. **Páginas. Contenido en acción**

Las páginas (pages) representan la página de una aplicación funcionando. Son la unión de templates que forman el proyecto final que se presenta al usuario y conjugan lo creado con un sentido y funcionamiento establecidos.

En resumen, las páginas son lo que los usuarios ven y con lo que van a interactuar.

Algo interesante del diseño atómico o Atomic Design es que permite realizar actualizaciones de manera fácil, porque se puede modificar, por ejemplo, un elemento del primer nivel (botón) y esto se replica en los demás niveles.

![](https://static.platzi.com/media/user_upload/Atomic_Design_Platzigrafia-d1e089e0-02a2-4ebf-b116-bece9422cbfe.jpg)

![](https://static.platzi.com/media/user_upload/Screen%20Shot%202020-04-27%20at%2011.21.33%20AM-5f8bef2e-622f-46a7-89bc-8233fca14bc8.jpg)

https://bradfrost.com/blog/post/atomic-web-design/

https://uxdesign.cc/atomic-design-how-to-design-systems-of-components-ab41f24f260e

https://projects.invisionapp.com/freehand/auth?allowTeamSelection=false&redirectURL=https%3A%2F%2Fprojects.invisionapp.com%2Ffreehand%2Fdocument%2FYtocDcEwy


