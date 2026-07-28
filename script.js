// --- CONFIGURACIÓN DE IDIOMA ---
let currentLang = 'en'; // Default English

const translations = {
    en: {
        menu: "Menu",
        reserve: "Reserve",
        story: "Story",
        home: "Home",
        contact: "Contact",
        back: "Back",
        details: "Details",
        close: "Close",
        nextSection: "Next Section",
        codePrompt: "Please enter your access code to unlock your RSVP form.",
        codeLabel: "Access Code",
        codeError: "Invalid code. Please try again.",
        enterBtn: "Find Invitation",
        guest: "Guest",
        reservedFor: "You have access to",
        seats: "guest pass(es). Please enter the names.",
        nameLabel: "Full Name",
        attendingLabel: "Will this guest be attending?",
        yes: "Yes",
        no: "No",
        emailLabel: "Email (Main Contact)",
        phoneLabel: "Phone",
        dietLabel: "Dietary Restrictions",
        none: "None",
        messageLabel: "Message for the Couple",
        songLabel: "Must-play song request",
        writeMsg: "Write something nice...",
        artistSong: "Artist - Song",
        sendBtn: "Send Confirmation",
        sending: "Sending...",
        errorSend: "Error Sending",
        validationMsg: "Please complete the fields marked in red.",
        thankTitle: "Thank You!",
        thankMsg: "Your confirmation has been successfully received.",
        seeYou: "See you in February!"
    },
    es: {
        menu: "Menú",
        reserve: "Reservar",
        story: "Historia",
        home: "Inicio",
        contact: "Contacto",
        back: "Volver",
        details: "Detalles",
        close: "Cerrar",
        nextSection: "Siguiente Sección",
        codePrompt: "Por favor ingresa tu código de acceso para confirmar tu asistencia.",
        codeLabel: "Código de Acceso",
        codeError: "Código no válido. Intenta de nuevo.",
        enterBtn: "Ingresar Código",
        guest: "Invitado",
        reservedFor: "Tienes acceso para",
        seats: "lugar(es). Por favor ingresa los nombres.",
        nameLabel: "Nombre Completo",
        attendingLabel: "¿Asistirá a la boda?",
        yes: "Sí",
        no: "No",
        emailLabel: "Email (Contacto Principal)",
        phoneLabel: "Teléfono",
        dietLabel: "Restricciones Alimenticias",
        none: "Ninguna",
        messageLabel: "Mensaje para la Pareja",
        songLabel: "Canción que no puede faltar",
        writeMsg: "Escribe algo lindo...",
        artistSong: "Artista - Canción",
        sendBtn: "Enviar Confirmación",
        sending: "Enviando...",
        errorSend: "Error al Enviar",
        validationMsg: "Por favor completa los campos marcados en rojo.",
        thankTitle: "¡Gracias!",
        thankMsg: "Tu confirmación ha sido recibida con éxito.",
        seeYou: "¡Nos vemos en Febrero!"
    }
};

// ==========================================
// CÓDIGOS DE ACCESO (NUEVA LÓGICA)
// ==========================================
const accessCodes = {
    "SOLO1": 1,
    "PAREJA2": 2,
    "FAMILIA3": 3,
    "FAMILIA4": 4,
    "FAMILIA5": 5,
    "FAMILIA6": 6
};

// DATOS DE SECCIONES (Adaptados a Evelyn & Fernando)
const slidesData = [
    { 
        img: 'assets/EvyFer.webp', 
        subtitle: { en: '', es: '' }, 
        btnText: { en: 'Our Story', es: 'Nuestra Historia' }, 
        title: { en: 'Evelyn & Fernando', es: 'Evelyn & Fernando' }, 
        monogramImg: '/assets/Wmonogram.webp',
        detailsContent: {
            en: `<p><strong>The Digital Spark that Started it All</strong></p><br><p>It all started in 2005 with a "friend request." Evelyn and Fernando first connected in the digital world of MySpace, but the real magic happened when they finally met in person at their favorite local spot, Porky’s.</p><br><p>They spent the next few years building a foundation of deep friendship, laughter, and shared memories that naturally blossomed into a romance in 2008, and they haven’t been apart since. Seventeen years later, their world is more vibrant than ever, shared with their three children: Fernando, Natalia, and Loki.</p><br><p>From a 2005 friend request to a lifetime of love, we can't wait to celebrate the next chapter with you!</p>`,
            es: `<p><strong>La chispa digital que lo inició todo</strong></p><br><p>Todo comenzó en el 2005 con una "solicitud de amistad". Evelyn y Fernando conectaron por primera vez en el mundo digital de MySpace, pero la verdadera magia ocurrió cuando finalmente se conocieron en persona en su lugar local favorito: Porky’s.</p><br><p>Pasaron los siguientes años construyendo una base de amistad profunda, risas y recuerdos compartidos que florecieron naturalmente en un romance en el 2008, y desde entonces no se han separado. Diecisiete años después, su mundo es más vibrante que nunca, compartido con sus tres hijos: Fernando, Natalia y Loki.</p><br><p>Desde una solicitud de amistad en el 2005 hasta toda una vida de amor, ¡estamos ansiosos por celebrar el próximo capítulo con ustedes!</p>`
        }
    },
    { 
        img: 'https://images.squarespace-cdn.com/content/v1/521ecf21e4b06244c31827be/1627450736814-W7HRSRLR3S1JNTQPT1MQ/hacienda_ochil_4.jpg', 
        subtitle: { en: 'Our Union', es: 'Nuestra Unión' }, 
        btnText: { en: 'Location', es: 'Ubicación' }, 
        title: { en: 'Wedding Day', es: 'Día de la Boda' }, 
        detailsContent: {
            en: `<p><strong>Welcome Drinks</strong></p><p><strong>February 19th, 2027</strong></p><br><p><strong>Hacienda San Pedro Ochil</strong></p><p><strong>February 20th, 2027</strong></p><br><p>Carr. Mérida - Uxmal km 176.5<br>Mérida, Yucatán</p><br><p><a href="https://maps.app.goo.gl/SE7rW7JHZ44fd2Sz5" target="_blank" style="text-decoration:underline;">Open in Google Maps</a></p>`,
            es: `<p><strong>Cóctel de Bienvenida</strong></p><p><strong>19 de Febrero, 2027</strong></p><br><p><strong>Hacienda San Pedro Ochil</strong></p><p><strong>20 de Febrero, 2027</strong></p><br><p>Carr. Mérida - Uxmal km 176.5<br>Mérida, Yucatán</p><br><p><a href="https://maps.app.goo.gl/SE7rW7JHZ44fd2Sz5" target="_blank" style="text-decoration:underline;">Abrir en Google Maps</a></p>`
        }
    },
    { 
        img: 'https://i.pinimg.com/webp/736x/08/08/3a/08083a8c32b491ad59552066630b23a3.webp', 
        subtitle: { en: 'The Big Day', es: 'El Gran Día' }, 
        btnText: { en: 'View Schedule', es: 'Ver Horarios' }, 
        title: { en: 'Itinerary', es: 'Itinerario' }, 
        detailsContent: {
            en: `<p><em>Pending details... Coming soon.</em></p>`,
            es: `<p><em>Detalles pendientes... Próximamente.</em></p>`
        }
    },
    {
        img: 'assets/mantel.webp', 
        subtitle: { en: 'Food & Drinks', es: 'Comida y Bebida' }, 
        btnText: { en: 'View Menu', es: 'Ver Menú' }, 
        title: { en: 'Menu', es: 'Menú' }, 
        detailsContent: {
            en: `<p><em>Menu is currently pending. Check back later!</em></p>`,
            es: `<p><em>El menú está pendiente. ¡Vuelve a revisar pronto!</em></p>`
        }
    },
    { 
        img: 'assets/Venue2.webp', 
        subtitle: { en: 'Important Details', es: 'Detalles Importantes' }, 
        btnText: { en: 'Guest Guide', es: 'Guía del Invitado' }, 
        title: { en: 'Information', es: 'Información' }, 
        detailsContent: {
            en: `
                <p><strong>Dress Code: Formal</strong></p>
                <p>We can't wait to celebrate with you at the hacienda! To match the elegant, historic setting while staying comfortable in Mérida's beautiful tropical climate, we ask our guests to join us in Formal attire made of lightweight, breathable fabrics. Have fun with colors and patterns, but we kindly ask that guests avoid wearing white or brown so those colors can remain special for the bride and groom.</p>
                <p><a href="https://pin.it/3RbNvXY62" target="_blank" style="text-decoration: underline; color: inherit;">Women's Inspiration</a> &nbsp;|&nbsp; <a href="https://pin.it/6eIWdKpDv" target="_blank" style="text-decoration: underline; color: inherit;">Men's Inspiration</a></p>
                <br>
                <p><strong>Event is Adults Only</strong></p>
                <p>To allow all our guests—including parents—a chance to fully immerse themselves in a night of celebration and fun, we have chosen for our wedding day to be an adults-only occasion. We hope this advance notice means you are still able to share our big day!</p>
                <br>
                <p><strong>Transportation (Shuttles)</strong></p>
                <p>Pending.</p>
                <br>
                <p><strong>Hotel Recommendations</strong></p>
                <p>Pending.</p>
            `,
            es: `
                <p><strong>Código de Vestimenta: Formal</strong></p>
                <p>¡No podemos esperar para celebrar con ustedes en la hacienda! Para estar a tono con el entorno elegante e histórico, y al mismo tiempo estar cómodos en el hermoso clima tropical de Mérida, les pedimos a nuestros invitados que nos acompañen con vestimenta formal de telas ligeras y frescas. ¡Diviértanse con los colores y estampados! Solo les pedimos amablemente evitar el uso de blanco o marrón (café) para que esos colores sigan siendo especiales para la novia y el novio.</p>
                <p><a href="https://pin.it/3RbNvXY62" target="_blank" style="text-decoration: underline; color: inherit;">Inspiración Mujeres</a> &nbsp;|&nbsp; <a href="https://pin.it/6eIWdKpDv" target="_blank" style="text-decoration: underline; color: inherit;">Inspiración Hombres</a></p>
                <br>
                <p><strong>Celebración exclusiva para adultos</strong></p>
                <p>Con el fin de ofrecer a todos nuestros invitados —incluyendo a los padres de familia— una gran noche de fiesta y diversión ininterrumpida, hemos optado por una celebración exclusiva para adultos. Confiamos en que este aviso anticipado les permita compartir con nosotros este día tan especial.</p>
                <br>
                <p><strong>Transporte (Shuttles)</strong></p>
                <p>Próximamente.</p>
                <br>
                <p><strong>Hoteles Recomendados</strong></p>
                <p>Próximamente.</p>
            `
        }
    },
    { 
        img: 'https://i.pinimg.com/736x/f7/36/53/f736538702e479ce2d7324687ec251ff.jpg', 
        subtitle: { en: 'A Detail', es: 'Un Detalle' }, 
        btnText: { en: 'View Registry', es: 'Ver Mesa' }, 
        title: { en: 'Registry', es: 'Mesa de Regalos' }, 
        detailsContent: {
            en: `<p><em>Registry details pending...</em></p>`,
            es: `<p><em>Detalles de mesa de regalos próximamente...</em></p>`
        }
    },
    { 
        img: 'assets/venue22.webp', 
        subtitle: { en: 'Confirm Attendance', es: 'Confirma Asistencia' }, 
        btnText: { en: 'Reserve Spot', es: 'Reservar Lugar' }, 
        title: { en: 'Rsvp', es: 'Rsvp' }, 
        isRSVP: true
    },
    { 
        // img: 'https://i.pinimg.com/webp/736x/d1/82/ff/d182ff4ac47769508f0e224303287251.webp',
        img: 'assets/monogrampattern.webp', 
        subtitle: { en: 'Questions?', es: '¿Tienes Dudas?' }, 
        btnText: { en: 'Write Us', es: 'Escribirnos' }, 
        title: { en: 'Contact', es: 'Contacto' }, 
        detailsContent: {
            en: `
                <p>We can't wait to celebrate with you!</p>
                <br>
                <p>To help make your journey and stay smooth, our event planner is available to answer any logistics or planning questions you might have.</p>
                <br>
                <p><strong>Joe Bolaños</strong><br>Event Planner</p>
                <p><a href="tel:+529902317477" style="text-decoration: underline; color: inherit;">+52 990 231 7477</a></p>
                <p><a href="mailto:joebolanosevents@gmail.com" style="text-decoration: underline; color: inherit;">joebolanosevents@gmail.com</a></p>
                <p><a href="https://www.instagram.com/joebolanosevents" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">@joebolanosevents</a></p>
                <br>
                <p>For assistance with venue details, feel free to call, text, or email Joe at your convenience.</p>
            `,
            es: `
                <p>¡No podemos esperar para celebrar con ustedes!</p>
                <br>
                <p>Para que su viaje y estancia sean lo más agradables posible, nuestra coordinadora de eventos está a su disposición para responder cualquier pregunta sobre la logística o la organización.</p>
                <br>
                <p><strong>Joe Bolaños</strong><br>Event Planner</p>
                <p><a href="tel:+529902317477" style="text-decoration: underline; color: inherit;">+52 990 231 7477</a></p>
                <p><a href="mailto:joebolanosevents@gmail.com" style="text-decoration: underline; color: inherit;">joebolanosevents@gmail.com</a></p>
                <p><a href="https://www.instagram.com/joebolanosevents" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">@joebolanosevents</a></p>
                <br>
                <p>Para recibir asistencia con los detalles del lugar, no duden en llamar, enviar un mensaje de texto o un correo electrónico a Joe.</p>
            `
        }
    }
];

// DOM & SWIPER
const bgLayer = document.getElementById('bg-layer');
const bgLayerNext = document.getElementById('bg-layer-next'); 
const subtitleEl = document.getElementById('subtitle');
const ctaBtn = document.getElementById('cta-btn');
const langOpts = document.querySelectorAll('.lang-opt');
const swiperWrapper = document.getElementById('dynamic-swiper-wrapper');
const mainHero = document.getElementById('main-hero');
let swiper = null;

function rebuildSwiper(initialIndex = 0) {
    if (swiper !== null) {
        swiper.destroy(true, true);
    }

    swiperWrapper.innerHTML = '';

    slidesData.forEach(slide => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'swiper-slide';
        
        // 👇 AQUI ESTA LA MAGIA: Verifica si existe el monograma
        if (slide.monogramImg) {
            slideDiv.innerHTML = `<div class="slide-inner"><img src="${slide.monogramImg}" alt="Monogram" class="slide-monogram"></div>`;
        } else {
            slideDiv.innerHTML = `<div class="slide-inner"><h2 class="slide-title">${slide.title[currentLang]}</h2></div>`;
        }
        
        swiperWrapper.appendChild(slideDiv);
    });

    swiper = new Swiper(".text-swiper", {
        loop: false, 
        slidesPerView: "auto", 
        centeredSlides: true, 
        speed: 600, 
        grabCursor: true, 
        initialSlide: initialIndex,
        mousewheel: true, 
        keyboard: { enabled: true },
        roundLengths: true, 
        observer: true, 
        observeParents: true,

        breakpoints: { 320: { spaceBetween: 20 }, 768: { spaceBetween: 50 } },
        on: {
            init: function () { updateContent(this.realIndex); },
            slideChange: function () { updateContent(this.realIndex); }
        }
    });
}

window.addEventListener('load', () => {
    document.fonts.ready.then(() => {
        rebuildSwiper(0);
        setTimeout(() => {
            mainHero.classList.remove('loading-state');
            mainHero.classList.add('loaded-visible');
            if(swiper) swiper.update();
        }, 100);
    });
});

// CAMBIO DE IDIOMA
langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
        const selectedLang = opt.getAttribute('data-lang');
        if(selectedLang !== currentLang) {
            currentLang = selectedLang;
            updateLanguage();
        }
    });
});

function updateLanguage() {
    const t = translations[currentLang];
    const currentIndex = swiper ? swiper.activeIndex : 0;

    document.getElementById('nav-menu-text').textContent = t.menu;
    document.getElementById('nav-reserve-text').textContent = t.reserve;
    document.getElementById('menu-home-btn').textContent = t.home;
    document.getElementById('menu-contact-btn').textContent = t.contact;
    document.getElementById('back-to-home').textContent = t.back;
    
    const isExpanded = document.getElementById('details-content-box').classList.contains('expanded');
    document.getElementById('detail-toggle-text').textContent = isExpanded ? t.close : t.details;

    langOpts.forEach(o => {
        if(o.getAttribute('data-lang') === currentLang) o.classList.add('active-lang');
        else o.classList.remove('active-lang');
    });

    const menuLinks = document.querySelectorAll('.menu-items .menu-link');
    menuLinks.forEach(link => {
        const idx = link.getAttribute('data-index');
        if(slidesData[idx]) link.textContent = slidesData[idx].title[currentLang];
    });

    const swiperContainer = document.querySelector('.text-swiper');
    swiperContainer.classList.add('opacity-zero');
    
    setTimeout(() => {
        rebuildSwiper(currentIndex);
        swiperContainer.classList.remove('opacity-zero');
    }, 200);

    if (document.body.classList.contains('details-mode')) {
        openDetailsMode(currentIndex);
    }
}

function updateContent(index) {
    const data = slidesData[index];
    if(!data) return;
    
    bgLayer.style.opacity = '0';
    subtitleEl.style.opacity = '0';
    ctaBtn.style.opacity = '0';
    
    setTimeout(() => {
        bgLayer.style.setProperty('--bg-img', `url('${data.img}')`);
        bgLayer.style.opacity = '1';
        
        subtitleEl.textContent = data.subtitle[currentLang];
        ctaBtn.textContent = data.btnText[currentLang];
        ctaBtn.setAttribute('href', data.btnLink || '#');
        subtitleEl.style.opacity = '1';
        ctaBtn.style.opacity = '1';
    }, 400); 
}

const reserveBtn = document.getElementById('nav-reserve-text');
if(reserveBtn) {
    reserveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        swiper.slideTo(6); 
        openDetailsMode(6);
    });
}

// LOGICA GENERAL
const mainLogo = document.getElementById('main-logo');
mainLogo.addEventListener('click', () => {
    swiper.slideTo(0);
    closeDetailsMode();
    const menuOverlay = document.getElementById('menu-overlay');
    const menuBtn = document.getElementById('menu-btn-trigger');
    if (menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        menuBtn.classList.remove('menu-text-active');
    }
});

const menuBtn = document.getElementById('menu-btn-trigger');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-link');
const homeBtn = document.getElementById('menu-home-btn');
const contactBtn = document.getElementById('menu-contact-btn');

function toggleMenu() {
    const isActive = menuOverlay.classList.contains('active');
    if (isActive) {
        menuOverlay.classList.remove('active');
        menuBtn.classList.remove('menu-text-active');
    } else {
        menuOverlay.classList.add('active');
        menuBtn.classList.add('menu-text-active');
    }
}
menuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const index = parseInt(link.getAttribute('data-index'));
        swiper.slideTo(index);
        toggleMenu();
        closeDetailsMode();
    });
});
menuOverlay.addEventListener('click', (e) => { if (e.target === menuOverlay) toggleMenu(); });
homeBtn.addEventListener('click', () => { swiper.slideTo(0); toggleMenu(); closeDetailsMode(); });
contactBtn.addEventListener('click', () => { swiper.slideTo(7); toggleMenu(); closeDetailsMode(); });

const detailsBar = document.getElementById('details-bar');
const detailsContentBox = document.getElementById('details-content-box');
const detailBarTitle = document.getElementById('detail-bar-title');
const detailFullTitle = document.getElementById('detail-full-title');
const detailBodyText = document.getElementById('detail-body-text');
const detailIcon = document.getElementById('detail-icon');
const detailToggleText = document.getElementById('detail-toggle-text');
const closeDetailsBtn = document.getElementById('close-details-btn');
const backToHomeBtn = document.getElementById('back-to-home');
const nextSectionBar = document.getElementById('next-section-bar');
const nextSectionTitle = document.getElementById('next-section-title');

ctaBtn.addEventListener('click', (e) => { e.preventDefault(); openDetailsMode(swiper.activeIndex); });

function openDetailsMode(index) {
    const data = slidesData[index];
    const t = translations[currentLang];
    
    let nextIndex = index + 1;
    if (nextIndex >= slidesData.length) nextIndex = 0;
    const nextData = slidesData[nextIndex];

    detailBarTitle.textContent = data.title[currentLang];
    detailFullTitle.textContent = data.title[currentLang];
    nextSectionTitle.textContent = t.nextSection + ": " + nextData.title[currentLang];
    nextSectionBar.setAttribute('data-next-index', nextIndex);

    if (data.isRSVP) {
        detailBodyText.innerHTML = `
            <div id="rsvp-login-view" class="rsvp-step-container">
                <p>${t.codePrompt}</p>
                <label class="rsvp-label">${t.codeLabel}</label>
                <input type="text" id="rsvp-code-input" class="rsvp-input" placeholder="Ej. Familia4">
                <div id="rsvp-error-msg" class="rsvp-error">${t.codeError}</div>
                <button id="rsvp-check-btn" class="rsvp-btn">${t.enterBtn}</button>
            </div>
        `;
        initRSVPLogin();
    } else {
        detailBodyText.innerHTML = data.detailsContent[currentLang];
    }

    document.body.classList.add('details-mode');
    detailsContentBox.classList.add('expanded'); 
    detailIcon.classList.remove('fa-plus');
    detailIcon.classList.add('fa-minus');
    detailToggleText.textContent = t.close;

    swiper.keyboard.disable();
    swiper.mousewheel.disable();
}

// =========================================================
// LOGICA DE LOGIN: LECTURA DE CÓDIGO
// =========================================================
function initRSVPLogin() {
    setTimeout(() => {
        const checkBtn = document.getElementById('rsvp-check-btn');
        const codeInput = document.getElementById('rsvp-code-input');
        const errorMsg = document.getElementById('rsvp-error-msg');
        
        if(checkBtn) {
            checkBtn.addEventListener('click', () => {
                let rawCode = codeInput.value.toUpperCase().trim();
                
                if (accessCodes[rawCode]) {
                    generateRSVPForm(accessCodes[rawCode]);
                } else {
                    errorMsg.style.display = 'block';
                    codeInput.classList.add('input-error');
                }
            });
            
            // Quitar el error si el usuario vuelve a escribir
            codeInput.addEventListener('input', () => {
                 errorMsg.style.display = 'none';
                 codeInput.classList.remove('input-error');
            });
        }
    }, 100);
}

// =========================================================
// GENERADOR DE FORMULARIO DINÁMICO
// =========================================================
function generateRSVPForm(guestCount) {
    const t = translations[currentLang];
    let formHTML = `<div class="rsvp-step-container"><p>${t.reservedFor} <strong>${guestCount} ${t.seats}</strong></p><br>`;
    
    // Iteramos según el número de invitados permitidos por el código
    for (let i = 1; i <= guestCount; i++) {
        formHTML += `
            <div class="guest-block">
                <div class="guest-number">${t.guest} ${i}</div> 
                
                <label class="rsvp-label">${t.nameLabel}</label>
                <input type="text" id="name_${i}" class="rsvp-input required-field" placeholder="">
                
                <label class="rsvp-label">${t.attendingLabel}</label>
                <div class="radio-group" id="attendance_group_${i}">
                    <label class="radio-label"><input type="radio" name="asistencia_${i}" value="si"> ${t.yes}</label>
                    <label class="radio-label"><input type="radio" name="asistencia_${i}" value="no"> ${t.no}</label>
                </div>
        `;

        formHTML += `
                ${ i === 1 ? `
                <label class="rsvp-label">${t.emailLabel}</label>
                <input type="email" id="email_1" class="rsvp-input required-field" placeholder="">
                <label class="rsvp-label">${t.phoneLabel}</label>
                <input type="tel" id="tel_1" class="rsvp-input" placeholder="">
                ` : '' }
                <label class="rsvp-label">${t.dietLabel}</label>
                <input type="text" id="diet_${i}" class="rsvp-input" placeholder="${t.none}">
            </div>
        `;
    }
    
    formHTML += `
        <div class="guest-block" style="border:none;">
            <label class="rsvp-label">${t.messageLabel}</label>
            <textarea id="guest_message" class="rsvp-textarea" placeholder="${t.writeMsg}"></textarea>
            <label class="rsvp-label">${t.songLabel}</label>
            <input type="text" id="guest_song" class="rsvp-input" placeholder="${t.artistSong}">
        </div>
        <div id="form-warning" class="rsvp-error" style="text-align:center; margin-bottom:15px;">${t.validationMsg}</div>
        <button id="rsvp-submit-final" class="rsvp-btn">${t.sendBtn}</button>
    </div>`;
    
    detailBodyText.innerHTML = formHTML;

    // LÓGICA DE ENVÍO Y VALIDACIÓN
    setTimeout(() => {
        document.getElementById('rsvp-submit-final').addEventListener('click', (e) => {
            const btn = e.target;
            let isValid = true;
            let formData = { _subject: `Wedding RSVP (${currentLang.toUpperCase()})`, _captcha: "false" };

            for (let i = 1; i <= guestCount; i++) {
                // Validar Nombre
                const nameInput = document.getElementById(`name_${i}`);
                if (!nameInput.value.trim()) {
                    nameInput.classList.add('input-error');
                    isValid = false;
                } else {
                    nameInput.classList.remove('input-error');
                }

                // Validar Asistencia a Boda
                const radios = document.getElementsByName(`asistencia_${i}`);
                let radioChecked = false;
                let asistenciaVal = "Pending";
                for (const r of radios) { 
                    if (r.checked) { 
                        radioChecked = true; 
                        asistenciaVal = r.value === 'si' ? 'YES (SI)' : 'NO';
                    } 
                }
                const radioContainer = document.getElementById(`attendance_group_${i}`).previousElementSibling;
                if (!radioChecked) {
                    radioContainer.style.color = "#cc0000"; // Rojo de validación
                    isValid = false;
                } else {
                    radioContainer.style.color = "#660033"; // Color base restaurado
                }

                formData[`Guest_${i}_Name`] = nameInput.value;
                formData[`Guest_${i}_Attending_Wedding`] = asistenciaVal;
                formData[`Guest_${i}_Diet`] = document.getElementById(`diet_${i}`).value || "None";
            }

            // Validar Email principal (siendo el contacto)
            const email1 = document.getElementById('email_1');
            if(email1) {
                if(!email1.value.trim()) {
                    email1.classList.add('input-error');
                    isValid = false;
                } else {
                    email1.classList.remove('input-error');
                    formData["Contact_Email"] = email1.value;
                }
            }
            
            const tel1 = document.getElementById('tel_1') ? document.getElementById('tel_1').value : '';
            const message = document.getElementById('guest_message').value;
            const song = document.getElementById('guest_song').value;

            if(tel1) formData["Contact_Phone"] = tel1;
            if(message) formData["Message"] = message;
            if(song) formData["Song_Request"] = song;

            const warningMsg = document.getElementById('form-warning');
            
            if (isValid) {
                warningMsg.style.display = 'none';
                btn.textContent = t.sending;
                btn.disabled = true;

                // --- MODO DEMO ---
                console.log("DATOS A ENVIAR (SIMULACIÓN):", formData);

                setTimeout(() => {
                    detailBodyText.innerHTML = `
                        <div style="text-align:center; padding: 40px 0;">
                            <h3 class="story-heading">${t.thankTitle}</h3>
                            <p>${t.thankMsg}</p>
                            <br><p>${t.seeYou}</p>
                        </div>
                    `;
                }, 1500);
            } else {
                warningMsg.style.display = 'block';
            }
        });
        
        // Limpiar errores rojos al escribir/hacer click en inputs
        const allInputs = document.querySelectorAll('.rsvp-input, input[type="radio"]');
        allInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                if(e.target.type === 'radio') {
                    e.target.closest('.radio-group').previousElementSibling.style.color = "#660033";
                } else {
                    e.target.classList.remove('input-error');
                }
            });
        });
        
    }, 100);
}

function closeDetailsMode() {
    document.body.classList.remove('details-mode');
    detailsContentBox.classList.remove('expanded');
    swiper.keyboard.enable();
    swiper.mousewheel.enable();
}

nextSectionBar.addEventListener('click', () => {
    const nextIndex = parseInt(nextSectionBar.getAttribute('data-next-index'));
    swiper.slideTo(nextIndex);
    openDetailsMode(nextIndex);
});

detailsBar.addEventListener('click', toggleDetailsBox);
closeDetailsBtn.addEventListener('click', toggleDetailsBox);
backToHomeBtn.addEventListener('click', closeDetailsMode);

function toggleDetailsBox() {
    const t = translations[currentLang];
    const isExpanded = detailsContentBox.classList.contains('expanded');
    if (isExpanded) {
        detailsContentBox.classList.remove('expanded');
        detailIcon.classList.remove('fa-minus');
        detailIcon.classList.add('fa-plus');
        detailToggleText.textContent = t.details;
    } else {
        detailsContentBox.classList.add('expanded');
        detailIcon.classList.remove('fa-plus');
        detailIcon.classList.add('fa-minus');
        detailToggleText.textContent = t.close;
    }
}

const leftZone = document.getElementById('nav-left');
const rightZone = document.getElementById('nav-right');
if (leftZone && rightZone) {
    leftZone.addEventListener('click', () => { if(!document.body.classList.contains('details-mode')) swiper.slidePrev(); });
    rightZone.addEventListener('click', () => { if(!document.body.classList.contains('details-mode')) swiper.slideNext(); });
}

const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const icon = musicBtn.querySelector('i');
let isPlaying = false;
musicBtn.addEventListener('click', () => {
    if (isPlaying) { bgMusic.pause(); icon.classList.replace('fa-pause', 'fa-play'); isPlaying = false; }
    else { bgMusic.play(); icon.classList.replace('fa-play', 'fa-pause'); isPlaying = true; }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { bgMusic.pause(); } 
    else { if (isPlaying) { bgMusic.play(); } }
});