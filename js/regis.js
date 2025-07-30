document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-daftar');
    const successMessage = document.getElementById('success-message');
    
    // Character counters
    const alasanTextarea = document.getElementById('alasan');
    const alasanDepartemenTextarea = document.getElementById('alasan-departemen');
    const counterAlasan = document.getElementById('counter-alasan');
    const counterAlasanDepartemen = document.getElementById('counter-alasan-departemen');
    
    // Number inputs
    const teleponInput = document.getElementById('telepon');
    const nimInput = document.getElementById('nim');
    
    // Setup character counters
    setupCharacterCounter(alasanTextarea, counterAlasan, 200);
    setupCharacterCounter(alasanDepartemenTextarea, counterAlasanDepartemen, 200);
    
    // Setup number-only inputs
    setupNumberOnlyInput(teleponInput);
    setupNumberOnlyInput(nimInput);
    
    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulate form submission
            submitForm();
        }
    });
    
    function setupCharacterCounter(textarea, counter, maxLength) {
        textarea.addEventListener('input', function() {
            const currentLength = textarea.value.length;
            const remaining = maxLength - currentLength;
            
            counter.textContent = `${remaining} Character${remaining !== 1 ? 's' : ''}`;
            
            // Update counter color 
            counter.classList.remove('warning', 'danger');
            if (remaining < 50) {
                counter.classList.add('warning');
            }
            if (remaining < 20) {
                counter.classList.add('danger');
            }
        });
    }
    
    function setupNumberOnlyInput(input) {
        // Mencegah input selain angka
        input.addEventListener('input', function(e) {
            // Hapus semua karakter yang bukan angka
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        
        // Mencegah paste konten yang bukan angka
        input.addEventListener('paste', function(e) {
            e.preventDefault();
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            const numbersOnly = paste.replace(/[^0-9]/g, '');
            this.value = numbersOnly;
        });
        
        // Mencegah input karakter non-angka saat mengetik
        input.addEventListener('keypress', function(e) {
            // Izinkan backspace, delete, tab, escape, enter
            if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
                // Izinkan Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 86 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true)) {
                return;
            }
            // Pastikan hanya angka yang diizinkan
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    }
    
    function validateForm() {
        let isValid = true;
        
        // Clear previous errors
        clearErrors();
        
        // Validate each field
        const fields = [
            { id: 'nama', message: 'Nama lengkap wajib diisi' },
            { id: 'email', message: 'Email wajib diisi' },
            { id: 'telepon', message: 'Nomor telepon wajib diisi' },
            { id: 'nim', message: 'NIM wajib diisi' },
            { id: 'alasan', message: 'Alasan bergabung wajib diisi' },
            { id: 'departemen', message: 'Departemen wajib dipilih' },
            { id: 'alasan-departemen', message: 'Alasan memilih departemen wajib diisi' }
        ];
        
        fields.forEach(field => {
            const element = document.getElementById(field.id);
            const value = element.value.trim();
            
            if (!value) {
                showError(field.id, field.message);
                isValid = false;
            }
        });
        
        // Validate email format
        const email = document.getElementById('email').value.trim();
        if (email && !isValidEmail(email)) {
            showError('email', 'Format email tidak valid');
            isValid = false;
        }
        
        // Validate phone number
        const telepon = document.getElementById('telepon').value.trim();
        if (telepon && !isValidPhone(telepon)) {
            showError('telepon', 'Nomor telepon tidak valid (minimal 10 digit angka)');
            isValid = false;
        }
        
        // Validate NIM
        const nim = document.getElementById('nim').value.trim();
        if (nim && !isValidNIM(nim)) {
            showError('nim', 'NIM harus 9 digit angka');
            isValid = false;
        }
        
        return isValid;
    }
    
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        const formGroups = document.querySelectorAll('.form-group');
        
        errorMessages.forEach(error => {
            error.classList.remove('show');
            error.textContent = '';
        });
        
        formGroups.forEach(group => {
            group.classList.remove('error');
        });
    }
    
    function showError(fieldId, message) {
        const errorElement = document.getElementById(`error-${fieldId}`);
        const formGroup = document.getElementById(fieldId).closest('.form-group');
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        
        if (formGroup) {
            formGroup.classList.add('error');
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^[0-9]{10,13}$/;
        return phoneRegex.test(phone);
    }
    
    function isValidNIM(nim) {
        const nimRegex = /^[0-9]{9}$/;
        return nimRegex.test(nim);
    }
    
    function submitForm() {
        // Disable submit button
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim...';
        
        setTimeout(() => {
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Reset form after 5 seconds (optional)
            setTimeout(() => {
                resetForm();
            }, 5000);
        }, 2000);
    }
    
    function resetForm() {
        form.reset();
        form.style.display = 'block';
        successMessage.style.display = 'none';
        
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Pendaftaran';
        
        // Reset character counters
        counterAlasan.textContent = '200 Characters';
        counterAlasanDepartemen.textContent = '200 Characters';
        counterAlasan.classList.remove('warning', 'danger');
        counterAlasanDepartemen.classList.remove('warning', 'danger');
        
        clearErrors();
    }
});