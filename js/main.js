// Main JavaScript file for The Florida Hotel website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page in navigation
    highlightCurrentPage();
    
    // Initialize any page-specific functionality
    initializePageSpecificFunctions();
});

// Highlight the current page in the navigation menu
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.taskbar a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize page-specific functions
function initializePageSpecificFunctions() {
    // Gallery page functionality
    if (window.location.pathname.includes('gallery.html')) {
        initializeGalleryFilters();
    }
    
    // Blog page functionality
    if (window.location.pathname.includes('blog.html')) {
        initializeBlogFilters();
    }
    
    // Booking form validation
    if (window.location.pathname.includes('booking.html')) {
        initializeBookingForm();
    }
    
    // Registration form validation
    if (window.location.pathname.includes('registration.html')) {
        initializeRegistrationForm();
    }
}

// Gallery page filter functionality
function initializeGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const category = button.textContent.toLowerCase();
                
                // Show/hide gallery items based on category
                galleryItems.forEach(item => {
                    const itemTitle = item.querySelector('h3').textContent.toLowerCase();
                    if (category === 'all' || itemTitle.includes(category)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Blog page filter functionality
function initializeBlogFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogItems = document.querySelectorAll('.blog-item');
    
    if (categoryButtons.length && blogItems.length) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const category = button.textContent.toLowerCase();
                
                // Show/hide blog items based on category
                blogItems.forEach(item => {
                    const itemTitle = item.querySelector('h3').textContent.toLowerCase();
                    if (category === 'all' || itemTitle.includes(category)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Booking form validation
function initializeBookingForm() {
    const bookingForm = document.querySelector('.booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            // Basic form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const checkin = document.getElementById('checkin');
            const checkout = document.getElementById('checkout');
            
            if (!name.value || !email.value || !phone.value || !checkin.value || !checkout.value) {
                alert('Please fill in all required fields');
                event.preventDefault();
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address');
                event.preventDefault();
                return false;
            }
            
            // Date validation
            const checkinDate = new Date(checkin.value);
            const checkoutDate = new Date(checkout.value);
            
            if (checkinDate >= checkoutDate) {
                alert('Check-out date must be after check-in date');
                event.preventDefault();
                return false;
            }
            
            // If all validations pass, allow form submission
            return true;
        });
    }
}

// Registration form validation
function initializeRegistrationForm() {
    const registrationForm = document.querySelector('form');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            // Basic form validation
            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');
            
            if (!username.value || !email.value || !password.value || !confirmPassword.value) {
                alert('Please fill in all required fields');
                event.preventDefault();
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address');
                event.preventDefault();
                return false;
            }
            
            // Password validation
            if (password.value.length < 8) {
                alert('Password must be at least 8 characters long');
                event.preventDefault();
                return false;
            }
            
            // Confirm password validation
            if (password.value !== confirmPassword.value) {
                alert('Passwords do not match');
                event.preventDefault();
                return false;
            }
            
            // If all validations pass, allow form submission
            return true;
        });
    }
} 