# Prueba Sorteo

Este es un repositorio para presentar la prueba tecnica para la empresa BTi

# Tecnologias
Para realizar esta prueba se usaron las siguientes tecnologias

* ## Xamarin Forms Project Structure (Cross-platform)
Framework                           | Descripción
--------------- | -------------
Ionic 2    | Framework grafico con material design integrado. Tambien se usa para desarrollo movil. Más información <a href="https://ionicframework.com" target="_blank">Aquí</a>
Angular 4 | Framework MVVM y MVC para desarrollo web y movil. Más información <a href="https://angular.io" target="_blank">Aquí</a>

# Requerimientos Técnicos
* Se requiere **NodeJS** instalado. Lo puedes descargar de <a href="https://nodejs.org" target="_blank">Aquí</a>
* Despues de instalar NodeJS, necesitamos **Ionic Framework**. Lo instalas asi `npm install -g ionic`

#Pasos para ejecutar la aplicación web
Para ejecutar la WebApp, se deben seguir unos pequeños pasos.
* Debes clonar este repositorio.
* Luego de clonarlo, debes de ir a la raiz del proyecto y correr el comando `npm install` para instalar todas las dependencias
* Cuando tengas instaladas las dependencias, corres el comando `ionic serve` para compilar los .ts y ejecutar el servidor.

#Funcionamiento General de la aplicación web

Te voy a explicar como esta todo el funcionamiento de la webapp

* ## Estructura del proyecto
Dirección                           | Explicación
--------------- | -------------
`./src`    | Es el directorio base editable del proyecto. Aqui estan todos los archivos .ts para ser editados.
`./www` | Es el directorio de resultado, cuando se ejecuta el comando **ionic serve**, todo se minifica y se uglifica y se copia en este directorio.
`./src/assets` | Es el directorio donde se encuentran los recursos, aquí están las imagenes, fuentes y el archivo **./data/data.json** que contiene a los participantes del sorteo.
`./src/app` | Es el directorio donde esta toda la declaracion de la aplicación.
`./src/pages` | Es el directorio donde se encuentran todas las paginas que tiene la webapp.

La pagina principal el **Home**, ahí se encuentra toda la programación. esta pagina contiene los siguientes archivos.

Archivo                           | Explicación
--------------- | -------------
`home.ts`    | Es el archivo que declara el componente y la expone para poder ser utilizada.
`home.html` | Es el archivo de enmarcado donde se maquetea toda la página.
`home.service.ts` | Es el archivo que declara y expone el servicio que consume la fuente de datos por medio de RESTFull.
`home.scss` | Es el archivo sass que contiene los estilos del componente.
`./src/pages` | Es el directorio donde se encuentran todas las paginas que tiene la webapp.

la pagina tiene 5 variables esenciales para el control del sorteo, estan es el archivo **home.ts** y son las siguientes

Variable                           | Explicación
--------------- | -------------
`time:number`    | Es la variable encargada del contador, se puede asignar la cantidad de segundos que se quiera que dure el sorteo. Es decreciente
`ganador:any` | Es la variable que se llena con cada uno de los participantes que retorna el random.
`usuarios` | Es la variable donde se almacena localmente los usuarios de la fuente de datos para poder manipularlos.
`timeControl` | Es la variable encargada de controlar cuantos segundos van recorridos, se usa para validar cada cuanto se debe de traer el usuario random. Es creciente.
`timeExect` | Es la variable encargada de determinar cada cuantos segundos se trae el usuario random.

La página usa 4 métodos necesarios para todo el funcionamiento.

Método                           | Explicación
--------------- | -------------
`getRandomInt(min, max)`    | Es el método encargado de entregar el index de manera random. Recibe 2 parametros, el numero inicial y el numero final para el random
`ShowAlert(Title, Message, handler)` | Es el método encargado de mostrar el aler del ganador. Recibe 3 parametros, el titulo de la alerta, el mensaje que se va a mostrar y un handler en caso de realizar alguna accion cuando el usuario acepte la alerta.
`Run()` | Es el método que se ejecuta cuando se le da click en el boton **Empezar**. Ejecuta el servicio, popula la variable **usuarios** y manda a llamar al método **RunTimer()**.
`RunTimer()` | Es el método que se encarga de declarar el intervalo y hacer la ejecucion del sorteo. Valida el tiempo en la variable **timeExect** para traer el usuario random y lanza el alert cuando la variable **time** llega a 0. Utiliza Observables para la ejecucion del intervalo.

