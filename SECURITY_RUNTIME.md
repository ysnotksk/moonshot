# Node.js security runtime baseline

Prepared 2026-10-21 (Asia/Tokyo) against the [October 2026 Node.js security release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases). Supported patched minimums are 22.23.4, 24.22.1 and 26.12.1. This project selects 22.23.4 for reproducible local/CI setup; package engines permit only the supported patched lines required by this project.

## Verification and rollout

1. Use the version file beside the application manifest and confirm `node --version` in the actual build and running application environment. Install dependencies from the existing lockfile using the project package manager and existing dependency protections.
2. Run the existing project checks: npm run lint; npm run build; verify the CI matrix and Pages build logs.
3. Rebuild and restart each deployed Node process or image through the existing reviewed release workflow. Record deployed revision, runtime version and smoke-test result. A source change or successful build alone does not establish deployment.

Remote deployment configuration, active runtime versions, image contents and deployed revisions have not been verified by this patch. Static deployments still need a patched build environment. Engine metadata does not replace runtime verification.

No Electron dependency was changed. Any independently packaged or embedded Node runtime must be inventoried separately; this patch establishes only the runtime paths represented in this repository.

## Human acceptance

Target: the existing supported device/OS and browser or desktop app, built from the reviewed patch; use the existing project URL or local development address documented in README. Prerequisites: a patched runtime, completed automated checks and an isolated test profile with non-sensitive sample data.

1. Record device, OS, application/browser version, URL, source revision and observed Node runtime version.
2. Launch the application or generated site, open a representative sample and complete its primary workflow; check console and server logs.
3. Restart or reopen it and repeat the primary workflow. For a runtime image, also verify the running container runtime after rebuild.

Expected result: the primary workflow completes without startup, TLS, import/export or rendering regressions; runtime versions meet the applicable patched minimums. Pass only when these observations and any bundled-runtime remediation are recorded. Fail if any runtime is older than its baseline or a regression occurs. Device testing is inapplicable to source-only tooling: instead a human reviews the generated output and recorded CI runtime/check logs.

Execution status: **pending**. Human acceptance, packaged-runtime remediation and remote deployment are not claimed.

## Dependency audit remediation (2026-10-22)

The previous lockfile produced 17 audit findings (14 high, 2 moderate, 1 low). This count included dependent packages inheriting a finding; it did not represent 17 distinct vulnerabilities. This change updates the following build/development dependencies without changing application source, Sass, Stylelint rules, or Pug versions:

| Package | Previous | Selected | Advisory |
| --- | --- | --- | --- |
| esbuild | 0.27.7 | 0.28.2 | GHSA-g7r4-m6w7-qqqr (Windows development-server file read; no assigned CVE) |
| fast-uri | 3.1.6 | 3.1.9 | CVE-2026-84292, CVE-2026-84394, CVE-2026-86472 |
| follow-redirects | 1.16.0 | 1.16.1 | CVE-2026-111755, CVE-2026-111756 |
| source-map-js | 1.2.1 | 1.2.2 | CVE-2026-93749 |
| colord | 2.9.3 | 2.10.0 | CVE-2026-85062 |
| postcss-selector-parser | 7.1.5 | 7.1.6 | CVE-2026-104844 |
| @parcel/watcher | 2.5.1 | 2.6.0 | Removes its micromatch/braces dependency path; includes matching optional platform packages |

The esbuild minor-line change is explicit; no `npm audit fix --force` was used. Local installation used the existing Safe Chain wrapper with lifecycle scripts disabled. Safe Chain rejected selector-parser 7.1.7 under the minimum package age policy; the selected fixed 7.1.6 was published on 2026-09-03. No package-age protection was disabled.

### Remaining upstream blocker

Full `npm audit --audit-level=high` still fails with 10 high findings, all rooted in [GHSA-vfj7-8cjw-p6xm / CVE-2026-93687](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Stylelint reaches braces 3.0.3 through micromatch/fast-glob/globby. No patched upstream braces version exists in the advisory or npm registry at review time; even the current Stylelint major still uses micromatch. Replacing the lint toolchain or consuming an unofficial fork is outside this minimal update. The audit threshold and CI gate remain unchanged, with no exception or suppression introduced.

This is a deeply nested glob-pattern denial of service in development tooling. The repository uses fixed, checked-in lint patterns; it has no production npm dependencies, and the published CSS/JavaScript does not bundle this tooling. This scope limits exposure but does not remove the full audit finding or establish a security exception.

### Verification

- On Node 22.23.4: protected clean install, non-mutating SCSS lint, and full CSS/JavaScript/HTML build passed; all 21 Pug pages compiled. Lint and the full build also passed on Node 26.12.1. Node 24.22.1 execution remains for the CI matrix.
- The 27 tracked generated dist/example files remain byte-for-byte unchanged from the PR parent.
- Production-only audit passed with zero findings. Full audit remains blocked as described above; GitHub CI completion and human acceptance remain pending.
- The existing build size report warns that minified CSS is 96.22 KB against an 85 KB target, and gzip is 15.68 KB against 15 KB. Generated output is unchanged; these warnings predate this dependency update.

Do not describe this PR as fully dependency-remediated or CI-green until the remaining upstream finding has a supported resolution and the complete CI matrix passes.
