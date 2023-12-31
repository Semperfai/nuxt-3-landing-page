import { computed, ref } from 'vue';

export const useBreakpoints = () => {
  if (process.client) {
    const viewportWidth = ref(globalThis?.innerWidth);
    window.addEventListener('resize', () => {
      viewportWidth.value = window.innerWidth;
    });

    return computed(() => ({
      isXs: viewportWidth.value < 640,
      isSm: viewportWidth.value >= 640,
      isMd: viewportWidth.value >= 840,
      isLg: viewportWidth.value >= 1024,
      isXl: viewportWidth.value >= 1280,
    }));
  }
};
