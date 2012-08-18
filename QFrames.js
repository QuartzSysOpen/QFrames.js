(function (global) {
    var qFrames = function (id) {
    	var fn = {
           i : null,
           append : function (txt) {
            
            this.i.innerHTML += txt;
            return this;
           },
           prepend : function(txt) {
            this.i.innerHTML = txt + this.i.innerHTML;
            return this;
           },
           clear : function() {
            this.i.innerHTML = null;
            return this;
           },
           text : function(txt) {
            if(txt) {
                this.i.innerText = txt;
                return this;
            } else {
                return this.i.innerText;
            }
           },
           hide : function() {
   	        var elem = this.i;
			elem.style.display = "none";
			return this;
           },
           show : function() {
   	        var elem = this.i;
			elem.style.display = "block";
			return this;
           },
           css : function(attr, val) {
           	var elem = this.i;
           	elem.style[attr] = val;
           	return this;
           },
           loop : function(times, func) {
           for(var d = 0; d < times; d++) {
           	if(func && typeof func == "function") {
           	func();
           	} else {
           	throw new Error('param 2 must be func');
           	}
           	}
           },
           html : function(txt) {
            if(txt) {
                this.i.innerHTML = txt;
                return this;
            } else {
                return this.i.innerHTML;
            }
           },
           val : function() {
           	return this.i.value();
            },
            log : function(w) {
                console.log(w);
                return this;
            }
        };
        var idr;
        for(var ip = 1; ip < is; ip++) {
            idr += is[ip];
            var is = id.split("");
        }
        if((id) && id != "body" && (id.split("")[0] != "_")) {
        fn.i = document.getElementById(id);
        } else if(id == "body") {
        fn.i = fn.i;
        }
        return fn;
    };
    if(!global.QFrames) {
        global.QFrames = qFrames;
    }
    if(!global.QFrames.fn) {
    	global.QFrames.fn = qFrames;
    }
    if(!global.$) {
        global.$ = qFrames;
    }
    if(!global.$.fn) {
    	global.$.fn = qFrames.fn;
    }
})(window);