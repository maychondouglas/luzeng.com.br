
    
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


var arrayDeProjetos =  [
                        {id:1, nome:"Projeto de Combate a Incêndio", fotos:["p1imagem1", "p1imagem2", "p1imagem3"]},
                        {id:2, nome:"Projeto Estrutural", fotos:["p2imagem1", "p2imagem2", "p2imagem3"]},
                        {id:3, nome:"Projeto Arquitetônico", fotos:["p3imagem1", "p3imagem2", "p3imagem3","p3imagem4"]},
                        {id:4, nome:"Projeto Elétrico", fotos:["p4imagem1", "p4imagem2", "p4imagem3"]},
                        {id:5, nome:"Projeto Arquitetônico", fotos:["p5imagem1", "p5imagem2", "p5imagem3", "p5imagem4"]},
                        {id:6, nome:"Projeto Hidráulico", fotos:["p6imagem1", "p6imagem2", "p6imagem3", "p6imagem4"]},
                        {id:7, nome:"Projeto Arquitetônico", fotos:["p7imagem1", "p7imagem2", "p7imagem3", "p7imagem4", "p7imagem5", "p7imagem6", "p7imagem7"]},
                        {id:8, nome:"Projeto Arquitetônico", fotos:["p8imagem1", "p8imagem2", "p8imagem3"]}
                       ];

var listaDeProjetos = document.querySelector("#ul-projetos");

listaDeProjetos.innerHTML = "";
arrayDeProjetos.forEach(element => {
    listaDeProjetos.innerHTML += "<li class='projeto-da-lista' id='projeto" + element.id +"'>"+
        "<a href='?id=" +element.id + "'>" +    
            "<div class='imagem-projeto' style='background-image: url(../img/" + element.fotos[0] + ".jpg); background-size: cover; background-position: center;'>" +

            "</div>" +
            "<h2>" +
               "<span class='nome-projeto'>"+
                    element.nome +
                "</span>"+
            "</h2>"+
            "<hr id='hr"+ element.id + "'>"+
        "</a>" +
    "</li>";
});


function capturaParametroUrl() {

    //captura a url da página
    var url = window.location.href; 
    /*alert("URL CAPTURADA: \n\n" + url);*/
	
	//tenta localizar o ?
    var res = url.split('?'); 
    	
	if (res[1] === undefined) {
        return 1;   
    }else{
        return res[1].split('=')[1];
    }
}

var apresentacaoProjetoFoto = document.querySelector(".foto-projeto");
var apresentacaoProjetoNome = document.querySelector(".nome-projeto-apresentacao");

apresentacaoProjetoFoto.style = "background-image: url(../img/" + arrayDeProjetos[capturaParametroUrl()-1].fotos[0] + ".jpg)";

apresentacaoProjetoNome.innerHTML = arrayDeProjetos[capturaParametroUrl()-1].nome;


document.querySelector("#hr"+capturaParametroUrl()).style.backgroundColor = "rgb(250, 186, 20)";


var left = document.querySelector("#left");
var right = document.querySelector("#right");

var itFotosProjetos = 1;

left.addEventListener('click', function(){
    if(itFotosProjetos != 1){
        itFotosProjetos--;
        apresentacaoProjetoFoto.style = "background-image: url(../img/" + arrayDeProjetos[capturaParametroUrl()-1].fotos[itFotosProjetos-1] + ".jpg)";

    }
});
right.addEventListener('click', function(){
    if(itFotosProjetos != arrayDeProjetos[capturaParametroUrl()-1].fotos.length){
        itFotosProjetos++;
        apresentacaoProjetoFoto.style = "background-image: url(../img/" + arrayDeProjetos[capturaParametroUrl()-1].fotos[itFotosProjetos-1] + ".jpg)";
    }
});

