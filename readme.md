# App de Tareas

### Descripción:

App que los alumnos deben crear las primeras 3 clases en el curso de Desarrollo Web FullStack en Digital House.

## Lista de comandos

### En la consola:

`node app.js listar`
~~~
- Lista todas las tareas
~~~

`node app.js mostrar numeroDeTarea`
~~~
- Muestra 1 sola tarea.
- Recibe el número de tarea como cuarto argumento.
~~~

`node app.js crear tituloDeTarea`
~~~
- Crea una nueva tarea.
- Recibe el título de la tarea nueva como cuarto parámetro.
~~~

`node app.js cambiar numeroDeTarea`
~~~
- Cambia el estado de una tarea
- Recibe el número de la tarea como cuarto parámetro.
~~~

`node app.js borrar numeroDeTarea`
~~~
- Borra una tarea.
- Recibe el número de la tarea como cuarto parámetro.
~~~

`node app.js listarPorEstado estado`
~~~
- Lista las tareas por estado.
- Como cuarto parámetro, recibe el estado por el cual vamos a filtrar.
~~~

`node app.js borrarPorEstado estado`
~~~
- Borra las tareas con un mismo estado.
- Recibe el estado por el cual queremos borrar como cuarto parámetro.
~~~