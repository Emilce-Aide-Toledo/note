![](https://i.ibb.co/pyPMPfb/Captura-de-Pantalla-2022-05-03-a-la-s-8.webp)

**API REST** es una API diseñada bajo los principios de REST y es útil para interacciones simples. En otras palabras, son el puente de comunicación entre frontend y backend.

**REST** es un acrónimo que significa Representational State Transfer o transferencia de estado representacional en español.

### Qué es una API REST o API RESTful
Una API RESTful es una interfaz que utiliza los principios de REST para comunicarse hacia y desde un servidor. El principio más importante en las APIs RESTful es el uso de los métodos HTTP:  [Métodos de petición HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Methods "Métodos de petición HTTP")

Estos métodos son empleados por los clientes para crear, manipular y eliminar datos en los servidores, respectivamente.

### Qué es una API
La palabra API es un acrónimo que significa Interfaz de Programación de Aplicaciones (Application Programming Interface). Es un sistema que funciona como intermediario entre diferentes aplicaciones de software y su función es permitir que estas aplicaciones puedan comunicarse entre sí. Cada vez que usas una app como WhatsApp, Instagram o Facebook, estás usando una API sin saberlo.

**Elementos de una API REST o API RESTful**

Para que una API sea REST esta debe de funcionar bajo tres conceptos:
- Recurso: todo dentro de una API RESTful debe ser un recurso.
- URI: los recursos en REST siempre se manipulan a partir de la URI, identificadores universales de recursos.
- Acción: todas las peticiones a tu API RESTful deben estar asociadas a uno de los verbos de HTTP: GET para obtener un recurso, POST para escribir un recurso, PUT para modificar un recurso y DELETE para borrarlo.

### Qué es REST
REST es un estilo de arquitectura de software enfocado en el intercambio de recursos y basado en HTTP. Le agrega una capa muy delgada de complejidad y abstracción a HTTP. Mientras que HTTP es transferencia de archivos, REST se basa en la transferencia de recursos.

**En qué casos sí conviene usar REST:**

Conviene usarlo cuando las interacciones son simples, dónde lo que queremos hacer son las operaciones básicas de crear un recurso, quitar recursos o modificarlos. También cuando los recursos de hardware son limitados, por que como es muy cercano al HTTP no hay más que necesitemos instalar.

**Cuando no conviene usar REST:**

Cuando las interacciones son un poco más complejas, es decir necesitamos que el servidor aporte más lógica, ejemplo: la validación de algún documento.

**Cómo funciona REST**

REST es un conjunto de principios que definen la forma en que se deben crear, leer, actualizar y eliminar los datos. Es una arquitectura conocida como cliente-servidor, en la que el servidor y el cliente actúan de forma independiente, siempre y cuando la interfaz sea la misma al procesar una solicitud y una respuesta, que son los elementos esenciales.

El servidor expone la API REST y el cliente hace uso de ella. El servidor almacena la información y la pone a disposición del usuario, mientras que el cliente toma la información y la muestra al usuario o la utiliza para realizar posteriores peticiones de más información.

**REST es muy útil cuando:**
- Las interacciones son simples.
- Los recursos de tu hardware son limitados.
