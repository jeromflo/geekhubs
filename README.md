Para ejecutar la aplicación: - npm install - ng serve -o - lanzar la app de angular - npm run start

Para despliegue: (mirar build:desa|build:prod en package.json) - npm ci //para que funcione tenemos que tener el package-lock.json--------->Si no funciona usar "npm install" - ng build -c version //la version puede ser desa, prod actualmente. Al hacerlo, compila el proyecto con el ambiente seleccionado. - Copiar la capeta generada, llamada dist, al mismo nivel que src. Esta carpeta contendrá todos los ficheros necesarios para su despliegue, junto a aun fichero index.html

Para instalar dependencias en desarrollo -npm i --save-dev frameworkNPM

[1]-Distro de producción -ng build //Ejecutara de forma automatica la version de prod para cambiar de version ejecutar -configuration='desarrollo' por ejemplo o bien "-c desarrollo"

------Comando para ejecutar el servidor de angular en el puerto 3033 y en el host que se le pase, esto nos permite abrirlo en el movil #ng serve -o --host tuHost --port 3033

Notas importantes: (Para poder cambiar de forma rapida entre las versiones de node, recomiendo el nvm) -La versión de node que se está corriendo actualmente 17.8.0 -La version corriendo de npm actualmente es 8.5.5

Puesta en marcha: - npm install -g typescript - npm install -g @angular/cli

Para usar el nvm: - instalar nvm de google - ejecutar #nvm install 14.17.6 //esto nos instalará la versión especificada - nvm use 14.17.6 //cambiará a la version especificada

Para instalar la versión de npm //es importante que se haga después del nvm ya que node puede cambiarnos la versión del npm - npm i -g npm@6.14.15

Estructura de las carpetas: - app: contendra toda la logica de la aplicacion - core: componentes principales que se iran renderizando en las distintas pantallas - layouts: componentes estatico en el template entre pantallas
-shared: componentes, servicios, pipes, etc que la aplicacion use y sea comun entre la carpeta core.

El proyecto esta configurado para el environment de desarrollo y prod, para otros entornos, habria que añadirlo al angular.json y lanzarlo en el ng serve o build como se dice arriba "[1]"
