var ajax = (function () {
	var fns = {
		done: {},
		fail: {},
		always: {}
	},
	num = 0,
	u = function () {
		var r = 'a' + num;
		num += 1;
		return r;
	},
	callback = function (type, uid, a, b, c) {
		var o = fns[type],
			f = o[uid];
		if (typeof f === 'function') {
			f(a, b, c);
		}
	},
	ajax = function (o) {
		var s = (o) ? o : {},
			uid = u();
		
		ajax.id = uid;
		
		if ( condition ) {
			s.data.something = somethingElse;
		}
		
		$.ajax({
			url: urls.mainUrl,
			type: 'GET',
			dataType: 'json',
			data: s.data,
			beforeSend: s.beforeSend
		})
		.done(function (data, txt, obj) {
			
			callback('done', uid, data, txt, obj);
			
		})
		.fail(function (obj, txt, err) {
			
			callback('fail', uid, obj, txt, err);
			
		})
		.always(function (obj, txt) {
			
			callback('always', uid, obj, txt);
			
		});
		return ajax;
	};
	ajax.done = function (fn) {
		fns.done[this.id] = fn;
		return this;
	};
	ajax.fail = function (fn) {
		fns.fail[this.id] = fn;
		return this;
	};
	ajax.always = function (fn) {
		fns.always[this.id] = fn;
		return this;
	};
	ajax.callbacks = fns;
	
	return ajax;
}());