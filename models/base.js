const mongoose = require('mongoose');

function diferenteDeTitulo(valor) {
	return valor !== this.titulo;
}

const baseSchema = new mongoose.Schema ({
	titulo: {
		type: String,
		required: true,
		unique: true
	},
	
	nomeFachada : {
		type: String,
		required: true,
		validate: diferenteDeTitulo
	},
	
	cidade : {
		type: String,
		required: true,
		enum: ["Nova York", "Rio de Janeiro", "Tóquio"]
	},
	
	tecnologias : [{
		type: [String],
		enum: ["laboratório de nanotecnologia", "jardim de ervas venenosas", "estande de tiro", "academia de parkour"]
	}]
})

module.exports = mongoose.model('Base', baseSchema);