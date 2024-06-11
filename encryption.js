// encryption.js
function encryptData(data) {
    // Ganti kunci enkripsi dengan kunci Anda sendiri
    var key = CryptoJS.enc.Utf8.parse('kuncienkripsisaya');
    var iv = CryptoJS.enc.Utf8.parse('ivsaya');

    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
}
