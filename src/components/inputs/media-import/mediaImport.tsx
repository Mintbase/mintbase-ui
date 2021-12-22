import { useState } from "react";

interface MediaImportProps {
  isProfileImage: boolean;
  uploadText: string;
  acceptedFormats: string[];
  idealDimensions: string;
  maxSize: string;
}

const MbMediaImport = (props: MediaImportProps) => {
  const {
    isProfileImage,
    uploadText = "Upload Image",
    acceptedFormats,
    idealDimensions,
    maxSize,
  } = props;
  const [imageUrl, setImageUrl] = useState<any>("");

  const uploadImage = (e: any) => {
    if (!(e?.target?.files.length > 0)) return;
    const file = e.target.files[0];

    setImageUrl(URL.createObjectURL(file));
    console.log(setImageUrl);
  };

  return (
    <>
      {imageUrl && (
        <div className="pb-12">
          <div className="flex items-center justify-center w-full rounded-lg bg-gray-100 dark:bg-gray-900 w-full py-24">
            <div className="h-32 w-32 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={imageUrl} />
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col rounded-lg bg-blue-300-15 dark:bg-blue-100-15 w-full py-48 group text-center cursor-pointer">
          <div className="h-full w-full text-center flex flex-col items-center justify-center p-med-90">
            <p className="text-blue-300 dark:text-blue-100">{uploadText}</p>
            <p className="text-gray-600 dark:text-gray-300">
              (or just drop your file here)
            </p>
          </div>
          <input type="file" className="hidden" onChange={uploadImage} />
        </label>
      </div>
      <p className="p-med-90 text-gray-700 dark:text-gray-500 pt-12 text-center">
        {acceptedFormats && (
          <>
            Accepted Formats:{" "}
            <span className="text-black dark:text-white">
              {acceptedFormats.join(" / ")}
            </span>{" "}
            {(idealDimensions || maxSize) && <>|</>}{" "}
          </>
        )}
        {idealDimensions && (
          <>
            Ideal dimension:{" "}
            <span className="text-black dark:text-white">
              {idealDimensions}
            </span>{" "}
            {maxSize && <>|</>}{" "}
          </>
        )}
        {maxSize && (
          <>
            Max size:{" "}
            <span className="text-black dark:text-white">{maxSize}</span>
          </>
        )}
      </p>
    </>
  );
};

// Accepted Formats: .jpg / .gif / .png | Ideal dimension: 1500x500px | Max size: 500mb

export default MbMediaImport;
