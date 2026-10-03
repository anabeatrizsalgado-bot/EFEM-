// ==========================================
// BANCO DE DADOS COMPLETO DOS PRODUTOS
// ==========================================
const PRODUCTS_DATA = [
    // VESTIDOS
    {
        id: 1,
        title: "Vestido Midi Alfaiataria Elegance",
        category: "Vestidos",
        season: "Outono",
        price: 249.90,
        oldPrice: 299.90,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600",
        description: "Vestido midi em alfaiataria premium com caimento estruturado, ideal para ocasiões formais ou trabalho sofisticado.",
        colors: ["Nude", "Preto", "Off-White"],
        isNew: true,
        isPromo: true
    },
    {
        id: 7,
        title: "Vestido Floral Fluido Verão",
        category: "Vestidos",
        season: "Verão",
        price: 199.90,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600",
        description: "Vestido leve e esvoaçante com estampa floral exclusiva, perfeito para dias quentes e passeios.",
        colors: ["Amarelo", "Rosa Chá"],
        isNew: true,
        isPromo: false
    },
    {
        id: 12,
        title: "Vestido Longo Cetim Satin Glow",
        category: "Vestidos",
        season: "Primavera",
        price: 329.90,
        oldPrice: 389.90,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600",
        description: "Vestido longo acetinado com decote degagê delicado e fenda lateral elegante.",
        colors: ["Verde Esmeralda", "Terracota", "Preto"],
        isNew: true,
        isPromo: true
    },
    {
        id: 13,
        title: "Vestido Canelado Gola Alta Minimal",
        category: "Vestidos",
        season: "Inverno",
        price: 159.90,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600",
        description: "Vestido ajustado em malha canelada encorpada com gola alta, unindo conforto e modernidade.",
        colors: ["Cinza Mescla", "Preto", "Bege"],
        isNew: false,
        isPromo: false
    },

    // CONJUNTOS
    {
        id: 2,
        title: "Conjunto Linen Chic (Blazer + Short)",
        category: "Conjuntos",
        season: "Primavera",
        price: 319.00,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600",
        description: "Conjunto leve em linho misto com acabamento delicado. Acompanha blazer acinturado e shorts de cintura alta.",
        colors: ["Bege Champanhe", "Terracota"],
        isNew: true,
        isPromo: false
    },
    {
        id: 8,
        title: "Conjunto Moletom Soft Inverno",
        category: "Conjuntos",
        season: "Inverno",
        price: 279.90,
        oldPrice: 329.90,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600",
        description: "Conjunto aconchegante de moletom aveludado interno, com corte moderno para dias frios.",
        colors: ["Cinza Mescla", "Off-White"],
        isNew: false,
        isPromo: true
    },
    {
        id: 14,
        title: "Conjunto Tweed Classy (Colete + Saia)",
        category: "Conjuntos",
        season: "Outono",
        price: 349.90,
        oldPrice: 399.90,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=600",
        description: "Conjunto em tweed texturizado composto por colete estruturado e mini saia evasê.",
        colors: ["Rosa Quartz", "Preto & Branco"],
        isNew: true,
        isPromo: true
    },

    // SHORTS
    {
        id: 9,
        title: "Short Alfaiataria Cinto Spike",
        category: "Shorts",
        season: "Verão",
        price: 139.90,
        oldPrice: 169.90,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600",
        description: "Short em alfaiataria com bolso faca e cinto encapado do mesmo tecido.",
        colors: ["Verde Menta", "Preto", "Bege"],
        isNew: true,
        isPromo: true
    },
    {
        id: 15,
        title: "Short Jeans High Waist Vintage",
        category: "Shorts",
        season: "Verão",
        price: 129.90,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600",
        description: "Short jeans 100% algodão com lavagem vintage e barra desfiada.",
        colors: ["Jeans Claro", "Jeans Médio"],
        isNew: false,
        isPromo: false
    },

    // CROPPED
    {
        id: 3,
        title: "Cropped Ribana Manga Longa",
        category: "Cropped",
        season: "Inverno",
        price: 89.90,
        oldPrice: 119.90,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600",
        description: "Cropped de malha ribana com toque macio e excelente elasticidade.",
        colors: ["Preto", "Branco", "Mousse"],
        isNew: false,
        isPromo: true
    },
    {
        id: 16,
        title: "Cropped Corset Courino Básico",
        category: "Cropped",
        season: "Outono",
        price: 119.90,
        oldPrice: 149.90,
        image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80&w=600",
        description: "Cropped modelo corset em material sintético flexível com barbatanas para melhor sustentação.",
        colors: ["Preto", "Caramelo"],
        isNew: true,
        isPromo: true
    },

    // CAMISAS & BLUSAS
    {
        id: 4,
        title: "Camisa de Seda Botões Dourados",
        category: "Camisas",
        season: "Outono",
        price: 189.90,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=600",
        description: "Camisa feminina em cetim acetinado e detalhe de botões trabalhados em tom dourado.",
        colors: ["Champanhe", "Verde Oliva"],
        isNew: true,
        isPromo: false
    },
    {
        id: 10,
        title: "Blusa Tricot Trançado Delicado",
        category: "Blusas",
        season: "Primavera",
        price: 159.90,
        oldPrice: 189.90,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=600",
        description: "Blusa em tricot leve com detalhes rendados vazados, ideal para a meia-estação.",
        colors: ["Nude", "Lilás Soft"],
        isNew: false,
        isPromo: true
    },
    {
        id: 17,
        title: "Camisa Linho Pure Breeze",
        category: "Camisas",
        season: "Verão",
        price: 219.90,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600",
        description: "Camisa oversized em linho puro respirável com bolso frontal discreto.",
        colors: ["Off-White", "Azul Serenity", "Areia"],
        isNew: true,
        isPromo: false
    },

    // JAQUETAS / CASACOS
    {
        id: 5,
        title: "Jaqueta Couro P.U. Acinturada",
        category: "Jaquetas",
        season: "Inverno",
        price: 349.90,
        oldPrice: 399.90,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600",
        description: "Jaqueta em sintético premium estilo biker com zíperes reforçados e forro térmico suave.",
        colors: ["Preto", "Caramelo"],
        isNew: false,
        isPromo: true
    },
    {
        id: 18,
        title: "Sobretudo Wool Warm Elegance",
        category: "Jaquetas",
        season: "Inverno",
        price: 489.90,
        oldPrice: 559.90,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600",
        description: "Sobretudo longo encorpado de lã batida sintética com faixa para amarração na cintura.",
        colors: ["Camelo", "Preto", "Cinza Chumbo"],
        isNew: true,
        isPromo: true
    },

    // BODYS
    {
        id: 6,
        title: "Body Anarruga Decote Quadrado",
        category: "Bodys",
        season: "Verão",
        price: 99.90,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600",
        description: "Body com tecido anarruga texturizado que se molda perfeitamente ao corpo com extremo conforto.",
        colors: ["Nude", "Preto"],
        isNew: true,
        isPromo: false
    },
    {
        id: 19,
        title: "Body Suplex Manga Única Asimétrico",
        category: "Bodys",
        season: "Primavera",
        price: 109.90,
        oldPrice: 129.90,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=600",
        description: "Body em suplex de alta compressão com recorte assimétrico de um ombro só.",
        colors: ["Preto", "Branco", "Vinho"],
        isNew: true,
        isPromo: true
    },

    // ACESSÓRIOS
    {
        id: 11,
        title: "Cinto Couro Fivela Dourada Minimalista",
        category: "Acessórios",
        season: "Outono",
        price: 69.90,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=600",
        description: "Cinto em couro legítimo com fivela retangular banhada a ouro para compor qualquer look.",
        colors: ["Caramelo", "Preto"],
        isNew: true,
        isPromo: false
    },
    {
        id: 20,
        title: "Bolsa Shoulder Bag Leather Soft",
        category: "Acessórios",
        season: "Outono",
        price: 189.90,
        oldPrice: 229.90,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600",
        description: "Bolsa tiracolo em couro sintético macio com alça regulável e acabamento impecável.",
        colors: ["Nude", "Preto", "Café"],
        isNew: true,
        isPromo: true
    },
    {
        id: 21,
        title: "Brinco Argola Banhada Organic Gold",
        category: "Acessórios",
        season: "Verão",
        price: 49.90,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600",
        description: "Argola média com design orgânico abaulado, leve e banhada em ouro 18k.",
        colors: ["Dourado"],
        isNew: true,
        isPromo: false
    }
];

// ESTADOS GLOBAIS DA LOJA
let cart = [];
let activeCategory = "Todos";
let searchQuery = "";

let currentModalProduct = null;
let selectedSize = "M";
let selectedColor = "";

// INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(PRODUCTS_DATA);
});

// ==========================================
// RENDERIZAÇÃO DOS PRODUTOS
// ==========================================
function renderProducts(products) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    
    grid.innerHTML = "";

    if (products.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-gray-500">
                <i class="fa-solid fa-magnifying-glass text-3xl mb-2 text-[#E5D2C5]"></i>
                <p class="text-sm font-semibold">Nenhum produto encontrado nesta seleção.</p>
            </div>
        `;
        return;
    }

    products.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "bg-white border border-[#E5D2C5]/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group";

    const formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const formattedOldPrice = product.oldPrice ? product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : null;

    card.innerHTML = `
        <div>
            <div class="relative overflow-hidden aspect-[3/4] bg-[#F8EFEA] cursor-pointer" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                
                <div class="absolute top-2 left-2 flex flex-col gap-1">
                    ${product.isPromo ? '<span class="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Promo</span>' : ''}
                    ${product.isNew ? '<span class="bg-[#2C2421] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Novo</span>' : ''}
                </div>

                <button onclick="event.stopPropagation(); addToCart(${product.id})" class="absolute bottom-3 right-3 bg-white/90 hover:bg-[#2C2421] hover:text-white text-[#2C2421] w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors">
                    <i class="fa-solid fa-bag-shopping text-xs"></i>
                </button>
            </div>

            <div class="p-4">
                <span class="text-[9px] text-[#A67B5B] font-bold uppercase tracking-wider block mb-1">
                    ${product.category} ${product.season ? `• ${product.season}` : ''}
                </span>
                
                <h3 onclick="openProductModal(${product.id})" class="font-serif text-xs md:text-sm font-bold text-[#2C2421] hover:text-[#A67B5B] transition-colors cursor-pointer line-clamp-1 mb-2">
                    ${product.title}
                </h3>

                <div class="flex items-baseline gap-2">
                    <span class="text-sm md:text-base font-bold text-[#2C2421]">
                        ${formattedPrice}
                    </span>
                    ${formattedOldPrice ? `<span class="text-xs text-gray-400 line-through">${formattedOldPrice}</span>` : ''}
                </div>
            </div>
        </div>

        <div class="px-4 pb-4">
            <button onclick="openProductModal(${product.id})" class="w-full py-2 bg-[#FAF6F3] hover:bg-[#2C2421] text-[#2C2421] hover:text-white text-xs font-semibold rounded-xl transition-colors border border-[#E5D2C5]">
                Ver Detalhes
            </button>
        </div>
    `;

    return card;
}

// ==========================================
// FILTROS E BUSCA
// ==========================================
function filterCategory(category) {
    activeCategory = category;

    const titleElem = document.getElementById("currentCategoryTitle");
    if (titleElem) {
        titleElem.textContent = category === 'Todos' ? 'Todas as Peças' : category;
    }

    applyFilters();
}

function handleSearch() {
    searchQuery = document.getElementById("searchInput")?.value.toLowerCase() || "";
    applyFilters();
}

function handleSearchMobile() {
    searchQuery = document.getElementById("searchInputMobile")?.value.toLowerCase() || "";
    applyFilters();
}

function applyFilters() {
    let filtered = PRODUCTS_DATA.filter(product => {
        // Filtro por Categoria
        let matchCategory = false;
        if (activeCategory === "Todos") matchCategory = true;
        else if (activeCategory === "Feminino") matchCategory = true;
        else if (activeCategory === "Lançamentos") matchCategory = product.isNew;
        else if (activeCategory === "Promoções") matchCategory = product.isPromo;
        else matchCategory = product.category === activeCategory;

        // Filtro por Busca
        let matchSearch = product.title.toLowerCase().includes(searchQuery) || 
                          product.category.toLowerCase().includes(searchQuery) ||
                          product.description.toLowerCase().includes(searchQuery);

        return matchCategory && matchSearch;
    });

    renderProducts(filtered);
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("mobileMenuIcon");
    if (!menu) return;

    menu.classList.toggle("hidden");
    if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    }
}

// ==========================================
// MODAL DE PRODUTO
// ==========================================
function openProductModal(id) {
    const product = PRODUCTS_DATA.find(p => p.id === id);
    if (!product) return;

    currentModalProduct = product;
    selectedSize = "M";
    selectedColor = product.colors[0] || "";

    document.getElementById("modalImg").src = product.image;
    document.getElementById("modalCategory").textContent = product.category;
    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalPrice").textContent = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    const oldPriceElem = document.getElementById("modalOldPrice");
    if (product.oldPrice) {
        oldPriceElem.textContent = product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        oldPriceElem.classList.remove("hidden");
    } else {
        oldPriceElem.classList.add("hidden");
    }

    document.getElementById("modalDesc").textContent = product.description;
    document.getElementById("selectedSizeLabel").textContent = selectedSize;

    // Renderizar cores do produto
    const colorContainer = document.getElementById("colorOptions");
    colorContainer.innerHTML = "";
    product.colors.forEach((color, idx) => {
        const btn = document.createElement("button");
        btn.className = `color-btn ${idx === 0 ? 'active' : ''}`;
        btn.textContent = color;
        btn.onclick = () => selectModalColor(color, btn);
        colorContainer.appendChild(btn);
    });
    
    document.getElementById("selectedColorLabel").textContent = selectedColor;

    // Resetar botões de tamanho para o "M" como padrão
    const sizeBtns = document.querySelectorAll("#sizeOptions .size-btn");
    sizeBtns.forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent.trim() === "M") btn.classList.add("active");
    });

    document.getElementById("productModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("productModal").classList.add("hidden");
}

function selectModalSize(size, btnElement) {
    selectedSize = size;
    document.getElementById("selectedSizeLabel").textContent = size;
    
    const sizeBtns = document.querySelectorAll("#sizeOptions .size-btn");
    sizeBtns.forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
}

function selectModalColor(color, btnElement) {
    selectedColor = color;
    document.getElementById("selectedColorLabel").textContent = color;
    
    const colorBtns = document.querySelectorAll("#colorOptions .color-btn");
    colorBtns.forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
}

function addModalItemToCart() {
    if (!currentModalProduct) return;
    
    addToCart(currentModalProduct.id, selectedSize, selectedColor);
    closeModal();
    toggleCartDrawer(true);
}

// ==========================================
// GERENCIAMENTO DO CARRINHO
// ==========================================
function addToCart(productId, size = "M", color = "") {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const itemColor = color || product.colors[0] || "Padrão";
    const cartItemId = `${product.id}-${size}-${itemColor}`;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            cartItemId,
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            size,
            color: itemColor,
            quantity: 1
        });
    }

    updateCartUI();
}

function updateQuantity(cartItemId, delta) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.cartItemId !== cartItemId);
    }

    updateCartUI();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(i => i.cartItemId !== cartItemId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Atualiza Badges
    const badge = document.getElementById("cartCountBadge");
    const drawerCount = document.getElementById("drawerCount");
    
    if (badge) {
        badge.textContent = totalItems;
        badge.classList.toggle("hidden", totalItems === 0);
    }
    if (drawerCount) {
        drawerCount.textContent = `(${totalItems})`;
    }

    // Atualiza Visibilidade
    const emptyNotice = document.getElementById("cartEmptyNotice");
    const footer = document.getElementById("cartFooter");
    const itemsContainer = document.getElementById("cartItemsContainer");

    if (cart.length === 0) {
        if (emptyNotice) emptyNotice.classList.remove("hidden");
        if (footer) footer.classList.add("hidden");
        if (itemsContainer) itemsContainer.innerHTML = "";
    } else {
        if (emptyNotice) emptyNotice.classList.add("hidden");
        if (footer) footer.classList.remove("hidden");

        // Renderiza lista de itens
        if (itemsContainer) {
            itemsContainer.innerHTML = cart.map(item => `
                <div class="py-3 flex items-center gap-3">
                    <img src="${item.image}" alt="${item.title}" class="w-14 h-18 object-cover rounded-lg bg-gray-100">
                    <div class="flex-grow">
                        <h4 class="font-serif text-xs font-bold text-[#2C2421] line-clamp-1">${item.title}</h4>
                        <p class="text-[10px] text-gray-500 mb-1">Tam: ${item.size} | Cor: ${item.color}</p>
                        <span class="text-xs font-bold text-[#2C2421]">
                            ${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="flex items-center border border-[#E5D2C5] rounded-lg bg-white">
                            <button onclick="updateQuantity('${item.cartItemId}', -1)" class="px-2 py-0.5 text-xs text-gray-600 hover:text-black">-</button>
                            <span class="px-1 text-xs font-bold">${item.quantity}</span>
                            <button onclick="updateQuantity('${item.cartItemId}', 1)" class="px-2 py-0.5 text-xs text-gray-600 hover:text-black">+</button>
                        </div>
                        <button onclick="removeFromCart('${item.cartItemId}')" class="text-gray-400 hover:text-red-600 text-xs p-1">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join("");
        }

        // Atualiza Valores no Rodapé
        const subtotalVal = document.getElementById("subtotalVal");
        const totalVal = document.getElementById("totalVal");
        const formattedSubtotal = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        if (subtotalVal) subtotalVal.textContent = formattedSubtotal;
        if (totalVal) totalVal.textContent = formattedSubtotal;
    }
}

function toggleCartDrawer(forceOpen = false) {
    const backdrop = document.getElementById("cartBackdrop");
    const drawer = document.getElementById("cartDrawer");
    if (!backdrop || !drawer) return;

    const isOpen = !drawer.classList.contains("translate-x-full");

    if (forceOpen || !isOpen) {
        backdrop.classList.remove("hidden");
        setTimeout(() => backdrop.classList.remove("opacity-0"), 10);
        drawer.classList.remove("translate-x-full");
    } else {
        backdrop.classList.add("opacity-0");
        drawer.classList.add("translate-x-full");
        setTimeout(() => backdrop.classList.add("hidden"), 300);
    }
}

// ==========================================
// CHECKOUT VIA WHATSAPP
// ==========================================
function checkoutWhatsApp() {
    if (cart.length === 0) return;

    const addressInput = document.getElementById("customerAddress");
    const address = addressInput ? addressInput.value.trim() : "";

    const phoneNumber = "5500000000000"; // INSIRA O NÚMERO DO WHATSAPP AQUI (ex: 5543999998888)

    let message = "🛍️ *NOVO PEDIDO - EFEMÊ MODA FEMININA*\n\n";
    message += "*Itens do Pedido:*\n";

    cart.forEach((item, index) => {
        const itemTotal = (item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        message += `${index + 1}. *${item.title}*\n`;
        message += `   • Tam: ${item.size} | Cor: ${item.color}\n`;
        message += `   • Qtd: ${item.quantity}x (${itemTotal})\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `💰 *Total:* ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n\n`;

    if (address) {
        message += `📍 *Endereço de Entrega:*\n${address}\n\n`;
    } else {
        message += `📍 *Endereço de Entrega:* A combinar pelo chat\n\n`;
    }

    message += "Aguardando confirmação e dados de pagamento! ✨";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}
