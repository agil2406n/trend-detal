const config = window.TREND_DETAL_CONFIG || {};

const translations = {
  az: {
    navCatalog: "Kataloq",
    navBrands: "Brendler",
    navAccount: "Hesab",
    navAdmin: "ForkCart",
    navContact: "Elaqe",
    askPrice: "Qiymet sorus",
    heroEyebrow: "Avtomobil ehtiyat hisseleri",
    heroText: "Filtr, yag, eylec, asqi, elektrik ve muherrik hisselerini marka-model ve VIN melumati ile daha deqiq secin.",
    viewCatalog: "Kataloqa bax",
    vinRequest: "VIN ile sorus",
    todayFocus: "Bugunku fokus",
    fastOffer: "15 deqiqeye teklif",
    quickText: "Uyqunluq yoxlanisi, alternativ brendler ve catdirilma desteyi.",
    statProducts: "kataloq pozisiyasi",
    statVin: "deqiq uyqunluq",
    statOnline: "online sorqu",
    statDelivery: "regionlara catdirilma",
    quickSelect: "Suretli secim",
    finderTitle: "Avtomobil melumatini yazin, lazim olan hisseni tez tapin.",
    brand: "Marka",
    modelYear: "Model / il",
    partOrVin: "Detal ve ya VIN",
    search: "Axtar",
    catalog: "Kataloq",
    popularParts: "Populyar ehtiyat hisseleri",
    searchLabel: "Axtaris",
    brandFilter: "Brend",
    stockFilter: "Stok",
    priceFilter: "Maksimum qiymet",
    cartTitle: "Sifaris sebeti",
    cartText: "Secdiyiniz mehsullar WhatsApp ve forma mesajina elave olunur.",
    selectedProducts: "Secilen mehsullar",
    whatsappOrder: "WhatsApp sifaris",
    clearCart: "Sebeti temizle",
    brands: "Brendler",
    accountEyebrow: "Musteri hesabi",
    accountTitle: "Sifarisler, VIN sorqulari ve profil bir yerde.",
    accountText: "Musteri hesabi local demo kimi isleyir. ForkCart auth API qosulanda eyni forma real hesab sistemine baglana biler.",
    loginRegister: "Giris / Qeydiyyat",
    logout: "Cixis",
    orderHistory: "Sifaris tarixcesi",
    login: "Giris",
    loginTitle: "Hesabiniza daxil olun",
    register: "Qeydiyyat",
    registerTitle: "Yeni musteri hesabi",
    password: "Sifre",
    services: "Xidmetler",
    serviceTitle: "Alisi rahatlasdiran destek",
    serviceVin: "VIN ile yoxlama",
    serviceVinText: "Uyqun olmayan detal riskini azaltmaq ucun marka, model, il ve VIN melumati yoxlanilir.",
    serviceCompare: "Qiymet muqayisesi",
    serviceCompareText: "Premium, orta ve serfeli alternativler qisa formada muqayise edilir.",
    serviceDelivery: "Catdirilma desteyi",
    serviceDeliveryText: "Baki ve regionlar ucun sifarisin gonderilmesi operativ teskil edilir.",
    forkcartTitle: "Admin panel ForkCart-da idare olunur.",
    forkcartText: "Mehsullar, qiymetler, stok ve sifarisler ForkCart hesabina qosulmaq ucun hazir adapterle ayrilib.",
    adminStatus: "Admin statusu",
    about: "Haqqimizda",
    aboutTitle: "Trend Detal avtomobiliniz ucun duzgun hisseni secmeye komek edir.",
    aboutText: "Bu sayt musteriye detal axtarisi, qiymet sorqusu ve sifaris prosesini rahatlasdirmaq ucun hazirlanib. Struktur ForkCart admin paneli, mehsul bazasi ve sifaris axini ile genislene bilir.",
    contact: "Elaqe",
    contactTitle: "Qiymet ve uyqunluq sorusun",
    contactText: "Formani doldurun. Secdiyiniz mehsullar sorqu mesajina avtomatik elave olunacaq.",
    name: "Adiniz",
    phone: "Telefon",
    carPart: "Avtomobil ve detal",
    prepareOrder: "Sorqu hazirla",
    footerText: "Avtomobil ehtiyat hisseleri",
  },
  ru: {
    navCatalog: "Katalog",
    navBrands: "Brendy",
    navAccount: "Kabinet",
    navAdmin: "ForkCart",
    navContact: "Kontakt",
    askPrice: "Uznat cenu",
    heroEyebrow: "Avtozapchasti",
    heroText: "Filtry, masla, tormoza, podveska, elektrika i detali dvigatelya po marke, modeli i VIN.",
    viewCatalog: "Smotret katalog",
    vinRequest: "Zapros po VIN",
    todayFocus: "Fokus segodnya",
    fastOffer: "Predlozhenie za 15 minut",
    quickText: "Proverka sovmestimosti, alternativnye brendy i dostavka.",
    statProducts: "poziciy kataloga",
    statVin: "tochnaya sovmestimost",
    statOnline: "online zapros",
    statDelivery: "dostavka po regionam",
    quickSelect: "Bystry podbor",
    finderTitle: "Vvedite dannye avtomobilya i bystro naydite detal.",
    brand: "Marka",
    modelYear: "Model / god",
    partOrVin: "Detal ili VIN",
    search: "Nayti",
    catalog: "Katalog",
    popularParts: "Populyarnye zapchasti",
    searchLabel: "Poisk",
    brandFilter: "Brend",
    stockFilter: "Sklad",
    priceFilter: "Maks. cena",
    cartTitle: "Korzina",
    cartText: "Vybrannye tovary dobavlyayutsya v WhatsApp i formu.",
    selectedProducts: "Vybrannye tovary",
    whatsappOrder: "Zakaz WhatsApp",
    clearCart: "Ochistit",
    brands: "Brendy",
    accountEyebrow: "Kabinet klienta",
    accountTitle: "Zakazy, VIN zaprosy i profil v odnom meste.",
    accountText: "Kabinet rabotaet kak lokalnaya demo-versiya. Pozzhe ego mozhno podklyuchit k ForkCart auth API.",
    loginRegister: "Vhod / Registraciya",
    logout: "Vyhod",
    orderHistory: "Istoriya zakazov",
    login: "Vhod",
    loginTitle: "Voydite v akkaunt",
    register: "Registraciya",
    registerTitle: "Novyy klient",
    password: "Parol",
    services: "Uslugi",
    serviceTitle: "Podderzhka dlya udobnoy pokupki",
    serviceVin: "Proverka po VIN",
    serviceVinText: "Snizhaem risk oshibki po marke, modeli, godu i VIN.",
    serviceCompare: "Sravnenie cen",
    serviceCompareText: "Premium, srednie i dostupnye varianty v odnom sravnenii.",
    serviceDelivery: "Dostavka",
    serviceDeliveryText: "Operativnaya otpravka po Baku i regionam.",
    forkcartTitle: "Admin panel upravlyaetsya v ForkCart.",
    forkcartText: "Tovary, ceny, ostatki i zakazy gotovy k podklyucheniyu ForkCart.",
    adminStatus: "Status admina",
    about: "O nas",
    aboutTitle: "Trend Detal pomogaet vybrat pravilnuyu detal.",
    aboutText: "Sayt uporshchaet poisk detaley, zapros ceny i oformlenie. Struktura gotova dlya ForkCart, bazy tovarov i zakazov.",
    contact: "Kontakt",
    contactTitle: "Zaprosite cenu i sovmestimost",
    contactText: "Zapolnite formu. Vybrannye tovary avtomaticheski dobavyatsya v zapros.",
    name: "Imya",
    phone: "Telefon",
    carPart: "Avto i detal",
    prepareOrder: "Podgotovit zapros",
    footerText: "Avtomobilnye zapchasti",
  },
  en: {
    navCatalog: "Catalog",
    navBrands: "Brands",
    navAccount: "Account",
    navAdmin: "ForkCart",
    navContact: "Contact",
    askPrice: "Ask price",
    heroEyebrow: "Auto spare parts",
    heroText: "Find filters, oil, brakes, suspension, electrical and engine parts by make, model and VIN.",
    viewCatalog: "View catalog",
    vinRequest: "VIN request",
    todayFocus: "Today focus",
    fastOffer: "Offer in 15 minutes",
    quickText: "Compatibility check, alternative brands and delivery support.",
    statProducts: "catalog items",
    statVin: "exact fitment",
    statOnline: "online request",
    statDelivery: "regional delivery",
    quickSelect: "Quick finder",
    finderTitle: "Enter vehicle data and find the right part faster.",
    brand: "Make",
    modelYear: "Model / year",
    partOrVin: "Part or VIN",
    search: "Search",
    catalog: "Catalog",
    popularParts: "Popular spare parts",
    searchLabel: "Search",
    brandFilter: "Brand",
    stockFilter: "Stock",
    priceFilter: "Max price",
    cartTitle: "Order cart",
    cartText: "Selected products are added to WhatsApp and the request form.",
    selectedProducts: "Selected products",
    whatsappOrder: "WhatsApp order",
    clearCart: "Clear cart",
    brands: "Brands",
    accountEyebrow: "Customer account",
    accountTitle: "Orders, VIN requests and profile in one place.",
    accountText: "Customer account works as a local demo. It can later connect to ForkCart auth API.",
    loginRegister: "Login / Register",
    logout: "Logout",
    orderHistory: "Order history",
    login: "Login",
    loginTitle: "Sign in to your account",
    register: "Register",
    registerTitle: "New customer account",
    password: "Password",
    services: "Services",
    serviceTitle: "Support that makes buying easier",
    serviceVin: "VIN check",
    serviceVinText: "Reduce wrong-part risk by checking make, model, year and VIN.",
    serviceCompare: "Price comparison",
    serviceCompareText: "Premium, mid-range and affordable options compared quickly.",
    serviceDelivery: "Delivery support",
    serviceDeliveryText: "Fast shipping coordination for Baku and regions.",
    forkcartTitle: "Admin panel is managed in ForkCart.",
    forkcartText: "Products, prices, stock and orders are separated for ForkCart connection.",
    adminStatus: "Admin status",
    about: "About",
    aboutTitle: "Trend Detal helps choose the right part for your car.",
    aboutText: "The site simplifies part search, price requests and ordering. The structure is ready for ForkCart, product database and order flow.",
    contact: "Contact",
    contactTitle: "Ask price and compatibility",
    contactText: "Fill the form. Selected products are automatically added to the request.",
    name: "Name",
    phone: "Phone",
    carPart: "Vehicle and part",
    prepareOrder: "Prepare request",
    footerText: "Auto spare parts",
  },
};

const state = {
  products: [],
  activeCategory: "Hamisi",
  cart: JSON.parse(localStorage.getItem("trendDetalCart") || "[]"),
  customer: JSON.parse(localStorage.getItem("trendDetalCustomer") || "null"),
  accounts: JSON.parse(localStorage.getItem("trendDetalAccounts") || "[]"),
  orders: JSON.parse(localStorage.getItem("trendDetalOrders") || "[]"),
  lang: localStorage.getItem("trendDetalLang") || "az",
};

const els = {
  productGrid: document.querySelector("[data-products]"),
  searchInput: document.querySelector("[data-search]"),
  categoryFilters: document.querySelector("[data-category-filters]"),
  brandFilter: document.querySelector("[data-brand-filter]"),
  stockFilter: document.querySelector("[data-stock-filter]"),
  priceFilter: document.querySelector("[data-price-filter]"),
  priceValue: document.querySelector("[data-price-value]"),
  selectedCount: document.querySelector("[data-selected-count]"),
  selectedCountForm: document.querySelector("[data-selected-count-form]"),
  cartList: document.querySelector("[data-cart-list]"),
  cartTotal: document.querySelector("[data-cart-total]"),
  whatsappLink: document.querySelector("[data-whatsapp]"),
  orderForm: document.querySelector("[data-order-form]"),
  vinForm: document.querySelector("[data-vin-form]"),
  vinNote: document.querySelector("[data-vin-note]"),
  formNote: document.querySelector("[data-form-note]"),
  navToggle: document.querySelector("[data-nav-toggle]"),
  nav: document.querySelector("[data-nav]"),
  modal: document.querySelector("[data-product-modal]"),
  modalContent: document.querySelector("[data-modal-content]"),
  closeModal: document.querySelector("[data-close-modal]"),
  clearCart: document.querySelector("[data-clear-cart]"),
  accountModal: document.querySelector("[data-account-modal]"),
  closeAccount: document.querySelector("[data-close-account]"),
  openAccountButtons: document.querySelectorAll("[data-open-account]"),
  loginForm: document.querySelector("[data-login-form]"),
  registerForm: document.querySelector("[data-register-form]"),
  accountNote: document.querySelector("[data-account-note]"),
  accountLabel: document.querySelector("[data-account-label]"),
  accountStatus: document.querySelector("[data-account-status]"),
  accountName: document.querySelector("[data-account-name]"),
  logout: document.querySelector("[data-logout]"),
  orderHistory: document.querySelector("[data-order-history]"),
};

const stockLabels = {
  in_stock: "Stokda var",
  order: "Sifarisle",
};

function money(value, currency = "AZN") {
  return `${value} ${currency}`;
}

function saveCart() {
  localStorage.setItem("trendDetalCart", JSON.stringify(state.cart));
}

function saveAccounts() {
  localStorage.setItem("trendDetalAccounts", JSON.stringify(state.accounts));
}

function saveCustomer() {
  if (state.customer) {
    localStorage.setItem("trendDetalCustomer", JSON.stringify(state.customer));
  } else {
    localStorage.removeItem("trendDetalCustomer");
  }
}

function saveOrders() {
  localStorage.setItem("trendDetalOrders", JSON.stringify(state.orders));
}

async function loadProducts() {
  if (config.forkcartApiUrl && config.forkcartApiKey) {
    try {
      const response = await fetch(config.forkcartApiUrl, {
        headers: { Authorization: `Bearer ${config.forkcartApiKey}` },
      });
      if (response.ok) {
        state.products = await response.json();
        return;
      }
    } catch (error) {
      console.warn("ForkCart API fallback:", error);
    }
  }

  const response = await fetch("data/products.json");
  state.products = await response.json();
}

function categories() {
  return ["Hamisi", ...new Set(state.products.map((product) => product.category))];
}

function renderCategoryFilters() {
  els.categoryFilters.innerHTML = categories()
    .map((category) => {
      const count = category === "Hamisi" ? state.products.length : state.products.filter((item) => item.category === category).length;
      const active = category === state.activeCategory ? "active" : "";
      return `<button class="filter ${active}" type="button" data-category="${category}">${category} <span>${count}</span></button>`;
    })
    .join("");
}

function renderBrandFilter() {
  const brands = [...new Set(state.products.map((product) => product.brand))].sort();
  els.brandFilter.innerHTML = `<option value="all">Hamisi</option>${brands.map((brand) => `<option>${brand}</option>`).join("")}`;
}

function filteredProducts() {
  const term = els.searchInput.value.trim().toLowerCase();
  const brand = els.brandFilter.value;
  const stock = els.stockFilter.value;
  const maxPrice = Number(els.priceFilter.value);

  return state.products.filter((product) => {
    const text = `${product.name} ${product.category} ${product.id} ${product.brand} ${product.oem.join(" ")}`.toLowerCase();
    const categoryOk = state.activeCategory === "Hamisi" || product.category === state.activeCategory;
    const termOk = text.includes(term);
    const brandOk = brand === "all" || product.brand === brand;
    const stockOk = stock === "all" || product.stock === stock;
    const priceOk = product.price <= maxPrice;
    return categoryOk && termOk && brandOk && stockOk && priceOk;
  });
}

function cartItem(id) {
  return state.cart.find((item) => item.id === id);
}

function productById(id) {
  return state.products.find((product) => product.id === id);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = productById(item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function renderProducts() {
  const products = filteredProducts();
  els.productGrid.innerHTML = products
    .map((product) => {
      const selected = cartItem(product.id);
      return `
        <article class="product-card">
          <div class="product-topline">
            <span>${product.category}</span>
            <small>${stockLabels[product.stock] || product.stock}</small>
          </div>
          <button class="product-image" type="button" data-detail="${product.id}" aria-label="${product.name}">
            <img src="${product.image}" alt="${product.name}" />
          </button>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-details">
            <span>${product.brand}</span>
            <strong>${money(product.price, product.currency)}</strong>
          </div>
          <div class="product-meta">
            <span>${product.id}</span>
            <div class="product-actions">
              <button type="button" data-detail="${product.id}">Detal</button>
              <button type="button" data-add="${product.id}">${selected ? `+ (${selected.qty})` : "Sec"}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  if (!products.length) {
    els.productGrid.innerHTML = `
      <div class="empty-state">
        <strong>Mehsul tapilmadi</strong>
        <span>Axtaris sozunu deyisin ve ya VIN ile sorqu gonderin.</span>
      </div>
    `;
  }
}

function cartLines() {
  return state.cart
    .map((item) => {
      const product = productById(item.id);
      return product ? `${product.name} (${product.id}) x${item.qty}` : null;
    })
    .filter(Boolean);
}

function updateCart() {
  saveCart();
  const amount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  els.selectedCount.textContent = amount;
  els.selectedCountForm.textContent = amount;
  els.cartTotal.textContent = money(cartTotal());

  els.cartList.innerHTML = state.cart.length
    ? state.cart
        .map((item) => {
          const product = productById(item.id);
          if (!product) return "";
          return `
            <div class="cart-row">
              <span>${product.name}</span>
              <div>
                <button type="button" data-qty-minus="${item.id}">-</button>
                <strong>${item.qty}</strong>
                <button type="button" data-qty-plus="${item.id}">+</button>
              </div>
            </div>
          `;
        })
        .join("")
    : `<span class="cart-empty">Sebet bosdur</span>`;

  const message = cartLines().length
    ? `Salam, Trend Detal. Bu mehsullar ucun sifaris/qiymet sorusuram: ${cartLines().join(", ")}. Cemi: ${money(cartTotal())}`
    : "Salam, Trend Detal. Avtomobil ehtiyat hissesi ucun qiymet sorusuram.";
  els.whatsappLink.href = `https://wa.me/${config.whatsappNumber || "994000000000"}?text=${encodeURIComponent(message)}`;
}

function addToCart(id) {
  const item = cartItem(id);
  if (item) {
    item.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }
  updateCart();
  renderProducts();
}

function changeQty(id, delta) {
  const item = cartItem(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((row) => row.id !== id);
  }
  updateCart();
  renderProducts();
}

function openProductModal(id) {
  const product = productById(id);
  if (!product) return;
  els.modalContent.innerHTML = `
    <div class="modal-grid">
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <p class="eyebrow">${product.category}</p>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <dl>
          <dt>Brend</dt><dd>${product.brand}</dd>
          <dt>Qiymet</dt><dd>${money(product.price, product.currency)}</dd>
          <dt>Stok</dt><dd>${stockLabels[product.stock] || product.stock}</dd>
          <dt>OEM</dt><dd>${product.oem.join(", ")}</dd>
          <dt>Uyqun avtomobiller</dt><dd>${product.fits.join(", ")}</dd>
        </dl>
        <button class="primary-btn" type="button" data-add="${product.id}">Sebete elave et</button>
      </div>
    </div>
  `;
  els.modal.showModal();
}

async function submitToEndpoint(endpoint, payload) {
  if (!endpoint) return { savedLocal: true };
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return response.ok ? response.json().catch(() => ({ ok: true })) : { error: true };
}

function customerOrders() {
  if (!state.customer) return [];
  return state.orders.filter((order) => order.customerEmail === state.customer.email);
}

function renderAccount() {
  if (state.customer) {
    els.accountLabel.textContent = state.customer.name.split(" ")[0] || "Hesab";
    els.accountStatus.textContent = "Hesaba daxil olmusunuz";
    els.accountName.textContent = state.customer.name;
    els.logout.hidden = false;
  } else {
    els.accountLabel.textContent = "Giris";
    els.accountStatus.textContent = "Hesaba giris edilmeyib";
    els.accountName.textContent = "Qonaq";
    els.logout.hidden = true;
  }

  const orders = customerOrders();
  els.orderHistory.innerHTML = orders.length
    ? orders
        .map(
          (order) => `
            <div class="history-row">
              <strong>${money(order.total || 0)}</strong>
              <span>${new Date(order.createdAt).toLocaleDateString()}</span>
              <small>${(order.lines || []).join(", ") || "VIN sorqusu"}</small>
            </div>
          `
        )
        .join("")
    : `<span class="cart-empty">Tarixce bosdur</span>`;
}

async function registerCustomer(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const exists = state.accounts.some((account) => account.email.toLowerCase() === data.email.toLowerCase());
  if (exists) {
    els.accountNote.textContent = "Bu email ile hesab artiq var.";
    return;
  }

  const customer = {
    id: `C-${Date.now()}`,
    name: data.name,
    email: data.email,
    phone: data.phone,
    password: data.password,
    createdAt: new Date().toISOString(),
  };

  await submitToEndpoint(config.customerRegisterEndpoint, customer);
  state.accounts.push(customer);
  state.customer = { id: customer.id, name: customer.name, email: customer.email, phone: customer.phone };
  saveAccounts();
  saveCustomer();
  els.accountNote.textContent = "Hesab yaradildi.";
  form.reset();
  renderAccount();
}

async function loginCustomer(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  await submitToEndpoint(config.customerLoginEndpoint, { email: data.email });
  const account = state.accounts.find(
    (item) => item.email.toLowerCase() === data.email.toLowerCase() && item.password === data.password
  );
  if (!account) {
    els.accountNote.textContent = "Email ve ya sifre yanlisdir.";
    return;
  }
  state.customer = { id: account.id, name: account.name, email: account.email, phone: account.phone };
  saveCustomer();
  els.accountNote.textContent = "Giris ugurludur.";
  form.reset();
  renderAccount();
}

function logoutCustomer() {
  state.customer = null;
  saveCustomer();
  renderAccount();
}

async function submitOrder(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  if (state.customer) {
    data.name = data.name || state.customer.name;
    data.phone = data.phone || state.customer.phone;
    data.email = state.customer.email;
  }
  const payload = {
    type: "order",
    customer: data,
    customerEmail: data.email || "",
    cart: state.cart,
    lines: cartLines(),
    total: cartTotal(),
    createdAt: new Date().toISOString(),
  };
  state.orders.unshift(payload);
  saveOrders();
  localStorage.setItem("trendDetalLastOrder", JSON.stringify(payload));
  await submitToEndpoint(config.orderEndpoint, payload);
  els.formNote.textContent = `Sorqu hazirdir: ${cartLines().join(", ") || "mehsul secilmeyib"}. WhatsApp linkinden gondere bilersiniz.`;
  form.reset();
  renderAccount();
}

async function submitVin(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const payload = {
    type: "vin",
    data,
    customerEmail: state.customer?.email || "",
    lines: [`VIN: ${data.brand} ${data.model || ""} ${data.part || ""}`],
    total: 0,
    createdAt: new Date().toISOString(),
  };
  if (state.customer) {
    state.orders.unshift(payload);
    saveOrders();
  }
  localStorage.setItem("trendDetalLastVin", JSON.stringify(payload));
  await submitToEndpoint(config.vinEndpoint, payload);
  els.vinNote.textContent = `${data.brand} ${data.model || ""} ucun "${data.part || "detal"}" VIN sorqusu hazirlandi.`;
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  renderAccount();
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.az;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  state.lang = lang;
  localStorage.setItem("trendDetalLang", lang);
}

function setupForkCartLinks() {
  const admin = document.querySelector("[data-forkcart-admin]");
  const store = document.querySelector("[data-forkcart-store]");
  const status = document.querySelector("[data-forkcart-status]");
  admin.href = config.forkcartAdminUrl || "#";
  store.href = config.forkcartStoreUrl || "#";
  status.textContent = config.forkcartApiUrl ? "API qosulub" : "Config hazirdir";
}

function bindEvents() {
  els.categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.activeCategory = button.dataset.category;
    renderCategoryFilters();
    renderProducts();
  });

  [els.searchInput, els.brandFilter, els.stockFilter, els.priceFilter].forEach((control) => {
    control.addEventListener("input", () => {
      els.priceValue.textContent = els.priceFilter.value;
      renderProducts();
    });
  });

  els.productGrid.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    const detail = event.target.closest("[data-detail]");
    if (add) addToCart(add.dataset.add);
    if (detail) openProductModal(detail.dataset.detail);
  });

  els.modalContent.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    if (add) addToCart(add.dataset.add);
  });

  els.cartList.addEventListener("click", (event) => {
    const plus = event.target.closest("[data-qty-plus]");
    const minus = event.target.closest("[data-qty-minus]");
    if (plus) changeQty(plus.dataset.qtyPlus, 1);
    if (minus) changeQty(minus.dataset.qtyMinus, -1);
  });

  els.clearCart.addEventListener("click", () => {
    state.cart = [];
    updateCart();
    renderProducts();
  });

  els.closeModal.addEventListener("click", () => els.modal.close());
  els.openAccountButtons.forEach((button) => {
    button.addEventListener("click", () => els.accountModal.showModal());
  });
  els.closeAccount.addEventListener("click", () => els.accountModal.close());
  els.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginCustomer(els.loginForm);
  });
  els.registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    registerCustomer(els.registerForm);
  });
  els.logout.addEventListener("click", logoutCustomer);
  els.orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitOrder(els.orderForm);
  });
  els.vinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitVin(els.vinForm);
  });

  els.navToggle.addEventListener("click", () => {
    const isOpen = els.nav.classList.toggle("open");
    els.navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  els.nav.addEventListener("click", () => {
    els.nav.classList.remove("open");
    els.navToggle.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
}

async function init() {
  await loadProducts();
  setupForkCartLinks();
  renderCategoryFilters();
  renderBrandFilter();
  bindEvents();
  applyLanguage(state.lang);
  els.priceValue.textContent = els.priceFilter.value;
  renderProducts();
  updateCart();
  renderAccount();
}

init();
