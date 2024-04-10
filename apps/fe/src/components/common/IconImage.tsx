export const IconImage = (props: { src: string; styles: string; alt?: string }) => {
  const { src, styles, alt = 'icon' } = props;
  return <img alt={alt} src={src} loading="lazy" className={styles} />;
};
