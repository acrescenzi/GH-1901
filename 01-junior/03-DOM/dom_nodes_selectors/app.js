let appEl = document.getElementById('app')

let formEl = document.createElement('form')

appEl.appendChild(formEl)

let emailInputEl = document.createElement('input')
emailInputEl.setAttribute('type', 'email')
emailInputEl.setAttribute('placeholder', 'e.g. foo@bar.baz')

formEl.appendChild(emailInputEl)

// emailInputEl.setAttribute('class', 'snappy')

emailInputEl.focus()