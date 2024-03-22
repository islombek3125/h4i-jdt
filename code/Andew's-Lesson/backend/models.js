const pool = require('./db')

exports.getAll = async () => {
    const { rows } = await pool.query(`SELECT * FROM tweets`)
    return rows
}

exports.create =  async({username, content, created_at}) => {
    const {rows} = await pool.query(
        `INSERT NTO tweets (username, content, created_at)
        VALUES ($1, $2, $3) RETURNING *`, [username,content,created_at]

    );
    return rows[0]

}

exports.deletePostByID = async (id) => {
    const {rows} = await pool.query (`DELETE FROM tweets`)
}