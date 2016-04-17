Messages = new Mongo.Collection('Messages');

Messages.schema = new SimpleSchema({
	time: {type: Date},
	message: {type: Number},
	competition: {type: String, regEx: SimpleSchema.RegEx.Id},
	user: {type: String, regEx: SimpleSchema.RegEx.Id},
	username: {type: String},
	_id: {type: String, regEx: SimpleSchema.RegEx.Id}
});