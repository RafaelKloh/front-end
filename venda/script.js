async function getPRodutos() {
    const response = await fetch("https://server-n7iu.onrender.com/produtos/")
    const produtos = await response.json()
    console.log(produtos)
    options(produtos)
}

function options(produtos = []) {
    produtos.forEach(produto => {
        const select = document.querySelector("select")
        select.insertAdjacentHTML("beforeend", `
        <option value="${produto.id}" id="${produto.id}">${produto.nome}</option>
        `)
    })

}
getPRodutos()

const myHeaders = {
    "Content-Type": "application/json",
};
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.stopPropagation()
    event.preventDefault()
    cadastrarVenda()
})
async function cadastrarVenda() {
    const select = document.querySelector("select")
    console.log(select.value)
    const quantidade = document.querySelector("#qtd")
    const data = document.querySelector("#data")
    const mes = data.value.substr(5, 2)
    console.log(data.value)
    console.log(mes)
    const timeStamp = new Date().getTime()
    const vendas = {
        id: timeStamp,
        idProduto: select.value,
        quantidade: quantidade.value,
        data:data.value,
        mes:mes
    }
    const bodyJson = JSON.stringify(vendas)
    const res = await fetch(
        "https://server-n7iu.onrender.com/vendas/",
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        })
    if (res.status == 201) {
        const resJson = await res.json()
        console.log(resJson)
        window.location.replace("../home")
    }
    else {
        console.log("Algo deu errado")
    }
}