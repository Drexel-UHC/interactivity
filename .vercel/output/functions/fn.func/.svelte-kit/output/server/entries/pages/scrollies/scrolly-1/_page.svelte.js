import { c as create_ssr_component, d as add_attribute, i as assign, j as now, l as loop, k as identity, a as subscribe, h as each, v as validate_component } from "../../../../chunks/index.js";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import { w as writable } from "../../../../chunks/index2.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
const Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = void 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0)
      value = maxIndex;
    else
      value = void 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index])
      intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0)
    $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Scatterplot_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".chart-container.svelte-dkmew9{height:80vh;max-width:100%;background:linear-gradient(to bottom right, steelblue -100%, white 100%);border-radius:5px;box-shadow:1px 1px 6px #cecece}",
  map: null
};
const Scatterplot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tweenedData;
  let xScale;
  let yScale;
  let $tweenedY, $$unsubscribe_tweenedY;
  let $tweenedX, $$unsubscribe_tweenedX;
  let { step } = $$props;
  let data = [
    { foo: 4, bar: 1, swag: 7 },
    { foo: 1, bar: 3, swag: 3 },
    { foo: 9, bar: 5, swag: 4 },
    { foo: 2, bar: 5, swag: 5 },
    { foo: 10, bar: 4, swag: 6 },
    { foo: 9, bar: 5, swag: 7 },
    { foo: 5, bar: 3, swag: 8 },
    { foo: 4, bar: 10, swag: 9 },
    { foo: 1, bar: 6, swag: 10 }
  ];
  let width;
  let height;
  const margin = { top: 30, bottom: 30, left: 30, right: 30 };
  const tweenOptions = {
    delay: 0,
    duration: 1e3,
    easing: cubicOut
  };
  const tweenedX = tweened(data.map((d) => d.foo), tweenOptions);
  $$unsubscribe_tweenedX = subscribe(tweenedX, (value) => $tweenedX = value);
  const tweenedY = tweened(data.map((d) => d.bar), tweenOptions);
  $$unsubscribe_tweenedY = subscribe(tweenedY, (value) => $tweenedY = value);
  function setTween(dimension, key) {
    dimension.set(data.map((d) => +d[key]));
  }
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$result.css.add(css$1);
  tweenedData = data.map((d, index) => ({ x: $tweenedX[index], y: $tweenedY[index] }));
  {
    {
      if (step == 0) {
        setTween(tweenedX, "foo");
        setTween(tweenedY, "bar");
      }
      if (step == 1) {
        setTween(tweenedX, "foo");
        setTween(tweenedY, "swag");
      }
      if (step == 2) {
        setTween(tweenedX, "swag");
      }
    }
  }
  xScale = scaleLinear().domain(extent($tweenedX, (d) => d)).range([margin.left, width - margin.right]);
  yScale = scaleLinear().domain(extent($tweenedY, (d) => d)).range([height - margin.top, margin.bottom]);
  $$unsubscribe_tweenedY();
  $$unsubscribe_tweenedX();
  return `<div class="chart-container svelte-dkmew9"><svg${add_attribute("width", width + margin.right + margin.left, 0)}${add_attribute("height", height, 0)}>${each(tweenedData, (d) => {
    return `<circle${add_attribute("cx", xScale(d.x), 0)}${add_attribute("cy", yScale(d.y), 0)}${add_attribute("r", 15, 0)} fill="steelblue" stroke="#000000" opacity=".9"></circle>`;
  })}</svg>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{overflow-x:hidden}.hero.svelte-bfqmd9.svelte-bfqmd9{height:60vh;display:flex;place-items:center;flex-direction:column;justify-content:center;text-align:center}.hero.svelte-bfqmd9 h2.svelte-bfqmd9{margin-top:0;font-weight:200}.spacer.svelte-bfqmd9.svelte-bfqmd9{height:40vh}.sticky.svelte-bfqmd9.svelte-bfqmd9{position:sticky;top:10%;flex:1 1 60%;width:60%}.section-container.svelte-bfqmd9.svelte-bfqmd9{margin-top:1em;text-align:center;transition:background 100ms;display:flex}.step.svelte-bfqmd9.svelte-bfqmd9{height:80vh;display:flex;place-items:center;justify-content:center}.step-content.svelte-bfqmd9.svelte-bfqmd9{font-size:1rem;background:whitesmoke;color:#ccc;border-radius:5px;padding:.5rem 1rem;display:flex;flex-direction:column;justify-content:center;transition:background 500ms ease;box-shadow:1px 1px 10px rgba(0, 0, 0, .2);text-align:left;width:75%;margin:auto;max-width:500px}.step.active.svelte-bfqmd9 .step-content.svelte-bfqmd9{background:white;color:black}.steps-container.svelte-bfqmd9.svelte-bfqmd9,.sticky.svelte-bfqmd9.svelte-bfqmd9{height:100%}.steps-container.svelte-bfqmd9.svelte-bfqmd9{flex:1 1 40%;z-index:10}@media screen and (max-width: 768px){.section-container.svelte-bfqmd9.svelte-bfqmd9{flex-direction:column-reverse}.sticky.svelte-bfqmd9.svelte-bfqmd9{width:95%;margin:auto}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  const steps = [
    "<p>This is a dynamic, responsive scatterplot that uses Russell Goldenberg's fdg to update its points' values on scroll.</p>",
    "<p>The scatterplot uses tweened values to automatically update your points with smooth transitions. It also binds to the width of the container <code>div</code>, so its responsive by default.</p>",
    "<p>Try resizing me to see the 'side-by-side' version, compared to the 'text-on-top' version that appears on small screens.</p><p>Want it to always appear 'text-on-top'? Just comment out the media query at the bottom of our styles (as in, leave the styles but comment out the surrounding <code>media</code> query).</p>"
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section><div class="hero svelte-bfqmd9"><h1>A Svelte Visualization Scrollytelling Starter Kit
		</h1>
		<h2 class="svelte-bfqmd9">By <a href="https://twitter.com/CL_Rothschild" target="_blank">Connor</a></h2></div>
  <div class="section-container svelte-bfqmd9"><div class="steps-container svelte-bfqmd9">${validate_component(Scrolly, "Scrolly").$$render(
      $$result,
      { value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(steps, (text, i) => {
            return `<div class="${["step svelte-bfqmd9", value === i ? "active" : ""].join(" ").trim()}"><div class="step-content svelte-bfqmd9"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></div>
          </div>`;
          })}
        <div class="spacer svelte-bfqmd9"></div>`;
        }
      }
    )}</div>
    <div class="sticky svelte-bfqmd9">${validate_component(Scatterplot, "Scatterplot").$$render($$result, { step: value }, {}, {})}</div></div>
	<div class="hero svelte-bfqmd9"><h1>Thanks!
		</h1>
		<h2 class="svelte-bfqmd9"><a href="https://twitter.com/CL_Rothschild" target="_blank">Questions and Tips</a></h2></div>
</section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
