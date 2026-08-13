# API & Client Event Graph

```mermaid
graph LR
    User[User Interaction] --> NavClick[Click Navbar Nav Item]
    User --> ContactBtn[Click Hire Me / Get In Touch]
    User --> FormSubmit[Submit Contact Modal Form]
    User --> SocialClick[Click External Social Link]

    NavClick --> Scroll[Smooth Scroll to Anchor]
    ContactBtn --> ModalOpen[App.tsx sets isContactOpen=true]
    FormSubmit --> APIFetch[POST https://formsubmit.co/ajax/Pranavmaheshwari86@gmail.com]
    APIFetch -->|Success| Confetti[Trigger canvas-confetti particle effect]
    APIFetch -->|Success| Reset[Reset Form Inputs & Close Modal]
    APIFetch -->|Error| ErrorBanner[Render inline error message]
    SocialClick --> TabOpen[Open target=_blank with rel=noopener]
```
