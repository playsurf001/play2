export default {
  fetch(request, env, ctx) {
    return new Response("Worker funcionando 🚀", {
      headers: { "content-type": "text/plain" },
    });
  },
};
