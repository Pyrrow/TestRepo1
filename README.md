# comments-widget

Repository di prova per Code Guardian. Simula un piccolo widget di commenti
lato client (rendering, autenticazione, utility), con alcune vulnerabilità
introdotte deliberatamente per testare l'agente OWASP, e alcune funzioni
prive di documentazione per testare l'agente Docs.

Non è codice reale: non eseguirlo, serve solo come fixture di analisi.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Metriche SonarQube](#metriche-sonarqube)

## Features
- Simulazione di un widget per commenti lato client
- Funzionalità di autenticazione (mockata)
- Utility comuni utilizzate dal widget
- Codice progettato con vulnerabilità predefinite
- Funzionamento in contesto solo per test e analisi, non adatto a produzione

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

- `auth.js`: contiene logica legata alle funzioni di autenticazione mockata
- `render.js`: gestisce l'interfaccia e il rendering visivo del widget
- `utils.js`: raccoglie utility generali di uso comune tra moduli
- `POLICY.md`: potrebbe contenere informazioni su policy interne o di sicurezza
- `.DS_Store` e `README.md`: rispettivamente file di sistema macOS e descrizione principale del progetto

## Metriche SonarQube
I seguenti file sono stati analizzati e vengono segnalate alcune metriche di qualità e complessità:

### **src/auth.js**
- **Complessità ciclomatica**: `2.0`
- **Code Smells**: `0.0` (nessun problema rilevato)
- **Duplicazione**: `0.0%`
- **Security Hotspot**: `0.0` (nessun potenziale problema di sicurezza rilevato)

### **src/render.js**
- **Complessità ciclomatica**: `4.0`
- **Code Smells**: `0.0` (nessun problema rilevato)
- **Duplicazione**: `0.0%`
- **Security Hotspot**: `0.0`

### **src/utils.js**
- **Complessità ciclomatica**: `8.0`
- **Complessità cognitiva**: `5.0`
- **Code Smells**: `0.0`
- **Duplicazione**: `0.0%`
- **Security Hotspot**: `0.0`
