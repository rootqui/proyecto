
const   d = document,
    btnNuevoPrograma = d.getElementById("btn-nuevo-programa"),
    btnPrograma = d.getElementById("btn-programa"),
    btnVoluntarios = d.getElementById("btn-voluntarios"),
    bodyOrgInfo = d.getElementById("org-info"),
    tempGestionVoluntarios = d.getElementById("gestion-voluntarios"),
    tempGestionPrograma = d.getElementById("gestion-programas"),
    tempNuevoPrograma = d.getElementById("form-programa");
    

btnVoluntarios.addEventListener("click", (e)=>{
    bodyOrgInfo.innerHTML = "";
    bodyOrgInfo.innerHTML = tempGestionVoluntarios.innerHTML;
});

btnNuevoPrograma.addEventListener("click", (e)=>{
    bodyOrgInfo.innerHTML = "";
    bodyOrgInfo.innerHTML = tempNuevoPrograma.innerHTML;
});

btnPrograma.addEventListener("click", (e)=>{
    bodyOrgInfo.innerHTML = "";
    bodyOrgInfo.innerHTML = tempGestionPrograma.innerHTML;
});




