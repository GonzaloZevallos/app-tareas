let archivoTareas = require('./tareas');

let accion = process.argv[2];
let index;
let estado;

switch(accion) {
   case 'listar':
      archivoTareas.listar();

      break;
   case 'mostrar':
      index = process.argv[3];
      
      archivoTareas.mostrarUna(index);
      
      break;
   case 'crear':
      let titulo = process.argv[3];

      archivoTareas.crear(titulo)

      break
   case 'cambiar':
      index = process.argv[3];

      archivoTareas.cambiarEstado(index);
      break;
   case 'borrar':
      index = process.argv[3];

      archivoTareas.borrar(index);

      break;
   case 'listarPorEstado':
      estado = process.argv[3];

      archivoTareas.listarPorEstado(estado);

      break;
   case 'borrarPorEstado':
      estado = process.argv[3];

      archivoTareas.borrarPorEstado(estado);

      break;
   case undefined:
      console.log('Tenés que pasarme una acción');

      break;
   default:
      console.log('No entiendo qué me estás pidiendo');
      console.log('Las acciones disponibles son: listar, crear, filtrar, ');

      break;
}
