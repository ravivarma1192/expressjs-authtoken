expressjs=authtoken is the middleware to read the authentication token from the request

## How to use?

```javascript
var authToken = require("expressjs-authtoken");
app.use(authToken());
```

if we don't specify any props, it will take from headers and with authorization key

## passing custom props

by passing the custom props you can read the key from headers, body and params

## Example

```javascript
app.use(
  authToken({
    key: "authorization", //key to read from the request , default value is authorization
    readFrom: "headers", // read from headers/body/params, default value is headers
    isMandatory: true, // is authorization key mandatory, if mandatory is true then it will throw an error, defaut value is false,
    ignore: 7, // ignore characters from start to remove such as Bearer
  })
);
```
