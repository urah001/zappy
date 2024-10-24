import {
  a as r,
  v as c,
  r as _,
  o as n,
  b as l,
  u as a,
  c as m,
  i as p,
  x as u,
} from "./entry.c7e512db.js";
const i = { role: "main" },
  d = r({
    __name: "about",
    async setup(b) {
      let o, e;
      const t =
        (([o, e] = c(() => u("about", { version: "published" }))),
        (o = await o),
        e(),
        o);
      return (k, y) => {
        const s = _("StoryblokComponent");
        return (
          n(),
          l("main", i, [
            a(t)
              ? (n(), m(s, { key: 0, blok: a(t).content }, null, 8, ["blok"]))
              : p("", !0),
          ])
        );
      };
    },
  });
export { d as default };
