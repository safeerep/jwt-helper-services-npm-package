import jwt, { Secret, SignOptions, JwtPayload, VerifyErrors  } from 'jsonwebtoken'
import { Payload } from './types'

export const tokenProvider = ( 
    {
        keyName = 'uniqueIdentifier', 
        uniqueKey, 
        secret, 
        options
    }: {
        keyName?: string, 
        uniqueKey: JwtPayload| string, 
        secret: Secret, 
        options: SignOptions 
    }) => {

        const payloadObj: Payload = {
            [keyName]: uniqueKey
        }
        return jwt.sign(
            payloadObj,
            secret,
            options
        )

}

// uer have to give their ecret alo ith token
export const tokenVerifier = ( token: string, secret: Secret) => {
    return new Promise((resolve, reject) => {
        jwt.verify( token, secret, ( error, decodedToken) => {
            if (error) {
                reject(error)
            } else {
                resolve(decodedToken)
            }
        })
    })
}

export const tokenDecoder = ( token: string, secret: Secret, uniqueKey: string) => {
    return new Promise<string>((resolve, reject) => {
        jwt.verify( token, secret, ( error: VerifyErrors | null, decodedToken: object | any) => {
            if (error) {
                reject(error)
            } else {
                if ( decodedToken && decodedToken[uniqueKey]) {
                    resolve(decodedToken[uniqueKey])
                } else {
                    reject( new Error("the specified key is not in the decoded token"))
                }
            }
        })
    })
}