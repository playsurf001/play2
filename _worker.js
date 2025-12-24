import manifest from "__STATIC_CONTENT_MANIFEST";

const ASSETS = new Map(JSON.parse(manifest));

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // raiz vira index.html
    if (path === "/") {
      path = "/index.html";
    }

    // tenta achar arquivo no dist
    const assetKey = ASSETS.get(path.slice(1));
    if (assetKey) {
      return new Response(
        await env.__STATIC_CONTENT.get(assetKey),
        {
          headers: {
            "content-type": getContentType(path),
          },
        }
      );
    }

    return new Response("404 - Arquivo não encontrado", { status: 404 });
  },
};

function getContentType(path) {
  if (path.endsWith(".html")) return "text/html";
  if (path.endsWith(".js")) return "application/javascript";
  if (path.endsWith(".css")) return "text/css";
  if (path.endsWith(".json")) return "application/json";
  if (path.endsWith(".svg")) return "image/svg+xml";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  return "application/octet-stream";
}
