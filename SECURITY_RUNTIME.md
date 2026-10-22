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
