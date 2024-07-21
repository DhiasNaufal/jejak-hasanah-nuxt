import { _ as __nuxt_component_0$1 } from "./image-Em7T-gXM.js";
import { V as VRow, a as VCol, _ as __nuxt_component_1, X as __nuxt_component_0, c as propsFactory, I as IconValue, m as makeComponentProps, q as makeRoundedProps, U as makeSizeProps, k as makeElevationProps, g as genericComponent, W as useSize, Q as useBackgroundColor, E as useRounded, A as useElevation, u as useRender, f as VIcon, h as VDefaultsProvider, j as makeDimensionProps, d as makeTagProps, z as useDimension, T as convertToUnit, ae as only, e as makeDensityProps, s as makeThemeProps, v as provideTheme, y as useDensity, K as useRtl, p as provideDefaults, b as __nuxt_component_0$2 } from "../server.mjs";
import { V as VContainer, _ as __nuxt_component_2 } from "./transition-Cm8Ae_8P.js";
import { defineComponent, ref, computed, unref, isRef, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext, toRef, shallowRef, watch } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { V as VTabs, a as VTab } from "./VTabs-NNLNFKoc.js";
import { V as VWindow, b as VWindowItem } from "./VWindowItem-A1MwnHoD.js";
import { _ as __nuxt_component_1$1 } from "./h5-B8FBdISM.js";
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
import "./scopeId-ChrUZLWz.js";
import "./ssrBoot-DuXNnEEs.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref();
    const options = [
      {
        text: "Tentang Perusahaan",
        value: "tentang"
      },
      {
        text: "Struktur Layanan",
        value: "struktur"
      },
      {
        text: "Sertifikasi",
        value: "sertifikasi"
      }
    ];
    const items = [
      {
        value: "tentang",
        title: "Tentang Perusahaan",
        desc: "PT Jejak Hasanah merupakan perusahaan yang memberikan layanan transportasi dan periklanan. Didirikan pada tahun XXXX, PT Jejak Hasanah telah bekerja sama dengan puluhan perusahaan daerah hingga nasional.",
        img: "img/logo/JH-Logo.svg"
      },
      {
        value: "struktur",
        title: "Struktur Layanan",
        desc: "PT Jejak Hasanah memberikan layanan jasa transportasi seperti transportasi ringan hingga transportasi berat. Selain itu PT Jejak Hasanah juga menyediakan layanan periklanan seperti Billboard, Videotron, dan Branding ads.",
        img: "img/logo/JH-Logo.svg"
      },
      {
        value: "sertifikasi",
        title: "Sertifikasi",
        desc: "PT Jejak Hasanah telah tersertifikasi Risk-Based Business yang diterbitkan oleh pemerintah. Dengan sertifikasi ini, Jejak Hasanah selalu mendedikasikan dalam menjamin standar kualitas dan keselamatan para pekerja serta secara aktif berkontribusi dalam kegiatan sosial.",
        img: "img/logo/JH-Logo.svg"
      }
    ];
    const tabs = computed(() => options);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextH2 = __nuxt_component_1;
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
        color: "secondary",
        "align-tabs": "center",
        density: "compact",
        "selected-class": "font-weight-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(tabs), (item, index) => {
              _push2(ssrRenderComponent(VTab, {
                key: index,
                value: item.value,
                class: "text-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.text)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.text), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(tabs), (item, index) => {
                return openBlock(), createBlock(VTab, {
                  key: index,
                  value: item.value,
                  class: "text-none"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.text), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (item) => {
              _push2(ssrRenderComponent(VWindowItem, {
                value: item.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VContainer, { class: "bg-light-gray rounded-lg pa-16" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, { align: "start" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_AppTextH2, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<p${_scopeId5}>${ssrInterpolate(item.desc)}</p>`);
                                    } else {
                                      return [
                                        createVNode(_component_AppTextH2, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("p", null, toDisplayString(item.desc), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, { align: "center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_NuxtImg, {
                                        sizes: "100vw sm:50vw md:400px",
                                        src: item.img
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_NuxtImg, {
                                          sizes: "100vw sm:50vw md:400px",
                                          src: item.img
                                        }, null, 8, ["src"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, { align: "start" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppTextH2, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("p", null, toDisplayString(item.desc), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, { align: "center" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtImg, {
                                        sizes: "100vw sm:50vw md:400px",
                                        src: item.img
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { align: "start" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppTextH2, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("p", null, toDisplayString(item.desc), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, { align: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtImg, {
                                      sizes: "100vw sm:50vw md:400px",
                                      src: item.img
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VContainer, { class: "bg-light-gray rounded-lg pa-16" }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { align: "start" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppTextH2, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("p", null, toDisplayString(item.desc), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, { align: "center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtImg, {
                                    sizes: "100vw sm:50vw md:400px",
                                    src: item.img
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                return createVNode(VWindowItem, {
                  value: item.value
                }, {
                  default: withCtx(() => [
                    createVNode(VContainer, { class: "bg-light-gray rounded-lg pa-16" }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { align: "start" }, {
                              default: withCtx(() => [
                                createVNode(_component_AppTextH2, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("p", null, toDisplayString(item.desc), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCol, { align: "center" }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtImg, {
                                  sizes: "100vw sm:50vw md:400px",
                                  src: item.img
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tentang/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const sejarahMock = {
  sejarah: [
    {
      year: 2008,
      title: "Pendirian perusahaan",
      desc: "Perusahaan didirikan dengan visi awal untuk menjadi penyedia layanan unggulan di bidang wisata dan advertising, berkomitmen untuk menawarkan solusi kreatif dan inovatif kepada klien."
    },
    {
      year: 2009,
      title: "Kontrak Pertama",
      desc: "Kami berhasil mengamankan kontrak pertama kami dengan Telkomsel, menyediakan layanan advertising dalam bentuk proyek Billboard. Ini menandai langkah awal dalam perjalanan kami menuju kesuksesan di industri advertising."
    },
    {
      year: 2009,
      title: "Ekspansi Bidang Usaha",
      desc: "Pada tahun yang sama, kami memperluas layanan kami ke pulau Sebuku bekerja sama dengan PT Pama Persada dalam penyediaan layanan transportasi. Ini merupakan langkah awal yang penting dalam memperkuat kehadiran kami di berbagai lokasi strategis."
    },
    {
      year: 2015,
      title: "Diversifikasi Klien Advertising",
      desc: "Kami mendapatkan kepercayaan untuk menjalin kontrak dengan mitra baru Djarum dan Classmild untuk layanan advertising."
    },
    {
      year: 2021,
      title: "Pencapaian dan Penghargaan",
      desc: "Kami menerima penghargaan bergengsi dari PT Kalimantan Prima Persada untuk Best SHE Performance, yang mengakui dedikasi kami terhadap kualitas dan keselamatan dalam operasional kami."
    }
  ]
};
const makeVTimelineDividerProps = propsFactory({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: IconValue,
  iconColor: String,
  lineColor: String,
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeElevationProps()
}, "VTimelineDivider");
const VTimelineDivider = genericComponent()({
  name: "VTimelineDivider",
  props: makeVTimelineDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props, "v-timeline-divider__dot");
    const {
      backgroundColorStyles,
      backgroundColorClasses
    } = useBackgroundColor(toRef(props, "dotColor"));
    const {
      roundedClasses
    } = useRounded(props, "v-timeline-divider__dot");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      backgroundColorClasses: lineColorClasses,
      backgroundColorStyles: lineColorStyles
    } = useBackgroundColor(toRef(props, "lineColor"));
    useRender(() => createVNode("div", {
      "class": ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": props.fillDot
      }, props.class],
      "style": props.style
    }, [createVNode("div", {
      "class": ["v-timeline-divider__before", lineColorClasses.value],
      "style": lineColorStyles.value
    }, null), !props.hideDot && createVNode("div", {
      "key": "dot",
      "class": ["v-timeline-divider__dot", elevationClasses.value, roundedClasses.value, sizeClasses.value],
      "style": sizeStyles.value
    }, [createVNode("div", {
      "class": ["v-timeline-divider__inner-dot", backgroundColorClasses.value, roundedClasses.value],
      "style": backgroundColorStyles.value
    }, [!slots.default ? createVNode(VIcon, {
      "key": "icon",
      "color": props.iconColor,
      "icon": props.icon,
      "size": props.size
    }, null) : createVNode(VDefaultsProvider, {
      "key": "icon-defaults",
      "disabled": !props.icon,
      "defaults": {
        VIcon: {
          color: props.iconColor,
          icon: props.icon,
          size: props.size
        }
      }
    }, slots.default)])]), createVNode("div", {
      "class": ["v-timeline-divider__after", lineColorClasses.value],
      "style": lineColorStyles.value
    }, null)]));
    return {};
  }
});
const makeVTimelineItemProps = propsFactory({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: IconValue,
  iconColor: String,
  lineInset: [Number, String],
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps()
}, "VTimelineItem");
const VTimelineItem = genericComponent()({
  name: "VTimelineItem",
  props: makeVTimelineItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const dotSize = shallowRef(0);
    const dotRef = ref();
    watch(dotRef, (newValue) => {
      var _a;
      if (!newValue)
        return;
      dotSize.value = ((_a = newValue.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a.getBoundingClientRect().width) ?? 0;
    }, {
      flush: "post"
    });
    useRender(() => {
      var _a, _b;
      return createVNode("div", {
        "class": ["v-timeline-item", {
          "v-timeline-item--fill-dot": props.fillDot
        }, props.class],
        "style": [{
          "--v-timeline-dot-size": convertToUnit(dotSize.value),
          "--v-timeline-line-inset": props.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${convertToUnit(props.lineInset)})` : convertToUnit(0)
        }, props.style]
      }, [createVNode("div", {
        "class": "v-timeline-item__body",
        "style": dimensionStyles.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), createVNode(VTimelineDivider, {
        "ref": dotRef,
        "hideDot": props.hideDot,
        "icon": props.icon,
        "iconColor": props.iconColor,
        "size": props.size,
        "elevation": props.elevation,
        "dotColor": props.dotColor,
        "fillDot": props.fillDot,
        "rounded": props.rounded
      }, {
        default: slots.icon
      }), props.density !== "compact" && createVNode("div", {
        "class": "v-timeline-item__opposite"
      }, [!props.hideOpposite && ((_b = slots.opposite) == null ? void 0 : _b.call(slots))])]);
    });
    return {};
  }
});
const makeVTimelineProps = propsFactory({
  align: {
    type: String,
    default: "center",
    validator: (v) => ["center", "start"].includes(v)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (v) => ["vertical", "horizontal"].includes(v)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (v) => ["auto", "center"].includes(v)
  },
  side: {
    type: String,
    validator: (v) => v == null || ["start", "end"].includes(v)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (v) => ["start", "end", "both"].includes(v)
  },
  ...only(makeVTimelineItemProps({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTimeline");
const VTimeline = genericComponent()({
  name: "VTimeline",
  props: makeVTimelineProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      rtlClasses
    } = useRtl();
    provideDefaults({
      VTimelineDivider: {
        lineColor: toRef(props, "lineColor")
      },
      VTimelineItem: {
        density: toRef(props, "density"),
        dotColor: toRef(props, "dotColor"),
        fillDot: toRef(props, "fillDot"),
        hideOpposite: toRef(props, "hideOpposite"),
        iconColor: toRef(props, "iconColor"),
        lineColor: toRef(props, "lineColor"),
        lineInset: toRef(props, "lineInset"),
        size: toRef(props, "size")
      }
    });
    const sideClasses = computed(() => {
      const side = props.side ? props.side : props.density !== "default" ? "end" : null;
      return side && `v-timeline--side-${side}`;
    });
    const truncateClasses = computed(() => {
      const classes = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (props.truncateLine) {
        case "both":
          return classes;
        case "start":
          return classes[0];
        case "end":
          return classes[1];
        default:
          return null;
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-timeline", `v-timeline--${props.direction}`, `v-timeline--align-${props.align}`, `v-timeline--justify-${props.justify}`, truncateClasses.value, {
        "v-timeline--inset-line": !!props.lineInset
      }, themeClasses.value, densityClasses.value, sideClasses.value, rtlClasses.value, props.class],
      "style": [{
        "--v-timeline-line-thickness": convertToUnit(props.lineThickness)
      }, props.style]
    }, slots));
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sejarah = sejarahMock.sejarah;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeroImage = __nuxt_component_0$1;
      const _component_AppTextH2 = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_AppButtonPrimary = __nuxt_component_0$2;
      const _component_TentangTabs = _sfc_main$1;
      const _component_AppTextH5 = __nuxt_component_1$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeroImage, { class: "h-[60vh]" }, {
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
                                    _push6(`Layanan Kendaraan`);
                                  } else {
                                    return [
                                      createTextVNode("Layanan Kendaraan")
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
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: "#layanan" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppButtonPrimary, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Pelajari lebih lanjut`);
                                        } else {
                                          return [
                                            createTextVNode("Pelajari lebih lanjut")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppTextH2, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Layanan Kendaraan")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AppTextH2, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Jejak Hasanah")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NuxtLink, { to: "#layanan" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppButtonPrimary, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Pelajari lebih lanjut")
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
                                  createTextVNode("Layanan Kendaraan")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AppTextH2, { class: "text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode("Jejak Hasanah")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_NuxtLink, { to: "#layanan" }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppButtonPrimary, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Pelajari lebih lanjut")
                                    ]),
                                    _: 1
                                  })
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
                                createTextVNode("Layanan Kendaraan")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AppTextH2, { class: "text-white" }, {
                              default: withCtx(() => [
                                createTextVNode("Jejak Hasanah")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_NuxtLink, { to: "#layanan" }, {
                              default: withCtx(() => [
                                createVNode(_component_AppButtonPrimary, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pelajari lebih lanjut")
                                  ]),
                                  _: 1
                                })
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
                              createTextVNode("Layanan Kendaraan")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AppTextH2, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("Jejak Hasanah")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtLink, { to: "#layanan" }, {
                            default: withCtx(() => [
                              createVNode(_component_AppButtonPrimary, null, {
                                default: withCtx(() => [
                                  createTextVNode("Pelajari lebih lanjut")
                                ]),
                                _: 1
                              })
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
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { align: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TentangTabs, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TentangTabs)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { align: "center" }, {
                      default: withCtx(() => [
                        createVNode(_component_TentangTabs)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              justify: "center",
              class: "mt-4 mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    align: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextH2, { id: "layanan" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Sejarah Perusahaan`);
                            } else {
                              return [
                                createTextVNode("Sejarah Perusahaan")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextH2, { id: "layanan" }, {
                            default: withCtx(() => [
                              createTextVNode("Sejarah Perusahaan")
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
                        _push4(`<p class="text-center"${_scopeId3}> Perjalanan kami dimotivasi untuk menjadi perusahaan yang xxx &amp; xxxx </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-center" }, " Perjalanan kami dimotivasi untuk menjadi perusahaan yang xxx & xxxx ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppTextH2, { id: "layanan" }, {
                          default: withCtx(() => [
                            createTextVNode("Sejarah Perusahaan")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-center" }, " Perjalanan kami dimotivasi untuk menjadi perusahaan yang xxx & xxxx ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTimeline, { align: "start" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(sejarah), (i, index) => {
                    _push3(ssrRenderComponent(VTimelineItem, {
                      key: index,
                      "dot-color": "primary",
                      size: "small"
                    }, {
                      opposite: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Opposite content `);
                        } else {
                          return [
                            createTextVNode(" Opposite content ")
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([
                            "flex",
                            "flex-col",
                            index % 2 === 0 ? "items-start" : "items-end"
                          ])}"${_scopeId3}><div class="text-4xl font-bold"${_scopeId3}>${ssrInterpolate(i.year)}</div>`);
                          _push4(ssrRenderComponent(_component_AppTextH5, { class: "text-primary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(i.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(i.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<p class="${ssrRenderClass([index % 2 === 0 ? "text-start" : "text-end"])}"${_scopeId3}>${ssrInterpolate(i.desc)}</p></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [
                                "flex",
                                "flex-col",
                                index % 2 === 0 ? "items-start" : "items-end"
                              ]
                            }, [
                              createVNode("div", { class: "text-4xl font-bold" }, toDisplayString(i.year), 1),
                              createVNode(_component_AppTextH5, { class: "text-primary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(i.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("p", {
                                class: [index % 2 === 0 ? "text-start" : "text-end"]
                              }, toDisplayString(i.desc), 3)
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sejarah), (i, index) => {
                      return openBlock(), createBlock(VTimelineItem, {
                        key: index,
                        "dot-color": "primary",
                        size: "small"
                      }, {
                        opposite: withCtx(() => [
                          createTextVNode(" Opposite content ")
                        ]),
                        default: withCtx(() => [
                          createVNode("div", {
                            class: [
                              "flex",
                              "flex-col",
                              index % 2 === 0 ? "items-start" : "items-end"
                            ]
                          }, [
                            createVNode("div", { class: "text-4xl font-bold" }, toDisplayString(i.year), 1),
                            createVNode(_component_AppTextH5, { class: "text-primary" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(i.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("p", {
                              class: [index % 2 === 0 ? "text-start" : "text-end"]
                            }, toDisplayString(i.desc), 3)
                          ], 2)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              justify: "center",
              class: "mt-4 mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    align: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppTextH2, { id: "layanan" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tetap Teguh dalam Membangun Negeri...`);
                            } else {
                              return [
                                createTextVNode("Tetap Teguh dalam Membangun Negeri...")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppTextH2, { id: "layanan" }, {
                            default: withCtx(() => [
                              createTextVNode("Tetap Teguh dalam Membangun Negeri...")
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
                        _push4(`<p class="text-center"${_scopeId3}> Jejak Hasanah akan selalu berkarya dalam pembangunan Indonesia dengan mengedepankan 3 pilar “Amanah”, “Hasanah”, dan “Alhamdulillah” demi Indonesia Maju. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-center" }, " Jejak Hasanah akan selalu berkarya dalam pembangunan Indonesia dengan mengedepankan 3 pilar “Amanah”, “Hasanah”, dan “Alhamdulillah” demi Indonesia Maju. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppTextH2, { id: "layanan" }, {
                          default: withCtx(() => [
                            createTextVNode("Tetap Teguh dalam Membangun Negeri...")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-center" }, " Jejak Hasanah akan selalu berkarya dalam pembangunan Indonesia dengan mengedepankan 3 pilar “Amanah”, “Hasanah”, dan “Alhamdulillah” demi Indonesia Maju. ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(_component_TentangTabs)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, {
                justify: "center",
                class: "mt-4 mb-4"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    align: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextH2, { id: "layanan" }, {
                        default: withCtx(() => [
                          createTextVNode("Sejarah Perusahaan")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-center" }, " Perjalanan kami dimotivasi untuk menjadi perusahaan yang xxx & xxxx ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VTimeline, { align: "start" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sejarah), (i, index) => {
                    return openBlock(), createBlock(VTimelineItem, {
                      key: index,
                      "dot-color": "primary",
                      size: "small"
                    }, {
                      opposite: withCtx(() => [
                        createTextVNode(" Opposite content ")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", {
                          class: [
                            "flex",
                            "flex-col",
                            index % 2 === 0 ? "items-start" : "items-end"
                          ]
                        }, [
                          createVNode("div", { class: "text-4xl font-bold" }, toDisplayString(i.year), 1),
                          createVNode(_component_AppTextH5, { class: "text-primary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(i.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("p", {
                            class: [index % 2 === 0 ? "text-start" : "text-end"]
                          }, toDisplayString(i.desc), 3)
                        ], 2)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(VRow, {
                justify: "center",
                class: "mt-4 mb-4"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    align: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppTextH2, { id: "layanan" }, {
                        default: withCtx(() => [
                          createTextVNode("Tetap Teguh dalam Membangun Negeri...")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-center" }, " Jejak Hasanah akan selalu berkarya dalam pembangunan Indonesia dengan mengedepankan 3 pilar “Amanah”, “Hasanah”, dan “Alhamdulillah” demi Indonesia Maju. ")
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tentang/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DQSSNqjW.js.map
