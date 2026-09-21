import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function request(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const response = await request();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /rel="canonical" href="https:\/\/serene-home-care\.vercel\.app\/"/i);
  assert.match(html, /property="og:image" content="https:\/\/serene-home-care\.vercel\.app\/serene-social-v2\.jpg"/i);
  assert.match(html, /property="og:image:type" content="image\/jpeg"/i);
  assert.match(html, /"@type":"LocalBusiness"/i);
});

test("serves crawl directives and a complete sitemap", async () => {
  const robotsResponse = await request("/robots.txt");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Sitemap: https:\/\/serene-home-care\.vercel\.app\/sitemap\.xml/i);

  const sitemapResponse = await request("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /<urlset/i);
  assert.match(sitemap, /https:\/\/serene-home-care\.vercel\.app\/services\/post-hospital-recovery/i);
});
