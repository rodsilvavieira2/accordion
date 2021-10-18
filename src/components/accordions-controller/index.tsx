import { useCallback, useState } from 'react'
import { Accordion } from '..'
import { AccordionAttr } from '../../@types'
import { Container } from './styles'

type AccordionControllerProps = {
  accordions: AccordionAttr[]
}

export const AccordionController = ({
  accordions
}: AccordionControllerProps) => {
  const [currentAccordions, setCurrentAccordions] = useState(accordions)

  const onRequestOpen = useCallback(
    (id: number) => {
      const newCurrentAccordions = currentAccordions.map((accordion) => {
        if (accordion.id === id) {
          accordion.isOpen = !accordion.isOpen
        } else {
          accordion.isOpen = false
        }

        return accordion
      })

      setCurrentAccordions(newCurrentAccordions)
    },
    [currentAccordions]
  )

  return (
    <Container>
      {currentAccordions.map((data) => (
        <Accordion
          key={data.id}
          {...data}
          onRequestOpen={() => onRequestOpen(data.id)}
        />
      ))}
    </Container>
  )
}
