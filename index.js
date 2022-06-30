'use strict';

const authToken = props => {

    return (req, res, next) => {

        const from = props?.readFrom || 'headers';
        const remove = props?.ignore || 0;
        const key = props?.key || 'authorization';
        const isMandatory = props?.isMandatory || false;

        if (from == 'headers' || from == 'params' || from == 'body') {
            let token = req[from]?.[key];
            if (!token) {
                if (isMandatory) {
                    return res.status(401).send({ message: "auth token is mandatory" })
                } else {
                    next();
                    return;
                }
            }
            if (remove == 0) {
                req.token = token;
            } else {
                req.token = token.slice(remove);
            }
            next();
        } else {
            return res.status(401).send({ message: "readFrom value should be headers, body, query" })
        }
    }

}

module.exports = authToken;