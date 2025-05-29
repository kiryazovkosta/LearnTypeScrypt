import { Message, EmailMessage, SMSMessage } from '../src/message-override';

describe("5. Message Override", () => {
    it("should send a message", () => {
        const message = new Message();
        expect(message.send()).toBe("Sending message...");
    });

    it("should send an email message", () => {
        const emailMessage = new EmailMessage();
        expect(emailMessage.send()).toBe("Sending email...");
    });

    it("should send an SMS message", () => {
        const smsMessage = new SMSMessage();
        expect(smsMessage.send()).toBe("Sending SMS...");
    });

    it("should send an valid message depending of type", () => {
        const messages: Message[] = [
            new Message(), 
            new EmailMessage(), 
            new SMSMessage()
        ];

        let result = "";
        messages.forEach((msg) => {
            result += msg.send();
        });

        expect(result).toBe("Sending message...Sending email...Sending SMS...");
    });
});