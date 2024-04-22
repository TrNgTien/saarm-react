export const IconImage = (props: {
  src: string;
  styles?: string;
  alt?: string;
  height?: number;
  width?: number;
}) => {
  const { src, styles, alt = 'icon', height, width } = props;
  return (
    <img
      alt={alt}
      src={src}
      loading="lazy"
      className={styles}
      height={height}
      width={width}
    />
  );
};
