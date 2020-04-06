
    
    /*
    window.onscroll = function() {myFunction()};

    function myFunction(){
       
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.querySelector(".barra-menu").style.backgroundColor = "var(--azul-escuro)";
            document.querySelector(".barra-menu").style.marginTop = "3rem";
            document.querySelector("header").style.backgroundColor = "var(--cinza-escuro)";
        } else {
            document.querySelector(".barra-menu").style.backgroundColor = "transparent";
            document.querySelector(".barra-menu").style.marginTop = "3rem";
            document.querySelector("header").style.backgroundColor = "var(--azul-escuro)";
        }
    }
*/
window.onscroll = function() {myFunction()};

function myFunction(){
   
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.querySelector(".barra-menu").style.backgroundColor = "var(--azul-escuro)";
        document.querySelector(".barra-menu").style.marginTop = "0";
        document.querySelector("header").style.backgroundColor = "var(--cinza-escuro)";
        document.querySelector(".barra-menu").style.height = "6rem";
        document.querySelector("#logo").style.height = "85px";
        document.querySelector("header").style.display = "none";
    } else {
        document.querySelector(".barra-menu").style.backgroundColor = "transparent";
        document.querySelector(".barra-menu").style.marginTop = "3rem";
        document.querySelector("header").style.backgroundColor = "var(--azul-escuro)";
        document.querySelector(".barra-menu").style.height = "7rem";
        document.querySelector("#logo").style.height = "130px";
        document.querySelector("header").style.display = "initial";
    }
}




/*Menu Mobile*/
var botaoMenu = document.querySelector(".menu-mobile-botao");
var minhaCheckBox = document.querySelector("#check");
var menuMobileDiv = document.querySelector(".menu-mobile-lista");
var fecharMenuMobile = document.querySelector(".fechar-menu-mobile");

botaoMenu.addEventListener("change", function(){
if(minhaCheckBox.checked){
    menuMobileDiv.style.right = "0";
}else{
    menuMobileDiv.style.right = "-50%";
}
});

/*Menu Deslocando de acordo com o Srcoll*/
var home = document.getElementById("home");
var sobre = document.getElementById("sobre");
var projetos = document.getElementById("projetos");
var servicos = document.getElementById("servicos");
var contato = document.getElementById("contato");

var homeMenu = document.getElementById("home-menu");
var sobreMenu = document.getElementById("sobre-menu");
var projetosMenu = document.getElementById("projetos-menu");
var servicosMenu = document.getElementById("servicos-menu");
var contatoMenu = document.getElementById("contato-menu");





function  fecharMenu(){
menuMobileDiv.style.right = "-50%";
minhaCheckBox.checked = false;
}
