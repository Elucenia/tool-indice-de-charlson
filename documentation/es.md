<!-- ELUCENIA technical documentation · indice-de-charlson · es · no clinical/professional/rights approval -->

# Índice de comorbilidad de Charlson

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/indice-de-charlson)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`idade`

- `0` — \< 50
- `1` — 50 a 59
- `2` — 60 a 69
- `3` — 70 a 79
- `4` — ≥ 80

### Infarto de miocardio previo

`iam`

### Insuficiencia cardíaca congestiva

`icc`

### Enfermedad arterial periférica (o aneurisma aórtico ≥ 6 cm)

`dap`

### Enfermedad cerebrovascular (ictus con secuela leve o AIT)

`avc`

### Demencia

`demencia`

### Enfermedad pulmonar crónica

`dpoc`

### Enfermedad del tejido conjuntivo (LES, polimiositis, artritis reumatoide, polimialgia)

`colageno`

### Enfermedad ulcerosa péptica

`ulcera`

### Enfermedad hepática

`figado`

- `0` — No
- `1` — Leve (hepatitis crónica, cirrosis sin hipertensión portal)
- `3` — Moderada o grave (cirrosis con hipertensión portal)

### Diabetes mellitus

`dm`

- `0` — No
- `1` — Sin daño de órgano diana
- `2` — Con lesión de órgano diana

### Hemiplejia

`hemiplegia`

### Enfermedad renal moderada o grave (creatinina \> 3 mg/dL, diálisis o trasplante)

`renal`

### Tumor sólido

`tumor`

- `0` — No
- `2` — Sin metástasis (últimos 5 años)
- `6` — Metastásico

### Leucemia

`leucemia`

### Linfoma

`linfoma`

### Sida (no solo VIH positivo)

`aids`

## Edición del método

CCI/Charlson 1987; ajustado por edad 1994; puntos 50–59/60–69/70–79/≥80; supervivencia estimada local

## Fórmula documentada

1 punto: infarto, insuficiencia cardíaca, enfermedad arterial periférica, cerebrovascular, demencia, pulmonar crónica, tejido conectivo, úlcera péptica, hepatopatía leve, diabetes sin lesión de órgano. 2 puntos: hemiplejia, enfermedad renal moderada/grave, diabetes con lesión de órgano, tumor sólido, leucemia, linfoma. 3 puntos: hepatopatía moderada/grave. 6 puntos: tumor metastásico, sida.

Ajuste por edad (Charlson 1994): 1 punto por década desde 50 años (50–59=1; 60–69=2; 70–79=3; ≥80=4).

Supervivencia estimada a 10 años = 0,983e(0,9 × índice) × 100%.

## Límites y población

Identifique si el índice incluye ajuste por edad. Es una medida pronóstica de comorbilidad estudiada en cohortes y horizontes definidos, no una predicción universal. La ecuación local de supervivencia requiere su propia comprobación y calibración; la presencia de la referencia bibliográfica no demuestra su rendimiento individual.

## Referencias

- [Charlson ME et al. A new method of classifying prognostic comorbidity in longitudinal studies: development and validation. J Chronic Dis, 1987.](https://doi.org/10.1016/0021-9681(87)90171-8)

- [Charlson M et al. Validation of a combined comorbidity index. J Clin Epidemiol, 1994.](https://doi.org/10.1016/0895-4356(94)90129-5)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
