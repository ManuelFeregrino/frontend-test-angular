# FrontendTestAngular

El proyecto proporcionoa una interfaz grafica para la REST API apirest-test-node:
https://github.com/ManuelFeregrino/apirest-test-node

* Visualización de números primos
* Localidades y servicios
* Interfaz web responsiva de los personajes de Marvel 

Es necesarío que antes de navegar por la aplicación primero se levante el servidor, ya sea con el comando `npm start` ó bien, construyendo la imagen del docker con el comando `docker build -t node-restapi .`, seguido de `docker run -d -p 3000:3000 node-restapi`, ya que el ejercicio 1 y 2 necesitan del API para poder recuperar la información, de lo contrario solo podra navegar dentro del ejercicio 3.

## Pasos a seguir

1. Descargar el repositorio del API https://github.com/ManuelFeregrino/apirest-test-node

2. Levantar el API
* 1 Mediante la terminal posicionarse dentro de la carpeta del proyecto (restapi-node).
* 2 Construir la imagen: `docker build -t node-restapi .`
* 3 Correr el docker: `docker run -d -p 3000:3000 node-restapi`

3. Levantar el servidor web
* 1 Mediante la terminal posicionarse dentro de la carpeta del proyecto (frontend-test-angular).
* 2 Instalar los modulos de node: `npm install`
* 3 Correr: `ng serve` ó `ng serve --open`
* 4 Encaso de usar `ng serve` navegar a `http://localhost:4200/`
