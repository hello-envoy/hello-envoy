# Linen: Envoy 2.0 design system

Linen is a calm, editorial system for wedding planners. It sits somewhere between Linear, Notion and luxury hospitality: warm paper, deep ink, and one accent, clay, the colour of a wax seal on an invitation.

Living guide: `design-system/index.html`. Source of truth: `assets/tokens.css` (tokens + base) and `assets/components.css` (components).

## Principles
1. **Calm is a feature.** Planners already live with urgency, so the UI stays quiet. Clay is reserved for things that need a person now: a deposit due, a bounced email, the main action in the demo story.
2. **Editorial, then operational.** Fraunces carries names, dates and the big numbers. Geist does the work in tables, labels and controls.
3. **Borders before shadows.** Hairlines (`--line`) give the structure. Shadows only appear on things that float, like toasts, menus and dragged cards.
4. **Planner language.** Use milestone, checklist item, hold and "50 weeks out". Never epic, story points or velocity.
5. **Readable in grayscale.** Status shows through shape and label as well as colour.

## Tokens
| Group | Tokens |
|---|---|
| Paper | `--paper #F7F4EE` (page) · `--paper-2 #F0EBE2` · `--paper-3 #E8E1D5` · `--surface #FFFDF9` (cards) |
| Lines | `--line #E3DCD0` · `--line-strong #CFC6B7` |
| Ink | `--ink #1C1A17` · `--ink-2 #4B463F` · `--ink-3 #756E64` · `--ink-4 #A39B8F` (decorative only) |
| Accent | `--clay #9A3B27` (6.6:1 on paper) · `--clay-ink #7A2D1D` · `--clay-2 #C27A5F` · `--clay-3 #E3B9A6` · `--clay-soft #F5E6DF` |
| Semantic | `--ok #3E6650` · `--warn #8C6216` · `--risk` = clay · `--info #3F5266`, each with a `-soft` variant |
| Chart 1–8 | ink · clay · clay-2 · stone #8A8276 · clay-3 · sand #CFC6B7 · ink-2 #5B564E · paper-3 |
| Type | `--font-display` Fraunces (variable opsz, italic) · `--font-sans` Geist · `--font-mono` Geist Mono |
| Scale | 11 / 12.5 / 14 / 15 / 18 / 20 / 24 / 32 / 44 / 64 px. Display sizes use weight 300–400 with negative tracking |
| Space | 4px base: `--s-1` (4) up to `--s-24` (96) |
| Radius | 4 / 6 / 8 / 12 / 16 / pill |
| Elevation | `--e-0` border only · `--e-1` rest · `--e-2` hover · `--e-3` float · `--focus` clay ring |

## Rules
- **One accent.** If two things on a screen are clay, ask which one matters more.
- **Buttons.** Primary is ink. Accent (clay) is for the single most consequential action, e.g. "Log deposit paid". Secondary is the surface with a line border.
- **Numbers.** Use `.num` (tabular figures) and right-align them in tables. Show money as `$80.0k` in summaries and `$26,400` in detail.
- **Charts.** Use monochrome plus clay, in a fixed order, and never cycle hues. Ink means booked or committed, sand means remaining, clay means what to look at.
- **Status vocabulary.** Not contacted (dashed ring), Waiting (ring), Needs reply (clay dot), Booked (ink dot), Deposit paid (green dot), Declined (muted).
- **Couple surfaces.** Same tokens with more Fraunces and more air. Never show drafts, threads, markup, RAID or other clients.

## Don't
Purple gradients, glassmorphism, neon, rainbow charts, Inter-everywhere, illegible display fonts, drop-shadow soup, or chat as the home screen.
