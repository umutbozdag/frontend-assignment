import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import exportFrameImg from '../../assets/export-frame.png';
import exportArrowImg from '../../assets/export-arrow.png';
import pdfImg from '../../assets/pdf.png';
import jpgImg from '../../assets/jpg.png';
import txtImg from '../../assets/txt.png';
import cn from 'classnames/bind';
import styles from './FeatureExportFrame.module.scss';
import createFrameAnimation from '../../utils/createFrameAnimation';

const cx = cn.bind(styles);

const files = [
  {
    id: 'export-pdf',
    alt: 'Pdf file',
    src: pdfImg,
    classes: ['exportPdfImg', 'exportFileImg'],
  },
  {
    id: 'export-jpg',
    alt: 'Jpg file',
    src: jpgImg,
    classes: ['exportJpgImg', 'exportFileImg'],
  },
  {
    id: 'export-txt',
    alt: 'Word file',
    src: txtImg,
    classes: ['exportTxtImg', 'exportFileImg'],
  },
];

const FeatureExportFrame = () => {
  const exportFrameImgRef = useRef(null);
  useLayoutEffect(() => {
    createFrameAnimation(exportFrameImgRef.current);

    const tl = gsap.timeline();

    tl.fromTo(
      '#export-arrow',
      {
        xPercent: 100,
        yPercent: 150,
        ease: 'back.in',
      },
      {
        xPercent: 0,
        yPercent: 0,
        duration: 0.4,
        delay: 0.99,
      },
    )
      .fromTo(
        '#export-pdf',
        {
          xPercent: 100,
          yPercent: 150,
          ease: 'back.in',
        },
        {
          xPercent: 0,
          yPercent: 0,
          duration: 0.3,
        },
      )
      .fromTo(
        '#export-jpg',
        {
          xPercent: 0,
          yPercent: 150,
          ease: 'back.in',
        },
        {
          xPercent: 0,
          yPercent: 0,
          duration: 0.3,
          scale: 0.85,
        },
      )
      .fromTo(
        '#export-txt',
        {
          xPercent: -100,
          yPercent: 150,
          ease: 'back.in',
        },
        {
          xPercent: 0,
          yPercent: 0,
          duration: 0.3,
        },
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={cx('exportFrameContainer')}>
      <div className={cx('exportFrame')}>
        <img
          id="filters-frame-img"
          ref={exportFrameImgRef}
          className={cx('exportFrameImg')}
          src={exportFrameImg}
          alt="Filters frame image"
        />
        <img
          id="export-arrow"
          className={cx('exportArrowImg')}
          src={exportArrowImg}
          alt="Filters settings"
        />

        <div className={cx('exportFileContainer')}>
          {files.map((file) => {
            return (
              <img
                key={file.id}
                id={file.id}
                className={cx([...file.classes])}
                src={file.src}
                alt={file.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureExportFrame;
