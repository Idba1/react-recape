import { useEffect, useState } from "react";

const Card = () => {

    const [Products, setProducts] = useState([])
    // useEffect(()=>{
    //     fetch("./fackData.json")
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log(data);
    //     })
    // },[])

    useEffect(() => {
        fetch("./fackData.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    console.log(Products);

    const handleCart=(p)=> 
        {
            console.log("product");
        }
    ;
return (
    <div>
        {
            Products.map((product => (
                <div key={product.id} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="w-28"
                            src={product.image} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {product.title}
                        </h2>
                        <p>
                            {product.category}
                        </p>
                        <p>{product.description}</p>
                        <div className="card-actions justify-around mt-5">
                            <div className="text-2xl">{product.price}</div>
                            <div onClick={()=>handleCart()} className="btn btn-accent text-white badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            )))
        }
    </div>
);
};

export default Card;