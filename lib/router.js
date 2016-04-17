FlowRouter.route('/', {
	path: '/',
	onBeforeAction: function () {
		if (Meteor.user()) {
			this.redirect('/comp/mm2014');
		}
		else {
			BlazeLayout.render('accessDenied');
		}
	}
});