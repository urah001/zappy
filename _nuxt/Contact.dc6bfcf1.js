import {
  b as d,
  e as t,
  f as e,
  w as a,
  h as o,
  t as l,
  m as k,
  i as v,
  j as n,
  k as y,
} from "./entry.c7e512db.js";
import { u as w } from "./composables.06a55fbc.js";
import { _ as x, a as C, b as q } from "./close-icon.40aa5af9.js";
import { _ as m } from "./nigeria_flag.1e9fa985.js";
import { _ as h, a as u, b as p, c as f } from "./facebook-icon.ec83f23e.js";
import { _ as A, a as F } from "./play-store-purple.6cb5852d.js";
const z = "" + new URL("contact-image.a93a1193.svg", import.meta.url).href,
  N = { class: "page_hero" },
  E = { class: "container" },
  R = { class: "header" },
  S = t("img", { src: x, alt: "logo" }, null, -1),
  T = { class: "menu" },
  U = { class: "options" },
  V = t("div", { class: "country" }, [t("img", { src: m, alt: "" })], -1),
  H = t(
    "button",
    { class: "menu-icon", onclick: "dialog.showModal();" },
    [t("img", { src: C, alt: "" })],
    -1
  ),
  M = { id: "dialog", class: "mobile-menu" },
  B = t(
    "button",
    { class: "close-menu", onclick: "dialog.close();" },
    [t("img", { src: q, alt: "" })],
    -1
  ),
  G = { class: "mobile-menu-list" },
  P = { class: "hero_content" },
  Q = { class: "hero_text" },
  j = t(
    "div",
    { class: "page_hero_image" },
    [t("img", { src: z, alt: "" })],
    -1
  ),
  L = { class: "contact" },
  O = { class: "contact_details" },
  Z = { class: "title" },
  D = t("h3", null, "Get in touch", -1),
  I = { class: "title" },
  J = t("h3", null, "For Transaction Report", -1),
  K = { class: "title" },
  W = t("h3", null, "For General Enquires", -1),
  X = n(
    '<div class="social-media"><a href="https://twitter.com/zappy_ng"><img src="' +
      h +
      '" alt=""></a><a href="https://www.linkedin.com/company/zappy-technology-ltd/"><img src="' +
      u +
      '" alt=""></a><a href="https://instagram.com/zappy_nigeria"><img src="' +
      p +
      '" alt=""></a><a href="https://www.facebook.com/profile.php?id=100087556592608"><img src="' +
      f +
      '" alt=""></a></div>',
    1
  ),
  Y = { class: "contact_form" },
  $ = n(
    '<div class="form-box"><label for="">Full Name</label><input type="text" name="" id="" placeholder="Enter full name" required></div><div class="form-box"><label for="">Email</label><input type="email" placeholder="Enter email" required></div><div class="form-box"><label for="">Message</label><textarea name="" cols="30" rows="10" required></textarea></div><button class="submit-btn">Send Message</button>',
    4
  ),
  tt = [$],
  ot = { class: "app-download" },
  st = { class: "content" },
  et = n(
    '<div class="app-button"><a href="http://onelink.to/ray6xm"><img src="' +
      A +
      '" alt=""></a><a href="http://onelink.to/ray6xm"><img src="' +
      F +
      '" alt=""></a></div>',
    1
  ),
  at = t("div", { class: "image" }, null, -1),
  it = { class: "footer" },
  lt = { class: "container" },
  nt = { class: "footer_top" },
  ct = { class: "logo" },
  _t = ["src", "alt", "title"],
  rt = n(
    '<div class="country"><img src="' +
      m +
      '" alt=""><a href="https://twitter.com/zappy_ng"><img src="' +
      h +
      '" alt=""></a><a href="https://www.linkedin.com/company/zappy-technology-ltd/"><img src="' +
      u +
      '" alt=""></a><a href="https://instagram.com/zappy_nigeria"><img src="' +
      p +
      '" alt=""></a><a href="https://www.facebook.com/profile.php?id=100087556592608"><img src="' +
      f +
      '" alt=""></a></div>',
    1
  ),
  dt = { class: "footer_bottom" },
  mt = { class: "footer_description" },
  ht = { class: "footer_link_wrapper" },
  ut = t("h3", null, "Company", -1),
  pt = { class: "footer_link_item" },
  ft = { class: "footer_link_wrapper" },
  gt = t("h3", null, "Legal", -1),
  bt = { class: "footer_link_item" },
  kt = { class: "footer_copyright" },
  vt = t("br", null, null, -1),
  Ft = b({
    __name: "Contact",
    props: { blok: { type: Object, default: () => ({}) } },
    setup(i) {
      return (
        w({
          title: "Contact Zappy - Reach Out to Us",
          meta: [
            {
              name: "description",
              content:
                "Have questions or feedback? Contact Zappy's team for any inquiries, suggestions, or partnership opportunities.",
            },
          ],
        }),
        (c, _) => {
          const s = y;
          return (
            r(),
            d("div", null, [
              t("section", N, [
                t("div", E, [
                  t("div", null, [
                    t("div", R, [
                      e(
                        s,
                        { to: "/", class: "logo" },
                        { default: a(() => [S]), _: 1 }
                      ),
                      t("div", T, [
                        e(
                          s,
                          { to: "/", class: "menu_link" },
                          { default: a(() => [o("Home")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/airtime-to-cash", class: "menu_link" },
                          { default: a(() => [o("Airtime to Cash")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/about", class: "menu_link" },
                          { default: a(() => [o("About Us")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/faq", class: "menu_link" },
                          { default: a(() => [o("FAQs")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/terms", class: "menu_link" },
                          { default: a(() => [o("Terms")]), _: 1 }
                        ),
                      ]),
                      t("div", U, [
                        V,
                        H,
                        e(
                          s,
                          {
                            to: "http://onelink.to/ray6xm",
                            class: "primary-btn hide-mobile",
                          },
                          { default: a(() => [o("Get Started")]), _: 1 }
                        ),
                      ]),
                    ]),
                    t("dialog", M, [
                      B,
                      t("div", G, [
                        e(
                          s,
                          { to: "/", class: "link" },
                          { default: a(() => [o("Home")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/airtime-to-cash", class: "link" },
                          { default: a(() => [o("Airtime to Cash")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/about", class: "link" },
                          { default: a(() => [o("About")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/contact", class: "link" },
                          { default: a(() => [o("Contact")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/faq", class: "link" },
                          { default: a(() => [o("FAQ")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/privacy", class: "link" },
                          { default: a(() => [o("Privacy")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/terms", class: "link" },
                          { default: a(() => [o("Terms")]), _: 1 }
                        ),
                      ]),
                    ]),
                  ]),
                  t("div", P, [
                    t("div", Q, [
                      t("h1", null, l(i.blok.page_title), 1),
                      t("p", null, l(i.blok.page_text), 1),
                    ]),
                    j,
                  ]),
                ]),
              ]),
              t("section", L, [
                t("div", O, [
                  t("div", Z, [D, t("p", null, l(i.blok.contact_message), 1)]),
                  t("div", I, [
                    J,
                    t("p", null, l(i.blok.transaction_support), 1),
                  ]),
                  t("div", K, [W, t("p", null, l(i.blok.general_support), 1)]),
                  X,
                ]),
                t("div", Y, [
                  t(
                    "form",
                    {
                      action: "",
                      onSubmit:
                        _[0] ||
                        (_[0] = k(
                          (...g) => c.submitForm && c.submitForm(...g),
                          ["prevent"]
                        )),
                    },
                    tt,
                    32
                  ),
                ]),
              ]),
              t("div", ot, [
                t("div", st, [
                  t("span", null, l(i.blok.download_title), 1),
                  t("h3", null, l(i.blok.download_subtitle), 1),
                  et,
                ]),
                at,
              ]),
              t("div", it, [
                t("div", lt, [
                  t("div", nt, [
                    t("div", ct, [
                      i.blok.footer_logo
                        ? (r(),
                          d(
                            "img",
                            {
                              key: 0,
                              src: i.blok.footer_logo.filename,
                              alt: i.blok.footer_logo.alt,
                              title: i.blok.footer_logo.title,
                            },
                            null,
                            8,
                            _t
                          ))
                        : v("", !0),
                    ]),
                    rt,
                  ]),
                  t("div", dt, [
                    t("p", mt, [t("span", null, l(i.blok.footer_text), 1)]),
                    t("div", ht, [
                      ut,
                      t("div", pt, [
                        e(
                          s,
                          { to: "/about", class: "footer_link" },
                          { default: a(() => [o("About Us")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/contact", class: "footer_link" },
                          { default: a(() => [o("Contact Us")]), _: 1 }
                        ),
                        e(
                          s,
                          { to: "/faq", class: "footer_link" },
                          { default: a(() => [o("FAQs")]), _: 1 }
                        ),
                      ]),
                    ]),
                    t("div", ft, [
                      gt,
                      t("div", bt, [
                        e(
                          s,
                          { to: "/terms", class: "footer_link" },
                          {
                            default: a(() => [o("Terms and Conditions")]),
                            _: 1,
                          }
                        ),
                        e(
                          s,
                          { to: "/privacy", class: "footer_link" },
                          { default: a(() => [o("Privacy Policy")]), _: 1 }
                        ),
                      ]),
                    ]),
                    t("p", kt, [
                      o(l(i.blok.footer_copyright) + " ", 1),
                      vt,
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
export { Ft as default };
