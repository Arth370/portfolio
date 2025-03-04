const zap = document.querySelector('#zap')
const git = document.querySelector('#git')
const link = document.querySelector('#link')
const insta = document.querySelector('#insta')
const contatoBotao = document.querySelector('#contatao')
const ContatoImg = document.querySelector('#contImg')
const numero = document.querySelector('#num')
console.log(contatoBotao)
zap.addEventListener('click',()=>{
    ContatoImg.src='./imgs/logos/zapbranco.png'
    numero.textContent='XX XXXXX-XXXX'
    contatoBotao.classList.add('contato')
    contatoBotao.href='#contato'
})
git.addEventListener('click',()=>{
    contatoBotao.href='https://github.com/Arth370'
    ContatoImg.src='./imgs/logos/gitbranco.png'
    numero.textContent='Arth370'
    contatoBotao.classList.add('contato')
})
link.addEventListener('click',()=>{
    contatoBotao.href='https://www.linkedin.com/in/arthur-henrique-38872234a/'
    ContatoImg.src='./imgs/logos/linkbranco.png'
    numero.textContent='Arthur Henrique'
    contatoBotao.classList.add('contato')
})
insta.addEventListener('click',()=>{
    contatoBotao.href='https://www.instagram.com/arth_xhju/'
    ContatoImg.src='./imgs/logos/instabranco.png'
    numero.textContent='Arthur Henrique'
    contatoBotao.classList.add('contato')
})



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