# VRM Green Nursery

VRM Green Nursery is a responsive business website for a coconut plant nursery based in Madurai, Tamil Nadu. The site presents the nursery’s product range, farming guidance, contact details, and demo farm information with a clean, professional agricultural brand style.

## Overview

VRM Green Nursery specializes in the supply of quality coconut plants, including dwarf and hybrid varieties, as well as high-yielding options for farmers, home gardens, and commercial coconut plantations. The site includes product information, a practical farming guide, a contact form that opens a WhatsApp enquiry, and a dedicated demo farm section.

## Features

- Responsive business website for desktop, tablet, and mobile
- Fixed navigation bar with responsive mobile menu
- Homepage sections for hero, about, varieties, services, demo farm, and CTA
- Coconut variety showcase with product cards and modal/detail view
- Farming guide with spacing and planting recommendations
- Contact page with enquiry form and WhatsApp integration
- Social media links and business contact information
- Modern styling with green, orange, and light blue brand accents
- Smooth scrolling and App Router-compatible section navigation
- Custom 404 page

## Business Information

| Item            | Details                                          |
| --------------- | ------------------------------------------------ |
| Business Name   | VRM Green Nursery                                |
| Phone           | 8985532945                                       |
| WhatsApp Number | 918985532945                                     |
| Email           | vrmgreennursery@gmail.com                        |
| Nursery Address | Madurai, Thirumangalam Road – 625008             |
| Demo Farm       | Chinnamanur, Theni District, Tamil Nadu – 625515 |
| Business Hours  | Monday – Sunday, 7:00 AM – 7:00 PM               |
| Facebook        | https://facebook.com/VRMGREENNURSERY             |
| Instagram       | https://instagram.com/vrmgreen                   |
| YouTube         | https://youtube.com/@vrmgreennursery-ne2bu       |

## Website Pages / Routes

| Route            | Purpose                                                 |
| ---------------- | ------------------------------------------------------- |
| `/`              | Homepage                                                |
| `/farming-guide` | Coconut farming guide and planting recommendations      |
| `/contact`       | Contact page with enquiry form and WhatsApp integration |
| `/not-found`     | Custom 404 page                                         |

## Website Sections

The homepage includes the following sections:

- Hero
- About Us
- Coconut Varieties
- Services
- Demo Farm
- CTA
- Footer

The section IDs used in the page are:

- `id="home"`
- `id="about"`
- `id="varieties"`
- `id="services"`
- `id="demo-farm"`

## Coconut Varieties

The project currently represents these coconut varieties:

- Chandra Shankara
- D × T Coconut
- Ganga Coconut
- Malaysian Green Dwarf Coconut (MGD)
- COD Coconut – Chowghat Orange Dwarf
- Kalpasree Coconut

These are defined in the data source and rendered on the homepage variety section.

## Services

The service offerings represented in the site include:

- Quality Coconut Plant Supply
- Dwarf & Hybrid Coconut Plants
- High-Yielding Varieties
- Bulk Plant Supply
- Plant Selection Guidance
- Planting & Care Guidance
- Coconut Farm Development Support

## Demo Farm Information

- Location: Chinnamanur, Theni District, Tamil Nadu – 625515
- Visitors are requested to contact VRM Green Nursery before visiting for exact location and directions.
- The site provides phone and WhatsApp actions for visiting arrangements.

## Farming Guide Information

The farming guide page includes practical coconut plantation guidance, including:

- Coconut plant spacing
- Plants per acre
- 20 × 20 feet → 108 plants/acre
- 22 × 22 feet → 90 plants/acre
- 23 × 23 feet → 82 plants/acre
- 25 × 25 feet → 69 plants/acre
- Coconut planting pit preparation
- 2 × 2 × 2 ft pit
- Topsoil preparation
- Neem powder
- SSP
- Termite-control product
- Planting procedure
- Initial watering

## Brand Palette

The visual design uses the following brand colors:

- Primary Green: `#0DA855`
- Dark Green: `#173026`
- Orange: `#EF8228`
- Light Blue: `#66C4CE`
- Light Green Background: `#F2FAF5`
- Secondary Text: `#587067`

## Technology Stack

This project is built with the following technologies as seen in the source and package configuration:

| Category   | Technology                  |
| ---------- | --------------------------- |
| Framework  | Next.js 16                  |
| UI Library | React 19                    |
| Styling    | Tailwind CSS 4              |
| Motion     | Framer Motion               |
| Icons      | React Icons                 |
| Scroll     | Lenis                       |
| Linting    | ESLint + eslint-config-next |
| Fonts      | next/font/google with Geist |
| Routing    | Next.js App Router          |

## Project Structure

```text
vrm-green-nursery/
├── public/
│   ├── staffarc-logo.avif
│   └── images/
│       ├── about/
│       ├── hero/
│       ├── logo/
│       └── varieties/
│           ├── chandra-shankara/
│           ├── cod/
│           ├── d-t-coconut/
│           ├── ganga/
│           ├── kalpasree/
│           └── malaysian-green-dwarf/
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.jsx
│   │   ├── farming-guide/
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   └── page.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── CTA.jsx
│   │   │   ├── DevelopedByStaffArc.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── About.jsx
│   │   │   ├── DemoFarm.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Varieties.jsx
│   │   └── layout/
│   │       ├── Footer.jsx
│   │       ├── Navbar.jsx
│   │       └── ScrollToTop.jsx
│   └── data/
│       └── varieties.js
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
└── public/
```

## Installation

Install the project dependencies:

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Then open the app in the browser at:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Then run the production server:

```bash
npm start
```

## Environment Variables

No environment variables are currently required or configured in the project.

## Image and Asset Organization

The project stores public media assets under the `public/images` directory, organized by category:

- `public/images/about/`
- `public/images/hero/`
- `public/images/logo/`
- `public/images/varieties/`

The variety images are grouped by variety name (for example: `chandra-shankara`, `ganga`, `kalpasree`, `cod`, `d-t-coconut`, and `malaysian-green-dwarf`).

The site also uses `public/staffarc-logo.avif` for branding in a shared component.

## Navigation Behavior

The site uses absolute section URLs for homepage navigation, such as:

- `/#home`
- `/#about`
- `/#varieties`
- `/#services`
- `/#demo-farm`

The project also includes a `ScrollToTop` component and global smooth scrolling behavior to support route changes and hash-based section navigation without breaking the fixed navbar layout.

## WhatsApp and Contact Functionality

The contact page and homepage CTA sections use WhatsApp links with pre-filled enquiry text. The active WhatsApp number used by the project is:

- `918985532945`

The contact form collects user details and opens a WhatsApp message in a new tab using the encoded enquiry payload.

## Responsive Design

The website is designed to be responsive across mobile, tablet, and desktop layouts. It includes:

- a fixed responsive navbar
- a mobile navigation menu
- rounded cards and modern spacing
- responsive CTA sections and grid layouts
- adaptive typography and stacking for smaller screens

## SEO and Metadata

The root layout includes metadata and Open Graph information for the site, including:

- page title
- description
- keywords
- Open Graph title and description
- locale configuration

## Social Media Links

- Facebook: https://facebook.com/VRMGREENNURSERY
- Instagram: https://instagram.com/vrmgreen
- YouTube: https://youtube.com/@vrmgreennursery-ne2bu

## Contact

For enquiries, contact VRM Green Nursery at:

- Phone: 8985532945
- Email: vrmgreennursery@gmail.com
- Address: Madurai, Thirumangalam Road – 625008
- Demo Farm: Chinnamanur, Theni District, Tamil Nadu – 625515

## Credits

This project is a business website for VRM Green Nursery and is built with Next.js, React, and Tailwind CSS for a responsive and modern presentation of the nursery’s products, services, and guidance.
