import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type LoginResponse =
  | { success: true; userId: string }
  | { success: false; message: string }

export default function Login() {
  const navigate = useNavigate()

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/exec', {
      method: 'POST',
      body: new URLSearchParams({
        action: 'login',
        userId,
        password,
      }),
    })

      const data = (await response.json()) as LoginResponse

      if (data.success) {
        localStorage.setItem('userId', data.userId)
        navigate('/')
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError('通信エラーが発生しました')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>ログイン</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="ユーザーID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'ログイン中...' : 'ログイン'}
        </button>
      </form>
    </div>
  )
}