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
    yPercent: 100,
    ease: 'expo.in',
  },
  toVars: {
    yPercent: 0,
    duration: 1,
    marginBottom: '-4px',
  },
};

export default createFrameAnimation;
