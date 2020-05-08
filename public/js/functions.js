// VAR/SELECTOR
const divUsers = document.getElementById('divUsers');
const ulMsj = document.getElementById('ulMsj');

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


function renderizarMensaje(data) {
    let li = document.createElement("li");
    let html = '';
    let fecha = new Date(data.fecha);
    let hora = `${fecha.getHours()} : ${fecha.getMinutes()}`;
    html += `<li>`;
    html += `<div id="divMsj">`;
    html += `<div id="divPic">`;
    html += `<img src="img/profile.png" alt="" width="50" height="50">`;
    html += `</div>`;
    html += `<div id="divUserMsj">`;
    html += `<div id="Msj">`;
    html += `<span>${data.nombre}</span><br>`;
    html += `<span>${data.mensaje}</span><br>`;
    html += `<span>${hora}</span>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    html += `</li>`;
    li.innerHTML = html;
    ulMsj.appendChild(li);

}