<!-- ELUCENIA technical documentation · indice-de-charlson · de · no clinical/professional/rights approval -->

# Charlson-Komorbiditätsindex

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/indice-de-charlson)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`idade`

- `0` — \< 50
- `1` — 50 bis 59
- `2` — 60 bis 69
- `3` — 70 bis 79
- `4` — ≥ 80

### Früherer Myokardinfarkt

`iam`

### Kongestive Herzinsuffizienz

`icc`

### Periphere arterielle Erkrankung (oder Aortenaneurysma ≥ 6 cm)

`dap`

### Zerebrovaskuläre Erkrankung (Schlaganfall mit leichtem Residualdefizit oder TIA)

`avc`

### Demenz

`demencia`

### Chronische Lungenerkrankung

`dpoc`

### Bindegewebserkrankung (SLE, Polymyositis, rheumatoide Arthritis, Polymyalgie)

`colageno`

### Peptische Ulkuskrankheit

`ulcera`

### Lebererkrankung

`figado`

- `0` — Nein
- `1` — Leicht (chronische Hepatitis, Zirrhose ohne portale Hypertonie)
- `3` — Mäßig oder schwer (Zirrhose mit portaler Hypertonie)

### Diabetes mellitus

`dm`

- `0` — Nein
- `1` — Kein Endorganschaden
- `2` — Mit Endorganschädigung

### Hemiplegie

`hemiplegia`

### Mittelschwere oder schwere Nierenerkrankung (Kreatinin \> 3 mg/dL, Dialyse oder Transplantation)

`renal`

### Solider Tumor

`tumor`

- `0` — Nein
- `2` — Keine Metastasen (letzte 5 Jahre)
- `6` — Metastatisch

### Leukämie

`leucemia`

### Lymphom

`linfoma`

### AIDS (nicht allein HIV-positiv)

`aids`

## Fassung der Methode

CCI/Charlson 1987; Altersadjustierung 1994; Altersstufen 50–59/60–69/70–79/≥80; lokale Überlebensschätzung

## Dokumentierte Formel

1 Punkt: Herzinfarkt, Herzinsuffizienz, periphere Arterienkrankheit, zerebrovaskuläre Krankheit, Demenz, chronische Lungenkrankheit, Bindegewebskrankheit, peptisches Ulkus, leichte Leberkrankheit, Diabetes ohne Endorganschaden. 2 Punkte: Hemiplegie, mäßige/schwere Nierenkrankheit, Diabetes mit Endorganschaden, solider Tumor, Leukämie, Lymphom. 3 Punkte: mäßige/schwere Leberkrankheit. 6 Punkte: metastatischer Tumor, AIDS.

Altersadjustierung (Charlson 1994): 1 Punkt je Jahrzehnt ab 50 Jahren (50–59=1; 60–69=2; 70–79=3; ≥80=4).

Geschätztes 10-Jahres-Überleben = 0,983e(0,9 × Index) × 100%.

## Grenzen und Population

Geben Sie an, ob der Index eine Altersanpassung enthält. Er ist ein in bestimmten Kohorten und Zeithorizonten untersuchtes prognostisches Komorbiditätsmaß, keine universelle Vorhersage. Die lokale Überlebensgleichung erfordert eigene Prüfung und Kalibrierung; eine bibliografische Referenz belegt ihre individuelle Leistung nicht.

## Referenzen

- [Charlson ME et al. A new method of classifying prognostic comorbidity in longitudinal studies: development and validation. J Chronic Dis, 1987.](https://doi.org/10.1016/0021-9681(87)90171-8)

- [Charlson M et al. Validation of a combined comorbidity index. J Clin Epidemiol, 1994.](https://doi.org/10.1016/0895-4356(94)90129-5)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
