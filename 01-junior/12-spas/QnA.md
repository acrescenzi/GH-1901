# QnA

## Getters and Setters methods in Sequelize

- Relational
// B - methods
belongsTo(), belongToMany()

Student.belongsTo(Cohort)
Cohort.hasMany(Student)

GH.setStudent(Rashmi)
Student.getCohort()


- Virtual (for obviating redundant info)
```
class Student {


	name : {
		type : Sequelize.STRING,
		allowNull : false
	}

	get() {

	}
}


```
//cohort_id

// H - methods
hasOne(), hasMany()


## Where does our db live?
- Local memory, it's not tracked by git!
- Use psql, postico, seed files etc to create and fill up the same db as your partner

## Sequelize hooks -- what are they for?

- beforeCreate, afterCreate, beforeValidate, afterValidate
- choose when in the instance lifecycle you want your fn to be invoked 
```

Student.create({name : 'Bianca'})

Student.create({})

```

## Eager loading -- what is it? How can we access eagerly loaded info

```
 Puppies.findAll({}, include : {'owner'})
 .then(puppyArr => {
 	//[...pups]
 	// pup {
		dataValues : {
			name : 'Fido',
			kibble : 'bacon bits'
			owner : {
				name : 'Sally Ann',
				favoriteBreed : 'Sheltie'
			}
		}

 	}

 })
 .catch(err => console.log(err))

```
## Instance vs Class Methods

-- Instance method : using ONE row from our table `sparky.getBone()`
-- Class method : using the entire table `Puppies.getShelties()`
-- How we do aggregate instance methods?
```
puppies = [alice, betty, charlie];
let promises = puppies.map(pup => pup.getBone())
Promise.all([...promises])
.then(arrOfBones => {
	// arrOfBones[0] === alice's bone
	// arrOfBone[2] === charlie's bone
})

```








