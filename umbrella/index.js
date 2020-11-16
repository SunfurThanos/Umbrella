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

// metodo global => UMBRELLA
var umbrella = function() {}

// metodo global => MODULO
var modulo = function() {}

// Umbrella versión => XXX
umbrella.build_new = new Number(19)

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
var $lista = document.getElementsByTagName('script')

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

// mostrar mensaje de navegadores chafas
function show_mesage_obsoleteNavigator() {
	document.location = PATH_UMBRELLA + "mensaje/warning.html"
}

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

// funcion de evento
function EventListener(obj,evt,fnc,useCapture){
	if (!useCapture) useCapture=false;
	if (obj.addEventListener){
		obj.addEventListener(evt,fnc,useCapture);
		return true;
	} else if (obj.attachEvent) return obj.attachEvent("on"+evt,fnc);
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
	show_mesage_obsoleteNavigator()
}

// cargando modulo principal (kernell)
modulo.kernell      = document.createElement("script")
modulo.kernell.type = "text/javascript"
modulo.kernell.src  = PATH_UMBRELLA + "kernell.js"
document.head.appendChild(modulo.kernell)

EventListener(modulo.kernell, "load", function() {
	modulo.cargado = true
}, true);

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
// mostrando una barra carga tipo pulsate - antes que el DOM este completo
//
//-------------------------------------------------------------------------------

EventListener(document, "readystatechange",  function (event) {
	if (!umbrella.start_load) {
		umbrella.start_load = document.querySelector("*[name=\"body.container\"]")
		umbrella.circule_progress = document.querySelector(
			"*[name=\"body.progress\"]")
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
// Crear kernell principal xD
//
//-------------------------------------------------------------------------------

function UmbrellaKernelStart() {
	var capturando_kernell = function() {
		if (modulo.cargado) {
			return RUN_KERNNEL()
		}
		setTimeout(capturando_kernell, 0x00000001)
	}; capturando_kernell()
}

EventListener(document, "DOMContentLoaded", UmbrellaKernelStart, false);