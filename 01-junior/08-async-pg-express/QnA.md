```

________             _____   
\_____  \   ____    /  _  \  
 /  / \  \ /    \  /  /_\  \ 
/   \_/.  \   |  \/    |    \
\_____\ \_/___|  /\____|__  /
       \__>    \/         \/ 


```

## Usecase for req.params
`www.animals.com/narwhals`
www.animals.com/narwhals/silly/spiky/stupid
req.params.banana
req.params.mango
req.params.orange

## Usecase for `next()`

```
app.use('/narwhals', (req, res, next) => {
	console.log("SOMEBODY LIKES NARWHALS~~~~")
	next()
})

app.use('*', (req, res, next) => {
	if(req.params === 'Not a marine mammal') next(err)
	else next()
})

app.get('/narwhals', (req, res, next) => {
	res.send('All of the narwhals!')
	next()
})

let num = 0
while(num < 11){
	if(nu % 2 === 0) continue
	else num += num
}

```


<form name="addFruit">
	'What kinda fruit?'
	<input name="species" />
	'What color is it?'
	<input name="ripeness" />
	'Who are you?'
	<input name="author" />
</form>


app.post('/fruits', (req, res, next) => {
	Fruit.create({
		species : req.body.species,
		ripeness : req.body.ripeness,
		author : req.body.user
	})
})


```
### What is `req`
app.use((req, res, next) => {
	// req, res are Objects w/ lots of juicy data
	// next() is a function 
})

```

### Why do we name it app?
```
const app = require('express')()
```
