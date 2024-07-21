import { _ as __nuxt_component_0 } from "./image-Em7T-gXM.js";
import { V as VRow, a as VCol, _ as __nuxt_component_1, b as __nuxt_component_0$1 } from "../server.mjs";
import { _ as _sfc_main$1 } from "./service-CmEsVRv-.js";
import { s as sellingPointMock, _ as __nuxt_component_5 } from "./sellingPoint.mock-DHe3o2Va.js";
import { l as layananMock, _ as _sfc_main$2 } from "./layanan.mock-CifN-TqI.js";
import { defineComponent, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { V as VContainer } from "./transition-Cm8Ae_8P.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "devalue";
import "./VAvatar-C8IHkXt0.js";
import "./VImg-BLO58hL6.js";
const heroimg = "background-image: url('/img/service/ads_hero.png')";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const advertising = layananMock.advertising.variant;
    const portofolio = layananMock.advertising.desc;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeroImage = __nuxt_component_0;
      const _component_AppTextH2 = __nuxt_component_1;
      const _component_AppButtonPrimary = __nuxt_component_0$1;
      const _component_AppCardService = _sfc_main$1;
      const _component_AppSectionSellingPoint = __nuxt_component_5;
      const _component_AppCardPortfolio = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeroImage, {
        class: "h-[60vh]",
        img: heroimg
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "h-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    align: "center",
                    justify: "center",
                    class: "h-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          justify: "center",
                          algin: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppTextH2, { class: "text-white" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Layanan Advertising`);
                                  } else {
                                    return [
                                      createTextVNode("Layanan Advertising")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AppTextH2, { class: "text-white" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Jejak Hasanah`);
                                  } else {
                                    return [
                                      createTextVNode("Jejak Hasanah")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AppButtonPrimary, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pelajari lebih lanjut`);
                                  } else {
                                    return [
                                      createTextVNode("Pelajari lebih lanjut")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppTextH2, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Layanan Advertising")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AppTextH2, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Jejak Hasanah")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AppButtonPrimary, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pelajari lebih lanjut")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            justify: "center",
                            algin: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextH2, { class: "text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode("Layanan Advertising")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AppTextH2, { class: "text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode("Jejak Hasanah")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AppButtonPrimary, null, {
                                default: withCtx(() => [
                                  createTextVNode("Pelajari lebih lanjut")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, {
                      align: "center",
                      justify: "center",
                      class: "h-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          justify: "center",
                          algin: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppTextH2, { class: "text-white" }, {
                              default: withCtx(() => [
                                createTextVNode("Layanan Advertising")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AppTextH2, { class: "text-white" }, {
                              default: withCtx(() => [
                                createTextVNode("Jejak Hasanah")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AppButtonPrimary, null, {
                              default: withCtx(() => [
                                createTextVNode("Pelajari lebih lanjut")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "h-full" }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    align: "center",
                    justify: "center",
                    class: "h-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        justify: "center",
                        algin: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppTextH2, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Layanan Advertising")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AppTextH2, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Jejak Hasanah")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AppButtonPrimary, null, {
                            default: withCtx(() => [
                              createTextVNode("Pelajari lebih lanjut")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VContainer, { class: "my-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppTextH2, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Layanan Advertising`);
                      } else {
                        return [
                          createTextVNode("Layanan Advertising")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-center"${_scopeId2}> Jejak Hasanah menyediakan layanan advertising yang beragam, meliputi billboard, videotron, mini display, dan café branding. </p>`);
                } else {
                  return [
                    createVNode(_component_AppTextH2, null, {
                      default: withCtx(() => [
                        createTextVNode("Layanan Advertising")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-center" }, " Jejak Hasanah menyediakan layanan advertising yang beragam, meliputi billboard, videotron, mini display, dan café branding. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "mt-10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full flex justify-center"${_scopeId2}><div class="grid grid-cols-3 gap-x-10 gap-y-10"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(advertising), (service) => {
                    _push3(ssrRenderComponent(_component_AppCardService, {
                      title: service.name,
                      desc: service.desc,
                      path: `/advertising/${service.name}`
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full flex justify-center" }, [
                      createVNode("div", { class: "grid grid-cols-3 gap-x-10 gap-y-10" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(advertising), (service) => {
                          return openBlock(), createBlock(_component_AppCardService, {
                            title: service.name,
                            desc: service.desc,
                            path: `/advertising/${service.name}`
                          }, null, 8, ["title", "desc", "path"]);
                        }), 256))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_AppTextH2, null, {
                    default: withCtx(() => [
                      createTextVNode("Layanan Advertising")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-center" }, " Jejak Hasanah menyediakan layanan advertising yang beragam, meliputi billboard, videotron, mini display, dan café branding. ")
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "mt-10" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full flex justify-center" }, [
                    createVNode("div", { class: "grid grid-cols-3 gap-x-10 gap-y-10" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(advertising), (service) => {
                        return openBlock(), createBlock(_component_AppCardService, {
                          title: service.name,
                          desc: service.desc,
                          path: `/advertising/${service.name}`
                        }, null, 8, ["title", "desc", "path"]);
                      }), 256))
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppSectionSellingPoint, {
        title: "Pelayanan Tambahan",
        subtitle: "Jejak Hasanah menyediakan layanan yang komprehensif untuk memastikan kelancaran operasional Anda",
        items: unref(sellingPointMock).ads
      }, null, _parent));
      _push(ssrRenderComponent(_component_AppCardPortfolio, {
        desc: unref(portofolio),
        path: "/portofolio"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/advertising/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DlaxXu0E.js.map
