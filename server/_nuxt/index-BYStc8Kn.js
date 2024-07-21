import { _ as __nuxt_component_0 } from "./image-Em7T-gXM.js";
import { V as VRow, J as _export_sfc, a as VCol, _ as __nuxt_component_1, b as __nuxt_component_0$1 } from "../server.mjs";
import { V as VContainer, _ as __nuxt_component_2 } from "./transition-Cm8Ae_8P.js";
import { _ as _sfc_main$4 } from "./service-CmEsVRv-.js";
import { defineComponent, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, computed, isRef, createTextVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { V as VTabs, a as VTab } from "./VTabs-NNLNFKoc.js";
import { V as VWindow, b as VWindowItem } from "./VWindowItem-A1MwnHoD.js";
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
import "./scopeId-ChrUZLWz.js";
import "./ssrBoot-DuXNnEEs.js";
const portofolioMock = {
  transportasi: [
    {
      title: "Site Kalimantan Selatan",
      desc1: "Jejak Hasanah mendukung operasi perusahaan PT Kalimantan Prima Persada (KPP) dan PT PAMAPERSADA Nusantara (PAMA) di tambang batu bara Kalimantan Selatan (Satui) dengan menyediakan armada Bus dan Light Vehicle untuk kebutuhan antar jemput karyawan (AJK). Dengan komitmen terhadap keunggulan, kami memastikan operasional klien berjalan optimal dan kenyamanan serta keselamatan karyawan terjamin.",
      desc2: "Di Kalimantan Selatan, tantangan utama adalah jarak yang cukup jauh antara site, yang menyulitkan penanganan perbaikan mendadak. Untuk mengatasi hal ini, kami menyediakan mobil operasional bagi tim mekanik dan penanggung jawab operasional (PJO), sehingga durasi perjalanan untuk perbaikan dapat dipersingkat. Pendekatan ini telah menghasilkan penghargaan Best SHE (Safety Health Environment) Performance untuk kami."
    },
    {
      title: "Site Palembang (Muara Enim)",
      desc1: "Di Palembang, Jejak Hasanah bekerja sama dengan PAMA PERSADA dalam menyediakan layanan antar jemput karyawan menggunakan armada Bus di tambang batu bara. Kami berkomitmen memberikan performa terbaik untuk mendukung operasional klien dan memastikan kenyamanan karyawan selama perjalanan",
      desc2: "Medan yang dilalui kendaraan di Palembang cukup jauh dan terjal, sehingga seringkali menyebabkan kerusakan pada kendaraan. Kami meningkatkan frekuensi Preventive Maintenance (PM) Check untuk setiap kendaraan guna menjaga kondisi tetap optimal. Pada tahun 2023, upaya ini berbuah manis dengan tercapainya Physical Availability (PA) Driver sebesar 100%, mencerminkan keandalan dan komitmen kami dalam memberikan layanan terbaik."
    },
    {
      title: "Site Sulawesi (Konawe Utara)",
      desc1: "Di tambang nikel Konawe Utara, Sulawesi, Jejak Hasanah mendukung operasi perusahaan KPP dengan menyediakan armada Bus dan Light Vehicle (Hilux) untuk kebutuhan antar jemput karyawan. Kami berusaha memberikan performa optimal untuk mendukung operasional klien serta memastikan kenyamanan dan keamanan karyawan selama perjalanan.",
      desc2: "Medan tambang nikel yang terdiri dari tanah merah menimbulkan tantangan khusus karena tanah yang menempel dapat menyebabkan kerusakan spare part kendaraan. Kami mengatasi masalah ini dengan lebih sering mencuci kendaraan untuk mencegah penumpukan kotoran yang merusak spare part. Meskipun site ini masih baru dan belum mencatat pencapaian khusus, kami tetap berkomitmen memberikan yang terbaik dan mencapai kesuksesan di masa mendatang."
    }
  ],
  advertising: {
    title: "Jejak Hasanah dengan bangga menyediakan layanan advertising yang mencakup billboard, videotron, mini display, dan produk branding. Setiap layanan dirancang untuk memberikan solusi periklanan yang efektif dan inovatif kepada klien dari berbagai sektor industri.",
    variant: [
      {
        title: "Proyek Billboard",
        desc: "Jejak Hasanah telah memasang billboard di berbagai lokasi strategis di daerah Priangan Timur, dengan rencana ekspansi ke daerah lainnya. Desain panel billboard yang sedikit melengkung memberikan visualisasi konten yang lebih baik, memastikan bahwa pesan iklan klien seperti Telkomsel, Classmild (rokok), dan Djarum (rokok) dapat menjangkau audiens dengan lebih efektif. Meskipun belum ada pencapaian khusus yang dicatat sejauh ini, kami terus berupaya untuk meningkatkan dampak visual dan jangkauan iklan melalui teknologi dan lokasi strategis."
      },
      {
        title: "Proyek Videotron",
        desc: "Videotron kami telah menarik perhatian klien seperti Djarum. Videotron ini dirancang untuk menampilkan konten dinamis seperti video, animasi, dan gambar bergerak dengan resolusi tinggi dan kecerahan optimal, memastikan bahwa iklan terlihat jelas bahkan di siang hari. Teknologi canggih yang digunakan dalam videotron memungkinkan pembaruan konten secara real-time, memberikan fleksibilitas dan efektivitas yang lebih besar bagi klien. Meskipun belum ada pencapaian khusus, kami berkomitmen untuk memberikan dampak visual yang kuat dan menarik melalui inovasi teknologi."
      },
      {
        title: "Proyek Mini Display",
        desc: "Mini display kami dapat ditempatkan secara ideal baik untuk penggunaan di dalam ruangan atau di area yang lebih terbatas. Dua mini display telah ditempatkan di tempat futsal dan daerah pemukiman, bekerja sama dengan toko lokal untuk menampilkan nama toko di mini display. Klien seperti Djarum telah memanfaatkan layanan ini untuk meningkatkan visibilitas dan keterlibatan pelanggan. Mini display ini menawarkan solusi periklanan yang fleksibel dan efektif di ruang yang lebih kecil."
      },
      {
        title: "Proyek Produk Branding",
        desc: "Layanan produk branding dari Jejak Hasanah dirancang untuk membantu brand besar seperti Djarum dalam membranding kafe, restoran, sarana olahraga, dan tempat hiburan dengan produk mereka. Saat ini, kami bekerja sama dengan Djarum dan telah merambah ke berbagai sektor usaha di daerah Priangan Timur. Proyek ini bertujuan untuk menciptakan identitas visual yang kuat dan menarik bagi merek-merek besar, memastikan bahwa pesan mereka sampai ke audiens dengan cara yang paling efektif dan menarik."
      }
    ]
  }
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "transportation",
  __ssrInlineRender: true,
  setup(__props) {
    const transportasi = portofolioMock.transportasi;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardService = _sfc_main$4;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex justify-center"${_scopeId}><div class="grid grid-cols-3 gap-x-10 gap-y-10"${_scopeId}><!--[-->`);
            ssrRenderList(unref(transportasi), (porto) => {
              _push2(ssrRenderComponent(_component_AppCardService, {
                title: porto.title,
                path: `/portofolio/${porto.title}`
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex justify-center" }, [
                createVNode("div", { class: "grid grid-cols-3 gap-x-10 gap-y-10" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(transportasi), (porto) => {
                    return openBlock(), createBlock(_component_AppCardService, {
                      title: porto.title,
                      path: `/portofolio/${porto.title}`
                    }, null, 8, ["title", "path"]);
                  }), 256))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portofolio/transportation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "advertising",
  __ssrInlineRender: true,
  setup(__props) {
    const advertising = portofolioMock.advertising.variant;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardService = _sfc_main$4;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex justify-center"${_scopeId}><div class="grid grid-cols-3 gap-x-10 gap-y-10"${_scopeId}><!--[-->`);
            ssrRenderList(unref(advertising), (porto) => {
              _push2(ssrRenderComponent(_component_AppCardService, {
                title: porto.title,
                path: `/portofolio/${porto.title}`
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex justify-center" }, [
                createVNode("div", { class: "grid grid-cols-3 gap-x-10 gap-y-10" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(advertising), (porto) => {
                    return openBlock(), createBlock(_component_AppCardService, {
                      title: porto.title,
                      path: `/portofolio/${porto.title}`
                    }, null, 8, ["title", "path"]);
                  }), 256))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portofolio/advertising.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref();
    const options = [
      {
        text: "Transportation",
        value: "transportation"
      },
      {
        text: "Advertising",
        value: "advertising"
      }
    ];
    const tabs = computed(() => options);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortofolioTransportation = _sfc_main$3;
      const _component_PortofolioAdvertising = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
        color: "secondary",
        "align-tabs": "center",
        "selected-class": "font-weight-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(tabs), (item, index2) => {
              _push2(ssrRenderComponent(VTab, {
                key: index2,
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(tabs), (item, index2) => {
                return openBlock(), createBlock(VTab, {
                  key: index2,
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
            _push2(ssrRenderComponent(VWindowItem, {
              value: "transportation",
              class: "pa-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PortofolioTransportation, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PortofolioTransportation)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, {
              value: "advertising",
              class: "pa-10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PortofolioAdvertising, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PortofolioAdvertising)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VWindowItem, {
                value: "transportation",
                class: "pa-10"
              }, {
                default: withCtx(() => [
                  createVNode(_component_PortofolioTransportation)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, {
                value: "advertising",
                class: "pa-10"
              }, {
                default: withCtx(() => [
                  createVNode(_component_PortofolioAdvertising)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portofolio/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  data() {
    return {
      items: [
        {
          slot: "tentang",
          label: "Tentang perusahaan"
        },
        {
          slot: "struktur",
          label: "Struktur Layanan"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeroImage = __nuxt_component_0;
  const _component_AppTextH2 = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_2;
  const _component_AppButtonPrimary = __nuxt_component_0$1;
  const _component_PortofolioTabs = _sfc_main$1;
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
  _push(ssrRenderComponent(VRow, {
    justify: "center",
    class: "mt-4 mb-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          align: "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_AppTextH2, { id: "layanan" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Jejak Hasanah Project`);
                  } else {
                    return [
                      createTextVNode("Jejak Hasanah Project")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_AppTextH2, { id: "layanan" }, {
                  default: withCtx(() => [
                    createTextVNode("Jejak Hasanah Project")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p class="text-center"${_scopeId2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt </p>`);
            } else {
              return [
                createVNode("p", { class: "text-center" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt ")
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
              createVNode(_component_AppTextH2, { id: "layanan" }, {
                default: withCtx(() => [
                  createTextVNode("Jejak Hasanah Project")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, null, {
            default: withCtx(() => [
              createVNode("p", { class: "text-center" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt ")
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
        _push2(ssrRenderComponent(_component_PortofolioTabs, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PortofolioTabs)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portofolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BYStc8Kn.js.map
