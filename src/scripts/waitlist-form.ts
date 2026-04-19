import { gsap } from 'gsap';
import { getCurrentLang } from './i18n';

export function initWaitlistForm() {
  const form       = document.getElementById('waitlist-form') as HTMLFormElement | null;
  const emailInput = document.getElementById('waitlist-email') as HTMLInputElement | null;
  const formError  = document.getElementById('form-error')!;
  const successEl  = document.getElementById('waitlist-success') as HTMLElement | null;

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailInput) return;

    const email = emailInput.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      emailInput.classList.add('error');
      formError.textContent = getCurrentLang() === 'es'
        ? 'Por favor ingresa un correo válido.'
        : 'Please enter a valid email address.';
      emailInput.focus();
      return;
    }

    emailInput.classList.remove('error');
    formError.textContent = '';

    if (form && successEl) {
      form.style.display = 'none';
      successEl.style.display = 'flex';
      gsap.from(successEl, { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' });
    }
  });

  emailInput?.addEventListener('input', () => {
    emailInput.classList.remove('error');
    if (formError) formError.textContent = '';
  });
}
