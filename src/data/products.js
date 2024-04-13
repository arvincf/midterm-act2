let products = [
    { id: 1, name: "Product 1", description: "Description 1", price: 10 },
    { id: 2, name: "Product 2", description: "Description 2", price: 20 },
  ];
  
  export function getAllProducts() {
    return products;
  }
  
  export function addProduct(newProduct) {
    newProduct.id = products.length + 1;
    products.push(newProduct);
  }
  
  export function updateProduct(updatedProduct) {
    const index = products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = { ...updatedProduct };
    }
  }
  
  export function deleteProduct(id) {
    products = products.filter((p) => p.id !== id);
  }
  