import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // ページリロード防止

    // 仮のログイン成功条件
    if (userId && password) {
      navigate('/')
    } else {
      alert('ユーザーIDとパスワードを入力してください')
    }
  }

  return (
    <div>
      <h1>ログイン</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            ユーザーID：
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            パスワード：
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">ログイン</button>
      </form>
    </div>
  )
}
