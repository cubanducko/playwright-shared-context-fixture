<div align="center">
  <br>
  <header>
    <img src="https://github.com/cubanducko/playwright-shared-context-fixture/blob/main/assets/logo.webp?raw=true" height="64" />
  </header>
  <br>
  <h1>playwright-shared-context-fixture</h1>
  <p> 👩‍❤️‍👩 Share a common context in <strong>playwright</strong> to cache SPA's and speed up your tests</p>
</div>

<div align="center">

[![Build Status][build-badge]][build-link]
[![Code Style][prettier-badge]][prettier-link]
[![Package Version][npm-badge]][npm-link] <br>
[![MIT License][license-badge]][license-link]

</div>

<br>

## 🚀 Use case

<p>When testing big SPA's that weight significantly the default behavior of creating a new context with every test suite can lead to a lot of wasted time in fetching up the SPA assets.</p>
<p>By sharing a common context SPA resources are fetched once and re-used in all tests</p>

<br>

## 🌱 Installation

```bash
# Yarn
yarn add --dev playwright-shared-context-fixture

# PNPM
pnpm add --D playwright-shared-context-fixture

# NPM
npm install --save-dev playwright-shared-context-fixture

```

<br>

## 📝 Usage

Include the `sharedContextFixture` in the `@playwright/test` extend

```ts
import { test as base } from "@playwright/test";
import { createSharedContextFixture } from "playwright-shared-context-fixture";

const fixtures = createSharedContextFixture();
const test = base.extend(fixtures);

// Context is now shared
test("my test", async ({ page }) => {});
```

<br>

## LICENSE

MIT

[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-link]: https://opensource.org/licenses/MIT
[npm-badge]: https://img.shields.io/npm/v/playwright-shared-context-fixture
[npm-link]: https://www.npmjs.com/package/playwright-shared-context-fixture
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?logo=prettier
[prettier-link]: https://prettierjs.org/en/download/
[build-badge]: https://github.com/cubanducko/playwright-shared-context-fixture/actions/workflows/build.yml/badge.svg
[build-link]: https://github.com/cubanducko/playwright-shared-context-fixture/actions/workflows/build.yml
