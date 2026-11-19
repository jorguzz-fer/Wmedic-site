/* Slide final das duas apresentações: as perguntas de maior dor de quem vai fechar o White Label.
   Dois perfis (investidor começando, empresa B2B). Ao vivo, o apresentador troca o perfil nos chips;
   na impressão (?print), o slide é duplicado, um por perfil, com as respostas abertas.
   Cada resposta tem uma frase curta (em destaque) e o complemento.
   Precisa rodar antes do deck.js, para a contagem de slides já incluir a cópia. */
(function(){
const PERFIS=[
 {k:'inv',n:'Investidor começando',sub:'Quem quer lançar um negócio de saúde digital com marca própria, sem montar estrutura médica.',qs:[
  ['Preciso ter médicos ou uma clínica para começar?','Não precisa.','Você não contrata nenhum médico. Os médicos, as escalas 24h e a gestão clínica da WMedic já estão funcionando; você cuida da marca, das vendas e de quem compra de você.'],
  ['A WMedic vai concorrer comigo pelo consumidor final?','Não.','A gente não vende para pessoa física. Quem compra de você continua sendo seu cliente, e é a sua marca que ele vê.'],
  ['Quanto tempo e investimento até a primeira consulta?','Bem menos do que começar do zero.','Você já começa com a plataforma pronta e médicos atendendo. Prazo e investimento a gente fecha junto no diagnóstico, conforme o quanto você quer personalizar.'],
  ['Como eu ganho dinheiro com isso?','Você decide o produto e o preço.','Assinatura, benefício para empresas ou parcerias: o valor WMedic é o custo da entrega. A margem e a carteira de clientes ficam com você.'],
  ['Posso começar pequeno e crescer depois?','Pode.','Você entra na faixa de vidas que tem hoje e muda de faixa conforme a sua base de clientes cresce, sem trocar de estrutura.'],
  ['Qual é o risco regulatório?','A telemedicina tem regra clara.','Ela é autorizada pela Lei 14.510/2022 e regulamentada pela Resolução CFM 2.314/2022. A gente segue essas regras, a LGPD e o registro em prontuário, e você não precisa virar especialista nisso.']
 ]},
 {k:'b2b',n:'Empresa B2B crescendo',sub:'Quem já tem uma base de clientes e quer oferecer ou melhorar a telemedicina no próprio negócio.',qs:[
  ['Por que não desenvolver a minha própria plataforma?','Porque a tecnologia é só uma parte.','Além do app, a teleconsulta pede médicos 24h, segurança de dados e conformidade com o CFM. Com a gente você lança com a sua marca e continua olhando para o seu cliente.'],
  ['Vocês vão vender direto para os meus clientes?','Não.','A WMedic só atende por meio de parceiros. O seu cliente vê a sua marca, do começo ao fim.'],
  ['Vou perder o relacionamento com o meu cliente?','Não. Ele continua sendo seu.','A carteira, a venda e o relacionamento seguem com você. A gente trabalha nos bastidores, com a sua identidade no app e no site.'],
  ['Como provo o retorno para a diretoria?','Com os números da sua própria operação.','Relatórios de uso, resolutividade, encaminhamentos e satisfação, combinados desde o contrato. E o simulador ajuda a mostrar o custo evitado com os seus dados.'],
  ['Consigo integrar com o meu app ou sistema?','Sim, pela API.','O seu time usa o atendimento, as regras de negócio e o prontuário da WMedic dentro da sua plataforma. Os detalhes técnicos a gente alinha junto no diagnóstico.'],
  ['Se o atendimento falhar, é a minha marca que sofre. Quem garante a qualidade?','A gestão médica WMedic.','A gente sabe que é o seu nome em jogo. Por isso o corpo clínico é avaliado continuamente, os protocolos são padronizados, há escalas 24h e suporte clínico, e os indicadores de qualidade entram no contrato.']
 ]}
];
// Versão institucional (data-obj="inst"): fala de operadora B2B, sem detalhar White Label.
const INST=[
 {k:'emp',n:'Empresa',sub:'Quem quer oferecer atendimento médico online aos colaboradores e dependentes.',qs:[
  ['Vocês têm as licenças para operar telemedicina?','Sim.','A WMedic já tem as licenças e mantém conexão direta com os órgãos reguladores. A burocracia de CFM e CRM fica com a gente.'],
  ['Os colaboradores conseguem atendimento rápido?','Sim, 24 horas.','Clínico geral por vídeo a qualquer hora, com fila virtual e notificações em cada etapa.'],
  ['Integra com o nosso RH ou portal interno?','Sim, via API.','O atendimento pode ser oferecido pelo canal que a empresa já usa. Integrações específicas são avaliadas no diagnóstico.'],
  ['Os dados dos colaboradores ficam seguros?','Sim.','Dados de saúde são sensíveis pela LGPD: acesso restrito, sigilo e prontuário eletrônico. A empresa recebe indicadores, não prontuários.'],
  ['Funciona para o tamanho da nossa empresa?','Sim.','A operação escala de dezenas a milhares de vidas sem mudar a estrutura. O pacote é dimensionado no diagnóstico.'],
  ['Como medimos o resultado?','Com relatórios periódicos.','Uso, resolutividade, encaminhamentos e satisfação, combinados desde o contrato.']
 ]},
 {k:'par',n:'Parceiro',sub:'Clínicas, operadoras e plataformas que querem oferecer consulta online ao seu público.',qs:[
  ['A WMedic vai vender direto para os meus clientes?','Não.','A WMedic é 100% B2B e não vende para pessoa física. A marca que aparece é sempre a sua.'],
  ['Já tenho minha plataforma. Preciso trocar?','Não.','Você consome o atendimento WMedic por API e mantém o seu portal, app ou sistema.'],
  ['E se eu não tiver plataforma?','Entregamos um canal pronto.','Você oferece consultas online ao seu público com a sua identidade, sem desenvolver tecnologia.'],
  ['Quem cuida das licenças e da regulação?','A WMedic.','Licenças em dia, corpo clínico treinado nas regras e conexão direta com os órgãos reguladores.'],
  ['A operação aguenta se eu crescer rápido?','Sim.','Escalabilidade instantânea: o corpo clínico e a plataforma acompanham a sua base, de dezenas a milhares de vidas.'],
  ['Se o atendimento falhar, é a minha marca que sofre. Quem garante a qualidade?','A gestão médica WMedic.','Corpo clínico avaliado, protocolos padronizados, escalas 24h e indicadores de qualidade no contrato.']
 ]}
];
const printing=/[?&]print\b/.test(location.search);
const base=document.querySelector('section[data-obj]');
if(!base)return;
const LIST=base.dataset.obj==='inst'?INST:PERFIS;

function render(sec,idx,fixed){
  const chips=sec.querySelector('.obj-chips'),cards=sec.querySelector('.obj-cards'),sub=sec.querySelector('.obj-sub');
  const p=LIST[idx];
  if(fixed){chips.innerHTML=`<span class="chip" aria-pressed="true">${p.n}</span>`}
  else{chips.innerHTML='';LIST.forEach((q,i)=>{const b=document.createElement('button');b.className='chip';b.textContent=q.n;b.setAttribute('aria-pressed',i===idx);b.onclick=()=>render(sec,i,false);chips.appendChild(b)})}
  sub.textContent=p.sub;
  cards.innerHTML='';
  p.qs.forEach(([t,short,rest],i)=>{const b=document.createElement('button');b.className='q'+(printing?' open':'');
    b.innerHTML=`<span class="qn">PERGUNTA ${i+1}</span><span class="qt">${t}</span><span class="qa"><strong>${short}</strong> ${rest}</span><span class="qh">clique para revelar a resposta</span>`;
    b.onclick=()=>b.classList.toggle('open');cards.appendChild(b)});
}

if(printing){
  const copy=base.cloneNode(true);copy.id=base.id+'b';copy.dataset.name=base.dataset.name+' (B2B)';
  base.after(copy);render(base,0,true);render(copy,1,true);
} else render(base,0,false);
})();
