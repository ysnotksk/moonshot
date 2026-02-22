# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.2.x   | :white_check_mark: |
| < 0.2   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in Moonshot CSS Framework, please report it responsibly.

**Do NOT open a public issue.** Instead:

1. Email: [security contact to be configured]
2. Include a description of the vulnerability, steps to reproduce, and potential impact.
3. You will receive an acknowledgment within 48 hours.
4. We aim to release a fix within 7 days of confirmation.

## Scope

Moonshot CSS Framework is a pure CSS/SCSS framework with zero runtime dependencies. Security concerns are limited to:

- **CSP Compatibility**: The framework uses no inline styles or scripts. All styles are delivered via external stylesheets, making it fully CSP-compatible.
- **No JavaScript Dependencies**: Core CSS has zero production dependencies.
- **Build Dependencies**: Development dependencies (sass, esbuild, stylelint) are pinned and audited regularly.

## Security Best Practices

For detailed security guidelines when building with Moonshot, see:

- [Security Guidelines](docs/SECURITY_GUIDELINES.md)
- [Security Checklist](docs/SECURITY.md)
