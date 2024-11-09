from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
import io
import PIL.Image
from PIL import ImageEnhance

app = FastAPI()

# Image preprocessing function to enhance contrast
def preprocess_image(image: PIL.Image.Image, contrast_factor: float = 1.5) -> PIL.Image.Image:
    image = image.convert("L")

    enhancer = ImageEnhance.Contrast(image)
    enhanced_image = enhancer.enhance(contrast_factor)

    return enhanced_image


@app.post("/preprocessing")
async def process_prescription(file: UploadFile = File(...)):
    try:
        image = PIL.Image.open(io.BytesIO(await file.read()))
        
        processed_image = preprocess_image(image)

        image_io = io.BytesIO()
        processed_image.save(image_io, format="PNG")
        image_io.seek(0)

        return StreamingResponse(image_io, media_type="image/png")

    except Exception as e:
        return {"error": str(e)}
    
#run using the following command in terminal
# uvicorn preprocessing:app --port 8000