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
// Variables globales
//
//-------------------------------------------------------------------------------

// Umbrella versión
umbrella_version = new Array(0x0, 0x0, 0x3)

// creando clase de Entities
function _Dexter() {};
var Entities = new _Dexter();

// Entities: crear tipo espacio
Entities.space = /&amp;space;/g // -> "$space;" = "\xA0"

// tiempo de espera en eventos personalizados
var TIME_CUSTOM = 0x77

//-------------------------------------------------------------------------------
//
// funciones globales
//
//-------------------------------------------------------------------------------

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
}; setTimeout(show_Umbrella_banner, TIME_CUSTOM)

//-------------------------------------------------------------------------------
//
// hack blanco: calculando ruta del archivo de ***
//
//-------------------------------------------------------------------------------

var PATH_UMBRELLA = new String()
var $lista = document.querySelectorAll('script')

for (var $object of $lista) {
	if (typeof $object == "object") {
	  if ($object.src!="") {
	    PATH_UMBRELLA = $object.src.split("index.js")[0]
	  }
	}
}

// cargando archivo de estilo
styleTmp      = document.createElement("link");
styleTmp.href = PATH_UMBRELLA + "estilo.css";
styleTmp.rel  = "stylesheet"
styleTmp.type = "text/css";
document.head.appendChild(styleTmp);

// archivo de imagen1
imagen_logo = PATH_UMBRELLA + "imagen.png"

//-------------------------------------------------------------------------------
//
// interceptar evento antes del renderizado web xD-D-D-DDDDDD
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
	// servicio: agregar canvas de progreso para imagenes
	// UmbrellaService_ImageProgress.start()
	// servicio: celdas sincronizada
	UmbrellaService_PasteAttrib.start()
	// servicio: computar espacio
	UmbrellaService_ComputeSpace.start(comienzo=true)
	// servicio: convertir la etiqueta "align" en relativa
	UmbrellaService_ComputeAlign.start()
	// servicio: mejora de -> "href"
	UmbrellaService_ComputeHref.start()
	// servicio: ver imagen en otra pestaña si el evento "click" no existe
	UmbrellaService_ViewImgTab.start()
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
	      var value = object.getAttributeNode("PasteAttributes").value
	      if (value!="") {
	        var objeto = document.getElementById(value)

	        if (objeto!=null) {

		        this.paste_attrib(objeto, object)

		        if (!object.IsMaduro) {
		        	object.IsMaduro = true

		        	var libertad = function(self) {
		        		clearTimeout(this.batman_justicia)
		        		var valor = this.getAttributeNames()
		        		if (this.arbolito_style!=valor) {
		        			this.arbolito_style = valor
		        			self.start()
		        		}
		        		this.batman_justicia = setTimeout(
		        			libertad.bind(this, self), TIME_CUSTOM)
		        	}

					objeto.platzi = this
					objeto.conteo_loco  = 0x0
					objeto.arbolito_style = objeto.getAttributeNames()
					objeto.batman_justicia = false
					objeto.addEventListener("DOMNodeInserted", function(event) {
						if (objeto.conteo_loco==0x0) {
							objeto.conteo_loco++
							setTimeout(libertad.bind(objeto, objeto.platzi), 0x0)
						}
					}, true);
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
		  for (var item of obj_copiar.getAttributeNames()) {
		    var tag = obj_copiar.getAttributeNode(item).name
		    var value = obj_copiar.getAttributeNode(item).value

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
	      	if (object.virtual_onclick!=0xAA17B0A5) {
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

// estableciendo metodo -> wraper:1*
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
				cajon.align = object.getAttributeNode("align").value
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

// estableciendo metodo -> wraper:1*
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

		    	var link = object.getAttributeNode("link-tab")
				if (link) {
					cajon.href = link.value
					object.parentNode.insertBefore(cajon, object);
					object.parentNode.removeChild(object);
					cajon.target="_black"
					object.style.cursor = "pointer"
					cajon.appendChild(object)
				}

		    	var link = object.getAttributeNode("link-main")
				if (link) {
					cajon.href = link.value
					object.parentNode.insertBefore(cajon, object);
					object.parentNode.removeChild(object);
					object.style.cursor = "pointer"
					cajon.appendChild(object)
				}

		    }
		  }
		}
	}

	for (var value of ['img[link-tab]', 'img[link-main]', 'button[link-tab]']) {
		CRIPTON7(value)
	}

}

//-------------------------------------------------------------------------------
//
// SERVICIO : barra de progreso para imagenes
//
//-------------------------------------------------------------------------------

// estableciendo metodo -> wraper:1*
function _ImageProgress() {};
var UmbrellaService_ImageProgress = new _ImageProgress();

// filtrando elementos en el arbol web + agregar mejoras a la etiqueta href
_ImageProgress.prototype.start = function() {

	var arbol_web = document.querySelectorAll('img')

	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {
	    	var cajon = document.createElement("div")
	    	cajon.align = object.align
	    	cajon.style = object.style
	    	cajon.className = "ChildProgress_modal_overlay_container " + cajon.className
	    	cajon.file = object.getAttributeNode("src").value
			object.src = ""
			cajon.display = object.style.display
			object.style.display = "none"
			object.parentNode.insertBefore(cajon, object);

			var columnas = document.createElement("div")
			columnas.className = "ChildProgress_columns2"
			cajon.appendChild(columnas)

			logo_id = document.createElement("img")
			logo_id.alt = ""
			logo_id.src = imagen_logo
			logo_id.style="position: absolute;left: 0.2em;top: 0.2em;display: none;image-rendering: optimizeQuality;pointer-events: none;-webkit-animation: ChildProgress_animation-Minetype 0.8s both ease 0.1s;"
			cajon.appendChild(logo_id)

			logo_id.addEventListener("load",  function(event) {
				event.target.style.display = "block"
			},  false );

			var divCanvas = document.createElement("div")
			divCanvas.style = "pointer-events: none;margin-left: auto;margin-right: auto;margin-top: auto;margin-bottom: auto;"
			columnas.appendChild(divCanvas)

			setTimeout(
				Image_renderProgress.bind(
					0xDBBC4FD1, divCanvas, cajon, object),
				0x17
			)


	    }
	  }
	}
}

var Image_renderProgress = function (divCanvas, cajon, object) {

	var smoothCanvas = (function () {
	    var canvas = document.createElement("canvas"),
	        ctx = canvas.getContext("2d"),
	        dpr = window.devicePixelRatio || 1,
	        bsr = ctx.webkitBackingStorePixelRatio ||
	        ctx.mozBackingStorePixelRatio ||
	        ctx.msBackingStorePixelRatio ||
	        ctx.oBackingStorePixelRatio ||
	        ctx.backingStorePixelRatio || 1,

	        ratio = dpr / bsr; //PIXEL RATIO
	        canvas.name = "SunfurPropiedad-canvas"

	    return function (w, h, canvasElm) {
	        var can = canvasElm || document.createElement("canvas");
	        can.width = w * ratio;
	        can.height = h * ratio;
	        can.style.width = w + "px";
	        can.style.height = h + "px";
	        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
	        return can;
	    }
	}());

	var sizeBAR = 50
	var dim = (sizeBAR + 10) * 2;
	var container = divCanvas
	var canElm = smoothCanvas(dim, dim)
	container.appendChild(canElm)
	var ctx = canElm.getContext("2d")
	var valPROGRESS = 0
	var maxValPROGRESS = 100;

	var ANIMATION = function() {

		// circulo central
		ctx.clearRect(0, 0, dim, dim)
		var center = dim / 2;
		ctx.lineWidth = 10;

		ctx.strokeStyle = 'rgba(2, 1, 1, 0.5)';
		ctx.lineWidth = 74;
		ctx.beginPath();
		ctx.arc(center, center, 0, 0, 2 * Math.PI);
		ctx.shadowColor = "salmon"
		ctx.shadowOffsetX = "1"
		ctx.shadowOffsetY = "2"
		ctx.stroke();

		// arete de progreso
		var circPROGRESS = Math.PI * 2
		var quartPROGRESS = Math.PI / 2;
		var minValPROGRESS = 0;
		dim = (sizeBAR + 10) * 2;
		var center = dim / 2;

		ctx.strokeStyle = 'rgba(55, 207, 130, 0.9)';

		ctx.lineWidth = 8;
		canvasPROGRESS = ctx;
		ctx.lineCap = "round"
		ctx.beginPath();
		perValPROGRESS = Math.round(((valPROGRESS + minValPROGRESS) * 100 / (maxValPROGRESS - minValPROGRESS)) * 100) / 100;
		canvasPROGRESS.arc(center, center, sizeBAR - 1 + 10 / 2, -(quartPROGRESS), ((circPROGRESS) * perValPROGRESS / 100) - quartPROGRESS, false);
		ctx.shadowColor = "rgba(255, 0, 0, 0.9)"
		ctx.shadowOffsetX = "2"
		ctx.shadowOffsetY = "2"
		ctx.stroke();

		// texto de progreso
		ctx.fillStyle = "rgba(255, 255, 2, 0.9)";
		ctx.textAlign = "center";
		cFont = "Segoe UI";
		ctx.font = "Bold" + " " + "19.4" + "px " + cFont;
		ctx.textBaseline = 'middle';
		ctx.shadowColor = "black"
		ctx.shadowOffsetX = "2"
		ctx.shadowOffsetY = "2"
		ctx.fillText(valPROGRESS + "%", center, center);
	}

	ANIMATION()

	var http = new XMLHttpRequest();
	http.open("GET", cajon.file, true);
	http.divCanvas = divCanvas
	http.cajon     = cajon
	http.object    = object

	if (http.overrideMimeType)
		http.overrideMimeType('text/plain; charset=x-user-defined');
	else
		http.setRequestHeader('Accept-Charset', 'x-user-defined');

	http.onprogress = function($pe) {
		var $progreso = Math.round($pe.loaded * 100 / $pe.total)
		if ($progreso) {
			valPROGRESS = Math.min( $progreso, 99 )
			ANIMATION()
		}
	}

	function fin_de_carga() {
		http.cajon.parentNode.removeChild(http.cajon)
		http.object.style.display = http.cajon.display
	}

	http.onload = function (info) {

		valPROGRESS = 99

		ANIMATION()

		var bytes = http.responseText

		http.object.image_load = false
		http.object.file = cajon.file
		http.object.addEventListener("load",  function(e) {
			if (!http.object.image_load) {
				http.object.image_load = false
				fin_de_carga()
			}
		},  false );


		if (Uint8Array.from) {
			var data = Uint8Array.from(bytes, char => char.charCodeAt(0));
			var blob = new Blob([data], {type: "image/jpeg"});
			var url_final = window.URL.createObjectURL( blob );
		} else {
			var url_final = 'data:image/jpeg;base64,' + ToBase64(bytes)
		}


		http.object.src = url_final
	}

	setTimeout(http.send.bind(http), 0x17)

}


function ToBase64(filestream, beg, fin) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  if (!beg  &&  !fin){
    beg = 0;
    fin = filestream.length;
  }

  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = beg;

  do {
    chr1 = filestream.charCodeAt(i++) & 0xff;
    chr2 = filestream.charCodeAt(i++) & 0xff;
    chr3 = filestream.charCodeAt(i++) & 0xff;

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output = output +
      keyStr.charAt(enc1) +
      keyStr.charAt(enc2) +
      keyStr.charAt(enc3) +
      keyStr.charAt(enc4);
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
  } while (i < fin);

  return output;
}
