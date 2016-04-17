// Router.configure({
// 	layoutTemplate: 'layout',
// 	loadingTemplate: 'loadingTemp',
// 	notFoundTemplate: 'notFound'
// });

FlowRouter.route('/', {
	name: 'home',
	triggersEnter: [function(context, redirect) {
		console.log('got here');
		if (Meteor.user()) {
			redirect('/comp/mm2014');
		}
		else {
			BlazeLayout.render('accessDenied');
		}
	}]
});

FlowRouter.route('/token/:token', {
	name: 'token',
	action: function (params) {
		if (!params.token) {
			BlazeLayout.render('accessDenied');
		}
		else {
			Meteor.call('tokenLogin', params.token, function (err, result) {
				if (err) {
					BlazeLayout.render('accessDenied');
				}
				else {
					Meteor.loginWithPassword(result, result.replace(' ', ''), function (err) {
						FlowRouter.go('/comp/mm2014');
					});
				}
			});
			BlazeLayout.render('loadingTemp');
		}
	}
});

FlowRouter.route('/comp/:url/addResult', {
	name: 'addResult',
	action: function (params) {
		if (!Meteor.user()) {
			BlazeLayout.render('accessDenied');
		}
		else if (Meteor.user().username !== "Mikk Kard") {
			BlazeLayout.render('haveToBeMikk');
		}
		Session.set('addingResult', true);
	},
	// waitOn: function () {
	// 	this.subscribe('userStatus');
	// 	this.subscribe('allUsers');
	// 	var url = this.params.url;
	// 	return [
	// 		this.subscribe('competition', {url: url}),
	// 		this.subscribe('competitions'),
	// 		this.subscribe('predictions', {event: url})
	// 	];
	// },
	// data: function () {
	// 	Session.set('addingResult', true);
	// 	if (this.ready()) {
	// 		var selectedCompetition = Competitions.findOne({url: this.params.url});
	// 		Session.set('selectedCompetition', selectedCompetition);
	// 		document.title = 'S! jalkaennustus: ' + selectedCompetition.name;
	// 		var templateData = {
	// 			competition: Competitions.findOne({name: Session.get('selectedCompetition').name})
	// 		};
	// 		return templateData;
	// 	}
	// 	else {
	// 		return false;
	// 	}
	// },
	action: function () {
		// if (this.ready()) {
			BlazeLayout.render('layout');
		// }
		// else {
		// 	BlazeLayout.render('loadingTemp');
		// }
	}
});

FlowRouter.route('/comp/:url', {
	name: 'competition',
	action: function (params) {
		console.log('got to competition');
		if (!Meteor.user()) {
			BlazeLayout.render('accessDenied');
		}
		// if (this.ready()) {
			BlazeLayout.render('layout', {header: 'header', main: 'home'});
		// }
		// else {
		// 	BlazeLayout.render('loadingTemp');
		// }
	},
	// waitOn: function () {
	// 	this.subscribe('userStatus');
	// 	this.subscribe('allUsers');
	// 	var url = this.params.url;
	// 	return [
	// 		this.subscribe('competition', {url: url}),
	// 		this.subscribe('predictions', {event: url}),
	// 		this.subscribe('messages', {event: url}),
	// 		this.subscribe('competitions')
	// 	];
	// },
	// data: function () {
	// 	Session.set('addingResult', false);
	// 	if (this.ready()) {
	// 		console.log('data is ready');
	// 		var selectedCompetition = Competitions.findOne({url: this.params.url});
	// 		Session.set('selectedCompetition', selectedCompetition);
	// 		document.title = 'S! jalkaennustus: ' + selectedCompetition.name;
	// 		var templateData = {
	// 			competition: Competitions.findOne({name: Session.get('selectedCompetition').name})
	// 		};
	// 		return templateData;
	// 	}
	// 	else {
	// 		return false;
	// 	}
	// }
});