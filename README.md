# BuscaRecetas
La idea del proyecto consiste en una aplicación que recomienda recetas según los ingredientes que le
indiquemos que tenemos disponibles en casa. Se almacenarán todas las búsquedas que se realicen teniendo
en cuenta factores como la edad, el sexo, la localización, la hora, la estación del año... Todos esos datos
podrán ser vendidos a distintas cadenas de supermercados para poder obtener un beneficio económico.

## Historias de usuario
>[[HU0]](https://github.com/aleveji/BuscaRecetas/issues/6) Usuario estándar -> Obtener información ingredientes

# Documentación adicional
>[Tipos de usuarios](https://github.com/aleveji/BuscaRecetas/blob/objetivo1/docs/tipos_usuarios.md)
>[*User journey*](https://github.com/aleveji/BuscaRecetas/blob/objetivo1/docs/user_journey.md)
>[Justificación de la elección del gestor de tareas](https://github.com/aleveji/BuscaRecetas/blob/objetivo3/docs/eleccion_gestor_tareas.md)
>[Justificación de la elección del framework de tests](https://github.com/aleveji/BuscaRecetas/blob/objetivo4/docs/eleccion_framework_test.md)
>[Justificación de la elección de la imagen del contenedor](https://github.com/aleveji/BuscaRecetas/blob/objetivo5/docs/docker.md)
>[Justificación de la elección de los servicios de CI](https://github.com/aleveji/BuscaRecetas/blob/objetivo6/docs/ci.md)

## Órdenes disponibles
Una vez descargado el repo e instalado Node.js, tras ejecutar **npm install**, están disponibles las siguientes órdenes:
 - Para comprobar que la sintaxis de los ficheros es correcta -> **npm run check**
 - Para ejecutar los tests -> **npm run test**
 - Pare ejecutar los tests en un contenedor:
   - Para crear el contenedor -> **npm run docker-build**
   - Para ejecutar los tests -> **npm run docker-run**
