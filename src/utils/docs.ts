export interface Doc {
  id: string;
  title: string;
  description: string;
  use: string;
  resources: string[] | { title: string, link: string}[];
  screenshot?: string;
}

const docs: Doc[] = [
  {
    id: "get-ip",
    title: "Información de la IP",
    description:
      "Una dirección IP (Protocolo de Internet) es como la dirección de tu casa, pero para tu sitio web o dispositivo conectado a internet. La IP asociada a tu dominio se puede obtener consultando el Sistema de Nombres de Dominio (DNS), que actúa como una especie de guía telefónica de internet, buscando el registro A (dirección) de tu sitio.",
    use: "Encontrar la IP de un servidor es el primer paso para realizar investigaciones más profundas. Esto te permitirá conocer mejor la estructura de red de tu sitio, ubicar físicamente un servidor, saber qué servicio de hosting utilizas e incluso descubrir otros dominios que estén alojados en la misma IP. Todo esto es clave para entender cómo proteger mejor tu sitio y a tu comunidad.",
    resources: [
      { title: 'Comprender las Direcciones IP', link: 'https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking' },
      { title: 'Direcciones IP - Wiki', link: 'https://es.wikipedia.org/wiki/Dirección_IP' },
      { title: 'RFC-791 Protocolo de Internet', link: 'https://tools.ietf.org/html/rfc791' },
      { title: 'whatismyipaddress.com', link: 'https://whatismyipaddress.com/' },
    ],
  },
  {
    id: "ssl",
    title: "Cadena SSL",
    description:
      "Un certificado SSL es como el carnet de identidad de tu sitio web, que garantiza que eres quien dices ser y permite que la información entre tu sitio y las personas que lo visitan se transmita de forma segura y cifrada (a través de HTTPS). Estos certificados son emitidos por autoridades de certificación (CAs), quienes verifican la legitimidad de tu sitio para proteger a quienes te visitan.",
    use: "Además de garantizar que la transmisión de datos en tu sitio es segura, los certificados SSL ofrecen información valiosa para entender mejor la seguridad de tu plataforma. Puedes obtener detalles sobre quién emitió el certificado, para qué dominio, por cuánto tiempo es válido y, en algunos casos, detalles de la organización. Esto te puede ayudar a verificar que tu sitio es seguro o incluso descubrir subdominios o servicios relacionados.",
    resources: [
      { title: 'TLS - Wiki', link: 'https://es.wikipedia.org/wiki/Seguridad_de_la_capa_de_transporte' },
      { title: '¿Qué es SSL? (vía Cloudflare learning)', link: 'https://www.cloudflare.com/learning/ssl/what-is-ssl/' },
      { title: 'RFC-8446 - TLS', link: 'https://tools.ietf.org/html/rfc8446' },
      { title: 'Comprobador SSL', link: 'https://www.sslshopper.com/ssl-checker.html' },
    ],
    screenshot: 'https://i.ibb.co/kB7LsV1/wc-ssl.png',
  },
  {
    id: "dns",
    title: "Registros DNS",
    description:
      "El DNS es como la agenda telefónica de internet. Traduce el nombre de tu dominio (que las personas pueden recordar) en la dirección IP (que los computadores necesitan para encontrar tu sitio). Existen diferentes tipos de registros DNS, como A (dirección), MX (correo), NS (servidor de nombres), CNAME (nombre canónico), y TXT (texto), entre otros.",
    use: "Consultar los registros DNS de tu dominio puede revelarte información clave para entender cómo está estructurada tu plataforma en internet. Por ejemplo, los registros A y AAAA muestran las direcciones IP vinculadas a tu dominio, lo que te puede ayudar a localizar los servidores. Los registros MX pueden darte pistas sobre tu proveedor de correo. Los registros TXT a veces contienen detalles que, sin querer, podrían exponer información sensible sobre tu configuración. Conocer esta información te ayudará a mejorar la seguridad de tu infraestructura en línea.",
    resources: [
      { title: '¿Qué son los registros DNS? (vía Cloudflare learning)', link: 'https://www.cloudflare.com/learning/dns/dns-records/' },
      { title: 'Tipos de registros DNS', link: 'https://es.wikipedia.org/wiki/Tipos_de_registros_DNS' },
      { title: 'RFC-1035 - DNS', link: 'https://tools.ietf.org/html/rfc1035' },
      { title: 'Consulta DNS (vía MxToolbox)', link: 'https://mxtoolbox.com/DNSLookup.aspx' },
    ],
    screenshot: 'https://i.ibb.co/7Q1kMwM/wc-dns.png',
  },



  {
    id: "location",
    title: "Ubicación del Servidor",
    description:
      "La tarea de Ubicación del Servidor determina la ubicación física del servidor que aloja un sitio web dado, basado en su dirección IP. Esto se realiza buscando la IP en una base de datos de ubicación, que mapea la IP a una latitud y longitud de centros de datos y proveedores de servicios de Internet (ISP) conocidos. A partir de la latitud y longitud, es posible mostrar información contextual adicional, como un pin en el mapa, junto con la dirección, bandera, zona horaria, moneda, etc.",
    use: "Conocer la ubicación del servidor es un buen primer paso para entender mejor un sitio web. Para los propietarios del sitio, esto ayuda a optimizar la entrega de contenido, asegurar el cumplimiento de requisitos de residencia de datos y detectar posibles problemas de latencia que puedan afectar la experiencia del usuario en regiones geográficas específicas. Y para investigadores de seguridad, evalúa el riesgo que representan ciertas regiones o jurisdicciones en relación con amenazas cibernéticas y regulaciones.",
    resources: [
      { title: 'Localizador IP', link: 'https://geobytes.com/iplocator/' },
      { title: 'Geolocalización de Internet - Wiki', link: 'https://es.wikipedia.org/wiki/Geolocalizaci%C3%B3n_de_Internet' },
    ],
    screenshot: 'https://i.ibb.co/cXH2hfR/wc-location.png',
  },
  {
    id: "hosts",
    title: "Hosts Asociados",
    description:
      "Esta tarea implica identificar y listar todos los dominios y subdominios (nombres de host) que están asociados con el dominio principal del sitio web. Este proceso a menudo implica enumeración DNS para descubrir cualquier dominio y nombre de host enlazado, así como examinar registros DNS conocidos.",
    use: "Durante una investigación, comprender el alcance completo de la presencia web de un objetivo es crítico. Los dominios asociados podrían llevar a descubrir proyectos relacionados, sitios de respaldo, sitios de desarrollo/prueba, o servicios vinculados al sitio principal. Estos pueden proporcionar información adicional o posibles vulnerabilidades de seguridad. Una lista completa de dominios y nombres de host asociados también puede ofrecer una visión general de la estructura de la organización y su huella en línea.",
    resources: [
      { title: 'Enumeración DNS - Wiki', link: 'https://es.wikipedia.org/wiki/Enumeraci%C3%B3n_DNS' },
      { title: 'OWASP - Enumerar Aplicaciones en Servidor Web', link: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/04-Enumerate_Applications_on_Webserver' },
      { title: 'Enumeración DNS - DNS Dumpster', link: 'https://dnsdumpster.com/' },
      { title: 'Buscador de Subdominios', link: 'https://subdomainfinder.c99.nl/' },
    ],
    screenshot: 'https://i.ibb.co/25j1sT7/wc-hosts.png',
  },
  {
    id: "redirects",
    title: "Cadena de Redirección",
    description:
      "Esta tarea rastrea la secuencia de redirecciones HTTP que ocurren desde la URL original hasta la URL de destino final. Una redirección HTTP es una respuesta con un código de estado que aconseja al cliente ir a otra URL. Las redirecciones pueden ocurrir por varias razones, como la normalización de URL (dirigiendo a la versión www del sitio), forzar HTTPS, acortadores de URL, o redirigir a los usuarios a una nueva ubicación del sitio.",
    use: "Entender la cadena de redirección puede ser útil por varias razones. Desde una perspectiva de seguridad, cadenas de redirección largas o complicadas pueden ser una señal de riesgos potenciales de seguridad, como redirecciones no encriptadas en la cadena. Además, las redirecciones pueden impactar en el rendimiento del sitio web y SEO, ya que cada redirección introduce tiempo adicional de ida y vuelta (RTT). Para OSINT, comprender la cadena de redirección puede ayudar a identificar relaciones entre diferentes dominios o revelar el uso de ciertas tecnologías o proveedores de alojamiento.",
    resources: [
      { title: 'Redirecciones HTTP - MDN', link: 'https://developer.mozilla.org/es/docs/Web/HTTP/Redirections' },
      { title: 'Redirección de URL - Wiki', link: 'https://es.wikipedia.org/wiki/Redirecci%C3%B3n_de_URL' },
      { title: 'Redirecciones 301 explicadas', link: 'https://ahrefs.com/blog/301-redirects/' },
    ],
    screenshot: 'https://i.ibb.co/hVVrmwh/wc-redirects.png',
  },
  {
    id: "txt-records",
    title: "Registros TXT",
    description:
      "Los registros TXT son un tipo de registro DNS que proporciona información de texto a fuentes externas de tu dominio. Pueden ser utilizados para una variedad de propósitos, como verificar la propiedad del dominio, asegurar la seguridad del correo electrónico, e incluso prevenir cambios no autorizados en tu sitio web.",
    use: "Los registros TXT a menudo revelan qué servicios y tecnologías externas se están utilizando con un dominio dado. Pueden revelar detalles sobre la configuración de correo electrónico del dominio, el uso de servicios específicos como Google Workspace o Microsoft 365, o medidas de seguridad implementadas como SPF y DKIM. Comprender estos detalles puede dar una visión sobre las tecnologías utilizadas por la organización, sus prácticas de seguridad de correo electrónico y vulnerabilidades potenciales.",
    resources: [
      { title: 'Registros TXT (vía Cloudflare Learning)', link: 'https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/' },
      { title: 'Registros TXT - Wiki', link: 'https://es.wikipedia.org/wiki/TXT_record' },
      { title: 'RFC-1464 - Registros TXT', link: 'https://datatracker.ietf.org/doc/html/rfc1464' },
      { title: 'Búsqueda de Registros TXT (vía MxToolbox)', link: 'https://mxtoolbox.com/TXTLookup.aspx' },
    ],
    screenshot: 'https://i.ibb.co/wyt21QN/wc-txt-records.png',
  },
  {
    id: "status",
    title: "Estado del Servidor",
    description: "Verifica si un servidor está en línea y respondiendo a solicitudes.",
    use: "",
    resources: [],
    screenshot: 'https://i.ibb.co/V9CNLBK/wc-status.png',
  },
















  
  {
    id: "ports",
    title: "Puertos Abiertos",
    description:
      "Los puertos abiertos en un servidor son puntos de comunicación disponibles para establecer conexiones con los clientes. Cada puerto corresponde a un servicio o protocolo específico, como HTTP (puerto 80), HTTPS (puerto 443), FTP (puerto 21), etc. Los puertos abiertos en un servidor se pueden determinar utilizando técnicas como el escaneo de puertos.",
    use:
      "Conocer qué puertos están abiertos en tu servidor puede proporcionarte información sobre los servicios que se están ejecutando, lo cual es útil para entender las posibles vulnerabilidades del sistema o la naturaleza de los servicios que está ofreciendo el servidor.",
    resources: [
      { title: 'Lista de Números de Puertos TCP y UDP', link: 'https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers' },
      { title: 'NMAP - Fundamentos del Escaneo de Puertos', link: 'https://nmap.org/book/man-port-scanning-basics.html' },
    ],
    screenshot: 'https://i.ibb.co/F8D1hmf/wc-ports.png',
  },
  {
    id: "trace-route",
    title: "Traceroute",
    description:
      "Traceroute es una herramienta de diagnóstico de red utilizada para rastrear en tiempo real el camino que toma un paquete de información de un sistema a otro. Registra cada salto a lo largo de la ruta, proporcionando detalles sobre las IP de los routers y la demora en cada punto.",
    use:
      "En investigaciones de OSINT, traceroute puede ofrecer información sobre las rutas de enrutamiento y la geografía de la infraestructura de red que soporta un sitio web o servicio. Esto puede ayudarte a identificar cuellos de botella en la red, potencial censura o manipulación del tráfico de red, y brindarte una visión general de la estructura y eficiencia de la red. Además, las direcciones IP recopiladas durante el traceroute pueden ofrecer puntos adicionales de investigación para un análisis de OSINT más profundo.",
    resources: [
      "https://www.cloudflare.com/learning/network-layer/what-is-traceroute/",
      "https://tools.ietf.org/html/rfc1393",
      "https://en.wikipedia.org/wiki/Traceroute",
      "https://www.ripe.net/publications/docs/ripe-611",
    ],
    screenshot: 'https://i.ibb.co/M59qgxP/wc-trace-route.png',
  },
  {
    id: "carbon",
    title: "Huella de Carbono",
    description:
      "Esta tarea calcula la huella de carbono estimada de un sitio web. Se basa en la cantidad de datos transferidos y procesados, y el consumo de energía de los servidores que alojan y entregan el sitio web. Cuanto más grande sea el sitio y más complejas sus características, mayor será su huella de carbono.",
    use:
      "Desde una perspectiva de OSINT, entender la huella de carbono de un sitio web no proporciona información directa sobre su funcionamiento interno o la organización detrás de él. Sin embargo, puede ser un dato valioso en análisis más amplios, especialmente en contextos donde el impacto ambiental es una consideración. Por ejemplo, puede ser útil para activistas, investigadores o hackers éticos interesados en la sostenibilidad de la infraestructura digital y que deseen hacer responsables a las organizaciones por su impacto ambiental.",
    resources: [
      { title: 'WebsiteCarbon - Calculadora de Carbono', link: 'https://www.websitecarbon.com/' },
      { title: 'La Fundación Green Web', link: 'https://www.thegreenwebfoundation.org/' },
      { title: 'La Alianza de Webs Ecológicas', link: 'https://ecofriendlyweb.org/' },
      { title: 'Reset.org', link: 'https://en.reset.org/' },
      { title: 'Tu sitio web está matando el planeta - vía Wired', link: 'https://www.wired.co.uk/article/internet-carbon-footprint' },
    ],
    screenshot: 'https://i.ibb.co/5v6fSyw/Screenshot-from-2023-07-29-19-07-50.png',
  },
  {
    id: "server-info",
    title: "Información del Servidor",
    description:
      "Esta tarea recupera varias piezas de información sobre el servidor que aloja el sitio web objetivo. Esto puede incluir el tipo de servidor (por ejemplo, Apache, Nginx), el proveedor de alojamiento, el Número de Sistema Autónomo (ASN) y más. La información se obtiene generalmente a través de una combinación de búsquedas de direcciones IP y análisis de los encabezados de respuesta HTTP.",
    use:
      "En un contexto de OSINT, la información del servidor puede ofrecer pistas valiosas sobre la organización detrás de un sitio web. Por ejemplo, la elección del proveedor de alojamiento podría sugerir la región geográfica en la que opera la organización, mientras que el tipo de servidor podría indicar las tecnologías utilizadas. El ASN también podría usarse para encontrar otros dominios alojados por la misma organización.",
    resources: [
      "https://en.wikipedia.org/wiki/List_of_HTTP_header_fields",
      "https://en.wikipedia.org/wiki/Autonomous_system_(Internet)",
      "https://tools.ietf.org/html/rfc7231#section-7.4.2",
      "https://builtwith.com/",
    ],
    screenshot: 'https://i.ibb.co/Mk1jx32/wc-server.png',
  },
  {
    id: "domain",
    title: "Consulta Whois",
    description:
      "Esta tarea recupera registros Whois para el dominio objetivo. Los registros Whois son una rica fuente de información, incluyendo el nombre y la información de contacto del registrante del dominio, las fechas de creación y expiración del dominio, los servidores de nombres del dominio y más. La información se obtiene generalmente a través de una consulta a un servidor de base de datos Whois.",
    use:
      "En un contexto de OSINT, los registros Whois pueden proporcionar pistas valiosas sobre la entidad detrás de un sitio web. Pueden mostrar cuándo se registró por primera vez el dominio y cuándo se establece su expiración, lo que podría ofrecer información sobre la línea de tiempo operativa de la entidad. La información de contacto, aunque a menudo está redactada o anonimizada, a veces puede conducir a avenidas adicionales de investigación. Los servidores de nombres también podrían usarse para vincular múltiples dominios propiedad de la misma entidad.",
    resources: [
      "https://en.wikipedia.org/wiki/WHOIS",
      "https://www.icann.org/resources/pages/whois-2018-01-17-en",
      "https://whois.domaintools.com/",
    ],
    screenshot: 'https://i.ibb.co/89WLp14/wc-domain.png',
  },
  {
    id: "whois",
    title: "Información del Dominio",
    description:
      "Esta tarea recupera registros Whois para el dominio objetivo. Los registros Whois son una rica fuente de información, incluyendo el nombre y la información de contacto del registrante del dominio, las fechas de creación y expiración del dominio, los servidores de nombres del dominio y más. La información se obtiene generalmente a través de una consulta a un servidor de base de datos Whois.",
    use:
      "En un contexto de OSINT, los registros Whois pueden proporcionar pistas valiosas sobre la entidad detrás de un sitio web. Pueden mostrar cuándo se registró por primera vez el dominio y cuándo se establece su expiración, lo que podría ofrecer información sobre la línea de tiempo operativa de la entidad. La información de contacto, aunque a menudo está redactada o anonimizada, a veces puede conducir a avenidas adicionales de investigación. Los servidores de nombres también podrían usarse para vincular múltiples dominios propiedad de la misma entidad.",
    resources: [
      "https://en.wikipedia.org/wiki/WHOIS",
      "https://www.icann.org/resources/pages/whois-2018-01-17-en",
      "https://whois.domaintools.com/",
    ],
    screenshot: 'https://i.ibb.co/89WLp14/wc-domain.png',
  },
  















  {
    id: "dnssec",
    title: "Extensiones de Seguridad DNS (DNSSEC)",
    description:
      "Sin DNSSEC, los atacantes pueden interceptar o falsificar los registros DNS de tu dominio, redirigiendo a los usuarios a sitios de phishing. Esto ocurre porque el sistema DNS no tiene formas integradas para verificar si la respuesta fue alterada o si un atacante interrumpió la comunicación. Las extensiones de seguridad DNS (DNSSEC) protegen las consultas DNS firmando los registros de tu dominio con claves públicas, lo que permite a los navegadores detectar si la respuesta ha sido manipulada. Otras soluciones incluyen DNS sobre HTTPS (DoH) y DNS sobre TLS (DoT).",
    use: 
      "La implementación de DNSSEC en tu dominio demuestra un mayor nivel de seguridad digital, especialmente para evitar ataques de suplantación y envenenamiento de caché DNS. Si tu dominio no tiene DNSSEC, DoH o DoT, esto podría ser una vía de entrada para un atacante.",
    resources: [
      "https://dnssec-analyzer.verisignlabs.com/",
      "https://www.cloudflare.com/dns/dnssec/how-dnssec-works/",
      "https://es.wikipedia.org/wiki/Extensiones_de_seguridad_del_sistema_de_nombres_de_dominio",
      "https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en",
      "https://support.google.com/domains/answer/6147083",
      "https://www.internetsociety.org/resources/deploy360/2013/dnssec-test-sites/",
    ],
    screenshot: 'https://i.ibb.co/J54zVmQ/wc-dnssec.png',
  },
  {
    id: "features",
    title: "Características del Sitio",
    description: 'Verifica qué características principales están activas en un sitio web. Si alguna aparece como inactiva, significa que no está siendo utilizada durante la carga del sitio.',
    use: "Esto te ayuda a comprender las capacidades de tu sitio y qué tecnologías están activas o faltantes.",
    resources: [],
    screenshot: 'https://i.ibb.co/gP4P6kp/wc-features.png',
  },
  {
    id: "hsts",
    title: "Seguridad de Transporte Estricta HTTP (HSTS)",
    description: 'HTTP Strict Transport Security (HSTS) es un mecanismo de seguridad web que protege a tu sitio de ataques que intentan degradar el protocolo y robar cookies. Un sitio puede incluirse en la lista de precarga HSTS si cumple con ciertos requisitos y se envía para su inclusión en esa lista.',
    use: `Es importante que tu sitio tenga HSTS por varias razones:
    1. Si alguien escribe manualmente "http://tu-dominio.com", podría ser víctima de un ataque man-in-the-middle.
      HSTS redirige automáticamente cualquier solicitud HTTP a HTTPS en tu dominio.
    2. Si tu aplicación web debería usar solo HTTPS pero contiene enlaces HTTP por error, HSTS los redirigirá automáticamente a HTTPS.
    3. Si un atacante intenta interceptar el tráfico utilizando un certificado inválido, HSTS evitará que los usuarios lo acepten por error.`,
    resources: [
      'https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Strict-Transport-Security',
      'https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html',
      'https://hstspreload.org/'
    ],
    screenshot: 'https://i.ibb.co/k253fq4/Screenshot-from-2023-07-17-20-10-52.png',
  },
  {
    id: 'dns-server',
    title: 'Servidor DNS',
    description: 'Este análisis identifica los servidores DNS a los que apunta tu dominio, y también revisa si soportan DNS sobre HTTPS (DoH) y si son vulnerables a envenenamiento de caché DNS.',
    use: 'Comprender qué servidores DNS utiliza tu dominio puede ayudarte a diagnosticar problemas de seguridad y evaluar posibles vulnerabilidades.',
    resources: [],
    screenshot: 'https://i.ibb.co/tKpL8F9/Screenshot-from-2023-08-12-15-43-12.png',
  },
  {
    id: 'tech-stack',
    title: 'Pila Tecnológica',
    description: 'Verifica las tecnologías con las que está construido tu sitio web. Este análisis se realiza comparando la estructura de tu sitio con una lista de huellas digitales tecnológicas que identifican diferentes plataformas y tecnologías.',
    use: 'Identificar la pila tecnológica de tu sitio ayuda a evaluar posibles vulnerabilidades de seguridad, así como a mejorar el desarrollo o la toma de decisiones estratégicas. Es fundamental aplicar este conocimiento de manera ética para evitar actividades dañinas como el robo de datos o intrusiones no autorizadas.',
    resources: [
      { title: 'Huellas digitales de Wappalyzer', link: 'https://github.com/wappalyzer/wappalyzer/tree/master/src/technologies'},
      { title: 'BuiltWith - Revisa qué tecnologías usa un sitio', link: 'https://builtwith.com/'},
    ],
    screenshot: 'https://i.ibb.co/bBQSQNz/Screenshot-from-2023-08-12-15-43-46.png',
  },
  {
    id: 'sitemap',
    title: 'Páginas Listadas',
    description: 'Este análisis encuentra y analiza el archivo de sitemap de tu sitio. Este archivo enumera las subpáginas públicas que deseas que los motores de búsqueda indexen. Los sitemaps no solo son útiles para el SEO, sino también para tener una visión general del contenido público de tu sitio.',
    use: 'Te permite entender la estructura del contenido público de tu sitio y, si eres el propietario, verificar que tu sitemap sea accesible, procesable y que contenga todo lo que deseas que se indexe.',
    resources: [
      { title: 'Aprende sobre los sitemaps', link: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview'},
      { title: 'Especificación de sitemap XML', link: 'https://www.sitemaps.org/protocol.html'},
      { title: 'Tutorial de sitemap', link: 'https://www.conductor.com/academy/xml-sitemap/'},
    ],
    screenshot: 'https://i.ibb.co/GtrCQYq/Screenshot-from-2023-07-21-12-28-38.png',
  },
  {
    id: 'security-txt',
    title: 'Security.txt',
    description: "El archivo security.txt indica a los investigadores de seguridad cómo pueden reportar de forma responsable cualquier problema que encuentren en tu sitio. Este estándar fue propuesto en el RFC 9116, y especifica que el archivo debe incluir un punto de contacto (correo electrónico) y, opcionalmente, información adicional como una política de divulgación, clave PGP y más. El archivo debe ubicarse en la raíz de tu dominio, en /security.txt o /.well-known/security.txt.",
    use: "Tener un archivo security.txt es importante, ya que sin un punto de contacto definido, un investigador de seguridad podría no ser capaz de reportar un problema crítico o podría utilizar canales inseguros para hacerlo. Desde una perspectiva de investigación OSINT, este archivo también puede proporcionar información sobre la postura de seguridad del sitio, su proveedor de CSAF y metadatos de la clave pública PGP.",
    resources: [
      { title: 'securitytxt.org', link: 'https://securitytxt.org/'},
      { title: 'RFC-9116 Propuesta', link: 'https://datatracker.ietf.org/doc/html/rfc9116'},
      { title: 'Historia del RFC-9116', link: 'https://datatracker.ietf.org/doc/rfc9116/'},
      { title: 'Security.txt (Wikipedia)', link: 'https://es.wikipedia.org/wiki/Security.txt'},
      { title: 'Ejemplo de security.txt (Cloudflare)', link: 'https://www.cloudflare.com/.well-known/security.txt'},
      { title: 'Tutorial para crear security.txt (Pieter Bakker)', link: 'https://pieterbakker.com/implementing-security-txt/'},
    ],
    screenshot: 'https://i.ibb.co/tq1FT5r/Screenshot-from-2023-07-24-20-31-21.png',
  },












  {
    id: 'linked-pages',
    title: 'Páginas Vinculadas',
    description: 'Muestra todos los enlaces internos y externos encontrados en un sitio, identificados por los atributos href de los elementos de anclaje (a).',
    use: "Para ti, como administrador del sitio, esto es útil para diagnosticar problemas de SEO, mejorar la estructura del sitio y entender cómo se conecta el contenido entre sí. Los enlaces externos pueden mostrar asociaciones, dependencias y posibles riesgos para la reputación. " +
    "Desde el punto de vista de la seguridad, los enlaces salientes pueden ayudar a identificar si estás vinculando sin saberlo a sitios maliciosos o comprometidos. Analizar los enlaces internos te puede ayudar a entender mejor la estructura de tu sitio y descubrir páginas ocultas o vulnerables que no estaban destinadas a ser públicas. " +
    "Para quienes investigan con OSINT, esto puede ayudar a construir una comprensión más amplia del objetivo, descubriendo entidades relacionadas, recursos o incluso partes ocultas del sitio.",
    resources: [
      { title: 'W3C Verificador de Enlaces', link: 'https://validator.w3.org/checklink'},
    ],
    screenshot: 'https://i.ibb.co/LtK14XR/Screenshot-from-2023-07-29-11-16-44.png',
  },
  {
    id: 'social-tags',
    title: 'Etiquetas Sociales',
    description: 'Los sitios web pueden incluir ciertas etiquetas meta que le dicen a los motores de búsqueda y a las plataformas sociales qué información mostrar. Esto normalmente incluye un título, descripción, miniatura, palabras clave, autor, cuentas sociales, etc.',
    use: 'Agregar estos datos a tu sitio puede mejorar el SEO, y como investigador de OSINT, puede ser útil para entender cómo una aplicación web se describe a sí misma.',
    resources: [
      { title: 'SocialSharePreview.com', link: 'https://socialsharepreview.com/'},
      { title: 'Guía de etiquetas sociales', link: 'https://css-tricks.com/essential-meta-tags-social-media/'},
      { title: 'Web.dev etiquetas de metadatos', link: 'https://web.dev/learn/html/metadata/'},
      { title: 'Protocolo Open Graph', link: 'https://ogp.me/'},
      { title: 'Twitter Cards', link: 'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards'},
      { title: 'Facebook Open Graph', link: 'https://developers.facebook.com/docs/sharing/webmasters'},
    ],
    screenshot: 'https://i.ibb.co/4srTT1w/Screenshot-from-2023-07-29-11-15-27.png',
  },
  {
    id: 'mail-config',
    title: 'Configuración de Email',
    description: "DMARC (Autenticación, Reportes y Conformidad Basados en Dominio): DMARC es un protocolo de autenticación de correos que funciona con SPF y DKIM para evitar suplantación de identidad y phishing. Permite a los propietarios de dominios especificar cómo manejar correos no autenticados mediante una política publicada en DNS, y provee una forma para que los servidores de correo den retroalimentación sobre el cumplimiento de los emails. " +
    "BIMI (Indicadores de Marca para Identificación de Mensajes): BIMI es un estándar emergente que permite a las organizaciones mostrar un logotipo automáticamente en los correos electrónicos de sus clientes. BIMI asocia el logotipo con el registro DMARC del dominio, proporcionando un nivel adicional de confianza visual. " +
    "DKIM (Correos Identificados por Claves de Dominio): DKIM es un estándar de seguridad de email diseñado para asegurar que los mensajes no fueron alterados durante su tránsito entre el servidor de envío y el servidor de recepción. Utiliza firmas digitales vinculadas al dominio del remitente para verificar la identidad y garantizar la integridad del mensaje. " +
    "SPF (Marco de Políticas del Remitente): SPF es un método de autenticación de correo diseñado para prevenir la suplantación de identidad en correos electrónicos. Especifica qué servidores de correo están autorizados para enviar emails en nombre de un dominio mediante la creación de un registro DNS.",
    use: "Esta información es útil para investigar la seguridad del correo de un dominio, descubrir posibles vulnerabilidades y verificar la legitimidad de correos electrónicos para detectar phishing. Estos detalles también pueden proporcionar información sobre el entorno de hosting, los proveedores de servicios y los patrones de configuración de una organización, lo cual es útil en esfuerzos de investigación.",
    resources: [
      { title: 'Introducción a DMARC, DKIM y SPF (via Cloudflare)', link: 'https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/' },
      { title: 'EasyDMARC Domain Scanner', link: 'https://easydmarc.com/tools/domain-scanner' },
      { title: 'MX Toolbox', link: 'https://mxtoolbox.com/' },
      { title: 'RFC-7208 - SPF', link: 'https://datatracker.ietf.org/doc/html/rfc7208' },
      { title: 'RFC-6376 - DKIM', link: 'https://datatracker.ietf.org/doc/html/rfc6376' },
      { title: 'RFC-7489 - DMARC', link: 'https://datatracker.ietf.org/doc/html/rfc7489' },
      { title: 'BIMI Group', link: 'https://bimigroup.org/' },
    ],
    screenshot: 'https://i.ibb.co/yqhwx5G/Screenshot-from-2023-07-29-18-22-20.png',
  },
  {
    id: 'firewall',
    title: 'Detección de Firewalls',
    description: 'Un WAF (firewall de aplicación web) ayuda a proteger aplicaciones web filtrando y monitoreando el tráfico HTTP entre una aplicación y la Internet. Normalmente protege a las aplicaciones de ataques como falsificación de solicitudes (CSRF), secuencias de comandos en sitios cruzados (XSS), inclusión de archivos y SQL Injection, entre otros.',
    use: 'Es útil saber si un sitio está usando un WAF, y qué software o servicio de firewall está usando, ya que esto proporciona información sobre la protección del sitio contra varios vectores de ataque, pero también puede revelar vulnerabilidades en el firewall mismo.',
    resources: [
      { title: '¿Qué es un WAF? (via Cloudflare Learning)', link: 'https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/' },
      { title: 'OWASP - Firewalls de Aplicaciones Web', link: 'https://owasp.org/www-community/Web_Application_Firewall' },
      { title: 'Mejores prácticas para WAF', link: 'https://owasp.org/www-pdf-archive/Best_Practices_Guide_WAF_v104.en.pdf' },
      { title: 'WAF - Wiki', link: 'https://en.wikipedia.org/wiki/Web_application_firewall' },
    ],
    screenshot: 'https://i.ibb.co/MfcxQt2/Screenshot-from-2023-08-12-15-40-52.png',
  },






















  {
    id: 'http-security',
    title: 'Características de Seguridad HTTP',
    description: 'Configurar correctamente los encabezados de seguridad HTTP añade una capa de protección contra ataques comunes a tu sitio. Los principales encabezados a tener en cuenta son: '
      + 'HTTP Strict Transport Security (HSTS): Obliga el uso de HTTPS, mitigando ataques de tipo "man-in-the-middle" y intentos de degradación de protocolo. '
      + 'Content Security Policy (CSP): Restringe los recursos de la página web para prevenir ataques de "cross-site scripting" e inyección de datos. '
      + 'X-Content-Type-Options: Impide que los navegadores "adivinen" un tipo de contenido diferente al declarado, evitando confusiones de tipo MIME. '
      + 'X-Frame-Options: Protege a los usuarios de ataques de clickjacking controlando si un navegador debe renderizar la página en un <frame>, <iframe>, <embed> u <object>.',
    use: 'Revisar los encabezados de seguridad es importante, ya que ofrece una visión sobre la postura defensiva de tu sitio y las vulnerabilidades potenciales, permitiendo una mitigación proactiva y asegurando el cumplimiento de las mejores prácticas de seguridad.',
    resources: [
      { title: 'Proyecto de Encabezados Seguros de OWASP', link: 'https://owasp.org/www-project-secure-headers/' },
      { title: 'Guía de Encabezados HTTP', link: 'https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html' },
      { title: 'content-security-policy.com', link: 'https://content-security-policy.com/' },
      { title: 'resourcepolicy.fyi', link: 'https://resourcepolicy.fyi/' },
      { title: 'Encabezados de Seguridad HTTP', link: 'https://securityheaders.com/' },
      { title: 'Mozilla Observatory', link: 'https://observatory.mozilla.org/' },
      { title: 'Documentación de CSP', link: 'https://developer.mozilla.org/es/docs/Web/HTTP/CSP' },
      { title: 'Documentación de HSTS', link: 'https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Strict-Transport-Security' },
      { title: 'Documentación de X-Content-Type-Options', link: 'https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-Content-Type-Options' },
      { title: 'Documentación de X-Frame-Options', link: 'https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-Frame-Options' },
      { title: 'Documentación de X-XSS-Protection', link: 'https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-XSS-Protection' },
    ],
    screenshot: 'https://i.ibb.co/LP05HMV/Screenshot-from-2023-08-12-15-40-28.png',
  },
  {
    id: 'archives',
    title: 'Historial de Archivos',
    description: 'Recupera el historial completo de archivos de la máquina Wayback',
    use: 'Esto es útil para entender la historia de tu sitio y cómo ha cambiado con el tiempo. También puede ser útil para encontrar versiones antiguas de tu sitio o para localizar contenido que ha sido eliminado.',
    resources: [
      { title: 'Wayback Machine', link: 'https://archive.org/web/' },
    ],
    screenshot: 'https://i.ibb.co/nB9szT1/Screenshot-from-2023-08-14-22-31-16.png',
  },
  {
    id: 'rank',
    title: 'Ranking Global',
    description: 'Esta verificación muestra el ranking global del sitio solicitado. Esto es preciso solo para sitios que están en la lista de los 100 millones más importantes. Estamos utilizando datos del proyecto Tranco (ver abajo), que recopila los principales sitios en la web de Umbrella, Majestic, Quantcast, el Informe de Experiencia del Usuario de Chrome y Cloudflare Radar.',
    use: 'Conocer el ranking global de un sitio puede ser útil para entender la escala de tu sitio y compararlo con otros. También puede ser útil para comprender la popularidad relativa de un sitio e identificar tendencias potenciales.',
    resources: [
      { title: 'Lista Tranco', link: 'https://tranco-list.eu/' },
      { title: 'Artículo de Investigación de Tranco', link: 'https://tranco-list.eu/assets/tranco-ndss19.pdf' },
    ],
    screenshot: 'https://i.ibb.co/nkbczgb/Screenshot-from-2023-08-14-22-02-40.png',
  },
  {
    id: 'block-lists',
    title: 'Detección de Bloqueos',
    description: 'Verifica el acceso a la URL utilizando más de 10 de los servidores DNS más populares de privacidad, malware y control parental.',
    use: '',
    resources: [
      { title: 'Listas ThreatJammer', link: 'https://threatjammer.com/osint-lists' },
    ],
    screenshot: 'https://i.ibb.co/M5JSXbW/Screenshot-from-2023-08-26-12-12-43.png',
  },
  {
    id: 'threats',
    title: 'Detección de Malware y Phishing',
    description: 'Verifica si un sitio aparece en varias listas comunes de malware y phishing, para determinar su nivel de amenaza.',
    use: 'Saber si un sitio está listado como amenaza por alguno de estos servicios puede ser útil para entender la reputación de tu sitio e identificar tendencias potenciales.',
    resources: [
      { title: 'URLHaus', link: 'https://urlhaus-api.abuse.ch/' },
      { title: 'PhishTank', link: 'https://www.phishtank.com/' },
    ],
    screenshot: 'https://i.ibb.co/hYgy621/Screenshot-from-2023-08-26-12-07-47.png',
  },















  {
    id: 'tls-cipher-suites',
    title: 'Conjuntos de Cifrado TLS',
    description: 'Estos son combinaciones de algoritmos criptográficos que utiliza tu servidor para establecer una conexión segura. Incluyen el algoritmo de intercambio de claves, el algoritmo de cifrado en bloque, el algoritmo de MAC y la PRF (función pseudorandom).',
    use: 'Esta información es importante para evaluar la seguridad. Un conjunto de cifrado es tan seguro como los algoritmos que contiene. Si la versión de un algoritmo de cifrado o autenticación tiene vulnerabilidades conocidas, el conjunto de cifrado y la conexión TLS podrían estar expuestos a ataques como el downgrade.',
    resources: [
      { title: 'sslscan2 CLI', link: 'https://github.com/rbsec/sslscan' },
      { title: 'ssl-enum-ciphers (script NPMAP)', link: 'https://nmap.org/nsedoc/scripts/ssl-enum-ciphers.html' }
    ],
    screenshot: 'https://i.ibb.co/6ydtH5R/Screenshot-from-2023-08-26-12-09-58.png',
},
{
    id: 'tls-security-config',
    title: 'Configuración de Seguridad TLS',
    description: 'Este chequeo utiliza las pautas del TLS Observatory de Mozilla para revisar la seguridad de la configuración TLS. Verifica configuraciones inseguras que podrían dejar tu sitio vulnerable a ataques y brinda consejos para corregirlas. También sugiere configuraciones TLS modernas y obsoletas.',
    use: 'Entender los problemas con la configuración TLS de tu sitio te ayudará a abordar vulnerabilidades potenciales y asegurarte de que tu sitio utilice la configuración TLS más segura y actualizada.',
    resources: [],
    screenshot: 'https://i.ibb.co/FmksZJt/Screenshot-from-2023-08-26-12-12-09.png',
},
{
    id: 'tls-client-support',
    title: 'Simulación de Handshake TLS',
    description: 'Esta función simula cómo diferentes clientes (navegadores, sistemas operativos) realizarían un handshake TLS con tu servidor. Ayuda a identificar problemas de compatibilidad y configuraciones inseguras.',
    use: '',
    resources: [
      { title: 'Handshakes TLS (a través de Cloudflare Learning)', link: 'https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/' },
      { title: 'Prueba SSL (a través de SSL Labs)', link: 'https://www.ssllabs.com/ssltest/' },
    ],
    screenshot: 'https://i.ibb.co/F7qRZkh/Screenshot-from-2023-08-26-12-11-28.png',
},
{
    id: 'screenshot',
    title: 'Captura de Pantalla',
    description: 'Esta función toma una captura de pantalla de la página web a la que resuelve la URL/IP solicitada y la muestra.',
    use: 'Esto puede ser útil para ver cómo se ve un sitio web sin las limitaciones de tu navegador, IP o ubicación.',
    resources: [],
    screenshot: 'https://i.ibb.co/2F0x8kP/Screenshot-from-2023-07-29-18-34-48.png',
},

];

export const featureIntro = [
  'Cuando realizas una investigación OSINT en un sitio web o servidor, hay varias áreas clave que debes revisar. Cada una de ellas está documentada a continuación, junto con enlaces a las herramientas y técnicas que puedes usar para recopilar la información relevante.',
  'Vení OSINT puede automatizar el proceso de recopilación de estos datos, pero será tu responsabilidad interpretar los resultados y sacar conclusiones.',
];


export const about = [
  `Veni OSINT es una herramienta integral basada en el proyecto de código abierto desarrollado por <a href="https://aliciasykes.com" target="_blank">Alicia Sykes</a>, diseñada para descubrir y visualizar la información pública que tu sitio web o servidor entrega. El propósito de Veni OSINT es claro: brindar a activistas, periodistas, personas defensoras de derechos humanos y movimientos sociales un recurso sencillo para identificar oportunidades de mejora en la seguridad de sus plataformas digitales.`,

  `Al ingresar la URL de tu sitio, <strong>Veni OSINT</strong> recopila y presenta una amplia gama de datos públicos y abiertos que, debido a la forma en que funcionan los sitios web, son accesibles públicamente. Estos datos incluyen metadatos, configuraciones del servidor y otros elementos que pueden ayudarte a comprender mejor cómo proteger tu sitio. La herramienta ilumina áreas donde se pueden fortalecer las medidas de seguridad, mostrando las conexiones internas del sitio y su estructura.`,
  
  `Además de señalar áreas de oportunidad para optimizar la seguridad, los resultados pueden ayudarte a ajustar la respuesta del servidor, configurar redirecciones de manera más segura, gestionar cookies o afinar los registros DNS de tu sitio.`,
  
  `Ya seas parte de una organización de derechos humanos, un medio independiente o una red de activismo digital, <strong>Veni OSINT</strong> te proporciona el conocimiento necesario para mejorar la seguridad de tu entorno en línea. Este recurso te ayudará a tomar decisiones informadas y mantener tus plataformas protegidas, contribuyendo a la protección de tu trabajo y de tu comunidad.`,
];

export const license = `The MIT License (MIT)
Copyright (c) Alicia Sykes <alicia@omg.com> 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included install 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;

export const supportUs = [
  "Web-Check is free to use without restriction.",
  "All the code is open source, so you're also free to deploy your own instance, as well as fork, modify and distribute the code in both private and commerical settings.",
  "Running web-check does cost me a small amount of money each month, so if you're finding the app useful, consider <a href='https://github.com/sponsors/Lissy93'>sponsoring me on GitHub</a> if you're able to. Even just $1 or $2/month would be a huge help in supporting the ongoing project running costs.",
  "Otherwise, there are other ways you can help out, like submitting or reviewing a pull request to the <a href='https://github.com/Lissy93/web-check'>GitHub repo</a>, upvoting us on <a href='https://www.producthunt.com/posts/web-check'>Product Hunt</a>, or by sharing with your network.",
  "But don't feel obliged to do anything, as this app (and all my other projects) will always remain 100% free and open source, and I will do my best to ensure the managed instances remain up and available for as long as possible :)",
];

export const fairUse = [
  'Por favor, utiliza esta herramienta de manera responsable. No la uses para escanear hosts para los que no tienes permiso. No la uses como parte de un plan para atacar o interrumpir servicios.',
  'Por favor, úsala de forma justa, ya que un uso excesivo agotará rápidamente los créditos de la función lambda, haciendo que el servicio no esté disponible para otros (y/o vaciando nuestra cuenta bancaria 😅).',
];


export default docs;
