const token = localStorage.getItem("@token-exemplo")
if (!token) {
    window.location.replace("../index.html")
}

const title = document.querySelector("h1")
const doces = document.querySelector("ul")

const myHeaders = {
    "Content-Type": "application/json",
};

const res = await fetch(
    "http://localhost:3001/produtos"
)

if (res.status == 200) {
    const resJson = await res.json()
    console.log(resJson)

    for (let i = 0; i < resJson.length; i++) {
        doces.insertAdjacentHTML("beforeend", `
           <li>
                ${resJson[i].nome}
           </li>`)
        console.log(resJson[i].nome)
    }
}

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    register()
})
async function register(){
    const nome = document.querySelector("#nome")
    const compra = document.querySelector("#valor-custo")
    const venda = document.querySelector("#valor-venda")
    const timeStamp = new Date().getTime()
    const produtos ={
        nome: nome.value,
        compra: compra.value,
        venda: venda.value,
        id:timeStamp
    }
    console.log(produtos)
    const bodyJson = JSON.stringify(produtos)
    const res = await  fetch(
        "http://localhost:3001/produtos",
        {
            headers:myHeaders,
            method:"POST",
            body: bodyJson
        })
        if (res.status == 201) {
            const resJson = await res.json()
        }
        else{
            console.log("Algo deu errado")
        }
}
const form = document.querySelector("form")
form.addEventListener("submit", (event)=> {
    event.preventDefault()
    register()
})


