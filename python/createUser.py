def createUser(conn, user):

    sql = """INSERT INTO users (email, username, firstName, lastName, password) VALUES (?, ?, ?, ?, ?)"""

    cur = conn.cursor()
    cur.execute(sql, user)
    conn.commit()
    return cur.lastrowid
