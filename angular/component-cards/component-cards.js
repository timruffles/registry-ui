angular.module('registry')
.directive('componentCards', function () {
    return {
        restrict: 'E',
        templateUrl: TEMPLATE_URL + 'component-cards/component-cards.html',
        replace: true,
        scope: true,
        link: function postLink($scope, iElement, iAttrs) {
            $scope.filter = $scope.$parent.$eval(iAttrs.filter);
            $scope.filterFn = $scope.filter.match.bind($scope.filter);

            $scope.hiddenCount = 0;

            var selectedCards = {};

            $scope.selectCard = function(card) {
              selectedCards[card.id] = true;
            }

            $scope.isSelected = function(card) {
              return selectedCards[card.id];
            };

            $scope.setOrderProp = function(name){
                if($scope.orderProp = name){
                    $scope.orderReverse = ! $scope.orderReverse;
                }else{
                    $scope.orderProp = name;
                }
            };
        }
    };
});
