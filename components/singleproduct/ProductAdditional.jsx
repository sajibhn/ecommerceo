import React from "react";

const ProductAdditional = () => {
    return (
        <div className="product__additional">
            <h2>Things You Need To Know</h2>
            <p>
                We use industry standard SSL encryption to protect your details.
                Potentially sensitive information such as your name, address and card
                details are encoded so they can only be read on the secure server.
            </p>

            <ul>
                <li>Safe Payments</li>
                <li>Accept Credit Cart</li>
                <li>Different Payment Method</li>
                <li>Price Include VAT</li>
                <li>Easy To Order</li>
            </ul>

            <div className="express">
                <h3>Express Delivery</h3>
                <ul>
                    <li>Europe and USA within 2-4 days</li>
                    <li>Rest of the world within 3-7 days</li>
                    <li>Different Payment Method</li>
                    <li>Selected locations</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductAdditional;
