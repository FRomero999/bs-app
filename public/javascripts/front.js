    document.querySelectorAll("a.button-delete").forEach( (b)=>{
    b.addEventListener("click", (ev)=>{
        let ok = window.confirm("¿Desea borrar?");
        if(!ok){
            ev.preventDefault();
            return false;
        } else{
            return true;
        }
    })

})

var template = document.querySelector("template#userRow");
var bReload = document.querySelector("button#reload");

if(bReload) bReload.addEventListener("click",()=>{
    fetch("/api/users").then(
        response => response.json()
    ).then(
        data=>{
            console.log(data)
            document.querySelector("tbody").innerHTML="";
            data.forEach( (user,index)=>{
                newRow = template.content.cloneNode(true);
                newRow.querySelector(".pos").textContent = index;
                newRow.querySelector(".nombre").textContent = user.name;
                newRow.querySelector(".email").textContent = user.email;
                newRow.querySelector("a").href = "/delete/"+index;
                document.querySelector("tbody").appendChild(newRow);           
            })
        }
    )
})


try {
    let table = new DataTable('#tabla', {
    responsive: true,
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
    },
})
} catch {
    console.log("Error con DataTable")
}
