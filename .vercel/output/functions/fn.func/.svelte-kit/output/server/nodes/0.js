import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.98c5dceb.js","_app/immutable/chunks/index.ff905984.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.3d556ff6.js","_app/immutable/chunks/index.79947254.js"];
export const stylesheets = ["_app/immutable/assets/0.5c4c6027.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
