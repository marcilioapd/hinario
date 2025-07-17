// app.js

// Dados de exemplo para os hinários. Em um aplicativo real, isso viria de uma API ou banco de dados.
const hymnalsData = {
    "Cantor Cristão": [
        { number: 1, title: "Saudai o Nome de Jesus", text: "Saudai o nome de Jesus!\nArcanjos, vos prostrai!\nAo Filho do eterno Deus\nCom glória coroai!\nCom glória coroai!\nCom glória coroai!\nAo Filho do eterno Deus\nCom glória coroai!" },
        { number: 2, title: "Ó Adorai", text: "Ó adorai o Cordeiro de Deus,\nQue sobre a cruz por nós morreu!\nO Seu amor tão grande foi,\nQue a nossa alma redimiu.\nÓ adorai, ó adorai,\nO Cordeiro que por nós morreu!\nÓ adorai, ó adorai,\nO Cordeiro que por nós morreu!" },
        { number: 3, title: "Louvor e Glória", text: "Louvor e glória a Ti, ó Deus,\nPor Teu amor e Teu poder!\nEm Ti confiamos, ó Senhor,\nE em Teu nome vamos viver.\nAleluia! Aleluia!\nAo Rei dos reis, o nosso Deus!\nAleluia! Aleluia!\nAo Rei dos reis, o nosso Deus!" },
        { number: 4, title: "A Deus Demos Glória", text: "A Deus demos glória por grandes coisas fez,\nPor Seu Filho amado, que por nós morreu!\nQue abriu-nos a porta para o céu de luz,\nE nos salvou por Seu amor na cruz.\nLouvai, louvai, louvai ao Senhor!\nLouvai, louvai, louvai ao Senhor!\nLouvai, louvai, louvai ao Senhor!\nPor Seu amor na cruz!" },
        { number: 5, title: "Vinde, Adoremos", text: "Vinde, adoremos, prostrados a Seus pés,\nO Rei dos reis, o nosso Deus!\nCom vozes de júbilo, louvai ao Senhor,\nQue nos salvou por Seu amor.\nAmém, amém, amém, amém!\nAmém, amém, amém, amém!" },
        { number: 6, title: "Grandioso És Tu", text: "Senhor, meu Deus, quando eu maravilhado\nFico a pensar nas obras de Tuas mãos,\nNo céu azul de estrelas pontilhado,\nO Teu poder mostrando a criação.\nEntão minh'alma canta a Ti, Senhor:\nGrandioso és Tu! Grandioso és Tu!\nEntão minh'alma canta a Ti, Senhor:\nGrandioso és Tu! Grandioso és Tu!" },
        { number: 7, title: "Castelo Forte", text: "Castelo Forte é nosso Deus,\nEscudo e boa espada;\nCom Seu poder defende os Seus\nEm toda a jornada.\nCom fúria pertinaz,\nPersegue Satanás\nCom artimanhas tais\nE astúcias infernais,\nQue igual não há na terra!" },
        { number: 8, title: "A Rocha Eterna", text: "A Rocha Eterna é Cristo, o Salvador,\nMeu forte abrigo, meu fiel Pastor.\nEm Suas mãos seguro estou,\nJamais serei vencido, não!\nEm Suas mãos seguro estou,\nJamais serei vencido, não!" },
        { number: 9, title: "Santo, Santo, Santo", text: "Santo, Santo, Santo! Deus Onipotente!\nCedo de manhã cantaremos Teu louvor.\nSanto, Santo, Santo! Justo e Clemente!\nÉs um só Deus, Excelso Criador." },
        { number: 10, title: "Firmes nas Promessas", text: "Firmes nas promessas do meu Salvador,\nCantarei louvores ao meu Criador.\nFirmes nas promessas, sempre hei de estar,\nPor toda a vida, sem vacilar." }
    ],
    "Harpa Cristã": [
        { number: 1, title: "Conversão", text: "Oh! Que esperança me deu Jesus,\nQuando por mim morreu na cruz!\nAgora vivo em Sua luz,\nOh! Que esperança me deu Jesus!" },
        { number: 2, title: "Vem a Cristo", text: "Vem a Cristo, vem agora,\nEle espera por ti, pecador!\nNão demores, vem sem demora,\nRecebe o Seu grande amor!" },
        { number: 3, title: "Plena Paz", text: "Plena paz e santo gozo\nTenho em meu coração,\nDesde que Jesus bendito\nDeu-me a salvação.\nPlena paz, plena paz,\nTenho em meu coração.\nPlena paz, plena paz,\nTenho em meu coração." },
        { number: 4, title: "Contrito Coração", text: "Oh! Contrito coração,\nQue a Jesus vem se entregar!\nEle tem a salvação,\nPara todo o que O buscar.\nOh! Contrito coração,\nQue a Jesus vem se entregar!\nEle tem a salvação,\nPara todo o que O buscar." },
        { number: 5, title: "A Mensagem da Cruz", text: "Rude cruz se erigiu,\nDela o dia fugiu,\nComo emblema de vergonha e dor.\nMas contemplo essa cruz\nPorque nela Jesus\nDeu a vida por mim, pecador.\nSim, eu amo a mensagem da cruz,\nAté morrer eu a vou proclamar;\nLevarei eu também minha cruz,\nAté por uma coroa trocar." },
        { number: 6, title: "Mais Perto Quero Estar", text: "Mais perto quero estar, meu Deus, de Ti!\nInda que seja a dor que me conduz.\nA peregrinar aqui, por sobre a cruz,\nMais perto quero estar, meu Deus, de Ti!" },
        { number: 7, title: "Porque Ele Vive", text: "Deus enviou Seu Filho amado\nPara morrer em meu lugar.\nNa cruz pagou por meus pecados,\nMas o sepulcro vazio está, porque Ele vive!\nPorque Ele vive, eu posso crer no amanhã;\nPorque Ele vive, temor não há.\nEu sei que a minha vida está nas mãos\nDo meu Jesus que vivo está." },
        { number: 8, title: "Ao Passar o Jordão", text: "Quando a morte me vier,\nE o Jordão eu transpor,\nSei que Cristo me virá\nCom Seu braço de amor.\nAo passar o Jordão,\nAo passar o Jordão,\nSei que Cristo me virá\nCom Seu braço de amor." },
        { number: 9, title: "Oh! Dia Alegre", text: "Oh! Dia alegre, em que Jesus\nMe deu a salvação!\nMeu coração se enche de luz,\nE canta em gratidão.\nOh! Dia alegre, em que Jesus\nMe deu a salvação!" },
        { number: 10, title: "Que Segurança", text: "Que segurança! Sou de Jesus!\nEu desfruto agora a paz de Sua luz!\nDo céu herdeiro, guarda-me, ó Deus,\nComprado eu fui por sangue de Jesus." }
    ]
};

// Referências aos elementos DOM
const homeScreen = document.getElementById('home-screen');
const hymnListScreen = document.getElementById('hymn-list-screen');
const hymnContentScreen = document.getElementById('hymn-content-screen');

const btnCantorCristao = document.getElementById('btn-cantor-cristao');
const btnHarpaCrista = document.getElementById('btn-harpa-crista');
const backToHomeBtn = document.getElementById('back-to-home');
const backToListBtn = document.getElementById('back-to-list');

const hymnListTitle = document.getElementById('hymn-list-title');
const searchInput = document.getElementById('search-input');
const hymnListUl = document.getElementById('hymn-list');

const hymnContentTitle = document.getElementById('hymn-content-title');
const hymnText = document.getElementById('hymn-text');
const fontSizeDecreaseBtn = document.getElementById('font-size-decrease');
const fontSizeIncreaseBtn = document.getElementById('font-size-increase');

const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleContentBtn = document.getElementById('theme-toggle-content');

let currentHymnal = null; // Armazena o hinário atualmente selecionado
let currentFontSize = 18; // Tamanho de fonte inicial em pixels

// Função para alternar a visibilidade das telas
function showScreen(screenToShow) {
    homeScreen.classList.add('hidden');
    hymnListScreen.classList.add('hidden');
    hymnContentScreen.classList.add('hidden');

    screenToShow.classList.remove('hidden');
    screenToShow.classList.add('flex'); // Garante que a tela seja exibida como flexbox
}

// Função para exibir a tela inicial
function showHomeScreen() {
    showScreen(homeScreen);
    searchInput.value = ''; // Limpa a barra de pesquisa ao voltar para a tela inicial
}

// Função para exibir a lista de hinos de um hinário
function showHymnList(hymnalName) {
    currentHymnal = hymnalsData[hymnalName];
    hymnListTitle.textContent = hymnalName;
    showScreen(hymnListScreen);
    renderHymnList(currentHymnal);
}

// Função para renderizar a lista de hinos (com ou sem filtro)
function renderHymnList(hymnsToRender) {
    hymnListUl.innerHTML = ''; // Limpa a lista existente
    if (hymnsToRender.length === 0) {
        hymnListUl.innerHTML = '<li class="text-center text-gray-500 dark:text-gray-400">Nenhum hino encontrado.</li>';
        return;
    }
    hymnsToRender.forEach(hymn => {
        const li = document.createElement('li');
        li.classList.add('p-3', 'rounded-lg', 'cursor-pointer', 'hover:bg-gray-200', 'dark:hover:bg-gray-700', 'transition-colors', 'duration-200');
        li.innerHTML = `<span class="font-semibold">${hymn.number}.</span> ${hymn.title}`;
        li.addEventListener('click', () => showHymnContent(hymn.number, hymn.title, hymn.text));
        hymnListUl.appendChild(li);
    });
}

// Função para exibir o conteúdo de um hino
function showHymnContent(number, title, text) {
    hymnContentTitle.textContent = `${number}. ${title}`;
    hymnText.textContent = text;
    hymnText.style.fontSize = `${currentFontSize}px`; // Aplica o tamanho da fonte atual
    showScreen(hymnContentScreen);
}

// Event Listeners para os botões da tela inicial
btnCantorCristao.addEventListener('click', () => showHymnList("Cantor Cristão"));
btnHarpaCrista.addEventListener('click', () => showHymnList("Harpa Cristã"));

// Event Listeners para os botões de voltar
backToHomeBtn.addEventListener('click', showHomeScreen);
backToListBtn.addEventListener('click', () => showHymnList(hymnListTitle.textContent)); // Volta para a lista do hinário atual

// Event Listener para a barra de pesquisa
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredHymns = currentHymnal.filter(hymn =>
        hymn.title.toLowerCase().includes(searchTerm) ||
        hymn.number.toString().includes(searchTerm)
    );
    renderHymnList(filteredHymns);
});

// Função para alternar o tema (claro/escuro)
function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Salva a preferência do tema
    themeToggleBtn.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    themeToggleContentBtn.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
}

// Event Listeners para os botões de alternar tema
themeToggleBtn.addEventListener('click', toggleTheme);
themeToggleContentBtn.addEventListener('click', toggleTheme);

// Aplica o tema salvo no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggleBtn.textContent = 'Modo Claro';
        themeToggleContentBtn.textContent = 'Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Modo Escuro';
        themeToggleContentBtn.textContent = 'Modo Escuro';
    }
    // Define o tamanho da fonte inicial do hino
    hymnText.style.fontSize = `${currentFontSize}px`;
});

// Event Listeners para ajustar o tamanho da fonte
fontSizeDecreaseBtn.addEventListener('click', () => {
    if (currentFontSize > 12) { // Limite mínimo de fonte
        currentFontSize -= 2;
        hymnText.style.fontSize = `${currentFontSize}px`;
    }
});

fontSizeIncreaseBtn.addEventListener('click', () => {
    if (currentFontSize < 30) { // Limite máximo de fonte
        currentFontSize += 2;
        hymnText.style.fontSize = `${currentFontSize}px`;
    }
});

// Exibe a tela inicial ao carregar o script
showHomeScreen();
