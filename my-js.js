document.body.style.cssText = "margin: auto; background-color: #ececec; font-family: Verdana, Geneva, Tahoma, sans-serif"

let header = document.createElement('header')
document.body.appendChild(header)
header.style.cssText = "background-color: white; display: flex; flex-direction: row; align-items: center; justify-content: space-between;"


let logo = document.createElement('div')
header.appendChild(logo)
let logoTxt = document.createTextNode("Amr")
logo.appendChild(logoTxt)
logo.style.cssText = "margin-left: 10px; color: #21a969; font-weight: bold;"


let ulEle = document.createElement("ul")
header.appendChild(ulEle)
ulEle.style.cssText = "display: flex; flex-direction: row; list-style: none;"


let liEleTxtarr = ["Home" , "About" , "Service" , "Contact"]
liEleTxtarr.map(function(ele){
    let liEle = document.createElement("li")
    ulEle.appendChild(liEle)
    let textNode = document.createTextNode(ele);
    liEle.appendChild(textNode);
    liEle.style.cssText = "margin-right: 10px; color: #737375;"
})


// let menu = document.createElement('div')
// menu.className = "menu"
// header.appendChild(menu)
// let ulEle = document.createElement("ul")
// menu.appendChild(ulEle)
// let liEle1 = document.createElement("li")
// let liEle2 = document.createElement("li")
// let liEle3 = document.createElement("li")
// let liEle4 = document.createElement("li")
// ulEle.appendChild(liEle1)
// ulEle.appendChild(liEle2)
// ulEle.appendChild(liEle3)
// ulEle.appendChild(liEle4)
// let liEle1Txt = document.createTextNode("Home")
// let liEle2Txt = document.createTextNode("About")
// let liEle3Txt = document.createTextNode("Service")
// let liEle4Txt = document.createTextNode("Contact")
// liEle1.appendChild(liEle1Txt)
// liEle2.appendChild(liEle2Txt)
// liEle3.appendChild(liEle3Txt)
// liEle4.appendChild(liEle4Txt)





// =================section=================


let section = document.createElement("div")
document.body.appendChild(section)
section.style.cssText = "display: grid; margin: auto; grid-template-columns: repeat(3, auto); grid-template-rows: repeat(5, auto); gap: 10px; margin: 10px;"

for (let i = 1; i <= 15; i++){

    let content = document.createElement("div")
    section.appendChild(content)
    content.style.cssText = "text-align: center; background-color: white; padding: 20px;"

    let contentTxt = document.createTextNode(i)
    content.appendChild(contentTxt)

    let product = document.createElement("div")
    content.appendChild(product)
    product.style.cssText = "color: #737375; font-size: 8px;"

    let productTxt = document.createTextNode("product")
    product.appendChild(productTxt)
}



// let content = document.createElement("div")
// section.appendChild(content)
// content.className = "content"

// let count = 1
// let contentTxt = document.createTextNode(count)
// content.appendChild(contentTxt)



// =================footer=================

let footer = document.createElement("div")
    document.body.appendChild(footer)
    footer.style.cssText = "color: white; background-color: #21a969; padding: 10px; text-align: center;"
    
    let footertTxt = document.createTextNode("Copyright 2024")
    footer.appendChild(footertTxt)