import { useState } from "react";
import { EIconName } from "../../../constants/icons";
import MbIcon from "../../icon/Icon";

interface MediaImportProps {
  isProfileImage: boolean;
  uploadText: string;
  acceptedFormats: string[];
  idealDimensions: string;
  maxSize: number;
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
  const [errorMessage, setErrorMessage] = useState("");

  const uploadImage = (e: any) => {
    if (!(e?.target?.files.length > 0)) return;
    const file = e.target.files[0];
    const type = file.type.split("/").pop();
    const size = file.size;
    console.log(size / 1024 / 1024);

    if (
      acceptedFormats.map((format) => format.split(".").pop()).includes(type)
    ) {
      if (size / 1024 / 1024 <= maxSize) {
        setErrorMessage("");
        setImageUrl(URL.createObjectURL(file));
      } else {
        setErrorMessage(`This file exceeds ${maxSize}mb`);
      }
    } else {
      setErrorMessage("This media type is not accepted");
    }
  };

  return (
    <>
      {imageUrl && (
        <div className="pb-12">
          <div
            className={`flex items-center justify-center w-full rounded-lg bg-gray-100 dark:bg-gray-900 w-full ${
              isProfileImage ? "py-24" : "overflow-hidden"
            }`}
          >
            <div
              className={` ${
                isProfileImage
                  ? "h-32 w-32 rounded-full overflow-hidden"
                  : "h-48 w-full"
              }`}
            >
              <img className="w-full h-full object-cover" src={imageUrl} />
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center w-full">
        <label
          className={`flex flex-col rounded-lg bg-blue-300-15 dark:bg-blue-100-15 w-full py-48 group text-center cursor-pointer ${
            errorMessage ? "ring-1 ring-error-300 dark:ring-error-100" : ""
          }`}
        >
          <div className="h-full w-full text-center flex flex-col items-center justify-center p-med-90">
            <p className="text-blue-300 dark:text-blue-100">{uploadText}</p>
            <p className="text-gray-600 dark:text-gray-300">
              (or just drop your file here)
            </p>
          </div>
          {errorMessage && (
            <div className="flex justify-center items-center pt-16">
              <p className="text-error-300 dark:text-error-100 cap-big-90 pr-12">
                {errorMessage}
              </p>
              <MbIcon
                name={EIconName.ERROR}
                size="20px"
                color="error-300 "
                darkColor="error-100"
              />
            </div>
          )}
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
            <span className="text-black dark:text-white">{maxSize}mb</span>
          </>
        )}
      </p>
    </>
  );
};
export default MbMediaImport;
