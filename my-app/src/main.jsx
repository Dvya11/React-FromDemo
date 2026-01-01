import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegistrationForm from './state_exercise.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationForm />
  </StrictMode>,
)
