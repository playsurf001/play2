const API = "/api"
export async function login(username, password) {
  const r = await fetch(API + "/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({username,password})
  })
  return r.json()
}
export async function salvarLancamento(designer, quantidade) {
  const r = await fetch(API + "/lancamento", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({designer,quantidade})
  })
  return r.json()
}