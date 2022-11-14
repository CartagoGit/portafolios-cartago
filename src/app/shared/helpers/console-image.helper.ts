/* consoleimg v1.0 - chris johnson / @defaced
 * ? Codigo de Chris Johnson modificado para uso personal del proyecto
 */
export const consoleImg = (function () {
  return {
    load: async (src: string, { size = 320, color = 'transparent' } = {}) => {
      const fileReader = new FileReader();

      //* Cargamos los datos de la imagen en el lector de archivos
      await fetch(src)
        //* Devolvemos la imagen como blob
        .then((data) => data.blob())
        .then((blob) => {
          //* Solo procedera si el archivo es una imagen
          if (blob.type.indexOf('image') === 0) {
            // * Aviso en firefoz si el archivo es mas grande de 8kb
            if (
              blob.size > 8192 &&
              navigator.userAgent.indexOf('Firefox') > 0
            ) {
              throw new Error('Image size too big to be displayed in Firefox.');
            }
            return blob;
          } else {
            //* Error si no es una imagen
            throw new Error('Valid image not found.');
          }
        })
        //* Lee el blob en base64
        .then((src) => fileReader.readAsDataURL(src))
        .catch((error) => console.warn(error.message));

      /**
       * ? Funcion para esperar la llamada asyncrona a que el lector del archivo termine de cargar
       * @returns {Promise<void>}
       */
      const readerFinishedOn = (): Promise<string> => {
        return new Promise((resolve) => {
          fileReader.addEventListener(
            'load',
            function () {
              // * Creamos el estilo para la imagen
              const style =
                "background: url('" +
                fileReader.result +
                "') left top no-repeat; font-size: " +
                size +
                'px; background-size: contain; background-color:' +
                color;

             //* Mostramos la imagen en pantalla
              // console.log('%c     ', style);
              resolve(style);
            },
            false
          );
        });
      };

      //? Esperamos a que el lector haya terminado
      return await readerFinishedOn();
    },
  };
})();
