# Authentication & Authorization

## Current Auth Status: PUBLIC FACING PORTFOLIO
- The portfolio is a public static web application. No user login, OAuth session tokens, or JWT authentication are required for public viewing.

## Security Controls for Public Contact Form
- **Input Sanitization**: Form inputs in `ContactModal` trim whitespace before processing.
- **Client-side State Reset**: Form fields reset to initial state upon modal close or successful submission.
- **Rate Limiting (Future Backend Roadmap)**: If attaching an email service API (e.g. Resend / SendGrid), implement rate limiting per IP (max 3 submissions per hour).
