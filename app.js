let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');

    if (nomeInput.value.trim() === '') {
        alert('Digite um nome!');
        return;
    }

    amigos.push(nomeInput.value.trim());

    // Atualiza a lista no HTML
    listaAmigos.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');

    // Limpa o campo de input
    nomeInput.value = '';
}

function sortearAmigo() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para sortear!');
        return;
    }

    embaralhar(amigos);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i];
        let amigoSecreto = amigos[(i + 1) % amigos.length];
        
        // Último sorteia o primeiro
        resultado.innerHTML += `<li>${amigoAtual} → ${amigoSecreto}</li>`;
    }
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}