const path = require("path");
const readdir = require("util").promisify(require("fs").readdir);
const Sequelize = require("sequelize");

const db = new Sequelize("database", "user", "password", {
	host: "localhost",
	dialect: "sqlite",
	logging: false,
	storage: "./database.sqlite"
});

class Database {
	static get db() {
		return db;
	}

	static async sync() {
		try {
			await db.sync();
			console.log("Database connection has been established successfully");
			await this.loadModels(path.join(__dirname, "..", "models"));
		} catch (err) {
			console.log("Unable to connect to the Database");
			console.log("Attempting to connect again in 5 seconds");
			setTimeout(this.sync, 5000);
		}
	}

	static async loadModels(modelsPath) {
		const files = await readdir(modelsPath);
		for (const file of files) {
			const filePath = path.join(modelsPath, file);
			if (!filePath.endsWith(".js")) continue;
			await require(filePath).sync({ alter: true });
		}
	}
}

module.exports = Database;
