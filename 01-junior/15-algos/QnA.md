# QnA


## How do we set up non-one-to-one associations?
- One to Many, we want the "Many" instance to have an id (foreign_key) for the "One" it's associated with
- 
```
Cat.belongsTo(People)
People.hasMany(Cat) 
```

- Many to Many, we have to set up an entirely new table, just of the joined ids

```
Instructor.hasMany(Student)
Student.belongsToMany(Instructor, {through : 'roster'})

Instrutor.setStudent({name: 'Dr Brule'})
```

## How do we know which hook to use when?

- beforeValidate
- afterValidate
- beforeCreate
- afterCreate

- Ask yourself which part in the creation/validations lifecycle makes sense
- NB: Model.build() will validate the model but not create it

## What do belongs vs has methods do in Sequelize
- belongs methods set up Ids on associated table (or sometimes through tables )
- has sets up magic methods for getting/setting across associations


## Can we do Many-to_many for the same instance?
- Yes!

- People.belongsToMany(People, {as : 'Mentor'})


