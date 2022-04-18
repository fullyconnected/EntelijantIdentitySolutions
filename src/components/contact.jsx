import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_c71tud7', 'template_r4ln919', e.target, 'entelijant'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a target="_blank" href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={props.data ? props.data.telegram : '/'}>
                      <i className='fa fa-telegram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram: '/'}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>

            <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/e/2PACX-1vSUymePd2YHnSjSwO2sOiZfZ7hZgEWVWbGXjqyPVnCD5jjJU36TWRfUXlgkE1akjQ/pub' rel='nofollow'>
              Disclaimer
            </a>
          |
            <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/e/2PACX-1vSYGGYQvhjfltME6-bElYAqloCIlHx17JhNiz8OGNXQvY0HbXBUUt8oDiW9Tryc6g/pub' rel='nofollow'>
              Privacy Policy
            </a>
            |
            <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/e/2PACX-1vRmdeLCDgX910IOhpNR0LURgFCvwvyZyht6vUWE4FXoCa5g3GCyg4SCR7aM1tkZ_g/pub' rel='nofollow'>
              EULA
            </a>
            |
            <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/e/2PACX-1vR4ZX1ogyIp_QBojE5OcZjIvC9c4LvStfN4M0pAyk3xLCZ7a4k-w3lALfp9uviisA/pub' rel='nofollow'>
              Cookies Policy
            </a>
            |
            <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/e/2PACX-1vT6SW3RWv4VAXj_2eFntjTpjuA85PldmO_EI_YGrp6n9wLNsZNcqQJ-kYvZr_bg7Q/pub' rel='nofollow'>
              Terms & Conditions
            </a>
            |
            <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/e/2PACX-1vQJfRT8AM4lZqgIQqGdNf62JG4fXujdWEq1A-p_zKZEDBt5NhQ_jDJea812wJvmIQ/pub' rel='nofollow'>
              GDPR
            </a>
            |
            <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/e/2PACX-1vT8P1t8q2t4ie7mLMX-TZFHAE_JJKBKe52lf_iPm-CziL6ZscqfoTUKZ0IyuwWrOg/pub' rel='nofollow'>
              Refund Policy
            </a>
          </p>
          <p>
            &copy; 2022 Entelijant Identity Solutions
            <a href='http://www.entelijant.io' rel='nofollow'>

            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
