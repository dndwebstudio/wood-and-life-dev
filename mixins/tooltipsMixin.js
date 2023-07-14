import { useTooltipStore } from '@/store/tooltips';

export default function useTooltips() {
      // достаём из стора дата-атрибуты для текста, над которым будут всплывать тултипы
  const store = useTooltipStore();

  function applyTooltips() {
    const tooltips = store.$state?.tooltips;


    tooltips.forEach((tooltip) => {
      const selectedElements = document.querySelectorAll(tooltip.defineTextClass);
   

      selectedElements.forEach((element) => {
     
        const exactIndex = tooltips.findIndex(el => el.defineTextClass.slice(1) === element.className)
        
        if (exactIndex >= 0) {
          element.setAttribute('data-text', tooltips[exactIndex].dataText);
          element.setAttribute('data-img', tooltips[exactIndex].dataImg);
        }
      });
    });
  }

  return {
    applyTooltips,
  };
}