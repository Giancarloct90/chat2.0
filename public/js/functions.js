// VAR/SELECTOR
const divUsers = document.getElementById('divUsers');
const ulMsj = document.getElementById('ulMsj');
const divUserMsj = document.getElementById('divUserMsj');
const liMsj = document.getElementById('liMsj');

// EVENTSLISTENER

//FUNCTIONS
function renderizarUsuarios(data) {
    html = '';
    data.map(usuario => {
        html += `<ul>`;
        html += `<li>`;
        html += `<div class="profile">`;
        html += `<div id="picture">`;
        html += `<img src="img/profile.png" alt="" width="50" height="50">`;
        html += `</div>`;
        html += `<div id="userInfo">`;
        html += `<span id="txtName">${usuario.nombre}</span><br>`;
        html += `<span id="txtState">ONLINE</span>`;
        html += `</div>`;
        html += `</div>`;
        html += `</li>`;
        html += `</ul>`;
    });
    divUsers.innerHTML = html;
}


function renderizarMensaje(data, flag) {

    let html = '';
    let fecha = new Date(data.fecha);
    let hora = `${fecha.getHours()}:${fecha.getMinutes()}`;

    li = document.createElement('li');
    li.setAttribute("id", "liMsj");
    li.classList.add('mb-2');
    html += `<div id="divMsj">`;
    html += `<div id="divPic">`;
    html += `<img src="img/profile.png" alt="" width="50" height="50">`;
    html += `</div>`;
    if (flag) {
        li.style.position = 'absolute';
        li.style.right = 0;
        html += `<div id="divUserMsj" style="background-color: #1695A3;>`;
    }
    html += `<div id="divUserMsj">`;
    html += `<div id="Msj">`;
    html += `<span>${data.nombre}</span><br>`;
    html += `<span>${data.mensaje}</span><br>`;
    html += `<span>${hora}</span>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    li.innerHTML = html;
    ulMsj.appendChild(li);
}