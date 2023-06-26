
const   d = document,
    tab = d.querySelector(".tab-form"),
    tabLogin = d.querySelector(".tab-form-login"),
    registroForm = d.querySelector(".registro-form"),
    tabHeader = d.querySelector(".tab-header"),
    tabHeaderElements = d.querySelectorAll(".tab-header > div"),
    tabBodyElements = d.querySelectorAll(".tab-body > div"),
    frmRegistro = d.getElementById("frm-registro"),
    frmInicioSesion = d.getElementById("frm-inicio-sesion"),
    btnRegistro = d.getElementById("tab-btn-registro"),
    frmLogin= d.getElementById("form-login"),
    frmUsuario = d.getElementById("form-usuario"),
    frmOrg = d.getElementById("form-org"),
    tabUsuario = d.getElementById("tab-usuario"),
    tabOrg = d.getElementById("tab-org"),
    btnCloseReg = d.getElementById("btn-close-reg"),
    btnCloseLogin = d.getElementById("btn-close-login"),
    btnLogin = d.getElementById("tab-btn-login");    


// Boton cerrar form inicio de sesion
btnCloseLogin.addEventListener("click", (e)=>{
    if(e.target.matches("#btn-close-login")){
        tabLogin.style.opacity = 0;
        tabLogin.style.visiblity = "hidden";
        tab.style.zIndex = -1000;
        // e.preventDefault();
    }
});

// Boton cerrar form registro
btnCloseReg.addEventListener("click", (e)=>{
    if(e.target.matches("#btn-close-reg")){
        tab.style.opacity = 0;
        frmRegistro.style.visiblity = "hidden";
        tab.style.zIndex = -1000;
        // e.preventDefault();
    }
});

// Boton Iniciar sesion
btnLogin.addEventListener("click",function(e){
    if(e.target.matches("#tab-btn-login")){
        tabLogin.style.opacity = 1;
        frmInicioSesion.style.visiblity = "visible";
        tab.style.zIndex = -1000;
        frmLogin.style.zIndex = 1000;
        frmInicioSesion.style.zIndex = 1000;
        frmInicioSesion.innerHTML = frmLogin.innerHTML;

            d.querySelector("#btn-frm-login").addEventListener("click",(e)=>{
                if(e.target.matches("#btn-frm-login")){
                    let u = d.getElementById("email-usuario");
                    if (u.value == 'jdoe@mail.com'){
                        // window.location.href = "./pages/usuario.html";
                        location.assign("https://rootqui.github.io/proyecto/pages/usuario.html");
                    }

                    if (u.value == 'lorem@mail.org'){
                        location.assign("https://rootqui.github.io/proyecto/pages/organizacion.html");
                    }
                }
                e.preventDefault();
            });
            e.preventDefault();
        }
});

// Boton de Registro
btnRegistro.addEventListener("click",function(e){
    if(e.target.matches("#tab-btn-registro")){           
        tab.style.opacity = 1;
        frmRegistro.style.visiblity = "visible";
        tab.style.zIndex = 1000;
        frmRegistro.innerHTML = frmUsuario.innerHTML;
        e.preventDefault();
    }
});

// Pestaña de Usuario
tabUsuario.addEventListener("click",function(e){
        if(e.target.matches("#tab-usuario")){
            tabBodyElements[0].innerHTML = "";
            tabBodyElements[0].innerHTML = frmUsuario.innerHTML;            
            tab.style.opacity = 1;
            tabHeaderElements[1].classList.remove("active");
            tabHeaderElements[0].classList.add("active");
            
        }
});

// Pestaña de Organizacion
tabOrg.addEventListener("click",function(e){
    if(e.target.matches("#tab-org")){
        tabBodyElements[0].innerHTML = "";
        tabBodyElements[0].innerHTML = frmOrg.innerHTML;
        tab.style.opacity = 1;
        tabHeaderElements[0].classList.remove("active");
        tabHeaderElements[1].classList.add("active");
    }
});

let i = 0;
let msg = d.getElementById("hero-text");

// d.addEventListener("DOMContentLoaded", (e)=>{
    
//     const listMsg = ["La falta de amor es la mayor pobreza del ser humano", "Si juzgas a la gente, no tienes tiempo para amarla", "Sé tú el cambio que quieres ver en el mundo."];
                    
//     (function fmsg (){
//         msg.textContent = "";
//         if (i > listMsg.length){
//             i = 1;
//         }
        
//         msg.textContent = listMsg[i]
//         i++;
//     }) ();

//     // fmsg();
// });

// const listMsg = ["La falta de amor es la mayor pobreza del ser humano", "Si juzgas a la gente, no tienes tiempo para amarla", "Sé tú el cambio que quieres ver en el mundo."];

// (function fmsg (){
    
//     msg.textContent = "";
//     if (i > listMsg.length){
//         i = 1;
//     }
//     let txt = listMsg[i];
//     msg.textContent =  txt
//     msg.style.fontSize = "40px";
//     msg.style.animation = "typing 4s steps(18) infinite, cursor .4s step-end infinite alternate";
//     // setInterval("",100000);
//     i++;
//     setInterval(fmsg, 4000);
// }) ();
