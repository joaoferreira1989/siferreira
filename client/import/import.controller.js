class ImportController {
    constructor($scope, FileUploader) {
        Object.assign(this, {
            $scope,
            FileUploader
        });
    }

    $onInit() {
        const uploader = this.$scope.uploader = new this.FileUploader({
            url: 'upload.php'
        });

        // Upload Filters
        uploader.filters.push({
            name: 'imageFilter',
            fn: (item, options)  => {
                const type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';

                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        uploader.onAfterAddingAll = (addedFileItems) => {
            console.log('onAfterAddingAll', addedFileItems);
        };

        uploader.onCompleteAll = function() {
            console.log('onCompleteAll');
        };
    }
}

ImportController.$inject = ['$scope', 'FileUploader'];

export default ImportController;