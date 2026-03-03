import { useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import type { Character } from '../types'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const [characters] = useState<Character[]>([
    { id: '1', name: 'テスト太郎', concept: '勇敢な戦士' },
    { id: '2', name: 'テスト花子', concept: '狡猾な盗賊' },
  ])

  const handleLogout = () => {
    localStorage.removeItem('userId')
    navigate('/login')
  }

  return (
    <div>
      <h1>キャラクター一覧</h1>
      <button onClick={handleLogout}>ログアウト</button>

      {characters.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  )
}