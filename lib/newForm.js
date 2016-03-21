Template.newForm.events({
	"submit form": function(e, template) {
		e.preventDefault();
		let someElement = template.find("#firstName").value;
		let lastName = template.find("#lastName").value;
		let quote = template.find("#quote").value;
		let gender = template.find("#gender").value;
		let link = template.find("#link").value;
		console.log(someElement);	
		console.log(lastName);
		console.log(quote);
		console.log(gender);
		console.log(link);
	}
});
