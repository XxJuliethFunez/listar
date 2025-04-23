# 🌐 Implementación de una Aplicación Web en Azure

Este proyecto demuestra cómo desarrollar una aplicación web sencilla con **Node.js** y **Express.js**, y cómo desplegarla en la nube utilizando una **máquina virtual en Microsoft Azure**. Además, se configura un **proxy inverso con Apache** y se habilita **HTTPS con Certbot**, asegurando una conexión segura para los usuarios.

---

## 🚀 Objetivo del Proyecto

- Crear una aplicación backend con Node.js y Express.js.
- Alojamiento en la nube (Azure).
- Configuración de proxy inverso (Apache).
- Habilitar HTTPS con Certbot para seguridad SSL.

Este proceso es fundamental para cualquier desarrollador que quiera aprender a desplegar aplicaciones reales en un entorno productivo y seguro.

---

## 🛠️ Tecnologías Utilizadas

| Herramienta     | Descripción |
|-----------------|-------------|
| Node.js         | Entorno de ejecución para JavaScript en el servidor |
| Express.js      | Framework minimalista para crear servidores y APIs |
| Apache2         | Servidor HTTP que actúa como proxy inverso |
| Ubuntu          | Sistema operativo de la máquina virtual en Azure |
| Certbot         | Herramienta para generar certificados SSL gratuitos (Let's Encrypt) |
| Azure           | Plataforma de nube donde se aloja la aplicación |
| Git & GitHub    | Control de versiones y colaboración en el código |

---

## 📦 Estructura del Proyecto

```
listar/
├── app.js               # Archivo principal del servidor Express
├── package.json         # Lista de dependencias
├── public/              # Archivos estáticos (HTML, CSS)
├── README.md            # Documentación del proyecto
└── ...
```

---

## 🧪 Pasos para Ejecutar el Proyecto Localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/XxJuliethFunez/listar.git
   cd listar
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor:
   ```bash
   node app.js
   ```

4. Abre tu navegador en:
   ```
   http://localhost:3000
   ```

---

## ☁️ Pasos para Despliegue en Azure

1. Crea una máquina virtual en Azure (Ubuntu).
2. Conéctate mediante SSH:
   ```bash
   ssh usuario@ip-publica
   ```
3. Instala Node.js, Apache y Certbot.
4. Clona este repositorio y ejecuta la app.
5. Configura Apache como proxy inverso.
6. Usa Certbot para habilitar HTTPS:
   ```bash
   sudo certbot --apache
   ```

---

## 🔐 Seguridad y HTTPS

Con Certbot, el sitio se protege con un certificado SSL de Let's Encrypt, mostrando el candado 🔒 en el navegador. Esto asegura la confidencialidad y confianza de los usuarios al acceder a la aplicación.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes hacer un fork del repositorio, trabajar en una rama y luego hacer un pull request. Este proyecto es ideal para practicar despliegue en la nube y DevOps básico.

---

## 👩‍💻 Autor

**Julieth Funez**  
Repositorio del proyecto: [github.com/XxJuliethFunez/listar](https://github.com/XxJuliethFunez/listar)

