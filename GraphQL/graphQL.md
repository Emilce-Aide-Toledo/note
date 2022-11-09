https://graphql.org/

https://www.howtographql.com/

https://graphql.org/community/

https://graphql.org/foundation/


GraphQL fue creado por Facebook en el 2015 para resolver ciertas limitaciones que en algunos casos presenta REST

Un nuevo paradigma aplicado a la necesidad que siempre han tenido los desarrolladores de realizar intercambios de información entre diferentes aplicaciones.

GraphQL cuenta con una forma estandarizada para definir todas las interacciones posibles con la información, haciendo posible que la manera de escribir y usar una API sea mas predecible y entendible

Ventajas

- Un Lenguaje agnóstico que permite definir de una forma clara y simple los objetos y acciones del API.

- Una validación automática de la información a ingresar

- Control de errores de una manera uniforme y predecible.

- Una documentación mínima autogenerada que permite saber exactamente cómo debe ser usado el API tanto a la hora de pedir y enviar información.

- Un entorno de desarrollo amigable donde se puede probar todas las interacciones.


## Schema y types
---
El Schema es la base de una API en GraphQL, es el encargado de describir todos los tipos de información que va a contener.

Para la creación de este proyecto usaremos una herramienta llamada npx, para ello primero debes instalarlo con el comando:

```
npm i -g npx
```

Una vez instalado, dentro de la carpeta de nuestro proyecto vamos a correr el siguiente comando:

```
npx license mit > LICENSE && npx gitignore node && git init && npm init -y
```

Ya que termina de correr el comando es momento de añadir la dependencia de GraphQL a nuestro proyecto:


```
npm i graphql
```
Dentro de GraphQL contamos con distintos tipos de datos escalares:

- String
- Int
- Float
- Boolean
- ID

```javascript
graphql({
    schema: schema,
    source: '{ hello }'})
.then((data) => {
    console.log(data);
})
.catch(e => {
    console.log(e);
});

```
## Queries y Resolvers
---
Una query permite ejecutar una petición al API, dentro de una query debes indicar la consulta que quieres ejecutar y los campos que deseas obtener. GraphQL te va a devolver la información que solicitaste dentro del objeto data.

El resultado de tu petición no se va a ejecutar de manera mágica, para ello debes definir el objeto resolvers, este objeto va a contener una propiedad del mismo nombre que la query que va a resolver o ejecutar.

