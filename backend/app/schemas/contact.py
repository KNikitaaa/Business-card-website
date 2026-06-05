from pydantic import BaseModel, EmailStr, Field, field_validator


class ContactRequest(BaseModel):
    """Schema for contact form submission."""

    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str | None = Field(None, max_length=20)
    project_type: str = Field(..., max_length=50)
    message: str = Field(..., min_length=10, max_length=2000)
    website: str = Field("", max_length=0)  # Honeypot field
    privacy_accepted: bool

    @field_validator("privacy_accepted")
    @classmethod
    def must_accept_privacy(cls, v: bool) -> bool:
        """Ensure privacy policy is accepted."""
        if not v:
            raise ValueError("Необходимо принять политику конфиденциальности")
        return v

    @field_validator("website")
    @classmethod
    def honeypot_must_be_empty(cls, v: str) -> str:
        """Honeypot validation - field must remain empty."""
        if v:
            raise ValueError("Invalid submission")
        return v


class ContactResponse(BaseModel):
    """Response after contact form submission."""

    success: bool
    message: str
