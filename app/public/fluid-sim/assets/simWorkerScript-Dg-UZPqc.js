function W(t, e) {
  return new Promise((n) => {
    t.addEventListener("message", function s({ data: i }) {
      (i == null ? void 0 : i.type) === e && (t.removeEventListener("message", s), n(i));
    });
  });
}
W(self, "wasm_bindgen_worker_init").then(async ({ init: t, receiver: e }) => {
  const n = await Promise.resolve().then(function() {
    return X;
  });
  await n.default(t), postMessage({ type: "wasm_bindgen_worker_ready" }), n.wbg_rayon_start_worker(e);
});
async function L(t, e, n) {
  if (n.numThreads() === 0) throw new Error("num_threads must be > 0.");
  const s = { type: "wasm_bindgen_worker_init", init: { module_or_path: t, memory: e }, receiver: n.receiver() };
  await Promise.all(Array.from({ length: n.numThreads() }, async () => {
    const i = new Worker(new URL("/fluid-sim/assets/workerHelpers-BJRNhk_Y.js", import.meta.url), { type: "module" });
    return i.postMessage(s), await W(i, "wasm_bindgen_worker_ready"), i;
  })), n.build();
}
let r;
function l(t) {
  const e = r.__externref_table_alloc();
  return r.__wbindgen_export_2.set(e, t), e;
}
function v(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    const s = l(n);
    r.__wbindgen_exn_store(s);
  }
}
let u = null;
function p() {
  return (u === null || u.buffer !== r.memory.buffer) && (u = new Uint8Array(r.memory.buffer)), u;
}
let y = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && y.decode();
const B = 2146435072;
let S = 0;
function U(t, e) {
  return S += e, S >= B && (y = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
    throw Error("TextDecoder not available");
  } }, y.decode(), S = e), y.decode(p().slice(t, t + e));
}
function R(t, e) {
  return t = t >>> 0, U(t, e);
}
let A = 0;
const O = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, C = function(t, e) {
  const n = O.encode(t);
  return e.set(n), { read: t.length, written: n.length };
};
function F(t, e, n) {
  if (n === void 0) {
    const _ = O.encode(t), d = e(_.length, 1) >>> 0;
    return p().subarray(d, d + _.length).set(_), A = _.length, d;
  }
  let s = t.length, i = e(s, 1) >>> 0;
  const c = p();
  let o = 0;
  for (; o < s; o++) {
    const _ = t.charCodeAt(o);
    if (_ > 127) break;
    c[i + o] = _;
  }
  if (o !== s) {
    o !== 0 && (t = t.slice(o)), i = n(i, s, s = o + t.length * 3, 1) >>> 0;
    const _ = p().subarray(i + o, i + s), d = C(t, _);
    o += d.written, i = n(i, s, o, 1) >>> 0;
  }
  return A = o, i;
}
let w = null;
function I() {
  return (w === null || w.buffer !== r.memory.buffer) && (w = new DataView(r.memory.buffer)), w;
}
function g(t) {
  return t == null;
}
function j(t) {
  r.wbg_rayon_start_worker(t);
}
const D = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => r.__wbg_wasmsim2d_free(t >>> 0, 1));
class P {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, D.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmsim2d_free(e, 0);
  }
  set_gravity(e) {
    r.wasmsim2d_set_gravity(this.__wbg_ptr, e);
  }
  get_positions_ptr() {
    return r.wasmsim2d_get_positions_ptr(this.__wbg_ptr) >>> 0;
  }
  set_target_density(e) {
    r.wasmsim2d_set_target_density(this.__wbg_ptr, e);
  }
  disable_interaction() {
    r.wasmsim2d_disable_interaction(this.__wbg_ptr);
  }
  set_smoothing_radius(e) {
    r.wasmsim2d_set_smoothing_radius(this.__wbg_ptr, e);
  }
  set_world_dimensions(e, n) {
    r.wasmsim2d_set_world_dimensions(this.__wbg_ptr, e, n);
  }
  set_interaction_radius(e) {
    r.wasmsim2d_set_interaction_radius(this.__wbg_ptr, e);
  }
  set_viscosity_strength(e) {
    r.wasmsim2d_set_viscosity_strength(this.__wbg_ptr, e);
  }
  enable_pull_interaction(e, n) {
    r.wasmsim2d_enable_pull_interaction(this.__wbg_ptr, e, n);
  }
  enable_push_interaction(e, n) {
    r.wasmsim2d_enable_push_interaction(this.__wbg_ptr, e, n);
  }
  set_pressure_multiplier(e) {
    r.wasmsim2d_set_pressure_multiplier(this.__wbg_ptr, e);
  }
  set_interaction_strength(e) {
    r.wasmsim2d_set_interaction_strength(this.__wbg_ptr, e);
  }
  get_velocity_magnitudes_ptr() {
    return r.wasmsim2d_get_velocity_magnitudes_ptr(this.__wbg_ptr) >>> 0;
  }
  constructor(e, n, s, i, c, o, _, d, T, E, x) {
    const N = r.wasmsim2d_new(e, n, s, i, c, o, _, d, T, E, x);
    return this.__wbg_ptr = N >>> 0, D.register(this, this.__wbg_ptr, this), this;
  }
  step(e) {
    r.wasmsim2d_step(this.__wbg_ptr, e);
  }
  reset_sim() {
    r.wasmsim2d_reset_sim(this.__wbg_ptr);
  }
}
const M = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => r.__wbg_wbg_rayon_poolbuilder_free(t >>> 0, 1));
class m {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(m.prototype);
    return n.__wbg_ptr = e, M.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, M.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wbg_rayon_poolbuilder_free(e, 0);
  }
  numThreads() {
    return r.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
  }
  build() {
    r.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
  }
  receiver() {
    return r.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
  }
}
const z = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function H(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, e);
    } catch (s) {
      if (t.ok && z.has(t.type) && t.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s;
    }
    const n = await t.arrayBuffer();
    return await WebAssembly.instantiate(n, e);
  } else {
    const n = await WebAssembly.instantiate(t, e);
    return n instanceof WebAssembly.Instance ? { instance: n, module: t } : n;
  }
}
function q() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbg_call_fbe8be8bf6436ce5 = function() {
    return v(function(e, n) {
      return e.call(n);
    }, arguments);
  }, t.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, n) {
    let s, i;
    try {
      s = e, i = n, console.error(R(e, n));
    } finally {
      r.__wbindgen_free(s, i, 1);
    }
  }, t.wbg.__wbg_instanceof_Window_68f3f67bad1729c1 = function(e) {
    let n;
    try {
      n = e instanceof Window;
    } catch {
      n = false;
    }
    return n;
  }, t.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    return new Error();
  }, t.wbg.__wbg_newnoargs_ff528e72d35de39a = function(e, n) {
    return new Function(R(e, n));
  }, t.wbg.__wbg_stack_0ed75d68575b0f3c = function(e, n) {
    const s = n.stack, i = F(s, r.__wbindgen_malloc, r.__wbindgen_realloc), c = A;
    I().setInt32(e + 4, c, true), I().setInt32(e + 0, i, true);
  }, t.wbg.__wbg_startWorkers_2ca11761e08ff5d5 = function(e, n, s) {
    return L(e, n, m.__wrap(s));
  }, t.wbg.__wbg_static_accessor_GLOBAL_487c52c58d65314d = function() {
    const e = typeof global > "u" ? null : global;
    return g(e) ? 0 : l(e);
  }, t.wbg.__wbg_static_accessor_GLOBAL_THIS_ee9704f328b6b291 = function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return g(e) ? 0 : l(e);
  }, t.wbg.__wbg_static_accessor_SELF_78c9e3071b912620 = function() {
    const e = typeof self > "u" ? null : self;
    return g(e) ? 0 : l(e);
  }, t.wbg.__wbg_static_accessor_WINDOW_a093d21393777366 = function() {
    const e = typeof window > "u" ? null : window;
    return g(e) ? 0 : l(e);
  }, t.wbg.__wbindgen_init_externref_table = function() {
    const e = r.__wbindgen_export_2, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  }, t.wbg.__wbindgen_is_undefined = function(e) {
    return e === void 0;
  }, t.wbg.__wbindgen_memory = function() {
    return r.memory;
  }, t.wbg.__wbindgen_module = function() {
    return h.__wbindgen_wasm_module;
  }, t.wbg.__wbindgen_throw = function(e, n) {
    throw new Error(R(e, n));
  }, t;
}
function G(t, e) {
  t.wbg.memory = e || new WebAssembly.Memory({ initial: 18, maximum: 16384, shared: true });
}
function V(t, e, n) {
  if (r = t.exports, h.__wbindgen_wasm_module = e, w = null, u = null, typeof n < "u" && (typeof n != "number" || n === 0 || n % 65536 !== 0)) throw "invalid stack size";
  return r.__wbindgen_start(n), r;
}
async function h(t, e) {
  if (r !== void 0) return r;
  let n;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t, memory: e, thread_stack_size: n } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/fluid-sim/assets/sim_wasm_bg-2XT0514q.wasm", import.meta.url));
  const s = q();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t)), G(s, e);
  const { instance: i, module: c } = await H(await t, s);
  return V(i, c, n);
}
var X = Object.freeze({ __proto__: null, WasmSim2D: P, default: h, wbg_rayon_PoolBuilder: m, wbg_rayon_start_worker: j });
const Y = 5e3, J = 0.025;
let f, a = null;
const k = 1 / 60;
let b = null;
onmessage = async (t) => {
  const { type: e } = t.data;
  switch (e) {
    case "INIT_WASM": {
      f = (await h({ module_or_path: new URL("/fluid-sim/assets/sim_wasm_bg-2XT0514q.wasm", import.meta.url) })).memory, self.postMessage({ type: "READY" }), console.log("Simulation Web Worker Ready");
      break;
    }
    case "INIT_SIM": {
      a && (a.free(), a = null);
      const n = t.data.payload.worldWidth, s = t.data.payload.worldHeight, i = t.data.payload.gravity, c = t.data.payload.targetDensity, o = t.data.payload.pressureMultiplier, _ = t.data.payload.viscosityStrength, d = t.data.payload.smoothingRadius, T = t.data.payload.interactionStrength, E = t.data.payload.interactionRadius;
      a = new P(Y, J, n, s, i, c, o, _, d, T, E), self.postMessage({ type: "UPDATE_POSITIONS", payload: { memoryBuffer: f.buffer, positionsPtr: a.get_positions_ptr(), velocityMagnitudesPtr: a.get_velocity_magnitudes_ptr() } }), console.log("Simulation WebAssembly Instance Created");
      break;
    }
    case "START_RECORDING":
      break;
    case "STOP_RECORDING":
      break;
    case "START": {
      b ?? (b = setInterval(() => {
        a && (a.step(k), self.postMessage({ type: "UPDATE_POSITIONS", payload: { memoryBuffer: f.buffer, positionsPtr: a.get_positions_ptr(), velocityMagnitudesPtr: a.get_velocity_magnitudes_ptr() } }));
      }, k * 1e3));
      break;
    }
    case "STOP": {
      b !== null && (clearInterval(b), b = null);
      break;
    }
    case "STEP": {
      a && (a.step(k), self.postMessage({ type: "UPDATE_POSITIONS", payload: { memoryBuffer: f.buffer, positionsPtr: a.get_positions_ptr(), velocityMagnitudesPtr: a.get_velocity_magnitudes_ptr() } }));
      break;
    }
    case "SET_WORLD_DIMENSIONS": {
      a == null ? void 0 : a.set_world_dimensions(t.data.payload.worldWidth, t.data.payload.worldHeight);
      break;
    }
    case "UPDATE_PARAMETER": {
      switch (t.data.payload.parameter) {
        case "gravity": {
          a == null ? void 0 : a.set_gravity(t.data.payload.gravity);
          break;
        }
        case "targetDensity": {
          a == null ? void 0 : a.set_target_density(t.data.payload.targetDensity);
          break;
        }
        case "pressureMultiplier": {
          a == null ? void 0 : a.set_pressure_multiplier(t.data.payload.pressureMultiplier);
          break;
        }
        case "viscosityStrength": {
          a == null ? void 0 : a.set_viscosity_strength(t.data.payload.viscosityStrength);
          break;
        }
        case "smoothingRadius": {
          a == null ? void 0 : a.set_smoothing_radius(t.data.payload.smoothingRadius);
          break;
        }
        case "interactionStrength": {
          a == null ? void 0 : a.set_interaction_strength(t.data.payload.interactionStrength);
          break;
        }
        case "interactionRadius": {
          a == null ? void 0 : a.set_interaction_radius(t.data.payload.interactionRadius);
          break;
        }
      }
      break;
    }
    case "ENABLE_PUSH_INTERACTION": {
      a == null ? void 0 : a.enable_push_interaction(t.data.payload.x, t.data.payload.y);
      break;
    }
    case "ENABLE_PULL_INTERACTION": {
      a == null ? void 0 : a.enable_pull_interaction(t.data.payload.x, t.data.payload.y);
      break;
    }
    case "DISABLE_INTERACTION": {
      a == null ? void 0 : a.disable_interaction();
      break;
    }
  }
};
