Handlebars.getTemplate = function (name) {
	if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
		$.ajax({
			url : "templatesfolder/" + name + ".handlebars",
			async : false
		}).done(function (data) {
			if (Handlebars.templates === undefined) {
				Handlebars.templates = {};
			}
			Handlebars.templates[name] = Handlebars.compile(data);
		});
	}
	return Handlebars.templates[name];
};