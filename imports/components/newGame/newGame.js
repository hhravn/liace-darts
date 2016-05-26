import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './newGame.html';

class NewGameController {
  constructor() {
    this.name = "hello";
  }
}

export default angular.module('newGame', [
  angularMeteor
])
  .component('newGame', {
    templateUrl: 'imports/components/newGame/newGame.html',
    controller: NewGameController
  });
