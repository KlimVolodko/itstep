let btn = document.querySelector('#btn');
let list = document.querySelector('.list');
let name = document.querySelector('#name');
 
btn.onclick = function(event) {
    if(!name.value) {
    return;
  }
    let li = document.createElement('li');
  li.innerHTML = name.value;
  list.appendChild(li);
  name.value = '';
  let div = document.createElement('div');

}
