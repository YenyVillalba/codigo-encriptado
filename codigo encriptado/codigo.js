
const encriptacion = {
    'a': '?',
    'e': '[',
    'i': '\\',
    'o': '~',
    'u': '+',
    'b': '%',
    'c': '`',
    'd': '¡',
    'f': ';',
    'h': '-',
    'j': '!',
    'l': '/',
    'm': '^',
    'n': ']',
    'p': '*',
    'q': '}',
    'r': '$',
    's': '{',
    't': '=',
    'v': '#',
    'y': '¿',
    'z': '_',
    ' ': '()', 
    'ó': '¬' 
  };
  
  
  const desencriptacion = {};
  for (const letra in encriptacion) {
    const simbolo = encriptacion[letra];
    desencriptacion[simbolo] = letra;
  }
  

  function desencriptar(mensajeEncriptado) {
    let mensajeOriginal = '';
    
   
    for (let i = 0; i < mensajeEncriptado.length; i++) {
      if (mensajeEncriptado[i] === '(' && mensajeEncriptado[i + 1] === ')') {
        mensajeOriginal += ' '; 
        i++; 
      } else {
        mensajeOriginal += desencriptacion[mensajeEncriptado[i]] || mensajeEncriptado[i];
      }
    }
    
    return mensajeOriginal;
  }
  

  const mensajeEncriptado = "^[()`~^*/?`[()^+`- ~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";
  
  
  const mensajeDesencriptado = desencriptar(mensajeEncriptado);
  
  console.log("Mensaje desencriptado:", mensajeDesencriptado);
  