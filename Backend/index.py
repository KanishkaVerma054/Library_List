from fastapi import FastAPI,Request
from routes.user import user
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware


app = FastAPI()
# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend origin
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Adjust as needed
    allow_headers=["*"],  # Allow all headers
)
@app.exception_handler(Exception)
async def unicorn_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"message": "Internal Server Error"},
    )

app.include_router(user)