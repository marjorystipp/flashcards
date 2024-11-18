function criaCartao(categoria, pergunta, resposta) {
    let container =document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
     <div class="cartao__conteudo">
            <h3>Programação</h3>
            <div class="cartao_conteudo_pergunta">
                <p>  O que é JavaScript?<p> 
            </div>
            <div class="cartao_conteudo_resposta">
                <p>  O CSS é uma linguagem estilização.<p> 
            </div>
        </div>
    `
    container.appendChild(cartao) 



}