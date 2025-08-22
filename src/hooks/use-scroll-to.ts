/**
 * Custom hook for smooth scrolling to elements
 */

export function useScrollTo() {
  const scrollToElement = (elementId: string, options?: ScrollIntoViewOptions) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        ...options,
      });
    }
  };

  const scrollToTop = (options?: ScrollIntoViewOptions) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      ...options,
    });
  };

  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId, { block: 'start' });
  };

  return {
    scrollToElement,
    scrollToTop,
    scrollToSection,
  };
}
