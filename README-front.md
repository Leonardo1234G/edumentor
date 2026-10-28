## Proposito de 5 carpetas

- **features/**: aqui esta organizado el codigo por partes del negocio.
  `tutores` es la entidad padre y `disponibilidades` es la entidad hija.
- **components/common/**: componentes visuales que se reutilizan en toda la
  aplicacion, como botones o mensajes. No pertenecen a un solo modulo.

- **layouts/**: la estructura fija de la pantalla que se repite en todas las
  paginas, por ejemplo el menu lateral y la cabecera.

- **services/http/**: aqui va el codigo que se comunica con el backend
  Spring Boot por HTTP. Asi las pantallas no llaman directamente a la API.

- **config/**: lectura de la configuracion general, por ejemplo la URL del
  backend que viene de la variable VITE_API_BASE_URL.