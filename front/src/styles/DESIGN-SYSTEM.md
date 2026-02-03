# 🎨 DESIGN SYSTEM KURDANT.FR

**Style :** Cyberpunk Y2K / Acid Graphics / Synthwave  
**Créé par :** Nyx (UX/UI Cyberpunk Specialist)  
**Date :** 2026-02-02  
**Version :** 1.0.0

---

## 📁 Structure des Fichiers

```
/src/styles/
├── index.css         ← Point d'entrée (importe tout)
├── variables.css     ← Tokens de design
├── typography.css    ← Fonts et styles de texte
├── global.css        ← Reset CSS et styles globaux
├── effects.css       ← Effets visuels cyberpunk
└── components.css    ← Composants UI de base
```

---

## 🚀 Installation

Dans ton `main.jsx` ou `App.jsx` :

```javascript
import './styles/index.css';
```

---

## 🎨 Palette de Couleurs

### Couleurs Néon (Signature Kurdant)

| Variable | Hex | Aperçu | Usage |
|----------|-----|--------|-------|
| `--color-neon-red` | `#ff0040` | 🔴 | Danger, accents forts |
| `--color-neon-pink` | `#ff00ff` | 🩷 | Énergie principale |
| `--color-neon-violet` | `#8b00ff` | 🟣 | Profondeur, mystère |
| `--color-neon-cyan` | `#00ffff` | 🔵 | Tech, liens |
| `--color-neon-green` | `#00ff41` | 🟢 | Succès, code |

### Fonds

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-bg-primary` | `#000000` | Fond principal (True Black) |
| `--color-bg-secondary` | `#0a0a0a` | Fond légèrement relevé |
| `--color-bg-tertiary` | `#111111` | Cards, élévations |

### Utilisation CSS

```css
.my-element {
  background: var(--color-bg-primary);
  color: var(--color-neon-pink);
  border: 1px solid var(--color-neon-violet);
}
```

---

## 🔤 Typographie

### Familles de Polices

| Variable | Font | Usage |
|----------|------|-------|
| `--font-display` | Orbitron | Titres massifs |
| `--font-pixel` | Press Start 2P | Accents rétro |
| `--font-body` | Inter | Corps de texte |
| `--font-mono` | JetBrains Mono | Code |

### Classes de Texte

```html
<!-- Titre Hero (KURDANT) -->
<h1 class="text-hero glitch" data-text="KURDANT">KURDANT</h1>

<!-- Titres de sections -->
<h2 class="text-display-1">PROJETS</h2>
<h2 class="text-display-2">À PROPOS</h2>

<!-- Texte pixel rétro -->
<span class="text-pixel">LEVEL UP</span>

<!-- Dégradé sur texte -->
<span class="text-gradient">Développeur Junior</span>

<!-- Texte avec glow -->
<span class="text-glow-pink">KURDANT</span>
```

---

## ✨ Effets Visuels

### Glitch (sur texte)

```html
<h1 class="glitch" data-text="KURDANT">KURDANT</h1>

<!-- Glitch seulement au hover -->
<h1 class="glitch-hover" data-text="KURDANT">KURDANT</h1>
```

### Scanlines (sur conteneur)

```html
<!-- Scanlines subtiles (recommandé pour le body) -->
<div class="scanlines-subtle">
  Contenu avec effet CRT léger
</div>

<!-- Scanlines visibles -->
<div class="scanlines">
  Contenu avec effet CRT visible
</div>

<!-- Scanlines animées -->
<div class="scanlines-animated">
  Contenu avec scanlines en mouvement
</div>
```

### Grain (texture)

```html
<div class="grain">
  Contenu avec texture grain
</div>

<!-- Grain animé -->
<div class="grain-animated">
  Contenu avec grain en mouvement
</div>
```

### Néon Glow

```html
<!-- Sur texte -->
<span class="text-glow-pink">Texte rose lumineux</span>
<span class="text-glow-violet">Texte violet lumineux</span>
<span class="text-glow-cyan">Texte cyan lumineux</span>

<!-- Sur éléments (box) -->
<div class="box-glow-pink">Box avec glow rose</div>
```

---

## 🔘 Boutons

### Types de Boutons

```html
<!-- Primary (rose/violet gradient) -->
<button class="btn btn-primary">Action Principale</button>

<!-- Secondary (outline) -->
<button class="btn btn-secondary">Action Secondaire</button>

<!-- Tertiary (ghost) -->
<button class="btn btn-tertiary">Action Tertiaire</button>

<!-- Cyber (coins coupés) -->
<button class="btn btn-cyber">Style Cyber</button>
```

### Tailles

```html
<button class="btn btn-primary btn-sm">Petit</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Grand</button>
```

### Effets

```html
<!-- Effet de scan au hover -->
<button class="btn btn-primary btn-scan">Avec Scan</button>
```

---

## 🃏 Cards

### Card de Base

```html
<div class="card">
  <h3>Titre</h3>
  <p>Description</p>
</div>
```

### Card Cyberpunk

```html
<div class="card-cyber">
  <h3>Projet Cyber</h3>
  <p>Avec bordure néon et ligne supérieure</p>
</div>
```

### Card Projet

```html
<div class="card-project">
  <img src="project.jpg" class="card-project-image" alt="Projet">
  <div class="card-project-overlay">
    <h3 class="card-project-title">Nom du Projet</h3>
    <div class="card-project-tech">
      <span class="tag-tech">React</span>
      <span class="tag-tech">Canvas</span>
    </div>
  </div>
</div>
```

---

## 📊 Barres de Progression (Skills)

```html
<div class="progress">
  <div class="progress-bar progress-bar-glow" style="width: 75%"></div>
</div>

<!-- Avec animation -->
<div class="progress">
  <div class="progress-bar progress-bar-glow progress-bar-animated" style="width: 80%"></div>
</div>

<!-- Variantes de couleur -->
<div class="progress">
  <div class="progress-bar progress-bar-violet" style="width: 60%"></div>
</div>
```

---

## 🏷️ Badges & Tags

```html
<!-- Badges -->
<span class="badge">Default</span>
<span class="badge badge-pink">Pink</span>
<span class="badge badge-violet">Violet</span>
<span class="badge badge-cyan">Cyan</span>
<span class="badge badge-green">Green</span>

<!-- Tags tech -->
<span class="tag-tech">React</span>
<span class="tag-tech">JavaScript</span>
```

---

## 🔲 Frames Cyberpunk

### Frame Identité (style fiche)

```html
<div class="frame-identity">
  <h3>HUGO KURDANT</h3>
  <p>Développeur Junior</p>
</div>
```

### Frame Terminal

```html
<div class="frame-terminal">
  <div class="frame-terminal-header">
    <span class="frame-terminal-dot frame-terminal-dot-red"></span>
    <span class="frame-terminal-dot frame-terminal-dot-yellow"></span>
    <span class="frame-terminal-dot frame-terminal-dot-green"></span>
  </div>
  <div class="frame-terminal-body">
    <code>$ npm run dev</code>
  </div>
</div>
```

---

## 🌓 Dark/Light Mode

Le mode sombre est le défaut. Pour activer le mode clair :

```html
<html data-theme="light">
```

### Toggle en JavaScript

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
}
```

---

## 📱 Responsive

### Breakpoints

| Breakpoint | Taille | Variable |
|------------|--------|----------|
| sm | 480px | `--breakpoint-sm` |
| md | 768px | `--breakpoint-md` |
| lg | 1024px | `--breakpoint-lg` |
| xl | 1280px | `--breakpoint-xl` |
| 2xl | 1536px | `--breakpoint-2xl` |

### Exemple Media Query

```css
@media (max-width: 768px) {
  .my-element {
    font-size: var(--text-sm);
  }
}
```

---

## ♿ Accessibilité

### Respect des Préférences

Le système respecte automatiquement :
- `prefers-reduced-motion` → Désactive les animations
- `prefers-contrast: high` → Améliore les contrastes

### Focus Visible

```css
/* Déjà inclus globalement */
:focus-visible {
  outline: 2px solid var(--color-neon-cyan);
  outline-offset: 2px;
}
```

### Skip Link

```html
<a href="#main-content" class="skip-link">
  Aller au contenu principal
</a>
```

---

## 🔧 Personnalisation

### Changer une couleur

Dans `variables.css` :

```css
:root {
  --color-neon-pink: #ff00ff;  /* Changer cette valeur */
}
```

### Ajouter une nouvelle couleur

```css
:root {
  --color-neon-orange: #ff6600;
  --glow-orange: 0 0 10px #ff6600, 0 0 20px #ff6600;
}
```

---

## 📚 Ressources

- **Fonts utilisées :** Google Fonts (Orbitron, Press Start 2P, Inter, JetBrains Mono)
- **Inspirations :** Akira, Synthwave, Y2K Acid Graphics
- **Documentation complète :** Voir `GUIDE-MAINTENANCE-KURDANT.md`

---

_Design System créé par Nyx pour Hugo - Kurdant.fr - 2026_
