class Message  {
    public send(): string {
        return "Sending message...";
    }
}

class EmailMessage extends Message {
    public send(): string {
        return "Sending email...";
    }
}

class SMSMessage extends Message {
    public send(): string {
        return "Sending SMS...";
    }
}

export { Message, EmailMessage, SMSMessage };