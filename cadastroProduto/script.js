const myHeaders = {
    "Content-Type": "application/json",
};
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    register()
})
async function register() {
    const nome = document.querySelector("#nome")
    const compra = document.querySelector("#valor-compra")
    const venda = document.querySelector("#valor-venda")
    const timeStamp = new Date().getTime()
    const produtos = {
        nome: nome.value,
        compra: compra.value,
        venda: venda.value,
        id: timeStamp
    }
    console.log(produtos)
    const bodyJson = JSON.stringify(produtos)
    const res = await fetch(
        "https://server-n7iu.onrender.com/produtos",
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


