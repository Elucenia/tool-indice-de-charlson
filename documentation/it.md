<!-- ELUCENIA technical documentation · indice-de-charlson · it · no clinical/professional/rights approval -->

# Indice di comorbilità di Charlson

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/indice-de-charlson)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`idade`

- `0` — \< 50
- `1` — 50 a 59
- `2` — 60 a 69
- `3` — 70 a 79
- `4` — ≥ 80

### Pregresso infarto miocardico

`iam`

### Insufficienza cardiaca congestizia

`icc`

### Arteriopatia periferica (o aneurisma aortico ≥ 6 cm)

`dap`

### Malattia cerebrovascolare (ictus con esiti lievi o TIA)

`avc`

### Demenza

`demencia`

### Malattia polmonare cronica

`dpoc`

### Malattia del tessuto connettivo (LES, polimiosite, artrite reumatoide, polimialgia)

`colageno`

### Malattia ulcerosa peptica

`ulcera`

### Malattia epatica

`figado`

- `0` — No
- `1` — Lieve (epatite cronica, cirrosi senza ipertensione portale)
- `3` — Moderata o grave (cirrosi con ipertensione portale)

### Diabete mellito

`dm`

- `0` — No
- `1` — Nessun danno d’organo bersaglio
- `2` — Con danno d’organo bersaglio

### Emiplegia

`hemiplegia`

### Malattia renale moderata o grave (creatinina \> 3 mg/dL, dialisi o trapianto)

`renal`

### Tumore solido

`tumor`

- `0` — No
- `2` — Nessuna metastasi (ultimi 5 anni)
- `6` — Metastatico

### Leucemia

`leucemia`

### Linfoma

`linfoma`

### AIDS (non la sola positività all’HIV)

`aids`

## Edizione del metodo

CCI/Charlson 1987; aggiustamento età 1994; punti 50–59/60–69/70–79/≥80; stima locale sopravvivenza

## Formula documentata

1 punto: infarto, scompenso, arteriopatia periferica, malattia cerebrovascolare, demenza, malattia polmonare cronica, connettivite, ulcera peptica, epatopatia lieve, diabete senza danno d’organo. 2 punti: emiplegia, nefropatia moderata/grave, diabete con danno d’organo, tumore solido, leucemia, linfoma. 3 punti: epatopatia moderata/grave. 6 punti: tumore metastatico, AIDS.

Aggiustamento per età (Charlson 1994): 1 punto per decade da 50 anni (50–59=1; 60–69=2; 70–79=3; ≥80=4).

Sopravvivenza stimata a 10 anni = 0,983e(0,9 × indice) × 100%.

## Limiti e popolazione

Identificare se l’indice include l’aggiustamento per età. È una misura prognostica di comorbilità studiata in coorti e orizzonti definiti, non una previsione universale. L’equazione locale di sopravvivenza richiede verifiche e calibrazione proprie; la presenza del riferimento bibliografico non dimostra le sue prestazioni individuali.

## Riferimenti

- [Charlson ME et al. A new method of classifying prognostic comorbidity in longitudinal studies: development and validation. J Chronic Dis, 1987.](https://doi.org/10.1016/0021-9681(87)90171-8)

- [Charlson M et al. Validation of a combined comorbidity index. J Clin Epidemiol, 1994.](https://doi.org/10.1016/0895-4356(94)90129-5)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Sopravvivenza stimata a 10 anni: 98,3%

| Dettagli del risultato | |
| --- | --- |
| Punti delle comorbidità (senza età) | 0 |
| Punti per l'età | 0 |
| Mortalità a 1 anno nella coorte di derivazione, in base alle comorbidità (Charlson 1987) | 12% |


### 2

Sopravvivenza stimata a 10 anni: 90,1%

| Dettagli del risultato | |
| --- | --- |
| Punti delle comorbidità (senza età) | 2 |
| Punti per l'età | 0 |
| Mortalità a 1 anno nella coorte di derivazione, in base alle comorbidità (Charlson 1987) | 26% |


### 3

Sopravvivenza stimata a 10 anni: 53,4%

| Dettagli del risultato | |
| --- | --- |
| Punti delle comorbidità (senza età) | 2 |
| Punti per l'età | 2 |
| Mortalità a 1 anno nella coorte di derivazione, in base alle comorbidità (Charlson 1987) | 26% |


### 4

Sopravvivenza stimata a 10 anni: 0,0%

| Dettagli del risultato | |
| --- | --- |
| Punti delle comorbidità (senza età) | 6 |
| Punti per l'età | 3 |
| Mortalità a 1 anno nella coorte di derivazione, in base alle comorbidità (Charlson 1987) | 85% |

