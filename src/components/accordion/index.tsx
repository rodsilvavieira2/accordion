import { useRef } from 'react'
import { HiPlus } from 'react-icons/hi'

import { AccordionAttr } from '../../@types'
import { Container } from './styles'

type AccordionProps = {
  onRequestOpen: () => void
} & AccordionAttr

export const Accordion = ({
  contentText,
  headerText,
  isOpen,
  onRequestOpen
}: AccordionProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null)

  return (
    <Container
      normalElementHeight={containerRef.current?.scrollHeight}
      isOpen={isOpen}
      onClick={onRequestOpen}
    >
      <header>
        <HiPlus />
        <h3>{headerText}</h3>
      </header>

      <div>
        <p ref={containerRef}>{contentText}</p>
      </div>
    </Container>
  )
}
