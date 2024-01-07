function decodeMimeFilename(mimeEncodedFilename) {
  const startOfFilename = mimeEncodedFilename.indexOf('?b?');
  const endOfFilename = mimeEncodedFilename.lastIndexOf('?=');

  if (startOfFilename === -1 || endOfFilename === -1) {
    return null;
  }

  const base64EncodedFilename = mimeEncodedFilename.slice(startOfFilename + 3, endOfFilename);
  const filenameBytes = atob(base64EncodedFilename);
  
  let filename = '';
  for (let i = 0; i < filenameBytes.length; i++) {
    filename += '%' + ('0' + filenameBytes.charCodeAt(i).toString(16)).slice(-2);
  }

  return decodeURIComponent(filename);
}

// usage
let contentDisposition = "=?utf-8?b?YXR0YWNobWVudDsgZmlsZW5hbWU9IueJueaWr+aLieaBtuaEj+a2qOiWqumZjeS7t++8jOWWhOaJk+S7t+agvOaImOeahOS4reWbveS8geS4mu+8jOS4uuS9leaDp+aAleeJueaWr+aLieeahOS7t+agvOaImO+8n++9nOmprOaWr+WFi++9nOeJueaWr+aLie+9nOeUteWKqOi9pu+9nOavlOS6mui/qu+9nFRFU0xB772cRWxvbiBNdXNr772c5Lu35qC85oiY772c5rG96L2m5biC5Zy6772c546L5bGA5ouN5qGIMjAyMzA3MjAgW182ZnVaS203WmY0XS5tNGEi?="
contentDisposition = decodeMimeFilename(contentDisposition);
console.log(contentDisposition);
