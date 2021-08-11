import axios from 'axios'
import Layout from '../../components/layout/Layout';


function Laliga({ data }) {
    console.log('data Laliga :', data)

    return (
        <Layout>
            Laliga
        </Layout>
    )
}


export const getServerSideProps = async () => {
    const res = await axios.get(`https://api.football-data.org/v2/competitions/PD/matches?status=FINISHED`, {
        headers: { 'X-Auth-Token': '24574cf932a34d28b394c721600f5471' }
    })
    const data = res.data

    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: { data }
    }
}

export default Laliga