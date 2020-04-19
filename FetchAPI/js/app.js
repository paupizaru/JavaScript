document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
        .then((res) => res.text())
        .then((data) => document.getElementById('resultado').innerHTML = data)
        .catch((err) => console.log(err));
}

function cargarJSON() {
    fetch('empleados.json')
        .then((res) => res.json())
        .then((data) => {
            let html = '';
            data.forEach((empleado) => {
                html += `<li>${empleado.nombre} ${empleado.puesto}</li>`;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch((err) => console.log(err));
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then((res) => res.json())
        .then((data) => {
            let html = '';
            data.forEach((imagen) => {
                html += `
                    <li>
                        <a href="${imagen.post_url}">Ver imagen</a>
                        ${imagen.author}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch((err) => console.log(err))
}