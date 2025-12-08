# Rapid Response Design Guidelines

## Design Approach

**Selected Framework**: Modern B2G/B2B Design System
**Primary Influences**: Stripe (professional trust), Linear (clean typography), Material Design (structure)
**Rationale**: Emergency services require credibility, clarity, and data-driven communication over visual flair. Trust-building through professional design, clear information hierarchy, and results-focused presentation.

## Typography

**Font Family**: 
- Primary: Inter (headings, UI) - via Google Fonts
- Secondary: Inter (body text, same family for consistency)

**Type Scale**:
- Hero Headline: text-6xl font-bold (72px equivalent)
- Section Headers: text-4xl font-bold
- Subsection Headers: text-2xl font-semibold
- Body Text: text-lg (18px) for readability
- Captions/Metrics: text-sm font-medium
- All headings use tight letter-spacing (-0.02em) for modern feel

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-6 for lists
- Container padding: px-6 (mobile), px-8 (desktop)
- Max widths: max-w-7xl for sections, max-w-4xl for content blocks

**Grid Strategy**:
- Hero: Single column, centered content with background image
- Stats/Metrics: 4-column grid (lg:grid-cols-4, md:grid-cols-2, base: grid-cols-1)
- Target Audience: 3-column grid (lg:grid-cols-3, md:grid-cols-2)
- Features/Technology: 2-column split (60/40 ratio, text + visual)

## Component Library

**Navigation**:
- Fixed top navigation with logo left, menu items right
- CTA button in navigation ("Request Demo")
- Height: h-20, backdrop-blur effect when scrolling

**Hero Section**:
- Full-width background image (emergency response context - ambulance in motion, dispatch center, or aerial city view with emergency markers)
- Overlay gradient for text readability
- Headline + subheadline + primary CTA
- Button with blurred background (backdrop-blur-md bg-white/20)
- Height: min-h-[600px] to min-h-[700px]

**Statistics Panel**:
- 4 key metrics in cards with large numbers
- Format: Large number (text-5xl font-bold) + label (text-sm uppercase tracking-wide)
- Metrics: "X% Faster Response", "X Lives Saved Potential", "X Cities Coverage", "X% Efficiency Gain"
- Cards with subtle borders, no heavy shadows

**Problem/Solution Section**:
- 2-column layout: Problem statement (left) + Solution diagram (right)
- Icon: Heroicons for problem indicators
- Visual: Simple optimization diagram showing before/after ambulance positioning

**Technology Overview**:
- Centered content block with max-w-4xl
- 3 key technology points in horizontal cards
- Each card: Icon + Title + Description
- Use Heroicons: ChartBarIcon, MapPinIcon, ClockIcon

**Case Study (Chile Success)**:
- Full-width section with subtle background treatment
- Quote/testimonial format with large quotation marks
- Metric highlights in 3-column layout below quote
- Organization logo placeholder

**Target Audience Grid**:
- 3-column cards showing Government, Private Services, Emergency Services
- Icons representing each audience segment
- Bullet points of specific benefits per audience

**Demo Request Form**:
- 2-column layout: Form (left, 60%) + Context info (right, 40%)
- Form fields: Organization Type (dropdown), Name, Email, Phone, Message
- Context: Response time expectation, office hours, alternative contact
- Large, prominent submit button

**Footer**:
- 3-column layout: Company info + Quick links + Contact
- Trust indicators: "Trusted by X organizations"
- Social media icons (LinkedIn, Twitter)
- Newsletter signup field

## Images

**Required Images**:

1. **Hero Background**: High-quality image of emergency response scenario
   - Preferred: Aerial city view with emergency vehicle routes highlighted, OR dispatch center with maps, OR ambulance in motion through city
   - Treatment: Darkened overlay (bg-black/40) for text contrast
   - Placement: Full-width background, behind hero content

2. **Technology Diagram**: Simple visualization showing optimization concept
   - Illustration or diagram showing ambulance positioning before/after
   - Placement: Technology overview section, right column
   - Style: Clean, schematic, data-driven aesthetic

3. **Chile Map Visual**: Map highlighting coverage areas
   - Interactive-looking map of Chile with service areas marked
   - Placement: Case study section
   - Can be stylized illustration or actual map graphic

4. **Target Audience Icons**: Professional iconography for each segment
   - Use Heroicons throughout (BuildingOfficeIcon, TruckIcon, ShieldCheckIcon)

## Animations

**Minimal Motion**:
- Fade-in on scroll for statistics (once)
- Smooth hover states on cards (slight lift: transform scale-105)
- No continuous animations or scroll-driven effects
- Form field focus states with subtle ring treatment

## Accessibility & Form Inputs

- All form inputs: Consistent height (h-12), border treatment, focus states with ring
- Labels: font-medium text-sm, positioned above inputs
- Placeholder text: Descriptive and helpful
- Error states: Red ring with error message below field
- Submit button: High contrast, minimum h-12, clear disabled state