# QnA

## Functional Programming - what about space complexity?
```
function countdown(n){
	for(let i = n; i > 0; i--){
		console.log("counting down", n)
	}
}

function countdownRec(n){
	//Base Case
	if(n === 0){
		return 'Done'
	} else {
		return countdownRec(n--)
	}
}
```
-- We see the recursion adds N calls to the stack, making space O(n)
-- Major brownie points if you bring this up in an interview, probably not gonna really hurt the performance of your web apps

### Usecase for `app.param()`

app.use('/myUrl', callback) - HTTP verb agnostic
app.params('/:user', async(req, res, next) => {
	try{
		let users = Users.findAll()
		req.users = users
		next()
	}

}) -- fires whenever we see the param

