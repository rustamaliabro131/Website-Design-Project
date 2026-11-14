/**
 * ===================================================================
 * AB-CHIP & HUIDU TECHNOLOGY — MAIN APPLICATION SCRIPT (script.js)
 * Vanilla JavaScript (ES6+) - DOM, Catalog, Sizing Tool & Cart State
 * ===================================================================
 */

(function () {
  'use strict';

  // -----------------------------------------------------------------
  // 1. GLOBAL STATE MANAGEMENT
  // -----------------------------------------------------------------
  const STATE = {
    currentCategory: 'all',
    searchQuery: '',
    cart: [],
    calcMode: 'res', // 'res' = pixel resolution, 'dim' = physical dimensions
    activeModalProductId: null
  };

  const STORAGE_KEY = 'abchip_quote_cart_v1';

  // Load persisted cart from localStorage
  function loadCartFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        STATE.cart = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
      STATE.cart = [];
    }
  }

  // Save cart to localStorage
  function saveCartToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE.cart));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  // -----------------------------------------------------------------
  // 2. DOM ELEMENT REFERENCES
  // -----------------------------------------------------------------
  const DOM = {
    // Header & Nav
    siteHeader: document.getElementById('site-header'),
    cartCounter: document.getElementById('cart-counter'),
    headerCartBtn: document.getElementById('header-cart-btn'),
    headerSearchBtn: document.getElementById('header-search-btn'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileNavPanel: document.getElementById('mobile-nav-panel'),
    mainNavLinks: document.querySelectorAll('.nav-link'),

    // Catalog & Filters
    catalogSearch: document.getElementById('catalog-search'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    catalogCountDisplay: document.getElementById('catalog-count-display'),
    productsGrid: document.getElementById('products-grid'),
    categoryTabsContainer: document.getElementById('category-tabs-container'),
    catTabBtns: document.querySelectorAll('.cat-tab-btn'),

    // Category Counters
    catCountAll: document.getElementById('cat-count-all'),
    catCountVp: document.getElementById('cat-count-vp'),
    catCountSync: document.getElementById('cat-count-sync'),
    catCountAsync: document.getElementById('cat-count-async'),
    catCountRecv: document.getElementById('cat-count-recv'),
    catCountAcc: document.getElementById('cat-count-acc'),
    catCountPanels: document.getElementById('cat-count-panels'),

    // Calculator Elements
    calcModeRes: document.getElementById('calc-mode-res'),
    calcModeDim: document.getElementById('calc-mode-dim'),
    calcResInputs: document.getElementById('calc-res-inputs'),
    calcDimInputs: document.getElementById('calc-dim-inputs'),
    calcPixelWidth: document.getElementById('calc-pixel-width'),
    calcPixelHeight: document.getElementById('calc-pixel-height'),
    calcPhysicalWidth: document.getElementById('calc-physical-width'),
    calcPhysicalHeight: document.getElementById('calc-physical-height'),
    calcPitchSelect: document.getElementById('calc-pitch-select'),
    calcCabinetType: document.getElementById('calc-cabinet-type'),
    presetChips: document.querySelectorAll('.preset-chip'),

    // Calculator Outputs
    calcTotalPixels: document.getElementById('calc-total-pixels'),
    calcAspectRatio: document.getElementById('calc-aspect-ratio'),
    recProcessorName: document.getElementById('rec-processor-name'),
    recProcessorMeta: document.getElementById('rec-processor-meta'),
    recProcessorGauge: document.getElementById('rec-processor-gauge'),
    recProcessorLoadPct: document.getElementById('rec-processor-load-pct'),
    recRcName: document.getElementById('rec-rc-name'),
    recRcCount: document.getElementById('rec-rc-count'),
    calcCablesNeeded: document.getElementById('calc-cables-needed'),
    calcPowerEstimate: document.getElementById('calc-power-estimate'),
    calcAreaEstimate: document.getElementById('calc-area-estimate'),
    calcAddBundleBtn: document.getElementById('calc-add-bundle-btn'),

    // Drawer Elements
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    cartDrawer: document.getElementById('cart-drawer'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    drawerCartCount: document.getElementById('drawer-cart-count'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartEmptyState: document.getElementById('cart-empty-state'),
    rfqFormContainer: document.getElementById('rfq-form-container'),
    rfqForm: document.getElementById('rfq-form'),
    drawerFooter: document.getElementById('drawer-footer'),
    drawerTotalQty: document.getElementById('drawer-total-qty'),
    emptyCartBrowseBtn: document.getElementById('empty-cart-browse-btn'),

    // Spec Modal Elements
    specModalBackdrop: document.getElementById('spec-modal-backdrop'),
    modalModelTitle: document.getElementById('modal-model-title'),
    modalTagline: document.getElementById('modal-tagline'),
    modalQuickChips: document.getElementById('modal-quick-chips'),
    modalTableBody: document.getElementById('modal-table-body'),
    modalRecommendedText: document.getElementById('modal-recommended-text'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalDatasheetBtn: document.getElementById('modal-datasheet-btn'),
    modalAddCartBtn: document.getElementById('modal-add-cart-btn'),

    // Receipt Modal Elements
    receiptModalBackdrop: document.getElementById('receipt-modal-backdrop'),
    receiptRfqId: document.getElementById('receipt-rfq-id'),
    receiptSummaryLedger: document.getElementById('receipt-summary-ledger'),
    receiptPrintBtn: document.getElementById('receipt-print-btn'),
    receiptCloseBtn: document.getElementById('receipt-close-btn'),

    // Toast Container
    toastContainer: document.getElementById('toast-container')
  };

  // -----------------------------------------------------------------
  // 3. TOAST NOTIFICATION UTILITY
  // -----------------------------------------------------------------
  function showToast(message, type = 'success') {
    if (!DOM.toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
    } else {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    toast.innerHTML = `
      <span>${iconSvg}</span>
      <div style="flex: 1; font-size: 0.8125rem;">${message}</div>
    `;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // -----------------------------------------------------------------
  // 4. CATALOG RENDERING & FILTERING
  // -----------------------------------------------------------------
  function updateCategoryTabCounts() {
    if (typeof HARDWARE_CATALOG === 'undefined') return;

    const counts = {
      all: HARDWARE_CATALOG.length,
      'video-processors': 0,
      synchronous: 0,
      asynchronous: 0,
      'receiving-cards': 0,
      accessories: 0,
      panels: 0
    };

    HARDWARE_CATALOG.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    if (DOM.catCountAll) DOM.catCountAll.textContent = counts.all;
    if (DOM.catCountVp) DOM.catCountVp.textContent = counts['video-processors'];
    if (DOM.catCountSync) DOM.catCountSync.textContent = counts.synchronous;
    if (DOM.catCountAsync) DOM.catCountAsync.textContent = counts.asynchronous;
    if (DOM.catCountRecv) DOM.catCountRecv.textContent = counts['receiving-cards'];
    if (DOM.catCountAcc) DOM.catCountAcc.textContent = counts.accessories;
    if (DOM.catCountPanels) DOM.catCountPanels.textContent = counts.panels;
  }

  function getFilteredProducts() {
    if (typeof HARDWARE_CATALOG === 'undefined') return [];

    let list = HARDWARE_CATALOG;

    // Filter by category
    if (STATE.currentCategory !== 'all') {
      list = list.filter(p => p.category === STATE.currentCategory);
    }

    // Filter by search query
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase().trim();
      list = list.filter(p => {
        const inModel = p.model.toLowerCase().includes(q);
        const inTagline = p.tagline.toLowerCase().includes(q);
        const inCategory = p.categoryName.toLowerCase().includes(q);
        const inPorts = p.keySpecs && p.keySpecs.ports ? p.keySpecs.ports.toLowerCase().includes(q) : false;
        const inRecommended = p.recommendedFor ? p.recommendedFor.toLowerCase().includes(q) : false;
        return inModel || inTagline || inCategory || inPorts || inRecommended;
      });
    }

    return list;
  }

  function renderProductCards() {
    if (!DOM.productsGrid) return;

    const products = getFilteredProducts();

    if (DOM.catalogCountDisplay) {
      DOM.catalogCountDisplay.textContent = products.length;
    }

    if (products.length === 0) {
      DOM.productsGrid.innerHTML = `
        <div class="no-results-state">
          <div class="no-results-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <h3 style="color: #ffffff; font-size: 1.125rem;">No Matching Hardware SKUs Found</h3>
          <p style="font-size: 0.875rem; color: var(--text-dim); max-width: 420px;">
            No controller or processor matched your query "${STATE.searchQuery}". Try searching for VP1620, R512S, T901, W62, or reset category filter.
          </p>
          <button class="btn btn-secondary btn-sm" id="reset-filter-btn">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          STATE.currentCategory = 'all';
          STATE.searchQuery = '';
          if (DOM.catalogSearch) DOM.catalogSearch.value = '';
          if (DOM.searchClearBtn) DOM.searchClearBtn.style.display = 'none';
          DOM.catTabBtns.forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
          renderProductCards();
        });
      }
      return;
    }

    DOM.productsGrid.innerHTML = products.map(product => {
      // Determine Schematic Icon based on category
      let categoryIcon = '';
      if (product.category === 'video-processors') {
        categoryIcon = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>';
      } else if (product.category === 'synchronous') {
        categoryIcon = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>';
      } else if (product.category === 'asynchronous') {
        categoryIcon = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>';
      } else if (product.category === 'receiving-cards') {
        categoryIcon = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>';
      } else if (product.category === 'accessories') {
        categoryIcon = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg>';
      } else {
        categoryIcon = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>';
      }

      const badgeHtml = product.badge
        ? `<span class="tech-badge ${product.badgeColor || 'primary'}">${product.badge}</span>`
        : '';

      return `
        <article class="product-card" data-id="${product.id}">
          <div>
            <div class="product-card-top">
              <span class="model-tag">${product.model}</span>
              ${badgeHtml}
            </div>

            <!-- Hardware Schematic Blueprint Thumbnail -->
            <div class="product-thumb-container">
              <div class="product-schematic-visual">
                <div class="product-schematic-icon">${categoryIcon}</div>
                <div class="product-schematic-portcode mono">${product.keySpecs ? product.keySpecs.ports : 'HUIDU AB-CHIP'}</div>
              </div>
            </div>

            <h3 class="product-tagline">${product.tagline}</h3>

            <div class="product-capacity-pill">
              <span class="capacity-title">Max Capacity:</span>
              <span class="capacity-val">${product.pixelFormatted}</span>
            </div>

            <div class="specs-mini-ledger">
              <div class="spec-line">
                <span class="spec-k">Resolution:</span>
                <span class="spec-v" title="${product.maxResolution}">${product.maxResolution}</span>
              </div>
              <div class="spec-line">
                <span class="spec-k">Interfaces:</span>
                <span class="spec-v" title="${product.keySpecs ? product.keySpecs.ports : ''}">${product.keySpecs ? product.keySpecs.ports : 'N/A'}</span>
              </div>
              <div class="spec-line">
                <span class="spec-k">Control:</span>
                <span class="spec-v" title="${product.keySpecs ? product.keySpecs.control : ''}">${product.keySpecs ? product.keySpecs.control : 'HDPlayer / LedArt'}</span>
              </div>
            </div>
          </div>

          <!-- Product Card Action Buttons -->
          <div class="product-card-actions">
            <button class="btn btn-secondary btn-sm quick-view-btn" data-id="${product.id}" title="View Full Spec Matrix">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>Spec Sheet</span>
            </button>
            <button class="btn btn-primary btn-sm add-to-quote-btn" data-id="${product.id}" title="Add to Quote Cart">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Add Quote</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach Event Listeners to Card Buttons
    DOM.productsGrid.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        openSpecModal(id);
      });
    });

    DOM.productsGrid.querySelectorAll('.add-to-quote-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        addToCart(id, 1);
      });
    });
  }

  // -----------------------------------------------------------------
  // 5. INTERACTIVE TECHNICAL SPEC MODAL
  // -----------------------------------------------------------------
  function openSpecModal(productId) {
    if (typeof HARDWARE_CATALOG === 'undefined') return;
    const product = HARDWARE_CATALOG.find(p => p.id === productId);
    if (!product) return;

    STATE.activeModalProductId = product.id;

    if (DOM.modalModelTitle) DOM.modalModelTitle.textContent = product.model;
    if (DOM.modalTagline) DOM.modalTagline.textContent = product.tagline;

    // Quick chips
    if (DOM.modalQuickChips) {
      DOM.modalQuickChips.innerHTML = `
        <div class="check-item">
          <span class="check-item-title">Max Load Capacity</span>
          <span class="check-item-value" style="color: #60a5fa;">${product.pixelFormatted}</span>
        </div>
        <div class="check-item">
          <span class="check-item-title">I/O Ports</span>
          <span class="check-item-value" style="font-size: 0.8125rem;">${product.keySpecs ? product.keySpecs.ports : 'Standard Interface'}</span>
        </div>
        <div class="check-item">
          <span class="check-item-title">Power Specs</span>
          <span class="check-item-value" style="font-size: 0.8125rem;">${product.keySpecs ? product.keySpecs.power : 'AC 100-240V'}</span>
        </div>
      `;
    }

    // Spec Matrix Table
    if (DOM.modalTableBody) {
      if (product.specsTable && product.specsTable.length > 0) {
        DOM.modalTableBody.innerHTML = product.specsTable.map(row => `
          <tr>
            <th>${row.param}</th>
            <td>${row.val}</td>
          </tr>
        `).join('');
      } else {
        DOM.modalTableBody.innerHTML = `
          <tr><th>Resolution Bounds</th><td>${product.maxResolution}</td></tr>
          <tr><th>Input Interfaces</th><td>${product.keySpecs ? product.keySpecs.inputs : 'Standard'}</td></tr>
          <tr><th>Output Ports</th><td>${product.keySpecs ? product.keySpecs.outputs : 'Standard'}</td></tr>
          <tr><th>Features</th><td>${product.keySpecs ? product.keySpecs.features : 'Standard'}</td></tr>
        `;
      }
    }

    if (DOM.modalRecommendedText) {
      DOM.modalRecommendedText.textContent = product.recommendedFor || 'Commercial LED display installations.';
    }

    // Show modal
    if (DOM.specModalBackdrop) {
      DOM.specModalBackdrop.classList.add('active');
      DOM.specModalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSpecModal() {
    if (DOM.specModalBackdrop) {
      DOM.specModalBackdrop.classList.remove('active');
      DOM.specModalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      STATE.activeModalProductId = null;
    }
  }

  // -----------------------------------------------------------------
  // 6. INTERACTIVE LED SCREEN SIZING CALCULATOR
  // -----------------------------------------------------------------
  function calculateSizing() {
    let widthPx = 1920;
    let heightPx = 1080;
    let areaM2 = 12.96;

    if (STATE.calcMode === 'res') {
      widthPx = parseInt(DOM.calcPixelWidth.value, 10) || 1920;
      heightPx = parseInt(DOM.calcPixelHeight.value, 10) || 1080;
      
      // Calculate estimated physical size using selected cabinet pitch
      const pitch = parseFloat(DOM.calcPitchSelect ? DOM.calcPitchSelect.value : 2.5);
      const widthM = (widthPx * pitch) / 1000;
      const heightM = (heightPx * pitch) / 1000;
      areaM2 = widthM * heightM;
    } else {
      const widthM = parseFloat(DOM.calcPhysicalWidth.value) || 4.8;
      const heightM = parseFloat(DOM.calcPhysicalHeight.value) || 2.7;
      const pitch = parseFloat(DOM.calcPitchSelect.value) || 2.5;

      widthPx = Math.round((widthM * 1000) / pitch);
      heightPx = Math.round((heightM * 1000) / pitch);
      areaM2 = widthM * heightM;

      // Sync display in direct inputs
      if (DOM.calcPixelWidth) DOM.calcPixelWidth.value = widthPx;
      if (DOM.calcPixelHeight) DOM.calcPixelHeight.value = heightPx;
    }

    const totalPixels = widthPx * heightPx;

    // Display formatted total
    if (DOM.calcTotalPixels) {
      DOM.calcTotalPixels.textContent = totalPixels.toLocaleString('en-US');
    }

    // Display aspect ratio
    if (DOM.calcAspectRatio) {
      const gcd = (a, b) => b ? gcd(b, a % b) : a;
      const divisor = gcd(widthPx, heightPx);
      const ratioW = widthPx / divisor;
      const ratioH = heightPx / divisor;
      
      let ratioText = `Aspect Ratio: ${ratioW}:${ratioH}`;
      if (Math.abs((widthPx / heightPx) - (16 / 9)) < 0.05) {
        ratioText = `Aspect Ratio: 16:9 Standard HD/FHD`;
      } else if (Math.abs((widthPx / heightPx) - (4 / 3)) < 0.05) {
        ratioText = `Aspect Ratio: 4:3 Classical`;
      } else if (Math.abs((widthPx / heightPx) - (21 / 9)) < 0.05) {
        ratioText = `Aspect Ratio: 21:9 Ultrawide`;
      }
      DOM.calcAspectRatio.textContent = `${ratioText} • (${widthPx} × ${heightPx} px)`;
    }

    // Determine Required Gigabit RJ45 Network Ports (Carrier rule: max 650,000 px / Gigabit port)
    const maxPortCapacity = 650000;
    const minPortsNeeded = Math.max(1, Math.ceil(totalPixels / maxPortCapacity));

    if (DOM.calcCablesNeeded) {
      DOM.calcCablesNeeded.textContent = `${minPortsNeeded} RJ45 Network Line${minPortsNeeded > 1 ? 's' : ''}`;
    }

    // Recommended Video Processor Match
    let recProc = {
      model: 'HD-VP210',
      meta: '1.3M Capacity • 2× Gigabit RJ45',
      maxPx: 1300000,
      id: 'hd-vp210'
    };

    if (totalPixels <= 1300000) {
      recProc = { model: 'HD-VP210', meta: '1.3M Capacity • 2× Gigabit RJ45', maxPx: 1300000, id: 'hd-vp210' };
    } else if (totalPixels <= 2600000) {
      recProc = { model: 'HD-VP410', meta: '2.6M Capacity • 4× Gigabit RJ45', maxPx: 2600000, id: 'hd-vp410' };
    } else if (totalPixels <= 3900000) {
      recProc = { model: 'HD-VP620', meta: '3.9M Capacity • 6× Gigabit RJ45', maxPx: 3900000, id: 'hd-vp620' };
    } else if (totalPixels <= 5200000) {
      recProc = { model: 'HD-VP820', meta: '5.2M Capacity • 8× Gigabit RJ45 (4K In)', maxPx: 5200000, id: 'hd-vp820' };
    } else if (totalPixels <= 7800000) {
      recProc = { model: 'HD-VP1220', meta: '7.8M Capacity • 12× Gigabit RJ45 (4K In)', maxPx: 7800000, id: 'hd-vp1220' };
    } else if (totalPixels <= 10400000) {
      recProc = { model: 'HD-VP1620', meta: '10.4M Flagship • 16× Gigabit RJ45 (4K@60Hz)', maxPx: 10400000, id: 'hd-vp1620' };
    } else {
      const units = Math.ceil(totalPixels / 10400000);
      recProc = { model: `HD-VP1620 ×${units} Cascade`, meta: `${(units * 10.4).toFixed(1)}M Multi-Processor Cluster`, maxPx: units * 10400000, id: 'hd-vp1620' };
    }

    if (DOM.recProcessorName) DOM.recProcessorName.textContent = recProc.model;
    if (DOM.recProcessorMeta) DOM.recProcessorMeta.textContent = recProc.meta;

    // Load gauge
    const loadPct = Math.min(100, Math.round((totalPixels / recProc.maxPx) * 100));
    if (DOM.recProcessorGauge) DOM.recProcessorGauge.style.width = `${loadPct}%`;
    if (DOM.recProcessorLoadPct) DOM.recProcessorLoadPct.textContent = `${loadPct}% Headroom Load`;

    // Recommended Receiving Cards Count
    // Standard rule: 1 receiving card per cabinet or ~65,536 px
    const cabinetType = DOM.calcCabinetType ? DOM.calcCabinetType.value : '640x480';
    let cardCount = Math.max(1, Math.ceil(totalPixels / 65536));
    if (cabinetType === '500x500') {
      cardCount = Math.max(1, Math.ceil(totalPixels / 40000));
    } else if (cabinetType === '500x1000') {
      cardCount = Math.max(1, Math.ceil(totalPixels / 65536));
    } else if (cabinetType === '960x960') {
      cardCount = Math.max(1, Math.ceil(totalPixels / 32768));
    }

    if (DOM.recRcName) DOM.recRcName.textContent = 'HD-R512S PWM';
    if (DOM.recRcCount) DOM.recRcCount.textContent = `${cardCount} Units (1 per cabinet)`;

    // Power Consumption Estimate
    // Standard: 180W avg / 550W peak per m²
    const avgKw = ((areaM2 * 180) / 1000).toFixed(1);
    const peakKw = ((areaM2 * 550) / 1000).toFixed(1);

    if (DOM.calcPowerEstimate) DOM.calcPowerEstimate.textContent = `Avg ${avgKw} kW / Peak ${peakKw} kW`;
    if (DOM.calcAreaEstimate) DOM.calcAreaEstimate.textContent = `${areaM2.toFixed(2)} m²`;

    // Store computed bundle in button dataset
    if (DOM.calcAddBundleBtn) {
      DOM.calcAddBundleBtn.dataset.processorId = recProc.id;
      DOM.calcAddBundleBtn.dataset.rcId = 'hd-r512s';
      DOM.calcAddBundleBtn.dataset.rcQty = cardCount;
    }
  }

  // -----------------------------------------------------------------
  // 7. QUOTE CART & DRAWER STATE MANAGEMENT
  // -----------------------------------------------------------------
  function updateCartUI() {
    const totalQty = STATE.cart.reduce((sum, item) => sum + item.qty, 0);

    if (DOM.cartCounter) DOM.cartCounter.textContent = totalQty;
    if (DOM.drawerCartCount) DOM.drawerCartCount.textContent = totalQty;
    if (DOM.drawerTotalQty) DOM.drawerTotalQty.textContent = `${totalQty} Unit${totalQty !== 1 ? 's' : ''}`;

    if (STATE.cart.length === 0) {
      if (DOM.cartEmptyState) DOM.cartEmptyState.style.display = 'flex';
      if (DOM.cartItemsList) DOM.cartItemsList.style.display = 'none';
      if (DOM.rfqFormContainer) DOM.rfqFormContainer.style.display = 'none';
      if (DOM.drawerFooter) DOM.drawerFooter.style.display = 'none';
    } else {
      if (DOM.cartEmptyState) DOM.cartEmptyState.style.display = 'none';
      if (DOM.cartItemsList) {
        DOM.cartItemsList.style.display = 'flex';
        DOM.cartItemsList.innerHTML = STATE.cart.map(item => `
          <div class="cart-item-row" data-id="${item.id}">
            <div class="cart-item-meta">
              <div class="cart-item-name">${item.model}</div>
              <div class="cart-item-specs">${item.pixelFormatted || item.categoryName}</div>
            </div>
            <div class="cart-qty-controls">
              <button class="qty-btn qty-minus" data-id="${item.id}" aria-label="Decrease quantity">-</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn qty-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-remove-btn" data-id="${item.id}" title="Remove item" aria-label="Remove item">&times;</button>
          </div>
        `).join('');

        // Attach listeners for cart item controls
        DOM.cartItemsList.querySelectorAll('.qty-minus').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            changeCartQty(id, -1);
          });
        });

        DOM.cartItemsList.querySelectorAll('.qty-plus').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            changeCartQty(id, 1);
          });
        });

        DOM.cartItemsList.querySelectorAll('.cart-remove-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            removeFromCart(id);
          });
        });
      }

      if (DOM.rfqFormContainer) DOM.rfqFormContainer.style.display = 'block';
      if (DOM.drawerFooter) DOM.drawerFooter.style.display = 'flex';
    }

    saveCartToStorage();
  }

  function addToCart(productId, qty = 1) {
    if (typeof HARDWARE_CATALOG === 'undefined') return;
    const product = HARDWARE_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = STATE.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      STATE.cart[existingIndex].qty += qty;
    } else {
      STATE.cart.push({
        id: product.id,
        model: product.model,
        category: product.category,
        categoryName: product.categoryName,
        pixelFormatted: product.pixelFormatted,
        qty: qty
      });
    }

    updateCartUI();
    showToast(`Added ${qty}× ${product.model} to Quote Cart!`, 'success');
  }

  function changeCartQty(productId, delta) {
    const item = STATE.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      updateCartUI();
    }
  }

  function removeFromCart(productId) {
    const item = STATE.cart.find(i => i.id === productId);
    const name = item ? item.model : 'Hardware SKU';
    STATE.cart = STATE.cart.filter(i => i.id !== productId);
    updateCartUI();
    showToast(`Removed ${name} from Quote Cart.`, 'info');
  }

  function openCartDrawer() {
    if (DOM.cartDrawer && DOM.drawerBackdrop) {
      DOM.cartDrawer.classList.add('open');
      DOM.drawerBackdrop.classList.add('active');
      DOM.cartDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (DOM.cartDrawer && DOM.drawerBackdrop) {
      DOM.cartDrawer.classList.remove('open');
      DOM.drawerBackdrop.classList.remove('active');
      DOM.cartDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // -----------------------------------------------------------------
  // 8. B2B RFQ FORM VALIDATION & CONFIRMATION RECEIPT
  // -----------------------------------------------------------------
  function handleRfqSubmit(e) {
    e.preventDefault();

    if (STATE.cart.length === 0) {
      showToast('Please add hardware models to quote first.', 'warning');
      return;
    }

    const company = document.getElementById('rfq-company').value.trim();
    const name = document.getElementById('rfq-name').value.trim();
    const email = document.getElementById('rfq-email').value.trim();
    const phone = document.getElementById('rfq-phone').value.trim();
    const timeline = document.getElementById('rfq-timeline').value;
    const notes = document.getElementById('rfq-notes').value.trim();

    // Validation
    if (!company) {
      showToast('Please specify your Company or Organization.', 'warning');
      document.getElementById('rfq-company').focus();
      return;
    }

    if (!name) {
      showToast('Please provide your Contact Person Name.', 'warning');
      document.getElementById('rfq-name').focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showToast('Please provide a valid business email address.', 'warning');
      document.getElementById('rfq-email').focus();
      return;
    }

    if (!phone) {
      showToast('Please provide a phone or WhatsApp contact number.', 'warning');
      document.getElementById('rfq-phone').focus();
      return;
    }

    // Generate RFQ Reference ID
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const rfqId = `RFQ-AB-2026-${randomDigits}`;

    // Close Cart Drawer
    closeCartDrawer();

    // Populate Receipt Modal
    if (DOM.receiptRfqId) DOM.receiptRfqId.textContent = rfqId;
    if (DOM.receiptSummaryLedger) {
      DOM.receiptSummaryLedger.innerHTML = `
        <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
          <div><strong style="color: #ffffff;">Client:</strong> ${company} (${name})</div>
          <div><strong style="color: #ffffff;">Contact:</strong> ${email} | ${phone}</div>
          <div><strong style="color: #ffffff;">Required Delivery:</strong> ${timeline}</div>
          ${notes ? `<div><strong style="color: #ffffff;">Project Notes:</strong> ${notes}</div>` : ''}
        </div>
        <div style="font-weight: 700; color: #60a5fa; margin-bottom: 0.25rem;">Hardware Items (${STATE.cart.reduce((s, i) => s + i.qty, 0)} Units):</div>
        ${STATE.cart.map(i => `
          <div style="display: flex; justify-content: space-between; font-family: var(--font-mono);">
            <span>${i.qty}× ${i.model} (${i.categoryName})</span>
            <span style="color: var(--accent-green-bright);">Verified</span>
          </div>
        `).join('')}
      `;
    }

    // Open Receipt Modal
    if (DOM.receiptModalBackdrop) {
      DOM.receiptModalBackdrop.classList.add('active');
      DOM.receiptModalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    // Reset Cart & Form
    STATE.cart = [];
    updateCartUI();
    DOM.rfqForm.reset();

    showToast(`Inquiry ${rfqId} successfully submitted!`, 'success');
  }

  function closeReceiptModal() {
    if (DOM.receiptModalBackdrop) {
      DOM.receiptModalBackdrop.classList.remove('active');
      DOM.receiptModalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // -----------------------------------------------------------------
  // 9. EVENT LISTENERS SETUP
  // -----------------------------------------------------------------
  function setupEventListeners() {
    // Sticky Header Scroll state
    window.addEventListener('scroll', () => {
      if (DOM.siteHeader) {
        if (window.scrollY > 20) {
          DOM.siteHeader.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
        } else {
          DOM.siteHeader.style.boxShadow = 'none';
        }
      }
    });

    // Mobile Hamburger
    if (DOM.mobileMenuBtn && DOM.mobileNavPanel) {
      DOM.mobileMenuBtn.addEventListener('click', () => {
        DOM.mobileNavPanel.classList.toggle('open');
      });
      DOM.mobileNavPanel.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
          DOM.mobileNavPanel.classList.remove('open');
          const cat = e.currentTarget.dataset.cat;
          if (cat) {
            selectCategoryTab(cat);
          }
        });
      });
    }

    // Desktop Nav Category Links
    DOM.mainNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = e.currentTarget.dataset.cat;
        if (cat) {
          selectCategoryTab(cat);
        }
      });
    });

    // Footer Category Links
    document.querySelectorAll('.footer-links-list a[data-cat]').forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = e.currentTarget.dataset.cat;
        if (cat) {
          selectCategoryTab(cat);
        }
      });
    });

    // Footer Software Triggers
    document.querySelectorAll('.software-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const tool = e.currentTarget.dataset.tool;
        showToast(`Preparing download package for ${tool}... (Direct factory mirror)`, 'info');
      });
    });

    // Header Quick Search Button
    if (DOM.headerSearchBtn) {
      DOM.headerSearchBtn.addEventListener('click', () => {
        const catalogSec = document.getElementById('catalog');
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: 'smooth' });
          if (DOM.catalogSearch) {
            setTimeout(() => DOM.catalogSearch.focus(), 600);
          }
        }
      });
    }

    // Cart Drawer Open/Close
    if (DOM.headerCartBtn) DOM.headerCartBtn.addEventListener('click', openCartDrawer);
    if (DOM.drawerCloseBtn) DOM.drawerCloseBtn.addEventListener('click', closeCartDrawer);
    if (DOM.drawerBackdrop) DOM.drawerBackdrop.addEventListener('click', closeCartDrawer);
    if (DOM.emptyCartBrowseBtn) {
      DOM.emptyCartBrowseBtn.addEventListener('click', () => {
        closeCartDrawer();
        const catalogSec = document.getElementById('catalog');
        if (catalogSec) catalogSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Spec Modal Close
    if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener('click', closeSpecModal);
    if (DOM.specModalBackdrop) {
      DOM.specModalBackdrop.addEventListener('click', (e) => {
        if (e.target === DOM.specModalBackdrop) closeSpecModal();
      });
    }
    if (DOM.modalDatasheetBtn) {
      DOM.modalDatasheetBtn.addEventListener('click', () => {
        showToast('Initiating official engineering datasheet PDF download...', 'info');
      });
    }
    if (DOM.modalAddCartBtn) {
      DOM.modalAddCartBtn.addEventListener('click', () => {
        if (STATE.activeModalProductId) {
          addToCart(STATE.activeModalProductId, 1);
          closeSpecModal();
          openCartDrawer();
        }
      });
    }

    // Receipt Modal Close & Print
    if (DOM.receiptCloseBtn) DOM.receiptCloseBtn.addEventListener('click', closeReceiptModal);
    if (DOM.receiptModalBackdrop) {
      DOM.receiptModalBackdrop.addEventListener('click', (e) => {
        if (e.target === DOM.receiptModalBackdrop) closeReceiptModal();
      });
    }
    if (DOM.receiptPrintBtn) {
      DOM.receiptPrintBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Escape Key Handler for All Modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSpecModal();
        closeCartDrawer();
        closeReceiptModal();
      }
    });

    // Catalog Live Search Input
    if (DOM.catalogSearch) {
      DOM.catalogSearch.addEventListener('input', (e) => {
        STATE.searchQuery = e.target.value;
        if (DOM.searchClearBtn) {
          DOM.searchClearBtn.style.display = STATE.searchQuery ? 'block' : 'none';
        }
        renderProductCards();
      });
    }

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.addEventListener('click', () => {
        if (DOM.catalogSearch) {
          DOM.catalogSearch.value = '';
          STATE.searchQuery = '';
          DOM.searchClearBtn.style.display = 'none';
          renderProductCards();
          DOM.catalogSearch.focus();
        }
      });
    }

    // Category Filter Tabs Clicking
    DOM.catTabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.dataset.category;
        selectCategoryTab(cat);
      });
    });

    // Calculator Mode Switch
    if (DOM.calcModeRes) {
      DOM.calcModeRes.addEventListener('click', () => {
        STATE.calcMode = 'res';
        DOM.calcModeRes.classList.add('active');
        DOM.calcModeDim.classList.remove('active');
        DOM.calcResInputs.style.display = 'block';
        DOM.calcDimInputs.style.display = 'none';
        calculateSizing();
      });
    }

    if (DOM.calcModeDim) {
      DOM.calcModeDim.addEventListener('click', () => {
        STATE.calcMode = 'dim';
        DOM.calcModeDim.classList.add('active');
        DOM.calcModeRes.classList.remove('active');
        DOM.calcResInputs.style.display = 'none';
        DOM.calcDimInputs.style.display = 'block';
        calculateSizing();
      });
    }

    // Calculator Inputs Live Calculation
    const calcInputs = [
      DOM.calcPixelWidth,
      DOM.calcPixelHeight,
      DOM.calcPhysicalWidth,
      DOM.calcPhysicalHeight,
      DOM.calcPitchSelect,
      DOM.calcCabinetType
    ];

    calcInputs.forEach(inp => {
      if (inp) {
        inp.addEventListener('input', calculateSizing);
        inp.addEventListener('change', calculateSizing);
      }
    });

    // Preset Chips
    DOM.presetChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        const w = parseInt(e.currentTarget.dataset.w, 10);
        const h = parseInt(e.currentTarget.dataset.h, 10);
        if (DOM.calcPixelWidth) DOM.calcPixelWidth.value = w;
        if (DOM.calcPixelHeight) DOM.calcPixelHeight.value = h;
        STATE.calcMode = 'res';
        DOM.calcModeRes.classList.add('active');
        DOM.calcModeDim.classList.remove('active');
        DOM.calcResInputs.style.display = 'block';
        DOM.calcDimInputs.style.display = 'none';
        calculateSizing();
        showToast(`Preset Loaded: ${w} × ${h} Pixels`, 'info');
      });
    });

    // Calculator Add Bundle to Quote
    if (DOM.calcAddBundleBtn) {
      DOM.calcAddBundleBtn.addEventListener('click', () => {
        const procId = DOM.calcAddBundleBtn.dataset.processorId || 'hd-vp410';
        const rcId = DOM.calcAddBundleBtn.dataset.rcId || 'hd-r512s';
        const rcQty = parseInt(DOM.calcAddBundleBtn.dataset.rcQty, 10) || 32;

        addToCart(procId, 1);
        addToCart(rcId, rcQty);
        openCartDrawer();
      });
    }

    // RFQ Form Submission
    if (DOM.rfqForm) {
      DOM.rfqForm.addEventListener('submit', handleRfqSubmit);
    }
  }

  function selectCategoryTab(category) {
    STATE.currentCategory = category;
    DOM.catTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderProductCards();
  }

  // -----------------------------------------------------------------
  // 10. INITIALIZATION
  // -----------------------------------------------------------------
  function init() {
    loadCartFromStorage();
    updateCategoryTabCounts();
    renderProductCards();
    calculateSizing();
    updateCartUI();
    setupEventListeners();

    // Subtle Simulated Telemetry Pulse on Cabinet Visual
    const matrixTiles = document.querySelectorAll('.led-cabinet-tile');
    if (matrixTiles.length > 0) {
      setInterval(() => {
        const randomIdx = Math.floor(Math.random() * matrixTiles.length);
        const tile = matrixTiles[randomIdx];
        const dot = tile.querySelector('.tile-indicator');
        if (dot) {
          dot.style.background = '#60a5fa';
          setTimeout(() => {
            dot.style.background = '#10b981';
          }, 300);
        }
      }, 1200);
    }
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
