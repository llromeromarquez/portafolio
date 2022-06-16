import Layout from "../components/Layout"
import {skills, experiences, projects} from '../profile'
import Link from 'next/link';


const index = () => (
  <Layout>
    {/** Header Card   mb-2 mb-lg-0 */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/leonelrome.jpg" alt="" className="img-fluid rounded-circle" style={{width:'60%'}} />
            </div>
            <div className="col-md-8">
              <h1>Leonel Romero</h1>
              <h3>Full Stack Developer</h3>
              <h5 className = "text-primary"></h5> 
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** 2da section **/}

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(({ title, descripcion, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} - {to}
                  </h5>
                  <p>{descripcion}</p>
                </li>
              ))}
            </ul>
        {/*    <Link href="/experiences">
              <a className="btn btn-light">Know More</a>
              </Link> */}
          </div>
        </div>
      </div>
    </div>

     {/** Section Portfolio */}

     <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>
            {projects.map(({ name, descripcion, image }, i) => (
              <div className="col-md-6 p-4" key={i}>
                <div className="card h-100">
                  <div className="overflow ">
                    <img src={`/${image}`} alt="" className="card-img-top"/>
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{descripcion}</p>
               {/*     <Link href="#!">
                      <a>Know More</a>
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
        {/*    <Link href="/portfolio">
              <a className="btn btn-outline-light">More Projects</a>
            </Link> */}
          </div>
        </div>
      </div>
    </div> 
  </Layout>
); 
export default index;