class Util {
    /**
     * Generates a random string
     *
     * @param {int} length
     *
     * @returns {string}
     */
    static randomString(length = 10)
    {
        const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        let text = "";

        for ( let i=0; i < length; i++ ) {
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        return text;
    }
}