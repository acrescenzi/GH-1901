'use strict';

const db = require('./database');
const Sequelize = require('sequelize');

// Make sure you have `postgres` running!

const User = require('./user');

//---------VVVV---------  your code below  ---------VVV----------

const Article = db.define('article', {
    title : {
        type: Sequelize.STRING,
        // allowNull: false, // technically not required by spec
        validate: {
            notEmpty: true,
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    version: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        get () {
            return this.getDataValue('tags').join(', ')
        }
    }
}, {
    // More than one way to register hooks. What is important
    // is WHICH hook and WHAT the hook does.
    hooks: {
        beforeUpdate: (article) => {
            ++article.version
        }
    }
});

// truncate :: Number -> undefined (does a side effect)
Article.prototype.truncate = function (length) {
    this.content = this.content.slice(0, length)
}

// findByTitle :: String -> Promise <article>
Article.findByTitle = (title) => Article.findOne({
    where: { title }
})

// in this case, the `async` version is MORE verbose:

// Article.findByTitle = async function (title) {
//     const article = await Article.findOne({
//         where: { title }
//     })
//     return article
// }

Article.belongsTo(User, { as: 'author' })

//---------^^^---------  your code above  ---------^^^----------

module.exports = Article;
