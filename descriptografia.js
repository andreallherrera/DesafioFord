const crip = '6MLHR=7;88F5598:7';

const descriptografar = (string) => {
  const toCesar = string.split('').map((char) => {
    if ((char >= 'a' && char <= 'c') || (char >= 'A' && char <= 'C')) {
      return String.fromCharCode(char.charCodeAt(0) + 23);
    }
    return String.fromCharCode(char.charCodeAt(0) - 3);
  });

  const toAscii = toCesar.map((char) => {
    return String.fromCharCode(char.toString().charCodeAt(0) - 2);
  }); 
  return toAscii.join('');
};

const codigo = descriptografar(crip);

console.log(`Seu codigo: ${codigo}`);
