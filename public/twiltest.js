// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
// To set up environmental variables, see http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

console.log("accountSid = " + accountSid);
console.log("authToken = " + authToken);

client.verify.v2.services
                .create({friendlyName: 'MyChanic'})
                .then(service => {
                    console.log(service.sid);
                    sid = service.sid;
                });
                

// client.verify.v2.services('VA301098e1f1220235903b86f05a994a14')
//                 .verifications
//                 .create({to: '+17029080027', channel: 'sms'})
//                 .then(verification => console.log(verification.status));

// const response = client.verify.v2.services('VA301098e1f1220235903b86f05a994a14')
//                 .verificationChecks
//                 .create({to: '+17029080027', code: '883371'})
//                 .then(verification_check => console.log(verification_check.status));

