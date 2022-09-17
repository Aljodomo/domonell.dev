import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const sendTelegramMessage = functions
    .runWith({ secrets: ["DOMODEVBOT_API_KEY"] })
    .firestore
    .document("messenges/{messageId}")
    .onCreate((snap, context) => {
        const messageDocumentData = snap.data();

        const name = messageDocumentData.name;
        const email = messageDocumentData.email;
        const subject = messageDocumentData.subject;
        const message = messageDocumentData.message;

        const chatId = "48647989";
        const sendMessageUrl = `https://api.telegram.org/bot${process.env.DOMODEVBOT_API_KEY}/sendMessage`
        const text: string = `${name} hat eine Nachricht auf deiner Website hinterlassen.\n\nEmail: ${email}\n\nBetreff: ${subject}\n\n${message}`;

        const body = { "chat_id": chatId, "text": text }

        const axios = require('axios');

        axios
            .post(sendMessageUrl, body)
            .then((res: any) => {
                console.log(`statusCode: ${res.status}`);
                console.log(res);
            })
            .catch((error: any) => {
                console.error(error);
            });

    });
