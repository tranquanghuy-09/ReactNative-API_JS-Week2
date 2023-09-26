var f = function (resolve, reject) {
    resolve();
    reject();
}

var promise = new Promise(f);
console.log(promise); // Promise { <pending> }

promise.then(function () {
    console.log("Successfull");
}).catch(() => {
    console.log("Unsuccessfull")
}).finally(() => {
    console.log("Finally")
})