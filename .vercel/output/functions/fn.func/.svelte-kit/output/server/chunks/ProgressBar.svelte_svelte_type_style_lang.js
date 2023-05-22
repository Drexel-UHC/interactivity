import { w as writable } from "./index2.js";
import { o as get_store_value } from "./index.js";
writable(void 0);
writable(void 0);
function drawerService() {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
drawerService();
function modalService() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
modalService();
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function handleAutoHide(toast) {
  if (toast.autohide === true) {
    return setTimeout(() => {
      toastStore.close(toast.id);
    }, toast.timeout);
  }
}
function toastService() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    /** Add a new toast to the queue. */
    trigger: (toast) => update((tStore) => {
      const id = randomUUID();
      if (toast && toast.callback)
        toast.callback({ id, status: "queued" });
      const tMerged = { ...toastDefaults, ...toast, id };
      tMerged.timeoutId = handleAutoHide(tMerged);
      tStore.push(tMerged);
      return tStore;
    }),
    /** Remove first toast in queue */
    close: (id) => update((tStore) => {
      if (tStore.length > 0) {
        const index = tStore.findIndex((t) => t.id === id);
        const selectedToast = tStore[index];
        if (selectedToast) {
          if (selectedToast.callback)
            selectedToast.callback({ id, status: "closed" });
          if (selectedToast.timeoutId)
            clearTimeout(selectedToast.timeoutId);
          tStore.splice(index, 1);
        }
      }
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
const toastStore = toastService();
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
const modeCurrent = localStorageStore("modeCurrent", false);
function setInitialClassState() {
  const elemHtmlClasses = document.documentElement.classList;
  const condLocalStorageUserPrefs = localStorage.getItem("modeUserPrefers") === "false";
  const condLocalStorageUserPrefsExists = !("modeUserPrefers" in localStorage);
  const condMatchMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (condLocalStorageUserPrefs || condLocalStorageUserPrefsExists && condMatchMedia) {
    elemHtmlClasses.add("dark");
  } else {
    elemHtmlClasses.remove("dark");
  }
}
const ProgressBar_svelte_svelte_type_style_lang = "";
export {
  modeCurrent as m,
  setInitialClassState as s
};
