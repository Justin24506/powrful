# Powerflow

![Powerflow Screenshot](https://raw.githubusercontent.com/lzt1008/powerflow/assets/screenshot.png)

Powerflow is a macOS application designed to monitor the **power usage** and **charging status** of your devices. With Powerflow, you can gain insights into your device's power consumption.

## Features

- 🖥️ **Monitoring**: Monitor your Mac and iOS devices power consumption and charging status in real-time.
- 📊 **Detailed Insights**: View historical power usage and charging trends.
- 🚀 **Lightweight and Fast**: Designed with performance in mind for seamless operation.

---

## Installation

### Manual Installation
1. Download the latest `.dmg` file from the [Releases](https://github.com/lzt1008/powerflow/releases) page.
2. Open the `.dmg` file and drag the Powerflow app to your Applications folder.
3. If you encounter an error, try the following steps:
- Open **System Preferences** > **Security & Privacy**.
- In the **General** tab, you will see a message about Powerflow being blocked.
- Click **"Open Anyway"**.
- Confirm the dialog that appears by clicking **"Open"**.

### Install via Homebrew

Open your terminal and run the following command:

```bash
brew tap lzt1008/powerflow
brew install --cask powerflow
```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your branch.
4. Create a pull request for review.

### Developer tooling

This repo uses [lefthook](https://github.com/evilmartians/lefthook) for git hooks,
installed automatically via `postinstall`. All checks are exposed both as `pnpm`
scripts and `make` targets:

| Task                | pnpm                | make              |
| ------------------- | ------------------- | ----------------- |
| Install deps        | `pnpm install`      | `make install`    |
| Dev server          | `pnpm dev`          | `make dev`        |
| Build               | `pnpm build`        | `make build`      |
| Test (JS + Rust)    | `pnpm test`         | `make test`       |
| Rust tests only     | `pnpm test:rust`    | `make test-rust`  |
| Test watch (JS)     | `pnpm test:watch`   | `make test-watch` |
| Lint (JS)           | `pnpm lint`         | `make lint`       |
| Lint (Rust/clippy)  | `pnpm lint:rust`    | `make lint-rust`  |
| Typecheck           | `pnpm typecheck`    | `make typecheck`  |
| Format (auto-fix)   | `pnpm format`       | `make format`     |
| Format check        | `pnpm format:check` | `make format-check` |
| Clean build output  | –                    | `make clean`      |

The `pre-commit` hook lints/auto-formats staged files and runs a secret scan;
`pre-push` runs typecheck, the JS test suite, and the format check.

- **Secret scan** uses [gitleaks](https://github.com/gitleaks/gitleaks).
  Install it with `brew install gitleaks` (or from the gitleaks releases page).
  If it isn't installed, the scan is **skipped** with a notice rather than
  blocking your commit.
- **`AGENTS.md`** is intentionally excluded from version control (it holds local
  agent/editor instructions that vary per developer and needn't be shared).
- Rust linting (`clippy`) and the full Rust test suite are runnable on demand via
  `pnpm lint:rust` and `pnpm test:rust`; they are kept out of the `pre-push` path
  to keep pushes fast.

## License

Powerflow is released under the [MIT License](https://github.com/lzt1008/powerflow/blob/main/LICENSE). Feel free to use, modify, and distribute this software as per the license terms.

## Feedback and Support

We'd love to hear from you! If you have any feedback, issues, or suggestions, please [open an issue](https://github.com/lzt1008/powerflow/issues) on GitHub

Thank you for using Powerflow! 🚀
