const taskObj = {
  task : {
    title        :'title',
    description  :'description',
    complete     : false
  }
};
console.log(taskObj)

// unique task id generator
const newID = () => {
  let i = 0;
  while( taskobj[`task${i}`]){
    i++;
  }
  return `task${i}`;
}

// add task to taskObj
const newTask = (task, title, description) => {
  taskObj[task] = {
    title,
    description,
    complete : false
  }
  console.log(`A new task has been created ${title}`)
}

// Mark a task as complete by setting the task's status in the taskObj to `true`
function completeTask(task) {
  const completedTask = taskObj[task].title
  taskObj[task] = true;
  console.log(`The task ${completeTask} has been completed`)
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  const title = taskObj[task].title;
  const complete = taskObj[task].complete;
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed


// Task Object

