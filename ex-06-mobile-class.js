let Mobile = function (battery, composeMemory, inboxMemory, sentMemory, status) {
    this.battery = battery; //pin
    this.composeMemory = composeMemory; //vùng nhớ soạn tin nhắn
    this.inboxMemory = inboxMemory; //vùng nhớ tin nhắn đến
    this.sentMemory = sentMemory; //vùng nhớ tin nhắn đã gửi
    this.status = status; //trạng thái: bật/tắt

    this.isOn = function () {
        return this.status;
    }

    this.turnOn = function () {
        if (!this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.useMobileFunc();
                this.status = true;
            }
        }
    }

    this.turnOff = function () {
        if (this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.useMobileFunc();
                this.status = false;
            }
        }
    }

    this.chargeBattery = function () {
        if (this.battery < 100) this.battery++;
    }

    this.composeMessage = function (message) {
        if (this.isOn()) {
            this.useMobileFunc();
            this.composeMemory = message;
        }
    }

    this.sendMessage = function (toMobile) {
        if (this.isOn()) {
            this.useMobileFunc();
            this.sentMemory = this.composeMemory;
            toMobile.inboxMemory = this.sentMemory;
        }
    }

    this.receiveMessage = function () {
        if (this.isOn()) {
            this.useMobileFunc();
            return "You're have a new message!";
        }
    }

    this.readMessage = function () {
        if (this.isOn()) {
            this.useMobileFunc();
            return this.inboxMemory;
        }
    }

    this.useMobileFunc = function() {
        this.battery--;
    }
}

function main() {
    let nokia = new Mobile(80, '', '', '', true);
    let iPhone = new Mobile(90, '', '', '', true);

    let composingMessage = prompt("Enter your message: ");
    nokia.composeMessage(composingMessage);
    nokia.sendMessage(iPhone);

    let isCheck = iPhone.receiveMessage();
    if (isCheck != "") {
        alert("Message is: " + iPhone.readMessage());
    }
}

main();