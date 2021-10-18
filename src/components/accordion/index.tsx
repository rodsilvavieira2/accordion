import { useRef } from 'react'
import { HiPlus } from 'react-icons/hi'

import { AccordionAttr } from '../../@types'
import { Container } from './styles'

type AccordionProps = {
  onRequestOpen: () => void
} & AccordionAttr

export const Accordion = ({
  id,
  contentText,
  headerText,
  isOpen,
  onRequestOpen
}: AccordionProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null)

  const elementId = `accordion-header-${id}`
  
  return (
    <Container
      normalElementHeight={containerRef.current?.scrollHeight}
      isOpen={isOpen}
    >
      <button onClick={onRequestOpen}>
        <HiPlus />
        <h3 id={elementId}>{headerText}</h3>
      </button>

      <div aria-hidden={!isOpen}>
        <p aria-labelledby={elementId} ref={containerRef}>
          {contentText}
        </p>
      </div>
    </Container>
  )
}
