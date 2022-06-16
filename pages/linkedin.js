import Layout from "../components/Layout";
import Error from './_error';


const linkedin = ({user, statusCode}) => {
 
  if (statusCode) {

    return <Error statusCode =  {statusCode} />
  }
  
  return (
 
    <Layout footer = {false} dark>
        <div className="row">|
            <div className="col-md-4 offset-md-4">
                <div className="card card-body text-center">
                    <h1>{user.name}</h1>
                    <img src={user.avatar_url} alt="" />
                    <p>{user.bio}</p>
                    <a href={user.html_url} target="_blank" className ="btn my-2"> Ir a LinkedIn</a>

                </div>

            </div>
        </div>
    </Layout> 
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://linkedin.com/in/leonel-romero-2378091a");

  console.log(res);

  
  const statusCode = res.status > 200 ? res.status : false;

  const data = await res.json();

  return {

      props : {
        user: data,
        statusCode 
      }

  };
}
export default linkedin;
