import { salvarLancamento } from "./api.js"
document.getElementById("ok").onclick = async () => {
  const qtd = document.getElementById("qtd").value
  if (!qtd) return alert("Digite a quantidade")
  await salvarLancamento("Amanda", qtd)
  document.body.style.background = "#d4ffd4"
  alert("Quantidade salva!")
}