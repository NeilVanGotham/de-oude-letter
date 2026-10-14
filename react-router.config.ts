import type { Config } from "@react-router/dev/config";

export default {
  // GitHub Pages only serves static files, so build as a SPA
  ssr: false,
  basename: "/de-oude-letter/",
} satisfies Config;
