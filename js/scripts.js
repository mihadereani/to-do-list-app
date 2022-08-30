
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert('You must write something!');
} else {
    let list = $('#list');
    $(list).append(li);
}

function crossOut() {
    $(li).toggleClass('strike');
}

li.on('dbclick', function crossOut (){
    li.toggleClass('strike');
  });

