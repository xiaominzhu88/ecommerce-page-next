
  export function goCart() {
    const product = {price, piece, size, color };

    if (typeof Storage !== 'undefined') {
      localStorage.setItem('Product', JSON.stringify(product));
    } else {
      alert('sorry ! No web support!');
    }
  }