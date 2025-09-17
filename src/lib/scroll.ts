const smoothScrollTo = (targetY: number, duration: number = 500) => {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const currentY = startY + distance * easeOutCubic;

    window.scrollTo(0, currentY);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

export const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (!element) {
    return;
  }

  const headerHeight = 64;
  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerHeight;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    smoothScrollTo(offsetPosition, 600);
  } else {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  }
};

export const navigateToSection = (href: string) => {
  if (window.location.pathname === "/") {
    scrollToSection(href);
  } else {
    window.location.href = `/${href}`;
  }
};
