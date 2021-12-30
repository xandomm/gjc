import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

const FileInput = (props) => {
  const { name, label = name, mode = "update" } = props;

  const { register, unregister, setValue, watch } = useForm();

  const files = watch(name);

  const onDrop = useCallback(
    (droppedFiles) => {
      let newFiles =
        mode === "update" ? droppedFiles : [...(files || []), ...droppedFiles];
      if (mode === "append") {
        newFiles = newFiles.reduce((prev, file) => {
          const fo = Object.entries(file);
          
          if (
            prev.find((e) => {
              const eo = Object.entries(e);
              return eo.every(
                ([key, value], index) =>
                  key === fo[index][0] && value === fo[index][1]
              );
            })
          )

           {
            return prev;
          } else {
            return [...prev, file];
          }
        }, []);
      }
      setValue(name, newFiles, { shouldValidate: true });
    },
    [setValue, name, mode, files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept
  });

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);
  useEffect(() => {

    if (files) {
  
      let formData = new FormData();
      formData.append('file', files[0]);
console.log(formData)
       axios.post('http://localhost:8080/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }

    }).then(()=>{
      window.alert('imagem enviada')
    }).catch(err=> console.log(err))

  }

    }
, [files]);

  return (
    <div>
        <br />
<h3>Logotipo</h3>
<br />
<br />

    <label
        className="block text-gray-700 text-sm font-bold mb-2 capitalize"
        htmlFor={name}
      >
        {label}
      </label>

      <div {...getRootProps()} className="col-md-4">
        <input
          {...props}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          placeholder="Arraste sua imagem até aqui"
          type="file"
          {...getInputProps()}
        />

        <div
          className={
            "w-full p-2 border border-dashed border-gray-900 " +
            (isDragActive ? "bg-gray-400" : "bg-gray-200")
          }
        >
          <p className="text-center my-2">Drop the files here ...</p>
          {!!files?.length && (
            <div className="grid gap-1 grid-cols-4 mt-2">
              {files.map((file) => {
                return (
                  <div key={file.name}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileInput;
