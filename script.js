const pantalla = document.querySelector(".pantalla") //toma el div pantalla por la clase pantalla ya que no tiene id
const botones = document.querySelectorAll(".btn") //toma todas las clases btn

//agrega el event listener para que cada que se de clic, muestre en consola lo que contiene cada botón
/*=> se llama función de flecha, el => se usa para definir funciones de manera más compacta y suele ser útil 
en situaciones donde se requieren funciones anónimas o callbacks, como en tu ejemplo con 
forEach() y addEventListener() para manejar eventos de clic en botones.*/
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent; //guarda en la variable el texto que tiene el botón apretado

        if(boton.id === "C"){
            pantalla.textContent = "0"
            return; //termina la función del event listener y no se ejecuta lo debajo de este if (para que no se escriba C en la pantalla)
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "e"){
                pantalla.textContent = "0" //por si no hay números que borrar
            }else {
            pantalla.textContent = pantalla.textContent.slice(0, -1) //borra el último número
            }
            return //para que no se escriba la flecha al borrar, lo mismo que en C
        }

        if(boton.id === "igual"){
            try{
            pantalla.textContent = eval(pantalla.textContent) //evalúa un conjunto de string que tenga operaciones matemáticas
            } catch{
                pantalla.textContent = "e"
            }
            return
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "e"){
            pantalla.textContent = botonApretado; //para que reemplace el 0 del inicio al dar clic
        }else{
        pantalla.textContent += botonApretado; //se van agregando los números seleccionados a la pantalla
        }
    })
})

