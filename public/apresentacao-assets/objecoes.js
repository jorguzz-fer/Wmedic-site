/* Slide final das duas apresentações: as perguntas de maior dor de quem vai fechar o whitelabel.
   Dois perfis (investidor começando, empresa B2B). Ao vivo, o apresentador troca o perfil nos chips;
   na impressão (?print), o slide é duplicado, um por perfil, com as respostas abertas.
   Precisa rodar antes do deck.js, para a contagem de slides já incluir a cópia. */
(function(){
const PERFIS=[
 {k:'inv',n:'Investidor começando',sub:'Quem quer lançar um negócio de telemedicina com marca própria, sem estrutura médica.',qs:[
  ['Preciso ter médicos ou uma clínica para começar?','Não. No modelo plataforma + consultas, a WMedic entrega a tecnologia, o corpo clínico, as escalas 24h e a gestão clínica. Você cuida da marca, das vendas e do relacionamento com o seu público.'],
  ['Quanto tempo e quanto investimento até a primeira consulta?','Bem menos do que construir do zero: você parte de uma plataforma pronta e de um corpo clínico já em operação, sem desenvolver tecnologia nem contratar médicos. Prazo e investimento saem do diagnóstico, conforme a personalização.'],
  ['Como eu ganho dinheiro com isso?','Você define o produto e o preço para o seu público: assinatura, benefício para empresas ou parcerias. A operação WMedic é o custo da entrega; a margem e a base de clientes ficam com você.'],
  ['Qual é o risco regulatório?','A telessaúde é autorizada por lei (Lei 14.510/2022) e regulamentada pelo CFM (Resolução 2.314/2022). A operação WMedic segue essas regras, a LGPD e o registro em prontuário de cada atendimento.']
 ]},
 {k:'b2b',n:'Empresa B2B crescendo',sub:'Quem já tem clientes e quer adicionar ou melhorar a telemedicina no próprio negócio.',qs:[
  ['Por que não desenvolver a minha própria plataforma?','Construir e manter teleconsulta exige equipe de tecnologia, segurança de dados, conformidade com o CFM e médicos 24h. Com o whitelabel você lança com a sua marca e concentra o esforço no seu cliente.'],
  ['Vou perder o relacionamento com o meu cliente?','Não. O usuário vê só a sua marca no app e no site. A base, a venda e o relacionamento continuam seus; a WMedic opera nos bastidores.'],
  ['Como provo o retorno para a diretoria?','Com relatórios de uso, resolutividade, encaminhamentos e satisfação, combinados desde o contrato, e com o simulador de custo evitado usando os seus próprios números.'],
  ['Se o atendimento falhar, é a minha marca que sofre. Quem garante a qualidade?','A gestão médica WMedic: corpo clínico avaliado continuamente, protocolos padronizados, escalas 24h e suporte clínico. Os indicadores de qualidade entram no contrato e são acompanhados com você.']
 ]}
];
const printing=/[?&]print\b/.test(location.search);
const base=document.querySelector('section[data-obj]');
if(!base)return;

function render(sec,idx,fixed){
  const chips=sec.querySelector('.obj-chips'),cards=sec.querySelector('.obj-cards'),sub=sec.querySelector('.obj-sub');
  const p=PERFIS[idx];
  if(fixed){chips.innerHTML=`<span class="chip" aria-pressed="true">${p.n}</span>`}
  else{chips.innerHTML='';PERFIS.forEach((q,i)=>{const b=document.createElement('button');b.className='chip';b.textContent=q.n;b.setAttribute('aria-pressed',i===idx);b.onclick=()=>render(sec,i,false);chips.appendChild(b)})}
  sub.textContent=p.sub;
  cards.innerHTML='';
  p.qs.forEach(([t,a],i)=>{const b=document.createElement('button');b.className='q'+(printing?' open':'');
    b.innerHTML=`<span class="qn">PERGUNTA ${i+1}</span><span class="qt">${t}</span><span class="qa">${a}</span><span class="qh">clique para revelar a resposta</span>`;
    b.onclick=()=>b.classList.toggle('open');cards.appendChild(b)});
}

if(printing){
  const copy=base.cloneNode(true);copy.id=base.id+'b';copy.dataset.name=base.dataset.name+' (B2B)';
  base.after(copy);render(base,0,true);render(copy,1,true);
} else render(base,0,false);
})();
