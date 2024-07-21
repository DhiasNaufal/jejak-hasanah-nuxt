import { J as _export_sfc, _ as __nuxt_component_1, V as VRow, a as VCol, b as __nuxt_component_0 } from "../server.mjs";
import { V as VContainer, _ as __nuxt_component_2 } from "./transition-Cm8Ae_8P.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, defineComponent, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VImg } from "./VImg-BLO58hL6.js";
const _sfc_main$1 = {
  props: {
    items: {
      type: Array,
      default: [
        { value: "16+", desc: "Tahun Berdiri" },
        { value: "98%", desc: "Kepuasan Pelanggan" },
        { value: "75+", desc: "Proyek dikerjakan" }
      ]
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppTextH2 = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}><!--[-->`);
  ssrRenderList($props.items, (item, index) => {
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
    _push(`<p>${ssrInterpolate(item.desc)}</p></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/value/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + __buildAssetsURL("ads_port.Dch0gCpc.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "portfolio",
  __ssrInlineRender: true,
  props: {
    imgPath: {
      type: String,
      default: "/img/home/footerBanner.jpeg"
    },
    desc: {
      type: String,
      default: "desc"
    },
    path: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    const items = [
      { value: "50+", desc: "Customer" },
      { value: "98%", desc: "Kepuasan Pelanggan" },
      { value: "75+", desc: "Proyek dikerjakan" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTextH2 = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_AppButtonPrimary = __nuxt_component_0;
      const _component_AppValue = __nuxt_component_3;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "bg-primary rounded-xl my-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppTextH2, { class: "text-white" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Lihat Portofolio Project Kami `);
                                  } else {
                                    return [
                                      createTextVNode(" Lihat Portofolio Project Kami ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppTextH2, { class: "text-white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Lihat Portofolio Project Kami ")
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
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppTextH2, { class: "text-white" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Lihat Portofolio Project Kami ")
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
                  _push3(ssrRenderComponent(VRow, { align: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, { src: _imports_0 }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, { src: _imports_0 })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          align: "start",
                          justify: "between"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}>${ssrInterpolate(__props.desc)}</p>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: __props.path }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppButtonPrimary, { class: "my-4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Lihat Portofolio Kami `);
                                        } else {
                                          return [
                                            createTextVNode(" Lihat Portofolio Kami ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppButtonPrimary, { class: "my-4" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Lihat Portofolio Kami ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AppValue, { items }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", null, toDisplayString(__props.desc), 1),
                                createVNode(_component_NuxtLink, { to: __props.path }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppButtonPrimary, { class: "my-4" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Lihat Portofolio Kami ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["to"]),
                                createVNode(_component_AppValue, { items })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode(VImg, { src: _imports_0 })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            align: "start",
                            justify: "between"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, toDisplayString(__props.desc), 1),
                              createVNode(_component_NuxtLink, { to: __props.path }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppButtonPrimary, { class: "my-4" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Lihat Portofolio Kami ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"]),
                              createVNode(_component_AppValue, { items })
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(_component_AppTextH2, { class: "text-white" }, {
                              default: withCtx(() => [
                                createTextVNode(" Lihat Portofolio Project Kami ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { align: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode(VImg, { src: _imports_0 })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          align: "start",
                          justify: "between"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, toDisplayString(__props.desc), 1),
                            createVNode(_component_NuxtLink, { to: __props.path }, {
                              default: withCtx(() => [
                                createVNode(_component_AppButtonPrimary, { class: "my-4" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Lihat Portofolio Kami ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["to"]),
                            createVNode(_component_AppValue, { items })
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
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppTextH2, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode(" Lihat Portofolio Project Kami ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VImg, { src: _imports_0 })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        align: "start",
                        justify: "between"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, toDisplayString(__props.desc), 1),
                          createVNode(_component_NuxtLink, { to: __props.path }, {
                            default: withCtx(() => [
                              createVNode(_component_AppButtonPrimary, { class: "my-4" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Lihat Portofolio Kami ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["to"]),
                          createVNode(_component_AppValue, { items })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/card/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layananMock = {
  transportation: {
    desc: "Jejak Hasanah bangga menawarkan berbagai jenis kendaraan untuk memenuhi kebutuhan transportasi perusahaan di segala sektor. Kami menyediakan Bus, Minibus, Light Vehicle (LV), dan SUV dengan spesifikasi yang dapat disesuaikan serta layanan premium untuk memastikan kelancaran operasional.",
    variant: [
      {
        name: "Bus",
        desc: "Kami menyediakan bus dengan berbagai ukuran yang dapat disesuaikan sesuai kebutuhan klien. Menggunakan karoseri terbaik pilihan kami, bus ini dirancang untuk memberikan kenyamanan dan keamanan tertinggi dalam layanan antar jemput karyawan (AJK).",
        keunggulan: [
          {
            title: "Karoseri Berkualitas Tinggi",
            desc: "Menggunakan karoseri terbaik untuk memastikan keamanan dan kenyamanan."
          },
          {
            title: "Kenyamanan Penumpang",
            desc: "Seat penumpang dan sistem AC dipilih secara cermat untuk kenyamanan maksimal."
          },
          {
            title: "Fitur Tambahan",
            desc: "Tersedia fitur tambahan sesuai kebutuhan klien seperti rotary, radio, running text, dan lain-lain."
          },
          {
            title: "Modifikasi 4x4 WD",
            desc: "Semua bus dimodifikasi untuk menggunakan 4x4 Wheel Drive, memastikan kemampuan melintasi medan berat dengan lebih baik."
          }
        ]
      },
      {
        name: "Minibus",
        desc: "Minibus kami dirancang dengan kualitas tinggi untuk mendukung fleksibilitas transportasi Anda. Minibus ideal untuk layanan antar jemput karyawan (AJK) dengan rute yang lebih fleksibel. Keunggulan minibus kami termasuk",
        keunggulan: [
          {
            title: "Karoseri Berkualitas Tinggi",
            desc: "Menjamin kenyamanan dan keselamatan penumpang."
          },
          {
            title: "Kenyamanan Maksimal",
            desc: "Seat dan sistem AC dipilih dengan cermat."
          },
          {
            title: "Fleksibilitas Tinggi",
            desc: "Ukuran yang lebih kecil memberikan akses ke area yang lebih sempit."
          },
          {
            title: "Modifikasi 4x4 WD",
            desc: "Semua minibus dilengkapi dengan 4x4 Wheel Drive untuk menghadapi medan yang menantang."
          }
        ]
      },
      {
        name: "Light Vehicle (LV)",
        desc: "Kami menyediakan Mitsubishi Triton dan Hilux yang dirancang untuk operasional karyawan di area site. Kendaraan ini menawarkan",
        keunggulan: [
          {
            title: "Kekuatan dan Keandalan",
            desc: "Tangguh di medan berat pertambangan."
          },
          {
            title: "Kenyamanan",
            desc: "Interior nyaman dengan fitur keamanan canggih."
          },
          {
            title: "Fleksibilitas Operasional",
            desc: "Sesuai untuk berbagai kebutuhan di site."
          },
          {
            title: "Modifikasi 4x4 WD",
            desc: "Semua LV dimodifikasi untuk menggunakan 4x4 Wheel Drive, memastikan performa optimal di medan berat."
          }
        ]
      },
      {
        name: "SUV",
        desc: "Untuk operasional Project Manager, kami menawarkan Pajero dan Fortuner yang memastikan kenyamanan dan performa tinggi. Keunggulan SUV kami",
        keunggulan: [
          {
            title: "Kenyamanan dan Kemewahan",
            desc: "Interior mewah dengan fitur kenyamanan tinggi."
          },
          {
            title: "Performa Optimal",
            desc: "Dirancang untuk performa tinggi di medan berat."
          },
          {
            title: "Keamanan Tinggi",
            desc: "Dilengkapi dengan fitur keamanan canggih."
          },
          {
            title: "Modifikasi 4x4 WD",
            desc: "Semua SUV dimodifikasi untuk menggunakan 4x4 Wheel Drive, memberikan keunggulan tambahan di medan yang berat dan sulit."
          }
        ]
      }
    ],
    pelayanan_tambahan: {
      desc: "Jejak Hasanah menyediakan layanan yang komprehensif untuk memastikan kelancaran operasional Anda",
      varaint: [
        {
          title: "Pemeliharaan Kendaraan",
          desc: "Pengelolaan penuh pemeliharaan kendaraan untuk memastikan performa optimal."
        },
        {
          title: "Driver Profesional",
          desc: "Driver terlatih dan telah lulus seleksi ketat, menjamin keamanan dan kenyamanan perjalanan"
        },
        {
          title: "Pengelolaan Legal dan Permits",
          desc: "Semua urusan legal dan perizinan diurus oleh kami, memberikan kemudahan bagi klien."
        }
      ]
    }
  },
  advertising: {
    desc: "Jejak Hasanah menyediakan layanan advertising yang beragam, meliputi billboard, videotron, mini display, dan café branding. Kami berkomitmen untuk memberikan solusi periklanan yang efektif dan inovatif kepada klien dari berbagai sektor industri.",
    variant: [
      {
        name: "Billboard",
        desc: "Kami menawarkan layanan billboard dengan keunggulan desain panel yang sedikit melengkung untuk visualisasi konten yang lebih baik. Billboard kami ditempatkan di lokasi-lokasi strategis dengan lalu lintas tinggi, memastikan bahwa pesan iklan Anda menjangkau audiens yang lebih luas.",
        keunggulan: [
          {
            title: "Desain Inovatif",
            desc: "Panel billboard yang melengkung memberikan visualisasi yang lebih menarik dan jelas dari berbagai sudut pandang."
          },
          {
            title: "Kualitas Terbaik",
            desc: "Menggunakan material dan teknologi terbaik untuk memastikan durabilitas dan kualitas visual."
          },
          {
            title: "Lokasi Strategis",
            desc: "Billboard ditempatkan di lokasi-lokasi strategis yang memiliki tingkat lalu lintas tinggi."
          }
        ]
      },
      {
        name: "Videotron",
        desc: "Videotron adalah layar elektronik besar yang dapat menampilkan konten dinamis seperti video, animasi, dan gambar bergerak. Layanan videotron kami dirancang untuk memberikan dampak visual yang kuat dan menarik perhatian audiens.",
        keunggulan: [
          {
            title: "Konten Dinamis",
            desc: "Menampilkan video, animasi, dan gambar bergerak untuk menarik perhatian lebih banyak."
          },
          {
            title: "Kualitas Tinggi",
            desc: "Resolusi tinggi dan kecerahan optimal memastikan konten terlihat jelas bahkan di siang hari."
          },
          {
            title: "Interaktivitas",
            desc: "Kemampuan untuk memperbarui konten secara real-time sesuai dengan kebutuhan pemasaran produk Anda."
          }
        ]
      },
      {
        name: "Mini Display",
        desc: "Mini display adalah layar iklan kecil yang ideal untuk penggunaan di dalam ruangan atau area yang lebih terbatas. Layanan ini cocok untuk toko ritel, pusat perbelanjaan, dan tempat-tempat dengan ruang iklan terbatas.",
        keunggulan: [
          {
            title: "Ukuran Kompak",
            desc: "Cocok untuk area yang lebih kecil dan ruang dalam ruangan."
          },
          {
            title: "Fleksibilitas Penempatan",
            desc: "Dapat ditempatkan di berbagai lokasi strategis seperti kasir, etalase, atau pintu masuk."
          },
          {
            title: "Konten Kustom",
            desc: "Menampilkan konten yang dapat disesuaikan sesuai kebutuhan promosi atau informasi pelanggan."
          }
        ]
      },
      {
        name: "Produk Branding",
        desc: "Layanan produk branding kami dirancang untuk membantu brand dalam membranding suatu sektor usaha dengan produk mereka. Kami menawarkan solusi kreatif untuk meningkatkan daya tarik dan visibilitas merek Anda di sektor usaha yang Anda pilih.",
        keunggulan: [
          {
            title: "Desain Interior",
            desc: "Menyediakan konsep desain interior yang mengintegrasikan elemenelemen merek Anda untuk menciptakan pengalaman yang menarik dan kohesif bagi konsumen."
          },
          {
            title: "Signage dan Material Promosi",
            desc: "Pembuatan signage dan material promosi yang menarik untuk memperkuat identitas merek di sektor usaha tersebut."
          },
          {
            title: "Aktivasi Brand",
            desc: "Merancang dan melaksanakan aktivasi brand seperti keperluan event, promo khusus, dan interaksi dengan konsumen untuk meningkatkan keterlibatan dan loyalitas."
          }
        ]
      },
      {
        name: "Keunggulan Layanan Kami",
        desc: "",
        keunggulan: [
          {
            title: "Desain dan Produksi Konten",
            desc: "Kami menawarkan layanan lengkap mulai dari desain kreatif hingga produksi konten iklan."
          },
          {
            title: "Manajemen Marketing",
            desc: "Tim kami siap membantu dalam merencanakan, meluncurkan, dan mengelola marketing periklanan Anda untuk memastikan hasil yang optimal."
          },
          {
            title: "Teknologi Terbaru",
            desc: "Mengadopsi teknologi terbaru untuk memastikan efektivitas dan efisiensi iklan Anda."
          }
        ]
      }
    ]
  },
  sasaran_pelanggan: {
    desc: "Layanan advertising kami terbuka untuk semua sektor industri, mulai dari perusahaan kecil hingga besar yang ingin meningkatkan visibilitas merek dan mencapai target audiens yang lebih luas melalui media luar ruang dan dalam ruangan.",
    des2: "Dengan fokus pada inovasi dan kualitas, Jejak Hasanah siap membantu Anda mencapai tujuan periklanan dengan efektif. Untuk informasi lebih lanjut atau konsultasi, jangan ragu untuk menghubungi kami."
  }
};
export {
  _sfc_main as _,
  layananMock as l
};
//# sourceMappingURL=layanan.mock-BWrdWOP5.js.map
