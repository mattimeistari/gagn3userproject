import bcrypt
from createConnection import createConnection
from createUser import createUser


def main():

    # create a database connection
    conn = createConnection("./db/users.db")
    with conn:
        # create a new user
        email = input("Enter your email address: ")
        username = input("Enter your desired username: ")
        firstName = input("Enter your first name: ")
        lastName = input("Enter your last name: ")
        password = input("Enter your password: ")

        # convers pass to bytes
        bytes = password.encode("utf-8")

        # salt generation
        salt = bcrypt.gensalt()

        hash = bcrypt.hashpw(bytes, salt)

        user = (email, username, firstName, lastName, hash.decode())

        createUser(conn, user)


main()
