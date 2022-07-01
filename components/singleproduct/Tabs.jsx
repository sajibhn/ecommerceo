import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductAdditional from './ProductAdditional';
import ProductDescription from './ProductDescription';

const ProductTabs = () => {
    return (
        <>
            <section className="section container producttabs">
                <Tabs forceRenderTabPanel defaultIndex={1}>

                    <TabList>
                        <Tab>Product Details</Tab>
                        <Tab>Additional Information</Tab>
                    </TabList>
                    <TabPanel>
                        <ProductDescription />
                    </TabPanel>
                    <TabPanel>
                        <ProductAdditional />
                    </TabPanel>
                </Tabs>
            </section>
        </>
    )
}

export default ProductTabs