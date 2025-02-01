import { _ as o, a as s } from "./play-store-purple.6cb5852d.js";
    '<div class="app-button"><a href="http://onelink.to/ray6xm"><img src="' +
      o +
      '" alt=""></a><a href="http://onelink.to/ray6xm"><img src="' +
      s +
      '" alt=""></a></div>',
    1
  ),
  _ = t("div", { class: "image" }, null, -1),
  k = n({
    __name: "App",
    props: { blok: { type: Object, default: () => ({}) } },
    setup(a) {
      return (m, h) => (
        i(),
        l("div", r, [
          t("div", p, [
            t("span", null, e(a.blok.title), 1),
            t("h3", null, e(a.blok.description), 1),
            d,
          ]),
          _,
        ])
      );
    },
  });
export { k as default };
