// Função principal que realiza a pesquisa de tecnologias
function pesquisar() {
  
    // Seleciona o elemento que exibirá os resultados da pesquisa
    let resultadoPesquisa = document.getElementById("resultados-pesquisa");
    
    // Seleciona o input de entrada de texto
    let input = document.querySelector("input");
    
    // Converte o valor do input para minúsculas e remove espaços extras
    let inputTratado = input.value.toLowerCase().trim();
    
    // Limpa o valor do input após a pesquisa
    input.value = "";
  
    // Variável para verificar se a tecnologia foi encontrada
    let encontrado = false;
    
    // Limpa o resultado anterior
    resultadoPesquisa.innerHTML = "";
  
    // Itera sobre o array de tecnologias
    for (let tecnologia of tecnologias) {
      
        // Verifica se o título da tecnologia corresponde ao valor tratado do input
        if (tecnologia.titulo.toLowerCase() === inputTratado) {
          
            // Insere o HTML do resultado encontrado na div de resultados
            resultadoPesquisa.innerHTML = `
            <div class="item-resultado">
                <h2>
                    <a href="" target="_blank">${tecnologia.titulo}</a>
                </h2>
                <h3>
                    Descrição
                </h3>
                <p class="descricao-meta">${tecnologia.descricao}</p>
                <h3>
                Curiosidade
                </h3>
                <p class="descricao-meta">${tecnologia.curiosidade}</p>
                <h3>
                Exemplo de aplicação
                </h3>
                <p class="descricao-meta">${tecnologia.exemploDeAplicacao}</p>
                <h3>
                Quer saber mais sobre ${tecnologia.titulo}?
                </h3>
                <p>
                O <a href="https://gemini.google.com/app" target="_blank">Gemini</a> pode te ajudar com isso! Experimente utilizar o prompt "Gemini, me fale sobre ${tecnologia.titulo}"
                </p>
                <span>Dica: Apresente um contexto ao Gemini para respostas eficazes!</span>
                <p>Consulte a <a href=${tecnologia.documentacao} target="_blank">documentação</a></p>
            </div>`;
            
            // Define que a tecnologia foi encontrada
            encontrado = true;
            
            // Para a pesquisa após encontrar a tecnologia
            break;
        }
    }
  
    // Se nenhuma tecnologia foi encontrada
    if (!encontrado) {
      
        // Gera um índice aleatório para sugerir outra tecnologia
        let tecnologiaAleatoria = Math.floor(Math.random() * tecnologias.length);

        // Mostra uma sugestão de outra tecnologia se a pesquisa falhar
        resultadoPesquisa.innerHTML = `
        <div class="item-resultado not-found">
          <h2>🙁 Tecnologia não encontrada!</h2>
          <p class="descricao-meta">Não encontramos nada relacionado à sua pesquisa. Tente outro termo.</p>
          <p class="descricao-meta">Que tal pesquisar sobre <strong>${tecnologias[tecnologiaAleatoria].titulo}</strong>?</p>
        </div>`;
    }
  
    // Adiciona a classe 'visivel' depois de o conteúdo ser inserido para aplicar animação CSS
    setTimeout(() => {
      
        // Seleciona o elemento do resultado inserido
        const resultadoElemento = document.querySelector(".item-resultado");
        
        // Adiciona a classe 'visivel' para animação de transição
        if (resultadoElemento) {
            resultadoElemento.classList.add("visivel");
        }
        
    // O delay garante que o CSS de transição funcione corretamente
    }, 10);
}
