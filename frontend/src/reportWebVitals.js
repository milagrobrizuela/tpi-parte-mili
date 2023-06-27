const reportWebVitals = onPerfEntry => {
  // Verifica si `onPerfEntry` es una función válida
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa la biblioteca `web-vitals` y obtiene las funciones de medición de métricas de rendimiento
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llama a cada función de medición de métricas y pasa `onPerfEntry` como argumento
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

/*

Este código facilita la medición y el registro de métricas de rendimiento utilizando la 
biblioteca web-vitals, lo que puede ser útil para monitorear y optimizar el rendimiento de una 
aplicación web.

*/