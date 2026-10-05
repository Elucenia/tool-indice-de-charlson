<!-- ELUCENIA technical documentation · indice-de-charlson · en · no clinical/professional/rights approval -->

# Charlson Comorbidity Index

[conditions, sources and permissions](https://elucenia.org/en/tools/indice-de-charlson)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`idade`

- `0` — \< 50
- `1` — 50 to 59
- `2` — 60 to 69
- `3` — 70 to 79
- `4` — ≥ 80

### Previous myocardial infarction

`iam`

### Congestive heart failure

`icc`

### Peripheral arterial disease (or aortic aneurysm ≥ 6 cm)

`dap`

### Cerebrovascular disease (stroke with mild residual deficit or TIA)

`avc`

### Dementia

`demencia`

### Chronic pulmonary disease

`dpoc`

### Connective tissue disease (SLE, polymyositis, rheumatoid arthritis, polymyalgia)

`colageno`

### Peptic ulcer disease

`ulcera`

### Liver disease

`figado`

- `0` — No
- `1` — Mild (chronic hepatitis, cirrhosis without portal hypertension)
- `3` — Moderate or severe (cirrhosis with portal hypertension)

### Diabetes mellitus

`dm`

- `0` — No
- `1` — No target-organ damage
- `2` — With end-organ damage

### Hemiplegia

`hemiplegia`

### Moderate or severe renal disease (creatinine \> 3 mg/dL, dialysis or transplant)

`renal`

### Solid tumor

`tumor`

- `0` — No
- `2` — No metastasis (last 5 years)
- `6` — Metastatic

### Leukemia

`leucemia`

### Lymphoma

`linfoma`

### AIDS (not HIV positivity alone)

`aids`

## Method edition

CCI/Charlson 1987; age-adjusted Charlson 1994; age points 50–59/60–69/70–79/≥80; local survival estimate

## Documented formula

1 point: myocardial infarction, heart failure, peripheral arterial disease, cerebrovascular disease, dementia, chronic lung disease, connective-tissue disease, peptic ulcer, mild liver disease, diabetes without end-organ damage. 2 points: hemiplegia, moderate/severe kidney disease, diabetes with end-organ damage, solid tumour, leukaemia, lymphoma. 3 points: moderate/severe liver disease. 6 points: metastatic tumour, AIDS.

Age adjustment (Charlson 1994): 1 point per decade from age 50 (50–59=1; 60–69=2; 70–79=3; ≥80=4).

Estimated 10-year survival = 0.983e(0.9 × index) × 100%.

## Limits and population

Identify whether the index includes age adjustment. It is a prognostic comorbidity measure studied in defined cohorts and time horizons, not a universal prediction. The local survival equation requires its own checking and calibration; a bibliographic reference does not establish its individual performance.

## References

- [Charlson ME et al. A new method of classifying prognostic comorbidity in longitudinal studies: development and validation. J Chronic Dis, 1987.](https://doi.org/10.1016/0021-9681(87)90171-8)

- [Charlson M et al. Validation of a combined comorbidity index. J Clin Epidemiol, 1994.](https://doi.org/10.1016/0895-4356(94)90129-5)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
