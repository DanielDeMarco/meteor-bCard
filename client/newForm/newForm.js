Template.newForm.events({
	"submit form": function(e, template) {
		e.preventDefault();
		let firstName = template.find("#firstName").value;
		let lastName = template.find("#lastName").value;
		let quote = template.find("#quote").value;
		let gender = template.find("#gender").value;
		let githubLink = template.find("#githubLink").value;
		Session.set('firstName', firstName);
		Session.set('lastName', lastName);
		Session.set('quote', quote);
		Session.set('gender', gender);
		Session.set('githubLink', githubLink);
		Router.go('/bCard');
	}

});
