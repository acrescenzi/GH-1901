```

________             _____   
\_____  \   ____    /  _  \  
 /  / \  \ /    \  /  /_\  \ 
/   \_/.  \   |  \/    |    \
\_____\ \_/___|  /\____|__  /
       \__>    \/         \/ 


```

## What do good POST and PUT routes look like?

```
// CREATE
app.post('/instruments/', async (req, res, next) => {
	let {name, type} = req.body;
	try{
		await let trombone = Instrument.create({name, type}, {returning : true}); // returning syntax lets us send the created instance back to the front end!
		res.json({trombone})
	} catch(err) {
		next(err)
	}
})

//UPDATE

app.put('/instruments/:id', async (req, res, next) => {
	let {type} = req.body; // equivalent to let type = req.body.type
	let {isCool} = req.body
	try {
		//find the thing we wanna update
		let theTuba = await Instrument.findById(req.params.id)
		// update it darn it!
		let updated = await theTuba.update({type})
		res.send('The Tuba is no longer a woodwind!')
	} catch(err){
		next(err)
	}
})

```




