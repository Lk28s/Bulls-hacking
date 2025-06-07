`realmente.md`
```md
# Realmente.md

Welcome to **Realmente** — your clean, elegant component library designed for a flawless developer experience and modern aesthetics.

---

<section style="max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; font-family: 'Inter', sans-serif; background: #ffffff; color: #6b7280;">

  <header style="position: sticky; top: 0; background: #fff; display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05); z-index: 50;">

    <div style="font-weight: 700; font-size: 1.5rem; color: #111827;">
      Realmente
    </div>

    <nav style="display: flex; gap: 2rem; font-weight: 600; font-size: 1rem; color: #4b5563;">
      <a href="#" style="
        position: relative;
        color: #4b5563;
        text-decoration: none;
        transition: color 0.3s ease;
      " onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#4b5563'">Docs</a>
      <a href="#" style="
        position: relative;
        color: #4b5563;
        text-decoration: none;
        transition: color 0.3s ease;
      " onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#4b5563'">GitHub</a>
      <a href="#" style="
        padding: 0.5rem 1.5rem;
        background: #111827;
        color: white;
        border-radius: 0.5rem;
        font-weight: 700;
        text-decoration: none;
        transition: background-color 0.3s ease;
      " onmouseover="this.style.background='#374151'" onmouseout="this.style.background='#111827'">Get Started</a>
    </nav>

  </header>


  <!-- Hero -->
  <section aria-label="Hero section" style="text-align: center; margin-top: 6rem; padding-bottom: 4rem;">
    <h1 style="font-size: 3.5rem; font-weight: 700; color: #111827; letter-spacing: -0.02em; line-height: 1.1; max-width: 700px; margin: 0 auto 1rem auto;">
      Build your modern component library with <span style="color:#2563eb;">Realmente</span>
    </h1>
    <p style="font-size: 1.25rem; color: #4b5563; max-width: 520px; margin: 0 auto;">
      A clean, minimal UI library with a focus on clarity, performance, and developer happiness.
    </p>
    <div style="margin-top: 3rem;">
      <a href="#" style="
        font-size: 1.125rem;
        padding: 1rem 3rem;
        background: #111827;
        color: white;
        border-radius: 0.75rem;
        font-weight: 600;
        text-decoration: none;
        transition: background-color 0.3s ease;
        display: inline-block;
      " onmouseover="this.style.background='#374151'" onmouseout="this.style.background='#111827'">Browse Blocks</a>
    </div>
  </section>


  <!-- Features -->
  <section aria-label="Features" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); gap: 3rem 4rem; padding-bottom: 4rem;">

    <article style="background: #f9fafb; border-radius: 12px; padding: 2rem; box-shadow: 0 8px 16px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
      <h3 style="font-weight: 700; font-size: 1.5rem; color: #1f2937; margin-bottom: 1rem;">
        Elegant Typography
      </h3>
      <p style="color: #6b7280; font-size: 1.125rem; line-height: 1.5;">
        Crisp, bold typefaces tailored for great readability and modern visuals.
      </p>
    </article>

    <article style="background: #f9fafb; border-radius: 12px; padding: 2rem; box-shadow: 0 8px 16px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
      <h3 style="font-weight: 700; font-size: 1.5rem; color: #1f2937; margin-bottom: 1rem;">
        Responsive Layout
      </h3>
      <p style="color: #6b7280; font-size: 1.125rem; line-height: 1.5;">
        Fluid and adaptive grids that look perfect on any device, from mobile to widescreen displays.
      </p>
    </article>

    <article style="background: #f9fafb; border-radius: 12px; padding: 2rem; box-shadow: 0 8px 16px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
      <h3 style="font-weight: 700; font-size: 1.5rem; color: #1f2937; margin-bottom: 1rem;">
        Intuitive Interactions
      </h3>
      <p style="color: #6b7280; font-size: 1.125rem; line-height: 1.5;">
        Smooth transitions and subtle animations bring your UI to life without distractions.
      </p>
    </article>

  </section>


  <!-- Code Snippet Section -->
  <section aria-label="Example code snippet" style="background: #111827; border-radius: 12px; padding: 2rem; max-width: 760px; margin: 0 auto 4rem; overflow-x: auto; font-family: 'Fira Code', monospace; color: #f9fafb;">
    <pre style="font-size: 1rem; line-height: 1.5;">
<code>
{/* Example button component */}
{'<button className="btn-primary">Get Started</button>'}
</code>
    </pre>
  </section>

  <!-- CTA Section -->
  <section aria-label="Call to action" style="text-align: center; margin-bottom: 6rem;">
    <a href="#" style="
      font-size: 1.5rem;
      padding: 1.25rem 4rem;
      background: #2563eb;
      color: white;
      border-radius: 1rem;
      font-weight: 700;
      text-decoration: none;
      box-shadow: 0 10px 20px rgba(37,99,235,0.4);
      transition: background-color 0.3s ease;
      display: inline-block;
    " onmouseover="this.style.background='#1e40af'" onmouseout="this.style.background='#2563eb'">Get Started Now</a>
  </section>
</section>

<style>
  /* Animations */
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-20px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  @keyframes fadeIn {
    0% { opacity: 0;}
    100% { opacity: 1;}
  }

  header h1 {
    animation: fadeInDown 0.75s ease forwards;
  }
  header p {
    animation: fadeInUp 0.75s ease forwards;
  }
  main {
    animation: fadeIn 1s ease forwards;
  }
  section article {
    will-change: transform;
  }
  section article:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 24px rgba(0,0,0,0.15);
  }

  /* Scrollbar for code snippet */
  pre::-webkit-scrollbar {
    height: 10px;
  }
  pre::-webkit-scrollbar-thumb {
    background: #2563eb;
    border-radius: 8px;
  }
  pre::-webkit-scrollbar-track {
    background: #1f2937;
  }
</style>
</body>
</html>

```
