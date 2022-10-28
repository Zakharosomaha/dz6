const ROOT = document.getElementById('root')
const buttons = document.querySelector('.buttons')

buttons.style.cssText = `
display: flex;
gap:40px;
justify-content: center;
align-items: center;
padding-top: 50px;

`
const btnModalOne = document.createElement('button')
buttons.append(btnModalOne);
btnModalOne.textContent = 'СМОТРИТЕ СЮДА1'
btnModalOne.style.cssText = `
background-color: white;
color: red;
font-size: 1rem;
display: block;
padding: 9px 10px;
border-radius: 5px;
border: none;
cursor: pointer;
`
const btnModalTwo = document.createElement('button')
buttons.append(btnModalTwo);
btnModalTwo.textContent = 'СМОТРИТЕ СЮДА 2'
btnModalTwo.style.cssText = `
background-color: white;
color: red;
font-size: 1rem;
display: block;
padding: 9px 10px;
border-radius: 5px;
border: none;
cursor: pointer;
`
const btnModalThree = document.createElement('button')
buttons.append(btnModalThree);
btnModalThree.textContent = 'СМОТРИТЕ СЮДА 3'
btnModalThree.style.cssText = `
background-color: white;
color: red;
font-size: 1rem;
display: block;
padding: 9px 10px;
border-radius: 5px;
border: none;
cursor: pointer;
`

const modal = document.createElement('div')
modal.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000050;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(4px);
`
const modalWindow = document.createElement('div')
modalWindow.style.cssText = `

position: absolute;
width: 600px;
height: 300px;
background-color: yellow;
padding: 70px;
font-size: 1.5rem;
text-align: center;
`
modalWindow.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, exercitationem placeat deleniti recusandae iste fuga odit possimus dolores'

modal.append(modalWindow)

btnModalOne.addEventListener('click', () => {
    ROOT.append(modal)
    console.log('clicked');
})

btnModalTwo.addEventListener('click', () => {
    ROOT.append(modal)
    console.log('clicked');
})

btnModalThree.addEventListener('click', () => {
    ROOT.append(modal)
    console.log('clicked');
})

const closeWindow = document.createElement('button')
closeWindow.textContent = 'x'
modalWindow.append(closeWindow)


closeWindow.style.cssText = `
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    width: 30px;
    height: 30px;
    color: white;
    border: none;

`

closeWindow.addEventListener('click', (event) => {
    ROOT.removeChild(modal)
})

modal.addEventListener('click', (event)  =>{
    if(event.target !== modalWindow)
    modal.remove()
} )

// ROOT.append(modal)

