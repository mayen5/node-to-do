const fs = require('fs');
const { timingSafeEqual } = require('crypto');

let toDoList = [];


const saveDB = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error(`No se pudo grabar: ${err}`);
    });

}

const loadDB = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }

}

const crear = (descripcion) => {

    loadDB();

    let toDo = {
        descripcion,
        completado: false,
    };

    toDoList.push(toDo);

    saveDB();

    return toDo;
}

const getList = () => {
    loadDB();
    return toDoList;
}

const update = (descripcion, completado = true) => {
    loadDB();
    let index = toDoList.findIndex(task => task.descripcion === descripcion);

    if (index >= 0) {
        toDoList[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (descripcion) => {
    loadDB();
    let newList = toDoList.filter(task => task.descripcion !== descripcion);

    if (toDoList === newList) {
        return false;
    } else {
        toDoList = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    crear,
    getList,
    update,
    deleteTask
}