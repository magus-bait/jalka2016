// Template.home.events({
// });
//
Template.home.helpers({
	activeTab: function(name) {
		if (name == 'predict') {
			if (Session.get('selectedCompetition').isPredictable) {
				return name == Session.get('selectedTab') ? 'active' : '';
			}
			else {
				return 'disabled';
			}
		}
		else {
			return name == Session.get('selectedTab') ? 'active' : '';
		}
	},
	activeTabStyle: function(name) {
		return name == Session.get('selectedTab') ? 'fade in active' : 'fade';
	},
	disableTab: function(name) {
		return name == 'predict' && (!Session.get('selectedCompetition').isPredictable) ? '' : 'tab';
	},
	intro: function (name) {
		return Session.get('selectedCompetition').intro;
	}
});
//
// Template.home.rendered = function () {
// 	var competition = Session.get('selectedCompetition');
// //	Meteor.subscribe('predictions', {event: competition.url, userId: Meteor.user()._id})
// 	$(".nav-tabs a[data-toggle=tab]").on("click", function(e) {
// 		if ($(this).hasClass("disabled")) {
// 			e.preventDefault();
// 			return false;
// 		}
// 	});
// 	if (Session.get('selectedCompetition').isPredictable) {
// 		$('a[href="#predict"]').tab('show');
// 		Session.set('selectedTab', 'predict');
// 	}
// 	else {
// 		$('a[href="#watch"]').tab('show');
// 		Session.set('selectedTab', 'watch');
// 	}
// 	$('#predictLink').click(function(e) {
// 		if (Session.get('selectedCompetition').isPredictable) {
// 			Session.set('selectedTab', 'predict');
// 		}
// 		else {
// 			Session.set('selectedTab', 'watch');
// 		}
// 	});
// 	$('#watchLink').click(function(e) {
// 		Session.set('selectedTab', 'watch');
// 	});
// }