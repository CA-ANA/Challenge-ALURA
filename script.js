//A letra a é convertida para ai
//A letra e é convertida para enter
//A letra i é convertida para imes
//A letra o é convertida para ober
//A letra u é convertida para ufat

function criptografar() {

	var texto = document.getElementById("inputTexto").value.toLowerCase();

	if(texto == ""){
		alert("Por favor digite uma mensagem!")
	}
	else{
		var textoCodificado = texto.replace(/e/igm,"enter");
		var textoCodificado = textoCodificado.replace(/o/igm,"ober");
		var textoCodificado = textoCodificado.replace(/i/igm,"imes");
		var textoCodificado = textoCodificado.replace(/a/igm,"ai");
		var textoCodificado = textoCodificado.replace(/u/igm,"ufat");

		document.getElementById("outTexto").innerHTML = textoCodificado;
	}
}

function descriptografar() {

	var texto = document.getElementById("outTexto").value.toLowerCase();
	var textoCodificado = texto.replace(/enter/igm,"e");
	var textoCodificado = textoCodificado.replace(/ober/igm,"o");
	var textoCodificado = textoCodificado.replace(/imes/igm,"i");
	var textoCodificado = textoCodificado.replace(/ai/igm,"a");
	var textoCodificado = textoCodificado.replace(/ufat/igm,"u");

	document.getElementById("outTexto").innerHTML = textoCodificado;
}

function copy() {

	var textoCopiado = document.getElementById("outTexto");
	textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); // For mobile devices
	navigator.clipboard.writeText(textoCopiado.value);
	alert("Mensagem copiada!");
}

function limpar() {	
	document.getElementById("inputTexto").value = "";
	document.getElementById("outTexto").value = "";
}
