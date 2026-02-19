# AGENTS.md - Instructions for AI Agents

Welcome to the **Swords and Magic SRD** and **Skies of Elarion** project. This file provides guidelines and standards to ensure consistency across the codebase and setting.

## Project Overview

This project consists of two main parts:
1.  **Swords & Magic SRD**: A tabletop RPG system reference document based on 3.5/d20 systems but simplified.
2.  **Skies of Elarion**: A campaign setting featuring floating cities, gravity magic, and a world where nature is reclaiming the surface.

## Core Principles

### Thematic Consistency
- **Gravity & Airships**: Humans use gravity-reversing magic for survival. Airships and floating cities are central.
- **Nature vs. Civilization**: The surface is dangerous and overgrown. Most survivors live in the sky or fortified holds.
- **Magic Tiers**: Low-level magic is common; high-level magic is rare and often race-specific (e.g., Elves for Resurrection, Forged for Time).

### Technical Standards
- **Simple HTML/CSS**: Keep pages lightweight. Use standard semantic HTML.
- **Navigation**: Every page should have a link back to `index.html` or its parent directory.
- **Premium Aesthetics**: Aim for "rich" and "modern" designs for new UI elements. Avoid plain browser defaults when creating new components.
- **External Widgets**: Maintain the Ko-fi and Discord widgets on the main index.

## Content Guidelines

### Monster Entries (`Monsters.html`)
Follow the "Simplified Monster" format:
```html
<font size="4">MONSTER NAME</font><br>
<b>CR:</b> [Number]<br>
<b>Role:</b> [Soldier/Skirmisher/Brute/Lurker/Controller/Artillery]<br>
<b>Type:</b> [Size] [Type]<br>
<b>Stats:</b> HP [X], AC [X], Attack [X], Damage [X], Saves [X]/[X]<br>
<b>Ability DCs:</b> Primary [X], Secondary [X]<br>
<b>Skills:</b><br>
&nbsp;&nbsp;<b>Skill Name (Type) DC [X] (Frequency/Condition):</b> Description.<br>
```

### Race Entries (`Elarion/races.html`)
- Use `<h2>` for race names.
- Describe their "Mastery" (e.g., Masters of Time).
- List **Signature Spells** in italics.

## Common Workflows

### Adding a New Monster
1.  Determine CR and Role.
2.  Derive stats from `MonsterCreation.html`.
3.  Add the entry to `Monsters.html` in alphabetical order.

### Expanding Elarion Lore
1.  Ensure consistency with existing history in `Elarion/history.html`.
2.  Update `Elarion/nations.html` for geographical changes.
3.  Link new pages from `index.html`.

## Code of Conduct for Agents
- **Don't break the SRD**: Ensure any system changes are mechanically balanced according to the project's simplified rules.
- **Preserve Legal Info**: Always keep the Creative Commons attribution visible.
- **Verify Links**: Broken internal links are unacceptable.
