export default class myProfile {
    #myQID = '12345678901';
    #myEmail = 'example@example.com';
    #myPhone = '+974 1234 5678';

    // From Server
    #myPass;
    #myPicture;

    constructor(myQID = null, myEmail = null, myPhone = null, myPass) {
        this.#myQID = myQID;
        this.#myEmail = myEmail;
        this.#myPhone = myPhone;
        this.#myPass = myPass;
    }

    // Set
    setMyQID(newValue) {
        this.#myQID = newValue;
    }

    setMyEmail(newValue) {
        this.#myEmail = newValue;
    }

    setMyPhone(newValue) {
        this.#myPhone = newValue;
    }

    setMyPass(newValue) {
        this.#myPass = newValue;
    }

    setMyPicture(newValue) {
        this.#myPicture = newValue;
    }

    // Get
    getMyQID() {
        return this.#myQID;
    }

    getMyEmail() {
        return this.#myEmail;
    }

    getMyPhone() {
        return this.#myPhone;
    }

    getMyPicture() {
        return this.#myPicture;
    }
}
