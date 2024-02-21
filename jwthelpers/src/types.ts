export type Payload = string | object;

export type SecretOrPrivateKey = string | Buffer;

export type AlgorithmForToUse = 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'ES512' | 'PS256' | 'PS384' | 'PS512' | string;

export type SignOptions = {
    expiresIn?: string | number;
    notBefore?: string | number;
    audience?: string | string[];
    algorithm?: AlgorithmForToUse; 
    header?: object;
    encoding?: string;
    issuer?: string;
    jwtid?: string;
    subject?: string;
    noTimestamp?: boolean;
    mutatePayload?: boolean;
};

export interface DecodedToken {
    uniqueKey: string;
}