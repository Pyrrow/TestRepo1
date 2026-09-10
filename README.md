# comments-widget

[![License](https://img.shields.io/badge/License-Proprietary-orange.svg)](https://github.com/yourusername/comments-widget/blob/master/POLICY.md)

> Repository di prova per Code Guardian. Simula un piccolo widget di commenti lato client (rendering, autenticazione, utility), con alcune vulnerabilità deliberate testate tramite OWASP, e alcune funzioni con poca o nessuna documentazione.  
> **Questo progetto è solo un esempio per test e analisi di agenti OWASP, non eseguirlo in un ambiente reale né adibirlo a scopi produttivi.**

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [License](#license)

## Features
- Simula un widget per commenti lato client (niente backend esterno coinvolto)
- Funzionalità di autenticazione fittizia (mockata)
- Funzionamento interamente client-side
- Codice intenzionalmente vulnerabile per valutare l’efficacia dell’analisi OWASP
- Moduli separati per autenticazione, rendering e utility
- Non include script eseguibili, né file di build, né librerie esterne

## Project Structure
```text
.
├── .DS_Store
├── POLICY.md
├── README.md
└── src
    ├── auth.js
    ├── render.js
    └── utils.js
```

- `auth.js`: contiene logica di autenticazione finta e mockata
- `render.js`: gestisce il rendering visivo del widget
- `utils.js`: funzioni di utilità utilizzate da altri moduli
- `POLICY.md`: documenta informazioni interne riguardo uso, sicurezza, e policy per il progetto
- `.DS_Store`: file di sistema per macOS
- `README.md`: descrizione e struttura del progetto

## License

Questo progetto è coperto da una licenza proprietaria. Per ulteriori dettagli, vedere il file [POLICY.md](POLICY.md).
