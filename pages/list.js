document.querySelector('.btn-primary').addEventListener('click', getDataFromUser);

function getDataFromUser() {
    let getDataFromUser = document.querySelector('.input-box').value;

    document.querySelector('.input-box').value = '';



    let listElement = document.createElement('li');
    listElement.innerHTML = getDataFromUser;
    listElement.className = 'list-from-user'

    let orderedListHtml = document.querySelector('.list-element');
    orderedListHtml.append(listElement);
}
