import { React } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import portrait from '../assets/images/Portrait.png';
import htmlLogo from '../assets/images/html-logo.png';
import cssLogo from '../assets/images/css-logo.png';
import jsLogo from '../assets/images/jsLogo.png';
import nodejsLogo from '../assets/images/nodejsLogo.png';
import expressjsLogo from '../assets/images/expressjsLogo.png';
import mysqlLogo from '../assets/images/mysql-logo.png';
import mongoDbLogo from '../assets/images/mongoDB-logo.png';
import reactLogo from '../assets/images/reactLogo.png';
import badge from '../assets/images/coding-bootcamp-full-stack-developer-certificate.1.png';

export default function Home() {
  return (
    <div>
      <div>
        <title>Moisés Valerin Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </div>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <div className='text-center p-10 font-Arimo'>
            <h2 className='text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-teal-800 md:text-6xl'>
              Moisés Valerin
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl'>
              Full-Stack Web Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
              I recently earned a certificate in Full Stack web development from
              the University of Utah, and I am looking to put my skills to use
              in a professional setting. Feel welcome to contact me to find out
              more about my services.
            </p>
          </div>
          <div className='text-5xl flex justify-center'>
            <a
              href='https://www.linkedin.com/in/moises-valerin-876ba6242/'
              target='_blank'
              rel='noopener noreferrer'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-teal-200 mr-4 cursor-pointer'
            >
              <AiFillLinkedin />
            </a>
            <a
              href='https://github.com/eatmorevegetabl'
              target='_blank'
              rel='noopener noreferrer'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-teal-200 mr-4 cursor-pointer'
            >
              <AiFillGithub />
            </a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <img
              src={portrait}
              alt={'Portrait of site creator'}
              layout='fill'
              object-fit='cover'
              style={{ position: 'absolute', top: '9px', right: '14px' }}
            />
          </div>
        </section>

        <section className='mt-14' id='skills'>
          <div className='font-Arimo'>
            <h3 className='text-2xl py-2 md:text-3xl'>Skill Set</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto'>
              I am certified by the University of Utah to have demonstrated
              working knowledge of{' '}
              <span className='text-sky-500'>
                {' '}
                HTML5, CSS3, JavaScript, Node.js, Express.js, MySQL, MongoDB{' '}
              </span>{' '}
              and <span className='text-sky-500'>React</span>. Additional skills
              include,{' '}
              <span className='text-sky-500'>
                Bootstrap, Git, Github, Heroku, JQuery, SEO, Responsive Design,
                API/JSON, RESTful API,{' '}
              </span>
              and
              <span className='text-sky-500'> Quality Assurance Testing</span>.
            </p>
          </div>
          <div className='lg:flex gap-5'>
            <div className='flex items-center flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10 justify-around hover:shadow-black'>
                <a
                  href='https://www.credly.com/badges/cc6479a0-2b31-4f5b-9ec8-e7e8c8f871d0/public_url'
                  target={'_blank'}
                  rel='noopener noreferrer'
                >
                  <img
                    src={badge}
                    alt={'badge'}
                    width={130}
                    className='rounded-lg object-cover cursor-pointer mx-auto'
                  />
                </a>
              </div>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10 items-center'>
                <img
                  src={htmlLogo}
                  alt={'html logo'}
                  width={100}
                  className='rounded-lg object-cover mx-auto'
                />
              </div>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10'>
                <img
                  src={cssLogo}
                  alt={'css logo'}
                  width={100}
                  className='rounded-lg object-cover mx-auto'
                />
              </div>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10'>
                <img
                  src={jsLogo}
                  alt={'Javascript logo'}
                  width={100}
                  className='rounded-lg object-cover mx-auto'
                />
              </div>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10'>
                <img
                  src={nodejsLogo}
                  alt={'Node.js logo'}
                  width={100}
                  className='rounded-lg object-cover mx-auto'
                />
              </div>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10 '>
                <img
                  src={expressjsLogo}
                  alt={'express.js logo'}
                  width={200}
                  className='rounded-lg object-cover mx-auto'
                />
              </div>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10'>
                <img
                  src={mysqlLogo}
                  alt={'mySQL logo'}
                  width={100}
                  className='rounded-lg object-cover mx-auto'
                />
              </div>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10'>
                <img
                  src={mongoDbLogo}
                  alt={'MongoDB logo'}
                  width={200}
                  className='rounded-lg object-cover mx-auto'
                />
              </div>
              <div className='basis-1/3 flex-1 shadow-lg p-5 rounded-xl my-10 justify-around'>
                <img
                  src={reactLogo}
                  alt={'React.js logo'}
                  width={100}
                  className='rounded-lg object-cover mx-auto'
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
          </div>
        </section> */}
      </main>
    </div>
  );
}
