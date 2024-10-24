import {
  a as c,
  v as r,
  r as _,
  o as n,
  b as l,
  u as a,
  c as m,
  i as p,
  x as i,
} from "./entry.c7e512db.js";
const u = { role: "main" },
  d = c({
    __name: "contact",
    async setup(k) {
      let o, e;
      const t =
        (([o, e] = r(() => i("contact", { version: "published" }))),
        (o = await o),
        e(),
        o);
      return (b, y) => {
        const s = _("StoryblokComponent");
        return (
          n(),
          l("main", u, [
            a(t)
              ? (n(), m(s, { key: 0, blok: a(t).content }, null, 8, ["blok"]))
              : p("", !0),
          ])
        );
      };
    },
  });
export { d as default };
