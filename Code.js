const accordions = document.querySelectorAll('.accordion');

        accordions.forEach(accordion => {
            accordion.addEventListener('click', () => {
                // Basculer la classe active
                accordion.classList.toggle('active');

                // Basculer le contenu de l'accordéon
                const accordionContent = accordion.nextElementSibling;
                if (accordionContent.style.maxHeight) {
                    accordionContent.style.maxHeight = null;
                } else {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                }
            });
        });