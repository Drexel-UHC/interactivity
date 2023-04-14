Date:  2023-04-14 (16:25)

Status: 
Tags:
Links:

## SSG

- ref:  https://kit.svelte.dev/docs/adapter-static
- initialize a svelte app 3.3.0
- install ssg adaptor `npm i -D @sveltejs/adapter-static`
- create a +layout.js file in routes/ with a single line  of code `export const prerender = true`
- `npm run build` in terminal

## GitHub Pages

- ref: https://www.youtube.com/watch?v=d-PTp1rmr30&ab_channel=HrishikeshPathak
- `npm i -D gh-pages`
- `npm run build` will create bunle at /build
- add another npm command for deployment to package.json  `"deploy": "npx gh-pages -d build"`
- `npm run deploy`


___
# References
