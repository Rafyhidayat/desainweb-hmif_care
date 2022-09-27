const name = document.getElementById('name')
const nim = document.getElementById('nim')
const nomor_wa = document.getElementById('nomor_wa')
const curhat = document.getElementById('curhat')
const media = document.getElementById('media')
const pilihan_hari = document.getElementById('pilihan_hari')
const pilihan_sesi = document.getElementById('pilihan_sesi')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  
  if (name.value === '' &&
      nim.value === ''  && 
      nomor_wa.value === '' &&
      curhat.value === '' &&
      media.selectedIndex < 1 &&
      pilihan_hari.selectedIndex < 1 &&
      pilihan_sesi.selectedIndex < 1) {
    messages.push('')
    name.style.borderColor = 'RED';
    nim.style.borderColor = 'RED';
    nomor_wa.style.borderColor = 'RED';
    curhat.style.borderColor = 'RED';
    media.style.borderColor = 'RED';
    pilihan_hari.style.borderColor = 'RED';
    pilihan_sesi.style.borderColor = 'RED';
    alert('Anda harus mengisi data dengan lengkap !');
  }

  if (name.value !== '' &&
      nim.value === ''  && 
      nomor_wa.value === '' &&
      curhat.value === '' &&
      media.selectedIndex < 1 &&
      pilihan_hari.selectedIndex < 1 &&
      pilihan_sesi.selectedIndex < 1) {
    messages.push('')
    name.style.borderColor = 'BLACK';
    nim.style.borderColor = 'RED';
    nomor_wa.style.borderColor = 'RED';
    curhat.style.borderColor = 'RED';
    media.style.borderColor = 'RED';
    pilihan_hari.style.borderColor = 'RED';
    pilihan_sesi.style.borderColor = 'RED';
  }

  if (name.value !== '' &&
      nim.value !== ''  && 
      nomor_wa.value === '' &&
      curhat.value === '' &&
      media.selectedIndex < 1 &&
      pilihan_hari.selectedIndex < 1 &&
      pilihan_sesi.selectedIndex < 1) {
    messages.push('')
    name.style.borderColor = 'BLACK';
    nim.style.borderColor = 'BLACK';
    nomor_wa.style.borderColor = 'RED';
    curhat.style.borderColor = 'RED';
    media.style.borderColor = 'RED';
    pilihan_hari.style.borderColor = 'RED';
    pilihan_sesi.style.borderColor = 'RED';
  }

  if (name.value !== '' &&
      nim.value !== ''  && 
      nomor_wa.value !== '' &&
      curhat.value === '' &&
      media.selectedIndex < 1 &&
      pilihan_hari.selectedIndex < 1 &&
      pilihan_sesi.selectedIndex < 1) {
    messages.push('')
    name.style.borderColor = 'BLACK';
    nim.style.borderColor = 'BLACK';
    nomor_wa.style.borderColor = 'BLACK';
    curhat.style.borderColor = 'RED';
    media.style.borderColor = 'RED';
    pilihan_hari.style.borderColor = 'RED';
    pilihan_sesi.style.borderColor = 'RED';
  }

  if (name.value !== '' &&
      nim.value !== ''  && 
      nomor_wa.value !== '' &&
      curhat.value !== '' &&
      media.selectedIndex < 1 &&
      pilihan_hari.selectedIndex < 1 &&
      pilihan_sesi.selectedIndex < 1) {
    messages.push('')
    name.style.borderColor = 'BLACK';
    nim.style.borderColor = 'BLACK';
    nomor_wa.style.borderColor = 'BLACK';
    curhat.style.borderColor = 'BLACK';
    media.style.borderColor = 'RED';
    pilihan_hari.style.borderColor = 'RED';
    pilihan_sesi.style.borderColor = 'RED';
  }

  if (name.value !== '' &&
      nim.value !== ''  && 
      nomor_wa.value !== '' &&
      curhat.value !== '' &&
      media.selectedIndex === 1 &&
      pilihan_hari.selectedIndex < 1 &&
      pilihan_sesi.selectedIndex < 1) {
    messages.push('')
    name.style.borderColor = 'BLACK';
    nim.style.borderColor = 'BLACK';
    nomor_wa.style.borderColor = 'BLACK';
    curhat.style.borderColor = 'BLACK';
    media.style.borderColor = 'BLACK';
    pilihan_hari.style.borderColor = 'RED';
    pilihan_sesi.style.borderColor = 'RED';
  }

  if (name.value !== '' &&
      nim.value !== ''  && 
      nomor_wa.value !== '' &&
      curhat.value !== '' &&
      media.selectedIndex === 1 &&
      pilihan_hari.selectedIndex === 1 &&
      pilihan_sesi.selectedIndex < 1) {
    messages.push('')
    name.style.borderColor = 'BLACK';
    nim.style.borderColor = 'BLACK';
    nomor_wa.style.borderColor = 'BLACK';
    curhat.style.borderColor = 'BLACK';
    media.style.borderColor = 'BLACK';
    pilihan_hari.style.borderColor = 'BLACK';
    pilihan_sesi.style.borderColor = 'RED';
  }

  if (messages.length > 0 ) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})