import Layout from '../components/Layout'

const _error = ( {statusCode} ) => {

        return (

            <Layout>
                {
                    statusCode ? (

                        <p className = "text-center">Could Not load your page : status Code {statusCode} </p>
       
                    ) : (
                        <p className = "text-center">Cound not get this page  </p>
                    )
                }
            </Layout>
        )
}

export default _error;