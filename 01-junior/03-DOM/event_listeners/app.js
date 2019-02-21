const buttonEls = document.getElementsByTagName('button')
const buttonEl = buttonEls[0]

const passwordEl = document.querySelector('[type=password]')

const counterZ = {
  initialCount: 0,
  increment: function(event) { 
    console.log(event.target)
    event.preventDefault()
    this.initialCount++
  }
}

const incrementBoundTo_counterZ = 
        counterZ.increment.bind(counterZ)

buttonEl.addEventListener(
  'click',
  incrementBoundTo_counterZ
)




const outer = document.querySelector('.outer')
const middle = document.querySelector('.middle')
const inner = document.querySelector('.inner')

const highlightBorder = function (event) {
  if (this.classList.contains('middle')) {
    return;
  }

  console.log("EVENT WHOOP WHOOP AT", event, this)
  this.style.border = '8px solid red'
}

outer.addEventListener('click', () => console.log('hi'))
middle.addEventListener('click', highlightBorder)
inner.addEventListener('click', highlightBorder)