export default {
  name: 'noticia',
  title: 'Noticias',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
    },
    // --- AÑADE ESTO ---
    {
      name: 'fecha',
      title: 'Fecha de publicación',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      initialValue: () => new Date().toISOString(),
    },
    // ------------------
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Club', value: 'CLUB'},
          {title: 'Avisos', value: 'AVISOS'},
          {title: 'Crónica', value: 'CRÓNICA'},
          {title: 'Escuela', value: 'ESCUELA'},
        ],
      },
    },
    {
      name: 'imagenPrincipal',
      title: 'Imagen de portada',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'contenido',
      title: 'Contenido',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
