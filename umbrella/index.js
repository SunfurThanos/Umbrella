//-----------------------------------------------------------------------------//
//     Author      : Sunfur Thanos                                             //
//      Mail       : hormigence123@gmail.com                                   //
//       Country   : Venezuela                                                 //
//        License  : GPL-3                                           	       //
//                                                                             //
//                   Copyright 2020 Sunfur Thanos. All rights reserved.        //
//-----------------------------------------------------------------------------//

"use strict";

//-------------------------------------------------------------------------------
//
// Iconos => UI
//
//-------------------------------------------------------------------------------

// ICON : archivo no encontrado
var ICON_imageNotFound = "PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAgNDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjAiIHkxPSIyLjg1IiB4Mj0iMjAiIHkyPSIzNy4xNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTYzYjJlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzMzOTMxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InVybCgjZ3JhZGllbnQpIiBkPSJNMzkuMDQ4LDYuNzk4SDE5LjAwNCBDMTYuNzE1LDYuNzgyIDE2LjE5NSw1LjY1NiAxNS44MzksNC4zOTcgMTUuNDgsMy4xMjggMTQuNzYzLDIgMTIuNjEsMiA2LjgzNSwyIDcuMTg5OTk5OCwyIDYuNDQzLDIgNC4yOSwyIDMuNTczLDMuMTI3IDMuMjE0LDQuMzk3IDIuODU1LDUuNjY2IDIuMzMyLDYuOCAwLDYuOEgwLjk0IEMwLjQyMSw2LjgwOCAwLjAwMyw3LjIzMyAwLjAwMyw3Ljc1OHYyNy41ODNjMCwwLjUzIDAuNDI2LDAuOTU5IDAuOTUyLDAuOTU5SDM5LjA0OCBDMzkuNTc0LDM2LjMgNDAsMzUuODcxIDQwLDM1LjM0MSBWIDcuNzU3IEM0MCw3LjIyNyAzOS41NzQsNi43OTggMzkuMDQ4LDYuNzk4IFogTTguNDQwOTk5OCwxNy4wODJjMCwtMi4xMTkgMS43MDUwMDAyLC0zLjgzNyAzLjgwOTAwMDIsLTMuODM3IDIuMTAzLDAgMy44MDksMS43MTggMy44MDksMy44MzcgMCwyLjExOSAtMS43MDUsMy44MzcgLTMuODA5LDMuODM3IC0yLjEwNCwwIC0zLjgwOTAwMDIsLTEuNzE4IC0zLjgwOTAwMDIsLTMuODM3eiBNMjYuNzE3LDMwLjk4Yy0xLjUyNSwwIC0xLjUyNSwtMi4zMDUgLTYuODY0LC0yLjMwNSAtNS4zMzksMCAtNS4zMzksMi4zMDUgLTYuODY0LDIuMzA1IC0wLjg0MiwwIC0xLjUyNiwtMC41MTIgLTEuNTI2LC0xLjUzNyAwLC0xLjAyNCAxLjI3MSwtMy44NDIgOC4zOSwtMy44NDIgNy4xMTksMCA4LjM5LDIuODA0IDguMzksMy44NDIgMCwxLjAzOCAtMC42ODMsMS41MzcgLTEuNTI2LDEuNTM3eiBtIDAuNzY4LC0xMC4wNjFjLTIuMTA0LDAgLTMuODA5LC0xLjcxOCAtMy44MDksLTMuODM3IDAsLTIuMTE5IDEuNzA1LC0zLjgzNyAzLjgwOSwtMy44MzcgMi4xMDQsMCAzLjgwOSwxLjcxOCAzLjgwOSwzLjgzNyAwLDIuMTE5IC0xLjcwNiwzLjgzNyAtMy44MDksMy44Mzd6Ii8+Cjwvc3ZnPg=="

// ICON : Carga Fallida
var ICON_FALLIDE_CONNECT = "PCEtLSB0b21hZG8gZGVsIG5hdmVnYWRvciBDaHJvbWUgLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwNDggMjA0OCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE2MDAgMTE1MnE5MyAwIDE3NCAzNXQxNDMgOTYgOTYgMTQyIDM1IDE3NXEwIDkzLTM1IDE3NHQtOTYgMTQzLTE0MiA5Ni0xNzUgMzVxLTkzIDAtMTc0LTM1dC0xNDMtOTYtOTYtMTQyLTM1LTE3NXEwLTkzIDM1LTE3NHQ5Ni0xNDMgMTQyLTk2IDE3NS0zNXptLTMyMCA0NDhxMCA2NiAyNSAxMjR0NjggMTAyIDEwMiA2OSAxMjUgMjVxNDcgMCA5Mi0xM3Q4NC00MGwtNDQzLTQ0M3EtMjYgMzktMzkgODR0LTE0IDkyem01ODcgMTc2cTI2LTM5IDM5LTg0dDE0LTkycTAtNjYtMjUtMTI0dC02OS0xMDEtMTAyLTY5LTEyNC0yNnEtNDcgMC05MiAxM3QtODQgNDBsNDQzIDQ0M3ptLTc3NCAxMjVxMjIgMzYgNDggNjl0NTcgNjJxLTQzIDgtODYgMTJ0LTg4IDRxLTE0MSAwLTI3Mi0zNnQtMjQ0LTEwNC0yMDctMTYwLTE2MS0yMDctMTAzLTI0NS0zNy0yNzJxMC0xNDEgMzYtMjcydDEwNC0yNDQgMTYwLTIwNyAyMDctMTYxVDc1MiAzN3QyNzItMzdxMTQxIDAgMjcyIDM2dDI0NCAxMDQgMjA3IDE2MCAxNjEgMjA3IDEwMyAyNDUgMzcgMjcycTAgNDQtNCA4N3QtMTIgODdxLTU0LTU5LTExOC05OGw0LTM4cTItMTkgMi0zOCAwLTEzMC0zOC0yNTZoLTM2MnE4IDYyIDExIDEyM3Q1IDEyNHEtMzMgMy02NSAxMHQtNjQgMTh2LTM5cTAtNjAtNC0xMTh0LTEyLTExOEg2NTdxLTkgNjQtMTMgMTI3dC00IDEyOXEwIDY1IDQgMTI4dDEzIDEyOGg0NDZxLTM3IDU5LTYwIDEyOEg2NzlxOCAzNyAyMyA4OXQzNyAxMDkgNTEgMTEzIDY0IDEwMSA3OCA3MiA5MiAyOHExOCAwIDM1LTV0MzQtMTR6bTczOS0xMjYxcS0zOC04MS05MS0xNTJ0LTEyMC0xMzEtMTQzLTEwNC0xNjItNzVxMzYgNDkgNjQgMTA1dDUxIDExNSA0MCAxMjEgMjkgMTIxaDMzMnptLTgwOC01MTJxLTQ5IDAtOTEgMjd0LTc4IDczLTY1IDEwMS01MSAxMTMtMzcgMTA5LTIzIDg5aDY5MHEtOC0zNy0yMy04OXQtMzctMTA5LTUxLTExMy02NC0xMDEtNzgtNzItOTItMjh6bS0yOTIgNTBxLTg1IDI5LTE2MiA3NFQ0MjcgMzU3IDMwOCA0ODd0LTkyIDE1M2gzMzJxMTItNTkgMjgtMTIwdDM5LTEyMSA1Mi0xMTYgNjUtMTA1em0tNjA0IDg0NnEwIDEzMCAzOCAyNTZoMzYycS04LTY0LTEyLTEyN3QtNC0xMjlxMC02NSA0LTEyOHQxMi0xMjhIMTY2cS0zOCAxMjYtMzggMjU2em04OCAzODRxMzggODEgOTEgMTUydDEyMCAxMzEgMTQzIDEwNCAxNjIgNzVxLTM2LTQ5LTY1LTEwNXQtNTEtMTE1LTM5LTEyMS0yOS0xMjFIMjE2eiIgZmlsbD0iIzEwMTAxMCIvPjwvc3ZnPg=="

//-------------------------------------------------------------------------------
//
// utilidades globales
//
//-------------------------------------------------------------------------------

// metodo global => NameSpace*
var umbrella = function() {}

// ver si un (list=>item*) existe
var find_object = function(object) {
	var list = new Array()
	for (var compared of list) {
		if (compared==object) {
			return true;
		}
	}
	return false
}

//-------------------------------------------------------------------------------
//
// Umbrella => eventos personalizado para detectar conexión a internet xD-D-DDDD
//
//-------------------------------------------------------------------------------

umbrella.testTime_conection = 7 // 7 segundos para la espera de cada PING
umbrella.eventTestingServer = document.createEvent("Event");
umbrella.eventTestingServer.initEvent("ServerConnection-changes", true, false);
umbrella.eventTestingServer.status_conection = null

function func_isConectionServer(seconds) {

    var http = new XMLHttpRequest();
    var randomNum = Math.round(Math.random() * 10000);

    http.open('HEAD', document.location + "?rand=" + randomNum, true);
    http.time_reset = seconds


	http.onloadend = (event) => {
        if (http.status >= 200 && http.status < 304) {
			umbrella.eventTestingServer.connection = true
			document.dispatchEvent(umbrella.eventTestingServer);
			setTimeout(func_isConectionServer.bind(null,
				http.time_reset), http.time_reset*1000)
			var status_actual = true
        } else {
			umbrella.eventTestingServer.connection = false
			document.dispatchEvent(umbrella.eventTestingServer);
			setTimeout(func_isConectionServer.bind(
				null, http.time_reset), http.time_reset*1000)
			var status_actual = false
        }

        if (umbrella.eventTestingServer.status_conection!=status_actual) {
        	umbrella.eventTestingServer.status_conection = status_actual

        	if (status_actual) {
        		console.log("hay internet")
        	} else {
        		console.log("No hay internet")
        	}
        }

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
		umbrella.start_load = document.querySelector("*[name='main-container']")
		umbrella.circule_progress = document.querySelector("*[name='preloader-animation']")
	}
}, true);

//-------------------------------------------------------------------------------
//
// hack blanco: calculando ruta de este archivo :)
//
//-------------------------------------------------------------------------------

var PATH_UMBRELLA = new String()
var $lista = document.querySelectorAll('\x73\x63\x72\x69\x70\x74')

for (var $object of $lista) {
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
// Variables globales
//
//-------------------------------------------------------------------------------

// Umbrella versión
umbrella.version = new Number(8)

// creando clase de Entities
var Entities = function() {}

// Entities: crear tipo espacio
Entities.space = new RegExp(/&amp;space;/g) // => "$space;" = "\xA0"

// tiempo "FLASH" de espera en eventos personalizados => int*
var TIME_CUSTOM = new Number(0x17)

// activar o desactivar barra de progreso para imagenes => Bool*
var ShowImage_progress = new Boolean(true)

// despues de precargar imagen mostrarla => Bool*
var isLoad_showImage = new Boolean(true)

// estilo para (barra de carga circular) para imagenes => method*
var circleImageProgress = function() {}

//-------------------------------------------------------------------------------
//
// BANNER de bienbenida para la consola
//
//-------------------------------------------------------------------------------

function show_Umbrella_banner() {
    (null, window.setTimeout)(window.console.log.bind(window.console,
    "%c Umbrella ","margin-top: 7px;color: #50E68A; background: #1A1A1A; font-size: 24px;margin-right: 0.1em;"))
}; setTimeout(show_Umbrella_banner, TIME_CUSTOM)

//-------------------------------------------------------------------------------
//
// interceptar evento antes del renderizado web xD-D-D-DDDDDD
//
//-------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", UmbrellaKernelStart, false);

// ejecutando servicios dedicados
function UmbrellaKernelStart() {

	// servicio: celdas sincronizada
	UmbrellaService_PasteAttrib.start()

	// servicio: Sunfur FlexBox
	UmbrellaService_FlexBox.start()

	// servicio: LAYOUT => BoxComposite
	UmbrellaService_BoxComposite.start()

	// servicio: computar espacio
	UmbrellaService_ComputeSpace.start(true)

	// servicio: convertir la etiqueta "align" en relativa
	UmbrellaService_ComputeAlign.start()

	// servicio: mejora de -> "href"
	UmbrellaService_ComputeHref.start()

	// servicio: ver imagen en otra pestaña si el evento "click" no existe
	UmbrellaService_ViewImgTab.start()

	// testeo infinito para probar conexión a internet
	if (document.location.hostname) {
		if (document.location.hostname!="localhost") {
			console.log("Umbrella sockect: " + document.location.hostname)
			func_isConectionServer(umbrella.testTime_conection)
		}
	}

	// servicio FINAL: barra de progreso para imagenes
	if (ShowImage_progress==true) {
		UmbrellaService_ImageProgress.start()
	}

	// avisando que Umbrella ya termino de refactorizar
    document.dispatchEvent(umbrella.eventPageRefactory);

	// quitan barra de carga tipo $pulsate*
	if (umbrella.start_load) {
		if (umbrella.circule_progress) {
			umbrella.circule_progress.style.display = "none"
		}
		umbrella.start_load.style.display = "block"
	}
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

		    if (["id","src"].indexOf(tag)<0) {
		      var scope = obj_pegar.getAttribute(tag)

		      if (!obj_pegar.IsMaduro) {
			      if (scope!=null) {
			        var value = scope
			      }
			  }

		      obj_pegar.setAttribute(tag, value)
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

	for (var value of [
		'img[link-tab]',
		'img[link-main]',
		'button[link-tab]',
		'button[link-main]'
		]) {
		CRIPTON7(value)
	}

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

	var imageDecodeExt = function(url) {
		var struct = url.split(".")
		var ext = struct[struct.length-1].toUpperCase()
		return ext
	}

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
			logo_id.style="position: absolute;left: 0.4em;top: 0.1em;display: block;image-rendering: optimizeQuality;pointer-events: none;"
			logo_id.innerHTML = imageDecodeExt(cajon.file)
			cajon.appendChild(logo_id)
			diccionario["logo_id"] = logo_id


			var divCanvas = document.createElement("h2")
			divCanvas.style = "color: black;font-size: 50px;pointer-events: none;border: none;background: transparent;"
			divCanvas.innerHTML = "0%"
			columnas.appendChild(divCanvas)


			Image_renderProgress(
				divCanvas, cajon,
				object, size_progress,
				diccionario, false
			)

	    }
	  }
	}
}

var Image_renderProgress = function (divCanvas, cajon, object, size_progress,
	diccionario, CLIC_BUTTON) {

	var http = new XMLHttpRequest();
	http.open("GET", cajon.file, true);
	http.divCanvas     = divCanvas
	http.cajon         = cajon
	http.object        = object
	http.progress_back = false
	http.size_progress = size_progress
	http.diccionario   = diccionario
	http.file_error    = false
	http.get_progress  = false
	http.button_clic   = CLIC_BUTTON
	http.is_internet   = true
	http.size_progress.style.display = "none"


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
			http.diccionario, http.button_clic
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



	document.addEventListener("ServerConnection-changes",  function (event) {
		if (!event.connection) {
			http.cajon.className = http.cajon.className + " ProgressImage-container-error"
			http.timeout = 0x00000003
			http.abort()
			http.is_internet = false
			http.diccionario["size_progress"].style.display = "none"
			http.divCanvas.innerHTML = ""
			var celda = document.createElement("img")
			celda.src = "data:image/svg+xml;base64," + ICON_FALLIDE_CONNECT
			celda.style.width = http.icons_xD
			http.divCanvas.appendChild(celda)
		} else {
			if (!http.is_internet) {
				setTimeout(http.restart_road, 0)
				http.is_internet = false
			}
		}
	}, true);


	http.funcion_hack_error = function () {
		http.cajon.className = http.cajon.className + " ProgressImage-container-error"
		http.timeout = 0x00000003
		http.abort()
		http.diccionario["size_progress"].style.display = "none"
		http.divCanvas.innerHTML = ""
		var celda = document.createElement("img")
		celda.src = "data:image/svg+xml;base64," + ICON_imageNotFound
		celda.style.width = http.icons_xD
		http.divCanvas.appendChild(celda)
	}

	http.error_archivo_noEncontrado = function() {
		if (http.is_internet) {
			if (http.status==404 || http.status==0) {
				if (http.status!=200) {
					http.file_error = http.cajon.file
					clearTimeout(http.funcion_hack_error)
					setTimeout(http.funcion_hack_error, 0x77)
					return true
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

	var RasteringImage = function() {

		var RenderImagePro = function () {
			if (isLoad_showImage==true) {
				// oculto celda de progreso, solo cuando la imagen en cache se haya terminado de renderizar en su correspondiente celda
				http.object.addEventListener("load",  function (event) {
					clearTimeout(fin_de_carga)
					setTimeout(fin_de_carga, 0)
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

		setTimeout(funcion_hack, 0x17)

	}

	setTimeout(http.send.bind(http), 0x17)

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
	    		var TIPO_COMPOSITE = "position: absolute;top: 46.8%;left: 0%;"
	    	}

	    	if (TIPO=="center") {
	    		var TIPO_COMPOSITE = "position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background: transparent;width: 100%;"
	    	}


	    	if (TIPO=="center:right") {
	    		var TIPO_COMPOSITE = "position: absolute;top: 46.8%;right: 0%;"
	    	}


	    	if (TIPO=="top:left") {
	    		var TIPO_COMPOSITE = "position: absolute;top: 0em;left: 0em;background: transparent;"
	    	}

	    	if (TIPO=="top:center") {
	    		var TIPO_COMPOSITE = "position: absolute;top: 0%;left: 50%;-webkit-transform: translateX(-50%);-moz-transform: translateX(-50%);-ms-transform: translateX(-50%);-o-transform: translateX(-50%);transform: translateX(-50%);background: transparent;width: calc(100%);"
	    	}

	    	if (TIPO=="top:right") {
	    		var TIPO_COMPOSITE = "position: absolute;top: 0em;right: 0em;background: transparent;"
	    	}

	    	if (TIPO=="bottom:left") {
	    		var TIPO_COMPOSITE = "position: absolute;bottom: 0em;left: 0em;background: transparent;"
	    	}

	    	if (TIPO=="bottom:center") {
	    		var TIPO_COMPOSITE = "position: absolute;bottom: 0%;left: 50%;-webkit-transform: translateX(-50%);-moz-transform: translateX(-50%);-ms-transform: translateX(-50%);-o-transform: translateX(-50%);transform: translateX(-50%);background: transparent;width: calc(100%);"
	    	}

	    	if (TIPO=="bottom:right") {
	    		var TIPO_COMPOSITE = "position: absolute;bottom: 0em;right: 0em;background: transparent;"
	    	}

	    	if (!TIPO_COMPOSITE) {
	    		continue
	    	}

	    	for (var obj of MAIN.querySelectorAll("*")) {
	    		if (obj.parentNode!=object) {
	    			if (obj!=object) {
	    				resagados = resagados.concat(obj)
	    			}
	    		}
	    	}

			var capa1 = document.createElement("div")
			capa1.className = MAIN.className
			capa1.style = MAIN.style.cssText + ";background: transparent;border: none;box-shadow: none;position: relative;margin: 0;"
			capa1.align = "center"
			MAIN.insertBefore(capa1, object);
			MAIN.removeChild(object);


			if (resagados.length>0) {
				for (var obj of resagados) {
					if (obj.parentNode==MAIN) {
						MAIN.removeChild(obj)
						capa1.appendChild(obj);
					}
				}
			}


			var capa2 = document.createElement("div")
			capa2.style=TIPO_COMPOSITE
			capa1.appendChild(capa2)
			capa2.appendChild(object)

	    }
	  }
	}
}


//-------------------------------------------------------------------------------
//
// SERVICIO : Sunfur FlexBox
//
//-------------------------------------------------------------------------------


function _FlexBox() {};
var UmbrellaService_FlexBox = new _FlexBox();

_FlexBox.prototype.start = function() {

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
												TMP += ";" + struct.style.cssText.replace("max-width:", "sunfur_MAx_Width").replace(
													"width:", "max-width:"
												).replace("sunfur_MAx_Width", "max-width:")
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
    				return ";flex: 1;max-width: 100%;margin-right: 0.6em;margin-left: 0.6em;min-height: 100px;"
    			}

    			if (isExpand=="auto+") {
    				return ";flex: 1;max-width: 100%;margin-right: 0.6em;margin-left: 0.6em;margin-right: 0em;margin-left: 0em;min-height: 100px;"
    			}

    			return ""
			}

    		if (isExpand) {

    			if (!anterior_box) {
    				object.style = ComputeClass(";margin-left: auto;margin-right: auto;margin-top: 0.44em;margin-bottom: 0em;" + ComputeCols_auto() + object.style.cssText)
    			} else {
    				if (Boolean(anterior_box.getAttribute("hbox_finish"))) {
    					object.style = ComputeClass(";margin-left: auto;margin-right: auto;margin-top: 0.44em;margin-bottom: 0em;" + ComputeCols_auto() + object.style.cssText)
    				} else {
    					object.style = ComputeClass(";margin-left: 0.82em;margin-right: auto;margin-top: 0.44em;margin-bottom: 0em;" + ComputeCols_auto() + object.style.cssText)
    				}
    			}

    		} else {

    			object.style = ";margin-left: 0.82em;margin-top: 0.44em;margin-bottom: 0em;" + object.style.cssText

    			if (anterior_box) {
	    			if (Boolean(anterior_box.getAttribute("hbox_finish"))) {
		    			if (anterior_box) {
		    				anterior_box.style = "margin-left: auto;margin-right: 0;margin-top: 0.44em;margin-bottom: 0em;"
		    			}
		    		}
		    	}

    		}

    		object.setAttribute("hbox_finish", object.getAttribute("hbox"))
	    	object.removeAttribute("hbox")
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
	    			generateFlex(object, isExpand)
	    			var contenedor = document.createElement("div")
	    			contenedor.setAttribute("hbox_finish", object.getAttribute("hbox"))
	    			contenedor.style = "margin-left: auto;margin-right: auto;width: 100%;"
	    			MAIN.insertBefore(contenedor, object);
	    			MAIN.removeChild(object);

	    			var columnas = document.createElement("div")
	    			columnas.style = "display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;flex-wrap: wrap;background: transparent;-webkit-box-orient: vertical;-webkit-box-direction: normal;"
	    			columnas.appendChild(object);
	    			Comboy_anterior = columnas
	    			contenedor.appendChild(columnas)
	    			anterior_box = object

	    			continue
		    	}

		    	anterior_box = false
		    }
		  }
		}
	}


	// fectorizar celdas, creando mascaras de extructras multi dimensionales
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

	// !QUE SE HAGA LA LUZ xD!, o mejor dicho que no se vaya la luz :(
	GenerateInCitharaV1(document)

}
