import type { Character } from '../types'

type Props = {
  character: Character
}

export default function CharacterCard({ character }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', margin: '8px' }}>
      <h3>{character.name}</h3>
      <p>{character.concept}</p>
    </div>
  )
}