let increaseBtn = document.getElementById('increase-btn')
let decreaseBtn = document.getElementById('decrease-btn')

let resultShow = document.getElementById('result')

result = 0


increaseBtn.addEventListener('click', () => {
    resultShow.innerHTML = result++
    
})
decreaseBtn.addEventListener('click', () => {
    resultShow.innerHTML = result--
})