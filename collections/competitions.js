Competitions = new Mongo.Collection('Competitions');

Competitions.schema = new SimpleSchema({
	year: {type: Number},
	name: {type: String},
	url: {type: String},
	intro: {type: String},
	isActive: {type: Boolean},
	isPredictable: {type: Boolean},
	_id: {type: String, regEx: SimpleSchema.RegEx.Id}
});