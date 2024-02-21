# jwt-helper-services

> A utility for jwt token generating, veirification and decoding
> Especially useful for doing microservices

## Installation

```bash
npm install jwt-helper-services
```

## Usage Examples

```javascript

// creating new token;
const secret: string = "3456"
const newToken: string = tokenProvider({ keyName:"userId", uniqueKey: "7777", secret, options: { expiresIn: '10m' }})
console.log(newToken);

// verifying with valid secret;
tokenVerifier(newToken, secret)
.then((newTokenVerify) => {
    console.log(newTokenVerify);
})

// trying to verify with invalid secret;
tokenVerifier(newToken, "secret")
.then((newTokenVerifyAgainWithWrongSecret) => {
    console.log(newTokenVerifyAgainWithWrongSecret);
})
.catch((err: string) => {
    console.log(`we got error in catch, because, the secret is not valid \n`, err);
})

// token decoding on when we wanted to get the unique keys are destructured;
tokenDecoder(newToken, secret, "userId")
.then((uniqueKeyValue: string) => {
    console.log(`decoded value`, uniqueKeyValue);
})
.catch((err) => {
    console.log(`in catch because, specified key is not available in there`, err);  
})
```

## Examples

- You can find more examples in the examples directory.

## Author

- **safeerep**
  - [GitHub Profile](https://github.com/safeerep)
  - [LinkedIn Profile](www.linkedin.com/in/safeer-ep)

## License

This project is licensed under the [MIT License](./LICENSE.md) - see the [LICENSE](./LICENSE.md) file for details.