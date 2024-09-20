document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.module h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

const testimonials = [
    { text: "Great course! I learned a lot and enjoyed every bit of it.", author: "John Doe" },
    { text: "The instructor was very knowledgeable. Highly recommended!", author: "Jane Smith" },
    { text: "This course exceeded my expectations. I can't wait to apply what I've learned.", author: "James Johnson" }
  ];
  
  const testimonialText = document.getElementById('testimonial-text');
  const authorText = document.getElementById('author');
  const nextBtn = document.getElementById('next-btn');
  
  let currentTestimonialIndex = 0;
  
  function displayTestimonial() {
    const { text, author } = testimonials[currentTestimonialIndex];
    testimonialText.textContent = text;
    authorText.textContent = `- ${author}`;
  }
  
  displayTestimonial();
  
  nextBtn.addEventListener('click', () => {
    currentTestimonialIndex++;
    if (currentTestimonialIndex === testimonials.length) {
      currentTestimonialIndex = 0; // Loop back to the beginning
    }
    displayTestimonial();
  });
  
  