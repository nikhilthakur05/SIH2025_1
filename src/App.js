import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <meta charset="utf-8" />
  <title>Admin Dashboard — Civic Issues</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="css/styles.css" />
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>
  <script src="js/firebase-init.js"></script>
  <script defer src="js/admin.js"></script>
  <header class="topbar">
    <h1>Admin Dashboard</h1>
    <a class="btn small" href="index.html">User Page</a>
  </header>

  <main class="container">
    <section class="card" id="loginCard">
      <h2>Admin Login</h2>
      <form id="loginForm">
        <label>Email</label>
        <input id="email" type="email" required placeholder="admin@example.com" />
        <label>Password</label>
        <input id="password" type="password" required placeholder="your password" />
        <div class="actions">
          <button type="submit" class="btn">Login</button>
        </div>
      </form>
      <div id="loginMsg"></div>
    </section>

    <section class="card hidden" id="dashboardCard">
      <div class="toprow">
        <h2>Complaints</h2>
        <button id="logoutBtn" class="btn danger">Logout</button>
      </div>
      <div id="complaintsList"></div>
    </section>
  </main>

  <footer class="footer">
    <p>Admin must be created in Firebase Auth (email/password) for secure access.</p>
  </footer>
    </div>
  );
}

export default App;
