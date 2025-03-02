const flechaL=document.querySelector('#ArrowL')
const flechaD=document.querySelector('#ArrowD')
const img = document.querySelector('#Imga')
const texto = document.querySelector('#infT')
const inform = document.querySelector('#inf')
const clickinho=document.querySelector('#clicar')
flechaD.addEventListener('click',()=>{
    clickinho.href='./projs/sabado/receita.html'
    img.src='./imgs/omelete.png'
    texto.textContent='Receita de Omelete:'
    inform.textContent='Site que demonstra o passo a passo de uma receita de omelete'
})
flechaL.addEventListener('click',()=>{
    clickinho.href="./projs/Projeto-integrador/Projeto/proj.html"
    img.src="./imgs/ProjImg.jpg"
    texto.textContent="Idealize:"
    inform.textContent="Projeto feito para o Senai em 2024"
})