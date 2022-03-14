let AddToButton = document.getElementById('addtodo');
let ToDoContainer = document.getElementById('Todocontainer');
let InputField = document.getElementById('inputfield');

AddToButton.addEventListener('click', function(){
    var paragraph = document.createElement('li');
    paragraph.classList.add('.paragraph-styling');
    paragraph.innerHTML = InputField.value;
    ToDoContainer.appendChild(paragraph);
    InputField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph);
    })
})
var ul = document.getElementById('Todocontainer');
var list = ul.getElementsByTagName('li');

for (var i=0;i<=list.length;i++)
{
    var img=document.createElement('img');
    img.src="checkmark-outline.svg";
    img.id="foo"+i;
    list[i].appendChild(img);

}