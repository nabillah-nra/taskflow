import './App.css'
import { useEffect } from 'react'
import { supabase } from './supabase'

function App() {

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')

      if (error) {
        console.error('Koneksi gagal:', error.message)
      } else {
        console.log('Koneksi berhasil:', data)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Task Management</h2>
        <p>Dashboard</p>
        <p>Semua Tugas</p>
        <p>Belum Dikerjakan</p>
        <p>Sedang Dikerjakan</p>
        <p>Selesai</p>
      </aside>

      <main className="main-content">
        <h1>Dashboard</h1>
        <p>Selamat datang! Kelola tugasmu di sini.</p>

        <div className="summary">
          <div className="card">
            <h3>Semua Tugas</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>Belum Selesai</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>Selesai</h3>
            <h2>0</h2>
          </div>
        </div>

        <section className="task-section">
          <h2>Daftar Tugas</h2>
          <button>+ Tambah Tugas</button>
          <p>Belum ada tugas yang ditambahkan.</p>
        </section>
      </main>
    </div>
  )
}

export default App
