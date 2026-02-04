import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>ホーム画面</h1>
      <p>キャラクター一覧が表示されます</p>

      <Link to="/login">ログイン画面へ</Link>
    </div>
  )
}