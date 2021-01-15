//-----------------------------------------------------------------------------//
//     Author      : Andrade Echarry ->  ALF                                   //
//      Mail       : hormigence123@gmail.com                                   //
//       Country   : Venezuela                                                 //
//        License  : GPL-3                                           	       //
//                                                                             //
//                        Copyright 2020-2021 ALF. All rights reserved.        //
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