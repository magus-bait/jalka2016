Charts = new Mongo.Collection('Charts');

Charts.schema = new SimpleSchema({
	type: {type: String},
	round: {type: Number},
	score: {type: Number},
	place: {type: Number},
	competition: {type: String, regEx: SimpleSchema.RegEx.Id},
	user: {type: String, regEx: SimpleSchema.RegEx.Id},
	username: {type: String},
	_id: {type: String, regEx: SimpleSchema.RegEx.Id}
});