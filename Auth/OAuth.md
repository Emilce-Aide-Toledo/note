Recursos:

https://www.postman.com/

https://github.com/tulios/json-viewer

https://www.innovaportal.com/innovaportal/v/75/1/innova.front/que-es-una-intranet

https://www.digitalocean.com/community/tutorials/authenticate-a-node-es6-api-with-json-web-tokens


## Stack de seguridad para aplicaciones modernas
---
La seguridad ““clásica”” se basa en redes conectadas a una intranet, todos los conceptos y protocolos que manejábamos se limitan a controlar la seguridad en intranets.

Todo esto cambio gracias a la revolución móvil y a las arquitectura de aplicaciones basadas en microservicios: en vez de conectarnos a servicios internos de nuestras compañías, nuestros dispositivos se conectan a internet, una red publica que deja fuera los controles de seguridad que solíamos utilizar para controlar redes privadas.

El nuevo stack de tecnologías para controlar la seguridad de nuestras aplicaciones se compone principalmente de los siguientes estándares:

- JSON Web Tokens (JWT): Aunque existen muchas alternativas, este estándar propone utilizar tokens cifrados con las credenciales de autenticación de los usuarios en vez de guardar estos estados con cookies en los servidores. Por esto mismo los JWT son bastante compatibles con APIs RESTful.

- OAuth 2.0: Es un flujo de autorización (recuerda que autenticación y autorización son conceptos relacionados pero diferentes) que, por ser un estándar, nos permite aprenderlo y manejar los mismos pasos para delegar permisos en diferentes aplicaciones.

- OpenID Connect: Es un estándar de identificación digital basado en OAuth 2.0, nos permite identificar usuarios ende una página web a través de URLs que podemos verificar con cualquier servidor que soporte el protocolo.


## Autenticación
---
La autenticación consiste en verificar la identidad de nuestros usuarios, es decir, debemos asegurarnos de que los usuarios existen, si pueden ingresar a nuestro sistema, si tienen los permisos adecuados, entre otras cosas, podemos utilizar mecanismos de usuario y contraseña, mensajes de texto, envío de URLs por correo electrónico, entre otras.

## Autorización
---
La autorización consiste en definir los permisos y limitaciones de los usuarios que han pasado el proceso de autenticación, recuerda no confundir los términos. Este proceso de autorización sucede, por ejemplo, cuando permitimos que una aplicación se conecte a nuestra cuenta de Google, muchas veces no queremos que estas aplicaciones tengan todos los permisos de nuestra cuenta (para enviar o leer los correos, por ejemplo), pero si podemos autorizar otros permisos como la cámara o el calendario.

Esto mismo sucede con nuestras aplicaciones, por ejemplo, algunos usuarios pueden tener permisos para escribir, actualizar o eliminar cierto contenido, mientras que otros solo pueden visualizar e interactuar con estas publicaciones.

El desafío de esta clase es buscar y describir en la sección de comentarios una o más librerías que nos permitan realizar ambos procesos: autenticación y autorización.

