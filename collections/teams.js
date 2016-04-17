Teams = new Mongo.Collection('Teams');

Teams.schema = new SimpleSchema({
	key: {type: String},
	title: {type: String},
	code: {type:String},
	competition: {type: String, regEx: SimpleSchema.RegEx.Id},
	_id: {type: String, regEx: SimpleSchema.RegEx.Id}
});