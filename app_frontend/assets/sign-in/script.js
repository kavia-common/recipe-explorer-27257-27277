(function () {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const signIn = document.getElementById('btn-sign-in');

  function trySubmit() {
    // Placeholder handler – in static demo we just validate presence and show feedback
    const missing = [];
    if (!email.value.trim()) missing.push('Email');
    if (!password.value.trim()) missing.push('Password');

    if (missing.length) {
      signIn.setAttribute('aria-live', 'polite');
      signIn.title = `Please fill: ${missing.join(', ')}`;
      signIn.focus();
      return;
    }

    // Simulate submit
    signIn.disabled = true;
    signIn.classList.add('is-loading');
    signIn.setAttribute('aria-busy', 'true');

    setTimeout(() => {
      signIn.disabled = false;
      signIn.classList.remove('is-loading');
      signIn.removeAttribute('aria-busy');
      alert('Signed in (demo)');
    }, 800);
  }

  if (signIn) {
    signIn.addEventListener('click', trySubmit);
  }

  [email, password].forEach((el, idx, arr) => {
    if (!el) return;
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (idx < arr.length - 1 && !arr[idx + 1].value) {
          arr[idx + 1].focus();
        } else {
          trySubmit();
        }
      }
    });
  });
})();
