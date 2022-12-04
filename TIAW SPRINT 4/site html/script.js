// Valor total

var totals =  document.querySelector(".price-total")

const calculate_totals = () => {
totals.innerHTML = (parseFloat(total_pao.innerHTML) + parseFloat(total_morango.innerHTML)).toFixed(2)
}

// Morango

var price_morango = document.querySelector(".price-morango")

var fixed_price_morango = 13.00

price_morango.innerHTML = fixed_price_morango

var total_morango = document.querySelector(".total-morango")

total_morango.innerHTML = fixed_price_morango

const add_morango = () => {
    var qty = document.getElementById("qty_morango").valueAsNumber
    qty += 1
  
    document.getElementById("qty_morango").value = qty
  
    total_morango.innerHTML = (parseFloat(total_morango.innerHTML) + fixed_price_morango).toFixed(2)
    calculate_totals()
  }

  const remove_morango = () => {
    var qty = document.getElementById("qty_morango").valueAsNumber

    if(qty < 1){
        return
    }

    qty -= 1
  
    document.getElementById("qty_morango").value = qty
  
    total_morango.innerHTML = (total_morango.innerHTML - fixed_price_morango).toFixed(2)
    calculate_totals()
  }

  // Pao

var price_pao = document.querySelector(".price-pao")

var fixed_price_pao = 10.00

price_pao.innerHTML = fixed_price_pao

var total_pao = document.querySelector(".total-pao")

total_pao.innerHTML = fixed_price_pao

const add_pao = () => {
  var qty = document.getElementById("qty_pao").valueAsNumber
  qty += 1

  document.getElementById("qty_pao").value = qty

  total_pao.innerHTML = (parseFloat(total_pao.innerHTML) + fixed_price_pao).toFixed(2)
  calculate_totals()
}

  const remove_pao = () => {
    var qty = document.getElementById("qty_pao").valueAsNumber

    if(qty < 1){
        return
    }

    qty -= 1
  
    document.getElementById("qty_pao").value = qty
  
    total_pao.innerHTML = (total_pao.innerHTML - fixed_price_pao).toFixed(2)

    calculate_totals()
    }

// Valor total

totals.innerHTML = (parseFloat(total_pao.innerHTML) + parseFloat(total_morango.innerHTML)).toFixed(2)
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();