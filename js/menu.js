        // Toggle main menu (top section)
        document.getElementById('menu-btn').addEventListener('click', function () {
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                // Change hamburger to X (optional enhancement)
                this.innerHTML = `
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        `;
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                // Change X back to hamburger
                this.innerHTML = `
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        `;
            }
        });

        // Mobile dropdown toggles
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function () {
                const content = this.nextElementSibling;
                const icon = this.querySelector('.mobile-dropdown-icon');

                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.classList.add('rotate-180');
                } else {
                    content.classList.add('hidden');
                    icon.classList.remove('rotate-180');
                }
            });
        });

        // For desktop menu toggle if needed
        document.addEventListener('DOMContentLoaded', function () {
            const menuBtn = document.getElementById('menu-btn');
            const menu = document.getElementById('menu');

            if (menuBtn && menu) {
                menuBtn.addEventListener('click', function () {
                    if (window.innerWidth >= 1024) return; // Only for mobile

                    if (menu.classList.contains('hidden')) {
                        menu.classList.remove('hidden');
                    } else {
                        menu.classList.add('hidden');
                    }
                });
            }
        });

        // MORQUE
         const marquee = document.getElementById("marquee");
         const container = marquee.parentElement;

         let direction = -1; // -1: left, 1: right
         let speed = 2; // pixels per frame
         let position = 0;

         function animate() {
           const marqueeWidth = marquee.scrollWidth;
           const containerWidth = container.clientWidth;

           position += speed * direction;

           // Clamp movement and reverse direction
           if (
             direction === -1 &&
             position <= -(marqueeWidth - containerWidth)
           ) {
             position = -(marqueeWidth - containerWidth);
             direction = 1;
           } else if (direction === 1 && position >= 0) {
             position = 0;
             direction = -1;
           }

           marquee.style.transform = `translateX(${position}px)`;
           requestAnimationFrame(animate);
         }

         requestAnimationFrame(animate);