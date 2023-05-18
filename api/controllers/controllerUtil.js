const _intializeResponse = function (code = 200, msg = "") {
    return { code: code, msg: msg };
}

const _sendResponse = function (res, response) {
    const code = parseInt(response.code)
    res.status(code).json(response.msg);
}

const _setOKResponse = function (response, msg) {
    response.code = process.env.OK_CODE;
    response.msg = msg;
}

const _setServerErrorResponse = function (response, error) {
    response.code = process.env.SERVER_ERROR_CODE;
    response.msg = error;
}

const _setNotFoundErrorResponse = function (response) {
    response.code = process.env.NOT_FOUND_CODE;
    response.msg = { error: process.env.INCORRECT_ID_ERROR_MSG }
}

const _setAppropriateErrorResponse = function (response, error) {
    if (error.code == 404) {
        _setNotFoundErrorResponse(response);
    } else {
        _setServerErrorResponse(response, error);
    }
}

const _checkExistance = function (document) {
    return new Promise((resolve, reject) => {
        if (document) resolve(document);
        else {
            reject({ code: 404 });
        }
    });
}

const _save = function (document) {
    return new Promise((resolve, reject) => {
        document.save()
            .then((savedDocument) => resolve(savedDocument))
            .catch((error) => reject(error));
    });
}

module.exports = {
    _intializeResponse, 
    _checkExistance,
    _save, 
    _sendResponse,
    _setAppropriateErrorResponse,
    _setOKResponse,
}