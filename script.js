//criacao de uma time line do GSAP com animacoes sincronizadas com o scroll do mouse

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //para depuracao
        },
});

tl.to(
    '#fanta',
    { 
        top: '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '0%',
    },
    'orange'
); //NOMEANDO ESTE TRECHO DE ANIMACAO COMO 'ORANGE' PARA SINCRONIZACAO

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM ID 'laranja-cortada' PARA 160% DO TOPO
        left: '23%', //MOVE O ELEMENTO COM ID 'laranja-cortada' PARA 23% DA ESQUERDA
    },
    'orange' //SINCRONIZANDO COM A ANIMACAO 'ORANGE'

);

tl.to(
    '#laranja',
    {
        width: '15%', //DIMINUI O TAMANHO DO ELEMENTO COM ID 'laranja' PARA 15% DA LARGURA
        top: '170%', //MOVE O ELEMENTO COM ID 'laranja' PARA 500% DO TOPO
        right: '23%', //MOVE O ELEMENTO COM ID 'laranja' PARA 23% DA HIGTH  
    },
    'orange' //SINCRONIZANDO COM A ANIMACAO 'ORANGE'

); 

tl.to(
    '#folha',
    {
        top: '100%', //MOVE O ELEMENTO COM ID 'folha' PARA 100% Do TOPO
        rotate: '500deg', //ROTACIONA O ELEMENTO COM ID 'folha' PARA 500 GRAUS
        left: '70%', //MOVE O ELEMENTO COM ID 'folha' PARA 70% DA LEFT
    },
    'orange' //SINCRONIZANDO COM A ANIMACAO 'ORANGE'

); 

tl.to(
    '#folha2',
    {
        top: '110%', //MOVE O ELEMENTO COM ID 'folha' PARA 100% Do TOPO
        rotate: '500deg', //ROTACIONA O ELEMENTO COM ID 'folha' PARA 500 GRAUS
        left: '0%', //MOVE O ELEMENTO COM ID 'folha' PARA 70% DA LEFT
    },
    'orange' //SINCRONIZANDO COM A ANIMACAO 'ORANGE'

); 

// CRIANDO OUTRA TIMELINE

var tl2= gsap.timeline({
    scrollTrigger:  {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', // FIM DA ANIMACAO QUANDO O ELEMENTO COM CLASSE 'THREE' ALCANCA 50% DO TOPO DA TELA
        scrub: true,
        markers: true, //PARA DEPURACAO
    }
})

//DEFININDO A ANIMACAO DO ELEMENTO COM ID 'FANTA' PARA A TIMELINE 2
tl2.from(
    '.lemon1',
    { 
        rotate: ' -90deg', // INICIA A ANIMACAO DO ELEMENTO COM ID 'LEMON1' ROTACIONADO -90 GRAUS
        top: '100%', // INICIA O ELEMENTO COM ID 'LEMON1' FORA DA TELA, -100% ACIMA DO TOPO
        left: '-110%', // INICIA O ELEMENTO COM ID 'LEMON1' FORA DA TELA, 100% A DIREITA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMACAO COMO 'CA' PARA SINCRONIZACAO

tl2.from(
    '#cocacola',
    { 
        rotate: ' -90deg', // INICIA A ANIMACAO DO ELEMENTO COM ID 'COCACOLA' ROTACIONADO -90 GRAUS
        top: '100%', // INICIA O ELEMENTO COM ID 'COCACOLA' FORA DA TELA, -100% ACIMA DO TOPO
        left: '-110%', // INICIA O ELEMENTO COM ID 'COCACOLA' FORA DA TELA, 100% A DIREITA
    },
    'ca'
);//NOMEANDO ESTE TRECHO DE ANIMACAO COMO 'CA' PARA SINCRONIZACAO

tl2.from(
    '.lemon2',
    { 
        rotate: ' 90deg', // INICIA A ANIMACAO DO ELEMENTO COM ID 'LEMON1' ROTACIONADO -90 GRAUS
        top: '100%', // INICIA O ELEMENTO COM ID 'LEMON1' FORA DA TELA, -100% ACIMA DO TOPO
        left: '110%', // INICIA O ELEMENTO COM ID 'LEMON1' FORA DA TELA, 100% A DIREITA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMACAO COMO 'CA' PARA SINCRONIZACAO

tl2.from(
    '#pepsi',
    { 
        rotate: ' 90deg', // INICIA A ANIMACAO DO ELEMENTO COM ID 'LEMON1' ROTACIONADO -90 GRAUS
        top: '100%', // INICIA O ELEMENTO COM ID 'LEMON1' FORA DA TELA, -100% ACIMA DO TOPO
        left: '110%', // INICIA O ELEMENTO COM ID 'LEMON1' FORA DA TELA, 100% A DIREITA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMACAO COMO 'CA' PARA SINCRONIZACAO

tl2.to(
    '#laranja-cortada',
    {
        width: '18%', // AUMENTA A LARGURA DO ELEMENTO COM ID 'LARANJA-CORTADA' ÁRA 18% DA LARGURA ORIGINAL
        left: '41.5%', // MOVE O ELEMENTO COM ID 'LARANJA-CORTADA' PARA 42% DA ESQUERDA
        top: '204%', // MOVE O ELEMENTO COM ID 'LARANJA-CORTADA' PARA 204% DO TOPO
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMACAO COMO 'CA' PARA SINCRONIZACAO

tl2.to(
    '#fanta',
    {
        width: '35%', // AUMENTA A LARGURA DO ELEMENTO COM ID 'FANTA' ÁRA 35% DA LARGURA ORIGINAL
        left: '33%', // MOVE O ELEMENTO COM ID 'FANTA' PARA 33% DA ESQUERDA
        top: '210%', // MOVE O ELEMENTO COM ID 'FANTA' PARA 210% DO TOPO
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMACAO COMO 'CA' PARA SINCRONIZACAO