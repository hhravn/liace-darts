import angular from 'angular';
import angularMeteor from 'angular-meteor';
import newGame from '../imports/components/newGame/newGame';

angular.module('liaceDarts', [
  angularMeteor,
  newGame.name
]);
