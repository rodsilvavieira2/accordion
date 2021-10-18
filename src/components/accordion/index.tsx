import { AccordionAttr } from '../../@types'
import { Container } from './styles'

export const Accordion = ({
  contentText,
  headerText,
  isOpen
}: AccordionAttr) => {
  return (
    <Container isOpen={isOpen}>
      <header>
        <i className="bx bx-plus accordion__icon"></i>
        <h3>{headerText}</h3>
      </header>

      <div>
        <p>{contentText}</p>
      </div>
    </Container>
  )
}
