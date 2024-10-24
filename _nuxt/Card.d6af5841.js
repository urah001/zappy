import {
  a as o,
  o as s,
  b as a,
  e as t,
  h as c,
  t as l,
  i,
} from "./entry.c7e512db.js";
const r = "" + new URL("nigeria_circle.c70f113c.svg", import.meta.url).href,
  n = "" + new URL("vector.b68a3a8d.svg", import.meta.url).href,
  m = "" + new URL("united-states_circle.031cd429.svg", import.meta.url).href,
  d = "" + new URL("USD_image.4f06ab84.svg", import.meta.url).href,
  _ = "" + new URL("NGN_image.3dcd16d9.svg", import.meta.url).href,
  g = { class: "virtual-card" },
  h = { class: "content" },
  u = t(
    "span",
    { class: "new" },
    [
      t(
        "svg",
        {
          width: "44",
          height: "44",
          viewBox: "0 0 44 44",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          t("path", {
            d: "M22.0001 44C22.0001 41.1109 21.431 38.2501 20.3254 35.5809C19.2198 32.9118 17.5992 30.4865 15.5564 28.4436C13.5135 26.4007 11.0882 24.7802 8.41908 23.6746C5.74991 22.569 2.88909 22 0 22C5.83477 22 11.4305 19.6821 15.5564 15.5563C19.6822 11.4305 22.0001 5.83475 22.0001 0C22.0001 5.83473 24.3179 11.4305 28.4436 15.5563C32.5694 19.6821 38.1652 22 44 22C38.1652 22 32.5694 24.3178 28.4436 28.4436C24.3179 32.5694 22 38.1652 22.0001 44Z",
            fill: "#673AB7",
          }),
        ]
      ),
      c(" New "),
    ],
    -1
  ),
  f = t(
    "div",
    { class: "countries" },
    [
      t("img", { src: r, alt: "" }),
      t("img", { src: n, alt: "" }),
      t("img", { src: m, alt: "" }),
    ],
    -1
  ),
  p = t("a", { href: "#", class: "primary-btn" }, "Get Started", -1),
  v = { class: "image" },
  w = ["src", "alt", "title"],
  C = t("img", { src: d, class: "us-flag", alt: "" }, null, -1),
  b = t("img", { src: _, class: "ng-flag", alt: "" }, null, -1),
  U = o({
    __name: "Card",
    props: { blok: { type: Object, default: () => ({}) } },
    setup(e) {
      return (k, x) => (
        s(),
        a("div", g, [
          t("div", h, [
            u,
            t("h2", null, [c(l(e.blok.title) + " ", 1), f]),
            t("p", null, l(e.blok.text), 1),
            p,
          ]),
          t("div", v, [
            e.blok.card
              ? (s(),
                a(
                  "img",
                  {
                    key: 0,
                    src: e.blok.card.filename,
                    alt: e.blok.card.alt,
                    title: e.blok.card.title,
                  },
                  null,
                  8,
                  w
                ))
              : i("", !0),
          ]),
          C,
          b,
        ])
      );
    },
  });
export { U as default };
