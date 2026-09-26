# Índice de Comorbidade de Charlson

Identificador: `indice-de-charlson`. Pacote independente da plataforma Elucenia, para navegador e Node.js.

## Situação

- Revisão: **needs-review**. Revisão documental e clínica independente pendente.
- Execução: **disponível para reprodução técnica da fórmula**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- 4 casos de referência em `examples.json`, conferidos por `test.cjs`. Verificação aritmética independente da fórmula (reimplementação a partir da literatura, entradas aleatórias): **pendente**.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

1 ponto: infarto, insuficiência cardíaca, doença arterial periférica, doença cerebrovascular, demência, doença pulmonar crônica, doença do tecido conjuntivo, úlcera péptica, hepatopatia leve, diabetes sem lesão de órgão-alvo. 2 pontos: hemiplegia, doença renal moderada/grave, diabetes com lesão de órgão-alvo, tumor sólido, leucemia, linfoma. 3 pontos: hepatopatia moderada/grave. 6 pontos: tumor metastático, aids.Ajuste pela idade (Charlson 1994): 1 ponto por década a partir dos 50 anos (50–59 = 1; 60–69 = 2; 70–79 = 3; ≥ 80 = 4).Sobrevida estimada em 10 anos = 0,983e(0,9 × índice) × 100%.

A transcrição acima documenta o acervo de origem e pode requerer atualização. 

## Condições e limites

Quantifica a carga de comorbidades e estima o prognóstico de longo prazo; é usado para ajustar risco em estudos e apoiar decisões sobre rastreamento e tratamentos agressivos.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Charlson ME et al. A new method of classifying prognostic comorbidity in longitudinal studies: development and validation. J Chronic Dis, 1987.](https://doi.org/10.1016/0021-9681(87)90171-8)
- [Charlson M et al. Validation of a combined comorbidity index. J Clin Epidemiol, 1994.](https://doi.org/10.1016/0895-4356(94)90129-5)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## O que esta ferramenta não faz

- Não diagnostica, não prescreve e não substitui a avaliação de um médico. O resultado é a reprodução técnica de uma fórmula ou escore publicado.
- Não envia dados a lugar nenhum: roda no navegador ou no Node.js, sem rede, sem telemetria, sem armazenamento.
- Não guarda nem identifica pacientes. Não use com dados identificáveis fora de um ambiente que você controla.
- Não tem validação clínica independente nem aprovação regulatória (ver "Situação").

## Autoria e licença

Criado e mantido por **Felipe Guedes** (Engenheiro de Software e Arquiteto de Sistemas, Toledo, Paraná, Brasil) para a **Elucenia**, uma cadeia médica e científica global para acelerar a descoberta. Criado em 2026-09-25 na organização [github.com/Elucenia](https://github.com/Elucenia).

Licença **Apache-2.0** (arquivo `LICENSE`): você pode usar, copiar, modificar e embutir este código no seu site ou sistema, inclusive comercial, desde que mantenha o arquivo `NOTICE` e o aviso de copyright e declare as modificações. A licença cobre o código deste pacote; instrumentos, questionários, tabelas, traduções e marcas citados nas fontes mantêm os direitos dos seus titulares (ver `NOTICE`). Detalhes em `AUTHORSHIP.md`, `CITATION.cff`, `SECURITY.md` e `CONTRIBUTING.md`. Contato: contato@elucenia.org.
