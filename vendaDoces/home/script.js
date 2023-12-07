const token = localStorage.getItem("@token-exemplo")
if (!token) {
    window.location.replace("../index.html")
}

const title = document.querySelector("h1")
const doces = document.querySelector("ul")

const myHeaders = {
    "Content-Type": "application/json",
};
async function getProdutos() {
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
}

getProdutos()


