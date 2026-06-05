from fastapi import APIRouter, HTTPException, Request

from app.core.email import send_contact_email
from app.core.limiter import limiter
from app.schemas.contact import ContactRequest, ContactResponse

router = APIRouter(prefix="/api", tags=["contact"])


@router.post("/contact", response_model=ContactResponse)
@limiter.limit("5/10minutes")
async def submit_contact(request: Request, contact_data: ContactRequest):
    """
    Handle contact form submission.

    Rate limited to 5 requests per 10 minutes per IP.
    """
    try:
        # Send email to admin
        email_sent = await send_contact_email(contact_data.model_dump())

        if not email_sent:
            raise HTTPException(
                status_code=500,
                detail="Ошибка при отправке письма. Пожалуйста, попробуйте позже.",
            )

        return ContactResponse(
            success=True,
            message=(
                "Спасибо! Ваше сообщение отправлено. "
                "Мы свяжемся с вами в ближайшее время."
            ),
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="Произошла ошибка при обработке вашего запроса.",
        )
