// Form handling
document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const signInButton = document.querySelector('.btn-signin');
  const googleButton = document.querySelector('.btn-google');

  // Handle sign in form submission
  if (signInButton) {
    signInButton.addEventListener('click', function(e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value;

      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }

      if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
      }

      // Simulate successful sign in
      alert('Welcome back! Sign in functionality would be implemented here.');
      emailInput.value = '';
      passwordInput.value = '';
    });
  }

  // Handle Google sign in
  if (googleButton) {
    googleButton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Google sign in would be implemented here.');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Add keyboard navigation for inputs
  if (emailInput && passwordInput) {
    emailInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        passwordInput.focus();
      }
    });

    passwordInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        signInButton.click();
      }
    });
  }
});
