# SteviaStore

Proyecto desarrollado con la version 10.0.6 de Angular.

# Sobre el proyecto

La finalidad del proyecto fue llevar a la practica los conocimientos aprendidos en Angular en el contexto de un pequeño emprendimiento que desea llevar sus productos a una tienda online.

* Como primera instancia se hicieron los primeros mockups en [Figma]([https://drive.google.com/drive/folders/1o2tT94yJ3wBxwTZXtieZTkpKppNELqvT?usp=drive_link](https://www.figma.com/es-la/))
  
  [Ver los mockups](https://drive.google.com/drive/folders/1o2tT94yJ3wBxwTZXtieZTkpKppNELqvT?usp=drive_link).
  Con el propósito de tener una visión e idea más precisa de las diferentes pantallas que deberian de existir en la aplicación. Tanto como los colores, margenes y contenidos de los mismos. 
  Así tambien, poder identificar los componentes que se suelen repetir entre las pantallas para poder realizar **plantillas** o **layouts**.

* Se inició un proyecto de Angular utilizando el [Angular CLI](https://angular.dev/tools/cli).
* Se particionó la aplicacion en distintas secciones:
  1. Home: Pantalla de inicio del proyecto.
  2. Layout: Componente o pantalla que contiene y utiliza a los componentes compartidos "Home" y "Footer". En su interior, al contenido que cambiará dinamicamente segun la ruta en la que se encuentre.
  3. Material: Los modulos que contiene [Angular Material](https://material.angular.io) Ejemplos del uso del Angular Material seria el Dashboard lateral, botones, interfaz de datos personales en el carrito, etc.
  4. Nosotros: La pantalla de nosotros y su contenido de la vista.
  5. not-found: La vista que se muestra en caso se ingresa a una ruta o pagina de la aplicacion que no existe.
  6. order: La vista de la pagina carrito. La cual muestra los productos que fueron añadidos al carrito de compras, permitiendo reducir o aumentar productos de la tienda mientras que el monto total cambia dinamicamente segun las acciones que se realizan.
  7. shared: Diseño y creacion de los componentes Home y Footer.
  8. tienda: La pantalla que muestra lo más resaltante de la aplicacion, el contenido de los productos. El cual permite agregar al carrito de tienda con tan solo un par de clics. Cuenta con su propio sistema de rutas para navegar entre las distintas secciones de la tienda.
  9. routing-module: Contiene el sistema de rutas de la aplicacion entera. Utiliza un tecnica llamada **Lazy Loading** para cargar los componentes y contenidos de la aplicacion según se vayan accediendo a ellas y evitar cargar toda la aplicacion en una sola instancia, *reduciendo el tiempo de carga de la misma y generando una mejor experiencia en el usuario¨*.
 
 # Deploy del Proyecto
 La fase inicial actual del proyecto se hizo deploy en [Vercel](https://vercel.com).
 Para acceder a solo debe hacer clic en [SteviaStore](https://stevia-store-42okp5b4p.vercel.app/).
