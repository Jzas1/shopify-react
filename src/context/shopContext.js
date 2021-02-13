import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    domain: 'developer1221.myshopify.com/',
    storefrontAccessToken: 'd0d0b38ea6dbdcde82185223673d5109'
});


class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    componentDidMount() {
        this.createCheckout()
    }
    createCheckout = async () => {
        const checkout = await client.checkout.create()
        console.log(checkout)
    }
    addItemToCart = async (variantId, quantity) => {

    }
    fetchAllProducts = async () => {

    }

    addItemToCart = async () => {

    }
    fetchProductWithId = async (id) => {

    }

    closeCart = () => { }

    openCart = () => { }

    render() {
        return (
            <ShopContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider