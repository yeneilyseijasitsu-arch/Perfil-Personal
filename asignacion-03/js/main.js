// Cargar el Header de forma dinámica
function loadHeader() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el header:', error));
}

// Ejecutar la carga cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadHeader);

// ==========================================
// CONFIGURACIÓN DE ESTADOS GLOBALES
// ==========================================
let cart = [];
let currentTheme = 'dark'; // 'dark' representa noche, 'light' representa mañana.

// EFECTOS DE CONTROL DE CLASE SCROLL EN NAVBAR
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return; // Salvaguarda si aún no se ha cargado el componente
    
    if (window.scrollY > 50) {
        header.classList.add('py-3', 'shadow-lg', 'bg-noches-950/90');
        header.classList.remove('py-4', 'bg-white/5');
    } else {
        header.classList.add('py-4');
        header.classList.remove('py-3', 'shadow-lg', 'bg-noches-950/90');
    }
});

// FUNCIÓN SELECTORA DE MODOS DEL HERO (INTERACTIVO)
function setHeroMode(mode) {
    const glowAmbient = document.getElementById('glow-ambient');
    const glassesGlow = document.getElementById('glasses-glow');
    const lensLeft = document.getElementById('lens-left');
    const lensRight = document.getElementById('lens-right');
    const ledsMorning = document.getElementById('leds-morning');
    const ledsNight = document.getElementById('leds-night');
    
    const btnMorning = document.getElementById('btn-mode-morning');
    const btnNight = document.getElementById('btn-mode-night');
    const descriptionBox = document.getElementById('hero-mode-description');
    const svgGlasses = document.getElementById('svg-lumina');

    if (mode === 'morning') {
        glowAmbient.className = "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[120px] opacity-35 transition-all duration-1000 bg-cyan-400/40";
        glassesGlow.className = "absolute inset-0 rounded-full glow-blue transition-all duration-1000 opacity-60 scale-90";
        
        lensLeft.setAttribute('fill', 'url(#grad-morning)');
        lensLeft.setAttribute('stroke', '#38bdf8');
        lensRight.setAttribute('fill', 'url(#grad-morning)');
        lensRight.setAttribute('stroke', '#38bdf8');
        
        ledsMorning.classList.remove('opacity-0');
        ledsNight.classList.add('opacity-0');

        btnMorning.className = "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-amber-500 text-noches-950 shadow-lg shadow-amber-500/25";
        btnNight.className = "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-400 transition-all duration-300 hover:text-white";

        descriptionBox.innerHTML = `<span class="text-cyan-400 font-semibold">Terapia de Luz Azul Seguro (Amanecer):</span> Estimula tus fotorreceptores para bloquear la melatonina de forma natural. Despierta tu energía.`;
        svgGlasses.classList.add('drop-shadow-[0_15px_35px_rgba(56,189,248,0.3)]');
        svgGlasses.classList.remove('drop-shadow-[0_15px_35px_rgba(239,68,68,0.3)]');
    } else {
        glowAmbient.className = "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[120px] opacity-35 transition-all duration-1000 bg-red-600/20";
        glassesGlow.className = "absolute inset-0 rounded-full glow-red transition-all duration-1000 opacity-60 scale-90";
        
        lensLeft.setAttribute('fill', 'url(#grad-night)');
        lensLeft.setAttribute('stroke', '#f87171');
        lensRight.setAttribute('fill', 'url(#grad-night)');
        lensRight.setAttribute('stroke', '#f87171');
        
        ledsMorning.classList.add('opacity-0');
        ledsNight.classList.remove('opacity-0');

        btnMorning.className = "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-400 transition-all duration-300 hover:text-white";
        btnNight.className = "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-red-600 text-white shadow-lg shadow-red-500/25";

        descriptionBox.innerHTML = `<span class="text-red-400 font-semibold">Modo de Inducción de Melatonina (Ocaso):</span> Elimina las longitudes de onda estresantes, promoviendo la entrada profunda al estado alfa para el descanso.`;
        svgGlasses.classList.add('drop-shadow-[0_15px_35px_rgba(239,68,68,0.3)]');
        svgGlasses.classList.remove('drop-shadow-[0_15px_35px_rgba(56,189,248,0.3)]');
    }
}

// ALTERNADOR GLOBAL DE MODO (INTERRUPTOR DE CABECERA)
function toggleGlobalTheme() {
    const body = document.body;
    const toggleIcon = document.getElementById('toggle-icon');
    const toggleText = document.getElementById('toggle-text');
    const toggleBtn = document.getElementById('global-mode-toggle');

    if (currentTheme === 'dark') {
        currentTheme = 'light';
        body.classList.remove('bg-noches-950', 'text-slate-100');
        body.classList.add('bg-slate-50', 'text-slate-900');
        if (toggleIcon) toggleIcon.innerText = '☀️';
        if (toggleText) toggleText.innerText = 'Modo Mañana';
        if (toggleBtn) toggleBtn.classList.add('bg-white', 'text-noches-950', 'border-amber-400');
    } else {
        currentTheme = 'dark';
        body.classList.remove('bg-slate-50', 'text-slate-900');
        body.classList.add('bg-noches-950', 'text-slate-100');
        if (toggleIcon) toggleIcon.innerText = '🌙';
        if (toggleText) toggleText.innerText = 'Modo Noche';
        if (toggleBtn) toggleBtn.classList.remove('bg-white', 'text-noches-950', 'border-amber-400');
    }
}

// FILTROS DEL CATÁLOGO DE PRODUCTOS
function filterCatalog(category) {
    const items = document.querySelectorAll('.product-item');
    // Si no existen elementos con la clase .product-item en la página actual, sal de la función inmediatamente
    if (items.length === 0) return;
    const btnTodos = document.getElementById('filter-btn-todos');
    const btnTec = document.getElementById('filter-btn-tecnologia');
    const btnBien = document.getElementById('filter-btn-bienestar');

    // Asegurar que existan los botones antes de cambiar sus estilos
    if (btnTodos && btnTec && btnBien) {
        [btnTodos, btnTec, btnBien].forEach(btn => {
            btn.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white/5 border border-white/10 text-slate-300 hover:text-white";
        });

        if (category === 'todos') {
            btnTodos.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all bg-amber-500 text-noches-950 shadow-md";
        } else if (category === 'tecnologia') {
            btnTec.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all bg-amber-500 text-noches-950 shadow-md";
        } else if (category === 'bienestar') {
            btnBien.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all bg-amber-500 text-noches-950 shadow-md";
        }
    }

    items.forEach(item => {
        if (category === 'todos' || item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// CARRO DE COMPRAS INTERACTIVO: LÓGICA DE CONTROL
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    
    if (drawer && overlay) {
        drawer.classList.toggle('translate-x-full');
        overlay.classList.toggle('hidden');
    }
}

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    renderCart();
    updateCartBadge();
    toggleCart();
}

function updateCartQuantity(id, action) {
    const item = cart.find(item => item.id === id || item.id == id);
    if (!item) return;

    if (action === 'increase') {
        item.quantity += 1;
    } else if (action === 'decrease') {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id && item.id != id);
        }
    }

    renderCart();
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    if (totalItems > 0) {
        badge.innerText = totalItems;
        badge.classList.remove('scale-0');
        badge.classList.add('scale-100');
    } else {
        badge.classList.remove('scale-100');
        badge.classList.add('scale-0');
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const emptyState = document.getElementById('cart-empty');
    const totalPriceEl = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('btn-checkout');

    if (!container || !totalPriceEl) return; // Prevenir errores si el componente no ha terminado de cargar

    if (cart.length === 0) {
        container.innerHTML = '';
        if (emptyState) container.appendChild(emptyState);
        totalPriceEl.innerText = "$0.00 USD";
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }
        return;
    }

    if (emptyState) emptyState.remove();
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    container.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemRow = document.createElement('div');
        itemRow.className = "flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 gap-4";
        itemRow.innerHTML = `
            <div class="flex-grow">
                <h4 class="text-xs font-bold text-white">${item.name}</h4>
                <p class="text-xs text-amber-400 font-semibold">$${item.price.toFixed(2)} USD</p>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="updateCartQuantity('${item.id}', 'decrease')" class="w-6 h-6 rounded-lg bg-white/10 hover:bg-amber-500 hover:text-noches-950 font-bold text-xs flex items-center justify-center transition-colors">-</button>
                <span class="text-xs font-bold text-white w-6 text-center">${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.id}', 'increase')" class="w-6 h-6 rounded-lg bg-white/10 hover:bg-amber-500 hover:text-noches-950 font-bold text-xs flex items-center justify-center transition-colors">+</button>
            </div>
        `;
        container.appendChild(itemRow);
    });

    totalPriceEl.innerText = `$${total.toFixed(2)} USD`;
}

// LÓGICA DE PROCESAMIENTO DE COMPRA SIMULADO
function executeCheckout() {
    if (cart.length === 0) return;
    
    toggleCart();

    const successModal = document.getElementById('success-modal');
    if (successModal) successModal.classList.remove('hidden');

    cart = [];
    renderCart();
    updateCartBadge();
}

function closeSuccessModal() {
    const successModal = document.getElementById('success-modal');
    if (successModal) successModal.classList.add('hidden');
}