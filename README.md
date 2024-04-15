# Dataverse 

# Índice

1. [Introducción](#introducción)
2. [Resumen del Proyecto](#resumen-del-proyecto)
3. [Funcionalidades](#funcionalidades)
4. [Historias de Usuario y Criterios de Aceptación](#historias-de-usuario-y-criterios-de-aceptación)
5. [Definición de Terminado](#definición-de-terminado)
6. [Diseño de Interfaz y Prototipos](#diseño-de-interfaz-y-prototipos)
   - [Diseño de Interfaz](#diseño-de-interfaz)
   - [Prototipos Iterativos](#prototipos-iterativos)
     - [Prototipo de Baja Fidelidad](#prototipo-de-baja-fidelidad)
     - [Prototipo de Media Fidelidad](#prototipo-de-media-fidelidad)
     - [Prototipo de Alta Fidelidad](#prototipo-de-alta-fidelidad)
   - [Implementación en Figma](#implementación-en-figma)
7. [Responsividad](#responsividad)
8. [Origen de los Datos](#origen-de-los-datos)
   - [Uso de ChatGPT para Obtener Datos](#uso-de-chatgpt-para-obtener-datos)
   - [Prompt Utilizado](#prompt-utilizado)
9. [Lenguajes y Herramientas Utilizadas](#lenguajes-y-herramientas-utilizadas)
   - [Lenguajes de Programación](#lenguajes-de-programación)
   - [Herramientas Adicionales](#herramientas-adicionales)
10. [Trabajo Colaborativo](#trabajo-colaborativo)
   - [Equipo de Diseño y Desarrollo](#equipo-de-diseño-y-desarrollo)
11. [Cierre del Proyecto](#cierre-del-proyecto)


## Introducción
Bienvenid@ a Dataverse, tu guía virtual por el universo de "El Señor de los Anillos". Este proyecto te permite explorar a los personajes más icónicos de la saga, filtrarlos, ordenarlos y realizar cálculos estadísticos sobre sus datos.

## Resumen del Proyecto
Dataverse es una aplicación web que te permite descubrir y aprender sobre los personajes de "El Señor de los Anillos". Con una interfaz intuitiva y funcionalidades avanzadas de filtrado, ordenado y cálculo estadístico, te sumergirás en el fascinante mundo de la Tierra Media.

## Funcionalidades
1. **Visualización de Datos:** Muestra detallada de cada personaje, incluyendo su nombre, descripción corta, imagen y datos clave como raza, edad, estatura y año de nacimiento.
2. **Filtrado:** Permite filtrar los personajes por raza, edad, estatura y año de nacimiento.
3. **Ordenado:** Posibilidad de ordenar los personajes de forma ascendente o descendente según el nombre.
4. **Cálculo Estadístico:** Calcula el promedio de edad de los personajes con datos de edad conocidos.

## Historias de Usuario y Criterios de Aceptación
1. **Usuario:** Como fan de "El Señor de los Anillos", quiero filtrar los personajes por raza para explorar específicamente los hobbits.
   - **Criterio de Aceptación:** Al seleccionar "Hobbit" en el filtro de raza, se muestran solo los personajes hobbits.

2. **Usuario:** Como investigador, necesito ordenar los personajes alfabéticamente para encontrar información de manera más organizada.
   - **Criterio de Aceptación:** Al seleccionar "Ascendente" en el filtro de orden, los personajes se muestran en orden alfabético ascendente por nombre.

3. **Usuario:** Como curioso, quiero calcular la edad promedio de los personajes para tener una idea general de su edad.
   - **Criterio de Aceptación:** Al hacer clic en el botón "Mostrar Promedio de las Edades", se muestra el valor numérico del promedio de edad.

4. **Usuario:** Como aficionado a la historia, quiero filtrar los personajes por estatura para comparar los más altos.
   - **Criterio de Aceptación:** Al seleccionar "2 metros o más" en el filtro de estatura, se muestran solo los personajes que miden 2 metros o más.

## Definición de Terminado
El proyecto se considera terminado cuando:

- Se pueden visualizar los datos de los personajes correctamente.
- Los filtros de raza, edad, estatura y año de nacimiento funcionan sin errores.
- El ordenado de los personajes por nombre funciona correctamente en ambas direcciones.
- La función de cálculo estadístico muestra el promedio de edad correctamente.
- Todos los tests unitarios y de integración pasan correctamente, asegurando el funcionamiento adecuado de todas las funcionalidades del proyecto.

# Diseño de Interfaz y Prototipos

## Diseño de Interfaz
La interfaz de Dataverse está diseñada para ofrecer una experiencia intuitiva y atractiva para los usuarios que deseen explorar el mundo de "El Señor de los Anillos". Con un enfoque en la usabilidad y la presentación clara de información, el diseño busca facilitar la navegación y la comprensión de los datos sobre los personajes.

## Prototipos Iterativos
Durante el proceso de diseño, se realizaron varios prototipos iterativos para refinar la interfaz y las funcionalidades de la aplicación. Estos prototipos se crearon utilizando herramientas como Figma, lo que permitió una fácil iteración y colaboración en el equipo de desarrollo.

### Prototipo de Baja Fidelidad
El primer prototipo de baja fidelidad se centró en establecer la estructura básica de la interfaz, incluyendo la disposición de los elementos principales y los diferentes componentes de navegación. Este prototipo ayudó a visualizar el flujo general de la aplicación y a identificar áreas de mejora en la usabilidad.

![Prototipo baja fidelidad](https://github.com/SilvyPao04/DEV014-Dataverse/assets/160449743/4827332a-e4b3-4c74-822c-64e86b22921b)

### Prototipo de Media Fidelidad
Con base en el prototipo de baja fidelidad, se desarrolló un prototipo de media fidelidad que añadió más detalle y refinamiento a la interfaz. Se incluyeron elementos visuales como colores, tipografías y estilos de botones para mejorar la estética y la coherencia visual de la aplicación.

![Prototipo media fidelidad 1](https://github.com/SilvyPao04/DEV014-Dataverse/assets/160449743/17f81978-a2e0-461f-a204-eeb406c7a8db)
![Prototipo media fidelidad 2](https://github.com/SilvyPao04/DEV014-Dataverse/assets/160449743/671f4c15-f7e6-49e2-a206-1a0c36708f51)

### Prototipo de Alta Fidelidad
El prototipo de alta fidelidad representa la versión final y más detallada de la interfaz de Dataverse. Se han aplicado todos los estilos visuales y elementos interactivos para crear una experiencia de usuario completa y atractiva. Este prototipo sirvió como base para el desarrollo final de la aplicación.

![Prototipo Final_ alta fidelidad - Desktop](https://github.com/SilvyPao04/DEV014-Dataverse/assets/160449743/16c7ec0e-25ab-43d7-a9bd-66c41629313d)

## Implementación en Figma
Todos los prototipos fueron creados y compartidos utilizando la plataforma de diseño Figma. Esta herramienta facilitó la colaboración en el equipo, permitiendo realizar ajustes y mejoras de manera eficiente y coordinada.

---
Con estos prototipos, hemos logrado diseñar una interfaz atractiva y funcional para Dataverse, brindando una experiencia de usuario enriquecedora para los fans de "El Señor de los Anillos".

# Responsividad

El diseño de nuestra aplicación se ha desarrollado teniendo en cuenta la importancia de la responsividad, asegurando una experiencia óptima para los usuarios en diferentes dispositivos y tamaños de pantalla. Algunas de las características de la responsividad en nuestro proyecto incluyen:

- **Diseño adaptable:** Los elementos de la interfaz se ajustan de manera dinámica para garantizar una visualización adecuada en dispositivos móviles, tabletas y computadoras de escritorio.
  
- **Uso de Media Queries:** Hemos implementado Media Queries en nuestro código CSS para aplicar estilos específicos según el tamaño de la pantalla, optimizando la presentación de la información y la navegación.

- **Pruebas en Dispositivos Variados:** Durante el desarrollo, realizamos pruebas exhaustivas en una variedad de dispositivos y resoluciones para verificar la compatibilidad y asegurar una experiencia uniforme.

La responsividad es una parte integral de nuestro enfoque de diseño y desarrollo, brindando a los usuarios la flexibilidad para acceder y utilizar nuestra aplicación de manera cómoda y efectiva en cualquier dispositivo.

# Origen de los Datos

## Uso de ChatGPT para Obtener Datos
Para la creación de la carpeta dataset.js, utilizamos un proceso asistido por inteligencia artificial (IA) a través de ChatGPT, un modelo de lenguaje avanzado desarrollado por OpenAI. Este modelo nos permitió generar datos ficticios basados en el universo de "El Señor de los Anillos", los cuales utilizamos para construir nuestra aplicación Dataverse.

## Generación de Imágenes con IA
Además de la generación de datos, también utilizamos herramientas de inteligencia artificial para crear las imágenes de los personajes mostradas en nuestra interfaz. Estas imágenes fueron generadas de manera automatizada para complementar la información y ofrecer una experiencia visual completa a los usuarios.

## Prompt Utilizado
A continuación, mostramos el prompt utilizado en ChatGPT para generar los datos que luego fueron utilizados en la carpeta dataset.js:

![1 Prompt 1](https://github.com/SilvyPao04/DEV014-Dataverse/assets/160449743/aab09176-48fe-4641-9b54-664998f75f19)
![2 Prompt 2](https://github.com/SilvyPao04/DEV014-Dataverse/assets/160449743/5f0b56f3-3011-4a51-9e53-659f27dc9894)

El prompt proporcionó las instrucciones necesarias para que ChatGPT generara datos coherentes y relevantes para nuestro proyecto, asegurando que la información en dataset.js se ajustara a las necesidades de la aplicación Dataverse.

---
El uso de herramientas como ChatGPT nos permitió obtener datos de manera eficiente y personalizada para nuestro proyecto, garantizando una base sólida para el desarrollo de la aplicación.

# Lenguajes y Herramientas Utilizadas

En el desarrollo de nuestro proyecto, hemos utilizado una variedad de lenguajes de programación y herramientas para garantizar su funcionalidad y diseño. A continuación, detallamos los principales lenguajes y herramientas que forman parte de nuestro proyecto:

## Lenguajes de Programación
1. **HTML:** Utilizado para la estructura y el marcado de nuestra página web, permitiendo definir la disposición y los elementos visuales.
2. **CSS:** Empleado para el diseño y la presentación de nuestra interfaz, aplicando estilos, colores y diseños que mejoran la experiencia del usuario.
3. **JavaScript (JS):** Fundamental para la interactividad y la funcionalidad dinámica de nuestra aplicación web, permitiendo crear acciones y comportamientos en tiempo real.

## Herramientas Adicionales
1. **Jest:** Utilizado para el desarrollo de pruebas unitarias en JavaScript, garantizando la calidad y robustez de nuestro código al verificar su funcionamiento y rendimiento.

Estos lenguajes y herramientas nos han permitido crear una aplicación web completa y funcional, con un diseño atractivo y una experiencia de usuario optimizada.

---
El uso combinado de HTML, CSS, JavaScript y Jest nos ha proporcionado las herramientas necesarias para desarrollar una aplicación web robusta, interactiva y de calidad.

# Trabajo Colaborativo
Este proyecto fue diseñado y desarrollado en dupla, donde cada una aportó su conocimiento y experiencia para lograr un resultado exitoso. A continuación, presentamos nuestras contribuciones:

## Equipo de Diseño y Desarrollo
- Malu Huillca 
  - GitHub: [Enlace al GitHub de Malú](https://github.com/maluhuillcaelguera)
- Silvia Pineda
  - GitHub: [Enlace al GitHub de Silvia](https://github.com/SilvyPao04)

Hemos trabajado en conjunto para llevar a cabo todas las etapas de este proyecto, desde el diseño de la interfaz hasta el desarrollo de las funcionalidades, garantizando un resultado de alta calidad.

---

El trabajo en equipo y la colaboración han sido fundamentales para el éxito de este proyecto, permitiéndonos combinar nuestras habilidades y esfuerzos de manera efectiva para alcanzar nuestros objetivos.

# Cierre del Proyecto
¡Hemos llegado al final de nuestro emocionante viaje por Dataverse, el universo de "El Señor de los Anillos"! 

Queremos agradecer a nuestros usuari@s por su entusiasmo y curiosidad al explorar el mundo de Tolkien a través de nuestra aplicación.

Este proyecto representa el esfuerzo conjunto de un equipo comprometido con la excelencia y la innovación. Esperamos que disfrutes de tu experiencia en Dataverse y que te sumerjas aún más en las fascinantes historias y personajes de "El Señor de los Anillos".

¡Gracias por ser parte de este viaje con nosotras!

---