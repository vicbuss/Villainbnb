function diferenteDeTitulo(valor) {
	//...
}

const base = new Schema ({
	titulo: {
		type: String,
		required: true,
		//R: "é importante destacar que não é possível cadastrar duas bases com o mesmo título"
		unique: true,
		//R: "não é permitido exibir o nome de fachada das bases para o público em geral"
		select: false
	},
	
	nomeFachada : {
		type: String,
		required: true,
		//R: "nome de fachada deve ser diferente do título"
		validate: diferenteDeTitulo
	},
	
	cidade : {
		type: String,
		required: true,
		//R: "As cidades disponíveis para cadastramento são Nova York, Rio de Janeiro e Tóquio."
		enum: ["Nova York", "Rio de Janeiro", "Tóquio"]
	},
	
	tecnologias : [{
		type: String,
		//R: "As tecnologias disponíveis para uso nas bases secretas são: 
		//laboratório de nanotecnologia, jardim de ervas venenosas, estande de tiro e academia de parkour."
		enum: ["laboratório de nanotecnologia", "jardim de ervas venenosas", "estande de tiro", "academia de parkour"]
	}]
})