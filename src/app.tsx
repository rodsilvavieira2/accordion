import { Container, AccordionController } from './components'

const accordions = [
  {
    id: 1,
    headerText: "What 's an accordion?",
    contentText:
      'An accordion always contains the category title, an expanded and a collapsed state, an icon indicating expansion, and the spacing between them.',
    isOpen: false
  },
  {
    id: 2,
    headerText: 'When and how should it be used?',
    contentText:
      'It should be used when users only need a few key concepts or descriptions of the content on a single page.',
    isOpen: false
  },
  {
    id: 3,
    headerText:
      'What happens if the user clicks on a collapsed card while another card is open?',
    contentText:
      'It happens that the open card was closed, to give way to the information of the next open card, but there are different designs that prefer it the other way around.',
    isOpen: false
  },
  {
    id: 4,
    headerText: 'How to choose an icon to indicate expansion?',
    contentText:
      'You must choose a different icon to open and close, so that the user understands what action he took. ',
    isOpen: false
  }
]

export const App = () => {
  return (
    <Container>
      <AccordionController accordions={accordions} />
    </Container>
  )
}
