import { Activity, AgeGroup, LessonLevel, ActivityType } from './types';

export const ALL_ACTIVITIES: Activity[] = [
  // BLOCO 1: Adaptação, Mergulho e Propulsão Inicial
  {
    id: '1',
    title: 'Caça ao Tesouro das Cores',
    type: 'fun',
    age: ['3-5', '6-10'],
    level: ['adaptation', 'initiation'],
    durationMin: 10,
    materials: ['Argolas coloridas', 'objetos que afundem'],
    description: 'O instrutor espalha objetos no fundo da piscina. Ele grita uma cor (ex: "Verde!"). As crianças devem mergulhar para pegar apenas os objetos daquela cor.',
    tip: 'Se houver muitos alunos, divida em duas equipes para evitar colisões.'
  },
  {
    id: '2',
    title: 'O Motorzinho Potente',
    type: 'warmup',
    age: ['3-5', '6-10'],
    level: ['initiation'],
    durationMin: 5,
    materials: ['Borda da piscina', 'espaguetes'],
    description: 'As crianças seguram na borda. O instrutor é o "mecânico". Ele diz: "Ligar motor nível 1" (pernada lenta). "Nível 5" (pernada forte fazendo muita espuma).',
    tip: 'Ótimo para aquecimento e gasto de energia inicial.'
  },
  {
    id: '3',
    title: 'Travessia do Rio com Jacaré',
    type: 'main',
    age: ['3-5', '6-10'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Nenhum', 'Pranchas'],
    description: 'O instrutor é o Jacaré no meio da "travessia". As crianças devem atravessar a piscina sem serem tocadas. Para ficarem seguras, precisam "esconder o rosto na água" (mergulho rápido).',
    tip: 'Adapte a velocidade do "jacaré" conforme o nível de medo da turma.'
  },
  {
    id: '4',
    title: 'O Túnel Secreto',
    type: 'main',
    age: ['3-5', '6-10'],
    level: ['adaptation', 'initiation'],
    durationMin: 8,
    materials: ['3 a 4 espaguetes em arco'],
    description: 'Forma-se um túnel de arcos na água. A criança deve atravessar por baixo de todos os arcos sem tocar neles, preferencialmente com o rosto na água.',
    tip: 'Aumente a profundidade dos arcos para alunos mais avançados.'
  },
  {
    id: '5',
    title: 'Estátua Subaquática',
    type: 'warmup',
    age: ['3-5', '6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 5,
    materials: ['Som', 'comando de voz'],
    description: 'Quando a música para ou o instrutor apita, todos devem mergulhar e fazer uma "pose de estátua" embaixo d\'água por 3 a 5 segundos.',
    tip: 'Use para treinar a calma e a flutuação negativa controlada.'
  },
  {
    id: '6',
    title: 'Resgate do Astronauta',
    type: 'main',
    age: ['6-10'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Pranchas', 'halteres de espuma'],
    description: 'A criança finge ser um astronauta flutuando no espaço (barriga para cima). Ela deve se deslocar apenas com pequenos movimentos de mão (sculling) até chegar na "estação espacial" (borda oposta).',
    tip: 'Essencial para ensinar o equilíbrio horizontal sem ajuda da borda.'
  },
  {
    id: '7',
    title: 'Corrida de Cavalinho',
    type: 'fun',
    age: ['3-5'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Espaguetes'],
    description: 'A criança monta no espaguete como se fosse um cavalo. Ela deve atravessar a piscina fazendo "trotes" (pernada de bicicleta ou crawl) sem cair para os lados.',
    tip: 'Ideal para crianças que ainda têm receio de soltar o suporte flutuante.'
  },
  {
    id: '8',
    title: 'Fábrica de Bolhas Gigantes',
    type: 'warmup',
    age: ['baby', '3-5'],
    level: ['adaptation'],
    durationMin: 7,
    materials: ['Canudos grossos', 'boca'],
    description: 'O instrutor pede para as crianças fazerem diferentes tipos de bolhas: "bolhas silenciosas" (devagar), "bolhas de tempestade" (forte) e "bolhas com o nariz".',
    tip: 'Técnica base para evitar que a criança aspire água pelo nariz.'
  },
  {
    id: '9',
    title: 'Circuito dos Super-Heróis',
    type: 'main',
    age: ['3-5', '6-10'],
    level: ['initiation'],
    durationMin: 15,
    materials: ['Arcos', 'pranchas', 'tapete flutuante'],
    description: 'Um mini-circuito: 1. Pular do tapete (Salto do Batman); 2. Deslizar com prancha (Voo do Superman); 3. Pegar um objeto no fundo (Visão do Aquaman).',
    tip: 'Use para turmas com níveis mistos, pois cada um faz o desafio no seu ritmo.'
  },
  {
    id: '10',
    title: 'Siga o Mestre Subaquático',
    type: 'fun',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O instrutor (ou um aluno líder) faz um movimento embaixo d\'água (ex: dar uma cambalhota, tocar o pé, abrir os braços). Os outros mergulham logo em seguida para repetir exatamente igual.',
    tip: 'Ótimo para avaliar a consciência corporal subaquática dos alunos.'
  },
  // NOVAS ATIVIDADES: Infantil II | Adaptação (ID 81-89)
  {
    id: '81',
    title: 'Corrida dos Gigantes',
    type: 'warmup',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Área rasa da piscina'],
    description: 'Os alunos atravessam a piscina andando rápido na ponta dos pés, fazendo círculos gigantes com os braços para vencer a resistência da água.',
    tip: 'Se a criança tiver medo, permita que ela segure na borda com uma das mãos.'
  },
  {
    id: '82',
    title: 'O Maestro das Ondas',
    type: 'warmup',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Em círculo, o instrutor sobe as mãos e todos batem na superfície criando "chuvinha". Quando desce, todos batem os pés suavemente embaixo d\'água.',
    tip: 'Observe quem tem aversão a água no rosto durante a "chuvinha".'
  },
  {
    id: '83',
    title: 'Luta de Espuma na Borda',
    type: 'warmup',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Borda'],
    description: 'Segurando na borda, os alunos batem pernas o mais forte possível para criar uma "parede de espuma" que esconda o colega ao lado.',
    tip: 'Use a competitividade: "Quem faz a espuma mais alta?".'
  },
  {
    id: '84',
    title: 'Caça ao Tesouro Progressiva',
    type: 'main',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 20,
    materials: ['Objetos flutuantes e de fundo'],
    description: 'Primeiro pegam objetos que boiam. Depois, objetos no fundo em partes rasas, incentivando o mergulho gradual do rosto e tronco.',
    tip: 'Use objetos como moedas de plástico ou bonecos de ação para motivar.'
  },
  {
    id: '85',
    title: 'O Foguete Hidrodinâmico',
    type: 'main',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 20,
    materials: ['Pranchas ou espaguetes'],
    description: 'A criança segura o apoio, dá impulso na parede com o rosto na água fazendo bolhas e tenta deslizar o máximo possível.',
    tip: 'O foco é a confiança de que a água sustenta o corpo submerso.'
  },
  {
    id: '86',
    title: 'Circuito de Obstáculos Subaquáticos',
    type: 'main',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 20,
    materials: ['Arcos, espaguetes'],
    description: 'Circuito: passar por dentro de um arco (mergulhando), por baixo de um espaguete e pegar uma argola no chão.',
    tip: 'O desafio de "completar a missão" ajuda a superar o medo.'
  },
  {
    id: '87',
    title: 'Basquete de Esponja',
    type: 'fun',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Esponjas grandes, baldes'],
    description: 'Times tentam arremessar esponjas molhadas no balde. O movimento de saltar e arremessar ajuda na noção de profundidade e descontração.',
    tip: 'Excelente para terminar a aula em clima de jogo e esquecer o medo.'
  },
  {
    id: '88',
    title: 'O Repórter Subaquático',
    type: 'fun',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Objeto para microfone'],
    description: 'O instrutor mergulha o "microfone" e a criança mergulha a boca para "falar" seu nome fazendo bolhas embaixo d\'água.',
    tip: 'Trabalha a expiração forçada, essencial para evitar água no nariz.'
  },
  {
    id: '89',
    title: 'Corrida do Motor de Popa',
    type: 'fun',
    age: ['6-10'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Espaguetes'],
    description: 'Cada criança monta em um espaguete e atravessa a piscina o mais rápido possível fugindo do "tubarão" (instrutor).',
    tip: 'Gera sensação de autonomia e deslocamento independente.'
  },
  // NOVAS ATIVIDADES: Infantil I | Aperfeiçoamento (ID 90-98)
  {
    id: '90',
    title: 'O Jet Ski Veloz',
    type: 'warmup',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Pranchas pequenas'],
    description: 'Segurando a prancha com braços esticados, a criança faz a pernada mais forte possível sem dobrar excessivamente os joelhos.',
    tip: 'Se o quadril afundar, peça para colocar o rosto na água.'
  },
  {
    id: '91',
    title: 'Moinho de Vento com Palmas',
    type: 'warmup',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Movimento de braçada de Crawl tocando a coxa e dando uma "palmada suave" na água à frente da cabeça no final da fase aérea.',
    tip: 'Evita braçadas curtas ou "remadinhas de cachorro".'
  },
  {
    id: '92',
    title: 'Alarme do Despertador',
    type: 'warmup',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Nadam livremente. Ao som de "Trimmm!", todos fazem uma submersão rápida e voltam batendo pernas explosivamente até a borda.',
    tip: 'Trabalha a transição para o esforço explosivo.'
  },
  {
    id: '93',
    title: 'A Orelha que Ouve a Água',
    type: 'main',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 20,
    materials: ['Pranchas'],
    description: 'Nadando com prancha, faz a braçada e encosta a orelha no braço esticado para "ouvir o segredo da água" e respirar de lado.',
    tip: 'Use o "segredo" para que não levantem a cabeça inteira.'
  },
  {
    id: '94',
    title: 'O Equilibrista de Moedas',
    type: 'main',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 20,
    materials: ['Moedas de plástico ou brinquedos pequenos'],
    description: 'Flutuação de costas com um objeto na testa. Deve nadar apenas com pernada sem deixar o objeto cair.',
    tip: 'Se cair, está mexendo muito a cabeça ou olhando para os pés.'
  },
  {
    id: '95',
    title: 'O Mergulho da Sereia / Tritão',
    type: 'main',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 20,
    materials: ['Nenhum'],
    description: 'Em posição de flecha, desloca-se fazendo ondas com o corpo, iniciando na cabeça e terminando nos pés (ondulação).',
    tip: 'Peça para "empurrar o peito para o fundo" para iniciar o movimento.'
  },
  {
    id: '96',
    title: 'Foto Subaquática de Modelo',
    type: 'fun',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O instrutor faz a "câmera" com as mãos. A criança mergulha e faz uma pose técnica (flecha ou nado) para a "foto".',
    tip: 'Reforça posições técnicas de forma lúdica.'
  },
  {
    id: '97',
    title: 'Limpeza do Oceano',
    type: 'fun',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Objetos pequenos espalhados'],
    description: 'Recolher o máximo de objetos em 1 minuto, nadando Crawl ou Costas com técnica correta entre as buscas.',
    tip: 'Estimula a técnica mesmo sob foco em outra tarefa (o jogo).'
  },
  {
    id: '98',
    title: 'O Barco a Remo Humano',
    type: 'fun',
    age: ['3-5'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Em duplas, um segura os pés do outro que está deitado. Quem está na frente usa apenas braços de Crawl para puxar a dupla.',
    tip: 'Trabalha a percepção de arrasto e força de tração.'
  },
  // NOVAS ATIVIDADES: Bebês | Aperfeiçoamento (ID 99-107)
  {
    id: '99',
    title: 'O Pulo do Sapo Saltitante',
    type: 'warmup',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Borda ou degrau raso'],
    description: 'Bebê em pé na borda, segurado pelas mãos. Ao sinal, deve fletir joelhos e dar um impulso para saltar para a água.',
    tip: 'Fortalece membros inferiores e prepara para saltos maiores.'
  },
  {
    id: '100',
    title: 'Caça às Bolhas de Sabão',
    type: 'warmup',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Bolhas de sabão'],
    description: 'Instrutor sopra bolhas e o pai desloca o bebê para que ele tente estourar com as mãos, alternando os braços.',
    tip: 'Promove braçadas involuntárias e coordenação óculo-manual.'
  },
  {
    id: '101',
    title: 'Comboio de Pés na Prancha',
    type: 'warmup',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Pranchas'],
    description: 'Bebê de barriga na prancha apoiado pelo pai. Deve bater os pés continuamente para fazer o "comboio" andar.',
    tip: 'Cante músicas rítmicas para manter a cadência da pernada.'
  },
  {
    id: '102',
    title: 'O Mergulho do Golfinho Solitário',
    type: 'main',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 20,
    materials: ['Nenhum'],
    description: 'Instrutor solta o bebê a 1 metro do pai. O bebê mergulha e nada sozinho até o acolhimento nos braços do pai.',
    tip: 'Aumente a distância de 10 em 10cm conforme a confiança.'
  },
  {
    id: '103',
    title: 'Escalada no Iceberg',
    type: 'main',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 20,
    materials: ['Tapete flutuante'],
    description: 'Bebê nada até o tapete e tenta subir sozinho (mínimo auxílio) para ficar sentado em cima.',
    tip: 'Simula a subida para a borda, crucial para auto-salvamento.'
  },
  {
    id: '104',
    title: 'O Soprador de Tesouros',
    type: 'main',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 20,
    materials: ['Objetos de fundo raso'],
    description: 'Mergulha para pegar objeto. Antes de subir, deve soltar bolhas pelo nariz ou boca ainda embaixo d\'água.',
    tip: 'Previne aspiração de água ao emergir para respirar.'
  },
  {
    id: '105',
    title: 'Baloiço nas Ondas Calmas',
    type: 'fun',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Deitado de costas no colo do pai, orelhas submersas, olhando o teto. Pai faz balanço lateral lento para relaxar.',
    tip: 'O contato pele a pele acalma o sistema nervoso após o esforço.'
  },
  {
    id: '106',
    title: 'O Resgate dos Patinhos',
    type: 'fun',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Patinhos, cesta flutuante'],
    description: 'Nadar até cada patinho, pegá-lo e guardar na cesta. "Quando o cesto encher, a aula acabou".',
    tip: 'Ajuda a criar rituais de início e fim de aula.'
  },
  {
    id: '107',
    title: 'Despedida do Peixinho',
    type: 'fun',
    age: ['baby'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Círculo final. Bebês dão "tchau" para a água com mãos e pés e um abraço final no pai/mãe.',
    tip: 'Reforço positivo: o bebê sai sentindo-se vitorioso.'
  },
  // BLOCO 2: Respiração, Equilíbrio e Coordenação... (Continuação dos IDs originais)
  {
    id: '11',
    title: 'O Chafariz do Elefante',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Regadores pequenos', 'copos furados'],
    description: 'O pai/mãe ou instrutor enche o regador e faz uma "chuvinha" suave, primeiro nos ombros e depois na nuca do bebê, incentivando-o a sentir a água escorrer.',
    tip: 'Monitore a reação facial; se o bebê sorrir, pode-se aumentar levemente o fluxo da água.'
  },
  {
    id: '12',
    title: 'O Aviãozinho de Papel',
    type: 'main',
    age: ['3-5'],
    level: ['initiation', 'adaptation'],
    durationMin: 8,
    materials: ['Nenhum'],
    description: 'A criança "deita" na água com os braços abertos (como um avião) enquanto o instrutor dá um leve apoio sob a barriga. O objetivo é manter o rosto na água e "voar" o mais longe possível sem tocar os pés no chão.',
    tip: 'Use a metáfora "o motor do avião são as bolhas" para incentivar a expiração.'
  },
  {
    id: '13',
    title: 'Revezamento da Esponja Maluca',
    type: 'fun',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 12,
    materials: ['Duas esponjas grandes', 'dois baldes'],
    description: 'Divida em dois times. O primeiro aluno mergulha a esponja, nada até o outro lado e espreme a água no balde. Ganha o time que encher o balde primeiro.',
    tip: 'Ideal para treinar a velocidade de nado (Crawl) com um objetivo lúdico.'
  },
  {
    id: '14',
    title: 'O Pega-Pega do Patinho',
    type: 'fun',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 7,
    materials: ['Patinhos de borracha'],
    description: 'O instrutor joga vários patinhos na piscina. Os pais devem deslocar os bebês (puxando pelas axilas ou apoiando no peito) para que o bebê tente alcançar e pegar o brinquedo.',
    tip: 'Trabalha a preensão manual e a motivação visual para o movimento na água.'
  },
  {
    id: '15',
    title: 'Escovando os Dentes do Peixe',
    type: 'warmup',
    age: ['3-5'],
    level: ['adaptation', 'initiation'],
    durationMin: 6,
    materials: ['Espelhos subaquáticos', 'palma da mão'],
    description: 'A criança mergulha o rosto e faz bolhas bem pequenas e rápidas, como se estivesse "escovando os dentes" (fazendo o som de "shhh").',
    tip: 'Excelente para crianças que têm medo de mergulhar o rosto inteiro; foca apenas na boca primeiro.'
  },
  {
    id: '16',
    title: 'O Nado do Golfinho Amigo',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 10,
    materials: ['Nadadeiras'],
    description: 'Os alunos devem atravessar a piscina fazendo movimentos de ondulação com o corpo, mantendo os braços colados ao corpo, tentando imitar o movimento de um golfinho saltando.',
    tip: 'Se o aluno tiver dificuldade, peça para ele tentar "empurrar o peito" para baixo primeiro.'
  },
  {
    id: '17',
    title: 'Balanço no Mar Azul',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 8,
    materials: ['Tapete flutuante grande'],
    description: 'Coloque os bebês sentados ou deitados no tapete. O instrutor balança suavemente o tapete para criar pequenas ondas, enquanto os pais garantem a segurança.',
    tip: 'Ajuda o bebê a se acostumar com a instabilidade da água de forma segura.'
  },
  {
    id: '18',
    title: 'Super-Homem no Deslize',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Pranchas pequenas'],
    description: 'A criança segura a prancha com os braços totalmente esticados, dá um impulso na borda e tenta deslizar "como o Super-Homem voando", mantendo as pernas bem retas.',
    tip: 'Verifique se os braços estão escondendo as orelhas para uma melhor posição hidrodinâmica.'
  },
  {
    id: '19',
    title: 'O Túnel de Pernas Gigante',
    type: 'main',
    age: ['6-10'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Os alunos fazem uma fila indiana com as pernas abertas. O último da fila deve mergulhar e passar por entre as pernas de todos os colegas até chegar na frente.',
    tip: 'Promove confiança subaquática extrema e controle de apneia.'
  },
  {
    id: '20',
    title: 'O Soprador de Velas Mágico',
    type: 'warmup',
    age: ['3-5'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Bolinhas de pingue-pongue'],
    description: 'Coloque a bolinha na água na frente da criança. Ela deve soprar a bolinha (sem tocar nela) para que ela se desloque até um ponto determinado.',
    tip: 'Peça para soprarem "devagar e constante" para a bolinha não fugir do controle.'
  },
  // RESTANTE DAS ATIVIDADES ORIGINAIS (21-80)...
  {
    id: '21',
    title: 'O Abraço do Coala',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 6,
    materials: ['Nenhum'],
    description: 'O pai/mãe afasta o bebê cerca de 50cm da borda. O instrutor estimula o bebê a esticar os braços e "agarrar" a borda. Assim que ele segurar, o instrutor e o pai comemoram muito.',
    tip: 'Essencial para criar a memória muscular de que a borda é o lugar seguro.'
  },
  {
    id: '22',
    title: 'Caiu o Sorvete!',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Um brinquedo que boie'],
    description: 'A criança "cai" sentada da borda na água, deve submergir, localizar o "sorvete" (brinquedo), pegá-lo e retornar imediatamente para a borda sem ajuda.',
    tip: 'Comece com a criança sentada e evolua para ela em pé conforme a confiança aumentar.'
  },
  {
    id: '23',
    title: 'O Astronauta Perdido',
    type: 'main',
    age: ['6-10'],
    level: ['initiation'],
    durationMin: 8,
    materials: ['Óculos de natação'],
    description: 'O aluno mergulha, dá uma cambalhota embaixo d\'água e, ao terminar, deve identificar para qual lado está a borda mais próxima e nadar até ela.',
    tip: 'Simula a desorientação de uma queda na piscina; treina a calma para encontrar a saída.'
  },
  {
    id: '24',
    title: 'Elevador Musical',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Música ambiente'],
    description: 'Ao som de uma música, o pai desce o bebê até a água ("o elevador está descendo"). No refrão, o "elevador" desce um pouco mais (até o queixo ou mergulho rápido).',
    tip: 'O contato visual constante entre pai e bebê é a chave para o bebê não chorar.'
  },
  {
    id: '25',
    title: 'Estrela do Mar Descansada',
    type: 'main',
    age: ['3-5'],
    level: ['adaptation'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O instrutor conta uma história de uma estrela que precisa descansar. A criança deve boiar de costas, braços e pernas abertos, mantendo o rosto para fora da água por 15 segundos.',
    tip: 'Se o quadril afundar, peça para a criança "olhar para o teto" ou "empurrar a barriga para o sol".'
  },
  {
    id: '26',
    title: 'O Resgate com Corda Humana',
    type: 'main',
    age: ['6-10'],
    level: ['initiation'],
    durationMin: 12,
    materials: ['Macarrão (espaguete)'],
    description: 'Um aluno finge estar cansado no meio da piscina. O outro aluno, da borda, deve estender um objeto (espaguete) para "resgatá-lo" e puxá-lo.',
    tip: 'Ensina o princípio básico de salvamento: "Alcance, jogue, mas não vá".'
  },
  {
    id: '27',
    title: 'O Caranguejo na Borda',
    type: 'warmup',
    age: ['3-5'],
    level: ['adaptation'],
    durationMin: 7,
    materials: ['Nenhum'],
    description: 'A criança deve se deslocar lateralmente segurando na borda, como um caranguejo, indo de um ponto A a um ponto B sem soltar as mãos e sem colocar os pés no chão.',
    tip: 'Desenvolve a força nos dedos e a lateralidade, fundamental para encontrar uma escada.'
  },
  {
    id: '28',
    title: 'Bicicleta na Água Profunda',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O aluno deve permanecer na parte funda sem encostar no chão ou na borda, mantendo a cabeça fora d\'água fazendo o movimento de "pedalar" e "espalhar manteiga" com as mãos.',
    tip: 'Cronometre o tempo. Comece com 20 segundos e tente chegar a 1 minuto.'
  },
  {
    id: '29',
    title: 'Passeio no Barquinho de Papel',
    type: 'main',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 8,
    materials: ['Tapete flutuante'],
    description: 'O bebê fica sentado no tapete flutuante (com apoio do pai). O instrutor puxa o tapete lentamente pela piscina. O bebê precisa tentar se equilibrar enquanto o "barco" se move.',
    tip: 'Ótimo para bebês que já sentam sozinhos; trabalha muito o core.'
  },
  {
    id: '30',
    title: 'Salto do Pinguim com Giro',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O aluno salta em pé na água, mas assim que submergir, deve girar 180 graus debaixo d\'água e voltar para a borda de onde saltou.',
    tip: 'Treina a reação imediata de retorno após uma queda, evitando que a criança tente nadar para o meio.'
  },
  {
    id: '31',
    title: 'O Moinho de Vento Mágico',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O aluno deve nadar fazendo braçadas bem largas e circulares, tocando com o polegar na coxa e entrando com a ponta dos dedos na água à frente da cabeça.',
    tip: 'Vigie se o braço entra "cruzado" à frente do rosto; a mão deve entrar na linha do ombro.'
  },
  {
    id: '32',
    title: 'O Periscópio do Submarino',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 8,
    materials: ['Prancha pequena'],
    description: 'A criança deita-se de costas e segura a prancha sobre o peito. Deve manter os joelhos dentro de água enquanto os pés fazem "espuma de sabão" na superfície.',
    tip: 'Peça à criança para "esconder os joelhos da água". Isso garante que a pernada nasce na anca.'
  },
  {
    id: '33',
    title: 'O Toque no Peixinho',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 6,
    materials: ['Peixes de borracha'],
    description: 'O instrutor coloca brinquedos à frente do bebé. O pai/mãe incentiva o bebé a esticar o braço para tocar e tentar "agarrar" o brinquedo, sentindo a resistência da água.',
    tip: 'Alterne os braços do bebé para promover o desenvolvimento motor bilateral.'
  },
  {
    id: '34',
    title: 'A Baleia que Sopra para o Lado',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 12,
    materials: ['Prancha (opcional)'],
    description: 'O aluno nada com um braço estendido à frente. Ao realizar a braçada, deve rodar o pescoço e "encostar a orelha no braço" para respirar, mantendo um dos olhos na água.',
    tip: 'Utilize a metáfora "ouvir o que a água tem para dizer" para garantir que a cabeça não levanta.'
  },
  {
    id: '35',
    title: 'O Arqueiro Aquático',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O aluno nada crawl, mas em cada braçada deve simular que está a tirar uma flecha da cintura e a lançá-la para a frente, garantindo que o polegar toca na coxa.',
    tip: 'Esta dinâmica é essencial para evitar "braçadas curtas".'
  },
  {
    id: '36',
    title: 'O Barco com Remos Laterais',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 7,
    materials: ['Nenhum'],
    description: 'A criança move os braços simultaneamente para os lados e para trás, como se estivesse a remar um pequeno barco, tentando deslocar-se de barriga para baixo.',
    tip: 'Ajuda a desenvolver a força escapular necessária para a futura braçada.'
  },
  {
    id: '37',
    title: 'Apanhar as Estrelas no Céu',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Nenhum'],
    description: 'Com o bebé deitado de costas no colo do pai, o instrutor faz gestos ou usa luzes acima da cabeça. O bebé tenta esticar as mãos para cima para "apanhar as estrelas".',
    tip: 'Promove a abertura do peito e a confiança na posição de costas.'
  },
  {
    id: '38',
    title: 'A Moto de Corrida (Modo Turbo)',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 15,
    materials: ['Pranchas'],
    description: 'O aluno segura a prancha à frente e, ao sinal, deve fazer a pernada mais forte possível durante 15 metros, tentando criar uma "onda" constante atrás de si.',
    tip: 'Monitorize se os pés estão relaxados (pé de bailarina).'
  },
  {
    id: '39',
    title: 'O Super-Herói de Costas',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'A criança flutua de costas e, alternadamente, levanta um braço para "apontar para as nuvens" e depois deixa o braço cair suavemente atrás da cabeça.',
    tip: 'Garanta que o queixo está ligeiramente apontado para cima. Se olhar para os pés, afunda.'
  },
  {
    id: '40',
    title: 'O Parafuso na Água',
    type: 'main',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O aluno começa a nadar de barriga para baixo e, a cada três braçadas, deve rodar o corpo totalmente até ficar de costas, continuando a nadar.',
    tip: 'Fundamental para o desenvolvimento da coordenação global.'
  },
  {
    id: '41',
    title: 'O Escorrega do Golfinho',
    type: 'fun',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Tapete flutuante'],
    description: 'O bebé é colocado sentado na borda ou num tapete. O pai/mãe segura as mãos do bebé e, suavemente, faz o bebé deslizar para dentro de água até ao abraço.',
    tip: 'Garanta que o bebé entra sempre de frente para o pai para reforçar o vínculo.'
  },
  {
    id: '42',
    title: 'O Mergulho do Pinguim Sentado',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'A criança senta-se na borda. Coloca os braços em posição de flecha (escondendo as orelhas) e deixa-se cair para a frente, entrando primeiro com as mãos.',
    tip: 'Use a frase "cola o queixo no peito" para evitar que bata com o rosto.'
  },
  {
    id: '43',
    title: 'O Foguete no Lançamento',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 8,
    materials: ['Nenhum'],
    description: 'O aluno salta em pé da borda, mas assim que entra na água deve adotar a posição de foguete (corpo esticado) e deslizar o máximo de tempo possível.',
    tip: 'Coloque uma marca no fundo da piscina. O desafio é passar a marca só com o impulso.'
  },
  {
    id: '44',
    title: 'Giro na Água',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 6,
    materials: ['Nenhum'],
    description: 'O pai segura o bebé pelas axilas. O instrutor orienta a fazer um movimento circular suave (360º) na horizontal, como se o bebé fosse um pequeno barco a girar.',
    tip: 'Ajuda a prevenir tonturas futuras e habitua o sistema sensorial.'
  },
  {
    id: '45',
    title: 'Cambalhota de Bolhas',
    type: 'fun',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'A criança deve tentar fazer uma cambalhota para a frente no meio da piscina. O segredo é "olhar para o umbigo" e soltar bolhas pelo nariz durante todo o giro.',
    tip: 'O instrutor pode ajudar colocando a mão na nuca da criança.'
  },
  {
    id: '46',
    title: 'O Empurrão da Parede (Turbo)',
    type: 'main',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Parede da piscina'],
    description: 'Debaixo de água, o aluno agrupa as pernas contra a parede e dá um impulso explosivo, saindo em posição de flecha.',
    tip: 'Treine a saída de frente e de costas. O foco é a força dos pés na parede.'
  },
  {
    id: '47',
    title: 'O Pulo do Canguru',
    type: 'fun',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 7,
    materials: ['Nenhum'],
    description: 'O bebé fica em pé na borda, segurado pelas mãos. Ao sinal "1, 2, 3 e JÁ", o bebé dá um pequeno impulso para saltar para os braços do pai.',
    tip: 'Trabalha o reflexo de impulsão e a coragem.'
  },
  {
    id: '48',
    title: 'Mergulho pelo Arco Mágico',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Arco (hula-hoop)'],
    description: 'O instrutor segura um arco flutuante na superfície. A criança, agachada na borda, deve mergulhar de cabeça passando por dentro do arco sem tocar nas bordas.',
    tip: 'Gradualmente, afaste o arco 20cm da borda para que a criança projete o corpo.'
  },
  {
    id: '49',
    title: 'A Saída do Campeão',
    type: 'main',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 12,
    materials: ['Bloco de partida'],
    description: 'Foco na posição "Aos seus lugares": dedos agarrados à borda, quadril alto. Ao sinal (apito), o aluno dispara para um mergulho longo e raso.',
    tip: 'Si o aluno fizer muito barulho (splash), a entrada não foi eficiente.'
  },
  {
    id: '50',
    title: 'O Vira-Vira do Peixe-Palhaço',
    type: 'main',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'O aluno nada 5 metros de crawl e, sem parar, roda o corpo para ficar de costas e continua a nadar. Depois, faz o inverso.',
    tip: 'Fundamental para nadores que estão a começar a aprender Medley.'
  },
  {
    id: '51',
    title: 'O Motor do Barquinho',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 6,
    materials: ['Tapete flutuante'],
    description: 'O bebé é segurado pela barriga. O instrutor canta e incentiva o bebé a bater as pernas na água de forma contínua para "fazer o barquinho navegar".',
    tip: 'Use o estímulo visual de um brinquedo à frente.'
  },
  {
    id: '52',
    title: 'Fábrica de Bolas',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 12,
    materials: ['20 a 30 bolinhas'],
    description: 'Espalhe as bolinhas em uma extremidade. As crianças devem pegar uma bolinha por vez e nadar até o balde no lado oposto.',
    tip: 'Cronometre o tempo total para "bater o recorde" na próxima aula.'
  },
  {
    id: '53',
    title: 'O Desafio do Relógio',
    type: 'main',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 15,
    materials: ['Relógio ou cronômetro'],
    description: 'O instrutor define um tempo (ex: 30s). Os alunos devem nadar o mais rápido possível durante esse tempo, descansam 15s e repetem.',
    tip: 'Explique que o descanso é tão importante quanto o nado.'
  },
  {
    id: '54',
    title: 'Ponte de Abraços',
    type: 'main',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 8,
    materials: ['Nenhum'],
    description: 'O instrutor e o pai ficam afastados. O bebé deve sair do colo de um e "nadar" (com apoio) até o colo do outro. A cada rodada, aumente a distância.',
    tip: 'Monitore o cansaço do bebé. Se perder o ritmo, reduza a distância.'
  },
  {
    id: '55',
    title: 'A Onda Gigante',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Pranchas'],
    description: 'As crianças seguram na borda e devem bater perna com tanta força que tentem criar uma "onda" que chegue até o instrutor (a 2 metros).',
    tip: 'O instrutor deve "fingir" que está sendo empurrado pela onda.'
  },
  {
    id: '56',
    title: 'O Mensageiro Subaquático',
    type: 'main',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Os alunos devem atravessar a piscina por baixo d\'água. Ao chegar no outro lado, devem emergir e gritar uma "senha" para o instrutor.',
    tip: 'Trabalha a tolerância ao CO2 e o controle respiratório.'
  },
  {
    id: '57',
    title: 'Chuveirinho de Pernas',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Nenhum'],
    description: 'Sentados na borda com os pais, os bebês devem bater os pés na água criando um "chuveirinho" que molhe o instrutor.',
    tip: 'Excelente para elevar a temperatura corporal e quebrar o gelo.'
  },
  {
    id: '58',
    title: 'Transporte do Tesouro Pesado',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Regador cheio ou halter'],
    description: 'A criança deve atravessar a piscina segurando o "tesouro" com as duas mãos à frente, batendo pernas com vigor para não afundar com o peso.',
    tip: 'Se tiver dificuldade, use um espaguete entre as pernas.'
  },
  {
    id: '59',
    title: 'Revezamento da Tocha Olímpica',
    type: 'fun',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 12,
    materials: ['Bastão flutuante'],
    description: 'Divida em equipes. O primeiro nada, volta e entrega a "tocha". Quem está esperando deve ficar fazendo pernada na borda sem parar.',
    tip: 'O "descanso ativo" é o segredo para aumentar a carga de trabalho.'
  },
  {
    id: '60',
    title: 'Maratona dos Fortes',
    type: 'main',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 8,
    materials: ['Nenhum'],
    description: 'Os alunos devem ficar na parte funda, mantendo-se apenas com a cabeça fora d\'água. O instrutor comanda: "Mãos fora d\'água!", "Mãos na cabeça!".',
    tip: 'Garante que o aluno consiga esperar por resgate sem se cansar.'
  },
  {
    id: '61',
    title: 'Ciranda dos Peixinhos',
    type: 'fun',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 7,
    materials: ['Música infantil'],
    description: 'Pais e bebês formam um círculo e rodam cantando. Ao sinal "Tchibum!", todos fazem um pequeno mergulho ou jogam água para o alto.',
    tip: 'Promove a aceitação da água no rosto através do exemplo coletivo.'
  },
  {
    id: '62',
    title: 'O Túnel Humano Gigante',
    type: 'fun',
    age: ['3-5'],
    level: ['adaptation', 'initiation'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'As crianças ficam em fila com as pernas abertas. Uma por uma, passam por baixo das pernas de todos os amigos.',
    tip: 'Peça para quem está formando o túnel fazer "bolhinhas" para saudar quem passa.'
  },
  {
    id: '63',
    title: 'Handebol Aquático Adaptado',
    type: 'fun',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 15,
    materials: ['Bola', 'arcos'],
    description: 'Jogo de dois times. O objetivo é levar a bola até o arco adversário. Regra: não pode nadar segurando a bola (tem que passar ou empurrar).',
    tip: 'Use para queimar o resto de energia. Regule o contato físico.'
  },
  {
    id: '64',
    title: 'Passa o Brinquedo (Batata Quente)',
    type: 'fun',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Brinquedo grande'],
    description: 'Bebês em círculo no colo dos pais. Devem passar o brinquedo para o lado. O instrutor para a música e quem estiver com o brinquedo faz uma festa.',
    tip: 'Trabalha a prontidão e o desapego.'
  },
  {
    id: '65',
    title: 'O Mestre Mandou Aquático',
    type: 'fun',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 8,
    materials: ['Nenhum'],
    description: 'O instrutor dá ordens. Se disser "O mestre mandou...", todos fazem. Se não disser, ninguém faz. Quem errar paga um "mergulho divertido".',
    tip: 'Ótimo para testar o vocabulário técnico ("façam streamline!").'
  },
  {
    id: '66',
    title: 'Caça ao Tesouro em Duplas',
    type: 'fun',
    age: ['6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 12,
    materials: ['Vários objetos'],
    description: 'Um aluno vê (com óculos), o outro não (sem óculos ou olhos fechados). O que vê guia o outro para pegar o objeto no fundo.',
    tip: 'Desenvolve a comunicação clara e a confiança mútua.'
  },
  {
    id: '67',
    title: 'Trenzinho na Água',
    type: 'fun',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 6,
    materials: ['Nenhum'],
    description: 'Pais se enfileiram segurando seus bebês. O "trem" percorre a piscina fazendo curvas, subidas (levantar bebê) e descidas.',
    tip: 'O movimento rítmico acalma bebês que costumam chorar.'
  },
  {
    id: '68',
    title: 'Salvamento do Amiguinho',
    type: 'fun',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 10,
    materials: ['Tapete flutuante'],
    description: 'Uma criança senta no tapete ("náufrago") e a outra deve empurrar ou puxar o tapete até a borda segura.',
    tip: 'Reforce que ajudar o colega é atitude de super-herói.'
  },
  {
    id: '69',
    title: 'Revezamento de Camiseta',
    type: 'fun',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 15,
    materials: ['Camisetas GG'],
    description: 'O aluno veste a camiseta, nada até o outro lado, tira e passa para o próximo. Nadar com roupa é muito mais pesado.',
    tip: 'Atenção redobrada! A camiseta molhada dificulta os movimentos.'
  },
  {
    id: '70',
    title: 'A Rede de Pesca',
    type: 'fun',
    age: ['3-5', '6-10'],
    level: ['initiation', 'improvement'],
    durationMin: 10,
    materials: ['Nenhum'],
    description: 'Começa com um pegador. Quando pega alguém, dão as mãos e viram uma rede. A rede vai crescendo até pegar todos.',
    tip: 'Si a rede ficar muito grande, divida em duas.'
  },
  {
    id: '71',
    title: 'O Bocejo do Hipopótamo',
    type: 'warmup',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Nenhum'],
    description: 'Bebê apoia a cabeça no ombro do pai. O instrutor orienta movimentos circulares lentos na água enquanto cantam uma canção.',
    tip: 'Funciona como massagem hidrodinâmica para acalmar.'
  },
  {
    id: '72',
    title: 'A Nuvem de Algodão',
    type: 'main',
    age: ['3-5'],
    level: ['adaptation'],
    durationMin: 6,
    materials: ['Espaguetes'],
    description: 'Criança deita de costas com espaguetes sob nuca e joelhos. Deve fechar os olhos e "fingir que é uma nuvem".',
    tip: 'Use tom de voz baixo para baixar o nível de cortisol.'
  },
  {
    id: '73',
    title: 'Meditação do Mergulhador',
    type: 'warmup',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 5,
    materials: ['Nenhum'],
    description: 'Alunos fecham os olhos e focam no som da água. Inspiram fora, expiram lentamente dentro d\'água.',
    tip: 'Ajuda a recuperar o fôlego após atividades intensas.'
  },
  {
    id: '74',
    title: 'Massagem da Chuvinha',
    type: 'fun',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 5,
    materials: ['Regadores'],
    description: 'Enquanto o bebê relaxa, o instrutor deixa cair gotas suaves sobre mãos e pés.',
    tip: 'O foco é o vínculo afetivo e o encerramento positivo.'
  },
  {
    id: '75',
    title: 'A Estrela Cadente (Alongamento)',
    type: 'main',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 7,
    materials: ['Borda'],
    description: 'Segurando na borda, esticam as pernas para trás e o corpo para frente, tentando "alcançar a lua".',
    tip: 'Alongar na água morna é mais eficiente.'
  },
  {
    id: '76',
    title: 'O Despertar da Sereia / Tritão',
    type: 'main',
    age: ['6-10'],
    level: ['initiation'],
    durationMin: 6,
    materials: ['Nenhum'],
    description: 'Atravessar a piscina em câmera lenta, movimentos amplos, sentindo a pressão da água em cada dedo.',
    tip: 'Ótimo para corrigir detalhes técnicos finais.'
  },
  {
    id: '77',
    title: 'O Ninho Quentinho',
    type: 'fun',
    age: ['baby'],
    level: ['adaptation'],
    durationMin: 3,
    materials: ['Toalha seca'],
    description: 'Pais abraçam bebês na água, saem lentamente e envolvem na toalha ainda na borda.',
    tip: 'Evita o choque térmico e a sensação de abandono.'
  },
  {
    id: '78',
    title: 'Pintando o Fundo do Mar',
    type: 'fun',
    age: ['3-5'],
    level: ['initiation'],
    durationMin: 5,
    materials: ['Imaginários'],
    description: 'O instrutor pede para pintarem o fundo com os pés. "Pintem um sol", "agora uma baleia".',
    tip: 'Mantém a criança focada nos minutos finais.'
  },
  {
    id: '79',
    title: 'Desafio do Silêncio Subaquático',
    type: 'fun',
    age: ['6-10'],
    level: ['improvement'],
    durationMin: 4,
    materials: ['Nenhum'],
    description: 'Todos mergulham e tentam ficar o máximo de tempo possível apenas ouvindo o silêncio.',
    tip: 'Cria um ambiente de respeito no encerramento.'
  },
  {
    id: '80',
    title: 'O Grito de Guerra da Vitória',
    type: 'fun',
    age: ['3-5', '6-10'],
    level: ['adaptation', 'initiation', 'improvement'],
    durationMin: 2,
    materials: ['Nenhum'],
    description: 'Ao sinal, todos fazem um cumprimento oficial ou grito de equipe. "Parabéns, tubarões!".',
    tip: 'Dá a sensação de dever cumprido e meta alcançada.'
  }
];

export const getRandomActivity = (
  type: ActivityType,
  age: AgeGroup,
  level: LessonLevel,
  excludeIds: string[] = []
): Activity | null => {
  const candidates = ALL_ACTIVITIES.filter(
    (act) => {
      if (act.type !== type) return false;
      if (excludeIds.includes(act.id)) return false;
      const ageMatch = act.age.includes(age);
      const levelMatch = act.level.includes(level);
      return ageMatch && levelMatch;
    }
  );

  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
};