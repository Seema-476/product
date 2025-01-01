import React from 'react'
import GridImages from './GridImages'
import Heading from '../../common/Heading'
import Description from '../../common/Description'

const Product = () => {
    return (
        <div className='container container-width pt-5'>
            <div className='flex items-center gap-4 max-w-1128 justify-center mx-auto product-clause'>
                <div className='product-card bg-purple h-100 w-100'>
                    <div>
                        <Heading text="Product" />
                        <Description text="Due to the confusing nature of tax, the lack of awareness of the tax deduction system and the complicated tax refund process, we have experienced exceptional demand from the public for our service. From release in 2015, our original tax product has achieved 60x growth, bringing in over £5m revenue in 2022." />
                        <Description text="With over 8 years of industry experience, we have listened to our clients to evolve our app into a whole-of-market product that will also meet the needs of the tax return market as well as the tax refund market. The App is packed with all the features users need to meet the requirements of the upcoming switch to Making Tax Digital." />
                        <Description text="Once we establish the ourself in the UK, we plan to expand into other territories to take advantage of the £500 billion global market" />
                        <Description text="We have highlighted some of our key features that will be the cornerstone of our product launch in April 23." />
                    </div>
                </div>
                <GridImages />
            </div>
        </div>
    )
}

export default Product