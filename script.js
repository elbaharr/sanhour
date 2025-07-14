// ==== Hero Slider Script ====
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator');
  let current = 0;
  let intervalId;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }

  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  if (slides.length > 1) {
    startAutoSlide();
    indicators.forEach((ind, idx) => {
      ind.addEventListener('click', function() {
        stopAutoSlide();
        showSlide(idx);
        startAutoSlide();
      });
    });
  }
});


// ==== Hero Background Slider ====
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.hero-bg-slide');
  const indicators = document.querySelectorAll('.hero-bg-indicator');
  let current = 0;
  let intervalId;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }

  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 2000); // تم تقليل الزمن إلى ثانيتين
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  if (slides.length > 1) {
    startAutoSlide();
    indicators.forEach((ind, idx) => {
      ind.addEventListener('click', function() {
        stopAutoSlide();
        showSlide(idx);
        startAutoSlide();
      });
    });
  }
});


// انتظر حتى يتم تحميل محتوى الصفحة بالكامل قبل تشغيل الكود
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. تغيير خلفية شريط التنقل عند التمرير ---
  const header = document.getElementById('main-header');
  // التحقق من وجود الشريط العلوي لتجنب الأخطاء
  if (header) {
      window.addEventListener('scroll', () => {
          // إذا كان التمرير العمودي أكبر من 50 بكسل
          if (window.scrollY > 50) {
              // أضف كلاس 'scrolled' لتغيير النمط
              header.classList.add('scrolled');
          } else {
              // أزل الكلاس عند العودة للأعلى
              header.classList.remove('scrolled');
          }
      });
  }

  // --- 2. تفعيل قائمة الجوال (Hamburger Menu) ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  // التحقق من وجود زر القائمة والروابط
  if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
          // قم بتبديل كلاس 'active' لإظهار أو إخفاء القائمة
          navLinks.classList.toggle('active');
      });
  }

  // --- 3. تبديل الوضع (فاتح/داكن) ---
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const moonIcon = 'fa-moon'; // أيقونة القمر (الوضع الداكن)
  const sunIcon = 'fa-sun';  // أيقونة الشمس (الوضع الفاتح)

  // التحقق من وجود زر التبديل
  if (themeToggle) {
      // استعادة الوضع المحفوظ من المرة السابقة (إن وجد)
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          body.classList.add('dark-mode');
          themeToggle.querySelector('i').classList.replace(moonIcon, sunIcon);
      }

      themeToggle.addEventListener('click', () => {
          // تبديل كلاس 'dark-mode' على عنصر body
          body.classList.toggle('dark-mode');
          
          // تحديث الأيقونة بناءً على الوضع الحالي
          const icon = themeToggle.querySelector('i');
          if (body.classList.contains('dark-mode')) {
              icon.classList.replace(moonIcon, sunIcon);
              // حفظ الاختيار في التخزين المحلي للمتصفح
              localStorage.setItem('theme', 'dark');
          } else {
              icon.classList.replace(sunIcon, moonIcon);
              localStorage.setItem('theme', 'light');
          }
      });
  }

  // --- 4. إظهار العناصر عند التمرير (Reveal on Scroll) ---
  const revealElements = document.querySelectorAll('.reveal');
  // التحقق من وجود عناصر تحتاج للإظهار
  if (revealElements.length > 0) {
      const revealOnScroll = () => {
          const windowHeight = window.innerHeight;
          revealElements.forEach(el => {
              const elementTop = el.getBoundingClientRect().top;
              // إذا كان العنصر ظاهرًا في الشاشة
              if (elementTop < windowHeight - 100) {
                  el.classList.add('active');
              }
          });
      };
      // قم بتشغيل الدالة عند التمرير
      window.addEventListener('scroll', revealOnScroll);
      // قم بتشغيلها مرة واحدة عند التحميل لعرض العناصر الظاهرة بالفعل
      revealOnScroll();
  }

  // --- 5. تأثير الخلفية اللامعة المتفاعلة مع الفأرة ---
  window.addEventListener('mousemove', e => {
      // تحديث متغيرات CSS بإحداثيات الفأرة
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
  });


  
});