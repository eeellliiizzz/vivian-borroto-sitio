// Cuando la web interactiva termina de pintarse, retira la copia estática que
// llevan las páginas para buscadores y para quien navega sin JavaScript.
(() => {
  const estatico = document.getElementById('estatico');
  if (!estatico) return;
  const pintada = () => [...document.body.children].some((el) =>
    !['SCRIPT', 'STYLE', 'X-DC'].includes(el.tagName) && el !== estatico && el.childElementCount > 0);
  const retira = () => { if (pintada()) { estatico.remove(); observador.disconnect(); return true; } return false; };
  const observador = new MutationObserver(retira);
  observador.observe(document.body, { childList: true, subtree: true });
  retira();
})();
