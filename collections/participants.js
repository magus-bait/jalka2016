Participants = new Mongo.Collection('Participants');

Participants.schema = new SimpleSchema({
	competition: {type: String, regEx: SimpleSchema.RegEx.Id},
	user: {type: String, regEx: SimpleSchema.RegEx.Id},
	username: {type: String},
	_id: {type: String, regEx: SimpleSchema.RegEx.Id}
});