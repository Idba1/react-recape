
const Card = () => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                        alt="Men's T-shirt" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Men's T-shirt!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews Men's T-shirt whose Men's T-shirt does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="btn btn-accent text-white badge-outline">Fashion</div>
                        <div className="btn btn-accent text-white badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;