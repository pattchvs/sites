const buttons = document.querySelectorAll('#image-picker li')
const image = document.querySelectorAll('#product-demo')
const colorName = document.querySelectorAll('#color-name-selected')
const chipImage = document.querySelectorAll('#chip img')
const dynamicIsland = document.querySelectorAll('#dynamic img')
buttons.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        buttons.forEach((btn) =>{
            btn.querySelector('.color').classList.remove("selected")
        })

        const button = e.target
        const id = button.getAttribute('id')
        button.querySelector(".color").classList.add('selected')
        console.log(colorName)
        console.log(id)
        if(id == 'golden'){
            colorName[0].innerHTML = "Dourado"
        }
        if(id == 'purple'){
            colorName[0].innerHTML = "Roxo-Profundo"
        }
        if(id == 'silver'){
            colorName[0].innerHTML = "Prateado"
        }
        if(id == 'grafite'){
            colorName[0].innerHTML = "Preto-Espacial"
        }
       
        console.log(chipImage[0])
        chipImage[0].setAttribute('src', `assets/img/a16_${id}.jpg`)
        dynamicIsland[0].setAttribute('src', `assets/img/dynamic_island_${id}.jpg`)
        // image.classList.add('changing')
        // image.setAttribute("src", `assets/img/iphone_${id}.jpg`)
        console.log(image)

        // setTimeout(()=>{
        //     image.classList.toggle("changing")
        // }, 300)
    })
})