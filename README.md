# Dream Space Architects — website

React 18 + TypeScript + Vite, with a live 3D hero built in Three.js (React Three Fiber) and animations by Framer Motion.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into /dist
```

## Deploy

Upload the contents of `dist/` to any host (cPanel/Hostinger public_html, Netlify, Vercel, Firebase). No server code is needed. `dist/` is already built and included in this zip.

## Where to edit

| What | File |
|---|---|
| All text, stats, services, values, clients, social links | `src/data/content.ts` |
| Phone and email (hidden until filled in) | `firm.phone`, `firm.email` in `src/data/content.ts` |
| Make the enquiry form send emails | set `ENQUIRY_ENDPOINT` in `src/data/content.ts` to a Formspree/Getform URL |
| Project photos | put images in `public/projects/` and list them in `photos` in `src/components/Projects.tsx` |
| Colours and fonts | top of `src/index.css` |
| 3D buildings (sizes, positions) | `BLOCKS` in `src/components/BuildingScene.tsx` |

## Structure

```
src/
  data/content.ts          site copy
  components/
    Header.tsx             sticky header + mobile menu
    Hero.tsx               hero with Dream / Speed / Build phase control
    BuildingScene.tsx      Three.js wireframe city block
    Stats.tsx              animated counters
    About.tsx              about, founder quote, values
    Services.tsx           accordion
    Projects.tsx           category tabs, drawings / photo gallery
    Process.tsx            5-step process, client list
    Contact.tsx            validated enquiry form
  App.tsx, main.tsx, index.css
```
