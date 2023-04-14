Date:  2023-04-14 (16:06)

Status: 
Tags:
Links: [[Svelte]]

We first set up a SSG Svelte app and a fresh page `/mui` to play around with MUI in. 

### Set up MUI

Lets just try something simple like a button. 

- ref: https://sveltematerialui.com/SVELTEKIT.md
- install smui `npm install --save-dev smui-theme`
- create theme files `npx smui-theme template src/theme`
	- examined the /src/theme folder. right now root .scss file then a dark folder.
- Theme build scripts: att these scripts into `package.json`
	- `"prepare": "npm run smui-theme-light && npm run smui-theme-dark", "smui-theme-light": "smui-theme compile static/smui.css -i src/theme","smui-theme-dark": "smui-theme compile static/smui-dark.css -i src/theme/dark"`
- Modified src/app.html. Added to head
	- `<link rel="stylesheet" href="/smui.css" />`
	- Fonts as per https://sveltematerialui.com/SVELTEKIT.md
- compile scss for MUI `npm run prepare`
- whenver you add a new SMUI package rerun `npm run prepare` again to rebuild CSS file with new styles components
- npm run dev to start developing


### Button

- install a SMUI button `npm install --save-dev @smui/button`
- 
- 


___
# References
