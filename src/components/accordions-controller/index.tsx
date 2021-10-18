import { Accordion } from '..'
import { AccordionAttr } from '../../@types'
import { Container } from './styles'

type AccordionControllerProps = {
  accordions: AccordionAttr[]
}

export const AccordionController = ({
  accordions
}: AccordionControllerProps) => {
  return (
    <Container>
      {accordions.map((data) => (
        <Accordion key={data.id} {...data} />
      ))}
    </Container>
  )
}
