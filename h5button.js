/*
	H5 Buttons v1.1
	Created by steven.lv : http://www.ofoct.com/html5-button-maker/html5-button-maker.html
	This a free and open source javascript plugin. You can free use for person or commerce. 
	But please reserve this declaration.
*/
var hover_effect_ob;

function h5_button_build_by_id(id,option)
{
	var ob = window.document.getElementById(id);
	if ( typeof(ob) != 'undefined' )
	{
		h5_buton_do(ob,option);
	}	
}

function h5_button_build_by_class(cname,option)
{
	var ob = window.document.getElementsByClassName(cname);
	
	if ( typeof(ob) != 'undefined' )
	{
		for( i=0; i < ob.length;i++)
			h5_buton_do(ob[i],option);
	}	
}

function h5_buton_do(ob,option)
{
	//----params---------------
	var b_options = {
		mask_effect 	: "arc2-left",/*none,curve,curve-left,curve-right,liner,liner-left,liner-right,crystal-left,crystal-right,arc-left,arc-right,arc2-left,arc2-right*/	
		mask_alpha		: "0.3",
		mask_color		: "#FFFFFF",
		hover_effect 	: "arc_light_lt_to_rt,circle_light_lt_to_rb",/*none,line_light_horizontal,line_light_vertical,line_bright_light_left_to_right,circle_light_lt_to_rb,circle_light_rt_to_lb,arc_light_lt_to_rb,arc_light_rt_to_lb,arc_light_lt_to_rt,arc_light_rt_to_lt*/
		hover_alpha 	: "0.2",
		hover_color 	: "#FFFFFF",
		hover_speed 	: 15,
		hover_loop 		: true
	};
	if ( option != null )
	{
		b_options = option;
	}

	//----light effect---------------
	var canvasspe = null;
	if ( typeof(ob.canvasspe) == "undefined" )
	{
		canvasspe = document.createElement('canvas');
		ob.canvasspe = canvasspe;
	}
	else
	{
		canvasspe = ob.canvasspe;
	}
	var ctxspe = canvasspe.getContext('2d');
	if ( typeof(ctxspe) == "undefined" )
	{
		return;
	}
	
	var border_width = parseInt(get_int_value(ob,'border-left-width'));
	var padding_bottom = parseInt(get_int_value(ob,'padding-bottom'));
	speWidth = ob.offsetWidth ;//- border_width * 2;
	speHeight = ob.offsetHeight;// + parseInt(get_int_value(ob,'padding-top')) + parseInt(get_int_value(ob,'padding-bottom'));
	//canvasspe.className  = "h5button";
	canvasspe.width = speWidth;
	canvasspe.height = speHeight;
	
	canvasspe.style.marginRight = "-" + speWidth + "px";
	canvasspe.style.left = "-" + (parseInt(get_int_value(ob,'padding-left')) + border_width) + "px";
	canvasspe.style.marginTop = "0px";
	canvasspe.style.marginBottom = "-" + speHeight + "px";
	canvasspe.style.top = "-" + (parseInt(get_int_value(ob,'padding-top')) + border_width) + "px";
	canvasspe.style.float = "left";
	canvasspe.style.position = "relative";
	
	ctxspe.fillStyle = b_options.mask_color;
	ctxspe.globalAlpha = b_options.mask_alpha;
	
	//ob.appendChild(canvasspe);
	ob.insertBefore(canvasspe,ob.firstChild);

	if ( b_options.mask_effect == "curve" )
	{
		ctxspe.moveTo(0, speHeight / 4);
		ctxspe.bezierCurveTo(speWidth / 2, speHeight / 2, speWidth / 2, speHeight / 2, speWidth, speHeight / 4);
		ctxspe.lineTo(speWidth, 0);
		ctxspe.lineTo(0, 0);
		ctxspe.lineTo(0, speHeight / 4);
	}
	else if ( b_options.mask_effect == "curve-left" )
	{
		ctxspe.moveTo(0, 0);
		ctxspe.quadraticCurveTo(speWidth / 4, speHeight, speWidth / 2, speHeight / 2);
		ctxspe.quadraticCurveTo((speWidth / 4) * 3, 0, speWidth, 0);
		ctxspe.lineTo(0, 0);
	}
	else if ( b_options.mask_effect == "curve-right" )
	{
		ctxspe.moveTo(speWidth, 0);
		ctxspe.quadraticCurveTo((speWidth / 4) * 3, speHeight, speWidth / 2, speHeight / 2);
		ctxspe.quadraticCurveTo(speWidth / 4, 0, 0, 0);
		ctxspe.lineTo(speWidth, 0);
	}
	else if ( b_options.mask_effect == "liner" )
	{
		ctxspe.moveTo(0, speHeight / 2);
		ctxspe.lineTo(speWidth, speHeight / 2);
		ctxspe.lineTo(speWidth, 0);
		ctxspe.lineTo(0, 0);
	}
	else if ( b_options.mask_effect == "liner-left" )
	{
		ctxspe.moveTo(0, speHeight);
		ctxspe.lineTo(speWidth, 0);
		ctxspe.lineTo(0, 0);
		ctxspe.lineTo(0, speHeight);
	}
	else if ( b_options.mask_effect == "liner-right" )
	{
		ctxspe.moveTo(0, 0);
		ctxspe.lineTo(speWidth, speHeight);
		ctxspe.lineTo(speWidth, 0);
		ctxspe.lineTo(0, 0);
	}
	else if ( b_options.mask_effect == "crystal-left" )
	{
		ctxspe.moveTo(0, speHeight);
		ctxspe.quadraticCurveTo(speWidth / 4, speHeight, speWidth / 2, speHeight / 2);
		ctxspe.quadraticCurveTo((speWidth / 4) * 3, 0, speWidth, 0);
		ctxspe.lineTo(0, 0);
		ctxspe.lineTo(0, 0, speHeight / 2);
	}
	else if ( b_options.mask_effect == "crystal-right" )
	{
		ctxspe.moveTo(0, 0);
		ctxspe.quadraticCurveTo(speWidth / 4, 0, speWidth / 2, speHeight / 2);
		ctxspe.quadraticCurveTo((speWidth / 4) * 3, speHeight, speWidth, speHeight);
		ctxspe.lineTo(speWidth, 0);
		ctxspe.lineTo(0, 0);
	}
	else if ( b_options.mask_effect == "arc-left" )
	{
		ctxspe.moveTo(0, 0);
		ctxspe.quadraticCurveTo(0, speHeight, speWidth, 0);
		ctxspe.lineTo(0, 0);
	}
	else if ( b_options.mask_effect == "arc-right" )
	{
		ctxspe.moveTo(speWidth, 0);
		ctxspe.quadraticCurveTo(speWidth, speHeight, 0, 0);
		ctxspe.lineTo(speWidth, 0);
	}
	else if ( b_options.mask_effect == "arc2-left" )
	{
		ctxspe.moveTo(speWidth, 0);
		ctxspe.quadraticCurveTo(speWidth/2, 0, 0, speHeight * 3/4);
		ctxspe.lineTo(0, 0);
		ctxspe.lineTo(speWidth, 0);
	}
	else if ( b_options.mask_effect == "arc2-right" )
	{
		ctxspe.moveTo(0, 0);
		ctxspe.quadraticCurveTo(speWidth/2, 0, speWidth, speHeight * 3/4);
		ctxspe.lineTo(speWidth, 0);
		ctxspe.lineTo(0, 0);
	}
	ctxspe.fill();
	
	//----hover effect---------------
	var canvas_hover = null;
	var ctx_hover = null
	if ( b_options.hover_effect == "none" )
	{
		return;
	}

	if ( typeof(ob.canvas_hover) == "undefined" )
	{
		canvas_hover = document.createElement('canvas');
		ob.canvas_hover = canvas_hover;
	}
	else
	{
		canvas_hover = ob.canvas_hover;
	}
	ctx_hover = canvas_hover.getContext('2d');
	if ( typeof(ctx_hover) == "undefined" )
	{
		return;
	}
	
	canvas_hover.width = speWidth;
	canvas_hover.height = speHeight;
	
	canvas_hover.style.marginRight = "-" + speWidth + "px";
	canvas_hover.style.left = "-" + (parseInt(get_int_value(ob,'padding-left')) + border_width) + "px";
	canvas_hover.style.marginTop = "0px";
	canvas_hover.style.marginBottom = "-" + speHeight + "px";
	canvas_hover.style.top = "-" + (parseInt(get_int_value(ob,'padding-top')) + border_width) + "px";
	canvas_hover.style.float = "left";
	canvas_hover.style.position = "relative";		

	ob.canvas_hover = canvas_hover;
	ob.ctx_hover = ctx_hover;
	ob.b_options = b_options;

	ob.ctx_hover.fillStyle = b_options.hover_color;
	ob.ctx_hover.globalAlpha = b_options.hover_alpha;

	ob.hover_effect_cfg = new Object();
	ob.hover_effect_cfg.hover_effect = b_options.hover_effect;
	ob.hover_effect_cfg.track_x = 0;
	ob.hover_effect_cfg.track_y = 0;
	ob.hover_effect_cfg.light_len = 10;
	ob.hover_effect_cfg.loop = b_options.hover_loop;
	ob.hover_effect_cfg.light_color = b_options.hover_color;
	ob.context = ctx_hover;
	ob.canvas = canvas_hover;		
	hover_effect_ob = hover_effect_ob || new shine(ob.hover_effect_cfg);

	ob.onmouseover = function(){
		clearInterval(ob.animTimer);
		hover_effect_ob.cfg = clone(ob.hover_effect_cfg);
		hover_effect_ob.context = ob.context;
		hover_effect_ob.canvas = ob.canvas;
		ob.animTimer = setInterval(hover_effect_fun, this.b_options.hover_speed);
	};
	ob.onmouseleave = function(){
		ob.ctx_hover.clearRect(0,0,ob.canvas_hover.width,ob.canvas_hover.height);
		clearInterval(ob.animTimer);
	};

	ob.insertBefore(canvas_hover,ob.firstChild);
}

function hover_effect_fun()
{
	hover_effect_ob.move_horizontal(2);
	hover_effect_ob.move_vertical(1);
	hover_effect_ob.draw();
}

var shine = function(cfg) {
    this.cfg = cfg;
};

shine.prototype.move_horizontal = function(speedx) {
    this.cfg.track_x += speedx;
	if ( this.cfg.loop )
	{
		this.cfg.track_x =  this.cfg.track_x % (this.canvas.width * 2);
	}
};
shine.prototype.move_vertical = function(speedx) {
    this.cfg.track_y += speedx;
	if ( this.cfg.loop )
	{
		this.cfg.track_y =  this.cfg.track_y % (this.canvas.height * 2);
	}	
};
shine.prototype.draw = function() {
    var context = this.context;
	context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
    
	if ( this.cfg.hover_effect.indexOf("line_light_horizontal") != -1 ) 
	{
		/*line inclined left to right -- light_horizontal*/
		context.beginPath();
		context.moveTo(this.cfg.track_x, 0);
		context.lineTo(this.cfg.track_x + this.cfg.light_len, 0);
		context.lineTo(this.cfg.track_x, this.canvas.height);
		context.lineTo(this.cfg.track_x - this.cfg.light_len, this.canvas.height);
		context.lineTo(this.cfg.track_x, 0);
		context.closePath();
		context.fill();
	}
	if ( this.cfg.hover_effect.indexOf("line_light_vertical") != -1 ) 
	{
		/*line light top to bottom */
		context.beginPath();
		context.moveTo(0, this.cfg.track_y);
		context.lineTo(0, this.cfg.track_y + this.cfg.light_len);
		context.lineTo(this.canvas.width, this.cfg.track_y + this.cfg.light_len);
		context.lineTo(this.canvas.width, this.cfg.track_y);
		context.lineTo(0, this.cfg.track_y);
		context.closePath();
		context.fill();
	}
	if ( this.cfg.hover_effect.indexOf("line_bright_light_left_to_right") != -1 ) 
	{
		/*line inclined bright left to right*/
		context.globalAlpha = 1.0;
		var grd = context.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
		var mid = Math.min(this.cfg.track_x,this.canvas.width) / this.canvas.width;
		if ( mid > 0.0 && mid < 1.0 )
		{
			var mid_b = Math.max(mid - 0.1, 0);
			var mid_a = Math.min(mid + 0.1, 1);
			grd.addColorStop(0, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',0.0)');
			grd.addColorStop(mid_b, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0' + ')');
			grd.addColorStop(mid, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0.7' + ')');
			grd.addColorStop(mid_a, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0' + ')');
			grd.addColorStop(1, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',0.0)');
			context.fillStyle = grd;
			context.fillRect(0, 0, this.canvas.width, this.canvas.height); 
		}
	}
	if ( this.cfg.hover_effect.indexOf("circle_light_lt_to_rb") != -1 ) 
	{
		/*line left top  -> rgirht bottom*/
		context.globalAlpha = 1.0;
		var in_r = 2;
		var out_r = Math.min(this.canvas.width, this.canvas.height) / 3;
		var light_x = this.cfg.track_x; 
		var light_y = ( this.canvas.height / this.canvas.width ) * light_x + 0; //y = kx + b , k = tan角 = 对边/临边
		var grd = context.createRadialGradient(light_x, light_y, in_r, light_x, light_y, out_r);
		grd.addColorStop(0.2, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0.8' + ')');
		grd.addColorStop(1.0, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',0.0)');
		context.fillStyle = grd;
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
	if ( this.cfg.hover_effect.indexOf("circle_light_rt_to_lb") != -1 ) 
	{
		/*line right top  -> left bottom*/
		context.globalAlpha = 1.0;
		var in_r = 2;
		var out_r = Math.min(this.canvas.width, this.canvas.height) / 3;
		var light_x = this.canvas.width - this.cfg.track_x; 
		var light_y = -( this.canvas.height / this.canvas.width ) * light_x + this.canvas.height; //y = kx + b , k = tan角 = 对边/临边
		var grd = context.createRadialGradient(light_x, light_y, in_r, light_x, light_y, out_r);
		grd.addColorStop(0.2, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0.8' + ')');
		grd.addColorStop(1.0, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',0.0)');
		context.fillStyle = grd;
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
	if ( this.cfg.hover_effect.indexOf("arc_light_lt_to_rb") != -1 ) 
	{
		/*bezier left top  -> rgirht bottom*/
		context.globalAlpha = 1.0;
		var in_r = 2;
		var out_r = Math.min(this.canvas.width, this.canvas.height) / 3;
		var t = this.cfg.track_x / this.canvas.width;
		var originX = 0, originY = 0, destX = this.canvas.width, destY = this.canvas.height, ctrolX = this.canvas.width / 3, ctrolY = this.canvas.height;
		var light_x = Math.pow(1 - t, 3) * originX + 3.0 * Math.pow(1 - t, 2) * t * ctrolX + 3.0 * (1 - t) * t * t * ctrolX + t * t * t * destX;
		var light_y = Math.pow(1 - t, 3) * originY + 3.0 * Math.pow(1 - t, 2) * t * ctrolY + 3.0 * (1 - t) * t * t * ctrolY + t * t * t * destY;

		var grd = context.createRadialGradient(light_x, light_y, in_r, light_x, light_y, out_r);
		grd.addColorStop(0.2, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0.8' + ')');
		grd.addColorStop(1.0, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',0.0)');
		
		context.fillStyle = grd;
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
	if ( this.cfg.hover_effect.indexOf("arc_light_rt_to_lb") != -1 ) 
	{
		/*bezier rgirht top  -> left bottom*/
		context.globalAlpha = 1.0;
		var in_r = 2;
		var out_r = Math.min(this.canvas.width, this.canvas.height) / 3;
		var t = (this.canvas.width - this.cfg.track_x) / this.canvas.width;
		var originX = 0, originY = this.canvas.height, destX = this.canvas.width, destY = 0, ctrolX = this.canvas.width * 2 / 3, ctrolY = this.canvas.height;
		var light_x = Math.pow(1 - t, 3) * originX + 3.0 * Math.pow(1 - t, 2) * t * ctrolX + 3.0 * (1 - t) * t * t * ctrolX + t * t * t * destX;
		var light_y = Math.pow(1 - t, 3) * originY + 3.0 * Math.pow(1 - t, 2) * t * ctrolY + 3.0 * (1 - t) * t * t * ctrolY + t * t * t * destY;

		var grd = context.createRadialGradient(light_x, light_y, in_r, light_x, light_y, out_r);
		grd.addColorStop(0.2, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0.8' + ')');
		grd.addColorStop(1.0, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',0.0)');
		
		context.fillStyle = grd;
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
	if ( this.cfg.hover_effect.indexOf("arc_light_lt_to_rt") != -1 ) 
	{
		/*bezier left top  -> rgirht top*/
		context.globalAlpha = 1.0;
		var in_r = 2;
		var out_r = Math.min(this.canvas.width, this.canvas.height) / 3;
		var t = this.cfg.track_x / this.canvas.width;
		var originX = 0, originY = 0, destX = this.canvas.width, destY = 0, ctrolX = this.canvas.width / 3, ctrolY = this.canvas.height;
		var light_x = Math.pow(1 - t, 3) * originX + 3.0 * Math.pow(1 - t, 2) * t * ctrolX + 3.0 * (1 - t) * t * t * ctrolX + t * t * t * destX;
		var light_y = Math.pow(1 - t, 3) * originY + 3.0 * Math.pow(1 - t, 2) * t * ctrolY + 3.0 * (1 - t) * t * t * ctrolY + t * t * t * destY;

		var grd = context.createRadialGradient(light_x, light_y, in_r, light_x, light_y, out_r);
		grd.addColorStop(0.2, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0.8' + ')');
		grd.addColorStop(1.0, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',0.0)');
		
		context.fillStyle = grd;
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
	if ( this.cfg.hover_effect.indexOf("arc_light_rt_to_lt") != -1 ) 
	{
		/*bezier rgirht top  -> left top*/
		context.globalAlpha = 1.0;
		var in_r = 2;
		var out_r = Math.min(this.canvas.width, this.canvas.height) / 3;
		var t = (this.canvas.width-this.cfg.track_x) / this.canvas.width;
		var originX = 0, originY = 0, destX = this.canvas.width, destY = 0, ctrolX = this.canvas.width * 2 / 3, ctrolY = this.canvas.height;
		var light_x = Math.pow(1 - t, 3) * originX + 3.0 * Math.pow(1 - t, 2) * t * ctrolX + 3.0 * (1 - t) * t * t * ctrolX + t * t * t * destX;
		var light_y = Math.pow(1 - t, 3) * originY + 3.0 * Math.pow(1 - t, 2) * t * ctrolY + 3.0 * (1 - t) * t * t * ctrolY + t * t * t * destY;

		var grd = context.createRadialGradient(light_x, light_y, in_r, light_x, light_y, out_r);
		grd.addColorStop(0.2, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',' + '0.8' + ')');
		grd.addColorStop(1.0, 'rgba(' + sub_rgb(get_color(this.cfg.light_color)) + ',0.0)');
		
		context.fillStyle = grd;
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
};	

function clone(obj) {
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(clone(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = clone(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }
    return o;
}
function cut_hex(hex)
{
	return (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;
}
function hex_to_rgb(hex)
{
	var rgb = parseInt((cut_hex(hex)).substring(0, 2), 16);
	rgb += ',' + parseInt((cut_hex(hex)).substring(2, 4), 16);
	rgb += ',' + parseInt((cut_hex(hex)).substring(4, 6), 16);
	return rgb;
}        
function sub_rgb (rgb)
{
	return rgb.substr(4, rgb.length - 5);
}
function get_color(color)
{
	if((color.length == 6) || (color.length == 7)) {
		color = hex_to_rgb(color);
		color = 'rgb(' + color + ')';
	} else if((color.indexOf(',') > 0) && (color.substr(0, 3) != 'rgb')) {
		if(color.indexOf(',') > 0) {
			color = 'rgb(' + color + ')';
		}
	}
	return color;
}

function getComputedStylePropertyValue(element, prop)
{
	var computedStyle = window.getComputedStyle(element, null);
	if(!computedStyle) return null;
	if(computedStyle.getPropertyValue) {
		return computedStyle.getPropertyValue(prop);
	} else if (computedStyle.getAttribute) {
		return computedStyle.getAttribute(prop);
	} else if(computedStyle[prop]) {
		return computedStyle[prop];
	};
}

function get_int_value(element, prop)
{
	var x = getComputedStylePropertyValue(element, prop);
	if ( typeof(x) == "undefined" || x == "" )
	{
		return 0;
	}	
	else
	{
		ret = parseInt(x);
		if ( ret == "NaN" )
			return 0;
		else
			return ret;
	}	
}

/*
    var vertices = [], t = 0;
    for (var i = 0; i < segments; i++) {
        var x = Math.pow(1 - t, 3) * origin.x + 3.0 * Math.pow(1 - t, 2) * t * control1.x + 3.0 * (1 - t) * t * t * control2.x + t * t * t * destination.x;
        var y = Math.pow(1 - t, 3) * origin.y + 3.0 * Math.pow(1 - t, 2) * t * control1.y + 3.0 * (1 - t) * t * t * control2.y + t * t * t * destination.y;
        vertices.push(cc.p(x, y));
        t += 1.0 / segments;
    }
*/