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
            e.preventDefault(); // Frena el envío automático para validar
            
            // Capturar los elementos internos del formulario
            const empresaInput = form.querySelector('input[type="text"]');
            const telefonoInput = form.querySelector('input[type="tel"]');
            const emailInput = form.querySelector('input[type="email"]');
            const servicioSelect = form.querySelector('select');
            const detallesTextarea = form.querySelector('textarea');
            
            // Validar campos vacíos
            if (!empresaInput.value || !telefonoInput.value || !emailInput.value || !servicioSelect.value || !detallesTextarea.value) {
                showNotification('Por favor complete todos los campos', 'error');
                return;
            }

            // Validar formato de Email
            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValido.test(emailInput.value)) {
                showNotification('Ingrese un email válido', 'error');
                return;
            }
            
            // Validar largo del teléfono
            const telefonoLimpio = telefonoInput.value.replace(/\D/g, '');
            if (telefonoLimpio.length < 8) {
                showNotification('Ingrese un teléfono válido', 'error');
                return;
            }

            // Todo legal: Aseguramos los atributos 'name' para que FormSubmit reciba los datos con orden
            empresaInput.name = "Empresa";
            telefonoInput.name = "Telefono";
            emailInput.name = "Email_Cliente";
            servicioSelect.name = "Servicio_Solicitado";
            detallesTextarea.name = "Detalles_Mensaje";

            // Mostrar el cartelito neón de éxito en la pantalla
            showNotification('¡Enviando cotización solicitado con éxito! Nos contactaremos pronto.', 'success');
            
            // Esperar 1.5 segundos para que el usuario vea el cartel y enviar el formulario real
            setTimeout(() => {
                    // Enviar el formulario con fetch para evitar que FormSubmit redirija
                    const formData = new FormData(form);
                    fetch(form.action, {
                        method: 'POST',
                        body: formData
                    }).then(() => {
                        // Redirigir a la página de gracias después de enviar exitosamente
                        setTimeout(() => {
                            window.location.href = 'thanks.html';
                        }, 1000);
                    }).catch(error => {
                        showNotification('Error al enviar el formulario', 'error');
                        console.error('Error:', error);
                    });
            }, 1500);
        });
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
