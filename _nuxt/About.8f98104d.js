import {
  a as r,
  o as n,
  b as c,
  e as t,
  f as i,
  w as a,
  h as o,
  t as l,
  i as m,
  j as u,
  k as b,
} from "./entry.c7e512db.js";
import { u as g } from "./composables.06a55fbc.js";
import { _ as f, a as v, b as y } from "./close-icon.40aa5af9.js";
import { _ as h } from "./nigeria_flag.1e9fa985.js";
import { _ as w, a as x } from "./play-store-purple.6cb5852d.js";
import { _ as A, a as C, b as T, c as F } from "./facebook-icon.ec83f23e.js";
const N = { class: "page_hero", style: { height: "65rem" } },
  V = { class: "container" },
  P = { class: "header" },
  z = t("img", { src: f, alt: "logo" }, null, -1),
  B = { class: "menu" },
  D = t("a", { href: "/#features", class: "menu_link" }, " Features", -1),
  j = { class: "options" },
  q = t("div", { class: "country" }, [t("img", { src: h, alt: "" })], -1),
  H = t(
    "button",
    { class: "menu-icon", onclick: "dialog.showModal();" },
    [t("img", { src: v, alt: "" })],
    -1
  ),
  Q = { id: "dialog", class: "mobile-menu" },
  S = t(
    "button",
    { class: "close-menu", onclick: "dialog.close();" },
    [t("img", { src: y, alt: "" })],
    -1
  ),
  U = { class: "mobile-menu-list" },
  L = { class: "hero_content" },
  R = { class: "hero_text" },
  Z = t("div", { class: "page_hero_image" }, null, -1),
  E = { class: "mission" },
  G = { class: "icon" },
  M = ["src", "alt", "title"],
  O = { class: "page-section" },
  I = { class: "page-title", style: { "padding-bottom": "5rem" } },
  J = { style: { top: "5rem" } },
  K = { class: "app-data" },
  W = { class: "item" },
  X = t("span", null, "Trusted users", -1),
  Y = { class: "item" },
  $ = t("span", null, "Total Downloads", -1),
  p = { class: "item" },
  tt = t("span", null, "Total Transactions", -1),
  et = { class: "item" },
  lt = t("span", null, "Total Value Transaction", -1),
  ot = { class: "page-section" },
  st = { class: "page-title" },
  it = { class: "team-list" },
  at = { class: "item" },
  nt = ["src", "alt", "title"],
  ct = { class: "info" },
  mt = { class: "item" },
  _t = ["src", "alt", "title"],
  dt = { class: "info" },
  ut = { class: "item" },
  ht = ["src", "alt", "title"],
  kt = { class: "info" },
  rt = { class: "item" },
  bt = ["src", "alt", "title"],
  gt = { class: "info" },
  ft = { class: "item" },
  vt = ["src", "alt", "title"],
  yt = { class: "info" },
  wt = { class: "item" },
  xt = ["src", "alt", "title"],
  At = { class: "info" },
  Ct = { class: "app-download" },
  Tt = { class: "content" },
  Ft = u(
    '<div class="app-button"><a href="http://onelink.to/ray6xm"><img src="' +
      w +
      '" alt=""></a><a href="http://onelink.to/ray6xm"><img src="' +
      x +
      '" alt=""></a></div>',
    1
  ),
  Nt = t("div", { class: "image" }, null, -1),
  Vt = { class: "footer" },
  Pt = { class: "container" },
  zt = { class: "footer_top" },
  Bt = { class: "logo" },
  Dt = ["src", "alt", "title"],
  jt = u(
    '<div class="country"><img src="' +
      h +
      '" alt=""><a href="https://twitter.com/zappy_ng"><img src="' +
      A +
      '" alt=""></a><a href="https://www.linkedin.com/company/zappy-technology-ltd/"><img src="' +
      C +
      '" alt=""></a><a href="https://instagram.com/zappy_nigeria"><img src="' +
      T +
      '" alt=""></a><a href="https://www.facebook.com/profile.php?id=100087556592608"><img src="' +
      F +
      '" alt=""></a></div>',
    1
  ),
  qt = { class: "footer_bottom" },
  Ht = { class: "footer_description" },
  Qt = { class: "footer_link_wrapper" },
  St = t("h3", null, "Company", -1),
  Ut = { class: "footer_link_item" },
  Lt = { class: "footer_link_wrapper" },
  Rt = t("h3", null, "Legal", -1),
  Zt = { class: "footer_link_item" },
  Et = { class: "footer_copyright" },
  Gt = t("br", null, null, -1),
  Xt = r({
    __name: "About",
    props: { blok: { type: Object, default: () => ({}) } },
    setup(e) {
      return (
        g({
          title: "About Zappy - Future of Digital Banking",
          meta: [
            {
              name: "description",
              content:
                "Discover Zappy's journey to revolutionizing digital banking in Nigeria. Learn about our mission, vision, and commitment to providing seamless financial services.",
            },
          ],
        }),
        (_, d) => {
          const s = b;
          return (
            n(),
            c("div", null, [
              t("section", N, [
                t("div", V, [
                  t("div", null, [
                    t("div", P, [
                      i(
                        s,
                        { to: "/", class: "logo" },
                        { default: a(() => [z]), _: 1 }
                      ),
                      t("div", B, [
                        i(
                          s,
                          { to: "/", class: "menu_link" },
                          { default: a(() => [o("Home")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/airtime-to-cash", class: "menu_link" },
                          { default: a(() => [o("Airtime to Cash")]), _: 1 }
                        ),
                        D,
                        i(
                          s,
                          { to: "/about", class: "menu_link" },
                          { default: a(() => [o("About Us")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/faq", class: "menu_link" },
                          { default: a(() => [o("FAQs")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/terms-and-condition", class: "menu_link" },
                          { default: a(() => [o("Terms")]), _: 1 }
                        ),
                      ]),
                      t("div", j, [
                        q,
                        H,
                        i(
                          s,
                          {
                            to: "http://onelink.to/ray6xm",
                            class: "primary-btn hide-mobile",
                          },
                          { default: a(() => [o("Get Started")]), _: 1 }
                        ),
                      ]),
                    ]),
                    t("dialog", Q, [
                      S,
                      t("div", U, [
                        i(
                          s,
                          { to: "/", class: "link" },
                          { default: a(() => [o("Home")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/airtime-to-cash", class: "link" },
                          { default: a(() => [o("Airtime to Cash")]), _: 1 }
                        ),
                        t(
                          "a",
                          {
                            href: "/#features",
                            class: "link",
                            onClick:
                              d[0] ||
                              (d[0] = (...k) =>
                                _.reloadPage && _.reloadPage(...k)),
                          },
                          " Features"
                        ),
                        i(
                          s,
                          { to: "/about", class: "link" },
                          { default: a(() => [o("About")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/contact", class: "link" },
                          { default: a(() => [o("Contact")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/faq", class: "link" },
                          { default: a(() => [o("FAQ")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/privacy-policy", class: "link" },
                          { default: a(() => [o("Privacy")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/terms-and-condition", class: "link" },
                          { default: a(() => [o("Terms")]), _: 1 }
                        ),
                      ]),
                    ]),
                  ]),
                  t("div", L, [
                    t("div", R, [
                      t("h1", null, l(e.blok.page_title), 1),
                      t("p", null, l(e.blok.page_text), 1),
                    ]),
                    Z,
                  ]),
                ]),
              ]),
              t("section", E, [
                t("div", G, [
                  e.blok.mission_image
                    ? (n(),
                      c(
                        "img",
                        {
                          key: 0,
                          src: e.blok.mission_image.filename,
                          alt: e.blok.mission_image.alt,
                          title: e.blok.mission_image.title,
                        },
                        null,
                        8,
                        M
                      ))
                    : m("", !0),
                ]),
                t("h2", null, l(e.blok.mission_title), 1),
                t("p", null, l(e.blok.mission_text), 1),
              ]),
              t("section", O, [
                t("div", I, [
                  t("h2", null, l(e.blok.milestone_title), 1),
                  t("p", null, l(e.blok.milestone_subtile), 1),
                ]),
                t("div", J, [
                  t("div", K, [
                    t("div", W, [X, t("h3", null, l(e.blok.user_data), 1)]),
                    t("div", Y, [$, t("h3", null, l(e.blok.download_data), 1)]),
                    t("div", p, [
                      tt,
                      t("h3", null, l(e.blok.transaction_data), 1),
                    ]),
                    t("div", et, [lt, t("h3", null, l(e.blok.value_data), 1)]),
                  ]),
                ]),
              ]),
              t("section", ot, [
                t("div", st, [
                  t("h2", null, l(e.blok.team_title), 1),
                  t("p", null, l(e.blok.team_subtitle), 1),
                ]),
                t("div", it, [
                  t("div", at, [
                    e.blok.team_1_image
                      ? (n(),
                        c(
                          "img",
                          {
                            key: 0,
                            src: e.blok.team_1_image.filename,
                            alt: e.blok.team_1_image.alt,
                            title: e.blok.team_1_image.title,
                          },
                          null,
                          8,
                          nt
                        ))
                      : m("", !0),
                    t("div", ct, [
                      t("h3", null, l(e.blok.team_1_name), 1),
                      t("span", null, l(e.blok.team_1_position), 1),
                    ]),
                  ]),
                  t("div", mt, [
                    e.blok.team_2_image
                      ? (n(),
                        c(
                          "img",
                          {
                            key: 0,
                            src: e.blok.team_2_image.filename,
                            alt: e.blok.team_2_image.alt,
                            title: e.blok.team_2_image.title,
                          },
                          null,
                          8,
                          _t
                        ))
                      : m("", !0),
                    t("div", dt, [
                      t("h3", null, l(e.blok.team_2_name), 1),
                      t("span", null, l(e.blok.team_2_position), 1),
                    ]),
                  ]),
                  t("div", ut, [
                    e.blok.team_3_image
                      ? (n(),
                        c(
                          "img",
                          {
                            key: 0,
                            src: e.blok.team_3_image.filename,
                            alt: e.blok.team_3_image.alt,
                            title: e.blok.team_3_image.title,
                          },
                          null,
                          8,
                          ht
                        ))
                      : m("", !0),
                    t("div", kt, [
                      t("h3", null, l(e.blok.team_3_name), 1),
                      t("span", null, l(e.blok.team_3_position), 1),
                    ]),
                  ]),
                  t("div", rt, [
                    e.blok.team_4_image
                      ? (n(),
                        c(
                          "img",
                          {
                            key: 0,
                            src: e.blok.team_4_image.filename,
                            alt: e.blok.team_4_image.alt,
                            title: e.blok.team_4_image.title,
                          },
                          null,
                          8,
                          bt
                        ))
                      : m("", !0),
                    t("div", gt, [
                      t("h3", null, l(e.blok.team_4_name), 1),
                      t("span", null, l(e.blok.team_4_position), 1),
                    ]),
                  ]),
                  t("div", ft, [
                    e.blok.team_5_image
                      ? (n(),
                        c(
                          "img",
                          {
                            key: 0,
                            src: e.blok.team_5_image.filename,
                            alt: e.blok.team_5_image.alt,
                            title: e.blok.team_5_image.title,
                          },
                          null,
                          8,
                          vt
                        ))
                      : m("", !0),
                    t("div", yt, [
                      t("h3", null, l(e.blok.team_5_name), 1),
                      t("span", null, l(e.blok.team_5_position), 1),
                    ]),
                  ]),
                  t("div", wt, [
                    e.blok.team_6_image
                      ? (n(),
                        c(
                          "img",
                          {
                            key: 0,
                            src: e.blok.team_6_image.filename,
                            alt: e.blok.team_6_image.alt,
                            title: e.blok.team_6_image.title,
                          },
                          null,
                          8,
                          xt
                        ))
                      : m("", !0),
                    t("div", At, [
                      t("h3", null, l(e.blok.team_6_name), 1),
                      t("span", null, l(e.blok.team_6_position), 1),
                    ]),
                  ]),
                ]),
              ]),
              t("div", Ct, [
                t("div", Tt, [
                  t("span", null, l(e.blok.download_title), 1),
                  t("h3", null, l(e.blok.download_subtitle), 1),
                  Ft,
                ]),
                Nt,
              ]),
              t("div", Vt, [
                t("div", Pt, [
                  t("div", zt, [
                    t("div", Bt, [
                      e.blok.footer_logo
                        ? (n(),
                          c(
                            "img",
                            {
                              key: 0,
                              src: e.blok.footer_logo.filename,
                              alt: e.blok.footer_logo.alt,
                              title: e.blok.footer_logo.title,
                            },
                            null,
                            8,
                            Dt
                          ))
                        : m("", !0),
                    ]),
                    jt,
                  ]),
                  t("div", qt, [
                    t("p", Ht, [t("span", null, l(e.blok.footer_text), 1)]),
                    t("div", Qt, [
                      St,
                      t("div", Ut, [
                        i(
                          s,
                          { to: "/about", class: "footer_link" },
                          { default: a(() => [o("About Us")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/contact", class: "footer_link" },
                          { default: a(() => [o("Contact Us")]), _: 1 }
                        ),
                        i(
                          s,
                          { to: "/faq", class: "footer_link" },
                          { default: a(() => [o("FAQs")]), _: 1 }
                        ),
                      ]),
                    ]),
                    t("div", Lt, [
                      Rt,
                      t("div", Zt, [
                        i(
                          s,
                          { to: "/terms", class: "footer_link" },
                          {
                            default: a(() => [o("Terms and Conditions")]),
                            _: 1,
                          }
                        ),
                        i(
                          s,
                          { to: "/privacy", class: "footer_link" },
                          { default: a(() => [o("Privacy Policy")]), _: 1 }
                        ),
                      ]),
                    ]),
                    t("p", Et, [
                      o(l(e.blok.footer_copyright) + " ", 1),
                      Gt,
                      o(" All Right Reserved. "),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
      );
    },
  });
export { Xt as default };