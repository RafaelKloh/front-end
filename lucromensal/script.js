const myHeaders = {
    "Content-Type": "application/json",
};
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    lucroMensal()
})
async function lucroMensal() {
    const data = document.querySelector("#mes")
    const resVenda = await fetch(
        `http://localhost:3001/vendas?mes=${data.value}`)

    if (resVenda.status == 200) {
        const resJson = await resVenda.json()
        console.log(resJson)
        let total = 0
        let qtd = 0
        let quantidade = 0
        let custo = 0
        let venda = 0
        for (var i = 0; i < resJson.length; i++) {

            console.log(resJson[i])
            const resProdutos = await fetch(
                `http://localhost:3001/produtos?id=${resJson[i].idProduto}`
            )
            const resProd = await resProdutos.json()
            console.log(resProd)
            qtd = parseInt(resJson[i].quantidade)
            quantidade = quantidade + parseInt(resJson[i].quantidade)
            custo = resProd[0].compra
            venda = resProd[0].venda
            total = total + ((qtd * venda) - (qtd * custo))
        }
        
        const result = document.querySelector("p")
        result.insertAdjacentHTML("beforeend", `
        
        <p>Quantidade:${quantidade}</p>
        <p>Total:${total}R$</p>
        `)
    }
    else {
        console.log("Algo deu errado")
    }
}