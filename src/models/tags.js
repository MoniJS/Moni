const { db } = require('../struct/Database');
const Sequelize = require('sequelize');

const Tags = db.define('tags', {
	name: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	guild: {
		type: Sequelize.STRING,
		allowNull: false
	},
	user: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		defaultValue: ''
	},
	uses: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
	hoisted: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}
});

module.exports = Tags;
