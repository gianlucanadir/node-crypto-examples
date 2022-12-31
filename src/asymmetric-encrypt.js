const {  publicEncrypt, privateDecrypt } = require('crypto');
/* const { publicKey, privateKey } = require('./keypair'); */

const message = 'password'
const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqqR95sli8lEP0FukdaOR
wJUrgLZVlMVak2rHlFtiVMjGaQpQ6DnvFLsVTg+NdBWk/2dezxGdzotSVmnLiLUs
m9q5B8RdxdH0QM58Vkrg92rHgtlfbz7tI/JtwPT/bB1ABjKbzgZSPsFpQeTZR8iu
ESlZg20O6VaI9Q1K9rbMpM7/hmqro6lk0Ef1tQp4r7NMXUreahVsRSrOOP01S0AJ
eqp9nxnvCW/VBkhq5hc0fFoRpyUtiyYwY3GJBT7+961P4uNa98nCh1nVuu8Fkaav
BYp6avbPquyAEisQU9tx1Lq9znCc/TtOgCpGtVxpmcjgO5qXUwOwn0WKWayGrYor
7wIDAQAB
-----END PUBLIC KEY-----`

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqpH3myWLyUQ/Q
W6R1o5HAlSuAtlWUxVqTaseUW2JUyMZpClDoOe8UuxVOD410FaT/Z17PEZ3Oi1JW
acuItSyb2rkHxF3F0fRAznxWSuD3aseC2V9vPu0j8m3A9P9sHUAGMpvOBlI+wWlB
5NlHyK4RKVmDbQ7pVoj1DUr2tsykzv+GaqujqWTQR/W1Cnivs0xdSt5qFWxFKs44
/TVLQAl6qn2fGe8Jb9UGSGrmFzR8WhGnJS2LJjBjcYkFPv73rU/i41r3ycKHWdW6
7wWRpq8Finpq9s+q7IASKxBT23HUur3OcJz9O06AKka1XGmZyOA7mpdTA7CfRYpZ
rIatiivvAgMBAAECggEAAN9jpldAezx4ENME9yR+Tv8f7A2fvIDjIV6s6w3MwuH1
l/d2fi6ckeApCjsD22SFfPs7NQWZcwj9FPAij6KK/+areuwBjjV2Jcv3EIj+fZs6
UVI1KAvjMhrRZsXLajjNV8lQ69V5E+xw0k8fsSRT5EZ75u14KV6rx3EGXpyzg3ne
pJ16GVJHFFx7I+ybmHqkAr4Yt1QltSBDbWD5E1NTT/xrjho0YnIYUVQ3RjaD6l5p
vw5Vx7AqpdmCvRvlh29lJOlfuQ+VHJT/G1XTiIVQh3GleJYobDB8hSSJFLfEAhQb
fu8J+0V0IYx5awGcucMiUMc1PfLpFEQMwviDgd8beQKBgQDGr3NxoqDWgKYK3+qr
ZGg/NDmf9bZnPrI1It7+jh5Wnz1g5WhrG9fP9mpYCjhV49Apm6FMeXme70BtQP4s
IlZmgKswaMNd1K38CeR+zTNqkMUKZPYqpJZQPKnG3ihN5+P1gnk1w7mZuvLCY+PK
SmKorQ9w50HL0VRdCGjNG65txwKBgQDb3iF+Eql15mpcr7+KE6msuXXuuOBdCxOW
elSWaTdu1+Fui9YoAp2m2g78jX3mJkNVlFvmvt6xLT1DSsyKbdvMgRuFyV3UIbtC
4vyZdcitrCgThYoZY2PGxd9rSwpTk91A0U3joxL8MLPy2dVTFrPUQGcYEL2aBOB0
g9n7CaDwmQKBgQCC5pFeqtDgwf2jaIdJyGtOSPA2TUKRnyL2EzVr7OJcG6nqrvou
pzd2kljaDFG1dNRutVR9+AKDDgoacRmEplLaUad3y2374eWHClV6nWNksGDBSmdN
DQbjcjRBC5juSvtLg1ysaXlcqWjLXdh0LLH3g52KuzIEQLQeXy39BGHVfQKBgAd8
FVnMWtZ3pJFJLlUN/E2z9o7M3l5sfRs3SN/h7xAn6zWvLvgntqQyciYozuthzBMC
vOoq/zu61YYP6syflsbscjpos3gAOfa58W1r9Avte2PGvP/GQWRH4iYt5MkZlIOb
XHJuX7wUEFwpDDkK4c5M7vWDxGCU3+s3fdks57ypAoGAFWGEcz6fhWg1cyQhpg+o
ZdaJaJyK03ciFhzH5iMOu1bS76PngxziObZSwDTibrncVLQ4QbuIELBfFa56GCzM
EzYp7DLVeyizNARLeStxFZSVfXgB4grpu9uweyGh0up5YlfowiW1osukSdCZhFAr
Pyd9fQy7SyrpuRMfAah4sMw=
-----END PRIVATE KEY-----`

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
  );

console.log('encrypted data: ', encryptedData.toString('hex'))

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log('decrypted data: ', decryptedData.toString('utf-8'));
