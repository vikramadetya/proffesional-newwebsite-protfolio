import { container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/layouts/grid-items'

import thumbcodepen from '../public/images/works/codepen.png'
import thumbpaymentform from '../public/images/works/paymentform.png'
import Layout from '../components/layouts/article'
const Works = () => {
    return (
        <Layout>
        <container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
               <Section>
                  <WorkGridItem id="codepen(bot)" title="codepen(bot)" thumbnail={thumbcodepen(bot)} href="/https://veervikramadetyapvv.pages.dev/codepen/codepen-FINISHED" >
                    I re-created a codepen bot ( code pen is one of the most used css code editor which is online )  
                  </WorkGridItem>
               </Section> 
               <Section>
                   <WorkGridItem id="paymentform" title="paymentform" thumbnail={thumbpaymentform} href="/https://veervikramadetyapvv.pages.dev/payement_form" >
                       A sample paymentform which you may have seen may times
                   </WorkGridItem>

               </Section>
            </SimpleGrid>
        </container>
        </Layout>
    )
}

export default Works