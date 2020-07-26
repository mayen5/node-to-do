const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('borrar', 'Borra una tarea por hacer', { descripcion })
    //.command('listar', 'Mustra las tareas por hacer', opts)
    .command('actualizar', 'Actualiza el estado de una tarea por hacer', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}