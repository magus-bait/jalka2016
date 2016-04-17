Playoffs = new Mongo.Collection('Playoffs');

Playoffs.schema = new SimpleSchema({
	id: {type: Number},
	score: {type: Number},
	teams: {type:[String]},
	competition: {type: String, regEx: SimpleSchema.RegEx.Id},
	_id: {type: String, regEx: SimpleSchema.RegEx.Id}
});