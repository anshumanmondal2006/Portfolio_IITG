// Add this JavaScript to your existing script
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Highlight active section
    function highlightNav() {
        const scrollPosition = window.scrollY + 100;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth scroll with offset
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (mobileMenu.classList.contains('hidden') === false) {
                    mobileMenu.classList.add('hidden');
                    menuBtn.classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuBtn.classList.toggle('active');
    });

    // Highlight nav on scroll
    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial call

    // Add hover effect to mobile menu items
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(5px)';
            link.style.transition = 'transform 0.2s ease';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });
});

// Add this to your existing theme toggle code to handle nav colors
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    // Your existing theme toggle code
    // The nav colors will automatically update because of the CSS we added
});
// Add these to your script
const loader = new THREE.GLTFLoader();
loader.load(
    'path/to/brain-model.glb',
    function (gltf) {
        const brainModel = gltf.scene;
        brainModel.scale.set(0.5, 0.5, 0.5);
        scene.add(brainModel);
    },
    undefined,
    function (error) {
        console.error('Error loading brain model', error);
    }
);
<canvas id="globe-canvas" style="width: 100%; height: 500px;"></canvas>

