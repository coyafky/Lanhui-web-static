import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Local, uncommitted working directories at the repo root (agent/tooling
    // artifacts and vendored third-party repos). They are not part of the site
    // source and are absent from clean checkouts; ignoring them keeps
    // `npm run lint` deterministic regardless of local scratch state.
    "geo-seo-hub/**",
    "outputs/**",
    "runs/**",
    "skill-plan/**",
    "skills/**",
    "Volumes/**",
    "官网素材导出/**",
  ]),
]);

export default eslintConfig;
