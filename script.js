function login() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('main-app').style.display = 'flex';
  switchTab('dashboard'); // default tab
}

function logout() {
  document.getElementById('main-app').style.display = 'none';
  document.getElementById('login-section').style.display = 'flex';
}

function switchTab(tabName) {
  // Hide all sections
  document.getElementById('dashboard-view').style.display = 'none';
  document.getElementById('customers-view').style.display = 'none';
  document.getElementById('items-view').style.display = 'none';
  document.getElementById('orders-view').style.display = 'none';

  // Remove active class from all nav links
  document.getElementById('nav-dashboard').classList.remove('active');
  document.getElementById('nav-customers').classList.remove('active');
  document.getElementById('nav-items').classList.remove('active');
  document.getElementById('nav-orders').classList.remove('active');

  // Show selected section
  document.getElementById(tabName + '-view').style.display = 'block';
  
  // Set active nav link
  document.getElementById('nav-' + tabName).classList.add('active');

  // Update header based on tab
  const headerTitle = document.getElementById('header-title-text');
  const headerActions = document.getElementById('header-actions');
  
  switch(tabName) {
    case 'dashboard':
      headerTitle.textContent = 'Dashboard Overview';
      headerActions.style.display = 'none'; // Dashboard usually has no actions in your setup
      break;
    case 'customers':
      headerTitle.textContent = 'Customer Management';
      headerActions.style.display = 'flex';
      break;
    case 'items':
      headerTitle.textContent = 'Item Management';
      headerActions.style.display = 'flex';
      break;
    case 'orders':
      headerTitle.textContent = 'Place New Order';
      headerActions.style.display = 'flex';
      // For orders, layout is different (display flex)
      document.getElementById('orders-view').style.display = 'block';
      break;
  }
}

// Initial setup to handle current date in header
document.addEventListener('DOMContentLoaded', () => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', dateOptions);
});
