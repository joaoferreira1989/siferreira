class ImportController {
    constructor($scope, FileUploader) {
        Object.assign(this, {
            $scope,
            FileUploader,
            model: {
                name: '',
                description: '',
                images: []
            }
        });
    }

    $onInit() {
        this.uploader = this.$scope.uploader = new this.FileUploader({
            url: 'https://api.imgur.com/3/image',
            headers: {
                "Authorization": "Client-ID c65b7ac9a32a858"
            },
            alias: 'image',
            autoUpload: true
        });

        // Upload Filters
        this.uploader.filters.push({
            name: 'imageFilter',
            fn: (item) => {
                const type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';

                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        this.uploader.onCompleteItem = (fileItem, response) => {
            this.model.images.push(response.data.link);

            console.info('onSuccessItem', response.data.link);
        };
    }
}

ImportController.$inject = ['$scope', 'FileUploader'];

export default ImportController;