// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};

document.getElementById('limpiar').addEventListener('click', function() {
  // Restablecer los valores predeterminados de los selectores
  document.getElementById('filtro1').selectedIndex = 0;
  document.getElementById('filtro2').selectedIndex = 0;
  document.getElementById('filtro3').selectedIndex = 0;
  document.getElementById('filtro4').selectedIndex = 0;
});