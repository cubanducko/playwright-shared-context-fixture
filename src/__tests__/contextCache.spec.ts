import { Browser } from "@playwright/test";
import { ContextCache, ContextCacheArgs } from "../contextCache";

describe("ContextCache", () => {
  const playwrightMock = {
    browser: {
      // Return a new object with different reference
      newContext: async () => ({ newPage: () => undefined }),
    } as unknown as Browser,
    browserName: "firefox",
    baseURL: "test",
    contextOptions: {},
  } as ContextCacheArgs;

  test("creates a new context and adds it to the map", async () => {
    const contextCache = new ContextCache();

    const newContext = await contextCache.getOrCreateContext(playwrightMock);

    expect(
      contextCache.cache.get(
        `baseUrl:${playwrightMock.baseURL}//browserName:${playwrightMock.browserName}//contextOptions:{}`
      )
    ).toBe(newContext);
  });

  test("retrieves existing context if already created", async () => {
    const contextCache = new ContextCache();

    const newContext = await contextCache.getOrCreateContext(playwrightMock);

    expect(await contextCache.getOrCreateContext(playwrightMock)).toBe(
      newContext
    );
  });
});
