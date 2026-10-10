// El correo no está escrito en el HTML (así no lo recogen los robots de spam):
// se compone aquí al cargar la página.
document.querySelectorAll('[data-correo]').forEach((a) => {
  const correo = atob(a.dataset.correo);
  a.href = 'mailto:' + correo;
  a.textContent = correo;
});
