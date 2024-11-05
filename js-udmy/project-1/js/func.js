"use strict"

document.addEventListener("DOMContentLoaded", () => {
    let clickCount = 0
    const clickValue = document.getElementById("clickValue");
    const clickAdd = document.getElementById("clickAdd");
    const clickAdd10 = document.getElementById("clickAdd10");
    const clickReset = document.getElementById("clickReset");

    clickAdd.addEventListener("click", () => {
        clickCount++;
        clickValue.innerText = clickCount;        
    })

    clickAdd10.addEventListener("click", () => {
        clickCount+=10;
        clickValue.innerText = clickCount;        
    })

    clickReset.addEventListener("click", () => {
        clickCount = 0;
        clickValue.innerText = 0;    
    })
})

document.addEventListener("DOMContentLoaded", () => {
    // clickAdd.addEventListener("click", () => {
    //     let bodyTagClass = document.getElementById("body");
    //     bodyTagClass.className = "bg-primary"
    // })
    // clickAdd10.addEventListener("click", () => {
    //     let bodyTagClass = document.getElementById("body");
    //     bodyTagClass.className = "bg-light"     
    // })
            let i = 0;
            const bgColors = ["bg-danger", "bg-light", "bg-primary", "bg-secondary", "bg-dark"]
            let bodyTag = document.getElementsByTagName("body");
            const defColor = bodyTag[0].className
                clickAdd.addEventListener("click", () => {
                
                if (i < bgColors.length) {
                    bodyTag[0].className = bgColors[i]
                    i++
                } else {
                    i = 0;
                    bodyTag[0].className = defColor
                }
    })
});