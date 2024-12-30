import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import Table from './Table'

const Competition = () => {
  return (

      <div className='container max-w-1440'>
      <div className='flex'>
        <div>
          <Heading text="Competition" />
          <Description classStyle="max-w-481" text="Given our best in class offering, we need to cut through by opting for penetration pricing." />
          <Description classStyle="max-w-481" text="This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution." />
          <Description classStyle="max-w-481" text="The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns." />
          <Description classStyle="max-w-481" text="As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive." />
        </div>
        <Table />
     </div>
    </div>
  )
}

export default Competition