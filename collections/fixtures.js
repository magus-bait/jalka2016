Fixtures = new Mongo.Collection('Fixtures');

Fixtures.schema = new SimpleSchema({
	id: {type: Number},
	playTime: {type: Date},
	result: {type: String},
	team1Key: {type: String},
	team1Title: {type: String},
	team1Count: {type: Number},
	team2Key: {type: String},
	team2Title: {type: String},
	team2Count: {type: Number},
	drawCount: {type: Number},
	competition: {type: String, regEx: SimpleSchema.RegEx.Id},
	_id: {type: String, regEx: SimpleSchema.RegEx.Id}
});