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