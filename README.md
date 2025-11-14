# Coding Challenge Requirements

![Descripción](challenge.png)

## Overview
Build a responsive “Contract Onboarding” page based on the provided reference image. Implement an accessible, reusable accordion component that toggles expand/collapse when clicking the red chevron/arrow. Render this accordion component two times on the page, each showing a contract summary block.

You may use any frontend stack. Blazor is preferred
## Requirements

- Header with logo and page title “Contract Onboarding”
- Section title: “Contract Summary”
- Reusable Accordion component:
	- Props: Title, ChildContent (or equivalent)
	- Toggle expand/collapse by clicking the red chevron button
	- Used 2 times, each labeled “Overview”
- Accordion content (when expanded) shows:
	- Contract Type: “Existing Client – New Business”
	- Commodity: “Power”
	- Country: “France” + flag icon from /icons
	- Signature Date: “26/04/2023”
	- Period: “01/01/2023 – 31/12/2027”

## Responsiveness
- Desktop (≥1200px): two-column grid of 2 accordions (2x1)
- Tablet (~768–1199px): two columns if space allows; otherwise one column
- Mobile (≤767px): single column; content stacks cleanly; no horizontal scroll

## Visual cues
- Light page background; white/very light accordion surface with subtle border
- Chevron arrow in red; rotates to indicate expanded/collapsed
- Labels slightly bolder than values; consistent spacing

## Acceptance Criteria
- Page shows header with logo + title and “Contract Summary”
- 4 instances of the same Accordion component rendered
- Clicking the chevron expands/collapses; chevron indicates state change
- Expanded content includes all five fields with correct values and flag icon
- Desktop: 2-column grid; Mobile: 1-column; no layout breakage