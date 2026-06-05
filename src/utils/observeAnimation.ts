export function observeAnimation(selector: string, delay: number = 0) {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.style.animationDelay = `${delay}ms`;
      el.style.animationPlayState = "running";
      observer.disconnect();
    }
  }, { threshold: 0.2 });

  observer.observe(el);
}