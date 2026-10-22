# Node.js security runtime baseline

Prepared 2026-10-21 (Asia/Tokyo) against the [October 2026 Node.js security release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases). Supported patched minimums are 22.23.4, 24.22.1 and 26.12.1. This project selects 22.23.4 for reproducible local/CI setup; package engines permit only the supported patched lines required by this project.

## Verification and rollout

1. Use the version file beside the application manifest and confirm `node --version` in the actual build and running application environment. Install dependencies from the existing lockfile using the project package manager and existing dependency protections.
2. Run the existing project checks: npm run lint; npm run build; verify the CI matrix and Pages build logs.
3. Rebuild and restart each deployed Node process or image through the existing reviewed release workflow. Record deployed revision, runtime version and smoke-test result. A source change or successful build alone does not establish deployment.

Deployment configuration is GitHub Pages: pushes to main or a manual dispatch install dependencies, run the unchanged high audit gate, build static assets, prepare `_site`, and deploy through OIDC. The PR branch does not trigger Pages. See the current verification below for the last observed deployment. Static deployments still need a patched build environment; engine metadata does not establish the runtime used in an earlier build.

No Electron dependency was changed. Any independently packaged or embedded Node runtime must be inventoried separately; this patch establishes only the runtime paths represented in this repository.

## Human acceptance

Target: a desktop browser at http://localhost:8080/examples/ and a physical mobile browser at `http://<development-machine-LAN-IP>:8080/examples/` for this PR; after a later merge, https://ysnotksk.github.io/moonshot/. Record actual device, OS and browser versions. Prerequisites: reviewed revision, Node 22.23.4 or 24.22.1, clean dependencies and successful lint/build. For physical mobile testing, use the same trusted network and verify the development server is reachable at the development machine LAN address. Full audit is currently blocked, so production rollout acceptance cannot pass.

1. Record revision, device, OS, browser version, URL and `node --version`; run `npm start` for local review.
2. Open the example index and representative navigation, forms and component pages. Compare desktop and narrow mobile layouts with main; exercise navigation, back-to-top and cookie-banner controls and inspect the browser console.
3. Reload and repeat. Review both Node CI logs, the generated-file comparison and full audit result. After any eventual merge, separately verify the Pages run revision and repeat these browser checks at the production URL.

Expected results: pages and assets load, controls work, no new console errors or layout changes, generated files match the baseline, and full audit passes before rollout. Pass only with recorded observations for both devices and the actual deployed revision; fail on any regression or unresolved blocking audit. Tooling-only runtime evidence can be reviewed in CI logs, but this does not substitute for browser acceptance.

Execution status: **human acceptance pending**. No person has executed these instructions as part of this remediation; no PR deployment is claimed.

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

Full `npm audit --audit-level=high` fails with 10 high findings, all rooted in [GHSA-vfj7-8cjw-p6xm / CVE-2026-93687](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). These are one root advisory and its affected dependent packages, not ten separate CVEs. The paths are Stylelint -> micromatch -> braces and Stylelint -> globby/fast-glob -> micromatch -> braces.

Rechecked on 2026-10-22 against the official npm registry and release manifests:

- [braces registry](https://registry.npmjs.org/braces): latest 3.0.3; the reviewed advisory lists no patched version.
- [micromatch registry](https://registry.npmjs.org/micromatch/latest): latest 4.0.8 still requires braces. fast-glob 3.3.3 also retains this path.
- [Released Stylelint 17.16.0 manifest](https://raw.githubusercontent.com/stylelint/stylelint/17.16.0/package.json) and [registry metadata](https://registry.npmjs.org/stylelint/latest) retain fast-glob and micromatch. A major upgrade to this version does not resolve the finding.
- [Upstream Stylelint issue #9559](https://github.com/stylelint/stylelint/issues/9559) describes tinyglobby/picomatch migration for version 18. No version 18 is published in the registry at this check. Unreleased main is not a supported published resolution.

No further dependency version is changed in this follow-up: a forced override from micromatch to picomatch is not API-compatible evidence, while removing Stylelint or replacing its rule set would discard existing checks. No unofficial fork, audit suppression, threshold reduction, forced fix or package-age bypass is introduced. Re-evaluate an official braces fix or released Stylelint 18 with compatible SCSS configuration and migration tests when available.

### Impact and reachability

The vulnerable operation recursively walks a deeply nested **glob pattern**, exhausting the Node stack. It is a development/CI availability risk, not a vulnerability triggered by arbitrary CSS contents. Current lint input is the checked-in `src/**/*.{css,scss}`; `.stylelintrc.json` has no externally supplied glob overrides. Repository/config changes and custom local invocations remain trust boundaries: do not pass untrusted glob patterns into this toolchain.

All affected packages are dev dependencies. The published browser JavaScript imports local components only; the static CSS/JavaScript does not bundle Stylelint or braces. Production-only audit is clean. No remote visitor-to-glob input path was found. This narrows observed exposure; it does not remove the vulnerable package or authorize an exception. Independent read-only review confirmed the released dependency paths and this reachability assessment.

### Verification (2026-10-22 follow-up)

Source baseline: main `9788f40f8ec490b6e7f5820aac667a44ed178c52`, existing PR head `79a4b751f2578e372e648bfd4d04649dcc1968eb`. Main and the lockfile are unchanged by this follow-up. Work was medium-complexity/moderate effort; the parent performed integration and runtime checks, and one independent agent reviewed upstream dependency options and exposure.

Official Node macOS arm64 archives were verified against official SHA-256 manifests. Both Node **22.23.4** and **24.22.1** passed separate Safe Chain protected clean installs (`npm ci --ignore-scripts`), non-mutating Stylelint, all CSS/JavaScript/HTML builds (21 Pug pages), dependency-tree validation, and byte-for-byte comparison of all **27** tracked dist/example artifacts with the existing PR head. Those artifacts also match main. Lifecycle scripts were disabled locally; esbuild's existing optional platform binary worked. CI uses ordinary `npm ci`, including its configured lifecycle behavior, and is tracked separately.

Both runtimes returned exit 1 from full `npm audit --audit-level=high` with **10 high, 0 other findings**, and exit 0 from `npm audit --omit=dev` with zero findings. No project test script or existing automated test suite is defined; lint, all build targets, dependency integrity and generated-output regression are the applicable automated checks. Browser/device acceptance and Windows-specific development-server verification remain pending.

CI disables matrix fail-fast so an audit failure on one runtime does not cancel the other runtime. CI now runs the existing lint/build and a tracked dist/example equality check before the unchanged blocking full audit. This preserves quality evidence even when audit fails. It cannot make the workflow green while the vulnerability remains. Pages keeps its early audit gate and will not deploy this lockfile while the blocker persists.

The pre-existing CSS size report still warns at minified 96.22 KB / 85 KB and gzip 15.68 KB / 15 KB; output did not change. Before this follow-up, [PR CI run 39716301447](https://github.com/ysnotksk/moonshot/actions/runs/39716301447) failed at audit on both Node versions; Dependency Review and Secret Scanning passed. New head CI evidence is recorded in the PR discussion.

### Deployment and disposition

The last observed [successful Pages run 36314378754](https://github.com/ysnotksk/moonshot/actions/runs/36314378754) deployed main `9788f40f8ec490b6e7f5820aac667a44ed178c52` on 2026-09-27. The public index responded successfully on 2026-10-22. That does not prove a patched runtime was used for its historical build or constitute human acceptance. No PR merge, dispatch or new deployment was performed. A later approved/main merge would trigger Pages automatically; verify the actual run and revision before reporting deployment.

**HOLD: keep Draft PR #20 and Issue #19 open.** The audit blocker is not resolved, so the PR is not ready to merge. No recurring monitor or exception was created. Resume when an official supported fix or dependency path is published, then repeat the matrix, full audit, build regression and human acceptance.
