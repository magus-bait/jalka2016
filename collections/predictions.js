Predictions = new Mongo.Collection('Predictions');

Predictions.schema = new SimpleSchema({
	type: {type: String},
	competition: {type: String, regEx: SimpleSchema.RegEx.Id},
	fixture: {type: String, regEx: SimpleSchema.RegEx.Id},
	user: {type: String, regEx: SimpleSchema.RegEx.Id},
	_id: {type: String, regEx: SimpleSchema.RegEx.Id}
});