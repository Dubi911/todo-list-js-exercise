/*   task # : { //task template
    title        :'title',
    description  :'description',
    complete     : false
  } */

const taskObj = {};

const newID = () => { // unique task id generator
  let i = 0;
  while (taskObj[`task ${i}`]) {
    i++;
  }
  return `task ${i}`;
};

// add task to taskObj
const newTask = (title, description) => {
  const newtask = newID();
  taskObj[newtask] = {
    title : title,
    description : description ? description : null,
    complete : false
  };
  console.log(`A new task has been created ${title}`);
};

// Mark a task as complete by setting the task's status in the taskObj to `true`
const completeTask = taskNumber => {
  const task = `task ${taskNumber}`;
  const completedTask = taskObj[task].title;
  taskObj[task].complete = true;
  console.log(`The task ${completedTask} has been completed`);
};

// Print the state of a task to the console in a nice readable way
const logTaskState = taskNumber => {
  const task = `task ${taskNumber}`;
  const title = taskObj[task].title;
  const completeVar = taskObj[task].complete;
  console.log(`${title} has${completeVar ? " " : " not "}been completed`);
};

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
