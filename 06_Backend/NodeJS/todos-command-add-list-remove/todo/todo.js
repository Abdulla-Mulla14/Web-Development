const fs = require('fs');
const filePath = "./tasks.json";


const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    saveTasks(tasks)
    console.log("Task added ", task);
    
}

const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
}

const removeTasks = (index) => {
    const tasks = loadTasks();

    if (!index || isNaN(index)) {
        console.log("Please provide a valid task number to remove!");
        return;
    }

    if (index > 0 && index <= tasks.length) {
        const removed = tasks.splice(index - 1, 1); // remove 1 item at that position
        saveTasks(tasks);
        console.log("Task removed:", removed[0].task);
    } else {
        console.log("Invalid task number!");
    }
};

const command = process.argv[2]
const argument = process.argv[3]

if (command === "add") {
    addTask(argument);
} else if(command === "list") {
    listTasks();
} else if(command === "remove") {
    removeTasks(parseInt(argument))
} else{
    console.log("Command not found!");
}