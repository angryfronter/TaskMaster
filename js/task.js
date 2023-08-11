// Get the save task button
const saveTaskButton = document.getElementById('saveTaskButton');
const form = document.querySelector('form');

form.addEventListener('button', function(event) {
    event.preventDefault();
    const topic = document.getElementById('topic').value;
    const deadline = document.getElementById('deadline').value;
    const executor = document.getElementById('executor').value;
    addTask(topic, deadline, executor);
  });
  

// Add event listener for the save task button
saveTaskButton.addEventListener('click', function() {
  // Get the values from the form inputs
  const topic = document.getElementById('topic').value;
  const deadline = document.getElementById('deadline').value;
  const executor = document.getElementById('executor').value;
  addTask(topic, deadline, executor);
  
  // Do something with the task data, like add it to a list or database
  console.log('New task added:');
  console.log('Topic:', topic);
  console.log('Deadline:', deadline);
  console.log('Executor:', executor);
  
  // Close the modal window
  $('#addTaskModal').modal('hide');
});

function addTask(topic, deadline, executor){
const task = document.createElement('div');
task.classList.add('task');

const name = document.createElement('span');
name.classList.add('topic');
name.textContent = topic;

const deadlineSpan = document.createElement('span');
deadlineSpan.classList.add('deadline');
deadlineSpan.textContent = deadline;

const executorSpan = document.createElement('span');
executorSpan.classList.add('executor');
executorSpan.textContent = executor;

task.appendChild(name);
task.appendChild(deadlineSpan);
task.appendChild(executorSpan);

taskList.appendChild(task);
}