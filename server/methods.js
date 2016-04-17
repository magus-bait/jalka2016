Meteor.methods({
	tokenLogin: function (token) {
		if (token) {
			var result = HTTP.post('https://www.eys.ee/jalka/verifyToken.php', {
				params: {
					token: token
				},
				auth: 'Mikk Kard:a5mutiilminu'
			});
			console.log ('http post result: ');
			console.log(result);
			result.content = 'Mikk Kard';
			if (result.content == 'false') {
				return false;
			}
			else {
				//manually log in
				var username = result.content;
				if (Meteor.users.findOne({username: username})) {
					console.log('returning: ' + username);
					return username;
				} else {
					Accounts.createUser({
						username: username,
						password: username.replace(' ', '')
					});
					console.log('returning: ' + username);
					return username;
				}
			}

		}
	},
	recalculatePredictionCounts: function() {
		var competitions = Competitions.find();
		competitions.forEach(function (competition) {
			if (competition.fixtures) {
				competition.fixtures.forEach(function (fixture) {
					var predictions1 = Predictions.find({fixtureId: 'fixture_' + fixture.id, event: competition.url, prediction: fixture.team1_key});
					fixture.team1_count = predictions1.count();
					var predictions2 = Predictions.find({fixtureId: 'fixture_' + fixture.id, event: competition.url, prediction: fixture.team2_key});
					fixture.team2_count = predictions2.count();
					var draws = Predictions.find({fixtureId: 'fixture_' + fixture.id, event: competition.url, prediction: 'draw'});
					fixture.draw_count = draws.count();
					console.log(fixture);
					Competitions.update(
						{_id: competition._id, "fixtures.id": parseInt(fixture.id)},
						{$set: {"fixtures.$": fixture}}
						, function (error, docs) {
							console.log(docs);
						});
				});
			}
		});
	},
	resetPasswords: function() {
		Meteor.users.find().forEach(function(account) {
			console.log(account);
			Accounts.setPassword(account._id, account.username.replace(' ', ''));
		});
	},
	togglePredicting: function (url) {
		Competitions.update({url: url}, {$set: {isPredictable: false}});
	}

});