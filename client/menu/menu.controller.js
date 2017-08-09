class MenuController {
    constructor($scope, $location) {
        Object.assign(this, {
            $scope,
            $location
        });
    }

    $onInit() {
        this.$scope.$on('$routeChangeSuccess', () => {
            this.currentLocation = this.$location.path();
        });
    }
}

MenuController.$inject = ['$scope', '$location'];

export default MenuController;