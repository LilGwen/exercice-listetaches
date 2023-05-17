const inputText = document.querySelector('.inputText');
const button = document.querySelector('button');
const list = document.querySelector('.list');


button.addEventListener('click', event =>{
    if(inputText.value){
        
        let div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `<p>${inputText.value}</p>
            <img src="img/edit.png" class = "edit">
            <img src="img/remove.png" class="remove">`
        list.append(div);
        
        
        inputText.value = null;

        const remove = div.querySelector(':last-child');
        remove.addEventListener('click', event => {
            
            event.currentTarget.parentElement.remove();
        });

        const edit = div.querySelector('.edit');
        const p = div.querySelector(':first-child');

        edit.addEventListener('click', event => {
           
           if(event.currentTarget.getAttribute('src') === 'img/edit.png'){
                event.currentTarget.setAttribute('src', 'img/check.png');
                p.contentEditable = true;
           } else {
                 event.currentTarget.setAttribute('src', 'img/edit.png');
                 p.contentEditable = false;
           }
        });
    }
    

});