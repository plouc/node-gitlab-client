export const wrap = operation => {
    return config => {
        return function () {
            const req = operation.apply(null, [config.apiBaseUrl].concat(Array.prototype.slice.call(arguments)));

            req.set('PRIVATE-TOKEN', config.token);

            return req;
        }
    }
};
