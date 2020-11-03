//-----------------------------------------------------------------------------//
//     Author      : Sunfur Thanos                                             //
//      Mail       : hormigence123@gmail.com                                   //
//       Country   : Venezuela                                                 //
//        License  : GPL-3                                           	       //
//                                                                             //
//                        Copyright 2020 Sunfur Thanos. All rights reserved.   //
//-----------------------------------------------------------------------------//

"use strict";

//-------------------------------------------------------------------------------
//
// Variables globales
//
//-------------------------------------------------------------------------------

// metodo global => simple NameSpace*
var umbrella = function() {}

// Umbrella versión => XXX
umbrella.build_new = new Number(17)

// creando clase de Entities
var Entities = function() {}

// Entities: crear tipo espacio
Entities.space = new RegExp(/&amp;space;/g) // => "$space;" = "\xA0"

// CONFIG GENERAL: activar o desactivar barra de progreso para imagenes => Bool*
var ShowImage_progress = new Boolean(true)

// despues de precargar imagen mostrarla => Bool*
var isLoad_showImage = new Boolean(true)

// usar API sin protocolo HTTP para opciones avanzadas => Bool*
var TesttinOnNotLocalHost = new Boolean(false)

//-------------------------------------------------------------------------------
//
// hack blanco: calculando ruta de este archivo :)
//
//-------------------------------------------------------------------------------

var PATH_UMBRELLA = new String()
var $lista = document.querySelectorAll('\x73\x63\x72\x69\x70\x74')

for (var index in $lista) {
	var $object = $lista[index]
	if (typeof $object == "object") {
	  if ($object.src!="") {
	    PATH_UMBRELLA = $object.src.split(
	    	"\x69\x6e\x64\x65\x78\x2e\x6a\x73"
	    )[0x000000]
	  }
	}
}

//-------------------------------------------------------------------------------
//
// utilidades globales
//
//-------------------------------------------------------------------------------

// ver si un (list=>item*) existe
var find_object = function(object) {
	var list = new Array()
	for (var index in list) {
		var compared = list[index]
		if (compared==object) {
			return true;
		}
	}
	return false
}

// comprobando que sea el navegador web Firefox
function isFirefox() {
	var $match   = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
	var $version = $match ? parseInt($match[1]) : 0;
	var validar  = false
	var version  = false
	if (navigator.userAgent.match(/firefox/i)) {
		validar = true
		version = $version
	}
	return {"validar":validar, "version":version}
}


//-------------------------------------------------------------------------------
//
// Detectar la porqueria fasista de "IE" & navegadores obsoletos
//
//-------------------------------------------------------------------------------

// detectando el "internet explorer" chotero xD
var isIE = /MSIE|Trident/.test(window.navigator.userAgent);
var obsolete_navigator = false
if (isIE) {obsolete_navigator = true;}

// detectando una versión de Firefox absoleta
var firefox = isFirefox()
if (firefox.validar) {
	if (firefox.version<35) {obsolete_navigator = true;}
}

// comprobando si es un navegador obsoleto
if (obsolete_navigator) {
	document.location = PATH_UMBRELLA + "mensaje/warning.html"
}

//-------------------------------------------------------------------------------
//
// Iconos => UI
//
//-------------------------------------------------------------------------------

// ICON : archivo no encontrado
var ICON_imageNotFound = "PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAgNDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjAiIHkxPSIyLjg1IiB4Mj0iMjAiIHkyPSIzNy4xNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTYzYjJlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzMzOTMxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InVybCgjZ3JhZGllbnQpIiBkPSJNMzkuMDQ4LDYuNzk4SDE5LjAwNCBDMTYuNzE1LDYuNzgyIDE2LjE5NSw1LjY1NiAxNS44MzksNC4zOTcgMTUuNDgsMy4xMjggMTQuNzYzLDIgMTIuNjEsMiA2LjgzNSwyIDcuMTg5OTk5OCwyIDYuNDQzLDIgNC4yOSwyIDMuNTczLDMuMTI3IDMuMjE0LDQuMzk3IDIuODU1LDUuNjY2IDIuMzMyLDYuOCAwLDYuOEgwLjk0IEMwLjQyMSw2LjgwOCAwLjAwMyw3LjIzMyAwLjAwMyw3Ljc1OHYyNy41ODNjMCwwLjUzIDAuNDI2LDAuOTU5IDAuOTUyLDAuOTU5SDM5LjA0OCBDMzkuNTc0LDM2LjMgNDAsMzUuODcxIDQwLDM1LjM0MSBWIDcuNzU3IEM0MCw3LjIyNyAzOS41NzQsNi43OTggMzkuMDQ4LDYuNzk4IFogTTguNDQwOTk5OCwxNy4wODJjMCwtMi4xMTkgMS43MDUwMDAyLC0zLjgzNyAzLjgwOTAwMDIsLTMuODM3IDIuMTAzLDAgMy44MDksMS43MTggMy44MDksMy44MzcgMCwyLjExOSAtMS43MDUsMy44MzcgLTMuODA5LDMuODM3IC0yLjEwNCwwIC0zLjgwOTAwMDIsLTEuNzE4IC0zLjgwOTAwMDIsLTMuODM3eiBNMjYuNzE3LDMwLjk4Yy0xLjUyNSwwIC0xLjUyNSwtMi4zMDUgLTYuODY0LC0yLjMwNSAtNS4zMzksMCAtNS4zMzksMi4zMDUgLTYuODY0LDIuMzA1IC0wLjg0MiwwIC0xLjUyNiwtMC41MTIgLTEuNTI2LC0xLjUzNyAwLC0xLjAyNCAxLjI3MSwtMy44NDIgOC4zOSwtMy44NDIgNy4xMTksMCA4LjM5LDIuODA0IDguMzksMy44NDIgMCwxLjAzOCAtMC42ODMsMS41MzcgLTEuNTI2LDEuNTM3eiBtIDAuNzY4LC0xMC4wNjFjLTIuMTA0LDAgLTMuODA5LC0xLjcxOCAtMy44MDksLTMuODM3IDAsLTIuMTE5IDEuNzA1LC0zLjgzNyAzLjgwOSwtMy44MzcgMi4xMDQsMCAzLjgwOSwxLjcxOCAzLjgwOSwzLjgzNyAwLDIuMTE5IC0xLjcwNiwzLjgzNyAtMy44MDksMy44Mzd6Ii8+Cjwvc3ZnPg==";

// ICON : Carga Fallida
var ICON_FALLIDE_CONNECT = "PCEtLSB0b21hZG8gZGVsIG5hdmVnYWRvciBDaHJvbWUgLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwNDggMjA0OCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE2MDAgMTE1MnE5MyAwIDE3NCAzNXQxNDMgOTYgOTYgMTQyIDM1IDE3NXEwIDkzLTM1IDE3NHQtOTYgMTQzLTE0MiA5Ni0xNzUgMzVxLTkzIDAtMTc0LTM1dC0xNDMtOTYtOTYtMTQyLTM1LTE3NXEwLTkzIDM1LTE3NHQ5Ni0xNDMgMTQyLTk2IDE3NS0zNXptLTMyMCA0NDhxMCA2NiAyNSAxMjR0NjggMTAyIDEwMiA2OSAxMjUgMjVxNDcgMCA5Mi0xM3Q4NC00MGwtNDQzLTQ0M3EtMjYgMzktMzkgODR0LTE0IDkyem01ODcgMTc2cTI2LTM5IDM5LTg0dDE0LTkycTAtNjYtMjUtMTI0dC02OS0xMDEtMTAyLTY5LTEyNC0yNnEtNDcgMC05MiAxM3QtODQgNDBsNDQzIDQ0M3ptLTc3NCAxMjVxMjIgMzYgNDggNjl0NTcgNjJxLTQzIDgtODYgMTJ0LTg4IDRxLTE0MSAwLTI3Mi0zNnQtMjQ0LTEwNC0yMDctMTYwLTE2MS0yMDctMTAzLTI0NS0zNy0yNzJxMC0xNDEgMzYtMjcydDEwNC0yNDQgMTYwLTIwNyAyMDctMTYxVDc1MiAzN3QyNzItMzdxMTQxIDAgMjcyIDM2dDI0NCAxMDQgMjA3IDE2MCAxNjEgMjA3IDEwMyAyNDUgMzcgMjcycTAgNDQtNCA4N3QtMTIgODdxLTU0LTU5LTExOC05OGw0LTM4cTItMTkgMi0zOCAwLTEzMC0zOC0yNTZoLTM2MnE4IDYyIDExIDEyM3Q1IDEyNHEtMzMgMy02NSAxMHQtNjQgMTh2LTM5cTAtNjAtNC0xMTh0LTEyLTExOEg2NTdxLTkgNjQtMTMgMTI3dC00IDEyOXEwIDY1IDQgMTI4dDEzIDEyOGg0NDZxLTM3IDU5LTYwIDEyOEg2NzlxOCAzNyAyMyA4OXQzNyAxMDkgNTEgMTEzIDY0IDEwMSA3OCA3MiA5MiAyOHExOCAwIDM1LTV0MzQtMTR6bTczOS0xMjYxcS0zOC04MS05MS0xNTJ0LTEyMC0xMzEtMTQzLTEwNC0xNjItNzVxMzYgNDkgNjQgMTA1dDUxIDExNSA0MCAxMjEgMjkgMTIxaDMzMnptLTgwOC01MTJxLTQ5IDAtOTEgMjd0LTc4IDczLTY1IDEwMS01MSAxMTMtMzcgMTA5LTIzIDg5aDY5MHEtOC0zNy0yMy04OXQtMzctMTA5LTUxLTExMy02NC0xMDEtNzgtNzItOTItMjh6bS0yOTIgNTBxLTg1IDI5LTE2MiA3NFQ0MjcgMzU3IDMwOCA0ODd0LTkyIDE1M2gzMzJxMTItNTkgMjgtMTIwdDM5LTEyMSA1Mi0xMTYgNjUtMTA1em0tNjA0IDg0NnEwIDEzMCAzOCAyNTZoMzYycS04LTY0LTEyLTEyN3QtNC0xMjlxMC02NSA0LTEyOHQxMi0xMjhIMTY2cS0zOCAxMjYtMzggMjU2em04OCAzODRxMzggODEgOTEgMTUydDEyMCAxMzEgMTQzIDEwNCAxNjIgNzVxLTM2LTQ5LTY1LTEwNXQtNTEtMTE1LTM5LTEyMS0yOS0xMjFIMjE2eiIgZmlsbD0iIzEwMTAxMCIvPjwvc3ZnPg==";

//-------------------------------------------------------------------------------
//
// Umbrella => evento para detectar conexión a internet xD-D-DDDD
//
//-------------------------------------------------------------------------------

umbrella.testTime_conection = 10; // 10 segundos para la espera de cada PING !yes-change!
umbrella.eventTestingServer = document.createEvent("Event");
umbrella.eventTestingServer.initEvent("ServerConnection-changes", true, false);
umbrella.eventTestingServer.status_conection = null;
umbrella.testTime_conection_backup = umbrella.testTime_conection; // !not-change!


function func_isConectionServer() {

    var http = new XMLHttpRequest();
    http.timeout  = 10 * 977;
    var randomNum = Math.round(Math.random() * 10000);
    http.open('HEAD', document.location + "?rand=" + randomNum, true);

	http.onloadend = (event) => {
        if (http.status >= 200 && http.status < 304) {
			umbrella.eventTestingServer.connection = true;
			document.dispatchEvent(umbrella.eventTestingServer);
			var status_actual = true;
        } else {
			umbrella.eventTestingServer.connection = false;
			document.dispatchEvent(umbrella.eventTestingServer);
			var status_actual = false;
        }

        if (umbrella.eventTestingServer.status_conection!=status_actual) {
        	umbrella.eventTestingServer.status_conection = status_actual

        	if (status_actual) {
        		console.log("Umbrella Sockect: hay internet :)")
        	} else {
        		console.log("Umbrella Sockect: No hay internet :(")
        	}
        }

        setTimeout(func_isConectionServer.bind(
        	null), umbrella.testTime_conection*950)
	}

    http.send(null);
}

//-------------------------------------------------------------------------------
//
// Umbrella => eventos personalizados
//
//-------------------------------------------------------------------------------

// pre-carga de pagina completa
umbrella.eventPageRefactory = document.createEvent("Event");
umbrella.eventPageRefactory.initEvent("UmbrellaFinish", true, false);

//-------------------------------------------------------------------------------
//
// mostrando una barra carga tipo pulsate - antes que el DOM este completo
//
//-------------------------------------------------------------------------------

document.addEventListener("readystatechange",  function (event) {
	if (!umbrella.start_load) {
		umbrella.start_load = document.querySelector("*[name='body.container']")
		umbrella.circule_progress = document.querySelector(
			"*[name='body.progress']")
	}
}, true);

//-------------------------------------------------------------------------------
//
// BANNER de bienbenida para la consola
//
//-------------------------------------------------------------------------------

function show_Umbrella_banner() {
    (null, window.setTimeout)(window.console.log.bind(window.console,
    "%c Umbrella ","margin-top: 7px;color: #50E68A; background: #1A1A1A; font-size: 24px;margin-right: 0.1em;"))
}; setTimeout(show_Umbrella_banner, 0x00000003)

//-------------------------------------------------------------------------------
//
// interceptar evento antes del renderizado web xD-D-D-DDDDDD
//
//-------------------------------------------------------------------------------

// ejecutando servicios dedicados
function UmbrellaKernelStart() {

	// zoom automatizado de contenido para vista movil
	UmbrellaService_ZooomViewPort()

	// servicio: template elemental de una pagina
	UmbrellaService_TemplateBody.start()

	// servicio: celdas sincronizada
	UmbrellaService_PasteAttrib.start()

	// servicio: mejora de -> "href"
	UmbrellaService_ComputeHref.start()

	// servicio: LAYOUT => BoxComposite
	UmbrellaService_BoxComposite.start()

	// servicio: LAYOUT => Sunfur FlexBox
	UmbrellaService_FlexBox.start()

	// servicio: computar espacio
	UmbrellaService_ComputeSpace.start(true)

	// servicio: convertir la etiqueta "align" en relativa
	UmbrellaService_ComputeAlign.start()

	// servicio: ver imagen en otra pestaña si el evento "click" no existe
	UmbrellaService_ViewImgTab.start()

	// testeo infinito para probar conexión a internet
	if (document.location.hostname) {
		if (document.location.hostname!="localhost") {
			console.log("Umbrella sockect: " + document.location.hostname)
			func_isConectionServer()
		}
	}

	// servicio FINAL: barra de progreso para imagenes
	if (ShowImage_progress==true) {
		if (document.location.hostname || TesttinOnNotLocalHost==true) {
			UmbrellaService_ImageProgress.start()
		}
	}

	// avisando que Umbrella ya termino de refactorizar
    document.dispatchEvent(umbrella.eventPageRefactory);

	// quitan barra de carga tipo "pulsate"
	if (umbrella.start_load) {
		if (umbrella.circule_progress) {
			umbrella.circule_progress.style.display = "none"
		}
		umbrella.start_load.style.display = "block"
	}
}

document.addEventListener("DOMContentLoaded", UmbrellaKernelStart, false);

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

	var GetTags = function (object_map) {
		var lista = new Array()
		for (var item of object_map) {
			lista = lista.concat(item.name)
		}
		return lista
	}

	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {
	      var value = object.getAttribute("PasteAttributes")
	      if (value!="") {
	        var objeto = document.getElementById(value)

	        if (objeto!=null) {

		        this.paste_attrib(objeto, object)

		        if (!object.IsMaduro) {
		        	object.IsMaduro = true

		        	var libertad = function(self) {
		        		var valor = GetTags(this.attributes)
		        		if (this.arbolito_style!=valor) {
		        			this.arbolito_style = valor
		        			self.start()
		        		}
		        	}

					objeto.platzi = this
					objeto.arbolito_style = GetTags(objeto.attributes)

					var observer = new MutationObserver(function(mutations) {
					  mutations.forEach(function(mutation) {
							if (mutation.type=="attributes") {
								setTimeout(libertad.bind(objeto, objeto.platzi), 0x0)
							}
					  });
					});

					var config = {attributes: true, childList: true, characterData: true};
					observer.observe(objeto, config);

		        }

		    }

	      }
	    }
	  }
	}
}

// pegando etiquetas + valores
_PasteAttrib.prototype.paste_attrib = function(obj_copiar, obj_pegar) {
	if (obj_copiar!=null) {
	  for (var item of obj_copiar.attributes) {
	    var tag = item.name
	    var value = obj_copiar.getAttribute(tag)

	    if (["id", "src", "hbox"].indexOf(tag)<0) {
	      var scope = obj_pegar.getAttribute(tag)

	      if (!obj_pegar.IsMaduro) {
		      if (scope!=null) {
		        var value = scope
		      }
		  }

		  if (obj_pegar.getAttribute(tag)==null) {
		  	obj_pegar.setAttribute(tag, value)
		  }

	    }
	  }
	}
}

//-------------------------------------------------------------------------------
//
// SERVICIO : ver imagen en otra pestaña al hacer doble-clic xD
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
	      var value = object.getAttribute("onclick")
	      if (value==null) {
	      	if (object.virtual_onclick!=0xAA17B0A5) {
	      		if (object.getAttribute("NotAutoClick")==null) {
					object.setAttribute(
						"ondblclick",
						"UmbrellaService_ViewImgTab_VerImagen(this)"
					)
				}
			}
	      }
	    }
	  }
	}
}

//-------------------------------------------------------------------------------
//
// SERVICIO : computando espacio en celdas tipo textos
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:3*
function _ComputeSpace() {};
var UmbrellaService_ComputeSpace = new _ComputeSpace();

_ComputeSpace.prototype.replace = function(object, virtual=false, texto_X=false) {
	if (!virtual) {
		var virtual = Entities.space
	} else {
		var virtual = /\s/g
		var texto = texto_X.replace(virtual, "&nbsp;")
		return object.innerHTML = texto
	}

	var texto = object.innerHTML.replace(virtual, "&nbsp;")
	object.innerHTML = texto
}

// filtrando elementos en el arbol web
_ComputeSpace.prototype.start = function(comienzo=false) {
	function StateTrump(tipo) {
		var arbol_web = document.querySelectorAll(tipo)

		for (var object of arbol_web) {
		  if (typeof object == "object") {
		    if (!find_object(object)) {

		    	object.inserts = 0x0
		    	UmbrellaService_ComputeSpace.replace(object)

		    	if (comienzo) {

		    		object.set_text = function(TEXTO) {
		    			UmbrellaService_ComputeSpace.replace(this, true, TEXTO)
		    		}
			    }
		    }
		  }
		}
	}

	for (var tipo of ["span", "p", "a", "div[type='TEXT']"]) {
		StateTrump(tipo)
	}
}

//-------------------------------------------------------------------------------
//
// SERVICIO : mejora de la etiqueta "ALIGN"
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:4*
function _ComputeAlign() {};
var UmbrellaService_ComputeAlign = new _ComputeAlign();

// filtrando elementos en el arbol web + agregar mejoras a la etiqueta ALIGN
_ComputeAlign.prototype.start = function() {
	var arbol_web = document.querySelectorAll('*[align]')

	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {
			var cajon = document.createElement("div")
			if (object.align!="") {
				cajon.align = object.getAttribute("align")
				object.parentNode.insertBefore(cajon, object);
				object.parentNode.removeChild(object);
				object.align = ""
				cajon.appendChild(object)
			}
	    }
	  }
	}
}

//-------------------------------------------------------------------------------
//
// SERVICIO : mejora de "href"
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:5*
function _ComputeHref() {};
var UmbrellaService_ComputeHref = new _ComputeHref();

// filtrando elementos en el arbol web + agregar mejoras a la etiqueta href
_ComputeHref.prototype.start = function() {

	function CRIPTON7(categoria) {
		var arbol_web = document.querySelectorAll(categoria)

		for (var object of arbol_web) {
		  if (typeof object == "object") {
		    if (!find_object(object)) {

		    	if (object.nodeName=="A") {

		    		var link = object.getAttribute("link-tab")
					if (link) {
						object.href = link
						object.target="_black"
					}
					var link = object.getAttribute("link-main")
					if (link) {
						object.href = link
					}
					continue
		    	}


				var cajon = document.createElement("a")
				cajon.style = "color: transparent;text-decoration: none;width: 0px;padding: 0em;font-size: 0em;background-color: transparent;border: none;text-shadow: none;"
				object.virtual_onclick = 0xAA17B0A5

		    	var link = object.getAttribute("link-tab")
				if (link) {
					cajon.href = link
					object.parentNode.insertBefore(cajon, object);
					object.parentNode.removeChild(object);
					cajon.target="_black"
					object.style.cursor = "pointer"
					cajon.appendChild(object)
				}

		    	var link = object.getAttribute("link-main")
				if (link) {
					cajon.href = link
					object.parentNode.insertBefore(cajon, object);
					object.parentNode.removeChild(object);
					object.style.cursor = "pointer"
					cajon.appendChild(object)
				}

		    }
		  }
		}
	}

	var categoria = ['*[link-tab]','*[link-main]']

	return CRIPTON7(categoria), 0x2857674D, 0x08FD19A3

}

//-------------------------------------------------------------------------------
//
// SERVICIO : barra de progreso para imagenes
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:6*
function _ImageProgress() {};
var UmbrellaService_ImageProgress = new _ImageProgress();

// filtrando elementos en el arbol web + agregar mejoras a la etiqueta href
_ImageProgress.prototype.start = function() {

	var arbol_web = document.querySelectorAll('img')
	if (arbol_web.length<1) {return null, 0x2857674D}

	var imageDecodeExt = function(url) {
		var struct = url.split(".")
		var ext = struct[struct.length-1].toUpperCase()
		return ext
	}

	var lista_images = new Array()
	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {

	    	var diccionario = new ArrayBuffer()

	    	if (object.src==document.location) {
	    		continue
	    	}

	    	var isProgress = false
			for (var item of object.attributes) {
				if (item.name=="notprogress") {
					isProgress = true
				}
			}

	    	if (isProgress) {
	    		continue
	    	}

	    	var cajon = document.createElement("div")
	    	cajon.align = object.align
	    	cajon.style = object.style

	    	if (object.name) {
	    		cajon.setAttribute("name", object.name)
	    	}

	    	cajon.style.display = "none"
	    	cajon.file = object.getAttribute("src")
			object.src = ""
			cajon.display = object.style.display
			object.style.display = "none"
			object.parentNode.insertBefore(cajon, object);
			object.alt = ""


			var size_progress = document.createElement("div")
			diccionario["size_progress"] = size_progress
			size_progress.className = "ProgressImage-SizeRead"
			size_progress.style = "pointer-events: none;display: none;"
			size_progress.innerHTML = ""
			cajon.appendChild(size_progress)

	    	if (object.name) {
	    		size_progress.setAttribute("name", object.name)
	    	}

			var columnas = document.createElement("div")
			columnas.style = "position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background: transparent;pointer-events: none;"
			diccionario["columnas"] = columnas
			cajon.appendChild(columnas)

			var logo_id = document.createElement("div")
			logo_id.style="position: absolute;left: 0.4em;top: 0.1em;display: block;image-rendering: optimizeQuality;pointer-events: none;color: black !important"
			logo_id.innerHTML = imageDecodeExt(cajon.file)
			cajon.appendChild(logo_id)
			diccionario["logo_id"] = logo_id

			var divCanvas = document.createElement("h2")
			divCanvas.style = "color: black !important;font-size: 50px;pointer-events: none;border: none;background: transparent;"
			divCanvas.innerHTML = "0%"
			columnas.appendChild(divCanvas)

			var Zdiccionario = {"ServerHot": [divCanvas, cajon, object, size_progress, diccionario, false]}
			lista_images = lista_images.concat(Zdiccionario)



	    }
	  }
	}

	for (var item of lista_images) {
		var todo          = item["ServerHot"]
		var divCanvas     = todo[0]
		var cajon         = todo[1]
		var object        = todo[2]
		var size_progress = todo[3]
		var diccionario   = todo[4]

		Image_renderProgress(
			divCanvas, cajon,
			object, size_progress,
			diccionario, false
		)
	}

	var pointer       = 0x0
	var todo          = lista_images[pointer]["ServerHot"]
	var divCanvas     = todo[0]
	var cajon         = todo[1]
	var object        = todo[2]
	var size_progress = todo[3]
	var diccionario   = todo[4]

	// console.log((lista_images.length-0x1)==0x1)

	Image_renderProgress(
		divCanvas, cajon,
		object, size_progress,
		diccionario, true,
		pointer, lista_images
	)

}

var Image_renderProgress = function (divCanvas, cajon, object, size_progress,
	diccionario, SEND, PUNTERO_xD, lista_images) {

	var http = new XMLHttpRequest();
	http.open("GET", cajon.file, true);
	http.withCredentials             = true;
	http.divCanvas                   = divCanvas;
	http.cajon                       = cajon;
	http.object                      = object;
	http.progress_back               = false;
	http.size_progress               = size_progress;
	http.diccionario                 = diccionario;
	http.file_error                  = false;
	http.get_progress                = false;
	http.is_internet                 = true;
	http.size_progress.style.display = "none";
	http.object.isload               = false;
	http.SEND                        = SEND;
	http.PUNTERO_xD                  = PUNTERO_xD;
	http.lista_images                = lista_images
	http.activare_error_mensaje      = false


	if (!http.cajon.CLASS_MAIN) {
		http.cajon.className = "ProgressImage-container ProgressImage-size " + http.cajon.className
		http.cajon.CLASS_MAIN = http.cajon.className
	} else {
		http.cajon.className = http.cajon.CLASS_MAIN
	}


	var REDIMENSIONAR = function () {

		if (!http.cajon.parentNode) {return null}

		if (http.cajon.offsetWidth>0) {
			if (http.cajon.offsetHeight>0) {
				if ((http.cajon.offsetHeight+http.cajon.offsetWidth) < (150+120)) {
					http.cajon.style.width  = 150
					http.cajon.style.height = 120
				}
			}
		}

		http.icons_xD = (http.cajon.offsetHeight/1.7) + 'px'

		http.diccionario["logo_id"].style.fontSize = (http.cajon.offsetHeight/7) + 'px'

		if (http.cajon.offsetHeight > http.cajon.offsetWidth) {
			divCanvas.style.fontSize = (http.cajon.offsetWidth/6.5) + 'px'
			http.size_progress.style.fontSize = (http.cajon.offsetWidth/10) + 'px'
		} else {
			divCanvas.style.fontSize = (http.cajon.offsetHeight/6.5) + 'px';
			http.size_progress.style.fontSize = (http.cajon.offsetHeight/10) + 'px'
		}
			setTimeout(REDIMENSIONAR, 200)
		}
	http.cajon.style.display = "block"
	REDIMENSIONAR()


	http.restart_road = function () {
        http.diccionario["size_progress"].style.display = "block"
        http.divCanvas.innerHTML = "0%"

		Image_renderProgress(
			http.divCanvas, http.cajon,
			http.object, http.size_progress,
			http.diccionario, true,
			http.PUNTERO_xD, http.lista_images
		)
	}


	var medir_peso = function($bytes) {
		if ($bytes > 999*999) {
				var $peso = ($bytes/(1024*1024)).toFixed(3)
			return $peso.toString().substring(0,($peso.length)-1) + ' MB'
		} else {
				var $peso = ($bytes/1024).toFixed(0)
			return $peso.toString() + ' KB'
		}
	}


	if (http.overrideMimeType)
		http.overrideMimeType('text/plain; charset=x-user-defined');
	else
		http.setRequestHeader('Accept-Charset', 'x-user-defined');

	http.funcion_set_logz = function () {
		if (http.activare_error_mensaje) {
			http.divCanvas.innerHTML = ""
			return http.divCanvas.appendChild(http.activare_error_mensaje)
		}
		setTimeout(funcion_set_logz, 1000)
	}


	http.onprogress = function($pe) {

		http.in_progress_load = true

		var progreso = Math.round($pe.loaded * 100 / $pe.total)

		if (!http.get_progress) {
			http.get_progress = true
			http.size_progress.style.display = "block"
		}

		if (progreso) {

			http.size_progress.innerHTML = medir_peso(
				$pe.loaded
			) + " / " + medir_peso(
				$pe.total
			)

			if (http.progress_back!=progreso) {
				var valPROGRESS = Math.min(progreso, 98)
				http.divCanvas.innerHTML = valPROGRESS + "%"
			}
		}
	}


	var fin_de_carga = function() {
		if (http.cajon) {
			if (http.cajon.parentNode)  {
				http.cajon.parentNode.removeChild(http.cajon)
				http.object.style.display = http.cajon.display
			}
		}
	}


	if (http.SEND) {
		document.addEventListener("ServerConnection-changes",  function (event) {
			if (!http.object.isload) {
				if (!event.connection) {
					http.cajon.className = http.cajon.className + " ProgressImage-container-error"
					http.timeout = 0
					http.abort()
					http.is_internet = false
					http.diccionario["size_progress"].style.display = "none"
					var celda = document.createElement("img")
					celda.src = "data:image/svg+xml;base64," + ICON_FALLIDE_CONNECT
					celda.style.boder = "none"
					http.activare_error_mensaje = celda

					http.logo_size_notFound = function() {
						if (http.icons_xD!="0px") {
							celda.style.width = http.icons_xD
							return null
						}
						setTimeout(http.logo_size_notFound, 0x77)
					}; setTimeout(http.logo_size_notFound, 0x77)

				} else {
					if (!http.is_internet) {
						setTimeout(http.restart_road, 0)
						http.is_internet = false
					}
				}
			}
		}, false);
	}

	http.funcion_hack_error = function () {
		http.cajon.className = http.cajon.className + " ProgressImage-container-error"
		http.timeout = 0
		http.abort()
		http.diccionario["size_progress"].style.display = "none"
		var celda = document.createElement("img")
		celda.src = "data:image/svg+xml;base64," + ICON_imageNotFound
		celda.style.boder = "none"
		http.activare_error_mensaje = celda

		celda.addEventListener("load",  function (event) {
			celda.style.width = http.icons_xD
		}, false);

		http.next_image()
	}

	http.error_archivo_noEncontrado = function() {
		if (http.is_internet) {
			if (http.status==404 || http.status==0) {
				if (http.status!=200) {
					http.file_error = http.cajon.file
					clearTimeout(http.funcion_hack_error)
					setTimeout(http.funcion_hack_error, 0)
				}
			}
		}
		return false
	}

	if (!document.location.hostname) {
		http.onerror =  (event) => {
			http.error_archivo_noEncontrado()
		}
	}


    http.onload = (event) => {

    	if (document.location.hostname) {
	    	if (http.error_archivo_noEncontrado()) {
	    		return 0xAA17B0A5
	    	}
	   	}

        if (event.loaded && http.response) {
            RasteringImage()
        }
    }

    http.next_image = function() {
		if (http.PUNTERO_xD==(http.lista_images.length-0x1)) {return null}
		var pointer       = http.PUNTERO_xD + 0x1
		var todo          = http.lista_images[pointer]["ServerHot"]
		var divCanvas     = todo[0]
		var cajon         = todo[1]
		var object        = todo[2]
		var size_progress = todo[3]
		var diccionario   = todo[4]

		Image_renderProgress(
			divCanvas, cajon,
			object, size_progress,
			diccionario, true,
			pointer, http.lista_images
		)

		delete 0x2857674D
    }

	var RasteringImage = function() {

		var RenderImagePro = function () {
			if (isLoad_showImage==true) {
				// oculto celda de progreso, solo cuando la imagen en cache se haya terminado de renderizar en su correspondiente celda
				http.object.addEventListener("load",  function (event) {

					clearTimeout(fin_de_carga)
					setTimeout(fin_de_carga, 0)
					http.next_image()

				}, false);

				setTimeout(fin_de_carga, 1000000) // Hack blanco: soporte para versiones viejas de Firefox & PC que tardar en rasterizar la imagen xD-D-D-DDDDDDD

				// renderizo la imagen, cuya dirección ya esta pre-cargada => (navigator:cache*)
				http.object.src = http.cajon.file;
				http.object.isload = true
				http.object.backup_url = http.cajon.file
			}
		}

		var funcion_hack = function () {
			if (http.file_error!= http.cajon.file) {
				RenderImagePro()
			}
		}

		setTimeout(funcion_hack, 0x00000007)

	}

	if (http.SEND) {
		setTimeout(funcion_set_logz, 1000)
		setTimeout(http.send.bind(http), 0x00000003)
	}

}

//-------------------------------------------------------------------------------
//
// SERVICIO : BoxComposite
//
//-------------------------------------------------------------------------------


function _BoxComposite() {};
var UmbrellaService_BoxComposite = new _BoxComposite();

_BoxComposite.prototype.start = function() {
	var arbol_web = document.querySelectorAll('*[BoxComposite]')

	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {

	    	var MAIN = object.parentNode
	    	var resagados = new Array()

	    	var TIPO = object.getAttribute("BoxComposite")
	    	if (!TIPO) {
	    		continue
	    	}




	    	if (TIPO=="center:left") {
	    		var TIPO_COMPOSITE = ";margin-right: auto;margin-top: auto;margin-bottom: auto;"
	    	}

	    	if (TIPO=="center") {
	    		var TIPO_COMPOSITE = "margin-left: auto;margin-right: auto;margin-top: auto;margin-bottom: auto;"
	    	}


	    	if (TIPO=="center:right") {
	    		var TIPO_COMPOSITE = "margin-left: auto;margin-top: auto;margin-bottom: auto;"
	    	}




	    	if (TIPO=="top:left") {
	    		var TIPO_COMPOSITE = ";margin-right: auto;margin-bottom: auto;"
	    	}

	    	if (TIPO=="top:center") {
	    		var TIPO_COMPOSITE = "margin-left: auto;margin-right: auto;margin-bottom: auto;"
	    	}

	    	if (TIPO=="top:right") {
	    		var TIPO_COMPOSITE = "margin-left: auto;margin-bottom: auto;"
	    	}




	    	if (TIPO=="bottom:left") {
	    		var TIPO_COMPOSITE = ";margin-right: auto;margin-top: auto;"
	    	}

	    	if (TIPO=="bottom:center") {
	    		var TIPO_COMPOSITE = "margin-left: auto;margin-right: auto;margin-top: auto;"
	    	}

	    	if (TIPO=="bottom:right") {
	    		var TIPO_COMPOSITE = "margin-left: auto;margin-top: auto;"
	    	}

	    	if (!TIPO_COMPOSITE) {
	    		continue
	    	}

	    	var dimitrio = "absolute"
	    	var vale_vale = object.parentNode
	    	if (vale_vale.getAttribute("hbox")||vale_vale.getAttribute("BoxComposite")) {
	    		dimitrio = "relative"
	    	}

	    	var capa0 = document.createElement("div")
			var capa1 = document.createElement("div")

	    	capa0.style="position: "+dimitrio+";width: 100%;height: 100%"
	    	capa0.appendChild(capa1)

			capa1.style = ";position: relative;height: 100%;width: 100%;z-index: 200;"
			MAIN.insertBefore(capa0, object);
			MAIN.removeChild(object);

			var capa2 = document.createElement("div")
			capa2.style=";display: flex;flex-wrap: wrap;background: transparent;height: calc(100%);-webkit-box-orient: vertical;-webkit-box-direction: normal;"


			capa0.hijo = object
			var Medir_visibilidad = function() {
				if (this.hijo.style.display!=this.anterior_state) {
					this.style.display = this.hijo.style.display
					this.anterior_state = this.style.display
				}
				setTimeout(Medir_visibilidad.bind(this), 87)
			}; setTimeout(Medir_visibilidad.bind(capa0), 0)


			capa2.setAttribute("name", "umbrella.tool-box-comppsite")
			capa1.appendChild(capa2)
			object.style = TIPO_COMPOSITE + object.style.cssText
			capa2.appendChild(object)

	    }
	  }
	}
}


//-------------------------------------------------------------------------------
//
// SERVICIO : Sunfur Super-FlexBox
//
//-------------------------------------------------------------------------------


function _FlexBox() {};
var UmbrellaService_FlexBox = new _FlexBox();

_FlexBox.prototype.start = function() {

	// refactorizando margen automatizado "hbox-space" -> (left=>right)
	var arbol_web    = document.querySelectorAll('div[hbox-layer-space]')
	if (arbol_web.length>0) {
		for (var object of arbol_web) {
		  if (typeof object == "object") {
		    if (!find_object(object)) {

	    		var MAIN = object.parentNode
	    		var atributo = object.getAttribute("hbox-layer-space")

	    		var _IAG = object.querySelectorAll('*[hbox]')
				for (var object_tmp of _IAG) {
				  if (typeof object_tmp == "object") {
				    if (!find_object(object_tmp)) {
				    	MAIN.insertBefore(object_tmp, object);
				    	object_tmp.setAttribute("hbox-space", atributo)
				    }
				  }
				}
				object.parentNode.removeChild(object)
		    }
		  }
		}
	}


	// calcular trayectoria responsive => isVertical or isHorizontal
	var TruncarResponsive = function(diccionario, obj, value, master_flex) {

		if (value.indexOf("css-class")==0) {
			if (value.split(/\(|\)/g).length==3) {
				var name_class_css = value.split(/\(|\)/g)[1]
				if (name_class_css.length!=0) {
					obj.className = name_class_css
				} else {
					obj.className = self.master_flex_CLASS_css_Backup
				}
			}
		}

		if (value=="vertical") {
			master_flex.style.flexDirection = "column"
		}

		if (value=="horizontal") {
			master_flex.style.flexDirection = "row"
		}

		if (value=="hide") {
			obj.style.display = "none"
			if (diccionario["boxComposite"]) {
			    diccionario["boxComposite"].style.display = "none"
			}
		}

		if (value=="show") {
			if (master_flex!=obj) {
				obj.style.display = "block"
			} else {
				obj.style.display = "flex"
			}

			if (diccionario["boxComposite"]) {
			    diccionario["boxComposite"].style.display = "block"
			}
		}

	}

	var CalcMargin = function(self, obj1, obj2) {

		if (self.previus==undefined) {
			if (obj1.getBoundingClientRect().width==0) {return null}
			if (obj2.getBoundingClientRect().width==0) {return null}
		}

		obj1 = Math.round(obj1.getBoundingClientRect().right)
		obj2 = Math.round(obj2.getBoundingClientRect().left) - 205

		return obj1>=obj2
	}

	var CalcNull = function(object) {
		if (object.getBoundingClientRect().width==0) {
			return true
		}
		return false
	}

	var seguir_path_Hbox_responsive = function() {
		this.rule        = this["rule"]
		this.object      = this["object"]
		this.master_flex = this["master_flex"]
		this.horizontal  = this["horizontal"]
		this.vertical    = this["vertical"]
		this.width_min   = this["Width-min"]

		if (this.master_flex_CLASS_css_Backup==undefined) {
			this.master_flex_CLASS_css_Backup = this.master_flex.className
		}

		var JUMPER = function (self) {
			return setTimeout(seguir_path_Hbox_responsive.bind(self), 0x00000007), 0xAA17B0A5
		}

		var dimension  = window.innerWidth

		if (this.previus==undefined) {if (CalcNull(this.master_flex)) {return JUMPER(this)}}
		this.previus_backup = this.previus

		if (this.previus!=dimension) {

			this.master_flex.style.display = "flex"

			if (this["boxComposite"]) {
				if (this["boxComposite"].style.display == "none") {
					this["boxComposite"].style.display = "block"
				}
			}

			this.previus = dimension
			var self       = this

			if (this.master_flex.style.flexDirection=="column") {
				this.master_flex.style.flexDirection = "row"
			}
			var IntelStruct = Math.round(this.object.getBoundingClientRect().width)


			var isVertical = CalcMargin(this, this.rule, this.object)

			if (isVertical==null) {
				return JUMPER(this)
			}




			if (this.width_min) {
				for (var item_w1 of this.width_min) {
					var pointer     = item_w1.split("=")
					var limite      = pointer[0]
					var cmd         = pointer[1]

					if (CalcNull(this.master_flex)) {
						return JUMPER(this)
					}

					var toSEND = function() {
						var items = cmd.split(",")
						for (var item of items) {
							var struct = item.split(".")
							var key    = struct[0x0]
							var value  = struct[0x1]
							if (key=="row") {
								TruncarResponsive(this, self.master_flex, value, self.master_flex)
							} else {
								var arbol_tmp = document.querySelectorAll('*[name="'+key+'"]')
								if (arbol_tmp.length>0) {
									for (var object2 of arbol_tmp) {
									  if (typeof object2 == "object") {
									    if (!find_object(object2)) {
									    	TruncarResponsive(this, object2, value, self.master_flex)
									    }
									  }
									}
								}
							}
						}
					}

					var ISVERTICAL = Math.round(this.rule.getBoundingClientRect().right)>= Math.round(this.object.getBoundingClientRect().left)

					var goteo = pointer[0].split("max:")
					if (goteo.length>1) {
						var limite = Number(pointer[0].replace("max:", ""))
						if (IntelStruct<limite||ISVERTICAL) {
							// console.log(limite, IntelStruct, ISVERTICAL, "T1")
							toSEND()
						}
					}

					if (this.master_flex.style.flexDirection == "row"||this.previus_backup==undefined) {
						var goteo = pointer[0].split("min:")
						if (goteo.length>1) {
							var limite = Number(pointer[0].replace("min:", ""))
							if (IntelStruct>=limite) {
								// console.log(limite, IntelStruct, ISVERTICAL, "T2")
								toSEND()
							}
						}
					}


				}
				return JUMPER(this)
			}





			if (!isVertical) {
				if (self.horizontal) {
					var items = self.horizontal.split(",")
					for (var item of items) {
						var struct = item.split(".")
						var key    = struct[0x0]
						var value  = struct[0x1]
						if (key=="row") {
							TruncarResponsive(this, self.master_flex, value, self.master_flex)
						} else {
							var arbol_tmp = document.querySelectorAll('*[name="'+key+'"]')
							if (arbol_tmp.length>0) {
								for (var object2 of arbol_tmp) {
								  if (typeof object2 == "object") {
								    if (!find_object(object2)) {
								    	TruncarResponsive(this, object2, value, self.master_flex)
								    }
								  }
								}
							}
						}
					}
				}
			} else {
				if (self.vertical) {
					var items = self.vertical.split(",")
					for (var item of items) {
						var struct = item.split(".")
						var key    = struct[0x0]
						var value  = struct[0x1]
						if (key=="row") {
							TruncarResponsive(this, self.master_flex, value)
						} else {
							var arbol_tmp = document.querySelectorAll('*[name="'+key+'"]')
							if (arbol_tmp.length>0) {
								for (var object2 of arbol_tmp) {
								  if (typeof object2 == "object") {
								    if (!find_object(object2)) {
								    	TruncarResponsive(this, object2, value)
								    }
								  }
								}
							}
						}
					}
				}
			}
		}

		return JUMPER(this)
	}


	// creando estructura automatiza de Super-Flexbox
	var RUIN = function(OBJ) {

		var arbol_web       = OBJ.querySelectorAll('*[hbox]')
		var Comboy_anterior = false
		var anterior_box    = false

		var generateFlex = function (object, isExpand) {

			var ComputeClass = function (CSS_START) {
				var CSS = CSS_START

				var TMP = ""
				if (object.className) {
					var clases = object.className.split(" ")

					for (var index in document.styleSheets) {
						var value = document.styleSheets[index]
						if (!value.href) {
							var voiding = value.cssRules
							if (voiding) {
								for (var index in voiding) {
									var struct = voiding[index]
									for (var CLASE of clases) {
										if (struct.selectorText) {
											if (struct.selectorText.indexOf(CLASE)==0x1) {
												if (struct.style.width) {
													TMP+=struct.style.cssText

													if (TMP.indexOf("min-width")<0) {
														TMP+= ";min-width:"+struct.style.width+";"
													}

													if (TMP.indexOf("max-width")<0) {
														TMP+= ";max-width:"+struct.style.width+";"
													}

													if (TMP.indexOf("min-height")<0) {
														TMP+= ";min-height:"+struct.style.height+";"
													}

													if (TMP.indexOf("max-height")<0) {
														TMP+= ";max-height:"+struct.style.height+";"
													}


												}
											}
										}
									}
								}
							}
						}
					}
				}

				if (TMP) {CSS+=TMP}
				return CSS
			}


			var ComputeCols_auto = function() {

    			if (isExpand=="auto") {
    				return ";flex: 1;max-width: 100%;margin-right: 0.6em;margin-left: 0.6em;"
    			}

    			if (isExpand=="auto+") {
    				return ";flex: 1;max-width: 100%;margin-right: 0.6em;margin-left: 0.6em;margin-right: 0em;margin-left: 0em;"
    			}

    			return ""
			}

    		if (isExpand) {

    			if (!anterior_box) {
    				object.isExpand_tree = true
    				object.style_hide_layer = ComputeClass(";margin-left: 0.82em;margin-top: 0.4em;margin-bottom: 0.4em;" + object.style.cssText)
    				object.style = ComputeClass(";margin-left: auto;margin-right: auto;margin-top: 0.4em;margin-bottom: 0.4em;" + ComputeCols_auto() + object.style.cssText)
    			} else {
    				if (Boolean(anterior_box.getAttribute("hbox_finish"))) {
    					object.style = ComputeClass(";margin-left: auto;margin-right: auto;margin-top: 0.4em;margin-bottom: 0.4em;" + ComputeCols_auto() + object.style.cssText)
    				} else {
						object.isExpand_tree = true
						object.style_hide_layer = ComputeClass(";margin-left: 0.82em;margin-top: 0.4em;margin-bottom: 0.4em;" + object.style.cssText)
    					object.style = ComputeClass(";margin-left: 0.82em;margin-right: auto;margin-top: 0.4em;margin-bottom: 0.4em;" + ComputeCols_auto() + object.style.cssText)
    				}
    			}

    		} else {

    			object.style = ComputeClass(";margin-left: 0.82em;margin-top: 0.4em;margin-bottom: 0.4em;" + object.style.cssText)

    			if (anterior_box) {
	    			if (Boolean(anterior_box.getAttribute("hbox_finish"))) {
		    			if (anterior_box) {
		    				anterior_box.style = "margin-left: auto;margin-right: 0;margin-top: 0.4em;margin-bottom: 0.4em;"
		    			}
		    		}
		    	}

    		}

    		object.setAttribute("hbox_finish", object.getAttribute("hbox"))
	    	object.removeAttribute("hbox")

	    	if (object.getAttribute("hbox-space")) {
	    		var margen =  object.getAttribute("hbox-space")
	    		object.style = object.style.cssText + ";margin-left: "+margen+";margin-right: "+margen+";"
	    	}

	    	clasificados=clasificados.concat(object)
		}

		var IA_superFlex = function() {
			if (clasificados[0x0].isExpand_tree) {
				if (clasificados[clasificados.length-1].isExpand_tree) {
					var conteo=0
					for (var obj of clasificados) {
						if (obj.isExpand_tree==undefined) {
							conteo++
						}
					}

					if (conteo == clasificados.length-2) {
						Comboy_anterior.style.justifyContent = "center"
						var obj = clasificados[0x0]
						obj.style = obj.style_hide_layer
						var obj = clasificados[clasificados.length-1]
						obj.style = obj.style_hide_layer
					}
				}
			}
		}

		for (var object of arbol_web) {
		  if (typeof object == "object") {
		    if (!find_object(object)) {

	    		if (object.getAttribute("hbox")=="false") {
	    			object.setAttribute("hbox", "")
	    		}

		    	var anterior = object.previousElementSibling
		    	var isExpand = object.getAttribute("hbox")=="true"
		    	var MAIN = object.parentNode
		    	var NUEVO = false

		    	if (!isExpand) {
		    		var valor = object.getAttribute("hbox")
		    		if (valor=="auto" || valor=="auto+") {
		    			isExpand = valor
		    		} else {
		    			if (valor!="") {
		    				isExpand = true
		    			}
		    		}
		    	}


		    	if (anterior) {
		    		if (object.getAttribute("hbox-isVertical")||object.getAttribute("hbox-isHorizontal")||object.getAttribute("hbox-isWidth")||object.getAttribute("hbox-isMargin-min"))

		    			if (anterior_box) {

			    			var diccionarioHbox_responsive = {}
			    			diccionarioHbox_responsive["rule"] = Frist_box
			    			diccionarioHbox_responsive["object"] = object
			    			diccionarioHbox_responsive["master_flex"] = Comboy_anterior

			    			if (Comboy_anterior.parentNode) {
			    				var cela_Z = Comboy_anterior.parentNode
			    				var type_celda_Z = cela_Z.getAttribute(
			    					"name"
			    				)

			    				if (type_celda_Z=="umbrella.tool-box-comppsite") {
			    					diccionarioHbox_responsive["boxComposite"] = cela_Z
			    				}
			    			}

			    			if (object.getAttribute("hbox-isHorizontal")) {
			    				var valor = object.getAttribute("hbox-isHorizontal")
			    				diccionarioHbox_responsive["horizontal"] = valor
			    			}

			    			if (object.getAttribute("hbox-isVertical")) {
			    				var valor = object.getAttribute("hbox-isVertical")
			    				diccionarioHbox_responsive["vertical"] = valor
			    			}

			    			if (object.getAttribute("hbox-isWidth")) {
			    				var valor = object.getAttribute("hbox-isWidth")
			    				var struct = valor.split("=")
			    				var xW = struct[0]
			    				var cmd = struct[1].replace("max:", "max:"+xW+"=").replace("min:", "min:"+xW+"=")
			    				var valor = cmd
			    				diccionarioHbox_responsive["Width-min"] = valor.split("|")
			    			}

			    			setTimeout(
			    				seguir_path_Hbox_responsive.bind(
			    					diccionarioHbox_responsive), 0x17)
			    		}
		    	}


		    	if (anterior) {
		    		var anterior_isHbox = anterior.getAttribute("hbox_finish")!=null

		    		if (anterior_isHbox) {
		    			generateFlex(object, isExpand)
		    			MAIN.removeChild(object);
						Comboy_anterior.appendChild(object);
						anterior_box = object
						continue
		    		} else {
		    			NUEVO = true
		    		}
		    	} else {
		    		NUEVO = true
		    	}

		    	if (NUEVO) {

		    		if (clasificados!=undefined) {
		    			if (clasificados.length!=0) {
		    				IA_superFlex()
		    				var Comboy_anterior = false
							var anterior_box    = false
		    			}
		    		}
		    		var clasificados    = new Array()

	    			generateFlex(object, isExpand)
	    			var contenedor = document.createElement("div")
	    			contenedor.setAttribute("hbox_finish", object.getAttribute("hbox"))
	    			contenedor.style = "margin-left: auto;margin-right: auto;width: 100%;"
	    			MAIN.insertBefore(contenedor, object);
	    			MAIN.removeChild(object);

	    			var columnas = document.createElement("div")
	    			columnas.style = "display: -webkit-flex;display: flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-orient: vertical;-webkit-box-direction: normal;"

	    			if (object.getAttribute("umbrella.page_element")) {
	    				columnas.style = columnas.style.cssText + ";flex-direction: column;"
	    			}

	    			columnas.appendChild(object);
	    			Comboy_anterior = columnas
	    			contenedor.appendChild(columnas)
	    			anterior_box = object
	    			var Frist_box = object
	    			continue
		    	}

		    	anterior_box = false
		    }
		  }
		}

		IA_superFlex()
	}


	// rectorizar celdas, creando mascaras de extructras multi dimensionales
	var HACK = function (OBJ) {
		var arbol_web    = OBJ.querySelectorAll('*[hbox]')
		var box_anterior = false
		var morfeo       = false
		var lista_bot = []


		if (arbol_web.length<1) {
			return {"seguir": false, "BOTS": false}
		}

		for (var object of arbol_web) {
		  if (typeof object == "object") {
		    if (!find_object(object)) {

		    	var MAIN = object.parentNode

		    	if (box_anterior) {
		    		var _IAG = box_anterior.querySelectorAll('*')
		    		var saltar = false
					for (var object_tmp of _IAG) {
					  if (typeof object_tmp == "object") {
					    if (!find_object(object_tmp)) {
					    	if (object_tmp==object) {
					    		saltar = true
					    	}
					    }
					  }
					}
		    	}

		    	if (saltar) {
					box_anterior.layer_hide = box_anterior.innerHTML
					box_anterior.innerHTML  = "♥♥♥"
					morfeo = true
					lista_bot = lista_bot.concat(box_anterior)
		    	}

    			box_anterior = object

		    }
		  }
		}

		if (morfeo) {
			return {"seguir": true, "BOTS": lista_bot}
		} else {
			return {"seguir": false, "BOTS": false}
		}
	}


	// ejecutando capas de mascaras de forma sincronizada
	function GenerateInCitharaV1(DOC) {
		self = HACK(DOC)
		RUIN(DOC)

		if (self.seguir) {
			for (var item of self.BOTS) {
				item.innerHTML = item.layer_hide
				GenerateInCitharaV1(item)
			}
		}

		return HACK(DOC)
	}

	// !QUE SE HAGA LA LUZ xD!, o mejor dicho que no se vaya la luz !MADURO #!@*...! :(
	GenerateInCitharaV1(document)

}

//-------------------------------------------------------------------------------
//
// SERVICIO : receta de la extructura elemental de una buena pagina xD-D-D
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:1*
function _TemplateBody() {};
var UmbrellaService_TemplateBody = new _TemplateBody();

// filtrando elementos en el arbol web
_TemplateBody.prototype.start = function() {
	var arbol_web = document.querySelectorAll('*[name]')
	var slaves    = new Array()
	var master    = false

	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {
	      var value = object.getAttribute("name")
	      if (value!="") {
	        if (value=="body.toolbar"||value=="body.footer") {
	        	slaves = slaves.concat(object)
	        	object.style = object.style.cssText + ";min-width: auto;margin-top: 0em;margin-bottom: 0em;"
	        	object.setAttribute("hbox", "auto+")
	        	object.setAttribute("umbrella.page_element", true)
	        }

	        if (value=="body.content") {
	        	object.style = object.style.cssText + ";min-width: 100%;margin-top: 0em;margin-bottom: 0em;padding: 0em;"
	        	master = object
	        	object.setAttribute("hbox", "auto+")
	        	object.setAttribute("umbrella.page_element", true)
	        }
	      }
	    }
	  }
	}

	// Cithara generate => simulation custom event=>Resize*
	var RasterizarDimensiones = function(YesBucle) {

		var reboot = function(self, conteo=200) {
			if (YesBucle) {
				setTimeout(RasterizarDimensiones.bind(self, true), conteo)
			}
		}

		var height_page = window.innerHeight
		var height_page2 = window.innerWidth

		// if (this.previus_master!=undefined) {
		// 	if (height_page==this.previus_master) {
		// 		if (height_page2==this.previus_master2) {
		// 			this.previus_master = height_page
		// 			return reboot(this)
		// 		}
		// 	}
		// }

		var resta = new Number()
		for (var object of slaves) {

			var cuartaDimension = object.getBoundingClientRect().height
			if (cuartaDimension==0) {
				return reboot(this)
			}
			resta+=cuartaDimension
		}

		this.previus_master = height_page
		this.previus_master2 = height_page2
		master.style.minHeight = ""
		var MASTER = document.body.scrollHeight

		var anchura = MASTER - resta
		master.style.minHeight = anchura + "px"
		this.cambios_estado = true

		reboot(this)
	}

	if (master) {
		var celda = document.createElement("node")
		celda.cambios_estado = false
		setTimeout(RasterizarDimensiones.bind(celda, true), 0)
		celda.setTimeout_instance = false
		celda.conteo_timeOut_instance = 0
		celda.salir_while = false
	}
}


//-------------------------------------------------------------------------------
//
// SERVICIO : Zoom automatizado para vista movil xD-D-D-DDDDDDDDD
//
//-------------------------------------------------------------------------------

function UmbrellaService_ZooomViewPort() {
	var viewport = document.querySelectorAll('meta[name="viewport"]')
	if (viewport.length==0) {
		var new_viewport = document.createElement("meta")
		new_viewport.name="viewport"
		new_viewport.content="width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0"
		document.head.appendChild(new_viewport)
	}
}
