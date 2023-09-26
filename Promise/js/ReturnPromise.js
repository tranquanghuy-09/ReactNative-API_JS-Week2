var f = function (resolve, reject) {
    resolve(1);
    reject();
}

var promise = new Promise(f);
promise
    .then(
        function () {
            return new Promise(function (resolve) {
                setTimeout(resolve, 3000);
            });
        }
    )
    .then(
        function (data) {
            console.log(data);
            return 2;
        }
    )
    .then(
        function (data) {
            console.log(data);
        }
    )
