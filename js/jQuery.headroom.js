(function($) {
  // Verifica se jQuery ou Zepto estão disponíveis
  if (!$) {
    console.error('jQuery ou Zepto não estão disponíveis.');
    return;
  }

  ////////////
  // Plugin //
  ////////////
  $.fn.headroom = function(options) {
    return this.each(function() {
      var $element = $(this),
          instance  = $element.data('headroom-instance'),
          settings   = typeof options === 'object' && options;

      // Mescla as opções padrão com as fornecidas
      settings = $.extend(true, {}, Headroom.defaults, settings);

      // Inicializa o plugin se ainda não foi criado
      if (!instance) {
        instance = new Headroom(this, settings);
        instance.init();
        $element.data('headroom-instance', instance);
      }

      // Executa métodos específicos se uma string for fornecida
      if (typeof options === 'string') {
        instance[options]();

        // Remove dados se o método destroy for chamado
        if (options === 'destroy') {
          $element.removeData('headroom-instance');
        }
      }
    });
  };

  //////////////
  // Data API //
  //////////////
  $('[data-headroom]').each(function() {
    var $this = $(this);
    // Inicializa o plugin com os dados do elemento
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));
