import {
  Browser,
  BrowserContext,
  PlaywrightTestOptions,
} from "@playwright/test";

export type ContextCacheArgs = Pick<
  PlaywrightTestOptions,
  "baseURL" | "contextOptions"
> & {
  browserName: string | undefined;
  browser: Browser;
};

export class ContextCache {
  cache = new Map<string, BrowserContext>();

  public async getOrCreateContext({
    browser,
    baseURL,
    browserName,
    contextOptions,
  }: ContextCacheArgs): Promise<BrowserContext> {
    const id = `baseUrl:${baseURL}//browserName:${browserName}//contextOptions:${JSON.stringify(
      contextOptions
    )}`;

    if (this.cache.has(id)) {
      return this.cache.get(id) as BrowserContext;
    } else {
      const context = await browser.newContext(contextOptions);
      // Create a blank page to ensure stays open
      await context.newPage();
      this.cache.set(id, context);
      return context;
    }
  }
}
