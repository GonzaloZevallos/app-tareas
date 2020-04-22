const fs = require('fs');

module.exports = {
   archivo: './tareas.json',
   leerJSON(){
      if(fs.existsSync(this.archivo)){
         let listaDeTareas = fs.readFileSync(this.archivo, 'utf8');
   
         listaDeTareas = JSON.parse(listaDeTareas);
   
         if(listaDeTareas){
            return listaDeTareas;
         }
         return [];
      }

      return [];
   },
   escribirJSON(tareas){
      let tareasJSON = JSON.stringify(tareas, null, ' ')
      fs.writeFileSync(this.archivo, tareasJSON)

      return tareas;
   },
   listar(){
      
      console.log();
      let tareas = this.leerJSON();
      if(tareas.length){
         console.log('Lista de tareas');
         console.log('===============');
         
         tareas.forEach((element, i) => {
            console.log();
            console.log(`${i+1} - Titulo: ${element.titulo} | Estado: ${element.estado}`)  
         });
      }else{
         console.log('No se encontraron tareas. Utiliza el argumento "crear" para crear la primera');
      }
   },
   mostrarUna(index){
      if(index){
         let tareas = this.leerJSON();
         if (tareas[index-1]) {
            console.log()
            console.log('Tarea numero ' + index);
            console.log('===============');
            console.log();
            console.log(`${index} - Titulo: ${tareas[index - 1].titulo} | Estado: ${tareas[index - 1].estado}`)
         } else {
            console.log('Tarea no encontrada :(');
         }
      }else{
         console.log('Necesito recibir el número de la tarea que deseas mostrar');
      }      
   },
   crear(titulo){
      console.log()
      if(titulo){

         let tarea = {
            titulo,
            estado: 'pendiente'
         }

         let tareas = this.leerJSON();

         tareas.push(tarea);

         this.escribirJSON(tareas);

         console.log('Felicitaciones! Tarea creada');
         console.log('===============');
         console.log();
         console.log(`${tareas.length} - Titulo: ${tareas[tareas.length - 1].titulo} | Estado: ${tareas[tareas.length - 1].estado}`)
      }else{
         console.log('Necesito que me pases un título de la tarea')
      }
   },
   cambiarEstado(index){
      if (index) {
         let tareas = this.leerJSON();
         console.log();
         if (tareas[index-1]) {
            tareas[index - 1].estado = tareas[index - 1].estado == 'pendiente' ? 'terminada' : 'pendiente';
            tareas = this.escribirJSON(tareas);
            console.log(`Tarea número ${index} modificada`);
            console.log('===============');
            console.log();
            console.log(`${index} - Titulo: ${tareas[index - 1].titulo} | Estado: ${tareas[index - 1].estado}`)
         } else {
            console.log('Tarea no encontrada :(');
         }
      } else {
         console.log('Necesito recibir el número de la tarea que deseas mostrar');
      }     
   },
   borrar(index){
      if (index) {
         let tareas = this.leerJSON();
         console.log();
         if (tareas[index-1]) {

            tareas.splice(index-1, 1)
            this.escribirJSON(tareas);

            console.log(`Tarea número ${index} eliminada con éxito`);
         } else {
            console.log('Tarea no encontrada :(');
         }
      } else {
         console.log('Necesito recibir el número de la tarea que deseas mostrar');
      } 
   },
   listarPorEstado(estado){
      console.log();
      let tareas = this.leerJSON();
      if (tareas.length) {
         if(estado){
            if(tareas.filter(e => e.estado == estado).length){
               console.log(`Lista de tareas con estado: ${estado}`);
               console.log('===============');
               tareas.forEach((element, i) => {
                  console.log();
                  if(element.estado == estado){
                     console.log(`${i + 1} - Titulo: ${element.titulo} | Estado: ${element.estado}`)
                  }
               });
            }else{
               console.log(`No hay tareas con estado: ${estado}`);
            }
         }else{
            console.log('Necesito recibir un estado por el cual filtrar. Probá con "pendiente" o "terminada"');
         }
      } else {
         console.log('No se encontraron tareas. Utiliza el argumento "crear" para crear la primera');
      }
   },
   borrarPorEstado(estado){
      console.log();
      let tareas = this.leerJSON();
      if (tareas.length) {
         if (estado) {
            if (tareas.filter(e => e.estado == estado).length) {
               let nuevasTareas = tareas.filter(element => {
                  return element.estado != estado;
               });
               this.escribirJSON(nuevasTareas);
               console.log(`Las tareas con estado "${estado}" han sido borradas`);
            } else {
               console.log(`No hay tareas con estado: ${estado}`);
            }
         } else {
            console.log('Necesito recibir un estado por el cual filtrar. Probá con "pendiente" o "terminada"');
         }
      } else {
         console.log('No se encontraron tareas. Utiliza el argumento "crear" para crear la primera');
      }
   }
}