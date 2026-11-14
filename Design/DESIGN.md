---
name: Lumen Industrial Grid
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb3ad'
  on-tertiary: '#68000a'
  tertiary-container: '#cf2c30'
  on-tertiary-container: '#ffecea'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-badge:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-performance, industrial B2B aesthetic engineered for enterprise procurement officers, systems integrators, and LED display field engineers. The aesthetic bridges hardware rigor with high-speed digital efficiency, reflecting the optoelectronic precision of modular LED wall assemblies, asynchronous control cards, and image processors.

The design movement blends **Brutalism** and **Precision SaaS Engineering**:
- Crisp, mechanical boundaries using precise 1px micro-grids and technical division lines that echo circuit traces and LED cabinet seams.
- High-contrast, dense data density without visual clutter, prioritizing technical spec verification, pixel counts, refresh rates, and signal routing architectures.
- Strategic deployment of an RGB-rooted signal palette (Electric Blue, Emerald Green, Signal Red) against deep architectural slates, evoking the physical glow of active display panels and diagnostic LEDs in dark control rooms.

## Colors

The color architecture is built around an enterprise dark default, engineered for mission-critical command centers and industrial catalogs, with sharp light surface counterweights for exportable spec sheets and commercial invoices.

- **Primary (`#2563EB` - Electric Blue):** Represents processing power, HDMI/RJ45 signal sync, and master control links. Used for primary interactive triggers, active navigation markers, and verified data highlights.
- **Secondary (`#10B981` - Emerald Green):** Denotes active power transmission, optimal refresh telemetry, and verified hardware states (e.g., synchronous cascade locked, HUB75 interface operational).
- **Tertiary (`#EF4444` - Signal Red):** Reserved for technical thresholds, power saturation warnings, frame drops, and direct inquiry/RFQ call-to-actions.
- **Neutral (`#0F172A` / `#0B111E` - Industrial Slate):** Forms the foundational surface architecture. Layered with subtle slate borders (`#1E293B` and `#334155`) to construct the visual scaffolding of hardware racks and spec panels.
- **Surface Accents (`#F8FAFC` & `#FFFFFF`):** High-contrast text layers ensuring zero eye strain when parsing high-density pixel pitch tables and voltage ratings.

## Typography

The typographic hierarchy coordinates three functional engines:
1. **Geometric Authority (Plus Jakarta Sans):** Drives structural section headlines and category definitions. Set in bold/extrabold weights with tight tracking to simulate heavy equipment branding and architectural signage.
2. **Systemic Legibility (Inter):** Handles comprehensive technical copy, warranty disclaimers, and application breakdowns. Offers neutral optical pacing for multi-line feature narratives.
3. **Instrument Metric (JetBrains Mono):** Governs all hardware model codenames (e.g., `HD-C15C`, `D35`, `HUB75E`), resolution bounds (`3840×2160`), scan ratios, port designations (`RJ45*1, USB*1`), and memory configurations. Ensures absolute columnar alignment across tabular matrices.

## Layout & Spacing

The layout operates on a 12-column rigid modular grid framed by technical hairline borders. 

- **Grid Architecture:** Desktop displays run a 12-column structure with `1.5rem` (24px) gutters and `2rem` (32px) screen margins. Content max-width is anchored at `1440px` to mirror workstation aspect ratios.
- **Breakpoints:**
  - **Mobile (< 768px):** Collapses to 4 columns. Gutter shrinks to `1rem` (16px), margins tighten to `1rem` (16px). High-density spec tables switch to horizontal pan cards with frozen hardware model identifier headers.
  - **Tablet (768px - 1024px):** 8 columns with `1.25rem` gutters. Splits technical schematics and procurement spec sheets 50/50.
  - **Desktop (> 1024px):** Full 12-column layout. Hardware selection matrices take the full width or an 8/4 spec-to-diagram allocation.
- **Vertical Rhythm:** Strict multiples of 4px and 8px govern all component inner paddings. Micro gaps (`space-xs` = 4px) anchor inline port lists and status pills, while section margins (`space-xl` = 40px) isolate discrete hardware series.

## Elevation & Depth

Visual hierarchy abandons diffuse organic drop shadows in favor of **hardware-grade tactile layering and crisp stroke boundaries**:

- **Subtle Technical Grid:** Backgrounds feature an overlaid SVG micro-dot or hairline grid (1px strokes, `#1E293B` at 40% opacity) spaced every 32px to evoke printed circuit boards and CAD blueprints.
- **Tonal Stepping:**
  - **Base Canvas:** Deepest dark slate (`#0B111E`).
  - **Surface Container (Tier 1):** Solid slate (`#0F172A`) framed by 1px solid `#1E293B`.
  - **Surface Container (Tier 2 - Hover/Active):** Lightened slate (`#1E293B`) bordered by primary blue (`#2563EB` at 60% opacity).
- **Hard Technical Shadows:** When floating overlays (such as diagnostic modals or spec comparison drawers) require depth, use sharp, low-spread shadows with zero blur: `0 4px 0 0 #000000, 0 0 0 1px #334155`.
- **Active State Illumination:** Instead of heavy glowing blurs, interactive focus states use a sharp 1px interior keyline accompanied by an instantaneous electric accent border.

## Shapes

The design uses a **Soft Precision (`1`)** shape language, prioritizing industrial geometric cleanliness:
- Base components (buttons, input fields, spec table containers, badges) utilize a controlled `0.25rem` (4px) corner radius. This prevents the harshness of raw 0px corners while avoiding consumer-like softness.
- Cabinet modules and technical schematic viewports utilize `rounded-lg` (`0.5rem` / 8px).
- Status indicator pills and port tag badges maintain strict pill formations (`9999px`) only when indicating binary on/off connection states or signal telemetry to contrast against structural rectilinear card containers.

## Components

### Buttons
- **Primary Industrial Trigger:** Solid Electric Blue (`#2563EB`) background, pure white bold text (`#FFFFFF`), `0.25rem` radius, `0.75rem 1.5rem` padding. In hover state: `#1D4ED8` with a 1px border highlight.
- **Secondary Diagnostic:** Dark slate fill (`#0F172A`), 1px solid border (`#334155`), white text. On hover, border shifts to `#2563EB` with text colored `#60A5FA`.
- **Critical / RFQ Action:** Signal Red (`#EF4444`) with high-contrast text, used exclusively for quotes, direct purchases, and hardware emergency overrides.

### Badges & Technical Chips
- **Model / Spec Badges:** Monospace font (`JetBrains Mono`), background `#1E293B`, border 1px solid `#334155`, text `#E2E8F0`. Padding `2px 8px`, `rounded-sm`.
- **Signal Indicators:** Equipped with a 6px circular dot showing steady green (`#10B981` for active link) or pulse red (`#EF4444` for packet loss/offline).

### Spec Tables & Data Grids
- **Header:** Uppercase `label-caps` typography, background `#0B111E`, bottom border 2px solid `#2563EB`.
- **Rows:** Alternating rows (`#0F172A` and `#131C31`) with 1px border `#1E293B`.
- **Cells:** Tabular monospace numerical values for pixel bounds (`3840×2048`), refresh rates (`3840Hz`), and loading capacities. Interactive row hover lights up with a subtle 1px left accent border in Electric Blue.

### Cards (Hardware Modules & Control Cards)
- Framed in 1px solid `#1E293B` on `#0F172A` container.
- Split architecture: Top half holds high-contrast product imagery with a darkened technical background grid; bottom half contains a dense spec ledger (Interface, Control Range, Memory, Network support).
- Header bar includes the model tag in monospace at top-left and an RGB status tag at top-right.

### Form Inputs & Search Filters
- Background `#0B111E`, 1px border `#334155`, text `#F8FAFC`.
- Focus ring: 1px solid `#2563EB` with zero blur offset.
- Monospace placeholder text for technical parameter filtering (e.g., `Filter by pixel pitch: P1.25, P2.5, P4...`).