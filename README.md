# FrontendTestAngular

El proyecto proporcionoa una interfaz grafica para la REST API apirest-test-node:
https://github.com/ManuelFeregrino/apirest-test-node

* Visualización de números primos
* Localidades y servicios
* Interfaz web responsiva de los personajes de Marvel 

Es necesarío que antes de navegar por la aplicación primero se levante el servidor, ya sea con el comando `npm start` ó bien, construyendo la imagen del docker con el comando `docker build -t node-restapi .`, seguido de docker run -d -p 3000:3000 node-rest-api, ya que el ejercicio 1 y 2 necesitan del API para poder recuperar la información, de lo contrario solo podra navegar dentro del ejercicio 3.

## Pasos a seguir

1 Descargar el repositorio del API https://github.com/ManuelFeregrino/apirest-test-node

2 Levantar el API
*1 Mediante la terminal posicionarse dentro de la carpeta del proyecto (restapi-node).
*2 Construir la imagen: `docker build -t node-restapi .`
*3 Correr el docker: `docker run -d -p 3000:3000 node-restapi`

3 Levantar el servidor web
*1 Mediante la terminal posicionarse dentro de la carpeta del proyecto (frontend-test-angular).
*2 Instalar los modulos de node: `npm install`
*3 Correr: `ng serve` ó `ng serve --open`
*4 Encaso de usar `ng serve` navegar a `http://localhost:4200/`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
