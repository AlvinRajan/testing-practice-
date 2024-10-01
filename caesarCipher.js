function caesarCipher(str, shift) {

    shift = shift % 26;
  
    return str.split('').map(char => {
      const charCode = char.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      }
  
      
      if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      }
  
      return char;
    }).join('');
}
  
module.exports = caesarCipher;
  