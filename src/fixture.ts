import {
  Fixtures,
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
} from "@playwright/test";
import { ContextCache } from "./contextCache";

export function createSharedContextFixture(): Fixtures<
  PlaywrightTestArgs & PlaywrightTestOptions,
  PlaywrightWorkerArgs & PlaywrightWorkerOptions,
  PlaywrightTestArgs & PlaywrightTestOptions,
  PlaywrightWorkerArgs & PlaywrightWorkerOptions
> {
  const contextCache = new ContextCache();
  return {
    context: async ({ browser, baseURL, browserName, contextOptions }, use) => {
      const context = await contextCache.getOrCreateContext({
        browser,
        baseURL,
        browserName,
        contextOptions,
      });
      await use(context);
    },
    page: async ({ context }, use) => {
      const page = await context.newPage();
      await use(page);
      await page.close();
    },
  };
}
