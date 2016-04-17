// var countCheck = {
// 	5: 16,
// 	4: 8,
// 	3: 4,
// 	2: 2,
// 	1: 1
// };
//
// Template.prediction.rendered = function() {
// 	var action = Session.get('addingResult') ? 'Result' : 'Prediction';
// //	console.log(action);
// 	$('.fixtures .btn-group').on('change.fixtureRadios', 'input:radio', function(e){
// 		if (Meteor.user()) {
// 			var radio = $(e.target);
// 			if (radio.attr('name').indexOf('fixture') !== -1) {
// 				var prediction = {
// 					result : radio.val(),
// 					game: radio.attr('name'),
// 					event: Session.get('selectedCompetition').url
// 				};
// 				Meteor.call(
// 					'add' + action,
// 					prediction,
// 					function(error, result) {
// 						if (error) {
// 							Errors.throw(error.reason);
// 						}
// 						else {
// 							console.log(result);
// 							if (result && result.message && result.message == 'predictionCompleted') {
// 								$('#predictionDone').modal('show');
// 							}
// 						}
// 					}
// 				);
// 			}
// 		}
// 		else {
// 			Errors.throw("Logi palun sisse");
// 		}
// 	});
//
// 	$(".playoffs .btn-group").on('change', 'input:checkbox', function(e){
// 		e.stopImmediatePropagation();
// 		if (Meteor.user()) {
// 			var checkbox = $(e.target);
// 			var checkboxLabel = checkbox.closest('label');
// 			var stageContainer = checkbox.closest('.btn-group');
//
// 			var stage = stageContainer.attr('name');
// 			stage = stage[stage.length-1] - 1;
//
// 			var prediction = {
// 				stage: stage,
// 				key: checkbox.attr('name'),
// 				title: checkbox.attr('title'),
// 				event: Session.get('selectedCompetition').url
// 			};
// 			if (!checkboxLabel.hasClass('active')) {
// 				var predictions = Predictions.find({stage: stage, event: Session.get('selectedCompetition').url, userId: Meteor.user()._id});
// 				if (predictions.count() >= countCheck[stage] && action !== 'Result') {
// 					if (!stageContainer.hasClass("shake")) {
// 						stageContainer.addClass("shake");
// 					} else {
// 						stageContainer.css('animation-name', 'none');
// 						stageContainer.css('-moz-animation-name', 'none');
// 						stageContainer.css('-webkit-animation-name', 'none');
//
// 						setTimeout(function() {
// 							stageContainer.css('-webkit-animation-name', 'shake');
// 						}, 0);
// 					}
// 					checkboxLabel.removeClass('active');
// 					return;
// 				}
// 				else {
// 					Meteor.call(
// 						'add' + action,
// 						prediction,
// 						function(error, result) {
// 							if (error) {
// 								Errors.throw(error.reason);
// 							}
// 							else {
// 								console.log(result);
// 								if (result && result.message && result.message == 'predictionCompleted') {
// 									$('#predictionDone').modal('show');
// 								}
// 							}
// 						}
// 					);
// 				}
// 			}
// 			else {
// 				Meteor.call(
// 					'remove' + action,
// 					prediction,
// 					function(error, id) {
// 						if (error)
// 							Errors.throw(error.reason);
// 					}
// 				);
// 				while (prediction.stage >= 1){
// 					prediction.stage -= 1;
// 					Meteor.call(
// 						'remove' + action,
// 						prediction,
// 						function(error, id) {
// 							if (error)
// 								Errors.throw(error.reason);
// 						}
// 					);
// 				}
// 			}
// 		}
// 		else {
// 			Errors.throw("Logi palun sisse");
// 		}
// 	});
// }
//
// Template.prediction.destroyed = function(){
// 	$(document.body).off('.fixtureRadios');
// }
//
// Template.fixture.helpers({
// 	isSelected: function(key) {
// 		var returnVal = '';
// 		if (Session.get('addingResult')) {
// 			returnVal = key == this.result? 'active': '';
// 		}
// 		else {
// 			var prediction = Predictions.findOne({userId: Meteor.userId(), fixtureId: 'fixture_' + this.id, event: Session.get('selectedCompetition').url});
// 			if (prediction) {
// 				returnVal = key == prediction.prediction ? 'active': '';
// 			}
// 		}
//
// 		return returnVal;
// 	}
// });
//
// Template.predictionPlayoffs.helpers({
// 	playoffStage: function(stage) {
// 		var teams;
// 		if (Session.get('addingResult')) {
// 			var competition = Session.get('selectedCompetition')
// 			competition.playoffs.forEach(function(playoff) {
// 				if (playoff.id === stage) {
// 					teams = playoff.teams;
// //					console.log(teams);
// 				}
// 			});
// 		}
// 		else {
// 			teams = Predictions.find({userId: Meteor.userId(), stage: stage, event: Session.get('selectedCompetition').url});
// 		}
// 		return teams;
// 	},
// 	isChecked: function(stage) {
// 		if (Session.get('addingResult')) {
// 			var checkedTeam = this;
// 			var competition = Session.get('selectedCompetition');
// 			var found = false;
// 			competition.playoffs.forEach(function(playoff) {
// 				if (playoff.id === stage) {
// 					playoff.teams.forEach(function(team) {
// 						if (team.key === checkedTeam.key) {
// 							found = true;
// 						}
// 					});
// 				}
// 			});
// 			if (!found) {
// 				return '';
// 			}
// 			else {
// 				return 'active';
// 			}
// 		}
// 		else {
// 			var prediction = Predictions.findOne({userId: Meteor.userId(), key: this.key, stage: stage, event: Session.get('selectedCompetition').url});
// 			if (prediction) {
// 				return 'active';
// 			}
// 			else {
// 				// should there be more possibilities to check
// 				var predictions = Predictions.find({stage: stage, event: Session.get('selectedCompetition').url, userId: Meteor.user()._id});
// 				if (predictions.count() >= countCheck[stage]) {
// 					return 'disabled';
// 				}
// 				else {
// 					return '';
// 				}
// 			}
// 		}
// 	},
// 	setNumber: function(number) {
// 		remainingNumber = number;
// 	},
// 	numbers: function() {
// 		var result = new Array();
// 		for (var i=0; i < remainingNumber; i++) {
// 			result.push({
// 				value: remainingNumber - i
// 			});
// 		}
// 		return result;
// 	}
// });
//
// isCheckedFunc = function (stage) {
//
// }