# Git Policy

This document outlines the Git branching and commit message policy for the Moonshot project.

## Table of Contents

- [Branching Strategy](#branching-strategy)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)

## Branching Strategy

We use a simplified branching model based on GitFlow.

### Permanent Branches

-   `main`: Represents the production-ready code. All merges into `main` must come from `develop` and correspond to a release.
-   `develop`: The main development branch. All feature branches are created from `develop` and merged back into it.

### Temporary Branches

These branches are used for specific tasks and are deleted after being merged.

-   `feature/<feature-name>`: For developing new features.
    -   Example: `feature/user-authentication`
-   `fix/<issue-name>`: For fixing bugs.
    -   Example: `fix/navbar-rendering-bug`
-   `chore/<task-name>`: For maintenance tasks that don't add features or fix bugs (e.g., updating dependencies, refactoring).
    -   Example: `chore/update-dependencies`
-   `docs/<doc-name>`: For writing documentation.
    -   Example: `docs/add-api-documentation`

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This creates an explicit commit history, which makes it easier to track features, fixes, and breaking changes.

### Format

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Type

The `<type>` must be one of the following:

-   **feat**: A new feature.
-   **fix**: A bug fix.
-   **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation. Does not modify `src` or `test` files.
-   **refactor**: A code change that neither fixes a bug nor adds a feature.
-   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
-   **docs**: Documentation only changes.
-   **test**: Adding missing tests or correcting existing tests.
-   **perf**: A code change that improves performance.
-   **ci**: Changes to our CI configuration files and scripts.
-   **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
-   **revert**: Reverts a previous commit.

### Examples

**Commit with description and body:**

```
feat(auth): add password reset functionality

Implement the "forgot password" flow, allowing users to request a password reset link via email. The link directs them to a secure page to set a new password.
```

**Commit with `!` to draw attention to a breaking change:**

```
refactor!: drop support for Node 18

BREAKING CHANGE: The minimum required Node.js version is now 20. This change is necessary to leverage new features in the V8 engine and improve performance.
```

## Pull Requests

-   All work should be done in a feature/fix/chore branch, not directly on `develop` or `main`.
-   Before opening a Pull Request (PR), ensure your branch is up-to-date with the `develop` branch.
-   PRs should be small and focused on a single piece of functionality.
-   Provide a clear description of the changes in the PR. Link to any relevant issues.
-   At least one review is required before merging a PR into `develop`.
