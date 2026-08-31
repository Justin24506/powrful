# Powrful

Powrful is a macOS application designed to monitor the **power usage** and
**charging status** of your devices. With Powrful, you can gain insights into
your device's power consumption.

> <a id="vibe-coded-warning"></a>
> ## ⚠️ Warning: Vibe-Coded Fork — For Personal Use
>
> This is a **vibe-coded** fork of
> [Powerflow](https://github.com/lzt1008/powerflow), built as an experiment in
> what is possible with free AI. It is intended **primarily for my own
> personal use**.
>
> You are **not forbidden** from using it on your own machine, but please
> know that I may **not be able to fix issues** you run into or **add new
> features** you request.
>
> Use it at your own risk. This is just an experiment.

## Features

- 🖥️ **Monitoring**: Monitor your Mac and iOS devices power consumption and
  charging status in real-time.
- 📊 **Detailed Insights**: View historical power usage and charging trends.
- 🚀 **Lightweight and Fast**: Designed with performance in mind for
  seamless operation.

---

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your branch.
4. Create a pull request for review.

### Developer tooling

This repo uses [lefthook](https://github.com/evilmartians/lefthook) for git
hooks, installed automatically via `postinstall`. All checks are exposed both
as `pnpm` scripts and `make` targets:

| Task               | pnpm                | make                |
| ------------------ | ------------------- | ------------------- |
| Install deps       | `pnpm install`      | `make install`      |
| Dev server         | `pnpm dev`          | `make dev`          |
| Build              | `pnpm build`        | `make build`        |
| Test (JS + Rust)   | `pnpm test`         | `make test`         |
| Rust tests only    | `pnpm test:rust`    | `make test-rust`    |
| Test watch (JS)    | `pnpm test:watch`   | `make test-watch`   |
| Lint (JS)          | `pnpm lint`         | `make lint`         |
| Lint (Rust/clippy) | `pnpm lint:rust`    | `make lint-rust`    |
| Typecheck          | `pnpm typecheck`    | `make typecheck`    |
| Format (auto-fix)  | `pnpm format`       | `make format`       |
| Format check       | `pnpm format:check` | `make format-check` |
| Clean build output | –                   | `make clean`        |

The `pre-commit` hook lints/auto-formats staged files and runs a secret scan;
`pre-push` runs typecheck, the JS test suite, and the format check.

- **Secret scan** uses [gitleaks](https://github.com/gitleaks/gitleaks).
  Install it with `brew install gitleaks` (or from the gitleaks releases
  page). If it isn't installed, the scan is **skipped** with a notice rather
  than blocking your commit.

- Rust linting (`clippy`) and the full Rust test suite are runnable on demand
  via `pnpm lint:rust` and `pnpm test:rust`; they are kept out of the
  `pre-push` path to keep pushes fast.

## Acknowledgements

A huge thank you to [lzt1008](https://github.com/lzt1008) for creating the
original [Powerflow](https://github.com/lzt1008/powerflow) project. Without
their work, Powrful would not have been possible.

## License

Powrful is released under the
[MIT License](https://github.com/Justin24506/powrful/blob/main/LICENSE).
Feel free to use, modify, and distribute this software as per the license
terms.

## Feedback and Support

We'd love to hear from you! If you have any feedback, issues, or
suggestions, please
[open an issue](https://github.com/Justin24506/powrful/issues) on GitHub —
but please keep in mind the
[warning above](#vibe-coded-warning).

Thank you for using Powrful! 🚀
