<!-- ELUCENIA technical documentation · indice-de-charlson · pt-BR · no clinical/professional/rights approval -->

# Índice de Comorbidade de Charlson

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/indice-de-charlson)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`idade`

- `0` — \< 50
- `1` — 50 a 59
- `2` — 60 a 69
- `3` — 70 a 79
- `4` — ≥ 80

### Infarto do miocárdio prévio

`iam`

### Insuficiência cardíaca congestiva

`icc`

### Doença arterial periférica (ou aneurisma de aorta ≥ 6 cm)

`dap`

### Doença cerebrovascular (AVC com sequela leve ou AIT)

`avc`

### Demência

`demencia`

### Doença pulmonar crônica

`dpoc`

### Doença do tecido conjuntivo (LES, polimiosite, AR, polimialgia)

`colageno`

### Doença ulcerosa péptica

`ulcera`

### Doença hepática

`figado`

- `0` — Não
- `1` — Leve (hepatite crônica, cirrose sem hipertensão portal)
- `3` — Moderada ou grave (cirrose com hipertensão portal)

### Diabetes mellitus

`dm`

- `0` — Não
- `1` — Sem lesão de órgão-alvo
- `2` — Com lesão de órgão-alvo

### Hemiplegia

`hemiplegia`

### Doença renal moderada ou grave (creatinina \> 3 mg/dL, diálise ou transplante)

`renal`

### Tumor sólido

`tumor`

- `0` — Não
- `2` — Sem metástase (últimos 5 anos)
- `6` — Metastático

### Leucemia

`leucemia`

### Linfoma

`linfoma`

### Aids (não apenas HIV positivo)

`aids`

## Edição do método

CCI/Charlson 1987; ageadjusted Charlson 1994; pontos idade 50–59/60–69/70–79/≥80; estimativasobrevida local

## Fórmula documentada

1 ponto: infarto, insuficiência cardíaca, doença arterial periférica, doença cerebrovascular, demência, doença pulmonar crônica, doença do tecido conjuntivo, úlcera péptica, hepatopatia leve, diabetes sem lesão de órgão-alvo. 2 pontos: hemiplegia, doença renal moderada/grave, diabetes com lesão de órgão-alvo, tumor sólido, leucemia, linfoma. 3 pontos: hepatopatia moderada/grave. 6 pontos: tumor metastático, aids.

Ajuste pela idade (Charlson 1994): 1 ponto por década a partir dos 50 anos (50–59 = 1; 60–69 = 2; 70–79 = 3; ≥ 80 = 4).

Sobrevida estimada em 10 anos = 0,983e(0,9 × índice) × 100%.

## Limites e população

Identifique se o índice inclui ajuste por idade. É uma medida prognóstica de comorbidade estudada em coortes e horizontes definidos, não uma previsão universal. A equação local de sobrevida exige conferência e calibração próprias; a presença da referência bibliográfica não comprova seu desempenho individual.

## Referências

- [Charlson ME et al. A new method of classifying prognostic comorbidity in longitudinal studies: development and validation. J Chronic Dis, 1987.](https://doi.org/10.1016/0021-9681(87)90171-8)

- [Charlson M et al. Validation of a combined comorbidity index. J Clin Epidemiol, 1994.](https://doi.org/10.1016/0895-4356(94)90129-5)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
