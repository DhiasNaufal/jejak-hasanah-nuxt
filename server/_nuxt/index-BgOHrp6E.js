import { mergeProps, useSSRContext, withCtx, createTextVNode, toDisplayString, ref, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot, watch, defineComponent, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { J as _export_sfc, _ as __nuxt_component_1$3, V as VRow, a as VCol, H as VBtn, X as __nuxt_component_0$2, c as propsFactory, I as IconValue, g as genericComponent, Y as useProxiedModel, Z as useLocale, u as useRender, T as convertToUnit, h as VDefaultsProvider, $ as VProgressLinear } from "../server.mjs";
import { V as VContainer, _ as __nuxt_component_2$2 } from "./transition-Cm8Ae_8P.js";
import { V as VImg, m as makeVImgProps } from "./VImg-BLO58hL6.js";
import { _ as __nuxt_component_1$4 } from "./h5-B8FBdISM.js";
import { m as makeVWindowProps, V as VWindow, a as makeVWindowItemProps, b as VWindowItem } from "./VWindowItem-A1MwnHoD.js";
import { s as sellingPointMock, _ as __nuxt_component_5 } from "./sellingPoint.mock-DHe3o2Va.js";
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
import "./ssrBoot-DuXNnEEs.js";
const _sfc_main$a = {
  data() {
    return {
      style: "background-image: url('/img/home/homeBanner.png')"
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "bg-cover bg-center",
    style: $data.style
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/section/BackgroundImage.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(mergeProps({ class: "text-6xl font-fugaz" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h1>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/text/title.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$8 = {
  data() {
    return {
      backgroundUrl: "/img/home/homeBanner.png",
      items: [
        { value: "19+", desc: "Tahun Berdiri" },
        { value: "98%", desc: "Kepuasan Pelanggan" },
        { value: "75+", desc: "Proyek dikerjakan" }
      ]
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppTextH2 = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[100px] w-1/2 trapezoid absolute bottom-0 right-0 px-36 flex gap-16 items-center justify-center" }, _attrs))}><!--[-->`);
  ssrRenderList($data.items, (item, index2) => {
    _push(`<div class="text-white flex flex-col items-center">`);
    _push(ssrRenderComponent(_component_AppTextH2, { class: "text-white" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.value)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.value), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<p class="text-sm 2xl:text-base">${ssrInterpolate(item.desc)}</p></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/value.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const homepageMock = {
  landingPage: {
    title: "Jejak hasanah",
    desc: "Jejak Hasanah hadir untuk memberikan Solusi Inovatif dalam Jasa Transportasi dan Advertising dengan Profesionalisme dan Komitmen terhadap kualitas dan inovasi"
  }
};
const _sfc_main$7 = {
  setup() {
    const content = ref(homepageMock.landingPage);
    const mitra = [
      "/img/mitra/logo-telkomsel.png",
      "/img/mitra/PAMA.png",
      "/img/mitra/class_mild.png",
      "/img/mitra/gudang_garam.png",
      "/img/mitra/djarum.png"
    ];
    return {
      content,
      mitra
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppSectionBackgroundImage = __nuxt_component_0$1;
  const _component_AppTextTitle = __nuxt_component_1$2;
  const _component_LandingValue = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[90vh]" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppSectionBackgroundImage, { class: "h-4/5 relative" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VContainer, { class: "h-full mb-6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, {
                align: "center",
                class: "h-full text-white",
                "no-gutters": ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { cols: "6" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_AppTextTitle, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`${ssrInterpolate($setup.content.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString($setup.content.title), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_AppTextTitle, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Insya Allah Amanah`);
                              } else {
                                return [
                                  createTextVNode(" Insya Allah Amanah")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<br${_scopeId4}><p${_scopeId4}>${ssrInterpolate($setup.content.desc)}</p><br${_scopeId4}>`);
                          _push5(ssrRenderComponent(VBtn, { color: "secondary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Lebih lanjut`);
                              } else {
                                return [
                                  createTextVNode("Lebih lanjut")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_AppTextTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.content.title), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AppTextTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" Insya Allah Amanah")
                              ]),
                              _: 1
                            }),
                            createVNode("br"),
                            createVNode("p", null, toDisplayString($setup.content.desc), 1),
                            createVNode("br"),
                            createVNode(VBtn, { color: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode("Lebih lanjut")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_component_AppTextTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString($setup.content.title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AppTextTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Insya Allah Amanah")
                            ]),
                            _: 1
                          }),
                          createVNode("br"),
                          createVNode("p", null, toDisplayString($setup.content.desc), 1),
                          createVNode("br"),
                          createVNode(VBtn, { color: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode("Lebih lanjut")
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VRow, {
                  align: "center",
                  class: "h-full text-white",
                  "no-gutters": ""
                }, {
                  default: withCtx(() => [
                    createVNode(VCol, { cols: "6" }, {
                      default: withCtx(() => [
                        createVNode(_component_AppTextTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.content.title), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_AppTextTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(" Insya Allah Amanah")
                          ]),
                          _: 1
                        }),
                        createVNode("br"),
                        createVNode("p", null, toDisplayString($setup.content.desc), 1),
                        createVNode("br"),
                        createVNode(VBtn, { color: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode("Lebih lanjut")
                          ]),
                          _: 1
                        })
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
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LandingValue, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VContainer, { class: "h-full mb-6" }, {
            default: withCtx(() => [
              createVNode(VRow, {
                align: "center",
                class: "h-full text-white",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "6" }, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($setup.content.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AppTextTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(" Insya Allah Amanah")
                        ]),
                        _: 1
                      }),
                      createVNode("br"),
                      createVNode("p", null, toDisplayString($setup.content.desc), 1),
                      createVNode("br"),
                      createVNode(VBtn, { color: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode("Lebih lanjut")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_LandingValue)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="h-1/5 flex items-center" align="center">`);
  _push(ssrRenderComponent(VContainer, { align: "center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { align: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Our Clients: `);
                  } else {
                    return [
                      createTextVNode(" Our Clients: ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList($setup.mitra, (url) => {
                _push3(ssrRenderComponent(VCol, { cols: "2" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VImg, {
                        height: 100,
                        "aspect-ratio": "16/9",
                        src: url
                      }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VImg, {
                          height: 100,
                          "aspect-ratio": "16/9",
                          src: url
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode(VCol, null, {
                  default: withCtx(() => [
                    createTextVNode(" Our Clients: ")
                  ]),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList($setup.mitra, (url) => {
                  return openBlock(), createBlock(VCol, { cols: "2" }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        height: 100,
                        "aspect-ratio": "16/9",
                        src: url
                      }, null, 8, ["src"])
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
          createVNode(VRow, { align: "center" }, {
            default: withCtx(() => [
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createTextVNode(" Our Clients: ")
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList($setup.mitra, (url) => {
                return openBlock(), createBlock(VCol, { cols: "2" }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      height: 100,
                      "aspect-ratio": "16/9",
                      src: url
                    }, null, 8, ["src"])
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
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/view/hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$2;
  _push(ssrRenderComponent(VContainer, mergeProps({ class: "relative" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(ssrRenderComponent(_component_NuxtImg, {
          src: "img/logo-shade.png",
          class: "-z-10 absolute right-0 bottom-0",
          sizes: "180px sm:250px 2xl:300px"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtImg, {
          class: "absolute z-10 md:-left-32 -left-10 -bottom-5 md:-bottom-16 xl:-left-28",
          src: "/img/lengkung.png",
          format: "webp",
          sizes: "180px sm:250px 2xl:300px"
        }, null, _parent2, _scopeId));
      } else {
        return [
          renderSlot(_ctx.$slots, "default"),
          createVNode(_component_NuxtImg, {
            src: "img/logo-shade.png",
            class: "-z-10 absolute right-0 bottom-0",
            sizes: "180px sm:250px 2xl:300px"
          }),
          createVNode(_component_NuxtImg, {
            class: "absolute z-10 md:-left-32 -left-10 -bottom-5 md:-bottom-16 xl:-left-28",
            src: "/img/lengkung.png",
            format: "webp",
            sizes: "180px sm:250px 2xl:300px"
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/section/BackgroundLogo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {
  props: {
    img: {
      type: String,
      default: "background-image: url('/img/home/homeBanner.png')"
    },
    number: {
      type: String,
      default: "1"
    },
    title: {
      type: String,
      default: "Title"
    },
    desc: {
      type: String,
      default: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam."
    },
    path: {
      type: String,
      default: "/"
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppTextH5 = __nuxt_component_1$4;
  const _component_NuxtLink = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-10 items-center" }, _attrs))}><div class="bg-cover bg-center h-[164px] w-[312px] rounded-xl relative" style="${ssrRenderStyle($props.img)}"><div class="bg-secondary absolute -right-5 top-1/3 h-14 w-14 flex items-center justify-center text-3xl font-extrabold italic rounded-md">${ssrInterpolate($props.number)}</div></div><div class="w-1/2 flex flex-col gap-2 items-start">`);
  _push(ssrRenderComponent(_component_AppTextH5, { class: "text-text" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>${ssrInterpolate($props.desc)}</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: $props.path }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VBtn, {
          variant: "outlined",
          color: "primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Lihat Detail`);
            } else {
              return [
                createTextVNode("Lihat Detail")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VBtn, {
            variant: "outlined",
            color: "primary"
          }, {
            default: withCtx(() => [
              createTextVNode("Lihat Detail")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/image/number.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const makeVCarouselProps = propsFactory({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: IconValue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (value) => Number(value) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...makeVWindowProps({
    continuous: true,
    mandatory: "force",
    showArrows: true
  })
}, "VCarousel");
const VCarousel = genericComponent()({
  name: "VCarousel",
  props: makeVCarouselProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      t
    } = useLocale();
    const windowRef = ref();
    let slideTimeout = -1;
    watch(model, restartTimeout);
    watch(() => props.interval, restartTimeout);
    watch(() => props.cycle, (val) => {
      if (val)
        restartTimeout();
      else
        (void 0).clearTimeout(slideTimeout);
    });
    function startTimeout() {
      if (!props.cycle || !windowRef.value)
        return;
      slideTimeout = (void 0).setTimeout(windowRef.value.group.next, +props.interval > 0 ? +props.interval : 6e3);
    }
    function restartTimeout() {
      (void 0).clearTimeout(slideTimeout);
      (void 0).requestAnimationFrame(startTimeout);
    }
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "ref": windowRef
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-carousel", {
          "v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": props.verticalDelimiters
        }, props.class],
        "style": [{
          height: convertToUnit(props.height)
        }, props.style]
      }), {
        default: slots.default,
        additional: (_ref2) => {
          let {
            group
          } = _ref2;
          return createVNode(Fragment, null, [!props.hideDelimiters && createVNode("div", {
            "class": "v-carousel__controls",
            "style": {
              left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
              right: props.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [group.items.value.length > 0 && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                color: props.color,
                icon: props.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            "scoped": true
          }, {
            default: () => [group.items.value.map((item, index2) => {
              const props2 = {
                id: `carousel-item-${item.id}`,
                "aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index2 + 1, group.items.value.length),
                class: ["v-carousel__controls__item", group.isSelected(item.id) && "v-btn--active"],
                onClick: () => group.select(item.id, true)
              };
              return slots.item ? slots.item({
                props: props2,
                item
              }) : createVNode(VBtn, mergeProps(item, props2), null);
            })]
          })]), props.progress && createVNode(VProgressLinear, {
            "class": "v-carousel__progress",
            "color": typeof props.progress === "string" ? props.progress : void 0,
            "modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
          }, null)]);
        },
        prev: slots.prev,
        next: slots.next
      });
    });
    return {};
  }
});
const makeVCarouselItemProps = propsFactory({
  ...makeVImgProps(),
  ...makeVWindowItemProps()
}, "VCarouselItem");
const VCarouselItem = genericComponent()({
  name: "VCarouselItem",
  inheritAttrs: false,
  props: makeVCarouselItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => {
      const imgProps = VImg.filterProps(props);
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "class": ["v-carousel-item", props.class]
      }, windowItemProps), {
        default: () => [createVNode(VImg, mergeProps(attrs, imgProps), slots)]
      });
    });
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        id: "1",
        image: "background-image: url('/img/home/lv.jpeg')",
        title: "Transportation",
        desc: "Jejak Hasanah menyediakan Bus, Minibus, LV, dan SUV dengan spesifikasi yang dapat disesuaikan serta layanan premium untuk berbagai kebutuhan transportasi perusahaan.",
        path: "/transportation"
      },
      {
        id: "2",
        image: "background-image: url('/img/home/vtrn.png')",
        title: "Advertising",
        desc: "Jejak Hasanah menyediakan layanan advertising, seperti billboard, videotron, mini display, dan café branding, dengan solusi yang efektif dan inovatif.",
        path: "/advertising"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextH2 = __nuxt_component_1$3;
      const _component_AppImageNumber = __nuxt_component_1;
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              align: "center",
              justify: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "5",
                    xl: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCarousel, {
                          "show-arrows": "hover",
                          class: "rounded-xl",
                          "hide-delimiters": "",
                          cycle: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(5, (item, index2) => {
                                _push5(ssrRenderComponent(VCarouselItem, {
                                  src: `/img/home/corousel/${index2 + 1}.png`,
                                  cover: ""
                                }, null, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(5, (item, index2) => {
                                  return createVNode(VCarouselItem, {
                                    src: `/img/home/corousel/${index2 + 1}.png`,
                                    cover: ""
                                  }, null, 8, ["src"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCarousel, {
                            "show-arrows": "hover",
                            class: "rounded-xl",
                            "hide-delimiters": "",
                            cycle: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(5, (item, index2) => {
                                return createVNode(VCarouselItem, {
                                  src: `/img/home/corousel/${index2 + 1}.png`,
                                  cover: ""
                                }, null, 8, ["src"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                align: "start"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}>Our Services</p>`);
                                    _push6(ssrRenderComponent(_component_AppTextH2, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`We Provide Innovation`);
                                        } else {
                                          return [
                                            createTextVNode("We Provide Innovation")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("p", null, "Our Services"),
                                      createVNode(_component_AppTextH2, null, {
                                        default: withCtx(() => [
                                          createTextVNode("We Provide Innovation")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(services, (service) => {
                                _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_AppImageNumber, {
                                        img: service.image,
                                        title: service.title,
                                        number: service.id,
                                        desc: service.desc,
                                        path: service.path
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_AppImageNumber, {
                                          img: service.image,
                                          title: service.title,
                                          number: service.id,
                                          desc: service.desc,
                                          path: service.path
                                        }, null, 8, ["img", "title", "number", "desc", "path"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  align: "start"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, "Our Services"),
                                    createVNode(_component_AppTextH2, null, {
                                      default: withCtx(() => [
                                        createTextVNode("We Provide Innovation")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                                  return createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppImageNumber, {
                                        img: service.image,
                                        title: service.title,
                                        number: service.id,
                                        desc: service.desc,
                                        path: service.path
                                      }, null, 8, ["img", "title", "number", "desc", "path"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                align: "start"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", null, "Our Services"),
                                  createVNode(_component_AppTextH2, null, {
                                    default: withCtx(() => [
                                      createTextVNode("We Provide Innovation")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                                return createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppImageNumber, {
                                      img: service.image,
                                      title: service.title,
                                      number: service.id,
                                      desc: service.desc,
                                      path: service.path
                                    }, null, 8, ["img", "title", "number", "desc", "path"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "5",
                      xl: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCarousel, {
                          "show-arrows": "hover",
                          class: "rounded-xl",
                          "hide-delimiters": "",
                          cycle: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (item, index2) => {
                              return createVNode(VCarouselItem, {
                                src: `/img/home/corousel/${index2 + 1}.png`,
                                cover: ""
                              }, null, 8, ["src"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              align: "start"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "Our Services"),
                                createVNode(_component_AppTextH2, null, {
                                  default: withCtx(() => [
                                    createTextVNode("We Provide Innovation")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                              return createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppImageNumber, {
                                    img: service.image,
                                    title: service.title,
                                    number: service.id,
                                    desc: service.desc,
                                    path: service.path
                                  }, null, 8, ["img", "title", "number", "desc", "path"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                align: "center",
                justify: "end"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "5",
                    xl: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCarousel, {
                        "show-arrows": "hover",
                        class: "rounded-xl",
                        "hide-delimiters": "",
                        cycle: ""
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (item, index2) => {
                            return createVNode(VCarouselItem, {
                              src: `/img/home/corousel/${index2 + 1}.png`,
                              cover: ""
                            }, null, 8, ["src"]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VRow, { justify: "center" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            align: "start"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, "Our Services"),
                              createVNode(_component_AppTextH2, null, {
                                default: withCtx(() => [
                                  createTextVNode("We Provide Innovation")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                            return createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_AppImageNumber, {
                                  img: service.image,
                                  title: service.title,
                                  number: service.id,
                                  desc: service.desc,
                                  path: service.path
                                }, null, 8, ["img", "title", "number", "desc", "path"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      })
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
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/view/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "portofolioShort",
  __ssrInlineRender: true,
  props: {
    img: {
      type: String,
      default: "background-image: url('/img/home/homeBanner.png')"
    },
    title: {
      type: String,
      default: "Site Palembang (Muara Enim)"
    },
    desc: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt"
    }
  },
  setup(__props) {
    const props = __props;
    const img = computed(() => props.img);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextH2 = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-cover bg-center h-5/6 w-5/6",
        style: unref(img)
      }, _attrs))}><div class="portfolio-card h-full"><div class="h-full flex flex-col justify-center w-7/12 p-10">`);
      _push(ssrRenderComponent(_component_AppTextH2, { class: "text-white font-semibold" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-white">${ssrInterpolate(__props.desc)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/card/portofolioShort.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_AppTextH2 = __nuxt_component_1$3;
  const _component_NuxtLink = __nuxt_component_2$2;
  const _component_AppCardPortofolioShort = __nuxt_component_2;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_AppTextH2, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Let&#39;s See what we&#39;ve been working on`);
            } else {
              return [
                createTextVNode("Let's See what we've been working on")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p class="leading-tight"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p></div>`);
        _push2(ssrRenderComponent(VCarousel, {
          "show-arrows": "hover",
          "hide-delimiters": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(5, (item, index2) => {
                _push3(ssrRenderComponent(VCarouselItem, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_NuxtLink, {
                        to: "/transportation",
                        class: "flex fill-height justify-center align-center"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_AppCardPortofolioShort, { class: "hover:scale-105 transition-all" }, null, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_AppCardPortofolioShort, { class: "hover:scale-105 transition-all" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          to: "/transportation",
                          class: "flex fill-height justify-center align-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AppCardPortofolioShort, { class: "hover:scale-105 transition-all" })
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(5, (item, index2) => {
                  return createVNode(VCarouselItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/transportation",
                        class: "flex fill-height justify-center align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AppCardPortofolioShort, { class: "hover:scale-105 transition-all" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  });
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "text-center" }, [
            createVNode(_component_AppTextH2, null, {
              default: withCtx(() => [
                createTextVNode("Let's See what we've been working on")
              ]),
              _: 1
            }),
            createVNode("p", { class: "leading-tight" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
          ]),
          createVNode(VCarousel, {
            "show-arrows": "hover",
            "hide-delimiters": ""
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Fragment, null, renderList(5, (item, index2) => {
                return createVNode(VCarouselItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: "/transportation",
                      class: "flex fill-height justify-center align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppCardPortofolioShort, { class: "hover:scale-105 transition-all" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                });
              }), 64))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/view/Portfolio.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const point = sellingPointMock.jh;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingViewHero = __nuxt_component_0;
      const _component_AppSectionBackgroundLogo = __nuxt_component_1$1;
      const _component_LandingViewServices = _sfc_main$4;
      const _component_AppSectionSellingPoint = __nuxt_component_5;
      const _component_LandingViewPortfolio = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LandingViewHero, null, null, _parent));
      _push(ssrRenderComponent(_component_AppSectionBackgroundLogo, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingViewServices, { class: "my-14" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingViewServices, { class: "my-14" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppSectionSellingPoint, {
        title: "Keunggulan Jejak Hasanah",
        subtitle: "Jejak Hasanah Menawarkan Inovasi dan Profesionalisme kepada Mitra",
        class: "my-24",
        items: unref(point)
      }, null, _parent));
      _push(ssrRenderComponent(_component_LandingViewPortfolio, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/view/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingView = _sfc_main$1;
  _push(ssrRenderComponent(_component_LandingView, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BgOHrp6E.js.map
