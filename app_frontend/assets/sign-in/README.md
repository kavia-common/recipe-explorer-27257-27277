# Sign In (Ocean Professional)

Static HTML/CSS/JS assets generated from the provided Figma screen “Sign In” (375×812). The design applies the Ocean Professional style guide.

## Files
- index.html — Markup for the Sign In screen
- styles.css — Theme and layout styles using CSS variables
- script.js — Minimal interactivity (enter/submit handling)
  
All files are self-contained and can be opened directly in a browser.

## Theme (Ocean Professional)
- Primary: #2563EB (blue)
- Secondary: #F59E0B (amber)
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Gradient: subtle radial from blue-500/10 to gray-50 equivalent

Typography derives from Figma:
- Hello: Poppins 30/45, 600
- Welcome: Poppins 20/30, 400
- Input label: Poppins 14/21, 400
- Placeholder: Poppins 11/16.5, 400
- Button: Poppins 16/24, 600
- Small text: 11/16.5

## Accessibility
- Proper labels associated with inputs
- Sufficient color contrast for text and controls
- Focus states: high-contrast ring on inputs and buttons
- ARIA labels for grouped controls and icons

## Responsive
- Layout centers within a max width of 375px to match Figma while adapting down to narrow screens.
- Inputs and button stretch to available width on smaller screens.

## Assets
This page references the exported social icons from the repository:
- Google: ../../../../assets/figmaimages/figma_image_13_48.png
- Facebook: ../../../../assets/figmaimages/figma_image_13_61.png

If replacing icons, place updated assets in app_frontend/assets/sign-in/img (optional) and adjust paths in index.html.

## Usage
Open `index.html` in a browser. For integration in your app, copy this folder to your static assets and reference `index.html` or embed the markup/styles.

## Notes
- Visuals such as border radii (10px), input height (55px), CTA height (60px), separators, and home indicator mirror Figma values.
- Shadows, spacing, and alignment tuned to match Figma while adhering to the Ocean Professional color system.
