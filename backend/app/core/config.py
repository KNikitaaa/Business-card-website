from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings from environment variables."""

    environment: str = "development"

    # SMTP Configuration
    mail_server: str = "smtp.mail.ru"
    mail_port: int = 465
    mail_username: str = ""
    mail_password: str = ""
    mail_from: str = ""
    mail_starttls: bool = False
    mail_ssl_tls: bool = True

    # Admin email for form submissions
    admin_email: str = ""

    # Redis configuration
    redis_url: str = "redis://redis:6379"

    # CORS configuration
    allowed_origins: list[str] = ["http://localhost:3000"]

    # Site configuration
    site_name: str = "Проектная группа"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )


settings = Settings()
