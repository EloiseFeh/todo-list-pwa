function addTask() {
    //acesso ao input
    const taskInput = document.getElementById('new-task');
    //acesso à lista de tarefas
    const taskList = document.getElementById('task-list');

    if(taskInput.value !== ''){
        const taskItem = document.createElement('li');
        taskItem.innerText = taskInput.value;

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Excluir';

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
         });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }    
}

if('serviceWorker' in navigator){
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('/todo-list-pwa/js/service-worker.js')
        .then(registration =>{
            console.log('Service Worker registrado com sucesso', registration);
        })
        .catch(error => {
            console.log('Service Worker registro falhou', error);
        })
    })
}