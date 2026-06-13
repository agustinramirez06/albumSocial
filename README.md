# ALBUM CSYDP

Álbum de figuritas virtual del Club Social y Deportivo Pila.

## ¿Qué es?

Una plataforma web que permite a los hinchas del Club Social y Deportivo Pila coleccionar figuritas digitales de los campeones de 2017, los jugadores actuales y las promesas del club. Funciona como un álbum de figuritas tradicional, pero en formato digital y sin costo.

## ¿Cómo surgió la idea?

La idea surgió de unir el amor por el club del pueblo e incentivar a las nuevas generaciones a adentrarse más en el mundo del club y su historia.

El Club Social y Deportivo Pila tiene más de 50 años de historia, pero muchas de esas historias están guardadas en fotos viejas, en la memoria de los más grandes o en recortes de diarios que nadie junta. Con el álbum digital, queremos que los pibes de hoy conozcan quiénes fueron los que salieron campeones en 2017, quiénes son los jugadores actuales que bancan la camiseta, y quiénes vienen empujando desde abajo como promesas.

La idea es simple: si un chico pega una figurita de "Mandrake Pereyra" o del "Toto González", se pregunta quién es, qué hizo, y empieza a interesarse por la historia del club. No es solo coleccionar — es inmortalizar, es sentir pertenencia, es valorar lo que significa ser del pueblo.

Además, queríamos que cualquiera pueda participar. No hace falta plata, no hace falta saber de tecnología, no hace falta ir a ningún lado. Con un dispositivo electrónico y ganas de completar el álbum alcanza.

## ¿Qué se puede hacer?

- **Abrir un sobre por día** — cada día se recibe un sobre con 5 figuritas
- **Pegar figuritas** — las figuritas se pegan directamente en el álbum; las que ya se tienen quedan en el pilón para usar después
- **Consultar el progreso** — el álbum muestra cuántas figuritas se han pegado de cada página
- **Ver estadísticas** — total de pegadas, faltantes y páginas completadas
- **Usar el pilón** — panel rápido con todas las figuritas disponibles para pegar
- **Compartir** — enviar una figurita por WhatsApp o reenviar el enlace a cualquier aplicación para mostrar tu progreso.    

## Filosofía de diseño

- **Simplicidad** — todas las acciones se realizan con un solo clic o toque
- **Rendimiento** — la página y las imágenes cargan rápidamente
- **Accesibilidad** — diseñada para cualquier persona, sin importar su nivel de conocimiento técnico
- **Transparencia** — sin registro complejo, sin pagos, sin publicidad

## Tecnología

La aplicación está construida con **HTML, CSS y JavaScript puro**, sin frameworks ni herramientas de compilación.

**Frontend** — todo se ejecuta en el navegador: la renderización del álbum, las animaciones, los modales y la navegación. Un único archivo JavaScript gestiona la totalidad de la interfaz.

**Base de datos** — utiliza Supabase, un servicio de base de datos en la nube. Allí se almacena la información de cada usuario, las figuritas pegadas, las sueltas y el registro del último sobre abierto.

**Imágenes** — las figuritas se alojan en un servidor externo optimizado para entrega rápida, lo que garantiza una carga fluida incluso en conexiones móviles.

**Autenticación** — cada usuario dispone de una cuenta protegida por email y contraseña, con un perfil personalizado que incluye nombre de usuario y foto.

**Control diario** — el sistema permite abrir un único sobre cada 24 horas, con reinicio automático a la medianoche, replicando la dinámica de los álbumes físicos tradicionales.

**Navegación sin recarga** — una vez cargada la página, todas las interacciones ocurren sin recargar el sitio, ofreciendo una experiencia fluida y continua.

## ¿Cómo se usa?

1. **Registrarse** — ingresar al sitio, completar el formulario con email, contraseña y nombre de usuario. La cuenta queda activa de inmediato.
2. **Configurar el perfil** — agregar una foto de perfil para que otros usuarios puedan identificar al coleccionista.
3. **Abrir el primer sobre** — en la pantalla principal se encuentra el sobre del día. Al abrirlo se obtienen 5 figuritas que se suman a la colección.
4. **Pegar figuritas en el álbum** — las figuritas nuevas pueden pegarse directamente en el álbum. Las que ya se tienen quedan disponibles en el pilón para pegarse más adelante.
5. **Completar las páginas** — el álbum contiene 7 páginas distribuidas en tres categorías: campeones 2017, plantel actual y promesas. Cada página indica cuántas figuritas faltan para completarse.
6. **Ingresar diariamente** — cada 24 horas se habilita un nuevo sobre. La dinámica se repite hasta completar la colección.
7. **Compartir el progreso** — al completar una página u obtener una figurita especial, se puede compartir el logro por WhatsApp o mediante un enlace.

## Funcionalidades futuras

- **Sistema de intercambio** — permitirá intercambiar figuritas sueltas entre usuarios. Si a uno le sobra una figurita y a otro le falta, podrán intercambiarlas directamente desde la plataforma.
- **Ranking de progreso** — los usuarios podrán ver su posición en el ranking del club según el porcentaje del álbum completado. Una forma sana de competir y motivarse entre hinchas.
- **Nuevas figuritas y categorías** — se agregarán más jugadores, equipos históricos y categorías especiales para expandir la colección.
- **Logros y medallas** — al completar una página, abrir cierta cantidad de sobres o conseguir una figurita especial, se desbloquearán medallas que se pueden mostrar en el perfil.
- **Notificaciones diarias** — recordatorio automático cuando se habilite el sobre del día, así ningún hincha se pierde su figurita diaria.

---

*Hecho por Agustín Ramírez para el Club Social y Deportivo Pila*
