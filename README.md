# 🚀 MIRC - Landing Page Corporativa

**Mantenimiento Integral & Reparaciones Corporativas**

Landing page profesional e institucional con estética cyberpunk/futurista inspirada en mIRC 32. Diseño responsivo, moderno y de alta performance.

---

## 📋 Características Principales

✅ **Diseño 100% Responsivo** - Funciona perfectamente en desktop, tablet y mobile  
✅ **Estética Cyberpunk Futurista** - Efectos neón, bordes iluminados y transiciones suaves  
✅ **Logo MIRC en CSS Puro** - Sin dependencias de imágenes externas para el branding  
✅ **8 Secciones Completas** - Desde hero hasta contacto y cotizaciones  
✅ **Formulario Interactivo** - Validación en tiempo real y notificaciones  
✅ **Botón WhatsApp Flotante** - Con efecto de pulso contínuo  
✅ **Optimizado para SEO** - Semántica HTML5 correcta  
✅ **Performance Optimizado** - CSS sin frameworks, código limpio y modular  

---

## 📁 Estructura de Archivos

```
MIRC-Landing/
├── index.html          # Estructura semántica HTML5
├── styles.css          # Estilos responsivos y efectos neón
├── script.js           # Interactividad y validación
└── README.md           # Este archivo
```

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Verde Neón** | `#00ff66` | Acento principal, botones, bordes |
| **Verde Neón Alt** | `#39ff14` | Variante matriz |
| **Negro Profundo** | `#0a0b0d` | Fondo principal |
| **Gris Oscuro** | `#12141c` | Fondo de secciones |
| **Blanco Puro** | `#ffffff` | Títulos y texto primario |
| **Gris Claro** | `#a0a5b5` | Texto secundario |

---

## 🚀 Cómo Usar

### Opción 1: Archivos Locales (Recomendado)

1. **Crea una carpeta** en tu máquina:
   ```bash
   mkdir MIRC-Landing
   cd MIRC-Landing
   ```

2. **Copia los archivos** `index.html`, `styles.css` y `script.js` en la carpeta

3. **Abre directamente** en tu navegador:
   - Haz doble clic en `index.html`, O
   - Arrastra `index.html` a tu navegador

### Opción 2: Con VS Code Live Server

1. **Abre la carpeta** en VS Code
2. **Instala la extensión** "Live Server" (by Ritwick Dey)
3. **Haz clic derecho** en `index.html` → "Open with Live Server"
4. La página se abrirá en `http://localhost:5500`

### Opción 3: Con Python (Servidor Local Rápido)

```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

---

## 📱 Secciones Incluidas

### 1. **Header / Navegación**
- Logo MIRC en CSS puro con efecto de línea cinética
- Menú de navegación con efecto hover
- Botón "Solicitar Cotización" con pulso neón

### 2. **Hero Section**
- Título impactante en mayúsculas
- Imagen de fondo con gradiente oscuro
- Dos botones de acción rápida

### 3. **Panel de Clientes**
- Marquesina de empresas homologadas (BARRICK, TECHINT, ECOGAS, etc.)
- Efecto brillo al pasar el mouse

### 4. **Divisiones Operativas**
- 3 tarjetas con imágenes representativas
- Descripción detallada de servicios
- Animaciones de elevación y brillo

### 5. **Respaldo Institucional**
- 4 bloques de certificaciones
- Estructura Fiscal, Homologación, Seguridad, Logística
- Iconos y descripciones claras

### 6. **Circuito Administrativo**
- Timeline visual de 4 pasos
- Numeración, títulos y descripciones
- Flechas direccionales en desktop

### 7. **Formulario de Contacto**
- Campos: Empresa, Teléfono, Tipo de Servicio, Detalles
- Validación en tiempo real
- Panel de información del Taller Central

### 8. **Footer + Botón WhatsApp**
- Pie de página con copyright
- Botón flotante con efecto de pulso
- Enlace directo a WhatsApp Business

---

## ⚙️ Personalización

### Cambiar Colores

En `styles.css`, busca `:root` y modifica las variables CSS:

```css
:root {
    --color-primary: #00ff66;           /* Verde neón principal */
    --color-bg-dark: #0a0b0d;           /* Fondo negro */
    --color-text-primary: #ffffff;      /* Texto blanco */
    /* ... */
}
```

### Cambiar Información de Contacto

En `index.html`, busca y modifica:

```html
<!-- Información del Taller -->
<h3>TALLER CENTRAL SAN JUAN</h3>
<p><strong>Dirección:</strong> [Tu dirección]</p>
<p><strong>Atención:</strong> [Tu horario]</p>

<!-- WhatsApp -->
<a href="https://wa.me/[TU_NUMERO]?text=Hola">
```

### Agregar Más Clientes

En la sección de "CAPACIDAD OPERATIVA":

```html
<div class="client-badge">NOMBRE EMPRESA</div>
```

### Cambiar Imágenes

Las imágenes están en URLs de Unsplash. Para cambiar:

```html
<div class="card__image" style="background-image: url('TU_URL_AQUI');"></div>
```

---

## 🔧 Edición Avanzada

### Agregar Nuevas Secciones

1. Añade el HTML en `index.html`
2. Crea reglas CSS en `styles.css`
3. Sigue la estructura modular existente

### Agregar Animaciones Personalizadas

En `styles.css`, dentro de `@keyframes`:

```css
@keyframes tuAnimacion {
    0% { /* estado inicial */ }
    100% { /* estado final */ }
}
```

### Integración con Backend

En `script.js`, busca la sección del formulario y reemplaza:

```javascript
// En producción, aquí iría el envío a un servidor
fetch('/api/cotizacion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ empresa, telefono, servicio, detalles })
})
```

---

## 📊 Rendimiento y SEO

✓ **CSS Optimizado** - Sin frameworks innecesarios  
✓ **Sin dependencias externas** - Solo HTML, CSS, JS vanilla  
✓ **Imágenes optimizadas** - URLs de Unsplash con parámetros de compresión  
✓ **Mobile-first** - Diseño responsivo desde 320px  
✓ **Accesibilidad** - Estructura semántica HTML5  
✓ **Meta tags** - Para redes sociales y motores de búsqueda  

---

## 🎯 Casos de Uso

- ✅ Presentación corporativa para cliente B2B
- ✅ Generación de leads de cotización
- ✅ Mostrar capacidad operativa y homologaciones
- ✅ Integración con CRM o email marketing
- ✅ Publicación en servidor web (cualquier hosting)
- ✅ Adaptación para diferentes servicios

---

## 🌐 Despliegue en Producción

### En GitHub Pages (Gratis)

1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages → elegir rama
4. Tu sitio estará en `https://tuusuario.github.io/MIRC-Landing`

### En Netlify (Gratis)

1. Ve a [netlify.com](https://netlify.com)
2. Drag & drop la carpeta del proyecto
3. Tu sitio estará listo en ~30 segundos

### En VPS / Hosting Propio

```bash
# Conectarse por SSH
scp -r MIRC-Landing/ usuario@servidor.com:/var/www/

# Configurar Nginx
server {
    root /var/www/MIRC-Landing;
    index index.html;
}
```

---

## 🐛 Troubleshooting

**P: No veo los estilos**  
R: Verifica que `styles.css` esté en la misma carpeta que `index.html`

**P: Las imágenes de fondo no cargan**  
R: Revisa tu conexión a internet (las imágenes vienen de Unsplash)

**P: El formulario no funciona**  
R: Abre la consola (F12) para ver errores. Asegúrate de que `script.js` esté cargado

**P: ¿Cómo cambio el número de WhatsApp?**  
R: En `index.html`, busca `https://wa.me/` y reemplaza el número

---

## 📞 Soporte y Mantenimiento

Para reportar bugs o sugerencias, contacta:  
📧 **Email**: desarrollo@mirc.com.ar  
💬 **WhatsApp**: [Tu número]  
🌐 **Web**: www.mirc.com.ar

---

## 📜 Licencia

Esta landing page es propiedad de **MIRC - Mantenimiento Integral & Reparaciones Corporativas**.

---

## 🎓 Stack Tecnológico

- **HTML5** - Semántica y accesibilidad
- **CSS3** - Grid, Flexbox, Variables CSS, Animaciones
- **JavaScript Vanilla** - Sin frameworks, puro y eficiente
- **Responsive Design** - Mobile-First approach
- **Performance** - ~50KB total (sin compresión)

---

**Creado con ❤️ y efectos neón para MIRC**  
*Versión 1.0 - 2026*
