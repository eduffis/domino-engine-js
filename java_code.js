
function Limpiar(inForm) {
	var n;
	inForm.txtIndicador.value ="00";
	n = parseInt(inForm.elements.length);	

	for (i=0; i< n; i++){
		
		if (inForm.elements[i].name != "cmb"){		
			if (inForm.elements[i].checked){//quita el chulito del check box
				inForm.elements[i].checked=false;
			}
			
			if(inForm.elements[i].value != "" ){
	
				inForm.elements[i].value = "" ;
			}
		}
	}
	
	
}

function enviar(inForm) {
	inForm.txtIndicador.value = "1";
	inForm.submit();
}



function AbrirPagina(inForm,pag){
	inForm.action = pag;
	
	inForm.submit();
}

function SelectItem(inForm,dItem,action){
	if (action==1){ // si action es =1 funciona de Inmediato
		inForm.txtIndice.value = dItem;
	
		if (inForm.txtNextPage.value == null){		
			inForm.txtNextPage.value="about:blank";
		}
		inForm.action = inForm.txtNextPage.value;
		inForm.submit();
	} // si no funciona comn icorriente
}


//quita todas las selecciones en checkBox
function EliminaCheck(inForm){
	n = parseInt(inForm.elements.length);
	
	for (i=0; i<n; i++){
		if (inForm.elements[i].checked){
			inForm.elements[i].checked = false;
		}
	}
}

//Selecciona todos los elementos del checkbox
function SelectAll(inForm){
	n = parseInt(inForm.elements.length);	
	for (i=0; i<n; i++){
		inForm.elements[i].checked = true;
	}
}

function VistaIco(inForm,val){
	var sLista;
	var st;
	n = inForm.elements.length;
	// hay que aher split por que el valor del cheBox esta separado por coma (,)
	for (i=0; i<n; i++){
		sLista =  new String(val);
		st = sLista.split(",");
		if (inForm.elements[i].value == st[0]){
			//no hace nada
		}
		else{
			inForm.elements[i].checked = false;
		}
	}		
}

function EdicionLista(inForm,num_campos){
	var st;
	var sLista;
	var valores
	var n;
		
	n = inForm.elements.length;
	for (i = 0; i < n; i++){
		//alert(inForm.elements[i].name);
		if (inForm.elements[i].checked ){
			// los valores de la cadena valor
			valores = inForm.elements[i].value;
			sLista =  new String(inForm.elements[i].value);
			st = sLista.split(",");
			// EditaAccion(inForm,inForm.elements[i].value,st[0]);
		}
	}	
	 SubeDato(inForm,st[0],valores,num_campos);
}

function SubeDato(inForm,dato,valores,num_campos){
	var sLista,l,t;
	var iCols;
	var st;
	var accion;
	var i;
	
	sLista =  new String(valores);

	l = sLista.length - 2; 	
	t = sLista.substr(0,l);
	st = t.split("|"); 
	iCols = st.length - 1; 
	j=1; 
	
	n = inForm.elements.length; 
			
	for(i=1; i <= n; i++){
		if(inForm[i-1].name != "cmb"){		
		  if ((j-1) >= iCols) {		  		  
		  	break;
		  }else {	
		  	//--consigo varios id para eliminar mas de un registro
			if (inForm[i-1].name == "txtid" || i==1){				
				document.form2[i-1].value = document.form2[i-1].value + st[j] + ",";
			}else{		
				document.form2[i-1].value = st[j];
			}
			j++;
		  }
		}
	}
	accion = st[0]; 
	accion = parseInt(accion) + 2;
	document.form2.txtIndicador.value = accion;

}

	function RetornaPorcentaje(inForm){
		inForm.action = inForm.txtSiguiente.value;
		inForm.submit();
	}
	
	function abrir(sItem,sPagina,sOpener,wx,wy){
		var url_abrir
		//url_abrir = 'lista_seleccion.php?id=' + sArea;
		url_abrir = sPagina + "&id=" + sItem;		
		//sOpener = 'actividades_area_anno';
		window.open(url_abrir,sOpener,'toolbar=yes,menubar=yes,width='+ wx + ',height=' + wy + ',status=yes,resizable=yes,screenX=500,screenY=200,scrollbars=yes');
}

   
   function passBackITEMSprob(Item1){
     opener.document.form2.txtProblematica.focus();
     opener.document.form2.txtProblematica.value = Item1;
     close();
   }
   

function editar_datos(inForm){
	if (inForm.txtIndicador.value == "2" || inForm.txtIndicador.value == "3" ){
		inForm.submit();
	}else{
		alert("Acci�n no valida.");		
	}
}



function selec_all_item(inForm){
	var cont;
	cont=0;
	
	n = inForm.elements.length;	
	for (i=0; i<=n; i++){
		if (inForm.elements[i].name != "cmb"){
			cont++;		
		}
	}
	i=0;

	while(i <= cont || inForm.elements[i].name != "cmb"){
		if (inForm.elements[i].name != "cmb"){		
			if (inForm.elements[i].checked == false){
				inForm.elements[i].checked = true;
			}
		}
		i++;
	}
}


//Permite recuperar una cadena con la lista de valores seleccionados en un Combo
function ListaSeleccionCombo(inForm,cboName){
	//Recorremos los Options del Combo 
	//y armamos una cadena con los seleccionados
	var elementos;
	var i = 0;
	var j = 0;
	var cadena, l, t;		
	var n = 0;
	
	n = parseInt(inForm.elements.length);
	
	for (j=0; j<n; j++) {
		if (inForm.elements[j].name == cboName){
			elementos = inForm.elements[j].options.length;
			
			cadena = "";
			for (i=0; i<elementos; i++) {
				if (inForm.elements[j].options[i].selected){
					cadena = cadena + inForm.elements[j].options[i].value + ",";
				}
			} 
			l = cadena.length - 1;
			t = cadena.substr(0,l);
		}
	} 
	return (t);
}

/*
 * Esta funcion recupera los valores que estan chequeados en un form
*/
function LitadoSeleccionCheck(inForm,ChName){
		var n;
		var cadena;
		
		/* consigo los elementos seleccionados*/
		n = inForm.elements.length;
		cadena = "";
		for (i=0; i < n; i++){
			if (inForm.elements[i].name == ChName){
				if (inForm.elements[i].checked){
					sLista =  new String(inForm.elements[i].value);
					st = sLista.split(",");	
					cadena = cadena + st[0] +  ",";			
				}//if 2
			}//if 1
		}//for

		l = cadena.length - 1;
		t = cadena.substr(0,l);
		
		return (cadena);
	}
	





//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//este sector esta dedicado a las funciones de ajax
// JavaScript Document
function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
		   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
  		}
	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function MostrarConsulta(datos){
	divResultado = document.getElementById('resultado');
	ajax=objetoAjax();
	ajax.open("GET", datos);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			divResultado.innerHTML = ajax.responseText
		}
	}
	ajax.send(null)
}

function  sendfunctionout(){
	MostrarConsulta('blanck.php'); return false;
}

//funcion modificado por Erick Duffis, este apunta a un id en general
//fue modificado el 14 de agosto del 2009
function MostrarConsulta2(datos,id){

	divResultado = document.getElementById(id);
	ajax=objetoAjax();
	ajax.open("GET", datos);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			divResultado.innerHTML = ajax.responseText
		}
	}
	ajax.send(null)
}
//------------------------------------------------------------------
//----------------------------------------------------------------------------

//funcion creada el dia 15 de septiembre del 2009
//funcion que generaliza un envio por ajax
function sOperation(sPage){
		MostrarConsulta2(sPage,'app'); return false;
}   



