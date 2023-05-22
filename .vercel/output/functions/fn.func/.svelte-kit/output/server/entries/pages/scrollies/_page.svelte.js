import { c as create_ssr_component, b as setContext, e as escape, d as add_attribute, g as getContext, f as compute_slots, h as each, v as validate_component } from "../../../chunks/index.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const cBase$1 = "";
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { multiple = false } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("multiple", multiple);
  setContext("rounded", rounded);
  setContext("active", active);
  setContext("hover", hover);
  setContext("padding", padding);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$1} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"listbox " + escape(classesBase, true)}" role="listbox"${add_attribute("aria-labelledby", labelledby, 0)} data-testid="listbox">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "cursor-pointer -outline-offset-[3px]";
const cLabel = "flex items-center space-x-4";
const ListBoxItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesLabel;
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let checked;
  let elemInput;
  function updateCheckbox(group2) {
    checked = group2.indexOf(value) >= 0;
  }
  function updateGroup(checked2) {
    const index = group.indexOf(value);
    if (checked2) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  {
    if (multiple)
      updateCheckbox(group);
  }
  {
    if (multiple)
      updateGroup(checked);
  }
  selected = multiple ? group.includes(value) : group === value;
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  return `<label>
	<div class="${"listbox-item " + escape(classesBase, true)}" data-testid="listbox-item" role="option"${add_attribute("aria-selected", selected, 0)} tabindex="0">
		<div class="h-0 w-0 overflow-hidden">${multiple ? `<input type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${add_attribute("checked", checked, 1)}>` : `<input type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}</div>
		
		<div class="${"listbox-label " + escape(classesLabel, true)}">
			${$$slots.lead ? `<div class="listbox-label-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
			
			<div class="listbox-label-content flex-1">${slots.default ? slots.default({}) : ``}</div>
			
			${$$slots.trail ? `<div class="listbox-label-trail">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div></div></label>`;
});
const data = [
  {
    id: 0,
    name: "dev page - ran",
    desc: "Dev page for current development",
    tech: [
      "dev"
    ],
    path: "./scrollies/0-ran",
    img: "https://cdn-icons-png.flaticon.com/512/5578/5578703.png"
  },
  {
    id: 1,
    name: "The Pudding Scrolly Template",
    desc: "This is a fork of The Pudding's Connor Rothschild scrolly template.",
    tech: [
      "The Pudding",
      "Scatter plot",
      "Responsive"
    ],
    path: "./scrollies/scrolly-1",
    img: "./src/lib/images/scrolly-1-img.png"
  }
];
const Item_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-ue6xb.svelte-ue6xb{color:inherit;text-decoration:none}.row.svelte-ue6xb.svelte-ue6xb{border:1px solid gainsboro;display:flex;justify-content:space-between;padding:10px}.column.svelte-ue6xb.svelte-ue6xb{padding:3px}.column-left.svelte-ue6xb.svelte-ue6xb{flex-basis:20%}.column-center.svelte-ue6xb.svelte-ue6xb{flex-basis:50%}.column-right.svelte-ue6xb.svelte-ue6xb{flex-basis:30%;display:flex;justify-content:center}.column-right.svelte-ue6xb img.svelte-ue6xb{max-width:100%;max-height:100px;object-fit:contain}.content.svelte-ue6xb.svelte-ue6xb{display:flex;flex-direction:column;justify-content:flex-start}.content-row.svelte-ue6xb.svelte-ue6xb{padding:5px}.title.svelte-ue6xb.svelte-ue6xb{font-size:larger;font-weight:bold}.tech-row.svelte-ue6xb.svelte-ue6xb{display:flex;flex-direction:row;justify-content:flex-start}.tech-chip.svelte-ue6xb.svelte-ue6xb{margin-right:5px;padding:3px;border:1px solid black;border-radius:5px;font-size:small}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { desc } = $$props;
  let { tech } = $$props;
  let { path } = $$props;
  let { img } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.tech === void 0 && $$bindings.tech && tech !== void 0)
    $$bindings.tech(tech);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  $$result.css.add(css$1);
  return `<div class="row svelte-ue6xb"><div class="column column-left svelte-ue6xb"></div>

    <div class="column column-center svelte-ue6xb"><div class="content svelte-ue6xb"><div class="content-row title svelte-ue6xb"><a${add_attribute("href", path, 0)} class="svelte-ue6xb">${escape(name)}</a></div>
        <div class="content-row tech-row svelte-ue6xb">${each(tech, (techItem) => {
    return `<div class="tech-chip svelte-ue6xb">${escape(techItem)}
            </div>`;
  })}</div>
        <div${add_attribute("desc", desc, 0)} class="content-row svelte-ue6xb">${escape(desc)}</div></div></div>
    <div class="column column-right svelte-ue6xb"><img${add_attribute("src", img, 0)} alt="A description of the image" class="svelte-ue6xb"></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".topRow.svelte-1mjpsrt{padding:1rem;flex-direction:column}.container.svelte-1mjpsrt{display:flex;padding-left:10%;padding-right:10%}.sidebar.svelte-1mjpsrt{width:200px;right:0;height:100%;padding:10px;box-sizing:border-box}.content.svelte-1mjpsrt{width:calc(100% - 200px);padding:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visibleScrollies;
  let tags = [...new Set(data.flatMap((item) => item.tech))];
  let selectedTag = 999;
  tags[selectedTag];
  let valueMultiple = [];
  let search = "";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    tags[selectedTag];
    visibleScrollies = data.filter((item) => {
      if (valueMultiple.length === 0 & search === "")
        return true;
      else if (valueMultiple.length === 0 & search !== "")
        return item.name.toLowerCase().includes(search.toLowerCase());
      else if (valueMultiple.length !== 0 & search === "") {
        return valueMultiple.some((tag) => item.tech.includes(tag));
      } else {
        return valueMultiple.some((tag) => item.tech.includes(tag)) && item.name.toLowerCase().includes(search.toLowerCase());
      }
    });
    $$rendered = `<div class="container topRow svelte-1mjpsrt"><input class="input" title="Input (text)" type="text" placeholder="search ... "${add_attribute("value", search, 0)}></div>

<div class="container svelte-1mjpsrt"><div class="sidebar svelte-1mjpsrt"><div class="card"><header class="card-header text-center text-2xl font-bold">Categories</header>
			<section class="p-4">${validate_component(ListBox, "ListBox").$$render($$result, { multiple: true }, {}, {
      default: () => {
        return `${each(tags, (tag, i) => {
          return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "medium",
              value: tag,
              group: valueMultiple
            },
            {
              group: ($$value) => {
                valueMultiple = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(tag)}`;
              }
            }
          )}`;
        })}`;
      }
    })}</section></div></div>

	<div class="content svelte-1mjpsrt"><div style="padding-bottom: 20px;"></div>
		${each(visibleScrollies, (item) => {
      return `${validate_component(Item, "Item").$$render($$result, Object.assign({}, item), {}, {})}`;
    })}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
