const cars = [
  {id:1,brand:"Toyota",model:"Corolla Altis X",name:"Toyota Corolla Altis X",variant:"Altis X",price:6169000,priceText:"From PKR 6,169,000",engine:"1.6L / 1.8L Dual VVT-i",mileage:"12-14 km/l",city:"Karachi",body:"Sedan",bestFor:"Family",features:"Power, prestige and family comfort with Toyota reliability.",image:"https://toyota-indus.com/wp-content/uploads/2023/03/corolla-400-x-500.png",fallbackImage:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85",source:"Toyota Indus",sourceUrl:"https://toyota-indus.com/"},
  {id:2,brand:"Toyota",model:"Yaris",name:"Toyota Yaris",variant:"1.3 / 1.5",price:4479000,priceText:"From PKR 4,479,000",engine:"1.3L / 1.5L",mileage:"14-16 km/l",city:"Lahore",body:"Sedan",bestFor:"City",features:"Compact sedan for city driving, fuel efficiency and daily use.",image:"https://toyota-indus.com/wp-content/uploads/2024/05/PNG-2-1.png",fallbackImage:"https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=85",source:"Toyota Indus",sourceUrl:"https://toyota-indus.com/"},
  {id:3,brand:"Toyota",model:"Fortuner",name:"Toyota Fortuner",variant:"Legender / Sigma",price:14999000,priceText:"From PKR 14,999,000",engine:"2.7L Petrol / 2.8L Diesel",mileage:"9-11 km/l",city:"Islamabad",body:"SUV",bestFor:"Luxury",features:"Strong SUV presence, family space and premium road confidence.",image:"https://toyota-indus.com/wp-content/uploads/2022/11/Legender-Discover.jpg",fallbackImage:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85",source:"Toyota Indus",sourceUrl:"https://toyota-indus.com/"},
  {id:4,brand:"Toyota",model:"Corolla Cross",name:"Toyota Corolla Cross",variant:"HEV / Gasoline",price:12249000,priceText:"From PKR 12,249,000",engine:"1.8L Hybrid / Gasoline",mileage:"16-20 km/l",city:"Karachi",body:"Crossover",bestFor:"Hybrid",features:"Hybrid crossover comfort with Toyota durability and modern SUV practicality.",image:"https://toyota-indus.com/wp-content/uploads/2023/12/Website-400x500-sad.jpg",fallbackImage:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85",source:"Toyota Indus",sourceUrl:"https://toyota-indus.com/"},
  {id:5,brand:"Honda",model:"City",name:"Honda City 1.2LS",variant:"1.2LS",price:4737000,priceText:"PKR 4,737,000",engine:"1.2L i-VTEC",mileage:"14-17 km/l",city:"Karachi",body:"Sedan",bestFor:"City",features:"Official Honda City 1.2LS with practical comfort and strong mileage.",image:"https://www.honda.com.pk/hero/city1-2-main.webp",fallbackImage:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",source:"Honda Pakistan",sourceUrl:"https://www.honda.com.pk/"},
  {id:6,brand:"Honda",model:"Civic",name:"Honda Civic Standard",variant:"Standard",price:8499000,priceText:"PKR 8,499,000",engine:"1.5L Turbo",mileage:"11-13 km/l",city:"Lahore",body:"Sedan",bestFor:"Premium",features:"Official Honda Civic Standard with premium styling and turbo performance.",image:"https://www.honda.com.pk/images/2025/civic-standard/civic-standard-main-1.webp",fallbackImage:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85",source:"Honda Pakistan",sourceUrl:"https://www.honda.com.pk/"},
  {id:7,brand:"Honda",model:"Civic",name:"Honda Civic Oriel",variant:"Oriel",price:8834000,priceText:"PKR 8,834,000",engine:"1.5L Turbo",mileage:"11-13 km/l",city:"Islamabad",body:"Sedan",bestFor:"Premium",features:"Civic Oriel variant with upgraded comfort, safety and premium interior.",image:"https://www.honda.com.pk/images/2025/civic-oriel/oriel-home-nn.png",fallbackImage:"https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=900&q=85",source:"Honda Pakistan",sourceUrl:"https://www.honda.com.pk/"},
  {id:8,brand:"Honda",model:"HR-V",name:"Honda HR-V VTI",variant:"VTI",price:7549000,priceText:"PKR 7,549,000",engine:"1.5L i-VTEC",mileage:"12-15 km/l",city:"Karachi",body:"Crossover",bestFor:"Family",features:"Honda HR-V crossover with SUV practicality and comfortable daily driving.",image:"https://www.honda.com.pk/images/2025/07/VTI-01_C-nn.webp",fallbackImage:"https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85",source:"Honda Pakistan",sourceUrl:"https://www.honda.com.pk/"},
  {id:9,brand:"Suzuki",model:"Fronx",name:"Suzuki Fronx GL",variant:"GL 5MT",price:5999999,priceText:"PKR 5,999,999",engine:"1.5L",mileage:"14-17 km/l",city:"Karachi",body:"Crossover",bestFor:"City SUV",features:"Suzuki Fronx GL 5MT with XUV-style presence and modern safety features.",image:"https://suzukipakistan.com/api/media/file/image-70.png",fallbackImage:"https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=85",source:"Suzuki Pakistan",sourceUrl:"https://suzukipakistan.com/products/automobiles/fronx"},
  {id:10,brand:"Suzuki",model:"Alto",name:"Suzuki Alto",variant:"VXR",price:2827000,priceText:"From PKR 2,827,000",engine:"660cc",mileage:"18-22 km/l",city:"Hyderabad",body:"Hatchback",bestFor:"Student",features:"Compact Suzuki hatchback for budget, fuel-saving and easy city parking.",image:"https://suzukipakistan.com/api/media/file/Alto-new.png",fallbackImage:"https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=900&q=85",source:"Suzuki Pakistan",sourceUrl:"https://suzukipakistan.com/"},
  {id:11,brand:"Suzuki",model:"Every",name:"Suzuki Every",variant:"VX / VXR",price:2749000,priceText:"From PKR 2,749,000",engine:"660cc",mileage:"14-16 km/l",city:"Karachi",body:"Van",bestFor:"Utility",features:"Suzuki Every for family, business and city utility needs.",image:"https://suzukipakistan.com/api/media/file/Every-New.png",fallbackImage:"https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=85",source:"Suzuki Pakistan",sourceUrl:"https://suzukipakistan.com/"},
  {id:12,brand:"Hyundai",model:"Elantra",name:"Hyundai Elantra",variant:"1.6 Special Edition",price:6449000,priceText:"From PKR 6,449,000",engine:"1.6L",mileage:"12-14 km/l",city:"Karachi",body:"Sedan",bestFor:"Family",features:"Hyundai Elantra sedan with modern comfort and premium styling.",image:"https://hyundai-nishat.com/wp-content/uploads/2024/10/CN7-Right-Side-Transparent-512x280-1.webp",fallbackImage:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85",source:"Hyundai SHF",sourceUrl:"https://www.hyundai-shf.com/"},
  {id:13,brand:"Hyundai",model:"Sonata",name:"Hyundai Sonata",variant:"2.0 / 2.5",price:10330000,priceText:"From PKR 10,330,000",engine:"2.0L / 2.5L",mileage:"10-12 km/l",city:"Lahore",body:"Sedan",bestFor:"Executive",features:"Hyundai Sonata executive sedan with premium comfort and strong road presence.",image:"https://hyundai-nishat.com/wp-content/uploads/2023/11/Sonata-Side-Transparent.webp",fallbackImage:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85",source:"Hyundai SHF",sourceUrl:"https://www.hyundai-shf.com/"},
  {id:14,brand:"Hyundai",model:"Tucson",name:"Hyundai Tucson",variant:"Hybrid",price:11220000,priceText:"From PKR 11,220,000",engine:"Hybrid SUV",mileage:"15-18 km/l",city:"Islamabad",body:"SUV",bestFor:"Hybrid",features:"Hyundai Tucson Hybrid SUV with modern family comfort and efficient drive.",image:"https://hyundai-nishat.com/wp-content/uploads/2023/11/Tucson-Side-Transparent.webp",fallbackImage:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85",source:"Hyundai SHF",sourceUrl:"https://www.hyundai-shf.com/"},
  {id:15,brand:"Kia",model:"Sportage L",name:"Kia Sportage L",variant:"Sportage L",price:9999000,priceText:"Official Price List",engine:"2.0L / Hybrid",mileage:"10-14 km/l",city:"Karachi",body:"SUV",bestFor:"Family",features:"Kia Sportage L official lineup SUV with modern family utility.",image:"https://kia-luckymotorcorp.com/app/uploads/2025/10/HEVV-ezgif.com-webp-to-jpg-converter.png",fallbackImage:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=85",source:"Kia Lucky Motor",sourceUrl:"https://kia-luckymotorcorp.com/shopping-tools/price-list/"},
  {id:16,brand:"Kia",model:"Stonic",name:"Kia Stonic",variant:"EX / EX+",price:5500000,priceText:"Official Price List",engine:"1.4L",mileage:"12-14 km/l",city:"Lahore",body:"Crossover",bestFor:"City SUV",features:"Kia Stonic compact crossover listed on Kia Pakistan price list page.",image:"https://kia-luckymotorcorp.com/app/uploads/2025/09/stonic.png",fallbackImage:"https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85",source:"Kia Lucky Motor",sourceUrl:"https://kia-luckymotorcorp.com/shopping-tools/price-list/"},
  {id:17,brand:"Kia",model:"Carnival",name:"Kia Carnival",variant:"Carnival",price:15000000,priceText:"PKR 15,000,000",engine:"3.5L",mileage:"8-10 km/l",city:"Karachi",body:"MPV",bestFor:"Family",features:"Kia Carnival official all-in price listed by Kia Lucky Motor.",image:"https://kia-luckymotorcorp.com/app/uploads/2025/09/carnical.png",fallbackImage:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85",source:"Kia Lucky Motor",sourceUrl:"https://kia-luckymotorcorp.com/shopping-tools/price-list/"},
  {id:18,brand:"BMW",model:"The New 1",name:"BMW The New 1",variant:"120",price:22500000,priceText:"Price on Request",engine:"156 hp",mileage:"10-13 km/l",city:"Karachi",body:"Hatchback",bestFor:"Luxury",features:"BMW Pakistan model page: sporty design, modern cabin and BMW driving dynamics.",image:"https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_873/auto-client/f68b1b98008f651965ca21abc0e10a4a/landing_page_banner.jpg",fallbackImage:"https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=900&q=85",source:"BMW Pakistan",sourceUrl:"https://www.bmw-pakistan.com/models/the-1/"},
  {id:19,brand:"BMW",model:"M4 CS",name:"BMW M4 CS",variant:"M4 CS",price:65000000,priceText:"Price on Request",engine:"550 hp M TwinPower Turbo",mileage:"Performance",city:"Islamabad",body:"Sports Coupe",bestFor:"Performance",features:"BMW M4 CS performance model with 550 hp and M driving character.",image:"https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_873/auto-client/aa5a370f0f5cd451b7d2c4ed5a93537d/m4_cs_landing_banner.jpg",fallbackImage:"https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?auto=format&fit=crop&w=900&q=85",source:"BMW Pakistan",sourceUrl:"https://www.bmw-pakistan.com/models/the-m4-cs/"},
  {id:20,brand:"Ford",model:"Mustang",name:"Ford Mustang",variant:"2025 / 2026",price:30000000,priceText:"Global model price",engine:"EcoBoost / V8",mileage:"Performance",city:"Karachi",body:"Sports Coupe",bestFor:"Performance",features:"Ford official lineup includes Mustang under SUVs & Cars and performance vehicles.",image:"https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/cars/mustang/2025/collections/dm/25_FRD_MST_61094_2160x1215.jpg",fallbackImage:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=85",source:"Ford Global",sourceUrl:"https://www.ford.com/"},
  {id:21,brand:"Ford",model:"Explorer",name:"Ford Explorer",variant:"2025 / 2026",price:38000000,priceText:"Global model price",engine:"SUV",mileage:"SUV",city:"Lahore",body:"SUV",bestFor:"Family",features:"Ford official lineup includes Explorer SUV for family utility and road presence.",image:"https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/suvs/explorer/2026/collections/dm/26_FRD_EPR_61094_2160x1215.jpg",fallbackImage:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85",source:"Ford Global",sourceUrl:"https://www.ford.com/"},
  {id:22,brand:"Ford",model:"F-150",name:"Ford F-150",variant:"Truck",price:45000000,priceText:"Global model price",engine:"Truck / Hybrid Available",mileage:"Truck",city:"Islamabad",body:"Pickup",bestFor:"Utility",features:"Ford official lineup includes F-150 under Trucks & Vans with hybrid availability.",image:"assets/ford-f150-official-local.png",fallbackImage:"assets/ford-f150-official-local.png",source:"Ford Global",sourceUrl:"https://www.ford.com/"}
];

const dealers = {
  Toyota:{Karachi:'Toyota AutoWorld, Shahrah-e-Faisal, Karachi | +92 21 111 786 786',Lahore:'Toyota AutoWorld, Main Boulevard, Lahore | +92 42 111 456 456',Islamabad:'Toyota AutoWorld, Blue Area, Islamabad | +92 51 111 222 333'},
  Honda:{Karachi:'Honda AutoWorld, Tariq Road, Karachi | +92 21 333 222 111',Lahore:'Honda AutoWorld, Gulberg, Lahore | +92 42 555 111 222',Hyderabad:'Honda AutoWorld, Auto Bahn Road, Hyderabad | +92 22 456 7890'},
  Suzuki:{Karachi:'Suzuki AutoWorld, University Road, Karachi | +92 21 777 123 456',Hyderabad:'Suzuki AutoWorld, Qasimabad, Hyderabad | +92 22 111 909 909',Islamabad:'Suzuki AutoWorld, G-9 Markaz, Islamabad | +92 51 888 777 666'},
  Hyundai:{Karachi:'Hyundai AutoWorld, DHA Phase 6, Karachi | +92 21 400 500 600',Lahore:'Hyundai AutoWorld, Johar Town, Lahore | +92 42 450 600 700'},
  Kia:{Karachi:'Kia AutoWorld, Clifton, Karachi | +92 21 800 900 100',Lahore:'Kia AutoWorld, Gulberg III, Lahore | +92 42 333 444 555'},
  BMW:{Islamabad:'BMW AutoWorld Partner, Blue Area, Islamabad | +92 51 123 900 900'},
  Ford:{Karachi:'Ford AutoWorld Partner, Shahrah-e-Faisal, Karachi | +92 21 222 300 400',Lahore:'Ford AutoWorld Partner, Main Boulevard, Lahore | +92 42 222 777 888',Islamabad:'Ford AutoWorld Partner, Blue Area, Islamabad | +92 51 222 555 777'}
};

function setupMenu(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('navLinks');
  if(btn && nav){ btn.addEventListener('click',()=>nav.classList.toggle('open')); }
}

function carCard(car){
  return `<article class="car-card official-car-card">
    <span class="tag">${car.source || 'Official Source'}</span>
    <div class="car-visual view-detail" data-id="${car.id}" role="button" tabindex="0" title="Click image to view details">
      <img src="${car.image}" alt="${car.name}" loading="lazy" onerror="this.onerror=null;this.src='${car.fallbackImage || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85'}';">
    </div>
    <h3>${car.name}</h3>
    <div class="price">${car.priceText}</div>
    <div class="source-mini">${car.brand} • ${car.model} • ${car.variant || 'Official Model'}</div>
    <div class="specs"><span>⚙ ${car.engine}</span><span>⛽ ${car.mileage}</span><span>📍 ${car.city}</span></div>
    <div class="card-footer"><button class="small-btn view-detail" data-id="${car.id}">View Details</button><small>${car.bestFor}</small></div>
  </article>`;
}

function renderFeatured(){
  document.querySelectorAll('[data-featured-cars]').forEach(box => { box.innerHTML = cars.slice(0,6).map(carCard).join(''); });
}

function renderInventory(list = cars){
  const box = document.querySelector('[data-inventory]');
  if(box){ box.innerHTML = list.length ? list.map(carCard).join('') : '<p>No cars found. Try a different filter.</p>'; }
}

function applyFilter(form){
  const keyword = (form.querySelector('[name="keyword"]')?.value || '').toLowerCase();
  const brand = form.querySelector('[name="brand"]')?.value || '';
  const city = form.querySelector('[name="city"]')?.value || '';
  const max = Number(form.querySelector('[name="price"]')?.value || 0);
  return cars.filter(car =>
    (!keyword || car.name.toLowerCase().includes(keyword) || car.model.toLowerCase().includes(keyword)) &&
    (!brand || car.brand === brand) &&
    (!city || car.city === city) &&
    (!max || car.price <= max)
  );
}

function setupFilters(){
  const home = document.querySelector('[data-home-search]');
  if(home){
    home.addEventListener('submit', e => {
      e.preventDefault();
      const data = {
        brand: home.querySelector('[name="brand"]')?.value || '',
        price: home.querySelector('[name="price"]')?.value || '',
        city: home.querySelector('[name="city"]')?.value || ''
      };
      localStorage.setItem('autoworldFilter', JSON.stringify(data));
      location.href = 'see-your-car.html';
    });
  }
  const form = document.querySelector('[data-filter-form]');
  if(form){
    const saved = localStorage.getItem('autoworldFilter');
    if(saved){
      const data = JSON.parse(saved);
      Object.entries(data).forEach(([key,value]) => { const el = form.querySelector(`[name="${key}"]`); if(el) el.value = value; });
      localStorage.removeItem('autoworldFilter');
    }
    renderInventory(applyFilter(form));
    form.addEventListener('submit', e => { e.preventDefault(); renderInventory(applyFilter(form)); });
  }
}

function setupModal(){
  const modal = document.getElementById('carModal');
  if(!modal) return;
  document.addEventListener('click', e => {
    const open = e.target.closest('.view-detail');
    if(open){
      const car = cars.find(item => item.id === Number(open.dataset.id));
      if(!car) return;
      modal.querySelector('[data-modal-body]').innerHTML = `<div><img src="${car.image}" alt="${car.name}" onerror="this.onerror=null;this.src='${car.fallbackImage || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85'}';"></div><div><h2>${car.name}</h2><div class="price">${car.priceText}</div><div class="detail-list"><span><strong>Brand:</strong> ${car.brand}</span><span><strong>Model:</strong> ${car.model}</span><span><strong>Variant:</strong> ${car.variant || 'Official Model'}</span><span><strong>Features:</strong> ${car.features || 'Comfort, safety and performance features'}</span><span><strong>Engine:</strong> ${car.engine}</span><span><strong>Mileage:</strong> ${car.mileage}</span><span><strong>Body Type:</strong> ${car.body}</span><span><strong>Dealer Location:</strong> ${car.city}</span><span><strong>Best For:</strong> ${car.bestFor}</span></div><div class="modal-actions modal-actions-clean"><a class="btn btn-red" href="book-me.html">Book a Test Drive</a></div></div>`;
      modal.classList.add('show');
    }
    if(e.target.classList.contains('close-modal') || e.target === modal){ modal.classList.remove('show'); }
  });
}

function setupDealer(){
  const form = document.querySelector('[data-dealer-form]');
  const result = document.querySelector('[data-dealer-result]');
  if(form && result){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const brand = form.querySelector('[name="dealerBrand"]').value;
      const city = form.querySelector('[name="dealerCity"]').value;
      result.textContent = dealers[brand]?.[city] || 'Dealer data is not available for this selection. Please contact AutoWorld support.';
      result.classList.add('show');
    });
  }
  const list = document.querySelector('[data-dealer-list]');
  if(list){
    const cards = [];
    Object.entries(dealers).forEach(([brand,cities]) => {
      Object.entries(cities).forEach(([city,info]) => cards.push(`<article class="dealer-location enhanced-card"><h3>${brand} Dealer</h3><p><strong>${city}</strong></p><p>${info}</p><a class="btn btn-white" href="book-me.html">Book Visit</a></article>`));
    });
    list.innerHTML = cards.join('');
  }
}

function setupCompare(){
  const selects = document.querySelectorAll('[data-compare-select]');
  if(!selects.length) return;
  selects.forEach((select,index) => {
    select.innerHTML = cars.map((car,i) => `<option value="${car.id}" ${i===index?'selected':''}>${car.name}</option>`).join('');
  });
  const render = () => {
    const selected = Array.from(selects).map(s => cars.find(c => c.id === Number(s.value))).filter(Boolean);
    const rows = [
      ['Image', ...selected.map(c => `<img src="${c.image}" alt="${c.name}">`)],
      ['Price', ...selected.map(c => c.priceText)],
      ['Brand', ...selected.map(c => c.brand)],
      ['Engine', ...selected.map(c => c.engine)],
      ['Mileage', ...selected.map(c => c.mileage)],
      ['Body Type', ...selected.map(c => c.body)],
      ['Best For', ...selected.map(c => c.bestFor)],
      ['Dealer City', ...selected.map(c => c.city)]
    ];
    document.querySelector('[data-compare-table]').innerHTML = `<table class="compare-table"><thead><tr><th>Feature</th>${selected.map(c => `<th>${c.name}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  };
  document.querySelector('[data-build-compare]')?.addEventListener('click', render);
  render();
}

function setupLoan(){
  const btn = document.querySelector('[data-calc-loan]');
  if(!btn) return;
  btn.addEventListener('click', () => {
    const price = Number(document.querySelector('[data-loan-price]').value || 0);
    const months = Number(document.querySelector('[data-loan-duration]').value || 36);
    const loan = price * 0.60;
    const down = price - loan;
    const monthly = loan / months;
    const result = document.querySelector('[data-loan-result]');
    result.innerHTML = `<strong>Estimated Finance Result</strong><br>Car Price: PKR ${price.toLocaleString()}<br>Loan Support 60%: PKR ${Math.round(loan).toLocaleString()}<br>Customer Down Payment 40%: PKR ${Math.round(down).toLocaleString()}<br>Approx. Monthly Installment: PKR ${Math.round(monthly).toLocaleString()} for ${months} months`;
    result.classList.add('show');
  });
}

function setupForms(){
  document.querySelectorAll('[data-save-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const note = form.querySelector('.notice');
      if(note){ note.textContent = 'Request submitted successfully. AutoWorld team will contact you soon.'; note.classList.add('show'); }
      form.reset();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNeedCardClick();
  setupCarImageKeyboard();
  setupLogoReveal();
  setupMenu();
  renderFeatured();
  renderInventory();
  setupFilters();
  setupModal();
  setupDealer();
  setupCompare();
  setupLoan();
  setupFinanceDetails();
  setupForms();
});


function setupLogoReveal(){
  const reveal = document.getElementById('logoReveal');
  if(!reveal) return;

  const key = 'autoworldIntroShown';
  let alreadyShown = false;
  try { alreadyShown = sessionStorage.getItem(key) === 'yes'; } catch(e) {}

  if(alreadyShown || document.documentElement.classList.contains('skip-intro-loader')){
    reveal.remove();
    document.body.classList.remove('intro-playing');
    return;
  }

  const video = document.getElementById('introRevealVideo') || reveal.querySelector('video');
  document.body.classList.add('intro-playing');

  const closeReveal = () => {
    if(reveal.classList.contains('hide')) return;
    try { sessionStorage.setItem(key, 'yes'); } catch(e) {}
    document.documentElement.classList.add('skip-intro-loader');
    reveal.classList.add('hide');
    document.body.classList.remove('intro-playing');

    setTimeout(() => {
      if(video) video.pause();
      reveal.remove();
    }, 750);
  };

  if(video){
    video.muted = true;
    video.defaultMuted = true;
    video.currentTime = 0;
    video.play().catch(() => {});
    video.addEventListener('ended', closeReveal, { once:true });
  }

  window.addEventListener('load', () => setTimeout(closeReveal, 3600), { once:true });
  setTimeout(closeReveal, 5200);
}



function setupNeedCardClick(){
  document.querySelectorAll('[data-open-card]').forEach(card => {
    card.addEventListener('click', event => {
      const link = event.target.closest('a');
      if(link) return;

      document.querySelectorAll('[data-open-card].is-open').forEach(openCard => {
        if(openCard !== card) openCard.classList.remove('is-open');
      });

      card.classList.toggle('is-open');
    });
  });
}


function setupCarImageKeyboard(){
  document.addEventListener('keydown', e => {
    const item = e.target.closest('.car-visual.view-detail');
    if(item && (e.key === 'Enter' || e.key === ' ')){
      e.preventDefault();
      item.click();
    }
  });
}


const financeSchemes = {
  hbl:{
    name:'HBL Auto Finance',
    badge:'Conventional Auto Finance',
    max:'Up to 60% of car price',
    rate:'Estimated 18% per annum',
    duration:'12 to 60 months',
    processing:'Approx. 1.5% processing fee',
    installment:'For PKR 6,500,000 car: approx. PKR 96,000/month for 60 months',
    terms:['Applicant must have valid CNIC and income proof.','Vehicle remains under bank hypothecation until repayment.','Insurance and registration charges are customer responsibility.','Final approval depends on bank verification.']
  },
  meezan:{
    name:'Meezan Car Ijarah',
    badge:'Islamic Car Finance',
    max:'Up to 60% of car price',
    rate:'Estimated rental rate equivalent to 17% per annum',
    duration:'12 to 60 months',
    processing:'Documentation and takaful charges may apply',
    installment:'For PKR 6,500,000 car: approx. PKR 93,000/month for 60 months',
    terms:['Islamic Ijarah/rental structure applies.','Customer must provide income and identity documents.','Takaful coverage is required.','Final terms are confirmed by Meezan Bank.']
  },
  alfalah:{
    name:'Bank Alfalah Auto Loan',
    badge:'Auto Loan Scheme',
    max:'Up to 60% of car price',
    rate:'Estimated 19% per annum',
    duration:'12 to 60 months',
    processing:'Approx. 1% to 2% processing fee',
    installment:'For PKR 6,500,000 car: approx. PKR 99,000/month for 60 months',
    terms:['Minimum income proof required.','Down payment estimated at 40%.','Late payment charges may apply.','Vehicle insurance is required during loan period.']
  },
  faysal:{
    name:'Faysal Bank Car Finance',
    badge:'New and Used Car Finance',
    max:'Up to 60% of car price',
    rate:'Estimated 18.5% per annum',
    duration:'12 to 60 months',
    processing:'Processing and documentation charges apply',
    installment:'For PKR 6,500,000 car: approx. PKR 97,500/month for 60 months',
    terms:['Available for selected new and used cars.','Customer verification is required.','Installment amount may vary by final price and tenure.','Bank approval and insurance are compulsory.']
  }
};

function setupFinanceDetails(){
  const box = document.querySelector('[data-finance-detail]');
  if(!box) return;
  const params = new URLSearchParams(window.location.search);
  const key = params.get('bank') || 'hbl';
  const scheme = financeSchemes[key] || financeSchemes.hbl;
  document.querySelectorAll('[data-bank-link]').forEach(link => {
    link.classList.toggle('active', link.dataset.bankLink === key);
  });
  box.innerHTML = `
    <span class="premium-label">${scheme.badge}</span>
    <h2>${scheme.name}</h2>
    <div class="finance-detail-grid">
      <div><strong>Maximum Amount</strong><span>${scheme.max}</span></div>
      <div><strong>Interest / Rental Rate</strong><span>${scheme.rate}</span></div>
      <div><strong>Repayment Duration</strong><span>${scheme.duration}</span></div>
      <div><strong>Processing Charges</strong><span>${scheme.processing}</span></div>
    </div>
    <div class="installment-box"><strong>Estimated Installment</strong><p>${scheme.installment}</p></div>
    <h3>Terms & Conditions</h3>
    <ul class="terms-list">${scheme.terms.map(item => `<li>${item}</li>`).join('')}</ul>
    <div class="modal-actions"><a class="btn btn-red" href="book-me.html">Apply / Book Meeting</a><a class="btn btn-white" href="finance.html">Back to Finance</a></div>
  `;
}


/* mobileMenuResponsivePatch */
(function(){
  const btns = document.querySelectorAll('[data-menu-toggle], #menuBtn');
  btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
      const nav = document.getElementById('navLinks') || document.querySelector('.nav-links');
      if(!nav) return;
      nav.classList.toggle('show');
      nav.classList.toggle('open');
      document.body.classList.toggle('menu-open', nav.classList.contains('show') || nav.classList.contains('open'));
    });
  });
  document.querySelectorAll('.nav-links a').forEach((link)=>{
    link.addEventListener('click', ()=>{
      const nav = document.getElementById('navLinks') || document.querySelector('.nav-links');
      if(nav){ nav.classList.remove('show'); nav.classList.remove('open');}
      document.body.classList.remove('menu-open');
    });
  });
})();


/* Modern realistic interactions - subtle, not overdone */
(function(){
  function initModernInteractions(){
    const revealTargets = document.querySelectorAll(
      '.hero-content, .section, .page-hero, .enhanced-card, .car-card, .need-card, .tool-card, .review-card, .warranty-card, .bank-card, .dealer-location, .featured-premium-panel, .warranty-showcase, .contact-info, .contact-form, .finance-detail-card, .terms-card'
    );

    revealTargets.forEach((el, index) => {
      if(el.classList.contains('reveal-anim')) return;
      el.classList.add('reveal-anim');
      const delay = index % 5;
      if(delay) el.classList.add('reveal-delay-' + delay);
    });

    if('IntersectionObserver' in window){
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
      revealTargets.forEach(el => observer.observe(el));
    }else{
      revealTargets.forEach(el => el.classList.add('reveal-visible'));
    }

    const header = document.querySelector('.site-header');
    const updateHeader = () => {
      if(header) header.classList.toggle('nav-scrolled', window.scrollY > 30);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, {passive:true});

    let topBtn = document.querySelector('.scroll-top');
    if(!topBtn){
      topBtn = document.createElement('button');
      topBtn.className = 'scroll-top';
      topBtn.type = 'button';
      topBtn.setAttribute('aria-label', 'Back to top');
      topBtn.innerHTML = '↑';
      document.body.appendChild(topBtn);
    }
    topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
    const updateTopBtn = () => {
      topBtn.classList.toggle('show', window.scrollY > 520);
    };
    updateTopBtn();
    window.addEventListener('scroll', updateTopBtn, {passive:true});
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initModernInteractions);
  }else{
    initModernInteractions();
  }
})();


/* safeRenderInventoryAfterLoad */
window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('[data-inventory]');
  if(box && box.children.length === 0 && typeof cars !== 'undefined' && typeof carCard === 'function'){
    box.innerHTML = cars.map(carCard).join('');
  }
});


/* forceFullInventoryRenderFinalFix */
window.addEventListener('DOMContentLoaded', function(){
  const box = document.querySelector('[data-inventory]');
  if(box && typeof cars !== 'undefined' && typeof carCard === 'function'){
    box.innerHTML = cars.map(carCard).join('');
  }
  document.querySelectorAll('.reveal-anim').forEach(el => {
    el.classList.add('reveal-visible');
    el.style.opacity = '1';
    el.style.visibility = 'visible';
    el.style.transform = 'none';
  });
});
