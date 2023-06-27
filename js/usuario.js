const d = document,
    contenedorUsuario = d.getElementById("usuario-info"),
    templatePerfil = d.getElementById("template-perfil"),
    templateProgramas = d.getElementById("template-programas"),
    templateCertificaciones = d.getElementById("template-certificaciones"),
    btnPerfil = d.getElementById("perfil"),
    btnProgramas = d.getElementById("programas"),
    btnCertificaciones = d.getElementById("certificaciones");
    
btnPerfil.addEventListener("click", (e)=>{
    if(e.target.matches("#perfil") || e.target.matches("#perfil > *")){
        contenedorUsuario.innerHTML = "";
        contenedorUsuario.innerHTML = templatePerfil.innerHTML; 
    }
});

btnProgramas.addEventListener("click", (e)=>{
    if(e.target.matches("#programas") || e.target.matches("#programas > *")){
        contenedorUsuario.innerHTML = "";
        contenedorUsuario.innerHTML = templateProgramas.innerHTML; 
    }
});

btnCertificaciones.addEventListener("click", (e)=>{
    if(e.target.matches("#certificaciones") || e.target.matches("#certificaciones > *")){
        contenedorUsuario.innerHTML = "";
        contenedorUsuario.innerHTML = templateCertificaciones.innerHTML; 
    }
});
