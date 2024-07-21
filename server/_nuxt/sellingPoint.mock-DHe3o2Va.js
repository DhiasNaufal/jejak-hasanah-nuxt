import { J as _export_sfc, a as VCol, V as VRow, f as VIcon, _ as __nuxt_component_1 } from "../server.mjs";
import { withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { V as VContainer } from "./transition-Cm8Ae_8P.js";
const _sfc_main = {
  props: {
    title: {
      type: String,
      default: "Selling Point"
    },
    subtitle: {
      type: String,
      default: "description"
    },
    items: {
      type: Array,
      default: () => [
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Title",
          desc: "Description"
        },
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Title",
          desc: "Description"
        },
        {
          no: 1,
          icon: "mdi-account-circle",
          title: "Title",
          desc: "Description"
        }
      ]
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppTextH2 = __nuxt_component_1;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          align: "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_AppTextH2, { class: "mb-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($props.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($props.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<p class="text-lg text-neutral-500 md:w-3/5 mb-5"${_scopeId2}>${ssrInterpolate($props.subtitle)}</p>`);
            } else {
              return [
                createVNode(_component_AppTextH2, { class: "mb-3" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($props.title), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-lg text-neutral-500 md:w-3/5 mb-5" }, toDisplayString($props.subtitle), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($props.items, (item) => {
                _push3(ssrRenderComponent(VCol, {
                  align: "center",
                  cols: "4"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VIcon, {
                        size: "x-large",
                        color: "primary"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(item.icon)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.icon), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(`<h1 class="text-2xl font-semibold"${_scopeId3}>${ssrInterpolate(item.title)}</h1><p class="text-center"${_scopeId3}>${ssrInterpolate(item.desc)}</p>`);
                    } else {
                      return [
                        createVNode(VIcon, {
                          size: "x-large",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.icon), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("h1", { class: "text-2xl font-semibold" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "text-center" }, toDisplayString(item.desc), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($props.items, (item) => {
                  return openBlock(), createBlock(VCol, {
                    align: "center",
                    cols: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "x-large",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.icon), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("h1", { class: "text-2xl font-semibold" }, toDisplayString(item.title), 1),
                      createVNode("p", { class: "text-center" }, toDisplayString(item.desc), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, {
            cols: "12",
            align: "center"
          }, {
            default: withCtx(() => [
              createVNode(_component_AppTextH2, { class: "mb-3" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($props.title), 1)
                ]),
                _: 1
              }),
              createVNode("p", { class: "text-lg text-neutral-500 md:w-3/5 mb-5" }, toDisplayString($props.subtitle), 1)
            ]),
            _: 1
          }),
          createVNode(VRow, null, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($props.items, (item) => {
                return openBlock(), createBlock(VCol, {
                  align: "center",
                  cols: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "x-large",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.icon), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("h1", { class: "text-2xl font-semibold" }, toDisplayString(item.title), 1),
                    createVNode("p", { class: "text-center" }, toDisplayString(item.desc), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/section/SellingPoint.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const sellingPointMock = {
  jh: [
    {
      no: 1,
      icon: "mdi-account-circle",
      title: "Kualitas dan Keamanan Terjamin:",
      desc: "Kami menyediakan layanan transportasi dengan kendaraan berkualitas tinggi dan man power terlatih, memastikan keselamatan dan keandalan di segala area"
    },
    {
      no: 2,
      icon: "mdi-account-circle",
      title: "Diversivikasi Layanan",
      desc: "Kami menawarkan berbagai layanan, termasuk transportasi dan periklanan outdoor, dengan fleksibilitas untuk memenuhi beragam kebutuhan klien."
    },
    {
      no: 3,
      icon: "mdi-account-circle",
      title: "Layanan Pelanggan yang Unggul",
      desc: "Kami berkomitmen untuk memberikan layanan pelanggan yang terbaik dengan respons cepat dan solusi tepat waktu untuk kebutuhan dan masalah klien."
    }
  ],
  ads: [
    {
      no: 1,
      icon: "mdi-account-circle",
      title: "Design dan Produksi Konten",
      desc: "Kami menawarkan layanan lengkap mulai dari desain kreatif hingga produksi konten iklan."
    },
    {
      no: 2,
      icon: "mdi-account-circle",
      title: "Manajemen Kampanye",
      desc: "Tim kami siap membantu dalam merencanakan, meluncurkan, dan mengelola kampanye periklanan Anda untuk memastikan hasil yang optimal."
    },
    {
      no: 3,
      icon: "mdi-account-circle",
      title: "Teknologi Terbaru",
      desc: "Mengadopsi teknologi terbaru untuk memastikan efektivitas dan efisiensi iklan Anda."
    }
  ],
  transport: [
    {
      no: 1,
      icon: "mdi-account-circle",
      title: "Pemeliharaan Kendaraan",
      desc: "Pengelolaan penuh pemeliharaan kendaraan untuk memastikan performa optimal."
    },
    {
      no: 2,
      icon: "mdi-account-circle",
      title: "Driver Profesional",
      desc: "Driver terlatih dan telah lulus seleksi ketat, menjamin keamanan dan kenyamanan perjalanan."
    },
    {
      no: 3,
      icon: "mdi-account-circle",
      title: "Pengelolaan Legal dan Permits",
      desc: "Semua urusan legal dan perizinan diurus oleh kami, memberikan kemudahan bagi klien."
    }
  ]
};
export {
  __nuxt_component_5 as _,
  sellingPointMock as s
};
//# sourceMappingURL=sellingPoint.mock-DHe3o2Va.js.map
