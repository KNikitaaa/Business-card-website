from fastapi_mail import ConnectionConfig, FastMail, MessageSchema
from jinja2 import Template

from app.core.config import settings


# Email configuration
conf = ConnectionConfig(
    MAIL_SERVER=settings.mail_server,
    MAIL_PORT=settings.mail_port,
    MAIL_USERNAME=settings.mail_username,
    MAIL_PASSWORD=settings.mail_password,
    MAIL_FROM=settings.mail_from or f"noreply@{settings.mail_server}",
    MAIL_STARTTLS=settings.mail_starttls,
    MAIL_SSL_TLS=settings.mail_ssl_tls,
    USE_CREDENTIALS=bool(settings.mail_username),
    VALIDATE_CERTS=settings.mail_ssl_tls,
)


async def send_contact_email(contact_data: dict) -> bool:
    """Send contact form submission email to admin."""
    try:
        html_template = """
        <html>
            <head>
                <style>
                    body { font-family: 'Inter', Arial, sans-serif; color: #1e293b; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #0f172a 0%, #1b4f9e 100%);
                               color: white; padding: 30px; border-radius: 8px 8px 0 0; }
                    .header h2 { margin: 0; font-size: 24px; }
                    .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;
                                border: 1px solid #e2e8f0; }
                    .field { margin-bottom: 20px; }
                    .label { font-weight: 600; color: #0f172a; font-size: 12px;
                              text-transform: uppercase; margin-bottom: 5px; }
                    .value { color: #64748b; font-size: 16px; }
                    .divider { height: 1px; background: #e2e8f0; margin: 20px 0; }
                    .footer { color: #64748b; font-size: 12px; margin-top: 20px;
                               text-align: center; border-top: 1px solid #e2e8f0; padding-top: 15px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>Новое сообщение из формы контактов</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Имя</div>
                            <div class="value">{{ name }}</div>
                        </div>

                        <div class="field">
                            <div class="label">Email</div>
                            <div class="value"><a href="mailto:{{ email }}">{{ email }}</a></div>
                        </div>

                        {% if phone %}
                        <div class="field">
                            <div class="label">Телефон</div>
                            <div class="value"><a href="tel:{{ phone }}">{{ phone }}</a></div>
                        </div>
                        {% endif %}

                        <div class="field">
                            <div class="label">Тип проекта</div>
                            <div class="value">{{ project_type }}</div>
                        </div>

                        <div class="divider"></div>

                        <div class="field">
                            <div class="label">Сообщение</div>
                            <div class="value" style="white-space: pre-wrap;">{{ message }}</div>
                        </div>

                        <div class="footer">
                            <p>Это автоматическое письмо от сайта {{ site_name }}.</p>
                            <p>Пожалуйста, ответьте на этот email для связи с клиентом.</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        """

        template = Template(html_template)
        html_content = template.render(
            name=contact_data.get("name", ""),
            email=contact_data.get("email", ""),
            phone=contact_data.get("phone", ""),
            project_type=contact_data.get("project_type", ""),
            message=contact_data.get("message", ""),
            site_name=settings.site_name,
        )

        message = MessageSchema(
            subject=f"Новый запрос с сайта {settings.site_name}",
            recipients=[settings.admin_email],
            body=html_content,
            subtype="html",
        )

        fm = FastMail(conf)
        await fm.send_message(message)
        return True
    except Exception as e:
        print(f"Failed to send email: {e}")
        return False
