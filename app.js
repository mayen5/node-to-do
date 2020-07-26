const argv = require('./config/yargs').argv;
const colors = require('colors')
const toDo = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let task = toDo.crear(argv.descripcion);
        console.log(task);
        break;

    case 'listar':
        let list = toDo.getList();

        for (const task of list) {
            console.log(`==========To do list============`.green);
            console.log(`${task.descripcion}`);
            console.log(`Estado: ${task.completado}`);
            console.log(`================================`.green);
        }
        break;

    case 'actualizar':
        let updated = toDo.update(argv.descripcion, argv.completado);
        console.log(updated);
        break;
    case 'borrar':
        let deleted = toDo.deleteTask(argv.descripcion);
        console.log(deleted);
        break;
    default:
        console.log(`Comando no es reconocido`);
        break;
}