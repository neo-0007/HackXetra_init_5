from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import io
import google.generativeai as genai
import PIL.Image
from typing_extensions import TypedDict, List, Optional
import numpy as np
# import cv2
import json
from PIL import ImageEnhance


app = FastAPI()


# def preprocess_image(image: PIL.Image.Image, block_size: int = 11, C: int = 2) -> bytes:
#     # Resize and convert to grayscale
#     image = image.convert("L")
#         # Convert the Pillow image to a NumPy array (OpenCV format)

#     image_np = np.array(image)
    
    

#     # Apply adaptive thresholding using OpenCV
#     binary_image_np = cv2.adaptiveThreshold(
#         image_np,
#         maxValue=255,
#         adaptiveMethod=cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
#         thresholdType=cv2.THRESH_BINARY,
#         blockSize=block_size,
#         C=C
#     )
    
#     # Convert the NumPy array back to a Pillow image
#     binary_image = PIL.Image.fromarray(binary_image_np)
#     binary_image.show()

#     return binary_image


def preprocess_image(image: PIL.Image.Image, contrast_factor: float = 1.0) -> PIL.Image.Image:
    # Convert to grayscale
    image = image.convert("L")

    enhancer = ImageEnhance.Contrast(image)
    enhanced_image = enhancer.enhance(contrast_factor)

    # enhanced_image.show()

    return enhanced_image




gemini_api_key = 'AIzaSyDS3ydB7g2GcCnZ160O-4XRj5V3p5x3voI' 
genai.configure(api_key=gemini_api_key)


# Initialize the model
model = genai.GenerativeModel('gemini-1.5-flash')


class Medicine(TypedDict):
    name: str
    dosage: Optional[str]
    frequency: Optional[str]
    timing: Optional[str]
    duration: Optional[str]

class Prescription(TypedDict):
    doctor_name: str
    doctor_title: Optional[str]
    date: str
    observed_medical_condition: Optional[str]
    medicines: List[Medicine]
    clinic_address: str
    doctor_phone: str



# Endpoint to receive image and process it
@app.post("/process-prescription")
async def process_prescription(file: UploadFile = File(...)):
    try:
        # Read image from upload
        image = PIL.Image.open(io.BytesIO(await file.read()))
        
        # Preprocess image
        img = preprocess_image(image)

        # Send to Gemini API
        response = model.generate_content(
            ["This a prescription written by a doctor. Detect what is written in this prescription and respond with all information written in a json format. Guess the name of the medicine only if it is not among the known medicines or brands", img],
            generation_config=genai.GenerationConfig(
                response_mime_type="application/json", response_schema=Prescription
            ),
            )

        digitized_data = json.loads(response.text)

        return JSONResponse(content=digitized_data)
       
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Run the API locally
# Use the command: uvicorn AIapi:app --port 8000
#curl -X POST "http://127.0.0.1:8000/process-prescription" -H "Content-Type: multipart/form-data" -F "file=@/path/to/your/image.jpg"


