const todoForm = document.querySelector('#todoForm');
const todoFormSubmit = todoForm.querySelector('.query__btn');
const todoFormInput = todoForm.querySelector('.query__input');

const todoContainer = document.querySelector('.todo');
const todoListEl = todoContainer.querySelector('.todo__list');

todoListEl.addEventListener('click', (e) => {
    const tg = e.target;
    const item = e.target.closest('.todo__item');
    if (!item) return;

    const idx = +item.querySelector('.todo__idx').value;
    if (tg.closest('.todo__done')) {
        todoListArray[idx].status = true;
        item.classList.add('todo__item--done');
    } else if (tg.closest('.todo__reset')) {
        todoListArray.splice(idx, 1);
        manageRender();
    }
});

const todoTemplate = document.querySelector('#todoItem');

const todoListArray = []

todoFormSubmit.addEventListener('click', addTask);

function addTask() {
    if (todoFormInput.value==='') return;
    const task = todoFormInput.value;
    todoListArray.push({task: task, status: false});
    todoFormInput.value = '';
    manageRender();
}

function renderTodo() {
    todoListEl.innerHTML = '';
    todoListArray.forEach((item, idx) => {
        const nodeEl = todoTemplate.content.cloneNode('true');
        const itemEl = nodeEl.querySelector('.todo__item');
        const taskText = nodeEl.querySelector('.todo__task');
        taskText.textContent = item.task;
        const taskIdx = nodeEl.querySelector('.todo__idx');
        taskIdx.value = idx;
        if (item.status) {
            itemEl.classList.add('todo__item--done');
        }
        todoListEl.append(nodeEl);
    })
}

function manageRender() {
    if (todoListArray.length > 0) {
        todoContainer.classList.remove('todo__hidden');
        renderTodo();
    } else {
        todoListEl.innerHTML = '';
        todoContainer.classList.add('todo__hidden');
    }
}


