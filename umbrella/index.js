//-----------------------------------------------------------------------------//
//     Author      : Sunfur Thanos                                             //
//       Mail      : hormigence123@gmail.com                                   //
//        Country  : Venezuela                                                 //
//         License : GPL-3                                           	       //
//                                                                             //
//                   Copyright 2020 Sunfur Thanos. All rights reserved.        //
//-----------------------------------------------------------------------------//


//-------------------------------------------------------------------------------
//
// Variables & funciones globales
//
//-------------------------------------------------------------------------------

// Umbrella versión
umbrella_version = new Array(0x0, 0x0, 0x2)

// ver si un (list=>item*) existe
var find_object = function(object) {
	var list = new Array()
	for (var pointer in list) {
		var compared = list[pointer];
		if (compared==object) {
			return true;
		}
	}
	return false
}

//-------------------------------------------------------------------------------
//
// BANNER de bienbenida para la consola
//
//-------------------------------------------------------------------------------

function show_Umbrella_banner() {
    (null, window.setTimeout)(window.console.log.bind(window.console,
    "%c Umbrella ","margin-top: 7px;color: #50E68A; background: #1A1A1A; font-size: 24px;margin-right: 0.1em;"))
}; setTimeout(show_Umbrella_banner, 0x64)

//-------------------------------------------------------------------------------
//
// interceptar evento antes del renderizado web xD
//
//-------------------------------------------------------------------------------

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", UmbrellaKernelStart, false);
} else {
  console.group("Umbrella" );
  console.error("tipo:", "carga inicial fallida, este navegador es muy primitivo");
  console.warn("info del navegdor:", navigator);
  console.groupEnd();
}

// ejecutando servicios dedicados
function UmbrellaKernelStart() {
  // servicio: celdas sincronizada
  UmbrellaService_PasteAttrib.start()
  // servicio: ver imagen en otra pestaña si el evento "click" no existe
  UmbrellaService_ViewImgTab.start()
  // servicio: computar espacio
  UmbrellaService_ComputeSpace.start()
}

//-------------------------------------------------------------------------------
//
// SERVICIO : celdas sincronizada
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:1*
function _PasteAttrib() {};
var UmbrellaService_PasteAttrib = new _PasteAttrib();

// filtrando elementos en el arbol web
_PasteAttrib.prototype.start = function() {
	var arbol_web = document.querySelectorAll('*[PasteAttributes]')

	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {
	      value = object.getAttributeNode("PasteAttributes").value
	      if (value!="") {
	        objeto = document.getElementById(value)
	        this.paste_attrib(objeto, object)
	      }
	    }
	  }
	}
}

// pegando etiquetas + valores
_PasteAttrib.prototype.paste_attrib = function(obj_copiar, obj_pegar) {
	if (obj_copiar!=null) {
		  for (var item of obj_copiar.getAttributeNames()) {
		    tag = obj_copiar.getAttributeNode(item).name
		    value = obj_copiar.getAttributeNode(item).value

		    if (["id","src"].indexOf(tag)<0) {
		      scope = obj_pegar.getAttribute(tag)
		      if (scope!=null) {
		        value = scope
		      }
		      obj_pegar.setAttribute(tag, value)
		    }
		  }
	}
}

//-------------------------------------------------------------------------------
//
// SERVICIO : ver imagen en otra pestaña (Chrome adaptación hack)
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:2*
function _ViewImgTab() {};
var UmbrellaService_ViewImgTab = new _ViewImgTab();

var UmbrellaService_ViewImgTab_VerImagen = function(imagen) {
	return new Array(
		window.open(imagen.src, "_blank" ),
		0x2857674D,
		0x08FD19A3
	)
}

// filtrando elementos en el arbol web
_ViewImgTab.prototype.start = function() {
	var arbol_web = document.querySelectorAll('img')

	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {
	      var value = object.getAttributeNode("onclick")
	      if (value==null) {
			object.setAttribute(
				"onclick",
				"UmbrellaService_ViewImgTab_VerImagen(this)"
			)
			// object.style = object.style.cssText + ";cursor: pointer"
	      }
	    }
	  }
	}
}

//-------------------------------------------------------------------------------
//
// SERVICIO : computando espacio
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:3*
function _ComputeSpace() {};
var UmbrellaService_ComputeSpace = new _ComputeSpace();

_ComputeSpace.prototype.replace = function(object) {
	texto = object.innerText.replace(/&space;/g, "&nbsp;")
	object.innerHTML = texto
}

// filtrando elementos en el arbol web
_ComputeSpace.prototype.start = function() {
	function StateTrump(tipo) {
		var arbol_web = document.querySelectorAll(tipo)

		for (var object of arbol_web) {
		  if (typeof object == "object") {
		    if (!find_object(object)) {
		    	UmbrellaService_ComputeSpace.replace(object)
		    }
		  }
		}
	}

	for (var tipo of ["span", "p", "a"]) {
		StateTrump(tipo)
	}
}