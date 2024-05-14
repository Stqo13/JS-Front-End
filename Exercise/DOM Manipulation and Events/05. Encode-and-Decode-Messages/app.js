function encodeAndDecodeMessages() {
    let messageTextareaElement = document.querySelector('textarea[placeholder="Write your message here..."]');
    let lastMessageTextareaElement = document.querySelector('textarea[placeholder="No messages..."]');

    let encodeBtnElement = messageTextareaElement.nextElementSibling;
    let decodeBtnElement = lastMessageTextareaElement.nextElementSibling;

    encodeBtnElement.addEventListener('click', (event) => {
        let words = messageTextareaElement.value;
        let result = '';
        for (const char of words) {
            result+= String.fromCharCode(char.charCodeAt(0) + 1);
        }
        messageTextareaElement.value = '';
        lastMessageTextareaElement.value = result;
    });

    decodeBtnElement.addEventListener('click', (event) => {
        let words = lastMessageTextareaElement.value;
        let result = '';

        for (const char of words) {
            result+= String.fromCharCode(char.charCodeAt(0) - 1);
        }
        lastMessageTextareaElement.value = result;
    });
}