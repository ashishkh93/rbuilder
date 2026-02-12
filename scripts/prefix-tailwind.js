import fs from "fs";
import path from "path";

const ROOT = "src";
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (EXTENSIONS.some((e) => full.endsWith(e))) processFile(full);
  }
}

function prefixClasses(value) {
  return value
    .split(/\s+/)
    .map((cls) => {
      if (!cls) return cls;
      if (cls.startsWith("rb:")) return cls;
      if (cls.includes(":rb:")) return cls;

      // variant handling: md:flex -> md:rb:flex
      if (cls.includes(":")) {
        const parts = cls.split(":");
        const utility = parts.pop();
        return [...parts, `rb:${utility}`].join(":");
      }

      return `rb:${cls}`;
    })
    .join(" ");
}

function processFile(file) {
  let code = fs.readFileSync(file, "utf8");

  // className="..."
  code = code.replace(
    /className="([^"]+)"/g,
    (_, v) => `className="${prefixClasses(v)}"`
  );

  // class="..."
  code = code.replace(
    /class="([^"]+)"/g,
    (_, v) => `class="${prefixClasses(v)}"`
  );

  // cn("..."), clsx("..."), twMerge("...")
  code = code.replace(
    /(cn|clsx|twMerge)\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
    (_, fn, v) => `${fn}("${prefixClasses(v)}")`
  );

  fs.writeFileSync(file, code);
}

walk(ROOT);
console.log("✅ Tailwind class strings prefixed safely");
