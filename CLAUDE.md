# CLAUDE.md — MyVendorManager.nl Website

Instructies voor Claude Code bij het werken aan dit project.

---

## Project context

- **Framework**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Type**: Single-page marketing website
- **Taal op de site**: Nederlands
- **Doelgroep**: (Semi-)publieke organisaties in Nederland

---

## Bestandsstructuur

```
app/           → layout.tsx en page.tsx (Next.js App Router)
components/    → één bestand per sectie (Hero, Team, Features, etc.)
public/        → afbeeldingen en statische assets
BACKLOG.md     → verbeterpunten en ideeën (zie werkwijze hieronder)
```

---

## Screenshot check cyclus (verplicht)

Voordat een taak als afgerond wordt gemarkeerd, voer je altijd de volgende cyclus uit:

1. **Screenshot 1** — maak een screenshot van het relevante deel van de pagina
2. **Beoordeel** — controleer op uitlijning, afbeeldingen, tekst en visuele consistentie
3. **Herstel** indien nodig, en herhaal tot maximaal 3 keer

Pas na de screenshot check markeer je een todo als `completed`.

---

## Backlog werkwijze

- Taken komen uit [BACKLOG.md](./BACKLOG.md)
- Afgeronde items verplaats je naar de sectie **Afgerond** in BACKLOG.md
- Voeg het `- [x]` vinkje toe en geef een korte omschrijving van wat er gedaan is

---

## Stijlconventies

- Gebruik Tailwind utility classes — geen losse CSS tenzij strikt noodzakelijk
- Kleuren uit het merkpalet:
  - Donkerblauw: `#1A2E4A`
  - Cyaan accent: `#1EBCD4`
  - Lichtgrijs achtergrond: `#F8FAFC`
  - Tekst secundair: `#64748B`
- Alle teksten op de site zijn in het Nederlands
- Componenten zijn functionele React components met `'use client'` waar nodig

---

## Assets

- Foto's en afbeeldingen horen in `/public`
- **Alleen `.jpg` voor foto's** — nooit `.png` voor portretfoto's of andere foto's
- Bestandsnamen in kebab-case, lowercase: `kees-aling.jpg`, `antoinette-wieman.jpg`
- **Maximale bestandsgrootte: 300KB per afbeelding** — grotere bestanden veroorzaken laadproblemen op mobiel
- Controleer altijd de bestandsgrootte vóór gebruik: `ls -lh public/`
- Bij twijfel: vraag de gebruiker het bestand te verkleinen via [squoosh.app](https://squoosh.app)

---

## Commit & deploy workflow

Na het afronden van een taak volg je altijd deze volgorde:

1. **Screenshot check cyclus** doorlopen (zie boven) — desktop én mobile
2. **Wacht op goedkeuring** van de gebruiker op `http://localhost:3000` vóór je commit of push uitvoert
3. **Pas na expliciete goedkeuring** voer je de commit uit:
   ```bash
   git add <specifieke bestanden>
   git commit -m "beschrijving van de wijziging"
   git push
   ```
4. **Vercel** pikt de push naar `main` automatisch op en deployt naar productie (~1-2 min)

> Nooit automatisch committen of pushen — altijd wachten op "akkoord" van de gebruiker.

---

## Aandachtspunten

- De site heeft geen backend — het contactformulier is nog niet functioneel
- Freemium model en aanvullende features staan in de backlog onder **Ideeën & Onderzoek** — niet aanpassen zonder overleg
