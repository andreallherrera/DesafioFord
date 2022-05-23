const codigo = '1HGCM82633A004352';

const criptografar = (string) => {
  const firstToAscii = string.split('').map((char) => {
    return String.fromCharCode(char.charCodeAt(0) + 2);
  });
  
  const toCesar = firstToAscii.map((char) => {
    if ((char >= 'x' && char <= 'z') || (char >= 'X' && char <= 'Z')) {
      return String.fromCharCode(char.charCodeAt(0) - 23);
    }
    return String.fromCharCode(char.charCodeAt(0) + 3);
  }); 
  return toCesar.join('');
};

const crip = criptografar(codigo);

console.log(`Seu codigo: ${crip}`);