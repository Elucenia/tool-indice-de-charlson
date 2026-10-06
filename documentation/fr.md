<!-- ELUCENIA technical documentation · indice-de-charlson · fr · no clinical/professional/rights approval -->

# Indice de comorbidité de Charlson

[conditions, sources et autorisations](https://elucenia.org/fr/outils/indice-de-charlson)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`idade`

- `0` — \< 50
- `1` — 50 à 59
- `2` — 60 à 69
- `3` — 70 à 79
- `4` — ≥ 80

### Infarctus du myocarde antérieur

`iam`

### Insuffisance cardiaque congestive

`icc`

### Artériopathie périphérique (ou anévrisme aortique ≥ 6 cm)

`dap`

### Maladie cérébrovasculaire (AVC avec séquelles légères ou AIT)

`avc`

### Démence

`demencia`

### Maladie pulmonaire chronique

`dpoc`

### Connectivite (lupus, polymyosite, polyarthrite rhumatoïde, polymyalgie)

`colageno`

### Ulcère gastroduodénal

`ulcera`

### Maladie hépatique

`figado`

- `0` — Non
- `1` — Légère (hépatite chronique, cirrhose sans hypertension portale)
- `3` — Modérée ou sévère (cirrhose avec hypertension portale)

### Diabète sucré

`dm`

- `0` — Non
- `1` — Aucune atteinte d’organe cible
- `2` — Avec atteinte d’organe cible

### Hémiplégie

`hemiplegia`

### Maladie rénale modérée ou sévère (créatinine \> 3 mg/dL, dialyse ou greffe)

`renal`

### Tumeur solide

`tumor`

- `0` — Non
- `2` — Aucune métastase (5 dernières années)
- `6` — Métastatique

### Leucémie

`leucemia`

### Lymphome

`linfoma`

### Sida (et non simple séropositivité au VIH)

`aids`

## Édition de la méthode

CCI/Charlson 1987 ; ajustement âge 1994 ; points 50–59/60–69/70–79/≥80 ; estimation locale de survie

## Formule documentée

1 point : infarctus, insuffisance cardiaque, artériopathie périphérique, maladie cérébrovasculaire, démence, maladie pulmonaire chronique, connectivite, ulcère peptique, hépatopathie légère, diabète sans atteinte d’organe. 2 points : hémiplégie, atteinte rénale modérée/sévère, diabète avec atteinte d’organe, tumeur solide, leucémie, lymphome. 3 points : hépatopathie modérée/sévère. 6 points : tumeur métastatique, sida.

Ajustement sur l’âge (Charlson 1994) : 1 point par décennie dès 50 ans (50–59=1 ; 60–69=2 ; 70–79=3 ; ≥80=4).

Survie estimée à 10 ans = 0,983e(0,9 × indice) × 100%.

## Limites et population

Précisez si l’indice comprend un ajustement selon l’âge. C’est une mesure pronostique de comorbidité étudiée dans des cohortes et horizons définis, pas une prédiction universelle. L’équation locale de survie exige sa propre vérification et son propre calibrage ; la présence de la référence bibliographique ne démontre pas sa performance individuelle.

## Références

- [Charlson ME et al. A new method of classifying prognostic comorbidity in longitudinal studies: development and validation. J Chronic Dis, 1987.](https://doi.org/10.1016/0021-9681(87)90171-8)

- [Charlson M et al. Validation of a combined comorbidity index. J Clin Epidemiol, 1994.](https://doi.org/10.1016/0895-4356(94)90129-5)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Survie estimée à 10 ans : 98,3%

| Détails du résultat | |
| --- | --- |
| Points des comorbidités (sans âge) | 0 |
| Points liés à l'âge | 0 |
| Mortalité à 1 an dans la cohorte de dérivation, selon les comorbidités (Charlson 1987) | 12% |


### 2

Survie estimée à 10 ans : 90,1%

| Détails du résultat | |
| --- | --- |
| Points des comorbidités (sans âge) | 2 |
| Points liés à l'âge | 0 |
| Mortalité à 1 an dans la cohorte de dérivation, selon les comorbidités (Charlson 1987) | 26% |


### 3

Survie estimée à 10 ans : 53,4%

| Détails du résultat | |
| --- | --- |
| Points des comorbidités (sans âge) | 2 |
| Points liés à l'âge | 2 |
| Mortalité à 1 an dans la cohorte de dérivation, selon les comorbidités (Charlson 1987) | 26% |


### 4

Survie estimée à 10 ans : 0,0%

| Détails du résultat | |
| --- | --- |
| Points des comorbidités (sans âge) | 6 |
| Points liés à l'âge | 3 |
| Mortalité à 1 an dans la cohorte de dérivation, selon les comorbidités (Charlson 1987) | 85% |

