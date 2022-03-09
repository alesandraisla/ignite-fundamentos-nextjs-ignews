// Dando acesso ao banco de dados
// as operacores de consulta
//no banco devem ser feitas dentro das apis
// ou por dentro dos métodos getStaticProps ou getServerSideProps
//pois n sao acessiveis no usuario final (browser)
import { Client } from 'faunadb'

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY,
})