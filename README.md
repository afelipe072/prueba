# Instrucciones de la prueba
Esta es una prueba que permite interactuar con un visor de información geográfica.

## Configuración inicial

### Instalación y ejecución

Debe tener instalado npm o yarn en su equipo local, para la instalación de paquetes y ejecución del proyecto. Clone el proyecto en su equipo e ingrese por línea de comandos al directorio del proyecto.

### 1.1. Clone el repositorio:

```
$ git clone https://github.com/desarrollador2geo/prueba_ingreso.git
```

### 1.2. Instalación de paquetes:
Ejecute la siguiente sentencia para instalar las dependencias del proyecto:

    npm install

### 1.3. Ejecución:
Ejecute la siguiente instrucción:

    npm start

La instrucción iniciará el proyecto en su entorno local y se abrirá en el navegador.

## 2. Instrucciones de la prueba:

##El mapa debe visualizar el municipio de YOPAL

    2.1 Localizar el mapa en el municipio de YOPAL

    2.2 Cambiar el mapa base y ajustar el mapa al 100% de la pantalla

    2.3 Se debe agregar el minimap al mapa y adicional otro plugin de leaflet 

    2.4 Añadir un marker en el centro del mapa

    2.5 Del siguiente servidor de mapas con url http://34.132.27.64:8080/geoserver/

    2.5.1 Se debe cargar las capas 
        yopal:r_perimetro
        yopal:u_terreno

    2.5.2 Al darle click a la capa de u_terreno se debe mostrar UN MODAL del predio con los siguientes atributos:

    1. codigo
    2. shape_area


## 3. Despliegue:

### 3.1. Compilación del proyecto
Para desplegar el proyecto, ejecute la siguiente instrucción:
    
    npm run build

### 2.2. Despliegue

- Copie la carpeta *build* en el directorio de despliegue según el servidor web seleccionado. Posteriormente inicie el servidor

