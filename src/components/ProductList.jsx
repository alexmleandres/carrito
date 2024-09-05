
import { data } from '../data';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className="container content">
        <div className="row products-row">
          {data.map( (product) => {
            return (
              <div className="col-lg-4" key={product.id}>
                
                <div className="card">
                  <div className="img-wrap">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Precio $ <strong className="price">{product.price}</strong></span>
					  
					  <button className="btn btn-primary btn-sm" onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
                    </div>
                  </div>
                </div>

              </div>
            )
          } )}
        </div>
      </div>
	);
};
