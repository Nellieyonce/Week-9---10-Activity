document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const todoForm = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (todoForm && taskInput && taskList) {
        todoForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const taskValue = taskInput.value.trim();

            if (taskValue === '') {
                return;
            }

            const listItem = document.createElement('li');
            listItem.className = 'todo-item';
            listItem.style.display = 'flex';
            listItem.style.justifyContent = 'space-between';
            listItem.style.alignItems = 'center';
            listItem.style.backgroundColor = '#ffffff';
            listItem.style.border = '1px solid #e8ded2';
            listItem.style.padding = '0.8rem 1.2rem';
            listItem.style.borderRadius = '10px';
            listItem.style.marginBottom = '0.75rem';

            const textSpan = document.createElement('span');
            textSpan.textContent = taskValue;
            textSpan.style.color = '#2b221a';
            textSpan.style.fontSize = '1rem';
            textSpan.style.cursor = 'pointer';
            textSpan.style.transition = 'all 0.2s ease';

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Dismiss';
            removeBtn.type = 'button';
            removeBtn.style.backgroundColor = 'transparent';
            removeBtn.style.color = '#be7a2f';
            removeBtn.style.border = 'none';
            removeBtn.style.fontWeight = '700';
            removeBtn.style.textTransform = 'uppercase';
            removeBtn.style.fontSize = '0.75rem';
            removeBtn.style.letterSpacing = '0.05em';
            removeBtn.style.cursor = 'pointer';
            removeBtn.style.padding = '0.2rem 0.5rem';

            textSpan.addEventListener('click', () => {
                if (textSpan.style.textDecoration === 'line-through') {
                    textSpan.style.textDecoration = 'none';
                    textSpan.style.color = '#2b221a';
                    listItem.style.opacity = '1';
                } else {
                    textSpan.style.textDecoration = 'line-through';
                    textSpan.style.color = '#5e5246';
                    listItem.style.opacity = '0.6';
                }
            });

            removeBtn.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(textSpan);
            listItem.appendChild(removeBtn);
            taskList.appendChild(listItem);

            todoForm.reset();
        });
    }
});