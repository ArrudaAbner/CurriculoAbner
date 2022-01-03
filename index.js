var nome = "Abner Rodrigues de Arruda";
var cargo = "Estudante e Desenvolvedor";
var pessoal = "Meu nome é Abner, tenho 19 anos e sou estudante na área de programação e desenvolvi esse currículo utilizando JavaScript, CSS, BootStraap e HTML5 durante um curso!";
var empresa = "Copyjui Soluções Digitais - Auxiliar Administrativo (06/2019 - 11/2021)";
var infoEmpresa1 = "Durante esse período adquiri conhecimento na área administrativa e TI. Onde fiz lançamento de notas fiscais, fluxo de caixa, planilhas excel, contato em mídias sociais, suporte ao cliente e instalação e manutenção de software e impressoras presencialmente e via acesso remoto.";
var Ntelefone = "(55) 99123-9155";
var emailI = "abnerarruda2@gmail.com";
var formacao3 = "Atualmente cursando Engenharia de Software na Unicesumar durante o período de 2021 até 2024."
var obs = "Nascido na cidade de Ijuí, estou sempre em busca de novas experiências em minha área!";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");
var informacaoNoHtml = document.getElementById("conteudo-pessoal")
var empresa1NoHtml = document.getElementById("empresa-1")
var informacaoEmpresa1 = document.getElementById("informacao-empresa-1");
var NtelefoneNoHtml = document.getElementById("telefone");
var emailNoHtml = document.getElementById("email");
var faculdadeNoHtml = document.getElementById("faculdade")

var ObsNoHtml = document.getElementById("obs-html")

function colocarObsNoHtml(obs){
    ObsNoHtml.innerHTML = obs;
}

function colocarInformacaoNoHtml(pessoal) {
    informacaoNoHtml.innerHTML = pessoal;
}


function colocarEmpresa1NoHtml(empresa) {
    empresa1NoHtml.innerHTML = empresa;
}

function colocarInfoEmpresa1NoHtml(infoEmpresa1) {
    informacaoEmpresa1.innerHTML = infoEmpresa1;
}

function colocarNomeNoHtml(nome) {
    nomehtml.innerHTML = nome;
}


function colocarNtelefoneNoHtml(Ntelefone) {
    NtelefoneNoHtml.innerHTML = Ntelefone;
}

function colocarEmailNoHtml(emailI) {
    emailNoHtml.innerHTML = emailI;
}

function logarNome() {
    console.log(nome);
}

function ColocarCargoNoHtml(cargo) {
    cargohtml.innerHTML = cargo;

}

function colocarFaculdadeNoHtml(faculdade){
    faculdadeNoHtml.innerHTML = faculdade
}

function clickNoProjetos() {
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre() {
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

ColocarCargoNoHtml(cargo);
colocarNomeNoHtml(nome);
colocarInformacaoNoHtml(pessoal);
colocarEmpresa1NoHtml(empresa);
colocarInfoEmpresa1NoHtml(infoEmpresa1);
colocarNtelefoneNoHtml(Ntelefone);
colocarEmailNoHtml(emailI);
colocarFaculdadeNoHtml(formacao3);
colocarObsNoHtml(obs);
