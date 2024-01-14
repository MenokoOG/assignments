
// mario pext control project menoko og, 1-14-24
document.addEventListener('DOMContentLoaded', function () {
    const baddiesList = document.getElementById('baddiesList');
    const totalCoinsElement = document.getElementById('totalCoins');
  
    const baddies = [
      { name: 'Goombas', price: 5, image: 'goomba.png' },
      { name: 'Bob-ombs', price: 7, image: 'bob_ombs.png' },
      { name: 'Cheep-cheeps', price: 11, image: 'cheep_cheep.png' }
    ];
  
    baddies.forEach(baddie => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="assets/${baddie.image}" alt="${baddie.name}">
        <span>${baddie.name}</span>
        <span>Price: ${baddie.price} Coins</span>
        <input type="number" placeholder="Enter total caught" data-price="${baddie.price}">
      `;
      baddiesList.appendChild(listItem);
    });
  
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach(input => {
      input.addEventListener('input', updateTotalPrice);
    });
  
    function updateTotalPrice() {
        let totalCoins = 0;
        inputElements.forEach(input => {
          const quantity = parseInt(input.value) || 0;
          const price = parseInt(input.dataset.price) || 0;
          totalCoins += quantity * price;
        });
        totalCoinsElement.textContent = totalCoins;
      }
      
      
      
  });
  