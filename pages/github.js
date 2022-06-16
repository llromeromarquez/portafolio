import Layout from "../components/Layout";
import Error from './_error';
import Link from 'next/link';

const github = ({user, statusCode}) => {
 
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
                    <a href={user.html_url} target="_blank" className ="btn my-2"> Ir a Github</a>

                </div>

            </div>
        </div>
    </Layout> 
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/llromeromarquez");

  const statusCode = res.status > 200 ? res.status : false;

  const data = await res.json();

  return {

      props : {
        user: data,
        statusCode 
      }

  };
}
export default github;
