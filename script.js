/* ============================================
   MIRC LANDING - SCRIPT INTERACTIVO
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initForm();
    initSmoothScroll();
    initNavigation();
});

/* Manejo del Formulario */
function initForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos
            const empresa = form.querySelector('input[type="text"]').value;
            const telefono = form.querySelector('input[type="tel"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const servicio = form.querySelector('select').value;
            const detalles = form.querySelector('textarea').value;
            const adjunto = form.querySelector('#adjunto');
            
            if (!empresa || !telefono || !email || !servicio || !detalles) {
                showNotification('Por favor complete todos los campos', 'error');
                return;
            }

            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValido.test(email)) {
                showNotification('Ingrese un email válido', 'error');
                return;
            }
            
            // Validar teléfono (al menos 10 dígitos)
            const telefonoLimpio = telefono.replace(/\D/g, '');
            if (telefonoLimpio.length < 10) {
                showNotification('Ingrese un teléfono válido', 'error');
                return;
            }

            if (adjunto && adjunto.files.length > 0) {
                const file = adjunto.files[0];
                const maxSize = 10 * 1024 * 1024;
                const isImage = file.type.startsWith('image/');
                const isVideo = file.type.startsWith('video/');

                if (!isImage && !isVideo) {
                    showNotification('Solo se permiten archivos de imagen o video', 'error');
                    return;
                }

                if (file.size > maxSize) {
                    showNotification('El archivo supera los 10MB', 'error');
                    return;
                }
            }

            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'ENVIANDO...';
            }
            
            form.submit();
        });

        const fileInput = form.querySelector('#adjunto');
        const fileStatus = form.querySelector('#fileUploadStatus');
        if (fileInput && fileStatus) {
            fileInput.addEventListener('change', () => {
                if (fileInput.files.length > 0) {
                    fileStatus.textContent = fileInput.files[0].name;
                } else {
                    fileStatus.textContent = 'si tienes foto o video muestranos';
                }
            });
        }
    }
}

/* Notificaciones Toast */
function showNotification(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .toast {
            position: fixed;
            bottom: 100px;
            right: 2rem;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#00ff66' : '#ff3366'};
            color: ${type === 'success' ? '#000' : '#fff'};
            border-radius: 4px;
            font-weight: 600;
            z-index: 9999;
            animation: slideInUp 0.3s ease;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes slideInUp {
            from {
                transform: translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100px);
                opacity: 0;
            }
        }
        
        .toast.exit {
            animation: slideOutDown 0.3s ease forwards;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(toast);
    
    // Auto-remove después de 3 segundos
    setTimeout(() => {
        toast.classList.add('exit');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* Scroll Suave para Enlaces Internos */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Actualizar nav activa
                updateActiveNav(this.getAttribute('href'));
            }
        });
    });
}

/* Navegación Activa */
function initNavigation() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 0 30px rgba(0, 255, 102, 0.2)';
        } else {
            header.style.boxShadow = '';
        }
    });
}

/* Actualizar clase activa en navegación */
function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === sectionId) {
            link.classList.add('active');
        }
    });
}

/* Efecto Parallax en Hero (opcional) */
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (hero) {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
}

// Iniciar parallax si se desea descomentar
// initParallax();

/* Validación en tiempo real del formulario */
function onFormFieldChange(field) {
    const form = document.getElementById('contactForm');
    if (form) {
        field.style.borderColor = field.value ? '#00ff66' : 'rgba(0, 255, 102, 0.3)';
    }
}

/* Agregar event listeners a campos del formulario para validación en tiempo real */
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            onFormFieldChange(this);
        });
        input.addEventListener('focus', function() {
            this.style.borderColor = '#00ff66';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = this.value ? '#00ff66' : 'rgba(0, 255, 102, 0.3)';
        });
    });
});

/* Analytics o tracking (opcional) */
function trackEvent(eventName, eventData = {}) {
    console.log(`📊 Evento: ${eventName}`, eventData);
    // Aquí integrar con Google Analytics, Hotjar, etc.
}

/* Botón de WhatsApp - seguimiento */
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            trackEvent('whatsapp_click', { timestamp: new Date().toISOString() });
        });
    }
});
