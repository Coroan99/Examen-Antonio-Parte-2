// Crear un componente básico con Mithril
var App = {
  view: function () {
    return m("div", [
      m("h1", "Hola, Mundo con Mithril!"),
      m("p", "Este es un componente básico de Mithril."),
    ]);
  },
};

// Iniciar Mithril y renderizar el componente en el div con id="app"
m.mount(document.getElementById("app"), App);
