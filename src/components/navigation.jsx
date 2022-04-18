export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>



          </a>{' '}

        </div>



        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>













            <li>
              <a href='#about' className='page-scroll'>
                About Us
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Mission
              </a>
            </li>

            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
         {/*   <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>*/}
            <li>
            {/*  <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>*/}
            </li>
            <li>
              <a target="_blank" href='https://github.com/entelijant' className='page-scroll'>
                Audits
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <a target="_blank" href='https://help.entelijant.io/hc/en-us' className='page-scroll'>
                Support
              </a>
            </li>
            <li>
              <a target="_blank" href='https://medium.com/@entelijant' className='page-scroll'>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
