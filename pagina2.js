:root{
    --fundo:	#FF00FF;
    --cartao-frente: 	#C71585;
    --catao-verso:  #FF1493;
    --destaque: 		#00FFFF;
    --preto: #000000; 
    --branco: #ffffff;
}
body{
    background-color: var(--fundo);
}
 
header{
    background-color: var(--preto);
    padding: 40px;
    display: flex;
    justify-content: space-around;
}

header a {
    color: var(--branco);
}

footer{
    position: fixed;
    bottom: 0;
    background-color: var(--preto);
    color: var(--branco);
    width: 100%;
    text-align: center;
}
 #container{
    display: grid;
    padding: 40px;
    gap: 4rem;
 }

 .conteudo-cartao{
    padding: 40px;
    background-color: var(--cartao-frente);
    color: var(--branco);
    box-shadow: -12px 13px 8px var(--preto);
    cursor: pointer;
}


.resposta-cartao{
  padding: 40px;
  background-color: var(--cartao-verso);
  display: none;
}

.conteudo-cartao:hover{
      transform: scale(1.04);
}
:function criaCartao (categoria, pergunta, resposta){
    let container = document.getElementById ('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class="conteudo-cartao" onclick = "mostraResposta(this)">
      <h3>${categoria}</h3>
     <div class="pergunta-cartao">
      <p>${pergunta}</p>
     </div>
     <div class="resposta-cartao">
      <p>${resposta}</p>
     </div>
  </div>
    `
  
    container.appendChild(cartao);
  }

  function mostraResposta(card){
    const resposta =card.querySelector('.resposta-cartao');
    if(resposta.style.display === 'none'){
      resposta.style.display = 'block';
    }
    else{
       resposta.style.display = 'none';
    }
  }