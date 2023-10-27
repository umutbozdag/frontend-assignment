import gsap from 'gsap';
import { Ref } from 'react';

interface CustomFromToConfig {
  fromVars: GSAPTweenVars;
  toVars: GSAPTweenVars;
}

const createFrameAnimation = <T>(
  el: Ref<T>,
  customFromToConfig?: CustomFromToConfig,
) => {
  const config = customFromToConfig || defaultConfig;

  const tl = gsap.timeline();
  tl.fromTo(el, config.fromVars, config.toVars);

  return tl;
};

const defaultConfig: CustomFromToConfig = {
  fromVars: {
    yPercent: 120,
    ease: 'back.in(1.7)',
  },
  toVars: {
    yPercent: 0,
    delay: 0.7,
    duration: 1,
    marginBottom: '-4px',
  },
};

export default createFrameAnimation;
