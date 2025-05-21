from pydantic import BaseSettings

class Settings(BaseSettings):
    TFL_APP_KEY: str

    class Config:
        env_file = ".env"

settings = Settings()