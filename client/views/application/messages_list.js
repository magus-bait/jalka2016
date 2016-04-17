// Template.messagesList.events({
// 	'click #submitMessage': function(e) {
// 		e.preventDefault();
//
// 		if (Meteor.user()) {
// 			var message = {
// 				message: $('.messageForm').find('[name=message]').val(),
// 				competition: Session.get('selectedCompetition').url
// 			}
// 			Meteor.call(
// 				'addMessage',
// 				message,
// 				function(error, id) {
// 					if (error)
// 						Errors.throw(error.reason);
// 				}
// 			);
// 			$('.messageForm').find('[name=message]').val('');
// 		}
// 		else {
// 			Errors.throw("Logi palun sisse");
// 		}
// 	}
// });
//
// Template.messagesList.helpers({
// 	sortMessages: function(messages) {
// 		if (messages.count() > 0){
// 			messages = _.sortBy(messages.fetch(), function(message){
// 				return message.timestamp;
// 			});
// 			return messages.reverse();
// 		}
// 	},
// 	messages: function() {
// 		return Messages.find();
// 	}
// });