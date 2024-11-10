import React, { useState, useEffect } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { DiGitBranch } from 'react-icons/di';
import { MoonLoader } from 'react-spinners';

interface FileType {
    name: string;
    type: string;
    progress: number;
    file: File;
}

interface IPrescription {
    prescription: {
        name: string;
        dosage: string;
        frequency: string;
        timing: string;
    }[];
    doctor: {
        name: string;
        phone: string;
    };
}

// FileUpload Component
const ScanAndGet = () => {
    const [Prescription, setPrescription] = useState<IPrescription | null>(null);
    const [file, setFile] = useState<FileType | null>(null);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileUpload = (uploadedFile: File) => {
        setFile({
            name: uploadedFile.name,
            type: uploadedFile.type.split('/')[1].toUpperCase(),
            progress: 0,
            file: uploadedFile
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            handleFileUpload(selectedFile);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files && event.dataTransfer.files[0];
        if (droppedFile) {
            handleFileUpload(droppedFile);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleSubmit = async () => {
        if (file) {
            console.log('Uploading file:', file);
            setUploadError(null);
            setUploadSuccess(null);
            setLoading(true);

            // Create FormData object
            const formData = new FormData();
            formData.append('image', file.file);  // Using 'image' as the field name

            try {
                const response = await fetch('http://localhost:3000/api/v1/user/upload-prescription/', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: formData
                });

                if (!response.ok) {
                    throw new Error(`Failed to upload: ${response.statusText}`);
                }

                const data = await response.json();
                setUploadSuccess('Successfully uploaded!');
                setLoading(false);
                setPrescription(data);
                console.log('Successfully uploaded:', data);
            } catch (error) {
                setLoading(false);
                setUploadError('Error during uploading, please try again.');
                console.error('Error during uploading:', error);
            }
        }
    };

    // Simulate upload progress
    useEffect(() => {
        if (file && file.progress < 100) {
            const interval = setInterval(() => {
                setFile((prevFile) =>
                    prevFile
                        ? { ...prevFile, progress: Math.min(prevFile.progress + 10, 100) }
                        : null
                );
            }, 200);

            if (file?.progress === 100) {
                clearInterval(interval);
            }

            return () => clearInterval(interval);
        }
    }, [file]);

    return (
        <>
        {(!Prescription)?((loading)?(<div className='flex items-center justify-center my-28'><MoonLoader /></div>):(<div className="flex flex-col items-center space-y-6">
            <h2 className="text-xl font-semibold">Upload Your File</h2>

            {/* Drag and Drop Area */}
            <div
                className="w-full max-w-md p-10 border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg flex flex-col items-center"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <AiOutlineCloudUpload className="text-4xl text-blue-500" />
                <p className="mt-2 text-gray-600">Drag and drop your file</p>
                <p className="mt-1 text-gray-500">Or</p>
                <label className="mt-4 px-4 py-2 text-white bg-blue-600 rounded cursor-pointer hover:bg-blue-700">
                    Browse file
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleInputChange}
                    />
                </label>
            </div>

            

            {/* File List */}
            {file && <FileList file={file} />}

            {/* Upload Button */}
            {file && file.progress === 100 && (
                <button
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Upload
                </button>
            )}

            {/* Display Upload Result */}
            {uploadError && <p className="text-red-500 mt-4">{uploadError}</p>}
            {uploadSuccess && <p className="text-green-500 mt-4">{uploadSuccess}</p>}
        </div>)):(<div>
            

        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <div className="border-b pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-blue-600">Digital Prescription</h1>
                    <p className="text-gray-500 mt-1">Issued by {Prescription?.doctor.name}</p>
                </div>

                {/* Prescription Details */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Prescription</h2>
                    <div className="mt-4 space-y-3">
                        {Prescription?.prescription.map((medicine, index) => (
                            <div key={index} className="sm:flex max-sm:space-x-4 justify-between">
                                <p className="text-gray-600">{index + 1}. {medicine.name}</p>
                                <p className="text-gray-600">{medicine.dosage}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer with Doctor's Signature */}
                <div className="border-t pt-4 text-right">
                    <p className="text-gray-600 font-semibold">{Prescription?.doctor.name}</p>
                </div>
            </div>
        </div>

        </div>)}
        </>
    );
};

// FileList Component
const FileList = ({ file }: { file: FileType }) => {
    return (
        <div className="w-full max-w-md space-y-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 flex items-center justify-center rounded">
                    <span className="text-xs font-semibold text-gray-600">{file.type}</span>
                </div>
                <div className="flex-1">
                    <p className="text-gray-700 text-sm font-medium">{file.name}</p>
                    <div className="relative w-full bg-gray-200 rounded h-2 mt-1">
                        <div
                            className={`${file.progress === 100 ? 'bg-green-500' : 'bg-blue-500'} h-2 rounded`}
                            style={{ width: `${file.progress}%` }}
                        ></div>
                    </div>
                </div>
                <div className="text-gray-500 text-sm">
                    {file.progress === 100 ? 'Completed' : `${file.progress}%`}
                </div>
            </div>
        </div>
    );
};

export default ScanAndGet;
