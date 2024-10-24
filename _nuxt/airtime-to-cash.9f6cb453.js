import {
  a as c,
  o as r,
  b as d,
  e as t,
  f as s,
  w as a,
  j as i,
  k as _,
  h as o,
} from "./entry.c7e512db.js";
import { u as p } from "./composables.06a55fbc.js";
import { a as m, b as u, _ as n } from "./close-icon.40aa5af9.js";
import { _ as l } from "./nigeria_flag.1e9fa985.js";
import { _ as h, a as f } from "./play-store-purple.6cb5852d.js";
import { _ as v, a as y, b as g, c as b } from "./facebook-icon.ec83f23e.js";
const k = "" + new URL("download-app.4438cadd.svg", import.meta.url).href,
  w = "" + new URL("convert-airtime.082beb08.svg", import.meta.url).href,
  A = "" + new URL("cash-in-hand.267cb3ab.svg", import.meta.url).href,
  C = { class: "page_hero" },
  x = { class: "container" },
  q = { class: "header" },
  D = t("img", { src: n, alt: "logo" }, null, -1),
  S = { class: "menu" },
  N = { class: "options" },
  T = t("div", { class: "country" }, [t("img", { src: l, alt: "" })], -1),
  I = t(
    "button",
    { class: "menu-icon", onclick: "dialog.showModal();" },
    [t("img", { src: m, alt: "" })],
    -1
  ),
  M = { id: "dialog", class: "mobile-menu" },
  Z = t(
    "button",
    { class: "close-menu", onclick: "dialog.close();" },
    [t("img", { src: u, alt: "" })],
    -1
  ),
  B = { class: "mobile-menu-list" },
  L = t(
    "div",
    { class: "hero_content" },
    [
      t("div", { class: "hero_text" }, [
        t("h1", null, "Convert Airtime to Cash Instantly"),
        t(
          "p",
          null,
          " Did you load too much airtime on your SIM? Zappy can help you convert Airtime to cash and get your money into your wallet in 1min. "
        ),
      ]),
      t("div", { class: "page_hero_image" }),
    ],
    -1
  ),
  U = i(
    '<section class="airtime-cash-process container"><div class="item"><img src="' +
      k +
      '" alt=""><p>Download our mobile app, Create An Account by filling the simple registration form.</p></div><div class="item"><img src="' +
      w +
      '" alt=""><p>On your Dashboard, you can access all our products including Convert Airtime to Cash.</p></div><div class="item"><img src="' +
      A +
      '" alt=""><p> Awesome! We have two methods on Zappy to help you convert Airtime to Cash depending on how fast you want it. </p></div></section><section class="airtime-cash-content container"><div class="content"><h3>Simple Way to Convert Airtime to Cash</h3><ul><li>Download our Mobile App.</li><li>Open it, Tap on Create An Account or Log In an Existing Account.</li><li>While on the Dashboard, tap on <span>&quot;Products&quot;</span>.</li><li>Tap on <span>&quot;Airtime to Cash&quot;</span>.</li><li>Select either Manual or Automatic.</li><li>Input sender&#39;s phone number.</li><li>Select Network Provider.</li><li>Input Amount of Airtime you wish to convert back to cash.</li><li>Follow the instruction on the screen to complete the request.</li></ul></div><div class="content"><h3>Withdraw Cash to Local Bank</h3><ul><li>Download our Mobile App.</li><li>Open it, Tap on Create An Account or Log In an Existing Account.</li><li>While on the Dashboard, tap on <span>&quot;Send Money&quot;</span>.</li><li>Select send to local bank.</li><li>Select a Bank Name available on our list.</li><li>Fill the necessary receivers bank details.</li><li>Tap on Send Money once done.</li></ul><p> Note: Zappy is also a Wallet which means your money are also save on our app and can be accessed anytime. You can also send money to other users on Zappy for free. </p></div></section><br><br><div class="app-download"><div class="content"><span>Don&#39;t wait here!</span><h3>Download Zappy today and start enjoying seamless transactions.</h3><div class="app-button"><a href="http://onelink.to/ray6xm"><img src="' +
      h +
      '" alt=""></a><a href="http://onelink.to/ray6xm"><img src="' +
      f +
      '" alt=""></a></div></div><div class="image"></div></div>',
    5
  ),
  W = { class: "footer" },
  F = { class: "container" },
  P = i(
    '<div class="footer_top"><div class="logo"><img src="' +
      n +
      '" alt="footer"></div><div class="country"><img src="' +
      l +
      '" alt=""><a href="https://twitter.com/zappy_ng"><img src="' +
      v +
      '" alt=""></a><a href="https://www.linkedin.com/company/zappy-technology-ltd/"><img src="' +
      y +
      '" alt=""></a><a href="https://instagram.com/zappy_nigeria"><img src="' +
      g +
      '" alt=""></a><a href="https://www.facebook.com/profile.php?id=100087556592608"><img src="' +
      b +
      '" alt=""></a></div></div>',
    1
  ),
  R = { class: "footer_bottom" },
  E = t(
    "p",
    { class: "footer_description" },
    [
      t(
        "span",
        null,
        "Zappy Account is provided by Kuda Microfinance Bank. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. All deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC). "
      ),
    ],
    -1
  ),
  V = { class: "footer_link_wrapper" },
  z = t("h3", null, "Company", -1),
  H = { class: "footer_link_item" },
  O = { class: "footer_link_wrapper" },
  Q = t("h3", null, "Legal", -1),
  j = { class: "footer_link_item" },
  G = t(
    "p",
    { class: "footer_copyright" },
    [
      o(" \xA9 2023 Zappy Global Technology Ltd. "),
      t("br"),
      o(" All Right Reserved. "),
    ],
    -1
  ),
  at = c({
    __name: "airtime-to-cash",
    setup(K) {
      return (
        p({
          title: "Convert Airtime to Cash with Zappy - Instant & Secure",
          meta: [
            {
              name: "description",
              content:
                "Turn your excess airtime into cash effortlessly with Zappy. Experience a quick, reliable, and secure conversion process tailored for your convenience.",
            },
          ],
        }),
        (Y, J) => {
          const e = _;
          return (
            r(),
            d("div", null, [
              t("section", C, [
                t("div", x, [
                  t("div", null, [
                    t("div", q, [
                      s(
                        e,
                        { to: "/", class: "logo" },
                        { default: a(() => [D]), _: 1 }
                      ),
                      t("div", S, [
                        s(
                          e,
                          { to: "/", class: "menu_link" },
                          { default: a(() => [o("Home")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/airtime-to-cash", class: "menu_link" },
                          { default: a(() => [o("Airtime to Cash")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/about", class: "menu_link" },
                          { default: a(() => [o("About Us")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/faq", class: "menu_link" },
                          { default: a(() => [o("FAQs")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/terms", class: "menu_link" },
                          { default: a(() => [o("Terms")]), _: 1 }
                        ),
                      ]),
                      t("div", N, [
                        T,
                        I,
                        s(
                          e,
                          {
                            to: "http://onelink.to/ray6xm",
                            class: "primary-btn hide-mobile",
                          },
                          { default: a(() => [o("Get Started")]), _: 1 }
                        ),
                      ]),
                    ]),
                    t("dialog", M, [
                      Z,
                      t("div", B, [
                        s(
                          e,
                          { to: "/", class: "link" },
                          { default: a(() => [o("Home")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/airtime-to-cash", class: "link" },
                          { default: a(() => [o("Airtime to Cash")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/about", class: "link" },
                          { default: a(() => [o("About")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/contact", class: "link" },
                          { default: a(() => [o("Contact")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/faq", class: "link" },
                          { default: a(() => [o("FAQ")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/privacy-policy", class: "link" },
                          { default: a(() => [o("Privacy")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/terms", class: "link" },
                          { default: a(() => [o("Terms")]), _: 1 }
                        ),
                      ]),
                    ]),
                  ]),
                  L,
                ]),
              ]),
              U,
              t("div", W, [
                t("div", F, [
                  P,
                  t("div", R, [
                    E,
                    t("div", V, [
                      z,
                      t("div", H, [
                        s(
                          e,
                          { to: "/about", class: "footer_link" },
                          { default: a(() => [o("About Us")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/contact", class: "footer_link" },
                          { default: a(() => [o("Contact Us")]), _: 1 }
                        ),
                        s(
                          e,
                          { to: "/faq", class: "footer_link" },
                          { default: a(() => [o("FAQs")]), _: 1 }
                        ),
                      ]),
                    ]),
                    t("div", O, [
                      Q,
                      t("div", j, [
                        s(
                          e,
                          { to: "/terms", class: "footer_link" },
                          {
                            default: a(() => [o("Terms and Conditions")]),
                            _: 1,
                          }
                        ),
                        s(
                          e,
                          { to: "/privacy", class: "footer_link" },
                          { default: a(() => [o("Privacy Policy")]), _: 1 }
                        ),
                      ]),
                    ]),
                    G,
                  ]),
                ]),
              ]),
            ])
          );
        }
      );
    },
  });
export { at as default };
