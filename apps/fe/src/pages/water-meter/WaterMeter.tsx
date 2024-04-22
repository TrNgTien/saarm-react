import { IconWrapper, PageHeader } from '@/components';
import ImageCropper from '@/components/feat/ImageCropper';
import { Styles } from '@/theme';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { CiImageOn as UploadIcon } from 'react-icons/ci';
import 'react-image-crop/dist/ReactCrop.css';

const WaterMeter = () => {
  const [imageBase64, setImageBase64] = useState<string | undefined>();

  const handlePreviewFile = useCallback((e: any) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageBase64(reader.result?.toString());
    };
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader title={'Chup anh'} />
      {imageBase64 && <ImageCropper imageSrc={imageBase64} />}
      <div className={clsx(Styles.FLEX_BETWEEN, 'mt-4 p-4')}>
        <label className={clsx(Styles.FLEX_COL_CENTER)} htmlFor="upload-file">
          <IconWrapper size={24}>
            <UploadIcon />
          </IconWrapper>
          <input
            type="file"
            name="upload-file"
            id="upload-file"
            hidden
            onChange={handlePreviewFile}
          />
        </label>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          name="upload-file"
          id="upload-file"
          hidden
        />
      </div>
    </div>
  );
};

export default WaterMeter;
