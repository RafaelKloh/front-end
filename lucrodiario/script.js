const myHeaders = {
    "Content-Type": "application/json",
};
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    lucroDiario()
})
async function lucroDiario() {
    //pega a data do input
    const data = document.querySelector("#data")
    //pega a venda do dia da data
    const resVenda = await fetch(
        `http://localhost:3001/vendas?data=${data.value}`)

    if (resVenda.status == 200) {
        const resJson = await resVenda.json()
        console.log(resJson)
        for (var i = 0; i < resJson.length; i++) {
        
        console.log(resJson[i])
        const resProdutos = await fetch(
            `http://localhost:3001/produtos?id=${resJson[i].idProduto}`
        )
        const resProd = await resProdutos.json()
        console.log(resProd)
        const qtd = resJson[i].quantidade
        const custo = resProd[0].compra
        const venda = resProd[0].venda
        const totoal =+ (qtd*venda) - (qtd * custo)
        const result = document.querySelector("p")
        result.insertAdjacentHTML("beforeend", `
        <p>Produto vendido:${resProd[0].nome}</p>
        <p>Quantidade:${qtd}</p>
        <p>Total:${totoal}R$</p>
        `)
        }
    }
    else {
        console.log("Algo deu errado")
    }
}