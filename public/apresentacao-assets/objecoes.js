/* Slide final das duas apresentações: as perguntas de maior dor de quem vai fechar o White Label.
   Dois perfis (investidor começando, empresa B2B). Ao vivo, o apresentador troca o perfil nos chips;
   na impressão (?print), o slide é duplicado, um por perfil, com as respostas abertas.
   Cada resposta tem uma frase curta (em destaque) e o complemento.
   Precisa rodar antes do deck.js, para a contagem de slides já incluir a cópia. */
(function(){
const PERFIS=[
 {k:'inv',n:'Investidor começando',sub:'Quem quer lançar um negócio de telemedicina com marca própria, sem estrutura médica.',qs:[
  ['Preciso ter médicos ou uma clínica para começar?','Não.','Na opção White Label, a WMedic entrega tecnologia, corpo clínico, escalas 24h e gestão clínica. Você cuida da marca, das vendas e do relacionamento.'],
  ['A WMedic vai concorrer comigo pelo consumidor final?','Não.','A operação da WMedic é voltada a parceiros White Label: não vendemos nem atendemos diretamente o consumidor final. O seu cliente é só seu.'],
  ['Quanto tempo e investimento até a primeira consulta?','Bem menos do que construir do zero.','Você parte de uma plataforma pronta e de um corpo clínico em operação. Prazo e investimento saem do diagnóstico, conforme a personalização.'],
  ['Como eu ganho dinheiro com isso?','Você define o produto e o preço.','Assinatura, benefício para empresas ou parcerias: a operação WMedic é o custo da entrega, e a margem e a base de clientes ficam com você.'],
  ['Posso começar pequeno e crescer depois?','Sim.','O valor por vida segue faixas: você começa na faixa da sua base e muda de faixa conforme ela cresce, sem trocar de estrutura.'],
  ['Qual é o risco regulatório?','A telemedicina tem regra clara.','É autorizada pela Lei 14.510/2022 e regulamentada pela Resolução CFM 2.314/2022. A operação WMedic segue essas regras, a LGPD e o registro em prontuário.']
 ]},
 {k:'b2b',n:'Empresa B2B crescendo',sub:'Quem já tem clientes e quer adicionar ou melhorar a telemedicina no próprio negócio.',qs:[
  ['Por que não desenvolver a minha própria plataforma?','Porque tecnologia é só uma parte.','Teleconsulta exige equipe técnica, segurança de dados, conformidade com o CFM e médicos 24h. Com o White Label você lança com a sua marca e foca no seu cliente.'],
  ['Vocês vão vender direto para os meus clientes?','Não.','A WMedic só atende por meio de parceiros White Label e não tem venda ao consumidor final. O usuário vê apenas a sua marca.'],
  ['Vou perder o relacionamento com o meu cliente?','Não.','A base, a venda e o relacionamento continuam seus. A WMedic opera nos bastidores, com a sua identidade no app e no site.'],
  ['Como provo o retorno para a diretoria?','Com dados da sua própria operação.','Relatórios de uso, resolutividade, encaminhamentos e satisfação, combinados desde o contrato, mais o simulador de custo evitado com os seus números.'],
  ['Consigo integrar com o meu app ou sistema?','Sim, pela opção API.','O seu time consome o atendimento, as regras de negócio e o prontuário da WMedic dentro da sua plataforma. Detalhes técnicos são alinhados no diagnóstico.'],
  ['Se o atendimento falhar, é a minha marca que sofre. Quem garante a qualidade?','A gestão médica WMedic.','Corpo clínico avaliado continuamente, protocolos padronizados, escalas 24h e suporte clínico. Os indicadores de qualidade entram no contrato.']
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
