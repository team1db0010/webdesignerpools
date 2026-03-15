# Changelog

All notable changes to the Designer Pools website will be documented in this file.

---

## [2026-03-15] - Project Restructure

### Changed
- Moved website files to `/public` folder for cleaner project structure
- Updated `netlify.toml` to publish from `public` directory
- Separated documentation files from deployed website files

### Project Structure
```
Root (documentation and config)
└── public/ (deployed website files)
    ├── index.html
    ├── images/
    └── logo/
```

---

## [2026-03-14] - Brand Alignment Updates

### Changed
- Updated all meta descriptions to emphasize three-generation family heritage
- Rewrote hero section headline from "Transform Your Backyard Into Paradise" to "Built with Three Generations of Craftsmanship"
- Updated hero subtitle to focus on family values and integrity
- Revised contact section copy to be more direct and specific
- Updated form service options to match actual services offered (removed Equipment & Service, updated Landscaping to Complete Backyard Living)
- Modified section subtitles throughout to remove generic marketing phrases

### Removed
- Removed unused Google Fonts preconnect/DNS prefetch directives
- Removed "Equipment & Service" from services section and form options

### Fixed
- Aligned all copy with brand tone guidelines (.cursorrules)
- Ensured consistent family-focused messaging across all sections

---

## [2026-03-14] - Initial Website Launch

### Added
- Responsive single-page website design
- Auto-playing image gallery with 9 pool project photos
- Working contact form with Netlify Forms integration
- Customer testimonials section (3 sample reviews)
- Services section showcasing 5 core services
- About section highlighting three-generation family story
- Mobile hamburger menu with auto-close functionality
- "Back to Top" button
- "Free Quote" CTA in header
- Full WCAG 2.1 accessibility compliance
- Schema.org LocalBusiness structured data
- Open Graph and Twitter Card meta tags
- Keyboard navigation for slideshow
- Image lazy loading
- Print styles
- Security headers in netlify.toml

### Technical
- HTML5, CSS3, Vanilla JavaScript
- Deployed on Netlify
- Netlify Forms for contact form handling
- Single-file architecture (index.html)
- No external dependencies or frameworks

---

## Future

### To Do
- Optimize images (compress from 3-5MB to <300KB each)
- Replace placeholder phone number
- Add real customer testimonials
- Add Google Analytics tracking ID
- Consider adding before/after renovation photos
