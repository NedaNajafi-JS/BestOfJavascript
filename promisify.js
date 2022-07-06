const promisify = fn => (...args) => {
    return new Promise((resolve, reject) => {
        fn(...args, (err, data) => err ? reject(err) : resolve(data))
    })
}
