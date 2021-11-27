// Такое используется, но редко. Лучше положить картинку в папку компонента и импортировать.
// Но способ прикольный)
// resources/img - более общие картинки

import img from './error.gif';

const ErrorMessage = () => {
  // process.env.PUBLIC_URL + '/error.gif' - достаёт картинку из папки public

  return (
      <img 
        src={img} 
        alt="Error message" 
        style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}} 
      />
  );
}

export default ErrorMessage;