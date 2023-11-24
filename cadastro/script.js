import { toastify } from "../toastify.js";
const form = document.querySelector("form")
const myHeaders = {
    "Content-Type": "application/json", 
  };
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    register()
})
async function register(){
    const user = {
        email: document.querySelector("#input-email").value,
        password: document.querySelector("#input-password").value
    }
    const btn = document.querySelector("#register-submit")
   
    const bodyJson = JSON.stringify(user)
    const res = await fetch("http://localhost:3001/users",{
        headers:myHeaders, 
        method:"POST",
        body:bodyJson
    })
    btn.setAttribute("disabled",true)
    console.log(res)
    if(res.ok){
        toastify("cadastro realizado com sucesso","sucess")
        setTimeout(() => {
            btn.setAttribute("disabled",false)
            window.location.replace("../index.html")
        }, 3000);
    }else{
        toastify("algo deu errado, tente novamente","error")
        btn.setAttribute("disabled",false)
    }
    const resJson = res.json()

}