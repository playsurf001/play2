export default {
async fetch(req, env) {
 const url = new URL(req.url)
 if (req.method === "POST" && url.pathname === "/api/login") {
  const {username,password} = await req.json()
  const user = await env.DB.prepare(
   "SELECT * FROM users WHERE username=? AND password=?"
  ).bind(username,password).first()
  return Response.json({ok:!!user})
 }
 if (req.method === "POST" && url.pathname === "/api/lancamento") {
  const {designer,quantidade} = await req.json()
  await env.DB.prepare(
   "INSERT INTO lancamentos (designer,quantidade,status,created_at) VALUES (?,?, 'CRIADA', datetime('now'))"
  ).bind(designer,quantidade).run()
  return Response.json({ok:true})
 }
 return new Response("API online")
}}