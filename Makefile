.PHONY: dev build preview test test-rust test-watch lint lint-rust typecheck format format-check tauri clean install

install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm build

preview:
	pnpm preview

tauri:
	pnpm tauri

test:
	pnpm test

test-rust:
	pnpm test:rust

test-watch:
	pnpm test:watch

lint:
	pnpm lint

lint-rust:
	pnpm lint:rust

typecheck:
	pnpm typecheck

format:
	pnpm format

format-check:
	pnpm format:check

clean:
	pnpm dlx tsc --build --clean
	cargo clean
