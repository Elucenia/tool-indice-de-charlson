/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"indice-de-charlson","title":"Índice de Comorbidade de Charlson","fields":[["idade","Idade","radio",{"opts":{"0":"&lt; 50","1":"50 a 59","2":"60 a 69","3":"70 a 79","4":"≥ 80"}}],["iam","Infarto do miocárdio prévio","chk",{"pts":1}],["icc","Insuficiência cardíaca congestiva","chk",{"pts":1}],["dap","Doença arterial periférica (ou aneurisma de aorta ≥ 6 cm)","chk",{"pts":1}],["avc","Doença cerebrovascular (AVC com sequela leve ou AIT)","chk",{"pts":1}],["demencia","Demência","chk",{"pts":1}],["dpoc","Doença pulmonar crônica","chk",{"pts":1}],["colageno","Doença do tecido conjuntivo (LES, polimiosite, AR, polimialgia)","chk",{"pts":1}],["ulcera","Doença ulcerosa péptica","chk",{"pts":1}],["figado","Doença hepática","radio",{"opts":{"0":"Não","1":"Leve (hepatite crônica, cirrose sem hipertensão portal)","3":"Moderada ou grave (cirrose com hipertensão portal)"}}],["dm","Diabetes mellitus","radio",{"opts":{"0":"Não","1":"Sem lesão de órgão-alvo","2":"Com lesão de órgão-alvo"}}],["hemiplegia","Hemiplegia","chk",{"pts":2}],["renal","Doença renal moderada ou grave (creatinina &gt; 3 mg/dL, diálise ou transplante)","chk",{"pts":2}],["tumor","Tumor sólido","radio",{"opts":{"0":"Não","2":"Sem metástase (últimos 5 anos)","6":"Metastático"}}],["leucemia","Leucemia","chk",{"pts":2}],["linfoma","Linfoma","chk",{"pts":2}],["aids","Aids (não apenas HIV positivo)","chk",{"pts":6}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(e){'use strict';
var a=e.h;
var i=a.br;
e.def("indice-de-charlson",function(e){var o=a.sum(e,{iam:1,icc:1,dap:1,avc:1,demencia:1,dpoc:1,colageno:1,ulcera:1,hemiplegia:2,renal:2,leucemia:2,linfoma:2,aids:6})+(+e.figado||0)+(+e.dm||0)+(+e.tumor||0),r=+e.idade||0,s=o+r,d=100*Math.pow(.983,Math.exp(.9*s)),n=0===o?"12%":o<=2?"26%":o<=4?"52%":"85%";return{main:[String(s),1===s?"ponto":"pontos"],label:"Charlson ajustado pela idade",level:0===s?"low":s<=2?"mid":"high",verdict:"Sobrevida estimada em 10 anos: "+i(d,1)+"%",rows:[["Pontos das comorbidades (sem idade)",String(o)],["Pontos pela idade",String(r)],["Mortalidade em 1 ano na coorte de derivação, pelas comorbidades (Charlson 1987)",n]],raw:{score:s,cci:o,sobrevida:d}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
