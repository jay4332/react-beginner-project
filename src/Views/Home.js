import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {

    let content = null

    const url = 'http://5f0d1f5911b7f6001605665c.mockapi.io/v1/products?page=1&limit=10'
    
    let products = useAxiosGet(url)
    
    if (products.loading) {
        content = <Loader />
    }

    if (products.error) {
        content = <p>
            There was an error, please refresh or try again.
        </p>
    }

    if (products.data) {
        content = 
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>
                
            )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
                </h1>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Home