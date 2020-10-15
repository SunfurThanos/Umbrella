//-----------------------------------------------------------------------------//
//     Author      : Sunfur Thanos                                             //
//      Mail       : hormigence123@gmail.com                                   //
//       Country   : Venezuela                                                 //
//        License  : GPL-3                                           	       //
//                                                                             //
//                   Copyright 2020 Sunfur Thanos. All rights reserved.        //
//-----------------------------------------------------------------------------//


//-------------------------------------------------------------------------------
//
// Variables globales
//
//-------------------------------------------------------------------------------

// Umbrella versión
umbrella_version = new Array(0, 0, 4)

// creando clase de Entities
var Entities = function(kernell=0x2857674D) {}

// Entities: crear tipo espacio
Entities.space = new RegExp(/&amp;space;/g) // => "$space;" = "\xA0"

// tiempo "FLASH" de espera en eventos personalizados => int*
var TIME_CUSTOM = new Number(0x17)

// activar o desactivar barra de progreso para imagenes => Bool*
var ShowImage_progress = new Boolean(true)

// despues de precargar imagen mostrarla => Bool*
var isLoad_showImage = new Boolean(true)

// estilo para (barra de carga circular) para imagenes => method*
var circleImageProgress = function(kernell=0x2857674D) {}

circleImageProgress.textColor  = "rgba(255, 255, 2, 0.9)";
circleImageProgress.textShadow = "black";
circleImageProgress.textFonts  = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Oxygen,Ubuntu,Cantarell,Open Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,Arial";

circleImageProgress.sizeCircle1   = 70;
circleImageProgress.colorCircle1  = 'rgba(2, 1, 1, 0.5)';
circleImageProgress.shadowCircle1 = "salmon";

circleImageProgress.widthCircle2  = 8;
circleImageProgress.colorCircle2  = 'rgba(55, 207, 130, 0.9)';
circleImageProgress.shadowCircle2 = "rgba(255, 0, 0, 0.9)";

//-------------------------------------------------------------------------------
//
// funciones globales
//
//-------------------------------------------------------------------------------

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
// hack blanco: calculando ruta del archivo de ***
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

// cargando archivo de estilo
var styleTmp      = document.createElement("link");
styleTmp.href     = PATH_UMBRELLA + "estilo.css";
styleTmp.rel      = "stylesheet"
styleTmp.type     = "text/css";
document.head.appendChild(styleTmp);

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

	// servicio: LAYOUT => BoxComposite
	UmbrellaService_BoxComposite.start()

	// servicio: computar espacio
	UmbrellaService_ComputeSpace.start(comienzo=true)

	// servicio: convertir la etiqueta "align" en relativa
	UmbrellaService_ComputeAlign.start()

	// servicio: mejora de -> "href"
	UmbrellaService_ComputeHref.start()

	// servicio: ver imagen en otra pestaña si el evento "click" no existe
	UmbrellaService_ViewImgTab.start()

	// servicio: agregar canvas de progreso para imagenes
	if (ShowImage_progress==true) {
		UmbrellaService_ImageProgress.start()
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

// estableciendo metodo -> wraper:1*
function _ImageProgress() {};
var UmbrellaService_ImageProgress = new _ImageProgress();

// filtrando elementos en el arbol web + agregar mejoras a la etiqueta href
_ImageProgress.prototype.start = function() {

	var arbol_web = document.querySelectorAll('img')

	for (var object of arbol_web) {
	  if (typeof object == "object") {
	    if (!find_object(object)) {

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

	    	cajon.className = "ProgressImage-container ProgressImage-size " + cajon.className
	    	cajon.style.display = "none"
	    	cajon.file = object.getAttribute("src")
			object.src = ""
			cajon.display = object.style.display
			object.style.display = "none"
			object.parentNode.insertBefore(cajon, object);
			object.alt = ""

			var size_progress = document.createElement("div")
			size_progress.className = "ProgressImage-SizeRead"
			size_progress.innerHTML = "..."
			cajon.appendChild(size_progress)

	    	if (object.name) {
	    		size_progress.setAttribute("name", object.name)
	    	}

			var columnas = document.createElement("div")
			columnas.className = "ProgressImage-column"
			cajon.appendChild(columnas)

			var logo_id = document.createElement("div")

	    	if (object.name) {
	    		logo_id.setAttribute("name", object.name)
	    	}

			logo_id.className = "ProgressImage-logo ProgressImage-logo-size"
			logo_id.style="position: absolute;left: 0.2em;top: 0.2em;display: block;image-rendering: optimizeQuality;pointer-events: none;"
			cajon.appendChild(logo_id)


			var divCanvas = document.createElement("div")
			divCanvas.style = "pointer-events: none;margin-left: auto;margin-right: auto;margin-top: auto;margin-bottom: auto;"
			columnas.appendChild(divCanvas)

			Image_renderProgress(divCanvas, cajon, object, size_progress)

	    }
	  }
	}
}

var Image_renderProgress = function (divCanvas, cajon, object, size_progress) {

	cajon.style.display = "block"

	var smoothCanvas = (function () {
	    var canvas = document.createElement("canvas"),
	        ctx = canvas.getContext("2d"),
	        dpr = window.devicePixelRatio || 1,
	        bsr = ctx.webkitBackingStorePixelRatio ||
	        ctx.mozBackingStorePixelRatio ||
	        ctx.msBackingStorePixelRatio ||
	        ctx.oBackingStorePixelRatio ||
	        ctx.backingStorePixelRatio || 1,

	        ratio = dpr / bsr;
	        canvas.name = "SunfurThanos"

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

	var PainterProgressImage = function() {

		// circulo central
		ctx.clearRect(0, 0, dim, dim)
		var center = dim / 2;
		ctx.lineWidth = 10;

		ctx.strokeStyle = circleImageProgress.colorCircle1;
		ctx.lineWidth = circleImageProgress.sizeCircle1;
		ctx.beginPath();
		ctx.arc(center, center, 0, 0, 2 * Math.PI);
		ctx.shadowColor = circleImageProgress.shadowCircle1
		ctx.shadowOffsetX = "1"
		ctx.shadowOffsetY = "2"
		ctx.stroke();


		// arete de progreso
		var circPROGRESS = Math.PI * 2
		var quartPROGRESS = Math.PI / 2;
		var minValPROGRESS = 0;
		dim = (sizeBAR + 10) * 2;
		var center = dim / 2;

		ctx.strokeStyle = circleImageProgress.colorCircle2;

		ctx.lineWidth = circleImageProgress.widthCircle2;
		canvasPROGRESS = ctx;
		ctx.lineCap = "round"
		ctx.beginPath();
		perValPROGRESS = Math.round(((valPROGRESS + minValPROGRESS) * 100 / (maxValPROGRESS - minValPROGRESS)) * 100) / 100;
		canvasPROGRESS.arc(center, center, sizeBAR - 1 + 10 / 2, -(quartPROGRESS), ((circPROGRESS) * perValPROGRESS / 100) - quartPROGRESS, false);
		ctx.shadowColor = circleImageProgress.shadowCircle2
		ctx.shadowOffsetX = "2"
		ctx.shadowOffsetY = "2"
		ctx.stroke()

		// texto de progreso
		ctx.fillStyle = circleImageProgress.textColor;
		ctx.textAlign = "center";
		cFont = circleImageProgress.textFonts
		ctx.font = "Bold" + " " + "20" + "px " + cFont;
		ctx.textBaseline = 'middle';
		ctx.shadowColor = circleImageProgress.textShadow;
		ctx.shadowOffsetX = "2"
		ctx.shadowOffsetY = "2"
		ctx.fillText(valPROGRESS + "%", center, center);
	}

	PainterProgressImage()

	var http = new XMLHttpRequest();
	http.open("GET", cajon.file, true);
	http.divCanvas = divCanvas
	http.timeout   = 5000
	http.cajon     = cajon
	http.object    = object
	http.progress_back = false
	http.size_progress = size_progress

	var medir_peso = function($bytes) {
		if ($bytes > 999*999) {
				$peso = ($bytes/(1024*1024)).toFixed(3)
			return $peso.toString().substring(0,($peso.length)-1) + ' MB'
		} else {
				$peso = ($bytes/1024).toFixed(0)
			return $peso.toString() + ' KB'
		}
	}

	http.ontimeout = () => console.log(
		'Umbrella: Request timeout.', http.responseURL
	);

	if (http.overrideMimeType)
		http.overrideMimeType('text/plain; charset=x-user-defined');
	else
		http.setRequestHeader('Accept-Charset', 'x-user-defined');

	http.onprogress = function($pe) {
		var progreso = Math.round($pe.loaded * 100 / $pe.total)
		if (progreso) {

			http.size_progress.innerHTML = medir_peso(
				$pe.loaded
			) + " / " + medir_peso(
				$pe.total
			)

			if (http.progress_back!=progreso) {
				valPROGRESS = Math.min( progreso, 98 )
				PainterProgressImage()
				http.progress_back=progreso
			}
		}
	}

	function fin_de_carga() {
		http.cajon.parentNode.removeChild(http.cajon)
		http.object.style.display = http.cajon.display
	}

    http.onloadend = (event) => {
        if (event.loaded && http.response) {
            RasteringImage()
        } else {
            console.log("Umbrella: no se puedo cargar la imagen", http.status);
        }
    }

	var RasteringImage = function() {

		var URL_absolute = http.responseURL
		if (!URL_absolute) {
			URL_absolute = http.cajon.file
		}

		valPROGRESS = 99; PainterProgressImage()




		// var bytes = http.responseText
		// http.object.file = cajon.file

		// http.object.image_load = false
		// http.object.addEventListener("load",  function(event) {
		// 	if (!http.object.image_load) {
		// 		http.object.image_load = true
		// 		fin_de_carga()
		// 	}
		// },  true);

		// if (Uint8Array.from) {
		// 	var data = Uint8Array.from(bytes, char => char.charCodeAt(0));
		// 	var blob = new Blob([data], {type: "image/jpeg"});
		// 	var url_final = window.URL.createObjectURL( blob );
		// } else {
		// 	var url_final = 'data:image/jpeg;base64,' + ToBase64(bytes);
		// }


		// convierto la extructura binaria => base64 ascii.
		// var url_final = 'data:image/jpeg;base64,' + ToBase64(bytes);

		// generando precarga de la imagen :)
		// localStorage.setItem(URL_absolute, url_final)
		// hack_cache = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
		// hack_cache.href = URL_absolute;




		if (isLoad_showImage==true) {
			// oculto celda de progreso
			setTimeout(fin_de_carga, TIME_CUSTOM)

			// renderizo la imagen, cuya dirección ya esta precargada
			http.object.src = URL_absolute;
			http.object.isload = true
			http.object.backup_url = http.object.src
		}
	}

	http.send("")

}


function ToBase64(filestream, beg, fin) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  if (!beg  &&  !fin) {
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


	    	if (TIPO=="center") {
	    		var TIPO_COMPOSITE = "position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background: transparent;width: calc(100%);"
	    	}

	    	if (TIPO=="top:right") {
	    		var TIPO_COMPOSITE = "position: absolute;top: 0em;right: 0em;background: transparent;"
	    	}

	    	if (TIPO=="top:left") {
	    		var TIPO_COMPOSITE = "position: absolute;top: 0em;left: 0em;background: transparent;"
	    	}

	    	if (TIPO=="bottom:right") {
	    		var TIPO_COMPOSITE = "position: absolute;bottom: 0em;right: 0em;background: transparent;"
	    	}

	    	if (TIPO=="bottom:left") {
	    		var TIPO_COMPOSITE = "position: absolute;bottom: 0em;left: 0em;background: transparent;"
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
			capa1.style = MAIN.style.cssText + ";background: transparent;border: none;box-shadow: none;position: relative;"
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