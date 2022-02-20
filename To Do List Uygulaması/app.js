const AddButton = document.querySelector('.Add-Button');
const ClearButton = document.querySelector('.clear-Button');
const Container = document.querySelector('.container');
const inputText = document.querySelector('.input-text');
const TodoContainer = document.getElementById('Todo-Container');
AddButton.addEventListener('click', function (e) {
    let pharagraph = document.createElement('p');
    pharagraph.classList.add('pharagraph')
    TodoContainer.appendChild(pharagraph);
    pharagraph.innerHTML = inputText.value;
    inputText.value = '';
    pharagraph.addEventListener('click', function () {
        pharagraph.style.textDecoration = 'line-through';
    })
    pharagraph.addEventListener('dblclick', function () {

        pharagraph.remove();
    });

    ClearButton.addEventListener('click', function () {

        //pharagraph.style.display = 'none';

        //pharagraph.remove();
        TodoContainer.removeChild(pharagraph);
    });

});








